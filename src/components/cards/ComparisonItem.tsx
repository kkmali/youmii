import type { ComponentType } from 'react'

export interface ComparisonItemProps {
  /** Icon component rendered at the start of the row */
  icon: ComponentType<{ className?: string }>
  /** Item title */
  title: string
  /** Supporting description */
  description: string
  /** Visual variant — controls background, border, and icon tint */
  variant: 'problem' | 'solution-orange' | 'solution-blue'
  /** Extra wrapper classes */
  className?: string
}

/**
 * A single list item inside a comparison panel (problem or solution).
 * Reused 3 times per panel.
 */
export function ComparisonItem({
  icon: Icon,
  title,
  description,
  variant,
  className = '',
}: ComparisonItemProps) {
  const containerStyles =
    variant === 'problem'
      ? 'bg-white border border-transparent'
      : variant === 'solution-orange'
        ? 'bg-[#fffcfa] border border-brand-border'
        : 'bg-[#f8fafc] border border-[rgba(0,96,150,0.15)]'

  const iconStyles =
    variant === 'problem'
      ? 'text-secondary'
      : variant === 'solution-orange'
        ? 'text-primary'
        : 'text-[#0060a0]'

  return (
    <div
      className={`flex gap-2 sm:gap-4 items-start p-3 sm:p-5 rounded-2xl w-full ${containerStyles}${className ? ` ${className}` : ''}`}
    >
      <div className="shrink-0 mt-1">
        <Icon className={`size-5 ${iconStyles}`} />
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <p className="text-base font-semibold">{title}</p>
        <p className="text-sm text-secondary">{description}</p>
      </div>
    </div>
  )
}
