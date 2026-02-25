'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password })

    if (loginError) {
      setError(loginError.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
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
        }}>Member login</h1>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '12px',
          color: 'rgba(240,235,224,0.45)',
          marginBottom: '32px',
        }}>Access your CryptoCodex dashboard.</p>

        <form onSubmit={handleLogin}>
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
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>
        </form>

        <p style={{
          marginTop: '24px',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '11px',
          color: 'rgba(240,235,224,0.3)',
          textAlign: 'center' as const,
        }}>
          Not a member?{' '}
          <Link href="/signup" style={{color: '#C8A96E', textDecoration: 'none'}}>
            Join for $1
          </Link>
        </p>
      </div>
    </div>
  )
}
