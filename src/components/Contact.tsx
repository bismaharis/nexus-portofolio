"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "Company Profile",
  "Website/Application",
  "SEO",
  "Excel Management/Spreadsheet",
  "Google Workspace",
  "OBE System",
];
const types = ["Business", "Educational Institution", "Other"];

export default function Contact() {
  const [picked, setPicked] = useState<string[]>([]);
  const [type, setType] = useState("");
  const [sent, setSent] = useState(false);

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontak" className="bg-navy-950">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow text-sky-500">Start a Collaboration</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Tell us about your digital needs.
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Fill out the form or contact us directly. Our team will respond
              within 1×24 hours.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: "✉️", label: "Email", val: "nexus.nextofus@gmail.com" },
                { icon: "📱", label: "WhatsApp", val: "+62 859-3953-3444" },
                {
                  icon: "📍",
                  label: "Location",
                  val: "Lombok, West Nusa Tenggara",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                    {c.icon}
                  </span>
                  <div>
                    <p className="eyebrow text-white/30 text-[0.62rem]">
                      {c.label}
                    </p>
                    <p className="text-white/80 text-sm font-medium">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 rounded-2xl bg-white/5 border border-white/10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl mb-4"
                  >
                    ✅
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-white/60">
                    Our team will get back to you within 1×24 hours. Thank you
                    for reaching out!
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm text-sky-400 hover:text-sky-300 underline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-7"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="fl-wrap">
                      <input
                        type="text"
                        id="name"
                        placeholder=" "
                        required
                        className="bg-white/10 border-white/15 text-white placeholder-transparent focus:border-sky-500"
                      />
                      <label htmlFor="name" className="text-white/50">
                        Full Name
                      </label>
                    </div>
                    <div className="fl-wrap">
                      <input
                        type="tel"
                        id="wa"
                        placeholder=" "
                        required
                        className="bg-white/10 border-white/15 text-white placeholder-transparent focus:border-sky-500"
                      />
                      <label htmlFor="wa" className="text-white/50">
                        WhatsApp Number
                      </label>
                    </div>
                  </div>

                  {/* Type toggle */}
                  <div>
                    <p className="eyebrow text-white/35 mb-2">Business Type</p>
                    <div className="flex flex-wrap gap-2">
                      {types.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setType(t)}
                          className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-all ${
                            type === t
                              ? "bg-sky-500 border-sky-500 text-white"
                              : "border-white/20 text-white/50 hover:border-white/50 hover:text-white/80"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service chips */}
                  <div>
                    <p className="eyebrow text-white/35 mb-2">
                      Services Youre Interested In
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggle(s)}
                          className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-all ${
                            picked.includes(s)
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "border-white/20 text-white/50 hover:border-white/50 hover:text-white/80"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="fl-wrap">
                    <textarea
                      id="msg"
                      rows={4}
                      placeholder=" "
                      className="bg-white/10 border-white/15 text-white placeholder-transparent focus:border-sky-500"
                    />
                    <label htmlFor="msg" className="text-white/50">
                      Tell us about your needs
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full rounded-full bg-white py-3.5 text-sm font-semibold text-navy-950 hover:bg-sky-400 hover:text-white transition-colors duration-200"
                  >
                    Send Message →
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
