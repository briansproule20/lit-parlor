import React from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function CharacterPage() {
  // TODO: Replace with actual authentication check
  const isSignedIn = true // This would come from your auth provider
  const user: any = { name: "Brian Sproule" } // This would come from your auth provider

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
                Create an account or sign in to view your character profile and track your literary journey.
              </p>
            </div>
          </div>

          {/* Sign In Card */}
          <div className="max-w-md mx-auto">
            <div className="bg-white/95 rounded-xl shadow-xl p-8 border-2 border-amber-200 text-center">
              <h2 className="text-2xl font-bold text-amber-900 font-serif mb-6">Sign In Required</h2>
              <p className="text-amber-700 font-serif mb-6">
                Create an account or sign in to access your personalized character profile, track your progress, and unlock achievements.
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

  // If user is signed in, show character profile
  // TODO: Replace with actual user data from database
  const character = {
    name: user.name || "Student",
    level: user.level || 1,
    title: user.title || "Literary Apprentice",
    xp: user.xp || 0,
    xpForNextLevel: user.xpForNextLevel || 100,
    totalBooksRead: user.totalBooksRead || 0,
    totalPagesRead: user.totalPagesRead || 0,
    averageScore: user.averageScore || 0,
    achievements: user.achievements || 0,
    readingStreak: user.readingStreak || 0,
    favoriteGenres: user.favoriteGenres || [],
    currentBook: user.currentBook || "No current book",
    readingProgress: user.readingProgress || 0
  }

  const xpProgress = character.xpForNextLevel > 0 ? (character.xp / character.xpForNextLevel) * 100 : 0

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

      <div className="max-w-6xl mx-auto relative">


        {/* Character Profile Header */}
        <div className="text-center mb-16 mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-full p-12 rounded-2xl shadow-2xl relative" style={{
              background: `
                radial-gradient(circle at 30% 25%, rgba(252, 248, 227, 0.98) 0%, transparent 65%),
                radial-gradient(circle at 70% 75%, rgba(245, 222, 179, 0.95) 0%, transparent 65%),
                linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 15%, #DEB887 35%, #F5DEB3 55%, #E6D8B5 75%, #FEFBF0 100%)
              `,
              border: '4px solid #92400e',
              borderRadius: '24px',
              boxShadow: `
                0 16px 48px rgba(139, 69, 19, 0.6),
                inset 0 4px 16px rgba(255, 255, 255, 0.8),
                inset 0 -4px 8px rgba(139, 69, 19, 0.25),
                0 0 0 1px rgba(139, 69, 19, 0.1)
              `
            }}>
              <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-amber-900 font-serif mb-2" style={{
                  textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
                  letterSpacing: '0.025em'
                }}>
                  Hi, {user?.name || 'Student'}!
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 mx-auto rounded-full"></div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-6 lg:space-y-0 mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30">
                    <span className="text-white text-5xl font-bold" style={{
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}>
                      {character.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{character.level}</span>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 font-serif mb-3" style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                    letterSpacing: '-0.025em'
                  }}>
                    {character.name}
                  </h2>
                  <div className="text-2xl lg:text-3xl text-purple-700 font-serif font-semibold mb-2" style={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                  }}>
                    {character.title}
                  </div>
                  <div className="inline-flex items-center bg-amber-100/80 px-4 py-2 rounded-full border border-amber-300/50">
                    <span className="text-lg text-amber-800 font-serif font-medium">
                      Level {character.level} Scholar
                    </span>
                  </div>
                </div>
              </div>

            {/* XP Progress Bar */}
            {character.xpForNextLevel > 0 && (
              <div className="mb-4">
                <div className="flex justify-between text-amber-700 text-sm mb-2">
                  <span className="font-serif">Experience Points</span>
                  <span className="font-serif">{character.xp} / {character.xpForNextLevel} XP</span>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-4 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                    style={{width: `${xpProgress}%`}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm text-amber-600 font-serif">
                    {character.xpForNextLevel - character.xp} XP needed for Level {character.level + 1}
                  </span>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Link
            href="/student-dashboard"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
          >
            Dashboard
          </Link>
          <Link
            href="/profile"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
          >
            Profile
          </Link>
        </div>

        {/* Character Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl font-bold font-serif">{character.totalBooksRead}</div>
            <div className="text-green-100 font-serif">Books Completed</div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl font-bold font-serif">{character.totalPagesRead}</div>
            <div className="text-blue-100 font-serif">Pages Read</div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl font-bold font-serif">{character.achievements}</div>
            <div className="text-purple-100 font-serif">Achievements</div>
          </div>
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl font-bold font-serif">{character.readingStreak}</div>
            <div className="text-orange-100 font-serif">Day Streak</div>
          </div>
        </div>

        {/* Current Reading Status */}
        {character.currentBook && character.currentBook !== "No current book" && (
          <div className="mb-8">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
              <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Current Reading</h2>

              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-lg shadow-xl border-2 border-slate-600">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-amber-100 font-serif">{character.currentBook}</h3>
                    <p className="text-amber-300 text-sm font-serif">Progress: {character.readingProgress}%</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">{character.averageScore}</div>
                    <div className="text-amber-300 text-sm">Avg. Score</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-amber-300 text-sm mb-2">
                    <span>Reading Progress</span>
                    <span>{character.readingProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: `${character.readingProgress}%`}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    </main>
  )
}