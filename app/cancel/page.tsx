export default function CancelPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-brand-navy">Payment Canceled</h1>
      <p className="mt-4 text-gray-700">
        Your payment was not completed. You can try again at any time.
      </p>

      <div className="mt-10 rounded-2xl border border-brand-navy/20 bg-white p-8">
        <p className="text-gray-700">
          If you ran into an issue, contact us and we’ll help you get scheduled.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <a
          href="/get-started"
          className="inline-flex items-center justify-center rounded-xl bg-brand-teal px-6 py-3 font-semibold text-white hover:bg-brand-tealHover"
        >
          Try Payment Again
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl border border-brand-teal px-6 py-3 font-semibold text-brand-teal hover:bg-brand-navy"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
