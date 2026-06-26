import { AlertCircle, Sparkles, Frown, HeartCrack, AlarmClockOff, Award, BrainCircuit } from 'lucide-react'
import { Heading } from './Heading'
import { ComparisonItem } from './ComparisonItem'

// ─── Panel data ───────────────────────────────────────────────────────────────

const PROBLEM_ITEMS = [
  {
    icon: AlertCircle,
    title: 'Generic Results',
    description:
      'Scrolling through review sites that treat everyone the same — no context, no taste, no you.',
  },
  {
    icon: AlarmClockOff,
    title: 'Decision Overload',
    description:
      'Too many options, no clear answer. You spend more time choosing than eating.',
  },
  {
    icon: HeartCrack,
    title: 'Wrong Fit',
    description:
      "A 4.8-star rating means nothing if the restaurant doesn't match your mood or dietary needs.",
  },
] as const

const SOLUTION_ITEMS = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered Search',
    description:
      'Describe what you want in plain language — Swiss German, or English. Youmii finds it instantly.',
    variant: 'solution-orange' as const,
  },
  {
    icon: Award,
    title: 'Discover by Mood',
    description:
      'Tap a mood chip — Romantic, Terrace, Business, Vegan — and see matched restaurants immediately.',
    variant: 'solution-blue' as const,
  },
  {
    icon: Award,
    title: 'Book in the App',
    description:
      'Select your date, party size, and dietary needs. Reservation confirmed by push notification.',
    variant: 'solution-orange' as const,
  },
] as const

// ─── Component ────────────────────────────────────────────────────────────────

export interface ComparisonSectionProps {
  className?: string
}

export function ComparisonSection({ className = '' }: ComparisonSectionProps) {
  return (
    <section className={`section${className ? ` ${className}` : ''}`}>
      <div className="container flex flex-col gap-10 lg:gap-14">

        {/* Heading */}
        <Heading
          badgeText="WHY YOUMII"
          title={
            <>
              Stop Settling for <span className="text-primary">Good Enough</span>
            </>
          }
          subtitle="Most apps show you everything. Youmii shows you what's right for you."
          align="center-align"
        />

        {/* Two-panel grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

          {/* ── Left: The Old Way ─────────────────────────────────── */}
          <div className="relative rounded-[32px] border border-[#ebebeb] p-6 sm:p-8 md:p-10 flex flex-col gap-6 md:gap-8 opacity-90">
            {/* Warm grey background */}
            <div className="absolute inset-0 rounded-[32px] bg-[#f6f3ef]" aria-hidden="true" />
            <div className="absolute inset-0 rounded-[32px] bg-white/20 mix-blend-saturation" aria-hidden="true" />

            {/* Panel header */}
            <div className="relative flex items-center gap-4">
              <div className="shrink-0 size-12 rounded-full bg-[rgba(90,65,56,0.1)] flex items-center justify-center">
                <Frown className="size-5 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-body-text">The Old Way</h3>
            </div>

            {/* List items */}
            <div className="relative flex flex-col gap-6">
              {PROBLEM_ITEMS.map((item) => (
                <ComparisonItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variant="problem"
                />
              ))}
            </div>
          </div>

          {/* ── Right: The Youmii Way ─────────────────────────────── */}
          <div
            className="relative rounded-[32px] border-2 border-white shadow-[0px_10px_40px_0px_rgba(0,0,0,0.15)] overflow-hidden p-6 sm:p-8 md:p-10 flex flex-col gap-6 md:gap-8"
            style={{
              background:
                'linear-gradient(131deg, #ffffff 2%, rgba(251,217,193,0.76) 53%, rgba(249,190,151,0.6) 88%)',
            }}
          >
            {/* Panel header */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 size-12 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="size-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-body-text">The Youmii Way</h3>
            </div>

            {/* List items */}
            <div className="flex flex-col gap-6">
              {SOLUTION_ITEMS.map((item) => (
                <ComparisonItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variant={item.variant}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
