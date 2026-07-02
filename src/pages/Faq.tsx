import { useState } from 'react'
import { useFooterCta } from '../components'
import { PageHeroSection } from '../components/sections/PageHeroSection'
import { FaqItem } from '../components/ui/FaqItem'
import { defaultFaqs, partnerFaqs } from '../utils/data'

const TABS = [
  { id: 'diners', label: 'For Diners', faqs: defaultFaqs },
  { id: 'partners', label: 'For Restaurant Partners', faqs: partnerFaqs },
] as const

type TabId = (typeof TABS)[number]['id']

export default function FaqPage() {
  useFooterCta({
    badge: 'Your Table is Waiting',
    headline: 'Discover. Match. Reserve.',
    description:
      'Download Youmii free and find your next great restaurant in Bern, Zurich, or Basel — tonight.',
    buttonLabel: 'Download App',
    buttonHref: 'https://app.youmii.ch',
  })

  const [activeTab, setActiveTab] = useState<TabId>('diners')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function handleTabChange(id: TabId) {
    setActiveTab(id)
    setOpenIndex(0) // reset accordion when switching tabs
  }

  return (
    <>
      <PageHeroSection
        badgeText="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Youmii — for diners and restaurant partners."
        backgroundClass="bg-(image:--contact-hero-gr)"
        size="lg"
      />

      <section className="section">
        <div className="container max-w-4xl flex flex-col gap-8 md:gap-10">

          {/* Tab bar */}
          <div
            role="tablist"
            aria-label="FAQ categories"
            className="flex items-center self-center bg-card-bg border border-grey-border rounded-full p-1 gap-1"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${
                    isActive
                      ? 'bg-(image:--primary-gr) text-white shadow-100'
                      : 'text-secondary hover:text-body-text'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab panels */}
          {TABS.map((tab) => (
                <div
                  key={tab.id}
                  id={`tabpanel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
              hidden={activeTab !== tab.id}
                >
                  <ul className="flex flex-col gap-3 list-none p-0 m-0">
                    {tab.faqs.map((item, index) => (
                      <li key={index}>
                        <FaqItem
                          question={item.question}
                          answer={item.answer}
                          isOpen={activeTab === tab.id && openIndex === index}
                          onToggle={() =>
                            setOpenIndex((prev) => (prev === index ? null : index))
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </div>
          ))}

        </div>
      </section>
    </>
  )
}
