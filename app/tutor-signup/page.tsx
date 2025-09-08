export default function TutorSignupPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Become a Tutor</h1>
      <p className="mt-4 text-gray-700">
        We’re professional chemists and proven educators. Apply below — we pay fairly and prioritize teaching skill.
      </p>

      <form className="mt-10 grid gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-900">Full name</label>
          <input
            className="mt-2 w-full rounded-xl border px-4 py-2"
            placeholder="Marie Curie"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900">Email</label>
          <input
            type="email"
            className="mt-2 w-full rounded-xl border px-4 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900">Background</label>
          <textarea
            className="mt-2 w-full rounded-xl border px-4 py-2"
            rows={4}
            placeholder="Degrees, teaching experience, topics you love to teach"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Apply
        </button>
      </form>
    </main>
  );
}
