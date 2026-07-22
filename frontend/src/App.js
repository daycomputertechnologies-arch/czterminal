import React from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { config } from './config/walletConfig';
import { Toaster } from '@/components/ui/sonner';
import { BlockchainBackground } from '@/components/BlockchainBackground';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Tokenomics } from '@/pages/Tokenomics';
import { Roadmap } from '@/pages/Roadmap';
import { Staking } from '@/pages/Staking';
import { Whitepaper } from '@/pages/Whitepaper';
import './App.css';

const queryClient = new QueryClient();

// Create Web3Modal
createWeb3Modal({
  wagmiConfig: config,
  projectId: 'e4642882d2adeee57b22c232232401f4',
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#f59e0b',
    '--w3m-background-color': '#000000',
    '--w3m-font-family': 'Inter, sans-serif',
  },
  // This automatically detects mobile and shows appropriate UI
  defaultChain: config.chains[0],
});

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="App bg-black min-h-screen text-white relative overflow-x-hidden">
          <BlockchainBackground />
          <BrowserRouter>
            <Navigation />
            <div className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/tokenomics" element={<Tokenomics />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/staking" element={<Staking />} />
                <Route path="/whitepaper" element={<Whitepaper />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
          <Toaster position="top-right" />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;