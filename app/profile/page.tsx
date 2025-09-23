"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

export default function ProfilePage() {
  const router = useRouter();
  const { litParlorAccount, echoUser, isAuthenticated, isLoading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('account');

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/chat');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-amber-800">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  const tabs = [
    { id: 'account', name: 'Account Info', icon: '👤' },
    { id: 'preferences', name: 'Preferences', icon: '⚙️' },
    { id: 'progress', name: 'Reading Progress', icon: '📚' },
    { id: 'security', name: 'Security', icon: '🔒' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8 px-4 pt-24">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl border-4 border-amber-600 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
            <div className="flex items-center space-x-4">
              {echoUser?.picture ? (
                <img
                  src={echoUser.picture}
                  alt={echoUser.name || 'Profile'}
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
              ) : (
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {(litParlorAccount?.echo_name || 'U').charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <h1 className="text-2xl font-bold font-serif">
                  {litParlorAccount?.echo_name || 'LitParlor User'}
                </h1>
                <p className="text-amber-100">
                  @{(litParlorAccount?.echo_username || 'username').replace(/\s+/g, '')}
                </p>
                <p className="text-amber-200 text-sm">
                  Member since {new Date(litParlorAccount?.created_at || '').toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-amber-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-amber-600 text-amber-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl border-4 border-amber-600 p-6">

          {/* Account Info Tab */}
          {activeTab === 'account' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-amber-900 font-serif">Account Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-amber-800">LitParlor Account</h3>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-amber-700">Account ID</label>
                      <p className="text-sm text-amber-900 font-mono">{litParlorAccount?.id}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-700">Status</label>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {litParlorAccount?.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-700">Created</label>
                      <p className="text-sm text-amber-900">
                        {new Date(litParlorAccount?.created_at || '').toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-700">Last Updated</label>
                      <p className="text-sm text-amber-900">
                        {new Date(litParlorAccount?.updated_at || '').toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-amber-800">Echo Account (Linked)</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-blue-700">Echo ID</label>
                      <p className="text-sm text-blue-900 font-mono">{echoUser?.id}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-700">Name</label>
                      <p className="text-sm text-blue-900">{echoUser?.name || 'Not set'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-700">Email</label>
                      <p className="text-sm text-blue-900">{echoUser?.email || 'Not available'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-700">Username</label>
                      <p className="text-sm text-blue-900">{echoUser?.preferred_username || 'Not set'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-amber-900 font-serif">Preferences</h2>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center">
                <p className="text-amber-800 font-medium">User preferences coming soon!</p>
                <p className="text-amber-600 text-sm mt-2">Customize your LitParlor experience here.</p>
              </div>
            </div>
          )}

          {/* Reading Progress Tab */}
          {activeTab === 'progress' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-amber-900 font-serif">Reading Progress</h2>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center">
                <p className="text-amber-800 font-medium">Reading progress tracking coming soon!</p>
                <p className="text-amber-600 text-sm mt-2">Your reading journey will be displayed here.</p>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-amber-900 font-serif">Security & Privacy</h2>

              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-medium text-blue-800 mb-2">Echo Authentication</h3>
                  <p className="text-sm text-blue-700 mb-3">
                    Your account is secured through Echo (Merit Systems). Authentication is handled by their secure platform.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://echo.merit.systems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-blue-300 rounded-md text-sm font-medium text-blue-700 bg-white hover:bg-blue-50"
                    >
                      Manage Echo Account
                      <span className="ml-1">↗</span>
                    </a>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-medium text-amber-800 mb-4">Account Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left px-4 py-3 bg-white border border-amber-300 rounded-lg hover:bg-amber-50 transition-colors">
                      <div className="font-medium text-amber-900">Download My Data</div>
                      <div className="text-sm text-amber-700">Export all your LitParlor data</div>
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-white border border-red-300 rounded-lg hover:bg-red-50 transition-colors">
                      <div className="font-medium text-red-900">Delete Account</div>
                      <div className="text-sm text-red-700">Permanently delete your LitParlor account</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => router.push('/')}
            className="text-amber-600 hover:text-amber-800 font-medium"
          >
            ← Back to Home
          </button>

          <button
            onClick={signOut}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}