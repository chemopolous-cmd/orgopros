"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, DollarSign, Sparkles, Check, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-600" />
            <span className="font-semibold tracking-tight">Orgopros</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-emerald-700">How it works</a>
            <a href="#testimonials" className="hover:text-emerald-700">Testimonials</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="hidden sm:inline-flex" asChild>
              <a href="#book">Book a session</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/jobs">Become a tutor</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              great chemists.
              <span className="block text-emerald-600">better teachers.</span>
            </motion.h1>

            <p className="mt-6 text-lg text-gray-700 max-w-prose">
              Professional chemists, proven educators. Teaching skill at the core.
              Students pay less than our competitors. We built Orgopros to pay teachers fairly —
              better pay attracts the best teachers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <a href="#book" className="inline-flex items-center gap-2">
                  Book a session <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/jobs" className="inline-flex items-center gap-2">
                  Become a tutor <Users className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <ul className="mt-8 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Student-led tutoring: no judgement, your questions drive the session.</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Tutors are paid fairly (target 70–80%), students pay less than competitors.</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/> Specialists in Organic Chemistry for pre-meds and majors.</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <img
                src="/orgopros-hero-graphic.png"
                alt="Orgopros hero graphic placeholder"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section id="how" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <DollarSign className="h-8 w-8"/>
              <h3 className="mt-4 text-xl font-semibold">Fair pay → better tutors</h3>
              <p className="mt-2 text-gray-600 text-sm">
                We flip the industry norm: tutors keep ~70% to start, rising toward 80% with continued sessions. Lower overhead means better value for students.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <GraduationCap className="h-8 w-8"/>
              <h3 className="mt-4 text-xl font-semibold">Professional chemists, proven educators</h3>
              <p className="mt-2 text-gray-600 text-sm">
                We hire for teaching skill first. Every tutor teaches a demo lesson in the interview. Clear explanations, patient pacing, strong outcomes.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8"/>
              <h3 className="mt-4 text-xl font-semibold">Student-led sessions</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Your questions drive the agenda. We meet you at your level and build confidence problem by problem.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TESTIMONIALS placeholder */}
      <section id="testimonials">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What students say</h2>
          <p className="mt-2 text-gray-600">Replace with real testimonials soon.</p>
        </div>
      </section>

      {/* CTA STRIP */}
      <section id="book" className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Ready to feel confident in Orgo?</h3>
            <p className="text-white/90 mt-1">Book a one-on-one session with a teacher-first organic chemist.</p>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <a href="#">See availability</a>
          </Button>
        </div>
      </section>

      {/* FAQ condensed */}
      <section id="faq">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
        </div>
      </section>

      {/* JOBS teaser (links to /jobs) */}
      <section id="jobs" className="bg-gray-50 border-t">
        <a href="/jobs" className="block">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Become a tutor</h2>
            <p className="mt-3 text-gray-700">We’re building a teacher-first orgo team. Fair pay, respect for your time, and students who are eager to learn.</p>
          </div>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Orgopros. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
