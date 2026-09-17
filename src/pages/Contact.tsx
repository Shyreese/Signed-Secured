import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import shyreesePhoto from '../imports/paste_152ff671-79f7-4639-b7e0-d639b24a31e2-1.png'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav, type QuickLink } from '../components/FloatingQuickNav'
import { ServiceArea } from '../components/ServiceArea'
import { WRAP, GoldButton } from '../components/shared'
import {
  CALENDLY_URL,
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_SMS,
  PHONE_TEL,
} from '../constants/contact'

// ─── Data ────────────────────────────────────────────────────────────────────

const CITIES = [
  'Sacramento',
  'Rancho Cordova',
  'Folsom',
  'Roseville',
  'Rocklin',
  'Granite Bay',
  'El Dorado Hills',
  'Fair Oaks',
  'Carmichael',
  'Citrus Heights',
  'Elk Grove',
  'Natomas',
]

const CREDENTIALS = [
  'Bonded and insured',
  'Certified loan signing agent',
  'DOJ authorized Live Scan provider',
  'Licensed insurance agent through Signed Insurance Solutions',
]

const AVAILABILITY = [
  'All appointments are by appointment only.',
  'Available seven days a week, including evenings after 6:30 PM and weekends.',
  'Holidays are available, a surcharge may apply.',
]

const FAQS = [
  {
    id: 'c-book',
    q: 'How do I book a mobile notary in Sacramento?',
    a: `Call or text Shyreese at ${PHONE_DISPLAY}, or send a message through the form on this page. She confirms your time, location, and what to bring, then comes to you anywhere in the greater Sacramento area.`,
  },
  {
    id: 'c-hospitals',
    q: 'Do you travel to hospitals and care facilities?',
    a: 'Yes. Shyreese regularly visits hospitals, rehabilitation centers, and care facilities for powers of attorney, healthcare directives, and wills. Please call ahead so she can confirm visitor access with the facility before arrival.',
  },
  {
    id: 'c-fast',
    q: 'How fast can you come out?',
    a: 'Same day appointments are available whenever the schedule allows, and evening slots can often be arranged. Call as early as you can and Shyreese will find the soonest window that works for you.',
  },
  {
    id: 'c-evenings',
    q: 'Do you charge extra for evenings or weekends?',
    a: 'Evening and weekend appointments are available by request, and any additional fee is quoted up front before you confirm. You always know the full cost in advance, with no surprises.',
  },
]

