import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Success!</h1>

      <p className="mt-6 text-gray-700">
        Your message was sent. We’ll get back to you shortly.
      </p>

      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center rounded-xl px-5 py-3 bg-emerald-600 text-white hover:bg-emerald-700 transition"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
