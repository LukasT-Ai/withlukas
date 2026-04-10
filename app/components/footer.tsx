import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)] mb-1">withlukas</p>
            <p className="text-xs text-zinc-500">Automation, Web Development & AI Consulting</p>
            <p className="text-xs text-zinc-600 mt-2">Atlanta, GA</p>
            <p className="text-xs text-zinc-600">Serving Atlanta, Georgia & beyond</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-xs font-medium text-zinc-400 mb-2">Services</p>
              <div className="flex flex-col gap-1.5">
                <Link href="/services/telecom-consulting" className="text-xs text-zinc-600 hover:text-[var(--foreground)] transition-colors">Telecom Consulting</Link>
                <Link href="/services/sales-automation" className="text-xs text-zinc-600 hover:text-[var(--foreground)] transition-colors">Sales Automation</Link>
                <Link href="/services/app-development" className="text-xs text-zinc-600 hover:text-[var(--foreground)] transition-colors">Web & App Development</Link>
                <Link href="/services/ai-integration" className="text-xs text-zinc-600 hover:text-[var(--foreground)] transition-colors">AI Integration</Link>
                <Link href="/services/seo-web-presence" className="text-xs text-zinc-600 hover:text-[var(--foreground)] transition-colors">SEO & Web Presence</Link>
                <Link href="/services/workflow-automation" className="text-xs text-zinc-600 hover:text-[var(--foreground)] transition-colors">Workflow Automation</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-400 mb-2">Company</p>
              <div className="flex flex-col gap-1.5">
                <Link href="/pricing" className="text-xs text-zinc-600 hover:text-[var(--foreground)] transition-colors">Pricing</Link>
                <Link href="/#work" className="text-xs text-zinc-600 hover:text-[var(--foreground)] transition-colors">Our Work</Link>
                <Link href="/#about" className="text-xs text-zinc-600 hover:text-[var(--foreground)] transition-colors">About</Link>
                <Link href="/#contact" className="text-xs text-zinc-600 hover:text-[var(--foreground)] transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--card-border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} withlukas. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Atlanta, GA &middot; (404) 234-0448
          </p>
        </div>
      </div>
    </footer>
  );
}
