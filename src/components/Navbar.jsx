import { useState } from 'react'
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

// Figma: bg=rgb(252,248,235) cream
// Logo: BERNIER Distressed, gradient #150E51 (rgb(21,14,81)) — dark navy-indigo
// Links: Arcane Nine 20.34px, color #013971 (rgb(1,57,113))
export default function Navbar() {
  const [drawerOpen, setDrawer] = useState(false)

  const linkStyle = (isActive) => ({
    fontFamily: "'Arcane Nine', sans-serif",
    fontSize: '20px',
    fontWeight: 400,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: '#013971',
    borderBottom: isActive ? '2px solid #013971' : '2px solid transparent',
    paddingBottom: 2,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    textDecoration: 'none',
  })

  return (
    <>
      {/* ── Fixed navbar — cream bg, 60px tall ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px',
        backgroundColor: 'rgb(252,248,235)',
        boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
      }}>
        {/* Logo — Figma: BERNIER Distressed, gradient fill #150E51 dark navy-indigo */}
        <Link to="/" style={{
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: '34px',
          background: 'linear-gradient(160deg, #150E51 0%, #140F52 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.04em',
          lineHeight: 1,
          textDecoration: 'none',
        }}>nh48</Link>

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
            <rect y="4"  width="24" height="2.5" rx="1" fill="rgb(1,57,113)" />
            <rect y="11" width="24" height="2.5" rx="1" fill="rgb(1,57,113)" />
            <rect y="18" width="24" height="2.5" rx="1" fill="rgb(1,57,113)" />
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
                backgroundColor: 'rgb(252,248,235)',
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
                  color: 'rgb(1,57,113)', fontSize: 24, lineHeight: 1,
                }}
              >✕</button>

              {/* Drawer links */}
              {NAV_LINKS.map(({ label, to, external }) =>
                external ? (
                  <a key={label} href={to} onClick={() => setDrawer(false)}
                     style={{ fontFamily: "'Arcane Nine', sans-serif", fontSize: 20, color: '#013971', letterSpacing: '0.04em', textDecoration: 'none' }}>
                    {label}
                  </a>
                ) : (
                  <NavLink key={label} to={to} end={to === '/'}
                    onClick={() => setDrawer(false)}
                    style={{ fontFamily: "'Arcane Nine', sans-serif", fontSize: 20, color: '#013971', letterSpacing: '0.04em', textDecoration: 'none' }}>
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
