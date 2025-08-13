import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menubar from '@/components/menubar'
import EchoProviderWrapper from '@/components/chat/echo-provider-wrapper'
import ChatWidget from '@/components/chat/chat-widget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LitParlor',
  description: 'Transform long-form narratives into digestible insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EchoProviderWrapper>
          <Menubar />
          {children}
          <ChatWidget />
        </EchoProviderWrapper>
      </body>
    </html>
  )
} 