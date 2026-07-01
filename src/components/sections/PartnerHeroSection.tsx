import { Heading } from '../ui/Heading'

export interface PartnerHeroSectionProps {
  className?: string
}

export function PartnerHeroSection({ className = '' }: PartnerHeroSectionProps) {
  return (
    <div className='px-4 lg:px-8 pt-2 md:pt-5 max-md:pb-4'>
      <section
        className={`section pb-0 bg-(image:--hero-gr) rounded-2xl md:rounded-4xl overflow-hidden${className ? ` ${className}` : ''}`}
        aria-label="Partner with Youmii hero"
      >
        <div className="container flex flex-col items-center gap-8 lg:gap-10 xl:gap-12.5">
          <Heading
            badgeText="Partner with us"
            title={
              <>
                Grow your restaurant{' '}
                <span className="text-primary">with Youmii</span>
              </>
            }
            subtitle="Join a growing network of restaurants in Bern, Zurich, and Basel. We help you attract more diners, reduce no-shows, and grow with ease."
            size='lg'
          />
          <img
            src="/partner-hero.png"
            alt="Youmii app showing restaurant discovery"
            className="relative z-10 w-full max-w-md md:max-w-xl lg:max-w-3xl 2xl:max-w-4xl object-contain select-none pointer-events-none"
          />
        </div>
      </section>
    </div>
  )
}
