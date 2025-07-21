import React from 'react'
import Link from 'next/link'

export default function TeacherDashboard() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          <Link 
            href="/analytics-dashboard" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            📊 Analytics Dashboard
          </Link>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🏠 Return to Parlor
          </Link>
        </div>

        {/* Header */}
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
              Teacher Dashboard
            </h1>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto leading-relaxed font-serif">
              Manage your classes, track student progress, and access powerful teaching tools designed to streamline your workflow.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">4</div>
              <div className="text-blue-100 font-serif">Active Classes</div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">127</div>
              <div className="text-green-100 font-serif">Total Students</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">89%</div>
              <div className="text-purple-100 font-serif">Avg. Engagement</div>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">12</div>
              <div className="text-orange-100 font-serif">Pending Tasks</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Class Rosters */}
          <div className="lg:col-span-2">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
              <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Class Rosters</h2>
              
              {/* Class Tabs */}
              <div className="flex space-x-2 mb-6">
                <button className="px-4 py-2 bg-amber-600 text-white rounded-lg font-serif font-semibold">
                  Period 1 - American Lit
                </button>
                <button className="px-4 py-2 bg-amber-200 text-amber-800 rounded-lg font-serif hover:bg-amber-300">
                  Period 2 - World Lit
                </button>
                <button className="px-4 py-2 bg-amber-200 text-amber-800 rounded-lg font-serif hover:bg-amber-300">
                  Period 3 - AP Lit
                </button>
                <button className="px-4 py-2 bg-amber-200 text-amber-800 rounded-lg font-serif hover:bg-amber-300">
                  Period 4 - Honors
                </button>
              </div>

              {/* Student List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      JS
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900 font-serif">Jane Smith</div>
                      <div className="text-sm text-amber-600">Last active: 2 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-serif">Active</span>
                    <span className="text-amber-600 text-sm font-serif">92%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      MJ
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900 font-serif">Mike Johnson</div>
                      <div className="text-sm text-amber-600">Last active: 1 day ago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-serif">Needs Help</span>
                    <span className="text-amber-600 text-sm font-serif">78%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      SL
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900 font-serif">Sarah Lee</div>
                      <div className="text-sm text-amber-600">Last active: 3 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-serif">Active</span>
                    <span className="text-amber-600 text-sm font-serif">95%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      DC
                    </div>
                    <div>
                      <div className="font-semibold text-amber-900 font-serif">David Chen</div>
                      <div className="text-sm text-amber-600">Last active: 5 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full font-serif">Behind</span>
                    <span className="text-amber-600 text-sm font-serif">65%</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-serif font-semibold transition-colors">
                  View Full Roster
                </button>
              </div>
            </div>
          </div>

          {/* Class Summaries */}
          <div>
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
              <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Class Summaries</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 font-serif mb-2">Period 1 - American Lit</h3>
                  <div className="text-sm text-blue-700 space-y-1">
                    <div>• Currently reading: <span className="font-semibold">Moby Dick</span></div>
                    <div>• Progress: <span className="font-semibold">Chapter 15 of 135</span></div>
                    <div>• Avg. comprehension: <span className="font-semibold">87%</span></div>
                    <div>• Discussion topics: <span className="font-semibold">Symbolism, Fate</span></div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 font-serif mb-2">Period 2 - World Lit</h3>
                  <div className="text-sm text-green-700 space-y-1">
                    <div>• Currently reading: <span className="font-semibold">Things Fall Apart</span></div>
                    <div>• Progress: <span className="font-semibold">Chapter 8 of 25</span></div>
                    <div>• Avg. comprehension: <span className="font-semibold">91%</span></div>
                    <div>• Discussion topics: <span className="font-semibold">Culture, Change</span></div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 font-serif mb-2">Period 3 - AP Lit</h3>
                  <div className="text-sm text-purple-700 space-y-1">
                    <div>• Currently reading: <span className="font-semibold">Crime & Punishment</span></div>
                    <div>• Progress: <span className="font-semibold">Part 2 of 6</span></div>
                    <div>• Avg. comprehension: <span className="font-semibold">94%</span></div>
                    <div>• Discussion topics: <span className="font-semibold">Psychology, Morality</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Tools Section */}
        <div className="mt-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Teaching Tools</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
                <h3 className="font-semibold font-serif mb-2">Lesson Planner</h3>
                <p className="text-blue-100 text-sm mb-3">Create and organize lesson plans with AI assistance</p>
                <button className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm font-serif transition-colors">
                  Open Tool
                </button>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
                <h3 className="font-semibold font-serif mb-2">Assessment Builder</h3>
                <p className="text-green-100 text-sm mb-3">Generate quizzes and assignments automatically</p>
                <button className="bg-green-700 hover:bg-green-800 px-3 py-1 rounded text-sm font-serif transition-colors">
                  Open Tool
                </button>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white">
                <h3 className="font-semibold font-serif mb-2">Analytics Dashboard</h3>
                <p className="text-purple-100 text-sm mb-3">Track student progress and engagement metrics</p>
                <Link href="/analytics-dashboard" className="bg-purple-700 hover:bg-purple-800 px-3 py-1 rounded text-sm font-serif transition-colors inline-block">
                  Open Tool
                </Link>
              </div>

              <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white">
                <h3 className="font-semibold font-serif mb-2">Discussion Guide</h3>
                <p className="text-orange-100 text-sm mb-3">Generate discussion questions and prompts</p>
                <button className="bg-orange-700 hover:bg-orange-800 px-3 py-1 rounded text-sm font-serif transition-colors">
                  Open Tool
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Recent Activity</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-amber-50 rounded-lg">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-amber-900 font-serif">Jane Smith completed Chapter 15 quiz</div>
                  <div className="text-sm text-amber-600">2 hours ago</div>
                </div>
                <div className="text-green-600 font-semibold">95%</div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-amber-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💬</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-amber-900 font-serif">New discussion started: Symbolism in Moby Dick</div>
                  <div className="text-sm text-amber-600">4 hours ago</div>
                </div>
                <div className="text-blue-600 font-semibold">12 replies</div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-amber-50 rounded-lg">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⚠</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-amber-900 font-serif">Mike Johnson needs assistance with Chapter 14</div>
                  <div className="text-sm text-amber-600">6 hours ago</div>
                </div>
                <div className="text-yellow-600 font-semibold">Pending</div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-amber-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-amber-900 font-serif">Weekly progress report generated</div>
                  <div className="text-sm text-amber-600">1 day ago</div>
                </div>
                <div className="text-purple-600 font-semibold">View</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 