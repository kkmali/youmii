import { statsData } from '../../utils/data'

export interface PartnerStatsSectionProps {
  className?: string
}

export function PartnerStatsSection({ className = '' }: PartnerStatsSectionProps) {
  return (
    <section
      className={`py-10 md:py-12${className ? ` ${className}` : ''}`}
      aria-label="Partner statistics"
    >
      <div className="container">
        <div
          className="border border-white rounded-2xl shadow-200 overflow-hidden"
          style={{
            background:
              'linear-gradient(161deg, #ffffff 3%, rgba(252,223,203,0.5) 52%, rgba(255,255,255,0.6) 96%)',
          }}
        >
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-grey-border">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 flex flex-col items-center justify-center gap-1.5 p-6 sm:p-8"
              >
                <p className="text-2xl sm:text-3xl font-bold text-orange">{stat.value}</p>
                <p className="text-sm font-medium text-secondary capitalize">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
