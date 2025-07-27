"use client"

import * as React from 'react';

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">📚</span>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">ELA Tutor</h1>
          <p className="text-purple-200 mb-6">
            Your personal English Language Arts assistant
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
              </ul>
            </div>
          </div>

          <div className="bg-white/5 border border-white/20 rounded-lg p-4">
            <p className="text-white font-medium mb-3">Chat functionality coming soon!</p>
            <p className="text-purple-300 text-sm">
              We're working on integrating the chat features. Check back soon!
            </p>
          </div>
        </div>
        
        <p className="text-center text-purple-300 text-xs mt-4">
          Powered by Next.js
        </p>
      </div>
    </div>
  );
} 