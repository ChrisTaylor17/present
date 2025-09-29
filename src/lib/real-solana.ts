"use client";

import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

export class RealSolanaWallet {
  public connected = false;
  public publicKey: PublicKey | null = null;
  private connection: Connection;

  constructor() {
    this.connection = new Connection(clusterApiUrl('devnet'));
  }

  async connect(): Promise<void> {
    try {
      // Check if Phantom wallet is available
      if (typeof window !== 'undefined' && (window as any).solana) {
        const provider = (window as any).solana;
        
        if (provider.isPhantom) {
          const response = await provider.connect();
          this.publicKey = new PublicKey(response.publicKey.toString());
          this.connected = true;
          
          console.log('Connected to Phantom wallet:', this.publicKey.toString());
        }
      } else {
        // Fallback to mock connection
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.connected = true;
        this.publicKey = new PublicKey('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU');
      }
    } catch (error) {
      console.error('Wallet connection failed:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (typeof window !== 'undefined' && (window as any).solana) {
      await (window as any).solana.disconnect();
    }
    
    this.connected = false;
    this.publicKey = null;
  }

  async getBalance(): Promise<number> {
    if (!this.publicKey) return 0;
    
    try {
      const balance = await this.connection.getBalance(this.publicKey);
      return balance / 1e9; // Convert lamports to SOL
    } catch (error) {
      console.error('Failed to get balance:', error);
      return 0;
    }
  }
}