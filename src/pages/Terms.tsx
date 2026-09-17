// Baseline template only. This content is a starting point that the business
// owner and a qualified professional should review and finalize before launch.
import { usePageMeta } from '../hooks/usePageMeta'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { LegalPage, type LegalSection } from '../components/LegalPage'

const SECTIONS: LegalSection[] = [
  {
    body: 'These terms govern your use of the Signed and Secured website and services. By using this site, you agree to these terms.',
  },
  {
    h: 'Our services',
    body: 'Signed and Secured provides mobile notary, apostille, live scan fingerprinting, loan signing, insurance, and travel services in the greater Sacramento area. Availability, pricing, and turnaround times can change and are confirmed before service begins.',
  },
  {
    h: 'Not legal advice',
    body: 'We are a notary and service provider, not a law firm. Nothing on this site is legal, financial, or tax advice. For legal questions about your documents, please consult a qualified attorney.',
  },
  {
    h: 'Notary and apostille',
    body: 'As a notary we verify identity and witness signatures. We cannot advise on the content of your documents or tell you which document you need. Apostille timeframes depend on the California Secretary of State.',
  },
  {
    h: 'Insurance',
    body: 'Insurance services are offered through the registered fictitious business name Signed Insurance Solutions in the State of California. Insurance products are subject to carrier approval, eligibility, and the terms of each policy.',
  },
  {
    h: 'Appointments and payment',
    body: 'Appointments are scheduled by agreement. Fees are confirmed before service begins. Travel fees may apply based on distance.',
  },
  {
    h: 'External links',
    body: 'Our site links to third party tools and sites, such as scheduling and insurance enrollment platforms. We are not responsible for the content or practices of those sites.',
  },
  {
    h: 'Limitation of liability',
    body: 'To the extent allowed by law, Signed and Secured is not liable for indirect or incidental damages arising from use of this site or our services.',
  },
  {
    h: 'Governing law',
    body: 'These terms are governed by the laws of the State of California.',
  },
  {
    h: 'Contact us',
    contact: '',
  },
]

export default function Terms() {
  usePageMeta({ title: 'Terms of Service | Signed & Secured', description: 'The terms and conditions that govern your use of the Signed & Secured website and mobile notary, apostille, Live Scan, and insurance services.' })
  return (
    <div className="bg-white">
      <SiteHeader />
      <LegalPage title="Terms of Service" sections={SECTIONS} />
      <SiteFooter />
    </div>
  )
}
