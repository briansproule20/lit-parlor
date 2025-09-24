'use client'

import React, { useState, createContext, useContext } from 'react'

// Typography context
interface TypographyContextType {
  fontSize: 'small' | 'medium' | 'large'
  fontFamily: 'garamond' | 'sans-serif' | 'dyslexic'
  setFontSize: (size: 'small' | 'medium' | 'large') => void
  setFontFamily: (family: 'garamond' | 'sans-serif' | 'dyslexic') => void
}

const TypographyContext = createContext<TypographyContextType | undefined>(undefined)

export const useTypography = () => {
  const context = useContext(TypographyContext)
  if (!context) {
    throw new Error('useTypography must be used within a TypographyProvider')
  }
  return context
}

// Typography provider
export const TypographyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [fontFamily, setFontFamily] = useState<'garamond' | 'sans-serif' | 'dyslexic'>('sans-serif')

  return (
    <TypographyContext.Provider value={{ fontSize, fontFamily, setFontSize, setFontFamily }}>
      {children}
    </TypographyContext.Provider>
  )
}

// Typography wrapper component
export const TypographyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { fontSize, fontFamily } = useTypography()

  const getFontSizeClasses = () => {
    switch (fontSize) {
      case 'small':
        return 'text-sm'
      case 'medium':
        return 'text-base'
      case 'large':
        return 'text-lg'
      default:
        return 'text-base'
    }
  }

  const getFontFamilyClasses = () => {
    switch (fontFamily) {
      case 'garamond':
        return 'font-garamond'
      case 'sans-serif':
        return 'font-sans'
      case 'dyslexic':
        return 'font-dyslexic'
      default:
        return 'font-sans'
    }
  }

  return (
    <div className={`${getFontSizeClasses()} ${getFontFamilyClasses()}`}>
      {children}
    </div>
  )
}
