export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-brand-teal">Payment Successful</h1>
      <p className="mt-4 text-gray-700">
        Thank you — your tutoring session is confirmed. We’ll email you details shortly.
      </p>

      <div className="mt-10 rounded-2xl border border-brand-navy/20 bg-white p-8">
        <p className="text-gray-700">
          If you need to reschedule, reply to the confirmation email or use the link provided.
        </p>
      </div>

      <a
        href="/"
        className="mt-10 inline-flex items-center justify-center rounded-xl bg-brand-teal px-6 py-3 font-semibold text-white hover:bg-brand-tealHover"
      >
        Back to Home
      </a>
    </main>
  );
}
