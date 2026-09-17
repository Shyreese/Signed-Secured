// Baseline template only. This content is a starting point that the business
// owner and a qualified professional should review and finalize before launch.
import { usePageMeta } from '../hooks/usePageMeta'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { LegalPage, type LegalSection } from '../components/LegalPage'

const SECTIONS: LegalSection[] = [
  {
    body: 'Signed and Secured respects your privacy. This policy explains what information we collect, how we use it, and the choices you have.',
  },
  {
    h: 'Information we collect',
    body: 'When you contact us, request a quote, or book an appointment, we may collect your name, phone number, email address, the service you are interested in, and any details you choose to share. When you book through our scheduling tool or request insurance information, that information is handled by the providers of those tools.',
  },
  {
    h: 'How we use your information',
    body: 'We use your information only to respond to your request, provide the service you asked about, schedule and confirm appointments, and follow up with you. We do not sell your personal information.',
  },
  {
    h: 'Insurance information',
    body: 'Insurance services are offered through the registered fictitious business name Signed Insurance Solutions in the State of California. Insurance quotes and enrollment may be handled through third party platforms, which have their own privacy practices.',
  },
  {
    h: 'Third party services',
    body: 'We use trusted third party tools to run our site and business, such as a scheduling tool for booking and a platform for insurance enrollment. These providers process your information under their own privacy policies.',
  },
  {
    h: 'Cookies and analytics',
    body: 'Our site may use basic cookies or analytics to understand how visitors use the site. You can control cookies through your browser settings.',
  },
  {
    h: 'Your choices and rights',
    body: 'If you are a California resident, you have rights under California privacy law, including the right to know what personal information we hold, to request deletion, and to opt out of the sale of personal information. We do not sell personal information. To make a request, contact us using the details below.',
  },
  {
    h: 'Data retention and security',
    body: 'We keep your information only as long as needed to serve you and meet legal requirements, and we take reasonable steps to protect it.',
  },
  {
    h: 'Contact us',
    contact: 'Questions about this policy can be sent to',
  },
]

export default function Privacy() {
  usePageMeta({ title: 'Privacy Policy | Signed & Secured', description: 'How Signed & Secured collects, uses, and protects your personal information when you use our website and services.' })
  return (
    <div className="bg-white">
      <SiteHeader />
      <LegalPage title="Privacy Policy" sections={SECTIONS} />
      <SiteFooter />
    </div>
  )
}
