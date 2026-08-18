"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Code, Bot, Workflow, Globe, Database, Wrench } from "lucide-react";

interface SkillCategory {
  id: string;
  number: string;
  title: string;
  icon: any;
  accent: string;
  iconBg: string;
  pillClass: string;
  lineClass: string;
  skills: { name: string; level: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    number: "01",
    title: "AI & Machine Learning",
    icon: Bot,
    accent: "text-emerald-500",
    iconBg: "bg-emerald-50",
    pillClass: "border-emerald-100 bg-emerald-50/70 hover:bg-emerald-100/70",
    lineClass: "bg-emerald-500",
    skills: [
      { name: "LLM APIs (OpenAI / Claude)", level: "" },
      { name: "RAG Systems", level: "" },
      { name: "Pinecone / Vector DBs", level: "" },
      { name: "AI Agents Architecture", level: "" },
      { name: "Prompt Engineering", level: "" },
      { name: "Semantic Search & Embeddings", level: "" },
      { name: "Machine Learning Foundations", level: "" },
    ],
  },

  {
    id: "automation",
    number: "02",
    title: "Workflow Automation",
    icon: Workflow,
    accent: "text-orange-500",
    iconBg: "bg-orange-50",
    pillClass: "border-orange-100 bg-orange-50/70 hover:bg-orange-100/70",
    lineClass: "bg-orange-500",
    skills: [
      { name: "n8n Workflows", level: "" },
      { name: "Webhook Integrations", level: "" },
      { name: "Gmail & Email Automation", level: "" },
      { name: "Airtable CRM Systems", level: "" },
      { name: "REST API Connectors", level: "" },
      { name: "Lead Routing & Scoring", level: "" },
    ],
  },

  {
    id: "frontend",
    number: "03",
    title: "Frontend & UI Design",
    icon: Globe,
    accent: "text-indigo-500",
    iconBg: "bg-indigo-50",
    pillClass: "border-indigo-100 bg-indigo-50/70 hover:bg-indigo-100/70",
    lineClass: "bg-indigo-500",
    skills: [
      { name: "React 19 & Next.js", level: "" },
      { name: "TypeScript", level: "" },
      { name: "Tailwind CSS", level: "" },
      { name: "Framer Motion", level: "" },
      { name: "HTML5 / Modern CSS", level: "" },
      { name: "Responsive & Adaptive UI", level: "" },
    ],
  },

  {
    id: "backend-db",
    number: "04",
    title: "Backend & Databases",
    icon: Database,
    accent: "text-emerald-500",
    iconBg: "bg-emerald-50",
    pillClass: "border-emerald-100 bg-emerald-50/70 hover:bg-emerald-100/70",
    lineClass: "bg-emerald-500",
    skills: [
      { name: "Node.js & Express.js", level: "" },
      { name: "MongoDB & Mongoose", level: "" },
      { name: "Supabase & PostgreSQL", level: "" },
      { name: "REST API Architecture", level: "" },
      { name: "JWT Auth & RBAC", level: "" },
      { name: "Data Validation & Security", level: "" },
    ],
  },

  {
    id: "languages",
    number: "05",
    title: "Programming Languages",
    icon: Code,
    accent: "text-blue-500",
    iconBg: "bg-blue-50",
    pillClass: "border-blue-100 bg-blue-50/70 hover:bg-blue-100/70",
    lineClass: "bg-blue-500",
    skills: [
      { name: "C++ (DSA)", level: "" },
      { name: "Python", level: "" },
      { name: "JavaScript (ES6+)", level: "" },
      { name: "Java", level: "" },
      { name: "SQL", level: "" },
    ],
  },

  {
    id: "tools-cs",
    number: "06",
    title: "Dev Tools & CS Core",
    icon: Wrench,
    accent: "text-rose-500",
    iconBg: "bg-rose-50",
    pillClass: "border-rose-100 bg-rose-50/70 hover:bg-rose-100/70",
    lineClass: "bg-rose-500",
    skills: [
      { name: "Git & GitHub", level: "" },
      { name: "Docker", level: "" },
      { name: "Vercel & Render", level: "" },
      { name: "Data Structures & Algorithms", level: "" },
      { name: "DBMS & SQL", level: "" },
      { name: "Operating Systems & Networks", level: "" },
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

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((category) => category.id === activeTab);

  return (
    <section id="skills" className="section bg-[var(--background-subtle)]">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit refined through live projects, research, and algorithmic problem solving."
          badgeColor="emerald"
        />
        <br />

        {/* Filter Tabs */}
        <div className="mb-10 gap-4 mt-8 flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-2xl px-8 py-4 text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20"
                    : "border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:border-amber-500/30 hover:text-[var(--foreground)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <br/>

        {/* Skill Cards */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const Icon = category.icon;

              return (
                <motion.article
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.3 }}
                  className="designer-card group relative min-h-[300px] overflow-hidden rounded-[28px] bg-white p-6"
                >
                  {/* Header */}
                  <div className="relative top-3 left-2">
                    <div className="flex items-start justify-between">
                      {/* Icon + Title */}
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${category.iconBg} transition-transform duration-300 group-hover:scale-105`}
                        >
                          <Icon
                            
                            size={28}
                            strokeWidth={1.8}
                            className={category.accent}
                          />
                        </div>

                        <div className="pt-1">
                          <h3 className="max-w-[240px] text-[22px] font-bold leading-[1.15] top-2 relative tracking-tight text-[var(--foreground)]">
                            {category.title}
                          </h3>

                          {/* Accent line */}
                          <div
                            className={`mt-4 h-[3px] w-10 top-4 relative rounded-full ${category.lineClass} transition-all duration-300 group-hover:w-16`}
                          />
                        </div>
                      </div>

                      {/* Number */}
                      <span className="font-mono text-xs font-bold right-4 relative text-[var(--foreground-muted)] opacity-60">
                        {category.number}
                      </span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className=" mt-8 grid grid-cols-2 gap-3 tracking-tight">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex min-h-[42px] left-2 top-6 min-w-[50px] relative items-center rounded-xl border px-3 py-2 text-[13px] leading-[1.25] text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 ${category.pillClass}`}
                      >
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-16 rounded-full ${category.lineClass} transition-all duration-300 group-hover:w-full`}
                  />
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
