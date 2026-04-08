import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://withlukas.com"),
  title: {
    default: "withlukas | AI-Powered Automation & App Development",
    template: "%s | withlukas",
  },
  description:
    "Custom automation tools, AI-powered apps, and sales technology built by Lamin Traoré. From email outreach engines to algorithmic trading bots — making work and life more efficient.",
  keywords: [
    "automation",
    "AI tools",
    "app development",
    "sales automation",
    "email outreach",
    "performance tracking",
    "job search automation",
    "algorithmic trading",
    "custom software",
    "withlukas",
    "Lamin Traoré",
  ],
  authors: [{ name: "Lamin Traoré", url: "https://withlukas.com" }],
  creator: "Lamin Traoré",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://withlukas.com",
    siteName: "withlukas",
    title: "withlukas | AI-Powered Automation & App Development",
    description:
      "Custom automation tools, AI-powered apps, and sales technology. Making work and life more efficient.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "withlukas — Automation & App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "withlukas | AI-Powered Automation & App Development",
    description:
      "Custom automation tools, AI-powered apps, and sales technology built by Lamin Traoré.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://withlukas.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
