import React from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function StudentDashboard() {
  // Mock leveling data - in a real app this would come from a database
  const studentLevel = 8
  const currentXP = 1240
  const xpForNextLevel = 1500
  const xpProgress = (currentXP / xpForNextLevel) * 100
  
  const levelRewards = {
    5: "Unlocked Advanced Analysis Tools",
    10: "Access to Expert Discussion Groups", 
    15: "Personal Reading Recommendations",
    20: "Mentor Status - Help Other Students"
  }

  const recentActivities = [
    { type: "quiz", book: "Moby Dick", xp: 50, description: "Chapter 15 Quiz - 92%" },
    { type: "reading", book: "Moby Dick", xp: 25, description: "Read 20 pages" },
    { type: "discussion", book: "Moby Dick", xp: 30, description: "Posted in Symbolism Discussion" },
    { type: "achievement", book: "General", xp: 100, description: "Unlocked 'Chapter Master' Achievement" }
  ]

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
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          {/* Removed return to parlor button and character profile link - now handled in menu bar */}
        </div>

        {/* Header with Level System */}
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
            <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              Student Dashboard
            </h1>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto leading-relaxed font-serif">
              Track your reading progress, unlock achievements, and continue your literary journey.
            </p>
          </div>
        </div>

        {/* Level System Display */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-amber-900 font-serif">Your Literary Journey</h2>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/character" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif text-sm"
                >
                  👤 View Character
                </Link>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600 font-serif">Level {studentLevel}</div>
                  <div className="text-sm text-amber-600 font-serif">Literary Scholar</div>
                </div>
              </div>
            </div>
            
            {/* XP Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-amber-700 text-sm mb-2">
                <span className="font-serif">Experience Points</span>
                <span className="font-serif">{currentXP} / {xpForNextLevel} XP</span>
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
                  {xpForNextLevel - currentXP} XP needed for Level {studentLevel + 1}
                </span>
              </div>
            </div>

            {/* Level Rewards Preview */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-900 font-serif mb-2">Current Benefits</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Access to all basic study materials</li>
                  <li>• Participation in class discussions</li>
                  <li>• Basic quiz and assessment tools</li>
                  <li>• Reading progress tracking</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-green-900 font-serif mb-2">Next Level Rewards</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Advanced analysis tools</li>
                  <li>• Priority discussion access</li>
                  <li>• Extended reading time</li>
                  <li>• Bonus XP for activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Student Profile & Stats */}
        <div className="mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">87%</div>
              <div className="text-green-100 font-serif">Overall Progress</div>
              <div className="text-green-200 text-sm mt-1">↑ +5% this week</div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">12</div>
              <div className="text-blue-100 font-serif">Achievements</div>
              <div className="text-blue-200 text-sm mt-1">3 new this month</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">156</div>
              <div className="text-purple-100 font-serif">Pages Read</div>
              <div className="text-purple-200 text-sm mt-1">This week</div>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">8.5</div>
              <div className="text-orange-100 font-serif">Avg. Score</div>
              <div className="text-orange-200 text-sm mt-1">Out of 10</div>
            </div>
          </div>
          
          {/* Quick Access Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <Link 
              href="/character" 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
            >
              👤 Character Profile
            </Link>
            <Link 
              href="/quests" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
            >
              🗺️ Start Quest
            </Link>
            <Link 
              href="/the-arena" 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
            >
              ⚔️ Enter Arena
            </Link>
          </div>
        </div>

        {/* Recent XP Activities */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Recent Activities & XP</h2>
            
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'quiz' ? 'bg-blue-500' :
                      activity.type === 'reading' ? 'bg-green-500' :
                      activity.type === 'discussion' ? 'bg-purple-500' :
                      'bg-yellow-500'
                    }`}>
                      <span className="text-white text-sm">
                        {activity.type === 'quiz' ? '📝' :
                         activity.type === 'reading' ? '📖' :
                         activity.type === 'discussion' ? '💬' : '🏆'}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900 font-serif">{activity.description}</div>
                      <div className="text-sm text-amber-600 font-serif">{activity.book}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-bold font-serif">+{activity.xp} XP</div>
                    <div className="text-xs text-amber-500">Today</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Reading & Progress */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          
          {/* Current Book */}
          <div className="lg:col-span-2">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
              <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Currently Reading</h2>
              
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-lg shadow-xl border-2 border-slate-600">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-amber-100 font-serif">MOBY DICK</h3>
                    <p className="text-amber-200 font-serif italic">or, The Whale</p>
                    <p className="text-amber-300 text-sm font-serif">Herman Melville</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">Chapter 15</div>
                    <div className="text-amber-300 text-sm">of 135</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-amber-300 text-sm mb-2">
                    <span>Progress</span>
                    <span>11.1%</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '11.1%'}}></div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-700 p-3 rounded">
                    <div className="text-green-400 font-bold text-lg">92%</div>
                    <div className="text-amber-300 text-sm">Comprehension</div>
                  </div>
                  <div className="bg-slate-700 p-3 rounded">
                    <div className="text-blue-400 font-bold text-lg">8.7</div>
                    <div className="text-amber-300 text-sm">Quiz Score</div>
                  </div>
                  <div className="bg-slate-700 p-3 rounded">
                    <div className="text-purple-400 font-bold text-lg">3</div>
                    <div className="text-amber-300 text-sm">Discussions</div>
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-3">
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

          {/* Achievements */}
          <div>
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
              <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Recent Achievements</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🏆</span>
                  </div>
                  <div>
                    <div className="font-semibold text-yellow-900 font-serif">Chapter Master</div>
                    <div className="text-sm text-yellow-700">Completed 10 chapters</div>
                    <div className="text-xs text-yellow-600 font-bold">+100 XP</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">💬</span>
                  </div>
                  <div>
                    <div className="font-semibold text-green-900 font-serif">Discussion Leader</div>
                    <div className="text-sm text-green-700">Started 5 discussions</div>
                    <div className="text-xs text-green-600 font-bold">+75 XP</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📚</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 font-serif">Bookworm</div>
                    <div className="text-sm text-blue-700">Read 100 pages</div>
                    <div className="text-xs text-blue-600 font-bold">+50 XP</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🎯</span>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-900 font-serif">Quiz Champion</div>
                    <div className="text-sm text-purple-700">Scored 95%+ on 3 quizzes</div>
                    <div className="text-xs text-purple-600 font-bold">+150 XP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Tools & Resources */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Learning Tools</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
                <h3 className="font-semibold font-serif mb-2">Study Guide</h3>
                <p className="text-blue-100 text-sm mb-3">Access chapter summaries and key themes</p>
                <Link href="/mobydickmodule/study-guide" className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm font-serif transition-colors inline-block">
                  Open Guide
                </Link>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
                <h3 className="font-semibold font-serif mb-2">Character Map</h3>
                <p className="text-green-100 text-sm mb-3">Explore character relationships and development</p>
                <Link href="/character" className="bg-green-700 hover:bg-green-800 px-3 py-1 rounded text-sm font-serif transition-colors inline-block">
                  View Map
                </Link>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white">
                <h3 className="font-semibold font-serif mb-2">Discussion Board</h3>
                <p className="text-purple-100 text-sm mb-3">Join class discussions and share insights</p>
                <button className="bg-purple-700 hover:bg-purple-800 px-3 py-1 rounded text-sm font-serif transition-colors">
                  Join Discussion
                </button>
              </div>

              <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white">
                <h3 className="font-semibold font-serif mb-2">Glossary</h3>
                <p className="text-orange-100 text-sm mb-3">Look up literary terms and vocabulary</p>
                <Link href="/glossary" className="bg-orange-700 hover:bg-orange-800 px-3 py-1 rounded text-sm font-serif transition-colors inline-block">
                  Browse Terms
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Reading History & Recommendations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Reading History</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-16 bg-gradient-to-r from-rose-800 to-rose-700 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P&P</span>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-900 font-serif">Pride & Prejudice</div>
                    <div className="text-sm text-amber-600">Completed • Score: 9.2/10</div>
                    <div className="text-xs text-green-600 font-bold">+200 XP earned</div>
                  </div>
                </div>
                <div className="text-green-600 font-semibold">✓</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-16 bg-gradient-to-r from-orange-800 to-orange-700 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">TFA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-900 font-serif">Things Fall Apart</div>
                    <div className="text-sm text-amber-600">In Progress • 65% complete</div>
                    <div className="text-xs text-blue-600 font-bold">+150 XP earned</div>
                  </div>
                </div>
                <div className="text-blue-600 font-semibold">⟳</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-16 bg-gradient-to-r from-purple-800 to-purple-700 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C&P</span>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-900 font-serif">Crime & Punishment</div>
                    <div className="text-sm text-amber-600">Bookmarked • Ready to start</div>
                    <div className="text-xs text-purple-600 font-bold">+0 XP (not started)</div>
                  </div>
                </div>
                <div className="text-purple-600 font-semibold">📖</div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Recommended for You</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 font-serif mb-2">Based on Moby Dick</h3>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>• <span className="font-semibold">The Old Man and the Sea</span> - Hemingway</div>
                  <div>• <span className="font-semibold">Heart of Darkness</span> - Conrad</div>
                  <div>• <span className="font-semibold">Billy Budd</span> - Melville</div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 font-serif mb-2">Classic Adventure</h3>
                <div className="text-sm text-green-700 space-y-1">
                  <div>• <span className="font-semibold">Treasure Island</span> - Stevenson</div>
                  <div>• <span className="font-semibold">Robinson Crusoe</span> - Defoe</div>
                  <div>• <span className="font-semibold">The Call of the Wild</span> - London</div>
                </div>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 font-serif mb-2">Psychological Depth</h3>
                <div className="text-sm text-purple-700 space-y-1">
                  <div>• <span className="font-semibold">The Great Gatsby</span> - Fitzgerald</div>
                  <div>• <span className="font-semibold">1984</span> - Orwell</div>
                  <div>• <span className="font-semibold">Lord of the Flies</span> - Golding</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Upcoming Assignments</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📝</span>
                </div>
                <div>
                  <div className="font-semibold text-amber-900 font-serif">Moby Dick - Chapter 16 Quiz</div>
                  <div className="text-sm text-amber-600">Due in 2 days</div>
                  <div className="text-xs text-green-600 font-bold">Potential: +50 XP</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-red-600 font-semibold">High Priority</div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-serif transition-colors">
                  Start Quiz
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💬</span>
                </div>
                <div>
                  <div className="font-semibold text-amber-900 font-serif">Symbolism Discussion Post</div>
                  <div className="text-sm text-amber-600">Due in 5 days</div>
                  <div className="text-xs text-green-600 font-bold">Potential: +30 XP</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-blue-600 font-semibold">Medium Priority</div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-serif transition-colors">
                  Write Post
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📚</span>
                </div>
                <div>
                  <div className="font-semibold text-amber-900 font-serif">Reading Progress Check</div>
                  <div className="text-sm text-amber-600">Due in 1 week</div>
                  <div className="text-xs text-green-600 font-bold">Potential: +25 XP</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-semibold">Low Priority</div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-serif transition-colors">
                  Update Progress
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 