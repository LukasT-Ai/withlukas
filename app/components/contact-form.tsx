"use client";

import { useState } from "react";

const serviceOptions = [
  "Telecom Consulting",
  "Sales Automation",
  "Web & App Development",
  "AI Integration",
  "SEO & Web Presence",
  "Workflow Automation",
  "Other",
];

export default function ContactForm({ heading, subheading }: { heading?: string; subheading?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [otherDetail, setOtherDetail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function toggleService(s: string) {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !phone || services.length === 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          website,
          services: services.includes("Other")
            ? [...services.filter((s) => s !== "Other"), `Other: ${otherDetail}`]
            : services,
          message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setWebsite("");
        setServices([]);
        setOtherDetail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-8 md:p-12 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold mb-2">Message Sent</h3>
        <p className="text-zinc-400">
          Thanks for reaching out. We&apos;ll get back to you within 48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-blue-400 hover:text-blue-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-8 md:p-12">
      {heading && <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">{heading}</h2>}
      {subheading && <p className="text-zinc-400 text-center mb-8">{subheading}</p>}

      <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-zinc-600 focus:outline-none focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-zinc-600 focus:outline-none focus:border-blue-500"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Phone *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-zinc-600 focus:outline-none focus:border-blue-500"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-zinc-600 focus:outline-none focus:border-blue-500"
            placeholder="Company name (optional)"
          />
          </div>
        </div>

        <div>
          <label className="block text-sm text-zinc-400 mb-1">Company Website</label>
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-zinc-600 focus:outline-none focus:border-blue-500"
            placeholder="https://yourcompany.com (optional)"
          />
        </div>

        <div>
          <label className="block text-sm text-zinc-400 mb-2">Services you&apos;re interested in *</label>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  services.includes(s)
                    ? "bg-blue-500/20 border-blue-500 text-blue-400"
                    : "bg-transparent border-[var(--card-border)] text-zinc-500 hover:text-zinc-300 hover:border-zinc-500"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {services.includes("Other") && (
            <input
              type="text"
              value={otherDetail}
              onChange={(e) => setOtherDetail(e.target.value)}
              required
              className="w-full mt-3 bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-zinc-600 focus:outline-none focus:border-blue-500"
              placeholder="Please describe what you're looking for"
            />
          )}
        </div>

        <div>
          <label className="block text-sm text-zinc-400 mb-1">Tell us about your project *</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-zinc-600 focus:outline-none focus:border-blue-500 resize-none"
            placeholder="What are you looking to build or improve? Any timeline or budget in mind?"
          />
        </div>

        {status === "error" && (
          <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
        )}

        <button
          type="submit"
          disabled={status === "sending" || !name || !email || !phone || services.length === 0 || (services.includes("Other") && !otherDetail)}
          className="w-full bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-white py-3 rounded-lg text-sm font-medium transition-colors"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
