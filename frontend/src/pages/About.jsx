import React from 'react';
import { Shield, Target, TrendingUp, Users } from 'lucide-react';
import { Card } from '../components/ui/card';

export const About = () => {
  return (
    <div className="relative pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Logo Section - ADDED */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.jpeg"
              alt="CZT Logo"
              className="w-28 h-28 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              About CZ Terminal
            </span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The Terminal for Opportunity. The Token for the Future.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8 md:p-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              What is $CZT?
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                CZ Terminal Token ($CZT) is a community-driven BSC utility token
                built on the BNB Smart Chain. It is designed with a fixed
                supply, reward-based incentives, staking options, and a
                deflationary burn model.
              </p>
              <p>
                The project aims to build a scalable ecosystem that fosters
                long-term participation and value alignment between the
                community and the token economy.
              </p>
              <p>
                With a total supply of 500,000,000 $CZT tokens, we're creating a
                sustainable model that rewards holders while maintaining
                scarcity through strategic burns.
              </p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8 md:p-10">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                To build a transparent, reward-oriented ecosystem that
                encourages long-term holding and rewards active participation in
                the CZ Terminal community.
              </p>
              <p>
                We provide flexible staking choices that cater to different
                investment strategies, from flexible staking for liquidity to
                fixed staking for enhanced rewards.
              </p>
              <p>
                Through controlled scarcity via token burns and strategic
                market-cap milestones, we create sustainable value for all token
                holders.
              </p>
            </div>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/20 p-8 text-center hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Transparency
              </h3>
              <p className="text-gray-400">
                Open communication and clear tokenomics for our community
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/20 p-8 text-center hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Community First
              </h3>
              <p className="text-gray-400">
                Built by the community, for the community
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/20 p-8 text-center hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Sustainable Growth
              </h3>
              <p className="text-gray-400">
                Long-term vision with deflationary mechanisms
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/20 p-8 text-center hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                Cutting-edge features and continuous improvement
              </p>
            </Card>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Token Use Cases
            </span>
          </h2>
          <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Staking Participation
                  </h3>
                  <p className="text-gray-400">
                    Earn passive income through flexible or fixed staking
                    options
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Airdrop Eligibility
                  </h3>
                  <p className="text-gray-400">
                    Qualify for exclusive airdrops and community rewards
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Holder Rewards
                  </h3>
                  <p className="text-gray-400">
                    Receive regular rewards for being a loyal token holder
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Ecosystem Privileges
                  </h3>
                  <p className="text-gray-400">
                    Access future utilities and exclusive community benefits
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Community Governance
                  </h3>
                  <p className="text-gray-400">
                    Participate in shaping the future of CZ Terminal
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Trading & Liquidity
                  </h3>
                  <p className="text-gray-400">
                    Trade on DEXs with strong liquidity support
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
