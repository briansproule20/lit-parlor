'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
import { Marquee } from '@/components/ui/marquee'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { DotBackground } from '@/components/ui/dot-background'
import { EvervaultCardEnhanced } from '@/components/ui/evervault-card-enhanced'

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const modalData = {
    welcome: {
      title: "Welcome to Your Literary Journey",
      content: `Each book in our collection offers an immersive, interactive experience. 
      Discover characters, themes, symbols, and structures through engaging visual guides 
      designed to deepen your appreciation of these timeless works.

      Whether you're just beginning your reading journey or you're a seasoned 
      literary enthusiast, we offer meaningful learning experiences for every level.`,
      tagline: "Happy reading!",
      color: "amber"
    },
    gamification: {
      title: "Gamification in Education",
      content: `Our gamified approach transforms classic literature (and all learning!) 
      into an engaging, personalized adventure. By incorporating familiar game mechanics, 
      we strive to make learning both enjoyable and effective.

      This familiar framework empowers learners to take ownership of their educational 
      journey while building valuable skills and knowledge that contribute to their 
      personal and professional growth.`,
      tagline: "Education meets adventure!",
      color: "cyan"
    },
    education: {
      title: "Education & Human Capital",
      content: `Quality education builds the foundation of human progress. 
      By investing in developing independent voices, critical thinking, 
      and cultural understanding, we develop the intellectual capital 
      that drives responsible innovation and societal advancement.

      Literature serves as a powerful catalyst in this process, exposing students 
      to diverse perspectives, complex moral questions, and the full spectrum 
      of human experience across cultures and centuries.`,
      tagline: "Knowledge is power!",
      color: "red"
    },
    teachers: {
      title: "Tools for Teachers",
      content: `As a former teacher, I understand that educators juggle multiple demanding roles: 
      subject matter expert, curriculum designer, assessment specialist, data analyst, 
      and classroom manager—all while inspiring young minds.

      Our mission is to empower teachers with intelligent tools that streamline these 
      essential responsibilities and plug effortlessly into existing workflows, allowing you to focus on what matters most: teaching.`,
      tagline: "Empowering educators!",
      color: "green"
    }
  }
  return (
    <main className="min-h-screen py-8 px-4 pt-20 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dot Background */}
      <div className="opacity-30 absolute inset-0 pointer-events-none">
        <DotBackground />
      </div>
      
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative">
        
        {/* Bookstore Header */}
        <div className="text-center mb-12 relative">
          

          <div className="inline-block p-8 rounded-xl shadow-2xl relative bg-white" style={{
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
            <div className="mb-4">
              <TypewriterEffect 
                words={[
                  {
                    text: "The",
                    className: "text-amber-900",
                  },
                  {
                    text: "Parlor",
                    className: "text-amber-800",
                  },
                  {
                    text: "-",
                    className: "text-amber-900",
                  },
                  {
                    text: "By",
                    className: "text-amber-900",
                  },
                  {
                    text: "LitSalon",
                    className: "text-amber-800",
                  },
                ]}
                className="text-5xl font-bold font-serif"
                cursorClassName="bg-amber-700"
              />
            </div>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-serif">
              A cozy corner where great stories come alive. Making long form narratives available in contemporary short forms. We are a project still in development. An umbrella site for learning tools and education projects undertaken by Brian Sproule.
            </p>
            <div className="mt-4 text-amber-700 font-serif italic">
              "A home without books is like a body without a soul" — Cicero
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mb-8">
          <p className="text-amber-100 text-2xl font-serif italic mb-2">
            "The unexamined life is not worth living"
          </p>
          <p className="text-amber-200 text-sm font-serif">
            — Socrates
          </p>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block p-8 bg-gradient-to-r from-blue-900/90 to-blue-700/90 border-4 border-blue-400 rounded-2xl shadow-2xl relative overflow-hidden h-[300px] bg-white">
              {/* Background Beams Effect */}
              <BackgroundBeams className="opacity-90" />
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6 font-serif">
                  Our Mission
                </h2>
                <p className="text-blue-200 text-lg leading-relaxed font-serif max-w-3xl mx-auto">
                  We're revolutionizing literary education by combining gamification, multi-modal learning, and intelligent teaching tools to transform how students experience classic works - building critical thinking and cultural literacy while providing teachers with powerful tools that streamline lesson planning, classroom management, and student analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Information Boxes */}
        <div className="mb-16">
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-6">
            
            {/* Welcome Box */}
            <div className="text-center">
              <div className="w-full rounded-xl overflow-hidden" style={{ border: '3px solid #8B4513' }}>
                <EvervaultCardEnhanced
                  onClick={() => setOpenModal('welcome')}
                  className="w-full h-full"
                >
                  <button 
                    className="w-full p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group-hover/card:bg-opacity-70" 
                    style={{
                      background: 'rgba(254, 251, 240, 0.95)'
                    }}
                  >
                    <h3 className="text-xl font-bold text-amber-900 font-serif leading-tight">
                      Welcome to Your Literary Journey
                    </h3>
                    <p className="text-amber-700 text-sm font-serif mt-2">
                      Click to learn more
                    </p>
                  </button>
                </EvervaultCardEnhanced>
              </div>
            </div>

            {/* Gamification Box */}
            <div className="text-center">
              <div className="w-full rounded-xl overflow-hidden" style={{ border: '3px solid #0891b2' }}>
                <EvervaultCardEnhanced
                  onClick={() => setOpenModal('gamification')}
                  className="w-full h-full"
                >
                  <button 
                    className="w-full p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group-hover/card:bg-opacity-70" 
                    style={{
                      background: 'rgba(236, 254, 255, 0.95)'
                    }}
                  >
                    <h3 className="text-xl font-bold text-cyan-900 font-serif leading-tight">
                      Gamification in Education
                    </h3>
                    <p className="text-cyan-700 text-sm font-serif mt-2">
                      Click to learn more
                    </p>
                  </button>
                </EvervaultCardEnhanced>
              </div>
            </div>

            {/* Education & Human Capital Box */}
            <div className="text-center">
              <div className="w-full rounded-xl overflow-hidden" style={{ border: '3px solid #dc2626' }}>
                <EvervaultCardEnhanced
                  onClick={() => setOpenModal('education')}
                  className="w-full h-full"
                >
                  <button 
                    className="w-full p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group-hover/card:bg-opacity-70" 
                    style={{
                      background: 'rgba(254, 242, 242, 0.95)'
                    }}
                  >
                    <h3 className="text-xl font-bold text-red-900 font-serif leading-tight">
                      Education & Human Capital
                    </h3>
                    <p className="text-red-700 text-sm font-serif mt-2">
                      Click to learn more
                    </p>
                  </button>
                </EvervaultCardEnhanced>
              </div>
            </div>

            {/* Tools for Teachers Box */}
            <div className="text-center">
              <div className="w-full rounded-xl overflow-hidden" style={{ border: '3px solid #16a34a' }}>
                <EvervaultCardEnhanced
                  onClick={() => setOpenModal('teachers')}
                  className="w-full h-full"
                >
                  <button 
                    className="w-full p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group-hover/card:bg-opacity-70" 
                    style={{
                      background: 'rgba(240, 253, 244, 0.95)'
                    }}
                  >
                    <h3 className="text-xl font-bold text-green-900 font-serif leading-tight">
                      Tools for<br />Teachers
                    </h3>
                    <p className="text-green-700 text-sm font-serif mt-2">
                      Click to learn more
                    </p>
                  </button>
                </EvervaultCardEnhanced>
              </div>
            </div>

          </div>
        </div>

        {/* Featured Collection */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-100 mb-2 font-serif" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
            }}>
              Featured Collection
            </h2>
            <div className="w-32 h-1 bg-amber-600 mx-auto rounded"></div>
          </div>

          {/* 3D Marquee */}
          <div className="p-8">
            <div className="relative bg-black/10 backdrop-blur-md rounded-2xl p-4">
              <ThreeDMarquee 
                books={[
                // Column 1: Coming Soon cards (5 cards)
                {
                  id: 'coming-soon-1',
                  title: 'Coming Soon',
                  subtitle: 'New Classics',
                  author: 'Stay Tuned',
                  description: 'More literary masterpieces are being prepared for your exploration.',
                  coverImage: '/images/wood-texture.jpg'
                },
                {
                  id: 'coming-soon-2',
                  title: 'Coming Soon',
                  subtitle: 'Interactive Modules',
                  author: 'In Development',
                  description: 'New interactive learning experiences are on the horizon.',
                  coverImage: '/images/wood-texture.jpg'
                },
                {
                  id: 'coming-soon-3',
                  title: 'Coming Soon',
                  subtitle: 'Advanced Features',
                  author: 'In Development',
                  description: 'Enhanced learning tools and analytics are coming soon.',
                  coverImage: '/images/wood-texture.jpg'
                },
                {
                  id: 'coming-soon-4',
                  title: 'Coming Soon',
                  subtitle: 'Study Guides',
                  author: 'In Development',
                  description: 'Comprehensive study materials and analysis tools.',
                  coverImage: '/images/wood-texture.jpg'
                },
                {
                  id: 'coming-soon-5',
                  title: 'Coming Soon',
                  subtitle: 'Mobile App',
                  author: 'In Development',
                  description: 'Take your learning on the go with our mobile application.',
                  coverImage: '/images/wood-texture.jpg'
                },
                // Column 2: Coming Soon ABOVE, then 3 main books, then Coming Soon BELOW
                {
                  id: 'coming-soon-6',
                  title: 'Coming Soon',
                  subtitle: 'Romeo & Juliet',
                  author: 'William Shakespeare',
                  description: 'The timeless tale of star-crossed lovers. Explore themes of love, fate, and family conflict.',
                  coverImage: '/images/wood-texture.jpg'
                },
                {
                  id: 'mobydick',
                  title: 'Moby-Dick',
                  subtitle: 'or, The Whale',
                  author: 'Herman Melville',
                  description: 'Journey into the depths of obsession and the sea. Explore themes of fate, nature, and the human condition aboard the Pequod.',
                  coverImage: '/images/ahab.png'
                },
                {
                  id: 'prideandprejudice',
                  title: 'Pride and Prejudice',
                  subtitle: 'A Novel',
                  author: 'Jane Austen',
                  description: 'Navigate the social complexities of Georgian England. Explore love, marriage, and the power of first impressions in this beloved classic.',
                  coverImage: '/images/chapter2.png'
                },
                {
                  id: 'thingsfallapart',
                  title: 'Things Fall Apart',
                  subtitle: 'A Novel',
                  author: 'Chinua Achebe',
                  description: 'Journey into pre-colonial Nigeria. Witness the clash of cultures and the tragic consequences of change in this powerful narrative.',
                  coverImage: '/images/delight.png'
                },
                {
                  id: 'coming-soon-7',
                  title: 'Coming Soon',
                  subtitle: 'The Great Gatsby',
                  author: 'F. Scott Fitzgerald',
                  description: 'A tragic love story set in the Jazz Age. Explore themes of the American Dream and social class.',
                  coverImage: '/images/wood-texture.jpg'
                },
                // Column 3: Coming Soon ABOVE, then 3 main books, then Coming Soon BELOW
                {
                  id: 'coming-soon-8',
                  title: 'Coming Soon',
                  subtitle: 'The Odyssey',
                  author: 'Homer',
                  description: 'The epic journey of Odysseus. Explore themes of heroism, homecoming, and the human condition.',
                  coverImage: '/images/wood-texture.jpg'
                },
                {
                  id: 'theireyeswerewatchinggod',
                  title: 'Their Eyes Were Watching God',
                  subtitle: 'A Novel',
                  author: 'Zora Neale Hurston',
                  description: 'Follow Janie Crawford\'s journey of self-discovery through love, loss, and liberation in the American South. A powerful exploration of identity and independence.',
                  coverImage: '/images/elijah.png'
                },
                {
                  id: 'animalfarm',
                  title: 'Animal Farm',
                  subtitle: 'Satirical Novella',
                  author: 'George Orwell',
                  description: 'A powerful allegory of revolution and corruption. Witness how noble ideals can be twisted by power in this timeless tale of political satire.',
                  coverImage: '/images/pequod.png'
                },
                {
                  id: 'crimeandpunishment',
                  title: 'Crime and Punishment',
                  subtitle: 'A Novel',
                  author: 'Fyodor Dostoevsky',
                  description: 'Delve into the psychological depths of guilt and redemption. Follow Raskolnikov\'s tormented journey through moral philosophy and consequence.',
                  coverImage: '/images/coffin.png'
                },
                {
                  id: 'coming-soon-9',
                  title: 'Coming Soon',
                  subtitle: 'To Kill a Mockingbird',
                  author: 'Harper Lee',
                  description: 'A powerful story about racial injustice and growing up in the American South.',
                  coverImage: '/images/wood-texture.jpg'
                },
                // Column 4: Coming Soon cards (5 cards)
                {
                  id: 'coming-soon-10',
                  title: 'Coming Soon',
                  subtitle: 'More Content',
                  author: 'Stay Tuned',
                  description: 'Additional literary works and interactive experiences.',
                  coverImage: '/images/wood-texture.jpg'
                },
                {
                  id: 'coming-soon-11',
                  title: 'Coming Soon',
                  subtitle: 'Premium Features',
                  author: 'In Development',
                  description: 'Advanced analytics and personalized learning paths.',
                  coverImage: '/images/wood-texture.jpg'
                },
                {
                  id: 'coming-soon-12',
                  title: 'Coming Soon',
                  subtitle: 'Community Features',
                  author: 'Stay Tuned',
                  description: 'Collaborative learning and discussion forums.',
                  coverImage: '/images/wood-texture.jpg'
                },
                {
                  id: 'coming-soon-13',
                  title: 'Coming Soon',
                  subtitle: 'Analytics Dashboard',
                  author: 'In Development',
                  description: 'Track your learning progress and achievements.',
                  coverImage: '/images/wood-texture.jpg'
                },
                {
                  id: 'coming-soon-14',
                  title: 'Coming Soon',
                  subtitle: 'AI Tutor',
                  author: 'In Development',
                  description: 'Personalized learning assistance powered by AI.',
                  coverImage: '/images/wood-texture.jpg'
                }
              ]}
              className="h-[600px]"
              transform="rotateX(55deg) rotateY(0deg) rotateZ(-45deg)"
              containerPosition="top-8 left-[5%]"
              columnMovement="animate={{ y: colIndex % 2 === 0 ? 100 : -100 }} duration={{ colIndex % 2 === 0 ? 10 : 15 }}"
            />
            </div>
          </div>
        </div>

        {/* Browse the Stacks Button */}
        <div className="text-center mb-12">
          <Link 
            href="/fullcollection" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 text-lg font-serif border-2 border-amber-500"
          >
            Browse the Stacks
          </Link>
          <p className="text-amber-200/70 text-sm font-serif italic mt-2">
            view our full collection
          </p>
        </div>

        {/* Current Challenges */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-100 mb-2 font-serif" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
            }}>
              Current Challenges
            </h2>
            <div className="w-32 h-1 bg-amber-600 mx-auto rounded"></div>
          </div>

          <Marquee pauseOnHover className="[--duration:30s]">
            {/* Weekly Challenges */}
            <div className="mx-4 bg-blue-50 rounded-xl shadow-xl p-6 border-2 border-blue-200 min-w-[300px]">
              <h3 className="text-lg font-semibold text-blue-800 font-serif mb-4 flex items-center gap-2">
                <span className="text-xl">📅</span>
                Weekly Global Challenges
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-100 rounded-lg border border-blue-300">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-blue-800 font-serif text-sm">Speed Reading Sprint</h4>
                    <span className="text-blue-600 text-xs font-bold">2/3 days</span>
                  </div>
                  <p className="text-blue-700 text-xs font-serif mb-2">Read 15 pages daily for 3 consecutive days</p>
                  <div className="w-full bg-blue-200 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>
                
                <div className="p-3 bg-green-100 rounded-lg border border-green-300">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-green-800 font-serif text-sm">Character Analysis</h4>
                    <span className="text-green-600 text-xs font-bold">2/3 tasks</span>
                  </div>
                  <p className="text-green-700 text-xs font-serif mb-2">Complete 3 character analysis exercises</p>
                  <div className="w-full bg-green-200 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>
                
                <div className="p-3 bg-purple-100 rounded-lg border border-purple-300">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-purple-800 font-serif text-sm">Theme Hunter</h4>
                    <span className="text-purple-600 text-xs font-bold">1/4 themes</span>
                  </div>
                  <p className="text-purple-700 text-xs font-serif mb-2">Identify and analyze 4 recurring themes</p>
                  <div className="w-full bg-purple-200 rounded-full h-1.5">
                    <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assigned Challenges */}
            <div className="mx-4 bg-orange-50 rounded-xl shadow-xl p-6 border-2 border-orange-200 min-w-[300px]">
              <h3 className="text-lg font-semibold text-orange-800 font-serif mb-4 flex items-center gap-2">
                <span className="text-xl">📋</span>
                Your Assigned Challenges
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-orange-100 rounded-lg border border-orange-300">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-orange-800 font-serif text-sm">Moby Dick Analysis</h4>
                    <span className="text-orange-600 text-xs font-bold">Due: 3 days</span>
                  </div>
                  <p className="text-orange-700 text-xs font-serif mb-2">Analyze chapters 15-20 for symbolism</p>
                  <div className="w-full bg-orange-200 rounded-full h-1.5">
                    <div className="bg-orange-500 h-1.5 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
                
                <div className="p-3 bg-red-100 rounded-lg border border-red-300">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-red-800 font-serif text-sm">Essay Writing</h4>
                    <span className="text-red-600 text-xs font-bold">Due: 1 week</span>
                  </div>
                  <p className="text-red-700 text-xs font-serif mb-2">1000-word essay on character development</p>
                  <div className="w-full bg-red-200 rounded-full h-1.5">
                    <div className="bg-red-500 h-1.5 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>
                
                <div className="p-3 bg-teal-100 rounded-lg border border-teal-300">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-teal-800 font-serif text-sm">Forum Participation</h4>
                    <span className="text-teal-600 text-xs font-bold">Ongoing</span>
                  </div>
                  <p className="text-teal-700 text-xs font-serif mb-2">Participate in 5 Socratic discussions</p>
                  <div className="w-full bg-teal-200 rounded-full h-1.5">
                    <div className="bg-teal-500 h-1.5 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ongoing Arena Tournaments */}
            <div className="mx-4 bg-red-50 rounded-xl shadow-xl p-6 border-2 border-red-200 min-w-[300px]">
              <h3 className="text-lg font-semibold text-red-800 font-serif mb-4 flex items-center gap-2">
                <span className="text-xl">⚔️</span>
                Ongoing Arena Tournaments
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-100 rounded-lg border border-red-300">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-red-800 font-serif text-sm">Moby Dick Boss Battle</h4>
                    <span className="text-red-600 text-xs font-bold">Live Now</span>
                  </div>
                  <p className="text-red-700 text-xs font-serif mb-2">32 participants • Final exam challenge</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-red-600">🔥 Leaderboard: #7</span>
                    <span className="text-red-500">2h 15m left</span>
                  </div>
                </div>
                
                <div className="p-3 bg-orange-100 rounded-lg border border-orange-300">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-orange-800 font-serif text-sm">Literary Trivia Clash</h4>
                    <span className="text-orange-600 text-xs font-bold">Starting Soon</span>
                  </div>
                  <p className="text-orange-700 text-xs font-serif mb-2">18 participants • Quick-fire questions</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-orange-600">⚡ Speed Round</span>
                    <span className="text-orange-500">Starts in 45m</span>
                  </div>
                </div>
                
                <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-300">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-yellow-800 font-serif text-sm">Character Duel Arena</h4>
                    <span className="text-yellow-600 text-xs font-bold">Weekly</span>
                  </div>
                  <p className="text-yellow-700 text-xs font-serif mb-2">Debate character motivations & actions</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-yellow-600">🗡️ 1v1 Debates</span>
                    <span className="text-yellow-500">Join Queue</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Study Groups */}
            <div className="mx-4 bg-indigo-50 rounded-xl shadow-xl p-6 border-2 border-indigo-200 min-w-[300px]">
              <h3 className="text-lg font-semibold text-indigo-800 font-serif mb-4 flex items-center gap-2">
                <span className="text-xl">👥</span>
                Active Study Groups
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-indigo-100 rounded-lg border border-indigo-300">
                  <h4 className="font-semibold text-indigo-800 font-serif text-sm mb-1">Moby Dick Scholars</h4>
                  <p className="text-indigo-700 text-xs font-serif mb-2">5 members • Next meeting: Tomorrow</p>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <span className="text-indigo-600 text-xs">+2</span>
                  </div>
                </div>
                
                <div className="p-3 bg-violet-100 rounded-lg border border-violet-300">
                  <h4 className="font-semibold text-violet-800 font-serif text-sm mb-1">Classic Literature Club</h4>
                  <p className="text-violet-700 text-xs font-serif mb-2">12 members • Weekly discussions</p>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-violet-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-violet-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-violet-600 rounded-full"></div>
                    <span className="text-violet-600 text-xs">+9</span>
                  </div>
                </div>
                
                <div className="p-3 bg-pink-100 rounded-lg border border-pink-300">
                  <h4 className="font-semibold text-pink-800 font-serif text-sm mb-1">Essay Writing Workshop</h4>
                  <p className="text-pink-700 text-xs font-serif mb-2">8 members • Peer reviews</p>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-pink-600 rounded-full"></div>
                    <span className="text-pink-600 text-xs">+5</span>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
        </div>

        {/* Learning Modalities Mission Card */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block p-8 bg-gradient-to-r from-indigo-900/90 to-purple-800/90 border-4 border-indigo-400 rounded-2xl shadow-2xl relative overflow-hidden h-[500px] bg-white">
              {/* Background Beams Effect */}
              <BackgroundBeams className="opacity-90" />
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6 font-serif">
                  The Power of Different Modalities & Mediums
                </h2>
                <p className="text-indigo-200 text-lg leading-relaxed font-serif mb-6 max-w-3xl mx-auto">
                  Every learner is unique. Some grasp concepts through visual storytelling, others through interactive experiences, 
                  and many through a combination of multiple approaches. Traditional education often limits itself to a single medium, 
                  but true understanding flourishes when knowledge is presented through diverse channels.
                </p>
                <div className="bg-indigo-800/50 rounded-lg p-6 mb-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-4 font-serif">Our Goals</h3>
                  <p className="text-indigo-100 font-serif leading-relaxed">
                    It's our goal to harness the power of visual, auditory, kinesthetic, and interactive learning modalities 
                    and make them accessible to the next generation of learners. By combining literature with technology, 
                    traditional analysis with modern engagement, we create pathways for every mind to discover the joy of learning.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-indigo-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
                    <span className="font-serif">Visual Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                    <span className="font-serif">Auditory Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                    <span className="font-serif">Kinesthetic Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="font-serif">Interactive Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block p-8 bg-gradient-to-r from-orange-900/90 to-red-800/90 border-4 border-orange-400 rounded-2xl shadow-2xl relative overflow-hidden h-[300px] bg-white">
              {/* Background Beams Effect */}
              <BackgroundBeams className="opacity-90" />
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6 font-serif">
                  Resources
                </h2>
                <p className="text-orange-200 text-lg leading-relaxed font-serif mb-6 max-w-3xl mx-auto">
                  Essential tools and references to enhance your literary journey. Access comprehensive guides, 
                  terminology, and supplementary materials designed to deepen your understanding of literature.
                </p>
                <Link 
                  href="/glossary" 
                  className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 text-lg font-serif border-2 border-orange-400"
                >
                  📖 Glossary of Terms
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Lit Salon Workflow Section */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block p-8 bg-gradient-to-r from-pink-900/90 to-pink-700/90 border-4 border-pink-400 rounded-2xl shadow-2xl relative overflow-hidden h-[1000px] bg-white">
              {/* Background Beams Effect */}
              <BackgroundBeams className="opacity-90" />
              
              <div className="relative z-10 h-full flex flex-col justify-start pt-4">
                <h2 className="text-3xl font-bold text-white mb-6 font-serif">
                  Lit Salon Workflow
                </h2>
                <p className="text-pink-200 text-lg leading-relaxed font-serif mb-6 max-w-3xl mx-auto">
                  Our comprehensive gamified learning system designed to engage students and streamline teaching workflows.
                </p>
                
                {/* Workflow Steps */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="text-left">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">1</div>
                        <div className="text-purple-100 font-serif">
                          <span className="font-semibold">Student/Teacher Onboarding</span>
                          <p className="text-sm text-purple-200 mt-1">Initial setup and account creation for all users</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">2</div>
                        <div className="text-purple-100 font-serif">
                          <span className="font-semibold">Setup Class Rosters</span>
                          <p className="text-sm text-purple-200 mt-1">Create and manage student groups and assignments</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">3</div>
                        <div className="text-purple-100 font-serif">
                          <span className="font-semibold">Assign Modules</span>
                          <p className="text-sm text-purple-200 mt-1">Select literary works and learning objectives</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">4</div>
                        <div className="text-purple-100 font-serif">
                          <span className="font-semibold">Students Complete Module Quests for XP</span>
                          <p className="text-sm text-purple-200 mt-1">Gamified learning activities and assessments</p>
                          <div className="ml-2 mt-2 p-3 bg-purple-800/30 rounded-lg border-l-2 border-purple-400">
                            <p className="text-purple-200 text-xs font-semibold">Integrate Peer Collaboration:</p>
                            <p className="text-purple-300 text-xs mt-1">Add collaborative quests where students can form "guilds" or study groups to tackle certain challenges together. This builds community and supports different learning styles while maintaining the gamified structure.</p>
                          </div>
                          <div className="ml-2 mt-2 p-3 bg-purple-800/30 rounded-lg border-l-2 border-purple-400">
                            <p className="text-purple-200 text-xs font-semibold">🏆 Micro-Credentialing System:</p>
                            <p className="text-purple-300 text-xs mt-1">Break down the XP system into specific skill badges (close reading, textual analysis, creative response) that students can showcase and teachers can track for more granular assessment.</p>
                          </div>
                          <div className="ml-2 mt-2 p-3 bg-purple-800/30 rounded-lg border-l-2 border-purple-400">
                            <p className="text-purple-200 text-xs font-semibold">🎯 Student Agency Integration:</p>
                            <p className="text-purple-300 text-xs mt-1">Add a "Quest Creation" feature where advanced students can design challenges for peers, increasing ownership and deeper engagement with the material.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">5</div>
                        <div className="text-purple-100 font-serif">
                          <span className="font-semibold">Higher Levels Unlock More Difficult Assignments</span>
                          <p className="text-sm text-purple-200 mt-1">Progressive difficulty based on achievement</p>
                          <div className="ml-2 mt-2 p-3 bg-purple-800/30 rounded-lg border-l-2 border-purple-400">
                            <p className="text-purple-200 text-xs font-semibold">🎭 Adaptive Pathways:</p>
                            <p className="text-purple-300 text-xs mt-1">Instead of purely linear progression, allow students to choose between different "character classes" (analytical reader, creative interpreter, historical researcher) that offer varied approaches to the same literary content.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">6</div>
                        <div className="text-purple-100 font-serif">
                          <span className="font-semibold">Arena/Boss Battles (Final Assessments)</span>
                          <p className="text-sm text-purple-200 mt-1">Comprehensive evaluations after quest completion</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">7</div>
                        <div className="text-purple-100 font-serif">
                          <span className="font-semibold">Teacher Assessment Options</span>
                          <p className="text-sm text-purple-200 mt-1">Individual assignments, level ranges, or participation grades</p>
                          <div className="ml-2 mt-2 p-3 bg-purple-800/30 rounded-lg border-l-2 border-purple-400">
                            <p className="text-purple-200 text-xs font-semibold">⚡ Teacher Workflow Optimization:</p>
                            <p className="text-purple-300 text-xs mt-1">Include automated report generation that translates gamified achievements into traditional grade formats, and bulk assignment tools for managing multiple classes efficiently.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real-Time Progress Monitoring */}
                <div className="mb-6 p-4 bg-violet-800/30 rounded-lg border-l-4 border-violet-400">
                  <h3 className="text-violet-100 font-serif font-semibold mb-2">📊 Real-Time Progress Monitoring (Parallel to Steps 4-6)</h3>
                  <p className="text-violet-200 text-sm font-serif">
                    Create a dashboard that gives both teachers and students live feedback on progress, struggle points, and achievement patterns. This enables timely interventions rather than waiting for final assessments.
                  </p>
                </div>
                
                <div className="bg-violet-800/50 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-violet-100 font-serif text-sm">
                    <span className="font-semibold">🎯 Goal:</span> Transform traditional literary education into an engaging, 
                    gamified experience that motivates students while providing teachers with powerful assessment tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tutor Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 bg-gradient-to-r from-emerald-900/90 to-teal-800/90 border-4 border-emerald-400 rounded-2xl shadow-2xl relative overflow-hidden h-[300px] bg-white">
            {/* Background Beams Effect */}
            <BackgroundBeams className="opacity-90" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4 font-serif">
                Need Help with Literary Analysis, Writing, or Test Prep?
              </h2>
              <p className="text-emerald-200 text-lg mb-6 font-serif">
                Meet your AI Literary Tutor - Claude Hemingway - powered by famous authors and designed for educational excellence
              </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-emerald-200">
                <span className="text-green-400">✓</span>
                <span>Reading Comprehension</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200">
                <span className="text-green-400">✓</span>
                <span>Writing Skills</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200">
                <span className="text-green-400">✓</span>
                <span>Grammar & Vocabulary</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200">
                <span className="text-green-400">✓</span>
                <span>Literary Analysis</span>
              </div>
            </div>
            <a 
              href="https://github.com/briansproule20/claude_hemingway" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 inline-block text-lg"
            >
              See Project on GitHub
            </a>
            <p className="text-emerald-300 text-sm mt-3 font-serif italic">
              Integration coming soon.
            </p>
            </div>
          </div>
        </div>

        {/* Credit */}
        <div className="text-center mt-8">
          <p className="text-amber-200/80 text-xs font-serif">
            Ideas, Layout, and Build by Brian Sproule
          </p>
          <p className="text-amber-200/70 text-xs font-serif mt-1">
            Please reach out if you are interested in making use of our resources in your classroom.
          </p>
        </div>

        {/* Modal */}
        {openModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className={`text-3xl font-bold font-serif ${
                    modalData[openModal as keyof typeof modalData].color === 'amber' ? 'text-amber-900' :
                    modalData[openModal as keyof typeof modalData].color === 'cyan' ? 'text-cyan-900' :
                    modalData[openModal as keyof typeof modalData].color === 'red' ? 'text-red-900' :
                    'text-green-900'
                  }`}>
                    {modalData[openModal as keyof typeof modalData].title}
                  </h2>
                  <button 
                    onClick={() => setOpenModal(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
                <div className={`prose max-w-none ${
                  modalData[openModal as keyof typeof modalData].color === 'amber' ? 'text-amber-800' :
                  modalData[openModal as keyof typeof modalData].color === 'cyan' ? 'text-cyan-800' :
                  modalData[openModal as keyof typeof modalData].color === 'red' ? 'text-red-800' :
                  'text-green-800'
                } font-serif leading-relaxed text-base`}>
                  {modalData[openModal as keyof typeof modalData].content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className={`mt-8 text-center font-serif italic text-lg ${
                  modalData[openModal as keyof typeof modalData].color === 'amber' ? 'text-amber-700' :
                  modalData[openModal as keyof typeof modalData].color === 'cyan' ? 'text-cyan-700' :
                  modalData[openModal as keyof typeof modalData].color === 'red' ? 'text-red-700' :
                  'text-green-700'
                }`}>
                  {modalData[openModal as keyof typeof modalData].tagline}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  )
} 