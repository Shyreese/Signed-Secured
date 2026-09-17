import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import heroPhoto from '@/imports/image-5.png'
import { WRAP, GoldButton } from '../components/shared'
import { GoldBullet } from '../components/GoldBullet'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav, type QuickLink } from '../components/FloatingQuickNav'
import { PHONE_TEL, PHONE_DISPLAY, CALENDLY_URL } from '../constants/contact'

const NOTARY_QUICK_LINKS: QuickLink[] = [
  {
    label: 'Services',
    href: '#services',
    icon: (
      <>
        <path d="M9 12h6M9 16h4M7 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1z" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'How It Works',
    href: '#process',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Book Now',
    href: CALENDLY_URL,
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 9h18M8 2v4M16 2v4" strokeWidth="1.5" strokeLinecap="round" />
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
    label: 'FAQ',
    href: '#faq',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path d="M9.6 9.3a2.4 2.4 0 1 1 3.2 2.3c-.6.3-.8.7-.8 1.4M12 16.2h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

function Hero() {
  return (
    <section id="top" className="border-b border-[#e0e0e0] bg-[#0b1245]">
      <div className={`${WRAP} grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20`}>
        <div>
          <p className="mb-3 font-['Inter:Regular',sans-serif] text-[13px] uppercase tracking-[0.12em] text-[#b39257]">
            Licensed Notary Public
          </p>
          <h1 className="font-['Inter:Medium',sans-serif] text-[34px] leading-[1.2] text-white sm:text-[42px]">
            Notarizations done right. At your home, office, or anywhere you need.
          </h1>
          <p className="mt-5 max-w-[460px] font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#cdd8ec]">
            We come to you. Mobile notary services for real estate closings, estate documents, powers of attorney, loan signings, and more. Same day and evening appointments available throughout the Sacramento area.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoldButton className="!px-6 !py-3 !text-[14px]">Schedule an appointment</GoldButton>
            </a>
            <a
              href={PHONE_TEL}
              className="rounded-[8px] border border-white bg-transparent px-6 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-white transition-colors hover:bg-white hover:text-[#0b1245]"
            >
              Call us {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroPhoto}
            alt="A notary professional reviewing documents with a family at their home dining table while young children play nearby"
            className="w-full rounded-[10px] object-cover shadow-[5px_4px_4px_0px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}

const TRUST = [
  {
    title: 'We Come to You',
    body: 'Mobile appointments at your home, office, hospital, or care facility. No driving, no waiting rooms.',
    icon: (
      <>
        <path d="M12 21s6.5-5.2 6.5-10a6.5 6.5 0 1 0-13 0C5.5 15.8 12 21 12 21z" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="2.5" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: 'Same Day Available',
    body: 'Urgent signings happen. We offer same day and evening appointments for time sensitive documents.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'State Commissioned',
    body: 'Commissioned by the State of California. Every signature and seal meets legal requirements for court, lenders, and government agencies.',
    icon: (
      <>
        <path d="M12 3.5l6 2.2v5.3c0 4.1-2.7 6.9-6 8-3.3-1.1-6-3.9-6-8V5.7L12 3.5z" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

function TrustBar() {
  return (
    <section className="bg-[#365485]">
      <div className={`${WRAP} py-14`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[24px] text-white">
          Dependable. Mobile. Legally binding.
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {TRUST.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <span className="flex size-14 items-center justify-center rounded-full border border-white/40 bg-white/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fffaf0" className="size-7" aria-hidden>
                  {item.icon}
                </svg>
              </span>
              <h3 className="mt-4 font-['Inter:Medium',sans-serif] text-[16px] text-white">{item.title}</h3>
              <p className="mt-2 max-w-[280px] font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#cdd8ec]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface Service {
  tab: string
  title: string
  description: string
  examples: string[]
  note: string
  cta: string
}

const SERVICES: Service[] = [
  {
    tab: 'Real Estate',
    title: 'Real estate and loan signings',
    description:
      'We work with title companies, escrow officers, and lenders to handle loan signings, refinances, deeds of trust, and grant deeds. We are NNA certified signing agents familiar with the full closing package.',
    examples: [
      'Purchase and refinance loan packages',
      'Grant deeds and quitclaim deeds',
      'Deeds of trust and reconveyances',
      'Seller and buyer closing documents',
    ],
    note: 'We coordinate directly with your escrow officer and return the completed package the same day.',
    cta: 'Book a loan signing appointment',
  },
  {
    tab: 'Estate Planning',
    title: 'Estate planning documents',
    description:
      'Estate documents require precise notarization to be legally enforceable. We handle wills, trusts, powers of attorney, advance healthcare directives, and beneficiary designations with care and accuracy.',
    examples: [
      'Durable powers of attorney',
      'Advance healthcare directives',
      'Living trusts and pour over wills',
      'Beneficiary and transfer on death documents',
    ],
    note: 'We frequently serve clients at hospitals, rehabilitation centers, and care facilities where time is a factor.',
    cta: 'Book an estate document appointment',
  },
  {
    tab: 'Business',
    title: 'Business and legal documents',
    description:
      'From LLC formation paperwork to contracts and affidavits, business documents often require notarization before they can be filed or enforced. We handle commercial signings quickly and correctly.',
    examples: [
      'Articles of organization and operating agreements',
      'Commercial lease agreements',
      'Affidavits and sworn statements',
      'Authorization letters and corporate resolutions',
    ],
    note: 'We offer on site visits to business locations throughout the Sacramento area.',
    cta: 'Book a business document appointment',
  },
  {
    tab: 'Personal',
    title: 'Personal document notarizations',
    description:
      'Everyday documents often require a notary seal to be accepted by courts, lenders, or government agencies. We handle personal signings without the trip to a bank or shipping store.',
    examples: [
      'Parental consent and travel letters',
      'Vehicle title transfers',
      'Identification affidavits',
      'Child custody and school enrollment documents',
    ],
    note: 'No appointment is too small. We charge a flat fee regardless of how long the signing takes.',
    cta: 'Book a personal document appointment',
  },
]

function ServicesSelector() {
  const [active, setActive] = useState(0)
  const s = SERVICES[active]

  return (
    <section id="services" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          What documents do you need notarized?
        </h2>

        <div className="mt-7 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Document type">
          {SERVICES.map((item, i) => (
            <button
              key={item.tab}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-full border-[0.667px] px-4 py-1.5 font-['Inter:Regular',sans-serif] text-[13px] transition-colors duration-150 ${
                active === i
                  ? 'border-[#0b1245] bg-[#0b1245] text-white'
                  : 'border-[#829bc4] bg-white text-[#365485] hover:border-[#0b1245] hover:text-[#0b1245]'
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[860px] rounded-[10px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] p-7">
          <h3 className="font-['Inter:Medium',sans-serif] text-[20px] text-[#0b1245]">{s.title}</h3>
          <p className="mt-3 max-w-[640px] font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
            {s.description}
          </p>

          <div className="mt-6">
            <h4 className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0b1245]">Common document types</h4>
            <ul className="mt-3 space-y-2">
              {s.examples.map((ex) => (
                <li key={ex} className="flex items-start gap-2.5">
                  <GoldBullet />
                  <span className="font-['Inter:Regular',sans-serif] text-[13px] leading-[1.65] text-[#365485]">{ex}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-[8px] border-[0.667px] border-[#829bc4] bg-white p-5">
            <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
              <span className="font-['Inter:Medium',sans-serif] text-[#0b1245]">Good to know: </span>
              {s.note}
            </p>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block"
          >
            <GoldButton className="!text-[13px]">{s.cta}</GoldButton>
          </a>
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  {
    title: 'Choose your appointment type',
    body: 'Select the type of documents you need notarized and pick a time that works for you, including same day and evening slots.',
  },
  {
    title: 'We confirm and prepare',
    body: 'We review the document requirements ahead of time so there are no surprises at the signing. For loan packages we coordinate with your escrow officer directly.',
  },
  {
    title: 'We come to you',
    body: 'We arrive at your home, office, hospital, or care facility at the scheduled time with everything needed to complete the signing.',
  },
  {
    title: 'Documents returned same day',
    body: 'For loan signings and time sensitive packages, we return completed documents to the escrow office or lender the same day. You get a receipt for your records.',
  },
]

function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          How an appointment works
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

// ─── What to bring ───────────────────────────────────────────────────────────

const BRING_ITEMS = [
  'Valid government issued photo ID such as a driver license or passport',
  'Your completed document, please do not sign it before the notary arrives',
  'Any required witnesses, we can help arrange them if needed',
  'Payment ready by cash, card, or digital',
]

function IdCardIllustration() {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[340px]" aria-hidden>
      {/* Back card — credit card style, tilted */}
      <g transform="rotate(-8, 260, 80)">
        <rect x="120" y="20" width="190" height="120" rx="12" fill="#4a6080" />
        <rect x="120" y="44" width="190" height="22" fill="#7a6040" opacity="0.85" />
        <circle cx="286" cy="122" r="14" fill="#5a7090" opacity="0.6" />
        <circle cx="268" cy="122" r="14" fill="#4a9080" opacity="0.5" />
      </g>
      {/* Front card — ID/license style */}
      <g transform="rotate(4, 130, 130)">
        <rect x="10" y="60" width="210" height="135" rx="12" fill="#1e3a6e" />
        {/* Person icon circle */}
        <circle cx="55" cy="118" r="26" fill="#2a4a80" stroke="#4a6aaa" strokeWidth="1.5" />
        <circle cx="55" cy="110" r="10" fill="#4a6aaa" opacity="0.7" />
        <ellipse cx="55" cy="136" rx="15" ry="9" fill="#4a6aaa" opacity="0.5" />
        {/* Text lines */}
        <rect x="95" y="100" width="100" height="8" rx="4" fill="#4a6aaa" opacity="0.7" />
        <rect x="95" y="116" width="76" height="6" rx="3" fill="#4a6aaa" opacity="0.5" />
        <rect x="95" y="130" width="88" height="6" rx="3" fill="#4a6aaa" opacity="0.4" />
        <rect x="20" y="172" width="60" height="6" rx="3" fill="#4a6aaa" opacity="0.4" />
        <rect x="90" y="172" width="40" height="6" rx="3" fill="#4a6aaa" opacity="0.3" />
      </g>
    </svg>
  )
}

function WhatToBring() {
  return (
    <section className="border-b border-[#1a2a6e] bg-[#0b1245]">
      <div className={`${WRAP} grid items-center gap-12 py-16 lg:grid-cols-2`}>
        <div>
          <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-white">
            What to bring to your appointment
          </h2>
          <ul className="mt-8 space-y-4">
            {BRING_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <GoldBullet />
                <span className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.7] text-[#cdd8ec]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-[8px] border-[0.667px] border-white/20 bg-white/10 p-5">
            <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[1.75] text-[#cdd8ec]">
              <span className="font-['Inter:Medium',sans-serif] text-white">Please note: </span>
              As a notary, we only certify and validate signatures. We cannot give legal advice or draft
              documents. Nothing on this page constitutes legal advice. Please review your documents with
              an attorney if you have legal questions.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <IdCardIllustration />
        </div>
      </div>
    </section>
  )
}

// ─── Apostille pointer ─────────────────────────────────────────────────────────
// The full apostille content now lives on its own page at /apostille.

function ApostillePointer() {
  return (
    <section className="border-b border-[#2a4a7e] bg-[#365485]">
      <div className={`${WRAP} py-8`}>
        <p className="font-['Inter:Regular',sans-serif] text-[15px] leading-[1.7] text-white">
          <a href="/apostille" className="font-['Inter:Medium',sans-serif] text-[#e3c98d] underline underline-offset-2 hover:text-white">
            Need an apostille for a document headed abroad
          </a>
        </p>
      </div>
    </section>
  )
}

// ─── Transparent pricing ─────────────────────────────────────────────────────

const OUR_PRICING_BEFORE = [
  { label: 'Notarization (per signature per document)', value: '$15' },
]
const TRAVEL_BREAKDOWN = [
  { label: '0 to 15 miles', value: '$45' },
  { label: '16 to 30 miles', value: '$65' },
  { label: '31 to 50 miles', value: '$120' },
  { label: '50 to 100 miles', value: '$185' },
]
const OUR_PRICING_AFTER = [
  { label: 'Loan signing appointment (per appointment)', value: '$115' },
  { label: 'Apostille handling (plus your own state fee)', value: 'Pricing available upon purchase' },
]

const TYPICAL_PRICING = [
  { label: 'Per signature', value: '$15 (state max)' },
  { label: 'Travel fee', value: '$20 to $45' },
  { label: 'After hours or weekend', value: '$20 to $45' },
  { label: 'Hidden add ons', value: 'Common' },
]

function Pricing() {
  return (
    <section className="border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Transparent pricing
        </h2>
        <div className="mx-auto mt-8 max-w-[860px] overflow-hidden rounded-[10px] border-[0.667px] border-[#829bc4]">
          <div className="grid sm:grid-cols-2">
            <div className="bg-[#fffaf0] p-7">
              <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">
                Our Pricing Average
              </p>
              <div className="mt-5 space-y-4">
                {OUR_PRICING_BEFORE.map((row) => (
                  <div key={row.label} className="border-t border-[#e0e0e0] pt-4 first:border-0 first:pt-0">
                    <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#829bc4]">
                      {row.label}
                    </p>
                    <p className="mt-0.5 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">
                      {row.value}
                    </p>
                  </div>
                ))}
                <div className="border-t border-[#e0e0e0] pt-4">
                  <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#829bc4]">Travel Fee</p>
                  <p className="mt-0.5 font-['Inter:Regular',sans-serif] text-[11px] leading-[1.5] text-[#365485]">
                    Travel fees are confirmed at booking based on distance to your location.
                  </p>
                  <div className="mt-2 space-y-1.5">
                    {TRAVEL_BREAKDOWN.map((r) => (
                      <div key={r.label} className="flex items-center justify-between">
                        <span className="font-['Inter:Regular',sans-serif] text-[11px] text-[#829bc4]">{r.label}</span>
                        <span className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0b1245]">{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {OUR_PRICING_AFTER.map((row) => (
                  <div key={row.label} className="border-t border-[#e0e0e0] pt-4">
                    <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#829bc4]">
                      {row.label}
                    </p>
                    <p className="mt-0.5 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-7">
              <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">
                Typical Sacramento Mobile Notary
              </p>
              <div className="mt-5 space-y-4">
                {TYPICAL_PRICING.map((row) => (
                  <div key={row.label} className="border-t border-[#e0e0e0] pt-4 first:border-0 first:pt-0">
                    <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#829bc4]">
                      {row.label}
                    </p>
                    <p className="mt-0.5 font-['Inter:Medium',sans-serif] text-[14px] text-[#365485]">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SERVICE_AREA = [
  'Sacramento (all ZIP codes)',
  'Elk Grove',
  'Rancho Cordova',
  'Folsom',
  'Roseville',
  'Citrus Heights',
  'Fair Oaks',
  'Carmichael',
  'Gold River',
  'Antelope',
]

function ServiceArea() {
  return (
    <section className="bg-[#365485]">
      <div className={`${WRAP} py-16`}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-white">
              We serve the greater Sacramento area
            </h2>
            <p className="mt-4 font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#e2e9f5]">
              Our mobile notary covers Sacramento and surrounding communities within approximately 30 miles. Travel fees apply for locations outside Sacramento proper.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-y-2.5 gap-x-4">
              {SERVICE_AREA.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#b39257]" aria-hidden />
                  <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#e2e9f5]">{city}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[10px] border-[0.667px] border-white/30 bg-white/10 p-6">
            <h3 className="font-['Inter:Medium',sans-serif] text-[16px] text-white">Travel and fee information</h3>
            <div className="mt-5 space-y-4">
              {[
                { label: 'State maximum per signature', value: '$15 per notarial act (California)' },
                { label: 'Travel fee', value: 'Starting at $45, confirmed at booking based on distance' },
                { label: 'After hours appointments', value: 'Available 6 am to 9 pm, including weekends' },
                { label: 'Hospital and care facility visits', value: 'Accepted, please call ahead to confirm access' },
              ].map((row) => (
                <div key={row.label} className="border-t border-white/20 pt-4 first:border-0 first:pt-0">
                  <p className="font-['Inter:Medium',sans-serif] text-[12px] text-[#cdd8ec]">{row.label}</p>
                  <p className="mt-0.5 font-['Inter:Regular',sans-serif] text-[14px] text-white">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stars() {
  return (
    <div aria-label="5 out of 5 stars" className="flex gap-1 text-[16px] leading-none text-[#b39257]">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i}>&#9733;</span>
      ))}
    </div>
  )
}

const REVIEWS = [
  {
    quote:
      '"They came to our home on a Saturday evening to notarize our trust documents. Professional, efficient, and explained each page before we signed. We felt completely at ease."',
    name: 'Patricia and Gerald W.',
    detail: 'Living trust and power of attorney',
  },
  {
    quote:
      '"Our lender required same day notarization and they delivered. Showed up on time, had everything organized, and returned the package to escrow within the hour. Exceptional service."',
    name: 'Marcus T.',
    detail: 'Refinance loan signing',
  },
  {
    quote:
      '"My mother is in a memory care facility and getting to a notary was impossible. They came to her directly, were patient and kind, and the document was accepted by the court without any issues."',
    name: 'Denise A.',
    detail: 'Advance healthcare directive',
  },
]

function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          What notary clients are saying
        </h2>
        <div className="mx-auto mt-8 grid max-w-[1000px] gap-4 md:grid-cols-3">
          {REVIEWS.map((t) => (
            <figure key={t.name} className="flex flex-col gap-4 rounded-[8px] border-[0.667px] border-[#d5d5d5] bg-[#0b2145] p-6">
              <Stars />
              <blockquote className="flex-1 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.75] text-white">
                {t.quote}
              </blockquote>
              <div>
                <figcaption className="font-['Inter:Regular',sans-serif] text-[13px] text-[#fffaf0]">{t.name}</figcaption>
                <p className="mt-0.5 font-['Inter:Regular',sans-serif] text-[11px] text-[#98b7e6]">{t.detail}</p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQ = [
  {
    q: 'What identification do I need to bring?',
    a: 'A government issued photo ID is required for every signer. A current California driver license, state ID, or US passport all qualify. The name on your ID must match the name on the document exactly.',
  },
  {
    q: 'Can you notarize documents for someone who does not speak English?',
    a: 'Yes. We can work with signers who communicate through a credible interpreter. The interpreter cannot be a beneficiary of the document. Let us know at booking so we can prepare accordingly.',
  },
  {
    q: 'What happens if the document has a mistake before I sign?',
    a: 'We cannot advise on the legal content of your documents, but we will point out obvious blanks or inconsistencies before you sign. An attorney should review the document before the signing if you have substantive questions.',
  },
  {
    q: 'Can you notarize documents at a hospital or care facility?',
    a: 'Yes. We frequently visit patients and residents for powers of attorney, healthcare directives, and wills. Please call ahead so we can confirm visitor access with the facility before arrival.',
  },
  {
    q: 'Do all signers need to be present at the same time?',
    a: 'No. Each signer must personally appear before the notary at the time of their own signing, but signers do not need to be present together. If signers are in different locations, we can schedule separate appointments.',
  },
  {
    q: 'How far in advance do I need to book?',
    a: 'We take same day requests whenever our schedule allows. Booking a day or two ahead gives the most flexibility for choosing your preferred time window. For loan signings, coordinate through your escrow officer and we will be in contact.',
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Common notary questions
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
                    {item.a}
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

function CTA() {
  return (
    <section id="contact" className="border-b border-[#333] bg-[#0b1245]">
      <div className={`${WRAP} flex flex-col items-center py-20 text-center`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[36px] leading-[1.25] text-white sm:text-[42px]">
          Ready to schedule?
        </h2>
        <p className="mt-4 max-w-[520px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#fffaf0]">
          Same day appointments available throughout Sacramento. We come to you, on your schedule.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoldButton className="!px-6 !py-3 !text-[14px]">Schedule an appointment</GoldButton>
          </a>
          <a
            href={PHONE_TEL}
            className="rounded-[8px] border border-white bg-white px-6 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245] transition-colors hover:bg-transparent hover:text-white"
          >
            Call us {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Notary() {
  usePageMeta({ title: 'Mobile Notary in Sacramento | Signed & Secured', description: 'Bonded and insured mobile notary services at your home, office, hospital, or care facility throughout the greater Sacramento area, including evenings and weekends.' })
  return (
    <div className="bg-white">
      <SiteHeader activeLabel="Notary" />
      <main>
        <Hero />
        <TrustBar />
        <ServicesSelector />
        <Process />
        <WhatToBring />
        <ApostillePointer />
        <Pricing />
        <ServiceArea />
        <Testimonials />
        <Faq />
        <CTA />
      </main>
      <SiteFooter />
      <FloatingQuickNav links={NOTARY_QUICK_LINKS} />
    </div>
  )
}
