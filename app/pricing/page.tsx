export default function PricingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-brand-teal">Pricing</h1>
      <p className="mt-4 text-gray-700">
        Placeholder: list your tutoring rates, packages, and what’s included. You can also mention refund and
        rescheduling policies.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-brand-navy/20 bg-white p-6">
          <h2 className="text-lg font-semibold text-brand-navy">Single Session</h2>
          <p className="mt-2 text-gray-700">Placeholder price — e.g., $80 / 60 minutes.</p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
            <li>Professional organic chemistry tutor</li>
            <li>Recorded study plan and follow-up tips</li>
            <li>Email support between sessions</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-brand-navy/20 bg-white p-6">
          <h2 className="text-lg font-semibold text-brand-navy">Package</h2>
          <p className="mt-2 text-gray-700">Placeholder — e.g., 5 sessions for $375.</p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
            <li>Priority scheduling</li>
            <li>Personalized study plan</li>
            <li>Best value per session</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-gray-700">
        Placeholder policy: Full refund >24h before session; partial refund within 24h; no refund for no-shows.
      </p>
    </main>
  );
}
