import Hero from "@/components/Hero";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <Hero />

      {/* Our Value Proposition section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-brand-teal">
            Our Value Proposition
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Placeholder: why Orgopros stands out as the best choice for organic chemistry tutoring.
          </p>
          <ul className="mt-6 space-y-3 text-left max-w-xl mx-auto list-disc list-inside text-gray-700">
            <li>Placeholder bullet point one</li>
            <li>Placeholder bullet point two</li>
            <li>Placeholder bullet point three</li>
          </ul>
        </div>
      </section>

      {/* Features / text boxes section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm border border-brand-navy/20">
              <h3 className="text-xl font-semibold text-brand-navy">
                Affordable for Students
              </h3>
              <p className="mt-3 text-gray-700">
                Pay less than our competitors while receiving top-tier tutoring
                from real organic chemistry professionals.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm border border-brand-navy/20">
              <h3 className="text-xl font-semibold text-brand-navy">
                Fair Pay for Tutors
              </h3>
              <p className="mt-3 text-gray-700">
                We built Orgopros to pay teachers fairly — better pay attracts
                the best teachers, and students benefit.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm border border-brand-navy/20">
              <h3 className="text-xl font-semibold text-brand-navy">
                Professional Educators
              </h3>
              <p className="mt-3 text-gray-700">
                All of our tutors are professional chemists and proven educators,
                with a student-led, supportive approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
