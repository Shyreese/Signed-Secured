import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { WRAP, GoldButton } from '../components/shared'
import { GoldBullet } from '../components/GoldBullet'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav, type QuickLink } from '../components/FloatingQuickNav'
import { PHONE_TEL, PHONE_DISPLAY_PLAIN, CALENDLY_URL } from '../constants/contact'

/** Bottom quick-nav anchors specific to the Live Scan page sections. */
const LIVE_SCAN_QUICK_LINKS: QuickLink[] = [
  {
    label: 'Who Needs It',
    href: '#who-needs',
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" strokeWidth="1.5" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 20a5.5 5.5 0 0 0-3-4.9" strokeWidth="1.5" strokeLinecap="round" />
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

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" className="border-b border-[#e0e0e0] bg-[#0b1245]">
      <div className={`${WRAP} grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-16`}>
        <div>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] uppercase tracking-[0.12em] text-[#b39257]">
            Live Scan fingerprinting
          </p>
          <h1 className="mt-3 font-['Inter:Medium',sans-serif] text-[34px] leading-[1.2] text-white sm:text-[42px]">
            Live Scan fingerprinting in Sacramento
          </h1>
          <p className="mt-5 font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#cdd8ec]">
            Digital fingerprinting submitted to the California Department of Justice and the FBI for the
            background checks required by employers, licensing boards, and volunteer programs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <GoldButton className="!px-6 !py-3 !text-[14px]">Book an appointment</GoldButton>
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
            src="https://images.unsplash.com/photo-1585079374502-415f8516dcc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5nZXJwcmludCUyMHNjYW5uaW5nJTIwZGlnaXRhbCUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODk2MTIxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital fingerprint scanner for Live Scan background checks"
            className="aspect-[4/3] w-full rounded-[12px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Who needs Live Scan ────────────────────────────────────────────────────

const WHO_NEEDS = [
  {
    title: 'Job applicants',
    body: 'Employers often require a fingerprint background check before your start date.',
  },
  {
    title: 'Professional license applicants',
    body: 'Nurses, real estate agents, contractors, and other licensed professionals apply through their licensing board.',
  },
  {
    title: 'Volunteers',
    body: 'Schools, youth programs, and nonprofits require fingerprinting before you begin.',
  },
  {
    title: 'Anyone required to complete a background check',
    body: 'For employment, licensing, or certification, whenever an agency asks for one.',
  },
]

function WhoNeeds() {
  return (
    <section id="who-needs" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Who needs Live Scan
        </h2>
        <p className="mt-2 max-w-[620px] font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
          If an agency has asked you for a fingerprint background check, we can help. Common cases
          include:
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {WHO_NEEDS.map((item) => (
            <article
              key={item.title}
              className="rounded-[8px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] p-5"
            >
              <h3 className="font-['Inter:Medium',sans-serif] text-[15px] text-[#0b1245]">{item.title}</h3>
              <p className="mt-2 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── What to bring ───────────────────────────────────────────────────────────

const BRING_ITEMS = [
  'A valid government issued photo ID',
  'Your completed Request for Live Scan Service form from the requesting agency, with its ORI number and agency details filled in',
  'Payment for the fingerprinting fee plus any state and federal fees',
]

function WhatToBring() {
  return (
    <section
      className="border-b border-[#1a2a6e]"
      style={{ background: 'linear-gradient(135deg, #0b1245 60%, #1a3a6e 100%)' }}
    >
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-white">
          What to bring
        </h2>
        <ul className="mt-8 space-y-5">
          {BRING_ITEMS.map((item) => (
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
    title: 'Bring your documents',
    body: 'Bring your completed Request for Live Scan form and your photo ID to the appointment.',
  },
  {
    title: 'We capture your prints',
    body: 'We capture your fingerprints digitally at your appointment, no ink required.',
  },
  {
    title: 'We submit them',
    body: 'We submit them electronically to the DOJ and FBI right away.',
  },
  {
    title: 'The agency gets results',
    body: 'The requesting agency receives your results directly.',
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

function FingerprintCoinsIcon() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-36" aria-hidden>
      {/* Scan frame corners */}
      <path d="M30 50V36a6 6 0 0 1 6-6h14" stroke="#1e3a6e" strokeWidth="4" strokeLinecap="round" />
      <path d="M110 30h14a6 6 0 0 1 6 6v14" stroke="#1e3a6e" strokeWidth="4" strokeLinecap="round" />
      <path d="M130 90v14a6 6 0 0 1-6 6h-14" stroke="#1e3a6e" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 110H36a6 6 0 0 1-6-6V90" stroke="#1e3a6e" strokeWidth="4" strokeLinecap="round" />
      {/* Fingerprint swirl */}
      <path d="M80 46a34 34 0 0 1 0 68" stroke="#1e3a6e" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 54a26 26 0 0 1 0 52" stroke="#1e3a6e" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 62a18 18 0 0 1 0 36" stroke="#1e3a6e" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 70a10 10 0 0 1 0 20" stroke="#1e3a6e" strokeWidth="2.5" strokeLinecap="round" />
      {/* Coin stack */}
      <ellipse cx="122" cy="126" rx="16" ry="6" fill="#1e3a6e" opacity="0.15" />
      <rect x="106" y="112" width="32" height="10" rx="5" fill="#1e3a6e" opacity="0.5" />
      <rect x="106" y="120" width="32" height="10" rx="5" fill="#1e3a6e" opacity="0.65" />
      <rect x="106" y="128" width="32" height="10" rx="5" fill="#1e3a6e" opacity="0.8" />
      <ellipse cx="122" cy="112" rx="16" ry="5" fill="#1e3a6e" opacity="0.9" />
    </svg>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Pricing
        </h2>
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="rounded-[10px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] p-7">
            <p className="font-['Inter:Medium',sans-serif] text-[20px] text-[#0b1245]">
              Our fee is $45 per service, plus state and federal fees.
            </p>
            <p className="mt-4 font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
              State and federal background check fees are set by the DOJ and FBI and vary depending on
              what your agency requires. These are added on top of our service fee, and we confirm your
              full total before your appointment.
            </p>
          </div>
          <div className="hidden items-center justify-center rounded-full bg-[#f0f2f8] p-8 lg:flex">
            <FingerprintCoinsIcon />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: 'What is Live Scan fingerprinting?',
    a: 'Live Scan is electronic fingerprinting that is submitted directly to the California DOJ and the FBI for background checks.',
  },
  {
    q: 'Who needs Live Scan?',
    a: 'Anyone required to pass a background check for a job, a professional license, or a volunteer role.',
  },
  {
    q: 'What do I need to bring?',
    a: 'A government issued photo ID, your completed Request for Live Scan form from the agency requesting the check, and payment.',
  },
  {
    q: 'How long does the appointment take?',
    a: 'Most appointments take about fifteen to twenty minutes.',
  },
  {
    q: 'When will I get my results?',
    a: 'The requesting agency receives your results directly from the DOJ, usually within a few days.',
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Common Live Scan questions
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

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section id="contact" className="border-b border-[#333] bg-[#0b1245]">
      <div className={`${WRAP} flex flex-col items-center py-20 text-center`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[36px] leading-[1.25] text-white sm:text-[42px]">
          Ready to get fingerprinted?
        </h2>
        <p className="mt-4 max-w-[520px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#fffaf0]">
          Book your Live Scan appointment online, or call us with your questions and we will walk you
          through it.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <GoldButton className="!px-6 !py-3 !text-[14px]">Book an appointment</GoldButton>
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

export default function LiveScan() {
  usePageMeta({ title: 'Live Scan Fingerprinting in Sacramento | Signed & Secured', description: 'DOJ authorized Live Scan fingerprinting for employment, licensing, and certification, provided by appointment across the greater Sacramento area.' })
  return (
    <div className="bg-white">
      <SiteHeader activeLabel="LiveScan" />
      <main>
        <Hero />
        <WhoNeeds />
        <WhatToBring />
        <HowItWorks />
        <Pricing />
        <Faq />
        <CTA />
      </main>
      <SiteFooter />
      <FloatingQuickNav links={LIVE_SCAN_QUICK_LINKS} />
    </div>
  )
}
