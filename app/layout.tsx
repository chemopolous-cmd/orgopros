import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { Suspense } from "react";

// ===== IDs & site URL (prefer env; fall back for local dev) =====
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.orgopros.com";

const GA4_ID =
  process.env.NEXT_PUBLIC_GA4_ID || "G-QZRQ96EF8Z";

const ADS_ID =
  process.env.NEXT_PUBLIC_ADS_ID || "AW-XXXXXXX";

const GA_DEBUG_FLAG = process.env.NEXT_PUBLIC_GA_DEBUG === "1";
// ================================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OrgoPros — Organic Chemistry Tutoring",
    template: "%s · OrgoPros",
  },
  description:
    "One-on-one organic chemistry tutoring from professional educators.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    siteName: "OrgoPros",
    title: "OrgoPros — Organic Chemistry Tutoring",
    description:
      "One-on-one organic chemistry tutoring from professional educators.",
    images: [
      "https://placehold.co/1200x630/002D42/ffffff?text=OrgoPros%20%E2%80%94%20Organic%20Chemistry%20Tutoring",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrgoPros — Organic Chemistry Tutoring",
    description:
      "One-on-one organic chemistry tutoring from professional educators.",
    images: [
      "https://placehold.co/1200x630/002D42/ffffff?text=OrgoPros%20%E2%80%94%20Organic%20Chemistry%20Tutoring",
    ],
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

        {/* Google tag (gtag.js) — GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            (function() {
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              window.gtag = gtag;

              gtag('js', new Date());

              // Enable debug based on query or env flag
              var hasQueryDebug = typeof window !== 'undefined' && window.location.search.indexOf('ga_debug=1') !== -1;
              var envDebug = ${GA_DEBUG_FLAG ? "true" : "false"};
              var debugMode = hasQueryDebug || envDebug;

              // Disable auto page_view to avoid duplicates; we'll send manually
              gtag('config', '${GA4_ID}', { send_page_view: false, debug_mode: debugMode });

              // Safe placeholder for Ads; no effect until real ID
              gtag('config', '${ADS_ID}', { debug_mode: debugMode });
            })();
          `}
        </Script>

        {/* JSON-LD: Organization */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "OrgoPros",
            url: SITE_URL,
            logo: `${SITE_URL}/favicon.svg`,
            description:
              "One-on-one organic chemistry tutoring from professional educators.",
            sameAs: [],
            areaServed: "US",
          })}
        </Script>

        {/* Wrap in Suspense to satisfy Next.js CSR bailout rules */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
