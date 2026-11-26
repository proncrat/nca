import { Link } from 'react-router'
import ThemeToggle from '../ThemeToggle'
import { SpannerIcon } from './ToolsHeader'
import { EMAIL, FACEBOOK, MAPS, PHONE, telHref } from './contact'

const YEAR = new Date().getFullYear()

export default function ToolsFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-surface text-soft">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand">
            <SpannerIcon className="h-4 w-4 text-white" />
          </span>
          <div className="leading-tight">
            <p className="font-black uppercase tracking-wide text-fg">
              Thompson <span className="font-light">Industrial</span>
            </p>
            <p className="text-xs text-muted">Keeping the trades moving</p>
          </div>
        </div>

        <ul className="space-y-1 text-sm">
          <li>
            <a href={telHref(PHONE)} className="text-muted transition hover:text-fg">
              {PHONE}
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`} className="text-muted transition hover:text-fg">
              {EMAIL}
            </a>
          </li>
          <li>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition hover:text-fg"
            >
              138 Lower Dent St, Whangārei
            </a>
          </li>
          <li>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition hover:text-fg"
            >
              Facebook
            </a>
          </li>
        </ul>

        <Link
          to="/"
          className="self-start rounded-md border border-line px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-fg transition hover:border-fg"
        >
          ← Northland Controls &amp; Automation
        </Link>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted sm:flex-row">
          <p>© {YEAR} Thompson Electrical Solutions Ltd</p>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full border border-line px-4 py-1.5 transition hover:border-fg hover:text-fg"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
