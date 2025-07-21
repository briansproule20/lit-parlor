import React from 'react'
import Link from 'next/link'

export default function Storyworlds() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🏠 Return to Parlor
          </Link>
          
          <div className="text-right">
            <div className="text-amber-800 font-bold text-lg">🌍 World Explorer</div>
            <div className="text-amber-700 text-sm">Level 10 Cartographer</div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
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
            <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              Storyworlds // Literary Geography
            </h1>
            <p className="text-lg text-amber-800 max-w-3xl mx-auto leading-relaxed font-serif">
              Explore the geographic landscapes where our literary journeys unfold. From the whaling ports of New England to the drawing rooms of England, discover the real-world settings that shaped these timeless stories.
            </p>
          </div>
        </div>

        {/* World Map Container */}
        <div className="bg-white/95 rounded-xl shadow-2xl p-8 border-2 border-amber-200 mb-8">
          <div className="relative">
            {/* Real World Map Image */}
            <div className="relative w-full">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
                alt="World Map"
                className="w-full h-auto rounded-lg"
                style={{ 
                  filter: 'brightness(1.1) saturate(0.9)',
                  minHeight: '400px',
                  maxHeight: '600px',
                  objectFit: 'cover'
                }}
              />
              
              {/* Overlay for story location markers */}
              <div className="absolute inset-0">
                
                {/* Story Location Markers positioned over real map */}
                
                {/* Moby Dick - Nantucket, Massachusetts (41.3°N, 70.1°W) */}
                <div className="absolute" style={{ left: '30.5%', top: '25.7%' }}>
                  <div className="relative group">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="absolute left-8 top-0 bg-white/95 rounded-lg p-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none min-w-[150px]">
                      <div className="text-sm font-bold text-blue-900 font-serif">Nantucket</div>
                      <div className="text-xs text-blue-700 font-serif">Moby Dick</div>
                    </div>
                  </div>
                </div>
                
                {/* Pride and Prejudice - England (52.5°N, 1.5°W) */}
                <div className="absolute" style={{ left: '49.6%', top: '19.1%' }}>
                  <div className="relative group">
                    <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="absolute left-8 top-0 bg-white/95 rounded-lg p-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none min-w-[150px]">
                      <div className="text-sm font-bold text-red-900 font-serif">England</div>
                      <div className="text-xs text-red-700 font-serif">Pride & Prejudice</div>
                    </div>
                  </div>
                </div>
                
                {/* Things Fall Apart - Nigeria (9.1°N, 8.7°E) */}
                <div className="absolute" style={{ left: '52.4%', top: '44.6%' }}>
                  <div className="relative group">
                    <div className="w-6 h-6 bg-orange-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="absolute left-8 top-0 bg-white/95 rounded-lg p-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none min-w-[150px]">
                      <div className="text-sm font-bold text-orange-900 font-serif">Nigeria</div>
                      <div className="text-xs text-orange-700 font-serif">Things Fall Apart</div>
                    </div>
                  </div>
                </div>
                
                {/* Crime and Punishment - St. Petersburg, Russia (59.9°N, 30.3°E) */}
                <div className="absolute" style={{ left: '58.4%', top: '14.8%' }}>
                  <div className="relative group">
                    <div className="w-6 h-6 bg-purple-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="absolute left-8 top-0 bg-white/95 rounded-lg p-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none min-w-[150px]">
                      <div className="text-sm font-bold text-purple-900 font-serif">St. Petersburg</div>
                      <div className="text-xs text-purple-700 font-serif">Crime & Punishment</div>
                    </div>
                  </div>
                </div>
                
                {/* Their Eyes Were Watching God - Florida (27.8°N, 81.7°W) */}
                <div className="absolute" style={{ left: '27.3%', top: '33.6%' }}>
                  <div className="relative group">
                    <div className="w-6 h-6 bg-green-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="absolute left-8 top-0 bg-white/95 rounded-lg p-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none min-w-[150px]">
                      <div className="text-sm font-bold text-green-900 font-serif">Florida</div>
                      <div className="text-xs text-green-700 font-serif">Their Eyes Were Watching God</div>
                    </div>
                  </div>
                </div>
                
                {/* Animal Farm - English Countryside (52°N, 2°W) */}
                <div className="absolute" style={{ left: '49.4%', top: '16.5%' }}>
                  <div className="relative group">
                    <div className="w-6 h-6 bg-red-700 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="absolute left-8 top-0 bg-white/95 rounded-lg p-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none min-w-[150px]">
                      <div className="text-sm font-bold text-red-900 font-serif">English Countryside</div>
                      <div className="text-xs text-red-700 font-serif">Animal Farm</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Story Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Moby Dick */}
          <Link href="/mobydick" className="group">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-blue-900 font-serif">Nantucket, Massachusetts</h3>
              </div>
              <h4 className="text-lg font-semibold text-amber-900 font-serif mb-2">Moby Dick</h4>
              <p className="text-sm text-gray-700 mb-3">
                The whaling capital of the world in 1851, where Ishmael begins his fateful journey aboard the Pequod.
              </p>
              <div className="text-xs text-blue-600 font-serif">
                🌊 Atlantic Ocean • 🐋 Whaling Industry • ⛵ Maritime Culture
              </div>
            </div>
          </Link>

          {/* Pride and Prejudice */}
          <Link href="/prideandprejudice" className="group">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-red-200 hover:shadow-2xl transition-all group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-red-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-red-900 font-serif">Regency England</h3>
              </div>
              <h4 className="text-lg font-semibold text-amber-900 font-serif mb-2">Pride and Prejudice</h4>
              <p className="text-sm text-gray-700 mb-3">
                The countryside estates and drawing rooms of Georgian England, where social class and manners reign supreme.
              </p>
              <div className="text-xs text-red-600 font-serif">
                🏰 Country Estates • 💃 Social Gatherings • 📚 Literary Salons
              </div>
            </div>
          </Link>

          {/* Things Fall Apart */}
          <Link href="/thingsfallapart" className="group">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-orange-200 hover:shadow-2xl transition-all group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-orange-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-orange-900 font-serif">Igboland, Nigeria</h3>
              </div>
              <h4 className="text-lg font-semibold text-amber-900 font-serif mb-2">Things Fall Apart</h4>
              <p className="text-sm text-gray-700 mb-3">
                Pre-colonial Igbo villages in southeastern Nigeria, where traditional culture meets European colonialism.
              </p>
              <div className="text-xs text-orange-600 font-serif">
                🥁 Traditional Culture • 🌾 Agricultural Society • 🏘️ Village Life
              </div>
            </div>
          </Link>

          {/* Crime and Punishment */}
          <Link href="/crimeandpunishment" className="group">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-purple-200 hover:shadow-2xl transition-all group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-purple-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-purple-900 font-serif">St. Petersburg, Russia</h3>
              </div>
              <h4 className="text-lg font-semibold text-amber-900 font-serif mb-2">Crime and Punishment</h4>
              <p className="text-sm text-gray-700 mb-3">
                The crowded, oppressive streets of 19th century St. Petersburg, reflecting the psychological turmoil within.
              </p>
              <div className="text-xs text-purple-600 font-serif">
                🏙️ Urban Poverty • 🧠 Psychological Drama • ❄️ Russian Winter
              </div>
            </div>
          </Link>

          {/* Their Eyes Were Watching God */}
          <Link href="/theireyeswerewatchinggod" className="group">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-green-200 hover:shadow-2xl transition-all group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-green-900 font-serif">Florida, USA</h3>
              </div>
              <h4 className="text-lg font-semibold text-amber-900 font-serif mb-2">Their Eyes Were Watching God</h4>
              <p className="text-sm text-gray-700 mb-3">
                The rural South and Florida Everglades, where Janie Crawford discovers her voice and independence.
              </p>
              <div className="text-xs text-green-600 font-serif">
                🌴 Southern Landscape • 🌊 Hurricane Country • 🎭 Harlem Renaissance
              </div>
            </div>
          </Link>

          {/* Animal Farm */}
          <Link href="/animalfarm" className="group">
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-red-200 hover:shadow-2xl transition-all group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-red-700 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-red-900 font-serif">English Countryside</h3>
              </div>
              <h4 className="text-lg font-semibold text-amber-900 font-serif mb-2">Animal Farm</h4>
              <p className="text-sm text-gray-700 mb-3">
                A pastoral English farm that becomes the stage for political allegory and revolutionary ideals.
              </p>
              <div className="text-xs text-red-700 font-serif">
                🐷 Farm Animals • ⚖️ Political Allegory • 🚩 Revolutionary Themes
              </div>
            </div>
          </Link>

        </div>

        {/* Historical Context */}
        <div className="bg-gradient-to-r from-indigo-900/90 to-purple-800/90 border-4 border-indigo-400 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif">Literary Geography</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif">Why Setting Matters</h3>
                <p className="text-indigo-200 leading-relaxed font-serif mb-4">
                  The geographic settings of these novels aren't just backdrops—they're integral to understanding the characters, conflicts, and themes. From Nantucket's whaling culture to Nigeria's colonial encounter, each location shapes the story's meaning.
                </p>
                <ul className="text-indigo-200 space-y-2 font-serif">
                  <li>• <strong>Cultural Context:</strong> Settings reflect the values and conflicts of their time</li>
                  <li>• <strong>Character Development:</strong> Environment shapes personality and choices</li>
                  <li>• <strong>Symbolic Meaning:</strong> Landscapes mirror internal emotional states</li>
                  <li>• <strong>Historical Understanding:</strong> Geography provides historical context</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif">Exploring Connections</h3>
                <p className="text-indigo-200 leading-relaxed font-serif mb-4">
                  Notice how authors use setting to explore universal themes across different cultures and time periods. The isolation of Nantucket mirrors the psychological isolation in St. Petersburg, while the social hierarchies of England echo in different forms across continents.
                </p>
                <div className="bg-indigo-800/50 p-4 rounded-lg">
                  <p className="text-indigo-100 italic font-serif text-center">
                    "Every place is a story waiting to be told, and every story is shaped by its place."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
} 