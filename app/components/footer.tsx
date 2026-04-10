import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-500">
          &copy; 2025 withlukas. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-xs text-zinc-600">
          <a
            href="https://github.com/LukasT-Ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
          <span>&middot;</span>
          <Link href="/#contact" className="hover:text-[var(--foreground)] transition-colors">
            Contact
          </Link>
          <span>&middot;</span>
          <Link href="/#services" className="hover:text-[var(--foreground)] transition-colors">
            Services
          </Link>
        </div>
      </div>
    </footer>
  );
}
