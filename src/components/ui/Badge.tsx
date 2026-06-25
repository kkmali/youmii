export interface BadgeProps {
  /** Text to display inside the badge */
  text: string
  /** Extra CSS classes to apply to the badge wrapper */
  className?: string
}

/**
 * Reusable Badge/Pill component.
 * Displays a static pill icon and custom text.
 */
export function Badge({ text, className = '' }: BadgeProps) {
  return (
    <div className={`bg-(image:--badge-gr) rounded-full shadow-100 p-px ${className ? ` ${className}` : ''}`}>
      <div
        className="flex items-center gap-2 px-3 py-2 sm:py-2.5 rounded-full bg-white"
      >
        <div className="size-4 overflow-hidden shrink-0" aria-hidden="true">
          <img alt="" src="/pill-icon.png" width="16" height="16" />
        </div>
        <span className="text-xs font-medium uppercase tracking-wide text-(--primary) whitespace-nowrap">
          {text}
        </span>
      </div>
    </div>
  )
}
