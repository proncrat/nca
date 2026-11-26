// First quote is featured large; the rest sit beneath as plain text
const featured = {
  text: 'You took one day to do what the other guys couldn’t do in four days.',
  who: 'Manufacturing Plant, Whangārei',
}

const quotes = [
  {
    text: 'Where were you five years ago when we were trying to install this?',
    who: 'Wastewater Plant, Northland',
  },
  {
    text: 'Is that all it took? The last guys just said ‘that’s just how it is.’',
    who: 'Quarry Operation, North Auckland',
  },
  {
    text: 'This new system is far better than the factory one.',
    who: 'Food Production, Whangārei',
  },
  {
    text: 'Great technical knowledge. We had a harmonics issue on site that was affecting plant control intermittently. Dave found and rectified the problem in no time. Money well spent. I highly recommend TES, they are excellent to deal with.',
    who: 'Automation Technician, Auckland',
  },
  {
    text: 'Dave is great. We started using Thompson Electrical after our previous electrical contractor just wasn’t cutting it. But please don’t start using him, because we need him.',
    who: 'Manufacturing Plant, Whangārei',
  },
]

export default function WhyUs() {
  return (
    <section className="mt-24">
      <h2 className="text-2xl font-bold">Why customers use us</h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-300">
        With many years of experience across both electrical and mechanical
        engineering, we understand how the whole machine works, not just the
        wiring. That means faster fault-finding, practical solutions that fit
        your budget, and jobs done right the first time.
      </p>

      {/* Featured pull quote */}
      <figure className="mt-16">
        <blockquote className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          <span className="text-brand">“</span>
          {featured.text}
          <span className="text-brand">”</span>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3 text-sm text-gray-400">
          <span aria-hidden className="h-px w-10 bg-brand" />
          {featured.who}
        </figcaption>
      </figure>

      {/* Remaining quotes: plain text with a thin rule, no boxes */}
      <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {quotes.map((q) => (
          <figure key={q.text} className="border-l-2 border-gray-800 pl-5 transition-colors duration-300 hover:border-brand">
            <blockquote className="leading-relaxed text-gray-300">
              “{q.text}”
            </blockquote>
            <figcaption className="mt-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {q.who}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
