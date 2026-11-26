const services = [
  {
    title: 'Automation and controls',
    items: [
      'PLC and HMI programming',
      'Control panels',
      'VFD, pump and motor control',
      'Remote monitoring with alarms to your phone',
    ],
  },
  {
    title: 'Fault finding and repair',
    items: [
      'Breakdowns',
      'Machinery safety',
      'Control systems that have never worked right',
    ],
  },
  {
    title: 'Commercial and industrial electrical',
    items: ['Wiring and installation work'],
  },
]

// Numbered editorial rows separated by hairlines — no cards
export default function Services() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold">What we do</h2>

      <ol className="mt-8 border-t border-gray-800">
        {services.map((s, i) => (
          <li
            key={s.title}
            className="group grid gap-x-8 gap-y-3 border-b border-gray-800 py-8 md:grid-cols-[5rem_1fr_1.2fr]"
          >
            <span className="font-mono text-4xl font-light text-gray-700 transition-colors duration-300 group-hover:text-brand">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl font-semibold text-white md:pt-1.5">
              {s.title}
            </h3>
            <ul className="flex flex-wrap gap-2 md:pt-1">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
