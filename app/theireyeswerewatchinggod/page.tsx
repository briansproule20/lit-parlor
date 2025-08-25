import React from 'react'
import Link from 'next/link'

export default function TheirEyesWereWatchingGodPage() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          <Link 
            href="/theireyeswerewatchinggodmodule" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🌊 Enter Everglades
          </Link>
        </div>

        {/* Book Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(45, 212, 191, 0.2) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 60%),
              linear-gradient(135deg, #134E4A 0%, #0F766E 20%, #0D9488 40%, #14B8A6 60%, #0F766E 80%, #134E4A 100%)
            `,
            border: '3px solid #14B8A6',
            boxShadow: `
              0 8px 32px rgba(20, 184, 166, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.1),
              inset 0 -2px 4px rgba(15, 118, 110, 0.3)
            `
          }}>
            <h1 className="text-4xl font-bold text-amber-100 mb-4 font-serif">
              Their Eyes Were Watching God
            </h1>
            <p className="text-teal-200 text-lg mb-2 font-serif italic">
              by Zora Neale Hurston
            </p>
            <div className="text-teal-300 font-serif">
              "She was stretched on her back beneath the pear tree soaking in the alto chant of the visiting bees."
            </div>
          </div>
        </div>





        {/* Book Summary */}
        <div className="bg-gradient-to-r from-teal-900/50 to-cyan-900/50 p-8 rounded-xl shadow-xl border border-teal-600 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-amber-100 mb-4 font-serif">About This Novel</h2>
          <p className="text-teal-100 leading-relaxed font-serif mb-4">
            <em>Their Eyes Were Watching God</em> is a 1937 novel by African-American writer Zora Neale Hurston. 
            It is considered a classic of the Harlem Renaissance and is frequently studied in American literature courses. 
            The story follows Janie Crawford, a resilient and independent woman, through her journey of self-discovery.
          </p>
          <p className="text-teal-100 leading-relaxed font-serif mb-4">
            Set in central and southern Florida in the early 20th century, the novel explores themes of love, 
            personal growth, and the search for identity. Hurston's use of African American Vernacular English 
            and her vivid portrayal of Black Southern culture make this work both linguistically rich and culturally significant.
          </p>
          <p className="text-teal-100 leading-relaxed font-serif">
            Through Janie's three marriages and her ultimate quest for independence, Hurston crafts a powerful narrative 
            about a woman's right to define herself and pursue her dreams, making it a pioneering work of feminist literature.
          </p>
        </div>

      </div>
    </main>
  )
} 