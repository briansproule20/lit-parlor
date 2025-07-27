"use client"

import * as React from 'react';
import { LogIn, MessageSquare, Bot, Sparkles } from 'lucide-react';

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
                <h1 className="text-2xl font-bold text-white">ELA Tutor</h1>
                <p className="text-purple-200 text-sm">Your personal English Language Arts assistant</p>
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
        <div className="text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to ELA Tutor</h2>
            <p className="text-purple-200 mb-8 text-lg">
              Sign in to start your personalized English Language Arts learning journey
            </p>
            
            <div className="bg-white/5 border border-white/20 rounded-lg p-6 mb-8">
              <h3 className="text-white font-semibold mb-4 flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2" />
                What you'll get:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-purple-200">Reading comprehension help</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-200">Writing guidance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-purple-200">Grammar support</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-purple-200">Vocabulary building</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-purple-200">Literature analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-purple-200">Test preparation</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleSignIn}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:scale-105 flex items-center space-x-3 mx-auto"
            >
              <LogIn className="w-6 h-6" />
              <span>Sign In to Start Learning</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 