Rebuild the Services page, src/pages/Services.tsx, which is the Services Overview page at /services, into a true services overview hub. Reuse the existing shared components, SiteHeader, SiteFooter, FloatingQuickNav, GoldBullet, the shared layout wrapper, and the existing button styles, and match the established design system exactly, colors, fonts, icon style, spacing, card styles. Do not introduce any new visual language. Do not use hyphens or dashes anywhere in any copy or label, use spaces, commas, or periods.

The goal, based on Nielsen Norman Group gateway page guidance and Baymard category page research: this page is for the visitor who is not yet sure which service they need and wants to see everything in one place. Its job is to orient and route, not to sell one service in depth. Anyone who already knows what they want reaches the specific service directly from the Services dropdown, so this page must not repeat deep service content.

Content that must move off this page, not be deleted:

The current page contains deep notary and apostille content, specifically the Documents we notarize section, the How it works steps, the What to bring to your appointment section, the Apostille services for international documents section, the Transparent pricing comparison, and the notary specific Common questions. This depth does not belong on an overview. Move each of these sections to the Mobile Notary page at /notary if it does not already exist there, so no content is lost. Move the Apostille services section to the Mobile Notary page as well and give that section the id apostille, so it can be linked as /notary#apostille. Only after confirming each section exists on the Mobile Notary page should it be removed from the Services page.

Because the Apostille section is moving to the Mobile Notary page, update the Services dropdown in SiteHeader so the Apostille item now links to /notary#apostille instead of /services#apostille.

New structure for the Services Overview page, top to bottom:

1. A compact hero. A short eyebrow label, a single clear H1 written in search natural language such as Notary, apostille, live scan, loan signing, insurance, and travel services in Sacramento, and one supporting sentence. Keep this hero short with no large image that pushes the content below it down the page, because the service grid needs to be visible high on the page. Baymard names a hero that pushes the navigation below the fold as the single most damaging category page mistake.

2. The service grid, the core of the page, placed immediately below the hero. Six cards in one uniform grid, each card with an identifying icon that visually signals that service and is not merely decorative, a plain customer language name as an H3, one sentence describing it, one concrete fact, and a clear link. Use these six:

Mobile Notary, link to /notary. Description: Mobile notarization of trusts, deeds, powers of attorney, and other documents at your home, office, hospital, or care facility. Fact: Starting at $15 per signature.

Apostille, link to /notary#apostille. Description: Authentication of documents so they can be used in countries that are part of the Hague Convention. Fact: For documents headed abroad.

Live Scan Fingerprinting, link to /contact. Description: Digital fingerprinting sent electronically to the FBI and DOJ for employment, licensing, and volunteer background checks. Fact: By appointment. Add a code comment noting a dedicated Live Scan page should be built and this link repointed to it later.

Loan Signing, link to /contact. Description: Certified loan signing for refinances, purchases, and reverse mortgages, with each page explained before you sign. Fact: Certified loan signing agent. Add a code comment noting a dedicated Loan Signing page should be built and this link repointed to it later.

Insurance, link to /insurance. Description: Life, health, property, casualty, business, bonds, and travel coverage, with custom quotes and no obligation. Fact: Custom quotes, no obligation.

Travel, link to /travel. Description: Flight and hotel booking help handled directly or through a trusted travel agency partner. Fact: Available with or without travel insurance.

3. A short not sure what you need helper strip. One friendly line reassuring the visitor that they do not have to know the right service name, with a Call us tap to call link using tel:+19167610211 displayed as 916 761 0211 and a Contact us link to /contact. This serves the individual client who is not comfortable navigating on their own.

4. A business strip titled for title companies, lenders, and real estate professionals, one or two sentences, with a single button linking to /contact. This serves business clients. If this content already exists on the current page, reuse its copy.

5. A light trust row using the gold ring bullet style, Bonded and insured, Certified loan signing agent, Evenings and weekends available.

6. Keep the shared Service Area component as is, since showing coverage fits an overview.

7. A closing call to action band matching the existing homepage and About CTA style, with a Book appointment button opening https://calendly.com/signedsecured-info/30min in a new tab with rel noopener noreferrer, and a Contact us button linking to /contact.

Do not add a notary specific FAQ to this page, since a dedicated FAQ page already exists. 

SEO and AIO: exactly one H1 on this page, the six service names as H3 under a section H2, search natural and location aware phrasing, specific facts over vague claims, and a short alt text note on each service icon describing what it depicts.

For the floating quick nav on this page, set its jump links to Services, Why Us, Service Area, and Contact, matching the existing glass style and behavior, only the destinations change.

Do not modify the Home, About, Insurance, or Travel pages beyond what is required to move the notary and apostille content onto the Mobile Notary page, and do not change any shared component other than the single Apostille dropdown link update described above.