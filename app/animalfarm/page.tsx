import React from 'react'
import Link from 'next/link'

export default function AnimalFarmPage() {
  return (
    <main className="min-h-screen pt-24 pb-8 px-4 relative" style={{
      background: 'linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 30%, #cbd5e1 60%, #94a3b8 100%)'
    }}>

      {/* Dotted overlay similar to home page */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative">
        

        {/* Book Cover Display */}
        <div className="text-center mb-12">
          <div className="inline-block bg-slate-50/95 border-4 border-slate-600 rounded-xl p-8 shadow-2xl relative transform transition-all duration-300 hover:scale-105">
            <h1 className="text-5xl font-bold text-slate-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              Animal Farm
            </h1>
            <p className="text-xl text-slate-800 font-serif italic mb-3">
              Allegorical Novella
            </p>
            <div className="text-lg text-slate-700 font-serif mb-4">
              by George Orwell
            </div>
            <div className="w-32 h-1 bg-slate-600 mx-auto mb-4"></div>
            <p className="text-lg text-slate-800 font-serif leading-relaxed max-w-2xl mx-auto text-center">
              "All animals are equal, but some animals are more equal than others."
            </p>
          </div>
        </div>

        {/* Book Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* About the Book */}
          <div className="bg-slate-50/95 border-4 border-slate-600 rounded-xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif text-center">
              About This Masterpiece
            </h2>
            <div className="space-y-4 text-slate-800 font-serif">
              <p className="leading-relaxed">
                Published in 1945, <em>Animal Farm</em> is George Orwell's brilliant allegorical novella,
                a masterpiece of political satire that explores power, corruption, and the dangers of totalitarianism.
              </p>
              <p className="leading-relaxed">
                Through the story of farm animals who rebel against their human owner, Orwell creates a powerful allegory
                of the Russian Revolution and the rise of Stalin's Soviet Union, showing how noble ideals can be corrupted by power.
              </p>
              <p className="leading-relaxed">
                Set on a farm in England, the novella's simple yet profound narrative demonstrates how revolutionary movements
                can be hijacked by those seeking power, making it one of the most influential political allegories of the 20th century.
              </p>
            </div>
          </div>

          {/* Key Themes */}
          <div className="bg-slate-50/95 border-4 border-slate-600 rounded-xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif text-center">
              Key Themes
            </h2>
            <div className="space-y-4 text-slate-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-slate-300">
                <div className="font-bold flex items-center gap-2">
                  <span>👑</span> Power & Corruption
                </div>
                <div className="text-sm mt-1">How absolute power corrupts absolutely</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-slate-300">
                <div className="font-bold flex items-center gap-2">
                  <span>📢</span> Propaganda
                </div>
                <div className="text-sm mt-1">The manipulation of truth and language</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-slate-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🔄</span> Revolution Betrayed
                </div>
                <div className="text-sm mt-1">How noble causes can be hijacked by opportunists</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-slate-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🐷</span> Class Struggle
                </div>
                <div className="text-sm mt-1">The eternal conflict between rulers and ruled</div>
              </div>
            </div>
          </div>

        </div>


        {/* Historical Context */}
        <div className="bg-slate-50/95 border-4 border-slate-600 rounded-xl p-6 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif text-center">
            The Russian Revolution: Orwell's Inspiration
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-800 font-serif">
            <div>
              <h3 className="text-xl font-bold mb-3">Revolutionary Ideals</h3>
              <p className="leading-relaxed">
                The Russian Revolution of 1917 began with noble ideals of equality and workers' rights. 
                The Bolsheviks promised "Peace, Land, and Bread" to the Russian people, much like the animals' 
                promise of equality and freedom from human oppression.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Stalin's Rise</h3>
              <p className="leading-relaxed">
                Joseph Stalin, like Napoleon in the novel, gradually consolidated power through manipulation, 
                propaganda, and the elimination of rivals. The idealistic revolution became a totalitarian regime 
                that was often more oppressive than the system it replaced.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Propaganda Machine</h3>
              <p className="leading-relaxed">
                Stalin's regime used propaganda extensively to rewrite history and control public opinion. 
                Squealer's role in the novel mirrors how Soviet propaganda worked to justify increasingly 
                authoritarian policies to the people.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Orwell's Warning</h3>
              <p className="leading-relaxed">
                Orwell wrote <em>Animal Farm</em> as a warning about how any revolutionary movement, 
                no matter how well-intentioned, can be corrupted by those who seek power for its own sake. 
                The novel remains relevant as a cautionary tale about the nature of power.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-slate-900/90 to-gray-800/90 border-4 border-slate-400 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Begin Your Literary Journey
            </h3>
            <p className="text-slate-200 text-lg mb-6 font-serif">
              Explore Orwell's powerful allegory, political insights, and unforgettable characters
            </p>
            <Link href="/animalfarmmodule" className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg">
              Enter the Farm
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}