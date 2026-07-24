// Mock data for CZ Terminal Token website

export const tokenStats = {
  price: '0.0042',
  marketCap: '2,100,000',
  holders: '15,247',
  totalSupply: '500,000,000',
  circulatingSupply: '350,000,000',
  burned: '0',
  priceChange24h: '+12.5',
};

export const socialLinks = [
  { name: 'Twitter', url: '#', icon: 'Twitter' },
  { name: 'Telegram', url: '#', icon: 'Send' },
  { name: 'Discord', url: '#', icon: 'MessageCircle' },
  { name: 'Medium', url: '#', icon: 'FileText' },
];

export const tokenomics = {
  totalSupply: '500,000,000',
  distribution: [
    {
      category: 'Liquidity & Market Support',
      percentage: 30,
      amount: '150,000,000',
      color: '#F59E0B',
    },
    {
      category: 'Staking Rewards',
      percentage: 20,
      amount: '100,000,000',
      color: '#D97706',
    },
    {
      category: 'Holder Airdrops & Community Rewards',
      percentage: 15,
      amount: '75,000,000',
      color: '#B45309',
    },
    {
      category: 'Project Development',
      percentage: 15,
      amount: '75,000,000',
      color: '#92400E',
    }, // ✅ CHANGED
    {
      category: 'Marketing & Partnerships',
      percentage: 10,
      amount: '50,000,000',
      color: '#78350F',
    },
    {
      category: 'Treasury / Reserve',
      percentage: 10,
      amount: '50,000,000',
      color: '#451A03',
    },
  ],
};

export const roadmapPhases = [
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
    items: [
      'Launch flexible staking',
      'Launch fixed staking',
      'Holder reward programs',
      'First airdrops',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Deflationary Structure',
    status: 'upcoming',
    items: [
      'Activate burn mechanisms',
      'Market-cap based burn strategies',
      'Expand community incentives',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem Growth',
    status: 'upcoming',
    items: [
      'Additional utilities',
      'Community partnerships',
      'Staking enhancements',
      'Long-term development',
    ],
  },
];

export const stakingOptions = [
  {
    type: 'Flexible Staking',
    apy: '8-12%',
    lockPeriod: 'None',
    minAmount: '1,000 $CZT',
    description: 'Stake and unstake anytime with complete flexibility',
    features: [
      'No lock period',
      'Withdraw anytime',
      'Lower APY',
      'Great for liquidity',
    ],
  },
  {
    type: 'Fixed Staking',
    apy: '18-25%',
    lockPeriod: '30-180 days',
    minAmount: '5,000 $CZT',
    description: 'Lock tokens for higher rewards and support the ecosystem',
    features: [
      'Fixed lock period',
      'Higher APY',
      'Enhanced rewards',
      'Ecosystem support',
    ],
  },
];

export const features = [
  {
    title: 'Deflationary Burn',
    description:
      'Strategic token burns triggered by market milestones create scarcity and long-term value.',
    icon: 'Flame',
  },
  {
    title: 'Flexible Staking',
    description:
      'Earn rewards with complete flexibility - stake and unstake whenever you need.',
    icon: 'Coins',
  },
  {
    title: 'Holder Rewards',
    description:
      'Regular airdrops and community rewards for loyal token holders.',
    icon: 'Gift',
  },
  {
    title: 'Community Driven',
    description:
      'Built by the community, for the community. Your voice matters in our ecosystem.',
    icon: 'Users',
  },
];
