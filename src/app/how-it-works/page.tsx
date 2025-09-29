import { ArrowRight, Wallet, Bot, Users, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#030303] pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            How <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CONSILIENCE</span> Works
          </h1>
          <p className="text-xl text-white/70">
            Four simple steps to find your perfect match and create together
          </p>
        </div>

        <div className="space-y-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <Wallet className="text-purple-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect Your Wallet</h3>
                <p className="text-white/70 leading-relaxed">
                  Link your Solana wallet to establish your on-chain identity. We analyze your transaction history, NFT collections, and DeFi activity to understand your interests and values.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 text-center">
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8">
                <Wallet className="mx-auto text-purple-400 mb-4" size={64} />
                <p className="text-white/60">Phantom, Solflare, Backpack supported</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <Bot className="text-blue-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Analyzes You</h3>
                <p className="text-white/70 leading-relaxed">
                  Our AI creates a deep personality profile based on your blockchain behavior, interests, and goals. It learns what makes you unique and what you're looking for in connections.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 text-center">
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8">
                <Bot className="mx-auto text-blue-400 mb-4" size={64} />
                <p className="text-white/60">Advanced ML algorithms</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <Users className="text-green-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Find Your Matches</h3>
                <p className="text-white/70 leading-relaxed">
                  Get matched with compatible people based on deep compatibility scores. Chat with AI assistance to break the ice and discover shared interests.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 text-center">
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8">
                <Users className="mx-auto text-green-400 mb-4" size={64} />
                <p className="text-white/60">95%+ compatibility matching</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-white/10 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                  <Sparkles className="text-orange-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Create Together</h3>
                <p className="text-white/70 leading-relaxed">
                  Generate unique NFTs together, collaborate on projects, and build a shared digital legacy. Turn your connection into creative and financial partnerships.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 text-center">
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8">
                <Sparkles className="mx-auto text-orange-400 mb-4" size={64} />
                <p className="text-white/60">AI-powered NFT generation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="/dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold">
            Get Started Now
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}