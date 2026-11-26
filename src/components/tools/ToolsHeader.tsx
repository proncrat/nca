import { Link } from 'react-router'
import { PHONE, telHref } from './contact'

// Sections on the Thompson Industrial page
const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#brands', label: 'Brands' },
  { href: '#contact', label: 'Contact' },
]

// Spanner mark used beside the wordmark
export function SpannerIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

// Thompson Industrial's header. Deliberately different from the NCA one:
// always dark (whatever the theme), a heavy wordmark, an orange rule, and a
// thin strip above linking back to Northland Controls & Automation.
export default function ToolsHeader() {
  return (
    <>
      {/* Strip above the header: scrolls away, the bar below stays */}
      <div className="bg-[#0b0c0e] text-xs text-gray-400">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-2">
          <Link
            to="/"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <span aria-hidden>←</span>
            <span className="sm:hidden">NCA</span>
            <span className="hidden sm:inline">
              Northland Controls &amp; Automation
            </span>
          </Link>
          <p className="truncate">
            <span className="hidden md:inline">138 Lower Dent St, Whangārei · </span>
            <a href={telHref(PHONE)} className="transition-colors hover:text-white">
              {PHONE}
            </a>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b-4 border-brand bg-[#16171a] text-white">
        <nav className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
          <Link
            to="/tools"
            aria-label="Thompson Industrial — home"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand">
              <SpannerIcon className="h-5 w-5 text-white" />
            </span>
            <span className="leading-none">
              <span className="block text-lg font-black uppercase tracking-wide sm:text-xl">
                Thompson{' '}
                <span className="font-light text-gray-300">Industrial</span>
              </span>
              <span className="mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-brand sm:block">
                Keeping the trades moving
              </span>
            </span>
          </Link>

          <div className="ml-auto hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={telHref(PHONE)}
            className="ml-auto flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition duration-200 hover:brightness-110 md:ml-2"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call<span className="hidden lg:inline"> us</span>
          </a>
        </nav>
      </header>
    </>
  )
}
