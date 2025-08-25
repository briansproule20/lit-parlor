'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({})
  const [showResults, setShowResults] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackData, setFeedbackData] = useState<{
    isCorrect: boolean;
    selectedAnswer: string;
    correctAnswer: string;
    explanation: string;
  } | null>(null)

  // Question bank with 20 questions
  const questionBank = [
    {
      question: "Who is the narrator of Moby Dick?",
      options: ["Captain Ahab", "Ishmael", "Queequeg", "Starbuck"],
      correct: 1,
      explanation: "Ishmael is the narrator who tells the story, famous for the opening line 'Call me Ishmael.'"
    },
    {
      question: "What is the name of Captain Ahab's ship?",
      options: ["The Rachel", "The Jeroboam", "The Pequod", "The Bachelor"],
      correct: 2,
      explanation: "The Pequod is Ahab's whaling ship, named after a Native American tribe."
    },
    {
      question: "What happened to Captain Ahab in his previous encounter with Moby Dick?",
      options: ["He lost his eye", "He lost his leg", "He lost his arm", "He nearly drowned"],
      correct: 1,
      explanation: "Moby Dick bit off Ahab's leg, leading to his obsession with revenge against the whale."
    },
    {
      question: "What does the white whale symbolize in the novel?",
      options: ["Good fortune", "The unknowable/nature's power", "Hope", "Wealth"],
      correct: 1,
      explanation: "Moby Dick represents the unknowable forces of nature and the limits of human understanding."
    },
    {
      question: "How does the novel end?",
      options: ["Ahab kills Moby Dick", "Everyone returns home safely", "The Pequod is destroyed", "Ahab gives up his quest"],
      correct: 2,
      explanation: "The novel ends with the destruction of the Pequod and all aboard except Ishmael, who survives to tell the tale."
    },
    {
      question: "What is the name of Ishmael's close friend and harpooner?",
      options: ["Starbuck", "Queequeg", "Stubb", "Flask"],
      correct: 1,
      explanation: "Queequeg is the Polynesian harpooner who becomes Ishmael's closest friend and roommate."
    },
    {
      question: "What is the significance of Queequeg's coffin?",
      options: ["It represents death", "It becomes Ishmael's life preserver", "It symbolizes wealth", "It shows Queequeg's status"],
      correct: 1,
      explanation: "Queequeg's coffin becomes Ishmael's life preserver, symbolizing the transformation of death into salvation."
    },
    {
      question: "What is the doubloon that Ahab nails to the mast?",
      options: ["A religious symbol", "A reward for sighting Moby Dick", "A navigation tool", "A decorative item"],
      correct: 1,
      explanation: "The doubloon is a gold coin that Ahab offers as a reward to whoever first sights the white whale."
    },
    {
      question: "What does the doubloon symbolize in the novel?",
      options: ["Wealth and greed", "Subjective interpretation", "Religious faith", "Navigation"],
      correct: 1,
      explanation: "Each character sees different meanings in the doubloon, demonstrating how symbols reflect the observer's inner nature."
    },
    {
      question: "What is the try-works episode about?",
      options: ["A religious ceremony", "Processing whale blubber", "A navigation lesson", "A fishing technique"],
      correct: 1,
      explanation: "The try-works episode describes the industrial process of rendering whale blubber into oil, representing the dehumanizing effects of labor."
    },
    {
      question: "What happens to Pip during the voyage?",
      options: ["He becomes captain", "He goes mad", "He finds treasure", "He gets married"],
      correct: 1,
      explanation: "Pip, the cabin boy, goes mad after being abandoned in the ocean, representing the human cost of the voyage."
    },
    {
      question: "What is the significance of the Rachel in the novel?",
      options: ["It's Ahab's first ship", "It represents compassion", "It's where Ishmael was born", "It's the fastest ship"],
      correct: 1,
      explanation: "The Rachel begs Ahab for help finding a lost son, but Ahab refuses, showing his complete moral decay."
    },
    {
      question: "What does Father Mapple's sermon foreshadow?",
      options: ["The crew's success", "The voyage's fate", "Ahab's victory", "The whale's capture"],
      correct: 1,
      explanation: "Father Mapple's sermon on Jonah serves as a prophetic warning about the voyage's dangerous fate."
    },
    {
      question: "What is the main theme of obsession and revenge in the novel?",
      options: ["Ahab's pursuit of wealth", "Ahab's pursuit of Moby Dick", "Ishmael's search for adventure", "Starbuck's religious faith"],
      correct: 1,
      explanation: "Ahab's monomaniacal pursuit of Moby Dick explores how obsession can consume and ultimately destroy a person."
    },
    {
      question: "What does the ocean symbolize in Moby Dick?",
      options: ["Wealth and prosperity", "Infinity and the unconscious mind", "Religious salvation", "Human civilization"],
      correct: 1,
      explanation: "The ocean represents infinity, the unconscious mind, life's mysteries, and nature's indifference to human concerns."
    },
    {
      question: "What is the significance of Ahab's ivory leg?",
      options: ["It shows his wealth", "It's made from whale bone", "It's a fashion statement", "It helps him walk faster"],
      correct: 1,
      explanation: "Made from whale bone, the leg represents Ahab's literal and metaphorical connection to his nemesis."
    },
    {
      question: "What does the whiteness of the whale represent?",
      options: ["Purity and innocence", "The unknowable mystery", "Good fortune", "Religious symbolism"],
      correct: 1,
      explanation: "The whiteness of the whale represents the fundamental mystery that remains beyond human understanding."
    },
    {
      question: "What is the significance of the compass in the novel?",
      options: ["It guides the ship", "Ahab destroys it", "It's a religious symbol", "It's made of gold"],
      correct: 1,
      explanation: "When Ahab destroys the compass, he symbolically abandons all moral restraint and spiritual guidance."
    },
    {
      question: "What does the friendship between Ishmael and Queequeg represent?",
      options: ["Cultural barriers", "The possibility of human connection", "Religious differences", "Social class"],
      correct: 1,
      explanation: "Their friendship represents the possibility of human connection across cultural and racial barriers."
    },
    {
      question: "What is the novel's approach to knowledge and ignorance?",
      options: ["It celebrates ignorance", "It explores the limits of human knowledge", "It promotes scientific discovery", "It rejects religion"],
      correct: 1,
      explanation: "The novel explores the limits of human knowledge and our relationship with the unknowable."
    },
    {
      question: "What does the Pequod symbolize in the novel?",
      options: ["Individual freedom", "Society and civilization", "Religious faith", "Scientific progress"],
      correct: 1,
      explanation: "The Pequod is a microcosm of society, doomed by its leader's obsession and representing collective fate."
    }
  ]

  // Randomly select 10 questions from the bank
  const [questions, setQuestions] = useState<typeof questionBank>([])

  // Initialize questions on client side only
  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window !== 'undefined') {
      const shuffled = [...questionBank].sort(() => Math.random() - 0.5)
      setQuestions(shuffled.slice(0, 10))
    }
  }, [])

  // Fallback: if questions still empty after a delay, use first 10
  useEffect(() => {
    const timer = setTimeout(() => {
      if (questions.length === 0) {
        setQuestions(questionBank.slice(0, 10))
      }
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [questions.length])

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }))
    
    // Check if answer is correct and show immediate feedback
    const currentQ = questions[currentQuestion]
    const isCorrect = answerIndex === currentQ.correct
    
    setFeedbackData({
      isCorrect,
      selectedAnswer: currentQ.options[answerIndex],
      correctAnswer: currentQ.options[currentQ.correct],
      explanation: currentQ.explanation
    })
    setShowFeedback(true)
  }

  const goToNextQuestion = () => {
    setShowFeedback(false)
    setFeedbackData(null)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  // Handle keyboard events
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (showFeedback && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault()
        goToNextQuestion()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [showFeedback, currentQuestion, questions.length])

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        correct++
      }
    })
    return correct
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setShowFeedback(false)
    setFeedbackData(null)
  }

  // Show loading state while questions are being initialized
  if (questions.length === 0) {
    return (
      <main className="min-h-screen py-8 px-4 relative" style={{
          backgroundImage: 'url(/images/ship-storm.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
        
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/mobydickmodule" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-semibold px-4 py-2 bg-amber-50/90 rounded-lg border border-amber-600 hover:bg-amber-100 transition-all"
          >
            ← Back to Pequod
          </Link>
        </div>
        
        {/* Loading State */}
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200">
            <div className="text-4xl mb-4">🎯</div>
            <h1 className="text-2xl font-bold text-amber-900 mb-2">Loading Quiz...</h1>
            <p className="text-amber-700">Preparing your questions...</p>
          </div>
        </div>
      </main>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const percentage = Math.round((score / questions.length) * 100)
    
    return (
      <main className="min-h-screen py-8 px-4 relative" style={{
          backgroundImage: 'url(/images/ship-storm.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
        
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/mobydickmodule" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-semibold px-4 py-2 bg-amber-50/90 rounded-lg border border-amber-600 hover:bg-amber-100 transition-all"
          >
            ← Back to Pequod
          </Link>
        </div>
        
        {/* Results */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200 text-center">
            <h1 className="text-3xl font-bold text-amber-900 mb-4">Quiz Complete!</h1>
            
            <div className="text-6xl mb-4">
              {percentage >= 80 ? '🏆' : percentage >= 60 ? '⚓' : '🌊'}
            </div>
            
            <div className="text-2xl font-semibold text-amber-900 mb-2">
              {score} out of {questions.length}
            </div>
            
            <div className="text-lg text-amber-700 mb-6">
              {percentage >= 80 ? 'Excellent! You truly understand the depths of Moby Dick!' :
               percentage >= 60 ? 'Good work! You have a solid grasp of the novel.' :
               'Keep studying! The whale still has more to teach you.'}
            </div>

            <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
              {questions.map((q, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-left text-sm">
                  <div className="font-medium text-gray-900 mb-1">
                    Q{index + 1}: {q.question}
                  </div>
                  <div className={`mb-1 ${selectedAnswers[index] === q.correct ? 'text-green-700' : 'text-red-700'}`}>
                    Your answer: {q.options[selectedAnswers[index] || 0]}
                    {selectedAnswers[index] === q.correct ? ' ✓' : ' ✗'}
                  </div>
                  {selectedAnswers[index] !== q.correct && (
                    <div className="text-green-700 text-xs">
                      Correct: {q.options[q.correct]}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={resetQuiz}
              className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
        backgroundImage: 'url(/images/ship-storm.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
      
      {/* Navigation */}
      <div className="mb-8">
        <Link 
          href="/mobydickmodule" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-semibold px-4 py-2 bg-amber-50/90 rounded-lg border border-amber-600 hover:bg-amber-100 transition-all"
        >
          ← Back to Pequod
        </Link>
      </div>
        
      {/* Quiz Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-amber-50/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-amber-600">
          <h1 className="text-4xl font-bold text-amber-900 mb-2 font-serif">
            Moby Dick Quiz
          </h1>
          <p className="text-amber-700 text-lg">
            Test your knowledge of the White Whale
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-amber-50/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-amber-600">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-amber-800">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-amber-600">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-amber-200 rounded-full h-2">
            <div 
              className="bg-amber-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quiz Question */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-amber-600">
          <h2 className="text-xl font-semibold text-amber-900 mb-6 leading-relaxed">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-3 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-md'
                    : 'border-amber-300 bg-white hover:border-amber-500 hover:bg-amber-50 text-gray-800'
                }`}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mr-4 border-2 border-amber-600">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </button>
            ))}
          </div>

          {/* Feedback Display */}
          {showFeedback && feedbackData && (
            <div className={`p-6 rounded-xl border-2 mb-6 ${
              feedbackData.isCorrect 
                ? 'border-green-300 bg-green-50' 
                : 'border-red-300 bg-red-50'
            }`}>
              <div className="text-center">
                <div className="text-3xl mb-3">
                  {feedbackData.isCorrect ? '✅' : '❌'}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  feedbackData.isCorrect ? 'text-green-800' : 'text-red-800'
                }`}>
                  {feedbackData.isCorrect ? 'Correct!' : 'Incorrect'}
                </h3>
                {!feedbackData.isCorrect && (
                  <div className="text-red-700 mb-3 text-sm">
                    <p>Your answer: <strong>{feedbackData.selectedAnswer}</strong></p>
                    <p>Correct answer: <strong>{feedbackData.correctAnswer}</strong></p>
                  </div>
                )}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feedbackData.explanation}
                </p>
                <button
                  onClick={goToNextQuestion}
                  className="mt-4 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
} 