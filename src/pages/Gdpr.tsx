import { PageHeroSection } from '../components/sections/PageHeroSection'
import { gdprPolicySections } from '../utils/data'

export default function GdprPage() {
  return (
    <>
      <PageHeroSection
        badgeText="GDPR"
        title="GDPR &amp; Data Privacy"
        subtitle="Last updated: June 2026 · Applies to Youmii and all Youmii services"
        backgroundClass="bg-(image:--contact-hero-gr)"
        size='lg'
      />

      <section className="section">
        <div className="container max-w-4xl">
          <div className="flex flex-col gap-4 md:gap-8">
            {gdprPolicySections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-2 md:gap-3">
                <h2 className="text-lg sm:text-xl font-bold text-body-text">
                  {section.heading}
                </h2>
                <p className="text-sm sm:text-base text-secondary leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
