import { Heading } from './Heading'
import { FaqItem } from './FaqItem'

export interface FaqEntry {
  question: string
  answer: string
}

export interface FaqSectionProps {
  badgeText?: string
  title?: string
  subtitle?: string
  items?: FaqEntry[]
  className?: string
}

const DEFAULT_FAQS: FaqEntry[] = [
  {
    question: 'How does Youmii match me with restaurants?',
    answer:
      "Youmii uses AI-powered natural language search — type or speak what you're craving, and the app instantly surfaces restaurants that match. You can also set your taste preferences (cuisine type, dietary needs, budget, spice level) in your profile, and Youmii uses these as context for every search. The more you use it, the better it fits you.",
  },
  {
    question: 'Is Youmii free to use?',
    answer:
      'Yes — Youmii is completely free to download and use. Discover restaurants, read reviews, and make reservations at no cost. Some partner restaurants may offer exclusive deals through the app.',
  },
  {
    question: 'How do I update my taste preferences?',
    answer:
      'Open the app and go to your Profile. Tap "Taste Preferences" to update your cuisine types, dietary requirements, budget range, and spice level. Youmii uses these preferences as context whenever you search — the more specific you are, the more tailored your results.',
  },
  {
    question: 'Which restaurants are available on Youmii?',
    answer:
      'Youmii currently covers restaurants in Bern, Zurich, and Basel. We partner with hundreds of local venues across all cuisines and price ranges. New restaurants are added regularly — if your favourite spot is missing, you can suggest it directly from the app.',
  },
  {
    question: 'How do reviews work on Youmii?',
    answer:
      'Only verified diners who booked through Youmii can leave a review. This keeps feedback genuine and unbiased. Reviews cover food quality, service, ambience, and value, with an overall star rating to help you decide quickly.',
  },
  {
    question: 'Can I book a table directly through the app?',
    answer:
      'Absolutely. Once you find a restaurant you like, tap "Reserve" to pick a date, time, and party size. You will receive a confirmation instantly, and a reminder before your reservation. No phone calls, no waiting.',
  },
]

/**
 * FAQ section — renders a Heading and an accordion list of FaqItem components.
 * All content is prop-driven with sensible defaults.
 */
export function FaqSection({
  badgeText = 'FAQ',
  title = 'Everything you need to know',
  subtitle = "Questions about Youmii? We've got answers.",
  items = DEFAULT_FAQS,
  className = '',
}: FaqSectionProps) {
  return (
    <section className={`section${className ? ` ${className}` : ''}`}>
      <div className="container flex flex-col items-center gap-6 md:gap-10">
        <Heading
          badgeText={badgeText}
          title={title}
          subtitle={subtitle}
          align="center-align"
        />

        <ul className="flex flex-col gap-3 w-full max-w-[1024px] list-none p-0 m-0">
          {items.map((item, index) => (
            <li key={index}>
              <FaqItem
                question={item.question}
                answer={item.answer}
                defaultOpen={index === 0}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
