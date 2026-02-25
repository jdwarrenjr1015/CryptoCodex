import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'
import { generateDiscordInvite } from '@/lib/discord'

export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Check active subscription
  const { data: sub } = await supabase
    .from('subscriptions')
    .select('status')
    .eq('user_id', user.id)
    .single()

  if (!sub || sub.status !== 'active') {
    return NextResponse.json({ error: 'No active subscription' }, { status: 403 })
  }

  // Return cached invite if exists
  const { data: profile } = await supabase
    .from('profiles')
    .select('discord_invite')
    .eq('id', user.id)
    .single()

  if (profile?.discord_invite) {
    return NextResponse.json({ url: profile.discord_invite })
  }

  // Generate a fresh one
  const url = await generateDiscordInvite()
  await supabase.from('profiles').update({ discord_invite: url }).eq('id', user.id)
  return NextResponse.json({ url })
}
