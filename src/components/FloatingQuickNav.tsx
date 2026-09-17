import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'

export interface QuickLink {
  label: string
  href: string
  /** SVG path/shape content rendered inside a 24×24 viewBox. */
  icon: ReactNode
}

/** Default quick links for the homepage. Import and override per page as needed. */
export const HOME_QUICK_LINKS: QuickLink[] = [
  {
    label: 'Services',
    href: '#services',
    icon: <path d="M4 6h16M4 12h16M4 18h10" strokeWidth="1.6" strokeLinecap="round" />,
  },
  {
    label: 'Pricing',
    href: '#pricing',
    icon: (
      <>
        <path d="M12 3v18" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M16 7.5a3.5 3 0 0 0-3.5-2.5h-1a2.75 2.5 0 0 0 0 5h1a2.75 2.5 0 0 1 0 5h-1A3.5 3 0 0 1 8 12.5"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    label: 'Reviews',
    href: '#reviews',
    icon: (
      <path
        d="M12 3.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L12 16.77l-5.2 2.75.99-5.8-4.21-4.1 5.82-.85L12 3.5z"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: 'Service Area',
    href: '#service-area',
    icon: (
      <>
        <path
          d="M12 21s6.5-5.2 6.5-10a6.5 6.5 0 1 0-13 0C5.5 15.8 12 21 12 21z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2.2" strokeWidth="1.5" />
      </>
    ),
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
        <path d="M4 7l8 6 8-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

interface FloatingQuickNavProps {
  /**
   * Links to display. Defaults to HOME_QUICK_LINKS.
   * Override per page with a different set of in-page anchors.
   */
  links?: QuickLink[]
  /**
   * How far down the page (in viewport-height units, 0–1) before the bar appears.
   * Defaults to 0.7 (70% of viewport height).
   */
  triggerAt?: number
}

/**
 * Glassmorphism quick-nav bar fixed to the bottom of the viewport.
 * Appears after the user scrolls past `triggerAt` vh. Includes a back-to-top button.
 */
export function FloatingQuickNav({ links = HOME_QUICK_LINKS, triggerAt = 0.7 }: FloatingQuickNavProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * triggerAt)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [triggerAt])

  const jump = (href: string) => (e: MouseEvent) => {
    // Only intercept in-page anchor links for smooth scrolling. External links,
    // tel:, and mailto: hrefs are allowed to navigate normally.
    if (!href.startsWith('#')) return
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-50 flex items-center justify-center gap-2 px-4 transition-all duration-300 sm:bottom-6 sm:gap-3 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <nav
        aria-label="Quick section navigation"
        className="flex items-center gap-1 rounded-[14px] border border-[#829bc4]/40 bg-white/60 p-1.5 shadow-[0_8px_30px_rgba(11,18,69,0.18)] backdrop-blur-xl sm:gap-1.5"
      >
        {links.map(({ label, href, icon }) => {
          const external = href.startsWith('http')
          return (
          <a
            key={label}
            href={href}
            onClick={jump(href)}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-[10px] px-2.5 py-1.5 text-[#0b1245] transition-colors hover:bg-[#829bc4]/20 sm:min-h-10 sm:flex-row sm:gap-1.5 sm:px-3"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#9a804c" className="size-5 shrink-0 sm:size-[18px]" aria-hidden>
              {icon}
            </svg>
            <span className="font-['Inter:Medium',sans-serif] text-[10px] leading-none sm:text-[13px]">{label}</span>
          </a>
          )
        })}
      </nav>

      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        className="flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#829bc4]/40 bg-[#0b1245] text-[#fffaf0] shadow-[0_8px_30px_rgba(11,18,69,0.18)] backdrop-blur-xl transition-colors hover:bg-[#1a2560] sm:size-10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-5" aria-hidden>
          <path d="M12 19V6M6 11l6-6 6 6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
