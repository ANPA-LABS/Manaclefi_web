/**
 * PortfolioCard.tsx
 * Props: variant = 'silver' | 'pink'
 * Usage:
 *   <PortfolioCard variant="silver" />
 *   <PortfolioCard variant="pink" />
 */

import React from 'react'

const CARD_W = 354
const CARD_H = Math.round(CARD_W / 1.586)  // 223

const GRADIENTS = {
  silver: ['#3A3A3A','#A4A4A4','#606060','#CECECE','#8F8F8F','#464646','#696969'],
  pink:   ['#4a1a2a','#8b3a5a','#c87494','#e4a0b8','#c87494','#8b3a5a','#c07090'],
}

const CARD_DATA = {
  silver: { balance: '$84,320', name: 'Growth Fund',     textColor: '#111',  mutedColor: 'rgba(0,0,0,0.45)'  },
  pink:   { balance: '$52,810', name: 'High Return',     textColor: '#fff',  mutedColor: 'rgba(255,255,255,0.55)' },
}

function seededRand(seed: number) {
  let s = seed
  return () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646 }
}

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
    top:   PAD + row * CELL + Math.floor(rand2() * (GAP / 2)),
    right: PAD + col * CELL + Math.floor(rand2() * (GAP / 2)),
    rotate: Math.floor(rand2() * 20) - 10,
  }))
}

function gradCSS(stops: string[]) {
  const step = 100 / (stops.length - 1)
  return `linear-gradient(135deg, ${stops.map((c, i) => `${c} ${(i * step).toFixed(0)}%`).join(', ')})`
}

const STAMPS = {
  silver: [
    { type: 'stock' as const, img: '/stock/aapl.png',   bg: '#555555' },
    { type: 'stock' as const, img: '/stock/sol.jpg',   bg: '#ff9900' },
    { type: 'stock' as const, img: '/stock/amaz.jpg',   bg: '#ff9900' },
    { type: 'stock' as const, img: '/stock/tsla.png',   bg: '#0078d7' },
    { type: 'stock' as const, img: '/stock/jlp.png',   bg: '#ff9900' },
    { type: 'person' as const, img: '/avatar/avatar3.png', bg: 'transparent' },
    { type: 'person' as const, img: '/avatar/avatar5.png', bg: 'transparent' },
  ],
  pink: [
    { type: 'stock' as const, img: '/stock/nvidia.png',   bg: '#76b900' },
    { type: 'stock' as const, img: '/stock/tsla.png',   bg: '#c0392b' },
    { type: 'stock' as const, img: '/stock/sol.jpg',    bg: '#9945ff' },
    { type: 'person' as const, img: '/avatar/avatar1.png', bg: 'transparent' },
    { type: 'person' as const, img: '/avatar/avatar5.png', bg: 'transparent' },
  ],
}

interface Props { variant?: 'silver' | 'pink' }

export default function PortfolioCard({ variant = 'silver' }: Props) {
  const grad     = GRADIENTS[variant]
  const data     = CARD_DATA[variant]
  const stamps   = STAMPS[variant]
  const seed     = variant === 'silver' ? 42 : 99
  const positions = getPositions(stamps.length, seed)

  return (
    <div style={{
      width: CARD_W, height: CARD_H, borderRadius: 20, overflow: 'hidden',
      background: gradCSS(grad),
      border: '1px solid rgba(255,255,255,0.08)',
      position: 'relative',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    }} className='shadow-none xl:shadow-2xl/35'>
      {/* Stamps */}
      {stamps.map((stamp, i) => {
        const pos = positions[i]
        if (!pos) return null
        return (
          <div key={i} style={{
            position: 'absolute', top: pos.top, right: (pos as any).right,
            width: 40, height: 40, borderRadius: 20, overflow: 'hidden',
            opacity: 0.92, zIndex: 1,
            backgroundColor: stamp.bg,
            transform: `rotate(${pos.rotate}deg)`,
          }}>
            <img src={stamp.img} alt="" style={{ width: 40, height: 40, borderRadius: 18, objectFit: 'cover', display: 'block' }} />
          </div>
        )
      })}

      {/* Bottom left */}
      <div style={{ position: 'absolute', bottom: 20, left: 22, zIndex: 2 }}>
        <div style={{ color: data.textColor, fontSize: 34, fontWeight: 900, letterSpacing: -1.5, lineHeight: '38px' }}>
          {data.balance}
        </div>
        <div style={{ color: data.mutedColor, fontSize: 15, fontWeight: 400, letterSpacing: -0.1, marginTop: 2 }}>
          {data.name}
        </div>
      </div>
    </div>
  )
}