import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContactForm from "./components/contact-form";

/* ── Project Data ─────────────────────────────────────────── */

type Project = {
  name: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  status: "live" | "active" | "beta" | "coming-soon";
  link?: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    name: "Spectrum Outreach",
    tagline: "B2B email outreach on autopilot",
    description:
      "End-to-end prospecting automation for Spectrum Business Services. AI-powered response classification, automated follow-ups, and a 12-tab management dashboard — all with zero per-email AI cost.",
    category: "Sales Tools",
    tags: ["Email Automation", "AI Classification", "CRM", "Node.js"],
    status: "live",
    link: "https://spectrumoutreach.withlukas.com",
    highlights: [
      "Rule-based classifier handles MEETING_REQUEST, OBJECTION, HARD_NO, and AUTO_REPLY",
      "4-stage follow-up cadence with listening window logic",
      "12-tab Railway-hosted dashboard with real-time analytics",
    ],
  },
  {
    name: "Career Ops",
    tagline: "AI-powered job search engine",
    description:
      "Multi-profile job search automation that scans 18+ sources, evaluates fit with AI scoring, generates tailored CVs, and auto-applies via Greenhouse and Lever APIs. Built for the US and German job markets.",
    category: "Web & App Development",
    tags: ["AI/ML", "Job Search", "PDF Generation", "Multi-Profile"],
    status: "live",
    highlights: [
      "Scans Bundesagentur, USAJobs, LinkedIn, Indeed, StepStone, and 12+ more",
      "Auto-apply engine with Greenhouse API + Lever Playwright integration",
      "Interactive mobile dashboard accessible from anywhere via Tailscale",
    ],
  },
  {
    name: "Performance Tracker",
    tagline: "Manager dashboard in under 3 minutes",
    description:
      "Automated Excel/VBA workbook for rep performance scoring and sales forecasting. Imports manager reports, calculates activity + funnel + attainment scores, and produces instant visual dashboards.",
    category: "Sales Tools",
    tags: ["VBA", "Excel", "Sales Analytics", "Forecasting"],
    status: "live",
    highlights: [
      "Activity (50%) + Funnel (25%) + Attainment (25%) composite scoring",
      "38-sheet workbook with fiscal month cycle (29th-28th)",
      "Forms pipeline: Microsoft Forms to Power Automate to auto-import",
    ],
  },
  {
    name: "RnG Daytrader",
    tagline: "Algorithmic crypto trading bot",
    description:
      "Technical analysis trading bot for Coinbase Advanced Trade. Uses EMA crossover strategy with RSI confirmation and ATR-based position sizing. Max 3x leverage, 1% risk per trade.",
    category: "Web & App Development",
    tags: ["TypeScript", "Crypto", "Trading", "Technical Analysis"],
    status: "beta",
    highlights: [
      "EMA(9/21/50) + RSI + ATR strategy with automated execution",
      "SQLite trade journal with full performance analytics",
      "Risk management: position sizing, stop-loss, and drawdown limits",
    ],
  },
  {
    name: "RNGcrypto",
    tagline: "Trading performance dashboard",
    description:
      "Real-time web dashboard for the RnG Daytrader bot. Dark-mode interface with live P&L, trade history, and strategy performance metrics. Reads directly from the bot's SQLite database.",
    category: "Web & App Development",
    tags: ["Next.js", "React", "SQLite", "Data Visualization"],
    status: "beta",
    link: "https://rngcrypto.com",
    highlights: [
      "Live trade feed with entry/exit visualization",
      "Performance metrics: win rate, Sharpe ratio, max drawdown",
      "Dark-mode design with neon accent palette",
    ],
  },
  {
    name: "Seller Outreach Tool",
    tagline: "Batch email for sales teams",
    description:
      "Excel/VBA-based batch email outreach tool designed for distribution to sales teams. One-click email campaigns with template management, recipient lists, and send tracking.",
    category: "Sales Tools",
    tags: ["VBA", "Excel", "Email", "Sales Enablement"],
    status: "live",
    highlights: [
      "Plug-and-play .xlsm file — no setup or IT involvement",
      "Template library with merge fields and preview",
      "Built for non-technical reps — zero learning curve",
    ],
  },
  {
    name: "Dr. Paulina Kaiser",
    tagline: "Professional medical web presence",
    description:
      "Bilingual (EN/DE) professional website for a physician. Full technical SEO, referral forms, blog system, structured data, and Vercel hosting. Built with Next.js and Tailwind.",
    category: "SEO & Web",
    tags: ["Next.js", "SEO", "Bilingual", "Healthcare"],
    status: "live",
    link: "https://paulinakaiser.com",
    highlights: [
      "Complete SEO: sitemap, robots, JSON-LD schemas, OG images, 301 redirects",
      "Resend email integration for referral form routing",
      "Blog with SVG gradient cover images in English and German",
    ],
  },
  {
    name: "withlukas.com",
    tagline: "This site — SEO-first portfolio",
    description:
      "Dark-mode portfolio and services site with full technical SEO. Dynamic OG image generation, JSON-LD structured data, sitemap, and optimized metadata. Deployed on Vercel with custom domain.",
    category: "SEO & Web",
    tags: ["Next.js", "SEO", "JSON-LD", "OG Images"],
    status: "live",
    link: "https://withlukas.com",
    highlights: [
      "Dynamic OG image generation via Next.js ImageResponse",
      "JSON-LD graph: Organization, WebSite, WebPage, ProfessionalService",
      "Automatic sitemap.xml and robots.txt generation",
    ],
  },
  {
    name: "Smart Intake Pipeline",
    tagline: "Forms to workflow, automatically",
    description:
      "Microsoft Forms to Power Automate to Excel pipeline that captures field data and routes it into automated scoring and reporting workflows. Zero-touch data entry for managers.",
    category: "Workflow Automation",
    tags: ["Power Automate", "Microsoft Forms", "Excel", "Automation"],
    status: "live",
    highlights: [
      "Form submissions auto-land in OneDrive Excel workbook",
      "VBA macro imports and validates on demand",
      "Eliminates manual data entry across the team",
    ],
  },
];

