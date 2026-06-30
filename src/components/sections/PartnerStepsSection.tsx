import { Sparkles } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { partnerSteps } from '../../utils/data'
import type { StepItem } from '../../utils/data'

export interface PartnerStepsSectionProps {
  className?: string
}

interface StepCardProps extends StepItem {
  offsetClass?: string
}

function PartnerStepCard({ step, title, description, offsetClass = '' }: StepCardProps) {
  return (
    <div className={`flex-1 min-w-0 relative${offsetClass ? ` ${offsetClass}` : ''}`}>
      {/* Large step number — sits above the card top edge */}
      <span
        aria-hidden="true"
        className="absolute -top-7 left-7 text-7xl md:text-8xl font-medium text-primary/60 leading-none select-none pointer-events-none"
      >
        {step}
      </span>

      {/* Card */}
      <div className="relative bg-white border border-light-grey-border rounded-2xl pt-14 pb-8 px-8 shadow-200 flex flex-col gap-5 h-full">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-xl md:text-2xl font-semibold text-body-text">{title}</h3>
          <p className="text-sm md:text-base text-secondary leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function PartnerStepsSection({ className = '' }: PartnerStepsSectionProps) {
  const offsets = ['', 'md:mt-12', 'md:mt-24']

  return (
    <section
      className={`section bg-(image:--value-gr)${className ? ` ${className}` : ''}`}
      aria-labelledby="partner-steps-heading"
    >
      <div className="container flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <Badge text="Partner with us" icon={Sparkles} />
          <h2
            id="partner-steps-heading"
            className="text-[clamp(24px,4vw,40px)] font-bold text-body-text"
          >
            Let&apos;s Fill More Tables,{' '}
            <span className="text-primary">Together</span>
          </h2>
        </div>

        {/* Steps — stacked on mobile, cascading on md+ */}
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:items-start md:gap-10">
          {partnerSteps.map((step, i) => (
            <PartnerStepCard
              key={step.step}
              {...step}
              offsetClass={offsets[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
