import React from "react";
import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-brand-teal">
            Testimonials
          </h1>
          <p className="mt-3 text-lg text-brand-navy/80 text-balance mx-auto max-w-3xl">
            Real students. Real results.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="bg-brand-navy/[0.02] py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Testimonials />

          {/* CTA — EXACTLY matches navbar (bg-brand-tealHover → hover bg-brand-teal) */}
          <div className="mt-8 flex justify-center">
            <a
              href="/get-started"
              aria-label="Begin with OrgoPros tutoring"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-brand-tealHover text-white hover:bg-brand-teal focus-visible:ring-2 focus-visible:ring-brand-teal/60 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
