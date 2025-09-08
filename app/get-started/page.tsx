export default function GetStartedPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Get Started</h1>
      <p className="mt-4 text-gray-700">
        Tell us a bit about your course and goals. We'll match you with an organic chemistry tutor who’s the right fit.
      </p>

      <form className="mt-10 grid gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-900">Your name</label>
          <input
            className="mt-2 w-full rounded-xl border px-4 py-2"
            placeholder="Ada Lovelace"
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
          <label className="block text-sm font-medium text-gray-900">Course / University</label>
          <input
            className="mt-2 w-full rounded-xl border px-4 py-2"
            placeholder="Organic Chemistry I — State U"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900">
            What do you need help with?
          </label>
          <textarea
            className="mt-2 w-full rounded-xl border px-4 py-2"
            rows={4}
            placeholder="Mechanisms, stereochemistry, exam prep, etc."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
