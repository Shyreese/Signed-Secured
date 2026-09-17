import { useEffect, useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { WRAP, GoldButton } from '../components/shared'
import { GoldBullet } from '../components/GoldBullet'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav, type QuickLink } from '../components/FloatingQuickNav'
import { PHONE_TEL, PHONE_DISPLAY_PLAIN } from '../constants/contact'
import apostillePhoto from '../imports/apostille_graphic_1.png'
import apostilleCert from '../imports/Rectangle_1.png'

/** Bottom quick-nav anchors specific to the Apostille page sections. */
const APOSTILLE_QUICK_LINKS: QuickLink[] = [
  {
    label: 'What It Is',
    href: '#what-it-is',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path
          d="M9.6 9.3a2.4 2.4 0 1 1 3.2 2.3c-.6.3-.8.7-.8 1.4M12 16.2h.01"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    label: 'Documents',
    href: '#documents',
    icon: (
      <>
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M14 2v6h6M9 13h6M9 17h4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'How It Works',
    href: '#how-it-works',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'FAQ',
    href: '#faq',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path d="M9.6 9.3a2.4 2.4 0 1 1 3.2 2.3c-.6.3-.8.7-.8 1.4M12 16.2h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

// Countries that are party to the Hague Apostille Convention.
const HAGUE_COUNTRIES = [
  'Albania', 'Andorra', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia',
  'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Barbados', 'Belarus', 'Belgium',
  'Belize', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam',
  'Bulgaria', 'Burundi', 'Cabo Verde', 'Canada', 'Chile', 'China', 'Colombia',
  'Cook Islands', 'Costa Rica', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark',
  'Dominica', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Estonia', 'Eswatini',
  'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Grenada', 'Guatemala',
  'Guyana', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Ireland', 'Israel',
  'Italy', 'Jamaica', 'Japan', 'Kazakhstan', 'Kosovo', 'Kyrgyzstan', 'Latvia', 'Lesotho',
  'Liberia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malawi', 'Malta',
  'Marshall Islands', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia',
  'Montenegro', 'Morocco', 'Namibia', 'Netherlands', 'New Zealand', 'Nicaragua',
  'Niue', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama',
  'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Republic of Korea',
  'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Singapore', 'Slovakia', 'Slovenia',
  'South Africa', 'Spain', 'Suriname', 'Sweden', 'Switzerland', 'Tajikistan', 'Tonga',
  'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Ukraine', 'United Kingdom',
  'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela',
]

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" className="border-b border-[#e0e0e0] bg-[#0b1245]">
      <div className={`${WRAP} grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-16`}>
        <div>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] uppercase tracking-[0.12em] text-[#b39257]">
            Apostille services
          </p>
          <h1 className="mt-3 font-['Inter:Medium',sans-serif] text-[34px] leading-[1.2] text-white sm:text-[42px]">
            Apostille services in Sacramento
          </h1>
          <p className="mt-5 font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#cdd8ec]">
            We authenticate your documents so they can be legally used in countries that are part of the
            Hague Convention, handling the process with the California Secretary of State for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact">
              <GoldButton className="!px-6 !py-3 !text-[14px]">Request apostille service</GoldButton>
            </a>
            <a
              href={PHONE_TEL}
              className="rounded-[8px] border border-white bg-transparent px-6 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-white transition-colors hover:bg-white hover:text-[#0b1245]"
            >
              {`Call us ${PHONE_DISPLAY_PLAIN}`}
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={apostillePhoto}
            alt="Notary professional authenticating documents for apostille"
            className="aspect-[4/3] w-full rounded-[12px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Countries popup ───────────────────────────────────────────────────────────

function CountriesModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="countries-title"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[80vh] w-full max-w-[720px] flex-col overflow-hidden rounded-[10px] bg-white shadow-[5px_4px_4px_0px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#e0e0e0] px-7 py-5">
          <div>
            <h3 id="countries-title" className="font-['Inter:Medium',sans-serif] text-[18px] text-[#0b1245]">
              Hague Convention countries
            </h3>
            <p className="mt-1 font-['Inter:Regular',sans-serif] text-[12px] text-[#365485]">
              Documents can be apostilled for use in any of these member countries.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close country list"
            onClick={onClose}
            className="flex size-8 shrink-0 items-center justify-center rounded-full border-[0.667px] border-[#829bc4] text-[16px] leading-none text-[#0b1245] transition-colors hover:bg-[#fffaf0]"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto px-7 py-6">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
            {HAGUE_COUNTRIES.map((country) => (
              <li key={country} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#9a804c]" aria-hidden />
                <span className="font-['Inter:Regular',sans-serif] text-[12px] leading-[1.5] text-[#365485]">
                  {country}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[#e0e0e0] bg-[#fffaf0] px-7 py-4">
          <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[1.6] text-[#365485]">
            Do not see your country? Some destinations use a different legalization process. Contact us
            and we will help you figure out what your document needs.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── What it is ────────────────────────────────────────────────────────────────

function WhatItIs({ onOpenCountries }: { onOpenCountries: () => void }) {
  return (
    <section id="what-it-is" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} grid items-center gap-10 py-16 lg:grid-cols-2`}>
        <div>
          <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
            What an apostille is and who needs it
          </h2>
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#365485]">
            An apostille certifies a document so it is recognized in another country that is part of the
            Hague Convention. Common reasons include immigration, dual citizenship, working or studying
            abroad, international adoption, and doing business overseas.
          </p>

          <div className="mt-6">
            <button
              type="button"
              onClick={onOpenCountries}
              className="font-['Inter:Medium',sans-serif] text-[14px] text-[#9a804c] underline underline-offset-2 hover:text-[#0b1245]"
            >
              See the full list of eligible countries
            </button>
            <p className="mt-2 font-['Inter:Regular',sans-serif] text-[12px] leading-[1.6] text-[#365485]">
              Do not see your country on the list? Some destinations use a different legalization process.
              Contact us and we will help you figure out what your document needs.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={apostilleCert}
            alt="Apostille certificate with official seal"
            className="w-full max-w-[280px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Common apostille documents ─────────────────────────────────────────────────

const APOSTILLE_DOCS = [
  'Birth certificates',
  'Marriage certificates',
  'Diplomas',
  'Power of attorney',
  'Business licenses',
  'Adoption papers',
  'Notary certificates',
]

function Documents() {
  return (
    <section id="documents" className="border-b border-[#1a2a6e] bg-[#0b1245]">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-white">
          Common apostille documents
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {APOSTILLE_DOCS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <GoldBullet />
              <span className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.7] text-[#cdd8ec]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ─── How it works ────────────────────────────────────────────────────────────

const STEPS = [
  {
    title: 'We notarize if needed',
    body: 'We notarize your document if it needs it.',
  },
  {
    title: 'We submit it',
    body: 'We submit it to the California Secretary of State.',
  },
  {
    title: 'The apostille is attached',
    body: 'The Secretary of State attaches the apostille.',
  },
  {
    title: 'We return it to you',
    body: 'We return it to you ready for international use.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          How it works
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col items-center text-center">
              <span className="flex size-11 items-center justify-center rounded-full bg-[#0b1245] font-['Inter:Medium',sans-serif] text-[16px] text-[#fffaf0]">
                {i + 1}
              </span>
              <h3 className="mt-4 font-['Inter:Medium',sans-serif] text-[15px] text-[#0b1245]">{step.title}</h3>
              <p className="mt-2 max-w-[240px] font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

function Pricing() {
  return (
    <section className="border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Pricing
        </h2>
        <div className="mt-6 max-w-[720px] rounded-[10px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] p-7">
          {/* TODO: Fill in exact apostille pricing once confirmed. */}
          <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
            Apostille pricing depends on the service you need, for example filing on your behalf versus
            hand delivering your documents to the Secretary of State, plus any state fees. We confirm the
            full cost before we begin.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: 'What is an apostille?',
    a: 'An apostille is a certificate that authenticates a document so it can be used in another country that is part of the Hague Convention.',
  },
  {
    q: 'Which countries accept an apostille?',
    a: 'Any country that is part of the Hague Convention, and you can see the full list on this page.',
  },
  {
    q: 'What documents can be apostilled?',
    a: 'Common ones include birth and marriage certificates, diplomas, power of attorney, business licenses, and adoption papers.',
  },
  {
    q: 'How long does the apostille process take?',
    a: 'It depends on the current processing time at the California Secretary of State, and we give you a timeframe before we begin.',
  },
  {
    q: 'Do you deliver documents to the Secretary of State?',
    a: 'Yes, depending on the service you choose we can file on your behalf or hand deliver your documents.',
  },
]

function Faq({ onOpenCountries }: { onOpenCountries: () => void }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Common apostille questions
        </h2>

        <div className="mx-auto mt-8 max-w-[820px] overflow-hidden rounded-[8px] border-[0.667px] border-[#829bc4] bg-white">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className={i > 0 ? 'border-t border-[#e0e0e0]' : ''}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">{item.q}</span>
                  <span
                    className={`shrink-0 font-['Inter:Regular',sans-serif] text-[18px] leading-none text-[#9a804c] transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.75] text-[#365485]">
                    {item.q === 'Which countries accept an apostille?' ? (
                      // Reuse the single shared countries popup: split the answer so
                      // the words "full list" become an inline trigger for it.
                      (() => {
                        const [before, after] = item.a.split('full list')
                        return (
                          <>
                            {before}
                            <button
                              type="button"
                              onClick={onOpenCountries}
                              className="text-[#9a804c] underline underline-offset-2 hover:text-[#0b1245]"
                            >
                              full list
                            </button>
                            {after}
                          </>
                        )
                      })()
                    ) : (
                      item.a
                    )}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section id="contact" className="border-b border-[#333] bg-[#0b1245]">
      <div className={`${WRAP} flex flex-col items-center py-20 text-center`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[36px] leading-[1.25] text-white sm:text-[42px]">
          Sending a document abroad?
        </h2>
        <p className="mt-4 max-w-[520px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#fffaf0]">
          Tell us where your document is headed and we will handle the apostille process from start to
          finish.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="/contact">
            <GoldButton className="!px-6 !py-3 !text-[14px]">Request apostille service</GoldButton>
          </a>
          <a
            href={PHONE_TEL}
            className="rounded-[8px] border border-white bg-white px-6 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245] transition-colors hover:bg-transparent hover:text-white"
          >
            {`Call us ${PHONE_DISPLAY_PLAIN}`}
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Apostille() {
  usePageMeta({ title: 'Apostille Services in Sacramento | Signed & Secured', description: 'Apostille help for documents used abroad, from authentication guidance to submission. Serving the greater Sacramento area by appointment.' })
  const [showCountries, setShowCountries] = useState(false)
  const openCountries = () => setShowCountries(true)

  return (
    <div className="bg-white">
      <SiteHeader activeLabel="Apostille" />
      <main>
        <Hero />
        <WhatItIs onOpenCountries={openCountries} />
        <Documents />
        <HowItWorks />
        <Pricing />
        <Faq onOpenCountries={openCountries} />
        <CTA />
      </main>
      <SiteFooter />
      <FloatingQuickNav links={APOSTILLE_QUICK_LINKS} />
      {showCountries && <CountriesModal onClose={() => setShowCountries(false)} />}
    </div>
  )
}
