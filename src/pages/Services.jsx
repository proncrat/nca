import { Link } from 'react-router'

// `to` links an item to its own page where one exists
const services = [
  { label: 'Electrical: Commercial and Industrial', to: '/electrical' },
  { label: 'Plant machinery, Fault finding, repair and maintenance' },
  { label: 'Machine Safety' },
  { label: 'Automation – PLC and HMI Programming', to: '/automation' },
  { label: 'Motor Control systems' },
  { label: 'BMS' },
  { label: 'Refrigeration control and Monitoring' },
  { label: 'Automated Gate and entry systems' },
  { label: 'Welder sales, service and repair' },
  { label: 'Generator sales, service and repair' },
]

const rowClass =
  'group flex items-baseline gap-5 border-b border-gray-800 py-5 transition-colors duration-300'

function Row({ label, to, i }) {
  const inner = (
    <>
      <span className="w-6 shrink-0 font-mono text-xs text-gray-600 transition-colors duration-300 group-hover:text-brand">
        {String(i + 1).padStart(2, '0')}
      </span>
      <span className="flex-1 text-lg text-gray-200 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white md:text-xl">
        {label}
      </span>
      {to && (
        <span
          aria-hidden
          className="text-brand transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  )

  return (
    <li>
      {to ? (
        <Link to={to} className={`${rowClass} hover:border-brand`}>
          {inner}
        </Link>
      ) : (
        <div className={rowClass}>{inner}</div>
      )}
    </li>
  )
}

export default function Services() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Services</h1>

      {/* Two columns of ruled rows on wide screens */}
      <ul className="mt-10 grid gap-x-12 border-t border-gray-800 md:grid-cols-2">
        {services.map((s, i) => (
          <Row key={s.label} {...s} i={i} />
        ))}
      </ul>

      <div className="mt-16 flex flex-wrap items-center gap-6">
        <p className="text-gray-400">Not sure if we can help? Just ask.</p>
        <Link
          to="/contact"
          className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}
