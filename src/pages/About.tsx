import { ArrowIcon } from '../components/BrandSvg'
import { usePageMeta } from '../hooks/usePageMeta'
import { WRAP, GoldButton } from '../components/shared'
import { GoldBullet } from '../components/GoldBullet'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { FloatingQuickNav, type QuickLink } from '../components/FloatingQuickNav'
import { ServiceArea } from '../components/ServiceArea'
import { PHONE_TEL, PHONE_DISPLAY, CALENDLY_URL } from '../constants/contact'

import shyreesePhoto from '../imports/paste_152ff671-79f7-4639-b7e0-d639b24a31e2.png'
import whyBg from '../imports/HomePgDesktopWireFrame/0c55b70a3cf415482562bc3f38e1a61e3af9f320.png'
import whyIcon1 from '../imports/HomePgDesktopWireFrame/126cf5d604198ddf1e082a5b8545db058f5c8800.png'
import whyIcon2 from '../imports/HomePgDesktopWireFrame/2ee81b8cf573930f45d4c9426417b3574aa9a354.png'
import whyIcon3 from '../imports/HomePgDesktopWireFrame/c18cce57ae4e58e238335fdac8bf1924a43aeb95.png'

const HERO_POINTS = ['Bonded and insured', 'Certified loan signing agent', 'Evenings and weekends available']

