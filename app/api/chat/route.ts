import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message, apiKey, language, languageInstructions } = await request.json();

    if (!message || !apiKey) {
      return NextResponse.json(
        { error: 'Message and API key are required' },
        { status: 400 }
      );
    }

    // Call Anthropic's Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 2000,
        messages: [
          {
            role: 'system',
            content: `You are a helpful AI assistant specializing in English Language Arts (ELA) tutoring. You help students with reading comprehension, writing, grammar, vocabulary, and literary analysis. Always be encouraging and provide clear explanations.

${languageInstructions}

You are an ELA tutor inspired by famous authors. Be educational, supportive, and help students develop their language skills. Never write essays or assignments for students - instead guide them through the learning process.`
          },
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anthropic API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get response from Claude' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Extract the response content
    const responseContent = data.content[0]?.text || 'Sorry, I couldn\'t generate a response.';

    return NextResponse.json({ response: responseContent });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 