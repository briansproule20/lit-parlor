import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative">
        
        {/* Bookstore Header */}
        <div className="text-center mb-12 relative">
          
          {/* Student Dropdown - Top Left */}
          <div className="absolute top-0 -left-24 group">
            <div className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif cursor-pointer">
              For Students: ▼
            </div>
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl border-2 border-blue-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[220px]">
              <div className="relative group/item">
                <Link href="/quests" className="block px-4 py-3 text-emerald-700 hover:bg-emerald-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                  🗺️ Quests
                </Link>
                <div className="absolute left-full top-0 ml-2 bg-emerald-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                  Complete literary adventures to unlock boss battles
                </div>
              </div>
              <div className="relative group/item">
                <Link href="/socratic-forum" className="block px-4 py-3 text-teal-700 hover:bg-teal-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                  🏛️ Socratic Forum
                </Link>
                <div className="absolute left-full top-0 ml-2 bg-teal-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                  Engage in discussions and collaborative analysis
                </div>
              </div>
              <div className="relative group/item">
                <Link href="/storyworlds" className="block px-4 py-3 text-purple-700 hover:bg-purple-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                  🗺️ Storyworlds
                </Link>
                <div className="absolute left-full top-0 ml-2 bg-purple-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                  Explore the geographic settings of literature
                </div>
              </div>
              <div className="relative group/item">
                <Link href="/student-dashboard" className="block px-4 py-3 text-green-700 hover:bg-green-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                  📊 Student Dashboard
                </Link>
                <div className="absolute left-full top-0 ml-2 bg-green-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                  Track your progress and achievements
                </div>
              </div>
              <div className="relative group/item">
                <Link href="/the-arena" className="block px-4 py-3 text-red-700 hover:bg-red-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                  ⚔️ The Arena
                </Link>
                <div className="absolute left-full top-0 ml-2 bg-red-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                  Battle boss encounters and competitive quizzes
                </div>
              </div>
              <div className="relative group/item">
                <Link href="/character" className="block px-4 py-3 text-amber-700 hover:bg-amber-50 font-serif font-semibold rounded-b-lg transition-colors">
                  👤 Your Character
                </Link>
                <div className="absolute left-full top-0 ml-2 bg-amber-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                  Customize your avatar and view profile
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Dropdown - Top Right */}
          <div className="absolute top-0 -right-24 group">
            <div className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif cursor-pointer">
              For Teachers: ▼
            </div>
            <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-2xl border-2 border-indigo-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[220px]">
              <div className="relative group/item">
                <Link href="/teacher-dashboard" className="block px-4 py-3 text-indigo-700 hover:bg-indigo-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                  📚 Teacher Dashboard
                </Link>
                <div className="absolute right-full top-0 mr-2 bg-indigo-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                  Manage classes and student assignments
                </div>
              </div>
              <div className="relative group/item">
                <Link href="/analytics-dashboard" className="block px-4 py-3 text-blue-700 hover:bg-blue-50 font-serif font-semibold rounded-b-lg transition-colors">
                  📊 Analytics Dashboard
                </Link>
                <div className="absolute right-full top-0 mr-2 bg-blue-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                  View student performance and progress data
                </div>
              </div>
            </div>
          </div>
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
            <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              The Literary Parlor // Lit Salon
            </h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-serif">
              A cozy corner where great stories come alive. Making long form narratives available in contemporary short forms. We are a project still in development. An umbrella site for learning tools and education projects undertaken by Brian Sproule.
            </p>
            <div className="mt-4 text-amber-700 font-serif italic">
              "A home without books is like a body without a soul" — Cicero
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block p-8 bg-gradient-to-r from-indigo-900/90 to-purple-800/90 border-4 border-indigo-400 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-300 rounded-full"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-purple-300 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-indigo-400 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-400 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-indigo-200 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6 font-serif">
                  Our Mission
                </h2>
                <p className="text-indigo-200 text-lg leading-relaxed font-serif max-w-3xl mx-auto">
                  We're revolutionizing literary education by combining gamification, multi-modal learning, and intelligent teaching tools to transform how students experience classic works - building critical thinking and cultural literacy while providing teachers with powerful tools that streamline lesson planning, classroom management, and student analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Information Boxes */}
        <div className="mb-16">
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-8">
            
            {/* Welcome Box - Left Side */}
            <div className="text-center">
              <div className="p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between" style={{
                background: 'rgba(254, 251, 240, 0.95)',
                border: '3px solid #8B4513'
              }}>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-6 font-serif leading-tight">
                    Welcome to Your Literary Journey
                  </h3>
                  <p className="text-amber-800 font-serif leading-relaxed text-base mb-6">
                    Each book in our collection offers an immersive, interactive experience. 
                    Discover characters, themes, symbols, and structures through engaging visual guides 
                    designed to deepen your appreciation of these timeless works.
                  </p>
                  <p className="text-amber-800 font-serif leading-relaxed text-base">
                    Whether you're just beginning your reading journey or you're a seasoned 
                    literary enthusiast, we offer meaningful learning experiences for every level.
                  </p>
                </div>
                <div className="mt-8 text-amber-700 font-serif italic text-base">
                  Happy reading!
                </div>
              </div>
            </div>

            {/* Gamification & Education Box - Middle */}
            <div className="text-center">
              <div className="p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between" style={{
                background: 'rgba(236, 254, 255, 0.95)',
                border: '3px solid #0891b2'
              }}>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-900 mb-6 font-serif leading-tight">
                    Gamification in Education
                  </h3>
                  <p className="text-cyan-800 font-serif leading-relaxed text-base mb-6">
                    Our gamified approach transforms classic literature (and all learning!) 
                    into an engaging, personalized adventure. By incorporating familiar game mechanics, 
                    we strive to make learning both enjoyable and effective.
                  </p>
                  <p className="text-cyan-800 font-serif leading-relaxed text-base">
                    This familiar framework empowers learners to take ownership of their educational 
                    journey while building valuable skills and knowledge that contribute to their 
                    personal and professional growth.
                  </p>
                </div>
                <div className="mt-8 text-cyan-700 font-serif italic text-base">
                  Education meets adventure!
                </div>
              </div>
            </div>

            {/* Education & Human Capital Box */}
            <div className="text-center">
              <div className="p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between" style={{
                background: 'rgba(254, 242, 242, 0.95)',
                border: '3px solid #dc2626'
              }}>
                <div>
                  <h3 className="text-2xl font-bold text-red-900 mb-6 font-serif leading-tight">
                    Education & Human Capital
                  </h3>
                  <p className="text-red-800 font-serif leading-relaxed text-base mb-6">
                    Quality education builds the foundation of human progress. 
                    By investing in developing independent voices, critical thinking, 
                    and cultural understanding, we develop the intellectual capital 
                    that drives responsible innovation and societal advancement.
                  </p>
                  <p className="text-red-800 font-serif leading-relaxed text-base">
                    Literature serves as a powerful catalyst in this process, exposing students 
                    to diverse perspectives, complex moral questions, and the full spectrum 
                    of human experience across cultures and centuries.
                  </p>
                </div>
                <div className="mt-8 text-red-700 font-serif italic text-base">
                  Knowledge is power!
                </div>
              </div>
            </div>

            {/* Tools for Teachers Box */}
            <div className="text-center">
              <div className="p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between" style={{
                background: 'rgba(240, 253, 244, 0.95)',
                border: '3px solid #16a34a'
              }}>
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-6 font-serif leading-tight">
                    Tools for Teachers
                  </h3>
                  <p className="text-green-800 font-serif leading-relaxed text-base mb-6">
                    As a former teacher, I understand that educators juggle multiple demanding roles: 
                    subject matter expert, curriculum designer, assessment specialist, data analyst, 
                    and classroom manager—all while inspiring young minds.
                  </p>
                  <p className="text-green-800 font-serif leading-relaxed text-base">
                    Our mission is to empower teachers with intelligent tools that streamline these 
                    essential responsibilities and plug effortlessly into existing workflows, allowing you to focus on what matters most: teaching.
                  </p>
                </div>
                <div className="mt-8 text-green-700 font-serif italic text-base">
                  Empowering educators!
                </div>
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
            <div className="w-32 h-1 bg-amber-400 mx-auto rounded"></div>
          </div>

          {/* Book Shelf */}
          <div className="bg-gradient-to-b from-amber-900 to-amber-800 p-8 rounded-xl shadow-2xl border-4 border-amber-700" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23654321" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}>
            <div className="grid gap-8">
              {/* First Row - Available Books */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                
                {/* Moby Dick Book */}
                <Link href="/mobydick" className="group block">
                  <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full">
                    <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-lg shadow-xl border-2 border-slate-600 hover:shadow-2xl transition-all group-hover:from-slate-700 group-hover:to-slate-600 h-full flex flex-col min-h-[340px]">
                      
                      {/* Book Cover */}
                      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 p-6 rounded-lg mb-4 relative overflow-hidden min-h-[160px]">
                        {/* Decorative elements */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-blue-300 opacity-20 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 bg-slate-300 opacity-20 rounded-full"></div>
                        
                        <h3 className="text-2xl font-bold text-amber-100 mb-2 font-serif text-center">
                          MOBY DICK
                        </h3>
                        <p className="text-amber-200 text-center font-serif italic mb-3">
                          or, The Whale
                        </p>
                        <div className="text-center text-amber-300 text-sm font-serif">
                          Herman Melville
                        </div>
                        
                        {/* Vintage decoration */}
                        <div className="mt-4 flex justify-center">
                          <div className="w-20 h-0.5 bg-amber-400"></div>
                        </div>
                      </div>
                      
                      {/* Book Description */}
                      <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                        Journey into the depths of obsession and the sea. Explore themes of fate, 
                        nature, and the human condition aboard the Pequod.
                      </p>
                      
                      {/* Reading Status */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-green-400 text-xs font-serif">✓ Interactive Edition</span>
                        <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Pride and Prejudice Book */}
                <Link href="/prideandprejudice" className="group block">
                  <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full">
                    <div className="bg-gradient-to-r from-rose-800 to-rose-700 p-6 rounded-lg shadow-xl border-2 border-rose-600 hover:shadow-2xl transition-all group-hover:from-rose-700 group-hover:to-rose-600 h-full flex flex-col min-h-[340px]">
                      
                      {/* Book Cover */}
                      <div className="bg-gradient-to-br from-rose-900 via-rose-800 to-pink-900 p-6 rounded-lg mb-4 relative overflow-hidden min-h-[160px]">
                        {/* Decorative elements */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-rose-300 opacity-20 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 bg-pink-300 opacity-20 rounded-full"></div>
                        
                        <h3 className="text-xl font-bold text-amber-100 mb-2 font-serif text-center leading-tight">
                          PRIDE & PREJUDICE
                        </h3>
                        <p className="text-amber-200 text-center font-serif italic mb-3">
                          A Novel
                        </p>
                        <div className="text-center text-amber-300 text-sm font-serif">
                          Jane Austen
                        </div>
                        
                        {/* Vintage decoration */}
                        <div className="mt-4 flex justify-center">
                          <div className="w-20 h-0.5 bg-amber-400"></div>
                        </div>
                      </div>
                      
                      {/* Book Description */}
                      <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                        Navigate the social complexities of Georgian England. Explore love, 
                        marriage, and the power of first impressions in this beloved classic.
                      </p>
                      
                      {/* Reading Status */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-green-400 text-xs font-serif">✓ Interactive Edition</span>
                        <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Things Fall Apart Book */}
                <Link href="/thingsfallapart" className="group block">
                  <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full">
                    <div className="bg-gradient-to-r from-orange-800 to-orange-700 p-6 rounded-lg shadow-xl border-2 border-orange-600 hover:shadow-2xl transition-all group-hover:from-orange-700 group-hover:to-orange-600 h-full flex flex-col min-h-[340px]">
                      
                      {/* Book Cover */}
                      <div className="bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 p-6 rounded-lg mb-4 relative overflow-hidden min-h-[160px]">
                        {/* Decorative elements */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-orange-300 opacity-20 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 bg-red-300 opacity-20 rounded-full"></div>
                        
                        <h3 className="text-xl font-bold text-amber-100 mb-2 font-serif text-center leading-tight">
                          THINGS FALL APART
                        </h3>
                        <p className="text-amber-200 text-center font-serif italic mb-3">
                          A Novel
                        </p>
                        <div className="text-center text-amber-300 text-sm font-serif">
                          Chinua Achebe
                        </div>
                        
                        {/* Vintage decoration */}
                        <div className="mt-4 flex justify-center">
                          <div className="w-20 h-0.5 bg-amber-400"></div>
                        </div>
                      </div>
                      
                      {/* Book Description */}
                      <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                        Journey into pre-colonial Nigeria. Witness the clash of cultures 
                        and the tragic consequences of change in this powerful narrative.
                      </p>
                      
                      {/* Reading Status */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-green-400 text-xs font-serif">✓ Interactive Edition</span>
                        <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                      </div>
                    </div>
                  </div>
                </Link>

              </div>

              {/* Second Row - More Featured Books */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                
                {/* Crime and Punishment Book */}
                <Link href="/crimeandpunishment" className="group block">
                  <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full">
                    <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-lg shadow-xl border-2 border-purple-700 hover:shadow-2xl transition-all group-hover:from-purple-800 group-hover:to-purple-700 h-full flex flex-col min-h-[340px]">
                      
                      {/* Book Cover */}
                      <div className="bg-gradient-to-br from-purple-950 via-purple-900 to-red-950 p-6 rounded-lg mb-4 relative overflow-hidden min-h-[160px]">
                        {/* Decorative elements */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-purple-300 opacity-20 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 bg-red-300 opacity-20 rounded-full"></div>
                        
                        <h3 className="text-lg font-bold text-amber-100 mb-2 font-serif text-center leading-tight">
                          CRIME & PUNISHMENT
                        </h3>
                        <p className="text-amber-200 text-center font-serif italic mb-3">
                          A Novel
                        </p>
                        <div className="text-center text-amber-300 text-sm font-serif">
                          Fyodor Dostoevsky
                        </div>
                        
                        {/* Vintage decoration */}
                        <div className="mt-4 flex justify-center">
                          <div className="w-20 h-0.5 bg-amber-400"></div>
                        </div>
                      </div>
                      
                      {/* Book Description */}
                      <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                        Delve into the psychological depths of guilt and redemption. 
                        Follow Raskolnikov's tormented journey through moral philosophy and consequence.
                      </p>
                      
                      {/* Reading Status */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-green-400 text-xs font-serif">✓ Interactive Edition</span>
                        <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Their Eyes Were Watching God Book */}
                <Link href="/theireyeswerewatchinggod" className="group block">
                  <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full">
                    <div className="bg-gradient-to-r from-teal-800 to-teal-700 p-6 rounded-lg shadow-xl border-2 border-teal-600 hover:shadow-2xl transition-all group-hover:from-teal-700 group-hover:to-teal-600 h-full flex flex-col min-h-[340px]">
                      
                      {/* Book Cover */}
                      <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 p-6 rounded-lg mb-4 relative overflow-hidden min-h-[160px]">
                        {/* Decorative elements */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-teal-300 opacity-20 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 bg-cyan-300 opacity-20 rounded-full"></div>
                        
                        <h3 className="text-base font-bold text-amber-100 mb-2 font-serif text-center leading-tight">
                          THEIR EYES WERE WATCHING GOD
                        </h3>
                        <p className="text-amber-200 text-center font-serif italic mb-3">
                          A Novel
                        </p>
                        <div className="text-center text-amber-300 text-sm font-serif">
                          Zora Neale Hurston
                        </div>
                        
                        {/* Vintage decoration */}
                        <div className="mt-4 flex justify-center">
                          <div className="w-20 h-0.5 bg-amber-400"></div>
                        </div>
                      </div>
                      
                      {/* Book Description */}
                      <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                        Follow Janie Crawford's journey of self-discovery through love, loss, 
                        and liberation in the American South. A powerful exploration of identity and independence.
                      </p>
                      
                      {/* Reading Status */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-green-400 text-xs font-serif">✓ Interactive Edition</span>
                        <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Animal Farm Book */}
                <Link href="/animalfarm" className="group block">
                  <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full">
                    <div className="bg-gradient-to-r from-red-800 to-red-700 p-6 rounded-lg shadow-xl border-2 border-red-600 hover:shadow-2xl transition-all group-hover:from-red-700 group-hover:to-red-600 h-full flex flex-col min-h-[340px]">
                      
                      {/* Book Cover */}
                      <div className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 p-6 rounded-lg mb-4 relative overflow-hidden min-h-[160px]">
                        {/* Decorative elements */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-red-300 opacity-20 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 bg-orange-300 opacity-20 rounded-full"></div>
                        
                        <h3 className="text-2xl font-bold text-amber-100 mb-2 font-serif text-center">
                          ANIMAL FARM
                        </h3>
                        <p className="text-amber-200 text-center font-serif italic mb-3">
                          Satirical Novella
                        </p>
                        <div className="text-center text-amber-300 text-sm font-serif">
                          George Orwell
                        </div>
                        
                        {/* Vintage decoration */}
                        <div className="mt-4 flex justify-center">
                          <div className="w-20 h-0.5 bg-amber-400"></div>
                        </div>
                      </div>
                      
                      {/* Book Description */}
                      <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                        A powerful allegory of revolution and corruption. Witness how noble ideals 
                        can be twisted by power in this timeless tale of political satire.
                      </p>
                      
                      {/* Reading Status */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-green-400 text-xs font-serif">✓ Interactive Edition</span>
                        <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                      </div>
                    </div>
                  </div>
                </Link>

              </div>
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
            <div className="inline-block p-8 bg-gradient-to-r from-indigo-900/90 to-purple-800/90 border-4 border-indigo-400 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-300 rounded-full"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-purple-300 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-indigo-400 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-400 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-indigo-200 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6 font-serif">
                  The Power of Different Modalities & Mediums
                </h2>
                <p className="text-indigo-200 text-lg leading-relaxed font-serif mb-6 max-w-3xl mx-auto">
                  Every learner is unique. Some grasp concepts through visual storytelling, others through interactive experiences, 
                  and many through a combination of multiple approaches. Traditional education often limits itself to a single medium, 
                  but true understanding flourishes when knowledge is presented through diverse channels.
                </p>
                <div className="bg-indigo-800/50 rounded-lg p-6 mb-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-indigo-200 mb-4 font-serif">Our Mission</h3>
                  <p className="text-indigo-100 font-serif leading-relaxed">
                    It's our mission to harness the power of visual, auditory, kinesthetic, and interactive learning modalities 
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
            <div className="inline-block p-8 bg-gradient-to-r from-orange-900/90 to-red-800/90 border-4 border-orange-400 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-12 h-12 bg-orange-300 rounded-full"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-300 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-orange-400 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-red-400 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange-200 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
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

        {/* AI Tutor Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 bg-gradient-to-r from-emerald-900/90 to-teal-800/90 border-4 border-emerald-400 rounded-2xl shadow-2xl">
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

        {/* Credit */}
        <div className="text-center mt-8">
          <p className="text-amber-200/80 text-xs font-serif">
            Ideas, Layout, and Build by Brian Sproule
          </p>
          <p className="text-amber-200/70 text-xs font-serif mt-1">
            Please reach out if you are interested in making use of our resources in your classroom.
          </p>
        </div>

      </div>
    </main>
  )
} 