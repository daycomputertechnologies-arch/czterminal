import React, { useState, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Wallet, ChevronDown, LogOut, Copy, Check } from 'lucide-react';

export const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const [copied, setCopied] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [walletStatus, setWalletStatus] = useState({});

  // Check if wallets are installed
  const checkWalletInstalled = () => {
    const status = {
      metaMask: false,
      trustWallet: false,
    };

    if (typeof window !== 'undefined') {
      // Check MetaMask
      if (window.ethereum && window.ethereum.isMetaMask) {
        status.metaMask = true;
      }
      
      // Check Trust Wallet
      if (window.trustwallet || (window.ethereum && window.ethereum.isTrustWallet)) {
        status.trustWallet = true;
      }
    }

    setWalletStatus(status);
    console.log('Wallet Status:', status);
  };

  // Check on mount and when window changes
  useEffect(() => {
    checkWalletInstalled();
    
    const handleFocus = () => {
      setTimeout(checkWalletInstalled, 500);
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isDropdownOpen && !e.target.closest('.wallet-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  // Get wallet logo
  const getWalletLogo = (connectorId) => {
    if (connectorId === 'metaMask' || connectorId === 'metaMaskSDK') {
      return (
        <svg className="w-8 h-8" viewBox="0 0 318.6 318.6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M314.8 0L177.7 95.4L190.6 39.4L314.8 0Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5"/>
          <path d="M3.8 0L139.8 96.1L128 39.4L3.8 0Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.5"/>
          <path d="M272.2 228.5L238.5 279.4L313.3 302.9L335.5 226.5L272.2 228.5Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.5"/>
          <path d="M-16.9 226.5L5.3 302.9L80.1 279.4L46.4 228.5L-16.9 226.5Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.5"/>
          <path d="M82.8 138.1L64.9 165.9L138.9 169.4L136.5 89.2L82.8 138.1Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.5"/>
          <path d="M235.8 138.1L182.1 88.5L179.7 169.4L253.7 165.9L235.8 138.1Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.5"/>
          <path d="M80.1 279.4L123.9 258.9L86.2 230.6L80.1 279.4Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.5"/>
          <path d="M194.7 258.9L238.5 279.4L232.4 230.6L194.7 258.9Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.5"/>
          <path d="M238.5 279.4L194.7 258.9L198.3 283.7L197.8 299.8L238.5 279.4Z" fill="#D7C1B3" stroke="#D7C1B3" strokeWidth="0.5"/>
          <path d="M80.1 279.4L120.8 299.8L120.3 283.7L123.9 258.9L80.1 279.4Z" fill="#D7C1B3" stroke="#D7C1B3" strokeWidth="0.5"/>
          <path d="M121.7 200.8L86.6 191.1L112.9 179.1L121.7 200.8Z" fill="#233447" stroke="#233447" strokeWidth="0.5"/>
          <path d="M196.9 200.8L205.7 179.1L232 191.1L196.9 200.8Z" fill="#233447" stroke="#233447" strokeWidth="0.5"/>
          <path d="M80.1 279.4L87.1 228.5L46.4 226.5L80.1 279.4Z" fill="#CD6116" stroke="#CD6116" strokeWidth="0.5"/>
          <path d="M231.5 228.5L238.5 279.4L272.2 226.5L231.5 228.5Z" fill="#CD6116" stroke="#CD6116" strokeWidth="0.5"/>
          <path d="M253.7 165.9L179.7 169.4L197.3 200.8L205.7 179.1L232 191.1L253.7 165.9Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.5"/>
          <path d="M86.6 191.1L112.9 179.1L121.3 200.8L138.9 169.4L64.9 165.9L86.6 191.1Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.5"/>
          <path d="M64.9 165.9L112.9 179.1L105.8 209.1L64.9 165.9Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.5"/>
          <path d="M205.7 179.1L253.7 165.9L212.8 209.1L205.7 179.1Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.5"/>
          <path d="M212.8 209.1L253.7 165.9L232.4 230.6L212.8 209.1Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.5"/>
          <path d="M105.8 209.1L64.9 165.9L86.6 230.6L105.8 209.1Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.5"/>
          <path d="M86.6 230.6L123.9 258.9L121.7 200.8L86.6 230.6Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.5"/>
          <path d="M196.9 200.8L194.7 258.9L232 230.6L196.9 200.8Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.5"/>
          <path d="M194.7 258.9L196.9 200.8L197.3 221.4L198.3 283.7L194.7 258.9Z" fill="#C0AD9E" stroke="#C0AD9E" strokeWidth="0.5"/>
          <path d="M123.9 258.9L120.3 283.7L121.3 221.4L123.9 258.9Z" fill="#C0AD9E" stroke="#C0AD9E" strokeWidth="0.5"/>
          <path d="M120.3 283.7L123.9 258.9L86.6 230.6L105.8 209.1L120.3 283.7Z" fill="#161616" stroke="#161616" strokeWidth="0.5"/>
          <path d="M197.3 221.4L194.7 258.9L212.8 209.1L232 230.6L197.3 221.4Z" fill="#161616" stroke="#161616" strokeWidth="0.5"/>
        </svg>
      );
    }

    if (connectorId === 'trustWallet' || connectorId === 'walletConnect') {
      return (
        <svg className="w-8 h-8" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="512" height="512" rx="128" fill="#3375BB" />
          <path d="M256 128L195.2 170.667V256L256 298.667L316.8 256V170.667L256 128Z" fill="white" />
          <path d="M256 384L170.667 337.067V256L256 298.667L341.333 256V337.067L256 384Z" fill="white" opacity="0.6" />
          <path d="M170.667 256L256 298.667V384L170.667 337.067V256Z" fill="white" opacity="0.4" />
          <path d="M341.333 256L256 298.667V384L341.333 337.067V256Z" fill="white" opacity="0.2" />
        </svg>
      );
    }

    return <Wallet className="w-6 h-6 text-amber-400" />;
  };

  if (isConnected && address) {
    return (
      <div className="relative wallet-dropdown">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-lg hover:border-amber-500/60 transition-all duration-200"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-white font-medium">{formatAddress(address)}</span>
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
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200"
      >
        <Wallet className="w-4 h-4" />
        Connect Wallet
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-gray-900 border border-amber-500/30 rounded-lg shadow-xl overflow-hidden z-50">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-white font-semibold">Connect Wallet</h3>
            <p className="text-sm text-gray-400">Choose your preferred wallet</p>
          </div>
          <div className="p-2">
            {/* MetaMask */}
            {connectors.some(c => c.id === 'metaMask' || c.id === 'metaMaskSDK') && (
              <button
                onClick={() => {
                  const connector = connectors.find(c => c.id === 'metaMask' || c.id === 'metaMaskSDK');
                  if (connector) {
                    connect({ connector });
                    setIsDropdownOpen(false);
                  }
                }}
                disabled={!walletStatus.metaMask || isPending}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition ${
                  walletStatus.metaMask
                    ? 'hover:bg-amber-500/10 text-white cursor-pointer'
                    : 'opacity-50 cursor-not-allowed text-gray-500'
                }`}
              >
                <div className="flex-shrink-0">{getWalletLogo('metaMask')}</div>
                <div className="flex-1 text-left">
                  <div className="font-medium">MetaMask</div>
                  <div className="text-xs">
                    {walletStatus.metaMask ? (
                      <span className="text-green-400">✅ Installed</span>
                    ) : (
                      <span className="text-gray-500">❌ Not installed</span>
                    )}
                  </div>
                </div>
                {isPending && <span className="text-xs text-amber-400">Connecting...</span>}
              </button>
            )}

            {/* Trust Wallet */}
            {connectors.some(c => c.id === 'trustWallet' || c.id === 'walletConnect') && (
              <button
                onClick={() => {
                  const connector = connectors.find(c => c.id === 'trustWallet' || c.id === 'walletConnect');
                  if (connector) {
                    connect({ connector });
                    setIsDropdownOpen(false);
                  }
                }}
                disabled={!walletStatus.trustWallet || isPending}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition ${
                  walletStatus.trustWallet
                    ? 'hover:bg-amber-500/10 text-white cursor-pointer'
                    : 'opacity-50 cursor-not-allowed text-gray-500'
                }`}
              >
                <div className="flex-shrink-0">{getWalletLogo('trustWallet')}</div>
                <div className="flex-1 text-left">
                  <div className="font-medium">Trust Wallet</div>
                  <div className="text-xs">
                    {walletStatus.trustWallet ? (
                      <span className="text-green-400">✅ Installed</span>
                    ) : (
                      <span className="text-gray-500">❌ Not installed</span>
                    )}
                  </div>
                </div>
                {isPending && <span className="text-xs text-amber-400">Connecting...</span>}
              </button>
            )}
          </div>

          {/* WalletConnect - Always shown as fallback */}
          <div className="p-2 border-t border-gray-700">
            <p className="text-xs text-gray-500 text-center mb-2">Or connect with</p>
            {connectors.some(c => c.id === 'walletConnect') && (
              <button
                onClick={() => {
                  const connector = connectors.find(c => c.id === 'walletConnect');
                  if (connector) {
                    connect({ connector });
                    setIsDropdownOpen(false);
                  }
                }}
                disabled={isPending}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-amber-500/10 transition text-white"
              >
                <div className="flex-shrink-0 text-2xl">📱</div>
                <div className="flex-1 text-left">
                  <div className="font-medium">WalletConnect</div>
                  <div className="text-xs text-gray-400">Mobile & QR Code</div>
                </div>
                {isPending && <span className="text-xs text-amber-400">Connecting...</span>}
              </button>
            )}
          </div>

          <div className="p-3 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-500">BSC Network • PancakeSwap</p>
          </div>
        </div>
      )}
    </div>
  );
};