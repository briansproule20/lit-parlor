import React from 'react'
import Link from 'next/link'

export default function TheirEyesWereWatchingGodStudyGuidePage() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 25%, #2DD4BF 50%, #5EEAD4 75%, #0F766E 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/10 via-transparent to-teal-950/40 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/theireyeswerewatchinggodmodule" className="text-teal-200 hover:text-white transition-colors font-serif">
            ← Back to Their Eyes Were Watching God Module
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-100 mb-4 font-serif">
            Their Eyes Were Watching God Study Guide
          </h1>
          <p className="text-teal-200 text-lg font-serif">
            A comprehensive analysis of Hurston's groundbreaking novel
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Key Themes */}
          <div className="bg-gradient-to-r from-teal-900/50 to-cyan-900/50 p-8 rounded-xl shadow-xl border border-teal-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Key Themes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-teal-200 mb-3 font-serif">Self-Discovery and Independence</h3>
                <p className="text-teal-100 font-serif">
                  Janie's journey from a sheltered young woman to an independent individual who defines her own identity and desires.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-200 mb-3 font-serif">Love and Marriage</h3>
                <p className="text-teal-100 font-serif">
                  The novel explores different types of relationships through Janie's three marriages, from security to passion to true partnership.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-200 mb-3 font-serif">Voice and Storytelling</h3>
                <p className="text-teal-100 font-serif">
                  The importance of finding one's voice and the power of narrative, both in Janie's personal growth and Hurston's literary technique.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-200 mb-3 font-serif">Nature and Spirituality</h3>
                <p className="text-teal-100 font-serif">
                  The connection between natural imagery (pear tree, horizon, hurricane) and spiritual/emotional awakening.
                </p>
              </div>
            </div>
          </div>

          {/* Main Characters */}
          <div className="bg-gradient-to-r from-cyan-900/50 to-teal-900/50 p-8 rounded-xl shadow-xl border border-cyan-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Main Characters</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-400 pl-4">
                <h3 className="text-xl font-semibold text-teal-200 mb-2 font-serif">Janie Crawford</h3>
                <p className="text-teal-100 font-serif">
                  The protagonist whose journey of self-discovery forms the heart of the novel. A strong-willed woman seeking love and independence.
                </p>
              </div>
              <div className="border-l-4 border-teal-400 pl-4">
                <h3 className="text-xl font-semibold text-teal-200 mb-2 font-serif">Tea Cake (Vergible Woods)</h3>
                <p className="text-teal-100 font-serif">
                  Janie's third husband, younger than her, who treats her as an equal and introduces her to a life of adventure and genuine love.
                </p>
              </div>
              <div className="border-l-4 border-teal-400 pl-4">
                <h3 className="text-xl font-semibold text-teal-200 mb-2 font-serif">Joe Starks (Jody)</h3>
                <p className="text-teal-100 font-serif">
                  Janie's second husband, an ambitious man who becomes mayor of Eatonville but suppresses Janie's voice and independence.
                </p>
              </div>
              <div className="border-l-4 border-teal-400 pl-4">
                <h3 className="text-xl font-semibold text-teal-200 mb-2 font-serif">Logan Killicks</h3>
                <p className="text-teal-100 font-serif">
                  Janie's first husband, chosen by her grandmother for security rather than love, representing traditional expectations.
                </p>
              </div>
              <div className="border-l-4 border-teal-400 pl-4">
                <h3 className="text-xl font-semibold text-teal-200 mb-2 font-serif">Nanny Crawford</h3>
                <p className="text-teal-100 font-serif">
                  Janie's grandmother, a former slave whose experiences shape her desire for Janie's security over happiness.
                </p>
              </div>
            </div>
          </div>

          {/* Symbolism */}
          <div className="bg-gradient-to-r from-teal-900/50 to-emerald-900/50 p-8 rounded-xl shadow-xl border border-emerald-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Key Symbols</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-emerald-200 mb-3 font-serif">The Pear Tree</h3>
                <p className="text-emerald-100 font-serif">
                  Represents Janie's sexual awakening and her ideal of harmonious love, established in the novel's opening scenes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-200 mb-3 font-serif">The Horizon</h3>
                <p className="text-emerald-100 font-serif">
                  Symbolizes dreams, possibilities, and the future. Janie's relationship with the horizon reflects her growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-200 mb-3 font-serif">Hair</h3>
                <p className="text-emerald-100 font-serif">
                  Janie's hair represents her identity, sexuality, and independence - controlled by Joe, freed with Tea Cake.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-200 mb-3 font-serif">The Hurricane</h3>
                <p className="text-emerald-100 font-serif">
                  Nature's power that tests human relationships and reveals true character, particularly in Janie and Tea Cake's love.
                </p>
              </div>
            </div>
          </div>

          {/* Historical Context */}
          <div className="bg-gradient-to-r from-teal-900/50 to-blue-900/50 p-8 rounded-xl shadow-xl border border-blue-600 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-100 mb-6 font-serif">Historical Context</h2>
            <p className="text-blue-100 leading-relaxed font-serif mb-4">
              Published in 1937 during the Harlem Renaissance, <em>Their Eyes Were Watching God</em> was initially 
              criticized by some African American intellectuals for its focus on rural Black culture and use of dialect. 
              However, it has since been recognized as a groundbreaking work of feminist and African American literature.
            </p>
            <p className="text-blue-100 leading-relaxed font-serif mb-4">
              Hurston drew from her anthropological background and her own experiences growing up in Eatonville, Florida, 
              one of the first all-Black incorporated municipalities in the United States. The novel authentically captures 
              the language, culture, and social dynamics of early 20th-century Black Southern communities.
            </p>
            <p className="text-blue-100 leading-relaxed font-serif">
              The novel's exploration of a Black woman's autonomy and sexuality was revolutionary for its time, 
              predating many themes that would become central to later feminist and civil rights movements.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
} 