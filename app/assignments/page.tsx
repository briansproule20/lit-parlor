'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function AssignmentsPage() {
  const [selectedClass, setSelectedClass] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showCreateForm, setShowCreateForm] = useState(false)

  // Mock assignment data
  const assignments = [
    {
      id: 1,
      title: "Moby Dick - Character Analysis Essay",
      class: "Period 1 - American Lit",
      dueDate: "2024-02-15",
      status: "active",
      submissions: 18,
      totalStudents: 24,
      type: "essay",
      book: "Moby Dick",
      description: "Write a 3-4 page analysis of Captain Ahab's character development and psychological state throughout the novel.",
      points: 100
    },
    {
      id: 2,
      title: "Pride and Prejudice - Theme Discussion",
      class: "Period 3 - World Lit",
      dueDate: "2024-02-20",
      status: "active",
      submissions: 15,
      totalStudents: 18,
      type: "discussion",
      book: "Pride and Prejudice",
      description: "Participate in the Socratic Forum discussion on social class and marriage in Regency England.",
      points: 50
    },
    {
      id: 3,
      title: "Things Fall Apart - Symbolism Quiz",
      class: "Period 5 - World Lit",
      dueDate: "2024-02-10",
      status: "completed",
      submissions: 22,
      totalStudents: 22,
      type: "quiz",
      book: "Things Fall Apart",
      description: "Complete the online quiz on symbolic elements and cultural themes in the novel.",
      points: 75
    },
    {
      id: 4,
      title: "Crime and Punishment - Reading Response",
      class: "Period 7 - American Lit",
      dueDate: "2024-02-25",
      status: "draft",
      submissions: 0,
      totalStudents: 20,
      type: "response",
      book: "Crime and Punishment",
      description: "Write a 2-page response analyzing Raskolnikov's moral dilemma and psychological state.",
      points: 80
    }
  ]

  const classes = [
    "Period 1 - American Lit",
    "Period 3 - World Lit", 
    "Period 5 - World Lit",
    "Period 7 - American Lit"
  ]

  const assignmentTypes = [
    { value: "essay", label: "Essay", color: "blue" },
    { value: "quiz", label: "Quiz", color: "green" },
    { value: "discussion", label: "Discussion", color: "purple" },
    { value: "response", label: "Reading Response", color: "orange" },
    { value: "creative", label: "Creative Project", color: "pink" }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100'
      case 'completed': return 'text-blue-600 bg-blue-100'
      case 'draft': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getTypeColor = (type: string) => {
    const typeInfo = assignmentTypes.find(t => t.value === type)
    if (!typeInfo) return 'text-gray-600 bg-gray-100'
    
    switch (typeInfo.color) {
      case 'blue': return 'text-blue-600 bg-blue-100'
      case 'green': return 'text-green-600 bg-green-100'
      case 'purple': return 'text-purple-600 bg-purple-100'
      case 'orange': return 'text-orange-600 bg-orange-100'
      case 'pink': return 'text-pink-600 bg-pink-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const filteredAssignments = assignments.filter(assignment => {
    const classMatch = selectedClass === 'all' || assignment.class === selectedClass
    const statusMatch = selectedStatus === 'all' || assignment.status === selectedStatus
    return classMatch && statusMatch
  })

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
          {/* Removed return to parlor button and other navigation - now handled in menu bar */}
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
              📝 Assignment Management
            </h1>
            <p className="text-lg text-amber-800 max-w-3xl mx-auto leading-relaxed font-serif">
              Create, manage, and track student assignments across all your classes. Monitor submissions, 
              provide feedback, and ensure academic excellence through structured learning activities.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">{assignments.length}</div>
              <div className="text-blue-100 font-serif">Total Assignments</div>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">
                {assignments.filter(a => a.status === 'active').length}
              </div>
              <div className="text-green-100 font-serif">Active Assignments</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">
                {assignments.reduce((sum, a) => sum + a.submissions, 0)}
              </div>
              <div className="text-purple-100 font-serif">Total Submissions</div>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 rounded-xl shadow-lg text-white">
              <div className="text-3xl font-bold font-serif">
                {assignments.reduce((sum, a) => sum + a.totalStudents, 0)}
              </div>
              <div className="text-orange-100 font-serif">Students Enrolled</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-8">
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200">
            <div className="flex flex-wrap gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="block text-amber-900 font-semibold mb-2 font-serif">Filter by Class</label>
                  <select 
                    value={selectedClass} 
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="px-4 py-2 border-2 border-amber-300 rounded-lg bg-amber-50 text-amber-900 font-serif focus:outline-none focus:border-amber-500"
                  >
                    <option value="all">All Classes</option>
                    {classes.map((className) => (
                      <option key={className} value={className}>{className}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-900 font-semibold mb-2 font-serif">Filter by Status</label>
                  <select 
                    value={selectedStatus} 
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-4 py-2 border-2 border-amber-300 rounded-lg bg-amber-50 text-amber-900 font-serif focus:outline-none focus:border-amber-500"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>
              
              <button 
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
              >
                ➕ Create New Assignment
              </button>
            </div>
          </div>
        </div>

        {/* Create Assignment Form */}
        {showCreateForm && (
          <div className="mb-8">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-orange-900 mb-6 font-serif">Create New Assignment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orange-900 font-semibold mb-2 font-serif">Assignment Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border-2 border-orange-300 rounded-lg bg-orange-50 text-orange-900 font-serif focus:outline-none focus:border-orange-500"
                    placeholder="Enter assignment title..."
                  />
                </div>
                <div>
                  <label className="block text-orange-900 font-semibold mb-2 font-serif">Class</label>
                  <select className="w-full px-4 py-2 border-2 border-orange-300 rounded-lg bg-orange-50 text-orange-900 font-serif focus:outline-none focus:border-orange-500">
                    <option value="">Select a class...</option>
                    {classes.map((className) => (
                      <option key={className} value={className}>{className}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-orange-900 font-semibold mb-2 font-serif">Assignment Type</label>
                  <select className="w-full px-4 py-2 border-2 border-orange-300 rounded-lg bg-orange-50 text-orange-900 font-serif focus:outline-none focus:border-orange-500">
                    <option value="">Select type...</option>
                    {assignmentTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-orange-900 font-semibold mb-2 font-serif">Due Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border-2 border-orange-300 rounded-lg bg-orange-50 text-orange-900 font-serif focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-orange-900 font-semibold mb-2 font-serif">Description</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border-2 border-orange-300 rounded-lg bg-orange-50 text-orange-900 font-serif focus:outline-none focus:border-orange-500"
                    placeholder="Enter assignment description and instructions..."
                  />
                </div>
                <div>
                  <label className="block text-orange-900 font-semibold mb-2 font-serif">Points</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border-2 border-orange-300 rounded-lg bg-orange-50 text-orange-900 font-serif focus:outline-none focus:border-orange-500"
                    placeholder="100"
                  />
                </div>
                <div className="flex items-end">
                  <button className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif">
                    Create Assignment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Assignments List */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-100 mb-6 font-serif text-center" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            📋 Your Assignments
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredAssignments.map((assignment) => (
              <div key={assignment.id} className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-amber-200 hover:shadow-2xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 font-serif mb-2">{assignment.title}</h3>
                    <p className="text-amber-700 font-serif text-sm mb-3">{assignment.description}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(assignment.status)}`}>
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(assignment.type)}`}>
                      {assignmentTypes.find(t => t.value === assignment.type)?.label || assignment.type}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-amber-700 font-semibold font-serif">Class:</span>
                    <p className="text-amber-800 font-serif">{assignment.class}</p>
                  </div>
                  <div>
                    <span className="text-amber-700 font-semibold font-serif">Book:</span>
                    <p className="text-amber-800 font-serif">{assignment.book}</p>
                  </div>
                  <div>
                    <span className="text-amber-700 font-semibold font-serif">Due Date:</span>
                    <p className="text-amber-800 font-serif">{new Date(assignment.dueDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-amber-700 font-semibold font-serif">Points:</span>
                    <p className="text-amber-800 font-serif">{assignment.points}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-amber-700 font-semibold font-serif">Submissions</span>
                    <span className="text-amber-800 font-serif">{assignment.submissions}/{assignment.totalStudents}</span>
                  </div>
                  <div className="w-full bg-amber-200 rounded-full h-2">
                    <div 
                      className="bg-amber-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-serif">
                    View Submissions
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-serif">
                    Edit Assignment
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-serif">
                    Grade
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

                 {/* Assignment Types Guide */}
         <div className="bg-gradient-to-r from-amber-800/90 to-orange-800/90 border-4 border-amber-300 rounded-2xl shadow-2xl p-8 mb-8">
           <div className="text-white">
             <h2 className="text-3xl font-bold mb-6 font-serif text-center">📚 Assignment Types</h2>
             <div className="grid md:grid-cols-3 gap-8">
               <div className="text-center">
                 <div className="text-4xl mb-3">✍️</div>
                 <h3 className="text-xl font-semibold mb-3 font-serif text-orange-300">Essays & Responses</h3>
                 <p className="text-amber-200 font-serif text-sm">
                   Analytical essays, character studies, theme analysis, and reading responses that develop critical thinking skills.
                 </p>
               </div>
               <div className="text-center">
                 <div className="text-4xl mb-3">🎯</div>
                 <h3 className="text-xl font-semibold mb-3 font-serif text-orange-300">Quizzes & Assessments</h3>
                 <p className="text-amber-200 font-serif text-sm">
                   Knowledge checks, comprehension quizzes, and formative assessments to gauge understanding and progress.
                 </p>
               </div>
               <div className="text-center">
                 <div className="text-4xl mb-3">💬</div>
                 <h3 className="text-xl font-semibold mb-3 font-serif text-orange-300">Discussions & Projects</h3>
                 <p className="text-amber-200 font-serif text-sm">
                   Socratic discussions, collaborative projects, and creative assignments that foster engagement and collaboration.
                 </p>
               </div>
             </div>
           </div>
         </div>

         {/* Coming Soon: Global Assignment Repository */}
         <div className="bg-white/95 rounded-xl shadow-xl p-8 border-2 border-purple-200">
           <div className="text-center">
             <div className="text-6xl mb-4">🌍</div>
             <h2 className="text-3xl font-bold text-purple-900 mb-4 font-serif">Coming Soon</h2>
             <h3 className="text-2xl font-semibold text-purple-800 mb-6 font-serif">Global Assignment Repository</h3>
             <p className="text-purple-700 text-lg font-serif mb-6 max-w-2xl mx-auto">
               Store old assignments, make your assignments publically available, or access other assignments made by our team. 
               Access a curated collection of high-quality assignments from educators worldwide. 
               Share your best assignments and discover innovative teaching resources created by fellow teachers.
             </p>
             <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
               <p className="text-purple-800 font-serif text-sm">
                 <strong>Features coming soon:</strong> Assignment sharing, peer reviews, rating system, 
                 subject-specific collections, and integration with your existing assignments.
               </p>
             </div>
           </div>
         </div>

       </div>
     </main>
   )
} 