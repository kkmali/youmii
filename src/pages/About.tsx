import { Sparkles } from 'lucide-react'
import { AboutHeroSection, BuiltForDiscoverySection, TeamSection, useFooterCta, ValuesSection } from '../components'

export default function AboutPage() {
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
      <AboutHeroSection />
      <BuiltForDiscoverySection
        badgeText="Our Mission"
        badgeIcon={Sparkles}
        title="Built for Discovery"
        imageSrc="/built-for-discovery.png"
        imageAlt="Youmii app showcasing restaurant discovery"
        description="Switzerland's finest restaurants deserve to be found — not buried under generic reviews. Youmii makes discovery personal. Tell us what you're in the mood for, and we'll find it. Not your postcode. You."
      />
      <BuiltForDiscoverySection
        className="md:flex-row-reverse!"
        badgeText="Our Vision"
        badgeIcon={Sparkles}
        title="Your Table Awaits"
        imageSrc="/table-awaits.png"
        imageAlt="Your Table Awaits"
        description="A Switzerland where every diner — German, French, or Italian-speaking — finds a restaurant that fits their evening. Where owners spend less time on the phone and more time in the kitchen. A great meal, just a few taps away."
      />
      <ValuesSection />
      <TeamSection />
    </>
  )
}
