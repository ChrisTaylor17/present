"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  connected: boolean;
  publicKey: string | null;
  connect: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const connect = () => {
    // Simulate wallet connection
    setConnected(true);
    setPublicKey('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU');
  };

  const disconnect = () => {
    setConnected(false);
    setPublicKey(null);
  };

  return (
    <WalletContext.Provider value={{ connected, publicKey, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWallet must be used within WalletProvider');
  return context;
};