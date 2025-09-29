"use client";

import { useState } from 'react';
import { Heart, X, Sparkles, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Profile {
  id: string;
  name: string;
  age: number;
  interests: string[];
  walletActivity: string;
  aiScore: number;
}

const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Alex',
    age: 28,
    interests: ['DeFi', 'NFTs', 'Gaming'],
    walletActivity: 'Active trader',
    aiScore: 94
  },
  {
    id: '2',
    name: 'Sam',
    age: 25,
    interests: ['Art', 'Music', 'Web3'],
    walletActivity: 'NFT collector',
    aiScore: 87
  },
  {
    id: '3',
    name: 'Jordan',
    age: 30,
    interests: ['Tech', 'Crypto', 'Travel'],
    walletActivity: 'HODLer',
    aiScore: 91
  }
];

export function AIMatching() {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'like' | 'pass') => {
    if (direction === 'like') {
      // Simulate match logic
      console.log('Liked:', profiles[currentIndex].name);
    }
    
    setCurrentIndex(prev => prev + 1);
  };

  const currentProfile = profiles[currentIndex];

  if (!currentProfile) {
    return (
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center">
        <Sparkles className="mx-auto mb-4 text-purple-400" size={48} />
        <h3 className="text-xl font-semibold text-white mb-2">No more profiles</h3>
        <p className="text-white/60">Check back later for new AI-matched connections!</p>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-purple-400" size={20} />
        <span className="text-white font-medium">AI Matching</span>
        <span className="ml-auto text-sm text-purple-300">
          {currentProfile.aiScore}% Match
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProfile.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="space-y-4"
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={32} className="text-white/60" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">
              {currentProfile.name}, {currentProfile.age}
            </h3>
            <p className="text-white/60 text-sm mb-4">{currentProfile.walletActivity}</p>
            
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {currentProfile.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleSwipe('pass')}
              className="p-4 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors"
            >
              <X size={24} className="text-red-400" />
            </button>
            <button
              onClick={() => handleSwipe('like')}
              className="p-4 bg-green-500/20 hover:bg-green-500/30 rounded-full transition-colors"
            >
              <Heart size={24} className="text-green-400" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}