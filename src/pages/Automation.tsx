import { asset } from '../asset'
type ColumnProps = {
  title: string
  items?: string[]
  image?: string
  imageAlt?: string
  logo?: string
  href?: string
  linkText?: string
}

const columns: ColumnProps[] = [
  {
    title: 'Automation capabilities',
    items: [
      'Custom HMI / PLC programming and installation',
      'Process control and machine automation',
      'Monitoring – data acquisition',
      'Refrigeration control and monitoring',
      'Machine safety',
    ],
  },
  {
    title: 'Industrial communication protocols',
    items: ['Modbus TCP and RTU', 'EtherNet/IP', 'EtherCAT'],
  },
  {
    title: 'Weintek – HMI / PLC / Remote IO',
    imageAlt: 'Weintek HMI touchscreen',
    logo: asset('/content/weintek-hmi.png'),
    href: 'https://www.weintek.com/',
    linkText: 'weintek.com',
  },
  {
    title: 'CODESYS programming environment',
    logo: asset('/partners/codesys.webp'),
    href: 'https://www.codesys.com/',
    linkText: 'codesys.com',
  },
]

function Column({
  title,
  items,
  image,
  imageAlt,
  logo,
  href,
  linkText,
}: ColumnProps) {
  return (
    <div className="py-8 md:px-6 lg:py-0 lg:first:pl-0 lg:last:pr-0">
      <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
        {title}
      </h3>

      {items && (
        <ul className="mt-5 space-y-2.5 text-sm text-gray-400">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand"
              />
              {item}
            </li>
          ))}
        </ul>
      )}

      {image && (
        // The photo has lots of transparent padding, so crop in on the screen
        <div className="mt-5 aspect-5/4 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="h-full w-full scale-[1.45] object-cover"
          />
        </div>
      )}

      {logo && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-5 block"
        >
          <span className="flex h-32 items-center justify-center rounded-lg bg-neutral-300 px-3 transition duration-300 group-hover:-translate-y-0.5">
            {/* multiply blends any white baked into the logo into the grey */}
            <img
              src={logo}
              alt={title}
              loading="lazy"
              className="h-full w-full object-contain mix-blend-multiply"
            />
          </span>
          <span className="mt-3 inline-block text-sm font-medium text-brand transition-colors group-hover:text-white">
            {linkText} ↗
          </span>
        </a>
      )}
    </div>
  )
}

export default function Automation() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Automation</h1>

      <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        Engineering &amp; Integration Expertise
      </h2>

      <div className="mt-4 max-w-3xl space-y-6 leading-relaxed text-gray-300">
        <p className="text-xl leading-relaxed text-white">
          Thompson Automation delivers specialized industrial integration across
          Northland, bridging the gap between hardware and high-level control
          logic. Using the CODESYS development environment, we design flexible,
          hardware-independent automation solutions built around each plant’s
          specific requirements.
        </p>

        <p>
          Our expertise spans the integration of Danfoss VFDs for precision
          motor control and Weintek HMI systems for intuitive operator
          interfaces, alongside the industrial communication protocols that keep
          every component in a facility—from field sensors to remote I/O—working
          together reliably.
        </p>

        <p>
          Whether commissioning a new control system or diagnosing a fault on an
          active production line, we bring together deep technical expertise and
          hands-on site experience to help keep your operations running at peak
          efficiency.
        </p>
      </div>

      <div className="mt-20 grid divide-y divide-gray-800 border-t border-gray-800 pt-10 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {columns.map((c) => (
          <Column key={c.title} {...c} />
        ))}
      </div>
    </section>
  )
}
