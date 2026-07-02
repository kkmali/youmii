import { Heading } from '../ui/Heading'
import { FeatureCard } from '../cards/FeatureCard'
import { leftFeatures, rightFeatures } from '../../utils/data'

// ─── Section ──────────────────────────────────────────────────────────────────

export interface FeaturesSectionProps {
  className?: string
}

export function FeaturesSection({ className = '' }: FeaturesSectionProps) {
  return (
    <section id="groupmatch" className={`section${className ? ` ${className}` : ''}`}>
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
            {[...leftFeatures, ...rightFeatures].map((feature) => (
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
              {leftFeatures.map((feature) => (
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
              {rightFeatures.map((feature) => (
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
