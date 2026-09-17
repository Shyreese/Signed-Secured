import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { WRAP, GoldButton } from '../components/shared'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav, type QuickLink } from '../components/FloatingQuickNav'
import { PHONE_TEL, PHONE_DISPLAY, CALENDLY_URL } from '../constants/contact'

const heroPhoto =
  'https://images.unsplash.com/photo-1543797414-a0c3ad076f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'

/** Bottom quick-nav anchors specific to the Travel page sections. */
const TRAVEL_QUICK_LINKS: QuickLink[] = [
  {
    label: 'Document Signings',
    href: '#signings',
    icon: (
      <>
        <path
          d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M14 3v5h5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 13h6M9 16h4" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: 'Why Book With Us',
    href: '#why',
    icon: (
      <path
        d="M12 3.5l6 2.2v5.3c0 4.1-2.7 6.9-6 8-3.3-1.1-6-3.9-6-8V5.7L12 3.5z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: 'How It Works',
    href: '#how',
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
        <path d="M4 5h16v14H4z" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 6l8 6 8-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

function Hero() {
  return (
    <section id="top" className="border-b border-[#e0e0e0] bg-[#0b1245]">
      <div className={`${WRAP} grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20`}>
        <div>
          <h1 className="font-['Inter:Medium',sans-serif] text-[34px] leading-[1.2] text-white sm:text-[42px]">
            Travel services in Sacramento
          </h1>
          <p className="mt-5 max-w-[460px] font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#cdd8ec]">
            Away from home or heading abroad? We handle two things travelers need most. Document signings
            coordinated around your schedule, and help booking the flights and hotels themselves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact">
              <GoldButton className="!px-6 !py-3 !text-[14px]">Request travel booking help</GoldButton>
            </a>
            <a
              href={PHONE_TEL}
              className="rounded-[8px] border border-white bg-transparent px-6 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-white transition-colors hover:bg-white hover:text-[#0b1245]"
            >
              {`Call us ${PHONE_DISPLAY}`}
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroPhoto}
            alt="View of an airplane wing and sky through a cabin window during a flight"
            className="w-full rounded-[10px] object-cover shadow-[5px_4px_4px_0px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}

function DocumentSignings() {
  return (
    <section id="signings" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <div className="mx-auto max-w-[720px] rounded-[10px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] p-8">
          <h2 className="font-['Inter:Medium',sans-serif] text-[24px] leading-[1.3] text-[#0b1245]">
            Document signings while you travel
          </h2>
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
            If you need a notarization, apostille authentication, or signing while you are away from home or
            preparing documents for international travel, we coordinate the appointment around your schedule,
            remote available.
          </p>
          <div className="mt-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <GoldButton className="!px-6 !py-3 !text-[14px]">Schedule a signing</GoldButton>
            </a>
          </div>
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-[13px] text-[#365485]">
            See notary and apostille pricing on our{' '}
            <a
              href="/#pricing"
              className="font-['Inter:Medium',sans-serif] text-[#9a804c] underline underline-offset-2 hover:text-[#0b1245]"
            >
              home page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

function BookingH2() {
  return (
    <div className="border-b border-[#e0e0e0] bg-white pb-0 pt-14">
      <div className={`${WRAP}`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[30px] leading-[1.2] text-[#0b1245]">
          Flight and hotel booking help
        </h2>
      </div>
    </div>
  )
}

const TRUST = [
  {
    title: 'Real person, not a booking site',
    body: 'Shyreese handles your booking directly or through a trusted travel agency partner, not an automated system.',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" strokeWidth="1.5" />
        <path d="M5 19c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Works with or without insurance',
    body: 'Booking help is available whether or not you purchase travel insurance through us.',
    icon: (
      <>
        <path d="M12 3.5l6 2.2v5.3c0 4.1-2.7 6.9-6 8-3.3-1.1-6-3.9-6-8V5.7L12 3.5z" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 11l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'One point of contact',
    body: 'Questions, changes, or problems, you call Shyreese, not a call center.',
    icon: (
      <>
        <path
          d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </>
    ),
  },
]

function TrustBar() {
  return (
    <section id="why" className="scroll-mt-24 bg-[#365485]">
      <div className={`${WRAP} py-14`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[24px] text-white">
          Why book your travel with us
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

const STEPS = [
  {
    title: 'Tell us about your trip',
    body: 'Share your dates, destination, budget, and any preferences so we know exactly what you are looking for.',
  },
  {
    title: 'We find your options',
    body: 'Shyreese books directly or checks with our travel agency partner for the best fit for your trip.',
  },
  {
    title: 'We confirm before booking',
    body: 'You review the flight and hotel details before anything is paid for, so there are no surprises.',
  },
  {
    title: 'You travel with support',
    body: 'If plans change or something comes up, you have a real person to call for help.',
  },
]

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
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

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Pricing
        </h2>
        <p className="mt-2 text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#365485]">
          Straightforward and stated honestly.
        </p>

        <div className="mx-auto mt-8 max-w-[720px] rounded-[10px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] p-7">
          <h3 className="font-['Inter:Medium',sans-serif] text-[20px] text-[#0b1245]">
            Booking assistance fee
          </h3>
          <div className="mt-4 divide-y divide-[#e0e0e0]">
            {[
              { label: 'Any booking, flight or hotel', price: '$25' },
              { label: 'With any travel insurance policy', price: 'No booking fee' },
              { label: 'Changes after booking', price: 'No extra charge' },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between py-3">
                <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#365485]">{row.label}</span>
                <span className="ml-4 shrink-0 font-['Inter:Medium',sans-serif] text-[13px] text-[#0b1245]">{row.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.75] text-[#365485]">
            This fee covers the booking work only and is separate from the cost of your flight or hotel. We confirm your fee before we start, and the first conversation is always free.
          </p>
        </div>
      </div>
    </section>
  )
}

const FAQ = [
  {
    q: 'Do I need to buy travel insurance to use this service?',
    a: 'No, booking assistance is available whether or not you purchase travel insurance.',
  },
  {
    q: 'Does Shyreese book flights and hotels herself?',
    a: 'Yes, in most cases, for some trips she coordinates with a trusted outside travel agency to get you the best option.',
  },
  {
    q: 'Is there a fee for booking help?',
    a: 'Pricing is still being confirmed, this fee is separate from the cost of your flight or hotel.',
  },
  {
    q: 'What if my plans change after booking?',
    a: 'Contact Shyreese directly and she will help you handle changes with the airline or hotel. Keep in mind that the airline or hotel sets the rules for your booking. If the rate you booked does not allow changes or cancellations, we cannot change or cancel it either. We will always tell you what the rules are before you book, so you know exactly what you are agreeing to. This is one reason travel insurance is worth considering, since some policies cover cancellations that an airline or hotel will not.',
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Common travel booking questions
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
    <section id="contact" className="scroll-mt-24 border-b border-[#333] bg-[#0b1245]">
      <div className={`${WRAP} flex flex-col items-center py-20 text-center`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[36px] leading-[1.25] text-white sm:text-[42px]">
          Ready to get started?
        </h2>
        <p className="mt-4 max-w-[520px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#fffaf0]">
          Whether you need a document signed while you travel or help booking your flights and hotels, Shyreese is a real person you can call.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="/contact">
            <GoldButton className="!px-6 !py-3 !text-[14px]">Request travel booking help</GoldButton>
          </a>
          <a
            href={PHONE_TEL}
            className="rounded-[8px] border border-white bg-white px-6 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245] transition-colors hover:bg-transparent hover:text-white"
          >
            {`Call us ${PHONE_DISPLAY}`}
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Travel() {
  usePageMeta({ title: 'Travel Services in Sacramento | Signed & Secured', description: 'Travel notary and document services that come to you across Sacramento, Placer, and El Dorado counties, including hospitals, offices, and care facilities.' })
  return (
    <div className="bg-white">
      <SiteHeader activeLabel="Travel" />
      <main>
        <Hero />
        <DocumentSignings />
        <BookingH2 />
        <TrustBar />
        <HowItWorks />
        <Pricing />
        <Faq />
        <CTA />
      </main>
      <SiteFooter />
      <FloatingQuickNav links={TRAVEL_QUICK_LINKS} />
    </div>
  )
}
