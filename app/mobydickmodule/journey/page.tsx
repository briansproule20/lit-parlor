'use client'
import React from 'react'
import Link from 'next/link'

export default function Journey() {
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
        
        {/* Journey Header */}
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
                🧭 THE JOURNEY BEGINS
              </h1>
              <div className="w-full h-2 bg-amber-700 mb-4"></div>
              <p className="text-2xl text-amber-800 font-serif leading-relaxed">
                "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse..."
              </p>
            </div>
          </div>
        </div>

        {/* Journey Content - The 15 Key Moments */}
        <div className="space-y-8">
          
          {/* Chapter 1: Call me Ishmael */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">1. "Call me Ishmael" – Chapter 1</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, 
                  and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world."
                </p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> Establishes Ishmael's philosophical tone and central themes like isolation, existentialism, 
                and man's search for meaning. The famous opening immediately draws us into the narrator's contemplative world-view.
              </p>
            </div>
          </div>

          {/* Ishmael and Queequeg Bond */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">2. Ishmael and Queequeg Bond – Chapters 3–4</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "Thus, then, in our hearts' honeymoon, lay I and Queequeg—a cosy, loving pair."
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Ishmael</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> Their deep, cross-cultural friendship is a rare human warmth in a novel filled with obsession and doom. 
                This unexpected bond between the Christian narrator and the Polynesian harpooner introduces vital themes of unity, brotherhood, and tolerance.
              </p>
              <div className="bg-white/70 p-4 rounded-lg border border-amber-300">
                <p className="text-sm text-amber-700">
                  💫 <strong>Theme Focus:</strong> The power of human connection transcending cultural and religious differences
                </p>
              </div>
            </div>
          </div>

          {/* The Whaleman's Chapel Sermon */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">3. The Whaleman's Chapel Sermon – Chapter 9</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "Shipmates, God has laid but one hand upon you; both his hands press upon me. I have read ye by what murky light may be mine the lesson that Jonah teaches to all sinful men."
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Father Mapple</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> The Jonah sermon foreshadows Ahab's doom while introducing religious and fatalistic themes 
                central to the novel. Father Mapple's powerful preaching sets the moral and spiritual tone for the voyage ahead.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-300">
                <p className="text-sm text-blue-700">
                  ⛪ <strong>Biblical Parallel:</strong> Jonah's attempt to flee God's will mirrors the crew's journey into the unknown
                </p>
              </div>
            </div>
          </div>

          {/* Meeting Elijah */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">4. Meeting Elijah – Chapter 19</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "Ye said true—ye haven't seen Old Thunder yet, have ye? Well, don't ye ever do it. Look here, when Captain Ahab is all right, then this left arm of mine will be all right; not before."
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Elijah</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> Elijah's cryptic warning about the Pequod and its captain adds ominous prophecy and tension. 
                This mysterious encounter serves as a biblical warning that foreshadows the tragic fate awaiting the ship.
              </p>
            </div>
          </div>

          {/* Boarding the Pequod */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">5. Boarding the Pequod – Chapters 16–22</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "She was a ship of the old school, rather small if anything; with an old-fashioned claw-footed look about her. Long seasoned and weather-stained in the typhoons and calms of all four oceans."
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Ishmael on the Pequod</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> Finalizes Ishmael and Queequeg's entry into the voyage. First mentions of Ahab hint at mystery and danger, 
                building suspense around the captain who remains hidden from view.
              </p>
            </div>
          </div>

          {/* First Sighting of Captain Ahab */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">6. First Sighting of Captain Ahab – Chapter 28</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "Threading its way out from among his grey hairs, and continuing right down one side of his tawny scorched face and neck, till it disappeared in his clothing, you saw a slender rod-like mark, lividly whitish."
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Ishmael describing Ahab</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> Ahab is revealed physically and symbolically as a scarred, monomaniacal figure. 
                His ivory leg and burning gaze introduce his mythic stature and hint at the obsession that will doom them all.
              </p>
              <div className="bg-red-50 p-4 rounded-lg border border-red-300">
                <p className="text-sm text-red-700">
                  🦴 <strong>Symbolic Detail:</strong> The ivory leg made from whale bone represents his literal and metaphorical connection to his nemesis
                </p>
              </div>
            </div>
          </div>

          {/* Ahab's Gold Doubloon */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">7. Ahab's Gold Doubloon – Chapter 36</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "Whosoever of ye raises me a white-headed whale with a wrinkled brow and a crooked jaw... he shall have this gold ounce, my boys!"
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Captain Ahab</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> Ahab offers a gold coin for the first sighting of Moby Dick. 
                The crew's varying interpretations of the doubloon symbolize subjectivity, fate, and desire, 
                showing how each person projects their own meaning onto symbols.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-400">
                <p className="text-sm text-yellow-700">
                  🪙 <strong>The Doubloon:</strong> Each crew member sees different meanings in the coin, revealing their inner nature
                </p>
              </div>
            </div>
          </div>

          {/* The Quarter-Deck Speech */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">8. The Quarter-Deck Speech – Chapter 36</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "Aye, aye! and I'll chase him round Good Hope, and round the Horn, and round the Norway Maelstrom, and round perdition's flames before I give him up!"
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Captain Ahab</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> Ahab declares his obsession and mission: revenge on Moby Dick. 
                A pivotal thematic moment about man's struggle with fate and the divine, where Ahab reveals 
                his complete commitment to his vendetta regardless of the cost.
              </p>
              <div className="bg-red-50 p-4 rounded-lg border border-red-300">
                <p className="text-sm text-red-700">
                  ⚔️ <strong>The Declaration:</strong> Ahab transforms a commercial voyage into a personal war against nature
                </p>
              </div>
            </div>
          </div>

          {/* Starbuck Confronts Ahab */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">9. Starbuck Confronts Ahab – Chapter 38</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "Vengeance on a dumb brute!" cried Starbuck, "that simply smote thee from blindest instinct! Madness! To be enraged with a dumb thing, Captain Ahab, seems blasphemous."
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Starbuck</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> The novel's moral center, Starbuck pleads for reason and questions the wisdom of Ahab's quest. 
                Ahab's rejection of his first mate's counsel marks his descent into full-blown vengeance, abandoning all moral restraint.
              </p>
            </div>
          </div>

          {/* The Try-Works */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">10. The Try-Works – Chapter 96</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "Look not too long in the face of the fire, O man! Never dream with thy hand on the helm! Turn not thy back to the compass; accept the first hint of the hitching tiller; believe not the artificial fire."
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Ishmael's warning</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> Ishmael's night shift at the blubber furnace becomes a hallucinatory meditation on darkness, madness, 
                and industrial man's alienation. This haunting chapter explores the psychological toll of the voyage.
              </p>
            </div>
          </div>

          {/* Queequeg's Coffin */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">11. Queequeg's Coffin – Chapters 110–111</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "A life-buoy of a coffin! Does it go further? Can it be that in some spiritual sense the coffin is, after all, but an immortality-preserver!"
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Ishmael's reflection</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> Queequeg becomes ill and commissions a coffin, which later becomes Ishmael's life buoy. 
                This powerful symbol foreshadows death and salvation, showing how instruments of doom can become sources of life.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-300">
                <p className="text-sm text-green-700">
                  ⚰️ <strong>Symbolic Reversal:</strong> Death becomes life, despair becomes hope—the coffin saves the sole survivor
                </p>
              </div>
            </div>
          </div>

          {/* The Rachel */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">12. The Rachel – Chapter 128</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "My boy, my own boy is among them. For God's sake—I beg, I conjure"—here exclaimed the stranger Captain to Ahab, who thus far had but icily received his petition.
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Captain Gardiner's plea</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> A captain begs Ahab for help finding his lost son, but Ahab refuses, showing his complete moral decay 
                and tunnel-visioned obsession. This moment reveals how far Ahab has fallen from basic human compassion.
              </p>
            </div>
          </div>

          {/* The Delight */}
          <div className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">13. The Delight – Chapter 131</h2>
            <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
              <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-lg">
                  "The harpoon is not yet forged that will ever do that," answered the other, sadly glancing upon a rounded hammock on the deck, whose gathered sides some noiseless sailors were busy in sewing together.
                </p>
                <p className="text-amber-700 text-sm mt-2 text-right">— Captain of the Delight</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> The Pequod meets a ship already wounded by Moby Dick. The crew is terrified by this final warning, 
                but Ahab ignores even this direct evidence of the White Whale's deadly power.
              </p>
            </div>
          </div>

          {/* The Three-Day Chase */}
          <div className="bg-red-50/95 border-4 border-red-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-red-900 mb-6 font-serif">14. The Three-Day Chase – Chapters 133–135</h2>
            <div className="prose prose-lg font-serif text-red-800 leading-relaxed">
              <div className="mb-6 p-4 bg-red-100 rounded-lg border-l-4 border-red-600">
                <p className="italic text-lg">
                  "From hell's heart I stab at thee; for hate's sake I spit my last breath at thee. Sink all coffins and all hearses to one common pool!"
                </p>
                <p className="text-red-700 text-sm mt-2 text-right">— Ahab's final words</p>
              </div>
              <p className="mb-4">
                <strong>Significance:</strong> The climax arrives. Ahab and crew engage Moby Dick in an epic three-day battle. 
                Over three days, the whale systematically destroys the Pequod and kills nearly all aboard, fulfilling the prophecies 
                of doom that have haunted the voyage.
              </p>
              <div className="bg-red-100 p-4 rounded-lg border border-red-400">
                <p className="text-sm text-red-700">
                  🌊 <strong>The Final Confrontation:</strong> Nature's power proves greater than human obsession
                </p>
              </div>
            </div>
          </div>

          {/* Ishmael's Survival */}
          <div className="bg-blue-50/95 border-4 border-blue-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif">15. Ishmael's Survival – Epilogue</h2>
            <div className="prose prose-lg font-serif text-blue-800 leading-relaxed">
              <p className="mb-4">
                <strong>Significance:</strong> Ishmael survives by floating on Queequeg's coffin and is rescued by the Rachel. 
                He becomes the lone witness to the catastrophe, emphasizing themes of fate, rebirth, and the power of storytelling 
                to preserve memory and meaning.
              </p>
              
              <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-400 mt-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🌊 Your Journey Complete</h3>
                <p className="text-blue-700 mb-4">
                  You have now navigated the full arc of Melville's masterpiece—from Ishmael's contemplative beginning 
                  to the tragic end that leaves only memory and story. What insights have you gained about obsession, 
                  fate, and humanity's place in the natural world?
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/mobydickmodule/study-guide"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    📚 Deepen Your Study
                  </Link>
                  <Link 
                    href="/mobydickmodule/quiz"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    🎯 Test Your Knowledge
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
} 