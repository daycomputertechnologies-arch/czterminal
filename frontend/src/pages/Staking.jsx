import React, { useState } from 'react';
import {
  Lock,
  Unlock,
  TrendingUp,
  Calendar,
  Coins,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { stakingOptions } from '../mock';
import { toast } from 'sonner';

const Staking = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [amount, setAmount] = useState('');
  const [lockPeriod, setLockPeriod] = useState('30');

  const handleStake = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    if (!selectedOption) {
      toast.error('Please select a staking option');
      return;
    }
    toast.success(`Successfully staked ${amount} $CZT!`);
    setAmount('');
  };

  return (
    <div className="relative pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Logo Section - ADDED */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="CZT Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Stake & Earn
            </span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Choose your staking strategy and start earning rewards
          </p>
        </div>

        {/* Staking Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {stakingOptions.map((option, index) => (
            <Card
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`bg-gradient-to-br from-black to-amber-950/20 border p-8 cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                selectedOption === index
                  ? 'border-amber-500 shadow-2xl shadow-amber-500/30'
                  : 'border-amber-500/20 hover:border-amber-500/40'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center">
                    {index === 0 ? (
                      <Unlock className="w-8 h-8 text-amber-400" />
                    ) : (
                      <Lock className="w-8 h-8 text-amber-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {option.type}
                    </h3>
                    <p className="text-amber-400 font-semibold text-lg">
                      {option.apy} APY
                    </p>
                  </div>
                </div>
                {selectedOption === index && (
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {option.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">Lock Period</div>
                  <div className="text-white font-semibold">
                    {option.lockPeriod}
                  </div>
                </div>
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">Min. Amount</div>
                  <div className="text-white font-semibold">
                    {option.minAmount}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {option.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className="flex items-center space-x-2 text-gray-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Staking Form */}
        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Stake Your Tokens
          </h2>

          <div className="space-y-6">
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Amount to Stake
              </label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-black/50 border-amber-500/30 text-white placeholder-gray-500 h-14 text-lg pr-20"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400 font-semibold">
                  $CZT
                </div>
              </div>
            </div>

            {selectedOption === 1 && (
              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">
                  Lock Period (Days)
                </label>
                <select
                  value={lockPeriod}
                  onChange={(e) => setLockPeriod(e.target.value)}
                  className="w-full bg-black/50 border border-amber-500/30 text-white h-14 px-4 rounded-lg focus:outline-none focus:border-amber-500"
                >
                  <option value="30">30 Days (18% APY)</option>
                  <option value="90">90 Days (21% APY)</option>
                  <option value="180">180 Days (25% APY)</option>
                </select>
              </div>
            )}

            {amount && selectedOption !== null && (
              <Card className="bg-amber-500/5 border border-amber-500/20 p-6">
                <h3 className="text-white font-semibold mb-4">
                  Estimated Rewards
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">APY</div>
                    <div className="text-amber-400 text-xl font-bold">
                      {stakingOptions[selectedOption].apy}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">
                      Est. Annual Reward
                    </div>
                    <div className="text-amber-400 text-xl font-bold">
                      {selectedOption === 0
                        ? (parseFloat(amount) * 0.1).toFixed(0)
                        : (parseFloat(amount) * 0.215).toFixed(0)}{' '}
                      $CZT
                    </div>
                  </div>
                </div>
              </Card>
            )}

            <Button
              onClick={handleStake}
              disabled={!amount || !selectedOption}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Stake Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
              <Coins className="w-8 h-8 text-amber-400" />
            </div>
            <div className="text-4xl font-bold text-amber-400 mb-2">100M</div>
            <div className="text-gray-400">Total Staking Pool</div>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-amber-400" />
            </div>
            <div className="text-4xl font-bold text-amber-400 mb-2">25%</div>
            <div className="text-gray-400">Max APY</div>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500/5 to-amber-600/5 border border-amber-500/20 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-amber-400" />
            </div>
            <div className="text-4xl font-bold text-amber-400 mb-2">Daily</div>
            <div className="text-gray-400">Reward Distribution</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Staking;
