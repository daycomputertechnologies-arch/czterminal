import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wallet } from 'lucide-react';
import { Button } from './ui/button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tokenomics', path: '/tokenomics' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Staking', path: '/staking' }
  ];

  const handleWalletConnect = () => {
    // Mock wallet connection
    setWalletConnected(!walletConnected);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-amber-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-black font-bold text-xl">CZT</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-amber-400 font-bold text-xl tracking-tight">CZ Terminal</div>
              <div className="text-amber-500/70 text-xs tracking-wider">$CZT TOKEN</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-amber-400 bg-amber-500/10'
                    : 'text-gray-300 hover:text-amber-400 hover:bg-amber-500/5'
                }`}
                style={{ fontFamily: 'sans-serif', fontSize: '16px', fontWeight: 450 }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Wallet Connect Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleWalletConnect}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/30"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {walletConnected ? '0x7a4f...32bc' : 'Connect Wallet'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-amber-400 hover:text-amber-300 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-amber-500/20">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-amber-400 bg-amber-500/10'
                    : 'text-gray-300 hover:text-amber-400 hover:bg-amber-500/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={handleWalletConnect}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 mt-4"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {walletConnected ? '0x7a4f...32bc' : 'Connect Wallet'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
