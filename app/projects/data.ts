export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  status: "live" | "active" | "beta" | "coming-soon";
  link?: string;
  externalLink?: string;
  highlights: string[];
  featured?: boolean;
  detail: ProjectDetail;
};

type ProjectDetail = {
  problem: string;
  solution: string;
  architecture: ArchSection[];
  stats: { value: string; label: string }[];
  techStack: { name: string; role: string }[];
  features: { title: string; description: string }[];
};

type ArchSection = {
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "ascend-trading-agent",
    name: "Ascend Trading Agent",
    tagline: "Autonomous prediction market trader",
    description:
      "Fully autonomous trading agent for Ascend Market — event perpetuals on Cardano. Evaluates 21+ prediction markets using 14 independent data sources, enters and exits positions automatically with portfolio-percentage sizing, and runs 24/7 with Telegram control.",
    category: "Trading & Finance",
    tags: ["Node.js", "14 Data Sources", "Cardano", "Telegram Bot", "AI Trading"],
    status: "live",
    externalLink: "https://www.ascend.market/",
    featured: true,
    highlights: [
      "14-source evaluation engine: Coinbase, Binance, Pyth, Polymarket, Kalshi, ESPN, FRED, and 7 more",
      "Portfolio-percentage sizing scales with account balance, edge strength, and confidence",
      "Smart risk engine: trailing stops, edge-flip exits, market expiry detection, scale-into-winners",
      "Win rate feedback loop auto-tunes strategy thresholds after 10+ trades per profile",
    ],
    detail: {
      problem:
        "Prediction markets like Ascend on Cardano offer perpetual event contracts across crypto, commodities, stocks, and sports. Markets expire every few minutes, requiring rapid evaluation and execution. No human can monitor 21+ markets simultaneously, pull data from 14 sources, calculate edge, size positions, and manage risk in real time.",
      solution:
        "A fully autonomous agent that runs 24/7, evaluating every active market against 14 independent data feeds, entering positions when edge exceeds asset-specific thresholds, and managing risk with trailing stops, edge-flip exits, and sentiment-reactive closes. Controlled entirely via Telegram with natural language commands.",
      architecture: [
        {
          title: "14-Source Evaluation Engine",
          description:
            "Pulls live data from Coinbase, Binance, Pyth Network, CoinGecko, TapTools, Yahoo Finance, Polymarket, Kalshi, The Odds API, ESPN, Guardian, Currents, Newsdata, and FRED. Each source independently contributes to an edge calculation with confidence scoring.",
        },
        {
          title: "Sniper System",
          description:
            "Scans markets within a 2-minute expiry window, enters at 60 seconds (90 seconds for high confidence). Uses rolling reference prices from prior market settlements. Detects flip opportunities when price crosses the reference while positioned on the wrong side.",
        },
        {
          title: "Risk Engine",
          description:
            "Take profit at +15%, stop loss at -10%, trailing stop activates at +8% and trails by 5%. Monitors crowd sentiment shifts and edge decay for early exits. Settlement detection handles market expiry automatically.",
        },
        {
          title: "Velocity Spike Detector",
          description:
            "Monitors external feed prices every 10 seconds. Detects abnormal price acceleration (5x normal rate) before the Ascend crowd reacts. Automatically closes wrong-side positions and re-enters on the spike direction.",
        },
        {
          title: "Cross-Market Momentum",
          description:
            "Tracks correlated asset groups (crypto, metals, stocks, energy) and inverse pairs (crypto vs metals). When 2+ correlated assets settle in the same direction, boosts confidence for remaining assets in the group.",
        },
        {
          title: "Crowd Intelligence",
          description:
            "Polls orderbook depth and yes/no percentages every 30 seconds for all active markets. Detects sentiment shifts (6+ point swings) to trigger profit-taking and contrarian re-entries.",
        },
      ],
      stats: [
        { value: "14", label: "Data Sources" },
        { value: "21+", label: "Markets Monitored" },
        { value: "24/7", label: "Uptime" },
        { value: "10s", label: "Scan Interval" },
      ],
      techStack: [
        { name: "Node.js (ESM)", role: "Runtime and core agent logic" },
        { name: "SQLite", role: "Trade journal, evaluations, sentiment history" },
        { name: "Telegram Bot API", role: "Remote control, alerts, and veto system" },
        { name: "PM2", role: "Process management and auto-restart" },
        { name: "Pyth Network", role: "Oracle prices for stocks and commodities" },
        { name: "Polymarket + Kalshi", role: "Prediction market consensus pricing" },
      ],
      features: [
        {
          title: "Portfolio-Percentage Sizing",
          description:
            "Position sizes scale with account balance, edge strength, and confidence tier. Kelly criterion with adjustment caps prevents overexposure on any single trade.",
        },
        {
          title: "Auto-Tune Feedback Loop",
          description:
            "After 10+ trades per market profile, the agent auto-adjusts edge thresholds, sizing multipliers, and entry timing based on realized win rates and PnL.",
        },
        {
          title: "Telegram Control Center",
          description:
            "Full bot interface: /status, /positions, /accuracy, /trade, /close, /autotrader, /momentum, /velocity. Supports natural language queries and a 60-second veto window for auto-entries.",
        },
        {
          title: "Ghost Position Recovery",
          description:
            "When the exchange settles a position but the API returns 500, the agent tracks it as a ghost position in SQLite. Ghosts are excluded from re-discovery and auto-cleaned after 24 hours.",
        },
        {
          title: "Orderbook Surge Detection",
          description:
            "Detects rapid shifts in orderbook imbalance or mark price momentum between snapshots. Feeds into confidence scoring to boost or drag entry decisions.",
        },
        {
          title: "Graceful Shutdown",
          description:
            "On SIGINT/SIGTERM, sends a Telegram notification listing all open positions before exiting. No silent crashes or orphaned positions.",
        },
      ],
    },
  },
  {
    slug: "spectrum-outreach",
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
    detail: {
      problem:
        "B2B sales teams spend 60%+ of their time on manual prospecting: finding contacts, writing emails, tracking replies, and managing follow-ups. Each missed follow-up is a lost opportunity. Response classification requires reading every reply and deciding the next action — a task that doesn't scale.",
      solution:
        "A fully automated outreach pipeline that sends personalized initial emails, classifies every response using rule-based logic (zero AI cost per email), routes replies to the correct follow-up sequence, and surfaces everything in a 12-tab management dashboard with real-time analytics.",
      architecture: [
        {
          title: "Response Classification Engine",
          description:
            "Rule-based classifier that categorizes replies into MEETING_REQUEST, OBJECTION (with sub-types like VENDOR, BUDGET, TIMING), HARD_NO, and AUTO_REPLY. Strips quoted email content before analysis to avoid false matches.",
        },
        {
          title: "Follow-Up Cadence",
          description:
            "4-stage follow-up sequence (FU1-FU4) with 2 business day spacing. After FU4 completes, enters a 7-day wait period, then LISTENING_WINDOW, then STALLED. Each stage has locked templates that avoid AI-detection markers.",
        },
        {
          title: "Reply Monitor",
          description:
            "Polls for new replies every 45 minutes in production (1 minute in test). Routes each classified response to the appropriate handler: meeting requests CC the manager, objections trigger tailored ARA responses, hard nos stop all outreach.",
        },
        {
          title: "Management Dashboard",
          description:
            "12-tab Railway-hosted dashboard with campaign analytics, response rates, pipeline status, template management, prospect lists, and real-time activity feeds. Accessible from any device.",
        },
      ],
      stats: [
        { value: "12", label: "Dashboard Tabs" },
        { value: "$0", label: "Per-Email AI Cost" },
        { value: "4", label: "Follow-Up Stages" },
        { value: "45m", label: "Reply Check Cycle" },
      ],
      techStack: [
        { name: "Node.js", role: "Backend automation and email processing" },
        { name: "Gmail API", role: "Send, receive, and thread management" },
        { name: "Railway", role: "Dashboard hosting and background workers" },
        { name: "SQLite", role: "Prospect data, campaign state, analytics" },
      ],
      features: [
        {
          title: "Zero Per-Email AI Cost",
          description:
            "Response classification is entirely rule-based. No LLM calls per email means the system scales to thousands of prospects without variable costs.",
        },
        {
          title: "Objection Handling",
          description:
            "9 objection sub-types (Vendor, Budget, Timing, Authority, Need, Trust, etc.) each trigger specific, pre-approved response templates.",
        },
        {
          title: "Thread-Safe Email Threading",
          description:
            "Uses RFC Message-ID (not Gmail ID) for In-Reply-To headers and builds full References chains from thread history for proper email client threading.",
        },
        {
          title: "Locked Templates",
          description:
            "Email templates and subject lines are locked in the system — no dashes or hyphens (AI detection signal). Content is pre-approved and tested for deliverability.",
        },
      ],
    },
  },
  {
    slug: "career-ops",
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
    detail: {
      problem:
        "Job searching across two countries (US and Germany) means checking 18+ job boards daily, each with different formats, languages, and application systems. Manually evaluating fit, tailoring CVs, and submitting applications takes hours per day and still misses opportunities.",
      solution:
        "An automated engine that scans all 18+ sources on a schedule, scores each listing for fit using AI evaluation, generates tailored CVs per posting, and auto-applies through Greenhouse and Lever APIs. Supports multiple candidate profiles with separate search criteria.",
      architecture: [
        {
          title: "Multi-Source Scanner",
          description:
            "Crawls Bundesagentur, USAJobs, LinkedIn, Indeed, StepStone, Glassdoor, and 12+ more. Each source has a dedicated adapter that normalizes listings into a common schema.",
        },
        {
          title: "AI Fit Scoring",
          description:
            "Each listing is evaluated against the active profile's experience, skills, and preferences. Scores determine which listings surface in the digest and which trigger auto-apply.",
        },
        {
          title: "Auto-Apply Engine",
          description:
            "Greenhouse API integration for direct submission. Lever uses Playwright browser automation. Both generate tailored CVs and cover letters per posting.",
        },
        {
          title: "Multi-Profile System",
          description:
            "Supports multiple candidate profiles with separate search locations, skills, experience levels, and preferences. Switch active profile via configuration file.",
        },
      ],
      stats: [
        { value: "18+", label: "Job Sources" },
        { value: "2", label: "Countries" },
        { value: "100s", label: "Listings/Day" },
        { value: "2", label: "Active Profiles" },
      ],
      techStack: [
        { name: "Node.js", role: "Core automation engine" },
        { name: "Playwright", role: "Browser automation for Lever and other ATS" },
        { name: "Go", role: "High-performance PDF generation" },
        { name: "Claude AI", role: "Fit scoring and CV tailoring" },
      ],
      features: [
        {
          title: "Bilingual Support",
          description:
            "Handles both English (US) and German job markets natively. CVs and cover letters generated in the correct language per listing.",
        },
        {
          title: "Daily Digest",
          description:
            "Aggregated report of all new matches, scored and ranked. Never uses stale data — always builds fresh from the latest scan.",
        },
        {
          title: "Mobile Dashboard",
          description:
            "Interactive web interface accessible from any device via Tailscale. Review matches, trigger applications, and manage profiles on the go.",
        },
        {
          title: "Greenhouse + Lever Integration",
          description:
            "Direct API submission for Greenhouse-powered companies. Playwright automation for Lever and other ATS platforms that lack public APIs.",
        },
      ],
    },
  },
  {
    slug: "performance-tracker",
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
    detail: {
      problem:
        "Sales managers spend hours every week manually pulling reports, cross-referencing activity data, calculating scores, and building dashboards. The process is error-prone, inconsistent, and takes time away from actually coaching reps.",
      solution:
        "A 38-sheet Excel/VBA workbook that imports raw manager reports, automatically calculates composite performance scores, generates visual dashboards, and produces forecasts — all in under 3 minutes with one button click. Runs entirely in Microsoft 365 with no external dependencies.",
      architecture: [
        {
          title: "Composite Scoring Engine",
          description:
            "Activity (50%) + Funnel (25%) + Attainment (25%) weighted scoring. Green >= 80, Yellow 60-79, Red < 60. Role-specific quotas for EAM, EAE, and Launch reps.",
        },
        {
          title: "Fiscal Month Alignment",
          description:
            "All calculations align to the 29th-to-28th fiscal month cycle, not calendar months. Automatically handles month boundaries, partial weeks, and YTD aggregation from 2023-2026.",
        },
        {
          title: "Forms Pipeline",
          description:
            "Microsoft Forms captures field data, Power Automate routes submissions to OneDrive Excel, and a VBA macro imports and validates on demand. Zero manual data entry.",
        },
        {
          title: "Sales Cascade Forecasting",
          description:
            "Automatically rolls up rep-level forecasts to team-level. Handles ramping reps with adjusted quotas. Auto-removes forecast entries when deals close.",
        },
      ],
      stats: [
        { value: "38", label: "Worksheets" },
        { value: "<3min", label: "Full Refresh" },
        { value: "6", label: "VBA Modules" },
        { value: "4yr", label: "YTD History" },
      ],
      techStack: [
        { name: "VBA", role: "All automation, scoring, and dashboard logic" },
        { name: "Excel 365", role: "Workbook platform with macro support" },
        { name: "Power Automate", role: "Forms-to-Excel data pipeline" },
        { name: "Microsoft Forms", role: "Field data collection interface" },
      ],
      features: [
        {
          title: "One-Click Import",
          description:
            "Imports raw manager reports and recalculates all scores, rankings, and dashboards in a single button press. No manual copy-pasting or formula dragging.",
        },
        {
          title: "Role-Specific Quotas",
          description:
            "EAM ($2,650/wk funnel), EAE ($2,500/wk funnel), Launch (no funnel). Ramping reps get adjusted targets. Team total quota: $12,240/month.",
        },
        {
          title: "Visual Dashboards",
          description:
            "Color-coded performance grids, trend charts, and ranking tables. Toggle between individual rep and team-level views without changing the underlying structure.",
        },
        {
          title: "Zero Dependencies",
          description:
            "Pure VBA — no plugins, no external services, no internet required. Works on any corporate laptop with Microsoft 365 and macros enabled.",
        },
      ],
    },
  },
  {
    slug: "rng-daytrader",
    name: "RnG Daytrader",
    tagline: "Algorithmic crypto trading bot",
    description:
      "Technical analysis trading bot for Coinbase Advanced Trade. Uses EMA crossover strategy with RSI confirmation and ATR-based position sizing. Max 3x leverage, 1% risk per trade.",
    category: "Trading & Finance",
    tags: ["TypeScript", "Crypto", "Trading", "Technical Analysis"],
    status: "beta",
    highlights: [
      "EMA(9/21/50) + RSI + ATR strategy with automated execution",
      "SQLite trade journal with full performance analytics",
      "Risk management: position sizing, stop-loss, and drawdown limits",
    ],
    detail: {
      problem:
        "Manual crypto trading requires constant screen time, emotional discipline, and consistent execution. Missed entries, late exits, and position sizing errors compound over time. Most retail traders underperform because they can't execute their own strategy consistently.",
      solution:
        "A fully automated trading bot that executes a defined technical analysis strategy on Coinbase Advanced Trade. Uses EMA crossovers for direction, RSI for confirmation, and ATR for dynamic position sizing. Every trade is journaled with full performance analytics.",
      architecture: [
        {
          title: "Signal Engine",
          description:
            "EMA(9/21/50) crossover system with RSI confirmation. The fast EMA crossing above the slow EMA with RSI below 70 triggers a long entry. Reverse for shorts. The 50 EMA acts as trend filter.",
        },
        {
          title: "Position Sizing",
          description:
            "ATR-based dynamic sizing limits risk to 1% of account per trade. Position size adjusts automatically with volatility — larger in calm markets, smaller in volatile ones. Max 3x leverage cap.",
        },
        {
          title: "Execution Layer",
          description:
            "Direct integration with Coinbase Advanced Trade API via ccxt. Handles order placement, fill confirmation, and position tracking. All operations use decimal.js for precision arithmetic.",
        },
        {
          title: "Trade Journal",
          description:
            "Every entry, exit, and position update is logged to SQLite. Full performance analytics including win rate, Sharpe ratio, max drawdown, and per-trade PnL history.",
        },
      ],
      stats: [
        { value: "3x", label: "Max Leverage" },
        { value: "1%", label: "Risk Per Trade" },
        { value: "3", label: "EMA Periods" },
        { value: "24/7", label: "Market Coverage" },
      ],
      techStack: [
        { name: "TypeScript", role: "Type-safe core logic" },
        { name: "ccxt", role: "Exchange API abstraction" },
        { name: "better-sqlite3", role: "Trade journal and analytics" },
        { name: "decimal.js", role: "Precision financial math" },
      ],
      features: [
        {
          title: "EMA Crossover Strategy",
          description:
            "Triple EMA system (9/21/50) provides clear entry and exit signals. Fast and slow crossovers generate trades; the 50-period EMA filters for overall trend direction.",
        },
        {
          title: "ATR-Based Risk Management",
          description:
            "Average True Range determines stop-loss distance and position size. Volatile markets get smaller positions automatically, keeping dollar risk constant.",
        },
        {
          title: "Performance Analytics",
          description:
            "Real-time win rate, Sharpe ratio, max drawdown, profit factor, and per-trade breakdown. All metrics queryable from the command line or web dashboard.",
        },
        {
          title: "Drawdown Circuit Breaker",
          description:
            "Automatically pauses trading when drawdown exceeds configurable thresholds. Prevents catastrophic loss spirals during adverse market conditions.",
        },
      ],
    },
  },
  {
    slug: "rngcrypto",
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
    detail: {
      problem:
        "Trading bots generate data constantly, but raw logs and database queries aren't useful for quick decision-making. You need a visual interface that shows what matters: are you making money, is the strategy working, and should you intervene?",
      solution:
        "A purpose-built dark-mode web dashboard that reads directly from the trading bot's SQLite database. Shows live P&L, trade history with entry/exit markers, strategy performance metrics, and real-time position status — all auto-refreshing.",
      architecture: [
        {
          title: "Direct Database Read",
          description:
            "The dashboard reads the trading bot's SQLite database directly. No API layer, no sync delay. The data you see is the data the bot is acting on.",
        },
        {
          title: "Real-Time Metrics",
          description:
            "Win rate, Sharpe ratio, max drawdown, profit factor, and cumulative P&L — all calculated server-side and streamed to the client with auto-refresh.",
        },
        {
          title: "Trade Visualization",
          description:
            "Live feed of trades with entry/exit prices, side indicators, PnL per trade, and time-in-position. Color-coded for instant profit/loss identification.",
        },
      ],
      stats: [
        { value: "0ms", label: "Data Sync Delay" },
        { value: "5+", label: "Performance Metrics" },
        { value: "24/7", label: "Live Updates" },
      ],
      techStack: [
        { name: "Next.js 16", role: "Full-stack framework" },
        { name: "React 19", role: "UI components" },
        { name: "Tailwind 4", role: "Dark-mode styling" },
        { name: "better-sqlite3", role: "Direct database access" },
      ],
      features: [
        {
          title: "Dark-Mode Native",
          description:
            "Built for dark environments with a neon green (#00FF88) accent for profits and red (#FF3B5C) for losses. Designed for quick scanning, not reading.",
        },
        {
          title: "Live Trade Feed",
          description:
            "Every trade shows entry price, exit price, side, leverage, PnL in dollars and percent, and hold duration. Auto-refreshes without page reload.",
        },
        {
          title: "Strategy Health Monitor",
          description:
            "Tracks whether the bot's strategy is performing within expected parameters. Alerts when drawdown exceeds thresholds or win rate drops below baseline.",
        },
      ],
    },
  },
  {
    slug: "seller-outreach-tool",
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
    detail: {
      problem:
        "Sales reps need to send personalized batch emails but don't have access to expensive email platforms. IT won't approve new software. The solution needs to work on any corporate laptop with just Excel and Outlook — no installs, no admin rights, no training.",
      solution:
        "A single .xlsm file that reps open, paste their contact list, pick a template, preview the merge, and hit send. Built entirely in VBA with no external dependencies. Distributable via email (zipped to bypass Gmail's .bas filter).",
      architecture: [
        {
          title: "Template Engine",
          description:
            "Merge field system that replaces {{FirstName}}, {{Company}}, and other tokens in email templates. Preview pane shows exactly what each recipient will receive before sending.",
        },
        {
          title: "Send Engine",
          description:
            "Uses Outlook COM automation to send emails through the rep's own mailbox. Tracks send status per recipient with timestamps and delivery confirmation.",
        },
        {
          title: "Contact Manager",
          description:
            "Paste-in contact lists with automatic deduplication, validation, and column mapping. Handles messy data gracefully — no reformatting required.",
        },
      ],
      stats: [
        { value: "0", label: "Setup Steps" },
        { value: "1", label: "File to Distribute" },
        { value: "0", label: "External Dependencies" },
        { value: "<1min", label: "Time to First Send" },
      ],
      techStack: [
        { name: "VBA", role: "All automation logic" },
        { name: "Excel 365", role: "Interface and data management" },
        { name: "Outlook COM", role: "Email sending via rep's account" },
      ],
      features: [
        {
          title: "Zero IT Involvement",
          description:
            "No software to install, no admin rights needed, no API keys. If the rep has Excel and Outlook, they can send campaigns within 60 seconds of opening the file.",
        },
        {
          title: "Template Library",
          description:
            "Pre-built templates with merge fields. Reps select a template, preview the personalized version, and send. No writing or formatting required.",
        },
        {
          title: "Send Tracking",
          description:
            "Every email is logged with timestamp, recipient, template used, and delivery status. Managers can see who sent what and when.",
        },
        {
          title: "Safe Distribution",
          description:
            "Delivered as a zipped .xlsm to bypass Gmail's .bas attachment filter. Includes step-by-step setup instructions for non-technical users.",
        },
      ],
    },
  },
  {
    slug: "paulina-kaiser",
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
    detail: {
      problem:
        "Physicians need a professional web presence that establishes credibility, handles patient referrals, supports multiple languages, and ranks well on Google — but most medical websites are template-based, slow, and lack proper SEO.",
      solution:
        "A custom-built bilingual website with complete technical SEO (JSON-LD, OG images, structured data), a referral form with email routing, and a blog system with hand-crafted SVG cover images in both English and German. Hosted on Vercel for instant global delivery.",
      architecture: [
        {
          title: "Bilingual Content System",
          description:
            "Full English and German versions of all content. Blog posts published in both languages with language-specific routing. Metadata and structured data adapted per language.",
        },
        {
          title: "SEO Infrastructure",
          description:
            "Complete technical SEO: auto-generated sitemap.xml, robots.txt, JSON-LD schemas (Person, MedicalBusiness, Article), OpenGraph images, canonical URLs, and 301 redirects for old paths.",
        },
        {
          title: "Referral Form",
          description:
            "Patient referral form with Resend email integration. Submissions route to the admin email with all form data formatted for quick review.",
        },
        {
          title: "Blog System",
          description:
            "Markdown-based blog with dynamic routing. Each post gets an SVG gradient cover image generated with dark theme styling. Published in both EN and DE.",
        },
      ],
      stats: [
        { value: "2", label: "Languages" },
        { value: "100", label: "Lighthouse Score" },
        { value: "5+", label: "JSON-LD Schemas" },
        { value: "<1s", label: "Load Time" },
      ],
      techStack: [
        { name: "Next.js 16", role: "Full-stack framework with SSG" },
        { name: "React 19", role: "UI components" },
        { name: "Tailwind 4", role: "Responsive styling" },
        { name: "Resend", role: "Email delivery for referral forms" },
        { name: "Vercel", role: "Global CDN hosting and deployment" },
      ],
      features: [
        {
          title: "Complete Technical SEO",
          description:
            "Sitemap, robots.txt, JSON-LD structured data, OG images, canonical URLs, 301 redirects, and sameAs links. Built for Google ranking from day one.",
        },
        {
          title: "Referral Form with Email Routing",
          description:
            "Secure patient referral form that routes submissions to Admin@paulinakaiser.com via Resend. Domain-verified email for professional delivery.",
        },
        {
          title: "SVG Blog Cover Images",
          description:
            "Hand-crafted dark gradient cover images using inline SVG. Each blog post gets a unique visual identity in both languages without requiring external image assets.",
        },
        {
          title: "Vercel Auto-Deploy",
          description:
            "Push to main triggers automatic deployment. Preview deployments for every PR. Global CDN ensures sub-second load times worldwide.",
        },
      ],
    },
  },
  {
    slug: "withlukas",
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
    detail: {
      problem:
        "A consulting business needs a web presence that demonstrates capability, ranks on Google for local searches, and converts visitors into leads. Generic portfolio templates lack proper SEO, structured data, and professional service signals.",
      solution:
        "A custom-built portfolio site with complete SEO infrastructure: JSON-LD graph (Organization, WebSite, WebPage, ProfessionalService, FAQ), dynamic OG image generation, automatic sitemaps, and 7 dedicated service pages — each optimized for local Atlanta search intent.",
      architecture: [
        {
          title: "SEO Graph",
          description:
            "JSON-LD structured data graph connecting Organization, WebSite, WebPage, ProfessionalService, and FAQ schemas. Tells Google exactly what this business is, where it operates, and what services it offers.",
        },
        {
          title: "Dynamic OG Images",
          description:
            "Next.js ImageResponse generates OpenGraph images at build time. Each page gets a unique social preview image without requiring manual image creation.",
        },
        {
          title: "Service Pages",
          description:
            "7 dedicated service detail pages (Telecom, Sales Automation, App Dev, AI, Cybersecurity, SEO, Workflow) using a reusable ServicePage component. Each page is independently crawlable and optimized.",
        },
        {
          title: "Contact Pipeline",
          description:
            "Contact form with Resend email integration, Stripe payment for productized services, and Google Analytics for conversion tracking.",
        },
      ],
      stats: [
        { value: "7", label: "Service Pages" },
        { value: "10+", label: "Projects Showcased" },
        { value: "4", label: "JSON-LD Schemas" },
        { value: "<1s", label: "Load Time" },
      ],
      techStack: [
        { name: "Next.js 16", role: "Full-stack framework" },
        { name: "React 19", role: "UI components" },
        { name: "Tailwind 4", role: "Dark-mode styling" },
        { name: "Resend", role: "Contact form email delivery" },
        { name: "Stripe", role: "Payment processing" },
        { name: "Google Analytics", role: "Traffic and conversion tracking" },
      ],
      features: [
        {
          title: "Local SEO Optimized",
          description:
            "Structured data includes Atlanta geo-coordinates, service area coverage (Atlanta, Georgia, US, Germany), and ProfessionalService schema for local search visibility.",
        },
        {
          title: "Blog System",
          description:
            "Dynamic blog with individual post pages. Optimized for long-tail keyword capture and establishing topical authority in automation and AI.",
        },
        {
          title: "Stripe Integration",
          description:
            "Productized service packages available for direct purchase. Success and cancellation flows handled with dedicated pages.",
        },
        {
          title: "German Market Support",
          description:
            "Dedicated /de route for German-language content. Service area includes Germany for international client acquisition.",
        },
      ],
    },
  },
  {
    slug: "smart-intake-pipeline",
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
    detail: {
      problem:
        "Field teams collect data on paper or in scattered apps, then someone has to manually enter it into a master spreadsheet. Data arrives late, contains errors, and the manual step is a bottleneck that managers spend hours on every week.",
      solution:
        "A Microsoft Forms front-end that field teams fill out on any device. Power Automate routes each submission into a centralized OneDrive Excel workbook. A VBA macro imports and validates the data on demand, feeding directly into scoring and reporting workflows.",
      architecture: [
        {
          title: "Mobile-First Collection",
          description:
            "Microsoft Forms works on any phone, tablet, or laptop. Field reps submit data in real time from customer sites, eliminating end-of-day batch entry.",
        },
        {
          title: "Power Automate Routing",
          description:
            "Each form submission triggers a Power Automate flow that writes the data to a designated OneDrive Excel workbook. No manual file management required.",
        },
        {
          title: "VBA Import and Validation",
          description:
            "A macro imports the accumulated submissions, validates field formats, deduplicates entries, and routes data into the Performance Tracker's scoring engine.",
        },
      ],
      stats: [
        { value: "0", label: "Manual Entry Steps" },
        { value: "<30s", label: "Submission to Excel" },
        { value: "Any", label: "Device Support" },
        { value: "100%", label: "Data Capture Rate" },
      ],
      techStack: [
        { name: "Microsoft Forms", role: "Data collection interface" },
        { name: "Power Automate", role: "Routing and workflow triggers" },
        { name: "OneDrive", role: "Centralized file storage" },
        { name: "Excel/VBA", role: "Import, validation, and scoring" },
      ],
      features: [
        {
          title: "Zero-Touch Data Entry",
          description:
            "Managers never manually type data. Everything flows from form submission to scored report without human intervention in the data pipeline.",
        },
        {
          title: "Real-Time Collection",
          description:
            "Field reps submit from customer sites in real time. No more waiting for end-of-day reports or chasing missing data.",
        },
        {
          title: "Validation Built In",
          description:
            "The import macro catches format errors, duplicates, and missing fields. Bad data gets flagged, not silently imported.",
        },
        {
          title: "Feeds Into Scoring",
          description:
            "Imported data flows directly into the Performance Tracker's composite scoring engine. One pipeline from field collection to manager dashboard.",
        },
      ],
    },
  },
];

export const categories = [
  "All",
  "Trading & Finance",
  "Sales Tools",
  "Web & App Development",
  "SEO & Web",
  "Workflow Automation",
];
