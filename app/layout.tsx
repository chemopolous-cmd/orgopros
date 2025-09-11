import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { Suspense } from "react";

// ===== Site URL (prefer env; fall back for local dev) =====
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.orgopros.com";

// Your GTM container ID (replace here or via env)
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MS6LZ3Z5";
// ==========================================================

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
      <head>
        {/* Google Tag Manager (head) */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=${GTM_ID}'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* JSON-LD: Organization schema */}
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
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <Navbar />
        {children}
        <Footer />

        {/* Wrap in Suspense to satisfy Next.js CSR bailout rules */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
