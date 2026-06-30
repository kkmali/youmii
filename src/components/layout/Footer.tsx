import { CtaBanner } from '../ui/CtaBanner'
import instagramSvg from '../../assets/icons/instagram.svg'
import twitterSvg from '../../assets/icons/twitter.svg'
import linkedinSvg from '../../assets/icons/linkedin.svg'
import { footerLinks } from '../../utils/data'

// ---------------------------------------------------------------------------
// Data — extract to src/config/footer.ts when this grows or becomes CMS-driven
// ---------------------------------------------------------------------------




const socialLinks = [
  { label: 'Instagram', icon: instagramSvg, href: 'https://instagram.com' },
  { label: 'Twitter / X', icon: twitterSvg, href: 'https://twitter.com' },
  { label: 'LinkedIn', icon: linkedinSvg, href: 'https://linkedin.com' },
]

// ---------------------------------------------------------------------------

export interface FooterProps {
  badge?: string
  headline?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  onButtonClick?: () => void
}

export function Footer({
  badge,
  headline,
  description,
  buttonLabel,
  buttonHref,
  onButtonClick,
}: FooterProps) {
  return (
    <div className="bg-footer-bg w-full mb-4 sm:mb-6 md:mb-8 lg:mb-10">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="bg-(image:--footer-gr) shadow-foot rounded-2xl p-px">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 px-4 sm:px-8 lg:px-12 xl:px-15 py-6 sm:py-8 lg:py-10 xl:py-12 bg-white rounded-2xl">
            {/* CTA banner (optional) */}
            {headline && (
              <div className="">
                <CtaBanner
                  badge={badge}
                  headline={headline}
                  description={description}
                  buttonLabel={buttonLabel}
                  buttonHref={buttonHref}
                  onButtonClick={onButtonClick}
                />
              </div>
            )}

            {/* Footer proper */}
            <footer className="w-full" aria-label="Site footer">
              <div className="flex flex-col gap-5 md:gap-8 xl:gap-11">

                {/* Brand + nav columns */}
                <div className="flex flex-col gap-6 md:gap-8 md:flex-row md:items-start md:justify-between">

                  {/* Brand block */}
                  <div className="flex flex-col gap-2.5">
                    <a href="/" className="flex shrink-0 h-8 md:h-10">
                       <img alt="" src="/youmii-logo.png" />
                    </a>
                    <p className="text-sm text-secondary leading-snug">
                      AI-powered restaurant discovery<br />for Switzerland
                    </p>
                  </div>

                  {/* Nav columns — 2-col on mobile, 4-col on md+ */}
                  <nav
                    className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-x-10 md:gap-x-16"
                    aria-label="Footer navigation"
                  >
                    {footerLinks.map((col) => (
                      <div key={col.heading} className="flex flex-col gap-3 sm:gap-4">
                        <span className="text-sm font-semibold text-body-text">{col.heading}</span>
                        {col.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:rounded-sm transition-colors"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Divider */}
                <div className="h-px bg-grey-border w-full" />

                {/* Copyright + socials */}
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-secondary text-center sm:text-left">
                    © 2026 Youmii AG · Basel, Bern &amp; Zurich
                  </p>

                  <div className="flex items-center gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="size-8 md:size-10 flex items-center justify-center rounded-full bg-brand-subtle border border-brand-border hover:border-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors"
                      >
                        <img alt={s.label} src={s.icon} className="size-3.5 md:size-4.5 block" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
