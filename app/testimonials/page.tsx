import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
          Student testimonials
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Professional educators. Student-led sessions. Proven results.
        </p>
      </header>

      <div className="mt-10">
        <Testimonials />
      </div>
    </main>
  );
}
