export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-brand-teal">Contact</h1>
      <p className="mt-4 text-gray-700">
        Placeholder: add your email, response time, and (optionally) a contact form. You can also direct students
        to Get Started for faster booking.
      </p>

      <div className="mt-8 rounded-2xl border border-brand-navy/20 bg-white p-6">
        <h2 className="text-lg font-semibold text-brand-navy">Email</h2>
        <p className="mt-2 text-gray-700">hello@orgopros.com (placeholder)</p>
        <p className="mt-2 text-gray-700">We typically reply within 1 business day.</p>
      </div>

      <form className="mt-10 grid gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-900">Your name</label>
          <input className="mt-2 w-full rounded-xl border px-4 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Email</label>
          <input type="email" className="mt-2 w-full rounded-xl border px-4 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Message</label>
          <textarea className="mt-2 w-full rounded-xl border px-4 py-2" rows={4} placeholder="How can we help?" />
        </div>
        <button className="inline-flex items-center justify-center rounded-2xl bg-brand-teal px-5 py-3 font-semibold text-white hover:bg-brand-tealHover">
          Send
        </button>
      </form>
    </main>
  );
}
