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

          {/* Depth of Knowledge */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-6 border-b-2 border-amber-300 pb-2">
              Depth of Knowledge (DOK)
            </h2>
            <div className="space-y-6 text-gray-800 font-serif">
              <p className="text-lg leading-relaxed">
                Developed by <strong>Norman Webb</strong> in the late 1990s, Depth of Knowledge (DOK) is a framework 
                that categorizes tasks according to the complexity of thinking required, rather than difficulty. 
                This model helps educators design instruction and assessments that promote deeper learning.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 font-serif mb-3">Level 1: Recall & Reproduction</h3>
                  <p className="text-blue-800 font-serif">
                    Basic recall of facts, terms, or simple procedures. Students demonstrate knowledge of subject matter 
                    through rote responses, recognition, or simple application of skills.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-900 font-serif mb-3">Level 2: Skills & Concepts</h3>
                  <p className="text-green-800 font-serif">
                    Students use information and conceptual knowledge to solve problems. This includes comparing, 
                    organizing, summarizing, and making simple inferences.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                  <h3 className="text-xl font-bold text-orange-900 font-serif mb-3">Level 3: Strategic Thinking</h3>
                  <p className="text-orange-800 font-serif">
                    Students engage in complex reasoning, analysis, and evaluation. Tasks require planning, 
                    justification, and explanation of thinking processes.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-purple-900 font-serif mb-3">Level 4: Extended Thinking</h3>
                  <p className="text-purple-800 font-serif">
                    Students engage in complex, multi-step reasoning and planning. Tasks require synthesis, 
                    creation, and analysis across multiple contexts and time periods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bloom's Taxonomy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-6 border-b-2 border-amber-300 pb-2">
              Bloom's Taxonomy
            </h2>
            <div className="space-y-6 text-gray-800 font-serif">
              <p className="text-lg leading-relaxed">
                Originally developed by <strong>Benjamin Bloom</strong> in 1956 and revised in 2001, Bloom's Taxonomy 
                provides a framework for categorizing educational goals and objectives. The taxonomy helps teachers 
                design instruction that moves students from basic knowledge to higher-order thinking skills.
              </p>
              
              <div className="bg-gradient-to-b from-indigo-50 to-purple-50 p-6 rounded-lg border-2 border-indigo-200">
                <h3 className="text-2xl font-bold text-indigo-900 font-serif mb-4 text-center">The Six Levels of Bloom's Taxonomy</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-red-900 font-serif">Remember</h4>
                      <p className="text-gray-700 font-serif text-sm">Recall facts, terms, basic concepts. Recognize, list, define, identify.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-orange-900 font-serif">Understand</h4>
                      <p className="text-gray-700 font-serif text-sm">Explain ideas, interpret, summarize, compare, describe.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-yellow-900 font-serif">Apply</h4>
                      <p className="text-gray-700 font-serif text-sm">Use information in new situations, implement, solve, demonstrate.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-green-900 font-serif">Analyze</h4>
                      <p className="text-gray-700 font-serif text-sm">Break down information, examine relationships, compare, contrast.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-bold text-blue-900 font-serif">Evaluate</h4>
                      <p className="text-gray-700 font-serif text-sm">Make judgments, critique, assess, justify, defend.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">6</div>
                    <div>
                      <h4 className="font-bold text-purple-900 font-serif">Create</h4>
                      <p className="text-gray-700 font-serif text-sm">Produce new work, design, construct, develop, compose.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing the Learning Gap */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 font-serif mb-6 border-b-2 border-amber-300 pb-2">
              Closing the Learning Gap
            </h2>
            <div className="space-y-6 text-gray-800 font-serif">
              <p className="text-lg leading-relaxed">
                The learning gap refers to the difference between what students are expected to know and what they 
                actually know. Closing these gaps requires systematic approaches that address both academic and 
                non-academic factors affecting student achievement.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border-2 border-teal-200">
                  <h3 className="text-xl font-bold text-teal-900 font-serif mb-4">Assessment & Identification</h3>
                  <ul className="space-y-2 text-teal-800 font-serif">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Formative assessments to identify specific gaps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Data analysis to understand patterns and trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Individual student progress monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Regular check-ins and feedback loops</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-lg border-2 border-rose-200">
                  <h3 className="text-xl font-bold text-rose-900 font-serif mb-4">Targeted Interventions</h3>
                  <ul className="space-y-2 text-rose-800 font-serif">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>Differentiated instruction strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>Small group and one-on-one support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>Scaffolding and gradual release of responsibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>Multi-sensory and adaptive learning approaches</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-200">
                <h3 className="text-xl font-bold text-amber-900 font-serif mb-4">Systemic Approaches</h3>
                <div className="grid md:grid-cols-3 gap-4 text-amber-800 font-serif">
                  <div>
                    <h4 className="font-semibold mb-2">Early Intervention</h4>
                    <p className="text-sm">Address gaps as soon as they appear, before they compound over time.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Family Engagement</h4>
                    <p className="text-sm">Partner with families to support learning both in and out of school.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Community Resources</h4>
                    <p className="text-sm">Leverage community partnerships to provide additional support services.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-2 border-emerald-200">
                <h3 className="text-xl font-bold text-emerald-900 font-serif mb-4">Evidence-Based Strategies</h3>
                <ul className="space-y-2 text-emerald-800 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>High-dosage tutoring:</strong> Intensive, targeted support for struggling students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Extended learning time:</strong> Additional instructional hours and summer programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Professional development:</strong> Ongoing teacher training in effective strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Technology integration:</strong> Adaptive learning platforms and digital tools</span>
                  </li>
                </ul>
              </div>
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