import { HeroSection } from './components/sections/HeroSection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { ComparisonSection } from './components/sections/ComparisonSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { FaqSection } from './components/sections/FaqSection'

import { useFooterCta } from './components'
import { steps } from './utils/data'

export default function App() {
  useFooterCta({
    badge: 'Your Table is Waiting',
    headline: 'Discover. Match. Reserve.',
    description:
      'Download Youmii free and find your next great restaurant in Bern, Zurich, or Basel — tonight.',
    buttonLabel: 'Download App',
    buttonHref: 'https://app.youmii.ch',
  })

  return (
    <>
      <HeroSection />
      <ComparisonSection />
      <HowItWorksSection
        badgeText="HOW IT WORKS"
        title={
          <>
            From <span className="text-primary">Craving to Table</span> in Three Steps
          </>
        }
        steps={steps}
      />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  )
}
