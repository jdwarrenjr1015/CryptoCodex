// Whop API client
// Docs: https://dev.whop.com/api-reference

const WHOP_API_BASE = 'https://api.whop.com/api/v2'

export async function whopFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${WHOP_API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.WHOP_API_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Whop API error ${res.status}: ${text}`)
  }

  return res.json()
}

/**
 * Create a Whop checkout session.
 * Returns a purchase_url to redirect the user to.
 */
export async function createWhopCheckout({
  planId,
  email,
  redirectUrl,
  metadata,
}: {
  planId: string
  email: string
  redirectUrl: string
  metadata?: Record<string, string>
}) {
  const data = await whopFetch('/checkout', {
    method: 'POST',
    body: JSON.stringify({
      plan: planId,
      email,
      redirect_url: redirectUrl,
      metadata: metadata ?? {},
    }),
  })

  return data as { purchase_url: string; id: string }
}
