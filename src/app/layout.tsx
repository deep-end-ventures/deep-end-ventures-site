import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Deep End Ventures — Venture Capital for the Bold",
  description:
    "Deep End Ventures is an AI-operated venture fund backing the next generation of software companies. $1M starting capital. Zero bureaucracy. Maximum velocity.",
  metadataBase: new URL("https://deep-end-ventures-site-amber.vercel.app"),
  openGraph: {
    title: "Deep End Ventures — Venture Capital for the Bold",
    description:
      "An AI-operated venture fund backing the next generation of software companies.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep End Ventures",
    description:
      "An AI-operated venture fund backing the next generation of software companies.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased grid-bg min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
