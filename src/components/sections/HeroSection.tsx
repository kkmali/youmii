import { Sparkles, WalletCards, MapPinned, Globe, UtensilsCrossed, Astroid } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { HeroOrderCard } from '../cards/HeroOrderCard'


export interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <section
      className={`section overflow-hidden${className ? ` ${className}` : ''}`}
      aria-label="Hero"
    >
      <div className="container flex flex-col items-center gap-3">

        {/* ── Top content: badge + headline + CTA ─────────────────────── */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center max-w-2xl">
          <Badge text="AI-powered dining" variant="primary" icon={Sparkles} />

          <h1 className="text-[clamp(28px,5vw,48px)] font-bold text-body-text leading-tight tracking-tight">
            Find the{' '}
            <span className="text-primary">food experiences</span>
            {' '}made for you.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-secondary leading-relaxed max-w-xl">
            Youmii matches you with restaurants for your mood and occasion — then
            books the table. Now in Bern, Zurich, and Basel.
          </p>

          {/* QR + Download */}
          <div className="flex flex-col items-center gap-4 mt-2">
            <div className="flex items-center gap-4 md:gap-6">
              {/* QR code — served from public/ at a known URL */}
              <img
                src="/qr-code.png"
                alt="Scan to download Youmii"
                className="size-14 md:size-20 object-contain"
              />
              <Button
                variant="primary"
                role="link"
                url="https://app.youmii.ch"
              >
                Download App
              </Button>
            </div>

            {/* Store badges row */}
            <div className="flex items-center gap-6">
              {/* Google Play */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Get it on Google Play"
                className="flex items-center gap-1.5 hover:opacity-75"
              >
                <img src="/play.png" alt="play-store" className='h-5' />
                <span className="text-sm font-medium text-primary">Google Play</span>
              </a>
              {/* App Store */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Download on the App Store"
                className="flex items-center gap-1.5 hover:opacity-75"
              >
                <img src="/apple.png" alt="apple" className='h-5' />
                <span className="text-sm font-medium text-primary">App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Phone mockup + floating elements ────────────────────────── */}
        <div className="relative w-full flex justify-center">

          {/* Phone mockup image — entire image from public/ */}
          <img
            src="/youmii-hero-lg.png"
            alt="Youmii app on iPhone showing restaurant discovery"
            width={1280}
            height={797}
            className="relative z-10 w-full max-w-[900px] object-contain select-none pointer-events-none"
          />

          {/* ── Floating outline badges ────────────────────────────────── */}

          {/* Left side */}
          <div
            className="absolute z-20 top-[12%] left-[2%] hidden lg:block animate-float-1"
            aria-hidden="true"
          >
            <Badge
              text="Personalised for you"
              variant="outline"
              size="lg"
              icon={Astroid}
              className='shadow-nav'
            />
          </div>

          <div
            className="absolute z-20 top-[42%] left-[1%] hidden lg:block animate-float-2"
            aria-hidden="true"
          >
            <Badge
              text="Under CHF 25"
              variant="outline"
              size="lg"
              icon={WalletCards}
              className='shadow-nav'
            />
          </div>

          <div
            className="absolute z-20 bottom-[14%] left-[3%] hidden lg:block animate-float-3"
            aria-hidden="true"
          >
            <Badge
              text="Le Renard · 7 min walk"
              variant="outline"
              size="lg"
              icon={MapPinned}
              className='shadow-nav'
            />
          </div>

          {/* Right side */}
          <div
            className="absolute z-20 top-[12%] right-[2%] hidden lg:block animate-float-4"
            aria-hidden="true"
          >
            <Badge
              text="Ask in Swiss German"
              variant="outline"
              size="lg"
              icon={Globe}
              className='shadow-nav'
            />
          </div>

          <div
            className="absolute z-20 bottom-[18%] right-[2%] hidden lg:block animate-float-5"
            aria-hidden="true"
          >
            <Badge
              text="Quiet Table Tonight"
              variant="outline"
              size="lg"
              icon={UtensilsCrossed}
              className='shadow-nav'
            />
          </div>

          {/* ── Floating HeroOrderCards (green highlight) ─────────────── */}
          {/* Stacked pair, top-right of the phone */}
          <div
            className="absolute z-20 top-[30%] right-[3%] hidden lg:flex flex-col items-end"
            aria-hidden="true"
          >
            {/* Back card — slightly rotated */}
            <HeroOrderCard
              title="Best Terraces"
              subtitle="Authentic Italian Cuisine"
              imageSrc="/food.png"
              tag="8 Places"
              rotationClass="-rotate-[5deg] translate-x-2 translate-y-3"
            />
            {/* Front card */}
            <HeroOrderCard
              title="Under CHF 25"
              subtitle="Affordable Italian Dining"
              imageSrc="/food.png"
              tag="5 Places"
              rotationClass="rotate-[8deg] -translate-y-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
