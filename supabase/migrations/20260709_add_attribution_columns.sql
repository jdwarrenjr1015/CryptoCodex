-- First-touch marketing attribution, captured client-side (see lib/attribution.ts)
-- and written server-side at checkout time so we can see which video/platform
-- drove each signup.

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS utm_source TEXT,
  ADD COLUMN IF NOT EXISTS utm_medium TEXT,
  ADD COLUMN IF NOT EXISTS utm_campaign TEXT,
  ADD COLUMN IF NOT EXISTS utm_content TEXT,
  ADD COLUMN IF NOT EXISTS utm_term TEXT,
  ADD COLUMN IF NOT EXISTS landing_path TEXT;
