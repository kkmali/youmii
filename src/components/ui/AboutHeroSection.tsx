import { Heart, Share2, Sparkles, UtensilsCrossed } from 'lucide-react'
import { Badge } from './Badge'
import { ReservationCard } from './ReservationCard'
import reservationThumb from '../../assets/about-hero-reservation-thumb.jpg'
import restaurantCardImg from '../../assets/about-hero-restaurant-card.jpg'

export interface AboutHeroSectionProps {
  className?: string
}

export function AboutHeroSection({ className = '' }: AboutHeroSectionProps) {
  return (
    <div className='px-4 lg:px-8 pt-2 md:pt-5 max-md:pb-4'>
      <section
        className={`section pb-0 bg-(image:--hero-gr) rounded-4xl overflow-hidden${className ? ` ${className}` : ''}`}
        aria-label="About hero"
      >
        <div className="container flex flex-col items-center gap-8 lg:gap-10">

          {/* ── Headline block ───────────────────────────────────────── */}
          <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
            <Badge text="AI-Powered Dining" icon={Sparkles} />

            <h1 className="text-[clamp(28px,5vw,48px)] font-bold text-body-text leading-tight tracking-tight">
              Our story starts with a simple{' '}
              <span className="text-primary">love for food.</span>
            </h1>

            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-lg">
              A love of food turned into a mission: make every dining decision
              feel effortless. Now in Bern, Zurich, and Basel.
            </p>
          </div>

          {/* ── Visuals block ────────────────────────────────────────── */}
          {/* Mobile: stacked image only */}
          <div className="relative w-full flex justify-center">

            {/* Phone mockup (always visible) */}
            <img
              src="/about-hero.png"
              alt="Youmii app showing restaurant discovery"
              className="relative z-10 h-full max-h-103 object-contain select-none pointer-events-none"
            />

            {/* ── Left floats — hidden below lg ────────────────────── */}

            {/* "Reserve a Table" outline badge */}
            <div
              className="absolute z-20 top-[28%] left-[2%] hidden lg:block animate-float-1"
              aria-hidden="true"
            >
              <Badge
                text="Reserve a Table"
                variant="transparent"
                size="lg"
                icon={Sparkles}
              />
            </div>

            {/* Reservation confirmation card */}
            <div
              className="absolute z-20 top-[42%] left-[2%] xl:left-[8%] 2xl:left-[12%] hidden lg:block"
              aria-hidden="true"
            >
              <ReservationCard
                restaurantName="The Dolder Grand"
                restaurantThumbSrc={reservationThumb}
                date="24th June"
                time="20:40"
                address="Bahnhofstrasse 12, 8001 Zürich"
                status="Confirmed"
                cancelLabel="Cancel Reservation"
                requestSentLabel="Request sent: May 20, 12:26 PM"
              />
            </div>

            {/* ── Right floats — hidden below lg ───────────────────── */}

            {/* Restaurant card — photo with caption */}
            <div
              className="absolute z-20 top-0 right-[5%] xl:right-[10%] 2xl:right-[15%] hidden lg:block"
              aria-hidden="true"
            >
              <RestaurantPhotoCard
                imageSrc={restaurantCardImg}
                name="Cheval Blanc"
              />
            </div>

            {/* "Get Inspired" outline badge */}
            <div
              className="absolute z-20 bottom-[16%] right-[15%] 2xl:right-[20%] hidden lg:block animate-float-4"
              aria-hidden="true"
            >
              <Badge
                text="Get Inspired"
                variant="transparent"
                size="lg"
                icon={Sparkles}
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

// ─── RestaurantPhotoCard (red-highlighted component) ─────────────────────────
// Small restaurant photo card with name label at the bottom.

interface RestaurantPhotoCardProps {
  imageSrc: string
  name: string
  className?: string
}

function RestaurantPhotoCard({
  imageSrc,
  name,
  className = '',
}: RestaurantPhotoCardProps) {
  return (
    <div
      className={`relative w-41 h-46 rounded-2xl overflow-hidden shadow-100${className ? ` ${className}` : ''}`}
    >
      {/* Photo */}
      <img
        src={imageSrc}
        alt={name}
        className="size-full object-cover"
      />

      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl bg-linear-to-b from-transparent via-transparent to-black/90 via-45%"
        aria-hidden="true"
      />

<div className='flex gap-1 absolute top-1.5 right-1.5'>
  <div className='flex justify-center items-center size-6 rounded-full bg-black/35 backdrop-blur-md border border-white/25'>
    <Heart className='size-3 text-white' />
  </div>
  <div className='flex justify-center items-center size-6 rounded-full bg-black/35 backdrop-blur-md border border-white/25'>
    <Share2 className='size-3 text-white' />
  </div>
</div>

      {/* Name */}
      <span className="absolute bottom-2.5 left-2.5 text-xs font-semibold text-white leading-tight">
        {name}
      </span>
    </div>
  )
}
