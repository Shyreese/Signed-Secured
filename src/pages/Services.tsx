import { usePageMeta } from '../hooks/usePageMeta'
import { WRAP, GoldButton } from '../components/shared'
import { GoldBullet } from '../components/GoldBullet'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav, type QuickLink } from '../components/FloatingQuickNav'
import { ServiceArea } from '../components/ServiceArea'
import { PHONE_TEL, PHONE_DISPLAY_PLAIN, CALENDLY_URL } from '../constants/contact'
import heroBg from '../imports/Background_Overlay.png'

const SERVICES_QUICK_LINKS: QuickLink[] = [
  {
    label: 'Services',
    href: '#services',
    icon: (
      <>
        <path
          d="M9 12h6M9 16h4M7 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1z" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Why Us',
    href: '#why-us',
    icon: (
      <>
        <path
          d="M12 3.5l6 2.2v5.3c0 4.1-2.7 6.9-6 8-3.3-1.1-6-3.9-6-8V5.7L12 3.5z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
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
        <circle cx="12" cy="11" r="2.5" strokeWidth="1.5" />
      </>
    ),
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 7l8 6 8-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="top"
      className="relative border-b border-[#e0e0e0] bg-[#0b1245]"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      <div className={`${WRAP} relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20`}>
        <div>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] uppercase tracking-[0.12em] text-[#b39257]">
            Everything we offer
          </p>
          <h1 className="mt-3 font-['Inter:Medium',sans-serif] text-[34px] leading-[1.2] text-white sm:text-[42px]">
            Notary, apostille, live scan, loan signing, insurance, and travel services in Sacramento
          </h1>
          <p className="mt-5 font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#cdd8ec]">
            Not sure which service you need? Start here. Explore everything Signed and Secured offers for
            individuals, families, and businesses across the greater Sacramento area.
          </p>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1614605844432-731c32334c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RhcnklMjBlbWJvc3NlciUyMGhhbmRzJTIwZG9jdW1lbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzg5NTgwMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Notary professional signing documents"
            className="aspect-[4/3] w-full rounded-[12px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Service grid ─────────────────────────────────────────────────────────────

interface ServiceCard {
  name: string
  href: string
  description: string
  fact: string
  /** Alt text describing what the icon depicts. */
  iconAlt: string
  icon: React.ReactNode
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    name: 'Mobile Notary',
    href: '/notary',
    description:
      'Mobile notarization of trusts, deeds, powers of attorney, and other documents at your home, office, hospital, or care facility.',
    fact: 'Starting at $15 per signature',
    iconAlt: 'A fountain pen signing a document, depicting notarization',
    icon: (
      <path
        d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: 'Apostille',
    href: '/apostille',
    description:
      'Authentication of documents so they can be used in countries that are part of the Hague Convention.',
    fact: 'For documents headed abroad',
    iconAlt: 'A globe with lines of longitude, depicting international document use',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path
          d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    name: 'Live Scan Fingerprinting',
    href: '/live-scan',
    description:
      'Digital fingerprinting sent electronically to the FBI and DOJ for employment, licensing, and volunteer background checks.',
    fact: 'By appointment',
    iconAlt: 'A fingerprint, depicting digital fingerprinting',
    icon: (
      <>
        <path d="M12 4.5a7.5 7.5 0 0 0-7.5 7.5v1.5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.5 13.5V12A7.5 7.5 0 0 0 15 5.1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 12a3.5 3.5 0 0 1 7 0v3.5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12v4.5M15.5 17.5V19M8.5 14v2.5" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: 'Loan Signing',
    href: '/loan-signing',
    description:
      'Certified loan signing for refinances, purchases, and reverse mortgages, with each page explained before you sign.',
    fact: 'Certified loan signing agent',
    iconAlt: 'A house above a document, depicting real estate loan signing',
    icon: (
      <>
        <path
          d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 21V13h6v8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: 'Insurance',
    href: '/insurance',
    description:
      'Life, health, property, casualty, business, bonds, and travel coverage, with custom quotes and no obligation.',
    fact: 'Custom quotes, no obligation',
    iconAlt: 'A shield, depicting insurance protection',
    icon: (
      <>
        <path
          d="M12 3.5l6 2.2v5.3c0 4.1-2.7 6.9-6 8-3.3-1.1-6-3.9-6-8V5.7L12 3.5z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: 'Travel',
    href: '/travel',
    description:
      'Flight and hotel booking help handled directly or through a trusted travel agency partner.',
    fact: 'Available with or without travel insurance',
    iconAlt: 'An airplane, depicting flight and travel booking',
    icon: (
      <path
        d="M10.5 13.5L3 15v-2l6-3.5V4.5a1.5 1.5 0 0 1 3 0V9.5L18 13v2l-4.5-1.5L12.5 19l1.5 1v1l-2.5-.75L9 21v-1l1.5-1 .5-5.5z"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    ),
  },
]

function ServiceGrid() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-14`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Explore our services
        </h2>
        <p className="mt-1 font-['Inter:Regular',sans-serif] text-[14px] text-[#365485]">
          Six ways we help individuals, families, and businesses across Sacramento
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((svc) => (
            <article
              key={svc.name}
              className="flex flex-col rounded-[8px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] p-5"
            >
              <span className="flex size-11 items-center justify-center rounded-[8px] border-[0.667px] border-[#829bc4] bg-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#365485"
                  className="size-6"
                  role="img"
                  aria-label={svc.iconAlt}
                >
                  <title>{svc.iconAlt}</title>
                  {svc.icon}
                </svg>
              </span>
              <h3 className="mt-4 font-['Inter:Medium',sans-serif] text-[16px] text-[#0b1245]">
                {svc.name}
              </h3>
              <p className="mt-2 flex-1 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
                {svc.description}
              </p>
              <p className="mt-3 font-['Inter:Medium',sans-serif] text-[12px] text-[#9a804c]">{svc.fact}</p>
              <a href={svc.href} className="mt-4 inline-flex items-center gap-1.5">
                <span className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0b1245]">
                  Learn more
                </span>
                <svg viewBox="0 0 24 24" fill="none" stroke="#0b1245" className="size-3.5" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Not sure what you need ────────────────────────────────────────────────────

function NotSureStrip() {
  return (
    <section className="border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left`}>
        <p className="max-w-[560px] font-['Inter:Regular',sans-serif] text-[15px] leading-[1.7] text-[#0b1245]">
          Not sure what you need? You do not have to know the right service name. Tell us what you are
          trying to do and we will point you in the right direction.
        </p>
        <div className="flex shrink-0 flex-wrap justify-center gap-3">
          <a href={PHONE_TEL}>
            <GoldButton className="!px-6 !py-3 !text-[14px]">{`Call us ${PHONE_DISPLAY_PLAIN}`}</GoldButton>
          </a>
          <a
            href="/contact"
            className="rounded-[8px] border border-[#0b1245] bg-transparent px-6 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245] transition-colors hover:bg-[#0b1245] hover:text-white"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── For title companies ─────────────────────────────────────────────────────

function TitleCompanies() {
  return (
    <section className="border-b border-[#e0e0e0] bg-[#fffaf0]">
      <div className={`${WRAP} flex flex-col items-center py-16 text-center`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.25] text-[#0b1245] sm:text-[34px]">
          For title companies, lenders, and real estate professionals
        </h2>
        <p className="mt-4 max-w-[560px] font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
          Shyreese is a mobile notary and certified loan signing agent who handles your real estate
          signing transactions. Certified loan signing agent serving the greater Sacramento area.
        </p>
        <div className="mt-7">
          <a href="/contact">
            <GoldButton className="!px-6 !py-3 !text-[14px]">
              Contact If Specialty Services Needed
            </GoldButton>
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Why us trust row ──────────────────────────────────────────────────────────

const TRUST_POINTS = ['Bonded and insured', 'Certified loan signing agent', 'Evenings and weekends available']

function TrustRow() {
  return (
    <section id="why-us" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-12`}>
        <ul className="grid gap-4 sm:grid-cols-3">
          {TRUST_POINTS.map((point) => (
            <li key={point} className="flex items-center justify-center gap-3 rounded-[8px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] px-4 py-5 text-center">
              <GoldBullet />
              <span className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 border-b border-[#333] bg-[#0b1245]">
      <div className={`${WRAP} flex flex-col items-center py-20 text-center`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[36px] leading-[1.25] text-white sm:text-[42px]">
          Ready to get started?
        </h2>
        <p className="mt-4 max-w-[520px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#fffaf0]">
          Book an appointment online or reach out with your questions. No pressure, no obligation.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <GoldButton className="!px-6 !py-3 !text-[14px]">Book appointment</GoldButton>
          </a>
          <a
            href="/contact"
            className="rounded-[8px] border border-white bg-white px-6 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245] transition-colors hover:bg-transparent hover:text-white"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Services() {
  usePageMeta({ title: 'Notary, Apostille, Live Scan & Insurance Services in Sacramento | Signed & Secured', description: 'Explore mobile notary, apostille, Live Scan fingerprinting, loan signing, insurance, and travel services offered across Sacramento, Placer, and El Dorado counties.' })
  return (
    <div className="bg-white">
      <SiteHeader activeLabel="Services" />
      <main>
        <Hero />
        <ServiceGrid />
        <NotSureStrip />
        <TitleCompanies />
        <TrustRow />
        <ServiceArea />
        <CTA />
      </main>
      <SiteFooter />
      <FloatingQuickNav links={SERVICES_QUICK_LINKS} />
    </div>
  )
}
