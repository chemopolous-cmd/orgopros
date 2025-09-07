import Hero from "@/components/Hero";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <Hero />

      {/* Features / text boxes section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Affordable for Students
              </h3>
              <p className="mt-3 text-gray-600">
                Pay less than our competitors while receiving top-tier tutoring
                from real organic chemistry professionals.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Fair Pay for Tutors
              </h3>
              <p className="mt-3 text-gray-600">
                We built Orgopros to pay teachers fairly — better pay attracts
                the best teachers, and students benefit.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Professional Educators
              </h3>
              <p className="mt-3 text-gray-600">
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
