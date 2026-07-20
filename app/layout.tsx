import type { Metadata } from "next";
import "./globals.css";
import AttributionCapture from "./attribution-capture";

export const metadata: Metadata = {
  metadataBase: new URL("https://cryptocodexsystems.com"),
  title: "CryptoCodex — Learn to Trade with Precision",
  description: "Master crypto trading with precision. Learn candlestick patterns, on-chain analytics, risk management, and DeFi fundamentals.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CryptoCodex — Learn to Trade with Precision",
    description: "48 lessons. 12 modules. 30+ chart patterns. Structured crypto trading curriculum — $1 first month.",
    url: "https://cryptocodexsystems.com",
    siteName: "CryptoCodex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoCodex — Learn to Trade Crypto",
    description: "Stop guessing. Learn crypto trading from first principles. $1 first month.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@300;400;500;600&family=IBM+Plex+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='4' fill='%230f1117'/%3E%3Ctext x='16' y='22' font-size='18' text-anchor='middle' fill='%2300d4aa'%3E%E2%82%BF%3C/text%3E%3C/svg%3E" />
      </head>
      <body>
        <AttributionCapture />
        {children}
      </body>
    </html>
  );
}
