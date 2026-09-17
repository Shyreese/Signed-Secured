import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { ArrowIcon, ArrowIconSlate, CheckIcon, PricingBadgeIcon } from '../components/BrandSvg'
import { WRAP, GoldButton } from '../components/shared'
import { GoldBullet } from '../components/GoldBullet'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav } from '../components/FloatingQuickNav'
import { ServiceArea } from '../components/ServiceArea'
import { PHONE_TEL, PHONE_DISPLAY_PLAIN, CALENDLY_URL } from '../constants/contact'

import heroBridge from '../imports/HomePgDesktopWireFrame/aa87783af604a1de66aa6f3b783cba2b9789fd3b.png'
import heroPhoto from '../imports/HomePgDesktopWireFrame/859a243ad6153645af03c4fc1173fe4805a8ac1d.png'
import svcNotary from '../imports/HomePgDesktopWireFrame/b4589edf87a158c54a9cc720c11cd141f4541f73.png'
import svcLiveScan from '../imports/HomePgDesktopWireFrame/19bffd945f05e9241f01fc702c752c3584c0797e.png'
import svcInsurance from '../imports/HomePgDesktopWireFrame/912dceeb23a2ac270c4b3d1c8df2c952db9e9e6e.png'
import svcTravel from '../imports/HomePgDesktopWireFrame/34736e57d2aebac7e7ffed1cd09a102a8180be1a.png'
import whyBg from '../imports/HomePgDesktopWireFrame/0c55b70a3cf415482562bc3f38e1a61e3af9f320.png'
import whyIcon1 from '../imports/HomePgDesktopWireFrame/126cf5d604198ddf1e082a5b8545db058f5c8800.png'
import whyIcon2 from '../imports/HomePgDesktopWireFrame/2ee81b8cf573930f45d4c9426417b3574aa9a354.png'
import whyIcon3 from '../imports/HomePgDesktopWireFrame/c18cce57ae4e58e238335fdac8bf1924a43aeb95.png'


