"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Eye,
  GitBranch,
  Sparkles,
  Workflow,
} from "lucide-react";
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
  const isAI = project.technologies.some((t) =>
    [
      "AI Agents",
      "LLM APIs",
      "RAG",
      "Machine Learning",
      "NLP / Embeddings",
      "AI",
    ].includes(t),
  );

  const isAutomation =
    project.technologies.includes("n8n") ||
    project.technologies.includes("Webhooks");

  const theme = isAI
    ? {
        accent: "text-orange-500",
        border: "border-orange-500/20",
        soft: "bg-orange-500/[0.07]",
        iconBg: "bg-orange-500/[0.08]",
        gradient: "from-orange-500/10 via-white to-amber-50",
        glow: "bg-orange-400/[0.12]",
        line: "from-orange-500 to-amber-400",
      }
    : isAutomation
      ? {
          accent: "text-orange-500",
          border: "border-orange-500/20",
          soft: "bg-orange-500/[0.07]",
          iconBg: "bg-orange-500/[0.08]",
          gradient: "from-orange-500/10 via-white to-amber-50",
          glow: "bg-orange-400/[0.12]",
          line: "from-orange-500 to-orange-400",
        }
      : {
          accent: "text-indigo-500",
          border: "border-indigo-500/20",
          soft: "bg-indigo-500/[0.07]",
          iconBg: "bg-indigo-500/[0.08]",
          gradient: "from-indigo-500/10 via-white to-purple-50",
          glow: "bg-indigo-400/[0.10]",
          line: "from-indigo-500 to-purple-400",
        };

  const CategoryIcon = isAI
    ? BriefcaseBusiness
    : isAutomation
      ? Workflow
      : Code2;

  return (
    <article
      className="
        group relative flex h-full min-h-[450px] flex-col
        overflow-hidden rounded-[24px]
        border border-[var(--card-border)]
        bg-white
        shadow-[0_8px_30px_rgba(15,23,42,0.06)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
      "
    >
      {/* =========================================
          TOP ACCENT LINE
      ========================================= */}
      <div className={`h-[4px] w-full bg-gradient-to-r ${theme.line}`} />

      {/* =========================================
          VISUAL / HERO AREA
      ========================================= */}
      <div
        className={`
          relative h-[210px] shrink-0 overflow-hidden
          bg-gradient-to-br ${theme.gradient}
        `}
      >
        {/* Decorative background */}
        <div
          className={`
            pointer-events-none absolute
            -right-16 -top-16
            h-64 w-64 rounded-full
            ${theme.glow}
            blur-3xl
          `}
        />

        {/* Decorative rings */}
        <div className="pointer-events-none absolute -right-10 bottom-[-80px] h-64 w-64 opacity-40">
          <div
            className={`absolute inset-0 rounded-full border ${theme.border}`}
          />
          <div
            className={`absolute inset-8 rounded-full border ${theme.border}`}
          />
          <div
            className={`absolute inset-16 rounded-full border ${theme.border}`}
          />
          <div
            className={`absolute inset-24 rounded-full border ${theme.border}`}
          />
        </div>

        {/* Top badges */}
        <div className="relative z-10 flex items-center justify-between px-5 pt-5">
          {/* Deployment badge */}
          <span
            className={`
              top-3 relative left-2
              inline-flex items-center gap-1.5
              rounded-xl border
              bg-white/90
              px-3 py-1.5
              text-[11px] font-semibold
              shadow-sm
              ${theme.border}
              ${theme.accent}
            `}
          >
            <Sparkles size={12} strokeWidth={2.5} />
            Deployed
          </span>

          {/* Featured badge */}
          {featured && (
            <span
              className="
              relative right-2 top-3
                rounded-xl
                bg-amber-400
                px-3 py-1.5
                text-[10px]
                font-extrabold
                uppercase
                tracking-wide
                text-slate-900
                shadow-sm
              "
            >
              Featured
            </span>
          )}
        </div>

        {/* Large project icon */}
        <div className="relative top-10 left-5 z-10 px-7 pt-10">
          <div
            className={`
              flex h-[92px] w-[92px]
              items-center justify-center
              rounded-[24px]
              ${theme.iconBg}
              ${theme.accent}
              shadow-[0_12px_30px_rgba(15,23,42,0.05)]
              transition-transform duration-300
              group-hover:scale-105
            `}
          >
            <CategoryIcon size={46} strokeWidth={1.8} />
          </div>
        </div>
      </div>

      {/* =========================================
          CARD CONTENT
      ========================================= */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
        {/* Title */}
        <div className="flex relative top-2 left-4 items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              className="
                text-[25px]
                font-bold
                leading-tight
                tracking-[-0.03em]
                text-[var(--foreground)]
                transition-colors
                duration-200
                group-hover:text-orange-500
              "
            >
              {project.title}
            </h3>

            <p
              className="
                top-1
                relative
                mt-3
                text-[14px]
                font-medium
                leading-5
                text-[var(--foreground-secondary)]
              "
            >
              {project.subtitle}
            </p>
          </div>

          {/* Open project */}
          <Link
            href={`/projects/${project.id}`}
            aria-label={`View details for ${project.title}`}
            className="
            relative top-2 right-6
              flex h-10 w-10
              shrink-0
              items-center justify-center
              rounded-xl
              border border-[var(--card-border)]
              bg-white
              text-[var(--foreground)]
              transition-all duration-200
              hover:border-orange-400
              hover:bg-orange-500
              hover:text-white
              hover:scale-105
            "
          >
            <ArrowUpRight size={19} />
          </Link>
        </div>

        {/* Description */}
        <p
          className="
            relative
            tracking-tight
            top-3
            left-4
            mt-3
            line-clamp-3
            text-[12px]
            leading-[1.65]
            text-[var(--foreground-secondary)]
          "
        >
          {project.description}
        </p>

        {/* =========================================
            TECHNOLOGIES
        ========================================= */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="
                relative
                top-6
                left-4
                rounded-lg
                border border-[var(--card-border)]
                bg-[var(--card-bg-subtle)]
                px-2.5 py-1
                text-[11px]
                font-medium
                text-[var(--foreground-secondary)]
                transition-colors
                group-hover:border-slate-200
              "
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span
              className="
                rounded-lg
                border border-orange-200
                bg-orange-50
                px-2.5 py-1
                text-[11px]
                font-semibold
                text-orange-500
              "
            >
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* =========================================
            FOOTER
        ========================================= */}
        <div
          className="
          absolute bottom-5 left-3 right-1
            mt-auto
            flex items-center justify-between
            border-t border-[var(--card-border)]
            pt-4
          "
        >
          {/* GitHub / Quick preview */}
          {onQuickView ? (
            <button
              type="button"
              onClick={() => onQuickView(project)}
              className="
                inline-flex
                items-center
                gap-2
                text-[13px]
                font-medium
                text-[var(--foreground-secondary)]
                transition-colors
                hover:text-orange-500
              "
            >
              <GitBranch size={16} />
              GitHub/owaisusmani
            </button>
          ) : (
            <span
              className="
                inline-flex
                items-center
                gap-2
                text-[13px]
                font-medium
                text-[var(--foreground-secondary)]
              "
            >
              <GitBranch size={16} />
              GitHub/owaisusmani
            </span>
          )}

          {/* Case study */}
          <Link
            href={`/projects/${project.id}`}
            className="
              inline-flex
              items-center
              gap-2
              text-[13px]
              font-bold
              text-orange-500
              transition-all duration-200
              hover:gap-3
            "
          >
            Case Study
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}
