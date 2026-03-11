import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Emerson | Software Engineer & Full-Stack Developer",
    template: "%s | Emerson Portfolio",
  },
  description:
    "Portfolio of Emerson — Software Engineer specializing in React, Next.js, TypeScript, Node.js, Go, and modern web development. Building high-performance, accessible digital experiences.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Go",
    "Portfolio",
  ],
  authors: [{ name: "Emerson" }],
  creator: "Emerson",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Emerson | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
    siteName: "Emerson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerson | Software Engineer",
    description:
      "Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="canonical" href="https://emersonjds.dev" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise`}
      >
        <div className="ambient-bg" />
        <div className="dot-grid" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
