import { useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import MainHeader from './Header'
import Footer from './Footer'
import ToolsHeader from './tools/ToolsHeader'
import ToolsFooter from './tools/ToolsFooter'
import { restoreScroll } from '../scroll'

// Pages under /tools belong to Thompson Industrial, the tool repair side of
// the business. They get their own header, footer and orange accent.
export const TOOLS_PATH = '/tools'

export default function Layout() {
  // Runs before the first paint, so the page appears already scrolled
  useLayoutEffect(() => {
    restoreScroll()
  }, [])

  // Start each new page at the top (skipped on first load so a reload
  // keeps its restored position)
  const { pathname } = useLocation()
  const lastPath = useRef(pathname)
  useLayoutEffect(() => {
    if (lastPath.current === pathname) return
    lastPath.current = pathname
    window.scrollTo(0, 0)
  }, [pathname])

  const tools = pathname === TOOLS_PATH || pathname.startsWith(`${TOOLS_PATH}/`)

  return (
    // `tools` swaps the brand colour to orange for everything inside
    <div className={`min-h-screen flex flex-col bg-bg text-fg ${tools ? 'tools' : ''}`}>
      {tools ? <ToolsHeader /> : <MainHeader />}
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pt-8 pb-8 lg:pt-20">
        <Outlet />
      </main>
      {tools ? <ToolsFooter /> : <Footer />}
    </div>
  )
}
