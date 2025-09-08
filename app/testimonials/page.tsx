export default function TestimonialsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-brand-teal">Testimonials</h1>
      <p className="mt-4 text-gray-700">
        Placeholder: real quotes from students go here. For now, these are sample blurbs.
      </p>

      <div className="mt-10 space-y-6">
        <blockquote className="rounded-2xl border border-brand-navy/20 bg-white p-6">
          <p className="text-gray-900">
            “Orgopros made mechanisms finally click. I went from lost to confident in two weeks.”
          </p>
          <footer className="mt-3 text-sm text-gray-600">— Student, Orgo I</footer>
        </blockquote>

        <blockquote className="rounded-2xl border border-brand-navy/20 bg-white p-6">
          <p className="text-gray-900">
            “Clear, patient, and structured. The study plan after each session kept me accountable.”
          </p>
          <footer className="mt-3 text-sm text-gray-600">— Student, Orgo II</footer>
        </blockquote>

        <blockquote className="rounded-2xl border border-brand-navy/20 bg-white p-6">
          <p className="text-gray-900">
            “Best tutoring experience I’ve had. My grade and confidence both jumped.”
          </p>
          <footer className="mt-3 text-sm text-gray-600">— Premed Student</footer>
        </blockquote>
      </div>
    </main>
  );
}
