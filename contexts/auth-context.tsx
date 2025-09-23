"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useEcho } from '@merit-systems/echo-react-sdk';
import { supabase } from '@/lib/supabase';

interface LitParlorAccount {
  id: string;
  echo_id: string;
  echo_username: string | null;
  echo_email: string | null;
  echo_name: string | null;
  created_at: string;
  updated_at: string;
  preferences: Record<string, any> | null;
  is_active: boolean;
}

interface AuthContextType {
  // Echo data
  echoUser: any;
  echoBalance: any;
  echoError: string | null;

  // LitParlor account data
  litParlorAccount: LitParlorAccount | null;
  hasLitParlorAccount: boolean;

  // Authentication state
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  createLitParlorAccount: () => Promise<LitParlorAccount | null>;
  refreshLitParlorAccount: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user: echoUser, balance: echoBalance, error: echoError, signOut: echoSignOut } = useEcho();
  const [litParlorAccount, setLitParlorAccount] = useState<LitParlorAccount | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated with Echo
  const isAuthenticated = !!echoUser && echoUser.id !== 'unknown' && !!echoUser.email;
  const hasLitParlorAccount = !!litParlorAccount;

  // Fetch LitParlor account when Echo user changes
  useEffect(() => {
    if (isAuthenticated && echoUser?.id) {
      fetchLitParlorAccount(echoUser.id);
    } else {
      setLitParlorAccount(null);
      setIsLoading(false);
    }
  }, [isAuthenticated, echoUser?.id]);

  const fetchLitParlorAccount = async (echoId: string) => {
    try {
      setIsLoading(true);

      const { data, error } = await supabase
        .from('litparlor_accounts')
        .select('*')
        .eq('echo_id', echoId)
        .eq('is_active', true)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows found
        console.error('Error fetching LitParlor account:', error);
        return;
      }

      setLitParlorAccount(data || null);
    } catch (error) {
      console.error('Error fetching LitParlor account:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createLitParlorAccount = async (): Promise<LitParlorAccount | null> => {
    if (!echoUser?.id) {
      console.error('No Echo user found');
      return null;
    }

    try {
      setIsLoading(true);

      const newAccount = {
        echo_id: echoUser.id,
        echo_username: echoUser.preferred_username || echoUser.name || null,
        echo_email: echoUser.email || null,
        echo_name: echoUser.name || null,
        preferences: {},
        is_active: true
      };

      const { data, error } = await supabase
        .from('litparlor_accounts')
        .insert(newAccount)
        .select()
        .single();

      if (error) {
        console.error('Error creating LitParlor account:', error);
        return null;
      }

      setLitParlorAccount(data);
      return data;
    } catch (error) {
      console.error('Error creating LitParlor account:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const refreshLitParlorAccount = async (): Promise<void> => {
    if (echoUser?.id) {
      await fetchLitParlorAccount(echoUser.id);
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      await echoSignOut();
      setLitParlorAccount(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value: AuthContextType = {
    // Echo data
    echoUser,
    echoBalance,
    echoError,

    // LitParlor account data
    litParlorAccount,
    hasLitParlorAccount,

    // Authentication state
    isAuthenticated,
    isLoading,

    // Actions
    createLitParlorAccount,
    refreshLitParlorAccount,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}