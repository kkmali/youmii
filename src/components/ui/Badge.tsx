import type { ComponentType } from 'react'

export type BadgeVariant = 'primary' | 'secondary' | 'outline'
export type BadgeSize = 'lg' | 'md' | 'sm'

export interface BadgeProps {
  text: string
  variant?: BadgeVariant
  size?: BadgeSize
  className?: string
  icon?: ComponentType<{ className?: string }>
}

export function Badge({
  text,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
}: BadgeProps) {

  const innerPadding =
    size === 'lg'
      ? 'px-3.5 py-3'
      : size === 'md'
        ? 'px-3 py-2 sm:py-2.5'
        : 'px-3 py-2'

  if (variant === 'secondary') {
    return (
      <div
        className={`backdrop-blur-[20px] bg-black/40 border border-white/20 rounded-full w-fit flex items-center gap-1.5 ${innerPadding}${className ? ` ${className}` : ''}`}
      >
        {Icon && <Icon className="text-golden size-4" />}
        <span className="text-sm font-medium text-white whitespace-nowrap">
          {text}
        </span>
      </div>
    )
  }

  if (variant === 'outline') {
    return (
      <div
        className={`border border-grey-border rounded-full w-fit flex items-center bg-white gap-1.5 ${innerPadding}${className ? ` ${className}` : ''}`}
      >
        {Icon && <Icon className="text-primary size-5" />}
        <span className="text-lg font-medium whitespace-nowrap">
          {text}
        </span>
      </div>
    )
  }

  return (
    <div className={`bg-(image:--badge-gr) rounded-full shadow-100 w-fit p-px${className ? ` ${className}` : ''}`}>
      <div className={`flex items-center gap-2 ${innerPadding} rounded-full bg-white`}>
        {Icon && <Icon className="text-primary size-4" />}
        <span className="text-xs font-medium uppercase tracking-wide text-primary whitespace-nowrap">
          {text}
        </span>
      </div>
    </div>
  )
}
