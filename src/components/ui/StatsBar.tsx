import type { StatItem } from '../../utils/data'

export interface StatsBarProps {
  stats: StatItem[]
  className?: string
}

export function StatsBar({ stats, className = '' }: StatsBarProps) {
  return (
    <div className={`container ${className ? ` ${className}` : ''}`}>
      <div
        className="p-px bg-(image:--stats-border-gr) rounded-2xl shadow-300"
      >
        <div className="w-full rounded-2xl overflow-hidden border border-white bg-(image:--stats-gr)">
          <dl className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-grey-border">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 sm:gap-1.5 p-3 sm:p-6 xl:p-8 flex-1"
              >
                <dt className="text-2xl md:text-3xl font-bold text-orange">{stat.value}</dt>
                <dd className="text-sm font-medium text-secondary">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
