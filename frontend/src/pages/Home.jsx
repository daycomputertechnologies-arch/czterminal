import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap, Flame, Coins, Gift, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { tokenStats, features } from '../mock';

export const Home = () => {
  const iconMap = {
    Flame: Flame,
    Coins: Coins,
    Gift: Gift,
    Users: Users
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-2 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Live on BNB Smart Chain</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              The Terminal for
            </span>
            <br />
            <span className="text-white">Opportunity</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            The Token for the Future. A community-driven BSC utility token with rewards, staking, and deflationary mechanisms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/40">
              Buy $CZT Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/staking">
              <Button variant="outline" className="border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300">
                Start Staking
              </Button>
            </Link>
          </div>

          {/* Token Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-6 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-amber-400">${tokenStats.price}</div>
              <div className="text-sm text-gray-400 mt-1">Current Price</div>
              <div className="text-xs text-green-400 mt-1">{tokenStats.priceChange24h}%</div>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-6 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-amber-400">${tokenStats.marketCap}</div>
              <div className="text-sm text-gray-400 mt-1">Market Cap</div>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-6 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-amber-400">{tokenStats.holders}</div>
              <div className="text-sm text-gray-400 mt-1">Holders</div>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-6 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Coins className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-amber-400">{tokenStats.totalSupply}</div>
              <div className="text-sm text-gray-400 mt-1">Total Supply</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Built for the Community
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              CZ Terminal Token combines innovative tokenomics with community-first principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/20 p-8 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-amber-500/10 via-amber-600/10 to-amber-700/10 border border-amber-500/30 p-12 md:p-16 text-center backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Join the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Connect your wallet and start earning rewards with CZ Terminal Token today
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-10 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/40">
                Buy $CZT Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500 font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
