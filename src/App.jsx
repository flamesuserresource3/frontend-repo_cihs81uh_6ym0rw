import React from 'react';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 3D background layer */}
      <Background3D />

      {/* Foreground content */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Grow with Me. All rights reserved.
      </footer>
    </div>
  );
}
