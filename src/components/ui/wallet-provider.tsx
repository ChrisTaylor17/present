"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { RealSolanaWallet } from '@/lib/real-solana';

interface WalletContextType {
  connected: boolean;
  publicKey: string | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  balance: number;
  wallet: RealSolanaWallet;
}

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [wallet] = useState(() => new RealSolanaWallet());
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [balance, setBalance] = useState(0);

  const connect = async () => {
    try {
      await wallet.connect();
      setConnected(wallet.connected);
      setPublicKey(wallet.publicKey?.toString() || null);
      
      if (wallet.connected) {
        const bal = await wallet.getBalance();
        setBalance(bal);
      }
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  const disconnect = async () => {
    await wallet.disconnect();
    setConnected(false);
    setPublicKey(null);
    setBalance(0);
  };

  return (
    <WalletContext.Provider value={{ connected, publicKey, connect, disconnect, balance, wallet }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWallet must be used within WalletProvider');
  return context;
};