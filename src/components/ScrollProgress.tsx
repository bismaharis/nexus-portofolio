"use client";
import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[200] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600"
    />
  );
}
