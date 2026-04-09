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
  metadataBase: new URL("https://www.withlukas.com"),
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
    "telecom consulting",
    "telecommunications consultant",
    "network security",
    "unified communications",
    "custom software",
    "withlukas",
    "Lamin Traoré",
  ],
  authors: [{ name: "Lamin Traoré", url: "https://www.withlukas.com" }],
  creator: "Lamin Traoré",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.withlukas.com",
    siteName: "withlukas",
    title: "withlukas | AI-Powered Automation & App Development",
    description:
      "Custom automation tools, AI-powered apps, and sales technology. Making work and life more efficient.",
  },
  twitter: {
    card: "summary_large_image",
    title: "withlukas | AI-Powered Automation & App Development",
    description:
      "Custom automation tools, AI-powered apps, and sales technology built by Lamin Traoré.",
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
    canonical: "https://www.withlukas.com",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
