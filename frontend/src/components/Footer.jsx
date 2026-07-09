import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-amber-500/20 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.jpeg" 
                  alt="CZT Logo" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-black font-bold text-sm">CZT</span>';
                  }}
                />
              </div>
              <span className="text-white font-bold text-lg">CZTerminal</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Community-driven token ecosystem built on Binance Smart Chain.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://x.com/czterminal6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label="Twitter / X"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://t.me/czterminal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                aria-label="Telegram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/tokenomics" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/staking" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Staking
                </Link>
              </li>
              <li>
                <Link to="/whitepaper" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Whitepaper
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-amber-400 transition text-sm">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CZTerminal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;