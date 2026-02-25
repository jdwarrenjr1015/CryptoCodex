import Link from 'next/link'

export default function Home() {
  return (
    <>

  {/* TICKER TAPE */}
  <div className="ticker-wrap" aria-hidden="true">
    <div className="ticker-inner">
      {/* duplicated for seamless loop */}
      <div className="ticker-item"><span className="sym">BTC/USD</span> 67,420.50 <span className="up">▲ 2.34%</span></div>
      <div className="ticker-item"><span className="sym">ETH/USD</span> 3,512.80 <span className="up">▲ 1.87%</span></div>
      <div className="ticker-item"><span className="sym">SOL/USD</span> 182.40 <span className="dn">▼ 0.92%</span></div>
      <div className="ticker-item"><span className="sym">BNB/USD</span> 598.20 <span className="up">▲ 0.64%</span></div>
      <div className="ticker-item"><span className="sym">XRP/USD</span> 0.5840 <span className="dn">▼ 1.23%</span></div>
      <div className="ticker-item"><span className="sym">ADA/USD</span> 0.4920 <span className="up">▲ 3.11%</span></div>
      <div className="ticker-item"><span className="sym">AVAX/USD</span> 36.80 <span className="dn">▼ 0.45%</span></div>
      <div className="ticker-item"><span className="sym">DOGE/USD</span> 0.1640 <span className="up">▲ 5.22%</span></div>
      <div className="ticker-item"><span className="sym">LINK/USD</span> 14.20 <span className="up">▲ 1.09%</span></div>
      <div className="ticker-item"><span className="sym">MATIC/USD</span> 0.8540 <span className="dn">▼ 2.17%</span></div>
      {/* duplicate */}
      <div className="ticker-item"><span className="sym">BTC/USD</span> 67,420.50 <span className="up">▲ 2.34%</span></div>
      <div className="ticker-item"><span className="sym">ETH/USD</span> 3,512.80 <span className="up">▲ 1.87%</span></div>
      <div className="ticker-item"><span className="sym">SOL/USD</span> 182.40 <span className="dn">▼ 0.92%</span></div>
      <div className="ticker-item"><span className="sym">BNB/USD</span> 598.20 <span className="up">▲ 0.64%</span></div>
      <div className="ticker-item"><span className="sym">XRP/USD</span> 0.5840 <span className="dn">▼ 1.23%</span></div>
      <div className="ticker-item"><span className="sym">ADA/USD</span> 0.4920 <span className="up">▲ 3.11%</span></div>
      <div className="ticker-item"><span className="sym">AVAX/USD</span> 36.80 <span className="dn">▼ 0.45%</span></div>
      <div className="ticker-item"><span className="sym">DOGE/USD</span> 0.1640 <span className="up">▲ 5.22%</span></div>
      <div className="ticker-item"><span className="sym">LINK/USD</span> 14.20 <span className="up">▲ 1.09%</span></div>
      <div className="ticker-item"><span className="sym">MATIC/USD</span> 0.8540 <span className="dn">▼ 2.17%</span></div>
    </div>
  </div>

  {/* NAV */}
  <nav>
    <div className="nav-inner">
      <div className="logo">Crypto<span>Codex</span></div>
      <ul className="nav-links">
        <li><a href="#concepts">Concepts</a></li>
        <li><a href="#charts">Charts</a></li>
        <li><a href="#patterns">Patterns</a></li>
        <li><a href="#glossary">Glossary</a></li>
        <li><a href="#learn">Curriculum</a></li>
        <li><a href="#tools">Tools</a></li>
      </ul>
      <a href="/signup" className="nav-cta">Join — $1 First Month →</a>
    </div>
  </nav>

  {/* HERO */}
  <section className="hero" id="home">
    <div className="hero-bg"></div>

    {/* Background SVG chart */}
    <svg className="hero-chart" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polyline points="0,250 60,200 100,220 150,150 200,180 260,100 300,130 360,80 400,110 450,60 500,90 560,40 600,70" stroke="#C8A96E" strokeWidth="1.5" fill="none"/>
      <polyline points="0,250 60,200 100,220 150,150 200,180 260,100 300,130 360,80 400,110 450,60 500,90 560,40 600,70" stroke="#C8A96E" strokeWidth="16" fill="none" opacity="0.04"/>
      <line x1="0" y1="150" x2="600" y2="150" stroke="#C8A96E" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.3"/>
      <line x1="0" y1="100" x2="600" y2="100" stroke="#C8A96E" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2"/>
      <line x1="0" y1="200" x2="600" y2="200" stroke="#C8A96E" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2"/>
    </svg>

    <div className="hero-content">
      <div className="hero-tag">Live Markets · Education Platform</div>

      <h1>
        Trade with<br />
        <em>precision</em> &<br />
        conviction.
      </h1>

      <p className="hero-sub">
        Master crypto trading from first principles. Charts, patterns, risk management, and market psychology — all in one structured curriculum.
      </p>

      <div className="hero-actions">
        <a href="/signup" className="btn-primary">
          Join — $1 First Month
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <a href="#concepts" className="btn-ghost">
          Explore Concepts
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>

      <div className="hero-stats">
        <div>
          <div className="hero-stat-num">48</div>
          <div className="hero-stat-label">Lessons</div>
        </div>
        <div>
          <div className="hero-stat-num">12</div>
          <div className="hero-stat-label">Modules</div>
        </div>
        <div>
          <div className="hero-stat-num">30+</div>
          <div className="hero-stat-label">Chart Patterns</div>
        </div>
        <div>
          <div className="hero-stat-num">200+</div>
          <div className="hero-stat-label">Terms Defined</div>
        </div>
      </div>
    </div>
  </section>

  {/* CONCEPTS */}
  <section id="concepts">
    <div className="section-inner">
      <div className="section-label">01 — Core Concepts</div>
      <h2 className="section-title">The foundations every trader must <em>master</em></h2>
      <div className="divider"></div>
      <p className="section-desc">Before touching a chart, understand the rails that crypto runs on. These concepts form the bedrock of every trade you'll ever make.</p>

      <div className="concepts-grid">
        <div className="concept-card" tabIndex={0}>
          <div className="concept-num">01</div>
          <div className="concept-icon">₿</div>
          <h3>Blockchain</h3>
          <p>A distributed ledger that records transactions across thousands of nodes. Immutable, transparent, and censorship-resistant by design.</p>
          <span className="concept-tag beginner">Beginner</span>
        </div>
        <div className="concept-card" tabIndex={0}>
          <div className="concept-num">02</div>
          <div className="concept-icon">🔑</div>
          <h3>Wallets & Keys</h3>
          <p>Your private key is your identity. Public keys are your address. Losing your private key means losing your assets — permanently.</p>
          <span className="concept-tag beginner">Beginner</span>
        </div>
        <div className="concept-card" tabIndex={0}>
          <div className="concept-num">03</div>
          <div className="concept-icon">⚡</div>
          <h3>Market Orders</h3>
          <p>Market vs. limit vs. stop orders. Understanding execution types is the difference between getting filled at your price or the market's price.</p>
          <span className="concept-tag beginner">Beginner</span>
        </div>
        <div className="concept-card" tabIndex={0}>
          <div className="concept-num">04</div>
          <div className="concept-icon">📊</div>
          <h3>Liquidity & Spreads</h3>
          <p>Thin markets move violently. The bid-ask spread reveals real transaction cost. Trading illiquid pairs is a tax on impatience.</p>
          <span className="concept-tag intermediate">Intermediate</span>
        </div>
        <div className="concept-card" tabIndex={0}>
          <div className="concept-num">05</div>
          <div className="concept-icon">⚖️</div>
          <h3>Leverage & Margin</h3>
          <p>Leverage amplifies both gains and losses. A 10x position liquidates at a 10% move against you. Understand before you use.</p>
          <span className="concept-tag intermediate">Intermediate</span>
        </div>
        <div className="concept-card" tabIndex={0}>
          <div className="concept-num">06</div>
          <div className="concept-icon">🔄</div>
          <h3>DeFi & DEXs</h3>
          <p>Decentralized exchanges use automated market makers (AMMs) instead of order books. Liquidity pools, impermanent loss, and slippage explained.</p>
          <span className="concept-tag intermediate">Intermediate</span>
        </div>
        <div className="concept-card" tabIndex={0}>
          <div className="concept-num">07</div>
          <div className="concept-icon">📉</div>
          <h3>Derivatives</h3>
          <p>Futures, options, and perpetual contracts. Derivatives let you speculate on price without holding the underlying asset.</p>
          <span className="concept-tag advanced">Advanced</span>
        </div>
        <div className="concept-card" tabIndex={0}>
          <div className="concept-num">08</div>
          <div className="concept-icon">🧠</div>
          <h3>On-Chain Analysis</h3>
          <p>Blockchain data is public. Whale wallets, exchange flows, MVRV ratio, and realized cap give an edge that price alone cannot.</p>
          <span className="concept-tag advanced">Advanced</span>
        </div>
      </div>
    </div>
  </section>

  {/* CHARTS */}
  <section id="charts">
    <div className="section-inner">
      <div className="section-label">02 — Reading Charts</div>
      <h2 className="section-title">Candlesticks tell the <em>full story</em></h2>
      <div className="divider"></div>

      <div className="charts-layout">
        <div>
          <div className="candle-demo">
            <div className="candle-demo-label">BTC/USD · 4H · Sample Data</div>
            <div className="candle-chart">
              {/* Candles: each column = upper-wick + body + lower-wick as flex column */}
              <div className="candle-col candle-dn" style={{justifyContent:"center",gap:0}}>
                <div className="wick" style={{height:'24px'}}></div>
                <div className="candle-body" style={{height:'32px'}}></div>
                <div className="wick" style={{height:'10px'}}></div>
              </div>
              <div className="candle-col candle-up" style={{justifyContent:"center",gap:0}}>
                <div className="wick" style={{height:'16px'}}></div>
                <div className="candle-body" style={{height:'42px'}}></div>
                <div className="wick" style={{height:'8px'}}></div>
              </div>
              <div className="candle-col candle-dn" style={{justifyContent:"center",gap:0}}>
                <div className="wick" style={{height:'20px'}}></div>
                <div className="candle-body" style={{height:'24px'}}></div>
                <div className="wick" style={{height:'14px'}}></div>
              </div>
              <div className="candle-col candle-up" style={{justifyContent:"center",gap:0}}>
                <div className="wick" style={{height:'10px'}}></div>
                <div className="candle-body" style={{height:'56px'}}></div>
                <div className="wick" style={{height:'6px'}}></div>
              </div>
              <div className="candle-col candle-up" style={{justifyContent:"center",gap:0}}>
                <div className="wick" style={{height:'28px'}}></div>
                <div className="candle-body" style={{height:'38px'}}></div>
                <div className="wick" style={{height:'12px'}}></div>
              </div>
              <div className="candle-col candle-dn" style={{justifyContent:"center",gap:0}}>
                <div className="wick" style={{height:'14px'}}></div>
                <div className="candle-body" style={{height:'18px'}}></div>
                <div className="wick" style={{height:'18px'}}></div>
              </div>
              <div className="candle-col candle-up" style={{justifyContent:"center",gap:0}}>
                <div className="wick" style={{height:'8px'}}></div>
                <div className="candle-body" style={{height:'64px'}}></div>
                <div className="wick" style={{height:'10px'}}></div>
              </div>
              <div className="candle-col candle-up" style={{justifyContent:"center",gap:0}}>
                <div className="wick" style={{height:'32px'}}></div>
                <div className="candle-body" style={{height:'44px'}}></div>
                <div className="wick" style={{height:'8px'}}></div>
              </div>
            </div>
            <div className="candle-legend">
              <div className="legend-item"><div className="legend-dot up"></div>Bullish (close &gt; open)</div>
              <div className="legend-item"><div className="legend-dot dn"></div>Bearish (close &lt; open)</div>
            </div>
          </div>
        </div>

        <div className="chart-explainer">
          <div className="explainer-item" tabIndex={0}>
            <h4>The Body</h4>
            <p>The thick rectangle. Represents the range between open and close price. Green = price rose. Red = price fell. Larger body = stronger conviction from buyers or sellers.</p>
          </div>
          <div className="explainer-item" tabIndex={0}>
            <h4>The Wicks (Shadows)</h4>
            <p>Thin lines above and below the body. Upper wick = how high price traded before being rejected. Lower wick = how low price dipped before recovering. Long wicks signal rejection.</p>
          </div>
          <div className="explainer-item" tabIndex={0}>
            <h4>Open & Close</h4>
            <p>The open is where price was at the start of the period. Close is where it ended. These two prices define the body and are the most significant reference points on any candle.</p>
          </div>
          <div className="explainer-item" tabIndex={0}>
            <h4>Timeframes</h4>
            <p>Each candle represents one time period: 1m, 5m, 15m, 1H, 4H, 1D, 1W. Higher timeframes filter noise. Lower timeframes show detail. Align your analysis across multiple timeframes.</p>
          </div>
          <div className="explainer-item" tabIndex={0}>
            <h4>Volume</h4>
            <p>Price moves on high volume are significant. Price moves on low volume are suspect. Always read candlestick patterns in context of the volume bars beneath them.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* PATTERNS */}
  <section id="patterns">
    <div className="section-inner">
      <div className="section-label">03 — Chart Patterns</div>
      <h2 className="section-title">Recognize what the market is <em>signaling</em></h2>
      <div className="divider"></div>
      <p className="section-desc">Patterns don't predict the future — they define high-probability scenarios with clear entry, stop, and target levels.</p>

      <div className="patterns-grid">
        <div className="pattern-card" tabIndex={0}>
          <div className="pattern-viz">
            <div className="pv-bar dn" style={{height:'30px'}}></div>
            <div className="pv-bar dn" style={{height:'22px'}}></div>
            <div className="pv-bar up" style={{height:'38px'}}></div>
            <div className="pv-bar up" style={{height:'44px'}}></div>
          </div>
          <div className="pattern-signal signal-bullish">Bullish</div>
          <h4>Bullish Engulfing</h4>
          <p>A large green candle fully engulfs the prior red candle. Signals reversal after a downtrend. High probability at key support levels.</p>
        </div>
        <div className="pattern-card" tabIndex={0}>
          <div className="pattern-viz">
            <div className="pv-bar up" style={{height:'38px'}}></div>
            <div className="pv-bar up" style={{height:'44px'}}></div>
            <div className="pv-bar dn" style={{height:'32px'}}></div>
            <div className="pv-bar dn" style={{height:'24px'}}></div>
          </div>
          <div className="pattern-signal signal-bearish">Bearish</div>
          <h4>Bearish Engulfing</h4>
          <p>A large red candle fully engulfs the prior green candle. Reversal signal after an uptrend. Watch for this at resistance zones.</p>
        </div>
        <div className="pattern-card" tabIndex={0}>
          <div className="pattern-viz">
            <div className="pv-bar dn" style={{height:'40px'}}></div>
            <div className="pv-bar dn" style={{height:'28px'}}></div>
            <div className="pv-bar up" style={{height:'14px'}}></div>
            <div className="pv-bar up" style={{height:'44px'}}></div>
          </div>
          <div className="pattern-signal signal-bullish">Bullish</div>
          <h4>Morning Star</h4>
          <p>Three-candle reversal: large red, small indecisive body, large green. The "star" is the small middle candle representing equilibrium.</p>
        </div>
        <div className="pattern-card" tabIndex={0}>
          <div className="pattern-viz">
            <div className="pv-bar up" style={{height:'44px'}}></div>
            <div className="pv-bar up" style={{height:'28px'}}></div>
            <div className="pv-bar dn" style={{height:'14px'}}></div>
            <div className="pv-bar dn" style={{height:'40px'}}></div>
          </div>
          <div className="pattern-signal signal-bearish">Bearish</div>
          <h4>Evening Star</h4>
          <p>The bearish mirror of Morning Star. Signals exhaustion at the top. Most reliable when the small middle candle gaps above the first.</p>
        </div>
        <div className="pattern-card" tabIndex={0}>
          <div className="pattern-viz">
            <div className="pv-bar dn" style={{height:'42px'}}></div>
            <div className="pv-bar dn" style={{height:'38px'}}></div>
            <div className="pv-bar up" style={{height:'8px'}}></div>
            <div className="pv-bar up" style={{height:'44px'}}></div>
          </div>
          <div className="pattern-signal signal-bullish">Bullish</div>
          <h4>Hammer</h4>
          <p>Small body at top, long lower wick. Shows sellers pushed price down but buyers drove it back up. Stronger at defined support.</p>
        </div>
        <div className="pattern-card" tabIndex={0}>
          <div className="pattern-viz">
            <div className="pv-bar up" style={{height:'36px'}}></div>
            <div className="pv-bar up" style={{height:'42px'}}></div>
            <div className="pv-bar up" style={{height:'10px'}}></div>
            <div className="pv-bar dn" style={{height:'36px'}}></div>
          </div>
          <div className="pattern-signal signal-bearish">Bearish</div>
          <h4>Shooting Star</h4>
          <p>Small body at bottom, long upper wick. Buyers pushed price up but sellers rejected it. Powerful reversal at resistance with high volume.</p>
        </div>
        <div className="pattern-card" tabIndex={0}>
          <div className="pattern-viz">
            <div className="pv-bar up" style={{height:'32px'}}></div>
            <div className="pv-bar up" style={{height:'38px'}}></div>
            <div className="pv-bar up" style={{height:'36px'}}></div>
            <div className="pv-bar up" style={{height:'40px'}}></div>
          </div>
          <div className="pattern-signal signal-bullish">Bullish</div>
          <h4>Three White Soldiers</h4>
          <p>Three consecutive large green candles each closing near the high. Strong momentum signal. Confirms after a period of consolidation.</p>
        </div>
        <div className="pattern-card" tabIndex={0}>
          <div className="pattern-viz">
            <div className="pv-bar up" style={{height:'36px'}}></div>
            <div className="pv-bar up" style={{height:'28px'}}></div>
            <div className="pv-bar dn" style={{height:'20px'}}></div>
            <div className="pv-bar dn" style={{height:'16px'}}></div>
          </div>
          <div className="pattern-signal signal-neutral">Neutral</div>
          <h4>Doji</h4>
          <p>Open and close are nearly identical. Represents perfect indecision. Context determines meaning — at support, bullish; at resistance, bearish.</p>
        </div>
      </div>
    </div>
  </section>

  {/* GLOSSARY */}
  <section id="glossary">
    <div className="section-inner">
      <div className="section-label">04 — Glossary</div>
      <h2 className="section-title">The language of <em>markets</em></h2>
      <div className="divider"></div>

      <div className="glossary-layout">
        <div className="glossary-index">
          <div className="section-label" style={{marginBottom:"8px"}}>Quick Nav</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
            <span className="glossary-letter">ATH</span><span className="glossary-letter">Bear</span>
            <span className="glossary-letter">Bull</span><span className="glossary-letter">CEX</span>
            <span className="glossary-letter">DEX</span><span className="glossary-letter">DYOR</span>
            <span className="glossary-letter">FOMO</span><span className="glossary-letter">FUD</span>
            <span className="glossary-letter">HODLing</span><span className="glossary-letter">ICO</span>
            <span className="glossary-letter">L1/L2</span><span className="glossary-letter">Liquidity</span>
            <span className="glossary-letter">MACD</span><span className="glossary-letter">RSI</span>
            <span className="glossary-letter">Slippage</span><span className="glossary-letter">WAGMI</span>
          </div>
        </div>

        <dl className="glossary-entries">
          <div className="glossary-term">
            <dt>ATH / ATL</dt>
            <dd>All-Time High / All-Time Low. The highest (or lowest) price an asset has ever traded at. <strong>Key context:</strong> breaking ATH with volume is one of the strongest bullish signals.</dd>
          </div>
          <div className="glossary-term">
            <dt>Bear Market</dt>
            <dd>A prolonged downtrend, typically defined as a 20%+ decline from recent highs. Crypto bear markets often see 70–90% drawdowns from peak.</dd>
          </div>
          <div className="glossary-term">
            <dt>Bull Market</dt>
            <dd>Sustained upward price momentum. Characterized by rising highs and higher lows. <strong>Key trait:</strong> dips get bought aggressively.</dd>
          </div>
          <div className="glossary-term">
            <dt>CEX vs DEX</dt>
            <dd>Centralized Exchange (Coinbase, Binance) vs Decentralized Exchange (Uniswap, dYdX). CEX requires KYC and holds your funds. DEX is non-custodial and on-chain.</dd>
          </div>
          <div className="glossary-term">
            <dt>DYOR</dt>
            <dd>"Do Your Own Research." The foundational principle of crypto. Never invest based solely on influencer calls or social media hype.</dd>
          </div>
          <div className="glossary-term">
            <dt>FOMO</dt>
            <dd>Fear Of Missing Out. The emotional state that drives buying tops. <strong>Warning signal:</strong> when normies ask what to buy, you're probably near a top.</dd>
          </div>
          <div className="glossary-term">
            <dt>FUD</dt>
            <dd>Fear, Uncertainty, Doubt. Negative sentiment — often spread to suppress price. Distinguishing legitimate concern from coordinated FUD is a critical skill.</dd>
          </div>
          <div className="glossary-term">
            <dt>Liquidation</dt>
            <dd>When a leveraged position is forcibly closed by the exchange because losses have consumed the margin. At 10x leverage, a 10% move liquidates you.</dd>
          </div>
          <div className="glossary-term">
            <dt>MACD</dt>
            <dd>Moving Average Convergence Divergence. A momentum indicator that shows the relationship between two EMAs. Signal line crossovers indicate potential trend shifts.</dd>
          </div>
          <div className="glossary-term">
            <dt>RSI</dt>
            <dd>Relative Strength Index (0–100). Above 70 = overbought, below 30 = oversold. <strong>Key insight:</strong> RSI divergence (price vs RSI trend diverging) often precedes reversals.</dd>
          </div>
          <div className="glossary-term">
            <dt>Slippage</dt>
            <dd>The difference between expected execution price and actual execution price. Higher in low-liquidity markets. Set slippage tolerance on DEXs carefully — high tolerance enables sandwich attacks.</dd>
          </div>
          <div className="glossary-term">
            <dt>Support & Resistance</dt>
            <dd>Price levels where buying (support) or selling (resistance) pressure historically concentrates. Once broken, a resistance level becomes support, and vice versa.</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  {/* CURRICULUM */}
  <section id="learn">
    <div className="section-inner">
      <div className="section-label">05 — Curriculum</div>
      <h2 className="section-title">A structured path from <em>zero to trader</em></h2>
      <div className="divider"></div>

      <div className="curriculum-layout">
        <div className="curriculum-sidebar">
          <svg className="progress-ring" viewBox="0 0 100 100" aria-label="Progress: 2 of 12 modules complete">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(200,169,110,0.1)" strokeWidth="4"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#C8A96E" strokeWidth="4" strokeLinecap="round" strokeDasharray="263.9" strokeDashoffset="220" transform="rotate(-90 50 50)"/>
            <text x="50" y="46" textAnchor="middle" fontFamily="DM Serif Display,serif" fontSize="22" fill="#F0EBE0">2</text>
            <text x="50" y="60" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="rgba(240,235,224,0.45)" letterSpacing="0.1em">OF 12</text>
          </svg>

          <h3>Your Learning Path</h3>
          <p>Each module builds on the last. Complete in order for best results. Estimated 20–30 min per module.</p>
        </div>

        <div className="modules">
          <div className="module">
            <div className="module-header" tabIndex={0} role="button" aria-expanded="true">
              <div className="module-num">01</div>
              <div className="module-title">Crypto Fundamentals</div>
              <div className="module-badge badge-done">Complete</div>
            </div>
            <div className="module-lessons">
              <div className="lesson-item"><div className="lesson-check done">✓</div>What is Bitcoin?</div>
              <div className="lesson-item"><div className="lesson-check done">✓</div>How Blockchain Works</div>
              <div className="lesson-item"><div className="lesson-check done">✓</div>Wallets, Keys, Addresses</div>
              <div className="lesson-item"><div className="lesson-check done">✓</div>Buying Your First Crypto</div>
            </div>
          </div>

          <div className="module">
            <div className="module-header" tabIndex={0} role="button" aria-expanded="true">
              <div className="module-num">02</div>
              <div className="module-title">Market Structure</div>
              <div className="module-badge badge-done">Complete</div>
            </div>
            <div className="module-lessons">
              <div className="lesson-item"><div className="lesson-check done">✓</div>Order Books Explained</div>
              <div className="lesson-item"><div className="lesson-check done">✓</div>Market vs Limit Orders</div>
              <div className="lesson-item"><div className="lesson-check done">✓</div>Bid-Ask Spread & Fees</div>
            </div>
          </div>

          <div className="module">
            <div className="module-header" tabIndex={0} role="button" aria-expanded="true">
              <div className="module-num">03</div>
              <div className="module-title">Technical Analysis Basics</div>
              <div className="module-badge badge-active">In Progress</div>
            </div>
            <div className="module-lessons">
              <div className="lesson-item"><div className="lesson-check done">✓</div>Reading Candlestick Charts</div>
              <div className="lesson-item"><div className="lesson-check"></div>Support & Resistance Levels</div>
              <div className="lesson-item"><div className="lesson-check"></div>Trend Lines & Channels</div>
              <div className="lesson-item"><div className="lesson-check"></div>Volume Analysis</div>
            </div>
          </div>

          <div className="module">
            <div className="module-header" tabIndex={0} role="button">
              <div className="module-num">04</div>
              <div className="module-title">Candlestick Patterns</div>
              <div className="module-badge badge-lock">Locked</div>
            </div>
          </div>

          <div className="module">
            <div className="module-header" tabIndex={0} role="button">
              <div className="module-num">05</div>
              <div className="module-title">Indicators & Oscillators</div>
              <div className="module-badge badge-lock">Locked</div>
            </div>
          </div>

          <div className="module">
            <div className="module-header" tabIndex={0} role="button">
              <div className="module-num">06</div>
              <div className="module-title">Risk Management</div>
              <div className="module-badge badge-lock">Locked</div>
            </div>
          </div>

          <div className="module">
            <div className="module-header" tabIndex={0} role="button">
              <div className="module-num">07</div>
              <div className="module-title">Trading Psychology</div>
              <div className="module-badge badge-lock">Locked</div>
            </div>
          </div>

          <div className="module">
            <div className="module-header" tabIndex={0} role="button">
              <div className="module-num">08</div>
              <div className="module-title">DeFi & On-Chain Analysis</div>
              <div className="module-badge badge-lock">Locked</div>
            </div>
          </div>

          <div className="module">
            <div className="module-header" tabIndex={0} role="button">
              <div className="module-num">09–12</div>
              <div className="module-title">Advanced Strategies</div>
              <div className="module-badge badge-lock">Locked</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* TOOLS */}
  <section id="tools">
    <div className="section-inner">
      <div className="section-label">06 — Essential Tools</div>
      <h2 className="section-title">The trader's <em>toolkit</em></h2>
      <div className="divider"></div>

      <div className="tools-grid">
        <div className="tool-card" tabIndex={0}>
          <div className="tool-name">TradingView</div>
          <div className="tool-desc">The industry standard for charting. Advanced indicators, multi-layout views, alerts, and a massive community of published ideas.</div>
          <a href="#" className="tool-link" tabIndex={0}>Learn Setup →</a>
        </div>
        <div className="tool-card" tabIndex={0}>
          <div className="tool-name">CoinGecko</div>
          <div className="tool-desc">Comprehensive market data: price, volume, market cap, fully-diluted valuation, and token supply metrics for thousands of assets.</div>
          <a href="#" className="tool-link" tabIndex={0}>Explore Data →</a>
        </div>
        <div className="tool-card" tabIndex={0}>
          <div className="tool-name">Glassnode</div>
          <div className="tool-desc">On-chain analytics platform. Track whale movements, exchange inflows/outflows, MVRV ratio, SOPR, and realized price.</div>
          <a href="#" className="tool-link" tabIndex={0}>On-Chain Guide →</a>
        </div>
        <div className="tool-card" tabIndex={0}>
          <div className="tool-name">Etherscan</div>
          <div className="tool-desc">The Ethereum block explorer. Trace any transaction, verify smart contracts, view wallet history, and track gas prices in real time.</div>
          <a href="#" className="tool-link" tabIndex={0}>Read Transactions →</a>
        </div>
        <div className="tool-card" tabIndex={0}>
          <div className="tool-name">DeFiLlama</div>
          <div className="tool-desc">Total value locked (TVL) across all DeFi protocols. Essential for understanding capital flows between chains and finding yield opportunities.</div>
          <a href="#" className="tool-link" tabIndex={0}>Track TVL →</a>
        </div>
        <div className="tool-card" tabIndex={0}>
          <div className="tool-name">Fear & Greed</div>
          <div className="tool-desc">The Crypto Fear & Greed Index aggregates volatility, momentum, social sentiment, and dominance into a single market psychology score.</div>
          <a href="#" className="tool-link" tabIndex={0}>Check Sentiment →</a>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section id="cta">
    <div className="cta-inner">
      <div className="section-label" style={{textAlign:'center',marginBottom:'var(--sp-6)'}}>Ready?</div>
      <h2>Stop watching.<br />Start <em>trading</em>.</h2>
      <p>The market doesn't wait. Every day you delay is a day of pattern recognition, risk calibration, and compounding experience you're not building.</p>
      <div className="cta-actions">
        <a href="/signup" className="btn-primary">
          Join — $1 First Month
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <a href="/login" className="btn-ghost">Member Login</a>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer>
    <div className="footer-inner">
      <div className="logo">Crypto<span>Codex</span></div>
      <ul className="footer-links">
        <li><a href="#concepts">Concepts</a></li>
        <li><a href="#charts">Charts</a></li>
        <li><a href="#glossary">Glossary</a></li>
        <li><a href="#learn">Curriculum</a></li>
        <li><a href="#tools">Tools</a></li>
      </ul>
      <div className="footer-copy">© 2025 CryptoCodex. Educational use only.</div>
    </div>
    <div className="footer-inner">
      <p className="footer-disc">⚠ Disclaimer: This platform is for educational purposes only. Nothing here constitutes financial advice. Cryptocurrency trading involves substantial risk of loss. Never invest more than you can afford to lose. Past performance does not guarantee future results.</p>
    </div>
  </footer>

    </>
  )
}
