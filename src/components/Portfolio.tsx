"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Types ─────────────────────────────────────────────────── */
type Project = (typeof projects)[number];

/* ─── Data ───────────────────────────────────────────────────── */
const categories = [
  "All",
  "Company Profile",
  "Website",
  "SEO",
  "Excel",
  "Education",
  "Machine Learning",
];

const projects = [
  {
    id: 1,
    title: "Rumah Kayu Narmada",
    client: "UMKM | Mataram, NTB",
    category: "Company Profile",
    year: "2025",
    image: "/rumahKayuNarmada.png",
    cover: "/rumahKayuNarmada.png",
    tagline: "Digital Profile Reflecting the Beauty of Lombok Villa.",
    desc: "Villa in Narmada, Lombok, wanted to showcase their unique wooden architecture and serene environment. We created a digital company profile that highlights the villa's features, amenities, and booking options.",
    results: [
      "Increased online bookings by 30%",
      "Customer inquiries increased 2x",
      "Appeared on Google Maps page with high-quality images and reviews",
    ],
    tags: ["Wordpress", "Copywriting", "SEO Dasar"],
    color: "from-amber-900/80",
  },
  {
    id: 2,
    title: "Outstanding Student System",
    client: "Universitas Mataram",
    category: "Education",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80&auto=format&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=85&auto=format&fit=crop",
    tagline: "Student Selection System based on web for university.",
    desc: "Digital system for selecting outstanding students based on specific criteria. Designed to enhance transparency and efficiency of the selection process.",
    results: [
      "Selection process becomes faster and more accurate",
      "Improved quality of selected outstanding students",
      "Enhanced university reputation",
    ],
    tags: ["Laravel", "CMS", "Responsive", "Mobile-first"],
    color: "from-blue-900/80",
  },
  {
    id: 3,
    title: "Business SEO Optimization",
    client: "UMKM | Lombok Tengah",
    category: "SEO",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85&auto=format&fit=crop",
    tagline: "From not detected to #1 local food search.",
    desc: "A good local restaurant but not found on Google. We optimized Google Business Profile, conducted local keyword research, and helped manage customer reviews.",
    results: [
      "Ranking #1 'Lombok Tengah restaurant'",
      "+150 new visitors per month",
      "Google rating increased to 4.8 / 5",
    ],
    tags: ["SEO", "Google Business Profile", "Local Search"],
    color: "from-orange-900/80",
  },
  {
    id: 4,
    title: "UD Fajar Jaya",
    client: "Material Distributor | Lombok Barat",
    category: "Excel",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85&auto=format&fit=crop",
    tagline:
      "Financial reports and inventory management — without expensive software.",
    desc: "Automated inventory and financial reporting system based on Google Sheets. Business owners can monitor product movement and cash flow directly from their smartphones.",
    results: [
      "Monthly reporting time reduced by 80%",
      "Zero human error in inventory reports",
      "Real-time business monitoring from smartphone",
    ],
    tags: ["Google Sheets", "Automation", "Dashboard", "Training Included"],
    color: "from-emerald-900/80",
  },
  {
    id: 5,
    title: "CV Mandiri Teknik",
    client: "Jasa Konstruksi | Mataram",
    category: "Company Profile",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80&auto=format&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=85&auto=format&fit=crop",
    tagline: "Appear credible for larger corporate tenders.",
    desc: "A technical services company that has relied on word-of-mouth referrals. We built a digital company profile + structured portfolio documents for tender requirements.",
    results: [
      "First-time entry into BUMN shortlist",
      "More convincing presentations in front of clients",
      "Professionally organized project portfolio",
    ],
    tags: ["Company Profile", "Branding", "Tender Documents"],
    color: "from-slate-800/80",
  },
];

/* ─── Card Component ─────────────────────────────────────────── */
function ProjectCard({
  project,
  featured,
  onClick,
}: {
  project: Project;
  featured: boolean;
  onClick: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      onClick={onClick}
      data-cursor
      className={`group relative overflow-hidden rounded-2xl cursor-pointer
        ${featured ? "lg:col-span-2" : ""}`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${featured ? "aspect-[16/9] lg:aspect-[2.2/1]" : "aspect-[4/3]"}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        {/* Gradient overlay — always present at bottom */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${project.color} via-transparent to-transparent opacity-80`}
        />
        {/* Darker on hover */}
        <div className="absolute inset-0 bg-navy-950/0 transition-all duration-400 group-hover:bg-navy-950/40" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="eyebrow bg-white/15 backdrop-blur-sm text-white border border-white/20 rounded-full px-3 py-1">
            {project.category}
          </span>
        </div>

        {/* Bottom: always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="eyebrow text-white/55 mb-1">{project.client}</p>
          <h3
            className={`font-display font-bold text-white transition-transform duration-300 group-hover:-translate-y-1 ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}
          >
            {project.title}
          </h3>

          {/* Tagline slides in on hover */}
          <div className="overflow-hidden h-0 group-hover:h-auto">
            <p className="text-white/75 text-sm mt-2 leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
              {project.tagline}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 mt-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="text-sm font-semibold text-white">
              Lihat Detail
            </span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5h6M5 2l3 3-3 3"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Modal ──────────────────────────────────────────────────── */
function Modal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

        {/* Panel */}
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[92svh] overflow-y-auto z-10"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>

          {/* Hero image */}
          <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-3xl sm:rounded-t-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-70`}
            />
            <div className="absolute bottom-4 left-5">
              <span className="eyebrow bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full px-3 py-1">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-1">
              <h2 className="font-display text-2xl font-bold text-navy-950">
                {project.title}
              </h2>
              <span className="eyebrow text-ink/40 text-[0.65rem] flex-shrink-0 mt-1">
                {project.year}
              </span>
            </div>
            <p className="text-sm text-ink/50 mb-4">{project.client}</p>
            <p className="font-display text-base font-semibold text-sky-500 mb-3">
              {project.tagline}
            </p>
            <p className="text-ink/70 text-sm leading-relaxed mb-6">
              {project.desc}
            </p>

            {/* Results */}
            <div className="bg-paper rounded-xl p-5 mb-6">
              <p className="eyebrow text-ink/40 mb-3">Results Achieved</p>
              <ul className="space-y-2">
                {project.results.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-sm text-ink/80"
                  >
                    <span className="w-5 h-5 rounded-full bg-teal-600/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path
                          d="M1.5 4.5L3.5 6.5L7.5 2.5"
                          stroke="var(--teal-600)"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-7">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-navy-950/8 px-3 py-1 text-xs font-medium text-ink/60"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href="#kontak"
              onClick={onClose}
              className="block w-full text-center rounded-full bg-navy-900 py-3.5 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
            >
              I want a similar project →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Main Section ───────────────────────────────────────────── */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Escape to close
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section id="portofolio" className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow text-blue-600">Portofolio</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-navy-950 max-w-md">
                Real Projects, Real Results | See What We’ve Built for Our
                Clients.
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm text-ink/45 max-w-[220px] text-right hidden sm:block"
            ></motion.p>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-white border border-line text-ink/60 hover:text-navy-900 hover:border-navy-900/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={i === 0}
                  onClick={() => setSelected(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-ink/40 py-20"
            >
              No projects found for this category. Please try another filter.
            </motion.p>
          )}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <Modal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
