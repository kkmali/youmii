import { Heading } from '../components/ui/Heading'
import { Button } from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="px-4 lg:px-8 py-6 md:py-10 lg:py-12">
      <section
        className="relative overflow-hidden rounded-2xl md:rounded-[30px] bg-(image:--contact-hero-gr) flex flex-col items-center justify-center min-h-80 md:min-h-150 lg:min-h-175 px-4 py-10 md:py-16"
        aria-labelledby="not-found-heading"
      >
        {/* Concentric ring decorations */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform translate-y-1/2" aria-hidden="true">
          <div className="size-75 sm:size-125 md:size-175 lg:size-225 xl:size-275 rounded-full border border-body-text/6" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform translate-y-1/2" aria-hidden="true">
          <div className="size-50 sm:size-87.5 md:size-125 lg:size-162.5 xl:size-200 rounded-full border border-body-text/6" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform translate-y-1/2" aria-hidden="true">
          <div className="size-30 sm:size-55 md:size-80 lg:size-105 xl:size-125 rounded-full border border-body-text/6" />
        </div>

        {/* Decorative fork icons */}
        <div className="absolute top-10 left-3 sm:left-12 lg:left-[16%] xl:left-[20%] opacity-60 rotate-60" aria-hidden="true">
          <img src="/src/assets/cutlery.png" alt="" className='size-10 md:size-17' />
        </div>
        <div className="absolute top-35 md:top-65 right-8 sm:right-20 xl:right-40 opacity-60" aria-hidden="true">
          <img src="/src/assets/cutlery.png" alt="" className='size-10 md:size-17' />
        </div>

        {/* Large 404 text behind content */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="text-[120px] sm:text-[180px] md:text-[250px] lg:text-[350px] font-extrabold bg-linear-to-b from-white to-primary/20 bg-clip-text text-transparent leading-none tracking-tight max-sm:mt-4">
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
            size='lg'
          />
        </div>
          <Button role="link" url="/" variant="primary" className="mt-3">
            Back to Home
          </Button>
      </section>
    </div>
  )
}
