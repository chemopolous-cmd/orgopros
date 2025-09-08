import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        {/* Brand */}
        <div className="text-lg font-bold tracking-tight">
          <Link href="/">Orgopros</Link>
        </div>

        {/* Primary nav links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white/90 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-white/90 hover:text-white">
            About Us
          </Link>
          <Link href="/testimonials" className="text-white/90 hover:text-white">
            Testimonials
          </Link>
          <Link href="/pricing" className="text-white/90 hover:text-white">
            Pricing
          </Link>
          <Link href="/contact" className="text-white/90 hover:text-white">
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Get started — teal CTA (now with larger padding) */}
          <Link
            href="/get-started"
            className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold bg-teal-600 text-white hover:bg-teal-700 transition"
          >
            Get Started
          </Link>

          {/* Become a tutor — solid white border, same size as CTA */}
          <Link
            href="/jobs"
            className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium border-2 border-white text-white hover:bg-white hover:text-slate-900 transition"
          >
            Become a Tutor
          </Link>
        </div>
      </div>
    </nav>
  );
}
