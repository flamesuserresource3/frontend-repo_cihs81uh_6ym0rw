import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="get-started" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-teal-500 p-1 shadow-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl bg-white/10 px-8 py-12 backdrop-blur">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  Start matching with co‑founders and investors today
                </h3>
                <p className="mt-2 max-w-xl text-indigo-100">
                  Create your profile in minutes. It’s free to join — upgrade anytime
                  for advanced matching and intros.
                </p>
              </div>
              <div className="flex justify-start md:justify-end">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-indigo-700 shadow-sm transition hover:bg-indigo-50"
                >
                  Create free account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
