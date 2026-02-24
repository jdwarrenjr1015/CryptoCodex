require('dotenv').config();

const express  = require('express');
const cors     = require('cors');
const multer   = require('multer');
const Anthropic = require('@anthropic-ai/sdk');
const path     = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ─────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname)));   // serve index.html + assets

// ─── File upload (in-memory, max 20 MB) ────────────────────────────────────────
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 20 * 1024 * 1024 },
    fileFilter(req, file, cb) {
        if (file.mimetype.startsWith('image/')) cb(null, true);
        else cb(new Error('Only image files are accepted'));
    }
});

// ─── Anthropic client ──────────────────────────────────────────────────────────
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ─── Gemologist prompt ─────────────────────────────────────────────────────────
const PROMPT = `You are a certified gemologist and mineralogist with 20+ years of experience at the Gemological Institute. Carefully examine this photograph and identify the gem, crystal, or mineral shown.

Respond ONLY with valid JSON — no text before or after — using exactly this structure:

{
  "name": "most common name for this specimen",
  "scientificName": "mineralogical or scientific name",
  "formula": "chemical formula (e.g. SiO₂)",
  "confidence": "High, Medium, or Low",
  "description": "2–3 sentences describing what you observe in the photograph including visible characteristics",
  "properties": {
    "color": "precise color description",
    "luster": "metallic / vitreous / resinous / silky / pearly / adamantine / earthy / etc",
    "transparency": "transparent / translucent / opaque",
    "hardness": "X.X on the Mohs scale"
  },
  "priceRange": {
    "low": <integer USD>,
    "high": <integer USD>,
    "unit": "per specimen / per gram / per carat",
    "notes": "brief note on what drives price variation for this stone"
  },
  "origin": "countries or regions where this specimen is most commonly found",
  "identifyingFeatures": [
    "feature 1 visible in this photo",
    "feature 2 visible in this photo",
    "feature 3 visible in this photo"
  ],
  "careInstructions": "one sentence on how to clean or store this specimen"
}

If you cannot clearly identify a gem or crystal in the image, return:
{
  "error": "Cannot identify a gem or crystal in this image.",
  "suggestion": "For best results, photograph the specimen on a plain white or dark background with good lighting from the side to reveal luster and translucency."
}`;

// ─── Analysis endpoint ─────────────────────────────────────────────────────────
app.post('/analyze', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No image file provided.' });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
        return res.status(500).json({ error: 'ANTHROPIC_API_KEY is not configured on the server.' });
    }

    const imageB64  = req.file.buffer.toString('base64');
    const mediaType = req.file.mimetype;   // e.g. "image/jpeg"

    try {
        const message = await anthropic.messages.create({
            model: 'claude-sonnet-4-6',
            max_tokens: 1024,
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'image',
                            source: {
                                type: 'base64',
                                media_type: mediaType,
                                data: imageB64,
                            },
                        },
                        {
                            type: 'text',
                            text: PROMPT,
                        },
                    ],
                },
            ],
        });

        const raw = message.content[0].text.trim();

        // Extract JSON even if Claude wraps it in a code block
        const jsonMatch = raw.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            console.error('Unexpected Claude response:', raw);
            return res.status(500).json({ error: 'Could not parse AI response. Please try again.' });
        }

        const result = JSON.parse(jsonMatch[0]);
        res.json(result);

    } catch (err) {
        console.error('Anthropic API error:', err.message);
        const status = err.status || 500;
        res.status(status).json({ error: err.message || 'Analysis failed. Please try again.' });
    }
});

// ─── Health check ──────────────────────────────────────────────────────────────
app.get('/health', (req, res) => res.json({ status: 'ok', model: 'claude-sonnet-4-6' }));

// ─── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`\n  GemSight server running at http://localhost:${PORT}\n`);
    if (!process.env.ANTHROPIC_API_KEY) {
        console.warn('  ⚠  ANTHROPIC_API_KEY is not set — add it to your .env file\n');
    }
});
