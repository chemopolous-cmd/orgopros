type Testimonial = {
  name: string;
  role?: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alyssa P.",
    role: "Pre-med, OChem II",
    quote:
      "The sessions were exactly what I needed—clear, patient explanations with zero judgment. My exam score jumped by 18 points.",
  },
  {
    name: "Marcus G.",
    role: "Chemistry major",
    quote:
      "They don’t just give answers; they teach you how to think through mechanisms. Best tutoring experience I’ve had.",
  },
  {
    name: "Sara K.",
    role: "Post-bacc student",
    quote:
      "Scheduling was easy and the tutors are professional educators. I finally feel confident with synthesis problems.",
  },
  {
    name: "Diego R.",
    role: "Biology major",
    quote:
      "Straightforward, student-led sessions. We focused on exactly what I needed—no fluff. Worth every penny.",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900"
          >
            What students say
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Real feedback from learners who used our one-on-one organic
            chemistry tutoring.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-slate-800">
                <p className="text-base leading-relaxed">
                  “{t.quote}”
                </p>
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-semibold text-slate-900">{t.name}</div>
                {t.role ? (
                  <div className="text-sm text-slate-500">{t.role}</div>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Call-to-action beneath testimonials */}
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="/get-started"
            className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold bg-teal-600 text-white hover:bg-teal-700 transition"
          >
            Get Started
          </a>
          <a
            href="/pricing"
            className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition"
          >
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
