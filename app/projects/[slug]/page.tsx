import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { projects } from "../data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | withlukas`,
    description: project.description,
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.description,
      url: `https://withlukas.com/projects/${project.slug}`,
    },
  };
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    active: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    beta: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "coming-soon": "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  };
  const labels: Record<string, string> = {
    live: "Live",
    active: "Active",
    beta: "Beta",
    "coming-soon": "Coming Soon",
  };
  return (
    <span
      className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${styles[status] || styles.active}`}
    >
      {labels[status] || status}
    </span>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { detail } = project;
  const visitLink = project.link || project.externalLink;

  return (
    <main className="grid-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <StatusBadge status={project.status} />
            <span className="text-xs text-zinc-500">{project.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
            {project.name}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full text-zinc-400 bg-zinc-800/50 border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            {visitLink && (
              <a
                href={visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                {project.externalLink ? "Visit Platform" : "Visit Site"} &rarr;
              </a>
            )}
            <Link
              href="/#contact"
              className="border border-[var(--card-border)] hover:border-zinc-600 text-[var(--foreground)] px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Build Something Similar
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      {detail.stats.length > 0 && (
        <section className="py-12 px-6 border-y border-[var(--card-border)]">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {detail.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {s.value}
                </div>
                <div className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Problem / Solution */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-400/80 mb-4">
              The Problem
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              {detail.problem}
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-950/40 via-[var(--card)] to-purple-950/30 border border-blue-500/20 rounded-2xl p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400/80 mb-4">
              The Solution
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              {detail.solution}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            How It Works
          </h2>
          <div
            className={`grid sm:grid-cols-2 ${detail.architecture.length >= 4 ? "lg:grid-cols-3" : ""} gap-4`}
          >
            {detail.architecture.map((section, i) => (
              <div
                key={section.title}
                className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 hover:bg-[var(--card-hover)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-blue-500/60 bg-blue-500/10 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {section.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {detail.features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5"
              >
                <span className="text-blue-500 mt-0.5 shrink-0">
                  &#10003;
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Tech Stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {detail.techStack.map((t) => (
              <div
                key={t.name}
                className="bg-[var(--card)] border border-[var(--card-border)] rounded-lg px-4 py-3 flex items-center gap-3"
              >
                <span className="text-xs font-semibold text-[var(--foreground)] whitespace-nowrap">
                  {t.name}
                </span>
                <span className="text-[10px] text-zinc-500">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-8 md:p-12 glow">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need something like this?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-6">
              Every project starts with a conversation. Tell us the problem and
              we&apos;ll figure out the build.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/#contact"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/#work"
                className="border border-[var(--card-border)] hover:border-zinc-600 text-[var(--foreground)] px-6 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
