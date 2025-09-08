export default function Hero({
  imageSrc = "/hero.png",
  imageAlt = "Students learning organic chemistry",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-20">
          {/* Left column: text */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="!text-brand-teal">great chemists.</span>
              <span className="block !text-brand-navy">better teachers.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-prose">
              Professional chemists, proven educators. Teaching skill at the core.
              At Orgopros, students pay less while teachers earn more — better pay
              attracts the best tutors, and students benefit.
            </p>
          </div>

          {/* Right column: hero image */}
          <div className="relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-2xl shadow-lg border border-brand-navy/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
