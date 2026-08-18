"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Copy, Check, ArrowUpRight, Send, MapPin, Sparkles } from "lucide-react";

// Clean SVG Icons for Socials
function LinkedInIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "owaisusmani436@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section bg-[var(--background)] overflow-hidden">
      <div className="ambient-glow ambient-glow-amber bottom-10 left-1/4 h-[350px] w-[350px]" />
      <div className="ambient-glow ambient-glow-indigo bottom-0 right-10 h-[300px] w-[300px]" />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Great"
          subtitle="Have an opportunity, an AI project, or want to discuss full-stack engineering? Let's connect."
          badgeColor="emerald"
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Main Inquiry Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="designer-card relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[var(--card-bg)] to-[var(--background-subtle)]"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              Actively Reviewing Opportunities
            </div>

            <h3 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
              Let&apos;s turn your vision into <span className="gradient-text-joy">working software</span>.
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--foreground-secondary)]">
              Whether you are hiring for an <span className="font-semibold text-[var(--foreground)]">AI Developer</span> or <span className="font-semibold text-[var(--foreground)]">Full-Stack Engineer</span> role, exploring an automation pipeline, or want to collaborate, my inbox is always open.
            </p>

            {/* Email Action Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg-subtle)] p-2">
              <div className="flex items-center gap-3 px-3 py-2 text-xs sm:text-sm font-mono font-semibold text-[var(--foreground)] flex-1 overflow-x-auto">
                <Mail size={16} className="text-amber-500 shrink-0" />
                <span>{email}</span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-3.5 py-2.5 text-xs font-bold text-[var(--foreground)] shadow-sm transition-all hover:bg-amber-500 hover:text-white active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}?subject=Project%20Inquiry%20/%20Opportunity`}
                  className="flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 transition-transform"
                >
                  <Send size={14} />
                  Send Email
                </a>
              </div>
            </div>

            {/* Copied Toast Floating */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500"
                >
                  <Check size={14} />
                  Email copied to clipboard! Ready to paste into your mail app.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Social & Quick Connect Channels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Location & Timezone Card */}
            <div className="designer-card rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--foreground)]">Location &amp; Availability</h4>
                  <p className="text-xs text-[var(--foreground-muted)]">Delhi NCR, India · UTC+5:30</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[var(--foreground-secondary)]">
                Available for on-site roles in Delhi NCR, Bangalore, remote worldwide, and relocation opportunities.
              </p>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="designer-card group flex items-center justify-between rounded-3xl p-6 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedInIcon size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)]">Network</p>
                  <p className="text-base font-bold text-[var(--foreground)] group-hover:text-blue-500 transition-colors">
                    LinkedIn Profile
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-[var(--foreground-muted)] group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="designer-card group flex items-center justify-between rounded-3xl p-6 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <GitHubIcon size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)]">Code</p>
                  <p className="text-base font-bold text-[var(--foreground)] group-hover:text-indigo-500 transition-colors">
                    GitHub Repositories
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-[var(--foreground-muted)] group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
