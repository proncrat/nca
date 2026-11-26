// Light / dark / auto theme. "auto" follows the device setting and updates
// live if it changes. The choice is saved in localStorage; index.html reads
// it before first paint so the page never flashes the wrong theme.

export type Theme = 'light' | 'dark' | 'auto'

const KEY = 'theme'
const media = window.matchMedia('(prefers-color-scheme: dark)')

export function getTheme(): Theme {
  try {
    const t = localStorage.getItem(KEY)
    if (t === 'light' || t === 'dark') return t
  } catch {
    // storage blocked: fall through to auto
  }
  return 'auto'
}

function apply(theme: Theme) {
  const dark = theme === 'dark' || (theme === 'auto' && media.matches)
  document.documentElement.classList.toggle('dark', dark)
}

export function setTheme(theme: Theme) {
  try {
    if (theme === 'auto') localStorage.removeItem(KEY)
    else localStorage.setItem(KEY, theme)
  } catch {
    // storage blocked: still apply for this visit
  }
  apply(theme)
}

// Follow the device setting while in auto
media.addEventListener('change', () => {
  if (getTheme() === 'auto') apply('auto')
})
