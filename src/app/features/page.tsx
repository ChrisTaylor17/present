import { Check, Zap, Shield, Sparkles, Users, Bot } from 'lucide-react';

export default function Features() {
  return (
    <div className="min-h-screen bg-[#030303] pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Revolutionary <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-xl text-white/70">
            Everything you need for meaningful connections and creative collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-xl p-8">
            <Bot className="text-purple-400 mb-6" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">AI Matching Engine</h3>
            <p className="text-white/70 mb-6">
              Our proprietary AI analyzes 200+ data points from your blockchain activity to find perfect matches.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Personality analysis from on-chain behavior
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Interest matching based on NFT collections
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Financial compatibility scoring
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-xl p-8">
            <Sparkles className="text-blue-400 mb-6" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">AI NFT Creation</h3>
            <p className="text-white/70 mb-6">
              Generate unique digital art together using advanced AI models and mint directly to Solana.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Collaborative art generation
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Instant Solana minting
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Shared ownership options
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10 rounded-xl p-8">
            <Users className="text-green-400 mb-6" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Smart Conversations</h3>
            <p className="text-white/70 mb-6">
              AI-powered chat assistance helps break the ice and suggests meaningful conversation topics.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Conversation starters based on compatibility
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Real-time translation support
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Mood and sentiment analysis
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-white/10 rounded-xl p-8">
            <Shield className="text-orange-400 mb-6" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Blockchain Security</h3>
            <p className="text-white/70 mb-6">
              Your identity and interactions are secured by Solana blockchain technology.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Decentralized identity verification
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Encrypted messaging
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Check className="text-green-400" size={16} />
                Immutable reputation system
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 rounded-xl p-12 text-center">
          <Zap className="mx-auto text-yellow-400 mb-6" size={64} />
          <h2 className="text-3xl font-bold text-white mb-6">The New Economy of Connection</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            CONSILIENCE isn't just a dating app - it's a new economic model where meaningful connections create real value. 
            Generate income through collaborative NFT creation, build businesses with your matches, and participate in a 
            creator economy powered by authentic relationships.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-black/20 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-2">Earn Together</h4>
              <p className="text-white/60">Create and sell NFTs collaboratively</p>
            </div>
            <div className="bg-black/20 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-2">Build Businesses</h4>
              <p className="text-white/60">Start ventures with compatible partners</p>
            </div>
            <div className="bg-black/20 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-2">Share Success</h4>
              <p className="text-white/60">Split profits from joint creations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}