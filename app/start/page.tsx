import type { Metadata } from 'next'
import StartPageContent from './start-content'

export const metadata: Metadata = {
  title: 'CryptoCodex — Learn to Trade Crypto with Precision',
  description:
    'Master crypto trading from first principles. Candlestick patterns, risk management, on-chain analytics, and DeFi — all in one structured curriculum. Start for $1.',
  openGraph: {
    title: 'CryptoCodex — Learn to Trade Crypto with Precision',
    description:
      '48 lessons. 12 modules. 30+ chart patterns. Structured crypto trading education — start for $1.',
    url: 'https://cryptocodexsystems.com/start',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoCodex — Learn to Trade Crypto with Precision',
    description: 'Stop guessing. Learn crypto trading from first principles. $1 first month.',
  },
}

export default function StartPage() {
  return <StartPageContent />
}
