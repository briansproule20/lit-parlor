import React from 'react'
import Link from 'next/link'

export default function MobyDickModule() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
        backgroundImage: 'url(/images/ship-storm.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
      
      {/* Navigation */}
      <div className="flex justify-between items-start mb-8">
        <Link 
          href="/mobydick" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
        >
          ⚓ Return to Port
        </Link>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
        >
          🏠 Return to Parlor
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Captain's Log Header */}
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
            
            {/* Captain's seal - pinning the notice to background */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-2xl z-20" style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(220, 20, 60, 0.95) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(139, 0, 0, 0.9) 0%, transparent 60%),
                radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
                linear-gradient(135deg, #DC143C 0%, #8B0000 30%, #A0522D 60%, #8B0000 100%)
              `,
              border: '3px solid #8B4513',
              boxShadow: `
                0 8px 20px rgba(0, 0, 0, 0.8),
                0 4px 12px rgba(139, 69, 19, 0.6),
                inset 0 3px 6px rgba(255, 255, 255, 0.4),
                inset 0 -3px 6px rgba(139, 0, 0, 0.8)
              `
            }}>
              <div className="absolute inset-2 text-center text-white font-bold text-xl flex items-center justify-center">⚓</div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '0.05em'
              }}>
                CAPTAIN'S NOTICE
              </h1>
              <div className="w-full h-2 bg-amber-700 mb-4"></div>
              <p className="text-2xl text-amber-800 font-serif leading-relaxed">
                "The sea had jeeringly kept his finite body up, but drowned the infinite of his soul"
              </p>
              <div className="mt-4 text-lg text-amber-700 font-serif italic">
                — Herman Melville
              </div>
            </div>
          </div>
        </div>

        {/* Call to Adventure - Moved to Center */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-900/90 to-slate-800/90 border-4 border-blue-400 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Ready to Navigate These Waters?
            </h2>
            <p className="text-blue-200 text-lg mb-6 font-serif">
              Choose your course through Melville's maritime masterpiece
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/mobydickmodule/journey" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🧭 Start Journey
              </Link>
              <Link href="/mobydickmodule/study-guide" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                📚 Study Guide
              </Link>
              <Link href="/mobydickmodule/quiz" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🎯 Quick Quiz
              </Link>
            </div>
          </div>
        </div>

        {/* Ship's Deck Grid - Moved Below */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          
          {/* Interactive Analysis */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-6 shadow-2xl transform rotate-1 transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">🔍</div>
              <h3 className="text-2xl font-bold text-amber-900 font-serif">CHARACTER DEEP DIVE</h3>
              <div className="w-full h-1 bg-amber-600 my-2"></div>
              <p className="text-amber-700 font-serif italic">Explore the souls aboard the Pequod</p>
            </div>
            <div className="space-y-4 text-amber-800 font-serif">
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-amber-300">
                <span className="text-2xl">👨‍✈️</span>
                <div>
                  <div className="font-bold">Captain Ahab</div>
                  <div className="text-sm">Obsession Incarnate</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-amber-300">
                <span className="text-2xl">📝</span>
                <div>
                  <div className="font-bold">Ishmael</div>
                  <div className="text-sm">Our Chronicler</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-amber-300">
                <span className="text-2xl">🗡️</span>
                <div>
                  <div className="font-bold">Queequeg</div>
                  <div className="text-sm">Noble Savage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Thematic Exploration */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-6 shadow-2xl transform -rotate-1 transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">🌊</div>
              <h3 className="text-2xl font-bold text-amber-900 font-serif">THEMATIC DEPTHS</h3>
              <div className="w-full h-1 bg-amber-600 my-2"></div>
              <p className="text-amber-700 font-serif italic">Dive into Melville's profound themes</p>
            </div>
            <div className="space-y-4 text-amber-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-amber-300">
                <div className="font-bold flex items-center gap-2">
                  <span>⚔️</span> Obsession vs. Reason
                </div>
                <div className="text-sm mt-1">When pursuit becomes destruction</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-amber-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🌍</span> Nature's Indifference
                </div>
                <div className="text-sm mt-1">The ocean as impartial force</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-amber-300">
                <div className="font-bold flex items-center gap-2">
                  <span>⚖️</span> Fate vs. Free Will
                </div>
                <div className="text-sm mt-1">Are we masters of our destiny?</div>
              </div>
            </div>
          </div>

          {/* Symbol Navigation */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-6 shadow-2xl transform rotate-2 transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">🐋</div>
              <h3 className="text-2xl font-bold text-amber-900 font-serif">SYMBOLIC OCEAN</h3>
              <div className="w-full h-1 bg-amber-600 my-2"></div>
              <p className="text-amber-700 font-serif italic">Navigate the sea of symbols</p>
            </div>
            <div className="space-y-4 text-amber-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-amber-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🐋</span> The White Whale
                </div>
                <div className="text-sm mt-1">Nature's unknowable mystery</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-amber-300">
                <div className="font-bold flex items-center gap-2">
                  <span>⚰️</span> Queequeg's Coffin
                </div>
                <div className="text-sm mt-1">Death becomes salvation</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-amber-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🌊</span> The Boundless Sea
                </div>
                <div className="text-sm mt-1">Infinity and isolation</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
} 