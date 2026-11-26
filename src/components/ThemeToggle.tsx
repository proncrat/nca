import { useState, type ReactNode } from 'react'
import { getTheme, setTheme, type Theme } from '../theme'

const icon = (path: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
)

const options: { value: Theme; label: string; icon: ReactNode }[] = [
  {
    value: 'dark',
    label: 'Dark',
    icon: icon(<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />),
  },
  {
    value: 'light',
    label: 'Light',
    icon: icon(
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>,
    ),
  },
  {
    value: 'auto',
    label: 'Auto',
    icon: icon(
      <>
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>,
    ),
  },
]

// Segmented Dark / Light / Auto switch. Sits in the (always dark) footer.
export default function ThemeToggle() {
  const [theme, setState] = useState<Theme>(getTheme)

  const choose = (t: Theme) => {
    setTheme(t)
    setState(t)
  }

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className="flex rounded-full border border-line p-0.5"
    >
      {options.map((o) => {
        const active = theme === o.value
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => choose(o.value)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors duration-200 ${
              active
                ? 'bg-brand text-white'
                : 'text-muted hover:bg-brand/25 hover:text-fg'
            }`}
          >
            {o.icon}
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
