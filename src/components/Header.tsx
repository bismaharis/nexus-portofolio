"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#layanan", label: "Services" },
  { href: "#proses", label: "Process" },
  { href: "#portofolio", label: "Portfolio" },
  { href: "#visi", label: "Vision & Mission" },
  { href: "#kontak", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-line/60 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10">
          <a href="#top">
            <Image
              src="/logo-no-bg.png"
              alt="NexUS"
              width={120}
              height={40}
              className={`h-8 w-auto transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  scrolled
                    ? "text-ink/70 hover:text-navy-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#kontak"
              className={`hidden md:inline-flex rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-navy-900 text-white hover:bg-blue-600"
                  : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
              }`}
            >
              Start a Project
            </a>
            <button
              onClick={() => setOpen(true)}
              className={`md:hidden p-2 ${scrolled ? "text-ink" : "text-white"}`}
              aria-label="Menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="2" y1="6" x2="20" y2="6" />
                <line x1="2" y1="11" x2="20" y2="11" />
                <line x1="2" y1="16" x2="20" y2="16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-navy-950/98 backdrop-blur-sm flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-5">
              <Image
                src="/logo-no-bg.png"
                alt="NexUS"
                width={110}
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
              <button onClick={() => setOpen(false)} className="text-white p-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {[...links, { href: "#kontak", label: "Start a Project →" }].map(
                (l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: -24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                    className="font-display text-3xl font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </motion.a>
                ),
              )}
            </nav>
            <p className="px-8 pb-10 text-sm text-white/30">
              NexUS — Lombok, NTB
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
