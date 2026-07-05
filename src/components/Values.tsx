"use client";
import { motion } from "framer-motion";

const values = [
  {
    name: "Integrity",
    icon: "◆",
    desc: "Honest and transparent in all interactions.",
  },
  {
    name: "Collaboration",
    icon: "⬡",
    desc: "Growing together is better than going it alone. Every major decision is made together.",
  },
  {
    name: "Professionalism",
    icon: "▲",
    desc: "High work standards in every project, no matter how small. Punctual and well-structured.",
  },
  {
    name: "Innovation",
    icon: "✦",
    desc: "Not satisfied with old ways if there's a better approach. Always learning and adapting.",
  },
  {
    name: "Real Impact",
    icon: "●",
    desc: "Every service must provide tangible benefits that can be felt — not just pretty outputs.",
  },
];

export default function Values() {
  return (
    <section id="nilai" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow text-blue-600">Company Values</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-navy-950 max-w-xl">
            Five principles that guide how we work.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 32px -8px rgba(36,86,201,0.15)",
              }}
              className="bg-white rounded-2xl border border-line p-6 cursor-default"
            >
              <span className="text-2xl text-sky-500">{v.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-950">
                {v.name}
              </h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
