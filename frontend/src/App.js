import React, { lazy, Suspense } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { config } from './config/walletConfig';
import { Toaster } from '@/components/ui/sonner';
import { BlockchainBackground } from '@/components/BlockchainBackground';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import './App.css';

// Lazy load pages - this splits the bundle and reduces initial load time
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Tokenomics = lazy(() => import('./pages/Tokenomics'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const Staking = lazy(() => import('./pages/Staking'));
const Whitepaper = lazy(() => import('./pages/Whitepaper'));

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
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-amber-400 text-xl">Loading...</div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/tokenomics" element={<Tokenomics />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/staking" element={<Staking />} />
                  <Route path="/whitepaper" element={<Whitepaper />} />
                </Routes>
              </Suspense>
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