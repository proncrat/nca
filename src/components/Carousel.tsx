import { asset } from '../asset'
import { useCallback, useEffect, useState } from 'react'

const slides = [
  {
    src: asset('/content/CONTROLS-1.jpg'),
    alt: 'Control panel with Eaton easyE4 controllers and SICK safety relays',
    title: 'Automation and controls',
    text: 'PLC and HMI programming, control panels, VFD, pump and motor control.',
  },
  {
    src: asset('/content/RDM-BLAST-2-1.png'),
    alt: 'Blast freezer monitoring screen showing temperatures and pressures',
    title: 'Remote monitoring',
    text: 'Remote monitoring with alarms to your phone.',
  },
  {
    src: asset('/content/20250414_140824-scaled-e1745629188454.jpg'),
    alt: 'Stainless steel food production line with motors and control cabinet',
    title: 'Fault finding and repair',
    text: 'Breakdowns, machinery safety, and control systems that have never worked right.',
  },
  {
    src: asset('/content/20210917_154233-1024x768.jpg'),
    alt: 'Row of Danfoss VLT drives installed on a cable tray frame',
    title: 'Danfoss VFDs',
    text: 'Integration of Danfoss VFDs for precision motor control.',
    // Drives sit in the top half of this tall photo
    position: 'object-top origin-top',
  },
]

const INTERVAL = 6000

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (i: number) => setIndex((i + slides.length) % slides.length),
    [],
  )

  useEffect(() => {
    if (paused) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const t = setTimeout(() => go(index + 1), INTERVAL)
    return () => clearTimeout(t)
  }, [index, paused, go])

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Our work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="group relative aspect-4/3 overflow-hidden rounded-xl bg-neutral-950 sm:aspect-21/9"
    >
      {slides.map((s, i) => {
        const active = i === index
        return (
          <div
            key={s.src}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              active ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Slow zoom while the slide is showing; key restarts it each time */}
            <img
              key={active ? `${s.src}-on` : s.src}
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`h-full w-full object-cover ${s.position ?? ''} ${
                active ? 'animate-kenburns' : ''
              }`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent sm:bg-linear-to-r sm:from-black/80 sm:via-black/35" />

            <div
              className={`absolute inset-x-0 bottom-0 p-6 transition-all delay-300 duration-700 ease-out sm:max-w-lg sm:p-10 ${
                active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-gray-200 sm:text-base">{s.text}</p>
            </div>
          </div>
        )
      })}

      {/* Arrows */}
      {[
        { dir: -1, label: 'Previous slide', side: 'left-3', icon: '‹' },
        { dir: 1, label: 'Next slide', side: 'right-3', icon: '›' },
      ].map((a) => (
        <button
          key={a.label}
          type="button"
          aria-label={a.label}
          onClick={() => go(index + a.dir)}
          className={`absolute top-1/2 ${a.side} flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl leading-none text-white opacity-0 backdrop-blur transition duration-300 hover:bg-brand focus-visible:opacity-100 group-hover:opacity-100`}
        >
          {a.icon}
        </button>
      ))}

      {/* Progress dots */}
      <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className="relative h-1 w-8 overflow-hidden rounded-full bg-white/25"
          >
            {i === index && (
              <span
                key={index}
                className={`absolute inset-y-0 left-0 bg-white ${
                  paused ? 'w-full' : 'animate-progress'
                }`}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
