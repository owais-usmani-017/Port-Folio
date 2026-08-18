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
        <SectionHeading
          eyebrow="Who I Am"
          title="Engineered for Impact"
          subtitle="Combining strong software fundamentals with modern AI systems and full-stack development."
        />

        {/* Developer Story */}
        <motion.article
          {...reveal}
          transition={{ duration: 0.7 }}
          className="mt-8 h-[252px] rounded-[28px] border border-[var(--border)] bg-white px-8 py-7 md:px-9 md:py-8 lg:px-10"
        >
          <div className="grid h-full lg:grid-cols-[0.62fr_1.38fr]">
            {/* Left side */}
            <div className="flex items-start gap-7 lg:pr-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <Brain size={25} />
              </div>

              <div className="pt-1">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-500">
                  Developer Story
                </p>

                <h3 className="font-display mt-4 max-w-[360px] text-3xl font-medium leading-[1.08] text-[var(--primary)] md:text-[2.1rem]">
                  From idea to
                  <br />
                  working software.
                </h3>
              </div>
            </div>

            {/* Right side */}
            <div className="mt-8 lg:mt-0 lg:border-l lg:border-[var(--border)] lg:pl-10">
              <div className="max-w-3xl">
                <p className="text-base leading-[1.65] text-[var(--secondary)]">
                  I&apos;m a final-year Computer Science student focused on
                  building practical software with{" "}
                  <span className="font-semibold text-amber-500">
                    AI, automation, and full-stack development.
                  </span>
                </p>

                <p className="mt-3 text-base leading-[1.65] text-[var(--secondary)]">
                  I enjoy taking ideas from concept to real products, whether
                  that means building AI-powered applications, automating
                  business workflows, designing backend systems, or creating
                  complete full-stack platforms.
                </p>

                <div className="mt-3 flex flex-wrap gap-2.5 border-t border-[var(--border)] pt-3">
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

        {/* Education + Current Focus */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* Education */}
          <motion.article
            {...reveal}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="h-[248px] rounded-[28px] border border-[var(--border)] bg-white px-8 py-7 md:px-9 md:py-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
                <GraduationCap size={25} />
              </div>

              <span className="pt-1 text-sm font-bold text-indigo-500">
                2023–2027
              </span>
            </div>

            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
                Education
              </p>

              <h3 className="font-display mt-3 max-w-xl text-[26px] font-medium leading-[1.12] text-[var(--primary)]">
                B.Tech in Computer Science & Engineering
              </h3>

              <p className="mt-3 text-base text-[var(--secondary)]">
                KCC Institute of Technology & Management
              </p>

              <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                Greater Noida · AKTU Lucknow
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-8 border-t border-[var(--border)] pt-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--foreground-muted)]">
                  Class XII
                </p>

                <p className="mt-1 text-2xl font-bold text-emerald-500">86%</p>
              </div>

              <div className="border-l border-[var(--border)] pl-8">
                <p className="text-xs uppercase tracking-wider text-[var(--foreground-muted)]">
                  Class X
                </p>

                <p className="mt-1 text-2xl font-bold text-emerald-500">94%</p>
              </div>
            </div>
          </motion.article>

          {/* Current Focus */}
          <motion.article
            {...reveal}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="relative h-[248px] overflow-hidden rounded-[28px] border border-amber-500/20 bg-gradient-to-br from-amber-50 via-white to-orange-50 px-8 py-7 md:px-9 md:py-8"
          >
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-amber-400 opacity-70" />
                    <span className="relative h-3 w-3 rounded-full bg-amber-500" />
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
                    Currently Building
                  </span>
                </div>

                <h3 className="font-display mt-5 max-w-lg text-3xl font-medium leading-[1.05] text-[var(--primary)] md:text-[2rem]">
                  Intelligent AI systems.
                </h3>

                <p className="mt-4 max-w-xl text-base leading-[1.65] text-[var(--secondary)]">
                  Exploring AI agents, RAG pipelines, workflow automation,
                  vector search, and intelligent full-stack applications.
                </p>
              </div>

              <a
                href="#contact"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Let&apos;s talk
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.article>
        </div>

        {/* Tech Stack */}
        <motion.article
          {...reveal}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-5 h-[130px] rounded-[28px] border border-[var(--border)] bg-white px-8 py-6 md:px-9 md:py-7"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                <Layers size={25} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
                  Technical Toolkit
                </p>

                <h3 className="font-display mt-2 text-2xl font-medium text-[var(--primary)] md:text-[1.8rem]">
                  Tools I build with.
                </h3>
              </div>
            </div>

            <a
              href="#skills"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-emerald-600 transition-transform duration-200 hover:translate-x-1"
            >
              View complete skills
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5 border-t border-[var(--border)] pt-3">
            {techStack.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[var(--border)] bg-[var(--section-bg)] px-4 py-1.5 text-xs font-medium text-[var(--secondary)] transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-500"
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
