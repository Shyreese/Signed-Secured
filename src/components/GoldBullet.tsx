/**
 * Gold ring bullet — outer ring with neutral border/fill, solid gold center dot.
 * Use inside a flex row with gap-2 or gap-3 alongside the list item text.
 */
export function GoldBullet() {
  return (
    <span className="flex size-4 shrink-0 items-center justify-center rounded-full border-[0.667px] border-[#d5d5d5] bg-[#f0f0f0]">
      <span className="size-1.5 rounded-full bg-[#9a804c]" />
    </span>
  )
}
