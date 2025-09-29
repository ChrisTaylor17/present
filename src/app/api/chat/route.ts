import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    // OpenAI integration (replace with your API key)
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an AI assistant for CONSILIENCE, a Solana DAPP that helps people find connections and create NFTs. Be helpful, friendly, and knowledgeable about blockchain, matching, and NFTs.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!openaiResponse.ok) {
      throw new Error('OpenAI API error');
    }

    const data = await openaiResponse.json();
    const response = data.choices[0]?.message?.content || 'I apologize, but I cannot process that request right now.';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ 
      response: 'I can help you navigate CONSILIENCE! Ask me about finding matches, creating NFTs, or using the platform.' 
    });
  }
}