import type { ReactNode } from 'react'
import { Heading } from '../ui/Heading'
import { StepCard } from '../cards/StepCard'
import type { StepItem } from '../../utils/data'

export interface HowItWorksSectionProps {
  badgeText?: string
  title: ReactNode
  steps: StepItem[]
  className?: string
}

export function HowItWorksSection({
  badgeText = 'HOW IT WORKS',
  title,
  steps,
  className = '',
}: HowItWorksSectionProps) {
  return (
    <section
      id="how-it-works"
      className={`section bg-(image:--how-it-works-gr)${className ? ` ${className}` : ''}`}
    >
      <div className="container flex flex-col gap-10 lg:gap-16">

        {/* Heading */}
        <Heading
          badgeText={badgeText}
          title={title}
          align="center-align"
        />

        {/* Step cards */}
        {/* Mobile: single column stack (no stagger).                   */}
        {/* Desktop (lg+): row with staggered vertical offsets via mt-* */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-11">
          {steps.map(({ step, title: stepTitle, description, imageSrc, imageAlt, offsetClass }) => (
            <StepCard
              key={step}
              step={step}
              title={stepTitle}
              description={description}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              className={offsetClass}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
