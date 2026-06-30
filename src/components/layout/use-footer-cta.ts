import { useEffect, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'
import type { FooterProps } from './Footer'

export interface RootLayoutContext {
  setCtaProps: (props: FooterProps | null) => void
}

/**
 * Hook to set the Footer CTA props from a route/page component.
 */
export function useFooterCta(ctaProps: FooterProps) {
  const context = useOutletContext<RootLayoutContext | null>()
  const propsRef = useRef(ctaProps)
  propsRef.current = ctaProps

  useEffect(() => {
    if (context?.setCtaProps) {
      context.setCtaProps(propsRef.current)
      return () => context.setCtaProps(null)
    }
  }, [context])
}
