import { NextRequest, NextResponse } from 'next/server'

interface EchoRequest {
  message: string
  appId: string
  language: 'english' | 'spanish' | 'haitian'
  safetyContext: {
    violations: Array<{
      type: string
      count: number
      lastViolation: Date
    }>
    isEducational: boolean
  }
}

interface EchoResponse {
  response: string
  safety: {
    flagged: boolean
    reason?: string
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: EchoRequest = await request.json()
    const { message, appId, language, safetyContext } = body

    // Validate Echo App ID
    if (!appId || appId !== process.env.ECHO_APP_ID) {
      return NextResponse.json(
        { error: 'Invalid Echo App ID' },
        { status: 401 }
      )
    }

    // Enhanced safety check
    const safetyCheck = await performSafetyCheck(message, safetyContext)
    if (!safetyCheck.isSafe) {
      return NextResponse.json({
        response: getEducationalGuidance(safetyCheck.violationType || 'contentViolation', language),
        safety: {
          flagged: true,
          reason: safetyCheck.violationType
        }
      })
    }

    // Call Echo API (this would be the actual implementation)
    const echoResponse = await callEchoAPI(message, language, safetyContext)

    return NextResponse.json({
      response: echoResponse,
      safety: {
        flagged: false
      }
    })

  } catch (error) {
    console.error('Echo API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function performSafetyCheck(message: string, safetyContext: any) {
  const lowerMessage = message.toLowerCase()
  
  // Content filtering patterns
  const contentPatterns = {
    profanity: /(?:[a-z]+\s*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+\s*[a-z]+)|(?:[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+\s*[a-z]+\s*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+)/gi,
    hateSpeech: /(?:hate|discriminate|superior|inferior|racist|sexist|homophobic|transphobic|bigot)/gi,
    violence: /(?:kill|murder|suicide|bomb|shoot|attack|harm|hurt|violence|weapon)/gi,
    sexual: /(?:sexual|intimate|adult|mature|explicit|inappropriate)/gi,
    drugs: /(?:drug|alcohol|substance|illegal|dealer|addiction)/gi,
    personalInfo: /(?:ssn|social\s*security|credit\s*card|phone\s*number|address|email\s*address)/gi,
    spam: /(?:buy\s*now|click\s*here|limited\s*time|special\s*offer|free\s*money)/gi
  }

  // Academic integrity patterns
  const writingPatterns = [
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

  // Check for content violations
  for (const [type, pattern] of Object.entries(contentPatterns)) {
    if (pattern.test(lowerMessage)) {
      return { isSafe: false, violationType: type }
    }
  }

  // Check for writing requests
  for (const pattern of writingPatterns) {
    if (pattern.test(lowerMessage)) {
      return { isSafe: false, violationType: 'writingRequest' }
    }
  }

  // Check for proofreading requests
  for (const pattern of proofreadingPatterns) {
    if (pattern.test(lowerMessage)) {
      return { isSafe: false, violationType: 'proofreadingRequest' }
    }
  }

  // Check violation history
  if (safetyContext.violations.length > 5) {
    return { isSafe: false, violationType: 'excessiveViolations' }
  }

  return { isSafe: true }
}

function getEducationalGuidance(violationType: string, language: string): string {
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
    },
    excessiveViolations: {
      english: "I notice you've had several content violations. Let's focus on creating a positive learning environment. How can I help you with literature today?",
      spanish: "Noto que has tenido varias violaciones de contenido. Enfoquémonos en crear un entorno de aprendizaje positivo. ¿Cómo puedo ayudarte con la literatura hoy?",
      haitian: "Mwen remake ou te gen plizyè vyolasyon kontni. Ann konsantre sou kreye yon anviwònman aprantisaj pozitif. Kouman mwen ka ede w ak literati jounen an?"
    }
  }

  const violationGuidance = guidance[violationType as keyof typeof guidance]
  if (violationGuidance && language in violationGuidance) {
    return violationGuidance[language as keyof typeof violationGuidance]
  }
  return guidance.contentViolation[language as keyof typeof guidance.contentViolation]
}

async function callEchoAPI(message: string, language: string, safetyContext: any): Promise<string> {
  // This would be the actual Echo API implementation
  // For now, we'll provide educational responses based on the message content
  
  const lowerMessage = message.toLowerCase()
  
  // Educational response patterns
  if (lowerMessage.includes('reading comprehension')) {
    return "Reading comprehension is a crucial skill! Here are some effective strategies: 1) Preview the text by looking at headings and images, 2) Ask questions as you read, 3) Make connections to your own experiences, 4) Summarize what you've read in your own words, 5) Visualize the scenes and characters. What specific text are you working with?"
  }
  
  if (lowerMessage.includes('writing skills') || lowerMessage.includes('essay')) {
    return "Great question about writing! The key to strong writing is structure. Start with a clear thesis statement, organize your ideas into paragraphs with topic sentences, use evidence to support your points, and end with a conclusion that reinforces your main idea. What type of writing are you working on?"
  }
  
  if (lowerMessage.includes('grammar') || lowerMessage.includes('punctuation')) {
    return "Grammar and punctuation are the building blocks of clear communication! Some common areas to focus on: subject-verb agreement, proper comma usage, sentence structure, and avoiding run-on sentences. What specific grammar rule are you struggling with?"
  }
  
  if (lowerMessage.includes('vocabulary') || lowerMessage.includes('words')) {
    return "Building vocabulary is essential for strong reading and writing! Try these strategies: 1) Use context clues to understand new words, 2) Look up word origins and roots, 3) Create word associations, 4) Use new words in your own sentences, 5) Keep a vocabulary journal. What words are you trying to learn?"
  }
  
  if (lowerMessage.includes('literature') || lowerMessage.includes('analysis')) {
    return "Literary analysis involves examining how authors use language to create meaning! Look for: 1) Theme - the central message or idea, 2) Characterization - how characters are developed, 3) Setting - how time and place affect the story, 4) Symbolism - objects that represent deeper meanings, 5) Literary devices like metaphor, simile, and imagery. What work are you analyzing?"
  }
  
  // Default educational response
  return "I'm here to help you with your literary studies! I can assist with reading comprehension strategies, writing techniques, grammar rules, vocabulary building, and literary analysis. What specific aspect would you like to explore? Remember, I'm designed to guide your learning process, not to complete assignments for you."
} 