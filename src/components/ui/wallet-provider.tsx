"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { MockSolanaWallet } from '@/lib/solana';

interface WalletContextType {
  connected: boolean;
  publicKey: string | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  wallet: MockSolanaWallet;
}

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [wallet] = useState(() => new MockSolanaWallet());
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const connect = async () => {
    try {
      await wallet.connect();
      setConnected(wallet.connected);
      setPublicKey(wallet.publicKey);
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  const disconnect = async () => {
    await wallet.disconnect();
    setConnected(false);
    setPublicKey(null);
  };

  return (
    <WalletContext.Provider value={{ connected, publicKey, connect, disconnect, wallet }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWallet must be used within WalletProvider');
  return context;
};