import { useState, type ReactNode } from 'react'

const YEAR = new Date().getFullYear()

// TODO: swap in the real Facebook / LinkedIn page URLs
const links = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/thompsonelectricalsolutionsltd/',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dave-thompson-4a0179184/',
  },
]

// Drop logo files into /public/partners/ — falls back to the name if missing
const partners = [
  {
    name: 'RDM Approved System Partner',
    src: '/partners/rdm.webp',
    href: 'https://www.resourcedm.com/',
  },
  {
    name: 'Weintek',
    src: '/partners/weintek.webp',
    href: 'https://www.weintek.com/',
  },
  {
    name: 'CODESYS',
    src: '/partners/codesys.webp',
    href: 'https://www.codesys.com/',
  },
  {
    name: 'Danfoss',
    src: '/partners/danfoss.webp',
    href: 'https://www.danfoss.com/',
  },
]

const contacts = [
  {
    name: 'Dave',
    emails: ['Dave@nca.nz', 'Dave@tesltd.solutions'],
    phone: '0277 215 694',
  },
  {
    name: 'Accounts',
    emails: ['Accounts@tesltd.solutions'],
    phone: '021 259 0258',
  },
]

type Partner = { name: string; src: string; href: string }

function PartnerLogo({ name, src, href }: Partner) {
  const [failed, setFailed] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      title={name}
      className="flex h-16 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-500"
    >
      {failed ? (
        <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          {name}
        </span>
      ) : (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="max-h-14 w-auto object-contain transition duration-300 [@media(hover:hover)]:not-hover:opacity-70 [@media(hover:hover)]:not-hover:grayscale"
        />
      )}
    </a>
  )
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
      {children}
    </h2>
  )
}

export default function Footer() {
  const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`

  return (
    <footer className="mt-16 border-t border-gray-800 bg-neutral-950 text-gray-300">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Get in touch */}
          <div>
            <Heading>Get in touch</Heading>
            <ul className="space-y-6">
              {contacts.map((c) => (
                <li key={c.name}>
                  <p className="font-medium text-white">{c.name}</p>
                  {c.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-sm text-gray-400 transition hover:text-white"
                    >
                      {email}
                    </a>
                  ))}
                  <a
                    href={telHref(c.phone)}
                    className="block text-sm text-gray-400 transition hover:text-white"
                  >
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <Heading>Find us</Heading>
            <address className="not-italic leading-relaxed">
              <a
                href="https://maps.google.com/?q=138+Lower+Dent+St,+Whangarei+0110,+New+Zealand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
              >
                138 Lower Dent St
                <br />
                Whangārei 0110
                <br />
                New Zealand
              </a>
            </address>
          </div>

          {/* Links */}
          <div>
            <Heading>Links</Heading>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-14 border-t border-gray-800 pt-10">
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4">
            {partners.map((p) => (
              <PartnerLogo key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2019–{YEAR} Thompson Electrical Solutions Ltd</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full border border-gray-700 px-4 py-1.5 transition hover:border-white hover:text-white"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
