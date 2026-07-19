import { createConfig, http } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { metaMask, walletConnect, injected } from 'wagmi/connectors';

export const config = createConfig({
  chains: [bsc],
  connectors: [
    // MetaMask - Direct extension detection
    metaMask({
      dappMetadata: {
        name: 'CZTerminal',
      }
    }),
    
    // Trust Wallet - Direct extension detection
    injected({
      target: 'trustWallet',
      shimDisconnect: true,
      getProvider: () => {
        if (typeof window !== 'undefined') {
          return window.trustwallet || 
                 (window.ethereum && window.ethereum.isTrustWallet ? window.ethereum : undefined);
        }
        return undefined;
      }
    }),
    
    // WalletConnect - Fallback for mobile
    walletConnect({
      projectId: 'e4642882d2adeee57b22c232232401f4',
      metadata: {
        name: 'CZTerminal',
        description: 'CZTerminal - Community Token Ecosystem',
        url: typeof window !== 'undefined' ? window.location.origin : '',
        icons: ['/logo.jpeg'],
      },
      showQrModal: true,
    }),
  ],
  transports: {
    [bsc.id]: http('https://bsc-dataseed.binance.org/'),
  },
});

export const TOKEN_ADDRESS = '0x1234567890abcdef1234567890abcdef12345678';
export const PANCAKESWAP_URL = `https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=${TOKEN_ADDRESS}`;