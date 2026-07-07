import { createSupabaseServerClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('whop_membership_id')
    .eq('id', user.id)
    .single()

  const { data: sub } = await supabase
    .from('subscriptions')
    .select('status, current_period_end')
    .eq('user_id', user.id)
    .single()

  const s: React.CSSProperties = {
    minHeight: '100vh',
    background: '#0A0B0E',
    fontFamily: "'IBM Plex Sans', sans-serif",
    color: '#F0EBE0',
  }

  return (
    <div style={s}>
      {/* Nav */}
      <nav style={{
        background: 'rgba(10,11,14,0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(200,169,110,0.12)',
        padding: '0 32px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#C8A96E',
        }}>
          Crypto<span style={{color:'rgba(240,235,224,0.45)',fontWeight:300}}>Codex</span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'24px'}}>
          <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'11px',color:'rgba(240,235,224,0.4)'}}>
            {user.email}
          </span>
          <form action="/api/auth/signout" method="POST">
            <button type="submit" style={{
              fontFamily:"'IBM Plex Mono',monospace",
              fontSize:'11px',
              color:'rgba(240,235,224,0.4)',
              background:'none',
              border:'none',
              cursor:'pointer',
              letterSpacing:'0.08em',
            }}>Sign out</button>
          </form>
        </div>
      </nav>

      {/* Content */}
      <div style={{maxWidth:'1000px',margin:'0 auto',padding:'64px 32px'}}>
        <div style={{
          fontFamily:"'IBM Plex Mono',monospace",
          fontSize:'10px',
          fontWeight:600,
          letterSpacing:'0.2em',
          textTransform:'uppercase',
          color:'#C8A96E',
          marginBottom:'12px',
        }}>Member Dashboard</div>

        <h1 style={{
          fontFamily:"'DM Serif Display',serif",
          fontSize:'clamp(36px,5vw,56px)',
          fontWeight:400,
          letterSpacing:'-0.02em',
          marginBottom:'48px',
        }}>Welcome back.</h1>

        {/* Status card */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
          gap:'1px',
          background:'rgba(200,169,110,0.12)',
          border:'1px solid rgba(200,169,110,0.12)',
          marginBottom:'48px',
        }}>
          <div style={{background:'#111318',padding:'32px'}}>
            <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'10px',letterSpacing:'0.14em',textTransform:'uppercase',color:'rgba(240,235,224,0.4)',marginBottom:'12px'}}>Membership</div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{width:'6px',height:'6px',borderRadius:'50%',background:sub?.status==='active'?'#6DBE8C':'#D97070',boxShadow:`0 0 6px ${sub?.status==='active'?'#6DBE8C':'#D97070'}`}}></div>
              <span style={{fontFamily:"'DM Serif Display',serif",fontSize:'22px',textTransform:'capitalize'}}>{sub?.status ?? 'Inactive'}</span>
            </div>
            {sub?.current_period_end && (
              <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'11px',color:'rgba(240,235,224,0.35)',marginTop:'8px'}}>
                Renews {new Date(sub.current_period_end).toLocaleDateString()}
              </div>
            )}
          </div>

          <div style={{background:'#111318',padding:'32px'}}>
            <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'10px',letterSpacing:'0.14em',textTransform:'uppercase',color:'rgba(240,235,224,0.4)',marginBottom:'12px'}}>Discord Community</div>
            {sub?.status === 'active' ? (
              <a
                href={process.env.NEXT_PUBLIC_DISCORD_URL ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:'inline-flex',
                  alignItems:'center',
                  gap:'8px',
                  background:'#C8A96E',
                  color:'#0A0B0E',
                  fontFamily:"'IBM Plex Mono',monospace",
                  fontSize:'12px',
                  fontWeight:600,
                  letterSpacing:'0.08em',
                  textTransform:'uppercase',
                  padding:'12px 24px',
                  textDecoration:'none',
                }}
              >
                Join Discord →
              </a>
            ) : (
              <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'12px',color:'rgba(240,235,224,0.4)'}}>
                Discord access unlocks with an active membership.
              </div>
            )}
          </div>
        </div>

        {/* Content sections */}
        <div style={{
          fontFamily:"'IBM Plex Mono',monospace",
          fontSize:'10px',
          fontWeight:600,
          letterSpacing:'0.2em',
          textTransform:'uppercase',
          color:'rgba(240,235,224,0.3)',
          marginBottom:'24px',
          borderTop:'1px solid rgba(200,169,110,0.1)',
          paddingTop:'48px',
        }}>Members-Only Content</div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',
          gap:'1px',
          background:'rgba(200,169,110,0.08)',
          border:'1px solid rgba(200,169,110,0.08)',
        }}>
          {[
            { title: 'Advanced Chart Patterns', desc: 'Deep-dive pattern recognition with real trade setups.', tag: 'Module 04' },
            { title: 'Indicators & Oscillators', desc: 'RSI, MACD, Bollinger Bands — when to use and when to ignore.', tag: 'Module 05' },
            { title: 'Risk Management System', desc: 'Position sizing, R:R ratios, and portfolio drawdown rules.', tag: 'Module 06' },
            { title: 'Trading Psychology', desc: 'Managing fear, greed, and FOMO with a rules-based approach.', tag: 'Module 07' },
            { title: 'DeFi & On-Chain Mastery', desc: 'Reading whale wallets, exchange flows, and MVRV signals.', tag: 'Module 08' },
            { title: 'Live Trade Reviews', desc: 'Weekly breakdowns of real trades — entries, exits, lessons.', tag: 'Ongoing' },
          ].map((item) => (
            <div key={item.tag} style={{background:'#111318',padding:'32px',cursor:'pointer',transition:'background 0.2s'}}>
              <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'10px',color:'rgba(240,235,224,0.3)',marginBottom:'12px',letterSpacing:'0.12em'}}>{item.tag}</div>
              <h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:'20px',fontWeight:400,color:'#F0EBE0',marginBottom:'10px'}}>{item.title}</h3>
              <p style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'12px',color:'rgba(240,235,224,0.45)',lineHeight:1.8}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
