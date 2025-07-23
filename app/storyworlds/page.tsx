"use client";
import React from 'react'
import Link from 'next/link'
import WorldMap from '@/components/ui/world-map'
import GlobeDemo from '@/components/ui/globe-demo'
import { motion } from "motion/react"

export default function Storyworlds() {
  const locationData = [
    // Nantucket, Massachusetts (Moby Dick) - Blue
    {
      id: "moby-dick-nantucket",
      title: "Moby Dick",
      author: "Herman Melville",
      location: "Nantucket, Massachusetts",
      description: "The whaling capital of the world in 1851, where Ishmael begins his fateful journey aboard the Pequod. This small island off the coast of Massachusetts was the center of the American whaling industry.",
      color: "#2563eb"
    },
    // England (Pride and Prejudice) - Red
    {
      id: "pride-prejudice-england",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      location: "Regency England",
      description: "The countryside estates and drawing rooms of Georgian England, where social class and manners reign supreme. The novel explores the marriage market and social hierarchy of early 19th century England.",
      color: "#dc2626"
    },
    // Nigeria (Things Fall Apart) - Orange
    {
      id: "things-fall-apart-nigeria",
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      location: "Igboland, Nigeria",
      description: "Pre-colonial Igbo villages in southeastern Nigeria, where traditional culture meets European colonialism. The novel explores the clash between traditional African culture and European imperialism.",
      color: "#ea580c"
    },
    // St. Petersburg, Russia (Crime and Punishment) - Purple
    {
      id: "crime-punishment-russia",
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      location: "St. Petersburg, Russia",
      description: "The crowded, oppressive streets of 19th century St. Petersburg, reflecting the psychological turmoil within. The city's poverty and social inequality mirror Raskolnikov's internal conflict.",
      color: "#9333ea"
    },
    // Florida (Their Eyes Were Watching God) - Green
    {
      id: "their-eyes-florida",
      title: "Their Eyes Were Watching God",
      author: "Zora Neale Hurston",
      location: "Florida, USA",
      description: "The rural South and Florida Everglades, where Janie Crawford discovers her voice and independence. The novel explores African American life in the early 20th century American South.",
      color: "#16a34a"
    },
    // English Countryside (Animal Farm) - Dark Red
    {
      id: "animal-farm-england",
      title: "Animal Farm",
      author: "George Orwell",
      location: "English Countryside",
      description: "A pastoral English farm that becomes the stage for political allegory and revolutionary ideals. The farm setting serves as a microcosm for political systems and power dynamics.",
      color: "#b91c1c"
    }
  ];

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
            <h1 className="text-4xl font-bold text-amber-900 mb-6 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              Storytelling is a Global, Human Experience
            </h1>
            <p className="text-lg text-amber-800 max-w-3xl mx-auto leading-relaxed font-serif">
              Explore the geographic landscapes where our literary journeys unfold. From the whaling ports of New England to the drawing rooms of England, discover the real-world settings that shaped these timeless stories.
            </p>
          </div>
        </div>

        {/* Interactive Literary Globe */}
        <GlobeDemo />

        {/* World Map Container */}
        <div className="bg-white/95 rounded-xl shadow-2xl p-8 border-2 border-amber-200 mb-8">
          <div className="relative">

            
            {/* Interactive World Map */}
            <div className="relative">
              <WorldMap
                dots={[
                  {
                    start: { x: 251, y: 153 }, // Nantucket, Massachusetts
                    end: { x: 394, y: 98 }, // England
                  },
                  {
                    start: { x: 394, y: 98 }, // England
                    end: { x: 420, y: 220 }, // Nigeria
                  },
                  {
                    start: { x: 420, y: 220 }, // Nigeria
                    end: { x: 500, y: 100 }, // St. Petersburg, Russia
                  },
                  {
                    start: { x: 500, y: 100 }, // St. Petersburg, Russia
                    end: { x: 240, y: 180 }, // Florida
                  },
                  {
                    start: { x: 240, y: 180 }, // Florida
                    end: { x: 400, y: 110 }, // English Countryside
                  },
                  {
                    start: { x: 400, y: 110 }, // English Countryside
                    end: { x: 251, y: 153 }, // Back to Nantucket
                  },
                ]}
                lineColor="#8B4513"
                                useManualPositioning={true}
                locationData={locationData}
                />
              
              {/* Story Location Legend */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-serif">Moby Dick - Nantucket</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  <span className="text-sm font-serif">Pride & Prejudice - England</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                  <span className="text-sm font-serif">Things Fall Apart - Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                  <span className="text-sm font-serif">Crime & Punishment - Russia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <span className="text-sm font-serif">Their Eyes Were Watching God - Florida</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-700 rounded-full"></div>
                  <span className="text-sm font-serif">Animal Farm - English Countryside</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-16">
          
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