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

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/menu" element={<PageWrapper><MenuLandingPage /></PageWrapper>} />
        <Route path="/menu/food" element={<PageWrapper><FoodMenuPage /></PageWrapper>} />
        <Route path="/menu/drinks" element={<PageWrapper><DrinksMenuPage /></PageWrapper>} />
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
