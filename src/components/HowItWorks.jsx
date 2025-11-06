import { Users, Handshake, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Users,
      title: "Create a standout profile",
      desc:
        "Show your skills, values, time commitment, and what you’re building or seeking.",
    },
    {
      icon: Handshake,
      title: "Get curated matches",
      desc:
        "Our matching engine connects you with complementary co‑founders and aligned investors.",
    },
    {
      icon: ShieldCheck,
      title: "Build with confidence",
      desc:
        "Use built‑in tools for intros, NDAs, and transparent expectations to start strong.",
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
          From first hello to funded startup — designed for speed and fit.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
