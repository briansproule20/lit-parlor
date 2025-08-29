"use client"

import * as React from 'react';
import Link from 'next/link';
import { LogIn, ChevronDown, User, CreditCard, LogOut, BookOpen, Users, Trophy, MessageCircle, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/components/chat/language-context';
import { LanguageProvider } from '@/components/chat/language-context';
import { useDarkMode, DarkModeProvider } from '@/components/chat/dark-mode-context';
import { EchoProvider, useEcho, EchoSignIn, EchoTokenPurchase } from '@merit-systems/echo-react-sdk';
import ELATutorChatbot from '@/components/chat/ELATutorChatbot';
import { DarkDotBackground } from '@/components/ui/dark-dot-background';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";




function ChatPageContent() {
  const { currentLanguage, setCurrentLanguage, languageOptions } = useLanguage();
  const { isAuthenticated, isLoading, user, balance, signOut } = useEcho();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  // Use state to track if component has mounted
  const [mounted, setMounted] = React.useState(false);
  
  // Set mounted state after component mounts to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const getLanguageText = () => {
    switch (currentLanguage) {
      case 'es':
        return {
          title: 'ELA Tutor Chatbot',
          subtitle: 'Tutor de ELA con IA y Asistente Literario',
          mission: 'Proporcionar tutoría personalizada de ELA con IA que ayude a los estudiantes a desarrollar habilidades de pensamiento crítico, mejorar sus habilidades de escritura y fomentar el amor por la literatura mientras mantiene los más altos estándares de integridad académica.',
          cta: '¿Listo para Transformar tus Habilidades de ELA?',
          ctaSubtitle: 'Únete a miles de estudiantes que están mejorando sus habilidades de lectura, escritura y análisis con ELA Tutor Chatbot, tu tutor de ELA con IA.',
          startButton: 'Comenzar a Aprender con ELA Tutor Chatbot',
          // Modal text
          modalTitle: 'Inicia Sesión para Chatear',
          modalDescription: 'Para acceder a tu tutor de IA personalizado y comenzar a aprender, por favor inicia sesión con tu cuenta de Echo.',
          modalSignInButton: 'Iniciar Sesión con Echo',
          modalNoAccount: '¿No tienes una cuenta?',
          modalCreateAccount: 'Crea una aquí',
        };
      case 'ht':
        return {
          title: 'ELA Tutor Chatbot',
          subtitle: 'Pwofesè ELA ak Asistan Literè ki Pouse pa IA',
          mission: 'Bay titoraj ELA pèsonalize ki pouse pa IA ki ede elèv yo devlope konpetans panse kritik, amelyore kapasite ekriti yo, ak fèmè lanmou pou literati pandan y ap kenbe pi wo estanda entegrite akademik.',
          cta: 'Ou Pare pou Transfòme Konpetans ELA Ou yo?',
          ctaSubtitle: 'Antre nan dè milye elèv ki ap amelyore konpetans lekti, ekriti, ak analiz yo ak ELA Tutor Chatbot, pwofesè ELA ou ki pouse pa IA.',
          startButton: 'Kòmanse Aprann ak ELA Tutor Chatbot',
          // Modal text
          modalTitle: 'Konekte pou Chat',
          modalDescription: 'Pou aksede pwofesè IA pèsonalize ou ak kòmanse aprann, tanpri konekte ak kont Echo ou.',
          modalSignInButton: 'Konekte ak Echo',
          modalNoAccount: 'Ou pa gen kont?',
          modalCreateAccount: 'Kreye youn isit la',
        };
      default:
        return {
          title: 'ELA Tutor Chatbot',
          subtitle: 'AI-Powered ELA Tutor & Literary Assistant',
          mission: 'To provide personalized, AI-powered English Language Arts tutoring that helps students develop critical thinking skills, improve their writing abilities, and foster a love for literature while maintaining the highest standards of academic integrity.',
          cta: 'Ready to Transform Your ELA Skills?',
          ctaSubtitle: 'Join thousands of students who are improving their reading, writing, and analytical skills with ELA Tutor Chatbot, your AI-powered ELA tutor.',
          startButton: 'Start Learning with ELA Tutor Chatbot',
          // Modal text
          modalTitle: 'Sign In to Chat',
          modalDescription: 'To access your personalized AI tutor and start learning, please sign in with your Echo account.',
          modalSignInButton: 'Sign In with Echo',
          modalNoAccount: 'Don\'t have an account?',
          modalCreateAccount: 'Create one here',



        };
    }
  };

  const languageText = getLanguageText();

  // Show loading state until component is mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-start justify-center py-8">
        <div className="text-center w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen overflow-visible relative ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900'
        : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'
    }`}>
      {/* Custom Dark-Mode Aware Dot Background */}
      <DarkDotBackground isDarkMode={isDarkMode} />
      
      {/* Header */}
      <div className={`backdrop-blur-md border-b relative z-10 ${
        isDarkMode
          ? 'bg-slate-800/30 border-slate-600/30'
          : 'bg-amber-800/20 border-amber-700/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 pt-4 sm:pt-6 pb-0">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-0">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                  <img
                    src="/images/litparlorfavicon.png"
                    alt="LitParlor"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h1 className={`text-2xl font-bold ${
                    isDarkMode ? 'text-slate-100' : 'text-amber-900'
                  }`}>LitParlor</h1>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-slate-300' : 'text-amber-700'
                  }`}>AI-Powered ELA Tutor & Literary Assistant</p>
                </div>
              </Link>
              
              {/* Navigation Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 ml-0 sm:ml-13">
                <Link
                  href="/"
                  className={`transition-colors px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${
                    isDarkMode
                      ? 'text-slate-200 hover:text-slate-100 hover:bg-slate-700/20'
                      : 'text-amber-900 hover:text-amber-700 hover:bg-amber-800/10'
                  }`}
                >
                  Home
                </Link>
                
                <Link
                  href="/student-dashboard"
                  className={`transition-colors px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${
                    isDarkMode
                      ? 'text-slate-200 hover:text-slate-100 hover:bg-slate-700/20'
                      : 'text-amber-900 hover:text-amber-700 hover:bg-amber-800/10'
                  }`}
                >
                  Students
                </Link>
                
                <Link
                  href="/teacher-dashboard"
                  className={`transition-colors px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${
                    isDarkMode
                      ? 'text-slate-200 hover:text-slate-100 hover:bg-slate-700/20'
                      : 'text-amber-900 hover:text-amber-700 hover:bg-amber-800/10'
                  }`}
                >
                  Teachers
                </Link>
                
                <Link
                  href="/pedagogy"
                  className={`transition-colors px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${
                    isDarkMode
                      ? 'text-slate-200 hover:text-slate-100 hover:bg-slate-700/20'
                      : 'text-amber-900 hover:text-amber-700 hover:bg-amber-800/10'
                  }`}
                >
                  Parents
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col items-end lg:items-end space-y-3">
              {/* Top Row: Dark Mode Toggle + Language Selector */}
              <div className="flex items-center space-x-3">
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className={`backdrop-blur-md p-2 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-700/50 border border-slate-600/30 text-slate-200 hover:bg-slate-600/50 hover:text-slate-100'
                      : 'bg-amber-800/20 border border-amber-700/30 text-amber-900 hover:bg-amber-800/30 hover:text-amber-800'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                
                {/* Language Selector */}
                <div className="relative">
                  <select
                    value={currentLanguage}
                    onChange={(e) => setCurrentLanguage(e.target.value)}
                    className={`backdrop-blur-md px-3 py-2 rounded-lg appearance-none cursor-pointer transition-colors text-sm ${
                      isDarkMode
                        ? 'bg-slate-700/50 border border-slate-600/30 text-slate-200 hover:bg-slate-600/50'
                        : 'bg-amber-800/20 border border-amber-700/30 text-amber-900 hover:bg-amber-800/30'
                    }`}
                    style={{ paddingRight: '2.5rem' }}
                  >
                    {languageOptions.map((lang) => (
                      <option key={lang.code} value={lang.code} className={
                        isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-amber-50 text-amber-900'
                      }>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown className={`w-4 h-4 ${
                      isDarkMode ? 'text-slate-400' : 'text-amber-700'
                    }`} />
                  </div>
                </div>
              </div>
              
              {/* Echo Authentication */}
              {isLoading ? (
                <div className={`backdrop-blur-md px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? 'bg-slate-700/50 border border-slate-600/30 text-slate-200'
                    : 'bg-amber-50/80 border border-amber-200/50 text-amber-800'
                }`}>
                  <div className={`animate-spin rounded-full h-4 w-4 border-b-2 ${
                    isDarkMode ? 'border-slate-200' : 'border-amber-800'
                  }`}></div>
                </div>
              ) : isAuthenticated ? (
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:space-x-3">
                  {/* First Row: User Info + Balance */}
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    {/* User Info */}
                    <div className={`backdrop-blur-md px-2 sm:px-3 py-2 rounded-lg ${
                      isDarkMode
                        ? 'bg-slate-700/50 border border-slate-600/30 text-slate-200'
                        : 'bg-amber-50/80 border border-amber-200/50 text-amber-800'
                    }`}>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span className="text-xs sm:text-sm font-medium truncate max-w-[100px] sm:max-w-none">{user?.name || user?.email || 'User'}</span>
                      </div>
                    </div>
                    
                    {/* Balance */}
                    <div className={`backdrop-blur-md px-2 sm:px-3 py-2 rounded-lg ${
                      isDarkMode
                        ? 'bg-slate-700/50 border border-slate-600/30 text-slate-200'
                        : 'bg-amber-50/80 border border-amber-200/50 text-amber-800'
                    }`}>
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-4 h-4" />
                        <span className="text-xs sm:text-sm font-medium">
                          {balance ? (
                            typeof balance === 'number' ? 
                              `${balance} credits` : 
                              `${balance.balance || 0} credits`
                          ) : (
                            '0 credits'
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Second Row: Echo Base + Sign Out */}
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    {/* Echo Base */}
                    <button 
                      onClick={() => window.open('https://echo.merit.systems', '_blank')}
                      className={`backdrop-blur-md px-2 sm:px-3 py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium ${
                        isDarkMode
                          ? 'bg-slate-700/50 border border-slate-600/30 text-slate-200 hover:bg-slate-600/50 hover:text-slate-100'
                          : 'bg-amber-50/80 border border-amber-200/50 text-amber-800 hover:bg-amber-100/80 hover:text-amber-900'
                      }`}
                    >
                      Echo Base
                    </button>
                    
                    {/* Sign Out */}
                    <button
                      onClick={signOut}
                      className={`backdrop-blur-md px-2 sm:px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 text-xs sm:text-sm font-medium ${
                        isDarkMode
                          ? 'bg-slate-700/50 border border-slate-600/30 text-slate-200 hover:bg-slate-600/50 hover:text-slate-100'
                          : 'bg-amber-50/80 border border-amber-200/50 text-amber-800 hover:bg-amber-100/80 hover:text-amber-900'
                      }`}
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="hidden sm:inline">Sign Out</span>
                    </button>
                  </div>
                </div>
              ) : (
                <EchoSignIn 
                  onSuccess={(user) => console.log('Signed in:', user)}
                  onError={(error) => console.error('Sign in failed:', error)}
                  className={`backdrop-blur-md px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                    isDarkMode
                      ? 'bg-slate-700/50 border border-slate-600/30 text-slate-200 hover:bg-slate-600/50 hover:text-slate-100'
                      : 'bg-amber-50/80 border border-amber-200/50 text-amber-800 hover:bg-amber-100/80 hover:text-amber-900'
                  }`}
                >
                  Sign In to Echo
                </EchoSignIn>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 relative z-10">
        

        
        {/* ELA Tutor Chatbot */}
        <div className="mb-6 relative z-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl h-[90vh] min-h-[800px] w-full overflow-hidden relative">
            <ELATutorChatbot />
            
            {/* Sign In Modal Overlay */}
            {!isAuthenticated && !isLoading && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
                  <div className="text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <LogIn className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {languageText.modalTitle}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {languageText.modalDescription}
                    </p>
                    
                    {/* Sign In Button */}
                    <EchoSignIn 
                      onSuccess={(user) => console.log('Signed in:', user)}
                      onError={(error) => console.error('Sign in failed:', error)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <LogIn className="w-5 h-5" />
                        <span>{languageText.modalSignInButton}</span>
                      </div>
                    </EchoSignIn>
                    
                    {/* Additional Info */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        {languageText.modalNoAccount} 
                        <a 
                          href="https://echo.merit.systems" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-medium ml-1 transition-colors"
                        >
                          {languageText.modalCreateAccount}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>













      </div>
    </div>
  );
}

export default function ChatPage() {
  const echoConfig = {
    appId: process.env.NEXT_PUBLIC_ECHO_APP_ID || '',
    clientId: process.env.NEXT_PUBLIC_ECHO_APP_ID || '', // Add client_id for OAuth
    apiUrl: 'https://echo.merit.systems',
    redirectUri: process.env.NEXT_PUBLIC_ECHO_REDIRECT_URI || 
      (typeof window !== 'undefined' ? `${window.location.origin}/chat` : 'https://narrative-exploration.vercel.app/chat'),
  };

  // Debug Echo configuration
  console.log('Echo Config:', {
    appId: echoConfig.appId,
    clientId: echoConfig.clientId,
    apiUrl: echoConfig.apiUrl,
    redirectUri: echoConfig.redirectUri,
    hasAppId: !!echoConfig.appId,
    hasClientId: !!echoConfig.clientId
  });

  return (
    <EchoProvider config={echoConfig}>
      <LanguageProvider>
        <DarkModeProvider>
          <ChatPageContent />
        </DarkModeProvider>
      </LanguageProvider>
    </EchoProvider>
  );
} 