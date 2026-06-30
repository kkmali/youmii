import { Heading } from '../ui/Heading'
import { ValueCard } from '../cards/ValueCard'
import { values } from '../../utils/data'

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
          {values.map((value) => (
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
