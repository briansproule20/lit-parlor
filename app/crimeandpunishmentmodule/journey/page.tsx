import React from 'react'
import Link from 'next/link'

export default function CrimeAndPunishmentJourneyPage() {
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
            Interactive Journey
          </h1>
          <p className="text-purple-200 text-lg font-serif">
            Walk through the psychological landscape of Crime and Punishment
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-12 rounded-xl shadow-xl border border-purple-600 backdrop-blur-sm text-center">
          <div className="text-6xl mb-6">🎭</div>
          <h2 className="text-3xl font-bold text-amber-100 mb-6 font-serif">Interactive Experience Coming Soon</h2>
          <p className="text-purple-100 text-lg leading-relaxed font-serif mb-8">
            We're crafting an immersive journey through Raskolnikov's psychological torment, 
            key scenes from 19th-century St. Petersburg, and the moral dilemmas that drive this masterpiece.
          </p>
          <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 p-6 rounded-lg border border-purple-500">
            <h3 className="text-xl font-semibold text-amber-200 mb-4 font-serif">What to Expect:</h3>
            <ul className="text-purple-200 space-y-2 font-serif">
              <li>• Experience Raskolnikov's internal struggle before and after the crime</li>
              <li>• Navigate the moral complexities of extraordinary vs. ordinary people</li>
              <li>• Explore the relationship between Raskolnikov and Sonia</li>
              <li>• Witness the psychological cat-and-mouse game with Porfiry</li>
              <li>• Journey through the path from crime to confession to redemption</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  )
} 