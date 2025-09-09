export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white mt-8">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Brand + blurb */}
          <div>
            <div className="text-xl font-bold">OrgoPros</div>
            <p className="mt-2 text-white/80">
              One-on-one organic chemistry tutoring from professional educators.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="space-y-2">
            <a href="/about" className="block text-white/90 hover:text-white">
              About
            </a>
            <a href="/pricing" className="block text-white/90 hover:text-white">
              Pricing
            </a>
            <a href="/testimonials" className="block text-white/90 hover:text-white">
              Testimonials
            </a>
            <a href="/get-started" className="block text-white/90 hover:text-white">
              Get Started
            </a>
          </nav>

          {/* Contact */}
          <div className="space-y-2">
            <div className="text-white/90">Questions?</div>
            <a
              href="mailto:welcome@orgopros.com"
              className="text-brand-teal underline underline-offset-4"
            >
              welcome@orgopros.com
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 border-t border-white/10 pt-4 text-sm text-white/60">
          © {new Date().getFullYear()} OrgoPros. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
