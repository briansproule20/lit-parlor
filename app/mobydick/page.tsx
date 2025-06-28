import React from 'react'
import Link from 'next/link'

export default function MobyDick() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
        backgroundImage: 'url(/images/ship-storm.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
      
      {/* Navigation - Top Left */}
      <div className="absolute top-4 left-4 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
        >
          ⚓ Back to Harbor
        </Link>
      </div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Harbor Sign */}
        <div className="text-center -mb-8 relative">
          <div className="inline-block p-6 shadow-xl transform rotate-1 relative overflow-hidden" style={{
            border: '3px solid #8B4513',
            borderRadius: '8px',
            boxShadow: `
              0 6px 20px rgba(0, 0, 0, 0.4),
              inset 0 2px 4px rgba(255, 255, 255, 0.3),
              inset 0 -2px 4px rgba(139, 69, 19, 0.6)
            `
          }}>
            {/* Wood background */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'url(/images/wood-texture.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}></div>
            {/* Text overlay for better readability */}
            <div className="absolute inset-0" style={{
              background: 'rgba(139, 69, 19, 0.3)'
            }}></div>
            {/* Harbor sign pins */}
            <div className="absolute -top-3 left-6 w-4 h-4 rounded-full shadow-lg z-10" style={{
              background: `
                radial-gradient(circle at 25% 30%, rgba(72, 209, 204, 0.7) 0%, transparent 35%),
                radial-gradient(circle at 70% 60%, rgba(46, 125, 50, 0.6) 0%, transparent 40%),
                radial-gradient(circle at 40% 80%, rgba(139, 69, 19, 0.9) 0%, transparent 50%),
                linear-gradient(135deg, #CD853F 0%, #B87333 25%, #8B4513 50%, #654321 75%, #A0522D 100%)
              `,
              border: '1px solid #4A4A4A',
              boxShadow: `
                0 2px 6px rgba(0, 0, 0, 0.4),
                inset 0 1px 2px rgba(205, 133, 63, 0.6)
              `
            }}></div>
            <div className="absolute -top-3 right-6 w-4 h-4 rounded-full shadow-lg z-10" style={{
              background: `
                radial-gradient(circle at 40% 25%, rgba(46, 125, 50, 0.8) 0%, transparent 30%),
                radial-gradient(circle at 75% 70%, rgba(72, 209, 204, 0.5) 0%, transparent 45%),
                radial-gradient(circle at 20% 60%, rgba(139, 69, 19, 0.9) 0%, transparent 50%),
                linear-gradient(135deg, #8B4513 0%, #704214 25%, #A0522D 50%, #CD853F 75%, #B87333 100%)
              `,
              border: '1px solid #4A4A4A',
              boxShadow: `
                0 2px 6px rgba(0, 0, 0, 0.4),
                inset 0 1px 2px rgba(205, 133, 63, 0.6)
              `
            }}></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-amber-100 mb-2 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                letterSpacing: '0.1em'
              }}>
                NANTUCKET HARBOR
              </h2>
              <div className="w-full h-0.5 bg-amber-200 mb-2"></div>
              <p className="text-lg text-amber-200 font-serif" style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}>
                1851
              </p>
            </div>
          </div>
        </div>
        
        {/* Rope Border Frame */}
        <div className="relative mx-auto" style={{
          width: '1000px',
          height: '1000px',
          maxWidth: '95vw',
          maxHeight: '95vw'
        }}>
          {/* Rope border overlay - underneath */}
          <div className="absolute inset-0 z-1 pointer-events-none" style={{
            backgroundImage: 'url(/images/rope-border.png)',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}></div>
          {/* Bulletin board inside rope border */}
          <div className="absolute top-[14%] left-[10%] right-[10%] bottom-[14%] border-4 border-amber-800 shadow-2xl overflow-hidden rounded-lg z-10">
            {/* Wood background */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'url(/images/wood-texture.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}></div>
            
            {/* Enhanced weathered copper pins - corner anchors */}
            <div className="absolute top-4 left-4 w-6 h-6 rounded-full shadow-xl z-10" style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(72, 209, 204, 0.6) 0%, transparent 40%),
                radial-gradient(circle at 70% 20%, rgba(46, 125, 50, 0.4) 0%, transparent 30%),
                radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.9) 0%, transparent 60%),
                linear-gradient(135deg, #CD853F 0%, #B87333 15%, #8B4513 35%, #654321 50%, #704214 65%, #8B4513 85%, #A0522D 100%)
              `,
              border: '2px solid #4A4A4A',
              boxShadow: `
                0 4px 12px rgba(0, 0, 0, 0.6),
                0 2px 6px rgba(101, 67, 33, 0.8),
                inset 0 2px 4px rgba(205, 133, 63, 0.7),
                inset 0 -2px 3px rgba(101, 67, 33, 0.9)
              `
            }}>
              <div className="absolute inset-1 rounded-full" style={{
                background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)'
              }}></div>
            </div>
            <div className="absolute top-4 right-4 w-6 h-6 rounded-full shadow-xl z-10" style={{
              background: `
                radial-gradient(circle at 20% 40%, rgba(46, 125, 50, 0.7) 0%, transparent 35%),
                radial-gradient(circle at 80% 60%, rgba(72, 209, 204, 0.5) 0%, transparent 45%),
                radial-gradient(circle at 40% 20%, rgba(139, 69, 19, 0.9) 0%, transparent 50%),
                linear-gradient(135deg, #8B4513 0%, #654321 20%, #704214 40%, #B87333 60%, #CD853F 80%, #8B4513 100%)
              `,
              border: '2px solid #4A4A4A',
              boxShadow: `
                0 4px 12px rgba(0, 0, 0, 0.6),
                0 2px 6px rgba(101, 67, 33, 0.8),
                inset 0 2px 4px rgba(205, 133, 63, 0.7),
                inset 0 -2px 3px rgba(101, 67, 33, 0.9)
              `
            }}>
              <div className="absolute inset-1 rounded-full" style={{
                background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)'
              }}></div>
            </div>
            <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full shadow-xl z-10" style={{
              background: `
                radial-gradient(circle at 60% 30%, rgba(72, 209, 204, 0.8) 0%, transparent 30%),
                radial-gradient(circle at 30% 70%, rgba(46, 125, 50, 0.6) 0%, transparent 40%),
                radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.8) 0%, transparent 55%),
                linear-gradient(135deg, #704214 0%, #8B4513 25%, #A0522D 45%, #CD853F 65%, #B87333 85%, #654321 100%)
              `,
              border: '2px solid #4A4A4A',
              boxShadow: `
                0 4px 12px rgba(0, 0, 0, 0.6),
                0 2px 6px rgba(101, 67, 33, 0.8),
                inset 0 2px 4px rgba(205, 133, 63, 0.7),
                inset 0 -2px 3px rgba(101, 67, 33, 0.9)
              `
            }}>
              <div className="absolute inset-1 rounded-full" style={{
                background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)'
              }}></div>
            </div>
            <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full shadow-xl z-10" style={{
              background: `
                radial-gradient(circle at 40% 60%, rgba(46, 125, 50, 0.8) 0%, transparent 25%),
                radial-gradient(circle at 70% 30%, rgba(72, 209, 204, 0.6) 0%, transparent 50%),
                radial-gradient(circle at 10% 80%, rgba(139, 69, 19, 0.9) 0%, transparent 45%),
                linear-gradient(135deg, #A0522D 0%, #B87333 20%, #654321 40%, #8B4513 60%, #704214 80%, #CD853F 100%)
              `,
              border: '2px solid #4A4A4A',
              boxShadow: `
                0 4px 12px rgba(0, 0, 0, 0.6),
                0 2px 6px rgba(101, 67, 33, 0.8),
                inset 0 2px 4px rgba(205, 133, 63, 0.7),
                inset 0 -2px 3px rgba(101, 67, 33, 0.9)
              `
            }}>
              <div className="absolute inset-1 rounded-full" style={{
                background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)'
              }}></div>
            </div>
            
            <div className="p-6 relative z-10">
              {/* Title notice */}
                              <div className="text-center mb-8 relative">
                <div className="inline-block p-6 shadow-lg transform -rotate-1 relative" style={{
                  background: `
                    radial-gradient(circle at 25% 20%, rgba(252, 248, 227, 0.9) 0%, transparent 60%),
                    radial-gradient(circle at 75% 80%, rgba(245, 222, 179, 0.8) 0%, transparent 60%),
                    radial-gradient(circle at 10% 70%, rgba(238, 203, 161, 0.6) 0%, transparent 50%),
                    linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 20%, #DEB887 40%, #F5DEB3 60%, #E6D8B5 80%, #FEFBF0 100%)
                  `,
                  border: '2px solid #8B4513',
                  borderRadius: '4px',
                  boxShadow: `
                    0 4px 12px rgba(139, 69, 19, 0.3),
                    inset 0 1px 3px rgba(255, 255, 255, 0.7),
                    inset 0 -1px 2px rgba(139, 69, 19, 0.2)
                  `
                }}>
                  {/* Title notice pin */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full shadow-xl z-10" style={{
                    background: `
                      radial-gradient(circle at 30% 25%, rgba(72, 209, 204, 0.8) 0%, transparent 30%),
                      radial-gradient(circle at 70% 60%, rgba(46, 125, 50, 0.7) 0%, transparent 35%),
                      radial-gradient(circle at 40% 85%, rgba(139, 69, 19, 0.9) 0%, transparent 50%),
                      linear-gradient(135deg, #CD853F 0%, #B87333 15%, #8B4513 30%, #654321 45%, #704214 60%, #A0522D 75%, #B87333 90%, #CD853F 100%)
                    `,
                    border: '2px solid #4A4A4A',
                    boxShadow: `
                      0 4px 10px rgba(0, 0, 0, 0.6),
                      0 2px 5px rgba(101, 67, 33, 0.8),
                      inset 0 2px 4px rgba(205, 133, 63, 0.7),
                      inset 0 -2px 3px rgba(101, 67, 33, 0.9)
                    `
                  }}>
                    <div className="absolute inset-1 rounded-full" style={{
                      background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.5) 0%, transparent 50%)'
                    }}></div>
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-amber-600 rounded-t shadow"></div>
                  <h1 className="text-4xl font-bold text-amber-900 mb-3 font-serif" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                    MOBY DICK
                  </h1>
                  <div className="w-full h-1 bg-amber-700 mb-3"></div>
                  <p className="text-lg text-amber-800 font-serif leading-relaxed">
                    "Call me Ishmael" - A Maritime Analysis
                  </p>
                </div>
              </div>
              
              {/* Posted notices grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {/* Themes notice */}
                <div className="p-4 shadow-lg transform rotate-1 relative bg-amber-50 border-2 border-amber-600 rounded">
                  {/* Notice pin */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full shadow-xl z-10" style={{
                    background: `
                      radial-gradient(circle at 25% 35%, rgba(72, 209, 204, 0.7) 0%, transparent 35%),
                      radial-gradient(circle at 75% 25%, rgba(46, 125, 50, 0.5) 0%, transparent 40%),
                      radial-gradient(circle at 30% 80%, rgba(139, 69, 19, 0.9) 0%, transparent 55%),
                      linear-gradient(135deg, #CD853F 0%, #B87333 20%, #8B4513 40%, #654321 60%, #704214 80%, #A0522D 100%)
                    `,
                    border: '2px solid #4A4A4A',
                    boxShadow: `
                      0 3px 8px rgba(0, 0, 0, 0.5),
                      0 1px 4px rgba(101, 67, 33, 0.7),
                      inset 0 1px 3px rgba(205, 133, 63, 0.6),
                      inset 0 -1px 2px rgba(101, 67, 33, 0.8)
                    `
                  }}>
                    <div className="absolute inset-1 rounded-full" style={{
                      background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)'
                    }}></div>
                  </div>
                  <div className="text-center border-b-2 border-amber-600 pb-4 mb-4">
                    <h3 className="text-2xl font-bold text-amber-900 font-serif">THEMES</h3>
                    <div className="text-sm text-amber-700 font-serif">~ HARBOR MASTER ~</div>
                  </div>
                  <div className="space-y-3 text-amber-800 font-serif">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">⚔️</span>
                      <span>Obsession & Revenge</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">🌊</span>
                      <span>Man vs. Nature</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">⚖️</span>
                      <span>Fate & Free Will</span>
                    </div>
                  </div>
                </div>

                {/* Characters notice */}
                <div className="p-4 shadow-lg transform -rotate-1 relative bg-amber-50 border-2 border-amber-600 rounded">
                  {/* Notice pin */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full shadow-xl z-30" style={{
                    background: `
                      radial-gradient(circle at 40% 30%, rgba(46, 125, 50, 0.8) 0%, transparent 30%),
                      radial-gradient(circle at 60% 70%, rgba(72, 209, 204, 0.6) 0%, transparent 45%),
                      radial-gradient(circle at 20% 60%, rgba(139, 69, 19, 0.9) 0%, transparent 50%),
                      linear-gradient(135deg, #8B4513 0%, #704214 25%, #A0522D 50%, #B87333 75%, #CD853F 100%)
                    `,
                    border: '2px solid #4A4A4A',
                    boxShadow: `
                      0 3px 8px rgba(0, 0, 0, 0.5),
                      0 1px 4px rgba(101, 67, 33, 0.7),
                      inset 0 1px 3px rgba(205, 133, 63, 0.6),
                      inset 0 -1px 2px rgba(101, 67, 33, 0.8)
                    `
                  }}>
                    <div className="absolute inset-1 rounded-full" style={{
                      background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)'
                    }}></div>
                  </div>
                  <div className="text-center border-b-2 border-amber-600 pb-4 mb-4">
                    <h3 className="text-2xl font-bold text-amber-900 font-serif">CREW MANIFEST</h3>
                    <div className="text-sm text-amber-700 font-serif">~ PEQUOD SHIPPING ~</div>
                  </div>
                  <div className="space-y-3 text-amber-800 font-serif">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">👨‍✈️</span>
                      <span>Captain Ahab</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">📝</span>
                      <span>Ishmael</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">🗡️</span>
                      <span>Queequeg</span>
                    </div>
                  </div>
                </div>

                {/* Structure notice */}
                <div className="p-4 shadow-lg transform rotate-2 relative bg-amber-50 border-2 border-amber-600 rounded">
                  {/* Notice pin */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full shadow-xl z-30" style={{
                    background: `
                      radial-gradient(circle at 50% 20%, rgba(72, 209, 204, 0.9) 0%, transparent 25%),
                      radial-gradient(circle at 30% 80%, rgba(46, 125, 50, 0.6) 0%, transparent 40%),
                      radial-gradient(circle at 80% 50%, rgba(139, 69, 19, 0.8) 0%, transparent 55%),
                      linear-gradient(135deg, #A0522D 0%, #CD853F 20%, #8B4513 40%, #704214 60%, #B87333 80%, #654321 100%)
                    `,
                    border: '2px solid #4A4A4A',
                    boxShadow: `
                      0 3px 8px rgba(0, 0, 0, 0.5),
                      0 1px 4px rgba(101, 67, 33, 0.7),
                      inset 0 1px 3px rgba(205, 133, 63, 0.6),
                      inset 0 -1px 2px rgba(101, 67, 33, 0.8)
                    `
                  }}>
                    <div className="absolute inset-1 rounded-full" style={{
                      background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)'
                    }}></div>
                  </div>
                  <div className="text-center border-b-2 border-amber-600 pb-4 mb-4">
                    <h3 className="text-2xl font-bold text-amber-900 font-serif">STRUCTURE</h3>
                    <div className="text-sm text-amber-700 font-serif">~ NAVIGATION CHART ~</div>
                  </div>
                  <div className="space-y-3 text-amber-800 font-serif">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">🧭</span>
                      <span>Epic Journey</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">📖</span>
                      <span>Episodic Chapters</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">🎭</span>
                      <span>Multiple Perspectives</span>
                    </div>
                  </div>
                </div>

                {/* Symbolism notice */}
                <div className="p-4 shadow-lg transform -rotate-2 relative bg-amber-50 border-2 border-amber-600 rounded">
                  {/* Notice pin */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full shadow-xl z-30" style={{
                    background: `
                      radial-gradient(circle at 70% 40%, rgba(46, 125, 50, 0.9) 0%, transparent 20%),
                      radial-gradient(circle at 20% 30%, rgba(72, 209, 204, 0.7) 0%, transparent 35%),
                      radial-gradient(circle at 60% 80%, rgba(139, 69, 19, 0.9) 0%, transparent 45%),
                      linear-gradient(135deg, #654321 0%, #8B4513 25%, #B87333 50%, #CD853F 75%, #A0522D 100%)
                    `,
                    border: '2px solid #4A4A4A',
                    boxShadow: `
                      0 3px 8px rgba(0, 0, 0, 0.5),
                      0 1px 4px rgba(101, 67, 33, 0.7),
                      inset 0 1px 3px rgba(205, 133, 63, 0.6),
                      inset 0 -1px 2px rgba(101, 67, 33, 0.8)
                    `
                  }}>
                    <div className="absolute inset-1 rounded-full" style={{
                      background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)'
                    }}></div>
                  </div>
                  <div className="text-center border-b-2 border-amber-600 pb-4 mb-4">
                    <h3 className="text-2xl font-bold text-amber-900 font-serif">SYMBOLISM</h3>
                    <div className="text-sm text-amber-700 font-serif">~ SCHOLAR'S NOTES ~</div>
                  </div>
                  <div className="space-y-3 text-amber-800 font-serif">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">🐋</span>
                      <span>The White Whale</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">🌊</span>
                      <span>The Ocean</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">⚰️</span>
                      <span>Queequeg's Coffin</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div> {/* Close bulletin board container */}
      </div>
    </main>
  )
} 