import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "withlukas — AI-Powered Automation & App Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* W Mark */}
        <svg viewBox="0 0 80 55" width="120" height="82" style={{ marginBottom: 16 }}>
          <path d="M6 8 L21 47 L40 24 L59 47 L74 8" stroke="#3B82F6" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="40" cy="4" r="4.5" fill="#3B82F6"/>
        </svg>

        {/* Logo */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-2px",
            marginBottom: 24,
            display: "flex",
          }}
        >
          <span style={{ color: "#ffffff" }}>with</span>
          <span style={{ color: "#93C5FD" }}>lukas</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            marginBottom: 48,
            display: "flex",
          }}
        >
          AI-Powered Automation & App Development
        </div>

        {/* Service pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Telecom Consulting", "Sales Automation", "App Development", "AI Integration"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "rgba(59, 130, 246, 0.1)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  borderRadius: 24,
                  padding: "8px 20px",
                  fontSize: 16,
                  color: "#60a5fa",
                  display: "flex",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 16,
            color: "#52525b",
            display: "flex",
          }}
        >
          withlukas.com
        </div>
      </div>
    ),
    { ...size }
  );
}
