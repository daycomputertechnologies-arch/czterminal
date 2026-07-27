import React, { useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { Wallet, ChevronDown, LogOut, Copy, Check } from '../lib/icons';
import { useWeb3Modal } from '@web3modal/wagmi/react';

const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const [copied, setCopied] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatAddress = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (isConnected && address) {
    return (
      <div className="relative wallet-dropdown">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-lg hover:border-amber-500/60 transition-all duration-200"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-white font-medium">
            {formatAddress(address)}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-amber-500/30 rounded-lg shadow-xl overflow-hidden z-50">
            <div className="p-4 border-b border-gray-700">
              <p className="text-sm text-gray-400">Connected Wallet</p>
              <p className="text-white font-mono text-sm truncate">{address}</p>
              <button
                onClick={copyAddress}
                className="mt-2 flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Address
                  </>
                )}
              </button>
            </div>
            <div className="p-2">
              <button
                onClick={() => {
                  disconnect();
                  setIsDropdownOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition"
              >
                <LogOut className="w-4 h-4" />
                Disconnect
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative wallet-dropdown">
      <button
        onClick={() => open()} // This opens the Web3Modal
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200"
      >
        <Wallet className="w-4 h-4" />
        Connect Wallet
      </button>
    </div>
  );
};

export default WalletConnect;

