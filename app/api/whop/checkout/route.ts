import { NextRequest, NextResponse } from 'next/server'
import { createWhopCheckout } from '@/lib/whop'
import { createSupabaseServerClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  // Verify caller is authenticated — derive identity from JWT, never trust request body
  const supabase = await createSupabaseServerClient()
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`

  try {
    const checkout = await createWhopCheckout({
      planId: process.env.WHOP_PLAN_ID!,
      email: user.email!,
      redirectUrl,
      metadata: {
        supabase_uid: user.id,
      },
    })

    return NextResponse.json({ url: checkout.purchase_url })
  } catch (err) {
    console.error('[whop/checkout]', err)
    return NextResponse.json({ error: 'Failed to create checkout session.' }, { status: 500 })
  }
}
