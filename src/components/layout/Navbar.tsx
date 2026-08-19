"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

const navItems = [
  { label: "About", href: "#about" },
  { label: "What I Build", href: "#what-i-build" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-3 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 origin-left z-50 pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />
      

      <header
        className={`fixed left-0 top-3 z-[60] w-full transition-all duration-300 ${
          scrolled ? "glass-panel py-5" : "bg-transparent py-9"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3.5 text-xl font-extrabold tracking-tight text-[var(--foreground)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Sparkles size={22} />
              </div>
              <span className="font-display font-medium text-2xl tracking-tight">
                Owais<span className="text-amber-500">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 rounded-full border border-[var(--card-border)] bg-[var(--glass-bg)] px-8 py-4 backdrop-blur-md lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-5 py-3 text-sm font-semibold text-[var(--foreground-secondary)] transition-all duration-200 hover:bg-[var(--card-bg-subtle)] hover:text-amber-500"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Action Items */}
            <div className="flex items-center gap-5">
              {/* Status Pill (Desktop) */}
              <div className="hidden items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400 sm:flex">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Available for work
              </div>

              {/* Theme Toggle Button */}
              <button
                type="button"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                onClick={toggleTheme}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] shadow-sm transition-all duration-200 hover:border-amber-500/50 hover:text-amber-500 hover:scale-105 active:scale-95"
              >
                {theme === "dark" ? (
                  <Sun
                    size={20}
                    className="text-amber-400 transition-transform duration-300 hover:rotate-45"
                  />
                ) : (
                  <Moon
                    size={20}
                    className="text-indigo-600 transition-transform duration-300 hover:-rotate-12"
                  />
                )}
              </button>

              {/* CV Button */}
              <a
                href="#contact"
                className="hidden h-12 min-w-[140px] items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-xl hover:shadow-amber-500/40 active:scale-[0.98] sm:inline-flex"
              >
                Hire Me
              </a>

              {/* This native disclosure works even before the client JavaScript loads. */}
              <details className="group relative lg:hidden">
                <summary
                  aria-label="Open navigation menu"
                  className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] [&::-webkit-details-marker]:hidden"
                >
                  <Menu size={22} className="group-open:hidden" />
                  <X size={22} className="hidden group-open:block" />
                </summary>

                <nav className="absolute right-0 top-full z-[70] mt-4 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-[var(--card-border)] bg-[var(--glass-bg)] p-5 shadow-xl backdrop-blur-xl">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="w-full rounded-xl px-4 py-3.5 text-left text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--card-bg-subtle)] hover:text-amber-500"
                      >
                        {item.label}
                      </a>
                    ))}

                    <div className="mt-4 flex gap-2 border-t border-[var(--card-border)] pt-4">
                      <a
                        href="#contact"
                        className="flex-1 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-3.5 text-center text-sm font-bold text-white shadow-md shadow-amber-500/20"
                      >
                        Let&apos;s Talk
                      </a>
                      <a
                        href="/resume/Owais-Usmani-Resume.pdf"
                        download
                        className="inline-flex items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 text-sm font-bold text-[var(--foreground)] transition-colors hover:border-amber-500/60 hover:text-amber-500"
                      >
                        CV
                      </a>
                    </div>
                  </div>
                </nav>
              </details>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
