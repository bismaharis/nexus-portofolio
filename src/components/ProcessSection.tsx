"use client";
import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "Consultation",
    desc: "We discuss your needs, goals, and budget. We provide a clear recommendation on the best digital solution for your business.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 4C8.48 4 4 8.03 4 13c0 2.1.76 4.03 2.02 5.57L5 23l4.85-1.28A10.43 10.43 0 0014 22c5.52 0 10-4.03 10-9s-4.48-9-10-9z" />
        <path d="M9 13h1M13 13h1M17 13h1" />
      </svg>
    ),
  },
  {
    no: "02",
    title: "Planning",
    desc: "We outline the project scope, timeline, and cost estimates transparently — you approve before we begin.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="4" width="18" height="20" rx="2" />
        <path d="M9 10h10M9 14h10M9 18h6" />
      </svg>
    ),
  },
  {
    no: "03",
    title: "Execution",
    desc: "Our team works on your project with regular updates. You can track progress anytime, not just when it's done.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 4L6 8l4 4M18 4l4 4-4 4M15 4l-2 20" />
      </svg>
    ),
  },
  {
    no: "04",
    title: "Handover & Support",
    desc: "Delivery, user training, support, and maintenance. We ensure you can use your new digital solution effectively and efficiently.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 14l6 6L22 8" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section id="proses" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <p className="eyebrow text-blue-600">How We Work</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-navy-950">
            A clear process, tangible results.
          </h2>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-line hidden lg:block"
            aria-hidden
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-2xl border border-line p-6 flex flex-col"
            >
              <div className="relative z-10 w-12 h-12 rounded-xl bg-paper flex items-center justify-center text-navy-900 mb-5 border border-line">
                {step.icon}
              </div>
              <span className="eyebrow text-ink/30 mb-2">{step.no}</span>
              <h3 className="font-display text-xl font-semibold text-navy-950 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-ink/65 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
