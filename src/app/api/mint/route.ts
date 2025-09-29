import { NextRequest, NextResponse } from 'next/server';
import { mintNFT } from '@/lib/solana';

export async function POST(request: NextRequest) {
  try {
    const { imageUrl, prompt, name } = await request.json();
    
    const metadata = {
      name,
      description: prompt,
      image: imageUrl,
      attributes: [
        { trait_type: 'Platform', value: 'CONSILIENCE' },
        { trait_type: 'Type', value: 'AI Generated' },
        { trait_type: 'Created', value: new Date().toISOString() }
      ]
    };
    
    const signature = await mintNFT(imageUrl, metadata);
    
    return NextResponse.json({ 
      success: true, 
      signature,
      metadata 
    });
  } catch (error) {
    console.error('Minting error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Minting failed' 
    }, { status: 500 });
  }
}