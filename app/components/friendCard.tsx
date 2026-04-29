/**
 * FriendsStackedCard.tsx
 * Exact match to FinanceHomeScreen right-column friend stack.
 *
 * cardInner: TILE×TILE, borderRadius:20, padding:14, gradient bg
 * friendAv: 38×38, borderRadius:19, marginBottom:10
 * cardName: #fff 26px 700 letterSpacing:-0.2
 * friendAction: rgba(255,255,255,0.7) 26px 600 marginTop:1
 * friendQtyRow: row, gap:6, marginTop:4
 * friendQty + friendQtyTicker: #fff 26px 800 letterSpacing:-0.5
 * friendStockImg: 28×28 borderRadius:8
 * Stack: 4 cards, layer 0=back offset down, layer 3=front at top
 */
'use client'

import React, { useState } from 'react'

const TILE = 160

const FRIENDS = [
  { id: '4', name: 'Sam', avatar: '/avatar/avatar4.png', action: 'bought', qty: '3', ticker: 'TSLA', stockImg: '/stock/tsla.png', gradStart: '#9b72f0', gradEnd: '#7a4ed8' },
  { id: '1', name: 'Ann', avatar: '/avatar/avatar1.png', action: 'bought', qty: '5', ticker: 'NFLX', stockImg: '/stock/nflx.png', gradStart: '#60aaff', gradEnd: '#3080e8' },
  { id: '3', name: 'Dave', avatar: '/avatar/avatar3.png', action: 'sold', qty: '2', ticker: 'AAPL', stockImg: '/stock/aapl.png', gradStart: '#ffaa60', gradEnd: '#f07820' },
  { id: '5', name: 'Jojo', avatar: '/avatar/avatar5.png', action: 'bought', qty: '1', ticker: 'SPOT', stockImg: '/stock/spot.png', gradStart: '#50d8d8', gradEnd: '#28b0b0' },
]

const N = FRIENDS.length

export default function FriendsStackedCard() {
  const [activeIdx, setActiveIdx] = useState(0)

  const handleClick = () => setActiveIdx(i => (i + 1) % N)

  // layer: 0=back, N-1=front
  const entries = FRIENDS.map((f, i) => ({
    f,
    layer: Math.min((i - activeIdx + N) % N, 3),
  })).sort((a, b) => b.layer - a.layer) // render back first

  return (
    <div
      style={{ position: 'relative', width: TILE, height: TILE + 36, cursor: 'pointer' }}
      onClick={handleClick}
      title="Click to cycle"
    >
      {entries.map(({ f, layer }) => {
        // layer 3 = front (translateY=0), layer 0 = back (translateY=+30)
        const translateY = -(N - 1 - layer) * 10
        const scale = 1 - (N - 1 - layer) * 0.04
        return (
          <div key={f.id} style={{
            position: 'absolute', top: 0, left: 0,
            zIndex: layer,
            transform: `translateY(${translateY}px) scale(${scale})`,
            transformOrigin: 'bottom center',
            transition: 'transform 0.3s',
          }}>
            {/* cardInner: TILE×TILE, borderRadius:20, padding:14, gradient */}
            <div style={{
              width: TILE, height: TILE, borderRadius: 20,
              background: `linear-gradient(135deg, ${f.gradStart}, ${f.gradEnd})`,
              padding: 14, boxSizing: 'border-box',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              gap: 0,
              fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
              overflow: 'hidden',
            }}>
              {/* friendContent: gap:4 */}
              {/* friendAv: 38×38 borderRadius:19 marginBottom:10 */}
              <img src={f.avatar} alt={f.name} style={{
                width: 38, height: 38, borderRadius: 19,
                objectFit: 'cover', display: 'block', marginBottom: 4,
              }} />

              {/* cardName: #fff 26px 700 letterSpacing:-0.2 — scaled for web */}
              <div style={{ color: '#fff', fontSize: 20, fontWeight: 700 }}>
                {f.name}
              </div>

              {/* friendAction: rgba(255,255,255,0.7) 26px 600 marginTop:1 — scaled */}
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 20, fontWeight: 600, marginTop: 0 }}>
                {f.action}
              </div>

              {/* friendQtyRow: row, alignItems:center, gap:6, marginTop:4 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 0 }}>
                {/* friendQty: #fff 26px 800 letterSpacing:-0.5 — scaled */}
                <span style={{ color: '#fff', fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>
                  {f.qty}
                </span>
                {/* friendQtyTicker: same */}
                <span style={{ color: '#fff', fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>
                  {f.ticker}
                </span>
                {/* friendStockImg: 28×28 borderRadius:8 */}
                <img src={f.stockImg} alt={f.ticker} style={{
                  width: 28, height: 28, borderRadius: 8,
                  objectFit: 'cover', display: 'block',
                }} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}