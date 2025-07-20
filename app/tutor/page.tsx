'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function Tutor() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [authorName, setAuthorName] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const famousAuthors = [
    'Emily Dickinson', 'Walt Whitman', 'Langston Hughes', 'Maya Angelou',
    'Robert Frost', 'Sylvia Plath', 'T.S. Eliot', 'Virginia Woolf',
    'James Joyce', 'Gabriel García Márquez', 'Toni Morrison', 'Chinua Achebe'
  ]

  useEffect(() => {
    setAuthorName(famousAuthors[Math.floor(Math.random() * famousAuthors.length)])
    
    // Add welcome message
    setMessages([{
      id: '1',
      role: 'assistant',
      content: `Welcome to the Literary Parlor's AI Tutor! I'm ${famousAuthors[Math.floor(Math.random() * famousAuthors.length)]}, your guide through the world of literature. I'm here to help you with reading comprehension, writing skills, grammar, vocabulary, and literary analysis. What would you like to explore today?`,
      timestamp: new Date()
    }])
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const getTopics = () => [
    { icon: '📚', title: 'Reading Comprehension', description: 'Strategies for understanding texts' },
    { icon: '✏️', title: 'Writing Skills', description: 'Essay structure and writing process' },
    { icon: '📝', title: 'Grammar & Mechanics', description: 'Parts of speech and punctuation' },
    { icon: '💭', title: 'Vocabulary Building', description: 'Context clues and word parts' },
    { icon: '📖', title: 'Literature Analysis', description: 'Literary elements and devices' }
  ]

  const handleTopicClick = (topic: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: `Tell me about ${topic.toLowerCase()}`,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
    setInput('')
    // In a real implementation, you would send this to your AI API
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I'd be happy to help you with ${topic.toLowerCase()}! This is a placeholder response. In the full implementation, this would connect to your Echo API for real AI-powered tutoring.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, response])
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Thank you for your question about "${input}". This is a placeholder response. In the full implementation, this would connect to your Echo API for real AI-powered tutoring with comprehensive safety features and academic integrity protection.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, response])
      setIsLoading(false)
    }, 1500)
  }

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
            href="/" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🏠 Return to Parlor
          </Link>
          
          <div className="inline-flex items-center gap-2 text-green-600 bg-green-50/90 px-4 py-2 rounded-lg border-2 border-green-600">
            <span className="text-xl">🛡️</span>
            <span className="font-bold">Safe Learning Environment</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative transform transition-all duration-300 hover:scale-105" style={{
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
              🎓 AI Literary Tutor
            </h1>
            <p className="text-xl text-amber-800 font-serif italic mb-3">
              Your Personal Guide Through Literature
            </p>
            <div className="text-lg text-amber-700 font-serif mb-4">
              Powered by {authorName}
            </div>
            <div className="w-32 h-1 bg-amber-600 mx-auto mb-4"></div>
            <p className="text-lg text-amber-800 font-serif leading-relaxed max-w-2xl">
              Get help with reading comprehension, writing skills, grammar, vocabulary, and literary analysis. 
              This AI tutor maintains academic integrity and provides educational guidance.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-6 shadow-2xl h-[600px] flex flex-col">
              
              {/* Chat Header */}
              <div className="text-center mb-4 pb-4 border-b-2 border-amber-300">
                <h2 className="text-2xl font-bold text-amber-900 font-serif">Conversation with {authorName}</h2>
                <p className="text-amber-700 font-serif text-sm">Ask me anything about literature and writing!</p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-amber-100 text-amber-900 border-2 border-amber-300'
                      }`}
                    >
                      <p className="font-serif leading-relaxed">{message.content}</p>
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-amber-100 text-amber-900 border-2 border-amber-300 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-600"></div>
                        <span className="font-serif">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about literature, writing, or grammar..."
                  className="flex-1 p-3 border-2 border-amber-300 rounded-lg bg-white/90 text-amber-900 font-serif focus:outline-none focus:border-amber-600"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Topics Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Topics */}
            <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif text-center">Quick Topics</h3>
              <div className="space-y-3">
                {getTopics().map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => handleTopicClick(topic.title)}
                    className="w-full p-3 bg-white/70 hover:bg-white/90 border-2 border-amber-300 rounded-lg text-left transition-all duration-300 hover:scale-105 hover:border-amber-600"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{topic.icon}</span>
                      <div>
                        <div className="font-bold text-amber-900 font-serif">{topic.title}</div>
                        <div className="text-sm text-amber-700 font-serif">{topic.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif text-center">Features</h3>
              <div className="space-y-3 text-amber-800 font-serif">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Academic Integrity Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Content Moderation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Multilingual Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Educational Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Safe Learning Environment</span>
                </div>
              </div>
            </div>

            {/* Integration Note */}
            <div className="bg-blue-50/95 border-4 border-blue-600 rounded-xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-blue-900 mb-3 font-serif">Integration Note</h3>
              <p className="text-blue-800 font-serif text-sm leading-relaxed">
                This is a demonstration of the ELA Tutor Chatbot integration. To enable full functionality, 
                you'll need to connect your Echo API credentials and implement the complete safety features 
                from your <a href="https://github.com/briansproule20/claude_hemingway" className="underline font-bold">claude_hemingway repository</a>.
              </p>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-block p-6 bg-gradient-to-r from-amber-900/90 to-orange-800/90 border-4 border-amber-400 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Ready to Enhance Your Learning?
            </h3>
            <p className="text-amber-200 text-lg mb-6 font-serif">
              Connect your Echo API to unlock the full power of AI-powered literary tutoring
            </p>
            <Link href="/" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg">
              🏠 Return to Literary Parlor
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
} 