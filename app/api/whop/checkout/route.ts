import { NextRequest, NextResponse } from 'next/server'
import { createWhopCheckout } from '@/lib/whop'
import { createSupabaseServerClient, supabaseAdmin } from '@/lib/supabase'

const ATTRIBUTION_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'landing_path'] as const

// Client-supplied attribution is untrusted: only pull known keys, coerce to
// string, and cap length so it can't be used to stuff arbitrary data into
// Supabase or Whop metadata.
function sanitizeAttribution(input: unknown): Record<string, string> {
  const out: Record<string, string> = {}
  if (!input || typeof input !== 'object') return out

  for (const key of ATTRIBUTION_KEYS) {
    const value = (input as Record<string, unknown>)[key]
    if (typeof value === 'string' && value.length > 0) {
      out[key] = value.slice(0, 200)
    }
  }
  return out
}

export async function POST(req: NextRequest) {
  // Verify caller is authenticated — derive identity from JWT, never trust request body
  const supabase = await createSupabaseServerClient()
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json().catch(() => null)
  const attribution = sanitizeAttribution(body?.attribution)

  if (Object.keys(attribution).length > 0) {
    const { error: attributionError } = await supabaseAdmin
      .from('profiles')
      .upsert({ id: user.id, ...attribution })

    if (attributionError) {
      console.error('[whop/checkout] Failed to save attribution for user', user.id, attributionError)
    }
  }

  const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`

  try {
    const checkout = await createWhopCheckout({
      planId: process.env.WHOP_PLAN_ID!,
      redirectUrl,
      metadata: {
        supabase_uid: user.id,
        ...attribution,
      },
    })

    return NextResponse.json({ url: checkout.purchase_url })
  } catch (err) {
    console.error('[whop/checkout]', err)
    return NextResponse.json({ error: 'Failed to create checkout session.' }, { status: 500 })
  }
}
