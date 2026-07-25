import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from '../components/ui/card';
import { tokenomics } from '../mock';
import { Coins, Lock, Users, Rocket, Megaphone, Building } from 'lucide-react';

const Tokenomics = () => {
  const chartData = tokenomics.distribution.map(item => ({
    name: item.category,
    value: item.percentage,
    color: item.color
  }));

  const iconMap = {
    'Liquidity & Market Support': Coins,
    'Staking Rewards': Lock,
    'Holder Airdrops & Community Rewards': Users,
    'Project Development': Rocket,
    'Marketing & Partnerships': Megaphone,
    'Treasury / Reserve': Building
  };

  return (
    <div className="relative pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center p-[2px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="CZT Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-amber-400 font-bold text-2xl">CZT</span>';
                  }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Transparent and sustainable token distribution model
          </p>
        </div>

        {/* Total Supply */}
        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 p-10 text-center mb-20">
          <div className="text-amber-400 text-lg font-semibold mb-3">Total Supply</div>
          <div className="text-6xl md:text-7xl font-bold text-white mb-4">
            {tokenomics.totalSupply}
          </div>
          <div className="text-xl text-gray-400">$CZT Tokens</div>
        </Card>

        {/* Distribution Chart & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Chart */}
          <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Token Distribution</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Distribution Details */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white mb-8">Allocation Breakdown</h2>
            {tokenomics.distribution.map((item, index) => {
              const Icon = iconMap[item.category] || Coins;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-black to-amber-950/20 border border-amber-500/20 p-6 hover:border-amber-500/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${item.color}40`, border: `1px solid ${item.color}60` }}
                      >
                        <Icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{item.category}</h3>
                        <p className="text-gray-400 text-sm">{item.amount} $CZT</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-400">{item.percentage}%</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* NO TEAM TOKEN ALLOCATION Footer */}
        <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-center">
          <p className="text-amber-400 font-bold text-lg">NO TEAM TOKEN ALLOCATION.</p>
        </div>

        {/* Key Features */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Token Mechanics
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Deflationary Burns</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Burns are triggered when specific token thresholds or market capitalization milestones are achieved.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Threshold-based burns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Market-cap milestones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Controlled scarcity</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Staking Rewards</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                20% of total supply allocated for staking rewards with flexible and fixed options.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Flexible staking (8-12% APY)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Fixed staking (18-25% APY)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>100M $CZT pool</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Community Rewards</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                15% dedicated to holder airdrops and community incentives for active participation.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Regular airdrops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Loyalty incentives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Promotional events</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;