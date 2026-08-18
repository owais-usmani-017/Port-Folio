"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center overflow-hidden pt-40 pb-28 lg:pt-48 lg:pb-36"
    >
      {/* Subtle Background Glows */}
      <div className="ambient-glow ambient-glow-amber top-12 left-1/4 h-[350px] w-[350px] sm:h-[480px] sm:w-[480px]" />
      <div className="ambient-glow ambient-glow-indigo top-40 right-10 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px]" />
      <div className="ambient-glow ambient-glow-rose bottom-10 left-10 h-[250px] w-[250px]" />

      <div className="container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill */}
            <div className="mb-12 inline-flex flex-wrap items-center gap-3">
              <span className="inline-flex  items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 backdrop-blur-md">
                <Sparkles
                  size={14}
                  className="animate-spin text-amber-500"
                  style={{ animationDuration: "6s" }}
                />
                AI Systems &amp; Full-Stack Engineer
              </span>
              <span className="hidden items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-1 text-xs text-[var(--foreground-secondary)] sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for New Projects
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display gap-3 text-5xl font-medium tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[1.04]">
              Hi, I&apos;m{" "}
              <span className="gradient-text-joy">Owais Usmani</span>
              <span className="text-amber-500">.</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-12 max-w-xl text-lg sm:text-xl font-medium leading-relaxed text-[var(--foreground-secondary)]">
              I architect{" "}
              <span className="font-semibold text-[var(--foreground)]">
                intelligent AI agents
              </span>
              , automated workflows, and high-performance{" "}
              <span className="font-semibold text-[var(--foreground)]">
                full-stack web applications
              </span>{" "}
              that turn complex problems into delightful software.
            </p>
            <br></br>

            {/* CTAs */}
            <div className="mt-[4.5rem] flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="hidden h-12 min-w-[190px] items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-xl hover:shadow-amber-500/40 active:scale-[0.98] sm:inline-flex"
              >
                Explore Projects
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/resume/Owais-Usmani-Resume.pdf"
                download
                className="hidden h-12 min-w-[190px] rounded-xl items-center justify-center border-2 
                border-[var(--card-border)] bg-[var(--card-bg)] px-20 py-6 text-base font-bold text-[var(--foreground)] shadow-md transition-all duration-300 hover:border-amber-500/60 hover:bg-[var(--card-bg-subtle)]
                 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-xl hover:shadow-amber-500/40 active:scale-[0.98] sm:inline-flex"
                
              >
                Download CV
                <Download size={19} className="text-amber-500" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-10 rounded-2xl px-20 py-6 text-base font-bold text-[var(--foreground-secondary)] transition-all duration-300 hover:text-amber-500 hover:-translate-y-0.5"
              >
                Let&apos;s Connect &rarr;
              </a>
            </div>
            <br></br>

            {/* Quick Metrics Bar */}
            <div className="mt-[5.5rem] grid grid-cols-3 gap-10 border-t border-[var(--card-border)] pt-12 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)]">
                  200<span className="text-amber-500">+</span>
                </div>
                <div className="text-xs font-medium text-[var(--foreground-muted)] uppercase tracking-wider mt-1.5">
                  DSA Solved
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)]">
                  10<span className="text-orange-500">+</span>
                </div>
                <div className="text-xs font-medium text-[var(--foreground-muted)] uppercase tracking-wider mt-1.5">
                  Live Projects
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)]">
                  AI<span className="text-emerald-500">&amp;RAG</span>
                </div>
                <div className="text-xs font-medium text-[var(--foreground-muted)] uppercase tracking-wider mt-1.5">
                  Core Speciality
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Decorative Gradient Frame & Glow */}
              <div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-orange-500/20 to-indigo-500/30 blur-xl opacity-75 animate-pulse"
                style={{ animationDuration: "4s" }}
              />

              {/* Main Photo Card */}
              <div className="relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden rounded-2xl bg-[var(--background-subtle)]">
                  <Image
                    src="/images/profile/Profile pic Owais.jpeg"
                    alt="Owais Usmani - AI & Full-Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, 420px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)]/30 via-transparent to-transparent pointer-events-none" />

                  {/* Inside Photo Overlay Pill */}
                </div>
              </div>

              {/* Floating Badge 1 - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2.5 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                  <Cpu size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground-muted)]">
                    Focus
                  </p>
                  <p className="text-xs font-bold text-[var(--foreground)]">
                    Agentic AI &amp; n8n
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
