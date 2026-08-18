"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Briefcase, Building, Calendar, CheckCircle2, Sparkles } from "lucide-react";

const experienceData = [
  {
    period: "Professional Role",
    role: "Research Analyst",
    organization: "Concentrix",
    badge: "Selected Candidate",
    type: "Industry",
    description:
      "Selected for a Research Analyst role/internship with Concentrix, conducting data evaluation, analytical research, and domain investigations.",
    highlights: [
      "Data synthesis and analytical problem assessment",
      "Process optimization & documentation",
      "Cross-functional communication and research deliverables",
    ],
  },
  {
    period: "2023 - 2027",
    role: "AI & Full-Stack Developer",
    organization: "Independent & Open Source",
    badge: "Active",
    type: "Engineering",
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
        <SectionHeading
          eyebrow="My Journey"
          title="Experience &amp; Roles"
          subtitle="A track record of disciplined problem-solving, industry research, and continuous software shipping."
          badgeColor="indigo"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-indigo-500 md:left-1/2 md:-ml-0.5" />

          <div className="space-y-8">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[var(--background-subtle)] bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md md:left-1/2">
                    <Briefcase size={13} />
                  </div>

                  {/* Card Content (Offset for timeline) */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                    <div className="designer-card rounded-3xl p-6 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                          <Calendar size={12} />
                          {item.period}
                        </span>

                        <span className="rounded-full bg-[var(--card-bg-subtle)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--foreground-muted)]">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-[var(--foreground)]">
                        {item.role}
                      </h3>

                      <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-amber-500">
                        <Building size={14} />
                        <span>{item.organization}</span>
                      </div>

                      <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[var(--foreground-secondary)]">
                        {item.description}
                      </p>

                      <div className="mt-5 space-y-1.5 border-t border-[var(--card-border)] pt-4">
                        {item.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2 text-xs text-[var(--foreground-secondary)]">
                            <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-emerald-500" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
