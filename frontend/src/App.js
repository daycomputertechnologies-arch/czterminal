import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { BlockchainBackground } from "@/components/BlockchainBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Tokenomics } from "@/pages/Tokenomics";
import { Roadmap } from "@/pages/Roadmap";
import { Staking } from "@/pages/Staking";
import Whitepaper from './pages/Whitepaper';

function App() {
  return (
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
  );
}

export default App;
