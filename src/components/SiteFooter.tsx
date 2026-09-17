import { BrandMarkLarge, BrandMarkSmall } from './BrandSvg'
import { WRAP } from './shared'
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY_PLAIN, PHONE_TEL } from '../constants/contact'

const FOOTER_COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Mobile Notary', href: '/notary' },
      { label: 'Apostille', href: '/notary' },
      { label: 'Live Scan', href: '/services' },
      { label: 'Insurance', href: '/insurance' },
      { label: 'Travel', href: '/travel' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      // Resources points to the FAQ page for now. A dedicated Resources page or
      // section may be built later, at which point this href should be updated.
      { label: 'Resources', href: '/faq' },
    ],
  },
  {
    title: 'Legal',
    // These link to the /privacy, /terms, and /accessibility pages.
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61578014675192' },
  { label: 'Instagram', href: 'https://www.instagram.com/signed.secured' },
]

/** Site-wide footer — brand, contact info, link columns, legal copy. */
export function SiteFooter() {
  return (
    <footer className="bg-[#0b1245] text-white">
      <div className={`${WRAP} py-16`}>
        <div className="flex flex-col items-center">
          <BrandMarkLarge className="size-[73px]" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2">
              <BrandMarkSmall className="size-9" />
              <span className="font-['Manrope:SemiBold',sans-serif] text-[20px] font-semibold tracking-[-0.5px] text-[#fdfbf7]">
                Signed &amp; Secured
              </span>
            </a>
            <p className="mt-4 max-w-[240px] font-['Manrope:Regular',sans-serif] text-[14px] leading-[1.6] text-[#fdfbf7] opacity-80">
              Serving the greater Sacramento area by appointment only.
            </p>
            <div className="mt-4 flex flex-col gap-1 font-['Manrope:Regular',sans-serif] text-[14px] text-[#fdfbf7] opacity-80">
              <a href={PHONE_TEL}>{PHONE_DISPLAY_PLAIN}</a>
              <a href={EMAIL_HREF}>{EMAIL}</a>
            </div>
            <div className="mt-4 flex flex-col gap-1 font-['Manrope:Regular',sans-serif] text-[14px] text-[#fdfbf7] opacity-80">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-white">{col.title}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-['Inter:Regular',sans-serif] text-[12px] text-[#98b7e6]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#365485] pt-6 text-center">
          <p className="mx-auto max-w-[692px] font-['Inter:Regular',sans-serif] text-[12px] leading-[1.5] text-[#98b7e6]">
            All insurance solicitations are conducted under the registered fictitious business name (DBA) Signed
            Insurance Solutions in the State of California.
          </p>
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-[12px] text-[#98b7e6]">
            © 2026 Signed &amp; Secured. All rights reserved.
          </p>
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-[12px] text-[#98b7e6]">
            Insurance services offered through Signed Insurance Solutions, a DBA of Signed &amp; Secured.
          </p>
        </div>
      </div>
    </footer>
  )
}
