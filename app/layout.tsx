import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { LoadingScreen } from "../components/layout/loading-screen";
import { SmoothScroll } from "../components/layout/smooth-scroll";
import { ParticleBackground } from "../components/effects/particle-background";
import { FloatingIcons } from "../components/effects/floating-icons";
import { CustomCursor } from "../components/effects/custom-cursor";
import { siteConfig } from "../lib/data/nav";
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
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "software engineer",
    "cybersecurity engineer",
    "security automation",
    "vulnerability assessment",
    "penetration testing",
    "VAPTaaS",
    "honeypot",
    "AI engineer",
    "Python developer",
    "FastAPI",
    "Next.js",
    "Docker",
    "Karthik Kumar",
    "Minuga Karthik Kumar",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`relative min-h-screen bg-background text-text-primary antialiased ${geistSans.variable} ${geistMono.variable}`}>
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          <FloatingIcons />
          <ParticleBackground />
          <main className="relative z-10 min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
