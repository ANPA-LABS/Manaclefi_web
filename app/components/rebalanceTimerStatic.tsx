/**
 * RebalanceTimer.tsx — matches PortfolioTabScreen exactly
 * SIZE=56, STROKE=3, R=(56-6)/2=25
 * timeText: #fff 13px 700
 * label: rgba(255,255,255,0.45) 10px 600 letterSpacing:0.3
 * wrap: alignItems:center, gap:6, marginTop:10
 * ring: stroke rgba(255,255,255,0.15) for track, #fff for progress
 */
import React from 'react'

const TOTAL = 30 * 60
const SIZE  = 56
const STROKE = 3
const R      = (SIZE - STROKE * 2) / 2
const CIRC   = 2 * Math.PI * R

export default function RebalanceTimerStatic() {
  const mm = '27'
  const ss = '03'
  const progress = (27 * 60 + 3) / TOTAL
  const dashOffset = CIRC * (1 - progress)

  return (
    /* wrap: alignItems:center, gap:6, marginTop:10 */
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '16px 20px', backgroundColor: '#222121', borderRadius: 20, fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <div style={{ position: 'relative', width: SIZE, height: SIZE }}>
        <svg
          width={SIZE} height={SIZE}
          style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
        >
          {/* Track circle */}
          <circle
            cx={SIZE / 2} cy={SIZE / 2} r={R}
            stroke="rgba(255,255,255,0.15)" strokeWidth={STROKE} fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={SIZE / 2} cy={SIZE / 2} r={R}
            stroke="#fff" strokeWidth={STROKE} fill="none"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>
        {/* inner: centered time text */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* timeText: #fff 13px 700 */}
          <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>{mm}:{ss}</span>
        </div>
      </div>
      {/* label: rgba(255,255,255,0.45) 10px 600 letterSpacing:0.3 */}
      <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10, fontWeight: 600, letterSpacing: 0.3, marginTop: 2 }}>
        Next rebalance
      </span>
    </div>
  )
}