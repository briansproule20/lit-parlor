import React from 'react'
import Link from 'next/link'

export default function AnimalFarmModulePage() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #991B1B 0%, #DC2626 25%, #EF4444 50%, #F87171 75%, #991B1B 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/10 via-transparent to-red-950/40 pointer-events-none"></div>
      
      {/* Navigation */}
      <div className="flex justify-between items-start mb-8">
        <Link 
          href="/animalfarm" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
        >
          🌾 Return to Barnyard
        </Link>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
        >
          🏠 Return to Parlor
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Revolutionary Notice Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 shadow-2xl transform -rotate-1 relative overflow-visible transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:-rotate-2 cursor-pointer" style={{
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
            
            {/* Revolutionary seal */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-2xl z-20" style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.95) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(153, 27, 27, 0.9) 0%, transparent 60%),
                radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
                linear-gradient(135deg, #EF4444 0%, #991B1B 30%, #8B4513 60%, #991B1B 100%)
              `,
              border: '3px solid #8B4513',
              boxShadow: `
                0 8px 20px rgba(0, 0, 0, 0.8),
                0 4px 12px rgba(139, 69, 19, 0.6),
                inset 0 3px 6px rgba(255, 255, 255, 0.4),
                inset 0 -3px 6px rgba(153, 27, 27, 0.8)
              `
            }}>
              <div className="absolute inset-2 text-center text-white font-bold text-xl flex items-center justify-center">🐷</div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-red-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '0.05em'
              }}>
                REVOLUTIONARY DECREE
              </h1>
              <div className="w-full h-2 bg-red-700 mb-4"></div>
              <p className="text-2xl text-red-800 font-serif leading-relaxed">
                "All animals are equal, but some animals are more equal than others"
              </p>
              <div className="mt-4 text-lg text-red-700 font-serif italic">
                — George Orwell
              </div>
            </div>
          </div>
        </div>

        {/* Call to Adventure */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 bg-gradient-to-r from-red-900/90 to-orange-800/90 border-4 border-red-400 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Ready to Witness the Revolution?
            </h2>
            <p className="text-red-200 text-lg mb-6 font-serif">
              Choose your path through Orwell's powerful political allegory
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/animalfarmmodule/journey" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🐷 Start Journey
              </Link>
              <Link href="/animalfarmmodule/study-guide" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                📚 Study Guide
              </Link>
              <Link href="/animalfarmmodule/quiz" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🎯 Quick Quiz
              </Link>
            </div>
          </div>
        </div>

        {/* Revolutionary Exploration Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          
          {/* Character Analysis */}
          <div className="bg-red-50/95 border-4 border-red-600 rounded-xl p-6 shadow-2xl transform rotate-1 transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">🐷</div>
              <h3 className="text-2xl font-bold text-red-900 font-serif">CHARACTER DEEP DIVE</h3>
              <div className="w-full h-1 bg-red-600 my-2"></div>
              <p className="text-red-700 font-serif italic">Explore the revolutionary animals</p>
            </div>
            <div className="space-y-4 text-red-800 font-serif">
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-red-300">
                <span className="text-2xl">👑</span>
                <div>
                  <div className="font-bold">Napoleon</div>
                  <div className="text-sm">Corrupted Leader</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-red-300">
                <span className="text-2xl">🐴</span>
                <div>
                  <div className="font-bold">Boxer</div>
                  <div className="text-sm">Loyal Worker</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-red-300">
                <span className="text-2xl">📢</span>
                <div>
                  <div className="font-bold">Squealer</div>
                  <div className="text-sm">Propaganda Master</div>
                </div>
              </div>
            </div>
          </div>

          {/* Thematic Exploration */}
          <div className="bg-red-50/95 border-4 border-red-600 rounded-xl p-6 shadow-2xl transform -rotate-1 transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">⚡</div>
              <h3 className="text-2xl font-bold text-red-900 font-serif">THEMATIC DEPTHS</h3>
              <div className="w-full h-1 bg-red-600 my-2"></div>
              <p className="text-red-700 font-serif italic">Dive into political themes</p>
            </div>
            <div className="space-y-4 text-red-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-red-300">
                <div className="font-bold flex items-center gap-2">
                  <span>⚡</span> Power Corrupts
                </div>
                <div className="text-sm mt-1">Absolute power corrupts absolutely</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-red-300">
                <div className="font-bold flex items-center gap-2">
                  <span>📣</span> Propaganda Control
                </div>
                <div className="text-sm mt-1">Manipulating truth and history</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-red-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🔄</span> Revolution Betrayed
                </div>
                <div className="text-sm mt-1">Ideals corrupted by greed</div>
              </div>
            </div>
          </div>

          {/* Symbolic Analysis */}
          <div className="bg-red-50/95 border-4 border-red-600 rounded-xl p-6 shadow-2xl transform rotate-2 transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">🏭</div>
              <h3 className="text-2xl font-bold text-red-900 font-serif">SYMBOLIC FARM</h3>
              <div className="w-full h-1 bg-red-600 my-2"></div>
              <p className="text-red-700 font-serif italic">Navigate revolutionary symbols</p>
            </div>
            <div className="space-y-4 text-red-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-red-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🏭</span> The Windmill
                </div>
                <div className="text-sm mt-1">False promises of progress</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-red-300">
                <div className="font-bold flex items-center gap-2">
                  <span>📜</span> Seven Commandments
                </div>
                <div className="text-sm mt-1">Laws twisted by power</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-red-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🚩</span> The Flag
                </div>
                <div className="text-sm mt-1">Revolutionary ideals corrupted</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
} 