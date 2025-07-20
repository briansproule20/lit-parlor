import React from 'react'
import Link from 'next/link'

export default function CharacterHome() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif inline-block">
            ← Back to Library
          </Link>
        </div>

        {/* Character Home Header */}
        <div className="text-center mb-12 relative">
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
            <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              🎭 Your Character Home
            </h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-serif">
              Welcome to your personal literary character dashboard. Track your progress, explore your reading journey, and discover your unique literary identity.
            </p>
          </div>
        </div>

        {/* Character Profile Section */}
        <div className="bg-gradient-to-br from-amber-50/90 to-amber-100/90 p-8 rounded-xl shadow-2xl border-4 border-amber-700 mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif text-center">Your Literary Profile</h2>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            
            {/* Character Stats with Progress Bars */}
            <div className="bg-white/80 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">📊 Reading Progress</h3>
              <div className="space-y-4">
                
                {/* Books Progress */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-serif text-amber-800">Books Explored</span>
                    <span className="font-bold text-amber-900">2/10</span>
                  </div>
                  <div className="w-full bg-amber-200 rounded-full h-3">
                    <div className="bg-amber-600 h-3 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>

                {/* Quiz Progress */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-serif text-amber-800">Quiz Mastery</span>
                    <span className="font-bold text-amber-900">7/15</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '47%'}}></div>
                  </div>
                </div>

                {/* Character Insights */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-serif text-amber-800">Insights Unlocked</span>
                    <span className="font-bold text-amber-900">12/25</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{width: '48%'}}></div>
                  </div>
                </div>

                {/* Reading Level Circle */}
                <div className="pt-2">
                  <span className="font-serif text-amber-800">Reading Level:</span>
                  <div className="flex items-center mt-2">
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="2"
                          strokeDasharray="65, 100"
                        />
                        <path
                          d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                          fill="none"
                          stroke="#d97706"
                          strokeWidth="2"
                          strokeDasharray="65, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-amber-900">65%</span>
                      </div>
                    </div>
                    <span className="ml-3 font-bold text-amber-900">Intermediate</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Character Avatar */}
            <div className="bg-white/80 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">🎨 Your Avatar</h3>
              <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/50 to-transparent"></div>
                📚
              </div>
              <p className="font-serif text-amber-800 mb-2">Literary Explorer</p>
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded font-serif transition-colors">
                Customize Avatar
              </button>
            </div>

            {/* Reading Time Chart */}
            <div className="bg-white/80 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">⏰ Weekly Activity</h3>
              <div className="space-y-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                  const heights = [60, 80, 45, 90, 70, 35, 55];
                  return (
                    <div key={day} className="flex items-center">
                      <span className="w-8 text-xs font-serif text-amber-800">{day}</span>
                      <div className="flex-1 ml-2">
                        <div className="bg-amber-200 h-4 rounded-full overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-1000"
                            style={{width: `${heights[index]}%`}}
                          ></div>
                        </div>
                      </div>
                      <span className="ml-2 text-xs font-bold text-amber-900 w-8">{heights[index]}m</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gradient-to-br from-cyan-50/90 to-cyan-100/90 p-8 rounded-xl shadow-2xl border-4 border-cyan-700 mb-8">
          <h2 className="text-3xl font-bold text-cyan-900 mb-6 font-serif text-center">📖 Recent Activity</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Activity Timeline */}
            <div className="bg-white/80 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-cyan-900 mb-4 font-serif">Activity Timeline</h3>
              <div className="space-y-4">
                
                {/* Sample Activity Items */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div className="flex-1">
                    <p className="font-serif text-sm text-cyan-800">Completed Pride & Prejudice Quiz</p>
                    <p className="text-xs text-cyan-600">2 hours ago</p>
                  </div>
                  <div className="text-green-600 font-bold text-sm">+50 XP</div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">📚</div>
                  <div className="flex-1">
                    <p className="font-serif text-sm text-cyan-800">Started Moby Dick Journey</p>
                    <p className="text-xs text-cyan-600">1 day ago</p>
                  </div>
                  <div className="text-blue-600 font-bold text-sm">+25 XP</div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">🎯</div>
                  <div className="flex-1">
                    <p className="font-serif text-sm text-cyan-800">Unlocked Character Insight: Elizabeth Bennet</p>
                    <p className="text-xs text-cyan-600">3 days ago</p>
                  </div>
                  <div className="text-purple-600 font-bold text-sm">+75 XP</div>
                </div>

              </div>
            </div>

            {/* Reading Streak & Stats */}
            <div className="bg-white/80 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-cyan-900 mb-4 font-serif">Reading Streak</h3>
              
              {/* Streak Counter */}
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">🔥 7</div>
                <p className="font-serif text-cyan-800">Day Streak</p>
              </div>

              {/* Weekly Calendar */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs font-serif text-cyan-700 mb-1">{day}</div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                      index < 5 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                      {index < 5 ? '✓' : '○'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded font-serif transition-colors text-sm">
                  Keep Streak Going!
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Reading Analytics Dashboard */}
        <div className="bg-gradient-to-br from-purple-50/90 to-purple-100/90 p-8 rounded-xl shadow-2xl border-4 border-purple-700 mb-8">
          <h2 className="text-3xl font-bold text-purple-900 mb-6 font-serif text-center">📊 Reading Analytics</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Genre Preference Pie Chart */}
            <div className="bg-white/80 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-4 font-serif">📈 Genre Preferences</h3>
              <div className="relative">
                <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto">
                  {/* Classic Literature - 40% */}
                  <path d="M 100,100 L 100,50 A 50,50 0 0,1 135.36,64.64 Z" fill="#8b5cf6" />
                  {/* Romance - 30% */}
                  <path d="M 100,100 L 135.36,64.64 A 50,50 0 0,1 135.36,135.36 Z" fill="#a78bfa" />
                  {/* Adventure - 20% */}
                  <path d="M 100,100 L 135.36,135.36 A 50,50 0 0,1 85.36,135.36 Z" fill="#c4b5fd" />
                  {/* Drama - 10% */}
                  <path d="M 100,100 L 85.36,135.36 A 50,50 0 0,1 100,50 Z" fill="#ddd6fe" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-900">100%</div>
                    <div className="text-xs font-serif text-purple-700">Complete</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded mr-2"></div>
                  <span className="font-serif">Classic (40%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded mr-2"></div>
                  <span className="font-serif">Romance (30%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-300 rounded mr-2"></div>
                  <span className="font-serif">Adventure (20%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-200 rounded mr-2"></div>
                  <span className="font-serif">Drama (10%)</span>
                </div>
              </div>
            </div>

            {/* Monthly Progress Graph */}
            <div className="bg-white/80 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-4 font-serif">📅 Monthly Progress</h3>
              <div className="h-48 flex items-end justify-between space-x-2">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => {
                  const heights = [40, 65, 30, 85, 70, 90];
                  return (
                    <div key={month} className="flex flex-col items-center flex-1">
                      <div 
                        className="bg-gradient-to-t from-purple-600 to-purple-400 w-full rounded-t transition-all duration-1000 hover:from-purple-700 hover:to-purple-500"
                        style={{height: `${heights[index]}%`}}
                      ></div>
                      <span className="text-xs font-serif text-purple-700 mt-2">{month}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm font-serif text-purple-800">Books completed per month</span>
              </div>
            </div>

          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-emerald-50/90 to-emerald-100/90 p-8 rounded-xl shadow-2xl border-4 border-emerald-700">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6 font-serif text-center">🏆 Achievements</h2>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            
            {/* Achievement Badge 1 - Unlocked */}
            <div className="bg-white/80 p-4 rounded-lg shadow-lg text-center border-2 border-green-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl font-bold">UNLOCKED</div>
              <div className="text-4xl mb-2">🥇</div>
              <h4 className="font-bold text-emerald-900 font-serif">First Steps</h4>
              <p className="text-sm text-emerald-700 font-serif">Complete your first book exploration</p>
              <div className="mt-2 text-xs text-green-600 font-bold">+100 XP</div>
            </div>

            {/* Achievement Badge 2 - Unlocked */}
            <div className="bg-white/80 p-4 rounded-lg shadow-lg text-center border-2 border-green-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl font-bold">UNLOCKED</div>
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-bold text-emerald-900 font-serif">Quiz Master</h4>
              <p className="text-sm text-emerald-700 font-serif">Score 100% on any quiz</p>
              <div className="mt-2 text-xs text-green-600 font-bold">+150 XP</div>
            </div>

            {/* Achievement Badge 3 - In Progress */}
            <div className="bg-white/80 p-4 rounded-lg shadow-lg text-center border-2 border-yellow-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs px-2 py-1 rounded-bl font-bold">2/3</div>
              <div className="text-4xl mb-2">📚</div>
              <h4 className="font-bold text-emerald-900 font-serif">Bookworm</h4>
              <p className="text-sm text-emerald-700 font-serif">Explore 3 different books</p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '67%'}}></div>
                </div>
              </div>
            </div>

            {/* Achievement Badge 4 - Locked */}
            <div className="bg-white/80 p-4 rounded-lg shadow-lg text-center opacity-50 border-2 border-gray-300">
              <div className="text-4xl mb-2">🏆</div>
              <h4 className="font-bold text-emerald-900 font-serif">Scholar</h4>
              <p className="text-sm text-emerald-700 font-serif">Complete 5 study guides</p>
              <div className="mt-2 text-xs text-gray-500">Locked</div>
            </div>

            {/* Achievement Badge 5 - Locked */}
            <div className="bg-white/80 p-4 rounded-lg shadow-lg text-center opacity-50 border-2 border-gray-300">
              <div className="text-4xl mb-2">🔥</div>
              <h4 className="font-bold text-emerald-900 font-serif">Streak Master</h4>
              <p className="text-sm text-emerald-700 font-serif">Maintain 30-day reading streak</p>
              <div className="mt-2 text-xs text-gray-500">Locked</div>
            </div>

            {/* Achievement Badge 6 - Locked */}
            <div className="bg-white/80 p-4 rounded-lg shadow-lg text-center opacity-50 border-2 border-gray-300">
              <div className="text-4xl mb-2">🎭</div>
              <h4 className="font-bold text-emerald-900 font-serif">Character Expert</h4>
              <p className="text-sm text-emerald-700 font-serif">Unlock 20 character insights</p>
              <div className="mt-2 text-xs text-gray-500">Locked</div>
            </div>

            {/* Achievement Badge 7 - Locked */}
            <div className="bg-white/80 p-4 rounded-lg shadow-lg text-center opacity-50 border-2 border-gray-300">
              <div className="text-4xl mb-2">💎</div>
              <h4 className="font-bold text-emerald-900 font-serif">Literary Legend</h4>
              <p className="text-sm text-emerald-700 font-serif">Complete all available books</p>
              <div className="mt-2 text-xs text-gray-500">Locked</div>
            </div>

            {/* Achievement Badge 8 - Secret */}
            <div className="bg-white/80 p-4 rounded-lg shadow-lg text-center opacity-30 border-2 border-purple-300">
              <div className="text-4xl mb-2">❓</div>
              <h4 className="font-bold text-emerald-900 font-serif">???</h4>
              <p className="text-sm text-emerald-700 font-serif">Secret achievement</p>
              <div className="mt-2 text-xs text-purple-500">Mystery</div>
            </div>

          </div>
        </div>

        {/* Daily Usage Line Chart */}
        <div className="bg-gradient-to-br from-indigo-50/90 to-indigo-100/90 p-8 rounded-xl shadow-2xl border-4 border-indigo-700 mt-8">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 font-serif text-center">📈 Daily Reading Activity</h2>
          
          <div className="bg-white/80 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-indigo-900 font-serif">Minutes per Day (Last 14 Days)</h3>
              <div className="flex space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="font-serif text-indigo-700">Reading Time</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-serif text-indigo-700">Goal (45 min)</span>
                </div>
              </div>
            </div>

            {/* Interactive Line Chart */}
            <div className="relative h-64">
              <svg viewBox="0 0 800 200" className="w-full h-full">
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="57.14" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 57.14 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.5"/>
                  </pattern>
                </defs>
                <rect width="800" height="200" fill="url(#grid)" />
                
                {/* Goal line */}
                <line x1="50" y1="110" x2="750" y2="110" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                
                {/* Data points and line */}
                {(() => {
                  const dataPoints = [25, 35, 45, 30, 55, 40, 65, 50, 70, 45, 80, 35, 60, 75];
                  const dates = ['Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5', 'Dec 6', 'Dec 7', 'Dec 8', 'Dec 9', 'Dec 10', 'Dec 11', 'Dec 12', 'Dec 13', 'Dec 14'];
                  
                  const points = dataPoints.map((value, index) => {
                    const x = 50 + (index * 50);
                    const y = 180 - (value * 2); // Scale down and invert
                    return { x, y, value, date: dates[index] };
                  });

                  const pathData = points.map((point, index) => 
                    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
                  ).join(' ');

                  return (
                    <g>
                      {/* Line path with gradient */}
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      
                      {/* Area under the curve */}
                      <path
                        d={`${pathData} L 750 180 L 50 180 Z`}
                        fill="url(#areaGradient)"
                        className="transition-all duration-300"
                      />
                      
                      {/* Main line */}
                      <path
                        d={pathData}
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="3"
                        className="transition-all duration-500"
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(99, 102, 241, 0.3))',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round'
                        }}
                      />
                      
                      {/* Interactive data points */}
                      {points.map((point, index) => (
                        <g key={index}>
                          <circle
                            cx={point.x}
                            cy={point.y}
                            r="6"
                            fill="#6366f1"
                            stroke="white"
                            strokeWidth="3"
                            className="transition-all duration-200 hover:r-8 hover:fill-indigo-600 cursor-pointer"
                            style={{
                              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
                            }}
                          >
                            <title>{`${point.date}: ${point.value} minutes`}</title>
                          </circle>
                          
                          {/* Hover effect circle */}
                          <circle
                            cx={point.x}
                            cy={point.y}
                            r="12"
                            fill="transparent"
                            className="hover:fill-indigo-100 hover:fill-opacity-50 transition-all duration-200 cursor-pointer"
                          />
                          
                          {/* Date labels */}
                          <text
                            x={point.x}
                            y="195"
                            textAnchor="middle"
                            className="text-xs fill-indigo-600 font-serif"
                            style={{ fontSize: '10px' }}
                          >
                            {point.date.split(' ')[1]}
                          </text>
                        </g>
                      ))}
                      
                      {/* Y-axis labels */}
                      <g className="text-xs fill-indigo-600 font-serif">
                        <text x="40" y="185" textAnchor="end">0</text>
                        <text x="40" y="145" textAnchor="end">20</text>
                        <text x="40" y="105" textAnchor="end">40</text>
                        <text x="40" y="65" textAnchor="end">60</text>
                        <text x="40" y="25" textAnchor="end">80</text>
                      </g>
                      
                      {/* Goal label */}
                      <text x="760" y="115" className="text-xs fill-green-600 font-serif font-bold">Goal</text>
                    </g>
                  );
                })()}
              </svg>

              {/* Interactive tooltip area */}
              <div className="absolute inset-0 pointer-events-none">
                {/* This would be where dynamic tooltips would appear on hover */}
              </div>
            </div>

            {/* Chart Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-indigo-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-900">52</div>
                <div className="text-sm font-serif text-indigo-700">Avg Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">9</div>
                <div className="text-sm font-serif text-indigo-700">Days Above Goal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">80</div>
                <div className="text-sm font-serif text-indigo-700">Peak Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">728</div>
                <div className="text-sm font-serif text-indigo-700">Total Minutes</div>
              </div>
            </div>

            {/* Interactive Controls */}
            <div className="flex justify-center space-x-4 mt-6">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded font-serif transition-all duration-200 hover:scale-105">
                Last 7 Days
              </button>
              <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold py-2 px-4 rounded font-serif transition-all duration-200 hover:scale-105">
                Last 14 Days
              </button>
              <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold py-2 px-4 rounded font-serif transition-all duration-200 hover:scale-105">
                Last Month
              </button>
            </div>
          </div>
        </div>

        {/* Boss Battles Section */}
        <div className="bg-gradient-to-br from-red-50/90 to-red-100/90 p-8 rounded-xl shadow-2xl border-4 border-red-700 mt-8">
          <h2 className="text-3xl font-bold text-red-900 mb-6 font-serif text-center">⚔️ Upcoming Boss Battles</h2>
          <p className="text-center text-red-800 font-serif mb-8 italic">
            Face the ultimate literary challenges. These epic encounters test your mastery of entire works.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Battle the White Whale */}
            <div className="bg-white/90 p-6 rounded-xl shadow-lg border-2 border-slate-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg font-bold text-sm">
                AVAILABLE
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-6xl">🐋</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Battle the White Whale</h3>
                  <p className="text-slate-700 font-serif mb-3">
                    Face Moby Dick in the ultimate test of your understanding of Melville's masterpiece. 
                    This comprehensive unit test covers themes, characters, symbolism, and narrative structure.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-blue-600">⚔️</span>
                      <span className="ml-2 font-serif">Difficulty: Epic</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600">⏱️</span>
                      <span className="ml-2 font-serif">45 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-600">🎯</span>
                      <span className="ml-2 font-serif">50 Questions</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-600">💎</span>
                      <span className="ml-2 font-serif">500 XP Reward</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-serif text-slate-600 mb-1">Prerequisites Completed:</div>
                    <div className="flex space-x-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-serif">✓ Journey</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-serif">✓ Characters</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-serif">◐ Study Guide</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 font-serif">
                    🚢 Enter Battle
                  </button>
                </div>
              </div>
            </div>

            {/* Pride & Prejudice Ballroom Showdown */}
            <div className="bg-white/90 p-6 rounded-xl shadow-lg border-2 border-rose-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-rose-600 text-white px-3 py-1 rounded-bl-lg font-bold text-sm">
                COMING SOON
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-6xl">💃</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-rose-900 mb-2 font-serif">Ballroom Showdown</h3>
                  <p className="text-rose-700 font-serif mb-3">
                    Navigate the social complexities of Regency England in this comprehensive 
                    Pride & Prejudice assessment. Master wit, social commentary, and character development.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm opacity-75">
                    <div className="flex items-center">
                      <span className="text-rose-600">⚔️</span>
                      <span className="ml-2 font-serif">Difficulty: Legendary</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600">⏱️</span>
                      <span className="ml-2 font-serif">40 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-600">🎯</span>
                      <span className="ml-2 font-serif">45 Questions</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-600">💎</span>
                      <span className="ml-2 font-serif">600 XP Reward</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-serif text-rose-600 mb-1">Prerequisites Required:</div>
                    <div className="flex space-x-2">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-serif">○ Journey</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-serif">○ Characters</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-serif">○ Study Guide</span>
                    </div>
                  </div>

                  <button disabled className="w-full bg-gray-400 text-gray-600 font-bold py-3 px-6 rounded-lg font-serif cursor-not-allowed">
                    🔒 Locked
                  </button>
                </div>
              </div>
            </div>

            {/* Things Fall Apart Cultural Clash */}
            <div className="bg-white/90 p-6 rounded-xl shadow-lg border-2 border-orange-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-600 text-white px-3 py-1 rounded-bl-lg font-bold text-sm">
                COMING SOON
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-6xl">🏺</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-900 mb-2 font-serif">Cultural Clash</h3>
                  <p className="text-orange-700 font-serif mb-3">
                    Explore the collision of worlds in Achebe's powerful narrative. This challenging 
                    assessment covers colonialism, tradition, and the complexity of cultural change.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm opacity-75">
                    <div className="flex items-center">
                      <span className="text-orange-600">⚔️</span>
                      <span className="ml-2 font-serif">Difficulty: Master</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600">⏱️</span>
                      <span className="ml-2 font-serif">35 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-600">🎯</span>
                      <span className="ml-2 font-serif">40 Questions</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-600">💎</span>
                      <span className="ml-2 font-serif">450 XP Reward</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-serif text-orange-600 mb-1">Prerequisites Required:</div>
                    <div className="flex space-x-2">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-serif">○ Journey</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-serif">○ Characters</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-serif">○ Study Guide</span>
                    </div>
                  </div>

                  <button disabled className="w-full bg-gray-400 text-gray-600 font-bold py-3 px-6 rounded-lg font-serif cursor-not-allowed">
                    🔒 Locked
                  </button>
                </div>
              </div>
            </div>

            {/* Ultimate Literary Champion */}
            <div className="bg-white/90 p-6 rounded-xl shadow-lg border-4 border-yellow-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 rounded-bl-lg font-bold text-sm">
                FINAL BOSS
              </div>
              <div className="absolute -top-2 -left-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-br-lg font-bold text-xs transform -rotate-12">
                LEGENDARY
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-6xl">👑</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-yellow-900 mb-2 font-serif">Ultimate Literary Champion</h3>
                  <p className="text-yellow-800 font-serif mb-3">
                    The final test of your literary mastery. Face questions spanning all books, 
                    themes, and literary analysis techniques. Only true scholars dare attempt this challenge.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm opacity-75">
                    <div className="flex items-center">
                      <span className="text-red-600">⚔️</span>
                      <span className="ml-2 font-serif">Difficulty: LEGENDARY</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600">⏱️</span>
                      <span className="ml-2 font-serif">60 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-600">🎯</span>
                      <span className="ml-2 font-serif">75 Questions</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-600">💎</span>
                      <span className="ml-2 font-serif">1000 XP Reward</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-serif text-yellow-700 mb-1">Must Complete All Boss Battles First:</div>
                    <div className="flex space-x-2">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-serif">○ White Whale</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-serif">○ Ballroom</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-serif">○ Cultural Clash</span>
                    </div>
                  </div>

                  <button disabled className="w-full bg-gray-400 text-gray-600 font-bold py-3 px-6 rounded-lg font-serif cursor-not-allowed">
                    🔒 Locked - Defeat All Bosses First
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Boss Battle Tips */}
          <div className="mt-8 bg-amber-50/80 p-6 rounded-lg border-2 border-amber-300">
            <h4 className="text-lg font-bold text-amber-900 mb-3 font-serif">⚡ Boss Battle Tips</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm font-serif text-amber-800">
              <div>
                <strong>Preparation:</strong> Complete all prerequisite activities before attempting boss battles.
              </div>
              <div>
                <strong>Strategy:</strong> Review character insights and study guides thoroughly.
              </div>
              <div>
                <strong>Timing:</strong> Boss battles are timed - practice with regular quizzes first.
              </div>
              <div>
                <strong>Rewards:</strong> Massive XP gains and exclusive achievements await victors!
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 