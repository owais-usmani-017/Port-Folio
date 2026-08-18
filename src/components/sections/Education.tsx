"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap, Award, MapPin, BookOpen, CheckCircle2 } from "lucide-react";

const education = [
  {
    period: "2023 - 2027",
    title: "Bachelor of Technology in Computer Science & Engineering",
    institution: "KCC Institute of Technology and Management",
    location: "Greater Noida, UP · AKTU Lucknow",
    score: "Final Year / In Progress",
    scoreColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    description:
      "Building a solid theoretical and practical foundation in software engineering, artificial intelligence systems, database management, and operating systems.",
    tags: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "AI & ML"],
  },
  {
    period: "Class XII (Senior Secondary)",
    title: "Senior Secondary Science (PCM & CS)",
    institution: "Govt. Sarvodya Bal Vidyalya",
    location: "CBSE Board",
    score: "86% Aggregate",
    scoreColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    description: "Specialized in Physics, Chemistry, Mathematics, and Computer Science fundamentals.",
    tags: ["Physics", "Mathematics", "Computer Science"],
  },
  {
    period: "Class X (Secondary)",
    title: "Secondary School Examination",
    institution: "Govt. Sarvodya Bal Vidyalya",
    location: "CBSE Board",
    score: "94% Aggregate",
    scoreColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    description: "Academic excellence across Mathematics, Science, and Social Sciences.",
    tags: ["Mathematics", "Science", "Academic Honors"],
  },
];

export default function Education() {
  return (
    <section id="education" className="section bg-[var(--background)]">
      <div className="container">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education &amp; Foundations"
          subtitle="A consistent history of academic discipline and technical curiosity."
          badgeColor="amber"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="designer-card flex flex-col justify-between rounded-3xl p-7"
            >
              <div>
                {/* Header Period + Score */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)]">
                    {item.period}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-bold ${item.scoreColor}`}
                  >
                    <Award size={12} />
                    {item.score}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-[var(--foreground)] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-amber-500">
                  {item.institution}
                </p>

                <div className="mt-2 flex items-center gap-1 text-xs text-[var(--foreground-muted)]">
                  <MapPin size={12} />
                  <span>{item.location}</span>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[var(--foreground-secondary)]">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 border-t border-[var(--card-border)] pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-[var(--card-bg-subtle)] px-2 py-0.5 text-[11px] font-medium text-[var(--foreground-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
