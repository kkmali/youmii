import { Users, BookOpen, Brain, Laugh, MapPinned, FileClock } from 'lucide-react'
import { Heading } from './Heading'
import { FeatureCard } from './FeatureCard'

// ─── Data ─────────────────────────────────────────────────────────────────────

const LEFT_FEATURES = [
  {
    icon: Brain,
    title: 'AI Smart Search',
    description: 'Ask anything in plain language — Youmii instantly searches 240+ restaurants.',
  },
  {
    icon: Laugh,
    title: 'Mood & Occasion Chips',
    description: 'Not sure what to type? Tap Romantic, Terrace, or Groups. One tap surfaces restaurants that match your moment.',
  },
  {
    icon: Users,
    title: 'GroupMatch Voting',
    description: "Can't decide where to eat? Start a group session, and vote privately — the top pick gets booked.",
  },
]

const RIGHT_FEATURES = [
  {
    icon: BookOpen,
    title: 'Live Restaurant Menus',
    description: "See today's daily specials and full menus before you book. Always up to date — published directly by the restaurant.",
  },
  {
    icon: MapPinned,
    title: 'Map with Emoji Pins',
    description: 'Explore a full-screen map with cuisine-specific emoji pins. Tap any pin for name, rating, and a direct route.',
  },
  {
    icon: FileClock,
    title: 'Reservation History',
    description: 'All your bookings in one place — upcoming, confirmed, and past. Cancel or check status any time from your profile.',
  },
]

// ─── Section ──────────────────────────────────────────────────────────────────

export interface FeaturesSectionProps {
  className?: string
}


export function FeaturesSection({ className = '' }: FeaturesSectionProps) {
  return (
    <section className={`section${className ? ` ${className}` : ''}`}>
      <div className="container flex flex-col items-center gap-4 sm:gap-6 lg:gap-10">

        {/* ── Heading ──────────────────────────────────────────────── */}
        <Heading
          badgeText="BUILT FOR DISCOVERY"
          title={
            <>
              Everything you need to{' '}
              <br className="hidden sm:block" />
              find a <span className="text-primary">great meal</span>
            </>
          }
          subtitle="Youmii is designed around how Swiss diners actually decide where to eat — not how apps think they should."
          align="center-align"
        />

        <div className="w-full">

          {/* Mobile + tablet: 1-col → 2-col grid, phone hidden */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 lg:hidden">
            {[...LEFT_FEATURES, ...RIGHT_FEATURES].map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Desktop: 3-column layout */}
          <div className="hidden lg:flex items-stretch gap-10 xl:gap-16">

            {/* Left column */}
            <div className="flex flex-[1_0_0] flex-col gap-8 justify-center">
              {LEFT_FEATURES.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            {/* Phone mockup — centered, vertically centered */}
            <div className="flex shrink-0 items-center justify-center">
              <img
                src="/discovery.png"
                alt="Youmii app showing restaurant discovery on iPhone"
                className="object-contain select-none pointer-events-none"
              />
            </div>

            {/* Right column */}
            <div className="flex flex-[1_0_0] flex-col gap-8 justify-center">
              {RIGHT_FEATURES.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
