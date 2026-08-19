"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  GraduationCap,
  Layers,
  CheckCircle2,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

const techStack = [
  "C++",
  "Python",
  "JavaScript",
  "Next.js",
  "React",
  "Node.js",
  "n8n",
  "RAG",
  "LLMs",
  "MongoDB",
  "Supabase",
];

const focusAreas = [
  { label: "AI Engineering", color: "emerald" },
  { label: "Automation", color: "amber" },
  { label: "Full-Stack Development", color: "indigo" },
] as const;

const focusStyles = {
  emerald: "bg-emerald-500/10 text-emerald-700",
  amber: "bg-amber-500/10 text-amber-700",
  indigo: "bg-indigo-500/10 text-indigo-700",
} as const;

const focusIconStyles = {
  emerald: "text-emerald-500",
  amber: "text-amber-500",
  indigo: "text-indigo-500",
} as const;

const reveal = {
  initial: {
    opacity: 0,
    y: 35,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="section overflow-hidden bg-[var(--section-bg)]"
    >
      <div className="about-container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Who I Am"
          title="Engineered for Impact"
          subtitle="Combining strong software fundamentals with modern AI systems and full-stack development."
        />
        <br />

        {/* Developer Story */}
        <motion.article
          {...reveal}
          transition={{ duration: 0.7 }}
          className="mt-8 h-[252px] max-lg:h-auto rounded-[28px] border border-[var(--border)] bg-white px-9 py-8 max-sm:px-6"
        >
          <div className="grid h-full max-lg:h-auto max-lg:gap-6 lg:grid-cols-[400px_1fr]">
            {/* Left: Developer Profile */}
            <div className="flex h-full max-lg:h-auto items-center border-[var(--border)] pr-10 max-lg:pr-0">
              <div className="flex absolute left-30 max-lg:static items-start gap-7 max-sm:gap-4">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                  <Brain size={25} />
                </div>

                {/* Label + Heading */}
                <div className="pt-1">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-500">
                    Developer Story
                  </p>

                  <h3 className="font-display mt-4 max-w-[280px] text-[30px] font-medium leading-[1.12] text-[var(--primary)]">
                    From idea to
                    <br />
                    working software.
                  </h3>
                </div>
              </div>
            </div>

            {/* Right: Description */}
            <div className="flex h-full max-lg:h-auto items-center pl-10 max-lg:pl-0">
              <div className="w-full max-w-[680px]">
                <p className="text-base leading-[1.65] text-[var(--secondary)]">
                  I&apos;m a final-year Computer Science student focused on
                  building practical software with{" "}
                  <span className="font-semibold text-amber-500">
                    AI, automation, and full-stack development.
                  </span>
                </p>
                <br />

                <p className="mt-4 text-base leading-[1.65] text-[var(--secondary)]">
                  I enjoy taking ideas from concept to real products, whether
                  that means building AI-powered applications, automating
                  business workflows, designing backend systems, or creating
                  complete full-stack platforms.
                </p>
                <br />

                {/* Focus pills */}
                <div className="mt-4 flex flex-wrap gap-3 border-[var(--border)] pt-4">
                  {focusAreas.map((area) => (
                    <span
                      key={area.label}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium ${focusStyles[area.color]}`}
                    >
                      <CheckCircle2
                        size={15}
                        className={focusIconStyles[area.color]}
                      />
                      {area.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        <br />

        {/* Education + Current Focus */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* ================= EDUCATION ================= */}
          <motion.article
            {...reveal}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="h-[248px] max-lg:h-auto rounded-[28px] border border-[var(--border)] bg-white px-6 py-6"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-5 max-sm:gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
                    <GraduationCap size={24} />
                  </div>

                  <div className="pt-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-indigo-500">
                      Education
                    </p>

                    <h3 className="font-display mt-2 max-w-[390px] text-[25px] font-medium leading-[1.08] text-[var(--primary)]">
                      B.Tech in Computer Science
                      <br />& Engineering
                    </h3>

                    <p className="mt-2 text-[14px] leading-[1.3] text-[var(--secondary)]">
                      KCC Institute of Technology & Management
                    </p>

                    <p className="mt-1 text-[13px] leading-[1.3] text-[var(--foreground-muted)]">
                      Greater Noida · AKTU Lucknow
                    </p>
                  </div>
                </div>

                <span className="shrink-0 pt-2 text-[13px] font-bold text-indigo-500">
                  2023–2027
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 border-t border-[var(--border)] pt-3 lg:mt-auto">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[var(--foreground-muted)]">
                    Class XII
                  </p>

                  <p className="mt-1 text-[25px] font-bold leading-none text-emerald-500">
                    86%
                  </p>
                </div>

                <div className="border-l border-[var(--border)] pl-8">
                  <p className="text-[11px] uppercase tracking-wider text-[var(--foreground-muted)]">
                    Class X
                  </p>

                  <p className="mt-1 text-[25px] font-bold leading-none text-emerald-500">
                    94%
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ================= CURRENTLY BUILDING ================= */}
          <motion.article
            {...reveal}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="relative h-[248px] max-lg:h-auto overflow-hidden rounded-[28px] border border-amber-500/20 bg-gradient-to-br from-amber-50 via-white to-orange-50 px-6 py-6"
          >
            {/* Background Glow */}
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative h-full absolute top-5 left-4 max-lg:static max-lg:h-auto">
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-amber-400 opacity-70" />
                  <span className="relative h-3 w-3 rounded-full bg-amber-500" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-600">
                  Currently Building
                </span>
              </div>

              {/* Heading */}
              <h3 className="font-display mt-3 text-[28px] font-medium leading-[1.05] text-[var(--primary)]">
                Intelligent AI systems.
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[510px] text-[15px] leading-[1.55] text-[var(--secondary)]">
                Exploring AI agents, RAG pipelines, workflow automation, vector
                search, and intelligent full-stack applications.
              </p>

              {/* Button */}
              <a
                href="#contact"
                className="bg-black absolute bottom-0 left-0 max-lg:static max-lg:mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Let&apos;s talk
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        </div>
        <br />

        {/* Tech Stack */}
        <motion.article
          {...reveal}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-5 relative rounded-[28px] border border-[var(--border)] bg-white px-9 py-6 min-h-[120px]"
        >
          <div className="flex top-3 left-4 relative max-lg:top-0 max-lg:left-0 max-sm:flex-col max-sm:items-start items-center justify-between gap-8 max-sm:gap-5">
            <div className="flex items-center gap-7 max-sm:gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                <Layers size={25} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">
                  Technical Toolkit
                </p>

                <h3 className="font-display mt-2 text-[27px] font-medium text-[var(--primary)]">
                  Tools I build with.
                </h3>
              </div>
            </div>

            <a
              href="#skills"
              className="inline-flex items-center gap-2 text-sm font-bold right-7 absolute max-sm:static text-emerald-600 transition-transform duration-200 hover:translate-x-1"
            >
              View complete skills
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-4 left-6 max-lg:left-0 flex flex-wrap gap-10 max-lg:gap-3 border-[var(--border)] pt-4">
            {techStack.map((technology) => (
              <span
                key={technology}
                className="rounded-full border top-6 relative max-lg:top-0 border-[var(--border)] bg-[var(--section-bg)] left-10 max-lg:left-0 px-[80px] max-lg:px-4 py-[40px] max-lg:py-2 text-md font-medium text-[var(--secondary)] transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-500"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
