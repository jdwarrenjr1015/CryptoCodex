-- Fix: subscriptions and profiles have RLS enabled but no SELECT policy for
-- the authenticated role, so users can never read their own row. This means
-- the /dashboard middleware (proxy.ts) always sees "no active subscription"
-- for real users and bounces them to /signup even after a successful
-- Whop payment. Found via end-to-end testing on 2026-07-07.

DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can view own subscription" ON subscriptions;
CREATE POLICY "Users can view own subscription" ON subscriptions
  FOR SELECT USING (auth.uid() = user_id);
