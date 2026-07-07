import { NextRequest, NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { supabaseAdmin } from '@/lib/supabase'

// Verify Whop's HMAC-SHA256 signature
function verifyWhopWebhook(rawBody: string, signature: string, secret: string): boolean {
  const expected = createHmac('sha256', secret).update(rawBody).digest('hex')
  const expectedBuf = Buffer.from(expected, 'hex')

  let signatureBuf: Buffer
  try {
    signatureBuf = Buffer.from(signature, 'hex')
  } catch {
    return false
  }

  if (expectedBuf.length !== signatureBuf.length) return false
  return timingSafeEqual(expectedBuf, signatureBuf)
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const signature = req.headers.get('x-whop-signature') ?? ''

  if (!verifyWhopWebhook(rawBody, signature, process.env.WHOP_WEBHOOK_SECRET!)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const event = JSON.parse(rawBody) as {
    action: string
    data: {
      id: string
      user?: { id: string; email?: string }
      renewal_period_start?: number
      renewal_period_end?: number
      metadata?: { supabase_uid?: string }
    }
  }

  const membership = event.data
  const supabaseUid = membership.metadata?.supabase_uid

  switch (event.action) {
    case 'membership.went_valid': {
      // Payment succeeded — activate subscription in Supabase
      if (!supabaseUid) {
        console.warn('[whop/webhook] membership.went_valid — no supabase_uid in metadata', membership.id)
        break
      }

      // Store the Whop membership ID on the user's profile
      await supabaseAdmin
        .from('profiles')
        .upsert({
          id: supabaseUid,
          whop_membership_id: membership.id,
          whop_user_id: membership.user?.id ?? null,
        })

      // Upsert the active subscription row
      await supabaseAdmin.from('subscriptions').upsert({
        user_id: supabaseUid,
        status: 'active',
        current_period_start: membership.renewal_period_start
          ? new Date(membership.renewal_period_start * 1000).toISOString()
          : null,
        current_period_end: membership.renewal_period_end
          ? new Date(membership.renewal_period_end * 1000).toISOString()
          : null,
        whop_membership_id: membership.id,
      })

      console.log('[whop/webhook] Activated subscription for user', supabaseUid)
      break
    }

    case 'membership.went_invalid': {
      // Subscription cancelled or payment failed — deactivate
      if (!supabaseUid) {
        // Fall back to looking up by membership ID
        const { data: profile } = await supabaseAdmin
          .from('profiles')
          .select('id')
          .eq('whop_membership_id', membership.id)
          .single()

        if (!profile) {
          console.warn('[whop/webhook] membership.went_invalid — could not find user for', membership.id)
          break
        }

        await supabaseAdmin
          .from('subscriptions')
          .update({ status: 'canceled' })
          .eq('user_id', profile.id)

        console.log('[whop/webhook] Cancelled subscription for profile', profile.id)
        break
      }

      await supabaseAdmin
        .from('subscriptions')
        .update({ status: 'canceled' })
        .eq('user_id', supabaseUid)

      console.log('[whop/webhook] Cancelled subscription for user', supabaseUid)
      break
    }

    default:
      // Unhandled event — log and return 200 so Whop doesn't retry
      console.log('[whop/webhook] Unhandled event:', event.action)
  }

  return NextResponse.json({ received: true })
}
