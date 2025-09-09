import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ===== IDs & site URL (prefer env; fall back for local dev) =====
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.orgopros.com";

// GA4 Measurement ID (env preferred; fallback is your real ID for local)
const GA4_ID =
  process.env.NEXT_PUBLIC_GA4_ID || "G-QZRQ96EF8Z";

// Google Ads account Conversion ID (NOT the label). Keep placeholder
// until you add NEXT_PUBLIC_ADS_ID in .env.local / Vercel.
const ADS_ID =
  process.env.NEXT_PUBLIC_ADS_ID || "AW-XXXXXXX";
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
    // TEMP placeholder image; replace with "/og.jpg" once you add it to /public
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
  // Using an SVG favicon placeholder (in /public). Swap to /favicon.ico if you prefer.
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  // If verifying Google Search Console via meta tag:
  // other: { "google-site-verification": "YOUR_VERIFICATION_TOKEN" },
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
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());

            // GA4 base config
            gtag('config', '${GA4_ID}', { send_page_view: true });

            // Google Ads account-level config (safe if placeholder; does nothing until real ID)
            gtag('config', '${ADS_ID}');
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
      </body>
    </html>
  );
}
