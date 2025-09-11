"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12 py-10 lg:py-16">
          {/* LEFT COLUMN: text */}
          <div>
            <div className="w-full max-w-xl text-left">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight text-brand-navy">
                great chemists.
                <span className="block text-brand-teal">better teachers.</span>
              </h1>

              {/* bump to align with section below */}
              <p className="mt-3 text-lg sm:text-xl text-brand-navy/90 font-medium leading-relaxed">
                Professional chemists, proven educators. Teaching skill at the core.
              </p>

              <p className="mt-2 text-base sm:text-lg text-brand-navy/70 leading-relaxed max-w-[44ch]">
                We strive to find the best tutors, offer them industry-leading pay, and provide our
                students with the best learning experience.
              </p>

              {/* exact sentence appended at end of hero text */}
              <p className="mt-2 text-base sm:text-lg text-brand-navy/70 leading-relaxed max-w-[44ch]">
                Organic chemistry is tough. Fining a great tutor shouldn't be.
              </p>

              {/* Buttons (visible from md+) */}
              <div className="mt-5 hidden md:flex md:flex-row gap-3 md:gap-4">
                <Link
                  href="/get-started"
                  aria-label="Get started with OrgoPros tutoring"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-tealHover px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60"
                >
                  Get Started
                </Link>
                <Link
                  href="/become-a-tutor"
                  aria-label="Learn about becoming a tutor at OrgoPros"
                  className="inline-flex items-center justify-center rounded-xl border border-brand-teal px-5 py-3 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/30"
                >
                  Become a Tutor
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: image — give it explicit height so Next/Image (fill) can render */}
          <div className="relative w-full h-[36vh] sm:h-[44vh] lg:h-[60vh]">
            <Image
              src="/hero.jpg"
              alt="Student and tutor working through organic chemistry mechanisms"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
