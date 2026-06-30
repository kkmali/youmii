import { type ComponentType } from 'react'
import { Badge } from './Badge'

export interface BuiltForDiscoverySectionProps {
  className?: string
  badgeText?: string
  badgeIcon?: ComponentType<{ className?: string }>
  title?: string
  imageSrc?: string
  imageAlt?: string
  description?: string
}

export function BuiltForDiscoverySection({
  className = '',
  badgeText,
  badgeIcon,
  title,
  imageSrc,
  imageAlt,
  description,
}: BuiltForDiscoverySectionProps) {
  return (
    <section
      className="section"
      {...(title ? { 'aria-labelledby': 'built-for-discovery-heading' } : {})}
    >
      <div className="container">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-10 xl:gap-16${className ? ` ${className}` : ''}`}>

          {/* Left — badge + heading */}
          {(badgeText || title) && (
            <div className="flex flex-col gap-2 sm:gap-4 flex-[1_0_0] min-w-0">
              {badgeText && <Badge text={badgeText} icon={badgeIcon} />}
              {title && (
                <h2
                  id="built-for-discovery-heading"
                  className="text-[clamp(24px,4vw,48px)] font-bold"
                >
                  {title}
                </h2>
              )}
            </div>
          )}

          {/* Center — phone mockup image (full, not cropped) */}
          {imageSrc && (
            <div className="shrink-0 flex items-center justify-center">
              <img
                src={imageSrc}
                alt={imageAlt || ''}
                className="object-contain select-none pointer-events-none max-w-80 xl:max-w-110 2xl:max-w-126"
              />
            </div>
          )}

          {/* Right — body text */}
          {description && (
            <div className="flex flex-col justify-center flex-[1_0_0] min-w-0">
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                {description}
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
