"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, Eye } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onQuickView?: (project: Project) => void;
}

export default function ProjectCard({
  project,
  featured = false,
  onQuickView,
}: ProjectCardProps) {
  // Determine vibrant badge/gradient theme based on project id/tech
  const isAI = project.technologies.some((t) =>
    ["AI Agents", "LLM APIs", "RAG", "Machine Learning", "NLP / Embeddings"].includes(t)
  );
  const isAutomation = project.technologies.includes("n8n") || project.technologies.includes("Webhooks");

  const badgeTheme = isAI
    ? {
        label: "AI System",
        class: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        glow: "from-amber-500 to-orange-500",
      }
    : isAutomation
    ? {
        label: "Workflow Automation",
        class: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
        glow: "from-orange-500 to-rose-500",
      }
    : {
        label: "Full-Stack Web",
        class: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
        glow: "from-indigo-500 to-purple-500",
      };

  return (
    <article className="designer-card group relative flex flex-col justify-between overflow-hidden rounded-3xl">
      {/* Top Gradient Glow Stripe */}
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${badgeTheme.glow} opacity-80`}
      />

      {/* Visual Header / Preview */}
      <div className="relative overflow-hidden bg-[var(--card-bg-subtle)] p-6 pb-4 sm:p-7 sm:pb-5">
        {project.image ? (
          <div className="relative h-48 w-full overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="flex h-36 flex-col justify-between rounded-2xl border border-[var(--card-border)] bg-gradient-to-br from-[var(--card-bg)] to-[var(--background-subtle)] p-5">
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${badgeTheme.class}`}
              >
                <Sparkles size={11} />
                {badgeTheme.label}
              </span>

              {featured && (
                <span className="rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-black">
                  Featured
                </span>
              )}
            </div>

            <div className="flex items-end justify-between">
              <span className="font-mono text-3xl font-extrabold text-[var(--foreground-muted)] opacity-20">
                {project.title.slice(0, 3).toUpperCase()}
              </span>
              <span className="text-xs font-semibold text-amber-500">
                {project.highlights.length} Architectural Modules
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          {/* Title & Links */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] transition-colors duration-200 group-hover:text-amber-500">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-semibold text-[var(--foreground-secondary)]">
                {project.subtitle}
              </p>
            </div>

            <Link
              href={`/projects/${project.id}`}
              aria-label={`View details for ${project.title}`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] transition-all duration-200 hover:border-amber-500 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-orange-500 hover:text-white hover:scale-105"
            >
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Description */}
          <p className="mt-4 line-clamp-3 text-xs sm:text-sm leading-relaxed text-[var(--foreground-secondary)]">
            {project.description}
          </p>
        </div>

        {/* Tech Stack & Quick Actions */}
        <div className="mt-6 border-t border-[var(--card-border)] pt-5">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-[var(--card-border)] bg-[var(--card-bg-subtle)] px-2 py-0.5 text-[11px] font-medium text-[var(--foreground-secondary)]"
              >
                {technology}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="rounded-lg bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Bottom Actions */}
          <div className="mt-5 flex items-center justify-between">
            {onQuickView && (
              <button
                type="button"
                onClick={() => onQuickView(project)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--foreground-muted)] hover:text-amber-500 transition-colors"
              >
                <Eye size={14} />
                Quick Preview
              </button>
            )}

            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-500 hover:underline ml-auto"
            >
              Case Study &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
