"use client";

import { useEffect, useState } from "react";
import { Sparkles, Mail, ArrowUp } from "lucide-react";

function LinkedInIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

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
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--background-subtle)] text-[var(--foreground)] transition-colors">
      <div className="container py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:items-start">
          {/* Brand Col */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight text-[var(--foreground)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20">
                <Sparkles size={18} />
              </div>
              <span>
                Owais<span className="text-amber-500">.</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--foreground-secondary)]">
              AI Systems &amp; Full-Stack Developer specializing in agentic workflows, automation pipelines, and modern web applications.
            </p>

            {/* Live IST Time */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-3.5 py-2 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[var(--foreground-muted)]">Delhi NCR, India:</span>
              <span className="font-bold text-[var(--foreground)]">{currentTime || "Loading..."} IST</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)]">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-[var(--foreground-secondary)]">
              <li>
                <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
              </li>
              <li>
                <a href="#what-i-build" className="hover:text-amber-500 transition-colors">What I Build</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-500 transition-colors">Skills &amp; Toolkit</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-500 transition-colors">Selected Projects</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-amber-500 transition-colors">Philosophy</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect & Actions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-muted)]">
              Connect
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:owaisusmani436@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2.5 text-xs font-bold text-[var(--foreground)] transition-all hover:border-amber-500 hover:text-amber-500"
              >
                <Mail size={15} />
                owaisusmani436@gmail.com
              </a>

              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] transition-all hover:bg-blue-500 hover:text-white hover:scale-105"
                >
                  <LinkedInIcon size={18} />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] transition-all hover:bg-indigo-600 hover:text-white hover:scale-105"
                >
                  <GitHubIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--card-border)] pt-8 text-xs text-[var(--foreground-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Owais Usmani. Crafted with precision &amp; care.</p>
          <p className="flex items-center gap-1">
            Built with Next.js 16 · TypeScript · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
