"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = { href: string; label: string };

export default function MobileNav({
  items,
  secondaryCta,
}: {
  items: NavItem[];
  secondaryCta?: { href: string; label: string };
}) {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  function trackCTA() {
    (globalThis as any)?.gtag?.("event", "select_content", {
      content_type: "cta",
      link_text: "Get Started",
      location: "navbar",
    });
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  const backdropClasses = open
    ? "fixed inset-0 z-40 bg-black/40 transition-opacity opacity-100"
    : "fixed inset-0 z-40 bg-black/40 transition-opacity pointer-events-none opacity-0";

  const drawerClasses = open
    ? "fixed inset-y-0 left-0 z-50 w-5/6 max-w-sm transform bg-brand-dark text-white shadow-xl transition-transform translate-x-0"
    : "fixed inset-y-0 left-0 z-50 w-5/6 max-w-sm transform bg-brand-dark text-white shadow-xl transition-transform -translate-x-full";

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-3">
        <button
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/30 text-white"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <button
          onClick={() => {
            trackCTA();
            router.push("/get-started");
          }}
          className="ml-1 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-brand-tealHover text-white hover:bg-brand-teal focus-visible:ring-2 focus-visible:ring-brand-teal/60 transition"
        >
          Get Started
        </button>
      </div>

      <button
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={backdropClasses}
      ></button>

      <aside role="dialog" aria-modal="true" className={drawerClasses}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <span className="text-lg font-semibold">Menu</span>
          <button
            ref={closeBtnRef}
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="rounded-xl p-2 ring-1 ring-white/30"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <nav className="px-2 py-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl border border-white px-4 py-3 text-center text-base font-semibold hover:bg-white/10"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </nav>
      </aside>
    </div>
  );
}
