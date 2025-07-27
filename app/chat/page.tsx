"use client"

import * as React from 'react';
import { LogIn, MessageSquare, Bot, Sparkles, BookOpen, Users, Award, Globe, Brain, Code, Database, Zap, Target, Lightbulb, Shield, TrendingUp, Palette, Music, Eye, Heart, Star, GraduationCap, FileText, Languages, CheckCircle, AlertTriangle, Upload, Send, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';

export default function ChatPage() {
  const handleSignIn = async () => {
    // Simple placeholder for now
    alert('Echo login functionality coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Claude Hemingway</h1>
                <p className="text-purple-200 text-sm">AI-Powered ELA Tutor & Literary Assistant</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSignIn}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center space-x-2"
              >
                <LogIn className="w-5 h-5" />
                <span>Sign In to Echo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <div className="text-center py-12">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6 font-serif">
              Claude Hemingway
            </h2>
            <p className="text-purple-200 mb-8 text-xl font-serif leading-relaxed">
              Your AI-powered English Language Arts tutor, inspired by famous authors and designed for educational excellence. 
              Get personalized help with reading comprehension, writing skills, grammar, vocabulary, and literary analysis.
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-purple-200 mb-8">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-blue-400" />
                <span>AI-Powered Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Languages className="w-5 h-5 text-green-400" />
                <span>Multi-Language Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span>Academic Integrity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white/5 border border-white/20 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-4 font-serif text-center">🎯 Our Mission</h3>
          <p className="text-purple-200 text-lg text-center font-serif leading-relaxed">
            To provide personalized, AI-powered English Language Arts tutoring that helps students develop critical thinking skills, 
            improve their writing abilities, and foster a love for literature while maintaining the highest standards of academic integrity.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Reading & Comprehension */}
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-700/50 border border-blue-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">Reading & Comprehension</h3>
            </div>
            <ul className="space-y-3 text-blue-100 font-serif">
              <li className="flex items-start gap-2">
                <Eye className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>Text Analysis Strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>Main Idea Identification</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>Critical Thinking Skills</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>Literary Device Recognition</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>Comprehension Assessment</span>
              </li>
            </ul>
          </div>

          {/* Writing & Grammar */}
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-700/50 border border-purple-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <GraduationCap className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">Writing & Grammar</h3>
            </div>
            <ul className="space-y-3 text-purple-100 font-serif">
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <span>Essay Structure & Organization</span>
              </li>
              <li className="flex items-start gap-2">
                <Code className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <span>Grammar & Mechanics</span>
              </li>
              <li className="flex items-start gap-2">
                <Palette className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <span>Style & Voice Development</span>
              </li>
              <li className="flex items-start gap-2">
                <Upload className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <span>Document Upload & Feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <span>Revision Strategies</span>
              </li>
            </ul>
          </div>

          {/* Literature & Analysis */}
          <div className="bg-gradient-to-br from-pink-900/50 to-pink-700/50 border border-pink-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <MessageSquare className="w-12 h-12 text-pink-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">Literature & Analysis</h3>
            </div>
            <ul className="space-y-3 text-pink-100 font-serif">
              <li className="flex items-start gap-2">
                <Users className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <span>Character Analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <span>Thematic Exploration</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <span>Literary Criticism</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <span>Classic Literature Study</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <span>Test Preparation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="bg-white/5 border border-white/20 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">🚀 Advanced Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Languages className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Multi-Language</h4>
              <p className="text-purple-200 text-sm">English, Spanish, Haitian Creole</p>
            </div>
            <div className="text-center">
              <Upload className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Document Upload</h4>
              <p className="text-purple-200 text-sm">Get feedback on your writing</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Academic Integrity</h4>
              <p className="text-purple-200 text-sm">Guided learning, not cheating</p>
            </div>
            <div className="text-center">
              <Brain className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Smart Suggestions</h4>
              <p className="text-purple-200 text-sm">AI-powered learning prompts</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Progress Tracking</h4>
              <p className="text-purple-200 text-sm">Monitor your learning journey</p>
            </div>
            <div className="text-center">
              <Send className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Real-time Chat</h4>
              <p className="text-purple-200 text-sm">Instant AI responses</p>
            </div>
            <div className="text-center">
              <ChevronDown className="w-8 h-8 text-teal-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Topic Selection</h4>
              <p className="text-purple-200 text-sm">Choose your learning focus</p>
            </div>
            <div className="text-center">
              <AlertTriangle className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Error Prevention</h4>
              <p className="text-purple-200 text-sm">Common mistake guidance</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white/5 border border-white/20 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">💡 How Claude Hemingway Works</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Sign In & Connect</h4>
                  <p className="text-purple-200 text-sm">Authenticate with Echo to access your personalized AI tutor</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Choose Your Focus</h4>
                  <p className="text-purple-200 text-sm">Select from reading, writing, grammar, vocabulary, or literature</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Get Personalized Help</h4>
                  <p className="text-purple-200 text-sm">Receive tailored guidance and feedback for your specific needs</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Upload Documents</h4>
                  <p className="text-purple-200 text-sm">Get detailed feedback on your essays and writing assignments</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Track Progress</h4>
                  <p className="text-purple-200 text-sm">Monitor your improvement and celebrate your achievements</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Learn & Grow</h4>
                  <p className="text-purple-200 text-sm">Develop stronger ELA skills through guided practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Integrity */}
        <div className="bg-gradient-to-r from-emerald-900/50 to-teal-800/50 border border-emerald-400 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">🛡️ Academic Integrity Commitment</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-emerald-200 font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                What We Do
              </h4>
              <ul className="space-y-3 text-emerald-100 font-serif">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>Guide you through the writing process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>Help you develop your own ideas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>Provide feedback on structure and clarity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>Teach grammar and writing techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>Support your learning journey</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-200 font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                What We Don't Do
              </h4>
              <ul className="space-y-3 text-red-100 font-serif">
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>Write essays or assignments for you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>Complete homework on your behalf</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>Provide ready-made answers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>Enable academic dishonesty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>Bypass the learning process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-800/50 border border-blue-400 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Ready to Transform Your ELA Skills?
            </h3>
            <p className="text-blue-200 text-lg mb-6 font-serif">
              Join thousands of students who are improving their reading, writing, and analytical skills 
              with Claude Hemingway, your AI-powered ELA tutor.
            </p>
            <button
              onClick={handleSignIn}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:scale-105 flex items-center space-x-3 mx-auto"
            >
              <Sparkles className="w-6 h-6" />
              <span>Start Learning with Claude Hemingway</span>
            </button>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-12">
          <p className="text-purple-200 text-xl font-serif italic mb-2">
            "The only way to do great work is to love what you do"
          </p>
          <p className="text-purple-300 text-sm font-serif">
            — Steve Jobs
          </p>
        </div>

      </div>
    </div>
  );
} 