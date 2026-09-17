/** Layout max-width wrapper — apply as a className alongside page-specific padding. */
export const WRAP = 'mx-auto w-full max-w-[1120px] px-6'

export function GoldButton({ children, className = '' }: { children: string; className?: string }) {
  return (
    <button
      type="button"
      className={`rounded-[8px] bg-[#b39257] px-5 py-2.5 font-['Inter:Medium',sans-serif] text-[14px] text-black transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  )
}
