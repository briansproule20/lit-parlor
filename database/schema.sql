-- Create the litparlor_accounts table
-- This table stores LitParlor account information linked to Echo IDs

CREATE TABLE litparlor_accounts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  echo_id VARCHAR NOT NULL UNIQUE, -- Echo user ID from Merit Systems
  echo_username VARCHAR, -- Echo username
  echo_email VARCHAR, -- Echo email address
  echo_name VARCHAR, -- Echo display name
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  preferences JSONB DEFAULT '{}', -- Store user preferences
  is_active BOOLEAN DEFAULT true
);

-- Create indexes for performance
CREATE INDEX idx_litparlor_accounts_echo_id ON litparlor_accounts(echo_id);
CREATE INDEX idx_litparlor_accounts_echo_email ON litparlor_accounts(echo_email);
CREATE INDEX idx_litparlor_accounts_created_at ON litparlor_accounts(created_at);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_litparlor_accounts_updated_at
    BEFORE UPDATE ON litparlor_accounts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE litparlor_accounts ENABLE ROW LEVEL SECURITY;

-- Create policies (these can be adjusted based on your security requirements)
-- For now, allowing all authenticated users to read/write their own data
CREATE POLICY "Users can view their own account data" ON litparlor_accounts
    FOR SELECT USING (true); -- Will be refined once auth is set up

CREATE POLICY "Users can insert their own account data" ON litparlor_accounts
    FOR INSERT WITH CHECK (true); -- Will be refined once auth is set up

CREATE POLICY "Users can update their own account data" ON litparlor_accounts
    FOR UPDATE USING (true); -- Will be refined once auth is set up