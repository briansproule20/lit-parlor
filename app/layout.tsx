import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LitParlorNavbar from '@/components/ui/litparlor-navbar'
import ChatWidget from '@/components/chat/chat-widget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LitParlor',
  description: 'Transform long-form narratives into digestible insights',
  icons: {
    icon: '/images/litparlorfavicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LitParlorNavbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  )
} 