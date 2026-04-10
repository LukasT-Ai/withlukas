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
    default: "withlukas | Automation, Web Development & AI Consulting — Atlanta, GA",
    template: "%s | withlukas",
  },
  description:
    "Atlanta-based consulting firm specializing in automation, custom web & app development, AI integration, telecom consulting, and SEO for small and medium businesses in Georgia and beyond.",
  keywords: [
    "automation consulting Atlanta",
    "app development Atlanta GA",
    "web development Atlanta",
    "AI integration Atlanta",
    "sales automation Georgia",
    "telecom consulting Atlanta",
    "SEO services Atlanta GA",
    "workflow automation Atlanta",
    "small business consulting Atlanta",
    "custom software Atlanta",
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
    title: "withlukas | Automation, Web Development & AI Consulting — Atlanta, GA",
    description:
      "Atlanta-based automation, web development, AI integration, and consulting for small and medium businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "withlukas | Automation, Web Development & AI Consulting — Atlanta, GA",
    description:
      "Atlanta-based automation, web development, AI integration, and consulting for small and medium businesses.",
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
