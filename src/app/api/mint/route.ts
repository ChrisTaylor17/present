import { NextRequest, NextResponse } from 'next/server';
import { createRealNFT } from '@/lib/solana-mint';

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
    
    // Create real NFT on Solana devnet
    const nftResult = await createRealNFT(metadata);
    
    return NextResponse.json({ 
      success: true, 
      signature: nftResult.signature,
      mintAddress: nftResult.mintAddress,
      metadata,
      explorerUrl: nftResult.explorerUrl
    });
  } catch (error) {
    console.error('Minting error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Minting failed' 
    }, { status: 500 });
  }
}