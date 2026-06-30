import { useRef } from 'react'
import { TestimonialCard } from '../cards/TestimonialCard'
import { Heading } from '../ui/Heading'
import { StatsBar } from '../ui/StatsBar'
import { testimonials, statsData } from '../../utils/data'

/* ------------------------------------------------------------------ */
/*  Arrow button                                                        */
/* ------------------------------------------------------------------ */

interface ArrowButtonProps {
  direction: 'left' | 'right'
  onClick: () => void
  disabled?: boolean
  className?: string
}

function ArrowButton({ direction, onClick, disabled = false, className = '' }: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Previous testimonials' : 'Next testimonials'}
      className={`flex items-center justify-center size-10 rounded-full bg-brand-subtle border border-brand-border transition-all duration-200 hover:shadow-100 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:opacity-40 disabled:pointer-events-none cursor-pointer${className ? ` ${className}` : ''}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={`text-primary ${direction === 'right' ? 'rotate-180' : ''}`}
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/*  Section                                                             */
/* ------------------------------------------------------------------ */

export interface TestimonialsSectionProps {
  className?: string
}

/**
 * TestimonialsSection
 *
 * Section header + CSS snap-scroll slider (no library) + stats row.
 * Navigation arrows scroll the track by one card width using scrollBy().
 */
export function TestimonialsSection({ className = '' }: TestimonialsSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  /** Scroll the track by ±(card width + gap) */
  function slide(direction: 'left' | 'right') {
    const track = trackRef.current
    if (!track) return
    // card width + gap-6 (24px)
    const card = track.querySelector('article') as HTMLElement | null
    const cardWidth = card ? card.offsetWidth + 24 : 320
    track.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' })
  }

  return (
    <section className={`section${className ? ` ${className}` : ''}`}>
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">

        {/* ── Header row ── */}
        <div className="container">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* Left: badge + heading + sub */}
            <Heading
              align="left-align"
              badgeText="WHAT DINERS SAY"
              title={
                <>
                  <span className="text-primary">Loved </span>
                  by
                  <span className="text-primary"> diners</span>
                  across Switzerland
                </>
              }
              subtitle="Real reviews from diners who found their perfect table through Youmii in Bern, Zurich, and Basel."
            />

            {/* Right: arrow nav buttons */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <ArrowButton direction="left" onClick={() => slide('left')} />
              <ArrowButton direction="right" onClick={() => slide('right')} />
            </div>
          </div>
        </div>

        {/* ── Snap-scroll slider track ── */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-none"
          role="region"
          aria-label="Testimonials slider"
        >
          {testimonials.map((t) => (
            <div key={t.id} className="snap-start shrink-0">
              <TestimonialCard
                backgroundImage={t.backgroundImage}
                quote={t.quote}
                reviewerName={t.reviewerName}
                reviewerLocation={t.reviewerLocation}
                avatarSrc={t.avatarSrc}
              />
            </div>
          ))}
        </div>

        <div className="container">
          <StatsBar stats={statsData} />
        </div>

      </div>
    </section>
  )
}
