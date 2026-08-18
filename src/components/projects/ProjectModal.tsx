"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight, CheckCircle2, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 sm:p-8 shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg-subtle)] text-[var(--foreground-secondary)] transition-colors hover:bg-rose-500 hover:text-white"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="pr-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Sparkles size={12} />
              {project.category === "hero" ? "Featured System" : "Project Showcase"}
            </span>

            <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[var(--foreground)]">
              {project.title}
            </h3>

            <p className="mt-1 text-sm font-semibold text-amber-500">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-[var(--foreground-secondary)]">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)]">
              Technologies &amp; Integrations
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg-subtle)] px-2.5 py-1 text-xs font-semibold text-[var(--foreground)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-6 border-t border-[var(--card-border)] pt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)] mb-3">
                Key Features &amp; Architecture
              </h4>
              <div className="space-y-2">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--foreground-secondary)]">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--card-border)] pt-6">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:underline"
            >
              View Full Architecture Page
              <ArrowRight size={14} />
            </Link>

            <div className="flex gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-xs font-bold text-white shadow-md"
                >
                  Live Demo
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
