import { useState, useEffect } from 'react'
import { Button } from '../ui/Button'
import chevronDown from '../../assets/icons/chevron-down.svg'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Partner with us', href: '#partner' },
  { label: 'Contact us', href: '#contact' },
]

function LanguageSwitcher() {
  return (
    <button
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-card-bg focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors text-sm font-medium text-body-text"
      aria-label="Switch language"
    >
      <span>EN</span>
      <img alt="" src={chevronDown} className="size-3.5 block" />
    </button>
  )
}

/**
 * Animated hamburger ↔ X built entirely with Tailwind classes.
 * Three spans rotate/translate using conditional class strings — no inline style.
 */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex flex-col justify-center items-center size-5 relative" aria-hidden="true">
      <span
        className={`absolute block h-0.5 w-5 bg-body-text rounded-full transition-all duration-300 origin-center ${open ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
          }`}
      />
      <span
        className={`absolute block h-0.5 w-5 bg-body-text rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
          }`}
      />
      <span
        className={`absolute block h-0.5 w-5 bg-body-text rounded-full transition-all duration-300 origin-center ${open ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
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

        {/* <YoumiiLogo /> */}
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

      {/* Mobile drawer — CSS max-height transition for smooth slide */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        aria-hidden={!mobileOpen}
      >
        <div className="border-t border-grey-border bg-white px-4 sm:px-6 pt-4 pb-6 flex flex-col">
          <nav className="flex flex-col" aria-label="Mobile navigation">
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
          <div className="mt-5">
            <Button variant="primary" className="w-full justify-center">
              Download App
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
