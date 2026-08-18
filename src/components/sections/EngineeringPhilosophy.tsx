"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Search, Compass, Code2, ShieldCheck, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    subtitle: "Problem First",
    color: "from-amber-500 to-orange-500",
    description:
      "Scoping the exact business requirement, user friction points, and automation opportunities before writing code.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Architect",
    subtitle: "Clean Design",
    color: "from-orange-500 to-rose-500",
    description:
      "Choosing optimal technologies, designing data schemas, vector index strategies, and resilient API contracts.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    subtitle: "End-to-End",
    color: "from-rose-500 to-indigo-500",
    description:
      "Implementing frontend interfaces, backend services, AI agent prompts, and n8n webhook integrations.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Validate",
    subtitle: "Real Workflows",
    color: "from-indigo-500 to-violet-500",
    description:
      "Testing end-to-end payloads, edge cases, error fallbacks, response times, and structured LLM outputs.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Scale",
    subtitle: "Continuous Value",
    color: "from-emerald-500 to-teal-500",
    description:
      "Iterating based on real performance metrics, user feedback, logging, and continuous deployment.",
  },
];

export default function EngineeringPhilosophy() {
  return (
    <section id="philosophy" className="section bg-[var(--background-subtle)]">
      <div className="container">
        <SectionHeading
          eyebrow="Development Workflow"
          title="Engineering Philosophy"
          subtitle="A structured, disciplined methodology to transform ambiguity into production-grade systems."
          badgeColor="orange"
        />
        <br />

        <div className="grid  h-75 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="designer-card group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex relative left-3 top-3 items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr ${step.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="relative right-4 font-mono text-xs font-extrabold text-[var(--foreground-muted)] opacity-60">
                      STEP {step.number}
                    </span>
                  </div>

                  <h3 className="relative left-3 top-5 mt-6 text-xl font-bold text-[var(--foreground)] group-hover:text-amber-500 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs relative left-3 top-5 font-semibold text-amber-500/80">
                    {step.subtitle}
                  </p>

                  <p className="relative left-3 top-9 mt-4 text-xs sm:text-sm leading-relaxed text-[var(--foreground-secondary)]">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-6 h-1 w-full rounded-full bg-[var(--card-bg-subtle)] overflow-hidden">
                  <div
                    className={`h-full w-0 bg-gradient-to-r ${step.color} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
