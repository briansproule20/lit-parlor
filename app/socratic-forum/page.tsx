import React from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function SocraticForum() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 25%, #4338ca 50%, #5b21b6 75%, #7c2d12 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dot Background */}
      <div className="opacity-30 absolute inset-0 pointer-events-none">
        <DotBackground />
      </div>
      
      {/* Intellectual lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-purple-900/30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          {/* Removed return to parlor button and level info - now handled in menu bar */}
        </div>

        {/* Header */}
        <div className="text-center mb-12 mt-20">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 60%),
              linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 20%, #DEB887 40%, #F5DEB3 60%, #E6D8B5 80%, #FEFBF0 100%)
            `,
            border: '3px solid #4338ca',
            boxShadow: `
              0 8px 32px rgba(67, 56, 202, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.7),
              inset 0 -2px 4px rgba(67, 56, 202, 0.2)
            `
          }}>
            <h1 className="text-4xl font-bold text-blue-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              🏛️ The Socratic Forum
            </h1>
            <p className="text-lg text-blue-800 max-w-3xl mx-auto leading-relaxed font-serif">
              Where minds meet, ideas clash, and wisdom emerges through dialogue. Engage in thoughtful discussions, 
              collaborative analysis, and the eternal pursuit of understanding through questioning.
            </p>
          </div>
        </div>

        {/* Discussion Categories */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          
          {/* Literary Debates */}
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-blue-900 font-serif mb-4">Literary Debates</h3>
              <p className="text-blue-800 font-serif mb-6">
                Engage in structured debates about character motivations, thematic interpretations, 
                and the eternal questions posed by great literature.
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg text-left">
                  <div className="font-semibold text-blue-900 text-sm">🔥 Active Debate</div>
                  <div className="text-sm text-blue-700">Was Gatsby truly great, or tragically deluded?</div>
                  <div className="text-xs text-blue-600 mt-1">23 participants • 2 hours remaining</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-left">
                  <div className="font-semibold text-purple-900 text-sm">📚 Starting Soon</div>
                  <div className="text-sm text-purple-700">Is Hamlet's madness real or performed?</div>
                  <div className="text-xs text-purple-600 mt-1">Opens tomorrow at 3 PM EST</div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaborative Analysis */}
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-green-200 hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-green-900 font-serif mb-4">Collaborative Analysis</h3>
              <p className="text-green-800 font-serif mb-6">
                Work together to decode complex texts, share insights, and build collective understanding 
                through shared annotation and discussion.
              </p>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg text-left">
                  <div className="font-semibold text-green-900 text-sm">📖 Group Reading</div>
                  <div className="text-sm text-green-700">Decoding Joyce's "Ulysses" - Chapter 12</div>
                  <div className="text-xs text-green-600 mt-1">15 contributors • 47 annotations</div>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg text-left">
                  <div className="font-semibold text-teal-900 text-sm">🎭 Character Study</div>
                  <div className="text-sm text-teal-700">Building Lady Macbeth's psychological profile</div>
                  <div className="text-xs text-teal-600 mt-1">8 scholars • Evidence mapping</div>
                </div>
              </div>
            </div>
          </div>

          {/* Socratic Circles */}
          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-purple-200 hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-center">
              <div className="text-4xl mb-4">💭</div>
              <h3 className="text-2xl font-bold text-purple-900 font-serif mb-4">Socratic Circles</h3>
              <p className="text-purple-800 font-serif mb-6">
                Join intimate discussion circles where questions lead to more questions, 
                and understanding emerges through guided inquiry and reflection.
              </p>
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-lg text-left">
                  <div className="font-semibold text-purple-900 text-sm">🔄 Live Circle</div>
                  <div className="text-sm text-purple-700">"What is justice?" - Plato's Republic</div>
                  <div className="text-xs text-purple-600 mt-1">6/12 participants • Join now</div>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg text-left">
                  <div className="font-semibold text-indigo-900 text-sm">⏰ Scheduled</div>
                  <div className="text-sm text-indigo-700">Exploring moral ambiguity in Dostoevsky</div>
                  <div className="text-xs text-indigo-600 mt-1">Friday 7 PM EST • 4 registered</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Forum Rules and Philosophy */}
        <div className="bg-gradient-to-r from-blue-900/90 to-purple-800/90 border-4 border-blue-400 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif text-center">The Socratic Method</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif">Our Principles</h3>
                <ul className="text-blue-200 space-y-3 font-serif">
                  <li>• <strong>Question Everything:</strong> No assumption goes unchallenged</li>
                  <li>• <strong>Seek Truth Together:</strong> Collaborative pursuit over individual victory</li>
                  <li>• <strong>Embrace Uncertainty:</strong> "I know that I know nothing"</li>
                  <li>• <strong>Listen Actively:</strong> Understanding before responding</li>
                  <li>• <strong>Challenge with Respect:</strong> Attack ideas, not individuals</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif">Discussion Guidelines</h3>
                <div className="text-blue-200 space-y-3 font-serif">
                  <div>🎯 <strong>Stay on Topic:</strong> Keep discussions focused and relevant</div>
                  <div>📚 <strong>Cite Sources:</strong> Support arguments with textual evidence</div>
                  <div>🤔 <strong>Ask Questions:</strong> Use inquiry to deepen understanding</div>
                  <div>🌟 <strong>Be Original:</strong> Bring fresh perspectives to old texts</div>
                  <div>⚡ <strong>Think Critically:</strong> Analyze, synthesize, evaluate</div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="bg-blue-800/50 p-4 rounded-lg max-w-2xl mx-auto">
                <p className="text-blue-100 italic font-serif text-lg">
                  "The unexamined life is not worth living." — Socrates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Tools */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-blue-200">
            <div className="text-3xl mb-3">🎤</div>
            <h4 className="font-bold text-blue-900 font-serif mb-2">Start Discussion</h4>
            <p className="text-sm text-blue-700 font-serif">Launch a new topic for community dialogue</p>
          </div>
          <div className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-green-200">
            <div className="text-3xl mb-3">📝</div>
            <h4 className="font-bold text-green-900 font-serif mb-2">Annotate Text</h4>
            <p className="text-sm text-green-700 font-serif">Add insights to shared readings</p>
          </div>
          <div className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-purple-200">
            <div className="text-3xl mb-3">🏆</div>
            <h4 className="font-bold text-purple-900 font-serif mb-2">Leaderboard</h4>
            <p className="text-sm text-purple-700 font-serif">Top contributors and philosophers</p>
          </div>
          <div className="bg-white/95 p-6 rounded-xl shadow-lg text-center border-2 border-orange-200">
            <div className="text-3xl mb-3">📊</div>
            <h4 className="font-bold text-orange-900 font-serif mb-2">My Progress</h4>
            <p className="text-sm text-orange-700 font-serif">Track discussions and insights</p>
          </div>
        </div>

      </div>
    </main>
  )
} 