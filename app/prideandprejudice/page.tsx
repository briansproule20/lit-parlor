import React from 'react'
import Link from 'next/link'

export default function PrideAndPrejudice() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/20 via-transparent to-rose-900/30 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-rose-800 hover:text-rose-900 font-bold text-lg px-6 py-3 bg-rose-50/90 rounded-lg border-2 border-rose-600 shadow-md hover:shadow-lg transition-all"
          >
            className="inline-flex items-center gap-2 text-rose-800 hover:text-rose-900 font-bold text-lg px-6 py-3 bg-rose-50/90 rounded-lg border-2 border-rose-600 shadow-md hover:shadow-lg transition-all"
          >
            💕 Enter Drawing Room
          </Link>
        </div>

        {/* Book Cover Display */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative transform transition-all duration-300 hover:scale-105" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 60%),
              linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 20%, #DEB887 40%, #F5DEB3 60%, #E6D8B5 80%, #FEFBF0 100%)
            `,
            border: '3px solid #8B4513',
            boxShadow: `
              0 8px 32px rgba(139, 69, 19, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.7),
              inset 0 -2px 4px rgba(139, 69, 19, 0.2)
            `
          }}>
            <h1 className="text-5xl font-bold text-rose-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              📚 Pride and Prejudice
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
                Through the witty and independent Elizabeth Bennet and the proud Mr. Darcy, 
                Austen creates a timeless story of first impressions, personal growth, and the triumph of true love.
              </p>
              <p className="leading-relaxed">
                The novel's sharp social satire and unforgettable characters have made it one of the most 
                influential works in English literature, continuing to captivate readers over two centuries later.
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

        {/* Interactive Features */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 bg-gradient-to-r from-rose-900/90 to-pink-800/90 border-4 border-rose-400 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Explore the Drawing Room
            </h2>
            <p className="text-rose-200 text-lg mb-6 font-serif">
              Navigate the social complexities of Georgian England through our interactive features
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/prideandprejudicemodule/journey" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🧭 Character Journey
              </Link>
              <Link href="/prideandprejudicemodule/study-guide" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                📚 Study Guide
              </Link>
              <Link href="/prideandprejudicemodule/quiz" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block">
                🎯 Quick Quiz
              </Link>
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
              Will you succumb to first impressions, or discover the truth beneath?
            </p>
            <Link href="/prideandprejudicemodule" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg">
              💕 Enter the Drawing Room
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
} 