export interface StepCardProps {
  step: string
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  className?: string
}

export function StepCard({
  step,
  title,
  description,
  imageSrc,
  imageAlt = '',
  className = '',
}: StepCardProps) {
  return (
    <div className={`relative flex-1 min-w-0${className ? ` ${className}` : ''}`}>
      {/* Large step number — half-clipped above card */}
      <div
        className="absolute -top-px left-8 -translate-y-1/2 text-[clamp(56px,7vw,96px)] font-medium text-primary/50 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        {step}
      </div>

      {/* Card body */}
      <div className="bg-white border border-grey-border rounded-2xl lg:rounded-3xl shadow-[0px_10px_15px_rgba(28,18,8,0.08)] flex flex-col gap-5 pt-10 lg:pt-16 pb-5 sm:pb-6 md:pb-8 px-5 sm:px-6 md:px-8 w-full">
        {/* Text content */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-base text-secondary">{description}</p>
        </div>

        {/* Step image */}
        <div className="relative h-[190px] rounded-2xl overflow-hidden shrink-0 w-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
