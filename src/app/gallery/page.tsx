"use client";

import { useState, useEffect } from 'react';
import { useWallet } from '@/components/ui/wallet-provider';
import { Palette, Download, ExternalLink } from 'lucide-react';

interface NFT {
  id: string;
  name: string;
  image: string;
  description: string;
  mintAddress: string;
  createdAt: string;
}

export default function Gallery() {
  const { connected, publicKey } = useWallet();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (connected && publicKey) {
      fetchNFTs();
    }
  }, [connected, publicKey]);

  const fetchNFTs = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/nfts?wallet=${publicKey}`);
      const data = await response.json();
      setNfts(data.nfts || []);
    } catch (error) {
      console.error('Failed to fetch NFTs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!connected) {
    return (
      <div className="min-h-screen bg-[#030303] pt-20 pb-8 flex items-center justify-center">
        <div className="text-center">
          <Palette className="mx-auto text-purple-400 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-white mb-4">Connect Your Wallet</h2>
          <p className="text-white/60">Connect your Solana wallet to view your NFT collection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Your NFT Gallery</h1>
          <p className="text-white/60">AI-generated NFTs created on CONSILIENCE</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-white/60">Loading your NFTs...</p>
          </div>
        ) : nfts.length === 0 ? (
          <div className="text-center py-12">
            <Palette className="mx-auto text-white/40 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-white mb-2">No NFTs Yet</h3>
            <p className="text-white/60 mb-6">Create your first AI-generated NFT on the dashboard</p>
            <a 
              href="/dashboard" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Palette size={18} />
              Create NFT
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nfts.map((nft) => (
              <div key={nft.id} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-purple-400/50 transition-colors">
                <div className="aspect-square relative">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{nft.name}</h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{nft.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">
                      {new Date(nft.createdAt).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => window.open(nft.image, '_blank')}
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        <Download size={16} className="text-white/60" />
                      </button>
                      <button 
                        onClick={() => window.open(`https://explorer.solana.com/address/${nft.mintAddress}?cluster=devnet`, '_blank')}
                        className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} className="text-purple-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}