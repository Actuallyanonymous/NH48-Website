import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PrivateEventsPage from './pages/PrivateEventsPage'
import PrivateEventsInquiryPage from './pages/PrivateEventsInquiryPage'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Holiday closure popup — shows once per session
function WelcomePopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('nh48_holiday_popup_seen')) {
      setVisible(true)
      sessionStorage.setItem('nh48_holiday_popup_seen', '1')
    }
  }, [])

  const close = () => setVisible(false)

  if (!visible) return null

  const bodyStyle = {
    fontFamily: "'BERNIER Distressed', cursive",
    fontSize: 'clamp(14px, 3.19vw, 24px)',
    lineHeight: 1.146,
    letterSpacing: '-0.96px',
    color: '#FFFFFF',
    textAlign: 'center',
    margin: 0,
    textTransform: 'uppercase',
  }

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
          {/* Figma 182:346 — 752×533, red instead of #14534D */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: 'min(92vw, 752px)',
              height: 'min(calc(92vw * 533 / 752), 533px)',
              backgroundColor: 'rgb(169,69,69)',
              boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 min(180px, 12vw)',
            }}
          >
            <button
              onClick={close}
              style={{
                position: 'absolute',
                top: '15px',
                right: '16px',
                zIndex: 10,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                lineHeight: 0,
                width: '50px',
                height: '50px',
              }}
            >
              <img
                src="/assets/coming-soon-cross.png"
                alt="Close"
                style={{ width: '50px', height: '50px', display: 'block' }}
              />
            </button>

            <div style={{ width: '100%', maxWidth: '391px' }}>
              <h2 style={{
                fontFamily: "'BERNIER Distressed', cursive",
                fontWeight: 400,
                fontSize: 'clamp(22px, 4.8vw, 36px)',
                lineHeight: 0.996,
                letterSpacing: '-0.96px',
                color: '#FFFFFF',
                textAlign: 'center',
                margin: '0 0 24px',
                textTransform: 'uppercase',
              }}>
                A Little Holiday Pause
              </h2>

              <p style={{ ...bodyStyle, marginBottom: '24px' }}>
                In observance of Labor Day, N.H.48 Indian Kitchen will be closed on Monday, September 7th.
              </p>

              <p style={{ ...bodyStyle, marginBottom: '24px' }}>
                We’re taking a day to recharge and spend time with our families, and we’ll be back Wednesday September 8th, ready to welcome you around the table.
              </p>

              <p style={bodyStyle}>
                Thank you for your understanding, and we look forward to seeing you soon.
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
        <Route path="/private-events" element={<PageWrapper><PrivateEventsPage /></PageWrapper>} />
        <Route path="/private-events/inquire" element={<PageWrapper><PrivateEventsInquiryPage /></PageWrapper>} />
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
