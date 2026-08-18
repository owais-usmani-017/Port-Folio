"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  badgeColor?: "amber" | "emerald" | "indigo" | "rose" | "orange";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  badgeColor = "amber",
}: SectionHeadingProps) {
  const badgeStyles = {
    amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 ${centered ? "justify-center" : ""}`}
        >
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] opacity-80 ${badgeStyles[badgeColor]}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="font-display text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-[var(--foreground-secondary)] sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
