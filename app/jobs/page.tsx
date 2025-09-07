import Link from 'next/link'
import { Button } from '@/components/ui/button'

const APPLY_EMAIL = 'welcome@orgopros.com' // change if needed

export default function JobsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Become a tutor at Orgopros</h1>
        <p className="mt-4 text-gray-700 text-lg">
          We’re a teacher-first team of organic chemists. We pay fairly, respect your time, and pair you with motivated students.
        </p>
      </header>

      <section className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border p-6 bg-white">
          <h2 className="text-xl font-semibold">Why tutor with us</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li><strong>Fair pay:</strong> keep ~70% to start; repeat sessions move you toward 80%.</li>
            <li><strong>Teaching-first culture:</strong> demo lesson as part of the interview; coaching and feedback.</li>
            <li><strong>Flexible scheduling:</strong> set availability around your research/classes/work.</li>
            <li><strong>Respect for prep time:</strong> we streamline admin so you can focus on students.</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6 bg-white">
          <h2 className="text-xl font-semibold">What we look for</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li>Mastery of Organic Chemistry (Orgo I/II; synthesis/mechanisms/spectroscopy).</li>
            <li>Clear, patient communication; empathy and non-judgmental coaching.</li>
            <li>Ability to run student-led sessions and adapt on the fly.</li>
            <li>Prior teaching/tutoring/TA experience is a plus.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border p-6 bg-white">
        <h2 className="text-xl font-semibold">How pay works</h2>
        <p className="mt-3 text-sm text-gray-700">
          We flip the industry norm: tutors begin around <strong>70%</strong> of the lesson price and step up toward <strong>80%</strong> with continued sessions.
        </p>
      </section>

      <section className="mt-12 rounded-2xl border p-6 bg-white">
        <h2 className="text-xl font-semibold">How to apply</h2>
        <ol className="mt-3 space-y-2 text-sm text-gray-700 list-decimal pl-5">
          <li>Send a short note and resume/CV to <a className="underline" href={`mailto:${APPLY_EMAIL}`}>{APPLY_EMAIL}</a>.</li>
          <li>If selected, we’ll schedule a 20–30 minute call.</li>
          <li>Teach a brief demo lesson (10–15 minutes) on a topic of your choice.</li>
        </ol>
        <div className="mt-6 flex items-center gap-3">
          <Button asChild>
            <a href={`mailto:${APPLY_EMAIL}?subject=Tutor%20Application%20-%20Orgopros`}>Apply via email</a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to homepage</Link>
          </Button>
        </div>
      </section>

      <p className="mt-8 text-xs text-gray-500">Note: Replace the APPLY_EMAIL constant if you want applications sent elsewhere.</p>
    </main>
  )
}
