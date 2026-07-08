# CryptoCodex — Fixes Log

*Last updated: July 2026*

---

## ✅ Completed

### Layout & SEO (`app/layout.tsx`)
- Added full Open Graph tags (`og:title`, `og:description`, `og:url`, `og:siteName`, `og:type`)
- Added Twitter card meta (`twitter:card`, `twitter:title`, `twitter:description`)
- Added inline SVG favicon (₿ icon on dark background, `#00d4aa` accent)

### Homepage (`app/page.tsx`)
- Fixed copyright year: `© 2025` → `© 2026`
- All 6 tool links changed from `href="#"` to real URLs:
  - TradingView → `tradingview.com/support/solutions/43000521013`
  - CoinGecko → `coingecko.com`
  - Glassnode → `glassnode.com`
  - Etherscan → `etherscan.io`
  - DeFiLlama → `defillama.com`
  - Fear & Greed → `alternative.me/crypto/fear-and-greed-index/`
- Added `support@cryptocodexsystems.com` to the footer links

### Checkout Security
- **Fixed critical auth gap:** the checkout route used to accept `userId` from the request body with no JWT check — any caller could pass any user's ID
- Now verifies the session server-side and derives `userId` from the authenticated user, ignoring any client-supplied value
- Returns `401 Unauthorized` if no valid session

### YouTube Landing Page (`start.html`)
- Fixed price inconsistency: `$29/month` → `$25/month` (matches `signup/page.tsx`)

### Stripe → Whop Migration
Stripe restricted the account because crypto education is a restricted category. Migrated to **Whop**, which is purpose-built for this. Fully tested end-to-end on 2026-07-08:
- Signup → Supabase auth cookie → Whop checkout session (`$1` trial → `$25/mo`, confirmed live on Whop's checkout page)
- `membership.activated` webhook → `subscriptions.status = 'active'` + `profiles.whop_membership_id`
- `membership.deactivated` webhook → `subscriptions.status = 'canceled'`, including the fallback lookup path when `supabase_uid` is missing from event metadata
- `/dashboard` middleware (`proxy.ts`) correctly gates on subscription status — active members see the dashboard + Discord link, canceled members bounce to `/signup`
- **Found and fixed a launch-blocking bug along the way:** RLS on `subscriptions`/`profiles` had no SELECT policy for the `authenticated` role, so real members would've been bounced to `/signup` immediately after paying. Fixed in `supabase/migrations/20260707_add_rls_select_policies.sql`.
- Old Stripe routes, `lib/stripe.ts`, the `stripe` npm dependency, and commented-out `STRIPE_*` env vars have all been removed.
- Added an educational-use disclaimer above the signup CTA in `signup/page.tsx` (previously only in the footer).

---

## ⏳ Pending

- Set up the actual `support@cryptocodexsystems.com` mailbox (referenced in the footer now, but not yet a live inbox)

---

## Reference Files
- `YouTube_Content_Plan.md` — full 20 long-form + 20 Shorts strategy for the CryptoCodex channel
- `start.html` — YouTube traffic landing page, use URL `cryptocodexsystems.com/start` in video descriptions
