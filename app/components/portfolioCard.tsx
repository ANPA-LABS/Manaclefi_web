/**
 * PortfolioCard.tsx — Portfolio card with silver metallic gradient
 */

import React from 'react'

interface PortfolioCardProps {
  name: string
  balance: string
  change: string
  up: boolean
  memberCount: number
  members: string[] // initials
}

export default function PortfolioCard({ name, balance, change, up, memberCount, members }: PortfolioCardProps) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #6b7280 0%, #d1d5db 35%, #9ca3af 60%, #e5e7eb 100%)',
      borderRadius: 22,
      padding: '22px 22px 20px',
      width: 300,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)',
      fontFamily: 'Georgia, serif',
    }}>
      {/* Metallic sheen overlay */}
      <div style={{
        position: 'absolute', top: 0, left: '-60%', width: '40%', height: '100%',
        background: 'linear-gradient(105deg, transparent, rgba(255,255,255,0.35), transparent)',
        pointerEvents: 'none',
        animation: 'sheen 4s ease-in-out infinite',
      }} />
      <style>{`@keyframes sheen { 0%,100%{left:-60%} 50%{left:120%} }`}</style>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <div style={{ color: 'rgba(0,0,0,0.5)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Portfolio</div>
          <div style={{ color: 'rgba(0,0,0,0.85)', fontSize: 17, fontWeight: 800, marginTop: 2 }}>{name}</div>
        </div>
        <div style={{
          background: up ? 'rgba(0,100,50,0.2)' : 'rgba(150,0,0,0.2)',
          borderRadius: 20, padding: '4px 10px'
        }}>
          <span style={{ color: up ? '#065f46' : '#991b1b', fontSize: 12, fontWeight: 800 }}>
            {up ? '▲' : '▼'} {change}
          </span>
        </div>
      </div>

      {/* Balance */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ color: 'rgba(0,0,0,0.45)', fontSize: 11, marginBottom: 4 }}>Total Value</div>
        <div style={{ color: 'rgba(0,0,0,0.9)', fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>{balance}</div>
      </div>

      {/* Members */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex' }}>
          {members.slice(0, 4).map((m, i) => (
            <div key={i} style={{
              width: 28, height: 28, borderRadius: '50%',
              background: ['#9b72f0','#60aaff','#ffaa60','#50d8d8'][i % 4],
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 800, color: '#fff',
              border: '2px solid rgba(255,255,255,0.6)',
              marginLeft: i > 0 ? -8 : 0,
              zIndex: 4 - i,
              position: 'relative',
            }}>
              {m}
            </div>
          ))}
        </div>
        <span style={{ color: 'rgba(0,0,0,0.55)', fontSize: 12, fontWeight: 600 }}>
          {memberCount} member{memberCount !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  )
}