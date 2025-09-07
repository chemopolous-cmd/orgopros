import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="block">great chemists.</span>
              <span className="block text-emerald-600">better teachers.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-prose">
              Professional organic chemistry tutors. Student‑led sessions, zero judgment, clear results.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm ring-1 ring-gray-900/10 hover:shadow lg:text-lg"
              >
                Get matched with a tutor
              </a>
              <a href="#how-it-works" className="text-base font-semibold underline-offset-4 hover:underline">
                How it works
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* IMPORTANT: place /public/hero.png in your project */}
            <Image
              src="/hero.png"
              alt="Orgopros hero graphic"
              width={1200}
              height={900}
              priority
              className="w-full h-auto rounded-2xl shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
