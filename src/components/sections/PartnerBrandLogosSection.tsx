import { Heading } from '../ui/Heading'
import { partnerLogoTiers } from '../../utils/data'

export interface PartnerBrandLogosSectionProps {
  className?: string
}

export function PartnerBrandLogosSection({ className = '' }: PartnerBrandLogosSectionProps) {
  return (
    <section
      className={`section${className ? ` ${className}` : ''}`}
      aria-labelledby="partner-logos-heading"
    >
      <div className="container flex flex-col gap-6 md:gap-10 xl:gap-12.5">
        {/* Section heading */}
        <Heading
          badgeText="Trusted by leading restaurant brands"
          title="Trusted by Industry Leaders"
          subtitle="Join the restaurants already shaping dining across Switzerland."
          id="partner-logos-heading"
        />

        {/* Logo tiers */}
        <div className="flex flex-col gap-6 md:gap-10 xl:gap-12.5">
          {partnerLogoTiers.map((tier) => (
            <div key={tier.label} className="flex flex-col items-center gap-4 md:gap-8">
              <p className="text-base sm:text-xl font-medium text-secondary uppercase text-center tracking-wide">
                {tier.label}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 2xl:gap-16 w-full opacity-90">
                {tier.logos.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 sm:h-10 2xl:h-12 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
