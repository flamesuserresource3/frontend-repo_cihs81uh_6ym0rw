import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-8 backdrop-blur"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(16,185,129,0.15),transparent)]" />
          <h3 className="relative z-10 text-2xl font-bold text-white">Ready to grow with us?</h3>
          <p className="relative z-10 mt-2 max-w-2xl text-sm text-zinc-300">
            Join teams using a focused, modern stack to move fast—without sacrificing craft.
          </p>
          <div className="relative z-10 mt-6">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Request access
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
