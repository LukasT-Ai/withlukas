export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    title: "5 Ways Small Businesses in Atlanta Can Use AI to Save 20+ Hours a Week",
    slug: "ai-save-20-hours-week",
    date: "2026-04-02",
    author: "Lamin Traor\u00e9",
    excerpt:
      "Practical AI automation examples that any small business can implement today to reclaim time spent on email, scheduling, data entry, customer service, and reporting.",
    tags: ["AI", "Automation", "Small Business"],
    readTime: "5 min read",
    content: `
<p>If you run a small business in Atlanta, you already know the problem: there are not enough hours in the day. Between answering emails, scheduling appointments, entering data, handling customer questions, and pulling reports, most business owners spend their time <em>managing</em> their business instead of <em>growing</em> it.</p>

<p>AI is changing that equation. Not the science fiction version of AI, but practical, affordable automation that handles the repetitive work so you can focus on what actually drives revenue. Here are five real ways we have seen small businesses save 20+ hours a week.</p>

<h2>1. Email Triage and Response Drafting (5+ Hours Saved)</h2>

<p><strong>Before:</strong> You open your inbox Monday morning to 80 emails. You spend two hours sorting through inquiries, spam, vendor updates, and customer questions, writing individual responses to each.</p>

<p><strong>After:</strong> An AI system classifies incoming emails by type and urgency, drafts appropriate responses for routine inquiries, and flags the messages that actually need your attention. You review and send in 15 minutes instead of two hours.</p>

<p>We built a system like this for a B2B sales team that reduced email handling time by over 80%. The AI learned to distinguish between a hot lead asking for a meeting and a vendor trying to sell something, routing each to the right workflow automatically.</p>

<h2>2. Appointment Scheduling and Reminders (3+ Hours Saved)</h2>

<p><strong>Before:</strong> Back and forth emails to find available times. Manual calendar entries. Reminder calls the day before. No shows that waste your afternoon.</p>

<p><strong>After:</strong> An AI scheduling assistant handles availability checking, sends confirmations, delivers reminders via text and email, and even reschedules cancellations, all without you touching your calendar.</p>

<p>For service businesses (salons, consultants, clinics), this alone can save 3 to 5 hours a week and reduce no shows by 40% or more.</p>

<h2>3. Data Entry and Document Processing (4+ Hours Saved)</h2>

<p><strong>Before:</strong> Manually entering invoice data into your accounting software. Copy pasting customer information between systems. Re typing form submissions into spreadsheets.</p>

<p><strong>After:</strong> AI extracts data from documents, forms, and emails, then populates your systems automatically. Invoices get logged, customer records get updated, and form submissions flow into your database without a human in the loop.</p>

<p>We built a pipeline using Microsoft Forms and Power Automate that eliminated all manual data entry for a sales team. Weekly reports that took 30 minutes to compile now generate themselves in 3 minutes.</p>

<h2>4. Customer Service and FAQ Handling (5+ Hours Saved)</h2>

<p><strong>Before:</strong> Answering the same 20 questions over and over via email, phone, and social media. "What are your hours?" "Do you offer financing?" "What is your cancellation policy?"</p>

<p><strong>After:</strong> An AI chat assistant handles routine questions instantly, 24/7, pulling from your actual policies and service information. Complex questions get routed to a human with full context. Customers get faster answers, and you get your time back.</p>

<p>This works especially well for businesses with high inquiry volume: restaurants, medical practices, real estate offices, and professional services firms.</p>

<h2>5. Reporting and Business Intelligence (3+ Hours Saved)</h2>

<p><strong>Before:</strong> Logging into three different platforms, exporting CSVs, building pivot tables, formatting charts, and emailing the results to your team. Every week. The same report.</p>

<p><strong>After:</strong> Automated reports pull from all your data sources, calculate KPIs, flag anomalies, and land in your inbox or Slack channel on schedule. You spend your time analyzing insights instead of building spreadsheets.</p>

<p>For a sales organization, we automated the entire weekly performance report: activity scores, pipeline health, forecast accuracy, and rep rankings, delivered every Monday at 8 AM without anyone lifting a finger.</p>

<h2>Getting Started</h2>

<p>You do not need to automate everything at once. Start with the task that eats the most time and causes the most friction. That is where AI delivers the biggest return.</p>

<p>At withlukas, we specialize in building practical automation for small and medium businesses in Atlanta. Not generic chatbots or off the shelf tools, but custom systems designed around how your business actually operates.</p>

<p>Ready to reclaim 20 hours a week? <a href="/#contact">Get in touch</a> for a free consultation.</p>
`,
  },
  {
    title: "Why Your Business Needs a Custom Website (Not a Wix Template)",
    slug: "custom-website-not-template",
    date: "2026-03-20",
    author: "Lamin Traor\u00e9",
    excerpt:
      "Template builders are fine for a hobby blog. For a business that depends on being found online, here is why custom wins on performance, SEO, and credibility.",
    tags: ["Web Development", "SEO", "Business"],
    readTime: "4 min read",
    content: `
<p>Let us get the obvious out of the way: Wix, Squarespace, and WordPress templates are not bad. They are cheap, fast, and let anyone publish a website in an afternoon. If you are starting a personal blog or putting up a placeholder page, they are perfectly fine.</p>

<p>But if your business depends on being found online, if your website needs to convert visitors into customers, and if you are competing in a market where credibility matters, a template is costing you money you do not realize you are losing.</p>

<h2>Performance Is Not Optional</h2>

<p>Template websites are slow. They load third party scripts, bloated CSS frameworks, unused JavaScript, and generic fonts. Every extra second of load time costs you roughly 7% in conversions. On mobile (where most of your traffic comes from), a slow site is an invisible site.</p>

<p>A custom Next.js website loads in under a second. No unused code, no third party bloat, no cookie consent pop ups from plugins you do not need. Google rewards fast sites with higher rankings. Your visitors reward fast sites by actually staying on the page.</p>

<h2>SEO Is Where Templates Fall Short</h2>

<p>Templates give you a title tag and a meta description. Custom websites give you structured data (JSON-LD schemas), dynamic sitemap generation, automatic OG images for social sharing, canonical URLs, and fine grained control over every signal Google uses to rank your pages.</p>

<p>We built <a href="https://paulinakaiser.com" target="_blank" rel="noopener noreferrer">paulinakaiser.com</a> for a medical practice, and the SEO was night and day compared to their old template site. Medical schemas, bilingual content with proper hreflang tags, referral forms, and structured data that tells Google exactly what the practice does, where it is located, and what services it offers. Try doing that with a Wix drag and drop builder.</p>

<h2>Your Brand Deserves Better Than "Picked a Template"</h2>

<p>When a potential customer lands on your site, they make a judgment in about 3 seconds. A template site says, "We got this up quickly." A custom site says, "We take our business seriously enough to invest in how we present ourselves."</p>

<p>This matters most for professional services: consultants, medical practices, law firms, financial advisors. Your website is your first impression, and a generic template with stock photos undermines the expertise you are trying to convey.</p>

<h2>Scalability and Ownership</h2>

<p>With a template, you are locked into a platform. Want to add a custom booking system? Limited by their plugin marketplace. Need to integrate with your CRM? Hope there is a connector. Want to move to a different host? Start over.</p>

<p>A custom website is yours. You own the code, you own the data, and you can host it anywhere. Need a new feature? Build it. Need to scale? Deploy to the edge. Need to integrate with anything? Write the API call.</p>

<h2>What Custom Actually Costs</h2>

<p>Here is the part people get wrong: custom does not have to mean expensive. A professional business website built with modern tools (Next.js, React, Tailwind CSS) starts at $1,500 to $3,000 at withlukas, and that includes technical SEO, responsive design, contact forms, and hosting setup.</p>

<p>Compare that to $300/year for a Wix premium plan, plus the premium template, plus the plugins, plus the time you spend fighting the builder when it does not do what you want. Over three years, the cost difference disappears, and the custom site outperforms the template every day.</p>

<p>If your website is your storefront, invest in it like one. <a href="/#contact">Let us talk about what a custom build looks like for your business.</a></p>
`,
  },
  {
    title: "The ROI of Sales Automation: What We Learned Building Outreach Systems",
    slug: "roi-sales-automation",
    date: "2026-03-05",
    author: "Lamin Traor\u00e9",
    excerpt:
      "Real numbers and lessons from building custom sales automation. Email sequences, follow up logic, response classification, and when to build custom vs use off the shelf.",
    tags: ["Sales Automation", "ROI", "Email"],
    readTime: "5 min read",
    content: `
<p>After building sales automation systems for over a year, we have learned a few things about what works, what does not, and when custom automation actually pays for itself.</p>

<p>Here is the honest breakdown.</p>

<h2>The Time Math</h2>

<p>A typical B2B sales rep spends 5 to 8 hours per week on prospecting activities: researching companies, writing emails, scheduling follow ups, and tracking responses. For a team of five reps, that is 25 to 40 hours of collective time spent on tasks that are highly repetitive and formulaic.</p>

<p>With automation, that drops to 2 to 3 hours per week for the entire team, mostly spent reviewing AI generated content and approving send batches. The other 22+ hours go back to actual selling: discovery calls, demos, proposals, and closing.</p>

<h2>What Good Automation Looks Like</h2>

<p>The systems we build handle four core workflows:</p>

<p><strong>Prospect Research and Segmentation.</strong> Automatically pull in company data, match it against your ideal customer profile, and segment prospects by industry, size, and fit score. No more spreadsheet research sessions.</p>

<p><strong>Personalized Initial Outreach.</strong> Generate emails that reference specific details about each prospect's business, not "Hi {first_name}" template garbage. Real personalization that demonstrates you understand their situation.</p>

<p><strong>Smart Follow Up Sequences.</strong> Automated follow ups on a business day cadence (no weekend emails, no holiday sends). Each follow up adjusts tone and angle based on silence. After the final follow up, the system enters a cool down period before marking the prospect as dormant.</p>

<p><strong>Response Classification.</strong> This is where most off the shelf tools fall flat. When a prospect replies, the system classifies their response: are they interested? Are they pushing back on pricing? Are they asking to be removed? Each classification triggers a different workflow. Getting this wrong has real consequences.</p>

<h2>Custom vs Off the Shelf</h2>

<p>Tools like Outreach, Salesloft, and Apollo are solid for standard SDR workflows. If your sales motion is high volume, low touch, and follows a predictable pattern, an off the shelf tool is probably the right call.</p>

<p>Custom makes sense when:</p>

<ul>
<li>Your response handling requires nuanced classification (not just "replied" vs "bounced")</li>
<li>You need integration with internal systems (custom CRM, proprietary databases)</li>
<li>Your follow up logic has business rules that off the shelf tools cannot express</li>
<li>You want zero per message AI costs (rule based classification instead of API calls)</li>
<li>Your compliance or industry requirements demand full control over data and process</li>
</ul>

<h2>Real Numbers</h2>

<p>For a recent engagement, here is what the automation delivered in the first 90 days:</p>

<ul>
<li>Time saved: 25+ hours per week across the team</li>
<li>Outreach volume: 3x increase in prospects contacted</li>
<li>Response rate: 18% (industry average for cold outreach is 5 to 10%)</li>
<li>Meeting conversion: 12% of responses converted to scheduled meetings</li>
<li>Per email cost: $0 in ongoing AI costs (rule based classifier)</li>
</ul>

<p>The system paid for itself within the first month through increased pipeline value alone.</p>

<h2>The Lesson</h2>

<p>Sales automation is not about sending more emails. It is about sending the right emails to the right people at the right time, and handling their responses intelligently. Volume without intelligence is just spam. Intelligence without volume is just a good sales rep doing things manually.</p>

<p>The sweet spot is a system that combines both, and that is what we build at withlukas.</p>

<p>Curious about what automation could do for your sales process? <a href="/#contact">Let us run the numbers together.</a></p>
`,
  },
  {
    title: "SEO in 2026: What Actually Works for Local Businesses in Georgia",
    slug: "seo-2026-local-businesses",
    date: "2026-02-15",
    author: "Lamin Traor\u00e9",
    excerpt:
      "Forget keyword stuffing and link farms. Here is what actually moves the needle for local businesses competing for Google visibility in Atlanta and Georgia.",
    tags: ["SEO", "Local Business", "Georgia"],
    readTime: "4 min read",
    content: `
<p>SEO advice is everywhere, and most of it is outdated, generic, or designed to sell you a subscription to some tool you do not need. Here is what actually works for local businesses in Georgia in 2026, based on what we have seen building and optimizing real business websites.</p>

<h2>Structured Data Is Table Stakes</h2>

<p>If your website does not have JSON-LD structured data, you are invisible to half of Google's features. Rich snippets, knowledge panels, FAQ sections in search results, "people also ask" inclusions, all of these pull from structured data.</p>

<p>For local businesses, the minimum is a LocalBusiness or ProfessionalService schema with your name, address, phone, hours, service area, and price range. If you are a medical practice, add MedicalBusiness. Restaurant? Add Restaurant schema with menu data. This is not optional anymore. It is how Google understands what your business does.</p>

<h2>Google Business Profile: Your Most Important Asset</h2>

<p>Your Google Business Profile (GBP) is more important than your website for local search. When someone in Atlanta searches "telecom consulting near me," Google shows the map pack first. Your GBP listing determines whether you show up there.</p>

<p>What matters: complete profile (every field filled), consistent NAP (name, address, phone) across your website and GBP, regular posts (at least weekly), and genuine reviews. Respond to every review, positive or negative. Google measures engagement.</p>

<h2>Core Web Vitals Are Real</h2>

<p>Google measures three things about your website's performance: Largest Contentful Paint (how fast the main content loads), Interaction to Next Paint (how responsive your site is to clicks), and Cumulative Layout Shift (whether elements jump around during loading).</p>

<p>These metrics directly affect your ranking. A slow, janky website will lose to a fast, stable competitor, even if your content is better. This is where template websites consistently fail, and custom builds consistently win.</p>

<p>Target numbers: LCP under 2.5 seconds, INP under 200 milliseconds, CLS under 0.1. Test with Google PageSpeed Insights and fix anything in the red.</p>

<h2>Content Strategy for Local Search</h2>

<p>Generic blog posts about "the importance of SEO" do not rank. You know what does? Specific, locally relevant content that answers questions real people in your area are asking.</p>

<p>Examples for an Atlanta business:</p>

<ul>
<li>"Best coworking spaces in Midtown Atlanta for small teams" (if you are a commercial real estate firm)</li>
<li>"Georgia small business tax credits you might be missing in 2026" (if you are an accountant)</li>
<li>"How Atlanta restaurants are using QR code menus to reduce wait times" (if you build restaurant tech)</li>
</ul>

<p>Each piece should target a specific long tail keyword, include your service area naturally (not stuffed), and provide genuine value. One excellent locally targeted post outranks ten generic articles.</p>

<h2>Mobile First Is Not a Suggestion</h2>

<p>Over 60% of local searches happen on mobile devices. Google indexes your mobile site first. If your website looks bad or loads slowly on a phone, you are losing the majority of your potential customers before they even see your services.</p>

<p>Test your site on a real phone, not just Chrome DevTools. Load it on a 4G connection. Tap every button. Fill out every form. If anything feels slow, broken, or frustrating, fix it before you do anything else.</p>

<h2>The Bottom Line</h2>

<p>Local SEO in 2026 comes down to three things: technical excellence (structured data, fast site, mobile first), local authority (Google Business Profile, reviews, local content), and genuine helpfulness (answer real questions, provide real value). Everything else is noise.</p>

<p>Need help getting your local SEO right? We build SEO optimized websites for businesses in Atlanta and across Georgia. <a href="/#contact">Start with a free SEO audit.</a></p>
`,
  },
];
