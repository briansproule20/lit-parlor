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
      if (section && ['overview', 'characters', 'themes', 'symbols', 'quotes', 'analysis', 'questions'].includes(section)) {
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
            { id: 'analysis', label: 'Analysis', icon: '🔍' },
            { id: 'questions', label: 'Study Questions', icon: '🎯' }
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
                    description: 'The monomaniacal captain whose obsession with Moby Dick drives the narrative. A complex figure who transforms from a respected whaling captain into a figure of mythic proportions, willing to sacrifice everything—including his crew—for revenge. His ivory leg, made from whale bone, symbolizes his literal and metaphorical connection to his nemesis.',
                    quote: '"Talk not to me of blasphemy, man; I\'d strike the sun if it insulted me. For could the sun do that, then could I do the other; since there is ever a sort of fair play herein, jealousy presiding over all creations."'
                  },
                  {
                    name: 'Ishmael',
                    icon: '📝',
                    role: 'Narrator & Survivor',
                    description: 'Our philosophical storyteller and the novel\'s sole survivor. A contemplative observer who provides both personal experience and universal insights. His name, meaning "God hears," suggests his role as a witness and storyteller. Ishmael represents the everyman who seeks adventure but becomes a chronicler of human folly and the sea\'s indifference.',
                    quote: '"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world."'
                  },
                  {
                    name: 'Queequeg',
                    icon: '🗡️',
                    role: 'Harpooner & Prince',
                    description: 'A Polynesian prince and skilled harpooner who becomes Ishmael\'s closest friend. His character challenges cultural prejudices and represents natural nobility and wisdom. Queequeg\'s coffin, which later becomes Ishmael\'s life preserver, symbolizes the transformation of death into salvation and the enduring power of friendship.',
                    quote: '"It\'s better to sleep with a sober cannibal than a drunken Christian."'
                  },
                  {
                    name: 'Starbuck',
                    icon: '⚖️',
                    role: 'First Mate',
                    description: 'The voice of reason and morality aboard the Pequod. A devout Quaker who represents the conflict between duty and conscience. Starbuck\'s attempts to reason with Ahab and his growing awareness of the voyage\'s danger make him the novel\'s moral center, though ultimately powerless against Ahab\'s obsession.',
                    quote: '"Vengeance on a dumb brute! cried Starbuck, that simply smote thee from blindest instinct! Madness! To be enraged with a dumb thing, Captain Ahab, seems blasphemous."'
                  },
                  {
                    name: 'Stubb',
                    icon: '🎭',
                    role: 'Second Mate',
                    description: 'The jovial second mate who represents the crew\'s acceptance of their fate. Unlike Starbuck, Stubb doesn\'t question Ahab\'s decisions and maintains a carefree attitude even in dangerous situations. His character shows how people can become complicit in destructive behavior through passivity and humor.',
                    quote: '"I don\'t know exactly what\'s the matter with me, but I feel kind of funny; do you know what I mean?"'
                  },
                  {
                    name: 'Flask',
                    icon: '⚡',
                    role: 'Third Mate',
                    description: 'The aggressive third mate who compensates for his small stature with fierce determination. Flask represents the crew\'s transformation under Ahab\'s influence, becoming increasingly reckless and bloodthirsty. His character shows how the captain\'s obsession spreads to the entire crew.',
                    quote: '"I don\'t care who it is that has the other end of this line. But there now ain\'t any other way, and so I tell ye what."'
                  },
                  {
                    name: 'Pip',
                    icon: '🎪',
                    role: 'Cabin Boy',
                    description: 'The young African American cabin boy who goes mad after being abandoned in the ocean. Pip\'s descent into madness and his prophetic ramblings make him a figure of both tragedy and wisdom. His character represents the human cost of the voyage and the thin line between sanity and madness.',
                    quote: '"They have let me see the world, and I have seen the world."'
                  },
                  {
                    name: 'Father Mapple',
                    icon: '⛪',
                    role: 'Preacher',
                    description: 'The whaleman\'s chapel preacher whose sermon on Jonah foreshadows the voyage\'s fate. His powerful oratory and biblical knowledge establish the novel\'s religious and moral framework. Father Mapple represents the voice of divine warning that goes unheeded.',
                    quote: '"Shipmates, God has laid but one hand upon you; both his hands press upon me. I have read ye by what murky light may be mine the lesson that Jonah teaches to all sinful men."'
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
                    description: 'Ahab\'s monomaniacal pursuit of Moby Dick explores how obsession can consume and ultimately destroy a person. The novel examines the psychological and moral consequences of unchecked ambition and the human capacity for self-destruction.',
                    analysis: 'Melville presents obsession as a form of madness that transforms Ahab from a respected captain into a figure of mythic proportions. The novel suggests that revenge, while initially justified, becomes a destructive force that corrupts both the individual and those around them. Ahab\'s transformation represents the danger of allowing personal vendettas to override moral judgment and human compassion.',
                    examples: ['Ahab\'s leg loss and psychological wound', 'The doubloon as symbol of different obsessions', 'The crew\'s gradual entrapment in Ahab\'s quest', 'Ahab\'s rejection of Starbuck\'s moral objections'],
                    quote: '"Talk not to me of blasphemy, man; I\'d strike the sun if it insulted me."',
                    context: 'This theme reaches its climax in the final chase, where Ahab\'s obsession leads to the destruction of the entire crew except Ishmael.'
                  },
                  {
                    title: 'Knowledge and Ignorance',
                    icon: '🔍',
                    description: 'The novel explores the limits of human knowledge and our relationship with the unknowable. Melville questions whether true understanding is possible and how humans cope with the mysteries of existence.',
                    analysis: 'Melville uses the encyclopedic structure of the novel to demonstrate both the human desire for comprehensive knowledge and its ultimate impossibility. The cetology chapters represent our scientific attempts to understand nature, while the "Whiteness of the Whale" chapter acknowledges the fundamental mystery that remains. The novel suggests that true wisdom lies in accepting the limits of human understanding.',
                    examples: ['Cetology chapters showing scientific approach', 'The whiteness of the whale as unknowable mystery', 'Ishmael\'s philosophical meditations', 'The novel\'s encyclopedic structure'],
                    quote: '"It is not down on any map; true places never are."',
                    context: 'The novel\'s structure itself reflects this theme, with its digressions and philosophical interludes interrupting the main narrative.'
                  },
                  {
                    title: 'Nature vs. Humanity',
                    icon: '🌍',
                    description: 'The ocean represents nature\'s indifference to human concerns and ambitions. The novel examines humanity\'s complex relationship with the natural world and our attempts to control what we cannot.',
                    analysis: 'The sea functions as both setting and character, representing nature\'s sublime power and complete indifference to human drama. Melville contrasts humanity\'s attempts to master nature through technology (the whaling industry) with nature\'s ultimate supremacy. The novel suggests that human attempts to control nature are both hubristic and doomed to failure.',
                    examples: ['The sea as both provider and destroyer', 'Whales as symbols of natural power', 'The Pequod\'s ultimate fate', 'The crew\'s vulnerability to natural forces'],
                    quote: '"The great shroud of the sea rolled on as it rolled five thousand years ago."',
                    context: 'This theme is central to the novel\'s environmental and philosophical concerns, particularly relevant to modern discussions of humanity\'s relationship with nature.'
                  },
                  {
                    title: 'Fate vs. Free Will',
                    icon: '⚖️',
                    description: 'Characters struggle with whether they control their destiny or are subject to predetermined fate. The novel explores the tension between human agency and cosmic forces beyond our control.',
                    analysis: 'Melville presents a complex view of fate and free will, where characters make choices but within constraints they cannot control. Ahab believes in his own agency while being driven by forces he doesn\'t understand. The novel suggests that while humans have some agency, they are ultimately subject to larger cosmic and natural forces.',
                    examples: ['Ahab\'s belief in his destined confrontation', 'Ishmael\'s survival as chance or providence', 'The prophecies surrounding the voyage', 'The crew\'s acceptance of their fate'],
                    quote: '"I am the Fates\' lieutenant; I act under orders."',
                    context: 'The novel\'s ending, with Ishmael as the sole survivor, raises questions about whether his survival was chance, providence, or fate.'
                  },
                  {
                    title: 'Friendship and Brotherhood',
                    icon: '🤝',
                    description: 'The relationship between Ishmael and Queequeg represents the possibility of human connection across cultural and racial barriers. Their friendship provides emotional grounding in a world of isolation.',
                    analysis: 'The friendship between Ishmael and Queequeg represents one of the novel\'s most positive themes. Their bond transcends cultural differences and provides a model of human connection in an otherwise isolating world. The coffin that saves Ishmael\'s life symbolizes the enduring power of their friendship. This theme contrasts sharply with Ahab\'s isolation and the crew\'s eventual fate.',
                    examples: ['Ishmael and Queequeg\'s bond', 'The coffin as symbol of enduring friendship', 'The crew\'s camaraderie', 'The contrast with Ahab\'s isolation'],
                    quote: '"It\'s better to sleep with a sober cannibal than a drunken Christian."',
                    context: 'This theme is particularly significant given the novel\'s publication in 1851, when racial and cultural barriers were even more pronounced in American society.'
                  },
                  {
                    title: 'Religion and Spirituality',
                    icon: '⛪',
                    description: 'The novel engages deeply with religious themes, biblical allusions, and spiritual questions. It examines the role of faith, divine justice, and human attempts to understand the divine.',
                    analysis: 'Melville uses extensive biblical allusions, particularly from the Book of Job and the story of Jonah, to explore questions of divine justice and human suffering. Father Mapple\'s sermon serves as a prophetic warning, while Ahab\'s defiance represents human rebellion against divine authority. The novel questions whether suffering has meaning and whether divine justice exists.',
                    examples: ['Father Mapple\'s Jonah sermon', 'Biblical references throughout', 'Ahab\'s blasphemous defiance', 'Ishmael\'s spiritual journey'],
                    quote: '"Shipmates, God has laid but one hand upon you; both his hands press upon me."',
                    context: 'The novel\'s religious themes reflect Melville\'s own spiritual struggles and the broader religious questions of 19th-century America.'
                  },
                  {
                    title: 'Industrialization and Labor',
                    icon: '🏭',
                    description: 'The whaling industry represents the dehumanizing effects of industrial labor and the psychological toll of repetitive, dangerous work. The novel critiques the human cost of progress.',
                    analysis: 'Melville presents whaling as an early form of industrial labor that transforms humans into tools of production. The try-works episode particularly illustrates the psychological effects of industrial work, where workers become alienated from their labor and their humanity. The novel critiques the commodification of nature and the human cost of industrial progress.',
                    examples: ['The try-works episode', 'The industrial process of whaling', 'The crew\'s transformation into tools', 'The commodification of nature'],
                    quote: '"The whiteness of the whale is that which most appals me."',
                    context: 'This theme anticipates later critiques of industrial capitalism and environmental exploitation.'
                  },
                  {
                    title: 'Isolation and Community',
                    icon: '🏝️',
                    description: 'The novel explores the tension between individual isolation and the need for human community. Characters struggle with loneliness while being part of a collective enterprise.',
                    analysis: 'The Pequod functions as a microcosm of society, where individuals must balance their personal needs with collective responsibilities. Ahab\'s isolation represents the danger of complete individualism, while the crew\'s fate shows how individual actions affect the entire community. The novel suggests that true human fulfillment requires both individual autonomy and community connection.',
                    examples: ['Ahab\'s psychological isolation', 'Ishmael\'s search for connection', 'The crew as floating society', 'The individual vs. collective fate'],
                    quote: '"I only am escaped alone to tell thee."',
                    context: 'Ishmael\'s survival emphasizes both his individual fate and his role as the community\'s storyteller.'
                  }
                ].map((theme, index) => (
                  <div key={index} className="bg-white/70 p-6 rounded-lg border border-amber-300">
                    <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">{theme.icon}</span>
                      {theme.title}
                    </h3>
                    <p className="text-amber-700 mb-4 leading-relaxed">{theme.description}</p>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
                      <h4 className="font-bold text-amber-800 mb-2">📖 Deep Analysis</h4>
                      <p className="text-amber-700 leading-relaxed">{theme.analysis}</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-amber-800 mb-2">🔑 Key Examples:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-amber-600">
                          {theme.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                        <blockquote className="italic text-amber-800 mb-1">
                          {theme.quote}
                        </blockquote>
                        <p className="text-xs text-amber-600">— Representative quote</p>
                      </div>
                      <div className="text-sm text-amber-600">
                        <span className="font-semibold">Context:</span> {theme.context}
                      </div>
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
                    significance: 'Central to the entire narrative, representing whatever the observer projects onto it. The whale\'s whiteness symbolizes both purity and the blank canvas of interpretation. To Ahab, it represents malice; to Ishmael, mystery; to others, profit or adventure.',
                    examples: ['Ahab\'s monomaniacal pursuit', 'The "Whiteness of the Whale" chapter', 'Ishmael\'s philosophical meditations']
                  },
                  {
                    symbol: 'The Ocean',
                    icon: '🌊',
                    meaning: 'Infinity, the unconscious mind, life\'s mysteries, and nature\'s indifference',
                    significance: 'The setting that contains all other symbols and represents the vast unknown. The sea is both provider and destroyer, reflecting humanity\'s complex relationship with nature and the limits of human control.',
                    examples: ['The sea\'s timeless indifference', 'The ocean as both life-giver and death-dealer', 'The vastness that dwarfs human concerns']
                  },
                  {
                    symbol: 'Queequeg\'s Coffin',
                    icon: '⚰️',
                    meaning: 'Death and rebirth, the transformation of doom into salvation',
                    significance: 'Becomes Ishmael\'s life preserver, showing how death can become life. The coffin represents the enduring power of friendship and the possibility of transcendence through human connection.',
                    examples: ['Queequeg\'s illness and recovery', 'The coffin\'s transformation to life-buoy', 'Ishmael\'s survival on the coffin']
                  },
                  {
                    symbol: 'The Doubloon',
                    icon: '🪙',
                    meaning: 'Subjective interpretation, how each person sees what they want to see',
                    significance: 'Each character sees different meanings in the same object, demonstrating how symbols reflect the observer\'s inner nature and desires. The doubloon becomes a mirror of human psychology.',
                    examples: ['Ahab sees his own face in the coin', 'Starbuck sees religious symbols', 'Stubb sees the zodiac']
                  },
                  {
                    symbol: 'The Pequod',
                    icon: '⚓',
                    meaning: 'Society, civilization, humanity\'s collective fate',
                    significance: 'A microcosm of the world, doomed by its leader\'s obsession. The ship represents how individual madness can corrupt an entire community and lead to collective destruction.',
                    examples: ['The crew\'s gradual entrapment', 'The ship as floating society', 'The Pequod\'s final destruction']
                  },
                  {
                    symbol: 'Ahab\'s Ivory Leg',
                    icon: '🦴',
                    meaning: 'The literal and metaphorical connection to his nemesis',
                    significance: 'Made from whale bone, the leg represents Ahab\'s physical and spiritual wound. It symbolizes his complete identification with his quest for revenge and his transformation into something less than human.',
                    examples: ['The leg\'s creation from whale bone', 'Ahab\'s pain and limping', 'The leg as weapon and wound']
                  },
                  {
                    symbol: 'The Try-Works',
                    icon: '🔥',
                    meaning: 'Industrialization, madness, and the dehumanizing effects of labor',
                    significance: 'The blubber furnace represents the psychological toll of industrial work and the fire of obsession that consumes the crew. It becomes a metaphor for the destructive power of human ambition.',
                    examples: ['Ishmael\'s night shift hallucinations', 'The fire as metaphor for obsession', 'The industrial process of whaling']
                  },
                  {
                    symbol: 'The Whaleman\'s Chapel',
                    icon: '⛪',
                    meaning: 'Religion, morality, and divine warning',
                    significance: 'The chapel represents the moral and spiritual framework that the voyage will test and ultimately reject. Father Mapple\'s sermon serves as a prophetic warning that goes unheeded.',
                    examples: ['Father Mapple\'s Jonah sermon', 'The chapel\'s maritime decorations', 'The religious framework of the voyage']
                  },
                  {
                    symbol: 'The Compass',
                    icon: '🧭',
                    meaning: 'Moral direction, spiritual guidance, and the loss of bearings',
                    significance: 'The compass represents moral and spiritual direction. When Ahab destroys the compass, he symbolically abandons all moral restraint and spiritual guidance.',
                    examples: ['Ahab\'s destruction of the compass', 'The crew\'s loss of moral direction', 'The compass as spiritual metaphor']
                  },
                  {
                    symbol: 'The Rachel',
                    icon: '🚢',
                    meaning: 'Compassion, human connection, and missed opportunities for redemption',
                    significance: 'The ship that begs Ahab for help finding a lost son represents the human cost of obsession. Ahab\'s refusal shows his complete moral decay and abandonment of basic human compassion.',
                    examples: ['Captain Gardiner\'s plea for help', 'Ahab\'s heartless refusal', 'The Rachel\'s rescue of Ishmael']
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
                      {item.examples && (
                        <div>
                          <span className="font-semibold text-amber-800">Key Examples:</span>
                          <ul className="list-disc list-inside space-y-1 text-sm text-amber-600 mt-2">
                            {item.examples.map((example, i) => (
                              <li key={i}>{example}</li>
                            ))}
                          </ul>
                        </div>
                      )}
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
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">🏆 Critical Reception</h4>
                      <ul className="space-y-2 text-amber-700">
                        <li>• Often considered the greatest American novel and a masterpiece of world literature</li>
                        <li>• Initially misunderstood and commercially unsuccessful, now universally acclaimed</li>
                        <li>• Influenced generations of writers including Faulkner, Hemingway, and Joyce</li>
                        <li>• Established Melville as a major figure in American literary canon</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">📖 Literary Innovation</h4>
                      <ul className="space-y-2 text-amber-700">
                        <li>• Pioneered the "encyclopedic novel" form that combines multiple genres and styles</li>
                        <li>• Broke traditional narrative conventions with its experimental structure</li>
                        <li>• Elevated adventure fiction to philosophical and psychological literature</li>
                        <li>• Created a new model for the American epic novel</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">🌊 Cultural Impact</h4>
                      <ul className="space-y-2 text-amber-700">
                        <li>• Shaped American literature's engagement with nature and the sublime</li>
                        <li>• Influenced modern stream-of-consciousness and experimental writing</li>
                        <li>• Established themes of obsession, revenge, and human vs. nature in American fiction</li>
                        <li>• Continues to inspire contemporary literature and popular culture</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 p-6 rounded-lg border border-amber-300">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">🎭 Narrative Techniques</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-amber-800 mb-3">📝 Narrative Structure</h4>
                      <div className="space-y-4">
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-bold text-amber-900 mb-2">Multiple Perspectives</h5>
                          <p className="text-amber-700 leading-relaxed">Melville shifts between Ishmael's first-person narrative and omniscient third-person. This creates both intimate personal connection and epic scope.</p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-bold text-amber-900 mb-2">Frame Narrative</h5>
                          <p className="text-amber-700 leading-relaxed">Ishmael tells the story after the events occur. This allows for philosophical commentary and dramatic irony throughout.</p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-bold text-amber-900 mb-2">Interrupted Narrative</h5>
                          <p className="text-amber-700 leading-relaxed">The story frequently digresses into whale biology, philosophy, and other topics. This creates a complex, layered reading experience.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-amber-800 mb-3">🎨 Genre Innovation</h4>
                      <div className="space-y-4">
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-bold text-amber-900 mb-2">Encyclopedic Form</h5>
                          <p className="text-amber-700 leading-relaxed">Melville combines adventure story, philosophical treatise, scientific manual, dramatic soliloquies, and biblical allegory into one work.</p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-bold text-amber-900 mb-2">Epic Elements</h5>
                          <p className="text-amber-700 leading-relaxed">The novel incorporates Homeric and Miltonic influences, elevating the whaling story to mythic proportions.</p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-bold text-amber-900 mb-2">Dramatic Structure</h5>
                          <p className="text-amber-700 leading-relaxed">Melville uses soliloquies, dramatic confrontations, and theatrical dialogue to heighten emotional impact.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-amber-800 mb-3">🔍 Literary Devices</h4>
                      <div className="space-y-4">
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-bold text-amber-900 mb-2">Dense Symbolism</h5>
                          <p className="text-amber-700 leading-relaxed">Every element carries multiple meanings, creating a rich symbolic network that rewards close reading.</p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-bold text-amber-900 mb-2">Biblical Allusion</h5>
                          <p className="text-amber-700 leading-relaxed">Extensive use of biblical references and parallels, particularly from Job, Jonah, and Genesis.</p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-bold text-amber-900 mb-2">Foreshadowing</h5>
                          <p className="text-amber-700 leading-relaxed">Prophetic warnings and omens throughout create a sense of inevitable doom.</p>
                        </div>
                      </div>
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

              </div>
            </div>
          )}

          {activeSection === 'questions' && (
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">🎯 Study Questions</h2>
              <div className="space-y-6">
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">📝 Critical Thinking Questions</h3>
                  <ol className="space-y-3 text-blue-700">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-800">1.</span>
                      <div>
                        <p className="font-semibold">How does Ishmael's role as narrator affect our understanding of events?</p>
                        <p className="text-sm text-blue-600 mt-1">Consider his retrospective perspective and philosophical commentary.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-800">2.</span>
                      <div>
                        <p className="font-semibold">What does the white whale represent to different characters?</p>
                        <p className="text-sm text-blue-600 mt-1">Analyze how each character projects their own meaning onto Moby Dick.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-800">3.</span>
                      <div>
                        <p className="font-semibold">How does Melville use the ship as a microcosm of society?</p>
                        <p className="text-sm text-blue-600 mt-1">Consider the crew's diversity and how Ahab's obsession affects everyone.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-800">4.</span>
                      <div>
                        <p className="font-semibold">What is the significance of the novel's encyclopedic chapters on whales?</p>
                        <p className="text-sm text-blue-600 mt-1">Think about how these chapters affect the narrative flow and meaning.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-800">5.</span>
                      <div>
                        <p className="font-semibold">How do the themes of fate and free will intersect in the story?</p>
                        <p className="text-sm text-blue-600 mt-1">Consider Ahab's choices and the prophecies throughout the novel.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                  <h3 className="text-xl font-bold text-green-900 mb-4">🔍 Deep Analysis Questions</h3>
                  <ol className="space-y-3 text-green-700">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-green-800">6.</span>
                      <div>
                        <p className="font-semibold">How does Melville's varied syntax and style contribute to the novel's meaning?</p>
                        <p className="text-sm text-green-600 mt-1">Consider the shifts between different linguistic registers.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-green-800">7.</span>
                      <div>
                        <p className="font-semibold">What is the role of religion and biblical allusion in the novel?</p>
                        <p className="text-sm text-green-600 mt-1">Analyze Father Mapple's sermon and other religious references.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-green-800">8.</span>
                      <div>
                        <p className="font-semibold">How does the novel explore the relationship between humanity and nature?</p>
                        <p className="text-sm text-green-600 mt-1">Consider the ocean's indifference and humanity's attempts to control it.</p>
                      </div>
                    </li>
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