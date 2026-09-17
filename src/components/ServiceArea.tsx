import { WRAP, GoldButton } from './shared'
import { GoldBullet } from './GoldBullet'
import mapImg from '../imports/HomePgDesktopWireFrame/8708bcdfd6789952b9fc6de2d19885fe1e52a01f.png'

const CITIES = [
  'Sacramento',
  'Rancho Cordova',
  'Folsom',
  'Roseville',
  'Rocklin',
  'Granite Bay',
  'El Dorado Hills',
  'Fair Oaks',
  'Carmichael',
  'Citrus Heights',
  'Elk Grove',
  'Natomas',
]

/** Service Area section: region map, description, gold ring city list, contact prompt. */
export function ServiceArea() {
  return (
    <section id="service-area" className="scroll-mt-24 border-b border-[#e0e0e0] bg-white">
      <div className={`${WRAP} py-16`}>
        <div className="grid gap-10 lg:grid-cols-2">
          <img
            src={mapImg}
            alt="Map of the greater Sacramento region showing the service area across three counties"
            className="aspect-[406/388] w-full rounded-[10px] border border-[#0b1245] object-cover"
          />
          <div>
            <span className="inline-block rounded-[8px] border-[0.667px] border-[#829bc4] bg-[#f5f5f5] px-3 py-1.5 font-['Inter:Regular',sans-serif] text-[12px] text-[#365485]">
              Service Area
            </span>
            <h2 className="mt-4 font-['Inter:Medium',sans-serif] text-[26px] leading-[1.25] text-[#0b1245]">
              Serving the Greater Sacramento area
            </h2>
            <p className="mt-3 font-['Inter:Regular',sans-serif] text-[14px] leading-[1.75] text-[#365485]">
              We travel to homes, offices, hospitals, and care facilities across Sacramento, Placer, and El Dorado
              counties, by appointment, including evenings and weekends.
            </p>
            <p className="mt-4 font-['Inter:Regular',sans-serif] text-[13px] text-[#365485]">Cities we serve:</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-2">
              {CITIES.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 rounded-[8px] border-[0.667px] border-[#829bc4] bg-[#fffaf0] px-3 py-2"
                >
                  <GoldBullet />
                  <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#365485]">{city}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between gap-4 rounded-[8px] border-[0.667px] border-[#829bc4] bg-[#f5f5f5] px-4 py-3">
              <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[1.5] text-[#0b1245]">
                Don&apos;t see your city? Contact us to confirm availability in your area.
              </p>
              <a href="/contact" className="shrink-0">
                <GoldButton className="!px-4 !py-1.5 !text-[11px]">Contact Us</GoldButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
