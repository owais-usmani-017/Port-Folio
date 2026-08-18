"use client";

import { motion } from "framer-motion";
import { Building, Calendar, CheckCircle2, Briefcase } from "lucide-react";

const experienceData = [
  {
    period: "Professional Role",
    role: "Research Analyst",
    organization: "Concentrix",
    badge: "Active",
    description:
      "Doing Research Analyst role/internship with Concentrix, conducting data evaluation, analytical research, and domain investigations.",
    highlights: [
      "Data synthesis and analytical problem assessment",
      "Process optimization & documentation",
      "Cross-functional communication and research deliverables",
    ],
  },
  {
    period: "Self Employed / Freelance",
    role: "AI & Full-Stack Developer",
    organization: "Independent & Open Source",
    badge: "Active",
    description:
      "Architecting intelligent applications, autonomous agentic workflows with n8n, and scalable web solutions using modern tech stacks.",
    highlights: [
      "Built 10+ major full-stack and AI applications",
      "Engineered automated lead-qualification and job-search copilot systems",
      "Over 200+ algorithm challenges solved on LeetCode with C++",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-[var(--background-subtle)]">
      <div className="container">
        {/* Main Experience Layout */}
        <div className="relative grid lg:grid-cols-[1fr_72px_1fr] lg:gap-0">
          {/* =====================================================
              LEFT TOP: SECTION INTRO
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-start-1 lg:row-start-1 lg:pr-12"
          >
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              My Journey
            </div>

            {/* Heading */}
            <h2 className="font-display max-w-[650px] text-[52px] font-medium leading-[1.05] tracking-tight text-[var(--primary)] sm:text-[64px] lg:text-[68px]">
              Experience &amp; Roles
            </h2>

            {/* Subtitle */}
            <p className="mt-5 max-w-[590px] text-lg leading-[1.65] text-[var(--secondary)]">
              A track record of disciplined problem-solving, industry research,
              and continuous software shipping.
            </p>
          </motion.div>

          {/* =====================================================
              TIMELINE LINE
          ===================================================== */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-[155px] hidden w-[3px] -translate-x-1/2 bg-gradient-to-b from-amber-500 via-orange-500 to-indigo-500 lg:block" />

          {/* =====================================================
              EXPERIENCE 1: RIGHT SIDE
          ===================================================== */}
          <motion.article
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mt-12 lg:col-start-3 lg:row-start-1 lg:mt-[155px] lg:pl-6"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[36px] top-[65px] z-20 hidden h-12 w-12 items-center justify-center rounded-full border-[5px] border-[var(--background-subtle)] bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg lg:flex">
              <Briefcase size={17} />
            </div>

            {/* Card */}
            <div className="designer-card h-[300px] relative overflow-hidden rounded-[28px] bg-[var(--card-bg)] shadow-sm">
              {/* Orange Accent */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-amber-500 to-orange-500" />

              <div className="p-6 sm:p-7">
                {/* Top Row */}
                <div className="flex relative top-3 left-3 items-start justify-between gap-5">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-500">
                    <Calendar size={13} />
                    {experienceData[0].period}
                  </div>

                  <span className=" relative top-3 right-6 rounded-xl bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-500">
                    {experienceData[0].badge}
                  </span>
                </div>

                {/* Role */}
                <h3 className="relative top-3 left-3 mt-4 text-[26px] font-bold leading-tight tracking-tight text-[var(--foreground)]">
                  {experienceData[0].role}
                </h3>

                {/* Organization */}
                <div className="relative top-3 left-3 mt-1.5 flex items-center gap-2 text-sm font-semibold text-amber-500">
                  <Building size={14} />
                  {experienceData[0].organization}
                </div>

                {/* Description */}
                <p className="relative top-9 left-3 tracking-tight mt-4 text-[15px] leading-[1.7] text-[var(--foreground-secondary)]">
                  {experienceData[0].description}
                </p>
              </div>

              {/* Highlights */}
              <div className=" relative top-11 left-5 border-t border-[var(--card-border)] px-6 py-4 sm:px-7">
                <div className="space-y-2">
                  {experienceData[0].highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-[var(--foreground-secondary)]"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />

                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          {/* =====================================================
              EXPERIENCE 2: LEFT SIDE
          ===================================================== */}
          <motion.article
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative mt-8 lg:col-start-1 lg:row-start-2 lg:mt-8 lg:pr-6"
          >
            {/* Timeline Node */}
            <div className="absolute -right-[36px] top-[65px] z-20 hidden h-12 w-12 items-center justify-center rounded-full border-[5px] border-[var(--background-subtle)] bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg lg:flex">
              <Briefcase size={17} />
            </div>

            {/* Card */}
            <div className="h-[300px] designer-card relative overflow-hidden rounded-[28px] bg-[var(--card-bg)] shadow-sm">
              {/* Indigo Accent */}
              <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-orange-500 to-indigo-500" />

              <div className="p-6 sm:p-7">
                {/* Top Row */}
                <div className="relative top-3 left-3 flex items-start justify-between gap-5">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-500">
                    <Calendar size={13} />
                    {experienceData[1].period}
                  </div>

                  <span className="relative top-3 right-6 rounded-xl bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-500">
                    {experienceData[1].badge}
                  </span>
                </div>

                {/* Role */}
                <h3 className="relative top-3 left-3 mt-4 text-[26px] font-bold leading-tight tracking-tight text-[var(--foreground)]">
                  {experienceData[1].role}
                </h3>

                {/* Organization */}
                <div className="relative top-3 left-3 mt-1.5 flex items-center gap-2 text-sm font-semibold text-amber-500">
                  <Building size={14} />
                  {experienceData[1].organization}
                </div>

                {/* Description */}
                <p className="relative top-11 left-3 tracking-tight mt-4 text-[15px] leading-[1.7] text-[var(--foreground-secondary)]">
                  {experienceData[1].description}
                </p>
              </div>

              {/* Highlights */}
              <div className="relative top-13 left-5 border-t border-[var(--card-border)] px-6 py-4 sm:px-7">
                <div className="space-y-2">
                  {experienceData[1].highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-[var(--foreground-secondary)]"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />

                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
