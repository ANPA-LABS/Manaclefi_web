/**
 * StampCard.tsx
 * Exact pixel match to BuyPackScreen.
 *
 * Key structure: position:relative wrapper → card inside → dots as absolute
 * on the wrapper, positioned at -DOT/2 edges to punch through card border.
 * DOT=16, CARD_W=340, CARD_H=200
 * Top/bottom: 12 dots, left: (CARD_W/11)*i - DOT/2
 * Left/right:  8 dots, top:  (CARD_H/7)*i  - DOT/2
 */
'use client'

import React from 'react'

const BG_APP = '#1b1818'
const BG_CARD = '#222121'
const DOT = 16
const CARD_W = 310
const CARD_H = 200

const PACK = {
  name: 'Big Tech',
  subtitle: '4 stocks · Updated today',
  change: '+2.4%',
  up: true,
  tickers: [
    { symbol: 'AAPL', img: '/stock/aapl.png', weight: 30, color: '#6b8aff' },
    { symbol: 'MSFT', img: '/stock/msft.png', weight: 25, color: '#4cd98a' },
    { symbol: 'AMZN', img: '/stock/amaz.jpg', weight: 25, color: '#ffb347' },
    { symbol: 'NFLX', img: '/stock/nflx.png', weight: 20, color: '#b47fff' },
  ],
}

export default function StampCard() {
  const dot = (key: number, style: React.CSSProperties) => (
    <div key={key} style={{
      position: 'absolute',
      width: DOT, height: DOT, borderRadius: DOT / 2,
      backgroundColor: '#fff',
      zIndex: 10,
      ...style,
    }} />
  )

  return (
    /* Outer wrapper — position:relative so dots can overlap card edges */
    <div style={{ position: 'relative', width: CARD_W, display: 'inline-block' }}>

      {/* Card — borderRadius:0, overflow:hidden */}
      <div style={{
        width: CARD_W,
        background: '#222121',
        borderRadius: 0,
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* imgRow: flex row, gap:12, paddingH:14, paddingV:20, justify:center */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 12,
          padding: '20px 14px', justifyContent: 'center',
        }}>
          {PACK.tickers.map(t => (
            <div key={t.symbol} style={{ position: 'relative' }}>
              {/* iconBox: 54×54, borderRadius:14, bg:#2a2a2a */}
              <div style={{
                width: 54, height: 54, borderRadius: 14,
                backgroundColor: '#2a2a2a', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, fontWeight: 700, color: '#fff',
                fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
              }}>
                {t.img
                  ? <img src={t.img} alt={t.symbol} style={{ width: 54, height: 54, objectFit: 'cover', display: 'block' }} />
                  : t.symbol[0]
                }
              </div>
              {/* weightBubble: bottom:-5, right:-5, borderRadius:12, pad:3px 7px */}
              <div style={{
                position: 'absolute', bottom: -5, right: -5,
                backgroundColor: t.color,
                borderRadius: 12, padding: '3px 7px',
                fontSize: 11, fontWeight: 800, color: '#000',
                lineHeight: 1,
              }}>
                {t.weight}%
              </div>
            </div>
          ))}
        </div>

        {/* divider: 1px rgba(255,255,255,0.08) */}
        <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.08)' }} />

        {/* info: row, space-between, center, padding:20 */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 20,
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        }}>
          <div>
            <div style={{ color: '#fff', fontSize: 18, fontWeight: 800, letterSpacing: -0.3 }}>
              {PACK.name}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginTop: 2 }}>
              {PACK.subtitle}
            </div>
          </div>
          <div style={{
            backgroundColor: 'rgba(74,222,128,0.2)',
            borderRadius: 20, padding: '4px 10px',
          }}>
            <span style={{ color: '#4ade80', fontSize: 12, fontWeight: 800 }}>
              ▲ {PACK.change}
            </span>
          </div>
        </div>
      </div>

      {/* Stamp dots — top: top:-DOT/2, left:(CARD_W/11)*i - DOT/2 */}
      {Array.from({ length: 12 }, (_, i) =>
        dot(i, { top: -DOT / 2, left: (CARD_W / 11) * i - DOT / 2 })
      )}
      {/* Stamp dots — bottom: bottom:-DOT/2 */}
      {Array.from({ length: 12 }, (_, i) =>
        dot(i, { bottom: -DOT / 2, left: (CARD_W / 11) * i - DOT / 2 })
      )}
      {/* Stamp dots — left: left:-DOT/2, top:(CARD_H/7)*i - DOT/2 */}
      {Array.from({ length: 8 }, (_, i) =>
        dot(i, { left: -DOT / 2, top: (CARD_H / 7) * i - DOT / 2 })
      )}
      {/* Stamp dots — right: right:-DOT/2 */}
      {Array.from({ length: 8 }, (_, i) =>
        dot(i, { right: -DOT / 2, top: (CARD_H / 7) * i - DOT / 2 })
      )}
    </div>
  )
}