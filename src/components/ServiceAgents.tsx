const agencies = [
  {
    name: 'Euroquip',
    detail: 'Compressors, gensets and welding equipment, trade tools',
  },
  {
    name: 'Resource Data Management NZ',
    detail: 'System partner',
  },
  {
    name: 'Bellbooth',
    detail: 'Holm & Laue automated calf feeders',
  },
]

// A single full-width band with columns split by vertical rules
export default function ServiceAgents() {
  return (
    <section className="mt-24 border-y border-line py-10">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        Northland service agents for
      </h2>

      <ul className="mt-6 grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {agencies.map((a) => (
          <li
            key={a.name}
            className="py-5 first:pt-0 last:pb-0 md:px-6 md:py-0 md:first:pl-0 md:last:pr-0"
          >
            <p className="text-xl font-semibold text-fg">{a.name}</p>
            <p className="mt-1 text-sm text-muted">{a.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
