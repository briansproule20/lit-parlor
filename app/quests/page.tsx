import React from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function Quests() {
  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #065f46 0%, #047857 25%, #059669 50%, #10b981 75%, #34d399 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dot Background */}
      <div className="opacity-30 absolute inset-0 pointer-events-none">
        <DotBackground />
      </div>

      {/* Adventure lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 via-transparent to-emerald-900/30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12 mt-20">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 60%),
              linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 20%, #DEB887 40%, #F5DEB3 60%, #E6D8B5 80%, #FEFBF0 100%)
            `,
            border: '3px solid #059669',
            boxShadow: `
              0 8px 32px rgba(5, 150, 105, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.7),
              inset 0 -2px 4px rgba(5, 150, 105, 0.2)
            `
          }}>
            <h1 className="text-4xl font-bold text-emerald-900 mb-4 font-serif" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
            }}>
              🗺️ Literary Quests
            </h1>
            <p className="text-lg text-emerald-800 max-w-3xl mx-auto leading-relaxed font-serif">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Pedagogical Overviews */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-100 mb-8 font-serif text-center" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            Pedagogical Overviews
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Reading Quests Overview */}
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-yellow-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-yellow-900 font-serif">Reading Quests</h3>
                <p className="text-yellow-700 font-serif italic">Comprehension & Engagement</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2 font-serif">Learning Objectives</h4>
                  <ul className="text-sm text-yellow-700 space-y-1 font-serif">
                    <li>• Develop close reading skills and textual analysis</li>
                    <li>• Build vocabulary and contextual understanding</li>
                    <li>• Identify key themes, symbols, and motifs</li>
                    <li>• Practice active reading strategies</li>
                    <li>• Enhance reading comprehension and retention</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2 font-serif">Sample Activities</h4>
                  <ul className="text-sm text-yellow-700 space-y-1 font-serif">
                    <li>• Chapter-by-chapter reading guides</li>
                    <li>• Key passage identification exercises</li>
                    <li>• Vocabulary building challenges</li>
                    <li>• Reading comprehension quizzes</li>
                    <li>• Annotation and note-taking practice</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2 font-serif">Assessment Methods</h4>
                  <ul className="text-sm text-yellow-700 space-y-1 font-serif">
                    <li>• Reading comprehension tests</li>
                    <li>• Passage analysis responses</li>
                    <li>• Vocabulary mastery checks</li>
                    <li>• Reading progress tracking</li>
                    <li>• Completion-based XP rewards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Analysis Quests Overview */}
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900 font-serif">Analysis Quests</h3>
                <p className="text-blue-700 font-serif italic">Critical Thinking & Interpretation</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2 font-serif">Learning Objectives</h4>
                  <ul className="text-sm text-blue-700 space-y-1 font-serif">
                    <li>• Develop critical thinking and analytical skills</li>
                    <li>• Practice literary analysis and interpretation</li>
                    <li>• Build argumentative writing abilities</li>
                    <li>• Understand literary devices and techniques</li>
                    <li>• Form evidence-based interpretations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-800 mb-2 font-serif">Sample Activities</h4>
                  <ul className="text-sm text-blue-700 space-y-1 font-serif">
                    <li>• Character analysis essays</li>
                    <li>• Theme exploration projects</li>
                    <li>• Symbolic interpretation tasks</li>
                    <li>• Comparative analysis exercises</li>
                    <li>• Literary device identification</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-800 mb-2 font-serif">Assessment Methods</h4>
                  <ul className="text-sm text-blue-700 space-y-1 font-serif">
                    <li>• Analytical essay submissions</li>
                    <li>• Peer review and feedback</li>
                    <li>• Rubric-based evaluations</li>
                    <li>• Analysis quality scoring</li>
                    <li>• Critical thinking assessments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Discussion Quests Overview */}
            <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-green-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-900 font-serif">Discussion Quests</h3>
                <p className="text-green-700 font-serif italic">Collaboration & Dialogue</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2 font-serif">Learning Objectives</h4>
                  <ul className="text-sm text-green-700 space-y-1 font-serif">
                    <li>• Develop collaborative learning skills</li>
                    <li>• Practice respectful dialogue and debate</li>
                    <li>• Build communication and presentation abilities</li>
                    <li>• Learn from diverse perspectives</li>
                    <li>• Engage in Socratic questioning methods</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-800 mb-2 font-serif">Sample Activities</h4>
                  <ul className="text-sm text-green-700 space-y-1 font-serif">
                    <li>• Socratic Forum discussions</li>
                    <li>• Peer-led study groups</li>
                    <li>• Debate and argumentation exercises</li>
                    <li>• Collaborative annotation projects</li>
                    <li>• Presentation and sharing sessions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-800 mb-2 font-serif">Assessment Methods</h4>
                  <ul className="text-sm text-green-700 space-y-1 font-serif">
                    <li>• Discussion participation tracking</li>
                    <li>• Peer evaluation and feedback</li>
                    <li>• Quality of contribution scoring</li>
                    <li>• Collaborative project outcomes</li>
                    <li>• Communication skill assessments</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Educational Framework */}
        <div className="bg-gradient-to-r from-emerald-800/90 to-green-700/90 border-4 border-emerald-300 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif text-center">Educational Framework</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif text-yellow-300">Progressive Learning Model</h3>
                <p className="text-emerald-200 font-serif text-sm leading-relaxed mb-4">
                  Our quest system follows a scaffolded approach that builds skills progressively. Students begin with
                  foundational reading comprehension, advance to critical analysis, and culminate in collaborative
                  discussion and debate. Each quest type reinforces and builds upon previous learning experiences.
                </p>
                <ul className="text-emerald-200 text-sm space-y-2 font-serif">
                  <li>• <strong>Foundation:</strong> Reading comprehension and basic understanding</li>
                  <li>• <strong>Development:</strong> Critical analysis and interpretation</li>
                  <li>• <strong>Mastery:</strong> Collaborative discussion and synthesis</li>
                  <li>• <strong>Application:</strong> Arena challenges and real-world connections</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 font-serif text-yellow-300">Assessment & Feedback</h3>
                <p className="text-emerald-200 font-serif text-sm leading-relaxed mb-4">
                  Our gamified assessment system provides continuous feedback through XP tracking, progress indicators,
                  and detailed rubrics. Teachers can monitor individual and class progress while students receive
                  immediate recognition for their achievements.
                </p>
                <ul className="text-emerald-200 text-sm space-y-2 font-serif">
                  <li>• <strong>Formative Assessment:</strong> Continuous progress tracking</li>
                  <li>• <strong>Summative Assessment:</strong> Boss battles and final challenges</li>
                  <li>• <strong>Peer Assessment:</strong> Collaborative feedback systems</li>
                  <li>• <strong>Self-Assessment:</strong> Reflection and goal-setting tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Example Quest */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-100 mb-8 font-serif text-center" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            Example Quest: Close Reading Challenge
          </h2>

          <div className="bg-white/95 rounded-xl shadow-xl p-6 border-2 border-emerald-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-emerald-900 font-serif">The Whale's Secret: Passage Analysis</h3>
              <p className="text-emerald-700 font-serif italic">A comprehensive close reading quest from Moby Dick</p>
              <div className="mt-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">SAMPLE QUEST</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-4 font-serif text-lg">Quest Steps</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">1</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Read the Passage</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students are given a selected passage from Moby Dick and must read it carefully for comprehension.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">2</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Highlight & Annotate</h5>
                      <p className="text-emerald-700 text-sm font-serif">While reading, students must highlight key passages and add annotations explaining their significance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">3</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Multiple Choice Assessment</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students must answer 3 multiple choice questions correctly to demonstrate comprehension.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">4</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Quote Analysis</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students choose a significant quote and write a short explanation of its meaning and importance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">5</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Symbolism Analysis</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students identify three instances of symbolism in the passage and explain their significance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">6</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Syntax Analysis</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students identify a syntax change in the passage and explain its significance to the text's meaning.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-serif flex-shrink-0">7</div>
                    <div>
                      <h5 className="font-semibold text-emerald-800 font-serif">Peer Review</h5>
                      <p className="text-emerald-700 text-sm font-serif">Students must comment on another classmate's quote analysis, providing constructive feedback.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-800 mb-4 font-serif text-lg">Learning Objectives</h4>
                <ul className="text-emerald-700 text-sm space-y-2 font-serif mb-6">
                  <li>• Develop close reading and annotation skills</li>
                  <li>• Practice textual analysis and interpretation</li>
                  <li>• Build comprehension through multiple assessment types</li>
                  <li>• Engage in collaborative learning and peer feedback</li>
                  <li>• Connect reading to writing and discussion</li>
                </ul>

                <h4 className="font-semibold text-emerald-800 mb-4 font-serif text-lg">Assessment Criteria</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Reading Comprehension</span>
                    <span className="text-emerald-600 text-xs font-bold">20 XP</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Annotation Quality</span>
                    <span className="text-emerald-600 text-xs font-bold">25 XP</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Quote Analysis</span>
                    <span className="text-emerald-600 text-xs font-bold">25 XP</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Symbolism Analysis</span>
                    <span className="text-emerald-600 text-xs font-bold">20 XP</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Syntax Analysis</span>
                    <span className="text-emerald-600 text-xs font-bold">15 XP</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-50 p-3 rounded">
                    <span className="text-emerald-700 text-sm font-serif">Peer Feedback</span>
                    <span className="text-emerald-600 text-xs font-bold">15 XP</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 mx-auto max-w-md">
              <h5 className="font-semibold text-yellow-800 font-serif mb-2">Quest Reward</h5>
              <p className="text-yellow-700 text-sm font-serif">Complete all steps to unlock the next quest, and keep reading to unlock "The White Whale" boss battle!</p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 font-serif mb-3">Pedagogical Notes</h4>
              <p className="text-blue-700 text-sm font-serif leading-relaxed">
                This quest demonstrates the integration of multiple learning modalities: reading (comprehension),
                writing (analysis), collaboration (peer review), and assessment (multiple choice + open response).
                The progressive structure builds from basic comprehension to critical analysis, culminating in
                collaborative learning. This model can be adapted for any literary text and scaled for different
                difficulty levels.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}