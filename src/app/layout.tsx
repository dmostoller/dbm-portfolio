import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import "./globals.css";
import { ParticleProvider } from "@/context/ParticleContext";
import ParticleRenderer from "@/components/ParticleRenderer";

export const metadata: Metadata = {
  title: "David Mostoller - Software Engineer",
  description:
    "Full-stack software engineer specializing in TypeScript, React, Next.js, and Node.js. Experience in audio engineering and music technology. Based in Philadelphia.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Python",
    "Django",
    "PostgreSQL",
    "Philadelphia",
    "Web Development",
  ],
  authors: [{ name: "David Mostoller" }],
  creator: "David Mostoller",
  publisher: "David Mostoller",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.davidmostoller.com",
    title: "David Mostoller - Full-Stack Software Engineer",
    description:
      "Full-stack software engineer specializing in TypeScript, React, Next.js, and Node.js. Experience in audio engineering and music technology. Based in Philadelphia.",
    siteName: "David Mostoller Portfolio",
    images: [
      {
        url: "/images/dbm-og-image.png",
        width: 1200,
        height: 630,
        alt: "David Mostoller",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Mostoller - Full-Stack Software Engineer",
    description:
      "Full-stack software engineer specializing in TypeScript, React, Next.js, and Node.js. Experience in audio engineering and music technology. Based in Philadelphia.",
    images: ["/images/dbm-og-image.png"],
    creator: "@dmostoller",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="default">
      <body className="bg-terminal text-terminal-text p-4 min-h-screen">
        <ParticleProvider>
          <Header />
          <main className="mt-12 md:mt-16 lg:mt-32 mb-32 pt-4 pb-4">
            <ParticleRenderer />
            {children}
          </main>
          <SocialLinks />
          <Analytics />
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=G-SVGVZJDQX9`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SVGVZJDQX9');
            `}
            </Script>
          </>
        </ParticleProvider>
      </body>
    </html>
  );
}
