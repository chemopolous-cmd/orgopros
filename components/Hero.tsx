"use client";


import Image from "next/image";
import Link from "next/link";


export default function Hero() {
return (
<section className="relative bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12 py-10 lg:py-16">
{/* LEFT COLUMN: text */}
<div>
<div className="w-full max-w-xl text-left">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight text-brand-navy">
great chemists.
<span className="block text-brand-teal">better teachers.</span>
</h1>


<p className="mt-2 text-xl text-brand-navy/90 font-medium leading-relaxed">
Professional chemists, proven educators. Teaching skill at the core.
</p>


<p className="mt-2 text-base text-brand-navy/70 leading-relaxed max-w-[44ch]">
We strive to find the best tutors, offer them industry-leading pay, and provide our students with the best learning experience.
</p>


<div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
<Link
href="/get-started"
aria-label="Get started with OrgoPros tutoring"
className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-brand-tealHover px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60"
>
Get Started
</Link>
<Link
href="/become-a-tutor"
aria-label="Learn about becoming a tutor at OrgoPros"
className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-brand-teal px-5 py-3 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/30"
>
Become a Tutor
</Link>
</div>
</div>
</div>


{/* RIGHT COLUMN: image with aspect ratio for mobile */}
<div className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-auto">
<Image
src="/hero.jpg"
alt="Student and tutor working through organic chemistry mechanisms"
fill
priority
sizes="(max-width: 1024px) 100vw, 50vw"
className="object-contain object-center"
/>
</div>
</div>
</div>
</section>
);
}