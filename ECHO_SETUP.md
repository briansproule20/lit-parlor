# Echo API Setup Guide

## 🚀 Getting Started with Echo API

To enable full AI-powered tutoring functionality, you need to configure your Echo API credentials.

### 1. Get Your Echo App ID

1. Visit [https://echo.merit.systems/](https://echo.merit.systems/)
2. Sign up and create an account
3. Navigate to the API Keys section
4. Create a new API key (App ID)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with the following content:

```bash
# Echo API Configuration
ECHO_APP_ID=your-actual-echo-app-id-here
NEXT_PUBLIC_ECHO_APP_ID=your-actual-echo-app-id-here
```

**Important:** Replace `your-actual-echo-app-id-here` with your real Echo App ID.

### 3. Environment Variables Explained

- `ECHO_APP_ID`: Used by the server-side API route for authentication
- `NEXT_PUBLIC_ECHO_APP_ID`: Used by the client-side to check connection status

### 4. Security Notes

- **Never commit** your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Keep your Echo App ID secure and private

### 5. Testing the Integration

1. Start your development server: `npm run dev`
2. Navigate to `/tutor`
3. Check the "Echo API Status" indicator
4. Try sending a message to test the integration

### 6. Current Features

✅ **Implemented:**
- Complete safety system with content moderation
- Academic integrity protection
- Multilingual support (English, Spanish, Haitian Creole)
- Educational guidance responses
- Violation tracking and progressive warnings
- Pattern-based content filtering

🔄 **Ready for Echo API:**
- API route handler (`/api/echo`)
- Authentication validation
- Safety context passing
- Educational response system

### 7. Troubleshooting

**"Echo API Not Configured" Error:**
- Check that your `.env.local` file exists
- Verify your Echo App ID is correct
- Restart your development server after adding environment variables

**API Call Failures:**
- Ensure your Echo account has sufficient credits
- Check your internet connection
- Verify the Echo API endpoint is accessible

### 8. Next Steps

Once configured, your AI Literary Tutor will provide:
- Real-time AI-powered responses
- Comprehensive safety features
- Educational guidance for literature and writing
- Multilingual support for diverse students
- Academic integrity protection

### 9. Support

For Echo API issues:
- [Echo Platform Documentation](https://echo.merit.systems/docs)
- [Echo Support](https://echo.merit.systems/support)

For this application:
- Check the console for error messages
- Verify environment variable configuration
- Ensure all dependencies are installed 