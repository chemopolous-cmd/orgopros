import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          great chemists.<span className="block text-emerald-600">better teachers.</span>
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-prose">
          One-on-one organic chemistry tutoring from professional educators.
        </p>

        <div className="mt-10">
          {/* Use the same path you used in <img src="..."> */}
          <Image
            src="/hero-graphic.png"
            alt="Molecules"
            width={1600}        // set to your image’s intrinsic width
            height={900}        // set to your image’s intrinsic height
            className="w-full h-auto"
            priority            // keep if image is above the fold
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>
    </section>
  );
}
