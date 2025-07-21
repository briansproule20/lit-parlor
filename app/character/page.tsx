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
                <div className="flex items-center gap-4">
                  <div className="text-lg text-amber-700 font-serif">Level {character.level}</div>
                  <div className="flex items-center gap-2">
                    <div className="text-lg text-indigo-600 font-serif font-semibold">{character.level}</div>
                    <div className="text-sm text-indigo-500 font-serif">Skill Points</div>
                  </div>
                </div>
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

        {/* Character Classes Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block p-6 bg-gradient-to-r from-purple-900/90 to-indigo-800/90 border-4 border-purple-400 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 font-serif">
                Choose Your Literary Lens
              </h2>
              <p className="text-purple-200 text-lg font-serif max-w-3xl mx-auto">
                Each character class represents a unique approach to reading and analyzing literature. 
                These lenses shape how you engage with texts and unlock specialized quest paths.
              </p>
            </div>
          </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {/* Analytical Reader */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🔍
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 font-serif">Analytical Reader</h3>
                  </div>
                  <p className="text-blue-800 font-serif text-sm leading-relaxed">
                    Masters of close reading and textual analysis. Excels at identifying literary devices, 
                    themes, and structural elements. Unlocks advanced annotation tools and critical essay quests.
                  </p>
                </div>

                {/* Creative Interpreter */}
                <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🎭
                    </div>
                    <h3 className="text-xl font-bold text-pink-900 font-serif">Creative Interpreter</h3>
                  </div>
                  <p className="text-pink-800 font-serif text-sm leading-relaxed">
                    Brings imagination to literary analysis through creative responses. Specializes in character 
                    development, alternative perspectives, and artistic interpretations. Unlocks creative writing and multimedia quests.
                  </p>
                </div>

                {/* Historical Researcher */}
                <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      📜
                    </div>
                    <h3 className="text-xl font-bold text-amber-900 font-serif">Historical Researcher</h3>
                  </div>
                  <p className="text-amber-800 font-serif text-sm leading-relaxed">
                    Contextualizes literature within its historical and cultural framework. Expert at understanding 
                    social conditions, author biography, and period influences. Unlocks historical research and timeline quests.
                  </p>
                </div>

                {/* Relationship Expert */}
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      💝
                    </div>
                    <h3 className="text-xl font-bold text-green-900 font-serif">Relationship Expert</h3>
                  </div>
                  <p className="text-green-800 font-serif text-sm leading-relaxed">
                    Focuses on character relationships, social dynamics, and interpersonal conflicts. 
                    Masters dialogue analysis and character motivation. Unlocks relationship mapping and character study quests.
                  </p>
                </div>

                {/* Allusion Hunter */}
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🔗
                    </div>
                    <h3 className="text-xl font-bold text-purple-900 font-serif">Allusion Hunter</h3>
                  </div>
                  <p className="text-purple-800 font-serif text-sm leading-relaxed">
                    Specializes in identifying references, connections, and intertextuality. Expert at finding 
                    mythological, biblical, and literary allusions. Unlocks connection-mapping and reference research quests.
                  </p>
                </div>

                {/* Symbolic Decoder */}
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🗝️
                    </div>
                    <h3 className="text-xl font-bold text-indigo-900 font-serif">Symbolic Decoder</h3>
                  </div>
                  <p className="text-indigo-800 font-serif text-sm leading-relaxed">
                    Masters the art of interpreting symbols, metaphors, and deeper meanings. 
                    Excels at uncovering hidden layers and abstract concepts. Unlocks symbolism analysis and metaphor exploration quests.
                  </p>
                </div>

                {/* Visual Artist */}
                <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🎨
                    </div>
                    <h3 className="text-xl font-bold text-teal-900 font-serif">Visual Artist</h3>
                  </div>
                  <p className="text-teal-800 font-serif text-sm leading-relaxed">
                    Creates visual representations of literary concepts, character maps, and storyboards. 
                    Specializes in graphic novels, illustrations, and visual storytelling techniques. 
                    Unlocks visual mapping and creative design quests.
                  </p>
                </div>

                {/* Rhythm & Sound Detective */}
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🎵
                    </div>
                    <h3 className="text-xl font-bold text-orange-900 font-serif">Rhythm & Sound Detective</h3>
                  </div>
                  <p className="text-orange-800 font-serif text-sm leading-relaxed">
                    Analyzes poetic meter, rhythm patterns, and sound devices. Masters scansion, 
                    alliteration, and musical elements in literature. Unlocks sound analysis and rhythm exploration quests.
                  </p>
                </div>

                {/* Cultural Anthropologist */}
                <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🌍
                    </div>
                    <h3 className="text-xl font-bold text-amber-900 font-serif">Cultural Anthropologist</h3>
                  </div>
                  <p className="text-amber-800 font-serif text-sm leading-relaxed">
                    Studies literature through cultural lenses, examining social customs, traditions, 
                    and cultural contexts. Specializes in world literature and cross-cultural analysis. 
                    Unlocks cultural research and comparative analysis quests.
                  </p>
                </div>

                {/* Psychological Profiler */}
                <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🧠
                    </div>
                    <h3 className="text-xl font-bold text-red-900 font-serif">Psychological Profiler</h3>
                  </div>
                  <p className="text-red-800 font-serif text-sm leading-relaxed">
                    Analyzes character psychology, mental states, and behavioral patterns. 
                    Masters psychological theories and character motivation analysis. 
                    Unlocks psychological analysis and character study quests.
                  </p>
                </div>

                {/* Moral Philosopher */}
                <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      ⚖️
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif">Moral Philosopher</h3>
                  </div>
                  <p className="text-slate-800 font-serif text-sm leading-relaxed">
                    Examines ethical dilemmas, moral choices, and philosophical themes. 
                    Specializes in ethical analysis and philosophical discussion. 
                    Unlocks ethical debate and philosophical exploration quests.
                  </p>
                </div>

                {/* Time Traveler */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gray-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      ⏰
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-serif">Time Traveler</h3>
                  </div>
                  <p className="text-gray-800 font-serif text-sm leading-relaxed">
                    Compares literature across time periods, tracks literary evolution, and studies 
                    how themes persist or change over centuries. Unlocks historical comparison and timeline quests.
                  </p>
                </div>

                {/* Genre Specialist */}
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      📚
                    </div>
                    <h3 className="text-xl font-bold text-yellow-900 font-serif">Genre Specialist</h3>
                  </div>
                  <p className="text-yellow-800 font-serif text-sm leading-relaxed">
                    Masters specific genres (mystery, romance, sci-fi, etc.) and their conventions. 
                    Unlocks genre-specific analysis tools and specialized quests.
                  </p>
                </div>

                {/* Performance Artist */}
                <div className="p-6 bg-gradient-to-br from-violet-50 to-violet-100 border-2 border-violet-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-violet-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🎭
                    </div>
                    <h3 className="text-xl font-bold text-violet-900 font-serif">Performance Artist</h3>
                  </div>
                  <p className="text-violet-800 font-serif text-sm leading-relaxed">
                    Brings literature to life through dramatic readings, character voices, and theatrical interpretations. 
                    Specializes in performance and oral storytelling. Unlocks dramatic performance and oral interpretation quests.
                  </p>
                </div>

                {/* Master of Poetics */}
                <div className="p-6 bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      ✍️
                    </div>
                    <h3 className="text-xl font-bold text-rose-900 font-serif">Master of Poetics</h3>
                  </div>
                  <p className="text-rose-800 font-serif text-sm leading-relaxed">
                    Expert in poetic forms, meter, and verse structure. Masters sonnets, haiku, free verse, 
                    and traditional forms. Unlocks poetry analysis and verse composition quests.
                  </p>
                </div>

                {/* Rhetorical Savant */}
                <div className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🎯
                    </div>
                    <h3 className="text-xl font-bold text-cyan-900 font-serif">Rhetorical Savant</h3>
                  </div>
                  <p className="text-cyan-800 font-serif text-sm leading-relaxed">
                    Analyzes persuasive techniques, argument structure, and rhetorical devices. 
                    Masters ethos, pathos, logos, and classical rhetoric. Unlocks argument analysis and debate quests.
                  </p>
                </div>

                {/* Stylistic Critic */}
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🎨
                    </div>
                    <h3 className="text-xl font-bold text-emerald-900 font-serif">Stylistic Critic</h3>
                  </div>
                  <p className="text-emerald-800 font-serif text-sm leading-relaxed">
                    Focuses on authorial voice, writing style, and linguistic choices. 
                    Masters tone, diction, syntax, and narrative voice analysis. Unlocks style analysis and voice study quests.
                  </p>
                </div>

                {/* Demosthenic Orator */}
                <div className="p-6 bg-gradient-to-br from-lime-50 to-lime-100 border-2 border-lime-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-lime-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      🗣️
                    </div>
                    <h3 className="text-xl font-bold text-lime-900 font-serif">Demosthenic Orator</h3>
                  </div>
                  <p className="text-lime-800 font-serif text-sm leading-relaxed">
                    Specializes in speech analysis, public speaking, and oratory techniques. 
                    Masters delivery, audience engagement, and persuasive speaking. Unlocks speech analysis and presentation quests.
                  </p>
                </div>
              </div>

          <div className="text-center mt-8">
            <div className="inline-block p-4 bg-gradient-to-r from-slate-700/90 to-slate-600/90 border-2 border-slate-400 rounded-xl shadow-lg">
              <p className="text-slate-200 font-serif text-sm">
                <span className="font-semibold">Demo Note:</span> In the full version, students can select their preferred character class 
                or unlock multiple classes as they progress, each offering unique quest paths and specialized tools.
              </p>
            </div>
          </div>
        </div>

        {/* Skill Tree */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block p-6 bg-gradient-to-r from-indigo-900/90 to-purple-800/90 border-4 border-indigo-400 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 font-serif">
                Literary Skill Tree
              </h2>
              <p className="text-indigo-200 text-lg font-serif max-w-3xl mx-auto">
                Develop your literary analysis abilities through a branching skill system. 
                Each skill unlocks new quest types, analysis tools, and specialized content.
              </p>
            </div>
          </div>

          <div className="bg-white/95 rounded-xl shadow-xl p-8 border-2 border-indigo-200">
            {/* Foundation Skills */}
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg shadow-lg border-2 border-amber-600">
                <h3 className="text-lg font-bold text-white font-serif">Literary Foundation</h3>
                <p className="text-amber-200 text-sm font-serif">Basic reading and comprehension</p>
              </div>
            </div>

            {/* Skill Categories */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Reading Skills */}
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-green-800 font-serif">Reading Skills</h3>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-green-800 font-serif">Close Reading</h4>
                    <span className="text-green-600 text-sm font-bold">Level 3</span>
                  </div>
                  <p className="text-green-700 text-sm font-serif mb-3">Analyze text at the word and sentence level</p>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-blue-800 font-serif">Speed Reading</h4>
                    <span className="text-blue-600 text-sm font-bold">Level 1</span>
                  </div>
                  <p className="text-blue-700 text-sm font-serif mb-3">Increase reading speed while maintaining comprehension</p>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 shadow-md opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-600 font-serif">Contextual Reading</h4>
                    <span className="text-gray-500 text-sm font-bold">🔒 Locked</span>
                  </div>
                  <p className="text-gray-600 text-sm font-serif">Understand historical and cultural context</p>
                </div>
              </div>

              {/* Analysis Skills */}
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-purple-800 font-serif">Analysis Skills</h3>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-purple-800 font-serif">Character Analysis</h4>
                    <span className="text-purple-600 text-sm font-bold">Level 4</span>
                  </div>
                  <p className="text-purple-700 text-sm font-serif mb-3">Deep character study and motivation analysis</p>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-orange-800 font-serif">Theme Identification</h4>
                    <span className="text-orange-600 text-sm font-bold">Level 2</span>
                  </div>
                  <p className="text-orange-700 text-sm font-serif mb-3">Identify and analyze recurring themes</p>
                  <div className="w-full bg-orange-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-red-800 font-serif">Symbolism Analysis</h4>
                    <span className="text-red-600 text-sm font-bold">Level 1</span>
                  </div>
                  <p className="text-red-700 text-sm font-serif mb-3">Interpret symbols and metaphorical language</p>
                  <div className="w-full bg-red-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 shadow-md opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-600 font-serif">Structural Analysis</h4>
                    <span className="text-gray-500 text-sm font-bold">🔒 Locked</span>
                  </div>
                  <p className="text-gray-600 text-sm font-serif">Analyze plot structure and narrative techniques</p>
                </div>
              </div>

              {/* Writing Skills */}
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-teal-800 font-serif">Writing Skills</h3>
                </div>
                
                <div className="p-4 bg-teal-50 rounded-lg border-2 border-teal-200 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-teal-800 font-serif">Essay Writing</h4>
                    <span className="text-teal-600 text-sm font-bold">Level 3</span>
                  </div>
                  <p className="text-teal-700 text-sm font-serif mb-3">Craft analytical essays with evidence</p>
                  <div className="w-full bg-teal-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div className="p-4 bg-pink-50 rounded-lg border-2 border-pink-200 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-pink-800 font-serif">Creative Response</h4>
                    <span className="text-pink-600 text-sm font-bold">Level 2</span>
                  </div>
                  <p className="text-pink-700 text-sm font-serif mb-3">Write creative responses to literature</p>
                  <div className="w-full bg-pink-200 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 shadow-md opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-600 font-serif">Research Writing</h4>
                    <span className="text-gray-500 text-sm font-bold">🔒 Locked</span>
                  </div>
                  <p className="text-gray-600 text-sm font-serif">Conduct literary research and citations</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 shadow-md opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-600 font-serif">Poetry Analysis</h4>
                    <span className="text-gray-500 text-sm font-bold">🔒 Locked</span>
                  </div>
                  <p className="text-gray-600 text-sm font-serif">Analyze poetic forms and techniques</p>
                </div>
              </div>

            </div>

            {/* Skill Synergies */}
            <div className="mt-8 p-6 bg-indigo-50 rounded-lg border-2 border-indigo-200">
              <h4 className="text-lg font-semibold text-indigo-800 mb-4 font-serif text-center">Skill Synergies</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-indigo-700 mb-2 font-serif">Unlocked Combinations</h5>
                  <ul className="text-sm text-indigo-600 space-y-1 font-serif">
                    <li>• Close Reading + Character Analysis = Advanced Character Studies</li>
                    <li>• Theme Identification + Symbolism = Deep Symbolic Analysis</li>
                    <li>• Essay Writing + Analysis Skills = Masterful Literary Criticism</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-indigo-700 mb-2 font-serif">Locked Combinations</h5>
                  <ul className="text-sm text-gray-500 space-y-1 font-serif">
                    <li>• Structural Analysis + Contextual Reading = Historical Context Mastery</li>
                    <li>• Poetry Analysis + Creative Response = Poetic Expression</li>
                    <li>• Research Writing + All Analysis Skills = Scholarly Expertise</li>
                  </ul>
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