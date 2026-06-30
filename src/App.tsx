import { HeroSection } from './components/ui/HeroSection'
import { FeaturesSection } from './components/ui/FeaturesSection'
import { HowItWorksSection } from './components/ui/HowItWorksSection'
import { ComparisonSection } from './components/ui/ComparisonSection'
import { TestimonialsSection } from './components/ui/TestimonialsSection'
import { FaqSection } from './components/ui/FaqSection'

import { useFooterCta } from './components'

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
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  )
}
