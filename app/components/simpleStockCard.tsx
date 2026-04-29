'use client'

import React from 'react'

const TILE = 180

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

const stock = {
  ticker: 'SPOT',
  name: 'Spotify',
  price: '$412.60',
  change: '+3.2%',
  up: true,
  img: '/stock/spot.png',
  spark: [370, 378, 385, 375, 390, 388, 398, 393, 400, 412],
}

export default function StockCardSingle() {
  const g0 = stock.up ? '#22c068' : '#e84040'
  const g1 = stock.up ? '#0a1a10' : '#1a0808'

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
          <img src={stock.img} alt={stock.ticker} style={{ width: 38, height: 38, objectFit: 'cover', display: 'block' }} />
        </div>
        <div>
          <div style={{ color: '#fff', fontSize: 16, fontWeight: 700, letterSpacing: -0.2 }}>{stock.name}</div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10, marginTop: 1 }}>{stock.ticker}</div>
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