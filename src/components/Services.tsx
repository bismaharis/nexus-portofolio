"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    no: "01",
    name: "Company Profile",
    status: "Ready",
    statusColor: "bg-teal-600",
    tagline: "First Impression matters | make it count.",
    desc: "Company profile website that showcases your business, team, and services. We design a clean, modern, and responsive website that reflects your brand identity.",
    features: [
      "Responsive Design (mobile & desktop)",
      "Copywriting Content Included",
      "Delivery within 7–14 Business Days",
      "1x Free Revision",
    ],
    cta: "Ask for Price",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
  },
  {
    no: "02",
    name: "Website & Application",
    status: "Ready",
    statusColor: "bg-teal-600",
    tagline: "Built with Next.js — fast, modern, scalable.",
    desc: "From business landing pages to complex web applications. Each project is developed with clean code standards and well-thought-out user experiences.",
    features: [
      "Next.js + Tailwind CSS",
      "Optional Admin Panel",
      "Deployment & Domain Setup",
      "Optional Maintenance",
    ],
    cta: "Discuss Your Needs",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&auto=format&fit=crop",
  },
  {
    no: "03",
    name: "SEO",
    status: "Ready",
    statusColor: "bg-sky-500",
    tagline: "Found on Google, trusted by customers.",
    desc: "Search engine optimization to get your local business listed on the first page of Google. Keyword research, on-page optimization, and transparent monthly reports.",
    features: [
      "Local Keyword Research Lombok",
      "On-Page & Meta Optimization",
      "Monthly Reports",
      "Google Business Profile Setup",
    ],
    cta: "Start Free Audit",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80&auto=format&fit=crop",
  },
  {
    no: "04",
    name: "Excel & Spreadsheet",
    status: "Ready",
    statusColor: "bg-teal-600",
    tagline: "More organized operations, faster decisions.",
    desc: "Recording system, automatic reports, and Excel or Google Sheets-based dashboards. Perfect for SMEs not yet ready for expensive ERP software.",
    features: [
      "Financial report templates",
      "Interactive dashboard",
      "Automated formulas & macros",
      "User training included",
    ],
    cta: "View Examples",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
  {
    no: "05",
    name: "Google Workspace",
    status: "Ready",
    statusColor: "bg-teal-600",
    tagline: "Businesses ready for digital collaboration.",
    desc: "Professional email setup @perusahaanmu.com, organized Google Drive, and Google Meet for teams. We help you from the start until your entire team can use it.",
    features: [
      "Professional business email setup",
      "Organized Drive & folders",
      "Team training included",
      "Support for 30 days after setup",
    ],
    cta: "Setup Now",
    image:
      "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=800&q=80&auto=format&fit=crop",
  },
  {
    no: "06",
    name: "Sistem OBE",
    status: "Ready",
    statusColor: "bg-navy-900",
    tagline: "Technology for outcome-based education.",
    desc: "Outcome-Based Education system — digital platform to help schools and educational institutions manage learning outcomes, assessment, and reporting in an integrated manner.",
    features: [
      "Learning outcome management",
      "Teacher & admin dashboard",
      "Automatic student reports",
      "Integration with Merdeka Belajar curriculum",
    ],
    cta: "Register School",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section id="layanan" className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow text-blue-600">Layanan</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-navy-950">
            One-stop digital solutions for your business.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-start">
          {/* Left: service list */}
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-1"
          >
            {services.map((s, i) => (
              <li key={s.no}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center justify-between gap-4 rounded-xl px-5 py-4 transition-all duration-200 group ${
                    active === i
                      ? "bg-navy-950 text-white"
                      : "hover:bg-paper text-ink/70 hover:text-navy-950"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`eyebrow text-[0.65rem] ${active === i ? "text-sky-400" : "text-ink/35"}`}
                    >
                      {s.no}
                    </span>
                    <span className="font-display font-semibold text-base">
                      {s.name}
                    </span>
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.statusColor} ${active === i ? "opacity-100" : "opacity-50"}`}
                  />
                </button>
              </li>
            ))}
          </motion.ul>

          {/* Right: active service detail */}
          <div className="relative min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="rounded-2xl border border-line overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {s.name}
                    </h3>
                    <span
                      className={`eyebrow text-white rounded-full px-3 py-1 text-[0.65rem] ${s.statusColor}`}
                    >
                      {s.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <p className="font-display text-sm font-semibold text-sky-500 mb-2">
                    {s.tagline}
                  </p>
                  <p className="text-ink/70 text-sm leading-relaxed">
                    {s.desc}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-sm text-ink/75"
                      >
                        <span className="w-4 h-4 rounded-full bg-sky-500/15 flex items-center justify-center flex-shrink-0">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                          >
                            <path
                              d="M1 4L3.2 6.2L7 2"
                              stroke="var(--sky-500)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="#kontak"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
                  >
                    {s.cta} →
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
