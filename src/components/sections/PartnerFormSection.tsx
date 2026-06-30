import { Heading } from '../ui/Heading'
import { PartnerApplicationForm } from '../forms/PartnerApplicationForm'
import { partnerFormNextSteps } from '../../utils/data'

export interface PartnerFormSectionProps {
  className?: string
}

export function PartnerFormSection({ className = '' }: PartnerFormSectionProps) {
  return (
    <section
      id="partner-form"
      className={`section bg-(image:--value-gr)${className ? ` ${className}` : ''}`}
      aria-labelledby="partner-form-heading"
    >
      <div className="container flex flex-col gap-6 md:gap-10 xl:gap-14">
        {/* Header */}
        <Heading
          badgeText="Partner Application"
          title="List your restaurant on Youmii"
          subtitle="Fill in your details. Our team reviews every application and responds within 2 business days."
          id="partner-form-heading"
        />

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* What happens next */}
          <div className="bg-white border border-light-grey-border rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col gap-6 w-full lg:w-[40%] h-fit">
            <p className="font-semibold text-base text-body-text">What happens next</p>
            <ol className="flex flex-col gap-6 md:gap-8 list-none p-0 m-0">
              {partnerFormNextSteps.map((item, index) => (
                <li key={item.step} className="flex items-start gap-3 md:gap-4">
                  <span className="text-4xl font-medium text-primary/50 leading-none shrink-0">
                    {item.step}
                  </span>
                  <div className="flex flex-col gap-0.5 pt-1">
                    <p className="text-sm font-semibold text-body-text">{item.title}</p>
                    <p className="text-xs text-secondary">{item.description}</p>
                  </div>
                  {/* Connector line */}
                  {index < partnerFormNextSteps.length - 1 && (
                    <div className="absolute mt-12 ml-4.5 w-0.5 h-4 bg-primary/20" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Form */}
          <PartnerApplicationForm />
        </div>
      </div>
    </section>
  )
}
