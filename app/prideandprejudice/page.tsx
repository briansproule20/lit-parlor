import React from 'react'
import Link from 'next/link'

export default function PrideAndPrejudice() {
  return (
    <main className="min-h-screen pt-24 pb-8 px-4 relative" style={{
      background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 30%, #fbcfe8 60%, #f9a8d4 100%)'
    }}>

      {/* Dotted overlay similar to home page */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#f8d7da 2px, transparent 2px)',
          backgroundSize: '25px 25px'
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative">
        

        {/* Book Cover Display */}
        <div className="text-center mb-12">
          <div className="inline-block bg-rose-50/95 border-4 border-rose-600 rounded-xl p-8 shadow-2xl relative transform transition-all duration-300 hover:scale-105">
            <h1 className="text-5xl font-bold text-rose-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              Pride and Prejudice
            </h1>
            <p className="text-xl text-rose-800 font-serif italic mb-3">
              A Novel
            </p>
            <div className="text-lg text-rose-700 font-serif mb-4">
              by Jane Austen
            </div>
            <div className="w-32 h-1 bg-rose-600 mx-auto mb-4"></div>
            <p className="text-lg text-rose-800 font-serif leading-relaxed max-w-2xl">
              "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
            </p>
          </div>
        </div>

        {/* Book Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* About the Book */}
          <div className="bg-rose-50/95 border-4 border-rose-600 rounded-xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-4 font-serif text-center">
              About This Masterpiece
            </h2>
            <div className="space-y-4 text-rose-800 font-serif">
              <p className="leading-relaxed">
                Published in 1813, <em>Pride and Prejudice</em> is Jane Austen's most beloved novel,
                a masterpiece of social comedy that explores love, marriage, and class in Georgian England.
              </p>
              <p className="leading-relaxed">
                Through the witty Elizabeth Bennet and the proud Mr. Darcy, Austen creates a timeless story
                of first impressions, personal growth, and true love that continues to captivate readers
                over two centuries later.
              </p>
              <p className="leading-relaxed">
                Set in rural England during the Regency era, the novel's sharp social satire and unforgettable
                characters have made it one of the most influential works in English literature.
              </p>
            </div>
          </div>

          {/* Key Themes */}
          <div className="bg-rose-50/95 border-4 border-rose-600 rounded-xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-4 font-serif text-center">
              Key Themes
            </h2>
            <div className="space-y-4 text-rose-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold flex items-center gap-2">
                  <span>👑</span> Pride vs. Prejudice
                </div>
                <div className="text-sm mt-1">The dangers of first impressions and the importance of self-awareness</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold flex items-center gap-2">
                  <span>💕</span> Love vs. Marriage
                </div>
                <div className="text-sm mt-1">The tension between romantic love and social advancement</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold flex items-center gap-2">
                  <span>💰</span> Class & Society
                </div>
                <div className="text-sm mt-1">The rigid social hierarchies of Georgian England</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-rose-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🎭</span> Social Satire
                </div>
                <div className="text-sm mt-1">Austen's witty commentary on human nature and society</div>
              </div>
            </div>
          </div>

        </div>


        {/* Historical Context */}
        <div className="bg-rose-50/95 border-4 border-rose-600 rounded-xl p-6 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-rose-900 mb-4 font-serif text-center">
            Georgian England: The World of Austen
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-rose-800 font-serif">
            <div>
              <h3 className="text-xl font-bold mb-3">Social Structure</h3>
              <p className="leading-relaxed">
                Georgian England was marked by strict social hierarchies. The landed gentry, 
                like the Bennet family, occupied a precarious middle position between the aristocracy 
                and the working classes. Marriage was often the only path to financial security for women.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Women's Position</h3>
              <p className="leading-relaxed">
                Women had limited legal rights and few career options. Their primary goal was 
                to secure a good marriage, which required both financial security and social standing. 
                The novel explores the tension between this necessity and the desire for genuine affection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Property & Inheritance</h3>
              <p className="leading-relaxed">
                The entailment of Longbourn to Mr. Collins highlights the precarious position of 
                the Bennet sisters. Without brothers, they faced the prospect of losing their home 
                and financial security upon their father's death.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Social Etiquette</h3>
              <p className="leading-relaxed">
                Strict rules governed social interactions, from proper introductions to acceptable 
                topics of conversation. These conventions created both opportunities for romance 
                and barriers to genuine understanding between people.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-rose-900/90 to-pink-800/90 border-4 border-rose-400 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Begin Your Literary Courtship
            </h3>
            <p className="text-rose-200 text-lg mb-6 font-serif">
              Explore Austen's wit, social commentary, and timeless characters
            </p>
            <Link href="/prideandprejudicemodule" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg">
              Enter the Drawing Room
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
} 