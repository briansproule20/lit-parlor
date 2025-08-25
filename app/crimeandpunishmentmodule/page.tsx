import React from 'react'
import Link from 'next/link'

export default function CrimeAndPunishmentModulePage() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #4C1D95 0%, #5B21B6 25%, #7C3AED 50%, #8B5CF6 75%, #4C1D95 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/10 via-transparent to-purple-950/40 pointer-events-none"></div>
      
      {/* Navigation */}
      <div className="flex justify-between items-start mb-8">
        <Link 
          href="/crimeandpunishment" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
        >
          🏛️ Return to Streets
        </Link>
        

        
        {/* Philosophical Notice Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 shadow-2xl transform relative overflow-visible transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{
            border: '4px solid #8B4513',
            borderRadius: '12px',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.5),
              inset 0 4px 8px rgba(255, 255, 255, 0.3),
              inset 0 -4px 8px rgba(139, 69, 19, 0.6)
            `
          }}>
            {/* Parchment background */}
            <div className="absolute inset-0" style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 70%),
                radial-gradient(circle at 70% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 70%),
                radial-gradient(circle at 20% 70%, rgba(238, 203, 161, 0.8) 0%, transparent 60%),
                linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 25%, #DEB887 50%, #F5DEB3 75%, #FEFBF0 100%)
              `
            }}></div>
            
            {/* Philosophical seal */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-2xl z-20" style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.95) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(76, 29, 149, 0.9) 0%, transparent 60%),
                radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
                linear-gradient(135deg, #7C3AED 0%, #4C1D95 30%, #8B4513 60%, #4C1D95 100%)
              `,
              border: '3px solid #8B4513',
              boxShadow: `
                0 8px 20px rgba(0, 0, 0, 0.8),
                0 4px 12px rgba(139, 69, 19, 0.6),
                inset 0 3px 6px rgba(255, 255, 255, 0.4),
                inset 0 -3px 6px rgba(76, 29, 149, 0.8)
              `
            }}>
              <div className="absolute inset-2 text-center text-white font-bold text-xl flex items-center justify-center">⚖️</div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-purple-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '0.05em'
              }}>
                PHILOSOPHICAL INQUIRY
              </h1>
              <div className="w-full h-2 bg-purple-700 mb-4"></div>
              <p className="text-2xl text-purple-800 font-serif leading-relaxed">
                "Pain and suffering are always inevitable for a large intelligence and a deep heart"
              </p>
              <div className="mt-4 text-lg text-purple-700 font-serif italic">
                — Fyodor Dostoevsky
              </div>
            </div>
          </div>
        </div>

        {/* Call to Adventure */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 bg-gradient-to-r from-purple-900/90 to-indigo-800/90 border-4 border-purple-400 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Ready to Explore the Human Psyche?
            </h2>
            <p className="text-purple-200 text-lg mb-6 font-serif">
              Choose your path through Dostoevsky's psychological masterpiece
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/crimeandpunishmentmodule/journey" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🎭 Start Journey
              </Link>
              <Link href="/crimeandpunishmentmodule/study-guide" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                📚 Study Guide
              </Link>
              <Link href="/crimeandpunishmentmodule/quiz" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🎯 Quick Quiz
              </Link>
            </div>
          </div>
        </div>

        {/* Philosophical Exploration Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          
          {/* Character Analysis */}
          <div className="bg-purple-50/95 border-4 border-purple-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">👤</div>
              <h3 className="text-2xl font-bold text-purple-900 font-serif">CHARACTER DEEP DIVE</h3>
              <div className="w-full h-1 bg-purple-600 my-2"></div>
              <p className="text-purple-700 font-serif italic">Explore the tortured souls</p>
            </div>
            <div className="space-y-4 text-purple-800 font-serif">
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-purple-300">
                <span className="text-2xl">⚖️</span>
                <div>
                  <div className="font-bold">Raskolnikov</div>
                  <div className="text-sm">Tormented Protagonist</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-purple-300">
                <span className="text-2xl">🕊️</span>
                <div>
                  <div className="font-bold">Sonia</div>
                  <div className="text-sm">Redemptive Love</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-purple-300">
                <span className="text-2xl">🔍</span>
                <div>
                  <div className="font-bold">Porfiry</div>
                  <div className="text-sm">Psychological Hunter</div>
                </div>
              </div>
            </div>
          </div>

          {/* Thematic Exploration */}
          <div className="bg-purple-50/95 border-4 border-purple-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">🧠</div>
              <h3 className="text-2xl font-bold text-purple-900 font-serif">THEMATIC DEPTHS</h3>
              <div className="w-full h-1 bg-purple-600 my-2"></div>
              <p className="text-purple-700 font-serif italic">Dive into psychological themes</p>
            </div>
            <div className="space-y-4 text-purple-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-purple-300">
                <div className="font-bold flex items-center gap-2">
                  <span>💭</span> Guilt & Redemption
                </div>
                <div className="text-sm mt-1">The weight of conscience</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-purple-300">
                <div className="font-bold flex items-center gap-2">
                  <span>👑</span> Extraordinary Man Theory
                </div>
                <div className="text-sm mt-1">Are some above moral law?</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-purple-300">
                <div className="font-bold flex items-center gap-2">
                  <span>💰</span> Poverty & Morality
                </div>
                <div className="text-sm mt-1">Desperation's influence</div>
              </div>
            </div>
          </div>

          {/* Symbolic Analysis */}
          <div className="bg-purple-50/95 border-4 border-purple-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">🏛️</div>
              <h3 className="text-2xl font-bold text-purple-900 font-serif">SYMBOLIC DEPTHS</h3>
              <div className="w-full h-1 bg-purple-600 my-2"></div>
              <p className="text-purple-700 font-serif italic">Navigate psychological symbols</p>
            </div>
            <div className="space-y-4 text-purple-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-purple-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🪓</span> The Axe
                </div>
                <div className="text-sm mt-1">Instrument of destruction</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-purple-300">
                <div className="font-bold flex items-center gap-2">
                  <span>✝️</span> The Cross
                </div>
                <div className="text-sm mt-1">Path to spiritual rebirth</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-purple-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🌅</span> Siberia
                </div>
                <div className="text-sm mt-1">Resurrection through suffering</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
} 