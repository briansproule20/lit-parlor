'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function StudentSuccessPage() {
  const [selectedDisplay, setSelectedDisplay] = useState<string>('all')
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('month')
  const [visionBoard, setVisionBoard] = useState<any[]>([])
  const [showVisionBoard, setShowVisionBoard] = useState(false)

  // Mock student success data
  const studentAchievements = [
    {
      id: 1,
      name: "Sarah Chen",
      grade: "11th Grade",
      achievement: "Outstanding Character Analysis",
      work: "Moby Dick - Ahab's Psychological Profile",
      score: 95,
      date: "2024-01-15",
      category: "analysis",
      highlights: [
        "Deep psychological insights into Ahab's character",
        "Excellent use of textual evidence",
        "Sophisticated understanding of symbolism",
        "Clear and compelling argument structure"
      ],
      teacher: "Ms. Rodriguez",
      class: "AP Literature"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      grade: "12th Grade",
      achievement: "Exceptional Theme Analysis",
      work: "Pride and Prejudice - Social Class Dynamics",
      score: 98,
      date: "2024-01-12",
      category: "themes",
      highlights: [
        "Comprehensive analysis of social hierarchy",
        "Connections to historical context",
        "Insightful commentary on marriage and economics",
        "Excellent comparative analysis"
      ],
      teacher: "Dr. Williams",
      class: "British Literature"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      grade: "10th Grade",
      achievement: "Creative Response Excellence",
      work: "Animal Farm - Modern Political Allegory",
      score: 92,
      date: "2024-01-10",
      category: "creative",
      highlights: [
        "Innovative modern-day parallels",
        "Strong visual storytelling",
        "Clear allegorical connections",
        "Engaging presentation style"
      ],
      teacher: "Mr. Thompson",
      class: "World Literature"
    },
    {
      id: 4,
      name: "Alex Kim",
      grade: "11th Grade",
      achievement: "Symbolism Analysis Mastery",
      work: "Their Eyes Were Watching God - Nature Symbolism",
      score: 96,
      date: "2024-01-08",
      category: "symbolism",
      highlights: [
        "Sophisticated interpretation of natural symbols",
        "Deep cultural context understanding",
        "Excellent connection to character development",
        "Clear progression of symbolic meaning"
      ],
      teacher: "Ms. Davis",
      class: "American Literature"
    },
    {
      id: 5,
      name: "Jordan Smith",
      grade: "12th Grade",
      achievement: "Critical Essay Excellence",
      work: "Crime and Punishment - Moral Philosophy",
      score: 94,
      date: "2024-01-05",
      category: "essay",
      highlights: [
        "Sophisticated philosophical analysis",
        "Strong argumentative structure",
        "Excellent use of secondary sources",
        "Clear thesis and conclusion"
      ],
      teacher: "Dr. Anderson",
      class: "Philosophy & Literature"
    }
  ]

  const filteredAchievements = studentAchievements.filter(achievement => {
    if (selectedDisplay !== 'all' && achievement.category !== selectedDisplay) {
      return false
    }
    return true
  })

  const addToVisionBoard = (achievement: any) => {
    if (!visionBoard.find(item => item.id === achievement.id)) {
      setVisionBoard([...visionBoard, achievement])
    }
  }

  const removeFromVisionBoard = (achievementId: number) => {
    setVisionBoard(visionBoard.filter(item => item.id !== achievementId))
  }

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
          {/* Removed back to dashboard and return to parlor buttons - now handled in menu bar */}
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
            <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              Student Success Gallery
            </h1>
            <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed font-serif">
              Educator curated, AI powered visual showcases of exceptional student work. Create vision boards 
              and generate comprehensive, print-ready displays that celebrate student achievements.
            </p>
            <div className="mt-4 text-amber-700 font-serif italic">
              Think Long Term. Execute Short Term. Experience Now.
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              <div>
                <label className="block text-amber-900 font-semibold mb-2 font-serif">Display Type</label>
                <select 
                  value={selectedDisplay} 
                  onChange={(e) => setSelectedDisplay(e.target.value)}
                  className="px-4 py-2 border-2 border-amber-300 rounded-lg bg-amber-50 text-amber-900 font-serif focus:outline-none focus:border-amber-500"
                >
                  <option value="all">All Achievements</option>
                  <option value="analysis">Character Analysis</option>
                  <option value="themes">Theme Analysis</option>
                  <option value="creative">Creative Responses</option>
                  <option value="symbolism">Symbolism Analysis</option>
                  <option value="essay">Critical Essays</option>
                </select>
              </div>
              
              <div>
                <label className="block text-amber-900 font-semibold mb-2 font-serif">Timeframe</label>
                <select 
                  value={selectedTimeframe} 
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="px-4 py-2 border-2 border-amber-300 rounded-lg bg-amber-50 text-amber-900 font-serif focus:outline-none focus:border-amber-500"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              
              <button 
                className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
              >
                Filter Results
              </button>
              
              <button 
                onClick={() => setShowVisionBoard(!showVisionBoard)}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
              >
                {showVisionBoard ? 'Hide' : 'Show'} Vision Board ({visionBoard.length})
              </button>
            </div>
          </div>
        </div>

        {/* Vision Board */}
        {showVisionBoard && (
          <div className="mb-8">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-amber-900 font-serif">Vision Board</h2>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 font-serif">
                    Generate Print Display
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 font-serif">
                    Generate Digital Display
                  </button>
                </div>
              </div>
              
              {visionBoard.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📋</div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-2 font-serif">Empty Vision Board</h3>
                  <p className="text-amber-700 font-serif">Add student achievements to create your vision board</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {visionBoard.map((achievement) => (
                    <div key={achievement.id} className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-2 border-purple-200 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-purple-900 font-serif">{achievement.name}</h4>
                        <button 
                          onClick={() => removeFromVisionBoard(achievement.id)}
                          className="text-purple-600 hover:text-purple-800 text-lg font-bold"
                        >
                          ×
                        </button>
                      </div>
                      <p className="text-purple-800 text-sm font-serif mb-2">{achievement.achievement}</p>
                      <div className="text-purple-700 text-xs font-serif">
                        {achievement.score}% • {achievement.class}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Achievement Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredAchievements.map((achievement) => (
            <div key={achievement.id} className="bg-white/95 rounded-xl shadow-xl border-2 border-amber-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold font-serif">{achievement.name}</h3>
                    <p className="text-purple-200 font-serif">{achievement.grade} • {achievement.class}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{achievement.score}%</div>
                    <div className="text-purple-200 text-sm">Score</div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold font-serif">{achievement.achievement}</h4>
                <p className="text-purple-200 font-serif italic">{achievement.work}</p>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-amber-900 mb-3 font-serif">Key Highlights</h5>
                  <ul className="space-y-2">
                    {achievement.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-amber-800 font-serif">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-amber-200">
                  <div className="text-sm text-amber-700 font-serif">
                    <span className="font-semibold">Teacher:</span> {achievement.teacher}
                  </div>
                  <div className="text-sm text-amber-700 font-serif">
                    <span className="font-semibold">Date:</span> {new Date(achievement.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="p-6 bg-gradient-to-r from-amber-50 to-amber-100 border-t border-amber-200">
                <div className="flex gap-3">
                  <button 
                    onClick={() => addToVisionBoard(achievement)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 font-serif"
                  >
                    Add to Vision Board
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 font-serif">
                    Generate Individual Display
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Socratic Circles & Collaborative Analyses */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif text-center">Prominent Socratic Circles & Collaborative Analyses</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Socratic Circles */}
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4 font-serif border-b-2 border-purple-200 pb-2">Socratic Circles</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-blue-900 font-serif">Moby Dick - Fate vs. Free Will</h4>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full font-serif">12 participants</span>
                    </div>
                    <p className="text-blue-800 text-sm font-serif mb-2">Deep philosophical discussion on Ahab's choices and cosmic determinism</p>
                    <div className="flex items-center gap-2 text-xs text-blue-700 font-serif">
                      <span>• 45 min duration</span>
                      <span>• 8 key insights generated</span>
                    </div>
                    <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm font-serif transition-all duration-300 hover:scale-105">
                      Add to Vision Board
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg border border-pink-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-pink-900 font-serif">Pride and Prejudice - Social Mobility</h4>
                      <span className="text-xs bg-pink-600 text-white px-2 py-1 rounded-full font-serif">15 participants</span>
                    </div>
                    <p className="text-pink-800 text-sm font-serif mb-2">Examination of class dynamics and marriage as economic strategy</p>
                    <div className="flex items-center gap-2 text-xs text-pink-700 font-serif">
                      <span>• 52 min duration</span>
                      <span>• 11 key insights generated</span>
                    </div>
                    <button className="mt-3 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-3 rounded text-sm font-serif transition-all duration-300 hover:scale-105">
                      Add to Vision Board
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-purple-900 font-serif">Crime and Punishment - Moral Psychology</h4>
                      <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full font-serif">18 participants</span>
                    </div>
                    <p className="text-purple-800 text-sm font-serif mb-2">Analysis of Raskolnikov's psychological transformation</p>
                    <div className="flex items-center gap-2 text-xs text-purple-700 font-serif">
                      <span>• 38 min duration</span>
                      <span>• 9 key insights generated</span>
                    </div>
                    <button className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded text-sm font-serif transition-all duration-300 hover:scale-105">
                      Add to Vision Board
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Collaborative Analyses */}
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4 font-serif border-b-2 border-orange-200 pb-2">Collaborative Analyses</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-red-900 font-serif">Animal Farm - Political Allegory</h4>
                      <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full font-serif">22 students</span>
                    </div>
                    <p className="text-red-800 text-sm font-serif mb-2">Group analysis of Orwell's critique of totalitarianism</p>
                    <div className="flex items-center gap-2 text-xs text-red-700 font-serif">
                      <span>• 3-day project</span>
                      <span>• 15 collaborative insights</span>
                    </div>
                    <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-sm font-serif transition-all duration-300 hover:scale-105">
                      Add to Vision Board
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-green-900 font-serif">Their Eyes Were Watching God - Feminist Themes</h4>
                      <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full font-serif">19 students</span>
                    </div>
                    <p className="text-green-800 text-sm font-serif mb-2">Collective exploration of Janie's journey to self-discovery</p>
                    <div className="flex items-center gap-2 text-xs text-green-700 font-serif">
                      <span>• 4-day project</span>
                      <span>• 12 collaborative insights</span>
                    </div>
                    <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded text-sm font-serif transition-all duration-300 hover:scale-105">
                      Add to Vision Board
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-orange-900 font-serif">Things Fall Apart - Cultural Collision</h4>
                      <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded-full font-serif">16 students</span>
                    </div>
                    <p className="text-orange-800 text-sm font-serif mb-2">Team analysis of colonialism's impact on traditional societies</p>
                    <div className="flex items-center gap-2 text-xs text-orange-700 font-serif">
                      <span>• 5-day project</span>
                      <span>• 18 collaborative insights</span>
                    </div>
                    <button className="mt-3 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded text-sm font-serif transition-all duration-300 hover:scale-105">
                      Add to Vision Board
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Summary Stats */}
            <div className="mt-6 bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg border border-amber-200">
              <h4 className="text-lg font-semibold text-amber-900 mb-3 font-serif">Collaborative Learning Summary</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-amber-800">6</div>
                  <div className="text-sm text-amber-700 font-serif">Active Circles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-800">102</div>
                  <div className="text-sm text-amber-700 font-serif">Total Participants</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-800">73</div>
                  <div className="text-sm text-amber-700 font-serif">Key Insights</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-800">12</div>
                  <div className="text-sm text-amber-700 font-serif">Days Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Display Preview */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-4 font-serif text-center">Display Preview</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Print Display Preview */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3 font-serif">Print Display</h3>
                <div className="aspect-[16/9] bg-white rounded border border-blue-300 flex items-center justify-center mb-3">
                  <div className="text-center text-blue-700 font-serif">
                    <div className="text-2xl mb-1">📄</div>
                    <div className="text-xs font-semibold">24" x 36" poster</div>
                    <div className="text-xs">Bulletin board ready</div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm font-serif">
                  Generate Print
                </button>
              </div>
              
              {/* Digital Display Preview */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                <h3 className="text-lg font-bold text-green-900 mb-3 font-serif">Digital Display</h3>
                <div className="aspect-[16/9] bg-white rounded border border-green-300 flex items-center justify-center mb-3">
                  <div className="text-center text-green-700 font-serif">
                    <div className="text-2xl mb-1">🖥️</div>
                    <div className="text-xs font-semibold">1920x1080 slideshow</div>
                    <div className="text-xs">Presentation ready</div>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded text-sm font-serif">
                  Generate Digital
                </button>
              </div>
            </div>

            {/* Email Communications */}
            <div className="mt-6 bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg border border-amber-200">
              <h3 className="text-lg font-bold text-amber-900 mb-3 font-serif">Email Communications</h3>
              <div className="grid md:grid-cols-3 gap-2">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-3 rounded text-sm font-serif">
                  Individual Email
                </button>
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-3 rounded text-sm font-serif">
                  Class Newsletter
                </button>
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-3 rounded text-sm font-serif">
                  Achievement Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div className="mb-12">
          <div className="bg-white/95 rounded-xl shadow-xl p-8 border-2 border-amber-200">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif text-center">AI-Powered Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4 font-serif">Visual Generation</h3>
                <ul className="space-y-3 text-amber-800 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">🎨</span>
                    <span>Automatically create compelling visual layouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">📊</span>
                    <span>Generate charts and graphs from student data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">🎯</span>
                    <span>Highlight key achievements and progress metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">📝</span>
                    <span>Create professional captions and descriptions</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4 font-serif">Vision Board Features</h3>
                <ul className="space-y-3 text-amber-800 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">📋</span>
                    <span>Combine multiple student achievements on one board</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">🖨️</span>
                    <span>High-resolution print formats for bulletin boards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">💻</span>
                    <span>Digital displays for school websites and presentations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">📧</span>
                    <span>Email templates for parent communications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 