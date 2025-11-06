import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'We shipped our launch 2x faster and the polish shows.',
    author: 'Avery Lin',
    role: 'Head of Product, Tactile',
  },
  {
    quote: 'The subtle motion and dark theme made our brand feel premium.',
    author: 'Jordan Ruiz',
    role: 'Marketing Lead, Northwind',
  },
  {
    quote: 'Setup was instant and the UX felt effortless for our team.',
    author: 'Samira Patel',
    role: 'Ops Director, Vertex',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-white"
        >
          Loved by modern teams
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="rounded-xl border border-white/10 bg-black/40 p-6 text-white shadow-lg backdrop-blur"
            >
              <p className="text-sm text-zinc-200">“{t.quote}”</p>
              <footer className="mt-4 text-xs text-zinc-400">
                <span className="font-medium text-zinc-300">{t.author}</span> — {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
