import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { WRAP, GoldButton } from '../components/shared'
import { GoldBullet } from '../components/GoldBullet'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav, type QuickLink } from '../components/FloatingQuickNav'
import { PHONE_TEL, PHONE_DISPLAY_PLAIN, CALENDLY_URL } from '../constants/contact'
import signingImage from '../imports/Signing_Image.png'
import containerSvg from '../imports/Container.svg'

/** Bottom quick-nav anchors specific to the Loan Signing page sections. */
const LOAN_SIGNING_QUICK_LINKS: QuickLink[] = [
  {
    label: 'Who It Is For',
    href: '#who-its-for',
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
            Certified loan signing agent
          </p>
          <h1 className="mt-3 font-['Inter:Medium',sans-serif] text-[34px] leading-[1.2] text-white sm:text-[42px]">
            Certified loan signing agent in Sacramento
          </h1>
          <p className="mt-5 font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#cdd8ec]">
            Shyreese is a certified loan signing agent who guides you through your loan documents for
            refinances, purchases, and reverse mortgages, making sure every page is signed and notarized
            correctly.
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
            src={signingImage}
            alt="Hands signing loan documents at closing"
            className="aspect-[4/3] w-full rounded-[12px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Who it is for ─────────────────────────────────────────────────────────────

const BORROWERS = [
  'Homeowners refinancing their mortgage',
  'Homebuyers signing at closing',
  'Seniors completing a reverse mortgage',
]

function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Who it is for
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[8px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] p-6">
            <h3 className="font-['Inter:Medium',sans-serif] text-[16px] text-[#0b1245]">For borrowers</h3>
            <p className="mt-2 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
              We meet you where you are and take the time to make the signing clear and unhurried.
            </p>
            <ul className="mt-4 space-y-3">
              {BORROWERS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <GoldBullet />
                  <span className="font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[8px] border-[0.667px] border-[#829bc4] bg-[#0b1245] p-6">
            <h3 className="font-['Inter:Medium',sans-serif] text-[16px] text-white">For businesses</h3>
            <p className="mt-3 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#cdd8ec]">
              Title companies, escrow officers, lenders, and signing services rely on us as a dependable
              local signing agent. We arrive prepared, follow your instructions precisely, and return
              complete, accurate packages on schedule, so your closings stay on track.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

// ─── Loan types we handle ──────────────────────────────────────────────────────

const LOAN_TYPES = [
  'Refinances',
  'Home purchases',
  'Reverse mortgages',
  'Home equity lines of credit',
  'Seller packages',
  'Construction loans',
  'General loan signings',
  'Investment property loans',
]

function LoanTypes() {
  return (
    <section className="border-b border-[#1a2a6e] bg-[#0b1245]">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-white">
          Loan types we handle
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {LOAN_TYPES.map((item) => (
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
    title: 'Documents are sent',
    body: 'The lender or title company sends the loan documents.',
  },
  {
    title: 'We schedule',
    body: 'We schedule at your home, office, or another convenient location, including evenings and weekends.',
  },
  {
    title: 'We walk you through',
    body: 'We walk you through each document and answer your questions before you sign.',
  },
  {
    title: 'We notarize and return',
    body: 'We notarize the package and return it on time.',
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
    <section id="pricing" className="border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <img
          src={containerSvg}
          alt="Loan signing pricing: $15 per signature line plus travel fee starting at $45"
          className="w-full"
        />
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
          For title companies, lenders, and signing services
        </h2>
        <p className="mt-4 max-w-[560px] font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
          Reliable, on time, and accurate signings across the greater Sacramento area. We work directly
          with your team and follow your instructions to the letter, so every package comes back
          complete.
        </p>
        <div className="mt-7">
          <a href="/contact">
            <GoldButton className="!px-6 !py-3 !text-[14px]">
              Contact us about recurring or high volume work
            </GoldButton>
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: 'What is a certified loan signing agent?',
    a: 'A certified loan signing agent is a notary trained to guide borrowers through loan documents and notarize them correctly.',
  },
  {
    q: 'What types of loans do you sign?',
    a: 'We handle nearly every type of loan signing, including refinances, home purchases, reverse mortgages, home equity lines of credit, seller packages, and more. If you have a loan document that needs a notary, just ask and we will take care of it.',
  },
  {
    q: 'Do you come to me?',
    a: 'Yes, we travel to your home, office, or another location that works for you, including evenings and weekends.',
  },
  {
    q: 'How much does a loan signing cost?',
    a: 'Loan signing appointments are $15 per signature line, plus a travel fee based on the distance from our home office, starting at $45. We confirm the full cost before your appointment.',
  },
  {
    q: 'Can title companies and lenders work with you regularly?',
    a: 'Yes, we work directly with title companies, escrow officers, and lenders who need a dependable local signing agent.',
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Common loan signing questions
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
          Ready to schedule your signing?
        </h2>
        <p className="mt-4 max-w-[520px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#fffaf0]">
          Book your loan signing appointment online, or call us and we will get you on the calendar.
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

export default function LoanSigning() {
  usePageMeta({ title: 'Certified Loan Signing Agent in Sacramento | Signed & Secured', description: 'Certified loan signing agent handling refinances, purchases, and seller packages accurately and on time, wherever you need across the Sacramento area.' })
  return (
    <div className="bg-white">
      <SiteHeader activeLabel="LoanSigning" />
      <main>
        <Hero />
        <WhoItsFor />
        <LoanTypes />
        <HowItWorks />
        <Pricing />
        <TitleCompanies />
        <Faq />
        <CTA />
      </main>
      <SiteFooter />
      <FloatingQuickNav links={LOAN_SIGNING_QUICK_LINKS} />
    </div>
  )
}
