import { ArrowUpRight, Sparkles } from "lucide-react"

export interface HeroOrderCardProps {
  title: string
  subtitle: string
  imageSrc: string
  tag?: string
  rotationClass?: string
  className?: string
}

export function HeroOrderCard({
  title,
  subtitle,
  imageSrc,
  tag,
  rotationClass = '',
  className = '',
}: HeroOrderCardProps) {
  return (
    <div
      className={`bg-white border border-grey-border rounded-xl shadow-10 flex gap-2 items-start overflow-hidden px-3 py-2.5 w-[276px] ${rotationClass ? ` ${rotationClass}` : ''}${className ? ` ${className}` : ''}`}
    >
      {/* Thumbnail */}
      <div className="shrink-0 rounded-lg overflow-hidden size-13">
        <img
          src={imageSrc}
          alt=""
          className="size-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        <div className="flex items-start justify-between gap-1">
          <div>
            <p className="text-[13px] font-semibold text-body-text leading-snug">{title}</p>
            <p className="text-[10px] text-secondary leading-snug">{subtitle}</p>
          </div>
          {/* Close / dismiss icon */}
          <button
            type="button"
            aria-label="Dismiss"
            className="shrink-0 size-5 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <ArrowUpRight className="size-2.5 text-primary"/>
          </button>
        </div>

        {/* Tag pill */}
        {tag && (
          <div className="flex items-center gap-1 bg-brand-subtle px-2 py-0.5 rounded-full w-fit">
          
            <Sparkles className="size-2.5 text-primary"/>
            <span className="text-[8px] font-medium text-primary">{tag}</span>
          </div>
        )}
      </div>
    </div>
  )
}
