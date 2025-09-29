"use client";

import { useState } from 'react';
import { Palette, Wand2, Download } from 'lucide-react';

export function NFTCreator() {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const generateNFT = async () => {
    if (!prompt.trim()) return;
    
    setGenerating(true);
    
    try {
      const response = await fetch('/api/nft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      
      const data = await response.json();
      setGeneratedImage(data.imageUrl);
    } catch (error) {
      console.error('NFT generation failed:', error);
      // Fallback to placeholder
      setGeneratedImage(`https://picsum.photos/400/400?random=${Date.now()}`);
    } finally {
      setGenerating(false);
    }
  };

  const mintNFT = async () => {
    if (!generatedImage) return;
    
    try {
      const response = await fetch('/api/mint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          imageUrl: generatedImage,
          prompt,
          name: `CONSILIENCE NFT #${Date.now()}`
        })
      });
      
      const data = await response.json();
      alert(`NFT minted! Transaction: ${data.signature}`);
    } catch (error) {
      alert('Minting failed. Please try again.');
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Palette className="text-purple-400" size={20} />
        <span className="text-white font-medium">AI NFT Creator</span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-white/80 text-sm mb-2">
            Describe your NFT
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A futuristic cityscape with neon lights and flying cars..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 resize-none h-20"
          />
        </div>

        <button
          onClick={generateNFT}
          disabled={generating || !prompt.trim()}
          className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          <Wand2 size={18} />
          {generating ? 'Generating...' : 'Generate NFT'}
        </button>

        {generating && (
          <div className="bg-white/5 rounded-lg p-8 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-white/60">AI is creating your unique NFT...</p>
          </div>
        )}

        {generatedImage && (
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <img
                src={generatedImage}
                alt="Generated NFT"
                className="w-full rounded-lg mb-4"
              />
              <div className="flex gap-2">
                <button
                  onClick={mintNFT}
                  className="flex-1 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors"
                >
                  Mint to Solana
                </button>
                <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                  <Download size={18} className="text-white/60" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}