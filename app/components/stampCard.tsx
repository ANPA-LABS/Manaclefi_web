/**
 * StampCard.tsx — dynamic, pass packId as prop
 * Packs: 'bigtech' | 'highgrowth' | 'entertainment' | 'datacenter'
 */
'use client'

import React from 'react'

const DOT    = 16
const CARD_W = 350
const CARD_H = 200

// ── Bubble colours per ticker ────────────────────────────────────────────────
const TICKER_COLOR: Record<string, string> = {
  AAPL: '#6b8aff', MSFT: '#4cd98a', GOGL: '#ff7070', AMZN: '#ffb347',
  NFLX: '#b47fff', TSLA: '#ff7070', NVDA: '#4cd98a', SPOT: '#4cd98a',
  WBD:  '#ffb347', RBLX: '#b47fff', ORCL: '#ff7070', META: '#6b8aff',
  SOL:  '#9945ff', JLP:  '#19fb9b', mSOL: '#7c4dff', USDT: '#26a17b',
}

const TICKER_IMG: Record<string, string> = {
  AAPL: '/stock/aapl.png',   MSFT: '/stock/msft.png',
  GOGL: '/stock/gogl.png',   AMZN: '/stock/amaz.jpg',
  NFLX: '/stock/nflx.png',   TSLA: '/stock/tsla.png',
  NVDA: '/stock/nvidia.png', SPOT: '/stock/spot.png',
  WBD:  '/stock/wb.png',     RBLX: '/stock/roblox.png',
  ORCL: '/stock/oracle.png', META: '/stock/meta.png',
  SOL:  '/stock/sol.jpg',   JLP:  '/stock/jlp.png',  mSOL: '/stock/msol.png', USDT: '/stock/usdt.png',
}

// ── Pack definitions (from stockData.ts) ────────────────────────────────────
const PACKS: Record<string, {
  name: string; subtitle: string; change: string; up: boolean;
  tickers: { symbol: string; weight: number }[]
}> = {
  bigtech: {
    name: 'Big Tech', subtitle: '5 stocks · Updated today', change: '+2.4%', up: true,
    tickers: [
      { symbol: 'AAPL', weight: 28 },
      { symbol: 'MSFT', weight: 22 },
      { symbol: 'GOGL', weight: 20 },
      { symbol: 'AMZN', weight: 18 },
      { symbol: 'NFLX', weight: 12 },
    ],
  },
  highgrowth: {
    name: 'High Growth', subtitle: '5 stocks · Updated today', change: '+5.8%', up: true,
    tickers: [
      { symbol: 'TSLA', weight: 30 },
      { symbol: 'NVDA', weight: 25 },
      { symbol: 'SPOT', weight: 20 },
      { symbol: 'NFLX', weight: 15 },
      { symbol: 'AMZN', weight: 10 },
    ],
  },
  defi: {
    name: 'DeFi & Stable', subtitle: '4 tokens · Updated today', change: '+3.8%', up: true,
    tickers: [
      { symbol: 'USDT', weight: 10 },
      { symbol: 'mSOL', weight: 25 },
      { symbol: 'JLP',  weight: 25 },
      { symbol: 'SOL',  weight: 40 },
    ],
  },
  datacenter: {
    name: 'Data Center', subtitle: '4 stocks · Updated today', change: '+3.1%', up: true,
    tickers: [
      { symbol: 'AMZN', weight: 35 },
      { symbol: 'MSFT', weight: 30 },
      { symbol: 'ORCL', weight: 20 },
      { symbol: 'META', weight: 15 },
    ],
  },
}

// ── Dot helper ───────────────────────────────────────────────────────────────
function Dot({ style }: { style: React.CSSProperties }) {
  return (
    <div style={{
      position: 'absolute', width: DOT, height: DOT, borderRadius: DOT / 2,
      backgroundColor: '#fff', zIndex: 10, ...style,
    }} />
  )
}

// ── Component ────────────────────────────────────────────────────────────────
interface Props { packId?: string }

