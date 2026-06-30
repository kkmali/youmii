import type { ComponentType } from 'react'

export interface FeatureCardProps {
  /** Icon component rendered inside the orange tinted circle */
  icon: ComponentType<{ className?: string }>
  /** Card title */
  title: string
  /** Supporting description */
  description: string
  /** Extra classes on the wrapper */
  className?: string
}

/**
 * A single feature/benefit card used in the Features section.
 * White card with an orange-tinted icon, bold title, and muted description.
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white  rounded-2xl flex flex-col gap-2 sm:gap-3 justify-center p-3 sm:p-4 md:p-6 w-full lg:min-h-[180px]${className ? ` ${className}` : ''}`}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="shrink-0 size-11 sm:size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Icon className="size-5 sm:size-6 text-primary" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-body-text leading-snug">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-base text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  )
}
