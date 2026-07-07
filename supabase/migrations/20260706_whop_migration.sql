-- Migrate CryptoCodex from Stripe to Whop
-- Run this in your Supabase SQL editor (Dashboard → SQL Editor → New Query)

-- 1. Add Whop columns to profiles
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS whop_membership_id TEXT,
  ADD COLUMN IF NOT EXISTS whop_user_id TEXT;

-- 2. Add Whop membership ID to subscriptions
ALTER TABLE subscriptions
  ADD COLUMN IF NOT EXISTS whop_membership_id TEXT;

-- 3. Optional: keep stripe_customer_id around until you confirm Whop is working,
--    then drop it later with:
--    ALTER TABLE profiles DROP COLUMN stripe_customer_id;

-- 4. Index for fast webhook lookups by membership ID
CREATE INDEX IF NOT EXISTS idx_profiles_whop_membership_id
  ON profiles (whop_membership_id);

CREATE INDEX IF NOT EXISTS idx_subscriptions_whop_membership_id
  ON subscriptions (whop_membership_id);
