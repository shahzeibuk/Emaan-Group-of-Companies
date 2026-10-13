import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cinzel, Fraunces, Montserrat, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emaangroupofcompanies.com"),
  title: {
    default: "Emaan Group of Companies",
    template: "%s · Emaan Group",
  },
  description:
    "Emaan Group of Companies. Logistics, software, and residential development held to one standard: describe the work plainly, and stand behind it.",
  applicationName: "Emaan Group of Companies",
  openGraph: {
    title: "Emaan Group of Companies",
    description:
      "Logistics, software, and residential development held to one standard: describe the work plainly, and stand behind it.",
    url: "https://emaangroupofcompanies.com",
    siteName: "Emaan Group of Companies",
    locale: "en",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e3324",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable} ${cinzel.variable} ${montserrat.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
