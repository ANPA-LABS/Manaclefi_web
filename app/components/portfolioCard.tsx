/**
 * PortfolioCard.tsx — exact match to PortfolioCards.tsx card design
 *
 * CARD_W = SCREEN_W - 36 = 390-36 = 354, CARD_H = 354/1.586 = 223
 * Made horizontal: W=354, H=223
 *
 * card: borderRadius:20, overflow:hidden, border:1px rgba(255,255,255,0.08)
 * stamps: position:absolute, 40×40, borderRadius:20, opacity:0.92
 *   scattered via seeded random positions (top/right grid + jitter + rotation)
 * stampImage: 40×40 borderRadius:18
 * bottomLeft: position:absolute, bottom:20, left:22
 * balance: 34px 900 letterSpacing:-1.5 lineHeight:38
 * name: 15px 400 letterSpacing:-0.1 marginTop:2
 * Silver gradient: ['#3A3A3A','#A4A4A4','#606060','#CECECE','#8F8F8F','#464646','#696969']
 */

import React from 'react'

// Exact from code: SCREEN_W=390, CARD_W=390-36=354, CARD_H=354/1.586=223
const CARD_W = 354
const CARD_H = Math.round(CARD_W / 1.586)  // 223

const SILVER = ['#3A3A3A','#A4A4A4','#606060','#CECECE','#8F8F8F','#464646','#696969']

// Seeded random — same as PortfolioCards.tsx
function seededRand(seed: number) {
  let s = seed
  return () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646 }
}

// Stamp positions — same grid logic as PortfolioCards.tsx
function getPositions(count: number, seed: number) {
  const PAD = 18, CELL = 56, GAP = 14
  const cols = Math.floor((CARD_W - PAD * 2) / CELL)
  const rows = Math.floor((CARD_H - PAD * 2) / CELL)
  const cells: { col: number; row: number }[] = []
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) cells.push({ col: c, row: r })
  const rand = seededRand(seed)
  cells.sort(() => rand() - 0.5)
  const rand2 = seededRand(seed + 999)
  return cells.slice(0, count).map(({ col, row }) => ({
    top:    PAD + row * CELL + Math.floor(rand2() * (GAP / 2)),
    right:  PAD + col * CELL + Math.floor(rand2() * (GAP / 2)),
    rotate: Math.floor(rand2() * 20) - 10,
  }))
}

function gradCSS(stops: string[]) {
  const step = 100 / (stops.length - 1)
  return `linear-gradient(135deg, ${stops.map((c,i) => `${c} ${(i*step).toFixed(0)}%`).join(', ')})`
}

const STOCKS = [
  { img: '/stock/aapl.png',  bg: '#555555' },
  { img: '/stock/msft.png',  bg: '#0078d7' },
  { img: '/stock/amaz.jpg',  bg: '#ff9900' },
]
const AVATARS = [
  { img: '/avatar/avatar3.png' },
  { img: '/avatar/avatar5.png' },
  { img: '/avatar/avatar4.png' },
]

const stamps = [
  ...STOCKS.map(s => ({ type: 'stock' as const, img: s.img, bg: s.bg })),
  ...AVATARS.map(a => ({ type: 'person' as const, img: a.img, bg: 'transparent' })),
]
const positions = getPositions(stamps.length, 42)

export default function PortfolioCard() {
  return (
    <div style={{
      width: CARD_W,
      height: CARD_H,
      borderRadius: 20,
      overflow: 'hidden',
      background: gradCSS(SILVER),
      border: '1px solid rgba(255,255,255,0.08)',
      position: 'relative',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
    }}>
      {/* Stamps — stock images + avatars scattered */}
      {stamps.map((stamp, i) => {
        const pos = positions[i]
        if (!pos) return null
        return (
          <div key={i} style={{
            position: 'absolute',
            top: pos.top,
            right: pos.right,
            width: 40,
            height: 40,
            borderRadius: 20,
            overflow: 'hidden',
            opacity: 0.92,
            zIndex: 1,
            backgroundColor: stamp.type === 'stock' ? stamp.bg : 'transparent',
            transform: `rotate(${pos.rotate}deg)`,
          }}>
            {/* stampImage: 40×40, borderRadius:18 */}
            <img src={stamp.img} alt="" style={{ width: 40, height: 40, borderRadius: 18, objectFit: 'cover', display: 'block' }} />
          </div>
        )
      })}

      {/* bottomLeft: position:absolute, bottom:20, left:22 */}
      <div style={{ position: 'absolute', bottom: 20, left: 22, zIndex: 2 }}>
        {/* balance: 34px 900 letterSpacing:-1.5 lineHeight:38 */}
        <div style={{ color: '#111', fontSize: 34, fontWeight: 900, letterSpacing: -1.5, lineHeight: '38px' }}>
          $84,320
        </div>
        {/* name: 15px 400 letterSpacing:-0.1 marginTop:2 */}
        <div style={{ color: 'rgba(0,0,0,0.45)', fontSize: 15, fontWeight: 400, letterSpacing: -0.1, marginTop: 2 }}>
          Growth Fund
        </div>
      </div>
    </div>
  )
}