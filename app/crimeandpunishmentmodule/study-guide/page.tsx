import React from 'react'
import Link from 'next/link'

export default function CrimeAndPunishmentStudyGuidePage() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #4C1D95 0%, #5B21B6 25%, #7C3AED 50%, #8B5CF6 75%, #4C1D95 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/10 via-transparent to-purple-950/40 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/crimeandpunishmentmodule" className="text-purple-200 hover:text-white transition-colors font-serif">
            ← Back to Crime and Punishment Module
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-100 mb-4 font-serif">
            Crime and Punishment Study Guide
          </h1>
          <p className="text-purple-200 text-lg font-serif">
            A comprehensive analysis of Dostoevsky's psychological masterpiece
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Key Themes */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-8 rounded-xl shadow-xl border border-purple-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Key Themes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-200 mb-3 font-serif">Guilt and Redemption</h3>
                <p className="text-purple-100 font-serif">
                  The psychological torment of Raskolnikov after committing murder, and his journey toward spiritual redemption through suffering and love.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-200 mb-3 font-serif">Moral Philosophy</h3>
                <p className="text-purple-100 font-serif">
                  The novel explores the concept of the "extraordinary man" and questions whether moral laws apply equally to all people.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-200 mb-3 font-serif">Poverty and Social Injustice</h3>
                <p className="text-purple-100 font-serif">
                  Dostoevsky examines the effects of extreme poverty on human behavior and morality in 19th-century St. Petersburg.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-200 mb-3 font-serif">Faith and Doubt</h3>
                <p className="text-purple-100 font-serif">
                  The tension between religious faith and rational skepticism, embodied in the relationship between Raskolnikov and Sonia.
                </p>
              </div>
            </div>
          </div>

          {/* Main Characters */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-8 rounded-xl shadow-xl border border-indigo-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Main Characters</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="text-xl font-semibold text-purple-200 mb-2 font-serif">Rodion Raskolnikov</h3>
                <p className="text-purple-100 font-serif">
                  The protagonist, a former law student living in poverty who commits murder and struggles with guilt and philosophical justification.
                </p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="text-xl font-semibold text-purple-200 mb-2 font-serif">Sonia Marmeladova</h3>
                <p className="text-purple-100 font-serif">
                  A devout Christian who becomes a prostitute to support her family, representing redemption and spiritual love.
                </p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="text-xl font-semibold text-purple-200 mb-2 font-serif">Porfiry Petrovich</h3>
                <p className="text-purple-100 font-serif">
                  The investigating magistrate who psychologically pursues Raskolnikov, representing the law and moral order.
                </p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="text-xl font-semibold text-purple-200 mb-2 font-serif">Arkady Svidrigailov</h3>
                <p className="text-purple-100 font-serif">
                  A morally corrupt character who serves as a dark mirror to Raskolnikov's potential future.
                </p>
              </div>
            </div>
          </div>

          {/* Historical Context */}
          <div className="bg-gradient-to-r from-purple-900/50 to-violet-900/50 p-8 rounded-xl shadow-xl border border-violet-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Historical Context</h2>
            <p className="text-purple-100 leading-relaxed font-serif mb-4">
              Written in 1866, <em>Crime and Punishment</em> reflects the social upheaval of 19th-century Russia. 
              The abolition of serfdom in 1861 had created massive social changes, with former serfs flooding into cities like St. Petersburg.
            </p>
            <p className="text-purple-100 leading-relaxed font-serif">
              Dostoevsky himself had experienced poverty, imprisonment in Siberia, and gambling addiction, 
              which deeply influenced his portrayal of human suffering and redemption in the novel.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
} 