/** Bottom quick-nav anchors specific to the About page sections. */
const ABOUT_QUICK_LINKS: QuickLink[] = [
  {
    label: 'Her Story',
    href: '#story',
    icon: (
      <>
        <path d="M4 5h11a2 2 0 0 1 2 2v12H6a2 2 0 0 1-2-2V5z" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17 7h3v12H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Services',
    href: '#services',
    icon: <path d="M4 6h16M4 12h16M4 18h10" strokeWidth="1.6" strokeLinecap="round" />,
  },
  {
    label: 'Why Us',
    href: '#why',
    icon: (
      <path
        d="M9 12.5l2 2 4-4.5M12 3.5l6 2.2v5.3c0 4.1-2.7 6.9-6 8-3.3-1.1-6-3.9-6-8V5.7L12 3.5z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: 'Service Area',
    href: '#service-area',
    icon: (
      <>
        <path d="M12 21s6.5-5.2 6.5-10a6.5 6.5 0 1 0-13 0C5.5 15.8 12 21 12 21z" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="2.2" strokeWidth="1.5" />
      </>
    ),
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
        <path d="M4 7l8 6 8-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

function Hero() {
  return (
    <section id="top" className="border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20`}>
        <div>
          <span className="inline-block rounded-[8px] border-[0.667px] border-[#829bc4] bg-[#f5f5f5] px-3 py-1.5 font-['Inter:Regular',sans-serif] text-[12px] text-[#365485]">
            About Signed &amp; Secured
          </span>

          <h1 className="mt-5 max-w-[460px] font-['Inter:Medium',sans-serif] text-[34px] leading-[1.25] text-[#0b1245] sm:text-[40px]">
            A mobile notary who comes to you.
          </h1>

          <p className="mt-4 max-w-[460px] font-['Inter:Medium',sans-serif] text-[15px] leading-[1.75] text-[#365485]">
            Signed and Secured is a mobile notary service run by Shyreese Tyiska, a commissioned California Notary Public
            and licensed insurance agent serving Sacramento, Placer, and El Dorado counties. She handles notarizations,
            apostille authentication, Live Scan fingerprinting, loan signings, and insurance, traveling to homes,
            offices, hospitals, and care facilities by appointment.
          </p>

          <p className="mt-4 max-w-[460px] font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#365485]">
            Appointments are available in the evenings after 6:30 PM and on weekends, so paperwork fits around your day
            instead of the other way around.
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
            For more information call {PHONE_DISPLAY}
          </p>
        </div>

        <div className="relative">
          <img
            src={shyreesePhoto}
            alt="Shyreese Tyiska, owner of Signed and Secured"
            className="aspect-[4/5] w-full rounded-[10px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}

function HerStory() {
  return (
    <section id="story" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <span className="inline-block rounded-[8px] border-[0.667px] border-[#d5d5d5] bg-white px-3 py-1.5 font-['Inter:Regular',sans-serif] text-[12px] text-[#365485]">
          In her own words
        </span>
        <h2 className="mt-5 max-w-[520px] font-['Inter:Medium',sans-serif] text-[32px] leading-[1.25] text-[#0b1245]">
          Her story
        </h2>

        <blockquote className="mt-6 max-w-[560px] border-l-2 border-[#b39257] pl-5 font-['Inter:Medium',sans-serif] text-[18px] leading-[1.5] text-[#0b1245]">
          I want every client to feel respected, comfortable, informed, and confident.
        </blockquote>

        <div className="mt-6 flex max-w-[560px] flex-col gap-4">
          <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
            I started Signed and Secured because I saw how stressful important paperwork and compliance needs become when
            people do not know where to start or who they can trust. I wanted to build a reliable, professional service
            that makes those moments easier for individuals, families, and businesses across the Sacramento area.
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
            My background is rooted in service, compliance, and administration. I worked for the federal government,
            became a licensed insurance agent, and I continue to pursue professional certifications and training so I can
            expand what Signed and Secured is able to handle. I have worked with individual families as well as clients
            connected to HUD and tribal organizations, and those experiences are a big part of why dependable, accessible
            service matters to me.
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
            What I care about most is the person in front of me. When someone trusts me with an important document or
            their family&apos;s paperwork, they are not just another appointment. My philosophy is to never assume someone
            already knows how the process works. I explain what I can, tell you what to expect, and help you understand
            your next step, so you leave feeling genuinely taken care of rather than simply processed.
          </p>
        </div>
      </div>
    </section>
  )
}

const SERVICES = [
  {
    title: 'Mobile notary and apostille',
    href: '/services',
    body: 'Notarization of trusts, deeds, and other documents at your location, plus apostille authentication for records headed to another country.',
  },
  {
    title: 'Live Scan',
    href: '/services',
    body: 'Digital fingerprinting for FBI and DOJ background checks, used for employment, licensing, and volunteer clearances.',
  },
  {
    title: 'Insurance',
    href: '/insurance',
    body: 'Life, property, casualty, and business coverage quoted to fit your situation, with no pressure and no obligation.',
  },
  {
    title: 'Loan signing',
    href: '/services',
    body: 'Certified loan signing for refinances, purchases, and reverse mortgages, walking you through each page before you sign.',
  },
  {
    title: 'Travel',
    href: '/services',
    body: 'Signings and authentications coordinated around your schedule when you are away from home or out of the area.',
  },
]

function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <div className={`${WRAP} py-16`}>
        <span className="inline-block rounded-[8px] border-[0.667px] border-[#829bc4] bg-white px-3 py-1.5 font-['Inter:Regular',sans-serif] text-[12px] text-[#365485]">
          What she offers
        </span>
        <h2 className="mt-5 max-w-[560px] font-['Inter:Medium',sans-serif] text-[28px] leading-[1.3] text-[#0b1245]">
          Five services, one point of contact
        </h2>
        <p className="mt-3 max-w-[560px] font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#365485]">
          Everything Signed &amp; Secured handles, in one place. Follow any link for full details and pricing.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <article
              key={svc.title}
              className="flex flex-col rounded-[8px] border-[0.667px] border-[#d5d5d5] bg-white p-5"
            >
              <div className="flex items-start gap-3">
                <GoldBullet />
                <h3 className="font-['Inter:Medium',sans-serif] text-[15px] leading-[1.35] text-[#0b1245]">
                  {svc.title}
                </h3>
              </div>
              <p className="mt-3 flex-1 font-['Inter:Regular',sans-serif] text-[13px] leading-[1.7] text-[#365485]">
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
    title: 'Evenings and weekends',
    icon: whyIcon2,
    body: 'Available after 6:30 PM any night. Your schedule matters more than ours.',
  },
  {
    title: 'Education, not just service',
    icon: whyIcon3,
    body: 'She takes the time to explain the process, so you feel confident and informed, never rushed or overwhelmed.',
  },
  {
    title: 'A real person, not a call center',
    icon: whyIcon1,
    body: 'You work directly with Shyreese from the first call to the last signature. No rotating staff, no phone tree, just one notary who knows your file.',
  },
]

function WhyTrust() {
  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden border-b border-[#829bc4] bg-[rgba(130,155,196,0.25)]">
      <img src={whyBg} alt="" aria-hidden className="pointer-events-none absolute inset-0 size-full object-cover opacity-25" />
      <div className={`${WRAP} relative grid gap-10 py-16 lg:grid-cols-2`}>
        <div>
          <span className="inline-block rounded-[8px] border-[0.667px] border-[#d5d5d5] bg-white px-3 py-1.5 font-['Inter:Regular',sans-serif] text-[12px] text-[#365485]">
            What sets her apart
          </span>
          <h2 className="mt-5 max-w-[340px] font-['Inter:Medium',sans-serif] text-[32px] leading-[1.25] text-[#0b1245]">
            Why clients trust Signed and Secured
          </h2>
          <p className="mt-5 font-['Inter:Regular',sans-serif] text-[15px] leading-[1.75] text-[#365485]">
            She shows up on time, explains every step, and stays until the job is done right. No pressure, no confusion.
            Just clear, professional service wherever you need it.
          </p>
          <hr className="my-6 border-[#fffaf0]" />
          <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.7] text-[#365485]">
            Four things clients count on every time they call.
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
            {PHONE_DISPLAY}
          </a>
          .
        </p>
        <button
          type="button"
          className="mt-6 rounded-[8px] bg-white px-8 py-3 font-['Inter:Medium',sans-serif] text-[15px] text-[#0b1245]"
        >
          Schedule an appointment
        </button>
      </div>
    </section>
  )
}

export default function About() {
  usePageMeta({ title: 'About Signed & Secured | Mobile Notary Serving Sacramento', description: 'Meet Shyreese, a bonded and insured mobile notary who comes to your home, office, hospital, or care facility across the greater Sacramento area, seven days a week.' })
  return (
    <div className="bg-white">
      <SiteHeader activeLabel="About" />
      <main>
        <Hero />
        <HerStory />
        <ServicesOverview />
        <WhyTrust />
        <ServiceArea />
        <CTA />
      </main>
      <SiteFooter />
      <FloatingQuickNav links={ABOUT_QUICK_LINKS} />
    </div>
  )
}
