import type { ReactNode } from 'react'
import { Sparkles } from 'lucide-react'
import { Badge } from './Badge'

export interface HeadingProps {
  /** Optional badge text displayed above the title */
  badgeText?: string
  /** The main heading text or React elements (e.g. text containing span elements) */
  title: ReactNode
  /** Optional subtitle text or React elements */
  subtitle?: ReactNode
  /** Alignment variant: 'center-align' or 'left-align'. Defaults to 'center-align'. */
  align?: 'center-align' | 'left-align'
  /** Optional id applied to the h2 element — useful for aria-labelledby on a parent section */
  id?: string
  /** Extra CSS classes to apply to the wrapper */
  className?: string
}

/**
 * Reusable Heading component.
 * Supports center-align and left-align variants, with optional badge and subtitle.
 */
export function Heading({
  badgeText,
  title,
  subtitle,
  align = 'center-align',
  id,
  className = '',
}: HeadingProps) {
  const isCenter = align === 'center-align'

  return (
    <div
      className={`flex flex-col gap-2 sm:gap-3 ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      }${className ? ` ${className}` : ''}`}
    >
      {badgeText && <Badge text={badgeText} icon={Sparkles} />}

      <h2 id={id} className="text-[clamp(24px,4vw,40px)] font-bold">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-sm sm:text-base text-secondary max-w-3xl${
            isCenter ? 'text-center' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
