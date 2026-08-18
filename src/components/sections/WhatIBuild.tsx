"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Bot, Cpu, Layers, Server, Sparkles, Workflow, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    number: "01",
    title: "AI & Intelligent Systems",
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    description:
      "Designing end-to-end intelligent applications powered by modern LLMs, vector search, and agentic workflows.",
    items: [
      "Autonomous AI Agents",
      "RAG Vector Pipelines",
      "LLM Embeddings & Pinecone",
      "Smart Job & Resume Matching",
      "Semantic Search Engines",
      "AI Prompt Engineering",
    ],
  },
  {
    icon: Workflow,
    number: "02",
    title: "Autonomous Automation",
    color: "orange",
    gradient: "from-orange-500 to-rose-500",
    badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    description:
      "Connecting business tools, webhooks, CRMs, and email pipelines into reliable automated workflows with n8n.",
    items: [
      "n8n Orchestration",
      "Lead Qualification & Scoring",
      "Automated Email Campaigns",
      "Airtable & CRM Syncing",
      "Webhook Architecture",
      "Business Logic Automation",
    ],
  },
  {
    icon: Layers,
    number: "03",
    title: "Modern Full-Stack Apps",
    color: "indigo",
    gradient: "from-indigo-500 to-violet-500",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    description:
      "Building reactive, responsive, and accessible digital products from frontend interfaces to secure server backends.",
    items: [
      "Next.js & React 19",
      "TypeScript Architecture",
      "Tailwind & Framer Motion",
      "Interactive Dashboards",
      "Secure Auth & Protected Routes",
      "REST & GraphQL Integration",
    ],
  },
  {
    icon: Server,
    number: "04",
    title: "Backend & Systems",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    description:
      "Engineering robust backend services with clean REST APIs, structured schemas, validation, and database layers.",
    items: [
      "Node.js & Express API Design",
      "MongoDB / Mongoose Schemas",
      "Supabase & PostgreSQL",
      "JWT & RBAC Security",
      "Robust Error Handling",
      "Performance & Caching",
    ],
  },
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="section bg-[var(--background)] overflow-hidden">
      <div className="ambient-glow ambient-glow-amber top-1/2 left-0 h-[300px] w-[300px]" />
      <div className="ambient-glow ambient-glow-indigo bottom-10 right-0 h-[300px] w-[300px]" />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Core Competencies"
          title="What I Bring to the Table"
          subtitle="Transforming complex technical ideas, data pipelines, and requirements into intuitive, reliable software."
          badgeColor="orange"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="designer-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 lg:p-9"
              >
                {/* Top Subtle Gradient Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${capability.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2`}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="font-mono text-sm font-extrabold text-[var(--foreground-muted)] opacity-50">
                      {capability.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-[var(--foreground)] transition-colors duration-200 group-hover:text-amber-500">
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                    {capability.description}
                  </p>
                </div>

                {/* Items Tag Cloud */}
                <div className="mt-8 border-t border-[var(--card-border)] pt-6">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[var(--foreground-muted)]">
                    Key Implementations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {capability.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 ${capability.badgeColor}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
