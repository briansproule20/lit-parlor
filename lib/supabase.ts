import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      litparlor_accounts: {
        Row: {
          id: string
          echo_id: string
          echo_username: string | null
          echo_email: string | null
          echo_name: string | null
          created_at: string
          updated_at: string
          preferences: Record<string, any> | null
          is_active: boolean
        }
        Insert: {
          id?: string
          echo_id: string
          echo_username?: string | null
          echo_email?: string | null
          echo_name?: string | null
          created_at?: string
          updated_at?: string
          preferences?: Record<string, any> | null
          is_active?: boolean
        }
        Update: {
          id?: string
          echo_id?: string
          echo_username?: string | null
          echo_email?: string | null
          echo_name?: string | null
          created_at?: string
          updated_at?: string
          preferences?: Record<string, any> | null
          is_active?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}