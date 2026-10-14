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

// Closure popup — shows once per session
function WelcomePopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('nh48_closure_1014_seen')) {
      setVisible(true)
      sessionStorage.setItem('nh48_closure_1014_seen', '1')
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

            <div
              style={{
                maxWidth: '560px',
                width: '82%',
                textAlign: 'center',
                color: '#FFFFFF',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 500,
                letterSpacing: '0.04em',
                lineHeight: 1.45,
                textTransform: 'uppercase',
              }}
            >
              <p style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', margin: '0 0 28px' }}>
                We will be closed Wednesday 10/14 due to maintenance.
              </p>
              <p style={{ fontSize: 'clamp(16px, 1.9vw, 22px)', margin: '0 0 28px' }}>
                We apologize for any inconvenience.
              </p>
              <p style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', margin: 0 }}>
                We will reopen Thursday 10/15.
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
