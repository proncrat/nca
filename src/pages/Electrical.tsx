const services = [
  'Electrical installation, repair and maintenance',
  'Automation – PLC – HMI',
  'Motor and control – VSD – Soft Starters',
  'Plant and process machinery fault finding and repair',
  'Automated calf feeding',
  'Dairy and farm electrical',
  'BMS / monitoring systems',
  'Gate and entry solutions',
  'Welding machine sales and service',
]

export default function Electrical() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Electrical Services</h1>

      {/* Statement */}
      <blockquote className="mt-10 max-w-4xl border-l-4 border-brand pl-6 text-2xl font-semibold leading-snug tracking-tight text-fg md:text-4xl">
        We strive to provide high quality, compliant electrical work in the
        commercial and industrial sectors.
      </blockquote>

      {/* Services grid: hairline grid lines, no cards */}
      <h2 className="mt-20 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        Including
      </h2>

      <ul className="mt-6 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <li
            key={s}
            className="group flex items-start gap-4 bg-bg p-6 transition-colors duration-300 hover:bg-surface"
          >
            <span className="font-mono text-sm text-subtle transition-colors duration-300 group-hover:text-brand">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-soft transition-colors duration-300 group-hover:text-fg">
              {s}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
