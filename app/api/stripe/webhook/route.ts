// Stripe webhook removed — event handling now done by Whop.
// New route: /api/whop/webhook
// This file is safe to delete.
import { NextResponse } from 'next/server'
export async function POST() {
  return NextResponse.json({ error: 'Stripe webhook has been replaced by Whop. Use /api/whop/webhook.' }, { status: 410 })
}
