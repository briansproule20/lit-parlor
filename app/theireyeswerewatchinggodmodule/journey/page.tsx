import React from 'react'
import Link from 'next/link'

export default function TheirEyesWereWatchingGodJourneyPage() {
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
            Interactive Journey
          </h1>
          <p className="text-teal-200 text-lg font-serif">
            Walk alongside Janie Crawford on her path to self-discovery
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-gradient-to-r from-teal-900/50 to-cyan-900/50 p-12 rounded-xl shadow-xl border border-teal-600 backdrop-blur-sm text-center">
          <div className="text-6xl mb-6">🌊</div>
          <h2 className="text-3xl font-bold text-amber-100 mb-6 font-serif">Interactive Experience Coming Soon</h2>
          <p className="text-teal-100 text-lg leading-relaxed font-serif mb-8">
            We're crafting an immersive journey through Janie's transformative experiences, 
            from her awakening under the pear tree to her ultimate self-realization and independence.
          </p>
          <div className="bg-gradient-to-r from-teal-800/50 to-cyan-800/50 p-6 rounded-lg border border-teal-500">
            <h3 className="text-xl font-semibold text-amber-200 mb-4 font-serif">What to Expect:</h3>
            <ul className="text-teal-200 space-y-2 font-serif">
              <li>• Experience Janie's awakening beneath the pear tree</li>
              <li>• Navigate the complexities of her three marriages</li>
              <li>• Explore the vibrant community of Eatonville</li>
              <li>• Journey through the Everglades with Tea Cake</li>
              <li>• Witness the power of nature during the hurricane</li>
              <li>• Follow Janie's return home and her newfound voice</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  )
} 