export default function StampCard({ packId = 'bigtech' }: Props) {
  const pack = PACKS[packId] ?? PACKS['bigtech']

  return (
    <div style={{ position: 'relative', width: CARD_W, display: 'inline-block' }}>

      {/* Card */}
      <div style={{ width: CARD_W, background: '#222121', borderRadius: 0, overflow: 'hidden', position: 'relative' }}>

        {/* Icon bubbles — marquee if >4, static if ≤4 */}
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
          .stamp-marquee { animation: marquee 6s linear infinite; }
          .stamp-marquee:hover { animation-play-state: paused; }
        `}</style>
        {pack.tickers.length > 4 ? (
          <div style={{ overflow: 'hidden', padding: '20px 0', height: 94 }}>
            <div className="stamp-marquee" style={{ display: 'flex', gap: 12, width: 'max-content', paddingLeft: 14 }}>
              {[...pack.tickers, ...pack.tickers].map((t, idx) => (
                <div key={`${t.symbol}-${idx}`} style={{ position: 'relative', flexShrink: 0 }}>
                  <div style={{
                    width: 54, height: 54, borderRadius: 14,
                    backgroundColor: '#2a2a2a', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, fontWeight: 700, color: '#fff',
                    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
                  }}>
                    {TICKER_IMG[t.symbol]
                      ? <img src={TICKER_IMG[t.symbol]} alt={t.symbol} style={{ width: 54, height: 54, objectFit: 'cover', display: 'block' }} />
                      : t.symbol[0]
                    }
                  </div>
                  <div style={{
                    position: 'absolute', bottom: -5, right: -5,
                    backgroundColor: TICKER_COLOR[t.symbol] ?? '#888',
                    borderRadius: 12, padding: '3px 7px',
                    fontSize: 11, fontWeight: 800, color: '#000', lineHeight: 1,
                  }}>
                    {t.weight}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, padding: '20px 14px', justifyContent: 'center' }}>
            {pack.tickers.map(t => (
              <div key={t.symbol} style={{ position: 'relative' }}>
                <div style={{
                  width: 54, height: 54, borderRadius: 14,
                  backgroundColor: '#2a2a2a', overflow: 'hidden',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, fontWeight: 700, color: '#fff',
                  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
                }}>
                  {TICKER_IMG[t.symbol]
                    ? <img src={TICKER_IMG[t.symbol]} alt={t.symbol} style={{ width: 54, height: 54, objectFit: 'cover', display: 'block' }} />
                    : t.symbol[0]
                  }
                </div>
                <div style={{
                  position: 'absolute', bottom: -5, right: -5,
                  backgroundColor: TICKER_COLOR[t.symbol] ?? '#888',
                  borderRadius: 12, padding: '3px 7px',
                  fontSize: 11, fontWeight: 800, color: '#000', lineHeight: 1,
                }}>
                  {t.weight}%
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.08)' }} />

        {/* Info row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: 20, fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        }}>
          <div>
            <div style={{ color: '#fff', fontSize: 18, fontWeight: 800, letterSpacing: -0.3 }}>{pack.name}</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginTop: 2 }}>{pack.subtitle}</div>
          </div>
          <div style={{
            backgroundColor: pack.up ? 'rgba(74,222,128,0.2)' : 'rgba(248,113,113,0.2)',
            borderRadius: 20, padding: '4px 10px',
          }}>
            <span style={{ color: pack.up ? '#4ade80' : '#f87171', fontSize: 12, fontWeight: 800 }}>
              {pack.up ? '▲' : '▼'} {pack.change}
            </span>
          </div>
        </div>
      </div>

      {/* Stamp dots */}
      {Array.from({ length: 12 }, (_, i) => <Dot key={`t${i}`} style={{ top: -DOT/2, left: (CARD_W/11)*i - DOT/2 }} />)}
      {Array.from({ length: 12 }, (_, i) => <Dot key={`b${i}`} style={{ bottom: -DOT/2, left: (CARD_W/11)*i - DOT/2 }} />)}
      {Array.from({ length: 8  }, (_, i) => <Dot key={`l${i}`} style={{ left: -DOT/2, top: (CARD_H/7)*i - DOT/2 }} />)}
      {Array.from({ length: 8  }, (_, i) => <Dot key={`r${i}`} style={{ right: -DOT/2, top: (CARD_H/7)*i - DOT/2 }} />)}
    </div>
  )
}

// ── Usage ─────────────────────────────────────────────────────────────────────
// <StampCard packId="bigtech" />
// <StampCard packId="highgrowth" />
// <StampCard packId="entertainment" />
// <StampCard packId="datacenter" />