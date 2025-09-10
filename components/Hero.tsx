import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white">
      {/* Keep this identical to Navbar container so alignment matches */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Do NOT center the whole grid—only center content inside the left column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-auto sm:h-[44vh] lg:h-[56vh]">
          
          {/* LEFT COLUMN: text block centered within its half, text itself left-aligned */}
          <div className="h-full flex items-center justify-center">
            <div className="w-full max-w-xl text-left">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight text-brand-navy">
                great chemists.
                <span className="block text-brand-teal">better teachers.</span>
              </h1>

              {/* Primary tagline */}
              <p className="mt-2 text-xl text-brand-navy/90 font-medium leading-relaxed">
                Professional chemists, proven educators. Teaching skill at the core.
              </p>

              {/* Supporting tagline */}
              <p className="mt-2 text-base text-brand-navy/70 leading-relaxed max-w-[44ch]">
                We strive to find the best tutors, offer them industry-leading pay, and provide our students with the best learning experience.
              </p>

              {/* Actions */}
              <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/get-started"
                  aria-label="Get started with OrgoPros tutoring"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-tealHover px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60"
                >
                  Get Started
                </a>

                <a
                  href="/become-a-tutor"
                  aria-label="Learn about becoming a tutor at OrgoPros"
                  className="inline-flex items-center justify-center rounded-xl border border-brand-teal px-5 py-3 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/30"
                >
                  Become a Tutor
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: image fills the section height on sm+; unchanged so it won’t shift */}
          <div className="relative w-full h-[28vh] sm:h-full bg-white">
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
