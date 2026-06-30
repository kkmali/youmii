import { UtensilsCrossed } from 'lucide-react'
import { Heading } from '../components/ui/Heading'
import { Button } from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="px-4 lg:px-8 py-6 md:py-10 lg:py-12">
      <section
        className="relative overflow-hidden rounded-2xl md:rounded-[30px] bg-(image:--contact-hero-gr) flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px] px-4 py-16"
        aria-labelledby="not-found-heading"
      >
        {/* Concentric ring decorations */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform translate-y-1/2" aria-hidden="true">
          <div className="size-[300px] sm:size-[500px] md:size-[700px] lg:size-[900px] xl:size-[1100px] rounded-full border border-body-text/6" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform translate-y-1/2" aria-hidden="true">
          <div className="size-[200px] sm:size-[350px] md:size-[500px] lg:size-[650px] xl:size-[800px] rounded-full border border-body-text/6" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform translate-y-1/2" aria-hidden="true">
          <div className="size-[120px] sm:size-[220px] md:size-[320px] lg:size-[420px] xl:size-[500px] rounded-full border border-body-text/6" />
        </div>

        {/* Decorative fork icons */}
        <div className="absolute top-10 left-8 sm:left-16 md:left-24 lg:left-40 opacity-60 rotate-20" aria-hidden="true">
          <UtensilsCrossed className="size-10 sm:size-14 md:size-16 text-body-text/20" />
        </div>
        <div className="absolute bottom-20 right-8 sm:right-16 md:right-24 lg:right-40 opacity-60 -rotate-20" aria-hidden="true">
          <UtensilsCrossed className="size-10 sm:size-14 md:size-16 text-body-text/20" />
        </div>

        {/* Large 404 text behind content */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="text-[120px] sm:text-[180px] md:text-[250px] lg:text-[350px] xl:text-[400px] font-extrabold bg-gradient-to-b from-white to-primary/20 bg-clip-text text-transparent leading-none mt-4 sm:mt-8 md:mt-12 tracking-tight">
            404
          </span>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center gap-3 text-center mt-24 sm:mt-32 md:mt-40 lg:mt-48">
          <Heading
            badgeText="Page not found"
            title={
              <>
                Nothing to <span className="text-primary">see here.</span>
              </>
            }
            subtitle="This page doesn't exist. Head back home and let Youmii find your next favourite restaurant."
            id="not-found-heading"
          />
        </div>
          <Button role="link" url="/" variant="primary" className="mt-3">
            Back to Home
          </Button>
      </section>
    </div>
  )
}
