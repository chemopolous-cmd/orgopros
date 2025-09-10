"use client";

import React, { FormEvent, useState } from "react";

export default function JobsPage() {
  const [submitting, setSubmitting] = useState(false);

  async function handleApply(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const formEl = e.currentTarget;

    const formData = new FormData(formEl);
    // Expect fields: name, email, website (optional), note, resume (File)

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData, // multipart/form-data automatically set by the browser
      });

      if (res.ok) {
        alert("✅ Application sent. Thank you!");
        formEl.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(`❌ Could not send application. ${data?.error ?? "Please try again later."}`);
      }
    } catch (err) {
      alert("❌ Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Become a tutor at OrgoPros</h1>
        <p className="mt-4 text-gray-700 text-lg">
          We’re a teacher-first team of organic chemists. We pay fairly, respect your time, and pair you with motivated students.
        </p>
      </header>

      <section className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border p-6 bg-white">
          <h2 className="text-xl font-semibold">Why tutor with us</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li>
              <strong>Industry-leading pay:</strong> we reward great teaching and consistent student outcomes.
            </li>
            <li>
              <strong>Teaching-first culture:</strong> we value clear explanations and live teaching ability, with supportive feedback and coaching.
            </li>
            <li>
              <strong>Flexible scheduling:</strong> set a schedule that fits your research, classes, and other commitments.
            </li>
            <li>
              <strong>Respect for prep time:</strong> we streamline administrative tasks so you can focus on working with students.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6 bg-white">
          <h2 className="text-xl font-semibold">What we look for</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li>Mastery of Organic Chemistry (Orgo I/II; synthesis, mechanisms, spectroscopy).</li>
            <li>Clear, patient communication; empathy and non-judgmental coaching.</li>
            <li>Ability to run student-led sessions and adapt on the fly.</li>
            <li>Prior teaching, tutoring, or TA experience is a plus.</li>
          </ul>
        </div>
      </section>

      {/* Application Form (sends directly via /api/apply, with resume upload) */}
      <section className="mt-12 rounded-2xl border p-6 bg-white">
        <h2 className="text-xl font-semibold">Apply now</h2>
        <p className="mt-3 text-sm text-gray-700">
          Send your details and resume here. We’ll reply by email if there’s a fit.
        </p>

        <form
          onSubmit={handleApply}
          className="mt-5 grid gap-4"
          encType="multipart/form-data"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-900">
              Website / LinkedIn (optional)
            </label>
            <input
              id="website"
              name="website"
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
              placeholder="https://www.linkedin.com/in/…"
            />
          </div>

          <div>
            <label htmlFor="note" className="block text-sm font-medium text-gray-900">
              Short note
            </label>
            <textarea
              id="note"
              name="note"
              rows={5}
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
              placeholder="Tell us about your teaching experience, availability, and interests."
            />
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-900">
              Resume (PDF/DOC/DOCX)
            </label>
            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40 file:mr-3 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 file:px-3 file:py-2 file:text-sm file:text-gray-700"
            />
            <p className="mt-1 text-xs text-gray-500">Max 10 MB.</p>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-xl bg-brand-tealHover px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-brand-teal disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60"
            >
              {submitting ? "Sending…" : "Submit application"}
            </button>
          </div>
        </form>
      </section>

      <p className="mt-8 text-xs text-gray-500">
        Files are sent securely to our hiring inbox. If you prefer, you can email{" "}
        <a className="underline" href="mailto:welcome@orgopros.com">welcome@orgopros.com</a>.
      </p>
    </main>
  );
}
