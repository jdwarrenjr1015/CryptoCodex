// First-touch marketing attribution, captured client-side from UTM query
// params and read back at signup so we know which video/platform converted.

const STORAGE_KEY = 'cc_attribution'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

export type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>> & {
  landing_path?: string
}

export function captureAttribution() {
  if (typeof window === 'undefined') return
  if (localStorage.getItem(STORAGE_KEY)) return // first touch wins

  const params = new URLSearchParams(window.location.search)
  const attribution: Attribution = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) attribution[key] = value
  }

  if (Object.keys(attribution).length === 0) return

  attribution.landing_path = window.location.pathname
  localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution))
}

export function getAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}
