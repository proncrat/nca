import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Automation from './pages/Automation'
import Contact from './pages/Contact'
import Electrical from './pages/Electrical'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'automation', element: <Automation /> },
      { path: 'contact', element: <Contact /> },
      { path: 'electrical', element: <Electrical /> },
      { path: 'services', element: <Services /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
