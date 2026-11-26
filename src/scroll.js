// We restore the scroll position on reload ourselves instead of leaving it to
// the browser. The browser can restore it *after* the first paint, which made
// the header flash its big logo before shrinking. Knowing the position up
// front lets the header render at the right size straight away.

const key = () => `scrollY:${location.pathname}`

if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

export const initialScrollY = Number(sessionStorage.getItem(key())) || 0

window.addEventListener('pagehide', () => {
  sessionStorage.setItem(key(), String(window.scrollY))
})

// Call once the page content has rendered
export function restoreScroll() {
  if (initialScrollY <= 0) return
  window.scrollTo(0, initialScrollY)
  // If images below hadn't sized the page yet, try again once they have
  if (window.scrollY < initialScrollY) {
    window.addEventListener('load', () => window.scrollTo(0, initialScrollY), {
      once: true,
    })
  }
}
