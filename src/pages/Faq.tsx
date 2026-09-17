import { useMemo, useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav, type QuickLink } from '../components/FloatingQuickNav'
import { WRAP, GoldButton } from '../components/shared'
import { PHONE_TEL, PHONE_DISPLAY, PHONE_DISPLAY_PLAIN } from '../constants/contact'

// ─── FAQ data ────────────────────────────────────────────────────────────────
// Each answer leads with a direct response, then adds detail. No hyphens or
// dashes anywhere. No ampersands. Every visible question and answer is mirrored
// in the FAQPage JSON LD below.

interface QaItem {
  id: string
  q: string
  a: string
}

interface Category {
  key: string
  label: string
  items: QaItem[]
}

const CATEGORIES: Category[] = [
  {
    key: 'general',
    label: 'General services',
    items: [
      {
        id: 'gen-services',
        q: 'What services does Signed and Secured offer?',
        a: 'We provide mobile notary work, Live Scan fingerprinting, loan signings, apostille facilitation, remote travel support, and personalized insurance solutions. We serve individuals, families, and businesses across the greater Sacramento area with a convenience first approach.',
      },
      {
        id: 'gen-mobile',
        q: 'Do you offer mobile or remote services near me?',
        a: 'Yes. We come to your home, office, hospital, or care facility anywhere in the greater Sacramento area, and we can arrange remote support for travel document needs. Tell us your location at booking and we will confirm availability.',
      },
      {
        id: 'gen-areas',
        q: 'What areas do you serve?',
        a: 'We serve the greater Sacramento area, including Sacramento, Elk Grove, Roseville, Folsom, and surrounding communities. If you are just outside that range, call us and we will do our best to accommodate you.',
      },
      {
        id: 'gen-quickly',
        q: 'How quickly can I schedule an appointment?',
        a: 'We accept same day requests whenever our schedule allows. Booking a day or two ahead gives you the most flexibility for time windows, including evening and weekend slots. For loan signings we coordinate through your escrow officer.',
      },
      {
        id: 'gen-hours',
        q: 'What are your hours of operation?',
        a: 'We work by appointment, including evenings and weekends, to fit around your schedule. Call or book online and we will find a window that works for you.',
      },
      {
        id: 'gen-sameday',
        q: 'Do you offer same day appointments?',
        a: 'Yes. Urgent signings happen, so we offer same day and evening appointments for time sensitive documents whenever our schedule allows. Call us as early as you can so we can hold a slot for you.',
      },
    ],
  },
  {
    key: 'mobile',
    label: 'Mobile notary',
    items: [
      {
        id: 'mob-process',
        q: 'How does the mobile notary process work?',
        a: 'We come to your chosen location at your scheduled time and notarize your documents on the spot. You provide the unsigned documents and a valid photo ID, each signer appears in person, and we verify identity, witness the signature, and apply the notarial seal.',
      },
      {
        id: 'mob-need',
        q: 'What do I need for my appointment?',
        a: 'You need your unsigned documents and a government issued photo ID for every signer. A current California driver license, state ID, or US passport all qualify, and the name on the ID must match the name on the document exactly.',
      },
      {
        id: 'mob-fees',
        q: 'How are your notary fees determined?',
        a: 'Our fees follow California state maximums for each notarization, plus a travel fee based on your location. Loan signing fees are quoted per appointment, and we are transparent about every cost before confirming your booking.',
      },
      {
        id: 'mob-documents',
        q: 'What documents can you notarize?',
        a: 'We notarize a wide range of documents, including powers of attorney, healthcare directives, wills, real estate and loan documents, affidavits, and parental consent forms. We cannot advise on the legal content, so an attorney should review substantive questions beforehand.',
      },
      {
        id: 'mob-id',
        q: 'What forms of ID do you accept?',
        a: 'We accept a current government issued photo ID such as a California driver license, a state ID, or a US passport. If you have lost your ID, contact us to discuss the credible witness procedures available under California law.',
      },
      {
        id: 'mob-loan',
        q: 'Do you handle loan signings?',
        a: 'Yes. We handle real estate closings, refinances, and other loan signings, and we coordinate directly with your escrow or title officer. Let us know your closing timeline and we will schedule around it.',
      },
      {
        id: 'mob-witness',
        q: 'Can you provide a witness if I need one?',
        a: 'Sometimes, depending on availability and location. Some documents require one or two witnesses in addition to the notary, so please mention this when booking and we will do our best to arrange it.',
      },
    ],
  },
  {
    key: 'livescan',
    label: 'Live Scan',
    items: [
      {
        id: 'ls-what',
        q: 'What is Live Scan fingerprinting?',
        a: 'Live Scan is electronic fingerprinting used for background checks required by employers, licensing boards, and government agencies. Your fingerprints are captured digitally and submitted securely to the California Department of Justice and, when required, the FBI.',
      },
      {
        id: 'ls-need',
        q: 'What do I need for my Live Scan appointment?',
        a: 'You need a completed Request for Live Scan form from the agency requesting your fingerprints and a valid government issued photo ID. The form lists the ORI number and billing codes we need to process your submission correctly.',
      },
      {
        id: 'ls-ori',
        q: 'What is an ORI number and where do I get it?',
        a: 'An ORI number is the identifier for the agency that receives your fingerprint results, and it appears on your Request for Live Scan form. The agency or employer requesting your background check provides this form and number, so contact them if you do not have it yet.',
      },
      {
        id: 'ls-cost',
        q: 'How much does Live Scan cost?',
        a: 'The total cost combines our rolling fee with the state and federal processing fees set by the Department of Justice. We confirm the full amount before your appointment so there are no surprises.',
      },
      {
        id: 'ls-results',
        q: 'How long until results are sent?',
        a: 'Results are typically transmitted to the requesting agency within a few business days, though timing depends on the agency and the type of check. We submit your fingerprints electronically the same day so processing can begin right away.',
      },
    ],
  },
  {
    key: 'insurance',
    label: 'Insurance',
    items: [
      {
        id: 'ins-types',
        q: 'What types of insurance do you offer?',
        a: 'We offer life, health, property, casualty, and business insurance through Signed Insurance Solutions. We compare several carriers so you can see how each one prices your specific situation and bundle coverage to lower your total premium.',
      },
      {
        id: 'ins-difference',
        q: 'What is the difference between term, whole, and indexed universal (IUL) life insurance?',
        a: 'Term life covers you for a set number of years and costs less, whole life lasts your entire life and builds cash value, and an IUL is permanent coverage whose cash value growth is tied to a market index with a floor that protects you from losses. The right choice depends on your budget and how long you need the coverage.',
      },
      {
        id: 'ins-job',
        q: 'Do I need life insurance if I already have it through my job?',
        a: 'Often yes. Employer coverage usually ends when you leave the job and the amount is rarely enough for a family. A personal policy stays with you and can be sized to your actual needs.',
      },
      {
        id: 'ins-quote',
        q: 'How do I get an insurance quote?',
        a: 'Request a quote by calling us or filling out the quote form on our insurance page, and we will compare several carriers for you. There is no pressure and no obligation, just an honest conversation about your options.',
      },
      {
        id: 'ins-samebiz',
        q: 'Is your insurance the same business as the notary service?',
        a: 'No. Insurance solicitations are conducted under the registered fictitious business name Signed Insurance Solutions, a DBA of Signed and Secured, in the State of California. The notary and insurance services share the same team but operate under separate business names.',
      },
    ],
  },
  {
    key: 'travel',
    label: 'Travel',
    items: [
      {
        id: 'trv-what',
        q: 'What is your travel service?',
        a: 'Our travel service covers two things: notarizing documents you need while you are away, and helping you book flights and hotels. Shyreese handles most bookings herself and coordinates with a trusted outside agency when that gets you a better option.',
      },
      {
        id: 'trv-international',
        q: 'Can you help with documents I need while traveling internationally?',
        a: 'Yes. We can notarize travel documents such as parental consent forms and powers of attorney, and facilitate apostille certification when a document needs to be recognized abroad. Let us know your destination and timeline so we can prepare the right paperwork.',
      },
      {
        id: 'trv-start',
        q: 'How do I get started with travel support?',
        a: 'Get started by calling Shyreese or requesting travel booking help through our travel page. You do not need to buy travel insurance to use the booking service, and any booking fee is separate from the cost of your flight or hotel.',
      },
    ],
  },
  {
    key: 'booking',
    label: 'Booking and experience',
    items: [
      {
        id: 'book-how',
        q: 'How do I book an appointment?',
        a: `Book online through the appointment form or call us at ${PHONE_DISPLAY}. Tell us the service you need, your location, and your preferred time, and we will confirm the details with you.`,
      },
      {
        id: 'book-after',
        q: 'What happens after I book?',
        a: 'After you book, you receive a confirmation with your appointment time and a reminder of what to bring. We arrive at your chosen location, complete the service in person, and follow up if anything else is needed.',
      },
      {
        id: 'book-payment',
        q: 'What payment methods do you accept?',
        a: 'We accept major credit and debit cards along with common digital payment options. Full pricing is confirmed before your appointment, so you always know the cost in advance.',
      },
    ],
  },
  {
    key: 'why',
    label: 'Why choose us',
    items: [
      {
        id: 'why-different',
        q: 'What makes Signed and Secured different?',
        a: 'We bring notary, Live Scan, apostille, travel, and insurance services together with a real person you can call by name. We come to you throughout the Sacramento area, quote costs transparently up front, and offer same day and evening availability.',
      },
      {
        id: 'why-licensed',
        q: 'Are you licensed and insured?',
        a: 'Yes. Our notary is commissioned by the State of California and carries errors and omissions insurance, and our insurance work is licensed under Signed Insurance Solutions. Every signature and seal meets legal requirements for courts, lenders, and government agencies.',
      },
      {
        id: 'why-recommend',
        q: 'Why do clients recommend you?',
        a: 'Clients recommend us because we show up on time, explain each step clearly, and treat sensitive documents with care. Our combination of convenience, transparent pricing, and personal service keeps people coming back and referring their friends and family.',
      },
    ],
  },
]

