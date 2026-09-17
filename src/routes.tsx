import { createBrowserRouter } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Insurance from './pages/Insurance'
import Notary from './pages/Notary'
import Travel from './pages/Travel'
import Services from './pages/Services'
import LiveScan from './pages/LiveScan'
import LoanSigning from './pages/LoanSigning'
import Apostille from './pages/Apostille'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Accessibility from './pages/Accessibility'

export const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/about', Component: About },
  { path: '/services', Component: Services },
  { path: '/insurance', Component: Insurance },
  { path: '/notary', Component: Notary },
  { path: '/live-scan', Component: LiveScan },
  { path: '/loan-signing', Component: LoanSigning },
  { path: '/apostille', Component: Apostille },
  { path: '/travel', Component: Travel },
  { path: '/faq', Component: Faq },
  { path: '/contact', Component: Contact },
  { path: '/privacy', Component: Privacy },
  { path: '/terms', Component: Terms },
  { path: '/accessibility', Component: Accessibility },
])