const categories = ["All", "Sales Tools", "Web & App Development", "SEO & Web", "Workflow Automation"];

/* ── Status Badge ─────────────────────────────────────────── */

function StatusBadge({ status }: { status: Project["status"] }) {
  const styles = {
    live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    active: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    beta: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "coming-soon": "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  };
  const labels = { live: "Live", active: "Active", beta: "Beta", "coming-soon": "Coming Soon" };
  return (
    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

/* ── Project Card ─────────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-6 transition-all duration-300 hover:bg-[var(--card-hover)] glow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-zinc-500">{project.tagline}</p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed mb-4">
        {project.description}
      </p>

      <ul className="space-y-1.5 mb-4">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-xs text-zinc-500 flex items-start gap-2">
            <span className="text-blue-500 mt-0.5 shrink-0">&#9656;</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] text-zinc-500 bg-zinc-800/50 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-500 hover:text-blue-400 transition-colors"
          >
            Visit &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

/* ── Stat Card ────────────────────────────────────────────── */

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text">{value}</div>
      <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ── Service Card ─────────────────────────────────────────── */

function ServiceCard({ icon, title, description, href }: { icon: string; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5 hover:bg-[var(--card-hover)] transition-all duration-300 group block">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-xs text-zinc-400 leading-relaxed">{description}</p>
      <span className="text-[10px] text-blue-500 mt-3 inline-block group-hover:text-blue-400">Learn more &rarr;</span>
    </Link>
  );
}

/* ── Main Page ────────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://withlukas.com/#organization",
      name: "withlukas",
      url: "https://withlukas.com",
      logo: "https://www.withlukas.com/logo-square.png",
      image: "https://www.withlukas.com/logo-square.png",
      email: "lamintraore@withlukas.com",
      founder: {
        "@type": "Person",
        name: "Lamin Traoré",
        jobTitle: "Owner & Operator",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.749,
        longitude: -84.388,
      },
      description:
        "Atlanta-based consulting firm specializing in AI-powered automation, custom web and app development, sales technology, telecom consulting, and SEO services for small and medium businesses.",
      knowsAbout: [
        "Sales Automation",
        "Web & App Development",
        "AI Integration",
        "SEO",
        "Workflow Automation",
        "Cybersecurity",
        "Penetration Testing",
        "SOC Monitoring",
        "Cloud Security",
        "Email Outreach",
        "Performance Tracking",
        "Telecommunications Consulting",
        "Unified Communications",
        "MPLS",
        "SD-WAN",
        "Network Security",
        "VoIP Solutions Architecture",
      ],
      areaServed: [
        {
          "@type": "City",
          name: "Atlanta",
          containedInPlace: { "@type": "State", name: "Georgia" },
        },
        { "@type": "State", name: "Georgia" },
        "United States",
        "Germany",
      ],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://withlukas.com/#website",
      url: "https://withlukas.com",
      name: "withlukas",
      publisher: { "@id": "https://withlukas.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://withlukas.com/#webpage",
      url: "https://withlukas.com",
      name: "withlukas | AI-Powered Automation & App Development",
      isPartOf: { "@id": "https://withlukas.com/#website" },
      about: { "@id": "https://withlukas.com/#organization" },
      description:
        "Custom automation tools, AI-powered apps, sales technology, and SEO services built by Lamin Traoré. From email outreach engines to algorithmic trading bots.",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://withlukas.com/#service",
      name: "withlukas",
      provider: { "@id": "https://withlukas.com/#organization" },
      areaServed: [
        {
          "@type": "City",
          name: "Atlanta",
          containedInPlace: { "@type": "State", name: "Georgia" },
        },
        { "@type": "State", name: "Georgia" },
        "United States",
        "Germany",
      ],
      serviceType: [
        "Sales Automation",
        "Web & App Development",
        "AI Integration",
        "Cybersecurity Services",
        "SEO Optimization",
        "Workflow Automation",
        "Telecommunications Consulting",
        "Network & Security Advisory",
        "Unified Communications Strategy",
      ],
      url: "https://withlukas.com",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does withlukas offer in Atlanta, GA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "withlukas offers telecom consulting, sales automation, custom web and app development, AI integration, cybersecurity (penetration testing, SOC monitoring, cloud security), SEO and web presence optimization, and workflow automation for small and medium businesses in Atlanta, Georgia and beyond.",
          },
        },
        {
          "@type": "Question",
          name: "Do you build websites for small businesses in Atlanta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We build professional business websites, landing pages, web applications, and full-stack platforms using modern frameworks like Next.js, React, and TypeScript. Packages start at $1,500 for a website.",
          },
        },
        {
          "@type": "Question",
          name: "How much does automation consulting cost in Atlanta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hourly rates range from $100-$150/hr depending on the service. Project packages start at $750 for an SEO audit and go up to $25,000+ for complex platforms. Monthly retainers start at $500/month for 5-10 hours.",
          },
        },
        {
          "@type": "Question",
          name: "What areas does withlukas serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "withlukas is based in Atlanta, GA and serves small and medium businesses throughout Georgia, the United States, and internationally including Germany. Most services can be delivered remotely.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 text-xs text-zinc-500 bg-[var(--card)] border border-[var(--card-border)] rounded-full px-4 py-1.5">
            Atlanta, GA &middot; Automation &middot; Web Development &middot; AI Consulting
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Build smarter.<br />
            <span className="gradient-text">Ship faster.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Atlanta-based consulting for small and medium businesses.
            Automation, custom websites & apps, AI integration, telecom advisory, and SEO — if it can be
            automated, optimized, or built better, we build it.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#work" className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
              See Our Work
            </a>
            <a href="#contact" className="border border-[var(--card-border)] hover:border-zinc-600 text-[var(--foreground)] px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Start a Project
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard value="9+" label="Tools Built" />
          <StatCard value="18+" label="Data Sources" />
          <StatCard value="1000s" label="Hours Saved" />
          <StatCard value="2" label="Countries" />
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What We&apos;ve Built</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Every tool solves a real problem. No hypotheticals — these are live systems
              running in production, saving time and generating results today.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`text-xs px-3 py-1.5 rounded-full cursor-default transition-colors ${
                  cat === "All"
                    ? "bg-blue-500 text-white"
                    : "bg-[var(--card)] border border-[var(--card-border)] text-zinc-500 hover:text-[var(--foreground)]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What We Do</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              We build tools that eliminate repetitive work, surface the right data,
              and let you focus on what actually matters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              icon="&#128222;"
              title="Telecom Consulting"
              description="Voice, data, network, and security advisory. 15+ years inside AT&T and Spectrum Enterprise — now helping businesses make smarter infrastructure decisions."
              href="/services/telecom-consulting"
            />
            <ServiceCard
              icon="&#9889;"
              title="Sales Automation"
              description="Email outreach engines, follow-up sequences, response classification, CRM dashboards. Turn prospecting into a system, not a chore."
              href="/services/sales-automation"
            />
            <ServiceCard
              icon="&#128187;"
              title="Web & App Development"
              description="Websites, web apps, dashboards, and custom tools built with modern frameworks. From business websites to full-stack platforms — production-ready from day one."
              href="/services/app-development"
            />
            <ServiceCard
              icon="&#129302;"
              title="AI Integration"
              description="Smart classification, scoring, evaluation, and content generation. AI that does the heavy lifting while you make the decisions."
              href="/services/ai-integration"
            />
            <ServiceCard
              icon="&#128274;"
              title="Cybersecurity"
              description="Penetration testing, 24/7 SOC monitoring, cloud and network security, incident response, and compliance — scaled from small offices to enterprise."
              href="/services/cybersecurity"
            />
            <ServiceCard
              icon="&#128270;"
              title="SEO & Web Presence"
              description="Technical SEO, structured data, sitemap generation, OG images, and bilingual content. Get found by the right people on Google."
              href="/services/seo-web-presence"
            />
            <ServiceCard
              icon="&#9881;"
              title="Workflow Automation"
              description="Microsoft Forms, Power Automate, Excel/VBA, cron jobs, and custom pipelines. Connect your tools and eliminate manual data entry."
              href="/services/workflow-automation"
            />
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="py-20 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">About</h2>
              <p className="text-zinc-500 text-sm">The person behind the tools</p>
            </div>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                <a href="https://www.lamintraore.com" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-blue-400 transition-colors"><strong>Lamin Traor&eacute;</strong></a> is the owner and operator of withlukas.
                Based in Atlanta, GA with deep ties to Germany, Lamin builds automation
                tools that solve real problems across sales, career management, healthcare,
                finance, and operations.
              </p>
              <p>
                Every project here started the same way: a manual process that took too long,
                cost too much, or broke too often. The philosophy is simple — if you&apos;re doing
                something repeatedly, it should be a system. If a system exists, it should be
                fast, reliable, and smart enough to handle edge cases.
              </p>
              <p>
                The stack is whatever gets the job done: Node.js and TypeScript for backend
                automation, Next.js and React for web interfaces, Python for data work, VBA
                for enterprise Excel tools, and AI (Claude, GPT) integrated wherever it adds
                real value — not as a gimmick, but as a force multiplier.
              </p>
              <p className="text-sm text-zinc-500">
                Operating across the US and German markets. Bilingual (EN/DE).
                <a href="https://www.lamintraore.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 ml-1">lamintraore.com &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto">
          <ContactForm
            heading="Let's Build Something"
            subheading="Have a process that needs automating? A tool that needs building? A website that needs a refresh? A workflow that's eating your team's time? Let's talk."
          />
          <p className="text-xs text-zinc-600 mt-4 text-center">Atlanta, GA &middot; Available for consulting and custom builds</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
