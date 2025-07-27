"use client"

import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

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

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Load saved language preference on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('ela-tutor-language');
      if (savedLanguage && languageOptions.find(lang => lang.code === savedLanguage)) {
        setCurrentLanguage(savedLanguage);
      }
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ela-tutor-language', currentLanguage);
    }
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, languageOptions }}>
      {children}
    </LanguageContext.Provider>
  );
}; 