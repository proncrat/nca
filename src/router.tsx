import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Automation from './pages/Automation'
import Contact from './pages/Contact'
import Electrical from './pages/Electrical'
import Services from './pages/Services'
import Tools from './pages/Tools'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'automation', element: <Automation /> },
        { path: 'contact', element: <Contact /> },
        { path: 'electrical', element: <Electrical /> },
        { path: 'services', element: <Services /> },
        { path: 'tools', element: <Tools /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  // Matches Vite's `base` (e.g. /nca on GitHub Pages, / when run locally
  // without a base), so links and routes work under the sub-folder
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' },
)
