export default function PricingPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>

      <p className="mt-6 text-lg text-gray-700">
        We keep pricing simple and transparent.
      </p>

      {/* Pricing Table */}
      <div className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse text-left text-gray-700">
          <thead>
            <tr className="border-b">
              <th className="py-3 font-semibold">Session Type</th>
              <th className="py-3 font-semibold">Length</th>
              <th className="py-3 font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">One-on-One Tutoring</td>
              <td className="py-3">60 minutes</td>
              <td className="py-3">$60</td>
            </tr>
            <tr className="border-b">
              <td className="py-3">One-on-One Tutoring</td>
              <td className="py-3">90 minutes</td>
              <td className="py-3">$85</td>
            </tr>
            <tr className="border-b">
              <td className="py-3">Package (5 × 60 min)</td>
              <td className="py-3">—</td>
              <td className="py-3">$270 (save 10%)</td>
            </tr>
            <tr>
              <td className="py-3">Package (10 × 60 min)</td>
              <td className="py-3">—</td>
              <td className="py-3">$510 (save 15%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Refund Policy */}
      <p className="mt-10 text-gray-700">
        {`Refund policy: Full refund if canceled more than 24h before the session; partial refund within 24h; no refund for no-shows.`}
      </p>

      {/* Call to Action */}
      <div className="mt-10">
        <a
          href="/contact"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md shadow hover:bg-emerald-700 transition"
        >
          Set up a call or chat to get started
        </a>
      </div>
    </main>
  );
}
