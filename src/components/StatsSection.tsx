"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const pct = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - pct, 3);
      setCount(Math.round(ease * target));
      if (pct < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 7, suffix: "", label: "Skill", sub: "Multidisiplin Skill" },
  {
    value: 6,
    suffix: "",
    label: "Services",
    sub: "10+ Done",
  },
  {
    value: 100,
    suffix: "%",
    label: "Commitment to Clients",
    sub: "Until real results are achieved",
  },
  {
    value: 2,
    suffix: "+",
    label: "On-Going Projects",
    sub: "And continuously growing",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-navy-950 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow text-sky-500 text-center mb-14"
        >
          NexUS in Numbers
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-navy-950 px-8 py-10 text-center"
            >
              <p className="font-display text-5xl font-bold text-white">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-semibold text-white/80 text-sm">
                {s.label}
              </p>
              <p className="mt-1 text-white/35 text-xs">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
