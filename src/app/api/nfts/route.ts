import { NextRequest, NextResponse } from 'next/server';

// Mock NFT storage - in production, use a database
const mockNFTs: { [wallet: string]: any[] } = {};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const wallet = searchParams.get('wallet');

  if (!wallet) {
    return NextResponse.json({ error: 'Wallet address required' }, { status: 400 });
  }

  // Return stored NFTs for this wallet
  const nfts = mockNFTs[wallet] || [];
  
  return NextResponse.json({ nfts });
}

export async function POST(request: NextRequest) {
  try {
    const { wallet, nft } = await request.json();
    
    if (!wallet || !nft) {
      return NextResponse.json({ error: 'Wallet and NFT data required' }, { status: 400 });
    }

    // Store NFT for this wallet
    if (!mockNFTs[wallet]) {
      mockNFTs[wallet] = [];
    }
    
    mockNFTs[wallet].push({
      ...nft,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      mintAddress: `${Math.random().toString(36).substring(2)}${Date.now().toString(36)}`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('NFT storage error:', error);
    return NextResponse.json({ error: 'Failed to store NFT' }, { status: 500 });
  }
}