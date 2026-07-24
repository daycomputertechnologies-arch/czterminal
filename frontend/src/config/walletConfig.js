import { createConfig, http } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

// Your WalletConnect Project ID
const projectId = 'e4642882d2adeee57b22c232232401f4';

export const config = createConfig({
  chains: [bsc],
  connectors: [
    walletConnect({
      projectId,
      metadata: {
        name: 'CZTerminal',
        description: 'CZTerminal - Community Token Ecosystem',
        url: typeof window !== 'undefined' ? window.location.origin : '',
        icons: ['/logo.jpeg'],
      },
      showQrModal: false, // We'll use the Web3Modal instead
    }),
  ],
  transports: {
    [bsc.id]: http('https://bsc-dataseed.binance.org/'),
  },
});

export const TOKEN_ADDRESS = '0x1234567890abcdef1234567890abcdef12345678';
export const PANCAKESWAP_URL = `https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=${TOKEN_ADDRESS}`;
