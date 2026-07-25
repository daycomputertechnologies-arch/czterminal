import React from 'react';
import { Shield, Target, TrendingUp, Users } from 'lucide-react';
import { Card } from '../components/ui/card';

const About = () => {
  return (
    <div className="relative pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center p-[2px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.webp"
                  alt="CZT Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML =
                      '<span class="text-amber-400 font-bold text-2xl">CZT</span>';
                  }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              About CZTerminal
            </span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Building the future of community-driven token ecosystems
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8 md:p-10">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To create a sustainable, community-driven token ecosystem that
              empowers holders through innovative staking mechanisms,
              transparent governance, and strategic partnerships.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8 md:p-10">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 leading-relaxed">
              Transparency, security, and community-first decision making. We
              believe in building a token ecosystem that benefits all
              participants equally.
            </p>
          </Card>
        </div>

        {/* Why CZT Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Why CZTerminal?
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/20 p-8 text-center hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure</h3>
              <p className="text-gray-400">
                Audited smart contracts with community oversight
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/20 p-8 text-center hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sustainable</h3>
              <p className="text-gray-400">
                Deflationary tokenomics designed for long-term growth
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/20 p-8 text-center hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community</h3>
              <p className="text-gray-400">
                Driven by community votes and participation
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/20 p-8 text-center hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparent</h3>
              <p className="text-gray-400">
                Open governance and clear token distribution
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join the CZTerminal Community
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be part of a growing ecosystem that values transparency, community
              engagement, and sustainable growth. Together, we're building the
              future of community-driven tokens.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
