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
    <main className="min-h-screen py-8 px-4 pt-24 relative" style={{
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
          

          <div className="inline-block p-8 rounded-xl shadow-2xl relative bg-white max-w-2xl" style={{
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
                    text: "Salon",
                    className: "text-amber-800",
                  },
                  {
                    text: "by",
                    className: "text-amber-900",
                  },
                  {
                    text: "LitParlor",
                    className: "text-amber-700",
                  },
                ]}
                className="text-5xl font-bold font-serif"
                cursorClassName="bg-amber-700"
              />
            </div>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-serif">
              Where the classics meet modern, short-form mediums.<br />
              Educational projects in development by Brian Sproule.
            </p>
            <div className="mt-4 text-amber-700 font-serif italic">
              "A home without books is like a body without a soul." — Cicero
            </div>
          </div>
        </div>



        {/* Mission Statement */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block p-8 bg-gradient-to-r from-blue-900/90 to-blue-700/90 border-4 border-blue-400 rounded-2xl shadow-2xl relative overflow-hidden h-[350px] bg-white">
              {/* Background Beams Effect */}
              <BackgroundBeams className="opacity-90" />
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-2 font-serif">
                  Our Mission
                </h2>
                <p className="text-blue-300 text-lg font-serif italic mb-6">
                  Educator curated, AI powered learning
                </p>
                <p className="text-blue-200 text-base leading-relaxed font-serif max-w-3xl mx-auto mb-4">
                  We're revolutionizing literary education by combining gamification, multi-modal learning, and intelligent teaching tools to transform how students experience classic works - building critical thinking and cultural literacy while providing teachers with powerful tools that streamline lesson planning, classroom management, and student analytics.
                </p>
                <div className="text-center">
                  <p className="text-blue-100 text-xl font-serif italic mb-2">
                    "The unexamined life is not worth living"
                  </p>
                  <p className="text-blue-200 text-sm font-serif">
                    — Socrates
                  </p>
                </div>
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
                  gradientColors="from-amber-500 to-orange-600"
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
                  gradientColors="from-cyan-500 to-blue-600"
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
                  gradientColors="from-red-500 to-pink-600"
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
                  gradientColors="from-green-500 to-emerald-600"
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
                    traditional analysis with modern engagement, we create pathways for every mind to discover the joys of life long learning.
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