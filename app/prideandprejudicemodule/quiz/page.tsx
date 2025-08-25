import React from 'react'
import Link from 'next/link'

export default function PrideAndPrejudiceQuiz() {
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
          href="/prideandprejudicemodule" 
          className="inline-flex items-center gap-2 text-rose-800 hover:text-rose-900 font-bold text-lg px-6 py-3 bg-rose-50/90 rounded-lg border-2 border-rose-600 shadow-md hover:shadow-lg transition-all"
        >
          🏰 Return to Drawing Room
        </Link>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-rose-800 hover:text-rose-900 font-bold text-lg px-6 py-3 bg-rose-50/90 rounded-lg border-2 border-rose-600 shadow-md hover:shadow-lg transition-all"
        >
        
        {/* Quiz Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 shadow-2xl transform relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-3xl" style={{
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
            
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-rose-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '0.05em'
              }}>
                🎯 QUICK QUIZ
              </h1>
              <div className="w-full h-2 bg-rose-700 mb-4"></div>
              <p className="text-2xl text-rose-800 font-serif leading-relaxed">
                Test your knowledge of Austen's beloved novel
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-rose-900/90 to-pink-800/90 border-4 border-rose-400 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Quiz Coming Soon
            </h2>
            <p className="text-rose-200 text-lg mb-6 font-serif">
              The interactive quiz for Pride and Prejudice is currently in development.
            </p>
            <p className="text-rose-200 text-lg mb-6 font-serif">
              Soon you'll be able to test your knowledge of characters, plot, themes, 
              and historical context with engaging questions and detailed explanations.
            </p>
            <Link href="/prideandprejudicemodule" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg">
              💕 Return to Drawing Room
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
} 