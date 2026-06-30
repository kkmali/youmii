import { Heading } from '../ui/Heading'
import { StepCard } from '../cards/StepCard'
import { steps } from '../../utils/data'

export interface HowItWorksSectionProps {
  className?: string
}

export function HowItWorksSection({ className = '' }: HowItWorksSectionProps) {
  return (
    <section
      className={`section bg-(image:--how-it-works-gr) ${className ? ` ${className}` : ''}`}
    >
      <div className="container flex flex-col gap-10 lg:gap-16">

        {/* Heading */}
        <Heading
          badgeText="HOW IT WORKS"
          title={
            <>
              From <span className="text-primary">Craving to Table</span> in Three Steps
            </>
          }
          align="center-align"
        />

        {/* Step cards */}
        {/* Mobile: single column stack (no stagger).                   */}
        {/* Desktop (lg+): row with staggered vertical offsets via mt-* */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-11">
          {steps.map(({ step, title, description, imageSrc, imageAlt, offsetClass }) => (
            <StepCard
              key={step}
              step={step}
              title={title}
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
