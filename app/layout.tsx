import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Devanagari } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AdMobileSticky } from "@/components/AdUnit";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://schemesindia.in"),
  title: {
    default: "Schemes In India — All Government Schemes 2025 | State & Central Yojana",
    template: "%s | Schemes In India",
  },
  description:
    "Complete guide to all Indian government schemes 2025. State-wise & central yojana list, eligibility, online registration, documents required. PM Vishwakarma, PM Kisan, Ayushman Bharat & more.",
  keywords: [
    "government schemes india 2025",
    "sarkari yojana list",
    "central government schemes",
    "state government schemes",
    "pm vishwakarma yojana",
    "pm kisan samman nidhi",
    "ayushman bharat",
    "pradhan mantri awas yojana",
    "schemes in india",
    "yojana apply online",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://schemesindia.in",
    siteName: "Schemes In India",
    title: "Schemes In India — All Government Schemes 2025",
    description: "Your complete guide to every Indian government scheme — state-wise and central.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Schemes In India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schemes In India — All Government Schemes 2025",
    description: "State-wise & Central government scheme guide for India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://schemesindia.in" },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoDevanagari.variable}`}>
      <head>
        {/* Google AdSense — replace with your publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Organization Schema */}
        <Script id="org-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Schemes In India",
            url: "https://schemesindia.in",
            description: "Complete guide to all Indian government schemes",
            sameAs: ["https://twitter.com/schemesindia", "https://facebook.com/schemesindia"],
          })}
        </Script>
        {/* Website Schema */}
        <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Schemes In India",
            url: "https://schemesindia.in",
            potentialAction: {
              "@type": "SearchAction",
              target: { "@type": "EntryPoint", urlTemplate: "https://schemesindia.in/search?q={search_term_string}" },
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
      </head>
      <body className="font-[var(--font-noto)] bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AdMobileSticky />
      </body>
    </html>
  );
}
