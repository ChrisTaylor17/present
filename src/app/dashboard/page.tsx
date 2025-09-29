"use client";

import { AIChat } from '@/components/ui/ai-chat';
import { AIMatching } from '@/components/ui/ai-matching';
import { NFTCreator } from '@/components/ui/nft-creator';
import { UserProfile } from '@/components/ui/user-profile';
import { useWallet } from '@/components/ui/wallet-provider';

export default function Dashboard() {
  const { connected } = useWallet();

  if (!connected) {
    return (
      <div className="min-h-screen bg-[#030303] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Connect Your Wallet</h2>
          <p className="text-white/60">Please connect your Solana wallet to access the dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-white/60">Manage your connections, chat with AI, and create NFTs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-1">
            <UserProfile />
          </div>
          
          <div className="xl:col-span-1">
            <AIMatching />
          </div>
          
          <div className="xl:col-span-1">
            <AIChat />
          </div>
          
          <div className="xl:col-span-1">
            <NFTCreator />
          </div>
        </div>
      </div>
    </div>
  );
}