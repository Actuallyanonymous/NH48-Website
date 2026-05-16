import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'HOME',         to: '/',       external: false },
  { label: 'ABOUT',        to: '/about',  external: false },
  { label: 'MENU',         to: '/menu',   external: false },
  { label: 'ORDER ONLINE', to: '#',       external: true  },
  { label: 'VISIT US',     to: '/visit',  external: false },
  { label: 'PRESS',        to: '#',       external: true  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [drawerOpen, setDrawer]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkColor = scrolled ? '#1A1A1A' : '#ffffff'

  const linkStyle = (isActive) => ({
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: linkColor,
    borderBottom: isActive ? '2px solid #F5C42C' : '2px solid transparent',
    paddingBottom: 2,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    textDecoration: 'none',
    transition: 'color 0.3s',
  })

  return (
    <>
      {/* ── Fixed navbar bar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px',
        backgroundColor: scrolled ? '#ffffff' : 'transparent',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
        transition: 'background-color 0.3s, box-shadow 0.3s',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: 28,
          color: '#F5C42C',
          letterSpacing: '0.06em',
        }}>NH48</Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}
             className="nav-desktop">
          {NAV_LINKS.map(({ label, to, external }) =>
            external ? (
              <a key={label} href={to} style={linkStyle(false)}>{label}</a>
            ) : (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                style={({ isActive }) => linkStyle(isActive)}
              >{label}</NavLink>
            )
          )}
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setDrawer(true)}
          className="nav-hamburger"
          aria-label="Open menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect y="4"  width="24" height="2.5" rx="1" fill="#1B5C4F" />
            <rect y="11" width="24" height="2.5" rx="1" fill="#1B5C4F" />
            <rect y="18" width="24" height="2.5" rx="1" fill="#1B5C4F" />
          </svg>
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawer(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 99,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: 'tween', duration: 0.28 }}
              style={{
                position: 'fixed', top: 0, right: 0,
                width: 280, height: '100vh',
                backgroundColor: '#1B5C4F',
                zIndex: 100,
                padding: '80px 40px',
                display: 'flex', flexDirection: 'column', gap: 24,
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setDrawer(false)}
                aria-label="Close menu"
                style={{
                  position: 'absolute', top: 20, right: 20,
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'white', fontSize: 24, lineHeight: 1,
                }}
              >✕</button>

              {/* Drawer links */}
              {NAV_LINKS.map(({ label, to, external }) =>
                external ? (
                  <a key={label} href={to} onClick={() => setDrawer(false)}
                     style={{ fontFamily: "'BERNIER Distressed', cursive", fontSize: 28, color: 'white', letterSpacing: '0.06em' }}>
                    {label}
                  </a>
                ) : (
                  <NavLink key={label} to={to} end={to === '/'}
                    onClick={() => setDrawer(false)}
                    style={{ fontFamily: "'BERNIER Distressed', cursive", fontSize: 28, color: 'white', letterSpacing: '0.06em' }}>
                    {label}
                  </NavLink>
                )
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Responsive styles ── */}
      <style>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}
