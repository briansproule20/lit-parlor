"use client"

import * as React from 'react';
import Link from 'next/link';
import { LogIn, ChevronDown, User, CreditCard, LogOut } from 'lucide-react';
import { useLanguage } from '@/components/chat/language-context';
import { LanguageProvider } from '@/components/chat/language-context';
import { EchoProvider, useEcho, EchoSignIn, EchoTokenPurchase } from '@merit-systems/echo-react-sdk';
import ELATutorChatbot from '@/components/chat/ELATutorChatbot';
import { ChatDotBackground } from '@/components/ui/chat-dot-background';


// Famous author last names for random selection
const famousAuthors: string[] = [
  'Hemingway', 'Fitzgerald', 'Dickens', 'Austen', 'Tolstoy', 'Dostoevsky', 
  'Shakespeare', 'Poe', 'Twain', 'Steinbeck', 'Faulkner', 'Joyce', 
  'Woolf', 'Orwell', 'Bradbury', 'Vonnegut', 'Salinger', 'Kerouac',
  'Ginsberg', 'Plath', 'Angelou', 'Morrison', 'King', 'Rowling',
  'Tolkien', 'Lewis', 'Wilde', 'Bronte', 'Eliot', 'Yeats'
];

function ChatPageContent() {
  const { currentLanguage, setCurrentLanguage, languageOptions } = useLanguage();
  const { isAuthenticated, isLoading, user, balance, signOut } = useEcho();
  
  // Use state to track if component has mounted
  const [mounted, setMounted] = React.useState(false);
  const [selectedAuthor, setSelectedAuthor] = React.useState<string>('Hemingway'); // Default fallback
  
  // Set author after component mounts to avoid hydration mismatch
  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * famousAuthors.length);
    setSelectedAuthor(famousAuthors[randomIndex]);
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
          <p className="text-white text-lg">Loading Claude Hemingway...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-visible relative">
      {/* Custom Chat Dot Background */}
      <ChatDotBackground />
      
      {/* Header */}
      <div className="bg-amber-800/20 backdrop-blur-md border-b border-amber-700/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
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
                  <h1 className="text-2xl font-bold text-amber-900">LitParlor</h1>
                  <p className="text-amber-700 text-sm">AI-Powered ELA Tutor & Literary Assistant</p>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <div className="relative">
                <select
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value)}
                  className="bg-amber-800/20 backdrop-blur-md border border-amber-700/30 text-amber-900 px-3 py-2 rounded-lg appearance-none cursor-pointer hover:bg-amber-800/30 transition-colors text-sm"
                  style={{ paddingRight: '2.5rem' }}
                >
                  {languageOptions.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-amber-50 text-amber-900">
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-amber-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 relative z-10">
        
        {/* Pricing Info Section */}
        <div className="bg-amber-800/10 backdrop-blur-md border border-amber-700/20 rounded-xl p-6 mb-6 opacity-90 relative z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900">Echo Credits</h3>
                <p className="text-amber-700 text-sm">Manage your account and credits</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Echo Authentication */}
              {isLoading ? (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                </div>
              ) : isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  {/* User Info */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">{user?.name || user?.email || 'User'}</span>
                    </div>
                  </div>
                  
                  {/* Balance */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4" />
                      <span className="text-sm font-medium">
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
                  
                  {/* Token Purchase */}
                  <EchoTokenPurchase 
                    amount={100}
                    onPurchaseComplete={(result) => console.log('Purchase completed:', result)}
                    onError={(error) => console.error('Purchase error:', error)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    Buy Credits
                  </EchoTokenPurchase>
                  
                  {/* Sign Out */}
                  <button
                    onClick={signOut}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 text-sm font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <EchoSignIn 
                  onSuccess={(user) => console.log('Signed in:', user)}
                  onError={(error) => console.error('Sign in failed:', error)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 text-sm"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In to Echo</span>
                </EchoSignIn>
              )}
            </div>
          </div>
        </div>
        
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
        <ChatPageContent />
      </LanguageProvider>
    </EchoProvider>
  );
} 