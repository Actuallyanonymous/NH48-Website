import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MenuLandingPage from './pages/MenuLandingPage'
import FoodMenuPage from './pages/FoodMenuPage'
import DrinksMenuPage from './pages/DrinksMenuPage'
import VisitUsPage from './pages/VisitUsPage'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Standard fade for most pages
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

// Slide-up from below + fade for menu detail pages
// Content starts 80px below resting position, rises into place with smooth ease-out
function SlideUpWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/menu" element={<PageWrapper><MenuLandingPage /></PageWrapper>} />
        <Route path="/menu/food" element={<SlideUpWrapper><FoodMenuPage /></SlideUpWrapper>} />
        <Route path="/menu/drinks" element={<SlideUpWrapper><DrinksMenuPage /></SlideUpWrapper>} />
        <Route path="/visit" element={<PageWrapper><VisitUsPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div style={{ width: '100%' }}>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </div>
  )
}
