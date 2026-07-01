import type { ReactNode } from 'react'
import { Sparkles } from 'lucide-react'
import { Badge } from './Badge'

export interface HeadingProps {
  badgeText?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center-align' | 'left-align'
  size?: 'default' | 'lg'
  id?: string
  className?: string
}

export function Heading({
  badgeText,
  title,
  subtitle,
  align = 'center-align',
  size = 'default',
  id,
  className = '',
}: HeadingProps) {
  const isCenter = align === 'center-align'
  const isLg = size === 'lg'

  return (
    <div
      className={`flex flex-col gap-2 sm:gap-3 ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      }${className ? ` ${className}` : ''}`}
    >
      {badgeText && <Badge text={badgeText} icon={Sparkles} />}

      {isLg ? (
        <h1 id={id} className="text-[clamp(28px,5vw,48px)] font-bold leading-tight tracking-tight max-w-3xl">
          {title}
        </h1>
      ) : (
        <h2 id={id} className="text-[clamp(24px,4vw,40px)] font-bold">
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`${isLg ? 'text-sm sm:text-base md:text-lg' : 'text-sm sm:text-base'} text-secondary max-w-xl ${
            isCenter ? ' text-center' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
