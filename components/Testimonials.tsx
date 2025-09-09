import React from "react";

type Testimonial = {
  quote: string;
  author: string; // initials only
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I worked with my tutor across both semesters of organic chemistry. Clear explanations and pacing turned a tough class into something I looked forward to. I went from a C average to a B+ first term and kept improving the second.",
    author: "K.G.",
  },
  {
    quote:
      "My tutor has been a rockstar throughout this semester. I definitely would not have made it through without his support! I truly appreciate everything he has done to assist me. My last test is tomorrow and I am more than ready to kick some ass. Thanks!",
    author: "M.W.",
  },
  {
    quote:
      "My tutor at OrgoPros is an excellent tutor. He explains the content in ways I understand, is patient with me, and always has a positive attitude.",
    author: "M.K.",
  },
  {
    quote:
      "Mechanisms finally clicked. My tutor’s ‘why it works’ approach made reactions predictable instead of memorized.",
    author: "L.R.",
  },
  {
    quote:
      "Every session ended with a clear plan and targeted practice. Flexible around my lab schedule and huge confidence boost before finals.",
    author: "T.P.",
  },
  {
    quote:
      "Supportive, clear, and organized. I stopped cramming and actually started getting it — my exams showed it.",
    author: "A.N.",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map((t, i) => (
        <figure
          key={i}
          className="rounded-2xl bg-white p-6 border border-brand-navy/15 shadow-sm"
        >
          <blockquote className="text-brand-navy/85">“{t.quote}”</blockquote>
          <figcaption className="mt-4 text-sm font-medium text-brand-navy/70">
            — {t.author}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
