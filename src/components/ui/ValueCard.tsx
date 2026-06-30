import type { ComponentType } from 'react'

export interface ValueCardProps {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
  className?: string
}

export function ValueCard({
  icon: Icon,
  title,
  description,
  className = '',
}: ValueCardProps) {
  return (
    <div
      className={`flex flex-col gap-3 sm:gap-4 bg-white border border-light-grey-border rounded-2xl px-5 xl:px-8 py-5 xl:py-7 shadow-60 flex-1 min-w-0${className ? ` ${className}` : ''}`}
    >
      {/* Icon container */}
      <div className="flex items-center justify-center size-10 md:size-14 rounded-xl md:rounded-2xl bg-primary/10 shrink-0">
        <Icon className="size-4.5 md:size-6 text-primary" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2.5">
        <h3 className="text-xl font-bold text-body-text leading-snug">
          {title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
