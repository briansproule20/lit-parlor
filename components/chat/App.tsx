import React, { createContext, useContext, useState, useEffect } from 'react';
import { EchoSignIn, useEcho } from '@zdql/echo-react-sdk';
import EchoControlHeader from './components/EchoControlHeader';
import ELATutorChatbot from './components/ELATutorChatbot';
import ErrorBoundary from './components/ErrorBoundary';

// Language Context
interface LanguageContextType {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
  languageOptions: Array<{ code: string; name: string; flag: string }>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const languageOptions = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ht', name: 'Kreyòl Ayisyen', flag: '🇭🇹' }
];

const App: React.FC = () => {
  const echo = useEcho();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [signInAttempted, setSignInAttempted] = useState(false);

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('ela-tutor-language');
    if (savedLanguage && languageOptions.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('ela-tutor-language', currentLanguage);
  }, [currentLanguage]);

  useEffect(() => {
    console.log('Echo context:', echo);
    console.log('Echo SDK loaded:', !!echo);
    console.log('Instance ID from env:', process.env.REACT_APP_ECHO_APP_ID);
    
    if (echo?.isAuthenticated) {
      console.log('User is authenticated!', echo.user);
    }
    
    if (echo?.error) {
      console.log('Echo error:', echo.error);
    }
  }, [echo]);

  const handleSignInClick = () => {
    console.log('Debug button clicked!');
    console.log('Echo state:', echo);
    setSignInAttempted(true);
  };

  const handleManualSignIn = async () => {
    console.log('Manual sign in triggered');
    try {
      if (echo && typeof echo.signIn === 'function') {
        console.log('Calling echo.signIn()');
        await echo.signIn();
      } else {
        console.log('No signIn method found on echo object');
      }
    } catch (error) {
      console.error('Manual sign in error:', error);
    }
  };

  const handleSignInSuccess = (user: any) => {
    console.log('Sign in successful!', user);
  };

  const handleSignOut = () => {
    if (echo && typeof echo.signOut === 'function') {
      echo.signOut();
    }
  };

  // Show the chatbot if user is authenticated
  if (echo?.isAuthenticated) {
    return (
      <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, languageOptions }}>
        <ErrorBoundary>
          <div className="h-screen flex flex-col">
            {/* Echo Control Header */}
            <EchoControlHeader />
            
            {/* ELA Tutor Session Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">📚</span>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Welcome to your ELA Tutor Session!
                  </p>
                  <p className="text-xs opacity-80">Powered by ChatGPT-4o via Echo</p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm rounded-md transition-colors"
              >
                Sign Out
              </button>
            </div>
            
            {/* ELA Tutor Chatbot */}
            <div className="flex-1">
              <ELATutorChatbot />
            </div>
          </div>
        </ErrorBoundary>
      </LanguageContext.Provider>
    );
  }

  // Show sign-in interface if not authenticated
  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, languageOptions }}>
      <ErrorBoundary>
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-2">ELA Tutor</h1>
              <p className="text-purple-200 mb-6">
                Your personal English Language Arts assistant powered by ChatGPT-4o
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="text-left text-purple-200 text-sm">
                  <h3 className="font-semibold text-white mb-2">What you'll get:</h3>
                  <ul className="space-y-1">
                    <li>• Personalized reading comprehension help</li>
                    <li>• Writing process guidance and feedback</li>
                    <li>• Grammar and vocabulary building</li>
                    <li>• Literature analysis support</li>
                    <li>• Test preparation strategies</li>
                    <li>• Support in English, Spanish, and Haitian Creole</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                  <p className="text-white font-medium mb-3">Sign in to start learning:</p>
                  <EchoSignIn onSuccess={handleSignInSuccess} />
                </div>
                
                {/* Debug section - only show in development */}
                {process.env.NODE_ENV === 'development' && (
                  <div className="bg-black/20 border border-white/10 rounded-lg p-4 text-left">
                    <h4 className="text-white font-medium mb-2">Debug Info:</h4>
                    <div className="text-xs text-purple-300 space-y-1">
                      <p>Loading: {echo?.isLoading ? 'Yes' : 'No'}</p>
                      <p>Authenticated: {echo?.isAuthenticated ? 'Yes' : 'No'}</p>
                      <p>Error: {echo?.error || 'None'}</p>
                      <p>User: {echo?.user ? JSON.stringify(echo.user, null, 2) : 'None'}</p>
                    </div>
                    
                    <div className="mt-3 space-x-2">
                      <button 
                        onClick={handleSignInClick}
                        className="px-3 py-1 bg-purple-600/50 hover:bg-purple-600 text-white text-xs rounded transition-colors"
                      >
                        Debug Log
                      </button>
                      <button 
                        onClick={handleManualSignIn}
                        className="px-3 py-1 bg-purple-600/50 hover:bg-purple-600 text-white text-xs rounded transition-colors"
                      >
                        Manual Sign In
                      </button>
                    </div>
                    
                    {signInAttempted && (
                      <p className="text-blue-300 text-xs mt-2">
                        Debug button clicked! Check console for details.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <p className="text-center text-purple-300 text-xs mt-4">
              Powered by Echo Authentication & ChatGPT-4o
            </p>
          </div>
        </div>
      </ErrorBoundary>
    </LanguageContext.Provider>
  );
};

export default App; 