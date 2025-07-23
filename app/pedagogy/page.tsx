import React from 'react'
import Link from 'next/link'

export default function Pedagogy() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Navigation */}
        <div className="flex justify-between items-start mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🏠 Return to Parlor
          </Link>
          
          <Link 
            href="/teacher-dashboard" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            📚 Teacher Dashboard
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 font-serif mb-4">
            The Art of Teaching: A History of Pedagogy
          </h1>
          <p className="text-amber-700 text-lg font-serif">
            Exploring the evolution of educational philosophy and practice
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/95 rounded-xl shadow-xl p-8 border-2 border-amber-200">
          
          {/* Ancient Foundations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-6 border-b-2 border-amber-300 pb-2">
              Ancient Foundations
            </h2>
            <div className="space-y-6 text-gray-800 font-serif">
              <p className="text-lg leading-relaxed">
                The word "pedagogy" derives from the Greek <em>paidagogos</em>, meaning "leader of children." 
                In ancient Greece, a paidagogos was a slave who escorted children to school and supervised their conduct.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Socrates (470-399 BCE)</strong> revolutionized teaching through his method of questioning, 
                known as the Socratic method. Rather than lecturing, he engaged students in dialogue to help them 
                discover knowledge through critical thinking and self-examination. His famous dictum "The unexamined 
                life is not worth living" reflects his belief in the importance of self-reflection in learning.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Plato (428-348 BCE)</strong> founded the Academy in Athens, the first institution of higher 
                learning in the Western world. He emphasized the importance of philosophy and mathematics in education, 
                believing that true knowledge came from understanding eternal forms rather than the changing world of 
                appearances.
              </p>
            </div>
          </div>

          {/* Classical and Medieval Periods */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-6 border-b-2 border-amber-300 pb-2">
              Classical and Medieval Periods
            </h2>
            <div className="space-y-6 text-gray-800 font-serif">
              <p className="text-lg leading-relaxed">
                <strong>Aristotle (384-322 BCE)</strong> emphasized observation and experience in learning. 
                He believed that knowledge came from both reason and sensory experience, laying the groundwork 
                for empirical approaches to education.
              </p>
              <p className="text-lg leading-relaxed">
                During the Middle Ages, education was primarily conducted in monasteries and cathedral schools. 
                The <strong>Scholastic method</strong> emerged, emphasizing logical argumentation and the reconciliation 
                of faith with reason. Scholars like Thomas Aquinas (1225-1274) sought to harmonize Christian theology 
                with Aristotelian philosophy.
              </p>
            </div>
          </div>

          {/* Renaissance and Enlightenment */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-6 border-b-2 border-amber-300 pb-2">
              Renaissance and Enlightenment
            </h2>
            <div className="space-y-6 text-gray-800 font-serif">
              <p className="text-lg leading-relaxed">
                The Renaissance (14th-17th centuries) saw a revival of classical learning and humanism. 
                Educators like <strong>Erasmus (1466-1536)</strong> emphasized the study of classical texts 
                and the development of individual character through education.
              </p>
              <p className="text-lg leading-relaxed">
                The Enlightenment (17th-18th centuries) brought new educational philosophies. 
                <strong>John Locke (1632-1704)</strong> argued that the mind was a "tabula rasa" (blank slate) 
                at birth, emphasizing the role of experience and environment in shaping learning. 
                <strong>Jean-Jacques Rousseau (1712-1778)</strong> advocated for natural education that 
                respected children's natural development and curiosity.
              </p>
            </div>
          </div>

          {/* Modern Era */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-6 border-b-2 border-amber-300 pb-2">
              Modern Era
            </h2>
            <div className="space-y-6 text-gray-800 font-serif">
              <p className="text-lg leading-relaxed">
                <strong>John Dewey (1859-1952)</strong> revolutionized education with his progressive philosophy. 
                He believed that education should be experiential and democratic, preparing students for active 
                participation in society. His emphasis on "learning by doing" influenced modern project-based learning.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Maria Montessori (1870-1952)</strong> developed an educational method based on scientific 
                observation of children. Her approach emphasizes self-directed learning, hands-on materials, and 
                respect for each child's natural development.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Lev Vygotsky (1896-1934)</strong> introduced the concept of the "zone of proximal development," 
                emphasizing the importance of social interaction and scaffolding in learning. His work laid the 
                foundation for collaborative learning approaches.
              </p>
            </div>
          </div>

          {/* Contemporary Approaches */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-6 border-b-2 border-amber-300 pb-2">
              Contemporary Approaches
            </h2>
            <div className="space-y-6 text-gray-800 font-serif">
              <p className="text-lg leading-relaxed">
                Today's pedagogy encompasses diverse approaches: <strong>constructivism</strong> (learners construct 
                knowledge through experience), <strong>connectivism</strong> (learning through networks and connections), 
                and <strong>blended learning</strong> (combining traditional and digital methods).
              </p>
              <p className="text-lg leading-relaxed">
                Modern educators emphasize <strong>student-centered learning</strong>, <strong>differentiated instruction</strong>, 
                and <strong>culturally responsive teaching</strong>. Technology has opened new possibilities for 
                personalized learning and global collaboration.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg p-6 border-2 border-amber-300">
            <h3 className="text-2xl font-bold text-amber-900 font-serif mb-4">
              Applying Pedagogy in Your Classroom
            </h3>
            <p className="text-amber-800 font-serif mb-4">
              Understanding the history of pedagogy helps us make informed decisions about our teaching practices. 
              Consider how these historical approaches might inform your own teaching philosophy and methods.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/teacher-dashboard" 
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
              >
                Return to Teacher Dashboard
              </Link>
              <Link 
                href="/classes" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif"
              >
                Manage Classes
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
} 