import type { ReactNode } from 'react'
import { Heading } from '../ui/Heading'
import type { HeadingProps } from '../ui/Heading'

export interface HeroInfoPill {
  icon: ReactNode
  text: string
}

export interface PageHeroSectionProps {
  badgeText: string
  title: ReactNode
  subtitle?: string
  infoPills?: HeroInfoPill[]
  backgroundClass?: string
  className?: string
  size?: HeadingProps['size']
}

export function PageHeroSection({
  badgeText,
  title,
  subtitle,
  infoPills,
  backgroundClass = 'bg-(image:--hero-gr)',
  className = '',
  size,
}: PageHeroSectionProps) {
  return (
    <div className="px-4 lg:px-8 pt-2 md:pt-5 max-md:pb-4">
      <section
        className={`section ${backgroundClass} rounded-2xl md:rounded-4xl overflow-hidden${className ? ` ${className}` : ''} min-h-50 flex justify-center items-center`}
        aria-label="Page hero"
      >
        <div className="container flex flex-col items-center gap-5">
          <Heading
            badgeText={badgeText}
            title={title}
            subtitle={subtitle}
            size={size}
          />

          {infoPills && infoPills.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {infoPills.map((pill) => (
                <div
                  key={pill.text}
                  className="backdrop-blur-sm bg-white border border-grey-border rounded-full flex items-center gap-2 px-2.5 py-2 text-sm font-medium text-primary"
                >
                  {pill.icon}
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
