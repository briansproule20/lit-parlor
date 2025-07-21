import React from 'react'
import Link from 'next/link'

export default function Classes() {
  const classes = [
    {
      id: 1,
      name: "English Literature 101",
      period: "Period 1",
      time: "8:00 AM - 9:15 AM",
      students: 24,
      grade: "10th Grade",
      currentBook: "Moby Dick",
      progress: 75,
      color: "from-blue-600 to-blue-700",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800"
    },
    {
      id: 2,
      name: "Advanced Literature Seminar",
      period: "Period 3",
      time: "10:30 AM - 11:45 AM",
      students: 18,
      grade: "12th Grade",
      currentBook: "Crime and Punishment",
      progress: 60,
      color: "from-purple-600 to-purple-700",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-800"
    },
    {
      id: 3,
      name: "World Literature",
      period: "Period 5",
      time: "1:00 PM - 2:15 PM",
      students: 22,
      grade: "11th Grade",
      currentBook: "Things Fall Apart",
      progress: 45,
      color: "from-orange-600 to-orange-700",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-800"
    },
    {
      id: 4,
      name: "American Literature",
      period: "Period 7",
      time: "2:30 PM - 3:45 PM",
      students: 20,
      grade: "11th Grade",
      currentBook: "Their Eyes Were Watching God",
      progress: 30,
      color: "from-teal-600 to-teal-700",
      borderColor: "border-teal-500",
      bgColor: "bg-teal-50",
      textColor: "text-teal-800"
    }
  ]

  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative">
        
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
              Your Classes
            </h1>
            <p className="text-lg text-amber-800 font-serif">
              Manage your class roster and track student progress
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Classes Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {classes.map((classItem) => (
            <div key={classItem.id} className="group">
              <div className={`p-6 rounded-xl shadow-xl border-2 ${classItem.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full`} style={{
                background: '#FEFBF0',
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `
              }}>
                
                {/* Class Header */}
                <div className={`bg-gradient-to-r ${classItem.color} text-white p-4 rounded-lg mb-6`}>
                  <h3 className="text-2xl font-bold font-serif mb-2">{classItem.name}</h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-serif">{classItem.period}</span>
                    <span className="font-serif">{classItem.time}</span>
                  </div>
                </div>

                {/* Class Details */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`${classItem.textColor} font-serif`}>
                      <span className="font-semibold">Grade Level:</span>
                      <p className="text-sm">{classItem.grade}</p>
                    </div>
                    <div className={`${classItem.textColor} font-serif`}>
                      <span className="font-semibold">Students:</span>
                      <p className="text-sm">{classItem.students} enrolled</p>
                    </div>
                  </div>

                  <div className={`${classItem.textColor} font-serif`}>
                    <span className="font-semibold">Current Book:</span>
                    <p className="text-sm">{classItem.currentBook}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`${classItem.textColor} font-serif text-sm font-semibold`}>Reading Progress</span>
                      <span className={`${classItem.textColor} font-serif text-sm`}>{classItem.progress}%</span>
                    </div>
                                         <div className="w-full bg-gray-200 rounded-full h-3">
                       <div 
                         className={`h-3 rounded-full transition-all duration-500`}
                         style={{
                           background: classItem.color === "from-blue-600 to-blue-700" ? "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)" :
                                     classItem.color === "from-purple-600 to-purple-700" ? "linear-gradient(90deg, #9333ea 0%, #7c3aed 100%)" :
                                     classItem.color === "from-orange-600 to-orange-700" ? "linear-gradient(90deg, #ea580c 0%, #dc2626 100%)" :
                                     "linear-gradient(90deg, #0d9488 0%, #0f766e 100%)",
                           width: `${classItem.progress}%`
                         }}
                       ></div>
                     </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <button className={`bg-gradient-to-r ${classItem.color} hover:opacity-90 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 text-xs font-serif flex-1`}>
                      View Roster
                    </button>
                    <button className={`border-2 ${classItem.borderColor} ${classItem.textColor} hover:bg-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 text-xs font-serif flex-1`}>
                      Manage Assignments
                    </button>
                    <button className={`bg-gradient-to-r from-emerald-600 to-emerald-700 hover:opacity-90 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 text-xs font-serif flex-1`}>
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="text-center mb-8">
          <div className="inline-block p-6 bg-gradient-to-r from-indigo-900/90 to-purple-800/90 border-4 border-indigo-400 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">Quick Actions</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif">
                ➕ Create New Class
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif">
                📊 View All Analytics
              </button>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif">
                📚 Manage Library
              </button>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/90 rounded-xl p-6 shadow-xl border-2 border-amber-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-800 mb-2">4</div>
              <div className="text-amber-700 font-serif">Active Classes</div>
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow-xl border-2 border-blue-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">84</div>
              <div className="text-blue-700 font-serif">Total Students</div>
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow-xl border-2 border-green-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">4</div>
              <div className="text-green-700 font-serif">Books in Progress</div>
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow-xl border-2 border-purple-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-800 mb-2">52.5%</div>
              <div className="text-purple-700 font-serif">Avg. Progress</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-amber-200/80 text-sm font-serif">
            Need help managing your classes? Contact your administrator.
          </p>
        </div>

      </div>
    </main>
  )
} 