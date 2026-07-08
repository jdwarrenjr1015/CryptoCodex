'use client'

const TICKER_ITEMS = [
  { pair: 'BTC/USD', price: '67,420.50', change: '▲ 2.34%', dir: 'up' },
  { pair: 'ETH/USD', price: '3,512.80', change: '▲ 1.87%', dir: 'up' },
  { pair: 'SOL/USD', price: '182.40', change: '▼ 0.92%', dir: 'down' },
  { pair: 'BNB/USD', price: '598.20', change: '▲ 0.64%', dir: 'up' },
  { pair: 'XRP/USD', price: '0.5840', change: '▼ 1.23%', dir: 'down' },
  { pair: 'ADA/USD', price: '0.4920', change: '▲ 3.11%', dir: 'up' },
  { pair: 'AVAX/USD', price: '36.80', change: '▼ 0.45%', dir: 'down' },
  { pair: 'DOGE/USD', price: '0.1640', change: '▲ 5.22%', dir: 'up' },
  { pair: 'LINK/USD', price: '14.20', change: '▲ 1.09%', dir: 'up' },
  { pair: 'MATIC/USD', price: '0.8540', change: '▼ 2.17%', dir: 'down' },
]

const MODULES = [
  { num: 'Module 01', title: 'Crypto Fundamentals', desc: 'Bitcoin, blockchain, wallets, keys, and how to buy your first crypto safely.', badge: 'free', active: true },
  { num: 'Module 02', title: 'Market Structure', desc: 'Order books, market vs. limit orders, bid-ask spread, and exchange fees explained.', badge: 'free', active: true },
  { num: 'Module 03', title: 'Technical Analysis', desc: 'Candlestick charts, support & resistance, trend lines, and volume analysis.', badge: 'member', active: false },
  { num: 'Module 04', title: 'Candlestick Patterns', desc: '30+ patterns that appear before major moves — bullish, bearish, and neutral setups.', badge: 'member', active: false },
  { num: 'Module 05', title: 'Indicators & Oscillators', desc: 'RSI, MACD, Bollinger Bands, and how to combine them without overfitting.', badge: 'member', active: false },
  { num: 'Module 06', title: 'Risk Management', desc: 'Position sizing, stop-loss placement, risk/reward ratios, and portfolio allocation.', badge: 'member', active: false },
  { num: 'Module 07', title: 'Trading Psychology', desc: 'FOMO, revenge trading, overconfidence — the mental game that separates winners.', badge: 'lock', active: false, locked: true },
  { num: 'Module 08', title: 'DeFi & On-Chain Analysis', desc: 'Whale wallets, exchange flows, MVRV ratio, and on-chain signals that precede moves.', badge: 'lock', active: false, locked: true },
  { num: 'Modules 09–12', title: 'Advanced Strategies', desc: 'Swing trading, scalping, derivatives, and building a repeatable trading system.', badge: 'lock', active: false, locked: true },
]

const LEARN_CARDS = [
  { icon: '📊', title: 'Read Any Chart', desc: 'Candlesticks, volume, support & resistance, trend lines, and multi-timeframe analysis — the foundation every serious trader needs.' },
  { icon: '🎯', title: 'Spot High-Probability Setups', desc: "30+ chart patterns with clear entry, stop, and target rules. Patterns don't predict — they define scenarios with defined risk." },
  { icon: '🛡️', title: 'Manage Risk Like a Pro', desc: 'Position sizing, stop-loss placement, and portfolio allocation. The only skill that keeps you in the game long enough to get good.' },
  { icon: '🧠', title: 'Control Your Psychology', desc: 'FOMO, revenge trading, loss aversion — the mental patterns that destroy accounts. Learn to trade the plan, not the emotion.' },
  { icon: '⛓️', title: 'On-Chain Analytics', desc: 'Blockchain data is public. Whale flows, exchange inflows, MVRV ratio — signals most traders never look at that give you real edge.' },
  { icon: '🔄', title: 'Understand DeFi', desc: 'AMMs, liquidity pools, impermanent loss, and DEX mechanics. The on-chain world is where the next decade of opportunity lives.' },
]

