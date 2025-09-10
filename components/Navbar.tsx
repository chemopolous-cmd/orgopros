"use client";

import Link from "next/link";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Navbar() {
  function trackCTA() {
    window.gtag?.("event", "select_content", {
      content_type: "cta",
      link_text: "Get Started",
      location: "navbar",
    });
  }

  return (
    <nav className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        {/* Brand */}
        <div className="text-lg font-bold tracking-tight">
          <Link href="/">OrgoPros</Link>
        </div>

        {/* Primary nav links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-white/90 hover:text-white">Home</Link>
          <Link href="/about" className="text-white/90 hover:text-white">About Us</Link>
          <Link href="/testimonials" className="text-white/90 hover:text-white">Testimonials</Link>
          <Link href="/pricing" className="text-white/90 hover:text-white">Pricing</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/get-started"
            onClick={trackCTA}
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-brand-tealHover text-white hover:bg-brand-teal focus-visible:ring-2 focus-visible:ring-brand-teal/60 transition"
          >
            Get Started
          </Link>

          <Link
            href="/jobs"
            className="inline-flex items-center rounded-xl px-3.5 py-2 text-sm font-semibold border border-white text-white hover:bg-brand-dark/80 hover:text-white hover:ring-2 hover:ring-brand-teal/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60 transition"
          >
            Become a Tutor
          </Link>
        </div>
      </div>
    </nav>
  );
}
