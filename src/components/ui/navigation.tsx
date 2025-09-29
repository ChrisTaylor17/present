"use client";

import { useWallet } from './wallet-provider';
import { Wallet, Users, MessageCircle, Palette } from 'lucide-react';

export function Navigation() {
  const { connected, connect, disconnect, publicKey, balance } = useWallet();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-white">CONSILIENCE</div>
        
        <div className="flex items-center gap-6">
          <a href="/about" className="text-white/70 hover:text-white transition-colors">
            About
          </a>
          <a href="/how-it-works" className="text-white/70 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="/features" className="text-white/70 hover:text-white transition-colors">
            Features
          </a>
          <a href="/dashboard" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <Users size={18} />
            Dashboard
          </a>
          
          {connected ? (
            <div className="flex items-center gap-3">
              <div className="text-sm text-white/60">
                <div>{balance.toFixed(2)} SOL</div>
                <div>{publicKey?.slice(0, 4)}...{publicKey?.slice(-4)}</div>
              </div>
              <button 
                onClick={disconnect}
                className="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button 
              onClick={connect}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Wallet size={18} />
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}