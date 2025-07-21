import React from 'react'
import Link from 'next/link'

export default function Quests() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #065f46 0%, #047857 25%, #059669 50%, #10b981 75%, #34d399 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Adventure lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 via-transparent to-emerald-900/30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 60%),
              linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 20%, #DEB887 40%, #F5DEB3 60%, #E6D8B5 80%, #FEFBF0 100%)
            `,
            border: '3px solid #059669',
            boxShadow: `
              0 8px 32px rgba(5, 150, 105, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.7),
              inset 0 -2px 4px rgba(5, 150, 105, 0.2)
            `
          }}>
            <h1 className="text-4xl font-bold text-emerald-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              🗺️ Literary Quests
            </h1>
            <p className="text-lg text-emerald-800 max-w-3xl mx-auto leading-relaxed font-serif">
              Embark on epic literary adventures to unlock the secrets of great works. Complete quests to gain knowledge, 
              earn experience, and unlock legendary boss battles in The Arena.
            </p>
            <div className="mt-4">
              <Link href="/" className="text-emerald-700 hover:text-emerald-800 font-serif underline">
                ← Back to Literary Parlor
              </Link>
            </div>
          </div>
        </div>

        {/* Quest Progress Overview */}
        <div className="bg-gradient-to-r from-emerald-900/90 to-green-800/90 border-4 border-emerald-400 rounded-2xl shadow-2xl p-6 mb-8">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4 font-serif text-center">🎯 Your Quest Progress</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">7</div>
                <div className="text-emerald-200 font-serif">Completed Quests</div>
                <div className="text-xs text-emerald-300">Out of 24 available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">3</div>
                <div className="text-emerald-200 font-serif">Bosses Unlocked</div>
                <div className="text-xs text-emerald-300">Ready for Arena battles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">850</div>
                <div className="text-emerald-200 font-serif">Quest XP Earned</div>
                <div className="text-xs text-emerald-300">Knowledge gained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">2</div>
                <div className="text-emerald-200 font-serif">Active Quests</div>
                <div className="text-xs text-emerald-300">In progress</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Quests */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-100 mb-6 font-serif text-center" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            🔥 Active Quests
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-emerald-200 border-l-8 border-l-yellow-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-emerald-900 font-serif">📖 The Whale's Secret</h3>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">IN PROGRESS</div>
              </div>
              <p className="text-emerald-700 font-serif mb-4">
                Dive deep into the symbolism of Moby Dick. Complete character analyses and thematic discussions to unlock "The White Whale" boss battle.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-3">✓</div>
                  <span className="text-green-700 text-sm line-through">Read Chapters 1-15</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-3">✓</div>
                  <span className="text-green-700 text-sm line-through">Complete character analysis of Ishmael</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded mr-3">◐</div>
                  <span className="text-emerald-700 text-sm">Analyze whale symbolism (2/5 essays)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded mr-3">○</div>
                  <span className="text-gray-600 text-sm">Socratic Forum discussion participation</span>
                </div>
              </div>
              <div className="mt-4 bg-emerald-50 p-3 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-emerald-700 font-semibold">Progress: 60%</span>
                  <span className="text-emerald-600">🎁 Reward: Unlocks White Whale Boss + 200 XP</span>
                </div>
                <div className="w-full bg-emerald-200 rounded-full h-2 mt-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-emerald-200 border-l-8 border-l-blue-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-emerald-900 font-serif">🎭 Shakespearean Mastery</h3>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">IN PROGRESS</div>
              </div>
              <p className="text-emerald-700 font-serif mb-4">
                Master the art of Shakespearean drama. Complete analysis challenges to unlock multiple boss encounters including Iago and Lady Macbeth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-3">✓</div>
                  <span className="text-green-700 text-sm line-through">Identify 10 soliloquies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded mr-3">◐</div>
                  <span className="text-emerald-700 text-sm">Complete Macbeth theme analysis (1/3)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded mr-3">○</div>
                  <span className="text-gray-600 text-sm">Othello character motivation essay</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded mr-3">○</div>
                  <span className="text-gray-600 text-sm">Arena quick-battle practice (5 wins)</span>
                </div>
              </div>
              <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-700 font-semibold">Progress: 25%</span>
                  <span className="text-blue-600">🎁 Reward: Unlocks 3 Boss Battles + 350 XP</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Available Quests by Book */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-100 mb-6 font-serif text-center" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            📚 Quest Catalog
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

            {/* Moby Dick Quests */}
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-blue-200">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🐋</div>
                <h3 className="text-xl font-bold text-blue-900 font-serif">Moby Dick Questline</h3>
                <div className="text-sm text-blue-700">3 of 4 quests completed</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                  <span className="text-green-700 text-sm">✓ The Call to Adventure</span>
                  <span className="text-green-600 text-xs">+50 XP</span>
                </div>
                <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                  <span className="text-green-700 text-sm">✓ Maritime Mysteries</span>
                  <span className="text-green-600 text-xs">+75 XP</span>
                </div>
                <div className="flex items-center justify-between bg-yellow-50 p-2 rounded">
                  <span className="text-yellow-700 text-sm">◐ The Whale's Secret</span>
                  <span className="text-yellow-600 text-xs">60% Complete</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-gray-600 text-sm">🔒 Captain's Obsession</span>
                  <span className="text-red-600 text-xs">🔒 Locked</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm text-blue-700">🎯 <strong>Final Reward:</strong> Unlocks "The White Whale" legendary boss</div>
              </div>
            </div>

            {/* Shakespeare Quests */}
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-purple-200">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🎭</div>
                <h3 className="text-xl font-bold text-purple-900 font-serif">Shakespeare Questline</h3>
                <div className="text-sm text-purple-700">1 of 5 quests completed</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                  <span className="text-green-700 text-sm">✓ Bard's Introduction</span>
                  <span className="text-green-600 text-xs">+40 XP</span>
                </div>
                <div className="flex items-center justify-between bg-yellow-50 p-2 rounded">
                  <span className="text-yellow-700 text-sm">◐ Shakespearean Mastery</span>
                  <span className="text-yellow-600 text-xs">25% Complete</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-gray-600 text-sm">🔒 Tragedy & Triumph</span>
                  <span className="text-red-600 text-xs">🔒 Locked</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-gray-600 text-sm">🔒 The Scottish Play</span>
                  <span className="text-red-600 text-xs">🔒 Locked</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-gray-600 text-sm">🔒 Master of Deception</span>
                  <span className="text-red-600 text-xs">🔒 Locked</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm text-purple-700">🎯 <strong>Final Reward:</strong> Unlocks Iago, Lady Macbeth, and Hamlet bosses</div>
              </div>
            </div>

            {/* Pride and Prejudice Quests */}
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-pink-200">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">💃</div>
                <h3 className="text-xl font-bold text-pink-900 font-serif">Austen Questline</h3>
                <div className="text-sm text-pink-700">2 of 3 quests completed</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                  <span className="text-green-700 text-sm">✓ Society & Manners</span>
                  <span className="text-green-600 text-xs">+60 XP</span>
                </div>
                <div className="flex items-center justify-between bg-green-50 p-2 rounded">
                  <span className="text-green-700 text-sm">✓ Love & Logic</span>
                  <span className="text-green-600 text-xs">+80 XP</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-gray-600 text-sm">🔒 Master of Wit</span>
                  <span className="text-red-600 text-xs">🔒 Available Soon</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm text-pink-700">🎯 <strong>Final Reward:</strong> Unlocks "Social Expectations" boss challenge</div>
              </div>
            </div>

            {/* More questlines preview */}
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-orange-200 opacity-75">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="text-xl font-bold text-orange-900 font-serif">Dostoevsky Questline</h3>
                <div className="text-sm text-orange-700">Coming Soon</div>
              </div>
              <div className="text-center text-gray-600">
                <p className="text-sm font-serif">Unlock by completing 2 more active questlines</p>
              </div>
            </div>

            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-green-200 opacity-75">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="text-xl font-bold text-green-900 font-serif">Achebe Questline</h3>
                <div className="text-sm text-green-700">Coming Soon</div>
              </div>
              <div className="text-center text-gray-600">
                <p className="text-sm font-serif">Unlock by completing 3 more active questlines</p>
              </div>
            </div>

            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-teal-200 opacity-75">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="text-xl font-bold text-teal-900 font-serif">Hurston Questline</h3>
                <div className="text-sm text-teal-700">Coming Soon</div>
              </div>
              <div className="text-center text-gray-600">
                <p className="text-sm font-serif">Unlock by completing 3 more active questlines</p>
              </div>
            </div>

          </div>
        </div>

        {/* Quest Types Guide */}
        <div className="bg-gradient-to-r from-emerald-800/90 to-green-700/90 border-4 border-emerald-300 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif text-center">🎮 Quest Types</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-semibold mb-3 font-serif text-yellow-300">Reading Quests</h3>
                <p className="text-emerald-200 font-serif text-sm">
                  Complete chapter readings, identify key passages, and demonstrate comprehension through targeted questions.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">✍️</div>
                <h3 className="text-xl font-semibold mb-3 font-serif text-yellow-300">Analysis Quests</h3>
                <p className="text-emerald-200 font-serif text-sm">
                  Write character studies, theme essays, and symbolic interpretations to deepen your understanding.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-xl font-semibold mb-3 font-serif text-yellow-300">Discussion Quests</h3>
                <p className="text-emerald-200 font-serif text-sm">
                  Participate in Socratic Forum debates, collaborate on shared annotations, and engage with peers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quest Tools */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Link href="/the-arena" className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-red-200 hover:bg-red-50 transition-colors">
            <div className="text-3xl mb-3">⚔️</div>
            <h4 className="font-bold text-red-900 font-serif mb-2">The Arena</h4>
            <p className="text-sm text-red-700 font-serif">Battle unlocked bosses</p>
          </Link>
          <Link href="/socratic-forum" className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-blue-200 hover:bg-blue-50 transition-colors">
            <div className="text-3xl mb-3">🏛️</div>
            <h4 className="font-bold text-blue-900 font-serif mb-2">Socratic Forum</h4>
            <p className="text-sm text-blue-700 font-serif">Complete discussion quests</p>
          </Link>
          <div className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-emerald-200 hover:bg-emerald-50 transition-colors cursor-pointer">
            <div className="text-3xl mb-3">📊</div>
            <h4 className="font-bold text-emerald-900 font-serif mb-2">Quest Log</h4>
            <p className="text-sm text-emerald-700 font-serif">Track your progress</p>
          </div>
          <div className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer">
            <div className="text-3xl mb-3">🏆</div>
            <h4 className="font-bold text-purple-900 font-serif mb-2">Achievements</h4>
            <p className="text-sm text-purple-700 font-serif">View completed quests</p>
          </div>
        </div>

      </div>
    </main>
  )
} 