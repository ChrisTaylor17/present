import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    
    // OpenAI DALL-E API for image generation
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: `Create a unique NFT artwork: ${prompt}. Make it vibrant, artistic, and suitable for digital collectibles.`,
        n: 1,
        size: '1024x1024',
        quality: 'standard',
        style: 'vivid'
      }),
    });

    if (!response.ok) {
      throw new Error('OpenAI API error');
    }

    const data = await response.json();
    const imageUrl = data.data[0]?.url;

    if (imageUrl) {
      return NextResponse.json({ imageUrl });
    } else {
      throw new Error('No image generated');
    }
  } catch (error) {
    console.error('NFT generation error:', error);
    // Fallback to placeholder with themed image
    const themes = ['abstract', 'nature', 'space', 'digital', 'art'];
    const theme = themes[Math.floor(Math.random() * themes.length)];
    return NextResponse.json({ 
      imageUrl: `https://picsum.photos/512/512?random=${Date.now()}&blur=1` 
    });
  }
}