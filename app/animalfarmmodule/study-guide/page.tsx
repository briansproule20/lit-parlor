import React from 'react'
import Link from 'next/link'

export default function AnimalFarmStudyGuidePage() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #991B1B 0%, #DC2626 25%, #EF4444 50%, #F87171 75%, #991B1B 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/10 via-transparent to-red-950/40 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/animalfarmmodule" className="text-red-200 hover:text-white transition-colors font-serif">
            ← Back to Animal Farm Module
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-100 mb-4 font-serif">
            Animal Farm Study Guide
          </h1>
          <p className="text-red-200 text-lg font-serif">
            A comprehensive analysis of Orwell's political allegory
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Key Themes */}
          <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-8 rounded-xl shadow-xl border border-red-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Key Themes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-red-200 mb-3 font-serif">Power and Corruption</h3>
                <p className="text-red-100 font-serif">
                  The central theme showing how power corrupts even the most idealistic leaders, as seen in Napoleon's transformation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-200 mb-3 font-serif">Totalitarianism</h3>
                <p className="text-red-100 font-serif">
                  Orwell's warning about the dangers of totalitarian regimes and how they manipulate truth and history.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-200 mb-3 font-serif">Propaganda and Manipulation</h3>
                <p className="text-red-100 font-serif">
                  The use of language and propaganda to control the masses, exemplified by Squealer's speeches and slogans.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-200 mb-3 font-serif">Class Struggle</h3>
                <p className="text-red-100 font-serif">
                  The representation of different social classes and how revolutionary ideals can be betrayed by new elites.
                </p>
              </div>
            </div>
          </div>

          {/* Main Characters & Allegory */}
          <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 p-8 rounded-xl shadow-xl border border-orange-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Characters & Historical Parallels</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="text-xl font-semibold text-red-200 mb-2 font-serif">Napoleon → Stalin</h3>
                <p className="text-red-100 font-serif">
                  The power-hungry pig who becomes a dictator, representing Stalin's rise to power and authoritarian rule.
                </p>
              </div>
              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="text-xl font-semibold text-red-200 mb-2 font-serif">Snowball → Trotsky</h3>
                <p className="text-red-100 font-serif">
                  The idealistic pig who is exiled, representing Leon Trotsky's expulsion from the Soviet Union.
                </p>
              </div>
              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="text-xl font-semibold text-red-200 mb-2 font-serif">Old Major → Marx/Lenin</h3>
                <p className="text-red-100 font-serif">
                  The wise old boar whose revolutionary ideas inspire the rebellion, representing Marx's communist theory.
                </p>
              </div>
              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="text-xl font-semibold text-red-200 mb-2 font-serif">Boxer → Working Class</h3>
                <p className="text-red-100 font-serif">
                  The loyal, hardworking horse who represents the exploited working class and their blind faith in leadership.
                </p>
              </div>
              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="text-xl font-semibold text-red-200 mb-2 font-serif">Squealer → Propaganda Machine</h3>
                <p className="text-red-100 font-serif">
                  The persuasive pig who manipulates language and truth, representing state propaganda and media control.
                </p>
              </div>
            </div>
          </div>

          {/* Key Symbols */}
          <div className="bg-gradient-to-r from-red-900/50 to-yellow-900/50 p-8 rounded-xl shadow-xl border border-yellow-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Important Symbols</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-200 mb-3 font-serif">The Windmill</h3>
                <p className="text-yellow-100 font-serif">
                  Represents the Soviet Union's failed industrialization plans and how leaders use grand projects to distract from problems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-200 mb-3 font-serif">The Seven Commandments</h3>
                <p className="text-yellow-100 font-serif">
                  Represent the original revolutionary ideals that are gradually corrupted and rewritten to serve the ruling class.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-200 mb-3 font-serif">The Flag</h3>
                <p className="text-yellow-100 font-serif">
                  The green flag with horn and hoof symbolizes the animal revolution and unity that is eventually corrupted.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-200 mb-3 font-serif">Mr. Jones</h3>
                <p className="text-yellow-100 font-serif">
                  The original farmer represents Tsar Nicholas II and the old regime that was overthrown in the Russian Revolution.
                </p>
              </div>
            </div>
          </div>

          {/* Historical Context */}
          <div className="bg-gradient-to-r from-red-900/50 to-purple-900/50 p-8 rounded-xl shadow-xl border border-purple-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Historical Context</h2>
            <p className="text-purple-100 leading-relaxed font-serif mb-4">
              Published in 1945, <em>Animal Farm</em> was Orwell's critique of the Soviet Union under Stalin's rule. 
              The novella allegorically retells the story of the Russian Revolution of 1917 and the subsequent 
              development of the Soviet Union into a totalitarian state.
            </p>
            <p className="text-purple-100 leading-relaxed font-serif mb-4">
              Orwell, a democratic socialist, was deeply troubled by Stalin's betrayal of socialist ideals. 
              He witnessed firsthand the corruption of revolutionary movements during his time fighting in the Spanish Civil War, 
              which influenced his writing of this political allegory.
            </p>
            <p className="text-purple-100 leading-relaxed font-serif">
              The book serves as a warning about the cyclical nature of tyranny and how revolutionary movements 
              can be corrupted by power, making it relevant to any society where freedom and equality are threatened.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
} 