"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

export default function Newsletter() {
  const [state, setState] = useState<State>("idle");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Failed to subscribe");
      }

      setState("sent");
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="text-sm text-emerald-400">
        You are subscribed. We will be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="your@email.com"
        className="bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-3 py-2 text-xs text-[var(--foreground)] placeholder-zinc-600 focus:outline-none focus:border-blue-500 w-48"
      />
      <button
        type="submit"
        disabled={state === "sending"}
        className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {state === "sending" ? "..." : "Subscribe"}
      </button>
      {error && <span className="text-xs text-red-400 self-center">{error}</span>}
    </form>
  );
}
