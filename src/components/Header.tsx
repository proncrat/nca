import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { initialScrollY } from '../scroll'
import { asset } from '../asset'
import { SpannerIcon } from './tools/ToolsHeader'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/automation', label: 'Automation' },
  { to: '/electrical', label: 'Electrical' },
  { to: '/services', label: 'Services' },
]

// Contact sits apart at the end as an outlined call-to-action
type NavState = { isActive: boolean }

const contactClass = ({ isActive }: NavState) =>
  `px-4 py-2 rounded-md border text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ease-out ${
    isActive
      ? 'border-brand bg-brand text-white'
      : 'border-brand text-fg hover:bg-brand hover:text-white'
  }`

// Link to Thompson Industrial, the tool repair side of the business. Orange
// to match that site's colours, so it reads as somewhere different.
const toolsClass =
  'flex items-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-md bg-[#ea580c] text-xs font-semibold uppercase tracking-[0.15em] text-white transition duration-200 hover:brightness-110'

const ToolsIcon = () => <SpannerIcon className="h-3.5 w-3.5" />

// Desktop = where the full nav shows (Tailwind's `lg`)
const desktopQuery = window.matchMedia('(min-width: 1024px)')

// Mobile menu rows: full width, left aligned, active page marked in blue
const mobileLinkClass = ({ isActive }: NavState) =>
  `flex items-center justify-between border-b border-line py-4 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200 ${
    isActive ? 'text-brand' : 'text-soft hover:text-fg'
  }`

export default function MainHeader() {
  // Read scroll position up front so a reload mid-page starts small
  const [scrolled, setScrolled] = useState(
    () => Math.max(window.scrollY, initialScrollY) > 40,
  )
  const [desktop, setDesktop] = useState(desktopQuery.matches)
  const [menuOpen, setMenuOpen] = useState(false)
  // Animations stay off briefly on load, so the browser restoring the
  // scroll position doesn't play the big→small transition
  const [animate, setAnimate] = useState(false)

  // The big logo only ever shows on desktop at the top of the page
  const compact = scrolled || !desktop

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const onResize = () => {
      setDesktop(desktopQuery.matches)
      if (desktopQuery.matches) setMenuOpen(false)
    }
    desktopQuery.addEventListener('change', onResize)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    const t = setTimeout(() => setAnimate(true), 400)
    return () => {
      window.removeEventListener('scroll', onScroll)
      desktopQuery.removeEventListener('change', onResize)
      window.removeEventListener('keydown', onKey)
      clearTimeout(t)
    }
  }, [])

  const linkClass = ({ isActive }: NavState) =>
    `px-2.5 py-2 rounded-md text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 ease-out ${
      isActive
        ? 'bg-brand text-white'
        : 'text-soft hover:bg-brand/25 hover:text-fg'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-bg text-fg ${
        animate ? '' : '[&_*]:transition-none!'
      }`}
    >
      <nav className="mx-auto max-w-5xl flex items-center gap-2 px-4 py-2">
        {/* Fixed-size slot: the big logo grows out of it, so neither the
            header height nor the nav buttons move when it shrinks */}
        <Link
          to="/"
          aria-label="Northland Controls & Automation — home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative block h-10 w-24 shrink-0"
        >
          {/* Wide logo at the top of the page */}
          <img
            src={asset('/NCALOGOBIG.png')}
            alt=""
            aria-hidden={compact}
            className={`rounded-xl absolute left-0 top-0 h-22 xl:h-24 w-auto max-w-none origin-top-left bg-badge transition-all duration-300 ease-in-out ${
              compact
                ? 'pointer-events-none scale-[0.42] opacity-0'
                : 'opacity-100'
            }`}
          />
          {/* Square logo once scrolled */}
          <img
            src={asset('/NCALOGO.png')}
            alt=""
            aria-hidden={!compact}
            className={`absolute left-0 top-0 h-10 w-10 transition-opacity duration-300 ease-in-out ${
              compact ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />
          {/* Name beside the small logo, slides in once scrolled */}
          <span
            aria-hidden
            className={`absolute left-12 top-1/2 -translate-y-1/2 text-xl font-bold tracking-wide text-brand transition-all duration-300 ease-in-out ${
              compact
                ? 'translate-x-0 opacity-100'
                : '-translate-x-2 opacity-0'
            }`}
          >
            NCA
          </span>
        </Link>
        {/* Desktop links */}
        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
          <span aria-hidden className="mx-1.5 h-6 w-px bg-line" />
          <NavLink to="/contact" className={contactClass}>
            Contact
          </NavLink>
          <Link to="/tools" className={`ml-1 ${toolsClass}`}>
            <ToolsIcon />
            Tool repair
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md outline-none transition-colors duration-200 hover:bg-brand/25 focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-fg transition-transform duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-fg transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-fg transition-transform duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Main"
            className="mx-auto flex max-w-5xl flex-col border-t border-line px-4 pb-6"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className={mobileLinkClass}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="mt-6 rounded-lg bg-brand py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-200 hover:brightness-110"
            >
              Contact us
            </NavLink>
            <Link
              to="/tools"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className={`mt-3 justify-center py-3 text-sm ${toolsClass}`}
            >
              <ToolsIcon />
              Tool repair — Thompson Industrial
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
