// Whop API client
// Docs: https://docs.whop.com/developer/api/getting-started

import { Whop } from '@whop/sdk'

export const whopsdk = new Whop({
  apiKey: process.env.WHOP_API_KEY,
  webhookKey: btoa(process.env.WHOP_WEBHOOK_SECRET || ''),
})

/**
 * Create a Whop checkout configuration for an existing plan.
 * Returns a purchase_url to redirect the user to.
 */
export async function createWhopCheckout({
  planId,
  redirectUrl,
  metadata,
}: {
  planId: string
  redirectUrl: string
  metadata?: Record<string, string>
}) {
  const checkout = await whopsdk.checkoutConfigurations.create({
    plan_id: planId,
    redirect_url: redirectUrl,
    metadata: metadata ?? {},
  })

  return checkout
}
