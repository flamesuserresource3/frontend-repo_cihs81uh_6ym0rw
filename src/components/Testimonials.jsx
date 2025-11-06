import { motion } from "framer-motion";

export default function Testimonials() {
  const quotes = [
    {
      name: "Amir • CEO, Lendly",
      text:
        "We met our CTO and first check here. Went from idea to launch in 10 weeks.",
    },
    {
      name: "Sofia • Co‑founder, Nimbo",
      text:
        "The matching was scarily good — values and skills aligned from day one.",
    },
    {
      name: "Priya • Angel Investor",
      text:
        "Deal flow with context. I can see team fit, traction, and what founders need.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-indigo-50/60">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Loved by ambitious builders
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <blockquote className="text-gray-800">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">{q.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
