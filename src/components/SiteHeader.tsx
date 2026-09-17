import { useRef, useState } from 'react'
import { BrandMarkSmall } from './BrandSvg'
import { WRAP, GoldButton } from './shared'
import { CALENDLY_URL } from '../constants/contact'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Travel', href: '/travel' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

// Sub items shown under the Services nav item.
const SERVICES_SUBLINKS = [
  { label: 'Services Overview', href: '/services' },
  { label: 'Mobile Notary', href: '/notary' },
  { label: 'Apostille', href: '/apostille' },
  { label: 'Live Scan Fingerprinting', href: '/live-scan' },
  { label: 'Loan Signing', href: '/loan-signing' },
]

interface SiteHeaderProps {
  /** Label of the currently active nav item, e.g. "Home" or "Pricing". */
  activeLabel?: string
}

/**
 * Site-wide sticky header: logo + subtitle, nav links with active state, mobile hamburger.
 * Pass `activeLabel` matching one of NAV_LINKS[].label to highlight the current page.
 */
export function SiteHeader({ activeLabel = 'Home' }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  // Close the Services dropdown after a short grace period so a quick or
  // slightly imprecise mouse move between the trigger and menu does not
  // dismiss it instantly.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const closeServicesSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setServicesOpen(false), 220)
  }

  // Services counts as active on the overview page and on the pages that live
  // under Services: Mobile Notary, Live Scan, Loan Signing, and Apostille.
  const servicesActive =
    activeLabel === 'Services' ||
    activeLabel === 'Notary' ||
    activeLabel === 'LiveScan' ||
    activeLabel === 'LoanSigning' ||
    activeLabel === 'Apostille'

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} flex items-center justify-between py-4`}>
        <a href="/" className="flex items-center gap-2">
          <BrandMarkSmall className="size-8 shrink-0" />
          <div className="flex flex-col leading-none">
            <span className="font-['Inter:Regular',sans-serif] text-[15px] tracking-[0.35px] text-[#0b1245]">
              Signed &amp; Secured
            </span>
            <span className="mt-0.5 font-['Inter:Regular',sans-serif] text-[10px] tracking-[0.2px] text-[#9a804c]">
              Serving the Greater Sacramento Area
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ label, href }) => {
            if (label === 'Services') {
              return (
                <li
                  key={label}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServicesSoon}
                  onFocus={openServices}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setServicesOpen(false)
                  }}
                >
                  <a
                    href={href}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    className={`inline-block font-['Inter:Regular',sans-serif] text-[14px] text-[#0b1245] ${
                      servicesActive
                        ? 'rounded-[8px] border-2 border-[#b39257] px-3 py-0.5 shadow-[3px_4px_4px_0px_rgba(0,0,0,0.25)]'
                        : ''
                    }`}
                  >
                    {label}
                  </a>
                  {servicesOpen && (
                    // pt-2 is an invisible bridge that keeps the trigger and menu
                    // as one continuous hover area, so there is no dead gap.
                    <div className="absolute left-0 top-full z-50 pt-2">
                      <ul
                        role="menu"
                        aria-label="Services"
                        className="min-w-[190px] overflow-hidden rounded-[8px] border border-[#e0e0e0] bg-white py-1 shadow-[3px_4px_4px_0px_rgba(0,0,0,0.25)]"
                      >
                        {SERVICES_SUBLINKS.map((sub) => (
                          <li key={sub.label} role="none">
                            <a
                              role="menuitem"
                              href={sub.href}
                              className="block px-4 py-2 font-['Inter:Regular',sans-serif] text-[14px] text-[#0b1245] hover:bg-[#fffaf0]"
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )
            }
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`font-['Inter:Regular',sans-serif] text-[14px] text-[#0b1245] ${
                    label === activeLabel
                      ? 'rounded-[8px] border-2 border-[#b39257] px-3 py-0.5 shadow-[3px_4px_4px_0px_rgba(0,0,0,0.25)]'
                      : ''
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <GoldButton>Book now</GoldButton>
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="h-0.5 w-5 bg-[#0b1245]" />
            <span className="h-0.5 w-5 bg-[#0b1245]" />
            <span className="h-0.5 w-5 bg-[#0b1245]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#e0e0e0] bg-white lg:hidden">
          <ul className={`${WRAP} flex flex-col gap-1 py-3`}>
            {NAV_LINKS.map(({ label, href }) => {
              if (label === 'Services') {
                return (
                  <li key={label}>
                    <div className="flex items-center justify-between">
                      <a
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`block flex-1 py-2 font-['Inter:Regular',sans-serif] text-[15px] ${
                          servicesActive ? 'font-semibold text-[#9a804c]' : 'text-[#0b1245]'
                        }`}
                      >
                        {label}
                      </a>
                      <button
                        type="button"
                        aria-label="Toggle Services submenu"
                        aria-expanded={mobileServicesOpen}
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex size-9 items-center justify-center font-['Inter:Regular',sans-serif] text-[18px] leading-none text-[#9a804c]"
                      >
                        <span className={mobileServicesOpen ? 'rotate-45' : ''}>+</span>
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <ul className="flex flex-col gap-1 pl-4">
                        {SERVICES_SUBLINKS.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 font-['Inter:Regular',sans-serif] text-[15px] text-[#0b1245]"
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              }
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block py-2 font-['Inter:Regular',sans-serif] text-[15px] ${
                      label === activeLabel ? 'font-semibold text-[#9a804c]' : 'text-[#0b1245]'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
            <li className="pt-2">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block"
              >
                <GoldButton className="w-full">Book now</GoldButton>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
