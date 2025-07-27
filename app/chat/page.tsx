"use client"

import * as React from 'react';
import { LogIn, MessageSquare, Bot, Sparkles, BookOpen, Users, Award, Globe, Brain, Code, Database, Zap, Target, Lightbulb, Shield, TrendingUp, Palette, Music, Eye, Heart, Star, GraduationCap, FileText, Languages, CheckCircle, AlertTriangle, Upload, Send, RefreshCw, ChevronDown, ChevronUp, Globe as GlobeIcon } from 'lucide-react';
import { useLanguage } from '@/components/chat/language-context';
import { LanguageProvider } from '@/components/chat/language-context';

function ChatPageContent() {
  const { currentLanguage, setCurrentLanguage, languageOptions } = useLanguage();
  
  const handleSignIn = async () => {
    // Simple placeholder for now
    alert('Echo login functionality coming soon!');
  };

  const getLanguageText = () => {
    switch (currentLanguage) {
      case 'es':
        return {
          title: 'Claude Hemingway',
          subtitle: 'Tutor de ELA con IA y Asistente Literario',
          mission: 'Proporcionar tutoría personalizada de ELA con IA que ayude a los estudiantes a desarrollar habilidades de pensamiento crítico, mejorar sus habilidades de escritura y fomentar el amor por la literatura mientras mantiene los más altos estándares de integridad académica.',
          cta: '¿Listo para Transformar tus Habilidades de ELA?',
          ctaSubtitle: 'Únete a miles de estudiantes que están mejorando sus habilidades de lectura, escritura y análisis con Claude Hemingway, tu tutor de ELA con IA.',
          startButton: 'Comenzar a Aprender con Claude Hemingway'
        };
      case 'ht':
        return {
          title: 'Claude Hemingway',
          subtitle: 'Pwofesè ELA ak Asistan Literè ki Pouse pa IA',
          mission: 'Bay titoraj ELA pèsonalize ki pouse pa IA ki ede elèv yo devlope konpetans panse kritik, amelyore kapasite ekriti yo, ak fèmè lanmou pou literati pandan y ap kenbe pi wo estanda entegrite akademik.',
          cta: 'Ou Pare pou Transfòme Konpetans ELA Ou yo?',
          ctaSubtitle: 'Antre nan dè milye elèv ki ap amelyore konpetans lekti, ekriti, ak analiz yo ak Claude Hemingway, pwofesè ELA ou ki pouse pa IA.',
          startButton: 'Kòmanse Aprann ak Claude Hemingway'
        };
      default:
        return {
          title: 'Claude Hemingway',
          subtitle: 'AI-Powered ELA Tutor & Literary Assistant',
          mission: 'To provide personalized, AI-powered English Language Arts tutoring that helps students develop critical thinking skills, improve their writing abilities, and foster a love for literature while maintaining the highest standards of academic integrity.',
          cta: 'Ready to Transform Your ELA Skills?',
          ctaSubtitle: 'Join thousands of students who are improving their reading, writing, and analytical skills with Claude Hemingway, your AI-powered ELA tutor.',
          startButton: 'Start Learning with Claude Hemingway'
        };
    }
  };

  const languageText = getLanguageText();

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
                <h1 className="text-2xl font-bold text-white">{languageText.title}</h1>
                <p className="text-purple-200 text-sm">{languageText.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <select
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value)}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg appearance-none cursor-pointer hover:bg-white/20 transition-colors"
                  style={{ paddingRight: '2.5rem' }}
                >
                  {languageOptions.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-gray-800 text-white">
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </div>
              
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
              {languageText.title}
            </h2>
            <p className="text-purple-200 mb-8 text-xl font-serif leading-relaxed">
              {currentLanguage === 'es' 
                ? 'Tu tutor de Artes del Lenguaje Inglés con IA, inspirado en autores famosos y diseñado para la excelencia educativa. Obtén ayuda personalizada con comprensión de lectura, habilidades de escritura, gramática, vocabulario y análisis literario.'
                : currentLanguage === 'ht'
                ? 'Pwofesè ELA ou ki pouse pa IA, enspire pa otè selyè yo ak fèt pou ekselans edikatif. Jwenn èd pèsonalize ak konpreyansyon lekti, konpetans ekriti, gramè, vokabilè, ak analiz literè.'
                : 'Your AI-powered English Language Arts tutor, inspired by famous authors and designed for educational excellence. Get personalized help with reading comprehension, writing skills, grammar, vocabulary, and literary analysis.'
              }
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-purple-200 mb-8">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-blue-400" />
                <span>{currentLanguage === 'es' ? 'Aprendizaje con IA' : currentLanguage === 'ht' ? 'Aprantisaj ak IA' : 'AI-Powered Learning'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Languages className="w-5 h-5 text-green-400" />
                <span>{currentLanguage === 'es' ? 'Soporte Multi-idioma' : currentLanguage === 'ht' ? 'Sipò Plizyè Lang' : 'Multi-Language Support'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span>{currentLanguage === 'es' ? 'Integridad Académica' : currentLanguage === 'ht' ? 'Entegrite Akademik' : 'Academic Integrity'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white/5 border border-white/20 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-4 font-serif text-center">🎯 {currentLanguage === 'es' ? 'Nuestra Misión' : currentLanguage === 'ht' ? 'Misyon Nou' : 'Our Mission'}</h3>
          <p className="text-purple-200 text-lg text-center font-serif leading-relaxed">
            {languageText.mission}
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
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
                <span>Literary Analysis Skills</span>
              </li>
            </ul>
          </div>

          {/* Test Prep */}
          <div className="bg-gradient-to-br from-green-900/50 to-green-700/50 border border-green-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">Test Prep</h3>
            </div>
            <ul className="space-y-3 text-green-100 font-serif">
              <li className="flex items-start gap-2">
                <Award className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span>SAT/ACT Reading Strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span>Essay Writing Techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span>Critical Reading Skills</span>
              </li>
              <li className="flex items-start gap-2">
                <Code className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span>Grammar & Usage Review</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span>Practice Test Strategies</span>
              </li>
            </ul>
          </div>

          {/* Public Speaking */}
          <div className="bg-gradient-to-br from-orange-900/50 to-orange-700/50 border border-orange-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">Public Speaking</h3>
            </div>
            <ul className="space-y-3 text-orange-100 font-serif">
              <li className="flex items-start gap-2">
                <MessageSquare className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <span>Speech Writing & Structure</span>
              </li>
              <li className="flex items-start gap-2">
                <Eye className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <span>Delivery Techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <span>Persuasive Speaking</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <span>Presentation Skills</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <span>Confidence Building</span>
              </li>
            </ul>
          </div>

          {/* ELL Support */}
          <div className="bg-gradient-to-br from-teal-900/50 to-teal-700/50 border border-teal-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <Languages className="w-12 h-12 text-teal-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">ELL Support</h3>
            </div>
            <ul className="space-y-3 text-teal-100 font-serif">
              <li className="flex items-start gap-2">
                <BookOpen className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>English Language Learning</span>
              </li>
              <li className="flex items-start gap-2">
                <Code className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>Grammar for ELL Students</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>Academic Writing Support</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>Conversational English</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>Cultural Context Understanding</span>
              </li>
            </ul>
          </div>

          {/* Vocabulary Building */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-indigo-700/50 border border-indigo-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <Sparkles className="w-12 h-12 text-indigo-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">Vocabulary Building</h3>
            </div>
            <ul className="space-y-3 text-indigo-100 font-serif">
              <li className="flex items-start gap-2">
                <BookOpen className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                <span>Context Clue Strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                <span>Word Root Analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                <span>Academic Vocabulary</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                <span>SAT/ACT Word Lists</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                <span>Vocabulary Retention</span>
              </li>
            </ul>
          </div>

          {/* Research Skills */}
          <div className="bg-gradient-to-br from-red-900/50 to-red-700/50 border border-red-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <ChevronDown className="w-12 h-12 text-red-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">Research Skills</h3>
            </div>
            <ul className="space-y-3 text-red-100 font-serif">
              <li className="flex items-start gap-2">
                <BookOpen className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                <span>Research Paper Writing</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                <span>Source Evaluation</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                <span>Citation & Formatting</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                <span>Critical Analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                <span>Academic Writing</span>
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
          
          {/* What We Do / What We Don't Do */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>Give teachers the tools to reach more students</span>
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
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>Replace teachers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How It Works - Technical Details */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-6 mb-6">
            <h4 className="text-2xl font-bold text-white mb-4 font-serif text-center">⚙️ How It Works</h4>
            
            {/* API Integration */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-emerald-200 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                API Integration
              </h5>
              <ul className="space-y-2 text-emerald-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">•</span>
                  <span>Uses GPT-4o via Echo's AI router for consistent billing and management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">•</span>
                  <span>Maintains conversation context across messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">•</span>
                  <span>Enforces academic integrity rules through system prompts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">•</span>
                  <span>Provides educational fallback responses when API is unavailable</span>
                </li>
              </ul>
            </div>

            {/* Error Handling */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-blue-200 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Error Handling
              </h5>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Missing API Key:</strong> Provides clear setup instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Authentication Errors:</strong> Guides users to check their API key</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Rate Limits:</strong> Handles API rate limiting gracefully</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Connection Issues:</strong> Falls back to educational resources</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Academic Integrity Features */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-6 mb-6">
            <h4 className="text-2xl font-bold text-white mb-4 font-serif text-center">🎯 Academic Integrity Features</h4>
            <p className="text-purple-200 text-center mb-6">The chatbot includes robust protections against academic dishonesty with educational guidance:</p>
            
            {/* Enhanced Writing Request Detection */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-purple-200 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Enhanced Writing Request Detection
              </h5>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span>Comprehensive pattern matching for various writing request types</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span>Educational redirection instead of simple blocking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span>Alternative learning strategies and skill development guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span>Process-focused assistance rather than content generation</span>
                </li>
              </ul>
            </div>

            {/* Proofreading Guidance System */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-pink-200 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Proofreading Guidance System
              </h5>
              <ul className="space-y-2 text-pink-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-300">•</span>
                  <span>Self-proofreading skill development instead of direct corrections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-300">•</span>
                  <span>Paragraph-specific guidance (e.g., "Check Paragraph 1 for clear topic sentences")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-300">•</span>
                  <span>Proofreading techniques and best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-300">•</span>
                  <span>Error type categorization (grammar, punctuation, spelling)</span>
                </li>
              </ul>
            </div>

            {/* Educational Response Types */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-green-200 mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Educational Response Types
              </h5>
              <ul className="space-y-2 text-green-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>Writing Requests:</strong> Guidance on brainstorming, outlining, thesis development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>Proofreading Requests:</strong> Self-proofreading tips and area-specific guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>General Requests:</strong> Learning process focus and skill development</span>
                </li>
              </ul>
            </div>

            {/* Multilingual Academic Integrity */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-indigo-200 mb-3 flex items-center gap-2">
                <Languages className="w-5 h-5" />
                Multilingual Academic Integrity
              </h5>
              <ul className="space-y-2 text-indigo-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-300">•</span>
                  <span>English, Spanish, and Haitian Creole academic integrity messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-300">•</span>
                  <span>Culturally appropriate educational guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-300">•</span>
                  <span>Localized violation explanations and learning strategies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Moderation System */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-6">
            <h4 className="text-2xl font-bold text-white mb-4 font-serif text-center">🛡️ Content Moderation System</h4>
            
            {/* Technical Safety Design */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-yellow-200 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Technical Safety Design
              </h5>
              <ul className="space-y-2 text-yellow-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Pattern-based filtering (avoids explicit word lists in codebase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Comprehensive error handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Safe state management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Clean code practices without offensive content</span>
                </li>
              </ul>
            </div>

            {/* Violation Management */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-orange-200 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Violation Management
              </h5>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-300">•</span>
                  <span>Progressive violation tracking and counting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-300">•</span>
                  <span>Educational moderation modals with clear guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-300">•</span>
                  <span>Safe learning environment indicators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-300">•</span>
                  <span>Multiple violation warnings with escalating responses</span>
                </li>
              </ul>
            </div>

            {/* Safety Guidelines */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-red-200 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Safety Guidelines
              </h5>
              <ul className="space-y-2 text-red-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span>Age-appropriate content enforcement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span>Educational topic guidance and redirection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span>Privacy protection for personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span>Spam and commercial content filtering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-800/50 border border-blue-400 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              {languageText.cta}
            </h3>
            <p className="text-blue-200 text-lg mb-6 font-serif">
              {languageText.ctaSubtitle}
            </p>
            <button
              onClick={handleSignIn}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:scale-105 flex items-center space-x-3 mx-auto"
            >
              <Sparkles className="w-6 h-6" />
              <span>{languageText.startButton}</span>
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

export default function ChatPage() {
  return (
    <LanguageProvider>
      <ChatPageContent />
    </LanguageProvider>
  );
} 