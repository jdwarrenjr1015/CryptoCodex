import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

// Auto-increment filename
function getNextFilename(label) {
  const files = fs.existsSync(screenshotDir)
    ? fs.readdirSync(screenshotDir).filter(f => f.endsWith('.png'))
    : [];
  let max = 0;
  for (const f of files) {
    const m = f.match(/^screenshot-(\d+)/);
    if (m) max = Math.max(max, parseInt(m[1]));
  }
  const n = max + 1;
  return label
    ? `screenshot-${n}-${label}.png`
    : `screenshot-${n}.png`;
}

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const filename = getNextFilename(label);
const outPath  = path.join(screenshotDir, filename);

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: undefined, // use bundled Chromium
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Let animations settle
await new Promise(r => setTimeout(r, 800));

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${outPath}`);
