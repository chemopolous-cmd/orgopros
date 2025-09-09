"use client";

import React, { FormEvent } from "react";

const CONTACT_EMAIL = "welcome@orgopros.com";

export default function GetStartedPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const interest = (form.elements.namedItem("interest") as HTMLSelectElement)?.value || "Have a question";
    const students = (form.elements.namedItem("students") as HTMLSelectElement)?.value || "1";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    const subject = encodeURIComponent(`Inquiry: ${interest} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nStudents: ${students}\nInterest: ${interest}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-brand-teal">
            Let’s Get Started
          </h1>
          <p className="mt-3 text-brand-navy/80">
            Have a question or ready to book? Tell us a bit and we’ll help right away.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-brand-navy/[0.02] py-6 sm:py-8">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 bg-white rounded-2xl p-6 border border-brand-navy/15"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-navy">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2 text-brand-navy placeholder:text-brand-navy/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-navy">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2 text-brand-navy placeholder:text-brand-navy/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-brand-navy">
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="mt-1 w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2 text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
                  defaultValue="Have a question"
                >
                  <option>Have a question</option>
                  <option>60-minute session ($65)</option>
                  <option>90-minute session ($97.50)</option>
                  <option>Package — 6 × 60-min ($360)</option>
                  <option>Group / multi-student</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="students" className="block text-sm font-medium text-brand-navy">
                  Students
                </label>
                <select
                  id="students"
                  name="students"
                  className="mt-1 w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2 text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
                  defaultValue="1"
                >
                  <option value="1">1 (one-on-one)</option>
                  <option value="2">2</option>
                  <option value="3-5">3–5 (small group)</option>
                  <option value="6+">6+ (class/group)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2 text-brand-navy placeholder:text-brand-navy/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
                placeholder="Ask anything or share your goals."
              />
            </div>

            <div className="flex items-center justify-between">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-brand-teal underline underline-offset-4"
              >
                Prefer email? {CONTACT_EMAIL}
              </a>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-brand-tealHover px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-brand-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
