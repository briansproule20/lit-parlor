import React from 'react'
import Link from 'next/link'

export default function AnimalFarmJourneyPage() {
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
            Interactive Journey
          </h1>
          <p className="text-red-200 text-lg font-serif">
            Experience the rise and fall of the animal revolution
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-12 rounded-xl shadow-xl border border-red-600 backdrop-blur-sm text-center">
          <div className="text-6xl mb-6">🐷</div>
          <h2 className="text-3xl font-bold text-amber-100 mb-6 font-serif">Interactive Experience Coming Soon</h2>
          <p className="text-red-100 text-lg leading-relaxed font-serif mb-8">
            We're crafting an immersive journey through the animal rebellion, 
            from the hopeful revolution to the tragic corruption of power that follows.
          </p>
          <div className="bg-gradient-to-r from-red-800/50 to-orange-800/50 p-6 rounded-lg border border-red-500">
            <h3 className="text-xl font-semibold text-amber-200 mb-4 font-serif">What to Expect:</h3>
            <ul className="text-red-200 space-y-2 font-serif">
              <li>• Witness Old Major's inspiring speech and the birth of Animalism</li>
              <li>• Experience the excitement and hope of the initial rebellion</li>
              <li>• Navigate the power struggle between Napoleon and Snowball</li>
              <li>• Watch the gradual corruption of the Seven Commandments</li>
              <li>• Follow Boxer's tragic fate and the betrayal of loyal workers</li>
              <li>• See how the pigs become indistinguishable from their former oppressors</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  )
} 