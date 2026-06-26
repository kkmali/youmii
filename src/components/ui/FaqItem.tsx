import { useState } from 'react'
import chevronDown from '../../assets/icons/chevron-down.svg'

export interface FaqItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
  className?: string
}

export function FaqItem({
  question,
  answer,
  defaultOpen = false,
  className = '',
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className={`bg-white border border-grey-border rounded-2xl sm:rounded-[20px] shadow-10 flex flex-col gap-3 p-3 sm:p-4 md:p-5 w-full${className ? ` ${className}` : ''}`}
    >
      <button
        type="button"
        className="flex items-center justify-between w-full gap-4 text-left focus-visible:outline-2 focus-visible:outline-primary hover:cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="flex-1 min-w-0 font-semibold text-sm sm:text-lg text-body-text">
          {question}
        </span>
        <img
          src={chevronDown}
          alt=""
          width={18}
          height={18}
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {isOpen && (
        <p className="text-xs sm:text-base text-secondary animate-[fadeIn_0.2s_ease-out_forwards]">
          {answer}
        </p>
      )}
    </div>
  )
}
