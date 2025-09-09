import React from "react";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-brand-teal text-center">
            Pricing
          </h1>
          <p className="mt-4 text-lg text-brand-navy/80 text-balance mx-auto max-w-3xl text-center">
            Simple, transparent rates. Pay per session or choose a discounted package.
          </p>

          <div className="mt-8 grid gap-5 sm:gap-6 sm:grid-cols-2">
            {/* One-on-One Tutoring */}
            <div className="rounded-2xl bg-brand-navy/[0.02] p-6 border border-brand-navy/15">
              <h2 className="text-xl font-semibold text-brand-navy">
                One-on-One Tutoring
              </h2>

              <div className="mt-3 space-y-2 text-brand-navy/85">
                <div className="flex items-baseline justify-between">
                  <span className="text-brand-navy/80">60 minutes</span>
                  <span className="text-lg font-semibold">$65</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-brand-navy/80">90 minutes</span>
                  <span className="text-lg font-semibold">$97.50</span>
                </div>
              </div>

              <ul className="mt-4 list-disc list-outside pl-6 marker:text-brand-teal text-brand-navy/75 space-y-1.5">
                <li>Custom pacing &amp; problem sets</li>
                <li>Targeted practice for your class</li>
                <li>No sign-up fees</li>
              </ul>
            </div>

            {/* Package: 6 x 60 min */}
            <div className="rounded-2xl bg-brand-navy/[0.02] p-6 border border-brand-navy/15">
              <h2 className="text-xl font-semibold text-brand-navy">
                Package — 6 × 60-min
              </h2>

              <div className="mt-3 flex items-baseline justify-between text-brand-navy/85">
                <span className="text-brand-navy/80">Six total hours</span>
                <span className="text-lg font-semibold">$360</span>
              </div>

              <p className="mt-2 text-sm text-brand-navy/70">
                Effective rate: <span className="font-medium">$60/hr</span>
              </p>

              <ul className="mt-4 list-disc list-outside pl-6 marker:text-brand-teal text-brand-navy/75 space-y-1.5">
                <li>Flexible scheduling</li>
                <li>Goal-based study plans</li>
                <li>Perfect for steady weekly support</li>
              </ul>
            </div>
          </div>

          {/* Custom & Group Pricing */}
          <div className="mt-8 rounded-2xl bg-brand-navy/[0.02] p-6 border border-brand-navy/15 text-center">
            <p className="text-brand-navy/80">
              Looking for <span className="font-medium">larger packages</span> or
              <span className="font-medium"> multi-student/group</span> sessions?{" "}
              <a href="/get-started" className="text-brand-teal underline underline-offset-4">
                Contact us
              </a>{" "}
              for a custom quote.
            </p>
          </div>

          {/* Refund Policy */}
          <div className="mt-6 rounded-2xl bg-brand-navy/[0.02] p-6 border border-brand-navy/15">
            <h3 className="text-lg font-semibold text-brand-navy">Refund Policy</h3>
            <ul className="mt-3 list-disc list-outside pl-6 marker:text-brand-teal text-brand-navy/75 space-y-2">
              <li>Cancel more than 24 hours before: <span className="font-medium">100% refund</span>.</li>
              <li>Cancel less than 24 hours before: <span className="font-medium">50% refund</span>.</li>
              <li>No-show (missed appointment): <span className="font-medium">no refund</span>.</li>
              <li>Packages: <span className="font-medium">50% refund</span> of any <span className="font-medium">unused time</span>.</li>
            </ul>
          </div>

          {/* Single bottom CTA (matches navbar color) */}
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
