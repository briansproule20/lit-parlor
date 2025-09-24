import React from 'react'
import Link from 'next/link'

export default function TheirEyesWereWatchingGodPage() {
  return (
    <main className="min-h-screen pt-24 pb-8 px-4 relative" style={{
      background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 30%, #81d4fa 60%, #4fc3f7 100%)'
    }}>

      {/* Dotted overlay similar to home page */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#29b6f6 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative">
        

        {/* Book Cover Display */}
        <div className="text-center mb-12">
          <div className="inline-block bg-cyan-50/95 border-4 border-cyan-600 rounded-xl p-8 shadow-2xl relative transform transition-all duration-300 hover:scale-105">
            <h1 className="text-5xl font-bold text-cyan-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              Their Eyes Were Watching God
            </h1>
            <p className="text-xl text-cyan-800 font-serif italic mb-3">
              A Novel
            </p>
            <div className="text-lg text-cyan-700 font-serif mb-4">
              by Zora Neale Hurston
            </div>
            <div className="w-32 h-1 bg-cyan-600 mx-auto mb-4"></div>
            <p className="text-lg text-cyan-800 font-serif leading-relaxed max-w-2xl mx-auto text-center">
              "She was stretched on her back beneath the pear tree soaking in the alto chant of the visiting bees."
            </p>
          </div>
        </div>

        {/* Book Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* About the Book */}
          <div className="bg-cyan-50/95 border-4 border-cyan-600 rounded-xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-cyan-900 mb-4 font-serif text-center">
              About This Masterpiece
            </h2>
            <div className="space-y-4 text-cyan-800 font-serif">
              <p className="leading-relaxed">
                Published in 1937, <em>Their Eyes Were Watching God</em> is Zora Neale Hurston's most celebrated novel,
                a masterpiece of the Harlem Renaissance that explores love, identity, and self-discovery in the American South.
              </p>
              <p className="leading-relaxed">
                Through the resilient Janie Crawford and her journey through three marriages, Hurston creates a powerful story
                of a woman's quest for independence and authentic love that continues to inspire readers today.
              </p>
              <p className="leading-relaxed">
                Set in central and southern Florida in the early 20th century, the novel's rich use of African American Vernacular English
                and vivid portrayal of Black Southern culture make it both linguistically innovative and culturally significant.
              </p>
            </div>
          </div>

          {/* Key Themes */}
          <div className="bg-cyan-50/95 border-4 border-cyan-600 rounded-xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-cyan-900 mb-4 font-serif text-center">
              Key Themes
            </h2>
            <div className="space-y-4 text-cyan-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-cyan-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🌺</span> Self-Discovery
                </div>
                <div className="text-sm mt-1">Janie's journey to find her authentic voice and identity</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-cyan-300">
                <div className="font-bold flex items-center gap-2">
                  <span>💕</span> Love & Marriage
                </div>
                <div className="text-sm mt-1">The difference between romantic love and practical partnership</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-cyan-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🗣️</span> Voice & Language
                </div>
                <div className="text-sm mt-1">The power of African American Vernacular English as literary language</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-cyan-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🌿</span> Nature & Spirituality
                </div>
                <div className="text-sm mt-1">The connection between the natural world and spiritual awakening</div>
              </div>
            </div>
          </div>

        </div>


        {/* Historical Context */}
        <div className="bg-cyan-50/95 border-4 border-cyan-600 rounded-xl p-6 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-cyan-900 mb-4 font-serif text-center">
            The Harlem Renaissance: Hurston's World
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-cyan-800 font-serif">
            <div>
              <h3 className="text-xl font-bold mb-3">Cultural Movement</h3>
              <p className="leading-relaxed">
                The Harlem Renaissance was a flowering of African American culture in the 1920s and 1930s. 
                Hurston was a central figure, celebrating Black folk culture and vernacular language as 
                legitimate artistic expression rather than something to be ashamed of.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Anthropological Perspective</h3>
              <p className="leading-relaxed">
                As an anthropologist, Hurston brought scientific rigor to her study of Black Southern culture. 
                Her fieldwork in Florida and the Caribbean informed her fiction, creating authentic portrayals 
                of African American life that challenged stereotypes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Feminist Pioneer</h3>
              <p className="leading-relaxed">
                Hurston's portrayal of Janie as a woman seeking independence and authentic love was revolutionary 
                for its time. The novel explores themes of female agency and self-determination that would 
                become central to later feminist literature.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Literary Innovation</h3>
              <p className="leading-relaxed">
                Hurston's use of African American Vernacular English as the primary narrative voice was groundbreaking. 
                She demonstrated that Black dialect could be sophisticated literary language, challenging 
                prevailing notions about "proper" English in literature.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-cyan-900/90 to-blue-800/90 border-4 border-cyan-400 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Begin Your Literary Journey
            </h3>
            <p className="text-cyan-200 text-lg mb-6 font-serif">
              Explore Hurston's powerful prose, cultural insights, and unforgettable characters
            </p>
            <Link href="/theireyeswerewatchinggodmodule" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg">
              Enter the Everglades
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}