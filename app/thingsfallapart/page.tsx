import React from 'react'
import Link from 'next/link'

export default function ThingsFallApart() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>

      {/* Dot Background */}
      <div className="opacity-30 absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundSize: '20px 20px',
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)'
          }}
        ></div>
      </div>

      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative">
        
        {/* Book Cover Display */}
        <div className="text-center mb-12 pt-16">
          <div className="inline-block bg-orange-50/95 border-4 border-orange-600 rounded-xl p-8 shadow-2xl relative transform transition-all duration-300 hover:scale-105">
            <h1 className="text-5xl font-bold text-orange-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              Things Fall Apart
            </h1>
            <p className="text-xl text-orange-800 font-serif italic mb-3">
              A Novel
            </p>
            <div className="text-lg text-orange-700 font-serif mb-4">
              by Chinua Achebe
            </div>
            <div className="w-32 h-1 bg-orange-600 mx-auto mb-4"></div>
            <p className="text-lg text-orange-800 font-serif leading-relaxed max-w-2xl">
              "Things fall apart; the centre cannot hold; Mere anarchy is loosed upon the world."
            </p>
          </div>
        </div>

        {/* Book Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* About the Book */}
          <div className="bg-orange-50/95 border-4 border-orange-600 rounded-xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-orange-900 mb-4 font-serif text-center">
              About This Masterpiece
            </h2>
            <div className="space-y-4 text-orange-800 font-serif">
              <p className="leading-relaxed">
                Published in 1958, <em>Things Fall Apart</em> is Chinua Achebe's groundbreaking novel 
                that tells the story of Okonkwo, a proud Igbo warrior, and his village's encounter with 
                European colonialism in late 19th-century Nigeria.
              </p>
              <p className="leading-relaxed">
                Through Okonkwo's tragic journey, Achebe explores themes of cultural identity, 
                tradition versus change, and the devastating impact of colonialism on African societies. 
                The novel challenges Western perspectives on African culture and history.
              </p>
              <p className="leading-relaxed">
                Considered a foundational work of African literature, <em>Things Fall Apart</em> 
                has been translated into over 50 languages and continues to be studied worldwide 
                for its powerful narrative and cultural significance.
              </p>
            </div>
          </div>

          {/* Key Themes */}
          <div className="bg-orange-50/95 border-4 border-orange-600 rounded-xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-orange-900 mb-4 font-serif text-center">
              Key Themes
            </h2>
            <div className="space-y-4 text-orange-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold flex items-center gap-2">
                  <span>⚖️</span> Tradition vs. Change
                </div>
                <div className="text-sm mt-1">The clash between traditional Igbo culture and colonial influence</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold flex items-center gap-2">
                  <span>👑</span> Masculinity & Pride
                </div>
                <div className="text-sm mt-1">Okonkwo's struggle with traditional notions of manhood</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🌱</span> Cultural Identity
                </div>
                <div className="text-sm mt-1">The preservation and loss of cultural heritage</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-orange-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🌍</span> Colonialism
                </div>
                <div className="text-sm mt-1">The destructive impact of European imperialism</div>
              </div>
            </div>
          </div>

        </div>


        {/* Historical Context */}
        <div className="bg-orange-50/95 border-4 border-orange-600 rounded-xl p-6 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-4 font-serif text-center">
            Pre-Colonial Nigeria: The World of Achebe
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-orange-800 font-serif">
            <div>
              <h3 className="text-xl font-bold mb-3">Igbo Society</h3>
              <p className="leading-relaxed">
                The Igbo people had a complex social structure with democratic elements, 
                including village assemblies and councils of elders. Their society was 
                organized around extended families and clans, with a rich cultural heritage 
                including art, music, and oral traditions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Religious Beliefs</h3>
              <p className="leading-relaxed">
                Traditional Igbo religion was polytheistic, with belief in a supreme god 
                (Chukwu) and numerous lesser deities. Ancestral worship and spiritual 
                practices were central to community life, providing moral guidance and 
                social cohesion.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Economic Life</h3>
              <p className="leading-relaxed">
                Agriculture was the foundation of Igbo economy, with yam farming being 
                particularly important. The novel shows how farming success was tied to 
                social status and masculinity, with the yam harvest determining a man's 
                standing in the community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Colonial Arrival</h3>
              <p className="leading-relaxed">
                British missionaries and administrators arrived in the late 19th century, 
                bringing Christianity, Western education, and colonial administration. 
                This encounter would fundamentally transform Igbo society and culture, 
                often through force and coercion.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-orange-900/90 to-red-800/90 border-4 border-orange-400 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Begin Your Cultural Journey
            </h3>
            <p className="text-orange-200 text-lg mb-6 font-serif">
              Will you witness the fall, or understand the forces that caused it?
            </p>
            <Link href="/thingsfallapartmodule" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg">
              Enter the Village
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
} 