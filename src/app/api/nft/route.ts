import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    
    // Replicate API for image generation
    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: 'ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4',
        input: {
          prompt: prompt,
          width: 512,
          height: 512,
          num_outputs: 1,
          scheduler: 'K_EULER',
          num_inference_steps: 20,
          guidance_scale: 7.5,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Replicate API error');
    }

    const prediction = await response.json();
    
    // Poll for completion
    let result = prediction;
    while (result.status === 'starting' || result.status === 'processing') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const statusResponse = await fetch(`https://api.replicate.com/v1/predictions/${result.id}`, {
        headers: {
          'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
        },
      });
      
      result = await statusResponse.json();
    }

    if (result.status === 'succeeded') {
      return NextResponse.json({ imageUrl: result.output[0] });
    } else {
      throw new Error('Generation failed');
    }
  } catch (error) {
    console.error('NFT generation error:', error);
    // Fallback to placeholder
    return NextResponse.json({ 
      imageUrl: `https://picsum.photos/512/512?random=${Date.now()}` 
    });
  }
}