import { NextRequest, NextResponse } from 'next/server'
import { whopsdk } from '@/lib/whop'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const headers = Object.fromEntries(req.headers)

  let event: ReturnType<typeof whopsdk.webhooks.unwrap>
  try {
    event = whopsdk.webhooks.unwrap(rawBody, { headers })
  } catch (err) {
    console.error('[whop/webhook] Signature verification failed', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  switch (event.type) {
    case 'membership.activated': {
      const membership = event.data
      const supabaseUid = (membership.metadata as { supabase_uid?: string } | null)?.supabase_uid

      if (!supabaseUid) {
        console.warn('[whop/webhook] membership.activated — no supabase_uid in metadata', membership.id)
        break
      }

      const { error: profileError } = await supabaseAdmin
        .from('profiles')
        .upsert({
          id: supabaseUid,
          whop_membership_id: membership.id,
          whop_user_id: membership.user?.id ?? null,
        })

      if (profileError) {
        console.error('[whop/webhook] Failed to upsert profile for user', supabaseUid, profileError)
        return NextResponse.json({ error: 'Failed to upsert profile' }, { status: 500 })
      }

      const { error: subscriptionError } = await supabaseAdmin.from('subscriptions').upsert(
        {
          user_id: supabaseUid,
          status: 'active',
          current_period_end: membership.renewal_period_end ?? null,
          whop_membership_id: membership.id,
        },
        { onConflict: 'user_id' }
      )

      if (subscriptionError) {
        console.error('[whop/webhook] Failed to upsert subscription for user', supabaseUid, subscriptionError)
        return NextResponse.json({ error: 'Failed to upsert subscription' }, { status: 500 })
      }

      console.log('[whop/webhook] Activated subscription for user', supabaseUid)
      break
    }

    case 'membership.deactivated': {
      const membership = event.data
      const supabaseUid = (membership.metadata as { supabase_uid?: string } | null)?.supabase_uid

      let targetUserId = supabaseUid

      if (!targetUserId) {
        const { data: profile, error: lookupError } = await supabaseAdmin
          .from('profiles')
          .select('id')
          .eq('whop_membership_id', membership.id)
          .single()

        if (lookupError || !profile) {
          console.warn('[whop/webhook] membership.deactivated — could not find user for', membership.id, lookupError)
          break
        }

        targetUserId = profile.id
      }

      const { error: cancelError } = await supabaseAdmin
        .from('subscriptions')
        .update({ status: 'canceled' })
        .eq('user_id', targetUserId)

      if (cancelError) {
        console.error('[whop/webhook] Failed to cancel subscription for user', targetUserId, cancelError)
        return NextResponse.json({ error: 'Failed to cancel subscription' }, { status: 500 })
      }

      console.log('[whop/webhook] Cancelled subscription for user', targetUserId)
      break
    }

    default:
      console.log('[whop/webhook] Unhandled event:', event.type)
  }

  return NextResponse.json({ received: true })
}
