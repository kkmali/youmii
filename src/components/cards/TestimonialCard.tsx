import { Sparkles } from 'lucide-react'
import { Badge } from '../ui/Badge'

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
      <Badge variant="secondary" size="sm" text={badgeLabel} icon={Sparkles} />

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
