import React from 'react'
import Link from 'next/link'

export default function PrideAndPrejudiceModule() {
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
          href="/prideandprejudice" 
          className="inline-flex items-center gap-2 text-rose-800 hover:text-rose-900 font-bold text-lg px-6 py-3 bg-rose-50/90 rounded-lg border-2 border-rose-600 shadow-md hover:shadow-lg transition-all"
        >
          🏰 Return to Manor
        </Link>
        
        {/* Lady's Notice Header */}
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
            
            {/* Lady's seal - pinning the notice to background */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-2xl z-20" style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(219, 112, 147, 0.95) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(199, 21, 133, 0.9) 0%, transparent 60%),
                radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
                linear-gradient(135deg, #DB7093 0%, #C71585 30%, #A0522D 60%, #C71585 100%)
              `,
              border: '3px solid #8B4513',
              boxShadow: `
                0 8px 20px rgba(0, 0, 0, 0.8),
                0 4px 12px rgba(139, 69, 19, 0.6),
                inset 0 3px 6px rgba(255, 255, 255, 0.4),
                inset 0 -3px 6px rgba(199, 21, 133, 0.8)
              `
            }}>
              <div className="absolute inset-2 text-center text-white font-bold text-xl flex items-center justify-center">💕</div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-rose-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '0.05em'
              }}>
                LADY'S NOTICE
              </h1>
              <div className="w-full h-2 bg-rose-700 mb-4"></div>
              <p className="text-2xl text-rose-800 font-serif leading-relaxed">
                "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife"
              </p>
              <div className="mt-4 text-lg text-rose-700 font-serif italic">
                — Jane Austen
              </div>
            </div>
          </div>
        </div>

        {/* Call to Adventure - Moved to Center */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 bg-gradient-to-r from-rose-900/90 to-pink-800/90 border-4 border-rose-400 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Ready to Navigate Society's Waters?
            </h2>
            <p className="text-rose-200 text-lg mb-6 font-serif">
              Choose your course through Austen's social masterpiece
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/prideandprejudicemodule/journey" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🧭 Start Journey
              </Link>
              <Link href="/prideandprejudicemodule/study-guide" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                📚 Study Guide
              </Link>
              <Link href="/prideandprejudicemodule/quiz" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🎯 Quick Quiz
              </Link>
            </div>
          </div>
        </div>

        {/* Drawing Room Grid - Moved Below */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          
          {/* Interactive Analysis */}
          <div className="bg-rose-50/95 border-4 border-rose-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">👥</div>
              <h3 className="text-2xl font-bold text-rose-900 font-serif">CHARACTER DEEP DIVE</h3>
              <div className="w-full h-1 bg-rose-600 my-2"></div>
              <p className="text-rose-700 font-serif italic">Explore the souls in Georgian society</p>
            </div>
            <div className="space-y-4 text-rose-800 font-serif">
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-rose-300">
                <span className="text-2xl">👸</span>
                <div>
                  <div className="font-bold">Elizabeth Bennet</div>
                  <div className="text-sm">Witty & Independent</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-rose-300">
                <span className="text-2xl">🎭</span>
                <div>
                  <div className="font-bold">Mr. Darcy</div>
                  <div className="text-sm">Proud & Reserved</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-rose-300">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="font-bold">Mrs. Bennet</div>
                  <div className="text-sm">Matchmaking Mother</div>
                </div>
              </div>
            </div>
          </div>

          {/* Thematic Exploration */}
          <div className="bg-rose-50/95 border-4 border-rose-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">💕</div>
              <h3 className="text-2xl font-bold text-rose-900 font-serif">THEMATIC DEPTHS</h3>
              <div className="w-full h-1 bg-rose-600 my-2"></div>
              <p className="text-rose-700 font-serif italic">Dive into Austen's profound themes</p>
            </div>
            <div className="space-y-4 text-rose-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold flex items-center gap-2">
                  <span>👑</span> Pride vs. Prejudice
                </div>
                <div className="text-sm mt-1">When first impressions deceive</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold flex items-center gap-2">
                  <span>💰</span> Class & Marriage
                </div>
                <div className="text-sm mt-1">Love vs. social advancement</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🎭</span> Social Satire
                </div>
                <div className="text-sm mt-1">Wit as social commentary</div>
              </div>
            </div>
          </div>

          {/* Symbol Navigation */}
          <div className="bg-rose-50/95 border-4 border-rose-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">🏰</div>
              <h3 className="text-2xl font-bold text-rose-900 font-serif">SYMBOLIC SOCIETY</h3>
              <div className="w-full h-1 bg-rose-600 my-2"></div>
              <p className="text-rose-700 font-serif italic">Navigate the symbols of society</p>
            </div>
            <div className="space-y-4 text-rose-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🏰</span> Pemberley
                </div>
                <div className="text-sm mt-1">The ideal estate & character</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold flex items-center gap-2">
                  <span>💍</span> Marriage Proposals
                </div>
                <div className="text-sm mt-1">Social contracts & love</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold flex items-center gap-2">
                  <span>📜</span> Letters
                </div>
                <div className="text-sm mt-1">Communication & revelation</div>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          
          {/* Historical Context */}
          <div className="bg-rose-50/95 border-4 border-rose-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">⏰</div>
              <h3 className="text-2xl font-bold text-rose-900 font-serif">GEORGIAN ENGLAND</h3>
              <div className="w-full h-1 bg-rose-600 my-2"></div>
              <p className="text-rose-700 font-serif italic">The world that shaped Austen's vision</p>
            </div>
            <div className="space-y-4 text-rose-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold">Regency Era Society</div>
                <div className="text-sm mt-1">Strict social hierarchies and marriage markets</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold">Women's Position</div>
                <div className="text-sm mt-1">Limited options: marriage or spinsterhood</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold">Property & Inheritance</div>
                <div className="text-sm mt-1">Entailment and the plight of the Bennet sisters</div>
              </div>
            </div>
          </div>

          {/* Literary Techniques */}
          <div className="bg-rose-50/95 border-4 border-rose-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">✍️</div>
              <h3 className="text-2xl font-bold text-rose-900 font-serif">AUSTEN'S CRAFT</h3>
              <div className="w-full h-1 bg-rose-600 my-2"></div>
              <p className="text-rose-700 font-serif italic">The artistry behind the social comedy</p>
            </div>
            <div className="space-y-4 text-rose-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold">Free Indirect Discourse</div>
                <div className="text-sm mt-1">Austen's revolutionary narrative technique</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold">Irony & Satire</div>
                <div className="text-sm mt-1">Wit as social commentary</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold">Character Development</div>
                <div className="text-sm mt-1">Growth through self-awareness</div>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-block p-6 bg-gradient-to-r from-rose-900/90 to-pink-800/90 border-4 border-rose-400 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Begin Your Literary Courtship
            </h3>
            <p className="text-rose-200 text-lg mb-6 font-serif">
              Will you succumb to first impressions, or discover the truth beneath?
            </p>
            <Link href="/prideandprejudicemodule/journey" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg">
              💕 Enter the Drawing Room
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
} 