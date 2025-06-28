'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
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
    }
  ]

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }))
  }

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

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
        <div className="flex justify-between items-start mb-8">
          <Link 
            href="/mobydickmodule" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            ⚓ Return to Pequod
          </Link>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🏠 Return to Parlor
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl text-center">
            <h1 className="text-4xl font-bold text-amber-900 mb-6 font-serif">🎯 Quiz Results</h1>
            
            <div className="text-6xl mb-6">
              {percentage >= 80 ? '🏆' : percentage >= 60 ? '⚓' : '🌊'}
            </div>
            
            <div className="text-3xl font-bold text-amber-900 mb-4">
              You scored {score} out of {questions.length}
            </div>
            
            <div className="text-xl text-amber-700 mb-8">
              {percentage >= 80 ? 'Excellent! You truly understand the depths of Moby Dick!' :
               percentage >= 60 ? 'Good work! You have a solid grasp of the novel.' :
               'Keep studying! The whale still has more to teach you.'}
            </div>

            <div className="space-y-4 mb-8">
              {questions.map((q, index) => (
                <div key={index} className="bg-white/70 p-4 rounded-lg border border-amber-300 text-left">
                  <div className="font-bold text-amber-900 mb-2">
                    Question {index + 1}: {q.question}
                  </div>
                  <div className={`mb-2 ${selectedAnswers[index] === q.correct ? 'text-green-700' : 'text-red-700'}`}>
                    Your answer: {q.options[selectedAnswers[index] || 0]}
                    {selectedAnswers[index] === q.correct ? ' ✓' : ' ✗'}
                  </div>
                  {selectedAnswers[index] !== q.correct && (
                    <div className="text-green-700 mb-2">
                      Correct answer: {q.options[q.correct]}
                    </div>
                  )}
                  <div className="text-sm text-amber-600">
                    {q.explanation}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={resetQuiz}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                🔄 Take Quiz Again
              </button>
              <Link 
                href="/mobydickmodule/study-guide"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                📚 Study More
              </Link>
            </div>
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
      <div className="flex justify-between items-start mb-8">
        <Link 
          href="/mobydickmodule" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
        >
          ⚓ Return to Pequod
        </Link>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
        >
          🏠 Return to Parlor
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* Quiz Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 shadow-2xl transform -rotate-1 relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:-rotate-2" style={{
            border: '4px solid #8B4513',
            borderRadius: '12px',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.5),
              inset 0 4px 8px rgba(255, 255, 255, 0.3),
              inset 0 -4px 8px rgba(139, 69, 19, 0.6)
            `
          }}>
            {/* Parchment background */}
            <div className="absolute inset-0" style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 70%),
                radial-gradient(circle at 70% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 70%),
                radial-gradient(circle at 20% 70%, rgba(238, 203, 161, 0.8) 0%, transparent 60%),
                linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 25%, #DEB887 50%, #F5DEB3 75%, #FEFBF0 100%)
              `
            }}></div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '0.05em'
              }}>
                🎯 QUICK QUIZ
              </h1>
              <div className="w-full h-2 bg-amber-700 mb-4"></div>
              <p className="text-2xl text-amber-800 font-serif leading-relaxed">
                Test your knowledge of the White Whale
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-amber-200 rounded-full h-4 shadow-inner">
            <div 
              className="bg-amber-600 h-4 rounded-full transition-all duration-300 shadow-lg"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-center mt-2 text-amber-800 font-bold">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        {/* Quiz Question */}
        <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 font-serif">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 font-serif ${
                  selectedAnswers[currentQuestion] === index
                    ? 'bg-amber-200 border-amber-600 shadow-lg scale-105'
                    : 'bg-white/70 border-amber-300 hover:bg-amber-100 hover:border-amber-500 hover:scale-102'
                }`}
              >
                <span className="font-bold text-amber-900 mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="text-amber-800">{option}</span>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={goToNextQuestion}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className={`py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 ${
                selectedAnswers[currentQuestion] !== undefined
                  ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:scale-105 cursor-pointer'
                  : 'bg-gray-400 text-gray-600 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? '📊 See Results' : '➡️ Next Question'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
} 