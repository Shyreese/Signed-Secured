import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { WRAP, GoldButton } from '../components/shared'
import { GoldBullet } from '../components/GoldBullet'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav, type QuickLink } from '../components/FloatingQuickNav'
import { PHONE_TEL, PHONE_DISPLAY } from '../constants/contact'

import heroPhoto from '@/imports/image-7.png'

/** Bottom quick-nav anchors specific to the Insurance page sections. */
const INSURANCE_QUICK_LINKS: QuickLink[] = [
  {
    label: 'Coverage',
    href: '#coverage',
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
    label: 'Get a Quote',
    href: '#quote',
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
          <h1 className="font-['Inter:Medium',sans-serif] text-[34px] leading-[1.2] text-white sm:text-[42px]">
            Insurance shouldn&apos;t be confusing. Let&apos;s figure it out together.
          </h1>
          <p className="mt-5 max-w-[460px] font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#cdd8ec]">
            Honest, educational guidance on life, property and casualty, bonds, and travel insurance. We help you
            understand your options so you can make the right choice for your budget and compliance needs. No pressure, no jargon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote">
              <GoldButton className="!px-6 !py-3 !text-[14px]">Get a free quote</GoldButton>
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
            alt="A parent and two young children sitting together and relaxing on a couch in a bright living room at home"
            className="w-full rounded-[10px] object-cover shadow-[5px_4px_4px_0px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}

const TRUST = [
  {
    title: 'Honest Education',
    body: 'We explain your options in plain terms so you can make the right decision for your goals.',
    icon: (
      <>
        <path d="M4 6.5 12 4l8 2.5L12 9 4 6.5z" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 8v4.5c0 1.4 1.8 2.5 4 2.5s4-1.1 4-2.5V8M20 6.5V11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Independent Guidance',
    body: 'We shop multiple carriers to find the coverage that actually fits your needs.',
    icon: (
      <>
        <path d="M12 3v18M5 8l7-4 7 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 8l-2 5c0 1.3 1.1 2 2 2s2-.7 2-2l-2-5zM19 8l-2 5c0 1.3 1.1 2 2 2s2-.7 2-2l-2-5z" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Free Quote, No Obligation',
    body: 'Get a real quote and a real conversation, no commitment required, whenever you want.',
    icon: (
      <>
        <path d="M12 21s6.5-5.2 6.5-10a6.5 6.5 0 1 0-13 0C5.5 15.8 12 21 12 21z" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 11l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

function TrustBar() {
  return (
    <section className="bg-[#365485]">
      <div className={`${WRAP} py-14`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[24px] text-white">
          People trust us with their coverage
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

interface Coverage {
  tab: string
  title: string
  description: string
  forWho: string
  covered: string
  question: string
  answer: string
  cta: string
  ctaHref?: string
  ctaExternal?: boolean
}

const COVERAGE: Coverage[] = [
  {
    tab: 'Life',
    title: 'Life insurance',
    description:
      "Protect your family's financial future. We offer term life, whole life, and indexed universal life policies tailored to your stage of life and goals.",
    forWho: 'Parents, spouses, business owners, anyone with people who depend on them financially.',
    covered: 'Death benefit paid to your beneficiaries, plus optional cash value growth depending on policy type.',
    question: 'I already have life insurance through my job, why would I need more?',
    answer:
      "Most employer policies aren't portable and the coverage usually isn't enough to cover long term family needs. A personal policy stays with you if you change jobs.",
    cta: 'Request a life insurance quote',
  },
  {
    tab: 'Health',
    title: 'Health insurance',
    description:
      'Navigating health insurance is essential for your wellbeing and financial security. We help you compare HMO, PPO, and EPO plans so you can choose coverage that actually fits how you use care.',
    forWho:
      'HMO plans fit cost conscious individuals who want a primary doctor coordinating their care. PPO plans fit people who want the flexibility to see any doctor without a referral. EPO plans fit those who want a middle ground, choice within a network, without needing a referral.',
    covered:
      'Coverage depends on plan type. HMO plans require a referral to see a specialist and only cover emergencies out of network. PPO plans let you self refer to any doctor and cover out of network care at a higher cost. EPO plans let you self refer within your network, with out of network coverage limited to emergencies.',
    question: "What's the difference between HMO, PPO, and EPO plans?",
    answer:
      'HMO plans usually cost less but require a primary doctor referral to see a specialist. PPO plans cost more but let you see any doctor without a referral. EPO plans fall in between, offering choice within a network without needing a referral.',
    cta: 'Request a health insurance quote',
  },
  {
    tab: 'Property & Casualty',
    title: 'Property and casualty insurance',
    description:
      'Coverage for your home, auto, and personal property, plus the liability protection that keeps an accident from becoming a financial setback.',
    forWho: 'Homeowners, renters, drivers, and small business owners protecting physical assets.',
    covered: 'Damage, theft, and loss of covered property, plus liability if someone is injured or their property is harmed.',
    question: 'Can I bundle my home and auto coverage?',
    answer:
      'Yes. Bundling home and auto with one carrier often lowers your total premium, and we compare bundled rates across carriers so you see the real difference.',
    cta: 'Request a property and casualty quote',
  },
  {
    tab: 'Bonds',
    title: 'Bonds',
    description:
      'Surety and fidelity bonds that guarantee you will meet an obligation, often required for licensing, contracts, or public work.',
    forWho: 'Contractors, business owners, and professionals who need a bond to operate or bid on work.',
    covered: 'A financial guarantee to the party you serve if a contractual or licensing obligation is not met.',
    question: 'How is a bond different from insurance?',
    answer:
      'A bond protects the party you are working for, while insurance protects you. We help you find the specific bond your license or contract requires.',
    cta: 'Request a bond quote',
  },
  {
    tab: 'Travel',
    title: 'Travel insurance',
    description:
      'Coverage for trip cancellation, medical emergencies abroad, and lost belongings so an unexpected event does not cost you the whole trip.',
    forWho: 'Anyone traveling domestically or overseas, especially for prepaid or international trips.',
    covered: 'Trip cancellation and interruption, emergency medical care while traveling, and lost or delayed baggage.',
    question: 'Do I really need travel insurance for a short trip?',
    answer:
      'It depends on how much you have prepaid and where you are going. For international travel a medical emergency can be very costly, so even short trips are worth covering.',
    cta: 'Request a travel insurance quote',
  },
]

interface Comparison {
  heading: string
  intro: string
  columns: string[]
  rows: { label: string; cells: string[] }[]
}

const COMPARISON_LEGAL =
  'All insurance solicitations are conducted under the registered fictitious business name (DBA) Signed Insurance Solutions in the State of California.'

/** Keyed by COVERAGE[].tab. Only Life, Health, and Property & Casualty have a comparison card. */
const COMPARISONS: Record<string, Comparison> = {
  Life: {
    heading: 'Understanding Life Insurance',
    intro:
      "Protecting your family's future is one of the most important decisions you will make. Life insurance can seem complex, so we have simplified the three main types below to help you begin your research before our consultation.",
    columns: ['Feature', 'Term Life', 'Whole Life', 'Indexed Universal (IUL)'],
    rows: [
      { label: 'Duration', cells: ['Temporary (10 to 30 years)', 'Permanent', 'Permanent'] },
      { label: 'Cost', cells: ['Lowest', 'Highest', 'Flexible'] },
      { label: 'Cash Value', cells: ['None', 'Yes guaranteed', 'Yes market indexed'] },
      {
        label: 'Best For',
        cells: [
          'Affordable protection for specific timeframes such as a mortgage or raising kids',
          'Leaving a legacy, estate planning, and guaranteed conservative growth',
          'Building tax advantaged retirement income with market growth potential',
        ],
      },
    ],
  },
  Health: {
    heading: 'Understanding Health Insurance',
    intro:
      'Navigating health insurance is essential for your wellbeing and financial security. This chart breaks down the key differences between common plan types.',
    columns: ['Feature', 'HMO', 'PPO', 'EPO'],
    rows: [
      {
        label: 'Full Name',
        cells: ['Health Maintenance Org.', 'Preferred Provider Org.', 'Exclusive Provider Org.'],
      },
      {
        label: 'Referrals Needed',
        cells: ['Yes to see specialists', 'No you can self refer', 'No you can self refer'],
      },
      {
        label: 'Out of Network',
        cells: ['No coverage, emergencies only', 'Yes but at a higher cost', 'No coverage, emergencies only'],
      },
      {
        label: 'Best For',
        cells: [
          'Cost conscious individuals who want a primary doctor to coordinate their care',
          'Flexibility and choice allowing you to see any doctor without referrals',
          'A middle ground offering choice within a network without needing referrals',
        ],
      },
    ],
  },
  'Property & Casualty': {
    heading: 'Understanding Property and Casualty (Liability)',
    intro:
      'Property and Casualty insurance protects your most valuable assets against accidents and liability. Explore the basics below.',
    columns: ['Feature', 'Homeowners', 'Renters', 'Auto', 'Business'],
    rows: [
      {
        label: 'What it Protects',
        cells: [
          'Your house structure and personal belongings',
          'Your personal belongings within a rental unit',
          'Your vehicle and liability in an accident',
          'Your business assets operations and liability',
        ],
      },
      {
        label: 'Key Benefit',
        cells: [
          'Rebuilds your largest asset after a disaster',
          'Affordably replaces everything you own',
          'Covers costly repairs and medical bills after a crash',
          'Protects against lawsuits and financial loss',
        ],
      },
      {
        label: 'Also Includes',
        cells: [
          'Liability protection if someone is injured on your property',
          'Liability protection for accidents within your unit',
          'Liability for damages or injuries you cause to others',
          'General liability, professional liability (E&O), and commercial auto',
        ],
      },
    ],
  },
}

function ComparisonCard({ data }: { data: Comparison }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto mt-4 max-w-[860px] overflow-hidden rounded-[10px] bg-[#0b1245]">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
      >
        <h3 className="font-['Inter:Medium',sans-serif] text-[18px] text-white">{data.heading}</h3>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b39257"
          className={`size-5 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="px-7 pb-7">
          <p className="max-w-[640px] font-['Inter:Regular',sans-serif] text-[13px] leading-[1.75] text-[#cdd8ec]">
            {data.intro}
          </p>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr>
                  {data.columns.map((col, i) => (
                    <th
                      key={col}
                      scope="col"
                      className={`border-b border-white/15 py-3 pr-4 align-bottom font-['Inter:Medium',sans-serif] text-[12px] ${
                        i === 0 ? 'text-white' : 'text-[#98b7e6]'
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border-b border-white/10 py-3 pr-4 align-top font-['Inter:Medium',sans-serif] text-[12px] text-white"
                    >
                      {row.label}
                    </th>
                    {row.cells.map((cell, i) => (
                      <td
                        key={i}
                        className="border-b border-white/10 py-3 pr-4 align-top font-['Inter:Regular',sans-serif] text-[12px] leading-[1.6] text-[#cdd8ec]"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 font-['Inter:Italic',sans-serif] text-[11px] italic leading-[1.6] text-[#829bc4]">
            {COMPARISON_LEGAL}
          </p>

          <a href="#quote" className="mt-5 inline-block">
            <GoldButton className="!text-[13px]">Get a free quote</GoldButton>
          </a>
        </div>
      )}
    </div>
  )
}

function CoverageSelector() {
  const [active, setActive] = useState(0)
  const c = COVERAGE[active]
  const comparison = COMPARISONS[c.tab]

  return (
    <section id="coverage" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          What kind of coverage are you looking for?
        </h2>

        <div className="mt-7 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Coverage type">
          {COVERAGE.map((item, i) => (
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
          <h3 className="font-['Inter:Medium',sans-serif] text-[20px] text-[#0b1245]">{c.title}</h3>
          <p className="mt-3 max-w-[640px] font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
            {c.description}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0b1245]">Who&apos;s it for</h4>
              <p className="mt-2 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
                {c.forWho}
              </p>
            </div>
            <div>
              <h4 className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0b1245]">What&apos;s covered</h4>
              <p className="mt-2 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
                {c.covered}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[8px] border-[0.667px] border-[#829bc4] bg-white p-5">
            <h4 className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0b1245]">Common question:</h4>
            <p className="mt-2 font-['Inter:Italic',sans-serif] text-[13px] italic leading-[1.6] text-[#0b1245]">
              &ldquo;{c.question}&rdquo;
            </p>
            <p className="mt-2 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
              {c.answer}
            </p>
          </div>

          {c.tab === 'Travel' && (
            <p className="mt-6 font-['Inter:Regular',sans-serif] text-[12px] leading-[1.7] text-[#365485]">
              Need help booking the trip itself? Visit our{' '}
              <a href="/travel" className="text-[#9a804c] underline hover:text-[#0b1245]">
                Travel page
              </a>{' '}
              for flight and hotel booking assistance.
            </p>
          )}

          {c.ctaExternal ? (
            <a
              href={c.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block"
            >
              <GoldButton className="!text-[13px]">{c.cta}</GoldButton>
            </a>
          ) : (
            <a href="#quote" className="mt-6 inline-block">
              <GoldButton className="!text-[13px]">{c.cta}</GoldButton>
            </a>
          )}
        </div>

        {comparison && <ComparisonCard key={c.tab} data={comparison} />}
      </div>
    </section>
  )
}

function WhyNoPrices() {
  return (
    <section className="bg-[#365485]">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-white">
          Why we don&apos;t list insurance prices
        </h2>
        <p className="mt-5 max-w-[720px] font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#e2e9f5]">
          Quoting a generic price a month is misleading, and it is almost never true for your actual situation. Real
          insurance pricing depends on your age, health, coverage goals, and policy type. We don&apos;t want you
          guessing and making a bad decision based on a number that is not yours.
        </p>
        <p className="mt-4 max-w-[720px] font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#e2e9f5]">
          We will talk about what actually matters and give you real numbers from real carriers, with no obligation.
        </p>

        <div className="mt-8 max-w-[720px] rounded-[8px] border-[0.667px] border-white/40 bg-white p-6">
          <h3 className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">
            A note about being honest on applications
          </h3>
          <p className="mt-2 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
            Leaving information off an application might lower your quote in the short term, but it leads to denied
            claims when your family needs them most. We help you present your information accurately and find coverage
            that holds up, so you are protected by what you actually bought.
          </p>
        </div>
      </div>
    </section>
  )
}

function MeetAgent() {
  return (
    <section className="border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <div className="mx-auto max-w-[560px] rounded-[10px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] p-7">
          <h2 className="font-['Inter:Medium',sans-serif] text-[22px] leading-[1.3] text-[#0b1245]">
            Meet your licensed agent
          </h2>
          <p className="mt-4 font-['Inter:Medium',sans-serif] text-[16px] text-[#0b1245]">
            Shyreese Tyiska
          </p>
          <div className="mt-2 space-y-1 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.65] text-[#365485]">
            <p>California License 4405606</p>
            <p>NPN 21306793</p>
            <p>Sacramento, California</p>
          </div>
          <a
            href="https://www.planenroll.com/AgentBio?purl=Shyreese-Tyiska"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block"
          >
            <GoldButton className="!text-[13px]">View agent profile</GoldButton>
          </a>
        </div>
      </div>
    </section>
  )
}

function QuoteForm() {
  return (
    <section id="quote" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Get your free quote
        </h2>
        <p className="mt-2 text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#365485]">
          Fill out the form below and we will get back to you within 24 hours.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 max-w-[720px] rounded-[10px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name">
              <input type="text" placeholder="Your name" className={inputClass} />
            </Field>
            <Field label="Email">
              <input type="email" placeholder="you@example.com" className={inputClass} />
            </Field>
            <Field label="Phone number">
              <input type="tel" placeholder="(916) 000 0000" className={inputClass} />
            </Field>
            <Field label="Type of insurance">
              <select className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select a category
                </option>
                {COVERAGE.map((c) => (
                  <option key={c.tab} value={c.tab}>
                    {c.tab}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Best time to call">
              <input type="text" placeholder="Morning, afternoon, or evening" className={inputClass} />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Message (optional)">
              <textarea rows={4} placeholder="Tell us a little about what you are looking for." className={`${inputClass} resize-none`} />
            </Field>
          </div>

          <GoldButton className="mt-6 w-full !py-3 !text-[14px]">Request my free quote</GoldButton>
          <p className="mt-3 text-center font-['Inter:Regular',sans-serif] text-[12px] text-[#365485]">
            Replied within 24 hours. No pressure, no cost. Your details stay private.
          </p>
          <p className="mt-2 text-center font-['Inter:Regular',sans-serif] text-[11px] italic leading-[1.6] text-[#829bc4]">
            All insurance solicitations are conducted under the registered fictitious business name (DBA) Signed Insurance Solutions in the State of California.
          </p>
        </form>
      </div>
    </section>
  )
}

const inputClass =
  "w-full rounded-[8px] border-[0.667px] border-[#829bc4] bg-white px-3 py-2.5 font-['Inter:Regular',sans-serif] text-[13px] text-[#0b1245] outline-none placeholder:text-[#829bc4] focus:border-[#9a804c]"

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-['Inter:Medium',sans-serif] text-[12px] text-[#0b1245]">{label}</span>
      {children}
    </label>
  )
}

const STEPS = [
  {
    title: 'Tell us about you',
    body: 'Share basic details about your age, health, budget, and what you want to protect, your family, your income, or your business. No paperwork required yet, just a conversation.',
  },
  {
    title: 'We research',
    body: 'We compare options across multiple insurance carriers to find coverage that actually fits your goals and budget, not just the first quote that comes up.',
  },
  {
    title: 'We will walk through your options',
    body: 'We sit down with you and explain each option in plain language, what it covers, what it costs, and whether it makes sense for your situation, no jargon, no pressure.',
  },
  {
    title: 'You decide',
    body: 'Take whatever time you need to decide. If you are ready to move forward we help with the paperwork. If not, we are still here whenever you are.',
  },
]

function Process() {
  return (
    <section className="border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Our Consultation Process
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

function Stars() {
  return (
    <div aria-label="5 out of 5 stars" className="flex gap-1 text-[16px] leading-none text-[#b39257]">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

const REVIEWS = [
  {
    quote:
      '"I had an outstanding experience using their notary and insurance services. They took the time to educate me. I never felt rushed or overwhelmed."',
    name: 'Andrea M.',
  },
  {
    quote:
      '"I didn\'t think I needed coverage beyond my job. They showed me what could happen and helped me get a policy that actually protects my family."',
    name: 'Marcus R.',
  },
]

function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <h2 className="text-center font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          What insurance clients are saying
        </h2>
        <div className="mx-auto mt-8 grid max-w-[860px] gap-4 md:grid-cols-2">
          {REVIEWS.map((t) => (
            <figure key={t.name} className="flex flex-col gap-4 rounded-[8px] border-[0.667px] border-[#d5d5d5] bg-[#0b2145] p-6">
              <Stars />
              <blockquote className="flex-1 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.75] text-white">
                {t.quote}
              </blockquote>
              <figcaption className="font-['Inter:Regular',sans-serif] text-[13px] text-[#fffaf0]">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQ = [
  {
    q: 'What is the difference between term and whole life insurance?',
    a: 'Term life covers you for a set number of years and costs less, while whole life lasts your entire life and builds cash value over time. The right choice depends on your budget and how long you need the coverage.',
  },
  {
    q: 'I already have insurance through my job, do I need more?',
    a: 'Often yes. Employer coverage usually ends when you leave the job and the amount is rarely enough for a family. A personal policy stays with you and can be sized to your actual needs.',
  },
  {
    q: 'How do my premiums get calculated?',
    a: 'Carriers look at your age, health, the coverage amount, and the policy type. We compare several carriers so you see how each one prices your specific situation.',
  },
  {
    q: 'Can you help me with property and casualty insurance too?',
    a: 'Yes. We handle home, auto, renters, and small business property and casualty coverage, and we can bundle policies to lower your total premium.',
  },
  {
    q: 'What is an indexed universal life (IUL) policy?',
    a: 'An IUL is permanent life insurance whose cash value growth is tied to a market index, with a floor that protects you from losses. It offers flexibility in premiums and death benefit over time.',
  },
  {
    q: 'What if I cannot afford the coverage I need right now?',
    a: 'We will find a policy that fits your budget today and revisit it as your situation changes. Some coverage in place is far better than none, and you can adjust it later.',
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Common insurance questions
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
          Ready to talk?
        </h2>
        <p className="mt-4 max-w-[520px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#fffaf0]">
          No pressure, no obligation. Just an honest conversation about your coverage options.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="#quote">
            <GoldButton className="!px-6 !py-3 !text-[14px]">Request a free quote</GoldButton>
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

export default function Insurance() {
  usePageMeta({ title: 'Insurance Services in Sacramento | Signed Insurance Solutions', description: 'Licensed insurance guidance made simple. Signed Insurance Solutions helps you compare and choose the right coverage across the greater Sacramento area.' })
  return (
    <div className="bg-white">
      <SiteHeader activeLabel="Insurance" />
      <main>
        <Hero />
        <TrustBar />
        <CoverageSelector />
        <WhyNoPrices />
        <MeetAgent />
        <QuoteForm />
        <Process />
        <Testimonials />
        <Faq />
        <CTA />
      </main>
      <SiteFooter />
      <FloatingQuickNav links={INSURANCE_QUICK_LINKS} />
    </div>
  )
}
