'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function MobyDick() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [selectedThemeItem, setSelectedThemeItem] = useState<string | null>(null);
  const [selectedStructureItem, setSelectedStructureItem] = useState<string | null>(null);
  const [selectedSymbolismItem, setSelectedSymbolismItem] = useState<string | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
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
          🏠 Return Home
        </Link>
      </div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Harbor Sign */}
        <div className="flex justify-center -mb-8 relative">
          <div 
            className="inline-block p-6 shadow-xl transform rotate-1 relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-2 cursor-pointer" 
            onClick={() => {
              setSelectedSetting(selectedSetting === 'nantucket' ? null : 'nantucket');
              setSelectedCharacter(null);
              setSelectedThemeItem(null);
              setSelectedStructureItem(null);
              setSelectedSymbolismItem(null);
              setSelectedAuthor(null);
            }}
            style={{
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
            
            <div className="relative z-10 text-center">
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
          height: '1200px',
          maxWidth: '95vw',
          maxHeight: 'none'
        }}>
          {/* Rope border overlay - underneath */}
          <div className="absolute inset-0 z-1 pointer-events-none" style={{
            backgroundImage: 'url(/images/rope-border.png)',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}></div>
          {/* Bulletin board inside rope border */}
          <div className="absolute top-[14%] left-[10%] right-[10%] bottom-[14%] border-4 border-amber-800 shadow-2xl overflow-visible rounded-lg z-10">
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
                <div 
                  className="inline-block p-6 shadow-lg transform -rotate-1 relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-2 cursor-pointer" 
                  onClick={() => {
                    setSelectedAuthor(selectedAuthor === 'melville' ? null : 'melville');
                    setSelectedCharacter(null);
                    setSelectedThemeItem(null);
                    setSelectedStructureItem(null);
                    setSelectedSymbolismItem(null);
                    setSelectedSetting(null);
                  }}
                  style={{
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
                    Or, The Whale. By Herman Melville.
                  </p>
                </div>
              </div>
              
              {/* Posted notices grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 items-start">
                {/* Themes notice */}
                <div className="p-3 shadow-lg transform rotate-1 relative bg-amber-50 border-2 border-amber-600 rounded transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-2">
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
                  <div className="text-center border-b-2 border-amber-600 pb-3 mb-3">
                    <h3 className="text-2xl font-bold text-amber-900 font-serif">THEMES</h3>
                    <div className="text-sm text-amber-700 font-serif">~ BY ORDER OF THE HARBOR MASTER ~</div>
                  </div>
                  <div className="space-y-0.5 text-amber-800 font-serif">
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-1 rounded transition-colors"
                      onClick={() => {
                        setSelectedThemeItem(selectedThemeItem === 'obsession' ? null : 'obsession');
                        setSelectedCharacter(null);
                        setSelectedStructureItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">⚔️</span>
                      <span>Obsession & Revenge</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-1 rounded transition-colors"
                      onClick={() => {
                        setSelectedThemeItem(selectedThemeItem === 'nature' ? null : 'nature');
                        setSelectedCharacter(null);
                        setSelectedStructureItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">🌊</span>
                      <span>Man vs. Nature</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-1 rounded transition-colors"
                      onClick={() => {
                        setSelectedThemeItem(selectedThemeItem === 'fate' ? null : 'fate');
                        setSelectedCharacter(null);
                        setSelectedStructureItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">⚖️</span>
                      <span>Fate & Free Will</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-1 rounded transition-colors"
                      onClick={() => {
                        setSelectedThemeItem(selectedThemeItem === 'morality' ? null : 'morality');
                        setSelectedCharacter(null);
                        setSelectedStructureItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">⚓</span>
                      <span>Morality</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-1 rounded transition-colors"
                      onClick={() => {
                        setSelectedThemeItem(selectedThemeItem === 'truth' ? null : 'truth');
                        setSelectedCharacter(null);
                        setSelectedStructureItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">🔍</span>
                      <span>Truth</span>
                    </div>
                  </div>
                </div>

                {/* Characters notice */}
                <div className="p-3 shadow-lg transform -rotate-1 relative bg-amber-50 border-2 border-amber-600 rounded transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-2">
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
                    <div className="text-sm text-amber-700 font-serif">~ THE PEQUOD WHALING SHIP ~</div>
                  </div>
                  <div className="space-y-1 text-amber-800 font-serif">
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedCharacter(selectedCharacter === 'ahab' ? null : 'ahab');
                        setSelectedThemeItem(null);
                        setSelectedStructureItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">👨‍✈️</span>
                      <span>Captain Ahab</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedCharacter(selectedCharacter === 'ishmael' ? null : 'ishmael');
                        setSelectedThemeItem(null);
                        setSelectedStructureItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">📝</span>
                      <span>Ishmael</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedCharacter(selectedCharacter === 'queequeg' ? null : 'queequeg');
                        setSelectedThemeItem(null);
                        setSelectedStructureItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">🗡️</span>
                      <span>Queequeg</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedCharacter(selectedCharacter === 'starbuck' ? null : 'starbuck');
                        setSelectedThemeItem(null);
                        setSelectedStructureItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">🏹</span>
                      <span>Starbuck</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedCharacter(selectedCharacter === 'stubb' ? null : 'stubb');
                        setSelectedThemeItem(null);
                        setSelectedStructureItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">😄</span>
                      <span>Stubb</span>
                    </div>

                  </div>
                </div>

                {/* Structure notice */}
                <div className="p-3 shadow-lg transform rotate-2 relative bg-amber-50 border-2 border-amber-600 rounded transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3">
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
                    <div className="text-sm text-amber-700 font-serif">~ NAVIGATIONAL CHARTS ~</div>
                  </div>
                  <div className="space-y-1 text-amber-800 font-serif">
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedStructureItem(selectedStructureItem === 'journey' ? null : 'journey');
                        setSelectedCharacter(null);
                        setSelectedThemeItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">🧭</span>
                      <span>Epic Journey</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedStructureItem(selectedStructureItem === 'chapters' ? null : 'chapters');
                        setSelectedCharacter(null);
                        setSelectedThemeItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">📖</span>
                      <span>Episodic Chapters</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedStructureItem(selectedStructureItem === 'perspectives' ? null : 'perspectives');
                        setSelectedCharacter(null);
                        setSelectedThemeItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">🎭</span>
                      <span>Multiple Perspectives</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedStructureItem(selectedStructureItem === 'stylistic' ? null : 'stylistic');
                        setSelectedCharacter(null);
                        setSelectedThemeItem(null);
                        setSelectedSymbolismItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">🎨</span>
                      <span>Stylistic Variation</span>
                    </div>
                  </div>
                </div>

                {/* Symbolism notice */}
                <div className="p-4 shadow-lg transform -rotate-2 relative bg-amber-50 border-2 border-amber-600 rounded transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-3">
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
                  <div className="space-y-1 text-amber-800 font-serif">
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedSymbolismItem(selectedSymbolismItem === 'whale' ? null : 'whale');
                        setSelectedCharacter(null);
                        setSelectedThemeItem(null);
                        setSelectedStructureItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">🐋</span>
                      <span>The White Whale</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedSymbolismItem(selectedSymbolismItem === 'ocean' ? null : 'ocean');
                        setSelectedCharacter(null);
                        setSelectedThemeItem(null);
                        setSelectedStructureItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">🌊</span>
                      <span>The Ocean</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedSymbolismItem(selectedSymbolismItem === 'coffin' ? null : 'coffin');
                        setSelectedCharacter(null);
                        setSelectedThemeItem(null);
                        setSelectedStructureItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">⚰️</span>
                      <span>Queequeg's Coffin</span>
                    </div>
                    <div 
                      className="flex items-start gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded transition-colors"
                      onClick={() => {
                        setSelectedSymbolismItem(selectedSymbolismItem === 'doubloon' ? null : 'doubloon');
                        setSelectedCharacter(null);
                        setSelectedThemeItem(null);
                        setSelectedStructureItem(null);
                        setSelectedAuthor(null);
                        setSelectedSetting(null);
                      }}
                    >
                      <span className="text-amber-600">🪙</span>
                      <span>The Doubloon</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div> {/* Close bulletin board container */}
        
        {/* Set Sail Button */}
        <div className="text-center mt-0">
          <Link 
            href="/mobydickmodule" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 font-bold text-xl rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-amber-800 font-serif hover:from-amber-800 hover:to-amber-950"
          >
            ⛵ Set Sail for Deep Waters
          </Link>
        </div>
      </div>

      {/* Interactive Popups */}
      {selectedSetting === 'nantucket' && (
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 slide-in-left">
          <div className="bg-amber-50 p-8 rounded-lg shadow-2xl max-w-md border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-amber-900">🏛️ Nantucket Harbor, 1851</h3>
              <button onClick={() => setSelectedSetting(null)} className="text-amber-600 hover:text-amber-800 text-2xl">&times;</button>
            </div>
            
            <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
              <p className="text-amber-800 italic text-lg leading-relaxed">
                "Nantucket! Take out your map and look at it... What do you see? — Nothing but a plain of sand. But what do you see? — Nothing but waves."
              </p>
              <p className="text-amber-700 text-sm mt-2 text-right">— Herman Melville</p>
            </div>

            <div className="space-y-5 text-amber-800">
              <div>
                <h4 className="font-bold text-lg mb-2 text-amber-900">⚓ The Whaling Capital</h4>
                <p className="text-sm leading-relaxed">In 1851, this small island 30 miles south of Cape Cod commanded the world's whaling industry. Over 70 vessels called Nantucket home, their holds filled with precious sperm oil that illuminated the civilized world.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2 text-amber-900">🌊 Maritime Heritage</h4>
                <p className="text-sm leading-relaxed">For generations, Nantucket families sent their sons to sea. The island's Quaker population built a maritime empire through skill, determination, and intimate knowledge of the whale's domain.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2 text-amber-900">🗺️ Global Reach</h4>
                <p className="text-sm leading-relaxed">From this remote harbor, ships sailed to the Pacific, the Indian Ocean, and the Arctic, making Nantucket one of the wealthiest communities in America despite its isolation.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedAuthor === 'melville' && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 slide-in-right">
          <div className="bg-amber-50 p-8 rounded-lg shadow-2xl max-w-md border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-amber-900">📚 Herman Melville</h3>
              <button onClick={() => setSelectedAuthor(null)} className="text-amber-600 hover:text-amber-800 text-2xl">&times;</button>
            </div>
            
            <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
              <p className="text-amber-800 italic text-lg leading-relaxed">
                "I try all things, I achieve what I can."
              </p>
              <p className="text-amber-700 text-sm mt-2 text-right">— Herman Melville</p>
            </div>

            <div className="space-y-5 text-amber-800">
              <div>
                <h4 className="font-bold text-lg mb-2 text-amber-900">🌊 Life at Sea (1819-1891)</h4>
                <p className="text-sm leading-relaxed">Born to a prosperous New York merchant family that fell into ruin, Melville turned to the sea at 19. His experiences aboard merchant ships and whaling vessels provided the authentic maritime detail that makes <em>Moby Dick</em> so vivid.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2 text-amber-900">📖 Literary Journey</h4>
                <p className="text-sm leading-relaxed">Initially celebrated for his South Seas adventures <em>Typee</em> and <em>Omoo</em>, Melville's increasingly complex works puzzled contemporary readers. <em>Moby Dick</em> sold poorly during his lifetime, only achieving recognition in the 20th century.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2 text-amber-900">⚡ Philosophical Vision</h4>
                <p className="text-sm leading-relaxed">Influenced by Shakespeare, the Bible, and contemporary philosophy, Melville created works that grappled with humanity's place in an often incomprehensible universe. His writing anticipated modernist themes by decades.</p>
              </div>
            </div>

            <div className="mt-6 p-3 bg-amber-200 rounded italic text-center text-amber-900 text-sm">
              "Call me Ishmael." — The most famous opening line in American literature
            </div>
          </div>
        </div>
      )}

      {/* Individual Theme Popups - Left Side (NO background overlay) */}
      {selectedThemeItem === 'obsession' && (
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 slide-in-left">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">⚔️ Obsession & Revenge</h3>
              <button onClick={() => setSelectedThemeItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">Ahab's consuming quest for vengeance against the white whale drives the entire narrative, showing how obsession can destroy both the individual and those around them. His monomaniacal pursuit becomes a cautionary tale about the dangers of unchecked passion.</p>
          </div>
        </div>
      )}

      {selectedThemeItem === 'nature' && (
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 slide-in-left">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">🌊 Man vs. Nature</h3>
              <button onClick={() => setSelectedThemeItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">The eternal struggle between humanity and the natural world, with the ocean representing both life's sustenance and its ultimate mystery and danger. The sea is both provider and destroyer, reflecting nature's dual character.</p>
          </div>
        </div>
      )}

      {selectedThemeItem === 'fate' && (
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 slide-in-left">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">⚖️ Fate & Free Will</h3>
              <button onClick={() => setSelectedThemeItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">Questions whether our destinies are predetermined or if we have the power to shape our own paths, explored through the crew's various responses to their voyage. Each character represents different philosophies about human agency.</p>
          </div>
        </div>
      )}

      {selectedThemeItem === 'morality' && (
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 slide-in-left">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">⚓ Morality</h3>
              <button onClick={() => setSelectedThemeItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">The complex moral landscape of the sea, where traditional ethical frameworks are challenged by survival, duty, and conflicting loyalties. Starbuck's moral struggles against Ahab's commands highlight the tension between conscience and authority.</p>
          </div>
        </div>
      )}

      {selectedThemeItem === 'truth' && (
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 slide-in-left">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">🔍 Truth</h3>
              <button onClick={() => setSelectedThemeItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">The elusive nature of truth and knowledge, as characters seek meaning in an indifferent universe. The whale itself becomes a blank canvas onto which different interpretations are projected, questioning whether absolute truth exists.</p>
          </div>
        </div>
      )}

      {/* Individual Character Popups - Right Side (NO background overlay) */}
      {selectedCharacter === 'ahab' && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 slide-in-right">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl w-96 border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-amber-900" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>👨‍✈️ Captain Ahab</h3>
              <button onClick={() => setSelectedCharacter(null)} className="text-amber-600 hover:text-amber-800 text-2xl">&times;</button>
            </div>
            
            <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
              <p className="text-amber-800 italic text-lg leading-relaxed">
                "To the last, I grapple with thee; From Hell's heart, I stab at thee; For hate's sake, I spit my last breath at thee."
              </p>
              <p className="text-amber-700 text-sm mt-2 text-right">— Captain Ahab</p>
            </div>

            <p className="text-amber-800 text-sm leading-relaxed">The monomaniacal captain driven by his obsession to kill the white whale that took his leg. Represents the destructive nature of obsession and the dangers of unchecked authority. His charismatic leadership masks a profound spiritual wound.</p>
          </div>
        </div>
      )}

      {selectedCharacter === 'ishmael' && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 slide-in-right">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl w-96 border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-amber-900" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>📝 Ishmael</h3>
              <button onClick={() => setSelectedCharacter(null)} className="text-amber-600 hover:text-amber-800 text-2xl">&times;</button>
            </div>
            
            <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
              <p className="text-amber-800 italic text-lg leading-relaxed">
                "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse..."
              </p>
              <p className="text-amber-700 text-sm mt-2 text-right">— Ishmael</p>
            </div>

            <p className="text-amber-800 text-sm leading-relaxed">The story's narrator and philosophical observer. A young man seeking adventure and meaning who becomes our guide through the maritime world and its deeper mysteries. His survival allows him to tell the tale of the Pequod.</p>
          </div>
        </div>
      )}

      {selectedCharacter === 'queequeg' && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 slide-in-right">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl w-96 border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-amber-900" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>🗡️ Queequeg</h3>
              <button onClick={() => setSelectedCharacter(null)} className="text-amber-600 hover:text-amber-800 text-2xl">&times;</button>
            </div>
            
            <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
              <p className="text-amber-800 italic text-lg leading-relaxed">
                "It's better to sleep with a sober cannibal than a drunken Christian."
              </p>
              <p className="text-amber-700 text-sm mt-2 text-right">— Ishmael, about Queequeg</p>
            </div>

            <p className="text-amber-800 text-sm leading-relaxed">Ishmael's loyal friend and skilled harpooner from the South Pacific. Represents noble savagery and challenges contemporary notions of civilization and barbarism. His friendship with Ishmael transcends cultural boundaries.</p>
          </div>
        </div>
      )}

      {selectedCharacter === 'starbuck' && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 slide-in-right">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl w-96 border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-amber-900" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>🏹 Starbuck</h3>
              <button onClick={() => setSelectedCharacter(null)} className="text-amber-600 hover:text-amber-800 text-2xl">&times;</button>
            </div>
            
            <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
              <p className="text-amber-800 italic text-lg leading-relaxed">
                "I will have no man in my boat who is not afraid of a whale."
              </p>
              <p className="text-amber-700 text-sm mt-2 text-right">— Starbuck</p>
            </div>

            <p className="text-amber-800 text-sm leading-relaxed">The thoughtful first mate who represents moral conscience and rational thinking, often in conflict with Ahab's mad quest. A Quaker from Nantucket, he embodies prudence and responsibility but is ultimately powerless against his captain's obsession.</p>
          </div>
        </div>
      )}

      {selectedCharacter === 'stubb' && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 slide-in-right">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl w-96 border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-amber-900" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>😄 Stubb</h3>
              <button onClick={() => setSelectedCharacter(null)} className="text-amber-600 hover:text-amber-800 text-2xl">&times;</button>
            </div>
            
            <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
              <p className="text-amber-800 italic text-lg leading-relaxed">
                "A laugh's the wisest, easiest answer to all that's queer."
              </p>
              <p className="text-amber-700 text-sm mt-2 text-right">— Stubb</p>
            </div>

            <p className="text-amber-800 text-sm leading-relaxed">The cheerful second mate who faces danger with humor and philosophy. His optimistic nature and casual approach to life's perils provides comic relief while masking deeper questions about mortality and meaning in an indifferent universe.</p>
          </div>
        </div>
      )}



      {/* Individual Structure Popups - Left Side (NO background overlay) */}
      {selectedStructureItem === 'journey' && (
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 slide-in-left">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">🧭 Epic Journey</h3>
              <button onClick={() => setSelectedStructureItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">Follows the classical structure of an epic voyage, with departure, trials at sea, and ultimate confrontation. The journey serves as both literal adventure and metaphysical quest for meaning and understanding.</p>
          </div>
        </div>
      )}

      {selectedStructureItem === 'chapters' && (
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 slide-in-left">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">📖 Episodic Chapters</h3>
              <button onClick={() => setSelectedStructureItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">135 chapters vary wildly in style and content - from dramatic dialogue to scientific treatises on whales, creating an encyclopedic approach to storytelling that mirrors the complexity of life itself.</p>
          </div>
        </div>
      )}

      {selectedStructureItem === 'perspectives' && (
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 slide-in-left">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">🎭 Multiple Perspectives</h3>
              <button onClick={() => setSelectedStructureItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">Shifts between Ishmael's first-person narration and omniscient third-person accounts, allowing for both intimate personal reflection and broader dramatic scope that encompasses the entire crew's experience.</p>
          </div>
        </div>
      )}

      {selectedStructureItem === 'stylistic' && (
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 slide-in-left">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">🎨 Stylistic Variation</h3>
              <button onClick={() => setSelectedStructureItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">Melville employs dramatic monologues, technical exposition, philosophical meditation, and poetic language throughout. This stylistic diversity mirrors the novel's encyclopedic scope and reflects the complexity of human experience and knowledge.</p>
          </div>
        </div>
      )}

      {/* Individual Symbolism Popups - Right Side (NO background overlay) */}
      {selectedSymbolismItem === 'whale' && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 slide-in-right">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">🐋 The White Whale</h3>
              <button onClick={() => setSelectedSymbolismItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">Represents the unknowable, the sublime in nature, and the ultimate object of human obsession. Can symbolize God, nature's power, or the blank meaninglessness of existence - its interpretation depends on the observer.</p>
          </div>
        </div>
      )}

      {selectedSymbolismItem === 'ocean' && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 slide-in-right">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">🌊 The Ocean</h3>
              <button onClick={() => setSelectedSymbolismItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">The vast, mysterious sea represents the unconscious mind, the source of life, and the ultimate frontier of human knowledge and experience. It is both womb and tomb, creator and destroyer.</p>
          </div>
        </div>
      )}

      {selectedSymbolismItem === 'coffin' && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 slide-in-right">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">⚰️ Queequeg's Coffin</h3>
              <button onClick={() => setSelectedSymbolismItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">Transforms from a symbol of death into one of salvation, representing the cyclical nature of life and death and the power of friendship to transcend mortality. What was meant for burial becomes the means of rescue.</p>
          </div>
        </div>
      )}

      {selectedSymbolismItem === 'doubloon' && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 slide-in-right">
          <div className="bg-amber-50 p-6 rounded-lg shadow-2xl max-w-sm border-2 border-amber-600 font-serif">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-amber-900">🪙 The Doubloon</h3>
              <button onClick={() => setSelectedSymbolismItem(null)} className="text-amber-600 hover:text-amber-800 text-xl">&times;</button>
            </div>
            <p className="text-amber-800 text-sm">The gold coin nailed to the mast represents different things to different characters, showing how meaning is subjective and personal interpretation shapes reality. Each crew member sees their own desires and fears reflected in its surface.</p>
          </div>
        </div>
      )}

      {/* Structure Popup - LEFT SIDE */}
      {selectedStructureItem === 'structure' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-start z-50" onClick={() => setSelectedStructureItem(null)}>
          <div className="bg-amber-50 p-8 rounded-lg shadow-2xl max-w-md mx-4 ml-8 transform transition-all duration-300 slide-in-left font-serif" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-amber-900 font-serif">Narrative Structure</h3>
              <button onClick={() => setSelectedStructureItem(null)} className="text-amber-600 hover:text-amber-800 text-2xl">&times;</button>
            </div>
            <div className="space-y-4 text-amber-800">
              <div>
                <h4 className="font-bold text-base mb-1">🧭 Epic Journey</h4>
                <p className="text-sm">Follows the classical structure of an epic voyage, with departure, trials at sea, and ultimate confrontation. The journey serves as both literal adventure and metaphysical quest.</p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">📖 Episodic Chapters</h4>
                <p className="text-sm">135 chapters vary wildly in style and content - from dramatic dialogue to scientific treatises on whales, creating a encyclopedic approach to storytelling.</p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">🎭 Multiple Perspectives</h4>
                <p className="text-sm">Shifts between Ishmael's first-person narration and omniscient third-person accounts, allowing for both intimate personal reflection and broader dramatic scope.</p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">🌊 Cyclical Patterns</h4>
                <p className="text-sm">Repetitive motifs of departure and return, hunting and being hunted, create a sense of fate and inevitability leading to the final confrontation.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Characters Popup - RIGHT SIDE */}
      {selectedCharacter === 'characters' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50" onClick={() => setSelectedCharacter(null)}>
          <div className="bg-amber-50 p-8 rounded-lg shadow-2xl max-w-md mx-4 mr-8 transform transition-all duration-300 slide-in-right font-serif" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-amber-900 font-serif">The Crew of the Pequod</h3>
              <button onClick={() => setSelectedCharacter(null)} className="text-amber-600 hover:text-amber-800 text-2xl">&times;</button>
            </div>
            <div className="space-y-4 text-amber-800">
              <div>
                <h4 className="font-bold text-base mb-1">👨‍✈️ Captain Ahab</h4>
                <p className="text-sm">The monomaniacal captain driven by his obsession to kill the white whale that took his leg. Represents the destructive nature of obsession and the dangers of unchecked authority.</p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">📝 Ishmael</h4>
                <p className="text-sm">The story's narrator and philosophical observer. A young man seeking adventure and meaning who becomes our guide through the maritime world and its deeper mysteries.</p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">🗡️ Queequeg</h4>
                <p className="text-sm">Ishmael's loyal friend and skilled harpooner from the South Pacific. Represents noble savagery and challenges contemporary notions of civilization and barbarism.</p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">🏹 Starbuck</h4>
                <p className="text-sm">The thoughtful first mate who represents moral conscience and rational thinking, often in conflict with Ahab's mad quest.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Symbolism Popup - RIGHT SIDE */}
      {selectedSymbolismItem === 'symbolism' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50" onClick={() => setSelectedSymbolismItem(null)}>
          <div className="bg-amber-50 p-8 rounded-lg shadow-2xl max-w-md mx-4 mr-8 transform transition-all duration-300 slide-in-right font-serif" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-amber-900 font-serif">Key Symbols</h3>
              <button onClick={() => setSelectedSymbolismItem(null)} className="text-amber-600 hover:text-amber-800 text-2xl">&times;</button>
            </div>
            <div className="space-y-4 text-amber-800">
              <div>
                <h4 className="font-bold text-base mb-1">🐋 The White Whale (Moby Dick)</h4>
                <p className="text-sm">Represents the unknowable, the sublime in nature, and the ultimate object of human obsession. Can symbolize God, nature's power, or the blank meaninglessness of existence.</p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">🌊 The Ocean</h4>
                <p className="text-sm">The vast, mysterious sea represents the unconscious mind, the source of life, and the ultimate frontier of human knowledge and experience.</p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">⚰️ Queequeg's Coffin</h4>
                <p className="text-sm">Transforms from a symbol of death into one of salvation, representing the cyclical nature of life and death and the power of friendship to transcend mortality.</p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">⚡ The Doubloon</h4>
                <p className="text-sm">The gold coin nailed to the mast represents different things to different characters, showing how meaning is subjective and personal interpretation shapes reality.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
} 