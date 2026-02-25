import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { userId, email } = await req.json()

  // Create or retrieve Stripe customer
  let customerId: string
  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('stripe_customer_id')
    .eq('id', userId)
    .single()

  if (profile?.stripe_customer_id) {
    customerId = profile.stripe_customer_id
  } else {
    const customer = await stripe.customers.create({ email, metadata: { supabase_uid: userId } })
    customerId = customer.id
    await supabaseAdmin.from('profiles').upsert({ id: userId, email, stripe_customer_id: customerId })
  }

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID!,
        quantity: 1,
      },
    ],
    // $1 for first month via a coupon applied at checkout
    discounts: process.env.STRIPE_INTRO_COUPON_ID
      ? [{ coupon: process.env.STRIPE_INTRO_COUPON_ID }]
      : undefined,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/signup`,
    metadata: { supabase_uid: userId },
  })

  return NextResponse.json({ url: session.url })
}
