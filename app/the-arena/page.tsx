import React from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function TheArena() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 25%, #dc2626 50%, #ea580c 75%, #f59e0b 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dot Background */}
      <div className="opacity-30 absolute inset-0 pointer-events-none">
        <DotBackground />
      </div>
      
      {/* Battle lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/20 via-transparent to-red-900/40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          {/* Removed return to parlor button and level info - now handled in menu bar */}
        </div>

        {/* Header */}
        <div className="text-center mb-12 mt-20">
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
              The Arena - Coming Soon
            </h1>
            <p className="text-lg text-red-800 max-w-3xl mx-auto leading-relaxed font-serif">
              Test your literary prowess in the gladiatorial arena of knowledge. Face epic boss battles, 
              conquer challenging quizzes, and prove your mastery through competitive assessments.
            </p>
          </div>
        </div>


        {/* Battle Categories */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          
          {/* Boss Battles */}
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-red-200 hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-900 font-serif mb-4">Epic Boss Battles</h3>
              <p className="text-red-800 font-serif mb-6">
                Face legendary literary antagonists in epic knowledge battles. 
                Defeat complex multi-part challenges to earn rare rewards and titles.
              </p>
            </div>
          </div>

          {/* Quick Battles */}
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 font-serif mb-4">Quick Battle Quizzes</h3>
              <p className="text-blue-800 font-serif mb-6">
                Fast-paced battles to test your reflexes and recall. Perfect for warming up 
                before epic encounters or earning quick experience points.
              </p>
            </div>
          </div>

          {/* Tournament Arena */}
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-purple-200 hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-900 font-serif mb-4">Tournament Arena</h3>
              <p className="text-purple-800 font-serif mb-6">
                Compete against other scholars in bracket-style tournaments. 
                Climb the ranks and earn prestigious titles and rewards.
              </p>
            </div>
          </div>

        </div>

        {/* Achievement Gallery */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-2 border-yellow-400 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-yellow-900 font-serif text-center mb-6">Achievement Gallery</h2>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md">
              <div className="text-sm font-bold text-yellow-800">First Victory</div>
              <div className="text-xs text-yellow-700">Complete first quiz</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md">
              <div className="text-sm font-bold text-blue-800">Scholar</div>
              <div className="text-xs text-blue-700">100 questions answered</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md opacity-50">
              <div className="text-sm font-bold text-gray-600">Dragon Slayer</div>
              <div className="text-xs text-gray-500">Defeat 5 boss battles</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md opacity-50">
              <div className="text-sm font-bold text-gray-600">Arena Champion</div>
              <div className="text-xs text-gray-500">Win a tournament</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md">
              <div className="text-sm font-bold text-orange-800">Speed Demon</div>
              <div className="text-xs text-orange-700">10 perfect quick battles</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-md opacity-50">
              <div className="text-sm font-bold text-gray-600">Legend</div>
              <div className="text-xs text-gray-500">Reach Level 50</div>
            </div>
          </div>
        </div>


        {/* Arena Rules */}
        <div className="bg-gradient-to-r from-gray-900/90 to-red-900/90 border-4 border-gray-400 rounded-2xl shadow-2xl p-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif text-center">Arena Code of Honor</h2>
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
                  <li>• Progress unlocks new challenges</li>
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

        {/* Sample Quick Battle Quizzes */}
        <div className="bg-gradient-to-r from-blue-900/90 to-indigo-800/90 border-4 border-blue-400 rounded-2xl shadow-2xl p-8 mb-8 mt-8">
          <h2 className="text-3xl font-bold text-white font-serif text-center mb-6">Quick Battle Quizzes</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Quick Battle 1 */}
            <div className="bg-white/10 rounded-xl p-6 border-2 border-blue-300 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400 font-serif">Character Showdown</h3>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">5 min</div>
              </div>
              <p className="text-blue-100 font-serif mb-4">Identify literary characters from descriptions, quotes, and actions in rapid-fire rounds.</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Questions:</span>
                  <span className="text-yellow-300">20 rapid-fire</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Time Limit:</span>
                  <span className="text-yellow-300">15 seconds per question</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Difficulty:</span>
                  <span className="text-yellow-300">Mixed (Easy to Hard)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Topics:</span>
                  <span className="text-yellow-300">All Major Works</span>
                </div>
              </div>
            </div>

            {/* Quick Battle 2 */}
            <div className="bg-white/10 rounded-xl p-6 border-2 border-green-300 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-green-400 font-serif">Quote Lightning Round</h3>
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 min</div>
              </div>
              <p className="text-green-100 font-serif mb-4">Match famous literary quotes to their correct authors and works in this high-speed challenge.</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-green-200">Questions:</span>
                  <span className="text-yellow-300">15 quote matches</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-200">Time Limit:</span>
                  <span className="text-yellow-300">12 seconds per quote</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-200">Difficulty:</span>
                  <span className="text-yellow-300">Intermediate</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-200">Format:</span>
                  <span className="text-yellow-300">Multiple Choice</span>
                </div>
              </div>
            </div>

            {/* Quick Battle 3 */}
            <div className="bg-white/10 rounded-xl p-6 border-2 border-purple-300 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-400 font-serif">Symbol Hunt</h3>
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 min</div>
              </div>
              <p className="text-purple-100 font-serif mb-4">Identify and interpret literary symbols, metaphors, and allegorical elements across classic works.</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Questions:</span>
                  <span className="text-yellow-300">18 symbol analysis</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Time Limit:</span>
                  <span className="text-yellow-300">13 seconds per question</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Difficulty:</span>
                  <span className="text-yellow-300">Advanced</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Focus:</span>
                  <span className="text-yellow-300">Symbolism & Themes</span>
                </div>
              </div>
            </div>

            {/* Quick Battle 4 */}
            <div className="bg-white/10 rounded-xl p-6 border-2 border-orange-300 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-orange-400 font-serif">Plot Warrior</h3>
                <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">6 min</div>
              </div>
              <p className="text-orange-100 font-serif mb-4">Navigate complex plot structures, identify story arcs, and sequence major events from literary masterpieces.</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Questions:</span>
                  <span className="text-yellow-300">25 plot challenges</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Time Limit:</span>
                  <span className="text-yellow-300">14 seconds per question</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Difficulty:</span>
                  <span className="text-yellow-300">Mixed</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Types:</span>
                  <span className="text-yellow-300">Sequence, Cause/Effect</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sample Boss Battles */}
        <div className="bg-gradient-to-r from-red-900/90 to-orange-800/90 border-4 border-red-400 rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white font-serif text-center mb-6">Legendary Boss Battles</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Boss Battle 1 */}
            <div className="bg-white/10 rounded-xl p-6 border-2 border-red-300 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-yellow-400 font-serif">The White Whale</h3>
              </div>
              <p className="text-red-100 font-serif mb-4">Master Melville's maritime epic through five grueling phases of increasing complexity.</p>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-red-200">Phase 1:</span>
                  <span className="text-yellow-300">Character Identification (10 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-red-200">Phase 2:</span>
                  <span className="text-yellow-300">Symbolism Analysis (15 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-red-200">Phase 3:</span>
                  <span className="text-yellow-300">Quote Attribution (20 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-red-200">Phase 4:</span>
                  <span className="text-yellow-300">Thematic Essay (30 minutes)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-red-200">Phase 5:</span>
                  <span className="text-yellow-300">Boss Battle: Ahab's Monologue (Timed)</span>
                </div>
              </div>
            </div>

            {/* Boss Battle 2 */}
            <div className="bg-white/10 rounded-xl p-6 border-2 border-orange-300 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-orange-400 font-serif">Iago's Deception</h3>
              </div>
              <p className="text-orange-100 font-serif mb-4">Navigate Shakespeare's web of lies and manipulation in this psychological warfare challenge.</p>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Phase 1:</span>
                  <span className="text-yellow-300">Plot Sequence (12 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Phase 2:</span>
                  <span className="text-yellow-300">Character Motivation (18 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Phase 3:</span>
                  <span className="text-yellow-300">Dramatic Irony (15 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Phase 4:</span>
                  <span className="text-yellow-300">Soliloquy Analysis (25 minutes)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-200">Phase 5:</span>
                  <span className="text-yellow-300">Boss Battle: Iago's Schemes (Timed)</span>
                </div>
              </div>
            </div>

            {/* Boss Battle 3 */}
            <div className="bg-white/10 rounded-xl p-6 border-2 border-purple-300 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-400 font-serif">Raskolnikov's Conscience</h3>
              </div>
              <p className="text-purple-100 font-serif mb-4">Confront Dostoevsky's psychological masterpiece in this morally complex challenge.</p>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Phase 1:</span>
                  <span className="text-yellow-300">Philosophical Concepts (20 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Phase 2:</span>
                  <span className="text-yellow-300">Psychological Analysis (25 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Phase 3:</span>
                  <span className="text-yellow-300">Symbolic Objects (15 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Phase 4:</span>
                  <span className="text-yellow-300">Moral Philosophy Essay (45 minutes)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200">Phase 5:</span>
                  <span className="text-yellow-300">Boss Battle: The Confession (Timed)</span>
                </div>
              </div>
            </div>

            {/* Boss Battle 4 */}
            <div className="bg-white/10 rounded-xl p-6 border-2 border-green-300 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-green-400 font-serif">Janie's Journey</h3>
              </div>
              <p className="text-green-100 font-serif mb-4">Embark on Hurston's epic journey of self-discovery and cultural identity.</p>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-green-200">Phase 1:</span>
                  <span className="text-yellow-300">Cultural Context (15 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-200">Phase 2:</span>
                  <span className="text-yellow-300">Dialect Analysis (20 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-200">Phase 3:</span>
                  <span className="text-yellow-300">Folkloric Elements (18 questions)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-200">Phase 4:</span>
                  <span className="text-yellow-300">Character Development Essay (35 minutes)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-200">Phase 5:</span>
                  <span className="text-yellow-300">Boss Battle: The Pear Tree (Timed)</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
} 