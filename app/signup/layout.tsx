import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join CryptoCodex — $1 First Month',
  alternates: {
    canonical: '/signup',
  },
}

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children
}
