import { PageHeroSection } from '../components/sections/PageHeroSection'
import { privacyPolicySections } from '../utils/data'

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeroSection
        badgeText="Privacy"
        title="Privacy Policy"
        subtitle="Last updated: June 2026 · Applies to Youmii and all Youmii services"
        backgroundClass="bg-(image:--contact-hero-gr)"
      />

      <section className="section">
        <div className="container max-w-4xl">
          <div className="flex flex-col gap-8">
            {privacyPolicySections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-3">
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
