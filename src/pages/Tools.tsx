import { useState } from 'react'
import { asset } from '../asset'
import Carousel, { type Slide } from '../components/Carousel'
import { EMAIL, FACEBOOK, MAPS, PHONE, telHref } from '../components/tools/contact'

// Product shots, one per speciality. Shown with the carousel's "product"
// style, so white backgrounds blend into the light backdrop.
const slides: Slide[] = [
  {
    src: asset('/tools/photos/airless-sprayer.jpg'),
    alt: 'Graco Magnum X5 airless paint sprayer with hose and spray gun',
    title: 'Airless sprayers',
    text: 'Warranty and service agent for Graco and Wagner airless sprayers.',
  },
  {
    src: asset('/tools/photos/nail-gun.png'),
    alt: 'Paslode FrameMaster NightWolf gas framing nailer',
    title: 'Nail guns and staplers',
    text: 'Pneumatic and gas nailers and fencing staplers, serviced and repaired.',
  },
  {
    src: asset('/tools/photos/water-blaster.png'),
    alt: 'Kränzle Quadro water blaster with hose reel',
    title: 'Water blasters',
    text: 'Electric and engine driven water blasters, back to full pressure.',
  },
  {
    src: asset('/tools/photos/hot-water-cleaner.png'),
    alt: 'Lavor Hyper hot water pressure cleaner',
    title: 'Steam cleaners',
    text: 'Steam and hot water cleaners serviced and repaired.',
  },
  {
    src: asset('/tools/photos/generators.webp'),
    alt: 'GT Power petrol generators and an inverter generator',
    title: 'Generators',
    text: 'Petrol and diesel generators kept ready for when the power goes.',
  },
  {
    src: asset('/tools/photos/mig-welder.png'),
    alt: 'Strata Advance MIG welder with its cover open',
    title: 'Welding equipment',
    text: 'Welding equipment serviced, repaired and kept working.',
  },
]

const specialities = [
  { title: 'Airless spraying equipment', detail: 'Graco, Wagner' },
  { title: 'Nail guns and fencing staplers', detail: 'Pneumatic and gas' },
  { title: 'Water blasters', detail: 'Electric and engine driven' },
  { title: 'Steam cleaners', detail: 'Service and repair' },
  { title: 'Generators', detail: 'Petrol and diesel' },
  { title: 'Welding equipment', detail: 'Service and repair' },
]

type Brand = { name: string; src: string; href?: string }

const brands: Brand[] = [
  { name: 'Graco', src: '/tools/brands/graco.svg', href: 'https://www.graco.com/' },
  { name: 'Wagner', src: '/tools/brands/wagner.svg', href: 'https://www.wagner-group.com/' },
  { name: 'Paslode', src: '/tools/brands/paslode.svg', href: 'https://www.paslode.co.nz/' },
  { name: 'Kränzle', src: '/tools/brands/kranzle.svg', href: 'https://www.kranzle.co.nz/' },
  { name: 'Briggs & Stratton', src: '/tools/brands/briggs-stratton.svg', href: 'https://www.briggsandstratton.com/' },
  { name: 'Lavor', src: '/tools/brands/lavor.png', href: 'https://www.lavor.co.nz/' },
  { name: 'Stockade', src: '/tools/brands/stockade.png' },
  { name: 'GT Power', src: '/tools/brands/gt-power.jpg', href: 'https://www.gtpower.co.nz/' },
  { name: 'Weldtech', src: '/tools/brands/weldtech.png', href: 'https://www.weldtech.co.nz/' },
  { name: 'Strata', src: '/tools/brands/strata.png', href: 'https://www.strata.co.nz/' },
]

// Logo tiles stay white in both themes so every logo keeps its own colours.
// Falls back to the brand name if the image is missing.
function BrandLogo({ name, src, href }: Brand) {
  const [failed, setFailed] = useState(false)
  return (
    <a
      href={href}
      target={href && '_blank'}
      rel={href && 'noopener noreferrer'}
      aria-label={name}
      title={name}
      className="flex h-24 items-center justify-center rounded-lg bg-white p-5 ring-1 ring-line transition duration-200 hover:-translate-y-0.5 hover:ring-brand"
    >
      {failed ? (
        <span className="text-sm font-semibold uppercase tracking-wider text-gray-600">
          {name}
        </span>
      ) : (
        <img
          src={asset(src)}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="max-h-full max-w-full object-contain"
        />
      )}
    </a>
  )
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
      {children}
    </p>
  )
}

export default function Tools() {
  return (
    <section>
      <Carousel slides={slides} label="Equipment we service" variant="product" />

      <p className="mt-12 text-lg">
        Thompson Industrial has been servicing, repairing and selling trade
        equipment across Whangārei and Northland for more than 20 years. When
        your gear stops, so does the job, so we get it fixed and get you back
        to work.
      </p>

      {/* Specialities */}
      <section id="services" className="mt-20 scroll-mt-28">
        <Eyebrow>What we work on</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold">Our specialities</h2>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {specialities.map((s, i) => (
            <li key={s.title} className="group bg-bg p-6">
              <span className="font-mono text-3xl font-light text-subtle transition-colors duration-300 group-hover:text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-fg">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Service and sales */}
      <section className="mt-20 grid gap-10 md:grid-cols-2">
        <div className="border-t-2 border-brand pt-6">
          <h2 className="text-xl font-bold">Service and repair</h2>
          <p className="mt-3 text-soft">
            We're the long-standing service and warranty repair agent for
            Paslode, Graco, Wagner, Euroquip and AES, and we work on plenty of
            other brands as well.
          </p>
        </div>
        <div className="border-t-2 border-brand pt-6">
          <h2 className="text-xl font-bold">Sales</h2>
          <p className="mt-3 text-soft">
            We sell the brands we work on, and only equipment that can be
            serviced and repaired, with parts available here in New Zealand.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="mt-20 scroll-mt-28">
        <Eyebrow>Some of our brands</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold">Brands we sell and service</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((b) => (
            <BrandLogo key={b.name} {...b} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mt-20 scroll-mt-28 overflow-hidden rounded-xl bg-[#16171a] text-white"
      >
        <div className="grid gap-8 p-8 sm:p-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-wide">
              Gear playing up?
            </h2>
            <p className="mt-3 text-gray-300">
              Bring it in to the workshop, or give us a call and we'll tell you
              what we can do.
            </p>
          </div>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href={telHref(PHONE)}
                className="block rounded-lg bg-brand px-5 py-4 text-center text-base font-semibold uppercase tracking-[0.15em] transition hover:brightness-110"
              >
                {PHONE}
              </a>
            </li>
            <li className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-gray-400">Email</span>
              <a href={`mailto:${EMAIL}`} className="hover:text-brand">
                {EMAIL}
              </a>
            </li>
            <li className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <span className="text-gray-400">Workshop</span>
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-right hover:text-brand"
              >
                138 Lower Dent St, Whangārei
              </a>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-gray-400">Facebook</span>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                Thompson Industrial
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}
