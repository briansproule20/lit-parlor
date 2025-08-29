import React from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function AnalyticsDashboard() {
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
          {/* Removed return to parlor button and back to teacher dashboard link - now handled in menu bar */}
        </div>

        {/* Header */}
        <div className="text-center mb-12 mt-20">
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
              Analytics Dashboard
            </h1>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto leading-relaxed font-serif">
              Comprehensive insights into student engagement, progress, and performance across all your classes.
            </p>
          </div>
        </div>

        {/* Overview Metrics */}
        <div className="mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">94.2%</div>
              <div className="text-blue-100 font-serif">Avg. Completion Rate</div>
              <div className="text-blue-200 text-sm mt-1">↑ +2.1% from last week</div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">87.5%</div>
              <div className="text-green-100 font-serif">Avg. Comprehension</div>
              <div className="text-green-200 text-sm mt-1">↑ +1.8% from last week</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">23.4 hrs</div>
              <div className="text-purple-100 font-serif">Avg. Time Spent</div>
              <div className="text-purple-200 text-sm mt-1">↑ +1.2 hrs from last week</div>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">156</div>
              <div className="text-orange-100 font-serif">Active Discussions</div>
              <div className="text-orange-200 text-sm mt-1">↑ +12 from last week</div>
            </div>
          </div>
        </div>

        {/* Class Performance Comparison */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Class Performance Comparison</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 font-serif mb-3">Period 1 - American Lit</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Completion Rate:</span>
                    <span className="font-semibold text-blue-900">96.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Avg. Score:</span>
                    <span className="font-semibold text-blue-900">89.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Engagement:</span>
                    <span className="font-semibold text-blue-900">92.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Time Spent:</span>
                    <span className="font-semibold text-blue-900">25.6 hrs</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 font-serif mb-3">Period 2 - World Lit</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-700">Completion Rate:</span>
                    <span className="font-semibold text-green-900">91.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Avg. Score:</span>
                    <span className="font-semibold text-green-900">85.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Engagement:</span>
                    <span className="font-semibold text-green-900">88.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Time Spent:</span>
                    <span className="font-semibold text-green-900">22.3 hrs</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 font-serif mb-3">Period 3 - AP Lit</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-purple-700">Completion Rate:</span>
                    <span className="font-semibold text-purple-900">98.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Avg. Score:</span>
                    <span className="font-semibold text-purple-900">94.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Engagement:</span>
                    <span className="font-semibold text-purple-900">95.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Time Spent:</span>
                    <span className="font-semibold text-purple-900">28.9 hrs</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-900 font-serif mb-3">Period 4 - Honors</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-orange-700">Completion Rate:</span>
                    <span className="font-semibold text-orange-900">93.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Avg. Score:</span>
                    <span className="font-semibold text-orange-900">87.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Engagement:</span>
                    <span className="font-semibold text-orange-900">90.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Time Spent:</span>
                    <span className="font-semibold text-orange-900">24.1 hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Progress Tracking */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Student Progress Tracking</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-amber-200">
                    <th className="text-left py-3 px-4 font-semibold text-amber-900 font-serif">Student</th>
                    <th className="text-left py-3 px-4 font-semibold text-amber-900 font-serif">Class</th>
                    <th className="text-left py-3 px-4 font-semibold text-amber-900 font-serif">Progress</th>
                    <th className="text-left py-3 px-4 font-semibold text-amber-900 font-serif">Avg. Score</th>
                    <th className="text-left py-3 px-4 font-semibold text-amber-900 font-serif">Time Spent</th>
                    <th className="text-left py-3 px-4 font-semibold text-amber-900 font-serif">Status</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-amber-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          JS
                        </div>
                        <span className="font-semibold text-amber-900 font-serif">Jane Smith</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-amber-800 font-serif">Period 1</td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-amber-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm text-amber-600">92%</span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-green-600">95.2%</td>
                    <td className="py-3 px-4 text-amber-800">26.3 hrs</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-serif">Excellent</span>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-amber-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          MJ
                        </div>
                        <span className="font-semibold text-amber-900 font-serif">Mike Johnson</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-amber-800 font-serif">Period 2</td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-amber-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-sm text-amber-600">78%</span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-yellow-600">82.1%</td>
                    <td className="py-3 px-4 text-amber-800">18.7 hrs</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-serif">Needs Help</span>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-amber-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          SL
                        </div>
                        <span className="font-semibold text-amber-900 font-serif">Sarah Lee</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-amber-800 font-serif">Period 3</td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-amber-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <span className="text-sm text-amber-600">95%</span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-green-600">97.8%</td>
                    <td className="py-3 px-4 text-amber-800">31.2 hrs</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-serif">Outstanding</span>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-amber-100">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          DC
                        </div>
                        <span className="font-semibold text-amber-900 font-serif">David Chen</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-amber-800 font-serif">Period 1</td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-amber-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                      <span className="text-sm text-amber-600">65%</span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-red-600">71.3%</td>
                    <td className="py-3 px-4 text-amber-800">14.5 hrs</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full font-serif">At Risk</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Engagement Analytics */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Engagement Trends</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div>
                  <div className="font-semibold text-amber-900 font-serif">Daily Active Users</div>
                  <div className="text-sm text-amber-600">Average over last 30 days</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">89.2%</div>
                  <div className="text-sm text-green-600">↑ +3.1%</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div>
                  <div className="font-semibold text-amber-900 font-serif">Session Duration</div>
                  <div className="text-sm text-amber-600">Average time per session</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">24.7 min</div>
                  <div className="text-sm text-blue-600">↑ +2.3 min</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div>
                  <div className="font-semibold text-amber-900 font-serif">Discussion Participation</div>
                  <div className="text-sm text-amber-600">Students actively participating</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">76.8%</div>
                  <div className="text-sm text-purple-600">↑ +5.2%</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div>
                  <div className="font-semibold text-amber-900 font-serif">Quiz Completion</div>
                  <div className="text-sm text-amber-600">Average quiz completion rate</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-600">91.4%</div>
                  <div className="text-sm text-orange-600">↑ +1.7%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Performance Insights</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 font-serif mb-2">Top Performers</h3>
                <div className="text-sm text-green-700 space-y-1">
                  <div>• Sarah Lee (Period 3) - 97.8% avg score</div>
                  <div>• Jane Smith (Period 1) - 95.2% avg score</div>
                  <div>• Alex Rodriguez (Period 3) - 94.1% avg score</div>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-900 font-serif mb-2">Students Needing Support</h3>
                <div className="text-sm text-yellow-700 space-y-1">
                  <div>• David Chen (Period 1) - 71.3% avg score</div>
                  <div>• Mike Johnson (Period 2) - 82.1% avg score</div>
                  <div>• Emma Wilson (Period 4) - 79.8% avg score</div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 font-serif mb-2">Most Engaging Content</h3>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>• Moby Dick - Symbolism Analysis (94% engagement)</div>
                  <div>• Crime & Punishment - Character Study (91% engagement)</div>
                  <div>• Things Fall Apart - Cultural Discussion (89% engagement)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Export & Reports</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
              <h3 className="font-semibold font-serif mb-2">Weekly Progress Report</h3>
              <p className="text-blue-100 text-sm mb-3">Comprehensive overview of student progress and engagement</p>
              <button className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm font-serif transition-colors">
                Generate Report
              </button>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
              <h3 className="font-semibold font-serif mb-2">Individual Student Reports</h3>
              <p className="text-green-100 text-sm mb-3">Detailed analytics for each student's performance</p>
              <button className="bg-green-700 hover:bg-green-800 px-3 py-1 rounded text-sm font-serif transition-colors">
                Export All
              </button>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white">
              <h3 className="font-semibold font-serif mb-2">Class Comparison Report</h3>
              <p className="text-purple-100 text-sm mb-3">Side-by-side analysis of class performance</p>
              <button className="bg-purple-700 hover:bg-purple-800 px-3 py-1 rounded text-sm font-serif transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 