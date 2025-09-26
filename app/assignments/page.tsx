'use client'

import React from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function AssignmentsPage() {
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

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative bg-white max-w-3xl" style={{
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
            <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif">
              Assignment Management
            </h1>
            <p className="text-lg text-amber-800 font-serif">
              Assignment management tools inbound courtesy of Merit System's echo infrastructure.
            </p>
          </div>
        </div>

        {/* Assignment Types Guide */}
        <div className="bg-gradient-to-r from-amber-800/90 to-orange-800/90 border-4 border-amber-300 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif text-center">Assignment Types</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 font-serif text-orange-300">Essays & Responses</h3>
                <p className="text-amber-200 font-serif text-sm">
                  Analytical essays, character studies, theme analysis, and reading responses that develop critical thinking skills.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 font-serif text-orange-300">Quizzes & Assessments</h3>
                <p className="text-amber-200 font-serif text-sm">
                  Knowledge checks, comprehension quizzes, and formative assessments to gauge understanding and progress.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 font-serif text-orange-300">Discussions & Projects</h3>
                <p className="text-amber-200 font-serif text-sm">
                  Socratic discussions, collaborative projects, and creative assignments that foster engagement and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Assignment Repository */}
        <div className="bg-white/95 rounded-xl shadow-xl p-8 border-2 border-purple-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-4 font-serif">Coming Soon</h2>
            <h3 className="text-2xl font-semibold text-purple-800 mb-6 font-serif">Global Assignment Repository</h3>
            <p className="text-purple-700 text-lg font-serif mb-6 max-w-2xl mx-auto">
              Store old assignments, make your assignments publically available, or access other assignments made by our team.
              Access a curated collection of high-quality assignments from educators worldwide.
              Share your best assignments and discover innovative teaching resources created by fellow teachers.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-purple-800 font-serif text-sm">
                <strong>Features coming soon:</strong> Assignment sharing, peer reviews, rating system,
                subject-specific collections, and integration with your existing assignments.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}