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

// Opening popup — shows once per session
// Figma: popup 752×533px, left half = image (381px), right half = red panel (371px)
// Text: BERNIER 40px white — "BOOK TODAY AND GET 30% OFF THE NEXT TIME YOU VIST US."
// Overlay: black 0.57
function WelcomePopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
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
          transition={{ duration: 0.35 }}
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.57)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {/* Popup — Figma: 752×533, left image 381px, right red panel 371px */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              display: 'flex',
              width: 'clamp(300px, 49.7vw, 752px)',
              maxHeight: '90vh',
              overflow: 'hidden',
            }}
          >
            {/* Close button — vector cross from Figma */}
            <button
              onClick={close}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: 10,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                lineHeight: 0,
              }}
            >
              <img
                src="/assets/coming-soon-cross.png"
                alt="Close"
                style={{ width: '32px', height: '32px', display: 'block' }}
              />
            </button>

            {/* Left half — image (381/752 = 50.7% of popup width) */}
            <div style={{ flex: '381 0 0px', minWidth: 0, overflow: 'hidden' }}>
              <img
                src="/assets/coming-soon-image.png"
                alt="Coming soon"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>

            {/* Right half — red panel with Figma noise effect (371/752 = 49.3%) */}
            <div style={{
              flex: '371 0 0px',
              position: 'relative',
              backgroundColor: 'rgb(169,69,69)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(20px, 4vw, 48px)',
              overflow: 'hidden',
            }}>
              {/* Figma NOISE effect: MONOTONE, noiseSize=0.5, black 25% opacity, density=1.0 */}
              <svg
                aria-hidden="true"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  pointerEvents: 'none', zIndex: 0,
                }}
              >
                <filter id="popup-noise">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65 0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                    result="noise"
                  />
                  <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
                  <feBlend in="SourceGraphic" in2="monoNoise" mode="normal" result="blended" />
                  <feComposite in="blended" in2="SourceGraphic" operator="in" />
                </filter>
                <rect
                  width="100%" height="100%"
                  fill="rgba(0,0,0,0.25)"
                  filter="url(#popup-noise)"
                />
              </svg>

              {/* Text */}
              <p style={{
                fontFamily: "'BERNIER Distressed', cursive",
                fontSize: 'clamp(16px, 3.2vw, 40px)',
                lineHeight: 1.15,
                color: '#ffffff',
                textAlign: 'center',
                margin: 0,
                textTransform: 'uppercase',
                position: 'relative',
                zIndex: 1,
              }}>
                book today and get 30% off the next time you vist us.
              </p>
            </div>
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
