import React from "react";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Hero />

      {/* Why choose OrgoPros? */}
      <section className="bg-brand-navy/[0.02] py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-teal">
            Why choose OrgoPros?
          </h2>

          {/* Branded bullets */}
          <ul className="mt-4 mx-auto max-w-4xl text-left list-disc list-outside pl-6 marker:text-brand-teal text-brand-navy/75 sm:text-lg space-y-3">
            <li>
              We hire tutors through live interviews and teaching demos — never by AI - ensure that they are knowledgeable chemists and great teachers.
            </li>
            <li>
              People-first support from real teachers — no automated responses, ticket queues, or bots.
            </li>
            <li>
              Lean overhead means you pay less, and tutors earn more. Our starting pay is ~3x higher than our competitors.
            </li>
          </ul>
        </div>
      </section>

      {/* Features / text boxes */}
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className="rounded-2xl bg-brand-navy/[0.02] p-6 shadow-sm border border-brand-navy/15 transition-transform hover:-translate-y-[1px]">
              <h3 className="text-xl font-semibold text-brand-navy">Professional Educators</h3>
              <p className="mt-2.5 text-brand-navy/80">
                Professional chemists and proven teachers who pace to your needs, build intuition, and provide need-to-know insight about test topics.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl bg-brand-navy/[0.02] p-6 shadow-sm border border-brand-navy/15 transition-transform hover:-translate-y-[1px]">
              <h3 className="text-xl font-semibold text-brand-navy">Tailored Learning</h3>
              <p className="mt-2.5 text-brand-navy/80">
                We help you design a learning plan to meet your individual goals, from high school students to future doctors to organic chemistry majors and graduate students.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl bg-brand-navy/[0.02] p-6 shadow-sm border border-brand-navy/15 transition-transform hover:-translate-y-[1px]">
              <h3 className="text-xl font-semibold text-brand-navy">Fair Pay means Top Tutors</h3>
              <p className="mt-2.5 text-brand-navy/80">
                We built OrgoPros to attract top talent with better pay. Fair pay attracts and keeps top instructors — so students get consistent, high-quality instruction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
