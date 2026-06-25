export interface TestimonialCardProps {
  backgroundImage: string
  quote: string
  reviewerName: string
  reviewerLocation: string
  avatarSrc: string
  badgeLabel?: string
  className?: string
}


export function TestimonialCard({
  backgroundImage,
  quote,
  reviewerName,
  reviewerLocation,
  avatarSrc,
  badgeLabel = 'AI Matched',
  className = '',
}: TestimonialCardProps) {
  return (
    <article
      className={`relative flex flex-col justify-between overflow-hidden rounded-3xl shrink-0 w-64 sm:70 md:w-90 lg:w-110 h-80 sm:h-85 md::h-95 px-5 py-4 sm:px-7 sm:py-5${className ? ` ${className}` : ''}`}
      aria-label={`Testimonial from ${reviewerName}`}
    >
      {/* Background photo + dark overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-3xl">
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 size-full object-cover rounded-3xl"
          width={440}
          height={380}
        />
        {/* gradient: transparent top → dark bottom */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-transparent via-transparent to-black/90 via-45%" />
      </div>

      {/* Top: frosted "AI Matched" badge */}
      <div className="relative flex items-center gap-1.5 self-start backdrop-blur-[10px] bg-black/40 border border-white/20 rounded-full px-3 py-2">
        {/* sparkle icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M8 1.5C8.27614 1.5 8.5 1.72386 8.5 2V3.5C8.5 3.77614 8.27614 4 8 4C7.72386 4 7.5 3.77614 7.5 3.5V2C7.5 1.72386 7.72386 1.5 8 1.5Z"
            fill="white"
          />
          <path
            d="M8 12C8.27614 12 8.5 12.2239 8.5 12.5V14C8.5 14.2761 8.27614 14.5 8 14.5C7.72386 14.5 7.5 14.2761 7.5 14V12.5C7.5 12.2239 7.72386 12 8 12Z"
            fill="white"
          />
          <path
            d="M14.5 8C14.5 8.27614 14.2761 8.5 14 8.5H12.5C12.2239 8.5 12 8.27614 12 8C12 7.72386 12.2239 7.5 12.5 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8Z"
            fill="white"
          />
          <path
            d="M4 8C4 8.27614 3.77614 8.5 3.5 8.5H2C1.72386 8.5 1.5 8.27614 1.5 8C1.5 7.72386 1.72386 7.5 2 7.5H3.5C3.77614 7.5 4 7.72386 4 8Z"
            fill="white"
          />
          <path
            d="M12.7782 3.22183C12.9734 3.41709 12.9734 3.73367 12.7782 3.92893L11.7175 4.98959C11.5223 5.18485 11.2057 5.18485 11.0104 4.98959C10.8152 4.79433 10.8152 4.47775 11.0104 4.28249L12.0711 3.22183C12.2663 3.02657 12.583 3.02657 12.7782 3.22183Z"
            fill="white"
          />
          <path
            d="M4.98959 11.0104C5.18485 11.2057 5.18485 11.5223 4.98959 11.7175L3.92893 12.7782C3.73367 12.9734 3.41709 12.9734 3.22183 12.7782C3.02657 12.583 3.02657 12.2663 3.22183 12.0711L4.28249 11.0104C4.47775 10.8152 4.79433 10.8152 4.98959 11.0104Z"
            fill="white"
          />
          <path
            d="M12.7782 12.7782C12.583 12.9734 12.2663 12.9734 12.0711 12.7782L11.0104 11.7175C10.8152 11.5223 10.8152 11.2057 11.0104 11.0104C11.2057 10.8152 11.5223 10.8152 11.7175 11.0104L12.7782 12.0711C12.9734 12.2663 12.9734 12.583 12.7782 12.7782Z"
            fill="white"
          />
          <path
            d="M3.92893 3.22183C4.12419 3.02657 4.44077 3.02657 4.63603 3.22183L5.69669 4.28249C5.89195 4.47775 5.89195 4.79433 5.69669 4.98959C5.50143 5.18485 5.18485 5.18485 4.98959 4.98959L3.92893 3.92893C3.73367 3.73367 3.73367 3.41709 3.92893 3.22183Z"
            fill="white"
          />
        </svg>
        <span className="text-sm font-medium text-white leading-none">{badgeLabel}</span>
      </div>

      {/* Bottom: quote + reviewer */}
      <div className="relative flex flex-col gap-3 sm:gap-5">
        <p className="text-xs sm:text-sm md:text-base font-medium text-white">
          {quote}
        </p>
        <div className="flex items-center gap-3">
          <img
            src={avatarSrc}
            alt={reviewerName}
            className="size-8 sm:size-10 rounded-full object-cover shrink-0"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-white leading-tight">
              {reviewerName}
            </span>
            <span className="text-[13px] font-normal text-white/80 leading-tight">
              {reviewerLocation}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
