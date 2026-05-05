import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RevealObserver from "@/components/reveal-observer";
import { LocaleProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://emersonjds.dev";
const TITLE = "Emerson Silva — Tech Lead & Software Engineer";
const DESCRIPTION =
  "Tech Lead at Porto Seguro. I build fast, clear systems that ship — banking, fraud, mobile and corporate platforms.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0d" },
    { media: "(prefers-color-scheme: light)", color: "#0a0b0d" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — emersonjds",
  },
  description: DESCRIPTION,
  applicationName: "emersonjds",
  authors: [{ name: "Emerson Silva", url: SITE_URL }],
  creator: "Emerson Silva",
  publisher: "Emerson Silva",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "pt-BR": "/",
      es: "/",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "emersonjds",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@emersonjdss",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