// Six most commonly asked questions pulled from across every category. Each is a
// tappable shortcut that switches to the right category and opens that answer.
const TOP_QUESTIONS: { label: string; id: string }[] = [
  { label: 'How much does mobile notary service cost?', id: 'mob-fees' },
  { label: 'Do you come to me?', id: 'gen-mobile' },
  { label: 'How quickly can I schedule an appointment?', id: 'gen-quickly' },
  { label: 'What do I need to bring to my Live Scan appointment?', id: 'ls-need' },
  { label: 'What areas do you serve?', id: 'gen-areas' },
  { label: 'How do I get an insurance quote?', id: 'ins-quote' },
]

const FILTERS = [{ key: 'all', label: 'All' }, ...CATEGORIES.map((c) => ({ key: c.key, label: c.label }))]

const FAQ_QUICK_LINKS: QuickLink[] = [
  {
    label: 'Top',
    href: '#top-questions',
    icon: <path d="M12 19V6M6 11l6-6 6 6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    label: 'Browse',
    href: '#browse',
    icon: <path d="M4 6h16M4 12h16M4 18h10" strokeWidth="1.6" strokeLinecap="round" />,
  },
  {
    label: 'Ask',
    href: '#ask',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
        <path d="M4 7l8 6 8-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

const inputClass =
  "w-full rounded-[8px] border-[0.667px] border-[#829bc4] bg-white px-4 font-['Inter:Regular',sans-serif] text-[16px] text-[#0b1245] outline-none placeholder:text-[#829bc4] focus:border-[#9a804c]"

// ─── Accordion row ───────────────────────────────────────────────────────────

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9a804c"
      className={`size-5 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function QuestionRow({
  item,
  first,
  isOpen,
  onToggle,
}: {
  item: QaItem
  first: boolean
  isOpen: boolean
  onToggle: () => void
}) {
  const panelId = `panel-${item.id}`
  const btnId = `btn-${item.id}`
  return (
    <div id={item.id} className={`scroll-mt-28 ${first ? '' : 'border-t border-[#e0e0e0]'}`}>
      <h3 className="m-0">
        <button
          id={btnId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex min-h-[48px] w-full items-center justify-between gap-4 px-5 py-3.5 text-left transition-colors hover:bg-[rgba(130,155,196,0.08)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#9a804c]"
        >
          <span className="font-['Inter:Medium',sans-serif] text-[16px] leading-[1.4] text-[#0b1245]">
            {item.q}
          </span>
          <Chevron open={isOpen} />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        hidden={!isOpen}
        className="px-5 pb-4"
      >
        <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[1.75] text-[#365485]">{item.a}</p>
      </div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Faq() {
  usePageMeta({ title: 'Frequently Asked Questions | Signed & Secured', description: 'Answers about mobile notary, apostille, Live Scan, and insurance services in Sacramento, including booking, travel, hours, and pricing.' })
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [open, setOpen] = useState<Set<string>>(new Set())

  const q = query.trim().toLowerCase()

  const visibleCategories = useMemo(() => {
    return CATEGORIES.map((cat) => {
      const items = cat.items.filter(
        (it) => q === '' || (it.q + ' ' + it.a).toLowerCase().includes(q),
      )
      // When searching, show every category that has matches regardless of filter.
      const inFilter = q !== '' || activeCategory === 'all' || activeCategory === cat.key
      return { cat, items, show: inFilter && items.length > 0 }
    }).filter((entry) => entry.show)
  }, [q, activeCategory])

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const jumpToQuestion = (id: string) => {
    const cat = CATEGORIES.find((c) => c.items.some((it) => it.id === id))
    setQuery('')
    if (cat) setActiveCategory(cat.key)
    setOpen((prev) => new Set(prev).add(id))
    // Wait for the category to render, then scroll the answer into view.
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 60)
  }

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="bg-white">
      <SiteHeader activeLabel="FAQ" />

      {/* FAQPage structured data mirroring the visible questions and answers. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: CATEGORIES.flatMap((c) =>
              c.items.map((it) => ({
                '@type': 'Question',
                name: it.q,
                acceptedAnswer: { '@type': 'Answer', text: it.a },
              })),
            ),
          }),
        }}
      />

      <main id="top">
        {/* Hero */}
        <section className="border-b border-[#e0e0e0] bg-[#0b1245]">
          <div className={`${WRAP} py-12 text-center sm:py-16`}>
            <p className="mb-3 font-['Inter:Regular',sans-serif] text-[13px] uppercase tracking-[0.12em] text-[#b39257]">
              Help center
            </p>
            <h1 className="mx-auto max-w-[820px] font-['Inter:Medium',sans-serif] text-[28px] leading-[1.25] text-white sm:text-[38px]">
              Frequently asked questions about notary, apostille, Live Scan, and insurance in Sacramento
            </h1>
            <p className="mx-auto mt-4 max-w-[560px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#cdd8ec]">
              Quick answers about how we work, what to bring, and what things cost. Prefer to talk it through? Call us anytime.
            </p>
          </div>
        </section>

        {/* Search and call row */}
        <section className="border-b border-[#e0e0e0] bg-white">
          <div className={`${WRAP} py-5`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <label className="relative flex-1">
                <span className="sr-only">Search questions</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#829bc4"
                  className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2"
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="7" strokeWidth="1.7" />
                  <path d="M20 20l-3.2-3.2" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions"
                  className={`${inputClass} h-[52px] pl-12`}
                />
              </label>
              <a
                href={PHONE_TEL}
                className="flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-[8px] bg-[#b39257] px-6 font-['Inter:Medium',sans-serif] text-[16px] text-black transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-5" aria-hidden>
                  <path
                    d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* Top questions */}
        <section id="top-questions" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
          <div className={`${WRAP} py-10`}>
            <div className="mx-auto max-w-[820px] rounded-[10px] border-[0.667px] border-[#829bc4] bg-[rgba(130,155,196,0.08)] p-5 sm:p-7">
              <h2 className="font-['Inter:Medium',sans-serif] text-[22px] leading-[1.3] text-[#0b1245] sm:text-[24px]">
                Top questions
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {TOP_QUESTIONS.map((t) => (
                  <li key={t.id}>
                    <button
                      type="button"
                      onClick={() => jumpToQuestion(t.id)}
                      className="flex min-h-[48px] w-full items-center gap-3 rounded-[8px] border-[0.667px] border-[#e0e0e0] bg-white px-4 py-2 text-left transition-colors hover:border-[#9a804c] hover:bg-[rgba(179,146,87,0.06)] focus-visible:outline-2 focus-visible:outline-[#9a804c]"
                    >
                      <span
                        className="flex size-4 shrink-0 items-center justify-center rounded-full border-[0.667px] border-[#d5d5d5] bg-[#f0f0f0]"
                        aria-hidden
                      >
                        <span className="size-1.5 rounded-full bg-[#9a804c]" />
                      </span>
                      <span className="font-['Inter:Regular',sans-serif] text-[16px] leading-[1.4] text-[#0b1245]">
                        {t.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Category filter + question list */}
        <section id="browse" className="scroll-mt-24 border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
          <div className={`${WRAP} py-10 sm:py-14`}>
            {/* Mobile: horizontally scrollable pills */}
            <div className="lg:hidden">
              <p className="mb-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#365485]">Browse by category</p>
              <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {FILTERS.map((f) => {
                  const active = activeCategory === f.key
                  return (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setActiveCategory(f.key)}
                      className={`flex min-h-[48px] shrink-0 items-center whitespace-nowrap rounded-full border px-4 font-['Inter:Medium',sans-serif] text-[16px] transition-colors ${
                        active
                          ? 'border-[#0b1245] bg-[#0b1245] text-white'
                          : 'border-[#829bc4] bg-white text-[#0b1245] hover:border-[#9a804c]'
                      }`}
                    >
                      {f.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
              {/* Desktop: sticky sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <p className="mb-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#365485]">Browse by category</p>
                  <ul className="flex flex-col gap-1">
                    {FILTERS.map((f) => {
                      const active = activeCategory === f.key
                      return (
                        <li key={f.key}>
                          <button
                            type="button"
                            onClick={() => setActiveCategory(f.key)}
                            className={`flex min-h-[48px] w-full items-center rounded-[8px] px-4 text-left font-['Inter:Medium',sans-serif] text-[16px] transition-colors ${
                              active
                                ? 'bg-[#0b1245] text-white'
                                : 'text-[#0b1245] hover:bg-white'
                            }`}
                          >
                            {f.label}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </aside>

              {/* Content column */}
              <div className="mt-6 lg:mt-0">
                {visibleCategories.length === 0 ? (
                  <div className="rounded-[10px] border-[0.667px] border-[#829bc4] bg-white p-8 text-center">
                    <p className="font-['Inter:Medium',sans-serif] text-[16px] text-[#0b1245]">
                      No questions match your search
                    </p>
                    <p className="mt-2 font-['Inter:Regular',sans-serif] text-[16px] leading-[1.6] text-[#365485]">
                      Try a different word, or call us at {PHONE_DISPLAY} and we will help you directly.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-8">
                    {visibleCategories.map(({ cat, items }) => (
                      <div key={cat.key}>
                        <h2 className="mb-4 font-['Inter:Medium',sans-serif] text-[24px] leading-[1.3] text-[#0b1245] sm:text-[28px]">
                          {cat.label}
                        </h2>
                        <div className="overflow-hidden rounded-[10px] border-[0.667px] border-[#829bc4] bg-white">
                          {items.map((it, i) => (
                            <QuestionRow
                              key={it.id}
                              item={it}
                              first={i === 0}
                              isOpen={open.has(it.id)}
                              onToggle={() => toggle(it.id)}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Back to top */}
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={scrollTop}
                    className="inline-flex min-h-[48px] items-center gap-2 font-['Inter:Medium',sans-serif] text-[16px] text-[#9a804c] underline underline-offset-4 hover:text-[#0b1245]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-4" aria-hidden>
                      <path d="M12 19V6M6 11l6-6 6 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to top
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Still have a question */}
        <section id="ask" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
          <div className={`${WRAP} py-14`}>
            <div className="mx-auto max-w-[640px] rounded-[10px] border-[0.667px] border-[#829bc4] bg-[rgba(130,155,196,0.08)] p-6 sm:p-8">
              <h2 className="text-center font-['Inter:Medium',sans-serif] text-[24px] leading-[1.3] text-[#9a804c]">
                Still have a question?
              </h2>
              <p className="mx-auto mt-2 max-w-[420px] text-center font-['Inter:Regular',sans-serif] text-[16px] leading-[1.6] text-[#365485]">
                Send it our way and we will get back to you within 24 hours, usually much sooner.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="/contact">
                  <GoldButton className="!px-6 !py-3 !text-[14px]">Contact us</GoldButton>
                </a>
                <a
                  href={PHONE_TEL}
                  className="rounded-[8px] border border-[#829bc4] bg-white px-6 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245] transition-colors hover:border-[#9a804c] hover:text-[#9a804c]"
                >
                  Call us {PHONE_DISPLAY_PLAIN}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA banner */}
        <section id="cta" className="border-b border-[#333] bg-[#0b1245]">
          <div className={`${WRAP} flex flex-col items-center py-20 text-center`}>
            <h2 className="font-['Inter:Medium',sans-serif] text-[36px] leading-[1.25] text-white sm:text-[42px]">
              Ready to get started?
            </h2>
            <p className="mt-4 max-w-[520px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#fffaf0]">
              Book online or call us directly. We are here to help with notary, Live Scan, apostille, travel, and insurance needs.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="/services#booking">
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
      <FloatingQuickNav links={FAQ_QUICK_LINKS} />
    </div>
  )
}
