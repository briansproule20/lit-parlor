import React from 'react'
import Link from 'next/link'

export default function AnimalFarmQuizPage() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #991B1B 0%, #DC2626 25%, #EF4444 50%, #F87171 75%, #991B1B 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/10 via-transparent to-red-950/40 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/animalfarmmodule" className="text-red-200 hover:text-white transition-colors font-serif">
            ← Back to Animal Farm Module
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-100 mb-4 font-serif">
            Knowledge Quiz
          </h1>
          <p className="text-red-200 text-lg font-serif">
            Test your understanding of Orwell's political allegory
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-12 rounded-xl shadow-xl border border-orange-600 backdrop-blur-sm text-center">
          <div className="text-6xl mb-6">🧠</div>
          <h2 className="text-3xl font-bold text-amber-100 mb-6 font-serif">Interactive Quiz Coming Soon</h2>
          <p className="text-red-100 text-lg leading-relaxed font-serif mb-8">
            We're developing a comprehensive quiz system that will challenge your understanding 
            of the novel's allegorical meanings, character symbolism, and political commentary.
          </p>
          <div className="bg-gradient-to-r from-orange-800/50 to-red-800/50 p-6 rounded-lg border border-orange-500">
            <h3 className="text-xl font-semibold text-amber-200 mb-4 font-serif">Quiz Topics Will Include:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-red-200 space-y-2 font-serif text-left">
                <li>• Character symbolism and historical parallels</li>
                <li>• Key themes: power, corruption, propaganda</li>
                <li>• The Seven Commandments and their changes</li>
                <li>• Russian Revolution connections</li>
              </ul>
              <ul className="text-red-200 space-y-2 font-serif text-left">
                <li>• Totalitarian tactics and methods</li>
                <li>• Symbolism of the windmill and flag</li>
                <li>• Orwell's political philosophy</li>
                <li>• Literary devices and allegory</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 