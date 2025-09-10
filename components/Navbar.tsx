"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
  function trackCTA() {
    (globalThis as any)?.gtag?.("event", "select_content", {
      content_type: "cta",
      link_text: "Get Started",
      location: "navbar",
    });
  }

  const NAV_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white">
      <nav className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        <div className="text-lg font-bold tracking-tight">
          <Link href="/">OrgoPros</Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((it) => (
            <Link key={it.href} href={it.href} className="text-white/90 hover:text-white">
              {it.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
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

        <div className="md:hidden">
          <MobileNav
            items={NAV_ITEMS}
            secondaryCta={{ href: "/jobs", label: "Become a Tutor" }}
          />
        </div>
      </nav>
    </header>
  );
}
