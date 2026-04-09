import type { Metadata } from "next";
import ServicePage from "../../components/service-page";

export const metadata: Metadata = {
  title: "Workflow Automation | Forms, Pipelines & Process Automation",
  description:
    "Custom workflow automation using Microsoft Forms, Power Automate, Excel/VBA, cron jobs, and custom pipelines. Eliminate manual data entry and connect your tools into seamless workflows.",
  keywords: [
    "workflow automation",
    "process automation",
    "Microsoft Power Automate",
    "Excel VBA automation",
    "data pipeline automation",
    "forms automation",
    "business process automation",
    "custom workflow tools",
    "manual data entry elimination",
    "Microsoft 365 automation",
    "cron job automation",
    "withlukas",
  ],
  openGraph: {
    title: "Workflow Automation | withlukas",
    description:
      "Microsoft Forms, Power Automate, Excel/VBA, and custom pipelines. Connect your tools and eliminate manual data entry.",
    url: "https://withlukas.com/services/workflow-automation",
  },
  alternates: {
    canonical: "https://withlukas.com/services/workflow-automation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://withlukas.com/services/workflow-automation#service",
      name: "Workflow Automation",
      provider: { "@id": "https://withlukas.com/#organization" },
      serviceType: "Workflow Automation",
      areaServed: ["United States", "Germany"],
      description:
        "Custom workflow automation services including Microsoft Forms, Power Automate, Excel/VBA, and custom pipeline development.",
      url: "https://withlukas.com/services/workflow-automation",
    },
    {
      "@type": "WebPage",
      "@id": "https://withlukas.com/services/workflow-automation#webpage",
      url: "https://withlukas.com/services/workflow-automation",
      name: "Workflow Automation | withlukas",
      isPartOf: { "@id": "https://withlukas.com/#website" },
      about: {
        "@id": "https://withlukas.com/services/workflow-automation#service",
      },
    },
  ],
};

export default function WorkflowAutomationPage() {
  return (
    <ServicePage
      badge="Workflow Automation"
      headline="Stop Doing Work Your Computer Should Do"
      subheadline="Custom pipelines that connect your forms, spreadsheets, email, and tools into seamless workflows — eliminating the manual steps that eat your team's time."
      intro="If your team is copying data between spreadsheets, manually forwarding emails, or running the same report every Monday morning, that's a workflow problem. We build custom automation — Microsoft Forms to Power Automate to Excel, cron-driven pipelines, API integrations, and VBA tools — that handles the repetitive work so your team can focus on decisions, not data entry."
      features={[
        {
          icon: "\u{1F4DD}",
          title: "Forms & Data Capture",
          description:
            "Microsoft Forms, web forms, and intake systems that capture data and route it directly into your workflows. No more manual entry from paper or email.",
        },
        {
          icon: "\u{26A1}",
          title: "Power Automate & Pipelines",
          description:
            "Automated flows that connect your Microsoft 365 tools, APIs, and custom systems. Trigger actions on form submission, email receipt, or schedule.",
        },
        {
          icon: "\u{1F4CA}",
          title: "Excel & VBA Automation",
          description:
            "Enterprise Excel tools with VBA macros for automated reporting, scoring, data transformation, and dashboard generation. Works on any corporate laptop.",
        },
        {
          icon: "\u{1F517}",
          title: "System Integration",
          description:
            "Connect tools that weren't designed to talk to each other. API bridges, scheduled data sync, and custom middleware that keeps your systems in sync.",
        },
      ]}
      credStats={[
        { value: "Power Automate", label: "& Microsoft 365" },
        { value: "Excel / VBA", label: "Enterprise Tools" },
        { value: "API", label: "Integrations" },
        { value: "Zero-Touch", label: "Data Entry" },
      ]}
      whoIsItFor={[
        {
          icon: "\u{1F4CB}",
          title: "Operations & Admin Teams",
          description:
            "Your team spends hours on data entry, report generation, and manual file management. You need automation that works within your existing Microsoft 365 environment.",
        },
        {
          icon: "\u{1F468}\u{200D}\u{1F4BC}",
          title: "Managers & Team Leads",
          description:
            "You need weekly reports, performance summaries, and pipeline updates without chasing your team for numbers. Automated reporting that delivers the data on schedule.",
        },
        {
          icon: "\u{1F3E2}",
          title: "Organizations on Microsoft 365",
          description:
            "Your company runs on Microsoft tools but isn't using them to their potential. We build automation within your existing stack — no new software to buy or learn.",
        },
      ]}
      whyUs={[
        "We build automation that runs on your existing tools — Microsoft 365, Excel, Power Automate. No new software purchases, no IT approvals, no learning curves.",
        "Our Excel/VBA tools are used in production by sales teams daily. They're designed for non-technical users who need results without complexity.",
        "We've built complete intake pipelines — Forms to Power Automate to Excel — that eliminate every manual step between data capture and reporting.",
        "Every automation includes error handling and monitoring. When something breaks, you know about it immediately — not when the report is due.",
      ]}
      ctaText="Ready to Automate Your Workflow?"
      jsonLd={jsonLd}
    />
  );
}
