import { Users, Calendar, BarChart2, TrendingUp } from 'lucide-react'
import { Heading } from '../ui/Heading'
import { ValueCard } from '../cards/ValueCard'

// ─── Data ─────────────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: Users,
    title: 'Restaurants come first',
    description:
      'Every decision starts with one question: does this genuinely help the people running the kitchen?',
  },
  {
    icon: Calendar,
    title: 'AI that earns trust',
    description:
      "We build AI that's transparent and purposeful — designed to support, never replace, the human touch that makes dining special.",
  },
  {
    icon: BarChart2,
    title: 'Better discovery for everyone',
    description:
      "Great food shouldn't stay hidden. We connect the right diners to the right restaurants — not just the loudest ones.",
  },
  {
    icon: TrendingUp,
    title: 'Growth built together',
    description:
      "Our success is measured by yours. When restaurants thrive, we know we're doing our job right.",
  },
] as const

// ─── Section ──────────────────────────────────────────────────────────────────

export interface ValuesSectionProps {
  className?: string
}

export function ValuesSection({ className = '' }: ValuesSectionProps) {
  return (
    <section
      className={`section bg-(image:--value-gr) ${className ? ` ${className}` : ''}`}
      aria-labelledby="values-heading"
    >
      <div className="container flex flex-col gap-6 md:gap-10">

        {/* ── Heading ──────────────────────────────────────────────── */}
        <Heading
          badgeText="Our Values"
          title="What drives everything we do."
          subtitle={
            <>
              Four principles that guide every decision we make — from the AI we
              build to the restaurants we partner with.
            </>
          }
          align="center-align"
        />

        {/* ── Cards ────────────────────────────────────────────────── */}
        {/* 1-col → 2-col → 4-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {VALUES.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
