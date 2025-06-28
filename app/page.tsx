import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative">
        
        {/* Bookstore Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 60%),
              linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 20%, #DEB887 40%, #F5DEB3 60%, #E6D8B5 80%, #FEFBF0 100%)
            `,
            border: '3px solid #8B4513',
            boxShadow: `
              0 8px 32px rgba(139, 69, 19, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.7),
              inset 0 -2px 4px rgba(139, 69, 19, 0.2)
            `
          }}>
            <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              📚 The Literary Parlor
            </h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-serif">
              A cozy corner where great stories come alive. Browse our carefully curated collection 
              and dive deep into the worlds that have shaped literature.
            </p>
            <div className="mt-4 text-amber-700 font-serif italic">
              "A room without books is like a body without a soul" — Cicero
            </div>
          </div>
        </div>

        {/* Featured Collection */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-100 mb-2 font-serif" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
            }}>
              Featured Collection
            </h2>
            <div className="w-32 h-1 bg-amber-400 mx-auto rounded"></div>
          </div>

          {/* Book Shelf */}
          <div className="bg-gradient-to-b from-amber-900 to-amber-800 p-8 rounded-xl shadow-2xl border-4 border-amber-700" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23654321" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              
              {/* Moby Dick Book */}
              <Link href="/mobydick" className="group block">
                <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                  {/* Book Spine */}
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-lg shadow-xl border-2 border-slate-600 hover:shadow-2xl transition-all group-hover:from-slate-700 group-hover:to-slate-600">
                    
                    {/* Book Cover */}
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 p-6 rounded-lg mb-4 relative overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-2 right-2 text-4xl opacity-30">🐋</div>
                      <div className="absolute bottom-2 left-2 text-2xl opacity-20">⚓</div>
                      
                      <h3 className="text-2xl font-bold text-amber-100 mb-2 font-serif text-center">
                        MOBY DICK
                      </h3>
                      <p className="text-amber-200 text-center font-serif italic mb-3">
                        or, The Whale
                      </p>
                      <div className="text-center text-amber-300 text-sm font-serif">
                        Herman Melville
                      </div>
                      
                      {/* Vintage decoration */}
                      <div className="mt-4 flex justify-center">
                        <div className="w-20 h-0.5 bg-amber-400"></div>
                      </div>
                    </div>
                    
                    {/* Book Description */}
                    <p className="text-amber-100 text-sm leading-relaxed font-serif">
                      Journey into the depths of obsession and the sea. Explore themes of fate, 
                      nature, and the human condition aboard the Pequod.
                    </p>
                    
                    {/* Reading Status */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-green-400 text-xs font-serif">✓ Interactive Edition</span>
                      <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Coming Soon Book 1 */}
              <div className="group block opacity-60">
                <div className="relative transform transition-all duration-300">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-500 p-6 rounded-lg shadow-xl border-2 border-gray-400">
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-lg mb-4 relative overflow-hidden">
                      <div className="absolute top-2 right-2 text-4xl opacity-30">📖</div>
                      
                      <h3 className="text-2xl font-bold text-gray-300 mb-2 font-serif text-center">
                        COMING SOON
                      </h3>
                      <p className="text-gray-400 text-center font-serif italic mb-3">
                        Next Classic
                      </p>
                      <div className="text-center text-gray-400 text-sm font-serif">
                        Author TBA
                      </div>
                      
                      <div className="mt-4 flex justify-center">
                        <div className="w-20 h-0.5 bg-gray-500"></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed font-serif">
                      Another literary masterpiece will soon join our collection. 
                      Stay tuned for more immersive explorations.
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-gray-400 text-xs font-serif">⏳ In Development</span>
                      <span className="text-gray-400 text-xs font-serif">...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coming Soon Book 2 */}
              <div className="group block opacity-60">
                <div className="relative transform transition-all duration-300">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-500 p-6 rounded-lg shadow-xl border-2 border-gray-400">
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-lg mb-4 relative overflow-hidden">
                      <div className="absolute top-2 right-2 text-4xl opacity-30">📚</div>
                      
                      <h3 className="text-2xl font-bold text-gray-300 mb-2 font-serif text-center">
                        COMING SOON
                      </h3>
                      <p className="text-gray-400 text-center font-serif italic mb-3">
                        Future Addition
                      </p>
                      <div className="text-center text-gray-400 text-sm font-serif">
                        Author TBA
                      </div>
                      
                      <div className="mt-4 flex justify-center">
                        <div className="w-20 h-0.5 bg-gray-500"></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed font-serif">
                      Our literary parlor continues to grow. Each addition brings 
                      new perspectives and deeper understanding.
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-gray-400 text-xs font-serif">⏳ In Development</span>
                      <span className="text-gray-400 text-xs font-serif">...</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* About This Space */}
        <div className="text-center">
          <div className="inline-block p-6 rounded-xl shadow-lg" style={{
            background: 'rgba(254, 251, 240, 0.9)',
            border: '2px solid #8B4513'
          }}>
            <h3 className="text-2xl font-bold text-amber-900 mb-3 font-serif">Welcome to Your Literary Journey</h3>
            <p className="text-amber-800 font-serif leading-relaxed max-w-2xl">
              Each book in our collection offers an immersive, interactive experience. 
              Discover characters, themes, symbols, and structures through engaging visual guides 
              designed to deepen your appreciation of these timeless works.
            </p>
            <div className="mt-4 text-amber-700 font-serif italic text-sm">
              Happy reading! 📖✨
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 