const HERO_POINTS = ['Bonded & insured', 'Certified loan signing agent', 'Evenings & weekends available']

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[#e0e0e0] bg-white">
      <img
        src={heroBridge}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full object-cover object-bottom opacity-[0.26]"
      />
      <div className={`${WRAP} relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20`}>
        <div>
          <h1 className="max-w-[420px] font-['Inter:Medium',sans-serif] text-[34px] leading-[1.25] text-[#0b1245] sm:text-[40px]">
            For life&apos;s most important moments.
          </h1>

          <p className="mt-4 max-w-[430px] font-['Inter:Medium',sans-serif] text-[15px] leading-[1.75] text-[#365485]">
            Your trusted mobile notary, apostille, Live Scan, and insurance professional serving Sacramento, Placer, and
            El Dorado counties. We come to you.
          </p>

          <ul className="mt-6 flex flex-col gap-2">
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <GoldBullet />
                <span className="font-['Inter:Bold',sans-serif] text-[13px] text-[#365485]">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <GoldButton className="!py-2.5 !text-[13px]">Schedule an appointment</GoldButton>
            </a>
            <a
              href="/services"
              className="rounded-[8px] border-[0.667px] border-[#829bc4] bg-white px-5 py-2.5 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]"
            >
              Explore services
            </a>
          </div>

          <p className="mt-6 font-['Inter:Regular',sans-serif] text-[13px] text-[#365485]">
            For more information call{' '}
            <a href={PHONE_TEL}>{PHONE_DISPLAY_PLAIN}</a>
          </p>
        </div>

        <div className="relative">
          <img
            src={heroPhoto}
            alt="A couple reviewing and signing documents with a mobile notary at their kitchen table"
            className="w-full rounded-[10px] object-cover shadow-[5px_4px_4px_0px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}

const STATS = [
  { value: '60+', label: 'Notarizations' },
  { value: '35+', label: 'Insurance policies' },
  { value: '3', label: 'Counties served' },
  { value: '5.0★', label: 'Exceptional rating' },
]

function Stats() {
  return (
    <section className="border-b border-[#333] bg-[#0b1245]">
      <div className={`${WRAP} py-8`}>
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-[8px] bg-[#365485] p-4 text-center"
            >
              <dd className="font-['Inter:Regular',sans-serif] text-[26px] text-[#fffaf0]">{stat.value}</dd>
              <dt className="font-['Inter:Regular',sans-serif] text-[12px] text-[#fffaf0]">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

const SERVICES = [
  {
    title: 'Mobile notary & apostille',
    href: '/notary',
    img: svcNotary,
    alt: 'Notary public stamp and seal on legal documents',
    body: 'We travel to you for convenient notarization of trusts, deeds, and loan signings, plus full apostille authentication for documents headed overseas.',
    tint: true,
    tags: ['Mobile', 'From $15'],
  },
  {
    title: 'Live scan fingerprinting',
    href: '/services',
    img: svcLiveScan,
    alt: 'Digital live scan fingerprinting device capturing a fingerprint',
    body: 'Secure, digital fingerprinting for state and federal background checks, done at a location that works for you.',
    tint: false,
    tags: ['Mobile', 'By appointment'],
  },
  {
    title: 'Insurance services',
    href: '/insurance',
    img: svcInsurance,
    alt: 'Family protected under an insurance policy umbrella',
    body: 'Personalized life, health, and property coverage to protect what matters most, with no pressure and no obligation.',
    tint: true,
    tags: ['Custom quote', 'By appointment'],
  },
  {
    title: 'Travel services',
    href: '/travel',
    img: svcTravel,
    alt: 'Passport and travel documents ready for authentication',
    body: "Need documents handled while you're away or abroad? We coordinate signings and authentications around your schedule, wherever you are.",
    tint: false,
    tags: ['Remote', 'By appointment'],
  },
]

function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-14`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Mobile notary, apostille, Live Scan and insurance: all in one place
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((svc) => (
            <article
              key={svc.title}
              className={`flex flex-col rounded-[8px] border-[0.667px] border-[#829bc4] p-5 ${
                svc.tint ? 'bg-[rgba(130,155,196,0.25)]' : 'bg-[#fffaf0]'
              }`}
            >
              <img
                src={svc.img}
                alt={svc.alt}
                className="mx-auto aspect-square w-full rounded-[8px] border-[0.667px] border-[#829bc4] object-cover"
              />
              <h3 className="mt-4 font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">{svc.title}</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border-[0.667px] border-[#829bc4] bg-white px-2.5 py-0.5 font-['Inter:Regular',sans-serif] text-[10px] text-[#365485]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-2 flex-1 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#0b1245]">
                {svc.body}
              </p>
              <a href={svc.href} className="mt-4 inline-flex items-center gap-1">
                <span className="font-['Inter:Italic',sans-serif] text-[12px] italic text-[#0b1245]">Learn more</span>
                <ArrowIcon className="size-3" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const WHY = [
  {
    title: 'We come to you',
    icon: whyIcon1,
    body: 'Mobile service across the greater Sacramento area: your home, your office, or wherever you need us. (remote available)',
  },
  {
    title: 'Evenings & weekends',
    icon: whyIcon2,
    body: 'Available after 6:30 PM any night. Your schedule matters more than ours.',
  },
  {
    title: 'Education, not just service',
    icon: whyIcon3,
    body: 'We take the time to explain the process, so you feel confident and informed, never rushed or overwhelmed.',
  },
]

function WhyTrust() {
  return (
    <section className="relative overflow-hidden border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <img src={whyBg} alt="" aria-hidden className="pointer-events-none absolute inset-0 size-full object-cover opacity-25" />
      <div className={`${WRAP} relative grid gap-10 py-16 lg:grid-cols-2`}>
        <div>
          <span className="inline-block rounded-[8px] border-[0.667px] border-[#d5d5d5] bg-white px-3 py-1.5 font-['Inter:Regular',sans-serif] text-[12px] text-[#365485]">
            What sets us apart
          </span>
          <h2 className="mt-5 max-w-[300px] font-['Inter:Medium',sans-serif] text-[32px] leading-[1.25] text-[#0b1245]">
            Why clients trust Signed &amp; Secured
          </h2>
          <p className="mt-5 font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#365485]">
            We show up on time, explain every step, and stay until the job is done right. No pressure, no confusion. Just clear, professional service wherever you need it.
          </p>
          <hr className="my-6 border-[#fffaf0]" />
          <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.7] text-[#365485]">
            Three things our clients count on every time they call.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {WHY.map((item) => (
            <article key={item.title} className="flex gap-4 rounded-[8px] border-[0.667px] border-[#d5d5d5] bg-white p-5">
              <img
                src={item.icon}
                alt=""
                aria-hidden
                className="size-10 shrink-0 rounded-[8px] border-[0.667px] border-[#d5d5d5] object-cover"
              />
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">{item.title}</h3>
                <p className="mt-1 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const PLANS = [
  {
    title: 'Notary Services',
    price: '$15 per signature',
    sub: 'Price builds based on the number of signatures and documents, final total confirmed before we begin.',
    pricingHref: '/services',
    features: [
      'Mobile service available',
      'Document notarization',
      'Jurat services',
      'Acknowledgment services',
      'Copy certification',
      'Contact us to check same day availability',
      'Travel fee based on distance, starting at $45',
    ],
  },
  {
    title: 'Insurance Plans',
    price: 'Custom Quotes',
    sub: 'Tailored to your needs',
    pricingHref: '/insurance',
    features: [
      'Life insurance coverage',
      'Property & casualty',
      'Bonds',
      'Business insurance',
      'Multiple policy discounts',
      'Health insurance coverage',
    ],
  },
  {
    title: 'Live Scan & Apostille',
    price: '$45 per service',
    sub: 'Price builds based on the number of services and documents needed, final total confirmed before we begin.',
    pricingHref: '/services',
    features: [
      'FBI & DOJ fingerprinting',
      'Employment screening',
      'License applications',
      'Apostille services',
      'Document authentication',
      'Quick processing',
    ],
  },
]

const PACKAGES = [
  'Business packages for frequent notarizations',
  'Multiple policy insurance discounts',
  'Volume pricing for organizations',
]
const PAYMENTS = ['Cash & check', 'Invoicing for business clients', 'Card payments', 'Digital payment apps']

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-white">
      <div className={`${WRAP} py-10`}>
        <div className="rounded-[8px] bg-[#0b1245] p-5 sm:p-7">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#fffaf0] px-4 py-1.5">
              <PricingBadgeIcon className="size-4" />
              <span className="font-['Manrope:Medium',sans-serif] text-[14px] text-[#fffaf0]">Pricing</span>
            </span>
            <h2 className="mt-4 font-['Inter:Medium',sans-serif] text-[26px] leading-[1.2] text-white sm:text-[30px]">
              Transparent Pricing
              <br />
              No Hidden Fees
            </h2>
            <p className="mt-3 max-w-[520px] font-['Manrope:Regular',sans-serif] text-[15px] leading-[1.5] text-[#fffaf0]">
              Clear, upfront pricing with no surprises. We confirm every fee before we begin, so you always know the
              cost in advance.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            {PLANS.map((plan) => (
              <article key={plan.title} className="flex flex-col rounded-[8px] border-[0.667px] border-[#d5d5d5] bg-white p-4">
                <h3 className="font-['Inter:Medium',sans-serif] text-[15px] text-[#0b1245]">{plan.title}</h3>
                <p className="mt-2 font-['Inter:Semi_Bold',sans-serif] text-[20px] font-semibold text-[#9a804c]">
                  {plan.price}
                </p>
                <p className="mt-0.5 font-['Inter:Regular',sans-serif] text-[11px] text-[#1e3a5f]">{plan.sub}</p>
                <div className="mt-4 flex flex-1 gap-3">
                  {[plan.features.filter((_, i) => i % 2 === 0), plan.features.filter((_, i) => i % 2 === 1)].map(
                    (col, ci) => (
                      <ul key={ci} className="flex flex-1 flex-col gap-2">
                        {col.map((feature) => (
                          <li key={feature} className="flex items-start gap-1.5">
                            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#dadada]">
                              <CheckIcon className="size-2.5" />
                            </span>
                            <span className="font-['Manrope:Regular',sans-serif] text-[11px] leading-[1.4] text-[#0b1245]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block"
                >
                  <GoldButton className="w-full !text-[12px]">Book Now</GoldButton>
                </a>
                <a href={plan.pricingHref} className="mt-3 inline-flex items-center justify-center gap-1">
                  <span className="font-['Inter:Regular',sans-serif] text-[11px] text-[#1e3a5f]">
                    See full pricing details
                  </span>
                  <ArrowIconSlate className="size-[10px]" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-4 rounded-[8px] border-[0.667px] border-[#d5d5d5] bg-white p-5">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">Special Packages Available</h3>
                <p className="mt-2 font-['Inter:Regular',sans-serif] text-[12px] leading-[1.6] text-[#1e3a5f]">
                  Title companies, lenders, and care facilities can ask about bundled rates.
                  Contact us and we&apos;ll put together a quote that fits your volume.
                </p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {PACKAGES.map((pkg) => (
                    <li key={pkg} className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#0b1245]" />
                      <span className="font-['Manrope:Regular',sans-serif] text-[12px] text-[#0b1245]">{pkg}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0b1245]">Payment Options</h3>
                <p className="mt-2 font-['Inter:Regular',sans-serif] text-[12px] leading-[1.6] text-[#1e3a5f]">
                  We accept most payment methods. Business clients can request invoicing.
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {PAYMENTS.map((pay) => (
                    <li key={pay} className="flex items-center gap-2">
                      <span className="size-2.5 shrink-0 rounded-[6px] border-[0.667px] border-[#d5d5d5] bg-[#f5f5f5]" />
                      <span className="font-['Inter:Regular',sans-serif] text-[12px] text-[#0b1245]">{pay}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 flex justify-center">
              <a
                href="/contact"
                className="rounded-[8px] bg-[#0b1245] px-6 py-2 font-['Inter:Medium',sans-serif] text-[12px] text-white"
              >
                Request a Custom Quote
              </a>
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
      {[0, 1, 2, 3, 4].map((i) => <span key={i}>★</span>)}
    </div>
  )
}

type ReviewTag = 'Notary' | 'Apostille' | 'Insurance' | 'Loan Signing' | 'Travel'

const REVIEWS: { quote: string; name: string; dark: boolean; stars: boolean; tag: ReviewTag }[] = [
  {
    quote:
      '"We had an excellent experience. This notary responded immediately when we were in an emergency situation. They reviewed our documents in advance and made the whole process easy from start to finish."',
    name: 'Dan G.',
    dark: true,
    stars: true,
    tag: 'Notary',
  },
  {
    quote:
      '"The woman knows what she\'s doing. Very cordial, and she walks you through the process so you\'re never lost or unsure about what\'s happening."',
    name: 'Ronald T.',
    dark: true,
    stars: true,
    tag: 'Notary',
  },
  {
    quote:
      '"Shyreese is an excellent notary. She went above and beyond to provide superb customer service. Our family will be hiring her for future work."',
    name: 'Gloria J.',
    dark: true,
    stars: true,
    tag: 'Notary',
  },
  {
    quote:
      '"She accommodated our evening appointment the same day. Punctual, attentive, and professional. Things were notarized and we mailed them the next day for an out of state emergency."',
    name: 'Greg S.',
    dark: false,
    stars: false,
    tag: 'Notary',
  },
  {
    quote:
      '"I highly recommend Signed & Secured. Their personal service is tailored to your needs. Now I know the best notary in Sacramento."',
    name: 'Ethan D.',
    dark: false,
    stars: false,
    tag: 'Notary',
  },
  {
    quote: '"She explained everything clearly and I felt completely at ease."',
    name: 'Amet Dolor',
    dark: false,
    stars: true,
    tag: 'Notary',
  },
]

const FILTER_TABS = ['All', 'Notary', 'Apostille', 'Insurance', 'Loan Signing', 'Travel'] as const
type FilterTab = (typeof FILTER_TABS)[number]

function Testimonials() {
  const [active, setActive] = useState<FilterTab>('All')
  const visible = active === 'All' ? REVIEWS : REVIEWS.filter((r) => r.tag === active)

  return (
    <section id="reviews" className="scroll-mt-24 border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[32px] leading-[1.25] text-[#0b1245]">
          What clients are saying
        </h2>

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter reviews by service">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              aria-pressed={active === tab}
              onClick={() => setActive(tab)}
              className={`rounded-full border-[0.667px] px-4 py-1.5 font-['Inter:Regular',sans-serif] text-[13px] transition-colors duration-150 ${
                active === tab
                  ? 'border-[#0b1245] bg-[#0b1245] text-white'
                  : 'border-[#829bc4] bg-white text-[#365485] hover:border-[#0b1245] hover:text-[#0b1245]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {visible.map((t) => (
              <figure
                key={t.name}
                className={`flex flex-col gap-4 rounded-[8px] border-[0.667px] border-[#d5d5d5] p-6 ${
                  t.dark ? 'bg-[#0b2145]' : 'bg-white'
                }`}
              >
                {t.stars && <Stars />}
                <blockquote
                  className={`flex-1 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.75] ${
                    t.dark ? 'text-white' : 'text-[#0b1245]'
                  }`}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className={`font-['Inter:Regular',sans-serif] text-[13px] ${
                    t.dark ? 'text-[#fffaf0]' : 'text-[#365485]'
                  }`}
                >
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="mt-8 font-['Inter:Regular',sans-serif] text-[14px] text-[#365485]">
            No reviews yet for this service. Check back soon.
          </p>
        )}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 border-b border-[#333] bg-[#0b1245]">
      <div className={`${WRAP} flex flex-col items-center py-20 text-center`}>
        <h2 className="font-['Inter:Medium',sans-serif] text-[36px] leading-[1.25] text-white sm:text-[42px]">
          Schedule a mobile notary in Sacramento
        </h2>
        <p className="mt-4 font-['Inter:Regular',sans-serif] text-[16px] leading-[1.65] text-[#fffaf0]">
          Evening appointments available. Contact us to check same day availability. Book online or call{' '}
          <a href={PHONE_TEL} className="underline underline-offset-2">
            {PHONE_DISPLAY_PLAIN}
          </a>
          .
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 rounded-[8px] bg-white px-8 py-3 font-['Inter:Medium',sans-serif] text-[15px] text-[#0b1245]"
        >
          Schedule an appointment
        </a>
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta({ title: 'Mobile Notary, Apostille & Live Scan in Sacramento | Signed & Secured', description: 'Signed & Secured is a mobile notary, apostille, Live Scan fingerprinting, and insurance provider serving Sacramento, Placer, and El Dorado counties. Evenings and weekends available. Call (916) 761 0211.' })
  return (
    <div className="bg-white">
      <SiteHeader activeLabel="Home" />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyTrust />
        <Pricing />
        <Testimonials />
        <ServiceArea />
        <CTA />
      </main>
      <SiteFooter />
      <FloatingQuickNav />
    </div>
  )
}
