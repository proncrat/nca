import { useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import MainHeader from './Header'
import Footer from './Footer'
import { restoreScroll } from '../scroll'

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

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <MainHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pt-20 pb-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
