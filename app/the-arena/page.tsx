import React from 'react'
import Link from 'next/link'

export default function TheArena() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 25%, #dc2626 50%, #ea580c 75%, #f59e0b 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Battle lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/20 via-transparent to-red-900/40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 60%),
              linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 20%, #DEB887 40%, #F5DEB3 60%, #E6D8B5 80%, #FEFBF0 100%)
            `,
            border: '3px solid #dc2626',
            boxShadow: `
              0 8px 32px rgba(220, 38, 38, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.7),
              inset 0 -2px 4px rgba(220, 38, 38, 0.2)
            `
          }}>
            <h1 className="text-4xl font-bold text-red-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              ⚔️ The Arena
            </h1>
            <p className="text-lg text-red-800 max-w-3xl mx-auto leading-relaxed font-serif">
              Test your literary prowess in the gladiatorial arena of knowledge. Face epic boss battles, 
              conquer challenging quizzes, and prove your mastery through competitive assessments.
            </p>
            <div className="mt-4">
              <Link href="/" className="text-red-700 hover:text-red-800 font-serif underline">
                ← Back to Literary Parlor
              </Link>
            </div>
          </div>
        </div>

        {/* Player Stats Dashboard */}
        <div className="bg-gradient-to-r from-red-900/90 to-orange-800/90 border-4 border-red-400 rounded-2xl shadow-2xl p-6 mb-8">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4 font-serif text-center">⚡ Your Battle Stats</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">1,247</div>
                <div className="text-red-200 font-serif">Experience Points</div>
                <div className="text-xs text-red-300">Level 15 Scholar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">73%</div>
                <div className="text-red-200 font-serif">Victory Rate</div>
                <div className="text-xs text-red-300">Rising Gladiator</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">12</div>
                <div className="text-red-200 font-serif">Bosses Defeated</div>
                <div className="text-xs text-red-300">Epic Battles Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">#47</div>
                <div className="text-red-200 font-serif">Arena Ranking</div>
                <div className="text-xs text-red-300">Global Leaderboard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Battle Categories */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          
          {/* Boss Battles */}
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-red-200 hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4">🐉</div>
              <h3 className="text-2xl font-bold text-red-900 font-serif mb-4">Epic Boss Battles</h3>
              <p className="text-red-800 font-serif mb-6">
                Face legendary literary antagonists in epic knowledge battles. 
                Defeat complex multi-part challenges to earn rare rewards and titles.
              </p>
              <div className="space-y-3">
                <div className="bg-red-50 p-4 rounded-lg text-left border-l-4 border-red-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-red-900 text-sm">🔥 The White Whale</div>
                      <div className="text-sm text-red-700">Master Melville's Maritime Epic</div>
                      <div className="text-xs text-red-600 mt-1">Difficulty: Legendary • 5 Phases</div>
                    </div>
                    <div className="text-yellow-500 text-lg">👑</div>
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-left border-l-4 border-orange-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-orange-900 text-sm">⚡ Iago's Deception</div>
                      <div className="text-sm text-orange-700">Navigate Othello's Web of Lies</div>
                      <div className="text-xs text-orange-600 mt-1">Difficulty: Epic • Available Now</div>
                    </div>
                    <div className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs font-bold">NEW</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Battles */}
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-blue-900 font-serif mb-4">Quick Battle Quizzes</h3>
              <p className="text-blue-800 font-serif mb-6">
                Fast-paced battles to test your reflexes and recall. Perfect for warming up 
                before epic encounters or earning quick experience points.
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg text-left">
                  <div className="font-semibold text-blue-900 text-sm flex justify-between">
                    <span>⚔️ Character Showdown</span>
                    <span className="text-green-600">+50 XP</span>
                  </div>
                  <div className="text-sm text-blue-700">Name that protagonist in 30 seconds</div>
                  <div className="text-xs text-blue-600 mt-1">2 minutes • Multiple Choice</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-left">
                  <div className="font-semibold text-green-900 text-sm flex justify-between">
                    <span>📜 Quote Lightning Round</span>
                    <span className="text-green-600">+75 XP</span>
                  </div>
                  <div className="text-sm text-green-700">Match famous quotes to their sources</div>
                  <div className="text-xs text-green-600 mt-1">5 minutes • Speed Challenge</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tournament Arena */}
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-purple-200 hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-purple-900 font-serif mb-4">Tournament Arena</h3>
              <p className="text-purple-800 font-serif mb-6">
                Compete against other scholars in bracket-style tournaments. 
                Climb the ranks and earn prestigious titles and rewards.
              </p>
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-lg text-left">
                  <div className="font-semibold text-purple-900 text-sm">🎪 Weekly Championship</div>
                  <div className="text-sm text-purple-700">Victorian Literature Mastery</div>
                  <div className="text-xs text-purple-600 mt-1">128 participants • Bracket: Round 2</div>
                  <div className="text-xs text-yellow-600 mt-1">🏅 Winner: 1000 XP + Title</div>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg text-left">
                  <div className="font-semibold text-indigo-900 text-sm">⏰ Daily Duel</div>
                  <div className="text-sm text-indigo-700">1v1 Poetry Identification</div>
                  <div className="text-xs text-indigo-600 mt-1">Registration open • Starts in 2 hours</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Achievement Gallery */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-2 border-yellow-400 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-yellow-900 font-serif text-center mb-6">🏅 Achievement Gallery</h2>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🥇</div>
              <div className="text-sm font-bold text-yellow-800">First Victory</div>
              <div className="text-xs text-yellow-700">Complete first quiz</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-sm font-bold text-blue-800">Scholar</div>
              <div className="text-xs text-blue-700">100 questions answered</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md opacity-50">
              <div className="text-3xl mb-2">🐉</div>
              <div className="text-sm font-bold text-gray-600">Dragon Slayer</div>
              <div className="text-xs text-gray-500">Defeat 5 boss battles</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md opacity-50">
              <div className="text-3xl mb-2">👑</div>
              <div className="text-sm font-bold text-gray-600">Arena Champion</div>
              <div className="text-xs text-gray-500">Win a tournament</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-sm font-bold text-orange-800">Speed Demon</div>
              <div className="text-xs text-orange-700">10 perfect quick battles</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md opacity-50">
              <div className="text-3xl mb-2">🌟</div>
              <div className="text-sm font-bold text-gray-600">Legend</div>
              <div className="text-xs text-gray-500">Reach Level 50</div>
            </div>
          </div>
        </div>

        {/* Battle Tools */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-red-200 hover:bg-red-50 transition-colors cursor-pointer">
            <div className="text-3xl mb-3">⚔️</div>
            <h4 className="font-bold text-red-900 font-serif mb-2">Enter Battle</h4>
            <p className="text-sm text-red-700 font-serif">Jump into a quick assessment</p>
          </div>
          <div className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer">
            <div className="text-3xl mb-3">📈</div>
            <h4 className="font-bold text-blue-900 font-serif mb-2">Progress Report</h4>
            <p className="text-sm text-blue-700 font-serif">View detailed analytics</p>
          </div>
          <div className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-green-200 hover:bg-green-50 transition-colors cursor-pointer">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="font-bold text-green-900 font-serif mb-2">Study Guide</h4>
            <p className="text-sm text-green-700 font-serif">Prepare for upcoming battles</p>
          </div>
          <div className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer">
            <div className="text-3xl mb-3">👥</div>
            <h4 className="font-bold text-purple-900 font-serif mb-2">Guild Hall</h4>
            <p className="text-sm text-purple-700 font-serif">Team up with other scholars</p>
          </div>
        </div>

        {/* Arena Rules */}
        <div className="bg-gradient-to-r from-gray-900/90 to-red-900/90 border-4 border-gray-400 rounded-2xl shadow-2xl p-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif text-center">⚖️ Arena Code of Honor</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif text-yellow-400">Battle Conduct</h3>
                <ul className="text-gray-200 space-y-2 font-serif">
                  <li>• No external resources during timed battles</li>
                  <li>• Respect your opponents and their achievements</li>
                  <li>• Report bugs and technical issues promptly</li>
                  <li>• Celebrate victories humbly, accept defeats gracefully</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif text-yellow-400">Advancement System</h3>
                <ul className="text-gray-200 space-y-2 font-serif">
                  <li>• Experience Points (XP) unlock new challenges</li>
                  <li>• Consecutive victories grant bonus rewards</li>
                  <li>• Boss battles require minimum level requirements</li>
                  <li>• Tournament participation earns prestige points</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="bg-red-800/50 p-4 rounded-lg max-w-2xl mx-auto">
                <p className="text-red-100 italic font-serif">
                  "In the arena of the mind, every question is a worthy opponent." — The Arena Masters
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 