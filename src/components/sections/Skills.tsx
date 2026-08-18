"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  Code, 
  Sparkles, 
  Bot, 
  Workflow, 
  Globe, 
  Database, 
  Wrench, 
  GraduationCap 
} from "lucide-react";

interface SkillCategory {
  id: string;
  number: string;
  title: string;
  icon: any;
  accent: string;
  badgeClass: string;
  skills: { name: string; level: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    number: "01",
    title: "AI & Machine Learning",
    icon: Bot,
    accent: "text-amber-500",
    badgeClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    skills: [
      { name: "LLM APIs (OpenAI / Claude)", level: "Advanced" },
      { name: "RAG Systems", level: "Advanced" },
      { name: "Pinecone / Vector DBs", level: "Proficient" },
      { name: "AI Agents Architecture", level: "Advanced" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "Semantic Search & Embeddings", level: "Proficient" },
      { name: "Machine Learning Foundations", level: "Intermediate" },
    ],
  },
  {
    id: "automation",
    number: "02",
    title: "Workflow Automation",
    icon: Workflow,
    accent: "text-orange-500",
    badgeClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    skills: [
      { name: "n8n Workflows", level: "Advanced" },
      { name: "Webhook Integrations", level: "Advanced" },
      { name: "Gmail & Email Automation", level: "Advanced" },
      { name: "Airtable CRM Systems", level: "Proficient" },
      { name: "REST API Connectors", level: "Advanced" },
      { name: "Lead Routing & Scoring", level: "Advanced" },
    ],
  },
  {
    id: "frontend",
    number: "03",
    title: "Frontend & UI Design",
    icon: Globe,
    accent: "text-indigo-500",
    badgeClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    skills: [
      { name: "React 19 & Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "HTML5 / Modern CSS", level: "Expert" },
      { name: "Responsive & Adaptive UI", level: "Expert" },
    ],
  },
  {
    id: "backend-db",
    number: "04",
    title: "Backend & Databases",
    icon: Database,
    accent: "text-emerald-500",
    badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    skills: [
      { name: "Node.js & Express.js", level: "Advanced" },
      { name: "MongoDB & Mongoose", level: "Advanced" },
      { name: "Supabase & PostgreSQL", level: "Proficient" },
      { name: "REST API Architecture", level: "Advanced" },
      { name: "JWT Auth & RBAC", level: "Advanced" },
      { name: "Data Validation & Security", level: "Proficient" },
    ],
  },
  {
    id: "languages",
    number: "05",
    title: "Programming Languages",
    icon: Code,
    accent: "text-blue-500",
    badgeClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    skills: [
      { name: "C++ (DSA)", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Java", level: "Proficient" },
      { name: "SQL", level: "Proficient" },
    ],
  },
  {
    id: "tools-cs",
    number: "06",
    title: "Dev Tools & CS Core",
    icon: Wrench,
    accent: "text-rose-500",
    badgeClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Vercel & Render", level: "Advanced" },
      { name: "Data Structures & Algorithms", level: "200+ Solved" },
      { name: "DBMS & SQL", level: "Academic Core" },
      { name: "Operating Systems & Networks", level: "Academic Core" },
    ],
  },
];

const tabs = [
  { label: "All Skills", id: "all" },
  { label: "AI & Agents", id: "ai-ml" },
  { label: "Automation", id: "automation" },
  { label: "Frontend", id: "frontend" },
  { label: "Backend & DB", id: "backend-db" },
  { label: "Languages", id: "languages" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories = activeTab === "all" 
    ? skillCategories 
    : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="section bg-[var(--background-subtle)]">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills &amp; Technologies"
          subtitle="A comprehensive toolkit refined through live projects, research, and algorithmic problem solving."
          badgeColor="emerald"
        />

        {/* Interactive Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20 scale-105"
                    : "border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:border-amber-500/30 hover:text-[var(--foreground)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.article
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="designer-card group relative flex flex-col justify-between rounded-3xl p-7"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--card-bg-subtle)] text-[var(--foreground)] transition-transform duration-300 group-hover:scale-110">
                          <Icon size={20} className={category.accent} />
                        </div>
                        <h3 className="text-lg font-bold text-[var(--foreground)]">
                          {category.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-bold text-[var(--foreground-muted)] opacity-50">
                        {category.number}
                      </span>
                    </div>

                    {/* Skill List */}
                    <div className="mt-6 space-y-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between rounded-xl bg-[var(--card-bg-subtle)] px-3.5 py-2 text-xs transition-colors group-hover:bg-[var(--background)]"
                        >
                          <span className="font-medium text-[var(--foreground)]">
                            {skill.name}
                          </span>
                          <span className={`rounded-lg border px-2 py-0.5 text-[10px] font-semibold ${category.badgeClass}`}>
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle Accent Bottom Line */}
                  <div className="mt-6 h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
