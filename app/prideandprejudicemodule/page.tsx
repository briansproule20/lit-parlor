import React from 'react'

export default function PrideAndPrejudiceModule() {
  return (
    <main className="min-h-screen relative" style={{
      background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 30%, #fbcfe8 60%, #f9a8d4 100%)'
    }}>

      {/* Dotted overlay similar to home page */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#f8d7da 2px, transparent 2px)',
          backgroundSize: '25px 25px'
        }}
      ></div>

    </main>
  )
} 