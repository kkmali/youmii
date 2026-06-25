import { useState, useEffect, useRef } from 'react'
import { Button } from '../ui/Button'
import chevronDown from '../../assets/icons/chevron-down.svg'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Partner with us', href: '#partner' },
  { label: 'Contact us', href: '#contact' },
]

const languages = [
  { code: 'EN', label: 'English' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'FR', label: 'Français' },
  { code: 'IT', label: 'Italiano' },
]

function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('EN')
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer hover:bg-card-bg hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors text-sm font-medium text-body-text"
        aria-label="Switch language"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{selected}</span>
        <img
          alt=""
          src={chevronDown}
          className={`size-3.5 block transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 top-full mt-1.5 w-36 bg-white border border-grey-border rounded-xl shadow-100 overflow-hidden z-50"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={selected === lang.code}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-left cursor-pointer transition-colors hover:bg-card-bg active:bg-grey-border focus-visible:outline-2 focus-visible:outline-primary ${
                selected === lang.code ? 'text-primary bg-card-bg' : 'text-body-text hover:text-primary'
              }`}
              onClick={() => {
                setSelected(lang.code)
                setOpen(false)
              }}
            >
              <span className="flex-1">{lang.label}</span>
              {selected === lang.code && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 7L5.5 10L11.5 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * Animated hamburger ↔ X built entirely with Tailwind classes.
 */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex flex-col justify-center items-center size-5 relative" aria-hidden="true">
      <span
        className={`absolute block h-0.5 w-5 bg-body-text rounded-full transition-all duration-300 origin-center ${
          open ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
        }`}
      />
      <span
        className={`absolute block h-0.5 w-5 bg-body-text rounded-full transition-all duration-300 ${
          open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
        }`}
      />
      <span
        className={`absolute block h-0.5 w-5 bg-body-text rounded-full transition-all duration-300 origin-center ${
          open ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
        }`}
      />
    </span>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close drawer on resize to desktop breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-5 z-50 w-full bg-header-bg">
      {/* Top bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 h-12 md:h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="flex shrink-0 h-8 md:h-10">
          <img alt="" src="/youmii-logo.png" />
        </a>

        {/* Desktop nav pill */}
        <nav
          className="hidden md:flex items-center border border-grey-border rounded-2xl shadow-nav bg-white px-3 py-2"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-header-text hover:text-header-text-hover focus-visible:outline-2 focus-visible:outline-primary focus-visible:rounded-lg transition-colors whitespace-nowrap rounded-lg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Button variant="primary">Download App</Button>
        </div>

        {/* Mobile: language switcher + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            className="p-2 rounded-lg hover:bg-card-bg focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Mobile right-side drawer */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel — slides in from the right */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          aria-hidden={!mobileOpen}
          className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 flex flex-col shadow-foot transition-transform duration-300 ease-in-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-grey-border">
            <a href="/" className="flex shrink-0 h-7" onClick={() => setMobileOpen(false)}>
              <img alt="Youmii" src="/youmii-logo.png" />
            </a>
            <button
              className="p-2 rounded-lg hover:bg-card-bg focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <HamburgerIcon open={true} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col flex-1 px-5 pt-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-3.5 text-base font-medium text-header-text hover:text-header-text-hover focus-visible:outline-2 focus-visible:outline-primary transition-colors border-b border-grey-border last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-5 pb-8">
            <Button variant="primary" className="w-full justify-center">
              Download App
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