const CONTACT_QUICK_LINKS: QuickLink[] = [
  {
    label: 'Help',
    href: '#help',
    icon: <path d="M4 6h16M4 12h16M4 18h10" strokeWidth="1.6" strokeLinecap="round" />,
  },
  {
    label: 'Email',
    href: EMAIL_HREF,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
        <path d="M4 7l8 6 8-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Hours',
    href: '#hours',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Call',
    href: PHONE_TEL,
    icon: (
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l1 5v1a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
]

// ─── Reusable pieces ─────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-5" aria-hidden>
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ContactFaqRow({
  item,
  first,
  isOpen,
  onToggle,
}: {
  item: { id: string; q: string; a: string }
  first: boolean
  isOpen: boolean
  onToggle: () => void
}) {
  const panelId = `panel-${item.id}`
  const btnId = `btn-${item.id}`
  return (
    <div className={first ? '' : 'border-t border-[#e0e0e0]'}>
      <h3 className="m-0">
        <button
          id={btnId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex min-h-[48px] w-full items-center justify-between gap-4 px-5 py-3.5 text-left transition-colors hover:bg-[rgba(130,155,196,0.08)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#9a804c]"
        >
          <span className="font-['Inter:Medium',sans-serif] text-[16px] leading-[1.4] text-[#0b1245]">{item.q}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9a804c"
            className={`size-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden
          >
            <path d="M6 9l6 6 6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen} className="px-5 pb-4">
        <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[1.75] text-[#365485]">{item.a}</p>
      </div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Contact() {
  usePageMeta({ title: 'Contact Signed & Secured | Mobile Notary in Sacramento', description: 'Call, text, or email Shyreese to book a mobile notary anywhere in the greater Sacramento area. Same day and evening appointments available.' })
  const [open, setOpen] = useState<Set<string>>(new Set())

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const localBusinessLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Signed and Secured',
    telephone: '+19167610211',
    areaServed: CITIES.map((city) => ({ '@type': 'City', name: city })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:30',
      },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="bg-white">
      <SiteHeader activeLabel="Contact" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main id="top">
        {/* Hero */}
        <section
          className="relative border-b border-[#e0e0e0] bg-[#0b1245] bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/contact-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#0b1245]/70" aria-hidden="true" />
          <div className={`relative ${WRAP} py-14 text-center sm:py-20`}>
            <p className="mb-3 font-['Inter:Regular',sans-serif] text-[13px] uppercase tracking-[0.12em] text-[#b39257]">
              Contact
            </p>
            <h1 className="mx-auto max-w-[820px] font-['Inter:Medium',sans-serif] text-[28px] leading-[1.25] text-white sm:text-[38px]">
              Contact Signed and Secured, mobile notary serving the greater Sacramento area
            </h1>
            <p className="mx-auto mt-5 max-w-[600px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.7] text-[#cdd8ec]">
              Shyreese comes to your home, office, hospital, or care facility across Sacramento, Placer, and El Dorado counties.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={PHONE_TEL}
                className="flex min-h-[52px] items-center justify-center gap-2 rounded-[8px] bg-[#b39257] px-7 font-['Inter:Medium',sans-serif] text-[16px] text-black transition-opacity hover:opacity-90"
              >
                <PhoneIcon />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] items-center justify-center rounded-[8px] border border-white bg-transparent px-7 font-['Inter:Medium',sans-serif] text-[16px] text-white transition-colors hover:bg-white hover:text-[#0b1245]"
              >
                Book an appointment
              </a>
            </div>
            <p className="mt-5 font-['Inter:Regular',sans-serif] text-[14px] text-[#98b7e6]">
              We reply within 24 hours, usually much sooner.
            </p>
          </div>
        </section>

        {/* How can we help */}
        <section id="help" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
          <div className={`${WRAP} py-14 sm:py-16`}>
            <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
              How can we help?
            </h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {[
                {
                  h: 'I want to talk to someone',
                  b: 'Call or text Shyreese and she will set everything up. No forms needed.',
                  cta: `Call ${PHONE_DISPLAY}`,
                  href: PHONE_TEL,
                },
                {
                  h: 'I am ready to book',
                  b: 'Pick a time that works for you and we will come to you.',
                  cta: 'Open booking calendar',
                  href: CALENDLY_URL,
                  external: true,
                },
                {
                  h: 'Business or volume inquiry',
                  b: 'Title company, lender, hospital, or contractor needing recurring service? Let us set up a plan built around your volume.',
                  cta: 'Email a business inquiry',
                  href: `${EMAIL_HREF}?subject=Business or volume inquiry`,
                },
              ].map((card) => (
                <div
                  key={card.h}
                  className="flex flex-col rounded-[10px] border-[0.667px] border-[#829bc4] bg-white p-6 shadow-[0_1px_3px_rgba(11,18,69,0.06)]"
                >
                  <h3 className="font-['Inter:Medium',sans-serif] text-[18px] leading-[1.3] text-[#0b1245]">
                    {card.h}
                  </h3>
                  <p className="mt-3 flex-1 font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#365485]">
                    {card.b}
                  </p>
                  <a
                    href={card.href}
                    {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="mt-6 flex min-h-[48px] items-center justify-center rounded-[8px] bg-[#0b1245] px-5 font-['Inter:Medium',sans-serif] text-[15px] text-white transition-colors hover:bg-[#1a2560]"
                  >
                    {card.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prefer to reach us directly */}
        <section className="border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
          <div className={`${WRAP} py-14 sm:py-16`}>
            <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
              Prefer to reach us directly?
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  label: 'Call',
                  detail: PHONE_DISPLAY,
                  href: PHONE_TEL,
                  when: 'Best for same day requests and urgent signings.',
                  icon: <PhoneIcon />,
                },
                {
                  label: 'Text',
                  detail: PHONE_DISPLAY,
                  href: PHONE_SMS,
                  when: 'Best for quick scheduling and fast answers.',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-5" aria-hidden>
                      <path d="M4 5h16v11H8l-4 4V5z" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  label: 'Email',
                  detail: EMAIL,
                  href: EMAIL_HREF,
                  when: 'Best for questions or sending documents ahead.',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-5" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
                      <path d="M4 7l8 6 8-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
              ].map((c) => (
                <div key={c.label} className="rounded-[10px] border-[0.667px] border-[#829bc4] bg-white p-6">
                  <div className="flex items-center gap-3 text-[#9a804c]">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[0.667px] border-[#d5d5d5] bg-[#f0f0f0]">
                      {c.icon}
                    </span>
                    <span className="font-['Inter:Medium',sans-serif] text-[16px] text-[#0b1245]">{c.label}</span>
                  </div>
                  <a
                    href={c.href}
                    className="mt-4 block font-['Inter:Medium',sans-serif] text-[18px] text-[#0b1245] underline underline-offset-4 hover:text-[#9a804c]"
                  >
                    {c.detail}
                  </a>
                  <p className="mt-3 font-['Inter:Regular',sans-serif] text-[16px] leading-[1.6] text-[#365485]">
                    {c.when}
                  </p>
                  <p className="mt-3 font-['Inter:Regular',sans-serif] text-[14px] leading-[1.6] text-[#9a804c]">
                    You reach Shyreese directly, not a call center.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When we are available */}
        <section id="hours" className="scroll-mt-24 border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
          <div className={`${WRAP} py-14 sm:py-16`}>
            <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
              When we are available
            </h2>
            <div className="mt-8 max-w-[640px] overflow-hidden rounded-[10px] border-[0.667px] border-[#829bc4] bg-[#0b1245]">
              {AVAILABILITY.map((line, i) => (
                <div
                  key={i}
                  className={`px-5 py-4 ${i > 0 ? 'border-t border-[#365485]' : ''}`}
                >
                  <span className="font-['Inter:Regular',sans-serif] text-[15px] leading-[1.6] text-[#cdd8ec]">
                    {line}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 font-['Inter:Regular',sans-serif] text-[14px] text-[#365485]">
              All times are Pacific Time.
            </p>
          </div>
        </section>

        {/* Meet Shyreese */}
        <section className="border-b border-[#e0e0e0] bg-white">
          <div className={`${WRAP} grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2`}>
            <img
              src={shyreesePhoto}
              alt="Shyreese Tyiska, owner of Signed and Secured"
              className="aspect-[4/5] w-full rounded-[10px] object-cover object-top"
            />

            <div>
              <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
                Meet Shyreese
              </h2>
              <p className="mt-4 font-['Inter:Regular',sans-serif] text-[16px] leading-[1.75] text-[#365485]">
                When you reach out, you are talking to Shyreese, the person who will handle your signing from start to finish. She brings the notary table, the credentials, and the patience to walk you through every page, wherever you need her across the greater Sacramento area.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {CREDENTIALS.map((cred) => (
                  <li key={cred} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border-[0.667px] border-[#d5d5d5] bg-[#f0f0f0]">
                      <span className="size-1.5 rounded-full bg-[#9a804c]" />
                    </span>
                    <span className="font-['Inter:Regular',sans-serif] text-[16px] leading-[1.5] text-[#0b1245]">
                      {cred}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.planenroll.com/AgentBio?purl=Shyreese-Tyiska"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-['Inter:Medium',sans-serif] text-[16px] text-[#9a804c] underline underline-offset-4 hover:text-[#0b1245]"
              >
                View licensed agent profile
              </a>
            </div>
          </div>
        </section>

        {/* Where we serve */}
        <ServiceArea />

        {/* Common contact questions */}
        <section className="border-b border-[#e0e0e0] bg-white">
          <div className={`${WRAP} py-14 sm:py-16`}>
            <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
              Common contact questions
            </h2>
            <div className="mt-8 max-w-[820px] overflow-hidden rounded-[10px] border-[0.667px] border-[#829bc4] bg-white">
              {FAQS.map((item, i) => (
                <ContactFaqRow
                  key={item.id}
                  item={item}
                  first={i === 0}
                  isOpen={open.has(item.id)}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA banner */}
        <section className="border-b border-[#333] bg-[#0b1245]">
          <div className={`${WRAP} flex flex-col items-center py-20 text-center`}>
            <h2 className="font-['Inter:Medium',sans-serif] text-[36px] leading-[1.25] text-white sm:text-[42px]">
              Ready to get started?
            </h2>
            <p className="mt-4 max-w-[520px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#fffaf0]">
              Book online or call us directly. Shyreese is a real person you can reach the same day.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <GoldButton className="!px-6 !py-3 !text-[14px]">Schedule an appointment</GoldButton>
              </a>
              <a
                href={PHONE_TEL}
                className="rounded-[8px] border border-white bg-white px-6 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245] transition-colors hover:bg-transparent hover:text-white"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingQuickNav links={CONTACT_QUICK_LINKS} />
    </div>
  )
}
