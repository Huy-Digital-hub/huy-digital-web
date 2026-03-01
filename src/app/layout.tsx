import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Huy Digital — Institutionelle Marktdaten für alle",
    template: "%s | Huy Digital",
  },
  description:
    "Trading Intelligence Platform. Regime-Erkennung, Sentiment, COT und Smart Money auf einer Plattform. Schweizer Datenschutz.",
  metadataBase: new URL("https://huy-digital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://huy-digital.com",
    siteName: "Huy Digital",
    title: "Huy Digital — Institutionelle Marktdaten für alle",
    description:
      "Trading Intelligence Platform. Regime-Erkennung, Sentiment, COT und Smart Money auf einer Plattform. Schweizer Datenschutz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huy Digital — Institutionelle Marktdaten für alle",
    description:
      "Trading Intelligence Platform. Regime-Erkennung, Sentiment, COT und Smart Money auf einer Plattform. Schweizer Datenschutz.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "yaGijQ3A0CxqFAxpV781ZI_Vi7-kVyMIhg1LWPCfaI8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
