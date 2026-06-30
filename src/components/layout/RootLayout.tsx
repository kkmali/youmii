import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer, type FooterProps } from './Footer'
import { type RootLayoutContext } from './use-footer-cta'


export function RootLayout() {
  const [ctaProps, setCtaProps] = useState<FooterProps | null>(null)

  return (
    <div className="min-h-screen flex flex-col bg-body-bg text-body-text">
      <Header />
      <main className="flex-1">
        <Outlet context={{ setCtaProps } satisfies RootLayoutContext} />
      </main>
      <Footer {...ctaProps} />
    </div>
  )
}
