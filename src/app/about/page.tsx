import { Brain, Heart, Palette, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#030303] pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            The Future of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Human Connection</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            CONSILIENCE revolutionizes how people meet, connect, and create value together through AI-powered matching and blockchain technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-xl p-8">
            <Brain className="text-purple-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Matching</h3>
            <p className="text-white/70 leading-relaxed">
              Our advanced AI analyzes your blockchain activity, interests, and behavior patterns to find genuinely compatible connections. No more random swiping - every match is meaningful.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-xl p-8">
            <Heart className="text-blue-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Authentic Relationships</h3>
            <p className="text-white/70 leading-relaxed">
              Build real connections based on shared values, interests, and goals. Our platform encourages deep conversations and meaningful interactions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10 rounded-xl p-8">
            <Palette className="text-green-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Create Together</h3>
            <p className="text-white/70 leading-relaxed">
              Generate unique NFTs with AI, collaborate on digital art, and build a shared creative portfolio. Turn your connections into creative partnerships.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-white/10 rounded-xl p-8">
            <Zap className="text-orange-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Blockchain Native</h3>
            <p className="text-white/70 leading-relaxed">
              Built on Solana for fast, cheap transactions. Your identity, creations, and relationships are secured by blockchain technology.
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why CONSILIENCE?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Traditional dating apps focus on superficial connections. CONSILIENCE goes deeper, using AI to understand who you really are and what you're looking for. We're not just matching profiles - we're matching souls, minds, and creative spirits.
          </p>
          <div className="flex justify-center">
            <a href="/dashboard" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold">
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}