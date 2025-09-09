import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Single, compact section with copy left + image right */}
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10">
            {/* Left: full about text */}
            <div className="py-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-teal">
                About OrgoPros
              </h1>
              <div className="mt-3 text-lg text-brand-navy/80 space-y-4 max-w-prose">
                <p>
                  We’re PhD organic chemists who believe students deserve more from one-on-one tutoring.
                  Across different classrooms and departments we ran into the same issue: subject mastery
                  and great teaching are different skills. <span className="font-medium text-brand-navy">OrgoPros</span> exists to bring both together.
                </p>
                <p>
                  While many tutoring platforms screen with AI or a quick test, we hire the way schools should:
                  a personal application and live sample lessons. We look for clarity, pacing, and the ability to build
                  intuition — not just correct answers.
                </p>
                <p>
                  We also built incentives that value teaching. Competitors often pay tutors a small fraction of what students are charged;
                  our starting pay is roughly <span className="font-semibold">3× higher</span> than typical platforms, with room to grow.
                  Your money goes to a great teacher, not to overhead.
                </p>
              </div>
            </div>

            {/* Right: hero image (matches site styling) */}
            <div className="relative w-full h-[28vh] sm:h-[40vh] lg:h-[56vh] bg-white">
              <Image
                src="/hero.jpg"
                alt="Student and tutor reviewing organic chemistry mechanisms"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
