import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Lock section height on sm+ so the image can fill it */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-auto sm:h-[44vh] lg:h-[56vh]">
          {/* Left: copy */}
          <div className="py-6 sm:py-8 lg:py-10">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight text-brand-navy">
              great chemists.
              <span className="block text-brand-teal">better teachers.</span>
            </h1>

            {/* Primary tagline */}
            <p className="mt-2 text-xl text-brand-navy/90 font-medium max-w-md leading-relaxed">
              Professional chemists, proven educators. Teaching skill at the core.
            </p>

            {/* Supporting tagline */}
            <p className="mt-2 text-base text-brand-navy/70 max-w-prose leading-relaxed">
              We strive to find the best tutors, offer them industry-leading pay, and provide our students with the best learning experience.
            </p>

            {/* Actions */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* CONTRASTING TEAL: filled primary button */}
              <a
                href="/get-started"
                aria-label="Get started with OrgoPros tutoring"
                className="inline-flex items-center justify-center rounded-xl bg-brand-teal px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-tealHover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60"
              >
                Get Started
              </a>

              {/* Secondary: teal outline */}
              <a
                href="/become-a-tutor"
                aria-label="Learn about becoming a tutor at OrgoPros"
                className="inline-flex items-center justify-center rounded-xl border border-brand-teal px-5 py-3 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/30"
              >
                Become a Tutor
              </a>
            </div>
          </div>

          {/* Right: image fills the section height on sm+ */}
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
