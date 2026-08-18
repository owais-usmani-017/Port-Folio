"use client";

import { useEffect, useState } from "react";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowUpRight,
  ChevronRight,
  Send,
  Code2,
  Zap,
  Database,
  Cloud,
  Bot,
  Sun,
} from "lucide-react";

function LinkedInIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#portfolio" },
  { label: "Skills & Technologies", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Engineering Philosophy", href: "#philosophy" },
  { label: "Get In Touch", href: "#contact" },
];

const quickLinks = [
  {
    label: "GitHub Repositories",
    href: "https://github.com/",
    external: true,
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/",
    external: true,
  },
  {
    label: "Resume",
    href: "#",
    external: true,
  },
  {
    label: "Blog / Articles",
    href: "#",
    external: true,
  },
  {
    label: "Case Studies",
    href: "#portfolio",
    external: false,
  },
];

const services = [
  {
    label: "AI & Full-Stack Development",
    icon: Code2,
    className: "bg-violet-500/10 text-violet-500",
  },
  {
    label: "Workflow Automation (n8n)",
    icon: Zap,
    className: "bg-amber-500/10 text-amber-500",
  },
  {
    label: "Backend & API Development",
    icon: Database,
    className: "bg-emerald-500/10 text-emerald-500",
  },
  {
    label: "DevOps & Integrations",
    icon: Cloud,
    className: "bg-sky-500/10 text-sky-500",
  },
  {
    label: "AI Agents & LLM Solutions",
    icon: Bot,
    className: "bg-pink-500/10 text-pink-500",
  },
];

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      setCurrentTime(
        new Intl.DateTimeFormat("en-US", options).format(new Date()),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative h-110  bg-[var(--background)] px-4 pb-6 pt-10 sm:px-6 lg:px-8">
      {/* Soft decorative glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[120px]" />

      <div className="relative h-110 mx-auto max-w-[1660px] overflow-hidden rounded-[30px] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="px-8 py-12  sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-14">
          <div className="grid  gap-12 lg:grid-cols-[1.45fr_0.9fr_0.95fr_1.15fr_1fr] lg:gap-10 xl:gap-14">
            {/* =========================
                BRAND
            ========================== */}
            <div>
              <a href="#home" className="inline-flex items-center gap-3">
                <div className="relative left-3 top-3 flex h-14 w-14 items-center justify-center rounded-[15px] bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/20">
                  <Sparkles size={25} />
                </div>

                <span className="relative left-3 top-3 font-display text-[34px] font-medium tracking-tight text-[var(--foreground)]">
                  Owais<span className="text-amber-500">.</span>
                </span>
              </a>

              <p className="mt-7 relative top-4 left-3 max-w-[360px] text-[15px] leading-[1.9] text-[var(--foreground-secondary)]">
                Building intelligent products, autonomous workflows, and
                full-stack systems that create real impact.
              </p>

              {/* Contact information */}
              <div className="mt-7 relative top-4 left-3 space-y-3">
                <a
                  href="mailto:owaisusmani436@gmail.com"
                  className="group flex items-center gap-3"
                >
                  <span className="relative left-3 top-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-transform group-hover:scale-105">
                    <Mail size={16} />
                  </span>

                  <span className="relative left-3 top-3 text-sm font-medium text-[var(--foreground)] transition-colors group-hover:text-amber-500">
                    owaisusmani436@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+919667577436"
                  className="relative left-3 top-4 group flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-transform group-hover:scale-105">
                    <Phone size={16} />
                  </span>

                  <span className="text-sm font-medium text-[var(--foreground)] transition-colors group-hover:text-amber-500">
                    +91 96675 77436
                  </span>
                </a>

                <div className="relative left-3 top-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <MapPin size={16} />
                  </span>

                  <span className="text-sm font-medium text-[var(--foreground)]">
                    Delhi NCR, India · UTC +5:30
                  </span>
                </div>
              </div>

              {/* Social icons */}
              <div className="relative flex w-full left-6 top-11 mt-7 gap-6">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-200 hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                >
                  <GitHubIcon size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  <LinkedInIcon size={20} />
                </a>

                <a
                  href="mailto:owaisusmani436@gmail.com"
                  aria-label="Email"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-200 hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* =========================
                NAVIGATION
            ========================== */}
            <div className="relative top-4">
              <FooterHeading title="Navigation" />

              <ul className="mt-7 space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group top-6 flex items-center gap-2 text-[15px] font-medium text-[var(--foreground)] transition-colors hover:text-amber-500"
                    >
                      <ChevronRight
                        size={14}
                        className=" gap-2 flex top-3 text-[var(--foreground-muted)] transition-transform group-hover:translate-x-1 group-hover:text-amber-500"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* =========================
                QUICK LINKS
            ========================== */}
            <div className="relative top-4">
              <FooterHeading title="Quick Links" />

              <ul className="mt-7 space-y-5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between gap-3 text-[15px] font-medium text-[var(--foreground)] transition-colors hover:text-amber-500"
                    >
                      <span className="flex items-center gap-2">
                        <ChevronRight
                          size={14}
                          className="text-[var(--foreground-muted)] transition-transform group-hover:translate-x-1 group-hover:text-amber-500"
                        />
                        {link.label}
                      </span>

                      {link.external && (
                        <ArrowUpRight
                          size={15}
                          className="text-[var(--foreground-muted)] transition-colors group-hover:text-amber-500"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* =========================
                SERVICES
            ========================== */}
            <div className="relative top-4">
              <FooterHeading title="Services" />

              <div className="mt-7 space-y-4">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.label}
                      className="flex items-center gap-3"
                    >
                      <span
                        className={`relative gap-2 top-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${service.className}`}
                      >
                        <Icon size={17} />
                      </span>

                      <span className="  text-[14px] font-medium top-6 flex text-[var(--foreground)]">
                        {service.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =========================
                LET'S CONNECT
            ========================== */}
            <div className="relative top-4">
              <FooterHeading title="Let's Connect" />

              <p className="mt-7 top-1 relative max-w-[270px] text-[15px] leading-[1.9] text-[var(--foreground-secondary)]">
                Have a project idea or want to collaborate? I&apos;m always open
                to discussing new opportunities.
              </p>

              <a
                href="#contact"
                className="mt-7 relative top-2 inline-flex items-center gap-3 rounded-xl border border-orange-300 bg-orange-500/10 px-5 py-3.5 text-sm font-bold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/20"
              >
                <Send size={17} />
                Send a Message
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="border-t relative top-14 border-[var(--card-border)] px-8 py-7 sm:px-10 lg:px-12 xl:px-14">
          <div className="grid gap-7 lg:grid-cols-[1fr_1fr_auto] lg:items-center">
            {/* Copyright */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />

                <p className="text-sm font-semibold text-[var(--foreground)]">
                  © {new Date().getFullYear()} Owais Usmani. All rights
                  reserved.
                </p>
              </div>

              
            </div>

            {/* Availability */}
            <div className="lg:border-l lg:border-[var(--card-border)] lg:pl-10">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                <p className="text-sm font-bold text-[var(--foreground)]">
                  Available for opportunities
                </p>
              </div>

              <p className="mt-2 text-sm text-[var(--foreground-secondary)]">
                Open to full-time, freelance, and consulting roles.
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-4 lg:justify-end">
              <div className="inline-flex items-center gap-3 rounded-full border border-orange-300 bg-orange-500/5 px-5 py-3 text-sm font-bold text-orange-500">
                <Sun size={17} />
                Crafting Impact Through Code
              </div>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <ArrowUp size={23} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   SECTION HEADING
========================= */

function FooterHeading({ title }: { title: string }) {
  return (
    <div>
      <h4 className="text-[18px] font-bold text-orange-500">{title}</h4>

      <div className="mt-3 h-[2px] w-8 rounded-full bg-orange-500" />
    </div>
  );
}
