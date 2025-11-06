import { ArrowRight, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-teal-50" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 lg:pt-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                <Rocket className="h-4 w-4" />
                Grow with Me
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Connect founders, co‑founders, and investors — faster
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
                An interactive, minimalist space where ambitious builders meet
                complementary partners and aligned capital. Smart matching by
                skills, values, and stage.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Get started free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-gray-800 ring-1 ring-gray-200 transition hover:bg-gray-50"
                >
                  How it works
                </a>
              </div>
              <motion.div
                className="mt-8 flex items-center gap-6 text-sm text-gray-600"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-indigo-600" />
                  12k+ founders joined
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                  Curated investor network
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* 3D Spline Scene */}
          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[620px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Spline
                scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>

            {/* Soft light accents */}
            <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-indigo-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-teal-300/30 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient overlay to blend into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
