"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

export default function CreateAccountPage() {
  const router = useRouter();
  const { echoUser, hasLitParlorAccount, createLitParlorAccount, isLoading, isAuthenticated } = useAuth();
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect if not authenticated with Echo
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/chat'); // Redirect to chat page which handles Echo authentication
    }
  }, [isAuthenticated, isLoading, router]);

  // Redirect if already has LitParlor account
  useEffect(() => {
    if (!isLoading && hasLitParlorAccount) {
      router.push('/');
    }
  }, [hasLitParlorAccount, isLoading, router]);

  const handleCreateAccount = async () => {
    try {
      setIsCreating(true);
      setError(null);

      const account = await createLitParlorAccount();

      if (account) {
        // Success! Redirect to home page
        router.push('/');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-amber-800">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border-4 border-amber-600 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 text-center">
            <h1 className="text-3xl font-bold font-serif mb-2">
              Welcome to LitParlor!
            </h1>
            <p className="text-amber-100">
              Create your LitParlor account to get started
            </p>
          </div>

          {/* Content */}
          <div className="p-8">

            {/* Echo Account Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <span className="mr-2">🔗</span>
                Connected Echo Account
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-3">
                  {echoUser?.picture && (
                    <img
                      src={echoUser.picture}
                      alt={echoUser.name || 'Echo Account'}
                      className="w-10 h-10 rounded-full border-2 border-blue-200"
                    />
                  )}
                  <div>
                    <p className="font-medium text-blue-900">
                      {echoUser?.name || 'Echo User'}
                    </p>
                    <p className="text-blue-700">
                      {echoUser?.email || 'No email available'}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-blue-600 border-t border-blue-200 pt-2 mt-2">
                  <p><strong>Echo ID:</strong> {echoUser?.id}</p>
                  <p><strong>Username:</strong> {echoUser?.preferred_username || echoUser?.name || 'Not set'}</p>
                </div>
              </div>
            </div>

            {/* Account Creation Info */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-amber-900 mb-4 font-serif">
                Create Your LitParlor Account
              </h2>
              <div className="space-y-4 text-amber-800">
                <p>
                  Your LitParlor account will be linked to your Echo account, allowing you to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access all LitParlor features and content</li>
                  <li>Track your learning progress and achievements</li>
                  <li>Customize your learning experience</li>
                  <li>Participate in discussions and forums</li>
                  <li>Save your favorite books and characters</li>
                </ul>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong>Privacy Note:</strong> Your LitParlor account will store your Echo username
                    ({echoUser?.preferred_username || echoUser?.name || 'your display name'})
                    for display purposes. You can update your preferences at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-red-600">⚠️</span>
                  <p className="text-red-800">{error}</p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCreateAccount}
                disabled={isCreating}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed font-serif flex items-center justify-center space-x-2"
              >
                {isCreating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>✨</span>
                    <span>Create My LitParlor Account</span>
                  </>
                )}
              </button>

              <Link
                href="/"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-serif text-center"
              >
                Maybe Later
              </Link>
            </div>

            {/* Help Text */}
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Need help? <a href="mailto:briansproule20@gmail.com" className="text-amber-600 hover:text-amber-800 underline">Contact support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}