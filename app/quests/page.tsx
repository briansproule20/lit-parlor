import React from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function Quests() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #065f46 0%, #047857 25%, #059669 50%, #10b981 75%, #34d399 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dot Background */}
      <div className="opacity-30 absolute inset-0 pointer-events-none">
        <DotBackground />
      </div>
      
      {/* Adventure lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 via-transparent to-emerald-900/30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🏠 Return to Parlor
          </Link>
          
          <div className="text-right">
            <div className="text-amber-800 font-bold text-lg">🗺️ Quest Master</div>
            <div className="text-amber-700 text-sm">Level 12 Adventurer</div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Pedagogical Overviews */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-100 mb-8 font-serif text-center" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            Pedagogical Overviews
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Reading Quests Overview */}
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-yellow-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-yellow-900 font-serif">Reading Quests</h3>
                <p className="text-yellow-700 font-serif italic">Comprehension & Engagement</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2 font-serif">Learning Objectives</h4>
                  <ul className="text-sm text-yellow-700 space-y-1 font-serif">
                    <li>• Develop close reading skills and textual analysis</li>
                    <li>• Build vocabulary and contextual understanding</li>
                    <li>• Identify key themes, symbols, and motifs</li>
                    <li>• Practice active reading strategies</li>
                    <li>• Enhance reading comprehension and retention</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2 font-serif">Sample Activities</h4>
                  <ul className="text-sm text-yellow-700 space-y-1 font-serif">
                    <li>• Chapter-by-chapter reading guides</li>
                    <li>• Key passage identification exercises</li>
                    <li>• Vocabulary building challenges</li>
                    <li>• Reading comprehension quizzes</li>
                    <li>• Annotation and note-taking practice</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2 font-serif">Assessment Methods</h4>
                  <ul className="text-sm text-yellow-700 space-y-1 font-serif">
                    <li>• Reading comprehension tests</li>
                    <li>• Passage analysis responses</li>
                    <li>• Vocabulary mastery checks</li>
                    <li>• Reading progress tracking</li>
                    <li>• Completion-based XP rewards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Analysis Quests Overview */}
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900 font-serif">Analysis Quests</h3>
                <p className="text-blue-700 font-serif italic">Critical Thinking & Interpretation</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2 font-serif">Learning Objectives</h4>
                  <ul className="text-sm text-blue-700 space-y-1 font-serif">
                    <li>• Develop critical thinking and analytical skills</li>
                    <li>• Practice literary analysis and interpretation</li>
                    <li>• Build argumentative writing abilities</li>
                    <li>• Understand literary devices and techniques</li>
                    <li>• Form evidence-based interpretations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2 font-serif">Sample Activities</h4>
                  <ul className="text-sm text-blue-700 space-y-1 font-serif">
                    <li>• Character analysis essays</li>
                    <li>• Theme exploration projects</li>
                    <li>• Symbolic interpretation tasks</li>
                    <li>• Comparative analysis exercises</li>
                    <li>• Literary device identification</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2 font-serif">Assessment Methods</h4>
                  <ul className="text-sm text-blue-700 space-y-1 font-serif">
                    <li>• Analytical essay submissions</li>
                    <li>• Peer review and feedback</li>
                    <li>• Rubric-based evaluations</li>
                    <li>• Analysis quality scoring</li>
                    <li>• Critical thinking assessments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Discussion Quests Overview */}
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-green-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-900 font-serif">Discussion Quests</h3>
                <p className="text-green-700 font-serif italic">Collaboration & Dialogue</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2 font-serif">Learning Objectives</h4>
                  <ul className="text-sm text-green-700 space-y-1 font-serif">
                    <li>• Develop collaborative learning skills</li>
                    <li>• Practice respectful dialogue and debate</li>
                    <li>• Build communication and presentation abilities</li>
                    <li>• Learn from diverse perspectives</li>
                    <li>• Engage in Socratic questioning methods</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2 font-serif">Sample Activities</h4>
                  <ul className="text-sm text-green-700 space-y-1 font-serif">
                    <li>• Socratic Forum discussions</li>
                    <li>• Peer-led study groups</li>
                    <li>• Debate and argumentation exercises</li>
                    <li>• Collaborative annotation projects</li>
                    <li>• Presentation and sharing sessions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2 font-serif">Assessment Methods</h4>
                  <ul className="text-sm text-green-700 space-y-1 font-serif">
                    <li>• Discussion participation tracking</li>
                    <li>• Peer evaluation and feedback</li>
                    <li>• Quality of contribution scoring</li>
                    <li>• Collaborative project outcomes</li>
                    <li>• Communication skill assessments</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Educational Framework */}
        <div className="bg-gradient-to-r from-emerald-800/90 to-green-700/90 border-4 border-emerald-300 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif text-center">Educational Framework</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif text-yellow-300">Progressive Learning Model</h3>
                <p className="text-emerald-200 font-serif text-sm leading-relaxed mb-4">
                  Our quest system follows a scaffolded approach that builds skills progressively. Students begin with 
                  foundational reading comprehension, advance to critical analysis, and culminate in collaborative 
                  discussion and debate. Each quest type reinforces and builds upon previous learning experiences.
                </p>
                <ul className="text-emerald-200 text-sm space-y-2 font-serif">
                  <li>• <strong>Foundation:</strong> Reading comprehension and basic understanding</li>
                  <li>• <strong>Development:</strong> Critical analysis and interpretation</li>
                  <li>• <strong>Mastery:</strong> Collaborative discussion and synthesis</li>
                  <li>• <strong>Application:</strong> Arena challenges and real-world connections</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif text-yellow-300">Assessment & Feedback</h3>
                <p className="text-emerald-200 font-serif text-sm leading-relaxed mb-4">
                  Our gamified assessment system provides continuous feedback through XP tracking, progress indicators, 
                  and detailed rubrics. Teachers can monitor individual and class progress while students receive 
                  immediate recognition for their achievements.
                </p>
                <ul className="text-emerald-200 text-sm space-y-2 font-serif">
                  <li>• <strong>Formative Assessment:</strong> Continuous progress tracking</li>
                  <li>• <strong>Summative Assessment:</strong> Boss battles and final challenges</li>
                  <li>• <strong>Peer Assessment:</strong> Collaborative feedback systems</li>
                  <li>• <strong>Self-Assessment:</strong> Reflection and goal-setting tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Example Quest */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-100 mb-8 font-serif text-center" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            Example Quest: Close Reading Challenge
          </h2>
          
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-emerald-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-emerald-900 font-serif">The Whale's Secret: Passage Analysis</h3>
              <p className="text-emerald-700 font-serif italic">A comprehensive close reading quest from Moby Dick</p>
              <div className="mt-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">SAMPLE QUEST</span>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-4 font-serif text-lg">Quest Steps</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">1</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Read the Passage</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students are given a selected passage from Moby Dick and must read it carefully for comprehension.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">2</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Highlight & Annotate</h5>
                      <p className="text-emerald-700 text-sm font-serif">While reading, students must highlight key passages and add annotations explaining their significance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">3</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Multiple Choice Assessment</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students must answer 3 multiple choice questions correctly to demonstrate comprehension.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">4</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Quote Analysis</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students choose a significant quote and write a short explanation of its meaning and importance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">5</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Symbolism Analysis</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students identify three instances of symbolism in the passage and explain their significance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">6</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Syntax Analysis</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students identify a syntax change in the passage and explain its significance to the text's meaning.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">7</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Peer Review</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students must comment on another classmate's quote analysis, providing constructive feedback.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-emerald-800 mb-4 font-serif text-lg">Learning Objectives</h4>
                <ul className="text-emerald-700 text-sm space-y-2 font-serif mb-6">
                  <li>• Develop close reading and annotation skills</li>
                  <li>• Practice textual analysis and interpretation</li>
                  <li>• Build comprehension through multiple assessment types</li>
                  <li>• Engage in collaborative learning and peer feedback</li>
                  <li>• Connect reading to writing and discussion</li>
                </ul>
                
                <h4 className="font-semibold text-emerald-800 mb-4 font-serif text-lg">Assessment Criteria</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Reading Comprehension</span>
                    <span className="text-emerald-600 text-xs font-bold">20 XP</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Annotation Quality</span>
                    <span className="text-emerald-600 text-xs font-bold">25 XP</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Quote Analysis</span>
                    <span className="text-emerald-600 text-xs font-bold">25 XP</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Symbolism Analysis</span>
                    <span className="text-emerald-600 text-xs font-bold">20 XP</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Syntax Analysis</span>
                    <span className="text-emerald-600 text-xs font-bold">15 XP</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Peer Feedback</span>
                    <span className="text-emerald-600 text-xs font-bold">15 XP</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 mx-auto max-w-md">
              <h5 className="font-semibold text-yellow-800 font-serif mb-2">Quest Reward</h5>
              <p className="text-yellow-700 text-sm font-serif">Complete all steps to unlock the next quest, and keep reading to unlock "The White Whale" boss battle!</p>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 font-serif mb-3">Pedagogical Notes</h4>
              <p className="text-blue-700 text-sm font-serif leading-relaxed">
                This quest demonstrates the integration of multiple learning modalities: reading (comprehension), 
                writing (analysis), collaboration (peer review), and assessment (multiple choice + open response). 
                The progressive structure builds from basic comprehension to critical analysis, culminating in 
                collaborative learning. This model can be adapted for any literary text and scaled for different 
                difficulty levels.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 