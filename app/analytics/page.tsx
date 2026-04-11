"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type Overview = {
  users: number;
  pageViews: number;
  sessions: number;
  bounceRate: number;
  avgDuration: number;
};

type AnalyticsData = {
  realtime: number;
  today: Overview;
  week: Overview;
  month: Overview;
  topPages: { page: string; views: number; users: number }[];
  sources: { source: string; sessions: number; users: number }[];
  devices: { device: string; sessions: number }[];
  countries: { country: string; sessions: number; users: number }[];
  fetchedAt: string;
};

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-4">
      <div className="text-xs text-zinc-500 mb-1">{label}</div>
      <div className="text-2xl font-bold gradient-text">{value}</div>
      {sub && <div className="text-[10px] text-zinc-600 mt-0.5">{sub}</div>}
    </div>
  );
}

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}m ${s}s`;
}

export default function AnalyticsPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (key: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/analytics?key=${encodeURIComponent(key)}`);
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || `HTTP ${res.status}`);
      }
      const json = await res.json();
      setData(json);
      setAuthenticated(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authenticated || !password) return;
    const interval = setInterval(() => fetchData(password), 60000);
    return () => clearInterval(interval);
  }, [authenticated, password, fetchData]);

  if (!authenticated) {
    return (
      <main className="grid-bg min-h-screen flex items-center justify-center px-6">
        <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-8 w-full max-w-sm">
          <h1 className="text-xl font-bold mb-4">Analytics</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchData(password);
            }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-zinc-600 focus:outline-none focus:border-blue-500 mb-3"
              autoFocus
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-400 text-white py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
            >
              {loading ? "Loading..." : "View Analytics"}
            </button>
            {error && <p className="text-sm text-red-400 mt-3">{error}</p>}
          </form>
        </div>
      </main>
    );
  }

  if (!data) return null;

  const totalDeviceSessions = data.devices.reduce((s, d) => s + d.sessions, 0);

  return (
    <main className="grid-bg min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--card-border)]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-[var(--foreground)] tracking-tight">
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8 L11 23 L16 14 L21 23 L26 8" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="6.5" r="1.8" fill="#3B82F6"/>
            </svg>
            <span>with<span className="text-[#93C5FD] font-normal">lukas</span></span>
          </Link>
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span>Last updated: {new Date(data.fetchedAt).toLocaleTimeString()}</span>
            <button
              onClick={() => fetchData(password)}
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Site Analytics</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-emerald-400 font-medium">
                {data.realtime} active now
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Today</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <StatCard label="Users" value={data.today.users} />
              <StatCard label="Page Views" value={data.today.pageViews} />
              <StatCard label="Sessions" value={data.today.sessions} />
              <StatCard label="Bounce Rate" value={`${data.today.bounceRate}%`} />
              <StatCard label="Avg Duration" value={formatDuration(data.today.avgDuration)} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Last 7 Days</h2>
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Users" value={data.week.users} />
                <StatCard label="Page Views" value={data.week.pageViews} />
                <StatCard label="Sessions" value={data.week.sessions} />
                <StatCard label="Avg Duration" value={formatDuration(data.week.avgDuration)} />
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Last 30 Days</h2>
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Users" value={data.month.users} />
                <StatCard label="Page Views" value={data.month.pageViews} />
                <StatCard label="Sessions" value={data.month.sessions} />
                <StatCard label="Avg Duration" value={formatDuration(data.month.avgDuration)} />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5">
              <h2 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">Top Pages (30d)</h2>
              <div className="space-y-2">
                {data.topPages.map((p, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 truncate max-w-[200px]">{p.page}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-500">{p.users} users</span>
                      <span className="text-[var(--foreground)] font-medium w-12 text-right">{p.views}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5">
              <h2 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">Traffic Sources (30d)</h2>
              <div className="space-y-2">
                {data.sources.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">{s.source || "(direct)"}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-500">{s.users} users</span>
                      <span className="text-[var(--foreground)] font-medium w-12 text-right">{s.sessions}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5">
              <h2 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">Devices (30d)</h2>
              <div className="space-y-3">
                {data.devices.map((d, i) => {
                  const pct = totalDeviceSessions > 0 ? (d.sessions / totalDeviceSessions) * 100 : 0;
                  return (
                    <div key={i}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-zinc-400 capitalize">{d.device}</span>
                        <span className="text-[var(--foreground)] font-medium">{d.sessions} ({pct.toFixed(0)}%)</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5">
              <h2 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">Countries (30d)</h2>
              <div className="space-y-2">
                {data.countries.map((c, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">{c.country}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-500">{c.users} users</span>
                      <span className="text-[var(--foreground)] font-medium w-12 text-right">{c.sessions}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
