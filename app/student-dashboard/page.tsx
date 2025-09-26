import React from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function StudentDashboard() {
  // TODO: Replace with actual authentication check
  const isSignedIn = true // This would come from your auth provider
  const user = { name: "Brian Sproule" } // This would come from your auth provider

  // If user is not signed in, show sign-in prompt
  if (!isSignedIn || !user) {
    return (
      <main className="min-h-screen py-8 px-4 relative" style={{
        backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
        backgroundAttachment: 'fixed'
      }}>
        {/* Dot Background */}
        <div className="opacity-30 absolute inset-0 pointer-events-none">
          <DotBackground />
        </div>

        {/* Cozy lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-12 mt-20">
            <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
              background: `
                radial-gradient(circle at 25% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 60%),
                radial-gradient(circle at 75% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 60%),
                linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 20%, #DEB887 40%, #F5DEB3 60%, #E6D8B5 80%, #FEFBF0 100%)
              `,
              border: '3px solid #8B4513',
              boxShadow: `
                0 8px 32px rgba(139, 69, 19, 0.4),
                inset 0 2px 8px rgba(255, 255, 255, 0.7),
                inset 0 -2px 4px rgba(139, 69, 19, 0.2)
              `
            }}>
              <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
              }}>
                Hi, please sign in to access this
              </h1>
              <p className="text-lg text-amber-800 max-w-2xl mx-auto leading-relaxed font-serif">
                Create an account or sign in to access your personalized learning dashboard.
              </p>
            </div>
          </div>

          {/* Sign In Card */}
          <div className="max-w-md mx-auto">
            <div className="bg-white/95 rounded-xl shadow-xl p-8 border-2 border-amber-200 text-center">
              <h2 className="text-2xl font-bold text-amber-900 font-serif mb-6">Sign In Required</h2>
              <p className="text-amber-700 font-serif mb-6">
                Create an account or sign in to access your dashboard, track your progress, and manage your literary journey.
              </p>
              <button className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif">
                Sign In / Create Account
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // If user is signed in, show dashboard
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dot Background */}
      <div className="opacity-30 absolute inset-0 pointer-events-none">
        <DotBackground />
      </div>

      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">


        {/* Header */}
        <div className="text-center mb-12 mt-20">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 60%),
              linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 20%, #DEB887 40%, #F5DEB3 60%, #E6D8B5 80%, #FEFBF0 100%)
            `,
            border: '3px solid #8B4513',
            boxShadow: `
              0 8px 32px rgba(139, 69, 19, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.7),
              inset 0 -2px 4px rgba(139, 69, 19, 0.2)
            `
          }}>
            <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              Hi, {user?.name || 'Student'}!
            </h1>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto leading-relaxed font-serif">
              Your personalized learning dashboard is being crafted with care.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Link
            href="/profile"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
          >
            Profile
          </Link>
          <Link
            href="/character"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
          >
            Character
          </Link>
        </div>


      </div>
    </main>
  )
} 