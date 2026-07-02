import { useState } from 'react'
import chevronDown from '../../assets/icons/chevron-down.svg'

export interface FaqItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
  isOpen?: boolean
  onToggle?: () => void
  className?: string
}

export function FaqItem({
  question,
  answer,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onToggle,
  className = '',
}: FaqItemProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen)

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen

  function handleToggle() {
    if (onToggle) {
      onToggle()
    } else {
      setInternalIsOpen((prev) => !prev)
    }
  }

  return (
    <div
      className={`bg-white border border-grey-border rounded-2xl sm:rounded-[20px] shadow-10 flex flex-col p-3 sm:p-4 md:p-5 w-full${className ? ` ${className}` : ''}`}
    >
      <button
        type="button"
        className="flex items-center justify-between w-full gap-4 text-left focus-visible:outline-2 focus-visible:outline-primary hover:cursor-pointer"
        onClick={handleToggle}
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

      {/* Grid-row trick: animates from 0fr → 1fr so height transitions smoothly without a jump */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="text-xs sm:text-base text-secondary pt-3">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
