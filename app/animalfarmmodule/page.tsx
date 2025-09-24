import React from 'react'

export default function AnimalFarmModulePage() {
  return (
    <main className="min-h-screen pt-24 pb-8 px-4 relative" style={{
      background: 'linear-gradient(135deg, #fca5a5 0%, #f87171 30%, #ef4444 60%, #dc2626 100%)'
    }}>

      {/* Dotted overlay similar to home page */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#b91c1c 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative">
        
        {/* Content will go here */}
        
      </div>
    </main>
  )
}