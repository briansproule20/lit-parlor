'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface SafetyViolation {
  type: string
  count: number
  lastViolation: Date
}

export default function Tutor() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [authorName, setAuthorName] = useState('')
  const [language, setLanguage] = useState<'english' | 'spanish' | 'haitian'>('english')
  const [violations, setViolations] = useState<SafetyViolation[]>([])
  const [showModerationModal, setShowModerationModal] = useState(false)
  const [moderationMessage, setModerationMessage] = useState('')
  const [echoAppId, setEchoAppId] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const famousAuthors = [
    'Emily Dickinson', 'Walt Whitman', 'Langston Hughes', 'Maya Angelou',
    'Robert Frost', 'Sylvia Plath', 'T.S. Eliot', 'Virginia Woolf',
    'James Joyce', 'Gabriel García Márquez', 'Toni Morrison', 'Chinua Achebe'
  ]

  // Content filtering patterns (pattern-based, no explicit words)
  const contentFilterPatterns = {
    profanity: /(?:[a-z]+\s*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+\s*[a-z]+)|(?:[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+\s*[a-z]+\s*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+)/gi,
    hateSpeech: /(?:hate|discriminate|superior|inferior|racist|sexist|homophobic|transphobic|bigot)/gi,
    violence: /(?:kill|murder|suicide|bomb|shoot|attack|harm|hurt|violence|weapon)/gi,
    sexual: /(?:sexual|intimate|adult|mature|explicit|inappropriate)/gi,
    drugs: /(?:drug|alcohol|substance|illegal|dealer|addiction)/gi,
    personalInfo: /(?:ssn|social\s*security|credit\s*card|phone\s*number|address|email\s*address)/gi,
    spam: /(?:buy\s*now|click\s*here|limited\s*time|special\s*offer|free\s*money)/gi
  }

  // Academic integrity patterns
  const writingRequestPatterns = [
    /(?:write|compose|create|draft)\s+(?:an?\s+)?(?:essay|paper|assignment|homework|thesis|dissertation|report|article|story|poem|letter|email|speech|presentation)/gi,
    /(?:do\s+my|complete\s+my|finish\s+my)\s+(?:essay|paper|assignment|homework|thesis|dissertation|report|article|story|poem|letter|email|speech|presentation)/gi,
    /(?:help\s+me\s+write|assist\s+me\s+with\s+writing)\s+(?:an?\s+)?(?:essay|paper|assignment|homework|thesis|dissertation|report|article|story|poem|letter|email|speech|presentation)/gi,
    /(?:can\s+you\s+write|will\s+you\s+write)\s+(?:an?\s+)?(?:essay|paper|assignment|homework|thesis|dissertation|report|article|story|poem|letter|email|speech|presentation)/gi,
    /(?:i\s+need\s+an?\s+essay|i\s+need\s+an?\s+paper|i\s+need\s+an?\s+assignment)\s+(?:written|done|completed)/gi
  ]

  const proofreadingPatterns = [
    /(?:proofread|check|review|edit|correct)\s+(?:my|this|the)\s+(?:essay|paper|assignment|homework|thesis|dissertation|report|article|story|poem|letter|email|speech|presentation)/gi,
    /(?:fix|correct|improve)\s+(?:my|this|the)\s+(?:grammar|spelling|punctuation|writing)/gi,
    /(?:find|identify)\s+(?:my|the)\s+(?:mistakes|errors|problems)\s+(?:in|with)/gi
  ]

  // Language-specific messages
  const languageMessages = {
    english: {
      welcome: "Welcome to the Literary Parlor's AI Tutor! I'm here to help you with reading comprehension, writing skills, grammar, vocabulary, and literary analysis. What would you like to explore today?",
      moderation: "I notice your message may not be appropriate for our educational environment. Let's focus on literature and learning!",
      academicIntegrity: "I'm here to help you learn and develop your skills, not to complete assignments for you. Let me guide you through the learning process instead!",
      contentViolation: "This content doesn't align with our educational mission. Let's explore literature together!",
      thinking: "Thinking...",
      send: "Send",
      placeholder: "Ask about literature, writing, or grammar...",
      features: {
        academicIntegrity: "Academic Integrity Protection",
        contentModeration: "Content Moderation", 
        multilingual: "Multilingual Support",
        educational: "Educational Guidance",
        safeLearning: "Safe Learning Environment"
      }
    },
    spanish: {
      welcome: "¡Bienvenido al Tutor de IA del Salón Literario! Estoy aquí para ayudarte con comprensión de lectura, habilidades de escritura, gramática, vocabulario y análisis literario. ¿Qué te gustaría explorar hoy?",
      moderation: "Noto que tu mensaje puede no ser apropiado para nuestro entorno educativo. ¡Enfoquémonos en la literatura y el aprendizaje!",
      academicIntegrity: "Estoy aquí para ayudarte a aprender y desarrollar tus habilidades, no para completar tareas por ti. ¡Déjame guiarte a través del proceso de aprendizaje!",
      contentViolation: "Este contenido no se alinea con nuestra misión educativa. ¡Exploremos la literatura juntos!",
      thinking: "Pensando...",
      send: "Enviar",
      placeholder: "Pregunta sobre literatura, escritura o gramática...",
      features: {
        academicIntegrity: "Protección de Integridad Académica",
        contentModeration: "Moderación de Contenido",
        multilingual: "Soporte Multilingüe", 
        educational: "Orientación Educativa",
        safeLearning: "Entorno de Aprendizaje Seguro"
      }
    },
    haitian: {
      welcome: "Byenveni nan Titor IA Salon Literè a! Mwen isit la pou ede w ak konpreyansyon lekti, k apasite ekriti, gramè, vokabilè ak analiz literè. Ki sa w ta renmen eksplore jounen an?",
      moderation: "Mwen remake mesaj ou a ka pa apwopriye pou anviwònman edikatif nou an. Ann konsantre sou literati ak aprantisaj!",
      academicIntegrity: "Mwen isit la pou ede w aprann ak devlope k apasite w yo, pa pou ranpli devwa pou ou. Kite m gide w atravè pwosesis aprantisaj la!",
      contentViolation: "Kontni sa a pa aliyen ak misyon edikatif nou an. Ann eksplore literati ansanm!",
      thinking: "Ap panse...",
      send: "Voye",
      placeholder: "Mande sou literati, ekriti oswa gramè...",
      features: {
        academicIntegrity: "Pwoteksyon Entegrite Akademik",
        contentModeration: "Moderasyon Kontni",
        multilingual: "Sipò Pliriling",
        educational: "Oryantasyon Edikatif", 
        safeLearning: "Anviwònman Aprantisaj An Sekirite"
      }
    }
  }

  useEffect(() => {
    setAuthorName(famousAuthors[Math.floor(Math.random() * famousAuthors.length)])
    
    // Check for Echo App ID
    const appId = process.env.NEXT_PUBLIC_ECHO_APP_ID || ''
    setEchoAppId(appId)
    setIsAuthenticated(!!appId)
    
    // Add welcome message
    setMessages([{
      id: '1',
      role: 'assistant',
      content: languageMessages[language].welcome,
      timestamp: new Date()
    }])
  }, [language])

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

  const checkContentSafety = (content: string): { isSafe: boolean; violationType?: string; message: string } => {
    const lowerContent = content.toLowerCase()
    
    // Check for content violations
    for (const [type, pattern] of Object.entries(contentFilterPatterns)) {
      if (pattern.test(lowerContent)) {
        return {
          isSafe: false,
          violationType: type,
          message: languageMessages[language].contentViolation
        }
      }
    }

    // Check for writing requests
    for (const pattern of writingRequestPatterns) {
      if (pattern.test(lowerContent)) {
        return {
          isSafe: false,
          violationType: 'writingRequest',
          message: languageMessages[language].academicIntegrity
        }
      }
    }

    // Check for proofreading requests
    for (const pattern of proofreadingPatterns) {
      if (pattern.test(lowerContent)) {
        return {
          isSafe: false,
          violationType: 'proofreadingRequest',
          message: languageMessages[language].academicIntegrity
        }
      }
    }

    return { isSafe: true, message: '' }
  }

  const recordViolation = (type: string) => {
    setViolations(prev => {
      const existing = prev.find(v => v.type === type)
      if (existing) {
        return prev.map(v => 
          v.type === type 
            ? { ...v, count: v.count + 1, lastViolation: new Date() }
            : v
        )
      } else {
        return [...prev, { type, count: 1, lastViolation: new Date() }]
      }
    })
  }

  const getEducationalGuidance = (violationType: string): string => {
    const guidance = {
      writingRequest: {
        english: "Instead of asking me to write for you, let's work on developing your writing skills! I can help you with brainstorming, outlining, thesis development, and writing techniques.",
        spanish: "En lugar de pedirme que escriba por ti, ¡trabajemos en desarrollar tus habilidades de escritura! Puedo ayudarte con lluvia de ideas, esquemas, desarrollo de tesis y técnicas de escritura.",
        haitian: "Olye pou w mande m ekri pou ou, ann travay sou devlope k apasite ekriti w yo! Mwen ka ede w ak storm lide, plan, devlopman tèz ak teknik ekriti."
      },
      proofreadingRequest: {
        english: "I can help you develop your proofreading skills! Try reading your work aloud, checking for clear topic sentences, and reviewing paragraph structure. What specific area would you like to focus on?",
        spanish: "¡Puedo ayudarte a desarrollar tus habilidades de corrección! Intenta leer tu trabajo en voz alta, revisar oraciones temáticas claras y revisar la estructura de párrafos. ¿En qué área específica te gustaría enfocarte?",
        haitian: "Mwen ka ede w devlope k apasite koreksyon w yo! Eseye li travay ou a byen fò, tcheke pou fraz sijè klè, ak revize estrikti paragraf. Ki zòn espesifik w ta renmen konsantre sou?"
      },
      contentViolation: {
        english: "Let's focus on literature and learning! I'm here to help you explore great works of literature and develop your reading and writing skills.",
        spanish: "¡Enfoquémonos en la literatura y el aprendizaje! Estoy aquí para ayudarte a explorar grandes obras literarias y desarrollar tus habilidades de lectura y escritura.",
        haitian: "Ann konsantre sou literati ak aprantisaj! Mwen isit la pou ede w eksplore gwo zèv literè ak devlope k apasite lekti ak ekriti w yo."
      }
    }

    return guidance[violationType as keyof typeof guidance]?.[language] || guidance.contentViolation[language]
  }

  const callEchoAPI = async (message: string): Promise<string> => {
    if (!echoAppId) {
      return "I'm sorry, but the Echo API is not configured. Please check your environment variables and try again."
    }

    try {
      // This would be the actual Echo API call
      // For now, we'll simulate the response
      const response = await fetch('/api/echo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          appId: echoAppId,
          language,
          safetyContext: {
            violations: violations,
            isEducational: true
          }
        })
      })

      if (!response.ok) {
        throw new Error('API call failed')
      }

      const data = await response.json()
      return data.response
    } catch (error) {
      console.error('Echo API error:', error)
      return "I'm having trouble connecting right now. Let me provide you with some educational resources instead. What specific aspect of literature would you like to learn about?"
    }
  }

  const handleTopicClick = async (topic: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: `Tell me about ${topic.toLowerCase()}`,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await callEchoAPI(newMessage.content)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error calling Echo API:', error)
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I'd be happy to help you with ${topic.toLowerCase()}! This is a placeholder response. In the full implementation, this would connect to your Echo API for real AI-powered tutoring.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, fallbackMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Content safety check
    const safetyCheck = checkContentSafety(input)
    if (!safetyCheck.isSafe) {
      recordViolation(safetyCheck.violationType!)
      setModerationMessage(getEducationalGuidance(safetyCheck.violationType!))
      setShowModerationModal(true)
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await callEchoAPI(input)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error calling Echo API:', error)
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Thank you for your question about "${input}". This is a placeholder response. In the full implementation, this would connect to your Echo API for real AI-powered tutoring with comprehensive safety features and academic integrity protection.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, fallbackMessage])
    } finally {
      setIsLoading(false)
    }
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
          
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'english' | 'spanish' | 'haitian')}
              className="px-3 py-2 bg-amber-50/90 border-2 border-amber-600 rounded-lg text-amber-800 font-bold"
            >
              <option value="english">🇺🇸 English</option>
              <option value="spanish">🇪🇸 Español</option>
              <option value="haitian">🇭🇹 Kreyòl</option>
            </select>
            
            <div className="inline-flex items-center gap-2 text-green-600 bg-green-50/90 px-4 py-2 rounded-lg border-2 border-green-600">
              <span className="text-xl">🛡️</span>
              <span className="font-bold">Safe Learning Environment</span>
            </div>
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
            
            {/* Echo Status */}
            <div className="mt-4">
              {isAuthenticated ? (
                <div className="inline-flex items-center gap-2 text-green-600 bg-green-50/90 px-4 py-2 rounded-lg border-2 border-green-600">
                  <span className="text-xl">✅</span>
                  <span className="font-bold">Echo API Connected</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 text-red-600 bg-red-50/90 px-4 py-2 rounded-lg border-2 border-red-600">
                  <span className="text-xl">⚠️</span>
                  <span className="font-bold">Echo API Not Configured</span>
                </div>
              )}
            </div>
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
                        <span className="font-serif">{languageMessages[language].thinking}</span>
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
                  placeholder={languageMessages[language].placeholder}
                  className="flex-1 p-3 border-2 border-amber-300 rounded-lg bg-white/90 text-amber-900 font-serif focus:outline-none focus:border-amber-600"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed"
                >
                  {languageMessages[language].send}
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
                  <span>{languageMessages[language].features.academicIntegrity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{languageMessages[language].features.contentModeration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{languageMessages[language].features.multilingual}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{languageMessages[language].features.educational}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{languageMessages[language].features.safeLearning}</span>
                </div>
              </div>
            </div>

            {/* Safety Status */}
            <div className="bg-green-50/95 border-4 border-green-600 rounded-xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-green-900 mb-3 font-serif">Safety Status</h3>
              <div className="space-y-2 text-green-800 font-serif text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">🛡️</span>
                  <span>Content Moderation Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">📚</span>
                  <span>Academic Integrity Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">🌍</span>
                  <span>Multilingual Safety</span>
                </div>
                {violations.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-green-300">
                    <p className="text-orange-700 font-bold">Violations: {violations.reduce((sum, v) => sum + v.count, 0)}</p>
                  </div>
                )}
              </div>
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

      {/* Content Moderation Modal */}
      {showModerationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModerationModal(false)}
          ></div>
          
          <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 max-w-2xl w-full shadow-2xl border-4 border-amber-600">
            <button
              onClick={() => setShowModerationModal(false)}
              className="absolute top-4 right-4 text-amber-800 hover:text-amber-900 text-2xl font-bold bg-amber-200 hover:bg-amber-300 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              ×
            </button>

            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h2 className="text-3xl font-bold text-amber-900 mb-2 font-serif">
                Content Moderation
              </h2>
              <p className="text-lg text-amber-700 font-serif">
                Educational Guidance
              </p>
            </div>

            <div className="bg-amber-200/50 p-6 rounded-xl border-l-4 border-amber-600 mb-6">
              <p className="text-lg text-amber-800 font-serif leading-relaxed">
                {moderationMessage}
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowModerationModal(false)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
} 