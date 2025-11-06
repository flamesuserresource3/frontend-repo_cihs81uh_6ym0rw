import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Rocket className="h-5 w-5 text-emerald-400" />
            <span className="font-semibold tracking-tight">Grow with Me</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#cta" className="hover:text-white transition-colors">Get started</a>
          </nav>
          <div className="flex md:hidden" />
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
    </header>
  );
}
