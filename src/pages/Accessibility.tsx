// Baseline template only. This content is a starting point that the business
// owner and a qualified professional should review and finalize before launch.
import { usePageMeta } from '../hooks/usePageMeta'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { LegalPage, type LegalSection } from '../components/LegalPage'

const SECTIONS: LegalSection[] = [
  {
    body: 'Signed and Secured is committed to making our website accessible to everyone, including people with disabilities.',
  },
  {
    h: 'Our commitment',
    body: 'We aim to meet the Web Content Accessibility Guidelines, WCAG version 2.1, at level AA. We work to keep the site usable with a keyboard, readable with screen readers, and clear for people with low vision.',
  },
  {
    h: 'Ongoing effort',
    body: 'Accessibility is an ongoing effort. We review the site regularly and make improvements over time.',
  },
  {
    h: 'Need help or found a problem',
    contact:
      'If you have trouble using any part of this site, or you need information in a different format, please contact us and we will help. You can reach us at',
  },
]

export default function Accessibility() {
  usePageMeta({ title: 'Accessibility | Signed & Secured', description: 'Our commitment to keeping the Signed & Secured website accessible and usable for everyone, and how to reach us with accessibility feedback.' })
  return (
    <div className="bg-white">
      <SiteHeader />
      <LegalPage title="Accessibility" sections={SECTIONS} />
      <SiteFooter />
    </div>
  )
}
