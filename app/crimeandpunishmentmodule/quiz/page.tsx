import React from 'react'
import Link from 'next/link'

export default function CrimeAndPunishmentQuizPage() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #4C1D95 0%, #5B21B6 25%, #7C3AED 50%, #8B5CF6 75%, #4C1D95 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/10 via-transparent to-purple-950/40 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/crimeandpunishmentmodule" className="text-purple-200 hover:text-white transition-colors font-serif">
            ← Back to Crime and Punishment Module
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-100 mb-4 font-serif">
            Knowledge Quiz
          </h1>
          <p className="text-purple-200 text-lg font-serif">
            Test your understanding of Dostoevsky's psychological masterpiece
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-12 rounded-xl shadow-xl border border-indigo-600 backdrop-blur-sm text-center">
          <div className="text-6xl mb-6">🧠</div>
          <h2 className="text-3xl font-bold text-amber-100 mb-6 font-serif">Interactive Quiz Coming Soon</h2>
          <p className="text-purple-100 text-lg leading-relaxed font-serif mb-8">
            We're developing a comprehensive quiz system that will challenge your understanding 
            of the novel's complex themes, characters, and philosophical questions.
          </p>
          <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 p-6 rounded-lg border border-indigo-500">
            <h3 className="text-xl font-semibold text-amber-200 mb-4 font-serif">Quiz Topics Will Include:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-purple-200 space-y-2 font-serif text-left">
                <li>• Character motivations and relationships</li>
                <li>• Key plot points and sequences</li>
                <li>• Philosophical themes and concepts</li>
                <li>• Historical and social context</li>
              </ul>
              <ul className="text-purple-200 space-y-2 font-serif text-left">
                <li>• Symbolism and literary devices</li>
                <li>• Moral and ethical questions</li>
                <li>• Psychological analysis</li>
                <li>• Critical interpretation</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 