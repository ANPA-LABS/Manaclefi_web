'use client'

import React from 'react'

const TILE = 180

// ── Static stock data (mirrors stockData.ts for web) ────────────────────────
const STOCK_DATA: Record<string, { name: string; price: string; change: string; up: boolean; img: string; spark: number[] }> = {
  GOGL: { name: 'Google',  price: '$178.40', change: '+1.4%', up: true,  img: '/stock/gogl.png', spark: [165,168,172,170,175,174,178,176,179,178] },
  TSLA: { name: 'Tesla',   price: '$391.97', change: '+2.8%', up: true,  img: '/stock/tsla.png', spark: [370,375,381,377,383,378,374,371,378,392] },
  AMZN: { name: 'Amazon',  price: '$268.43', change: '-0.3%', up: false, img: '/stock/amaz.jpg', spark: [271,268,271,268,270,266,269,266,268,268] },
  SOL:  { name: 'Solana',  price: '$148.20', change: '+5.2%', up: true,  img: '/stock/sol.jpg',  spark: [120,128,125,135,132,140,138,144,146,148] },
}

// ── Green/Red gradient palettes ──────────────────────────────────────────────
const GREEN = ['#22c068','#0a1a10']
const RED   = ['#e84040','#1a0808']

// ── Spark SVG ────────────────────────────────────────────────────────────────
function Spark({ data, up, w }: { data: number[]; up: boolean; w: number }) {
  const H = 48
  const min = Math.min(...data), max = Math.max(...data), rng = max - min || 1
  const pts = data.map((v, i) => ({
    x: (i / (data.length - 1)) * w,
    y: H - 4 - ((v - min) / rng) * (H - 10),
  }))
  let line = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const cx = (pts[i-1].x + pts[i].x) / 2
    line += ` C ${cx} ${pts[i-1].y} ${cx} ${pts[i].y} ${pts[i].x} ${pts[i].y}`
  }
  const c = up ? '#4ade80' : '#ef4444'
  const last = pts[pts.length - 1]
  const id = `g${up ? 'u' : 'd'}${w}`
  return (
    <svg width={w} height={H} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c} stopOpacity="0.18" />
          <stop offset="1" stopColor={c} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L ${w} ${H} L 0 ${H} Z`} fill={`url(#${id})`} />
      <path d={line} stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last.x} cy={last.y} r={3} fill={c} />
    </svg>
  )
}

// ── Component ────────────────────────────────────────────────────────────────
interface Props { ticker: string }

export default function StockCardSingle({ ticker }: Props) {
  const stock = STOCK_DATA[ticker] ?? STOCK_DATA['GOGL']
  const [g0, g1] = stock.up ? GREEN : RED

  return (
    <div style={{
      width: TILE, height: TILE, borderRadius: 20,
      background: `linear-gradient(to bottom, ${g0}, ${g1})`,
      padding: 14, boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          backgroundColor: '#2a2a2a', overflow: 'hidden', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src={stock.img} alt={ticker} style={{ width: 38, height: 38, objectFit: 'cover', display: 'block' }} />
        </div>
        <div>
          <div style={{ color: '#fff', fontSize: 16, fontWeight: 700, letterSpacing: -0.2 }}>{stock.name}</div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10, marginTop: 1 }}>{ticker}</div>
        </div>
      </div>

      <div style={{ margin: '4px -14px' }}>
        <Spark data={stock.spark} up={stock.up} w={TILE + 28} />
      </div>

      <div>
        <div style={{ color: '#fff', fontSize: 22, fontWeight: 900, letterSpacing: -1 }}>{stock.price}</div>
        <div style={{ color: stock.up ? '#4ade80' : '#ef4444', fontSize: 12, fontWeight: 700, marginTop: 2 }}>
          {stock.up ? '▲' : '▼'} {stock.change}
        </div>
      </div>
    </div>
  )
}

// ── Usage example ─────────────────────────────────────────────────────────────
// <StockCardSingle ticker="AMZN" />
// <StockCardSingle ticker="TSLA" />
// <StockCardSingle ticker="GOGL" />
// <StockCardSingle ticker="NVDA" />