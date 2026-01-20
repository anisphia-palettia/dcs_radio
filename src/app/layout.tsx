import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./_components/theme-provider";
import { Toaster } from "../components/ui/sonner";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://dcsfm.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "DCS 100.50 FM - Sahabat Setia Anda",
    template: "%s | DCS 100.50 FM",
  },
  description:
    "DCS Radio 100.50 FM Madiun. Sahabat setia anda dengan pilihan musik terbaik dan informasi terkini.",
  keywords: [
    "Radio Madiun",
    "DCS FM",
    "DCS Radio",
    "100.5 FM",
    "Radio Streaming",
    "Berita Madiun",
    "Musik Indonesia",
  ],
  authors: [{ name: "DCS FM Team" }],
  creator: "DCS FM",
  publisher: "DCS FM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DCS 100.50 FM - Sahabat Setia Anda",
    description:
      "Dengarkan DCS Radio 100.50 FM. Musik terbaik, berita terkini, dan hiburan untuk anda.",
    url: baseUrl,
    siteName: "DCS 100.50 FM",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Make sure to have a default OG image
        width: 1200,
        height: 630,
        alt: "DCS FM Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DCS 100.50 FM",
    description: "Sahabat Setia Anda di Madiun dan sekitarnya.",
    creator: "@dcsfm_madiun", // Placeholder
    images: ["/og-image.jpg"],
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
