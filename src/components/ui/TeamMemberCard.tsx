export interface TeamMemberCardProps {
  name: string
  role: string
  imageSrc: string
  linkedInHref?: string
  className?: string
}

export function TeamMemberCard({
  name,
  role,
  imageSrc,
  linkedInHref = '#',
  className = '',
}: TeamMemberCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-end h-60 sm:h-85 md:h-90 lg:h-100 rounded-[20px] overflow-hidden${className ? ` ${className}` : ''}`}
    >
      {/* Photo background */}
      <img
        src={imageSrc}
        alt={name}
        className="absolute inset-0 size-full object-cover"
      />

      {/* Dark gradient overlay — bottom only */}
      <div
        className="absolute inset-0 rounded-[20px] bg-linear-to-b from-transparent via-transparent to-black/90 via-45%"
        aria-hidden="true"
      />

      {/* Member info row */}
      <div className="relative flex items-center justify-between px-3 sm:px-4 md:px-6 pb-3 sm:pb-5 md:pb-7">
        <div className="flex flex-col sm:gap-1">
          <span className="text-base sm:text-lg font-semibold text-white leading-snug">
            {name}
          </span>
          <span className="text-xs sm:text-sm font-normal text-white/80">
            {role}
          </span>
        </div>

        {/* LinkedIn button */}
        <a
          href={linkedInHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="flex items-center justify-center size-6 sm:size-7.5 rounded-lg bg-[#0a66c2] shrink-0 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 transition-opacity"
        >
          <span className="text-white font-bold text-base sm:text-xl font-['Inter'] not-italic select-none">
            in
          </span>
        </a>
      </div>
    </div>
  )
}
