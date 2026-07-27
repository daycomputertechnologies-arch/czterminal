import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Coins, Users } from 'lucide-react';
import { Card } from '../components/ui/card';
import PancakeSwapButton from '../components/PancakeSwapButton';

const Home = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const address = '0x93857a2c3f2a54b94ce4433c46677e3e9ad8798c';
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
      // Fallback method for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center p-[3px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.webp?v=1"
                  alt="CZT Logo"
                  className="w-[90%] h-[90%] object-contain"
                  
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              CZTerminal
            </span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            Community-driven token ecosystem built on Binance Smart Chain
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/staking">
              <button
                disabled
                className="px-6 py-3 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed opacity-50"
              >
                Staking 🔒 (Coming Soon)
              </button>
            </Link>
            <Link to="/whitepaper">
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300">
                Read Whitepaper
              </button>
            </Link>
          </div>
        </div>

        {/* Contract Address Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/30 p-6 max-w-2xl mx-auto hover:border-amber-500/60 transition-all duration-300">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-amber-400 flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Contract Address
              </h3>
            </div>
            <div className="flex items-center gap-3 bg-black/50 rounded-lg p-3 border border-amber-500/20">
              <div className="flex-1 overflow-hidden">
                <code className="text-sm text-gray-300 font-mono truncate block">
                  0x93857a2c3f2a54b94ce4433c46677e3e9ad8798c
                </code>
              </div>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 font-semibold rounded-lg transition-all duration-200 hover:scale-105 text-sm flex items-center gap-2"
              >
                {copied ? (
                  '✅ Copied!'
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-3">
              BSC Mainnet • Click copy to copy contract address
            </p>
          </Card>
        </div>

        {/* PancakeSwap Button */}
        <PancakeSwapButton />

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 mt-12">
          <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/30 p-6 hover:border-amber-500/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
              <Coins className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Tokenomics</h3>
            <p className="text-gray-400">
              Transparent and sustainable token distribution
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/30 p-6 hover:border-amber-500/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Secure</h3>
            <p className="text-gray-400">
              Audited smart contracts with community governance
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/30 p-6 hover:border-amber-500/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fast</h3>
            <p className="text-gray-400">
              Quick transactions on BSC with low fees
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/30 p-6 hover:border-amber-500/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-400">
              Driven by community votes and participation
            </p>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/about">
            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/30 p-6 hover:border-amber-500/60 transition-all duration-300 text-center group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">
                About
              </h3>
              <p className="text-gray-400">Learn about our mission and team</p>
              <ArrowRight className="w-5 h-5 text-amber-400 mx-auto mt-4" />
            </Card>
          </Link>

          <Link to="/tokenomics">
            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/30 p-6 hover:border-amber-500/60 transition-all duration-300 text-center group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">
                Tokenomics
              </h3>
              <p className="text-gray-400">
                View token distribution and metrics
              </p>
              <ArrowRight className="w-5 h-5 text-amber-400 mx-auto mt-4" />
            </Card>
          </Link>

          <Link to="/roadmap">
            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/30 p-6 hover:border-amber-500/60 transition-all duration-300 text-center group">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">
                Roadmap
              </h3>
              <p className="text-gray-400">Our journey and future plans</p>
              <ArrowRight className="w-5 h-5 text-amber-400 mx-auto mt-4" />
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

