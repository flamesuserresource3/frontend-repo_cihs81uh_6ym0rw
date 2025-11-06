import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative z-10 pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Scale faster with a dark, modern edge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            className="mt-6 text-lg text-zinc-300"
          >
            A seamless grid of metallic cubes moves subtly in the background while your product takes center stage. Crafted for focus, performance, and polish.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow shadow-emerald-500/30 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              See how it works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
