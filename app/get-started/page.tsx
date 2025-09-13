"use client";

import React, { FormEvent } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function GetStartedPage() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const interest = (form.elements.namedItem("interest") as HTMLSelectElement)?.value;
    const courseTitle = (form.elements.namedItem("courseTitle") as HTMLInputElement)?.value || "";
    const startWhen = (form.elements.namedItem("startWhen") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, interest, courseTitle, startWhen, message }),
    });

    if (res.ok) {
      // GA4 conversion: lead
      window.gtag?.("event", "generate_lead", {
        method: "contact_form",
        interest,
      });

      // Google Tag Manager event for Ads conversion
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "get_started_submit",
        interest,
      });

      alert("✅ Thanks! Your message has been sent.");
      form.reset();
    } else {
      alert("❌ Oops, something went wrong. Please try again later.");
    }
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

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-brand-navy">
                How can we help you?
              </label>
              <select
                id="interest"
                name="interest"
                className="mt-1 w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2 text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
                defaultValue="Match with a Tutor"
              >
                <option>Match with a Tutor</option>
                <option>General Inquiries</option>
              </select>
            </div>

            {/* Optional fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="courseTitle" className="block text-sm font-medium text-brand-navy">
                  Course Title <span className="text-brand-navy/50">(optional)</span>
                </label>
                <input
                  id="courseTitle"
                  name="courseTitle"
                  className="mt-1 w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2 text-brand-navy placeholder:text-brand-navy/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
                  placeholder="e.g., Organic Chemistry I"
                />
              </div>

              <div>
                <label htmlFor="startWhen" className="block text-sm font-medium text-brand-navy">
                  When would you like to start? <span className="text-brand-navy/50">(optional)</span>
                </label>
                <input
                  id="startWhen"
                  name="startWhen"
                  className="mt-1 w-full rounded-xl border border-brand-navy/20 bg-white px-3 py-2 text-brand-navy placeholder:text-brand-navy/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
                  placeholder="e.g., Next week / Sept 20"
                />
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
                placeholder="Anything else we should know?"
              />
            </div>

            {/* Friendly note */}
            <p className="text-sm italic text-brand-navy/60">
              This inbox is monitored by real humans 👋 — we usually get back to you within a few hours.
            </p>

            <div className="flex items-center justify-end">
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
