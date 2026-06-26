import { Sparkles } from 'lucide-react'
import { Badge } from './Badge'
import { Button } from './Button'

export interface CtaBannerProps {
  badge?: string
  headline: string
  description?: string
  buttonLabel?: string
  onButtonClick?: () => void
  buttonHref?: string
  className?: string
}

export function CtaBanner({
  badge = 'Your Table is Waiting',
  headline,
  description,
  buttonLabel = 'Download App',
  onButtonClick,
  buttonHref,
  className = '',
}: CtaBannerProps) {
  return (
    <div
      className={`rounded-2xl sm:rounded-[30px] px-5 py-8 sm:px-10 sm:py-12 md:px-16 flex flex-col items-center justify-center bg-(image:--cta-gr) text-center${className ? ` ${className}` : ''}`}
    >
      {/* Badge pill */}
      {badge && (
        <Badge text={badge} className="mb-4 sm:mb-5" icon={Sparkles} />
      )}

      {/* Headline — fluid: text-2xl → text-3xl → text-4xl */}
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-body-text leading-tight mb-3">
        {headline}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-xs sm:text-base text-secondary opacity-90 mb-5 sm:mb-7 max-w-xs sm:max-w-sm md:max-w-md">
          {description}
        </p>
      )}

      {/* CTA */}
      <Button
        role={buttonHref ? 'link' : 'button'}
        url={buttonHref}
        onClick={onButtonClick}
        variant="primary"
        className="w-full sm:w-auto"
      >
        {buttonLabel}
      </Button>
    </div>
  )
}
