import React from 'react';
import { CheckCircle2, Circle, Clock } from '../lib/icons';
import { Card } from '../components/ui/card';

const Roadmap = () => {
  const statusConfig = {
    completed: {
      icon: CheckCircle2,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
    },
    'in-progress': {
      icon: Clock,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
    },
    upcoming: {
      icon: Circle,
      color: 'text-gray-400',
      bg: 'bg-gray-500/10',
      border: 'border-gray-500/30',
    },
  };

  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Launch',
      status: 'completed',
      items: [
        'Token deployment on BSC',
        'Community launch',
        'Branding & awareness campaign',
        'White paper publication',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Utility Rollout',
      status: 'in-progress',
      items: ['Launch flexible staking', 'Launch fixed staking'],
    },
    {
      phase: 'Phase 3',
      title: 'Ecosystem Expansion',
      status: 'upcoming',
      items: [
        'Cross-chain integration',
        'DeFi partnerships',
        'Community governance',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Full Scale',
      status: 'upcoming',
      items: [
        'Global community events',
        'Enterprise solutions',
        'Advanced features release',
      ],
    },
  ];

  return (
    <div
      className="relative pt-32 pb-20 px-4 min-h-screen overflow-y-auto"
      style={{
        height: '100vh',
        overflowY: 'auto',
        scrollBehavior: 'smooth',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Logo */}
          <div className="flex justify-center mb-6">
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
              Roadmap
            </span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Our journey to building the future of community-driven tokens
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500/50 via-amber-500/30 to-transparent"></div>

          <div className="space-y-16">
            {roadmapPhases.map((phase, index) => {
              const StatusIcon = statusConfig[phase.status].icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}
                  >
                    <Card
                      className={`bg-gradient-to-br from-black to-amber-950/20 border ${statusConfig[phase.status].border} p-8 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105`}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-amber-400 font-semibold text-sm mb-1">
                            {phase.phase}
                          </div>
                          <h3 className="text-3xl font-bold text-white">
                            {phase.title}
                          </h3>
                        </div>
                        <div
                          className={`w-16 h-16 rounded-full ${statusConfig[phase.status].bg} border ${statusConfig[phase.status].border} flex items-center justify-center`}
                        >
                          <StatusIcon
                            className={`w-8 h-8 ${statusConfig[phase.status].color}`}
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start space-x-3"
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${statusConfig[phase.status].color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}
                            ></div>
                            <p className="text-gray-300">{item}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t border-amber-500/20">
                        <span
                          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${statusConfig[phase.status].bg} ${statusConfig[phase.status].border} border ${statusConfig[phase.status].color}`}
                        >
                          {phase.status === 'completed' && 'Completed'}
                          {phase.status === 'in-progress' && 'In Progress'}
                          {phase.status === 'upcoming' && 'Upcoming'}
                        </span>
                      </div>
                    </Card>
                  </div>

                  {/* Center Point */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-amber-500 border-4 border-black z-10"></div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;