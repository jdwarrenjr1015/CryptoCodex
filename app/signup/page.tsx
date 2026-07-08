'use client'

import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import Link from 'next/link'

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signupError) {
      setError(signupError.message)
      setLoading(false)
      return
    }

    // Redirect to Whop checkout
    const res = await fetch('/api/whop/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
    const { url } = await res.json()
    if (url) window.location.href = url
    else setError('Failed to create checkout session.')
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0B0E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '48px 40px',
        background: '#111318',
        border: '1px solid rgba(200,169,110,0.12)',
      }}>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase' as const,
          color: '#C8A96E',
          marginBottom: '32px',
        }}>
          Crypto<span style={{color:'rgba(240,235,224,0.45)',fontWeight:300}}>Codex</span>
        </div>

        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: '28px',
          fontWeight: 400,
          color: '#F0EBE0',
          marginBottom: '8px',
        }}>Create your account</h1>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '12px',
          color: 'rgba(240,235,224,0.45)',
          marginBottom: '32px',
          lineHeight: 1.8,
        }}>$1 for your first month, then $25/mo. Cancel anytime.</p>

        <form onSubmit={handleSignup}>
          <div style={{marginBottom: '16px'}}>
            <label style={{
              display: 'block',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase' as const,
              color: 'rgba(240,235,224,0.45)',
              marginBottom: '8px',
            }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                background: '#181B22',
                border: '1px solid rgba(200,169,110,0.2)',
                color: '#F0EBE0',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                outline: 'none',
                boxSizing: 'border-box' as const,
              }}
            />
          </div>

          <div style={{marginBottom: '24px'}}>
            <label style={{
              display: 'block',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase' as const,
              color: 'rgba(240,235,224,0.45)',
              marginBottom: '8px',
            }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
              style={{
                width: '100%',
                padding: '12px 14px',
                background: '#181B22',
                border: '1px solid rgba(200,169,110,0.2)',
                color: '#F0EBE0',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                outline: 'none',
                boxSizing: 'border-box' as const,
              }}
            />
          </div>

          {error && (
            <p style={{
              color: '#D97070',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              marginBottom: '16px',
            }}>{error}</p>
          )}

          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '10px',
            lineHeight: 1.7,
            color: 'rgba(240,235,224,0.3)',
            marginBottom: '16px',
          }}>
            ⚠ For educational purposes only. Not financial advice. Cryptocurrency trading involves substantial risk of loss.
          </p>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: '#C8A96E',
              color: '#0A0B0E',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Processing...' : 'Join — $1 First Month →'}
          </button>
        </form>

        <p style={{
          marginTop: '24px',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '11px',
          color: 'rgba(240,235,224,0.3)',
          textAlign: 'center' as const,
        }}>
          Already a member?{' '}
          <Link href="/login" style={{color: '#C8A96E', textDecoration: 'none'}}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
