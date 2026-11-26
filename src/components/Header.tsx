import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { initialScrollY } from '../scroll'

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
      : 'border-brand text-white hover:bg-brand'
  }`

export default function MainHeader() {
  // Read scroll position up front so a reload mid-page starts small
  const [scrolled, setScrolled] = useState(
    () => Math.max(window.scrollY, initialScrollY) > 40,
  )
  const [menuOpen, setMenuOpen] = useState(false)
  // Animations stay off briefly on load, so the browser restoring the
  // scroll position doesn't play the big→small transition
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const t = setTimeout(() => setAnimate(true), 400)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(t)
    }
  }, [])

  const linkClass = ({ isActive }: NavState) =>
    `px-3 py-2 rounded-md text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 ease-out ${
      isActive
        ? 'bg-brand text-white'
        : 'text-gray-300 hover:bg-brand/25 hover:text-white'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200 bg-black text-white ${
        animate ? '' : '[&_*]:transition-none!'
      }`}
    >
      <nav className="mx-auto max-w-5xl flex items-center gap-2 px-4 py-2">
        {/* Fixed-height slot: the logo grows out of it, the header doesn't */}
        <Link
          to="/"
          aria-label="Northland Controls & Automation — home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`relative block h-10 shrink-0 transition-all duration-300 ease-in-out ${
            scrolled ? 'w-24' : 'w-84'
          }`}
        >
          {/* Wide logo at the top of the page */}
          <img
            src="/NCALOGOBIG.png"
            alt=""
            aria-hidden={scrolled}
            className={`rounded-xl absolute left-0 top-0 h-24 w-auto max-w-none origin-top-left bg-black transition-all duration-300 ease-in-out ${
              scrolled
                ? 'pointer-events-none scale-[0.42] opacity-0'
                : 'opacity-100'
            }`}
          />
          {/* Square logo once scrolled */}
          <img
            src="/NCALOGO.png"
            alt=""
            aria-hidden={!scrolled}
            className={`absolute left-0 top-0 h-10 w-10 transition-opacity duration-300 ease-in-out ${
              scrolled ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />
          {/* Name beside the small logo, slides in once scrolled */}
          <span
            aria-hidden
            className={`absolute left-12 top-1/2 -translate-y-1/2 text-xl font-bold tracking-wide text-brand transition-all duration-300 ease-in-out ${
              scrolled
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
          <span aria-hidden className="mx-2 h-6 w-px bg-gray-700" />
          <NavLink to="/contact" className={contactClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md transition-colors duration-200 hover:bg-brand/25 lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
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
          <div className="mx-auto flex max-w-5xl flex-col items-end gap-1 px-4 pb-4 pt-16">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className={(s) => `mt-2 ${contactClass(s)}`}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
