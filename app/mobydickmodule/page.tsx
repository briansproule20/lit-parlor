import React from 'react'
import Link from 'next/link'

export default function MobyDickModule() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
        backgroundImage: 'url(/images/ship-storm.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
      


      <div className="max-w-6xl mx-auto">
        
        {/* Captain's Log Header */}
        <div className="text-center mb-12 mt-16">
          <div className="inline-block p-8 shadow-2xl transform relative overflow-visible transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{
            border: '4px solid #8B4513',
            borderRadius: '12px',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.5),
              inset 0 4px 8px rgba(255, 255, 255, 0.3),
              inset 0 -4px 8px rgba(139, 69, 19, 0.6)
            `
          }}>
            {/* Parchment background */}
            <div className="absolute inset-0" style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 70%),
                radial-gradient(circle at 70% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 70%),
                radial-gradient(circle at 20% 70%, rgba(238, 203, 161, 0.8) 0%, transparent 60%),
                linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 25%, #DEB887 50%, #F5DEB3 75%, #FEFBF0 100%)
              `
            }}></div>
            
            {/* Captain's seal - pinning the notice to background */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full shadow-2xl z-20" style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(220, 20, 60, 0.95) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(139, 0, 0, 0.9) 0%, transparent 60%),
                radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
                linear-gradient(135deg, #DC143C 0%, #8B0000 30%, #A0522D 60%, #8B0000 100%)
              `,
              border: '3px solid #8B4513',
              boxShadow: `
                0 8px 20px rgba(0, 0, 0, 0.8),
                0 4px 12px rgba(139, 69, 19, 0.6),
                inset 0 3px 6px rgba(255, 255, 255, 0.4),
                inset 0 -3px 6px rgba(139, 0, 0, 0.8)
              `
            }}>
              <div className="absolute inset-2 text-center text-white font-bold text-xl flex items-center justify-center">⚓</div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '0.05em'
              }}>
                CAPTAIN'S NOTICE
              </h1>
              <div className="w-full h-2 bg-amber-700 mb-4"></div>
              <p className="text-2xl text-amber-800 font-serif leading-relaxed">
                "The sea had jeeringly kept his finite body up, but drowned the infinite of his soul"
              </p>
              <div className="mt-4 text-lg text-amber-700 font-serif italic">
                — Herman Melville
              </div>
            </div>
          </div>
        </div>

        {/* Call to Adventure - Moved to Center */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-900/90 to-slate-800/90 border-4 border-blue-400 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Ready to Navigate These Waters?
            </h2>
            <p className="text-blue-200 text-lg mb-6 font-serif">
              Choose your course through Melville's maritime masterpiece
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link href="/mobydickmodule/journey" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🧭 Start Journey
              </Link>
              <Link href="/mobydickmodule/study-guide" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                📚 Study Guide
              </Link>
              <Link href="/mobydickmodule/quiz" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🎯 Quick Quiz
              </Link>
            </div>
            <div className="border-t border-blue-300 pt-4">
              <Link 
                href="/mobydick" 
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white font-bold text-lg px-6 py-3 bg-blue-800/50 hover:bg-blue-700/70 rounded-lg border-2 border-blue-400 shadow-md hover:shadow-lg transition-all"
              >
                ⚓ Return to Port
              </Link>
            </div>
          </div>
        </div>

        {/* Ship's Deck Grid - Moved Below */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          
          {/* Interactive Analysis */}
          <Link href="/mobydickmodule/study-guide?section=characters" className="block">
            <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">🔍</div>
                <h3 className="text-2xl font-bold text-amber-900 font-serif">CHARACTERS</h3>
                <div className="w-full h-1 bg-amber-600 my-2"></div>
                <p className="text-amber-700 font-serif italic">Explore the souls aboard the Pequod</p>
              </div>
              <div className="space-y-4 text-amber-800 font-serif">
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-amber-300">
                  <span className="text-2xl">👨‍✈️</span>
                  <div>
                    <div className="font-bold">Captain Ahab</div>
                    <div className="text-sm">Obsession Incarnate</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-amber-300">
                  <span className="text-2xl">📝</span>
                  <div>
                    <div className="font-bold">Ishmael</div>
                    <div className="text-sm">Our Chronicler</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/70 rounded border border-amber-300">
                  <span className="text-2xl">🗡️</span>
                                  <div>
                  <div className="font-bold">Queequeg</div>
                  <div className="text-sm">Loyal Friend</div>
                </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Thematic Exploration */}
          <Link href="/mobydickmodule/study-guide?section=themes" className="block">
            <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">🌊</div>
                <h3 className="text-2xl font-bold text-amber-900 font-serif">THEMATIC DEPTHS</h3>
                <div className="w-full h-1 bg-amber-600 my-2"></div>
                <p className="text-amber-700 font-serif italic">Dive into Melville's profound themes</p>
              </div>
              <div className="space-y-4 text-amber-800 font-serif">
                <div className="p-3 bg-white/70 rounded border border-amber-300">
                  <div className="font-bold flex items-center gap-2">
                    <span>⚔️</span> Obsession vs. Reason
                  </div>
                  <div className="text-sm mt-1">When pursuit becomes destruction</div>
                </div>
                <div className="p-3 bg-white/70 rounded border border-amber-300">
                  <div className="font-bold flex items-center gap-2">
                    <span>🌍</span> Nature's Indifference
                  </div>
                  <div className="text-sm mt-1">The ocean as impartial force</div>
                </div>
                <div className="p-3 bg-white/70 rounded border border-amber-300">
                  <div className="font-bold flex items-center gap-2">
                    <span>⚖️</span> Fate vs. Free Will
                  </div>
                  <div className="text-sm mt-1">Are we masters of our destiny?</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Symbol Navigation */}
          <Link href="/mobydickmodule/study-guide?section=symbols" className="block">
            <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">🐋</div>
                <h3 className="text-2xl font-bold text-amber-900 font-serif">SYMBOLIC OCEAN</h3>
                <div className="w-full h-1 bg-amber-600 my-2"></div>
                <p className="text-amber-700 font-serif italic">Navigate the sea of symbols</p>
              </div>
              <div className="space-y-4 text-amber-800 font-serif">
                <div className="p-3 bg-white/70 rounded border border-amber-300">
                  <div className="font-bold flex items-center gap-2">
                    <span>🐋</span> The White Whale
                  </div>
                  <div className="text-sm mt-1">Nature's unknowable mystery</div>
                </div>
                <div className="p-3 bg-white/70 rounded border border-amber-300">
                  <div className="font-bold flex items-center gap-2">
                    <span>⚰️</span> Queequeg's Coffin
                  </div>
                  <div className="text-sm mt-1">Death becomes salvation</div>
                </div>
                <div className="p-3 bg-white/70 rounded border border-amber-300">
                  <div className="font-bold flex items-center gap-2">
                    <span>🌊</span> The Boundless Sea
                  </div>
                  <div className="text-sm mt-1">Infinity and isolation</div>
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* Moby Dick Quests Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <div className="inline-block p-6 bg-gradient-to-r from-purple-900/90 to-indigo-800/90 border-4 border-purple-400 rounded-2xl shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-2 font-serif">🎯 Moby Dick Quests</h2>
              <p className="text-purple-200 text-lg font-serif">Complete challenges to earn XP and unlock new content</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Easy Quest */}
            <div className="bg-green-50/95 border-4 border-green-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">🌱</div>
                <h3 className="text-2xl font-bold text-green-900 font-serif">Easy Quest</h3>
                <div className="w-full h-1 bg-green-600 my-2"></div>
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                </div>
                <p className="text-green-700 font-serif italic mt-2">Perfect for beginners</p>
              </div>
              
              <div className="space-y-4 text-green-800 font-serif">
                <div className="p-4 bg-white/70 rounded border border-green-300">
                  <h4 className="font-bold text-lg mb-2">📖 Character Collector</h4>
                  <p className="text-sm mb-3">Read about 5 different characters from the novel and write a brief summary of each one's role in the story.</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-green-200 px-2 py-1 rounded">Reward: 50 XP</span>
                    <span className="bg-green-200 px-2 py-1 rounded">Time: 30 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Quest */}
            <div className="bg-yellow-50/95 border-4 border-yellow-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">⚔️</div>
                <h3 className="text-2xl font-bold text-yellow-900 font-serif">Medium Quest</h3>
                <div className="w-full h-1 bg-yellow-600 my-2"></div>
                <div className="flex items-center justify-center gap-2 text-yellow-700">
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                </div>
                <p className="text-yellow-700 font-serif italic mt-2">For experienced sailors</p>
              </div>
              
              <div className="space-y-4 text-yellow-800 font-serif">
                <div className="p-4 bg-white/70 rounded border border-yellow-300">
                  <h4 className="font-bold text-lg mb-2">🔍 Symbol Detective</h4>
                  <p className="text-sm mb-3">Analyze 3 major symbols from the novel. For each symbol, explain what it represents and how it contributes to the story's meaning.</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-yellow-200 px-2 py-1 rounded">Reward: 100 XP</span>
                    <span className="bg-yellow-200 px-2 py-1 rounded">Time: 45 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenging Quest */}
            <div className="bg-red-50/95 border-4 border-red-600 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">🔥</div>
                <h3 className="text-2xl font-bold text-red-900 font-serif">Challenging Quest</h3>
                <div className="w-full h-1 bg-red-600 my-2"></div>
                <div className="flex items-center justify-center gap-2 text-red-700">
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                  <span className="text-sm">⭐</span>
                </div>
                <p className="text-red-700 font-serif italic mt-2">For master whalers only</p>
              </div>
              
              <div className="space-y-4 text-red-800 font-serif">
                <div className="p-4 bg-white/70 rounded border border-red-300">
                  <h4 className="font-bold text-lg mb-2">🎭 Literary Analysis Master</h4>
                  <p className="text-sm mb-3">Write a 500-word essay comparing and contrasting two major themes from Moby Dick. Use specific quotes and examples to support your analysis.</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-red-200 px-2 py-1 rounded">Reward: 200 XP</span>
                    <span className="bg-red-200 px-2 py-1 rounded">Time: 90 min</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Boss Battle Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <div className="inline-block p-8 bg-gradient-to-r from-gray-900/95 to-slate-800/95 border-4 border-gray-400 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-6xl">🐋</span>
                <h2 className="text-4xl font-bold text-white font-serif">BOSS BATTLE</h2>
                <span className="text-6xl">⚔️</span>
              </div>
              <h3 className="text-3xl font-bold text-red-400 mb-2 font-serif">Facing the White Whale</h3>
              <p className="text-gray-300 text-lg font-serif">The ultimate test of your Moby Dick mastery</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50/95 to-slate-100/95 border-4 border-gray-600 rounded-xl p-8 shadow-2xl">
              
              {/* Boss Battle Header */}
              <div className="text-center mb-8">
                <div className="inline-block p-6 bg-gradient-to-r from-red-900/90 to-orange-800/90 border-2 border-red-400 rounded-xl shadow-lg">
                  <h4 className="text-2xl font-bold text-white mb-2 font-serif">🎯 Comprehensive Assessment</h4>
                  <p className="text-red-200 font-serif">Prove your mastery of Melville's masterpiece</p>
                </div>
              </div>

              {/* Assessment Components */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg border border-gray-300">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">📝</span>
                      Written Analysis
                    </h5>
                    <p className="text-sm text-gray-700">750-word critical essay analyzing a major theme or character from Moby Dick</p>
                  </div>

                  <div className="bg-white/80 p-4 rounded-lg border border-gray-300">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">🔍</span>
                      Symbol Interpretation
                    </h5>
                    <p className="text-sm text-gray-700">Detailed analysis of 3 key symbols and their significance in the novel</p>
                  </div>

                  <div className="bg-white/80 p-4 rounded-lg border border-gray-300">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">📊</span>
                      Advanced Quiz
                    </h5>
                    <p className="text-sm text-gray-700">Comprehensive 20-question assessment covering all aspects of the novel</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg border border-gray-300">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">💬</span>
                      Quote Analysis
                    </h5>
                    <p className="text-sm text-gray-700">Interpret and explain 5 significant quotes from the novel</p>
                  </div>

                  <div className="bg-white/80 p-4 rounded-lg border border-gray-300">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">🌊</span>
                      Theme Exploration
                    </h5>
                    <p className="text-sm text-gray-700">Compare and contrast two major themes with textual evidence</p>
                  </div>

                  <div className="bg-white/80 p-4 rounded-lg border border-gray-300">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">🎭</span>
                      Character Study
                    </h5>
                    <p className="text-sm text-gray-700">In-depth character analysis with psychological insights</p>
                  </div>
                </div>
              </div>

              {/* Rewards and Requirements */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                
                <div className="text-center p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border-2 border-green-400">
                  <div className="text-3xl mb-2">🏆</div>
                  <h5 className="font-bold text-green-900 mb-1">Grand Prize</h5>
                  <p className="text-sm text-green-700">500 XP + Moby Dick Master Badge</p>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border-2 border-blue-400">
                  <div className="text-3xl mb-2">⏱️</div>
                  <h5 className="font-bold text-blue-900 mb-1">Time Limit</h5>
                  <p className="text-sm text-blue-700">3 hours to complete all sections</p>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-purple-100 to-violet-100 rounded-lg border-2 border-purple-400">
                  <div className="text-3xl mb-2">📚</div>
                  <h5 className="font-bold text-purple-900 mb-1">Prerequisites</h5>
                  <p className="text-sm text-purple-700">Complete all 3 quests first</p>
                </div>
              </div>

              {/* Warning and Challenge */}
              <div className="text-center p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg border-2 border-red-400">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-4xl">⚠️</span>
                  <h5 className="text-xl font-bold text-red-900">Final Warning</h5>
                  <span className="text-4xl">🐋</span>
                </div>
                <p className="text-red-800 font-serif mb-4">
                  "To the last, I grapple with thee; From Hell's heart, I stab at thee; For hate's sake, I spit my last breath at thee."
                </p>
                <p className="text-sm text-red-700 italic">
                  — Captain Ahab's challenge to the White Whale
                </p>
              </div>

              {/* Locked Battle Button */}
              <div className="text-center mt-8">
                <div className="inline-block p-6 bg-gradient-to-r from-gray-400 to-slate-500 border-2 border-gray-500 rounded-lg shadow-lg">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-3xl">🔒</span>
                    <span className="text-2xl font-bold text-gray-700">LOCKED</span>
                    <span className="text-3xl">🔒</span>
                  </div>
                  <p className="text-gray-600 font-serif mb-2">Complete all 3 quests to unlock</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <span className="bg-gray-200 px-2 py-1 rounded">Easy Quest</span>
                    <span className="bg-gray-200 px-2 py-1 rounded">Medium Quest</span>
                    <span className="bg-gray-200 px-2 py-1 rounded">Challenging Quest</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Moby Dick Specific Achievements Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <div className="inline-block p-6 bg-gradient-to-r from-amber-900/90 to-yellow-800/90 border-4 border-amber-400 rounded-2xl shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-2 font-serif">🏆 Moby Dick Specific Achievements</h2>
              <p className="text-amber-200 text-lg font-serif">Unlock these maritime milestones</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50/95 to-yellow-100/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl">
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Achievement 1 */}
                <div className="bg-white/80 p-4 rounded-lg border-2 border-amber-300 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-3">
                    <div className="text-3xl mb-2">🐋</div>
                    <h4 className="font-bold text-amber-900">Whale Watcher</h4>
                  </div>
                  <p className="text-sm text-amber-700 mb-3">Complete all whale-related questions in the quiz</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-amber-200 px-2 py-1 rounded">Reward: 25 XP</span>
                    <span className="text-amber-600">🔒</span>
                  </div>
                </div>

                {/* Achievement 2 */}
                <div className="bg-white/80 p-4 rounded-lg border-2 border-amber-300 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-3">
                    <div className="text-3xl mb-2">⚓</div>
                    <h4 className="font-bold text-amber-900">Pequod Navigator</h4>
                  </div>
                  <p className="text-sm text-amber-700 mb-3">Read through the entire journey section</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-amber-200 px-2 py-1 rounded">Reward: 50 XP</span>
                    <span className="text-amber-600">🔒</span>
                  </div>
                </div>

                {/* Achievement 3 */}
                <div className="bg-white/80 p-4 rounded-lg border-2 border-amber-300 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-3">
                    <div className="text-3xl mb-2">🗡️</div>
                    <h4 className="font-bold text-amber-900">Harpoon Master</h4>
                  </div>
                  <p className="text-sm text-amber-700 mb-3">Score 100% on the advanced quiz</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-amber-200 px-2 py-1 rounded">Reward: 75 XP</span>
                    <span className="text-amber-600">🔒</span>
                  </div>
                </div>

                {/* Achievement 4 */}
                <div className="bg-white/80 p-4 rounded-lg border-2 border-amber-300 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-3">
                    <div className="text-3xl mb-2">🌊</div>
                    <h4 className="font-bold text-amber-900">Ocean Scholar</h4>
                  </div>
                  <p className="text-sm text-amber-700 mb-3">Complete all study guide sections</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-amber-200 px-2 py-1 rounded">Reward: 100 XP</span>
                    <span className="text-amber-600">🔒</span>
                  </div>
                </div>

                {/* Achievement 5 */}
                <div className="bg-white/80 p-4 rounded-lg border-2 border-amber-300 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-3">
                    <div className="text-3xl mb-2">👑</div>
                    <h4 className="font-bold text-amber-900">Captain's Legacy</h4>
                  </div>
                  <p className="text-sm text-amber-700 mb-3">Defeat the Boss Battle and earn the Master Badge</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-amber-200 px-2 py-1 rounded">Reward: 200 XP</span>
                    <span className="text-amber-600">🔒</span>
                  </div>
                </div>

              </div>

              {/* Achievement Progress */}
              <div className="mt-8 p-4 bg-white/70 rounded-lg border border-amber-300">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-bold text-amber-900">Achievement Progress</h5>
                  <span className="text-sm text-amber-700">0/5 Unlocked</span>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-3">
                  <div className="bg-amber-600 h-3 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <p className="text-xs text-amber-600 mt-2 text-center">Complete activities to unlock achievements</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 