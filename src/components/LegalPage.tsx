import { WRAP } from './shared'
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY_PLAIN, PHONE_TEL } from '../constants/contact'

export interface LegalSection {
  /** Optional H2 heading for the section. Omit for the intro paragraph. */
  h?: string
  /** Body copy for the section. Omit when using `contact`. */
  body?: string
  /**
   * Lead text for a contact section. When set, the email and phone are
   * appended as tap ready links after this prefix.
   */
  contact?: string
}

/**
 * Simple, readable legal text page: one H1, a last updated line, and a
 * comfortable reading column of H2 sections with generous spacing.
 */
export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <main className="bg-white">
      <div className={`${WRAP} py-16 sm:py-20`}>
        <div className="mx-auto max-w-[720px]">
          <h1 className="font-['Inter:Medium',sans-serif] text-[32px] leading-[1.2] text-[#0b1245] sm:text-[40px]">
            {title}
          </h1>
          <p className="mt-3 font-['Inter:Regular',sans-serif] text-[14px] text-[#829bc4]">
            Last updated 9/1/2026
          </p>

          <div className="mt-10 flex flex-col gap-8">
            {sections.map((section, i) => (
              <section key={section.h ?? `intro-${i}`}>
                {section.h && (
                  <h2 className="font-['Inter:Medium',sans-serif] text-[20px] leading-[1.3] text-[#0b1245]">
                    {section.h}
                  </h2>
                )}
                <p
                  className={`font-['Inter:Regular',sans-serif] text-[16px] leading-[1.8] text-[#365485] ${
                    section.h ? 'mt-3' : ''
                  }`}
                >
                  {section.contact !== undefined ? (
                    <>
                      {section.contact ? `${section.contact} ` : ''}
                      <a
                        href={EMAIL_HREF}
                        className="font-['Inter:Medium',sans-serif] text-[#9a804c] underline underline-offset-2 hover:text-[#0b1245]"
                      >
                        {EMAIL}
                      </a>{' '}
                      or{' '}
                      <a
                        href={PHONE_TEL}
                        className="font-['Inter:Medium',sans-serif] text-[#9a804c] underline underline-offset-2 hover:text-[#0b1245]"
                      >
                        {PHONE_DISPLAY_PLAIN}
                      </a>
                      .
                    </>
                  ) : (
                    section.body
                  )}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
