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
  title: {
    default: "ClientFlow",
    template: "%s | ClientFlow",
  },
  description:
    "Manage clients, projects, invoices, contracts, and payments in one modern platform built for freelancers and agencies.",
  keywords: [
    "client management",
    "freelancer CRM",
    "project management",
    "invoicing software",
    "client portal",
    "contracts",
    "payments",
    "Next.js SaaS",
  ],
  authors: [{ name: "Syed Bilal" }],
  creator: "Syed Bilal",
  applicationName: "ClientFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
