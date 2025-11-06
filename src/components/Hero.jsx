import { Rocket, Users, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-teal-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
              <Rocket className="h-4 w-4" />
              Grow with Me
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Find the perfect co‑founder and the right investors
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              A curated platform where ambitious builders meet complementary partners
              and aligned capital. Match by skills, values, and stage to turn ideas
              into companies.
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
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-indigo-600" />
                12k+ founders joined
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                Curated investor network
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
            <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 p-6 text-white">
                  <p className="text-sm/6 opacity-90">Your profile</p>
                  <p className="mt-2 text-2xl font-semibold">Founder • Product</p>
                  <ul className="mt-4 space-y-2 text-sm/6 opacity-90">
                    <li>• Fintech, B2B SaaS</li>
                    <li>• Looking for CTO</li>
                    <li>• Pre‑seed, remote</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-200 p-6">
                  <p className="text-sm/6 text-gray-600">Top matches</p>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="font-medium">Aisha — CTO</p>
                      <p className="text-sm text-gray-600">AI/ML • Marketplaces</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="font-medium">Leo — Investor</p>
                      <p className="text-sm text-gray-600">Pre‑seed • Fintech</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="font-medium">Maya — COO</p>
                      <p className="text-sm text-gray-600">Ops • B2B SaaS</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 rounded-xl border border-dashed border-gray-200 p-4 text-center">
                  <p className="text-sm text-gray-600">
                    Smart matching highlights complementary skills, values, and availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
