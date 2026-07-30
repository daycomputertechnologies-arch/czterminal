import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from '../lib/icons';
import { useAccount } from 'wagmi';
import WalletConnect from './WalletConnect';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isConnected } = useAccount();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/tokenomics', label: 'Tokenomics' },
    { path: '/roadmap', label: 'Roadmap' },
    { path: 'https://czt-staking.netlify.app', label: 'Staking', external: true },
    { path: '/whitepaper', label: '📄 Whitepaper' },
  ];

  const isActive = (path) => location.pathname === path;

  // PancakeSwap URL with your token
  const TOKEN_ADDRESS = '0x93857a2c3f2a54b94ce4433c46677e3e9ad8798c';
  const PANCAKESWAP_URL = `https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=${TOKEN_ADDRESS}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 p-[2px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png?v=1"
                  alt="CZT Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              CZT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.disabled ? (
                <span
                  key={link.path}
                  className="text-sm font-medium text-gray-500 cursor-not-allowed opacity-50"
                >
                  {link.label} 🔒
                </span>
              ) : link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-amber-400"
                >
                  {link.label} ↗
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-amber-400'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Buy Button - Shows only when wallet is connected */}
            {isConnected && (
              <a
                href={PANCAKESWAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200"
              >
                🥞 Buy CZT
              </a>
            )}

            <WalletConnect />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-amber-500/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) =>
              link.disabled ? (
                <span
                  key={link.path}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-500 cursor-not-allowed opacity-50"
                >
                  {link.label} 🔒
                </span>
              ) : link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 text-gray-300 hover:bg-amber-500/10 hover:text-amber-400"
                >
                  {link.label} ↗
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'bg-amber-500/10 text-amber-400'
                      : 'text-gray-300 hover:bg-amber-500/10 hover:text-amber-400'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Buy Button in Mobile Menu */}
            {isConnected && (
              <a
                href={PANCAKESWAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-black text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                🥞 Buy CZT
              </a>
            )}

            <div className="px-4 py-2">
              <WalletConnect />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;