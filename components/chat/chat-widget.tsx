"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, ExternalLink } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { EchoProvider, useEcho, useEchoModelProviders, EchoSignIn } from '@merit-systems/echo-react-sdk';
import { streamText } from 'ai';
import ReactMarkdown from 'react-markdown';
import { buildSystemPrompt } from './chat-context';

interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

const ChatWidgetContent: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated, balance } = useEcho();
  const { openai } = useEchoModelProviders();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your ELA tutor and guide. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, streamingMessage]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Check authentication and credits before proceeding
    if (!isAuthenticated) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Please sign in to use the ELA Tutor.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    if (balance && balance.balance <= 0) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'You have no credits remaining. Please purchase more credits to continue using the ELA Tutor.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);
    setStreamingMessage('');

    try {
      // Use AI SDK with Echo models and stream text - same pattern as main chat
      const { textStream } = await streamText({
        model: await openai('gpt-4o-mini'),
        messages: [
          {
            role: 'system',
            content: buildSystemPrompt('en', 'complex', true) // English, complex, with widget instructions
          },
          ...messages.map(msg => ({
            role: msg.type === 'user' ? 'user' as const : 'assistant' as const,
            content: msg.content
          })),
          {
            role: 'user',
            content: currentInput
          }
        ]
      });

      let fullResponse = '';
      for await (const chunk of textStream) {
        fullResponse += chunk;
        setStreamingMessage(fullResponse);
      }

      const botResponse: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: fullResponse || 'I apologize, but I couldn\'t generate a response at the moment.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setStreamingMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again later.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setStreamingMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleLaunchFullChat = () => {
    router.push('/chat');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Chat Widget Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-80 h-96 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">ELA Tutor</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* Credit Display */}
              {isAuthenticated && balance && (
                <div className="text-xs bg-white/20 px-2 py-1 rounded">
                  Credits: {balance.balance}
                </div>
              )}
              <button
                onClick={handleLaunchFullChat}
                className="text-white hover:text-gray-200 transition-colors p-1 rounded hover:bg-white/10"
                title="Launch Full Chat"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Authentication Check */}
          {!isAuthenticated ? (
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Please sign in to use the ELA Tutor</p>
                <EchoSignIn 
                  onSuccess={(user) => console.log('Signed in:', user)}
                  onError={(error) => console.error('Sign in failed:', error)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Sign In with Echo
                </EchoSignIn>
              </div>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="text-sm">
                        <ReactMarkdown 
                          components={{
                            // Custom styling for markdown elements
                            p: ({children}) => <p className="mb-2 last:mb-0 text-current">{children}</p>,
                            strong: ({children}) => <strong className="font-semibold text-current">{children}</strong>,
                            em: ({children}) => <em className="italic text-current">{children}</em>,
                            ul: ({children}) => <ul className="list-disc list-outside ml-4 mb-2 space-y-1 text-current">{children}</ul>,
                            ol: ({children}) => <ol className="list-decimal list-outside ml-4 mb-2 space-y-1 text-current">{children}</ol>,
                            li: ({children}) => <li className="text-current">{children}</li>,
                            h1: ({children}) => <h1 className="text-lg font-bold mb-2 text-current">{children}</h1>,
                            h2: ({children}) => <h2 className="text-base font-bold mb-2 text-current">{children}</h2>,
                            h3: ({children}) => <h3 className="text-sm font-bold mb-1 text-current">{children}</h3>,
                            code: ({children}) => <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono text-gray-800">{children}</code>,
                            blockquote: ({children}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-2 text-current">{children}</blockquote>,
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>
                      <p className="text-xs opacity-70 mt-1 text-right">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Streaming message */}
                {streamingMessage && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg max-w-xs lg:max-w-md">
                      <div className="text-sm">
                        <ReactMarkdown 
                          components={{
                            p: ({children}) => <p className="mb-2 last:mb-0 text-current">{children}</p>,
                            strong: ({children}) => <strong className="font-semibold text-current">{children}</strong>,
                            em: ({children}) => <em className="italic text-current">{children}</em>,
                            ul: ({children}) => <ul className="list-disc list-outside ml-4 mb-2 space-y-1 text-current">{children}</ul>,
                            ol: ({children}) => <ol className="list-decimal list-outside ml-4 mb-2 space-y-1 text-current">{children}</ol>,
                            li: ({children}) => <li className="text-current">{children}</li>,
                            h1: ({children}) => <h1 className="text-lg font-bold mb-2 text-current">{children}</h1>,
                            h2: ({children}) => <h2 className="text-base font-bold mb-2 text-current">{children}</h2>,
                            h3: ({children}) => <h3 className="text-sm font-bold mb-1 text-current">{children}</h3>,
                            code: ({children}) => <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono text-gray-800">{children}</code>,
                            blockquote: ({children}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-2 text-current">{children}</blockquote>,
                          }}
                        >
                          {streamingMessage}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                )}
                
                {isLoading && !streamingMessage && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                        <span className="text-sm">Typing...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isLoading}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};



const ChatWidget: React.FC = () => {
  'use client'
  const pathname = usePathname();
  const isChatPage = pathname === '/chat';
  
  // Don't render on chat page
  if (isChatPage) {
    return null;
  }

  const echoConfig = {
    appId: process.env.NEXT_PUBLIC_ECHO_APP_ID || '',
    clientId: process.env.NEXT_PUBLIC_ECHO_APP_ID || '', // Add client_id for OAuth
    apiUrl: 'https://echo.merit.systems',
    redirectUri: process.env.NEXT_PUBLIC_ECHO_REDIRECT_URI || (typeof window !== 'undefined' ? `${window.location.origin}/chat` : 'https://narrative-exploration.vercel.app/chat'),
  };

  return (
    <EchoProvider config={echoConfig}>
      <ChatWidgetContent />
    </EchoProvider>
  );
};

export default ChatWidget; 