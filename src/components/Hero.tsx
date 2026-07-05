"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

// Unsplash photo — replace with real NexUS team photo
const BG =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format&fit=crop";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // parallax: image scrolls up slowly, text faster
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-screen min-h-[640px] overflow-hidden flex items-center"
    >
      {/* Parallax BG image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-[1.18] origin-top"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BG}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
        {/* Cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,21,46,0.55) 0%, rgba(8,21,46,0.72) 45%, rgba(8,21,46,0.96) 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="eyebrow text-sky-400"
        >
          Lombok, NTB
        </motion.p>

        <div className="mt-5 overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-display text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-bold leading-[1.07] tracking-tight text-white max-w-3xl"
          >
            A digital connector that grows{" "}
            <span className="text-sky-400">With Your Business.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
        >
          NexUS | Next of Us | Building a measurable digital presence: company
          profiles, SEO, websites, and even an OBE system for education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#layanan"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
          >
            View Services
          </a>
          <a
            href="#kontak"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
          >
            Free Consultation →
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-10 border-t border-white/15 pt-8"
        >
          {[
            ["10+", "Projects"],
            ["6", "Services"],
            ["2025", "Founded"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-3xl font-bold text-white">{n}</p>
              <p className="eyebrow text-white/45 mt-0.5">{l}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="eyebrow text-white/40 text-[0.62rem]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
