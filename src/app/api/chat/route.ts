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
            content: `You are an AI assistant for CONSILIENCE, a Solana DAPP that helps people find connections and create NFTs and tokens. You can actually create tokens and NFTs for users. When a user asks you to create a token, respond with: "I'll create that token for you right now!" and include the details. When they ask for NFTs, offer to generate them. Be helpful, friendly, and action-oriented. You have real blockchain capabilities.`
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
    let response = data.choices[0]?.message?.content || 'I apologize, but I cannot process that request right now.';
    
    // Check if user is asking for token creation
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('create') && (lowerMessage.includes('token') || lowerMessage.includes('coin'))) {
      // Extract token details from message
      const tokenMatch = message.match(/(\d+)\s+tokens?\s+called\s+(\w+)\s+with.*symbol\s+(\w+)/i);
      if (tokenMatch) {
        const [, supply, name, symbol] = tokenMatch;
        response += `\n\n🚀 Creating ${supply} ${name} tokens (${symbol}) on Solana blockchain...`;
        
        return NextResponse.json({ 
          response,
          action: 'create_token',
          tokenData: { name, symbol, supply: parseInt(supply) }
        });
      }
    }
    
    // Check if user is asking for NFT creation
    if (lowerMessage.includes('create') && lowerMessage.includes('nft')) {
      response += `\n\n🎨 I can help you create an NFT! What would you like it to look like? Describe the image you want me to generate.`;
      return NextResponse.json({ 
        response,
        action: 'suggest_nft'
      });
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ 
      response: `Hello! I'm having trouble connecting to my AI brain right now. In the meantime, I can tell you that CONSILIENCE is amazing for finding meaningful connections through AI matching and creating unique NFTs together! What would you like to know?`
    });
  }
}