import React from 'react'
import Link from 'next/link'

export default function CrimeAndPunishmentPage() {
  return (
    <main className="min-h-screen pt-24 pb-8 px-4 relative" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 60%, #475569 100%)'
    }}>

      {/* Dotted overlay similar to home page */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative">
        

        {/* Book Cover Display */}
        <div className="text-center mb-12">
          <div className="inline-block bg-slate-50/95 border-4 border-slate-600 rounded-xl p-8 shadow-2xl relative transform transition-all duration-300 hover:scale-105">
            <h1 className="text-5xl font-bold text-slate-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              Crime and Punishment
            </h1>
            <p className="text-xl text-slate-800 font-serif italic mb-3">
              A Novel
            </p>
            <div className="text-lg text-slate-700 font-serif mb-4">
              by Fyodor Dostoevsky
            </div>
            <div className="w-32 h-1 bg-slate-600 mx-auto mb-4"></div>
            <p className="text-lg text-slate-800 font-serif leading-relaxed max-w-2xl mx-auto text-center">
              "Pain and suffering are always inevitable for a large intelligence and a deep heart."
            </p>
          </div>
        </div>

        {/* Book Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* About the Book */}
          <div className="bg-slate-50/95 border-4 border-slate-600 rounded-xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif text-center">
              About This Masterpiece
            </h2>
            <div className="space-y-4 text-slate-800 font-serif">
              <p className="leading-relaxed">
                Published in 1866, <em>Crime and Punishment</em> is Fyodor Dostoevsky's psychological masterpiece,
                a profound exploration of guilt, morality, and the human condition that revolutionized the novel form.
              </p>
              <p className="leading-relaxed">
                Through the tormented journey of Rodion Raskolnikov, Dostoevsky creates one of literature's most 
                complex psychological portraits, examining the philosophical and ethical questions surrounding crime, 
                punishment, and redemption.
              </p>
              <p className="leading-relaxed">
                Set in 1860s Saint Petersburg, the novel's intense psychological realism and philosophical depth 
                make it one of the most influential works in world literature, exploring themes that remain 
                relevant to contemporary readers.
              </p>
            </div>
          </div>

          {/* Key Themes */}
          <div className="bg-slate-50/95 border-4 border-slate-600 rounded-xl p-6 shadow-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif text-center">
              Key Themes
            </h2>
            <div className="space-y-4 text-slate-800 font-serif">
              <div className="p-3 bg-white/70 rounded border border-slate-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🧠</span> Psychological Depth
                </div>
                <div className="text-sm mt-1">The inner workings of a criminal mind</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-slate-300">
                <div className="font-bold flex items-center gap-2">
                  <span>⚖️</span> Guilt & Conscience
                </div>
                <div className="text-sm mt-1">The psychological weight of moral transgression</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-slate-300">
                <div className="font-bold flex items-center gap-2">
                  <span>💔</span> Suffering & Redemption
                </div>
                <div className="text-sm mt-1">The path from crime to spiritual renewal</div>
              </div>
              <div className="p-3 bg-white/70 rounded border border-slate-300">
                <div className="font-bold flex items-center gap-2">
                  <span>🏙️</span> Urban Alienation
                </div>
                <div className="text-sm mt-1">Isolation and poverty in modern society</div>
              </div>
            </div>
          </div>

        </div>


        {/* Historical Context */}
        <div className="bg-slate-50/95 border-4 border-slate-600 rounded-xl p-6 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif text-center">
            19th Century Russia: Dostoevsky's World
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-800 font-serif">
            <div>
              <h3 className="text-xl font-bold mb-3">Social Conditions</h3>
              <p className="leading-relaxed">
                Mid-19th century Russia was marked by extreme social inequality and rapid urbanization. 
                The novel captures the desperation of impoverished intellectuals like Raskolnikov, 
                who found themselves trapped between traditional values and modern urban realities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Philosophical Movements</h3>
              <p className="leading-relaxed">
                Dostoevsky was responding to emerging philosophical ideas like utilitarianism and nihilism. 
                Raskolnikov's theory of the "extraordinary man" reflects contemporary debates about 
                whether certain individuals are above conventional morality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Psychological Realism</h3>
              <p className="leading-relaxed">
                The novel pioneered psychological realism in literature, using stream-of-consciousness 
                techniques and interior monologue to explore the depths of human consciousness. 
                Dostoevsky's innovative narrative techniques influenced generations of writers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Religious Themes</h3>
              <p className="leading-relaxed">
                Dostoevsky's Orthodox Christian worldview permeates the novel, particularly in the 
                character of Sonya and the theme of redemption through suffering. The novel explores 
                whether true redemption is possible and what form it might take.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-slate-900/90 to-gray-800/90 border-4 border-slate-400 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Begin Your Literary Journey
            </h3>
            <p className="text-slate-200 text-lg mb-6 font-serif">
              Explore Dostoevsky's psychological depths, philosophical insights, and unforgettable characters
            </p>
            <Link href="/crimeandpunishmentmodule" className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg">
              Enter the Courthouse
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}