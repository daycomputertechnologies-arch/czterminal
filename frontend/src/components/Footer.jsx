import React from 'react';
import { Twitter, Send, MessageCircle, FileText, Mail } from 'lucide-react';
import { socialLinks } from '../mock';

export const Footer = () => {
  const iconMap = {
    Twitter: Twitter,
    Send: Send,
    MessageCircle: MessageCircle,
    FileText: FileText
  };

  return (
    <footer className="relative bg-black border-t border-amber-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-black font-bold text-xl">CZT</span>
              </div>
              <div>
                <div className="text-amber-400 font-bold text-xl">CZ Terminal Token</div>
                <div className="text-amber-500/70 text-sm">$CZT</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The Terminal for Opportunity. The Token for the Future.<br />
              A community-driven BSC utility token with rewards, staking, and deflationary mechanisms.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 hover:bg-amber-500/20 hover:border-amber-500/40 hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-400 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">About</a></li>
              <li><a href="/tokenomics" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Tokenomics</a></li>
              <li><a href="/roadmap" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Roadmap</a></li>
              <li><a href="/staking" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Staking</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-amber-400 font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Audit Report</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Contract</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 CZ Terminal Token. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">Disclaimer</a>
            </div>
          </div>
          <p className="text-gray-600 text-xs text-center mt-6">
            This website is for informational purposes only and does not constitute financial, investment, legal, or tax advice.
          </p>
        </div>
      </div>
    </footer>
  );
};
