/**
 * ProposalCard.tsx — matches PortfolioTabScreen proposal card exactly
 * proposalCard: bg:#222121, borderRadius:16, flexRow, pad:14, gap:12
 * proposalImgs: 56×40, relative
 * proposalAvatar: 36×36, borderRadius:18, abs top:0 left:0, border:1.5 #1b1818
 * proposalStock: 28×28, borderRadius:14, abs bottom:0 right:0, border:1.5 #1b1818
 * proposalText: rgba(255,255,255,0.75) 14px lineHeight:20
 * proposalName: #fff 700
 * proposalAmount: #2dd4a0 700
 * proposalTime: rgba(255,255,255,0.35) 12px marginTop:3
 * voteBtn: 32×32, borderRadius:16, bg:rgba(45,212,160,0.15)
 * voteBtnNo: bg:rgba(248,113,113,0.15)
 * voteBtnText: #2dd4a0 14px 700
 */
'use client'

import React, { useState } from 'react'

const BG_APP  = '#1b1818'
const BG_CARD = '#222121'

export default function ProposalCard() {
  const [vote, setVote] = useState<'yes' | 'no' | null>(null)
  const [counts, setCounts] = useState({ yes: 3, no: 1 })

  const castVote = (type: 'yes' | 'no') => {
    if (vote === type) return
    setCounts(prev => ({
      yes: prev.yes + (type === 'yes' ? 1 : vote === 'yes' ? -1 : 0),
      no:  prev.no  + (type === 'no'  ? 1 : vote === 'no'  ? -1 : 0),
    }))
    setVote(type)
  }

  return (
    <div style={{
      backgroundColor: BG_CARD, borderRadius: 16,
      display: 'flex', flexDirection: 'row', alignItems: 'center',
      padding: 14, gap: 12, width: 320,
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      boxSizing: 'border-box',
    }}>
      {/* proposalImgs: 56×40, relative */}
      <div style={{ width: 56, height: 40, position: 'relative', flexShrink: 0 }}>
        {/* proposalAvatar: 36×36, abs top:0 left:0 */}
        <img src="/avatar/avatar4.png" alt="Sam" style={{
          position: 'absolute', top: 0, left: 0,
          width: 36, height: 36, borderRadius: 18,
          border: `1.5px solid ${BG_APP}`,
          objectFit: 'cover', display: 'block',
        }} />
        {/* proposalStock: 28×28, abs bottom:0 right:0 */}
        <img src="/stock/msft.png" alt="MSFT" style={{
          position: 'absolute', bottom: 0, right: 0,
          width: 28, height: 28, borderRadius: 14,
          border: `1.5px solid ${BG_APP}`,
          objectFit: 'cover', display: 'block',
        }} />
      </div>

      {/* proposalInfo: flex:1 */}
      <div style={{ flex: 1 }}>
        {/* proposalText: rgba(255,255,255,0.75) 14px lineHeight:20 */}
        <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: '20px' }}>
          <span style={{ color: '#fff', fontWeight: 700 }}>Sam</span>
          {' proposes to buy '}
          {/* proposalAmount: #2dd4a0 700 */}
          <span style={{ color: '#2dd4a0', fontWeight: 700 }}>$114</span>
          {' of '}
          {/* proposalTicker: #fff 700 */}
          <span style={{ color: '#fff', fontWeight: 700 }}>MSFT</span>
        </div>
        {/* proposalTime: rgba(255,255,255,0.35) 12px marginTop:3 */}
        <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 3 }}>2 min ago</div>
      </div>

      {/* proposalVotes: row gap:8 */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: 8, flexShrink: 0 }}>
        {/* voteBtn: 32×32 borderRadius:16 */}
        <button onClick={() => castVote('yes')} style={{
          width: 32, height: 32, borderRadius: 16, border: 'none', cursor: 'pointer',
          backgroundColor: vote === 'yes' ? 'rgba(45,212,160,0.35)' : 'rgba(45,212,160,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}>
          <span style={{ color: '#2dd4a0', fontSize: 14, fontWeight: 700 }}>✓</span>
        </button>
        {/* voteBtnNo: bg:rgba(248,113,113,0.15) */}
        <button onClick={() => castVote('no')} style={{
          width: 32, height: 32, borderRadius: 16, border: 'none', cursor: 'pointer',
          backgroundColor: vote === 'no' ? 'rgba(248,113,113,0.35)' : 'rgba(248,113,113,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}>
          <span style={{ color: '#f87171', fontSize: 14, fontWeight: 700 }}>✕</span>
        </button>
      </div>
    </div>
  )
}