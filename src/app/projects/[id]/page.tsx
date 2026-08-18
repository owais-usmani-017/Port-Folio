import Link from "next/link";
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2, Layers, Cpu } from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4">
        <div className="designer-card max-w-md rounded-3xl p-8 text-center">
          <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-500">
            404
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-[var(--foreground)]">
            Project Not Found
          </h1>
          <p className="mt-2 text-sm text-[var(--foreground-secondary)]">
            The project you are looking for does not exist or has moved.
          </p>
          <Link
            href="/#portfolio"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-xs font-bold text-white shadow-md"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pb-20">
      {/* Header Section */}
      <section className="relative overflow-hidden border-b border-[var(--card-border)] bg-[var(--background-subtle)] pt-28 pb-16">
        <div className="ambient-glow ambient-glow-amber top-10 left-1/3 h-[300px] w-[300px]" />
        
        <div className="container relative z-10">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2 text-xs font-bold text-[var(--foreground-secondary)] shadow-sm transition-all hover:border-amber-500 hover:text-amber-500"
          >
            <ArrowLeft size={15} />
            Back to Selected Work
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Sparkles size={13} />
              {project.category === "hero" ? "Featured System Architecture" : "Project Showcase"}
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-[var(--foreground)]">
              {project.title}
            </h1>

            <p className="mt-3 text-lg font-semibold text-amber-500">
              {project.subtitle}
            </p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--foreground-secondary)]">
              {project.description}
            </p>

            {/* Technologies Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)]"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Live Link Button */}
            {project.live && (
              <div className="mt-8">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform"
                >
                  <ExternalLink size={16} />
                  Open Live Application
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Architecture Highlights Section */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Deep Dive
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[var(--foreground)]">
                Key Features &amp; Architecture
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                A granular breakdown of modules, data pipelines, integrations, and performance engineering implemented in this system.
              </p>
            </div>

            <div className="designer-card rounded-3xl p-6 sm:p-8">
              <div className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-4 rounded-2xl bg-[var(--card-bg-subtle)] p-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--background)]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 font-mono text-xs font-bold text-amber-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-16 flex items-center justify-between border-t border-[var(--card-border)] pt-8">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-500 hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Selected Work
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--card-bg-subtle)] px-4 py-2 text-xs font-bold text-[var(--foreground)] hover:bg-amber-500 hover:text-white transition-colors"
            >
              Discuss This Project &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
