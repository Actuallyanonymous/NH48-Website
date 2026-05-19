import { useEffect, useState } from 'react'
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

// Opening popup — shows once per session on first visit
function WelcomePopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show every session (sessionStorage resets on tab close)
    if (!sessionStorage.getItem('nh48_popup_seen')) {
      setVisible(true)
      sessionStorage.setItem('nh48_popup_seen', '1')
    }
  }, [])

  const close = () => setVisible(false)

  if (!visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Close button */}
            <button
              onClick={close}
              style={{
                position: 'absolute',
                top: '-14px',
                right: '-14px',
                zIndex: 1,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: '1.5px solid rgba(255,255,255,0.5)',
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(4px)',
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            {/* Popup image */}
            <img
              src="/assets/coming-soon-image.png"
              alt="Coming soon"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '85vh',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Standard fade for all pages
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
      <WelcomePopup />
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </div>
  )
}
