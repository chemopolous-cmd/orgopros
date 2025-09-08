"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") { setOpen(false); return; }

      if (e.key === "Tab") {
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, select, textarea'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        const isShift = e.shiftKey;

        if (!active || !panel.contains(active)) { e.preventDefault(); first.focus(); return; }
        if (!isShift && active === last) { e.preventDefault(); first.focus(); }
        else if (isShift && active === first) { e.preventDefault(); last.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const t = requestAnimationFrame(() => {
      const first = panel.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, select, textarea'
      );
      first?.focus();
    });
    return () => cancelAnimationFrame(t);
  }, [open]);

  return (
    <header className={[
      "sticky top-0 z-50 transition-shadow",
      "bg-brand-dark bg-[#00172C] text-white",
      "border-b border-brand-navy/60",
      scrolled ? "shadow-sm" : ""
    ].join(" ")}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-xl font-bold text-brand-teal hover:text-brand-tealHover" onClick={() => setOpen(false)}>
          Orgopros
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-white/90 hover:text-white">About Us</Link>
          <Link href="/pricing" className="text-white/90 hover:text-white">Pricing</Link>
          <Link href="/testimonials" className="text-white/90 hover:text-white">Testimonials</Link>
          <Link href="/contact" className="text-white/90 hover:text-white">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/get-started" className="rounded-xl bg-brand-teal px-4 py-2 text-sm font-semibold text-white hover:bg-brand-tealHover">
            Get Started
          </Link>
          <Link href="/tutor-signup" className="rounded-xl border border-brand-teal px-4 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-navy">
            Become a Tutor
          </Link>
        </div>

        <button
          className="md:hidden rounded-lg p-2 border border-white text-white hover:bg-brand-teal hover:text-white"
          aria-label="Open Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={(e) => { e.stopPropagation(); setOpen(v => !v); }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Backdrop */}
      <div className={[
        "md:hidden fixed inset-0 bg-black/40 transition-opacity duration-200",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      ].join(" ")} aria-hidden={!open} />

      {/* Panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={[
          "md:hidden fixed left-0 right-0 top-0 pt-[64px]",
          "z-[60] focus:outline-none",
          "transition-transform duration-200 ease-out",
          open ? "translate-y-0" : "-translate-y-full"
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-brand-navy/30 bg-brand-dark/95 backdrop-blur p-6">
            <nav className="grid gap-4 text-base">
              <Link onClick={() => setOpen(false)} href="/about" className="py-2 text-white/90 hover:text-white">About Us</Link>
              <Link onClick={() => setOpen(false)} href="/pricing" className="py-2 text-white/90 hover:text-white">Pricing</Link>
              <Link onClick={() => setOpen(false)} href="/testimonials" className="py-2 text-white/90 hover:text-white">Testimonials</Link>
              <Link onClick={() => setOpen(false)} href="/contact" className="py-2 text-white/90 hover:text-white">Contact</Link>
            </nav>

            <div className="mt-6 grid gap-3">
              <Link href="/get-started" onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-brand-teal px-4 py-2 font-semibold text-white hover:bg-brand-tealHover">
                Get Started
              </Link>
              <Link href="/tutor-signup" onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-xl border border-brand-teal px-4 py-2 font-semibold text-brand-teal hover:bg-brand-navy">
                Become a Tutor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
