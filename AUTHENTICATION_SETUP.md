# LitParlor Authentication Implementation

This document outlines the implementation of the LitParlor authentication system that integrates Echo accounts with Supabase for data storage.

## Overview

The authentication system creates a bridge between Echo (Merit Systems) user accounts and LitParlor-specific account data stored in Supabase. Users sign in through Echo, and their Echo profile information is used to create and maintain LitParlor accounts.

## Architecture

### Components Created/Modified

1. **Database Schema** (`/database/schema.sql`)
   - `litparlor_accounts` table linking Echo IDs to LitParlor account data
   - Stores Echo username, email, name, and user preferences

2. **Supabase Configuration** (`/lib/supabase.ts`)
   - Supabase client setup with TypeScript types

3. **Authentication Context** (`/contexts/auth-context.tsx`)
   - Bridges Echo authentication with LitParlor account management
   - Provides unified authentication state across the app

4. **Account Creation Page** (`/app/create-account/page.tsx`)
   - Guided account creation flow for new users
   - Links Echo account to new LitParlor account

5. **Updated Navbar** (`/components/ui/litparlor-navbar.tsx`)
   - Shows Echo username when authenticated
   - Provides sign-in/sign-out functionality
   - Account dropdown with profile options

6. **Layout Updates** (`/app/layout.tsx`)
   - Wrapped app with Echo and Auth providers

## Setup Instructions

### 1. Supabase Setup

1. Create a new Supabase project at https://supabase.com
2. In your Supabase project, go to the SQL Editor
3. Run the SQL schema from `/database/schema.sql`
4. Get your project URL and anon key from Settings > API

### 2. Environment Variables

Update your `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Policies (Optional)

The current setup has permissive policies for development. For production, you may want to update the Row Level Security policies in Supabase to be more restrictive based on your authentication model.

## User Flow

### First-Time Users
1. User clicks "Sign In" in navbar
2. Redirected to `/chat` (Echo authentication)
3. After Echo auth, user returns to site
4. System detects no LitParlor account
5. Navbar shows "Complete Setup" button
6. User goes to `/create-account` page
7. Account created and linked to Echo ID
8. User redirected to home page
9. Navbar shows Echo username

### Returning Users
1. User clicks "Sign In" in navbar
2. Redirected to `/chat` (Echo authentication)
3. After Echo auth, system finds existing LitParlor account
4. Navbar immediately shows Echo username
5. User can access dropdown with profile options

## Key Features

### Navbar Display
- **Not Authenticated**: Shows "Sign In" button
- **Authenticated, No LitParlor Account**: Shows "Complete Setup" button
- **Authenticated, Has Account**: Shows username with dropdown menu

### Account Management
- Echo username displayed in navbar
- Profile settings link (placeholder - create `/app/profile/page.tsx` as needed)
- Sign out functionality
- Account creation flow with Echo account information display

### Data Storage
- Echo user ID as primary link between systems
- Echo username, email, and name stored for display
- User preferences stored as JSON
- Account creation and update timestamps
- Active/inactive account status

## Future Enhancements

1. **Profile Management Page** - Allow users to update preferences
2. **Account Settings** - Privacy controls, notification preferences
3. **User Progress Tracking** - Link reading progress to accounts
4. **Social Features** - Friend connections, reading groups
5. **Enhanced Security** - More restrictive RLS policies based on Echo tokens

## Files Modified/Created

### New Files
- `/lib/supabase.ts` - Supabase client and types
- `/database/schema.sql` - Database schema
- `/contexts/auth-context.tsx` - Authentication context
- `/app/create-account/page.tsx` - Account creation page
- `/AUTHENTICATION_SETUP.md` - This documentation

### Modified Files
- `/components/ui/litparlor-navbar.tsx` - Updated with auth integration
- `/app/layout.tsx` - Added auth providers
- `/.env.local` - Added Supabase environment variables
- `/package.json` - Added Supabase dependency

## Dependencies Added
- `@supabase/supabase-js` - Supabase JavaScript client

## Testing Checklist

- [ ] Sign in flow redirects correctly
- [ ] Account creation page displays Echo information
- [ ] Account is created in Supabase database
- [ ] Navbar shows username after account creation
- [ ] Dropdown menu works in navbar
- [ ] Sign out clears authentication state
- [ ] Mobile navbar shows user information
- [ ] Page restrictions work (create-account redirects)

## Environment Requirements

Make sure you have:
1. Echo app credentials configured
2. Supabase project set up with the schema
3. Environment variables properly configured
4. Database accessible from your application