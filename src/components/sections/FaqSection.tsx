import { useState } from 'react'
import { Heading } from '../ui/Heading'
import { FaqItem } from '../ui/FaqItem'
import { defaultFaqs } from '../../utils/data'
import type { FaqEntry } from '../../utils/data'

export type { FaqEntry }

export interface FaqSectionProps {
  badgeText?: string
  title?: string
  subtitle?: string
  items?: FaqEntry[]
  className?: string
}

/**
 * FAQ section — renders a Heading and an accordion list of FaqItem components.
 * Only one item can be open at a time; opening a new one closes the previous.
 * All content is prop-driven with sensible defaults.
 */
export function FaqSection({
  badgeText = 'FAQ',
  title = 'Everything you need to know',
  subtitle = "Questions about Youmii? We've got answers.",
  items = defaultFaqs,
  className = '',
}: FaqSectionProps) {
  // First item is open by default; null means all closed
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className={`section${className ? ` ${className}` : ''}`}>
      <div className="container flex flex-col items-center gap-6 md:gap-10">
        <Heading
          badgeText={badgeText}
          title={title}
          subtitle={subtitle}
          align="center-align"
        />

        <ul className="flex flex-col gap-3 w-full max-w-5xl list-none p-0 m-0">
          {items.map((item, index) => (
            <li key={index}>
              <FaqItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
