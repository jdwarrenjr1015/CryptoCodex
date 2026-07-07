// Stripe checkout removed — payment processing now handled by Whop.
// New route: /api/whop/checkout
// This file is safe to delete.
import { NextResponse } from 'next/server'
export async function POST() {
  return NextResponse.json({ error: 'Stripe checkout has been replaced by Whop. Use /api/whop/checkout.' }, { status: 410 })
}
