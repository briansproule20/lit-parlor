'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function StudyGuide() {
  const [activeSection, setActiveSection] = useState<string>('overview')

  // Handle URL parameters for direct section navigation
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const section = urlParams.get('section')
      if (section && ['overview', 'characters', 'themes', 'symbols', 'quotes', 'analysis'].includes(section)) {
        setActiveSection(section)
      }
    }
  }, [])

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

      <div className="max-w-6xl mx-auto">
        
        {/* Study Guide Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 shadow-2xl transform relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-3xl" style={{
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
                📚 STUDY GUIDE
              </h1>
              <div className="w-full h-2 bg-amber-700 mb-4"></div>
              <p className="text-2xl text-amber-800 font-serif leading-relaxed">
                "It is not down on any map; true places never are."
              </p>
              <div className="mt-4 text-lg text-amber-700 font-serif italic">
                — Herman Melville
              </div>
            </div>
          </div>
        </div>

        {/* Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📖' },
            { id: 'characters', label: 'Characters', icon: '👥' },
            { id: 'themes', label: 'Themes', icon: '🌊' },
            { id: 'symbols', label: 'Symbols', icon: '🐋' },
            { id: 'quotes', label: 'Key Quotes', icon: '💬' },
            { id: 'analysis', label: 'Analysis', icon: '🔍' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-amber-50/90 text-amber-800 hover:bg-amber-100 hover:scale-105'
              }`}
            >
              {section.icon} {section.label}
            </button>
          ))}
        </div>

        {/* Study Content */}
        <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl">
          
          {activeSection === 'overview' && (
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">📖 Overview</h2>
              <div className="space-y-6 font-serif text-amber-800">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/70 p-6 rounded-lg border border-amber-300">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">📅 Publication Info</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Published:</strong> 1851</li>
                      <li><strong>Author:</strong> Herman Melville</li>
                      <li><strong>Genre:</strong> Adventure, Philosophical Fiction</li>
                      <li><strong>Length:</strong> ~800 pages, 135 chapters</li>
                    </ul>
                  </div>
                  <div className="bg-white/70 p-6 rounded-lg border border-amber-300">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">🎯 Key Elements</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Narrator:</strong> Ishmael (first person)</li>
                      <li><strong>Setting:</strong> 19th century whaling voyage</li>
                      <li><strong>Central Conflict:</strong> Ahab vs. Moby Dick</li>
                      <li><strong>Style:</strong> Epic, philosophical, encyclopedic</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">📋 Plot Summary</h3>
                  <p className="leading-relaxed">
                    Ishmael, seeking adventure and escape from depression, joins the crew of the whaling ship Pequod. 
                    The ship is commanded by the mysterious Captain Ahab, who is obsessed with hunting Moby Dick, 
                    the white whale that destroyed his leg in a previous encounter. What begins as a commercial whaling voyage 
                    becomes a dangerous quest for revenge that leads to the destruction of the ship and all but one of its crew.
                  </p>
                  <p className="leading-relaxed mt-4">
                    The novel follows Ishmael's journey from New Bedford to the Pacific Ocean, where the Pequod encounters 
                    various whaling ships and their captains. Along the way, Ishmael forms a deep friendship with Queequeg, 
                    a Polynesian harpooner, and witnesses the crew's growing unease as Ahab's obsession with the white whale 
                    becomes increasingly apparent. The narrative is interspersed with detailed chapters on whaling techniques, 
                    whale biology, and philosophical meditations on the nature of existence and humanity's relationship with the sea.
                  </p>
                  <p className="leading-relaxed mt-4">
                    As the voyage progresses, Ahab's monomaniacal pursuit of Moby Dick intensifies, leading to conflicts 
                    with his first mate Starbuck, who represents reason and morality. The crew becomes increasingly caught 
                    between their duty to follow their captain and their growing awareness of the dangerous path they're on. 
                    The novel builds toward an inevitable confrontation with the legendary white whale, exploring themes of 
                    fate, free will, and the limits of human ambition.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'characters' && (
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">👥 Character Analysis</h2>
              <div className="space-y-6">
                {[
                  {
                    name: 'Captain Ahab',
                    icon: '👨‍✈️',
                    role: 'Protagonist/Antagonist',
                    description: 'The monomaniacal captain whose obsession with Moby Dick drives the narrative. Represents the dangers of unchecked ambition and revenge.',
                    quote: '"To the last, I grapple with thee; From Hell\'s heart, I stab at thee; For hate\'s sake, I spit my last breath at thee."'
                  },
                  {
                    name: 'Ishmael',
                    icon: '📝',
                    role: 'Narrator',
                    description: 'Our storyteller and philosophical guide. A contemplative observer who provides both personal experience and universal insights.',
                    quote: '"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse..."'
                  },
                  {
                    name: 'Queequeg',
                    icon: '🗡️',
                    role: 'Harpooner',
                    description: 'A Polynesian prince and skilled harpooner who becomes Ishmael\'s closest friend, representing nobility and natural wisdom.',
                    quote: '"It\'s better to sleep with a sober cannibal than a drunken Christian."'
                  },
                  {
                    name: 'Starbuck',
                    icon: '⚖️',
                    role: 'First Mate',
                    description: 'The voice of reason and morality aboard the Pequod. Represents the conflict between duty and conscience.',
                    quote: '"I will have no man in my boat who is not afraid of a whale."'
                  }
                ].map((character, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg border border-amber-300">
                    <h3 className="text-xl font-bold text-amber-900 mb-2 flex items-center gap-2">
                      <span className="text-2xl">{character.icon}</span>
                      {character.name}
                      <span className="text-sm bg-amber-200 px-2 py-1 rounded">{character.role}</span>
                    </h3>
                    <p className="text-amber-700 mb-3">{character.description}</p>
                    <blockquote className="italic text-amber-600 border-l-4 border-amber-400 pl-4">
                      {character.quote}
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'themes' && (
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">🌊 Major Themes</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Obsession and Revenge',
                    icon: '⚔️',
                    description: 'Ahab\'s monomaniacal pursuit of Moby Dick explores how obsession can consume and ultimately destroy a person.',
                    examples: ['Ahab\'s leg loss and psychological wound', 'The doubloon as symbol of different obsessions', 'The crew\'s gradual entrapment in Ahab\'s quest']
                  },
                  {
                    title: 'Knowledge and Ignorance',
                    icon: '🔍',
                    description: 'The novel explores the limits of human knowledge and our relationship with the unknowable.',
                    examples: ['Cetology chapters showing scientific approach', 'The whiteness of the whale as unknowable mystery', 'Ishmael\'s philosophical meditations']
                  },
                  {
                    title: 'Nature vs. Humanity',
                    icon: '🌍',
                    description: 'The ocean represents nature\'s indifference to human concerns and ambitions.',
                    examples: ['The sea as both provider and destroyer', 'Whales as symbols of natural power', 'The Pequod\'s ultimate fate']
                  },
                  {
                    title: 'Fate vs. Free Will',
                    icon: '⚖️',
                    description: 'Characters struggle with whether they control their destiny or are subject to predetermined fate.',
                    examples: ['Ahab\'s belief in his destined confrontation', 'Ishmael\'s survival as chance or providence', 'The prophecies surrounding the voyage']
                  }
                ].map((theme, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg border border-amber-300">
                    <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">{theme.icon}</span>
                      {theme.title}
                    </h3>
                    <p className="text-amber-700 mb-4">{theme.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-amber-800">Key Examples:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-amber-600">
                        {theme.examples.map((example, i) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'symbols' && (
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">🐋 Key Symbols</h2>
              <div className="space-y-6">
                {[
                  {
                    symbol: 'The White Whale (Moby Dick)',
                    icon: '🐋',
                    meaning: 'The unknowable, nature\'s power, God, fate, or the limits of human understanding',
                    significance: 'Central to the entire narrative, representing whatever the observer projects onto it'
                  },
                  {
                    symbol: 'The Ocean',
                    icon: '🌊',
                    meaning: 'Infinity, the unconscious mind, life\'s mysteries, and nature\'s indifference',
                    significance: 'The setting that contains all other symbols and represents the vast unknown'
                  },
                  {
                    symbol: 'Queequeg\'s Coffin',
                    icon: '⚰️',
                    meaning: 'Death and rebirth, the transformation of doom into salvation',
                    significance: 'Becomes Ishmael\'s life preserver, showing how death can become life'
                  },
                  {
                    symbol: 'The Doubloon',
                    icon: '🪙',
                    meaning: 'Subjective interpretation, how each person sees what they want to see',
                    significance: 'Each character sees different meanings in the same object'
                  },
                  {
                    symbol: 'The Pequod',
                    icon: '⚓',
                    meaning: 'Society, civilization, humanity\'s collective fate',
                    significance: 'A microcosm of the world, doomed by its leader\'s obsession'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg border border-amber-300">
                    <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      {item.symbol}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-amber-800">Symbolic Meaning:</span>
                        <p className="text-amber-700">{item.meaning}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-amber-800">Significance:</span>
                        <p className="text-amber-700">{item.significance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'quotes' && (
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">💬 Essential Quotes</h2>
              <div className="space-y-6">
                {[
                  {
                    quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
                    speaker: "Ishmael",
                    context: "Opening lines",
                    analysis: "Establishes the narrator and his motivation for going to sea, setting the tone for the entire narrative."
                  },
                  {
                    quote: "To the last, I grapple with thee; From Hell's heart, I stab at thee; For hate's sake, I spit my last breath at thee.",
                    speaker: "Captain Ahab",
                    context: "Final confrontation with Moby Dick",
                    analysis: "Epitomizes Ahab's obsession and the destructive power of revenge, echoing Milton's Satan."
                  },
                  {
                    quote: "Talk not to me of blasphemy, man; I'd strike the sun if it insulted me. For could the sun do that, then could I do the other; since there is ever a sort of fair play herein, jealousy presiding over all creations.",
                    speaker: "Captain Ahab",
                    context: "Ahab's monomaniacal declaration to Starbuck",
                    analysis: "Demonstrates Ahab's hubris and his willingness to challenge even the divine, showing his complete moral corruption and his belief in cosmic justice."
                  },
                  {
                    quote: "The sea had jeeringly kept his finite body up, but drowned the infinite of his soul.",
                    speaker: "Ishmael",
                    context: "Reflecting on fate and survival",
                    analysis: "Explores the paradox of physical survival versus spiritual destruction."
                  },
                  {
                    quote: "It is not down on any map; true places never are.",
                    speaker: "Ishmael",
                    context: "About the Pequod's route",
                    analysis: "Suggests that the most important experiences transcend physical geography."
                  },
                  {
                    quote: "And I only am escaped alone to tell thee.",
                    speaker: "Ishmael",
                    context: "Final line of the novel",
                    analysis: "Echoes the biblical Book of Job, emphasizing Ishmael's role as the sole survivor and storyteller, completing the epic journey."
                  },
                  {
                    quote: "Whosoever of ye raises me a white-headed whale with a wrinkled brow and a crooked jaw; whosoever of ye raises me that white-headed whale, with three holes punctured in his starboard fluke—look ye, whosoever of ye raises me that same white whale, he shall have this gold ounce, my boys!",
                    speaker: "Captain Ahab",
                    context: "The doubloon speech",
                    analysis: "The doubloon becomes a powerful symbol of subjectivity and interpretation, as each crew member sees different meanings in the same object."
                  },
                  {
                    quote: "[T]hen all collapsed, and the great shroud of the sea rolled on as it rolled five thousand years ago.",
                    speaker: "Ishmael",
                    context: "Final moments of the Pequod's destruction",
                    analysis: "Emphasizes nature's indifference to human tragedy and the timeless, cyclical nature of the sea, putting human drama in cosmic perspective."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg border border-amber-300">
                    <blockquote className="text-lg italic text-amber-800 mb-4 border-l-4 border-amber-400 pl-4">
                      "{item.quote}"
                    </blockquote>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-semibold">Speaker:</span> {item.speaker}</div>
                      <div><span className="font-semibold">Context:</span> {item.context}</div>
                      <div><span className="font-semibold">Analysis:</span> {item.analysis}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'analysis' && (
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">🔍 Critical Analysis</h2>
              <div className="space-y-6">
                
                <div className="bg-white/70 p-6 rounded-lg border border-amber-300">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">📚 Literary Significance</h3>
                  <ul className="space-y-2 text-amber-700">
                    <li>• Often considered the greatest American novel</li>
                    <li>• Pioneered the "encyclopedic novel" form</li>
                    <li>• Influenced modern stream-of-consciousness writing</li>
                    <li>• Elevated adventure fiction to philosophical literature</li>
                  </ul>
                </div>

                <div className="bg-white/70 p-6 rounded-lg border border-amber-300">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">🎭 Narrative Techniques</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Multiple Perspectives:</span>
                      <p className="text-amber-700">Shifts between Ishmael's first-person narrative and omniscient third-person</p>
                    </div>
                    <div>
                      <span className="font-semibold">Genre Mixing:</span>
                      <p className="text-amber-700">Combines adventure story, philosophical treatise, scientific manual, and dramatic soliloquies</p>
                    </div>
                    <div>
                      <span className="font-semibold">Symbolism:</span>
                      <p className="text-amber-700">Dense symbolic structure where every element carries multiple meanings</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 p-6 rounded-lg border border-amber-300">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">📝 Varied Syntax & Style</h3>
                  <p className="text-amber-700 mb-4">
                    Melville's language encompasses nautical, biblical, Homeric, Shakespearean, Miltonic, and cetological elements. 
                    His deliberate shifts in language and style create a richly layered and immersive reading experience, enhancing 
                    the novel's themes of adventure, the natural world, and the complexities of human nature.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-400">
                      <blockquote className="italic text-amber-800 mb-2">
                        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, 
                        and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world."
                      </blockquote>
                      <p className="text-sm text-amber-600">— Sophisticated, philosophical opening with classical cadence</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-400">
                      <blockquote className="italic text-amber-800 mb-2">
                        "Aye, aye! and I'll chase him round Good Hope, and round the Horn, and round the Norway Maelstrom, 
                        and round perdition's flames before I give him up!"
                      </blockquote>
                      <p className="text-sm text-amber-600">— Nautical jargon mixed with epic, Miltonic grandeur</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-400">
                      <blockquote className="italic text-amber-800 mb-2">
                        "The whiteness of the whale is that which most appals me. But how can I hope to explain myself here; 
                        and yet, in some dim, random way, explain myself I must, else all these chapters might be naught."
                      </blockquote>
                      <p className="text-sm text-amber-600">— Elevated, scholarly discourse with complex syntax and formal diction</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-400">
                      <blockquote className="italic text-amber-800 mb-2">
                        "The sperm whale, as with all other species of the Leviathan, is an hermaphrodite; but this is a mere 
                        piece of courtesy on his part, a sort of acknowledgment of the supremacy of the human male."
                      </blockquote>
                      <p className="text-sm text-amber-600">— Scientific cetological language with technical classification and biological detail</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">🎯 Study Questions</h3>
                  <ol className="space-y-2 text-blue-700">
                    <li>1. How does Ishmael's role as narrator affect our understanding of events?</li>
                    <li>2. What does the white whale represent to different characters?</li>
                    <li>3. How does Melville use the ship as a microcosm of society?</li>
                    <li>4. What is the significance of the novel's encyclopedic chapters on whales?</li>
                    <li>5. How do the themes of fate and free will intersect in the story?</li>
                  </ol>
                </div>

                <div className="text-center">
                  <Link 
                    href="/mobydickmodule/quiz"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    🎯 Test Your Knowledge
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  )
} 