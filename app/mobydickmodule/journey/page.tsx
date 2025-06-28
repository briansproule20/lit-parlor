'use client'
import React from 'react'
import Link from 'next/link'

export default function Journey() {
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
          href="/mobydickmodule" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
        >
          ⚓ Return to Deep Waters
        </Link>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
        >
          🏠 Return to Parlor
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* Journey Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 shadow-2xl transform -rotate-1 relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:-rotate-2" style={{
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
              <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '0.05em'
              }}>
                🧭 THE JOURNEY BEGINS
              </h1>
              <div className="w-full h-2 bg-amber-700 mb-4"></div>
              <p className="text-2xl text-amber-800 font-serif leading-relaxed">
                "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse..."
              </p>
            </div>
          </div>
        </div>

        {/* Journey Content */}
        <div className="space-y-8">
          
          {/* Opening Chapter */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform rotate-1 transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">Chapter 1: Loomings</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <p className="mb-4">
                Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, 
                and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.
              </p>
              <p className="mb-4">
                It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; 
                whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses...
              </p>
              <p className="mb-6">
                ...then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball.
              </p>
              
              <div className="bg-white/70 p-6 rounded-lg border border-amber-300 mb-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">🤔 Reflect & Analyze</h3>
                <p className="text-amber-700">
                  What does Ishmael's decision to go to sea reveal about his character and mental state? 
                  How does Melville use the metaphor of the sea as an escape from life's troubles?
                </p>
              </div>
            </div>
          </div>

          {/* The Pequod */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform -rotate-1 transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">⚓ Aboard the Pequod</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <p className="mb-4">
                The Pequod is no ordinary whaling vessel. Under Captain Ahab's command, it becomes a ship of obsession, 
                its crew bound not just by contract but by their captain's monomaniacal quest for the White Whale.
              </p>
              <p className="mb-6">
                As you journey with Ishmael, witness the transformation of a commercial voyage into something far more profound—
                a meditation on fate, free will, and humanity's relationship with the unknowable forces of nature.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 p-4 rounded-lg border border-amber-300">
                  <h4 className="font-bold text-amber-900 mb-2">👨‍✈️ Captain Ahab</h4>
                  <p className="text-sm text-amber-700">The monomaniacal captain whose obsession drives the narrative</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg border border-amber-300">
                  <h4 className="font-bold text-amber-900 mb-2">🗡️ Queequeg</h4>
                  <p className="text-sm text-amber-700">Ishmael's noble harpooner and unlikely friend</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg border border-amber-300">
                  <h4 className="font-bold text-amber-900 mb-2">⚖️ Starbuck</h4>
                  <p className="text-sm text-amber-700">The chief mate who represents reason and morality</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg border border-amber-300">
                  <h4 className="font-bold text-amber-900 mb-2">🌊 The Ocean</h4>
                  <p className="text-sm text-amber-700">Both setting and symbol of nature's indifference</p>
                </div>
              </div>
            </div>
          </div>

          {/* The White Whale */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform rotate-2 transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">🐋 The White Whale</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <p className="mb-4">
                Moby Dick is more than a whale—he is the embodiment of the unknowable, the uncontrollable forces of nature 
                that humanity struggles against. To Ahab, he represents a personal affront to be conquered. 
                To others, he is simply nature being nature.
              </p>
              <p className="mb-6">
                As you progress through this journey, consider what the White Whale represents to you. 
                Is it fate? Nature's indifference? The limits of human knowledge? Or something else entirely?
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🌊 Continue Your Voyage</h3>
                <p className="text-blue-700 mb-4">
                  This is just the beginning of your journey through Melville's masterpiece. 
                  The waters ahead hold deeper mysteries, profound insights, and the ultimate confrontation between man and nature.
                </p>
                <Link 
                  href="/mobydickmodule/study-guide"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                >
                  📚 Explore Study Guide
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
} 