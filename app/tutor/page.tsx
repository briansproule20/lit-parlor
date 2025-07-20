'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { createOpenAI } from '@ai-sdk/openai'
import { generateText } from 'ai'

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
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [credits, setCredits] = useState<number | null>(null)
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
        educational: "Orientación Edikativa",
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
    
    // Add welcome message
    setMessages([{
      id: '1',
      role: 'assistant',
      content: languageMessages[language].welcome,
      timestamp: new Date()
    }])
  }, [language])

  // Initialize Echo authentication
  useEffect(() => {
    const initEcho = async () => {
      try {
        // Check if we have a stored token
        const token = localStorage.getItem('echo_token')
        if (token) {
          console.log('Found existing token, verifying...')
          // Verify token is still valid
          const response = await fetch('https://echo.merit.systems/api/v1/user/me', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          
          if (response.ok) {
            const userData = await response.json()
            setIsAuthenticated(true)
            setUserEmail(userData.email)
            
            // Get balance
            const balanceResponse = await fetch('https://echo.merit.systems/api/v1/user/balance', {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })
            
            if (balanceResponse.ok) {
              const balanceData = await balanceResponse.json()
              setCredits(balanceData.credits)
            }
          } else {
            console.log('Token invalid, removing...')
            localStorage.removeItem('echo_token')
          }
        } else {
          console.log('No existing token found')
        }
      } catch (error) {
        console.error('Echo init error:', error)
      }
    }
    
    initEcho()
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
        english: "I'm here to help you learn and develop your writing skills! Instead of writing for you, let me guide you through the writing process, help you understand structure, or explain concepts you're struggling with.",
        spanish: "¡Estoy aquí para ayudarte a aprender y desarrollar tus habilidades de escritura! En lugar de escribir por ti, déjame guiarte a través del proceso de escritura, ayudarte a entender la estructura o explicar conceptos con los que tienes dificultades.",
        haitian: "Mwen isit la pou ede w aprann ak devlope k apasite ekriti w yo! Olye pou m ekri pou ou, kite m gide w atravè pwosesis ekriti a, ede w konprann estrikti a oswa eksplike konsèp ou gen difikilte ak yo."
      },
      proofreadingRequest: {
        english: "I'd be happy to help you improve your writing! I can explain grammar rules, suggest ways to strengthen your arguments, or help you understand writing techniques. What specific aspect would you like to work on?",
        spanish: "¡Me encantaría ayudarte a mejorar tu escritura! Puedo explicarte reglas gramaticales, sugerir formas de fortalecer tus argumentos o ayudarte a entender técnicas de escritura. ¿Qué aspecto específico te gustaría trabajar?",
        haitian: "Mwen ta kontan ede w amelyore ekriti w! Mwen ka eksplike règ gramè, sijere fason pou ranfòse agiman w yo oswa ede w konprann teknik ekriti. Ki aspè espesifik ou ta renmen travay sou li?"
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
    if (!isAuthenticated) {
      return "Please sign in to Echo to use the AI tutor."
    }

    try {
      // Get language instructions
      const getLanguageInstructions = () => {
        switch (language) {
          case 'spanish':
            return 'Responde en español. Eres un tutor de literatura que ayuda a estudiantes con comprensión de lectura, escritura, gramática, vocabulario y análisis literario. Proporciona explicaciones claras en español y ejemplos en inglés cuando sea apropiado.'
          case 'haitian':
            return 'Reponn nan Kreyòl Ayisyen. Ou se yon pwofesè literati ki ap ede elèv yo ak konpreyansyon lekti, ekriti, gramè, vokabilè ak analiz literè. Bay eksplikasyon ki klè nan Kreyòl ak egzanp nan anglè lè sa apropye.'
          default:
            return 'Respond in English. You are a literary tutor helping students with reading comprehension, writing, grammar, vocabulary, and literary analysis.'
        }
      }

      // Get the stored token
      const token = localStorage.getItem('echo_token')
      if (!token) {
        throw new Error('No Echo token available')
      }

      // Create OpenAI client pointing to Echo's router
      const openai = createOpenAI({
        apiKey: token,
        baseURL: 'https://echo.router.merit.systems',
      })

      // Generate text using AI SDK
      const { text } = await generateText({
        model: openai('gpt-4o'),
        prompt: `${getLanguageInstructions()}

You are a helpful AI assistant specializing in English Language Arts (ELA) tutoring. You help students with 
reading comprehension, writing, grammar, vocabulary, and literary analysis. Always be encouraging and provide 
clear explanations.

User message: ${message}

Respond helpfully and educationally to assist the student with their ELA learning.`,
        temperature: 0.7,
        maxTokens: 2000,
      })

      console.log('✅ Echo API Response received')
      return text
    } catch (error) {
      console.error('❌ Echo API Error:', error)
      
      // Handle specific error types
      if (error instanceof Error) {
        if (error.message.includes('401') || error.message.includes('Unauthorized')) {
          return "I'm having trouble authenticating with the Echo API. Please sign in again."
        } else if (error.message.includes('402') || error.message.includes('Payment')) {
          return "It looks like you need to add more credits to your Echo account to continue using the AI tutor."
        } else if (error.message.includes('429') || error.message.includes('Rate')) {
          return "I'm receiving too many requests right now. Please wait a moment and try again."
        }
      }
      
      return "I'm having trouble connecting to the Echo API right now. This might be due to network issues or API configuration. Let me provide you with some educational resources instead. What specific aspect of literature would you like to learn about?"
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

  const handleSignOut = () => {
    localStorage.removeItem('echo_token')
    setIsAuthenticated(false)
    setUserEmail('')
    setCredits(null)
  }

  const handleSignIn = async () => {
    try {
      // Generate PKCE challenge
      const generateCodeVerifier = () => {
        const array = new Uint8Array(32)
        crypto.getRandomValues(array)
        return btoa(String.fromCharCode.apply(null, Array.from(array)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '')
      }

      const generateCodeChallenge = async (verifier: string) => {
        const encoder = new TextEncoder()
        const data = encoder.encode(verifier)
        const digest = await crypto.subtle.digest('SHA-256', data)
        return btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(digest))))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '')
      }

      // Generate state for CSRF protection
      const generateState = () => {
        const array = new Uint8Array(16)
        crypto.getRandomValues(array)
        return btoa(String.fromCharCode.apply(null, Array.from(array)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '')
      }

      const codeVerifier = generateCodeVerifier()
      const codeChallenge = await generateCodeChallenge(codeVerifier)
      const state = generateState()
      
      // Store for token exchange
      localStorage.setItem('echo_code_verifier', codeVerifier)
      localStorage.setItem('echo_state', state)
      
      // Redirect to Echo OAuth with all required parameters
      const appId = process.env.NEXT_PUBLIC_ECHO_APP_ID
      if (!appId) {
        alert('Echo App ID not configured. Please set NEXT_PUBLIC_ECHO_APP_ID in your .env.local file.')
        return
      }
      
      const redirectUri = window.location.origin + '/tutor'
      const authUrl = `https://echo.merit.systems/oauth/authorize?client_id=${appId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=llm:invoke offline_access&code_challenge=${codeChallenge}&code_challenge_method=S256&state=${state}`
      
      console.log('Redirecting to Echo OAuth:', authUrl)
      window.location.href = authUrl
    } catch (error) {
      console.error('Sign in error:', error)
    }
  }

    // Handle OAuth callback
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    const error = urlParams.get('error')
    
    console.log('OAuth callback - Code:', code?.substring(0, 10) + '...', 'Error:', error)
    
    if (error) {
      console.error('OAuth error:', error)
      alert(`OAuth error: ${error}`)
      return
    }
    
    if (code) {
      // For now, just mark as authenticated when we get a code
      // This means the OAuth flow worked
      console.log('OAuth successful, code received:', code)
      setIsAuthenticated(true)
      setUserEmail('user@echo.com') // Placeholder
      setCredits(100) // Placeholder
      
      // Clean up URL
      window.history.replaceState({}, document.title, '/tutor')
    }
  }, [])

  // Show the tutor if user is authenticated
  if (isAuthenticated) {
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

              {/* Sign Out Button */}
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 font-bold rounded-lg transition-colors border-2 border-red-300"
              >
                Sign Out
              </button>
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
                textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
                letterSpacing: '0.05em'
              }}>
                📚 AI Literary Tutor
              </h1>
              <div className="w-full h-2 bg-amber-700 mb-4"></div>
              <p className="text-2xl text-amber-800 font-serif leading-relaxed">
                "The only way to do great work is to love what you do." - {authorName}
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Echo Account Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-600 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4 font-serif text-center">🔗 Echo Account</h3>
                
                {/* Connection Status */}
                <div className="bg-white/70 border-2 border-blue-300 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-900 font-bold">Status</span>
                    <span className="text-2xl">✅</span>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-800">Connected</div>
                    <p className="text-sm text-blue-600">Echo API Active</p>
                  </div>
                </div>
                
                {/* Credits Display */}
                <div className="bg-white/70 border-2 border-blue-300 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-900 font-bold">Credits</span>
                    <span className="text-2xl">💎</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-800">{credits || '∞'}</div>
                    <p className="text-sm text-blue-600">{credits ? 'Available' : 'Unlimited'}</p>
                  </div>
                </div>
                
                {/* Account Info */}
                <div className="bg-white/70 border-2 border-blue-300 rounded-lg p-3 mb-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">User:</span>
                      <span className="text-blue-900 font-medium">{userEmail || 'Connected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Credits:</span>
                      <span className="text-blue-900 font-medium">{credits !== null ? credits : 'Loading...'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Model:</span>
                      <span className="text-blue-900 font-medium">GPT-4o</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Debug:</span>
                      <span className="text-blue-900 font-medium text-xs">Auth: {isAuthenticated ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>

                {/* Buy Credits Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-blue-700 mb-3">
                  <div className="flex items-center justify-center gap-2">
                    <span>💳</span>
                    <span>Buy Credits</span>
                  </div>
                </button>

                {/* Account Settings */}
                <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-blue-300">
                  <div className="flex items-center justify-center gap-2">
                    <span>⚙️</span>
                    <span>Account Settings</span>
                  </div>
                </button>
              </div>

              {/* Quick Topics */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-4 border-amber-600 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-amber-900 mb-4 font-serif text-center">🚀 Quick Topics</h3>
                <div className="space-y-3">
                  {getTopics().map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => handleTopicClick(topic.title)}
                      className="w-full text-left p-3 bg-white/70 hover:bg-white/90 border-2 border-amber-300 rounded-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{topic.icon}</span>
                        <div>
                          <div className="font-bold text-amber-900">{topic.title}</div>
                          <div className="text-sm text-amber-700">{topic.description}</div>
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

            {/* Main Chat Area */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-4 border-amber-600 rounded-xl shadow-2xl h-[600px] flex flex-col">
                
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">📚</span>
                      </div>
                      <div>
                        <p className="font-bold">AI Literary Tutor</p>
                        <p className="text-xs opacity-80">Powered by ChatGPT-4o via Echo</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {isLoading && (
                        <div className="flex items-center gap-2 text-sm">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>{languageMessages[language].thinking}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-amber-900 border-2 border-amber-300'
                        }`}
                      >
                        <p className="font-serif leading-relaxed">{message.content}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <div className="p-4 border-t-2 border-amber-300">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={languageMessages[language].placeholder}
                      className="flex-1 px-4 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:border-amber-600 font-serif"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-bold rounded-lg transition-colors font-serif"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>{languageMessages[language].thinking}</span>
                        </div>
                      ) : (
                        languageMessages[language].send
                      )}
                    </button>
                  </form>
                </div>

              </div>
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

  // Show sign-in interface if not authenticated
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">📚</span>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">AI Literary Tutor</h1>
          <p className="text-amber-200 mb-6">
            Your personal literature assistant powered by ChatGPT-4o via Echo
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="text-left text-amber-200 text-sm">
              <h3 className="font-semibold text-white mb-2">What you'll get:</h3>
              <ul className="space-y-1">
                <li>• Personalized reading comprehension help</li>
                <li>• Writing process guidance and feedback</li>
                <li>• Grammar and vocabulary building</li>
                <li>• Literature analysis support</li>
                <li>• Test preparation strategies</li>
                <li>• Support in English, Spanish, and Haitian Creole</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/20 rounded-lg p-4">
              <p className="text-white font-medium mb-3">Sign in to start learning:</p>
              <button
                onClick={handleSignIn}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>🔗</span>
                  <span>Sign in with Echo</span>
                </div>
              </button>
            </div>
            
            {/* Debug section - only show in development */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-black/20 border border-white/10 rounded-lg p-4 text-left">
                <h4 className="text-white font-medium mb-2">Debug Info:</h4>
                <div className="text-xs text-amber-300 space-y-1">
                  <p>Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
                  <p>User Email: {userEmail || 'None'}</p>
                  <p>Credits: {credits || 'None'}</p>
                  <p>App ID: {process.env.NEXT_PUBLIC_ECHO_APP_ID || 'Not set'}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-center text-amber-300 text-xs mt-4">
          Powered by Echo Authentication & ChatGPT-4o
        </p>
      </div>
    </div>
  )
} 