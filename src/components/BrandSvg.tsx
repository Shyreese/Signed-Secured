import svgPaths from '../imports/HomePgDesktopWireFrame/svg-86czh3pnd6'

// Brand logo marks and small icons, reusing the exact vector paths from the
// Figma import's svg path file (referenced, not redrawn). Colors and path
// data are preserved from the design system.

const largeMarkGold = [
  'p2e4e2300', 'p37d0a700', 'pa5d2200', 'p94d8180', 'p1739ea00', 'p2e303c00',
  'p1e255e80', 'p2abfc880', 'p16b85d00', 'p1241d000', 'p31a0800', 'p38ad7500',
  'p942b9c0', 'p3bada400', 'p380f0c80', 'p54bac00', 'p10853900', 'p2e8fde00',
  'p8284c00', 'p31a05380',
] as const
const largeMarkGroupGold = [
  'p23880b00', 'p3d355740', 'p69c2240', 'p3b317280', 'p14a7fd00', 'p6885180',
  'p2ffdb080', 'p15286440', 'p3fefd680', 'pcef7d00', 'pb3b5100', 'p1b86857e',
  'p27adb580', 'p2070b000', 'p3fa75200', 'p5e9b900', 'p955ce70', 'p22ffb200',
  'p26fd7000', 'p37178000', 'p1c2c0d70', 'pf557200', 'p14df2ac0', 'pd8ce900',
  'pa7bdb80', 'p3d5a7e00', 'p38309100', 'p1fca7900', 'pe2c6600', 'p8dde100',
] as const

const smallMarkGold = [
  'p31bf0580', 'p374ac480', 'p5f65500', 'p2799cd80', 'pab0f000', 'p31c0ba00',
  'p103c1680', 'p32a708f0', 'p3ef6a000', 'p359cdf00', 'p26b5da80', 'p2f7f6280',
  'p321c8af0', 'p13792a00', 'p3609aa00', 'p2e13f480', 'p9493e70', 'p12d5ba00',
  'p31624480', 'pc2dee80',
] as const
const smallMarkGroupGold = [
  'p1f104f0', 'p8c80f40', 'p671e680', 'p717c980', 'p3243e020', 'p6fbd600',
  'p2ffcfb00', 'p394f4280', 'p335daf00', 'p22361d00', 'p4c6610', 'p3d265c00',
  'p1149b6e0', 'p12f76d80', 'p3f40bf00', 'pe088100', 'p3ee3a280', 'p8225bf0',
  'p8082500', 'p1526a000', 'p3c601480', 'p362edc00', 'p34448390', 'p223a5b80',
  'p6ce4b00', 'p19cf9200', 'pc412d00', 'p17c71a00', 'p1f332600', 'p4783800',
] as const

const path = (k: string) => (svgPaths as Record<string, string>)[k]

// Large mark: gold emblem with a navy center accent (used in the footer).
export function BrandMarkLarge({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 73 73" role="img" aria-label="Signed & Secured logo">
      {largeMarkGold.map((k) => (
        <path key={k} d={path(k)} fill="#D4B242" />
      ))}
      <path d={path('p3eee6700')} fill="#11466E" />
      {largeMarkGroupGold.map((k) => (
        <path key={k} d={path(k)} fill="#D4B242" />
      ))}
    </svg>
  )
}

// Small mark: gold emblem with a white center accent (used in nav + footer brand line).
export function BrandMarkSmall({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 46 46" role="img" aria-label="Signed & Secured logo">
      {smallMarkGold.map((k) => (
        <path key={k} d={path(k)} fill="#D4B242" />
      ))}
      <path d={path('p92c7a00')} fill="white" />
      {smallMarkGroupGold.map((k) => (
        <path key={k} d={path(k)} fill="#D4B242" />
      ))}
    </svg>
  )
}

// "Learn more" chevron used on service cards.
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 12 12" aria-hidden>
      <path d={path('p3bae0f80')} stroke="#0B1245" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
    </svg>
  )
}

// Arrow used on the "Learn more about pricing" links.
export function ArrowIconSlate({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 11 11" aria-hidden>
      <path d={path('p1b279d00')} stroke="#365485" strokeLinecap="round" strokeWidth="1.19167" />
    </svg>
  )
}

// Checkmark inside pricing-plan bullet chips.
export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 11.9965 11.9965" aria-hidden>
      <path d={path('p15a46380')} stroke="#365485" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999708" />
    </svg>
  )
}

// Icon inside the "Pricing" pill above the pricing section heading.
export function PricingBadgeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16" aria-hidden>
      <path d={path('p17f48400')} stroke="#FFFAF0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  )
}
