import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        {/* Brand */}
        <div className="text-lg font-bold tracking-tight">
          <Link href="/">OrgoPros</Link>
        </div>

        {/* Primary nav links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-white/90 hover:text-white">Home</Link>
          <Link href="/about" className="text-white/90 hover:text-white">About Us</Link>
          <Link href="/testimonials" className="text-white/90 hover:text-white">Testimonials</Link>
          <Link href="/pricing" className="text-white/90 hover:text-white">Pricing</Link>
          {/* (Contact unified to Get Started; keep only the CTA) */}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Get started — lighter brand teal (matches Hero) */}
          <Link
            href="/get-started"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-brand-tealHover text-white hover:bg-brand-teal focus-visible:ring-2 focus-visible:ring-brand-teal/60 transition"
          >
            Get Started
          </Link>

          {/* Become a tutor — white outline */}
          <Link
            href="/jobs"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border-2 border-white text-white hover:bg-white hover:text-brand-dark transition"
          >
            Become a Tutor
          </Link>
        </div>
      </div>
    </nav>
  );
}
