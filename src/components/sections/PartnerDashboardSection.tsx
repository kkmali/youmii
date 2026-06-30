import { Heading } from '../ui/Heading'
import { partnerDashboardFeatures } from '../../utils/data'

export interface PartnerDashboardSectionProps {
  className?: string
}

export function PartnerDashboardSection({ className = '' }: PartnerDashboardSectionProps) {
  return (
    <section
      className={`section${className ? ` ${className}` : ''}`}
      aria-labelledby="partner-dashboard-heading"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
          {/* Left — text content */}
          <div className="flex-1 min-w-0 flex flex-col gap-4 md:gap-8 lg:gap-10">
            <Heading
              id="partner-dashboard-heading"
              badgeText="Youmii Partner"
              title="Run your restaurant smarter"
              subtitle="Manage your profile, reservations, and menu — all in one intelligent workspace built for modern restaurant partners."
              align="left-align"
            />

            {/* Feature list */}
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {partnerDashboardFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <li
                    key={feature.title}
                    className="flex items-start gap-3 py-2 md:py-4"
                  >
                    <div className="shrink-0 size-10 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5">
                      <Icon className="size-4.5 text-primary" />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <p className="font-semibold text-base text-body-text">{feature.title}</p>
                      <p className="text-sm text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Right — decorative dashboard panel */}
          <img src="/smarter.png" alt="smarter" className='h-full max-h-80 lg:max-h-100 xl:max-h-125' />
        </div>
      </div>
    </section>
  )
}
