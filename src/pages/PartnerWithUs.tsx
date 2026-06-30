import { StatsBar, useFooterCta } from '../components'
import { PartnerHeroSection } from '../components/sections/PartnerHeroSection'
import { HowItWorksSection } from '../components/sections/HowItWorksSection'
import { PartnerDashboardSection } from '../components/sections/PartnerDashboardSection'
import { PartnerBrandLogosSection } from '../components/sections/PartnerBrandLogosSection'
import { PartnerFormSection } from '../components/sections/PartnerFormSection'
import { FaqSection } from '../components/sections/FaqSection'
import { partnerFaqs, partnerSteps, statsData } from '../utils/data'

export default function PartnerWithUsPage() {
  useFooterCta({
    badge: 'For Restaurant Partners',
    headline: 'Reach More Guests.',
    description: 'Join Youmii and connect with thousands of diners filling your tables every night.',
    buttonLabel: 'Get listed free',
    onButtonClick: () => {
      document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })
    },
  })

  return (
    <>
      <PartnerHeroSection />
      <PartnerBrandLogosSection />
      <HowItWorksSection
        badgeText="Partner with us"
        title={
          <>
            Let&apos;s Fill More Tables,{' '}
            <span className="text-primary">Together</span>
          </>
        }
        steps={partnerSteps}
      />
      <PartnerDashboardSection />
      <StatsBar stats={statsData} className='section lg:py-10!'/>
      <PartnerFormSection />
      <FaqSection
        badgeText="FAQ"
        title="Got questions about partnering?"
        subtitle="Everything you need to know about growing your restaurant with Youmii."
        items={partnerFaqs}
      />
    </>
  )
}
