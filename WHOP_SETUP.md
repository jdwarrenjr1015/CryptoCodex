# Whop Setup Guide

## Step 1 — Create Discord Server
1. Go to discord.com → "+" → Create My Own → For a club or community
2. Name it **CryptoCodex**
3. Create channels: `#welcome`, `#announcements`, `#general`, `#trade-setups`, `#members-only`
4. Create a role called **Member**
5. Copy the server invite link (permanent) — you'll need this for `NEXT_PUBLIC_DISCORD_URL`

---

## Step 2 — Create Whop Account & Product
1. Sign up at [whop.com](https://whop.com)
2. Create a Company → name it CryptoCodex
3. Create a Product → type: **Membership**
4. Create a Plan:
   - Price: **$25/month**
   - Trial: **$1 for 1 month** (Whop calls this a "trial period" or "intro offer")
5. In the product dashboard → **Apps** → Connect your Discord server
   - Map the plan → the **Member** role you created
   - Whop will auto-grant and remove this role based on payment status

---

## Step 3 — Get API Credentials
In your Whop dashboard → **Settings → API Keys**:
- Create a new API key (keep it secret — server-side only)
- Copy the key

In your product → **Plans** → click your $25/mo plan → copy the **Plan ID** (starts with `plan_`)

In **Settings → Webhooks**:
- Add endpoint: `https://cryptocodexsystems.com/api/whop/webhook`
- Select events: `membership.went_valid`, `membership.went_invalid`
- Copy the **Webhook Secret**

---

## Step 4 — Update Environment Variables

### In `.env.local` (local dev):
```env
# Whop
WHOP_API_KEY=your_whop_api_key_here
WHOP_PLAN_ID=plan_xxxxxxxxxxxxxxxx
WHOP_WEBHOOK_SECRET=your_webhook_secret_here

# Discord (permanent invite link to your server)
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/your-invite-code

# Remove these once Whop is confirmed working:
# STRIPE_SECRET_KEY=...
# STRIPE_PRICE_ID=...
# STRIPE_INTRO_COUPON_ID=...
# STRIPE_WEBHOOK_SECRET=...
```

### In Vercel Dashboard → Project Settings → Environment Variables:
Add the same four vars above for Production, Preview, and Development environments.

---

## Step 5 — Run Supabase Migration
Open Supabase Dashboard → SQL Editor → New Query → paste contents of:
`supabase/migrations/20260706_whop_migration.sql`

Click **Run**.

---

## Step 6 — Test End-to-End
1. Run `npm run dev`
2. Go to `/signup` → create an account
3. Should redirect to Whop checkout → complete payment with a Whop test card
4. Whop fires `membership.went_valid` webhook → check Supabase `subscriptions` table for `status: active`
5. Go to `/dashboard` → should show active membership + Discord button

---

## Files Changed in This Migration
| File | Change |
|------|--------|
| `lib/whop.ts` | New — Whop API client |
| `app/api/whop/checkout/route.ts` | New — replaces `/api/stripe/checkout` |
| `app/api/whop/webhook/route.ts` | New — replaces `/api/stripe/webhook` |
| `app/signup/page.tsx` | Updated checkout API call |
| `app/dashboard/page.tsx` | Discord shows static link (Whop manages access) |
| `supabase/migrations/20260706_whop_migration.sql` | Adds whop columns to profiles + subscriptions |

### Old Stripe files
Deleted 2026-07-08 after end-to-end Whop testing confirmed signup → checkout →
webhook → dashboard → Discord access all work, including membership
deactivation. The `stripe` npm dependency and commented-out `STRIPE_*` vars
in `.env.local` were removed too.
