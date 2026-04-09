"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "Telecom Consulting", href: "/services/telecom-consulting" },
  { name: "Sales Automation", href: "/services/sales-automation" },
  { name: "App Development", href: "/services/app-development" },
  { name: "AI Integration", href: "/services/ai-integration" },
  { name: "SEO & Web Presence", href: "/services/seo-web-presence" },
  { name: "Workflow Automation", href: "/services/workflow-automation" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[var(--foreground)] tracking-tight">
          <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8 L11 23 L16 14 L21 23 L26 8" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="6.5" r="1.8" fill="#3B82F6"/>
          </svg>
          <span>with<span className="text-[#93C5FD] font-normal">lukas</span></span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="/#work" className="text-zinc-500 hover:text-[var(--foreground)] transition-colors">
            Work
          </a>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <a
              href="/#services"
              className="text-zinc-500 hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {open && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-2 shadow-2xl min-w-[220px]">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2 text-xs text-zinc-400 hover:text-[var(--foreground)] hover:bg-[var(--card-hover)] rounded-lg transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/#about" className="text-zinc-500 hover:text-[var(--foreground)] transition-colors">
            About
          </a>
          <a
            href="/#contact"
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-1.5 rounded-lg text-xs font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-400 hover:text-[var(--foreground)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--card)] border-t border-[var(--card-border)] px-6 py-4 space-y-1">
          <a href="/#work" className="block py-2 text-sm text-zinc-400 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
            Work
          </a>
          <div className="py-2">
            <span className="text-sm text-zinc-500 font-medium">Services</span>
            <div className="mt-1 ml-3 space-y-1">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block py-1.5 text-xs text-zinc-400 hover:text-[var(--foreground)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <a href="/#about" className="block py-2 text-sm text-zinc-400 hover:text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
            About
          </a>
          <a
            href="/#contact"
            className="block mt-2 text-center bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
