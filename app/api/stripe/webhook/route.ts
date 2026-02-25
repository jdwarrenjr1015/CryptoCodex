import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase'
import { generateDiscordInvite } from '@/lib/discord'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.supabase_uid
      const subscriptionId = session.subscription as string

      if (userId && subscriptionId) {
        // Activate subscription in Supabase
        const sub = await stripe.subscriptions.retrieve(subscriptionId)
        await supabaseAdmin.from('subscriptions').upsert({
          user_id: userId,
          stripe_subscription_id: subscriptionId,
          status: 'active',
          current_period_end: new Date(((sub as any).items?.data?.[0]?.current_period_end ?? 0) * 1000 || Date.now()).toISOString(),
        })

        // Generate Discord invite
        try {
          const invite = await generateDiscordInvite()
          await supabaseAdmin.from('profiles').update({ discord_invite: invite }).eq('id', userId)
        } catch (e) {
          console.error('Discord invite failed:', e)
        }
      }
      break
    }

    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription
      const { data: profile } = await supabaseAdmin
        .from('profiles')
        .select('id')
        .eq('stripe_customer_id', sub.customer as string)
        .single()

      if (profile) {
        await supabaseAdmin.from('subscriptions').update({
          status: sub.status === 'active' ? 'active' : sub.status,
          current_period_end: new Date(((sub as any).items?.data?.[0]?.current_period_end ?? 0) * 1000 || Date.now()).toISOString(),
        }).eq('stripe_subscription_id', sub.id)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      await supabaseAdmin.from('subscriptions').update({ status: 'canceled' })
        .eq('stripe_subscription_id', sub.id)
      break
    }
  }

  return NextResponse.json({ received: true })
}
