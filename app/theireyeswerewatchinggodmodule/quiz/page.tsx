import React from 'react'
import Link from 'next/link'

export default function TheirEyesWereWatchingGodQuizPage() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 25%, #2DD4BF 50%, #5EEAD4 75%, #0F766E 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/10 via-transparent to-teal-950/40 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/theireyeswerewatchinggodmodule" className="text-teal-200 hover:text-white transition-colors font-serif">
            ← Back to Their Eyes Were Watching God Module
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-100 mb-4 font-serif">
            Knowledge Quiz
          </h1>
          <p className="text-teal-200 text-lg font-serif">
            Test your understanding of Hurston's groundbreaking novel
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-teal-900/50 p-12 rounded-xl shadow-xl border border-cyan-600 backdrop-blur-sm text-center">
          <div className="text-6xl mb-6">🧠</div>
          <h2 className="text-3xl font-bold text-amber-100 mb-6 font-serif">Interactive Quiz Coming Soon</h2>
          <p className="text-teal-100 text-lg leading-relaxed font-serif mb-8">
            We're developing a comprehensive quiz system that will challenge your understanding 
            of the novel's themes, symbolism, character development, and cultural significance.
          </p>
          <div className="bg-gradient-to-r from-cyan-800/50 to-teal-800/50 p-6 rounded-lg border border-cyan-500">
            <h3 className="text-xl font-semibold text-amber-200 mb-4 font-serif">Quiz Topics Will Include:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-teal-200 space-y-2 font-serif text-left">
                <li>• Janie's character development and growth</li>
                <li>• Symbolism of the pear tree and horizon</li>
                <li>• Themes of love, independence, and voice</li>
                <li>• Harlem Renaissance context</li>
              </ul>
              <ul className="text-teal-200 space-y-2 font-serif text-left">
                <li>• Relationships and marriage dynamics</li>
                <li>• Cultural and historical significance</li>
                <li>• Literary techniques and dialect</li>
                <li>• Feminist themes and interpretations</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 