export default function StartPageContent() {
  return (
    <div className="start-page">
      {/* TICKER TAPE */}
      <div className="ticker">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div className="ticker-item" key={i}>
              <span className="ticker-pair">{item.pair}</span>
              <span className="ticker-price">{item.price}</span>
              <span className={`ticker-change ${item.dir}`}>{item.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <a href="/" className="logo">
            <div className="logo-icon">₿</div>
            <span className="logo-name">Crypto<span>Codex</span></span>
          </a>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a href="/login" className="btn btn-ghost">Sign In</a>
            <a href="/signup" className="btn btn-primary">Join — $1 First Month →</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">
          <span>📺</span> As seen on YouTube — Welcome
        </div>
        <h1 className="hero-title">Trade with<br /><span className="accent">precision</span> &amp; conviction.</h1>
        <p className="hero-sub">Master crypto trading from first principles. Charts, patterns, risk management, and market psychology — all in one structured curriculum.</p>
        <div className="hero-cta">
          <a href="/signup" className="btn btn-primary btn-lg">Join — $1 First Month →</a>
          <a href="/" className="btn btn-ghost btn-lg">Explore the Curriculum</a>
        </div>
        <p className="hero-note">$1 first month · Then $25/month · Cancel anytime</p>
      </section>

      {/* STATS BAR */}
      <div className="stats">
        <div className="stat">
          <div className="stat-num">48</div>
          <div className="stat-label">Lessons</div>
        </div>
        <div className="stat">
          <div className="stat-num">12</div>
          <div className="stat-label">Modules</div>
        </div>
        <div className="stat">
          <div className="stat-num">30+</div>
          <div className="stat-label">Chart Patterns</div>
        </div>
        <div className="stat">
          <div className="stat-num">200+</div>
          <div className="stat-label">Terms Defined</div>
        </div>
      </div>

      {/* CURRICULUM PREVIEW */}
      <section className="section">
        <p className="section-label">The Curriculum</p>
        <h2 className="section-title">A structured path from<br />zero to trader.</h2>
        <p className="section-sub">Each module builds on the last. Complete in order. Estimated 20–30 min per module.</p>
        <div className="modules">
          {MODULES.map((m) => (
            <div className={`module-card${m.active ? ' active' : ''}${m.locked ? ' locked' : ''}`} key={m.num}>
              <div className="module-num">{m.num}</div>
              <div className="module-title">{m.title}</div>
              <div className="module-desc">{m.desc}</div>
              <span className={`module-badge badge-${m.badge}`}>
                {m.badge === 'free' ? 'Free' : m.badge === 'member' ? 'Member' : 'Locked'}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* WHAT YOU'LL LEARN */}
      <section className="section">
        <p className="section-label">What You&apos;ll Master</p>
        <h2 className="section-title">Everything the self-taught<br />trader wishes they knew first.</h2>
        <p className="section-sub">Most people lose money trading because they skip the fundamentals. CryptoCodex fixes that.</p>
        <div className="learn-grid">
          {LEARN_CARDS.map((c) => (
            <div className="learn-card" key={c.title}>
              <span className="learn-icon">{c.icon}</span>
              <div className="learn-title">{c.title}</div>
              <p className="learn-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PRICING */}
      <section className="pricing-section">
        <p className="section-label" style={{ textAlign: 'center' }}>Pricing</p>
        <h2 className="section-title" style={{ textAlign: 'center', maxWidth: '480px', margin: '0 auto 16px' }}>Start for $1.<br />Cancel anytime.</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '48px' }}>No fluff. No filler. Just the curriculum, the tools, and the knowledge.</p>

        <div className="pricing-card">
          <div className="pricing-price"><sup>$</sup>25<span>/mo</span></div>
          <div className="pricing-trial">First month just $1 — no risk</div>
          <ul className="pricing-features">
            <li>Full access to all 12 modules &amp; 48 lessons</li>
            <li>30+ candlestick pattern library with trade rules</li>
            <li>200+ term glossary with practical context</li>
            <li>Risk management calculator &amp; tools</li>
            <li>On-chain analytics guides</li>
            <li>DeFi &amp; derivatives modules</li>
            <li>New content added regularly</li>
          </ul>
          <a href="/signup" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '15px' }}>Join Now — $1 First Month →</a>
          <p className="pricing-note">No contracts. Cancel anytime from your account settings.</p>
        </div>

        <div className="disclaimer" style={{ marginTop: '40px' }}>
          ⚠ This platform is for educational purposes only. Nothing here constitutes financial advice. Cryptocurrency trading involves substantial risk of loss. Never invest more than you can afford to lose. Past performance does not guarantee future results.
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-text">© 2026 CryptoCodex · Educational use only · Powered by CryptoCodex Systems</p>
        <p className="footer-text" style={{ marginTop: '8px' }}>
          <a href="/terms">Terms of Service</a>·
          <a href="/privacy">Privacy Policy</a>·
          <a href="mailto:support@cryptocodexsystems.com">Contact</a>
        </p>
      </footer>

      <style jsx>{`
        .start-page {
          --bg: #0b0e14;
          --bg-2: #0f1117;
          --bg-3: #141820;
          --border: #1e2433;
          --border-light: #252d3d;
          --text: #e8eaf0;
          --text-muted: #8892a4;
          --text-faint: #4a5568;
          --green: #00d4aa;
          --green-dim: rgba(0,212,170,0.12);
          --green-border: rgba(0,212,170,0.25);
          --red: #ff4757;
          --gold: #f0a500;
          --blue: #3b82f6;
          --radius: 6px;
          --radius-lg: 12px;
          --shadow: 0 4px 24px rgba(0,0,0,0.4);
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
          line-height: 1.6;
        }
        .start-page :global(*) { box-sizing: border-box; }

        /* Header */
        .header {
          border-bottom: 1px solid var(--border);
          background: rgba(11,14,20,0.95);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--text);
        }
        .logo-icon {
          width: 32px;
          height: 32px;
          background: var(--bg-3);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Mono', monospace;
          font-size: 14px;
          color: var(--green);
        }
        .logo-name {
          font-size: 17px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        .logo-name :global(span) { color: var(--green); }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          border-radius: var(--radius);
          cursor: pointer;
          border: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .btn-primary {
          background: var(--green);
          color: #0b0e14;
          padding: 10px 24px;
        }
        .btn-primary:hover { background: #00bfa0; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,212,170,0.3); }
        .btn-ghost {
          background: transparent;
          color: var(--text-muted);
          padding: 10px 20px;
          border: 1px solid var(--border);
        }
        .btn-ghost:hover { border-color: var(--border-light); color: var(--text); }
        .btn-lg { padding: 14px 36px; font-size: 15px; }

        /* Ticker tape */
        .ticker {
          background: var(--bg-2);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          padding: 8px 0;
        }
        .ticker-track {
          display: flex;
          gap: 40px;
          animation: ticker 30s linear infinite;
          width: max-content;
        }
        .ticker-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          white-space: nowrap;
        }
        .ticker-pair { color: var(--text-muted); }
        .ticker-price { color: var(--text); font-weight: 700; }
        .ticker-change.up { color: var(--green); }
        .ticker-change.down { color: var(--red); }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Hero */
        .hero {
          padding: 96px 32px 80px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(0,212,170,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green-dim);
          border: 1px solid var(--green-border);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          color: var(--green);
          letter-spacing: 0.02em;
          margin-bottom: 28px;
        }
        .hero-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(42px, 7vw, 72px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
          color: var(--text);
        }
        .hero-title :global(.accent) { color: var(--green); }
        .hero-sub {
          font-size: 18px;
          font-weight: 400;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto 40px;
        }
        .hero-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .hero-note {
          font-size: 12px;
          color: var(--text-faint);
        }

        /* Stats */
        .stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          padding: 40px 32px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--bg-2);
          flex-wrap: wrap;
        }
        .stat { text-align: center; }
        .stat-num {
          font-family: 'Space Mono', monospace;
          font-size: 32px;
          font-weight: 700;
          color: var(--green);
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 12px;
          color: var(--text-faint);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* Section */
        .section {
          padding: 80px 32px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 14px;
        }
        .section-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 16px;
          color: var(--text);
        }
        .section-sub {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 560px;
          margin-bottom: 56px;
        }

        /* Curriculum preview */
        .modules {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .module-card {
          background: var(--bg-2);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
          position: relative;
          overflow: hidden;
        }
        .module-card.active {
          border-color: var(--green-border);
          background: linear-gradient(135deg, var(--bg-2), rgba(0,212,170,0.04));
        }
        .module-card.locked { opacity: 0.5; }
        .module-num {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: var(--text-faint);
          margin-bottom: 10px;
        }
        .module-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .module-desc {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.55;
        }
        .module-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
        }
        .badge-free { background: var(--green-dim); color: var(--green); border: 1px solid var(--green-border); }
        .badge-member { background: rgba(240,165,0,0.12); color: var(--gold); border: 1px solid rgba(240,165,0,0.25); }
        .badge-lock { background: rgba(255,255,255,0.04); color: var(--text-faint); border: 1px solid var(--border); }

        /* What you learn */
        .learn-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .learn-card {
          background: var(--bg-2);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px;
          transition: border-color 0.2s;
        }
        .learn-card:hover { border-color: var(--border-light); }
        .learn-icon {
          font-size: 28px;
          margin-bottom: 14px;
          display: block;
        }
        .learn-title {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
          color: var(--text);
        }
        .learn-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.65;
        }

        /* Divider */
        .divider { height: 1px; background: var(--border); }

        /* Pricing */
        .pricing-section {
          padding: 80px 32px;
          text-align: center;
        }
        .pricing-card {
          background: var(--bg-2);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 48px;
          max-width: 480px;
          margin: 0 auto;
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
        }
        .pricing-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--green), transparent);
        }
        .pricing-price {
          font-family: 'Space Mono', monospace;
          font-size: 64px;
          font-weight: 700;
          color: var(--text);
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: 4px;
        }
        .pricing-price :global(sup) {
          font-size: 28px;
          vertical-align: super;
          line-height: 0;
        }
        .pricing-price :global(span) {
          font-size: 20px;
          color: var(--text-muted);
          font-weight: 400;
        }
        .pricing-trial {
          font-size: 13px;
          color: var(--green);
          font-weight: 600;
          margin-bottom: 32px;
          padding: 8px 16px;
          background: var(--green-dim);
          border-radius: var(--radius);
          display: inline-block;
        }
        .pricing-features {
          list-style: none;
          text-align: left;
          margin-bottom: 36px;
        }
        .pricing-features li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: var(--text-muted);
          padding: 10px 0;
          border-bottom: 1px solid var(--border);
          line-height: 1.5;
        }
        .pricing-features li:last-child { border-bottom: none; }
        .pricing-features li::before {
          content: '✓';
          color: var(--green);
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .pricing-note {
          font-size: 12px;
          color: var(--text-faint);
          margin-top: 16px;
        }

        /* Disclaimer */
        .disclaimer {
          background: rgba(255,71,87,0.06);
          border: 1px solid rgba(255,71,87,0.15);
          border-radius: var(--radius);
          padding: 16px 20px;
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 680px;
          margin: 0 auto 48px;
          text-align: center;
        }

        /* Footer */
        .footer {
          border-top: 1px solid var(--border);
          padding: 24px 32px;
          text-align: center;
          background: var(--bg-2);
        }
        .footer-text { font-size: 11px; color: var(--text-faint); line-height: 1.8; }
        .footer-text :global(a) { color: var(--text-faint); text-decoration: none; margin: 0 8px; }
        .footer-text :global(a:hover) { color: var(--text-muted); }

        @media (max-width: 700px) {
          .header-inner { padding: 14px 20px; }
          .hero { padding: 64px 20px 56px; }
          .section { padding: 56px 20px; }
          .modules { grid-template-columns: 1fr; }
          .learn-grid { grid-template-columns: 1fr; }
          .stats { gap: 28px; padding: 32px 20px; }
          .hero-cta { flex-direction: column; align-items: stretch; }
          .hero-cta :global(.btn) { text-align: center; }
          .pricing-card { padding: 32px 24px; }
        }
      `}</style>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
      `}</style>
    </div>
  )
}
