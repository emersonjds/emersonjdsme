import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RevealObserver from "@/components/reveal-observer";
import { LocaleProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Emerson Silva — Tech Lead & Software Engineer",
  description:
    "I'm Emerson, a Tech Lead at Porto Seguro. I build fast, clear systems that ship — banking, fraud, mobile and corporate platforms.",
  openGraph: {
    title: "Emerson Silva — Tech Lead & Software Engineer",
    description:
      "I'm Emerson, a Tech Lead at Porto Seguro. I build fast, clear systems that ship — banking, fraud, mobile and corporate platforms.",
    url: "https://emersonjds.dev",
    siteName: "emersonjds",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerson Silva — Tech Lead & Software Engineer",
    description:
      "I'm Emerson, a Tech Lead at Porto Seguro. I build fast, clear systems that ship — banking, fraud, mobile and corporate platforms.",
    creator: "@emersonjdss",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LocaleProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <RevealObserver />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
