import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { ArrowRight, ExternalLink } from '../lib/icons';

export const PancakeSwapButton = () => {
  const { address, isConnected } = useAccount();
  const [showButton, setShowButton] = useState(false);

  // Your token contract address (UPDATE THIS LATER)
  const TOKEN_ADDRESS = '0x1234567890abcdef1234567890abcdef12345678';
  
  // PancakeSwap swap URL with BNB as input and token as output
  const PANCAKESWAP_URL = `https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=${TOKEN_ADDRESS}`;

  useEffect(() => {
    // Show button when wallet is connected and address exists
    if (isConnected && address) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [isConnected, address]);

  // Format address with safety check
  const formatAddress = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (!showButton || !address) {
    return null;
  }

  const handleBuyTokens = () => {
    // Open PancakeSwap in a new tab
    window.open(PANCAKESWAP_URL, '_blank');
  };

  return (
    <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-lg max-w-2xl mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
            <span className="text-amber-400 text-xl">🥞</span>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Buy $CZT on PancakeSwap</h4>
            <p className="text-gray-400 text-xs">
              Swap BNB for CZT tokens
            </p>
          </div>
        </div>
        
        <button
          onClick={handleBuyTokens}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 group"
        >
          <span>Buy Now</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Quick info */}
      <div className="mt-3 pt-3 border-t border-amber-500/20 flex flex-wrap gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <span className="text-green-400">●</span>
          <span>BNB → CZT</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-400">●</span>
          <span>Connected: {formatAddress(address)}</span>
        </div>
      </div>
    </div>
  );
};
