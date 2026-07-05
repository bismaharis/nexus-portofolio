"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const mx = useMotionValue(-25);
  const my = useMotionValue(-25);
  const x = useSpring(mx, { stiffness: 500, damping: 40 });
  const y = useSpring(my, { stiffness: 500, damping: 40 });
  const xTrail = useSpring(mx, { stiffness: 120, damping: 28 });
  const yTrail = useSpring(my, { stiffness: 120, damping: 28 });
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    const on = () => setHov(true);
    const off = () => setHov(false);
    window.addEventListener("mousemove", move);
    const els = () => document.querySelectorAll("a, button, [data-cursor]");
    const attach = () => {
      els().forEach((el) => {
        el.addEventListener("mouseenter", on);
        el.addEventListener("mouseleave", off);
      });
    };
    attach();
    const ob = new MutationObserver(attach);
    ob.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("mousemove", move);
      ob.disconnect();
    };
  }, [mx, my]);

  return (
    <>
      {/* dot */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      >
        <motion.div
          animate={{
            width: hov ? 8 : 6,
            height: hov ? 8 : 6,
            background: hov ? "var(--sky-500)" : "var(--blue-600)",
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full"
        />
      </motion.div>
      {/* ring */}
      <motion.div
        style={{ x: xTrail, y: yTrail, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
      >
        <motion.div
          animate={{
            width: hov ? 56 : 36,
            height: hov ? 56 : 36,
            borderColor: hov ? "rgba(79,142,247,0.6)" : "rgba(79,142,247,0.3)",
            backgroundColor: hov ? "rgba(79,142,247,0.08)" : "transparent",
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border"
        />
      </motion.div>
    </>
  );
}
