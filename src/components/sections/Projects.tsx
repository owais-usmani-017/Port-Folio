"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types/portfolio";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Featured" },
  { id: "ai", label: "AI & Agents" },
  { id: "automation", label: "Automation" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "backend", label: "Backend" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;

    if (activeFilter === "featured") {
      return project.featured;
    }

    if (activeFilter === "ai") {
      return project.technologies.some((technology) =>
        [
          "AI Agents",
          "LLM APIs",
          "RAG",
          "Machine Learning",
          "NLP / Embeddings",
          "AI",
          "OpenAI",
          "Groq",
          "Pinecone",
        ].includes(technology),
      );
    }

    if (activeFilter === "automation") {
      return project.technologies.some((technology) =>
        ["n8n", "Webhooks", "Gmail API", "Airtable", "Automation"].includes(
          technology,
        ),
      );
    }

    if (activeFilter === "fullstack") {
      return project.technologies.some((technology) =>
        [
          "Next.js",
          "React",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Supabase",
          "REST APIs",
          "TypeScript",
          "Tailwind CSS",
        ].includes(technology),
      );
    }

    if (activeFilter === "backend") {
      return project.technologies.some((technology) =>
        [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "Supabase",
          "PostgreSQL",
          "REST APIs",
          "FastAPI",
        ].includes(technology),
      );
    }

    return true;
  });

  return (
    <section id="portfolio" className="section bg-[var(--background)]">
      <div className="container">
        {/* =========================================
            SECTION HEADING
        ========================================= */}
        <SectionHeading
          eyebrow="Selected Portfolio"
          title="Engineered Products &amp; Systems"
          subtitle="A showcase of AI agents, autonomous automation pipelines, and scalable full-stack applications."
          badgeColor="rose"
        />
        <br/>

        {/* =========================================
            FILTERS
        ========================================= */}
        <div className="mt-8 mb-8 gap-5 flex flex-wrap items-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  gap-5
                  rounded-xl
                  px-5 py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? `
                        bg-gradient-to-r
                        from-orange-500
                        to-amber-500
                        text-white
                        shadow-lg
                        shadow-orange-500/20
                        -translate-y-0.5
                      `
                      : `
                        border
                        border-[var(--card-border)]
                        bg-white
                        text-[var(--foreground-secondary)]
                        hover:border-orange-300
                        hover:text-orange-500
                        hover:-translate-y-0.5
                      `
                  }
                `}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        <br/>

        {/* =========================================
            PROJECT GRID
        ========================================= */}
        <motion.div
          layout
          className="
            grid
            items-stretch
            gap-7
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  featured={project.featured}
                  onQuickView={(project) => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* =========================================
            EMPTY STATE
        ========================================= */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              mt-8
              flex
              min-h-[220px]
              items-center
              justify-center
              rounded-3xl
              border
              border-[var(--card-border)]
              bg-white
              text-sm
              text-[var(--foreground-muted)]
            "
          >
            No projects found for this category.
          </motion.div>
        )}

        {/* =========================================
            VIEW ALL PROJECTS
        ========================================= */}
        <div className="mt-10 flex top-3 relative justify-center w-full">
          <a
            href="#portfolio"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[var(--card-border)]
              bg-white
              px-6
              py-3.5
              text-sm
              font-bold
              text-[var(--foreground)]
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-1
              hover:border-orange-300
              hover:shadow-lg
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                bg-orange-500/10
                text-orange-500
              "
            >
              <span className="text-lg leading-none">⊞</span>
            </span>
            View all projects
            <span
              className="
                text-lg
                text-orange-500
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>

        {/* =========================================
            PROJECT MODAL
        ========================================= */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
