import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Automation from './pages/Automation.jsx'
import Contact from './pages/Contact.jsx'
import Electrical from './pages/Electrical.jsx'
import Services from './pages/Services.jsx'
import NotFound from './pages/NotFound.jsx'

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
