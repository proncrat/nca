import { useState } from 'react'

// Where form messages go. The site has no backend, so Submit opens the
// visitor's email app with the message filled in. Swap handleSubmit for a
// form service (e.g. Formspree, Web3Forms) to send straight from the page.
const TO = 'Dave@nca.nz'

const fields = [
  { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name', required: true },
  { name: 'email', label: 'Your email', type: 'email', autoComplete: 'email', required: true },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
]

const inputClass =
  'mt-2 w-full rounded-lg border border-gray-800 bg-neutral-950 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors duration-200 hover:border-gray-600 focus:border-brand focus:ring-2 focus:ring-brand/30'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = [
      data.get('message'),
      '',
      `— ${data.get('name')} (${data.get('email')})`,
    ]
      .join('\n')
      .trim()
    const href = `mailto:${TO}?subject=${encodeURIComponent(
      data.get('subject'),
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSent(true)
  }

  return (
    <section>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 max-w-2xl text-gray-300">
        Send us a message and we’ll get back to you as soon as we can.
      </p>

      <div className="mt-12 grid gap-16 lg:grid-cols-[1fr_16rem]">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {fields.slice(0, 2).map((f) => (
              <Field key={f.name} {...f} />
            ))}
          </div>
          <Field {...fields[2]} />

          <div>
            <label htmlFor="message" className="text-sm text-gray-400">
              Your message <span className="text-gray-600">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-4">
            {sent && (
              <p className="text-sm text-gray-400">
                Your email app should have opened with the message ready to
                send.
              </p>
            )}
            <button
              type="submit"
              className="rounded-lg bg-brand px-8 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:translate-y-0"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Direct details */}
        <aside className="space-y-8 border-gray-800 lg:border-l lg:pl-10">
          <Detail label="Dave">
            <a href="tel:0277215694" className="hover:text-white">0277 215 694</a>
            <a href="mailto:Dave@nca.nz" className="hover:text-white">Dave@nca.nz</a>
          </Detail>
          <Detail label="Accounts">
            <a href="tel:0212590258" className="hover:text-white">021 259 0258</a>
            <a href="mailto:Accounts@tesltd.solutions" className="break-all hover:text-white">
              Accounts@tesltd.solutions
            </a>
          </Detail>
          <Detail label="Find us">
            <a
              href="https://maps.google.com/?q=138+Lower+Dent+St,+Whangarei+0110,+New+Zealand"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              138 Lower Dent St
              <br />
              Whangārei 0110
            </a>
          </Detail>
        </aside>
      </div>
    </section>
  )
}

function Field({ name, label, type, autoComplete, required }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-gray-400">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={inputClass}
      />
    </div>
  )
}

function Detail({ label, children }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {label}
      </h2>
      <div className="mt-2 flex flex-col gap-1 text-sm text-gray-400 [&_a]:transition-colors">
        {children}
      </div>
    </div>
  )
}
