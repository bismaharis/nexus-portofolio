"use client";
import { motion } from "framer-motion";

const missions = [
  "Helping Business and educational institutions to embrace digital transformation for sustainable growth.",
  "Delivering services with high quality standards, on-time delivery, and a focus on measurable outcomes.",
  "Developing OBE-based technology systems to enhance the quality of education in academic institutions.",
  "Growing with our clients through long-term relationships, not just one-time transactions.",
  "Building a professional internal team that supports each other and continues to develop.",
];

export default function VisionMission() {
  return (
    <section id="visi" className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow text-blue-600">Visi</p>
            <p className="mt-4 font-display text-2xl md:text-[1.8rem] font-medium leading-snug tracking-tight text-navy-950">
              Becoming a trusted digital partner for businesses and educational
              institutions in Indonesia — inclusive, measurable, and impactful
              technology solutions.
            </p>
            <div className="mt-8 relative overflow-hidden rounded-xl h-52">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80&auto=format&fit=crop"
                alt="Lombok"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent flex items-end p-5">
                <span className="eyebrow text-white/60">Start Now</span>
              </div>
            </div>
          </motion.div>

          {/* Misi */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-blue-600"
            >
              Misi
            </motion.p>
            <div className="mt-4 space-y-0">
              {missions.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex gap-4 border-t border-line py-5 first:border-t-0"
                >
                  <span className="font-display text-sm font-bold text-sky-500 flex-shrink-0 mt-0.5">
                    M{i + 1}
                  </span>
                  <p className="text-ink/70 leading-relaxed text-sm">{m}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
