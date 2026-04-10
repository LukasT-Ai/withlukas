"use client";

import { useState } from "react";

export default function PricingClient({
  service,
  tier,
  popular,
}: {
  service: string;
  tier: string;
  popular?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, tier }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Failed to connect");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 ${
          popular
            ? "bg-blue-500 hover:bg-blue-400 text-white"
            : "bg-[var(--card-hover)] hover:bg-zinc-700 text-[var(--foreground)] border border-[var(--card-border)]"
        }`}
      >
        {loading ? "Redirecting..." : "Get Started"}
      </button>
      {error && (
        <p className="text-red-400 text-xs mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
