import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUpRight, X } from 'lucide-react'
import { Button } from '../ui/Button'
import chevronDown from '../../assets/icons/chevron-down.svg'
import { socialLinks } from '../../utils/data'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Partner with us', href: '/partner-with-us' },
  { label: 'Contact us', href: '/contact' },
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
 * Animated hamburger built entirely with Tailwind classes.
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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      return location.hash === href
    }
    return location.pathname === href
  }

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
    <header className={`sticky top-0 z-50 w-full bg-header-bg transition-shadow duration-300 ${scrolled ? 'shadow-100' : 'shadow-none'}`}>
      {/* Top bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="flex shrink-0 h-8 lg:h-10">
          <img alt="" src="/youmii-logo.png" />
        </a>

        {/* Desktop nav pill */}
        <nav
          className="hidden md:flex items-center border border-grey-border rounded-2xl shadow-nav bg-white p-1.5 gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-2.5 lg:px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap rounded-xl ${
                  active
                    ? 'bg-primary text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
                    : 'text-header-text hover:text-header-text-hover focus-visible:outline-2 focus-visible:outline-primary'
                }`}
              >
                {link.label}
              </a>
            )
          })}
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
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          aria-hidden={!mobileOpen}
          className={`fixed top-0 right-0 h-full w-[min(82vw,340px)] z-50 flex flex-col overflow-hidden transition-transform duration-300 ease-in-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ background: 'linear-gradient(160deg,#fff9f5 0%,#fef3eb 40%,#fde8d4 100%)' }}
        >
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full opacity-30" style={{ background: 'radial-gradient(circle,#ff934f 0%,transparent 70%)' }} aria-hidden="true" />
          <div className="pointer-events-none absolute top-1/2 -left-20 w-48 h-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle,#ed5f18 0%,transparent 70%)' }} aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-24 right-0 w-36 h-36 rounded-full opacity-20" style={{ background: 'radial-gradient(circle,#f6ad79 0%,transparent 70%)' }} aria-hidden="true" />

          {/* Header */}
          <div className="relative flex items-center justify-between px-6 pt-6 pb-4">
            <a href="/" className="flex shrink-0 h-7" onClick={() => setMobileOpen(false)}>
              <img alt="Youmii" src="/youmii-logo.png" />
            </a>
            <button
              className="size-9 flex items-center justify-center rounded-full bg-white border border-grey-border text-body-text hover:border-primary hover:text-primary active:scale-95 focus-visible:outline-2 focus-visible:outline-primary shadow-10 transition-all duration-200"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={15} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>

          {/* Eyebrow */}
          <p className="relative px-6 pb-5 text-[11px] font-semibold tracking-widest uppercase text-primary/70">
            Navigation
          </p>

          {/* Nav links */}
          <nav className="relative flex flex-col flex-1 px-4 gap-2" aria-label="Mobile navigation">
            {navLinks.map((link, i) => {
              const active = isActive(link.href)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ animationDelay: `${i * 70}ms` }}
                  className={`group relative flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary overflow-hidden ${
                    mobileOpen ? 'animate-[fadeIn_0.4s_ease-out_both]' : 'opacity-0'
                  } ${
                    active
                      ? 'bg-primary shadow-100 text-white'
                      : 'bg-white/70 border border-white text-body-text hover:bg-white hover:border-brand-border hover:shadow-10'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {/* Index number */}
                  <span className={`text-[11px] font-bold tabular-nums shrink-0 w-5 ${active ? 'text-white/60' : 'text-primary/40 group-hover:text-primary/70'}`}>
                    0{i + 1}
                  </span>

                  {/* Label */}
                  <span className="flex-1 font-semibold text-base leading-none">
                    {link.label}
                  </span>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                    className={`shrink-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${active ? 'opacity-70' : 'opacity-20 group-hover:opacity-60'}`}
                  />

                  {/* Active shine streak */}
                  {active && (
                    <span className="absolute right-0 top-0 h-full w-1/3 bg-white/10 rounded-r-2xl pointer-events-none" />
                  )}
                </a>
              )
            })}
          </nav>


          {/* Bottom */}
          <div className="relative px-4 pt-4 pb-8 flex flex-col gap-4">
            {/* Social */}
            <div className="flex items-center justify-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="size-9 flex items-center justify-center rounded-full bg-white border border-grey-border hover:border-primary hover:shadow-100 active:scale-95 focus-visible:outline-2 focus-visible:outline-primary shadow-10 transition-all duration-200"
                >
                  <img src={social.icon} alt="" width={15} height={15} aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <Button variant="primary" fullWidth onClick={() => setMobileOpen(false)}>
              Download App
            </Button>

            {/* Tagline */}
            <p className="text-center text-[11px] text-secondary tracking-wide">
              Available in Bern · Zurich · Basel
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
