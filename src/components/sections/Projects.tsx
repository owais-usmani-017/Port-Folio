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
  { id: "fullstack", label: "Full-Stack & Backend" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    if (activeFilter === "ai") {
      return project.technologies.some((t) =>
        ["AI Agents", "LLM APIs", "RAG", "Machine Learning", "NLP / Embeddings", "AI"].includes(t)
      );
    }
    if (activeFilter === "automation") {
      return project.technologies.some((t) =>
        ["n8n", "Webhooks", "Gmail API", "Airtable"].includes(t)
      );
    }
    if (activeFilter === "fullstack") {
      return project.technologies.some((t) =>
        ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"].includes(t)
      );
    }
    return true;
  });

  return (
    <section id="portfolio" className="section bg-[var(--background)]">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Portfolio"
          title="Engineered Products &amp; Systems"
          subtitle="A showcase of AI agents, autonomous automation pipelines, and scalable full-stack applications."
          badgeColor="rose"
        />

        {/* Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-md shadow-amber-500/20 scale-105"
                    : "border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:border-amber-500/30 hover:text-[var(--foreground)]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  featured={project.featured}
                  onQuickView={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Quick View */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
