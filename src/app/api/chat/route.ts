import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    const apiKey = process.env.OPENAI_API_KEY;
    console.log('API Key exists:', !!apiKey);
    
    if (!apiKey) {
      throw new Error('OpenAI API key not configured');
    }
    
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an AI assistant for CONSILIENCE, a Solana DAPP that helps people find connections and create NFTs. Be helpful, friendly, and knowledgeable about blockchain, matching, and NFTs. Always respond naturally and conversationally.'
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

    console.log('OpenAI Response Status:', openaiResponse.status);
    
    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      console.error('OpenAI API Error:', errorText);
      throw new Error(`OpenAI API error: ${openaiResponse.status}`);
    }

    const data = await openaiResponse.json();
    const response = data.choices[0]?.message?.content || 'I apologize, but I cannot process that request right now.';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ 
      response: `Hello! I'm having trouble connecting to my AI brain right now. In the meantime, I can tell you that CONSILIENCE is amazing for finding meaningful connections through AI matching and creating unique NFTs together! What would you like to know?`
    });
  }
}