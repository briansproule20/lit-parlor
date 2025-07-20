import React from 'react'
import Link from 'next/link'

export default function ThingsFallApartModule() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
        backgroundImage: 'url(/images/wood-texture.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
      
      {/* Navigation */}
      <div className="flex justify-between items-start mb-8">
        <Link 
          href="/thingsfallapart" 
          className="inline-flex items-center gap-2 text-orange-800 hover:text-orange-900 font-bold text-lg px-6 py-3 bg-orange-50/90 rounded-lg border-2 border-orange-600 shadow-md hover:shadow-lg transition-all"
        >
          🌍 Return to Village
        </Link>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-orange-800 hover:text-orange-900 font-bold text-lg px-6 py-3 bg-orange-50/90 rounded-lg border-2 border-orange-600 shadow-md hover:shadow-lg transition-all"
        >
          🏠 Return to Parlor
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Elder's Notice Header */}
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
            
            {/* Elder's seal - pinning the notice to background */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-2xl z-20" style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(255, 140, 0, 0.95) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(255, 69, 0, 0.9) 0%, transparent 60%),
                radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
                linear-gradient(135deg, #FF8C00 0%, #FF4500 30%, #A0522D 60%, #FF4500 100%)
              `,
              border: '3px solid #8B4513',
              boxShadow: `
                0 8px 20px rgba(0, 0, 0, 0.8),
                0 4px 12px rgba(139, 69, 19, 0.6),
                inset 0 3px 6px rgba(255, 255, 255, 0.4),
                inset 0 -3px 6px rgba(255, 69, 0, 0.8)
              `
            }}>
              <div className="absolute inset-2 text-center text-white font-bold text-xl flex items-center justify-center">🏺</div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-orange-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '0.05em'
              }}>
                ELDER'S NOTICE
              </h1>
              <div className="w-full h-2 bg-orange-700 mb-4"></div>
              <p className="text-2xl text-orange-800 font-serif leading-relaxed">
                "Things fall apart; the centre cannot hold; Mere anarchy is loosed upon the world"
              </p>
              <div className="mt-4 text-lg text-orange-700 font-serif italic">
                — W.B. Yeats (quoted by Chinua Achebe)
              </div>
            </div>
          </div>
        </div>

        {/* Call to Adventure - Moved to Center */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 bg-gradient-to-r from-orange-900/90 to-red-800/90 border-4 border-orange-400 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Ready to Navigate Cultural Waters?
            </h2>
            <p className="text-orange-200 text-lg mb-6 font-serif">
              Choose your course through Achebe's cultural masterpiece
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/thingsfallapartmodule/journey" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🧭 Start Journey
              </Link>
              <Link href="/thingsfallapartmodule/study-guide" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                📚 Study Guide
              </Link>
              <Link href="/thingsfallapartmodule/quiz" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🎯 Quick Quiz
              </Link>
            </div>
          </div>
        </div>

        {/* Village Square Grid - Moved Below */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          
          {/* Interactive Analysis */}
          <div className="bg-orange-50/95 border-4 border-orange-600 rounded-xl p-6 shadow-2xl transform rotate-1 transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">👥</div>
              <h3 className="text-2xl font-bold text-orange-900 font-serif">CHARACTER DEEP DIVE</h3>
              <div className="w-full h-1 bg-orange-600 my-2"></div>
              <p className="text-orange-700 font-serif italic">Explore the souls in Igbo society</p>
            </div>
            <div className="space-y-4 text-orange-800 font-serif">
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-orange-300">
                <span className="text-2xl">👨‍🌾</span>
                <div>
                  <div className="font-bold">Okonkwo</div>
                  <div className="text-sm">Proud & Fearful</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-orange-300">
                <span className="text-2xl">👴</span>
                <div>
                  <div className="font-bold">Unoka</div>
                  <div className="text-sm">Okonkwo's Father</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-orange-300">
                <span className="text-2xl">👨‍💼</span>
                <div>
                  <div className="font-bold">Mr. Brown</div>
                  <div className="text-sm">Understanding Missionary</div>
                </div>
              </div>
            </div>
          </div>

          {/* Thematic Exploration */}
          <div className="bg-orange-50/95 border-4 border-orange-600 rounded-xl p-6 shadow-2xl transform -rotate-1 transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">🌍</div>
              <h3 className="text-2xl font-bold text-orange-900 font-serif">THEMATIC DEPTHS</h3>
              <div className="w-full h-1 bg-orange-600 my-2"></div>
              <p className="text-orange-700 font-serif italic">Dive into Achebe's profound themes</p>
            </div>
            <div className="space-y-4 text-orange-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold flex items-center gap-2">
                  <span>⚖️</span> Tradition vs. Change
                </div>
                <div className="text-sm mt-1">When cultures collide</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold flex items-center gap-2">
                  <span>👑</span> Masculinity & Pride
                </div>
                <div className="text-sm mt-1">The burden of expectations</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🌱</span> Cultural Identity
                </div>
                <div className="text-sm mt-1">Preserving heritage</div>
              </div>
            </div>
          </div>

          {/* Symbol Navigation */}
          <div className="bg-orange-50/95 border-4 border-orange-600 rounded-xl p-6 shadow-2xl transform rotate-2 transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">🏺</div>
              <h3 className="text-2xl font-bold text-orange-900 font-serif">SYMBOLIC VILLAGE</h3>
              <div className="w-full h-1 bg-orange-600 my-2"></div>
              <p className="text-orange-700 font-serif italic">Navigate the symbols of culture</p>
            </div>
            <div className="space-y-4 text-orange-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🏺</span> The Yam
                </div>
                <div className="text-sm mt-1">Masculinity & success</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🌿</span> The Sacred Grove
                </div>
                <div className="text-sm mt-1">Tradition & spirituality</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold flex items-center gap-2">
                  <span>📖</span> The Bible
                </div>
                <div className="text-sm mt-1">Colonial influence</div>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          
          {/* Historical Context */}
          <div className="bg-orange-50/95 border-4 border-orange-600 rounded-xl p-6 shadow-2xl transform -rotate-1 transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-3xl">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">⏰</div>
              <h3 className="text-2xl font-bold text-orange-900 font-serif">PRE-COLONIAL NIGERIA</h3>
              <div className="w-full h-1 bg-orange-600 my-2"></div>
              <p className="text-orange-700 font-serif italic">The world that shaped Achebe's vision</p>
            </div>
            <div className="space-y-4 text-orange-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold">Igbo Society</div>
                <div className="text-sm mt-1">Complex social structures and traditions</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold">Colonial Arrival</div>
                <div className="text-sm mt-1">British missionaries and administrators</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold">Cultural Clash</div>
                <div className="text-sm mt-1">The impact of European values</div>
              </div>
            </div>
          </div>

          {/* Literary Techniques */}
          <div className="bg-orange-50/95 border-4 border-orange-600 rounded-xl p-6 shadow-2xl transform rotate-1 transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-3xl">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">✍️</div>
              <h3 className="text-2xl font-bold text-orange-900 font-serif">ACHEBE'S CRAFT</h3>
              <div className="w-full h-1 bg-orange-600 my-2"></div>
              <p className="text-orange-700 font-serif italic">The artistry behind the cultural narrative</p>
            </div>
            <div className="space-y-4 text-orange-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold">Igbo Proverbs</div>
                <div className="text-sm mt-1">Traditional wisdom woven into narrative</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold">Tragic Structure</div>
                <div className="text-sm mt-1">Classical tragedy meets African story</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold">Cultural Realism</div>
                <div className="text-sm mt-1">Authentic portrayal of Igbo life</div>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-block p-6 bg-gradient-to-r from-orange-900/90 to-red-800/90 border-4 border-orange-400 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Begin Your Cultural Journey
            </h3>
            <p className="text-orange-200 text-lg mb-6 font-serif">
              Will you witness the fall, or understand the forces that caused it?
            </p>
            <Link href="/thingsfallapartmodule/journey" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg">
              🌍 Enter the Village
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
} 