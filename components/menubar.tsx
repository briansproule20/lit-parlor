'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Menubar() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isQuizPage = pathname.includes('/quiz')
  const [isVisible, setIsVisible] = useState(isHomePage)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  


  // Auto-hide after 3 seconds of inactivity
  useEffect(() => {
    const resetTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        if (!isHovered) {
          setIsVisible(false)
        }
      }, 3000)
    }

    // Only start timer if menubar is visible and not being hovered
    if (isVisible && !isHovered) {
      resetTimer()
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isVisible, isHovered])

  // Show on hover
  const handleMouseEnter = () => {
    setIsHovered(true)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = Math.abs(currentScrollY - lastScrollY)
      
      // Only respond to significant scroll movements (more than 5px)
      if (scrollDifference > 5) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past initial 100px
          setIsVisible(false)
        } else if (currentScrollY < lastScrollY && currentScrollY > 0) {
          // Scrolling up (but not at the very top)
          // On quiz pages, only show on larger scroll movements to avoid interference
          if (!isQuizPage || scrollDifference > 20) {
            setIsVisible(true)
          }
        }
        
        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Don't render menubar on quiz pages at all
  if (isQuizPage) {
    return null
  }

  return (
    <>
      {/* Hover area to show menubar */}
      <div 
        className="fixed top-0 left-0 right-0 h-4 z-40"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      
      {/* Main menubar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-amber-900/95 backdrop-blur-sm border-b border-amber-700 shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          
          {/* Return to Parlor Button - Far Left (only show when not on home page) */}
          {!isHomePage && (
            <div className="flex-shrink-0">
              <Link href="/" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif flex items-center space-x-2">
                <span>🏠</span>
                <span>Return to Parlor</span>
              </Link>
            </div>
          )}

          {/* Center Navigation Menu */}
          <div className={`flex justify-center space-x-8 ${isHomePage ? 'flex-1' : ''}`}>
            
            {/* Students Dropdown */}
            <div className="group relative">
              <div className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif cursor-pointer">
                For Students: ▼
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-2xl border-2 border-blue-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[220px]">
                <div className="relative group/item">
                  <Link href="/quests" className="block px-4 py-3 text-emerald-700 hover:bg-emerald-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    Quests
                  </Link>
                  <div className="absolute left-full top-0 ml-2 bg-emerald-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Complete literary adventures to unlock boss battles
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/socratic-forum" className="block px-4 py-3 text-teal-700 hover:bg-teal-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    Socratic Forum
                  </Link>
                  <div className="absolute left-full top-0 ml-2 bg-teal-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Engage in discussions and collaborative analysis
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/student-dashboard" className="block px-4 py-3 text-green-700 hover:bg-green-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    Student Dashboard
                  </Link>
                  <div className="absolute left-full top-0 ml-2 bg-green-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Track your progress and achievements
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/the-arena" className="block px-4 py-3 text-red-700 hover:bg-red-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    The Arena
                  </Link>
                  <div className="absolute left-full top-0 ml-2 bg-red-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Battle boss encounters and competitive quizzes
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/character" className="block px-4 py-3 text-amber-700 hover:bg-amber-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    Your Character
                  </Link>
                  <div className="absolute left-full top-0 ml-2 bg-amber-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Customize your avatar and view profile
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/fullcollection" className="block px-4 py-3 text-purple-700 hover:bg-purple-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    Full Collection
                  </Link>
                  <div className="absolute left-full top-0 ml-2 bg-purple-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Browse our complete library of works
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/storyworlds" className="block px-4 py-3 text-orange-700 hover:bg-orange-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    Storyworlds
                  </Link>
                  <div className="absolute left-full top-0 ml-2 bg-orange-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Explore immersive literary worlds and settings
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/chat" className="block px-4 py-3 text-pink-700 hover:bg-pink-50 font-serif font-semibold rounded-b-lg transition-colors">
                    ELA Tutor Chat
                  </Link>
                  <div className="absolute left-full top-0 ml-2 bg-pink-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Get personalized help with reading and writing
                  </div>
                </div>
              </div>
            </div>

            {/* Teachers Dropdown */}
            <div className="group relative">
              <div className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif cursor-pointer">
                For Teachers: ▼
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-2xl border-2 border-indigo-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[220px]">
                <div className="relative group/item">
                  <Link href="/teacher-dashboard" className="block px-4 py-3 text-indigo-700 hover:bg-indigo-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    Teacher Dashboard
                  </Link>
                  <div className="absolute right-full top-0 mr-2 bg-indigo-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Manage classes and student assignments
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/classes" className="block px-4 py-3 text-green-700 hover:bg-green-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    Classes
                  </Link>
                  <div className="absolute right-full top-0 mr-2 bg-green-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    View and manage your class roster
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/analytics-dashboard" className="block px-4 py-3 text-blue-700 hover:bg-blue-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    Analytics Dashboard
                  </Link>
                  <div className="absolute right-full top-0 mr-2 bg-blue-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Track student progress and performance
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/student-success" className="block px-4 py-3 text-purple-700 hover:bg-purple-50 font-serif font-semibold border-b border-gray-100 transition-colors">
                    Student Success
                  </Link>
                  <div className="absolute right-full top-0 mr-2 bg-purple-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Monitor and support student achievement
                  </div>
                </div>
                <div className="relative group/item">
                  <Link href="/pedagogy" className="block px-4 py-3 text-teal-700 hover:bg-teal-50 font-serif font-semibold rounded-b-lg transition-colors">
                    Pedagogy
                  </Link>
                  <div className="absolute right-full top-0 mr-2 bg-teal-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-60">
                    Teaching strategies and methodologies
                  </div>
                </div>
              </div>
            </div>

            {/* Parents Dropdown */}
            <div className="group relative">
              <div className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif cursor-pointer">
                For Parents: ▼
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-2xl border-2 border-amber-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[220px]">
                <div className="text-center py-4">
                  <h3 className="font-semibold text-amber-900 mb-2">Coming Soon</h3>
                  <p className="text-amber-700 text-sm">
                    Parent resources and tools will be available soon.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Spacer for right side balance */}
          <div className="flex-shrink-0 w-[140px]"></div>

        </div>
      </div>
    </>
  )
} 