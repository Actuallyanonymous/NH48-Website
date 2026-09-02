import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'HOME',           to: '/',               external: false },
  { label: 'MENU',           to: '/#menu',          external: false, scroll: true },
  { label: 'PRIVATE EVENTS', to: '/private-events',  external: false },
  { label: 'ORDER ONLINE',   to: 'https://order.toasttab.com/online/nh48-bombay-to-delhi-4828-macarthur-boulevard-northwest-ll', external: true  },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/nh48indiankitchen/' },
]

// Figma: bg=#A94545 red, 72px tall
// Links: Helvetica Neue 20px, white, uppercase
export default function Navbar() {
  const [drawerOpen, setDrawer] = useState(false)

  const handleMenuClick = (e) => {
    e.preventDefault()
    const menuSection = document.getElementById('menu-section')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const linkStyle = (isActive) => ({
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: '20px',
    fontWeight: 400,
    textTransform: 'uppercase',
    color: 'white',
    borderBottom: isActive ? '2px solid white' : '2px solid transparent',
    paddingBottom: 2,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    textDecoration: 'none',
  })

  return (
    <>
      {/* ── Fixed navbar — red bg, 72px tall ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px',
        backgroundColor: '#A94545',
      }}>
        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}
             className="nav-desktop">
          {NAV_LINKS.map(({ label, to, external, scroll }) =>
            external ? (
              <a key={label} href={to} style={linkStyle(false)}>{label}</a>
            ) : scroll ? (
              <a key={label} href={to} onClick={handleMenuClick} style={linkStyle(false)}>{label}</a>
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

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }} className="nav-desktop">
          <a href={SOCIALS[0].href} aria-label={SOCIALS[0].label} style={{ display: 'block', position: 'relative', width: 22, height: 22 }}>
            <img src="/assets/home-page/new/icon-instagram-1.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
            <img src="/assets/home-page/new/icon-instagram-2.svg" alt="" style={{ position: 'absolute', width: '38%', height: '38%', top: '31%', left: '31%' }} />
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setDrawer(true)}
          className="nav-hamburger"
          aria-label="Open menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect y="4"  width="24" height="2.5" rx="1" fill="white" />
            <rect y="11" width="24" height="2.5" rx="1" fill="white" />
            <rect y="18" width="24" height="2.5" rx="1" fill="white" />
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
                backgroundColor: '#A94545',
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
              {NAV_LINKS.map(({ label, to, external, scroll }) =>
                external ? (
                  <a key={label} href={to} onClick={() => setDrawer(false)}
                     style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 20, color: 'white', textTransform: 'uppercase', textDecoration: 'none' }}>
                    {label}
                  </a>
                ) : scroll ? (
                  <a key={label} href={to} onClick={(e) => { handleMenuClick(e); setDrawer(false); }}
                     style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 20, color: 'white', textTransform: 'uppercase', textDecoration: 'none' }}>
                    {label}
                  </a>
                ) : (
                  <NavLink key={label} to={to} end={to === '/'}
                    onClick={() => setDrawer(false)}
                    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 20, color: 'white', textTransform: 'uppercase', textDecoration: 'none' }}>
                    {label}
                  </NavLink>
                )
              )}

              {/* Drawer social icons */}
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 12 }}>
                <a href={SOCIALS[0].href} aria-label={SOCIALS[0].label} style={{ display: 'block', position: 'relative', width: 22, height: 22 }}>
                  <img src="/assets/home-page/new/icon-instagram-1.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
                  <img src="/assets/home-page/new/icon-instagram-2.svg" alt="" style={{ position: 'absolute', width: '38%', height: '38%', top: '31%', left: '31%' }} />
                </a>
              </div>
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
