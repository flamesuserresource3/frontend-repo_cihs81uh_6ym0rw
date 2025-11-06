import React from 'react';
import { ShieldCheck, Users, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Users,
    title: 'Connect your audience',
    desc: 'Bring your data and channels. We align your growth loops with measurable outcomes.',
  },
  {
    icon: Handshake,
    title: 'Automate collaboration',
    desc: 'Templates and workflows that scale with you, from onboarding to retention.',
  },
  {
    icon: ShieldCheck,
    title: 'Govern with confidence',
    desc: 'Role-based controls and audit trails keep everything secure and compliant.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-white"
        >
          How it works
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-emerald-400" />
                <h3 className="font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
