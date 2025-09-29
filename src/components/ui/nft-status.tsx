"use client";

import { ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

interface NFTStatusProps {
  mintAddress: string;
  signature: string;
  explorerUrl: string;
}

export function NFTStatus({ mintAddress, signature, explorerUrl }: NFTStatusProps) {
  const isRealTransaction = !signature.startsWith('simulation_');
  
  return (
    <div className="bg-black/20 rounded-lg p-4 mt-4">
      <div className="flex items-center gap-2 mb-3">
        {isRealTransaction ? (
          <CheckCircle className="text-green-400" size={20} />
        ) : (
          <AlertCircle className="text-yellow-400" size={20} />
        )}
        <span className="text-white font-medium">
          {isRealTransaction ? 'Real Blockchain Transaction' : 'Demo Transaction'}
        </span>
      </div>
      
      <div className="space-y-2 text-sm">
        <div>
          <span className="text-white/60">Mint Address: </span>
          <span className="text-white font-mono text-xs">{mintAddress}</span>
        </div>
        <div>
          <span className="text-white/60">Transaction: </span>
          <span className="text-white font-mono text-xs">{signature}</span>
        </div>
      </div>
      
      <a
        href={explorerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-3 px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors text-sm"
      >
        <ExternalLink size={16} />
        View on Solana Explorer
      </a>
      
      {!isRealTransaction && (
        <p className="text-yellow-400/80 text-xs mt-2">
          This is a demo transaction. Real minting requires devnet SOL for gas fees.
        </p>
      )}
    </div>
  );
}