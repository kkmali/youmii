import { Heading } from '../ui/Heading'
import { StepCard } from '../cards/StepCard'
import step1Img from '../../assets/how-it-works-step1.jpg'
import step2Img from '../../assets/how-it-works-step2.jpg'
import step3Img from '../../assets/how-it-works-step3.jpg'

interface Step {
  step: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  offsetClass?: string
}

const STEPS: Step[] = [
  {
    step: '01',
    title: 'Define your craving',
    description:
      "Tell us what you're craving — a terrace dinner, vegan lunch, or Swiss classic. Youmii understands natural language, including Swiss German.",
    imageSrc: step1Img,
    imageAlt: 'Person searching for a restaurant on the Youmii app',
  },
  {
    step: '02',
    title: 'Browse your matches',
    description:
      'See curated restaurant cards with photos, ratings, opening hours, menus, and travel time from your location. Filter by mood, cuisine, or dietary need.',
    imageSrc: step2Img,
    imageAlt: 'Curated restaurant match cards in Youmii',
    offsetClass: 'lg:mt-12',
  },
  {
    step: '03',
    title: 'Reserve and enjoy',
    description:
      'Submit your reservation request directly in the app. The restaurant confirms and you get a push notification. No phone calls, no waiting.',
    imageSrc: step3Img,
    imageAlt: 'Reservation confirmed notification in Youmii',
    offsetClass: 'lg:mt-24',
  },
]

export interface HowItWorksSectionProps {
  className?: string
}

export function HowItWorksSection({ className = '' }: HowItWorksSectionProps) {
  return (
    <section
      className={`section bg-(image:--how-it-works-gr) ${className ? ` ${className}` : ''}`}
    >
      <div className="container flex flex-col gap-10 lg:gap-16">

        {/* Heading */}
        <Heading
          badgeText="HOW IT WORKS"
          title={
            <>
              From <span className="text-primary">Craving to Table</span> in Three Steps
            </>
          }
          align="center-align"
        />

        {/* Step cards */}
        {/* Mobile: single column stack (no stagger).                   */}
        {/* Desktop (lg+): row with staggered vertical offsets via mt-* */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-11">
          {STEPS.map(({ step, title, description, imageSrc, imageAlt, offsetClass }) => (
            <StepCard
              key={step}
              step={step}
              title={title}
              description={description}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              className={offsetClass}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
