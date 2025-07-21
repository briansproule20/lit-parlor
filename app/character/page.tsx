import React from 'react'
import Link from 'next/link'

export default function CharacterPage() {
  // Mock character data with leveling system
  const character = {
    name: "Alex Chen",
    level: 8,
    title: "Literary Scholar",
    xp: 1240,
    xpForNextLevel: 1500,
    totalBooksRead: 3,
    totalPagesRead: 450,
    averageScore: 8.5,
    achievements: 12,
    badges: [
      { name: "Chapter Master", icon: "🏆", color: "yellow", earned: true },
      { name: "Discussion Leader", icon: "💬", color: "green", earned: true },
      { name: "Quiz Champion", icon: "🎯", color: "purple", earned: true },
      { name: "Speed Reader", icon: "⚡", color: "blue", earned: false },
      { name: "Critical Thinker", icon: "🧠", color: "indigo", earned: false },
      { name: "Literary Expert", icon: "📚", color: "red", earned: false }
    ],
    readingStreak: 15,
    favoriteGenres: ["Classic Literature", "Psychological Fiction", "Adventure"],
    currentBook: "Moby Dick",
    readingProgress: 11.1
  }

  const levelRewards = {
    5: { title: "Literary Apprentice", rewards: ["Advanced Analysis Tools", "Extended Reading Time"] },
    10: { title: "Literary Scholar", rewards: ["Expert Discussion Groups", "Priority Access"] },
    15: { title: "Literary Master", rewards: ["Personal Recommendations", "Mentor Status"] },
    20: { title: "Literary Sage", rewards: ["All Features Unlocked", "Help Other Students"] }
  }

  const xpProgress = (character.xp / character.xpForNextLevel) * 100

  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          <Link 
            href="/student-dashboard" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            📊 Back to Dashboard
          </Link>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🏠 Return to Parlor
          </Link>
        </div>

        {/* Character Profile Header */}
        <div className="text-center mb-12">
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
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl font-bold">{character.name.charAt(0)}</span>
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold text-amber-900 font-serif">{character.name}</h1>
                <div className="text-2xl text-purple-600 font-serif font-semibold">{character.title}</div>
                <div className="text-lg text-amber-700 font-serif">Level {character.level}</div>
              </div>
            </div>
            
            {/* XP Progress Bar */}
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
          </div>
        </div>

        {/* Character Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl font-bold font-serif">{character.totalBooksRead}</div>
            <div className="text-green-100 font-serif">Books Completed</div>
            <div className="text-green-200 text-sm mt-1">+1 this month</div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl font-bold font-serif">{character.totalPagesRead}</div>
            <div className="text-blue-100 font-serif">Pages Read</div>
            <div className="text-blue-200 text-sm mt-1">This semester</div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl font-bold font-serif">{character.achievements}</div>
            <div className="text-purple-100 font-serif">Achievements</div>
            <div className="text-purple-200 text-sm mt-1">3 new this month</div>
          </div>
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 rounded-xl shadow-lg text-white">
            <div className="text-3xl font-bold font-serif">{character.readingStreak}</div>
            <div className="text-orange-100 font-serif">Day Streak</div>
            <div className="text-orange-200 text-sm mt-1">Keep it going!</div>
          </div>
        </div>

        {/* Current Reading Status */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Current Reading</h2>
            
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-lg shadow-xl border-2 border-slate-600">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-amber-100 font-serif">{character.currentBook}</h3>
                  <p className="text-amber-200 font-serif italic">Chapter 15 of 135</p>
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
              
              <div className="flex space-x-3">
                <Link href="/mobydick" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-serif font-semibold transition-colors">
                  Continue Reading
                </Link>
                <button className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-serif font-semibold transition-colors">
                  Take Quiz
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Badges and Achievements */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Badges & Achievements</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {character.badges.map((badge, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 ${
                  badge.earned 
                    ? 'bg-white border-green-200 shadow-md' 
                    : 'bg-gray-100 border-gray-200 opacity-50'
                }`}>
                  <div className="text-center">
                    <div className={`text-3xl mb-2 ${badge.earned ? '' : 'grayscale'}`}>
                      {badge.icon}
                    </div>
                    <div className={`font-semibold font-serif ${
                      badge.earned ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {badge.name}
                    </div>
                    <div className={`text-xs mt-1 ${
                      badge.earned ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      {badge.earned ? 'Earned' : 'Locked'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Level Rewards</h2>
            
            <div className="space-y-4">
              {Object.entries(levelRewards).map(([level, data]) => (
                <div key={level} className={`p-4 rounded-lg border-2 ${
                  character.level >= parseInt(level) 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-amber-900 font-serif">
                      Level {level} - {data.title}
                    </div>
                    <div className={`text-sm font-bold ${
                      character.level >= parseInt(level) ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {character.level >= parseInt(level) ? '✓ Unlocked' : '🔒 Locked'}
                    </div>
                  </div>
                  <ul className="text-sm space-y-1">
                    {data.rewards.map((reward, index) => (
                      <li key={index} className={`${
                        character.level >= parseInt(level) ? 'text-green-700' : 'text-gray-500'
                      }`}>
                        • {reward}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reading Preferences */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Reading Preferences</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-amber-800 font-serif mb-4">Favorite Genres</h3>
                <div className="space-y-2">
                  {character.favoriteGenres.map((genre, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📚</span>
                      </div>
                      <span className="font-serif text-amber-800">{genre}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-amber-800 font-serif mb-4">Reading Goals</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-900 font-serif">Monthly Reading Goal</span>
                      <span className="text-blue-600 font-bold">75%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="text-sm text-blue-700 mt-1">3 of 4 books completed</div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-900 font-serif">Daily Reading Streak</span>
                      <span className="text-green-600 font-bold">{character.readingStreak} days</span>
                    </div>
                    <div className="text-sm text-green-700">Keep up the great work!</div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-purple-900 font-serif">Next Level Goal</span>
                      <span className="text-purple-600 font-bold">{character.xpForNextLevel - character.xp} XP</span>
                    </div>
                    <div className="text-sm text-purple-700">Complete more activities to level up!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-amber-900/90 to-orange-800/90 border-4 border-amber-400 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Continue Your Literary Journey
            </h3>
            <p className="text-amber-200 text-lg mb-6 font-serif">
              Keep reading, discussing, and growing to unlock new levels and rewards!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/student-dashboard" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                📊 View Dashboard
              </Link>
              <Link href="/quests" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🗺️ Start Quest
              </Link>
              <Link href="/the-arena" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                ⚔️ Enter Arena
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 