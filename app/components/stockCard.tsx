/**
 * StockCard.tsx
 * Exact match to FinanceHomeScreen stock card stack.
 *
 * - GREEN_GRADS / RED_GRADS based on up/down
 * - gradient: top-to-bottom, cardInner borderRadius:20, padding:14
 * - stockImgBox: 38×38 borderRadius:10 bg:#2a2a2a
 * - cardName: #fff 26px 700 letterSpacing:-0.2
 * - cardSub: rgba(255,255,255,0.45) 10px
 * - sparkWrap: edge-to-edge (marginH:-14), H:48
 * - cardPrice: #fff 22px 900 letterSpacing:-1
 * - cardChg: 12px 700 up:#4ade80 dn:#ef4444
 * - Stacked: 4 cards, back cards offset -12px scale 0.95 each level
 */
'use client'

import React, { useState } from 'react'

const TILE = 180

const GREEN_GRADS = [
  ['#22c068', '#0a1a10'],
  ['#1a8a4a', '#081408'],
  ['#148040', '#060e08'],
  ['#0e6634', '#040a04'],
]
const RED_GRADS = [
  ['#e84040', '#1a0808'],
  ['#c0392b', '#140606'],
  ['#a02828', '#0e0404'],
  ['#802020', '#080202'],
]

const STOCKS = [
  { ticker: 'SPOT', name: 'Spotify',  price: '$412.60', change: '+3.2%', up: true,  img: '/stock/spot.png',  spark: [370,378,385,375,390,388,398,393,400,412] },
  { ticker: 'NFLX', name: 'Netflix',  price: '$638.20', change: '+2.4%', up: true,  img: '/stock/nflx.png',  spark: [595,602,610,598,615,622,618,630,625,638] },
  { ticker: 'AAPL', name: 'Apple',    price: '$211.45', change: '-0.8%', up: false, img: '/stock/aapl.png',  spark: [218,215,220,216,212,214,210,213,209,211] },
  { ticker: 'AMZN', name: 'Amazon',   price: '$192.80', change: '+1.1%', up: true,  img: '/stock/amaz.jpg',  spark: [182,185,188,183,190,187,193,191,196,192] },
]

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

export default function StockCard() {
  const [topIdx, setTopIdx] = useState(0)
  const N = STOCKS.length

  const handleClick = () => setTopIdx(i => (i + 1) % N)

  return (
    <div
      style={{ position: 'relative', width: TILE, height: TILE + 36, cursor: 'pointer' }}
      onClick={handleClick}
      title="Click to cycle cards"
    >
      {/* Render back-to-front so top card is last (highest z) */}
      {Array.from({ length: N }, (_, offset) => {
        const idx = (topIdx + (N - 1 - offset)) % N
        const s = STOCKS[idx]
        const layer = N - 1 - offset // 0=back, N-1=front
        const grads = s.up ? GREEN_GRADS : RED_GRADS
        const [g0, g1] = grads[idx % grads.length]
        const translateY = (N - 1 - layer) * 10
        const scale = 1 - (N - 1 - layer) * 0.04
        return (
          <div key={s.ticker} style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            zIndex: layer,
            transform: `translateY(${-translateY}px) scale(${scale})`,
            transformOrigin: 'top center',
            transition: 'transform 0.3s',
          }}>
            <div style={{
              width: TILE, height: TILE, borderRadius: 20,
              background: `linear-gradient(to bottom, ${g0}, ${g1})`,
              padding: 14, boxSizing: 'border-box',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              overflow: 'hidden',
              fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
            }}>
              {/* cardTop: row, alignItems:center, gap:10 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {/* stockImgBox: 38×38 borderRadius:10 bg:#2a2a2a */}
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  backgroundColor: '#2a2a2a', overflow: 'hidden', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img src={s.img} alt={s.ticker} style={{ width: 38, height: 38, objectFit: 'cover', display: 'block' }} />
                </div>
                <div>
                  {/* cardName: #fff 26px 700 letterSpacing:-0.2 — scaled for web */}
                  <div style={{ color: '#fff', fontSize: 16, fontWeight: 700, letterSpacing: -0.2 }}>{s.name}</div>
                  {/* cardSub: rgba(255,255,255,0.45) 10px */}
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10, marginTop: 1 }}>{s.ticker}</div>
                </div>
              </div>

              {/* sparkWrap: edge-to-edge, margin: 4px -14px */}
              <div style={{ margin: '4px -14px' }}>
                <Spark data={s.spark} up={s.up} w={TILE + 28} />
              </div>

              {/* Price + change */}
              <div>
                {/* cardPrice: #fff 22px 900 letterSpacing:-1 */}
                <div style={{ color: '#fff', fontSize: 22, fontWeight: 900, letterSpacing: -1 }}>{s.price}</div>
                {/* cardChg: 12px 700 */}
                <div style={{ color: s.up ? '#4ade80' : '#ef4444', fontSize: 12, fontWeight: 700, marginTop: 2 }}>
                  {s.up ? '▲' : '▼'} {s.change}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}