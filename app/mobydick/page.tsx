import React from 'react'
import Link from 'next/link'

export default function MobyDick() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Moby Dick
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Herman Melville's epic tale of the white whale through narrative analysis.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Narrative Elements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-medium text-blue-900 mb-2">
                🌊 Themes
              </h3>
              <p className="text-blue-700">
                Explore the major themes of obsession, nature vs. humanity, and fate.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-medium text-green-900 mb-2">
                👥 Characters
              </h3>
              <p className="text-green-700">
                Analyze key characters including Ahab, Ishmael, and Queequeg.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-medium text-purple-900 mb-2">
                📖 Structure
              </h3>
              <p className="text-purple-700">
                Examine the novel's unique narrative structure and storytelling techniques.
              </p>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-medium text-orange-900 mb-2">
                💭 Symbolism
              </h3>
              <p className="text-orange-700">
                Decode the rich symbolism throughout Melville's masterpiece.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Begin Analysis
          </button>
        </div>
      </div>
    </main>
  )
} 