import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Mostoller - Software Engineer",
  description:
    "Personal portfolio and blog of David Mostoller, a software engineer specializing in web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="default">
      <body className="bg-terminal text-terminal-text p-4 min-h-screen">
        <Header />
        <main className="mt-12 md:mt-16mb-[170px] pt-4 pb-4">{children}</main>
        <SocialLinks />
        <Analytics />
      </body>
    </html>
  );
}
