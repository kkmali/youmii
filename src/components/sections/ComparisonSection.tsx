import { Frown, Sparkles } from 'lucide-react'
import { Heading } from '../ui/Heading'
import { ComparisonItem } from '../cards/ComparisonItem'
import { problemItems, solutionItems } from '../../utils/data'

// ─── Component ────────────────────────────────────────────────────────────────

export interface ComparisonSectionProps {
  className?: string
}

export function ComparisonSection({ className = '' }: ComparisonSectionProps) {
  return (
    <section className={`section${className ? ` ${className}` : ''}`}>
      <div className="container flex flex-col gap-6 md:gap-10 lg:gap-14">

        {/* Heading */}
        <Heading
          badgeText="THE CHALLENGE"
          title={
            <>
              Stop <span className="text-primary">Guessing</span>, Start <span className="text-primary">Discovering</span>
            </>
          }
          subtitle="No more guesswork. Just great restaurants in Switzerland."
          align="center-align"
        />

        {/* Two-panel grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

          {/* ── Left: The Old Way ─────────────────────────────────── */}
          <div className="rounded-4xl p-4 sm:p-6 lg:p-10 flex flex-col gap-3 sm:gap-6 md:gap-8 bg-grey-10 border border-light-grey-border">

            {/* Panel header */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 size-10 md:size-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Frown className="size-4.5 md:size-5 text-secondary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-body-text">The Old Way</h3>
            </div>

            {/* List items */}
            <div className="flex flex-col gap-2 md:gap-6">
              {problemItems.map((item) => (
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
          <div className='bg-(image:--stats-border-gr) p-0.5 rounded-4xl'>
            <div
              className="relative rounded-4xl shadow-200 overflow-hidden p-4 sm:p-6 lg:p-10 flex flex-col gap-4 sm:gap-6 md:gap-8 bg-(image:--comparison-gr)"
            >
              {/* Panel header */}
              <div className="flex items-center gap-4">
                <div className="shrink-0 size-10 md:size-12 rounded-full bg-primary flex items-center justify-center">
                  <Sparkles className="size-4.5 md:size-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-body-text">The Youmii Way</h3>
              </div>

              {/* List items */}
              <div className="flex flex-col gap-3 md:gap-6">
                {solutionItems.map((item) => (
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
      </div>
    </section>
  )
}
