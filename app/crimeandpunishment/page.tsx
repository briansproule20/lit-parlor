import React from 'react'
import Link from 'next/link'

export default function CrimeAndPunishmentPage() {
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
            href="/crimeandpunishmentmodule" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            ⚖️ Enter Courthouse
          </Link>
        </div>

        {/* Book Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(124, 58, 237, 0.3) 0%, transparent 60%),
              linear-gradient(135deg, #1E1B4B 0%, #312E81 20%, #3730A3 40%, #4338CA 60%, #312E81 80%, #1E1B4B 100%)
            `,
            border: '3px solid #7C3AED',
            boxShadow: `
              0 8px 32px rgba(124, 58, 237, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.1),
              inset 0 -2px 4px rgba(76, 29, 149, 0.3)
            `
          }}>
            <h1 className="text-4xl font-bold text-amber-100 mb-4 font-serif">
              Crime and Punishment
            </h1>
            <p className="text-purple-200 text-lg mb-2 font-serif italic">
              by Fyodor Dostoevsky
            </p>
            <div className="text-purple-300 font-serif">
              "Pain and suffering are always inevitable for a large intelligence and a deep heart."
            </div>
          </div>
        </div>




        {/* Book Summary */}
        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-8 rounded-xl shadow-xl border border-purple-600 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-amber-100 mb-4 font-serif">About This Novel</h2>
          <p className="text-purple-100 leading-relaxed font-serif mb-4">
            <em>Crime and Punishment</em> is a psychological novel by Russian author Fyodor Dostoevsky. 
            First published in 1866, it follows the mental anguish and moral dilemmas of Rodion Raskolnikov, 
            an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker for her money.
          </p>
          <p className="text-purple-100 leading-relaxed font-serif mb-4">
            The novel explores themes of poverty, alienation, and the psychology of crime. Dostoevsky delves deep 
            into the protagonist's mind, examining the philosophical and ethical questions surrounding murder, 
            guilt, and redemption.
          </p>
          <p className="text-purple-100 leading-relaxed font-serif">
            Through Raskolnikov's journey from crime to punishment to spiritual renewal, the novel presents 
            a profound meditation on human nature, morality, and the possibility of redemption through suffering and love.
          </p>
        </div>

      </div>
    </main>
  )
} 