import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Narrative Exploration
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform long-form narrative into digestible quotes, visuals, stylistic, and structural elements. 
            Perfect for teaching long narratives and learning in abbreviated formats.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get Started
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-medium text-blue-900 mb-2">
                📚 Analyze Narrative
              </h3>
              <p className="text-blue-700">
                Upload or paste your long-form content to extract key insights and quotes.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-medium text-green-900 mb-2">
                🎨 Create Visuals
              </h3>
              <p className="text-green-700">
                Generate visual representations of narrative structure and themes.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-medium text-purple-900 mb-2">
                📝 Extract Elements
              </h3>
              <p className="text-purple-700">
                Identify important structural elements and syntax patterns.
              </p>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-medium text-orange-900 mb-2">
                🎯 Teach & Share
              </h3>
              <p className="text-orange-700">
                Create short-form teaching materials from complex narratives.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Explore Classic Literature
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/mobydick" 
              className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 mb-2">
                🐋 Moby Dick
              </h3>
              <p className="text-gray-600">
                Explore Herman Melville's epic tale of obsession and the white whale.
              </p>
            </Link>
            <div className="p-4 bg-gray-50 rounded-lg opacity-60">
              <h3 className="text-lg font-medium text-gray-500 mb-2">
                📚 More Coming Soon
              </h3>
              <p className="text-gray-400">
                Additional classic literature explorations will be added here.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Start Exploring
          </button>
        </div>
      </div>
    </main>
  )
} 