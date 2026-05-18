import { useWindowWidth } from '../hooks/useWindowWidth'
import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'

// ─── Scallop Divider (matches Figma: connected cream arcs at teal→cream boundary) ─
// The teal section ends with connected cream bumps pointing downward
// Uses the same SVG technique as the homepage ScallopBorder (proven working)
function ScallopDivider() {
  const count = 72           // enough arcs across full width
  const arcW  = 21           // each scallop width — matches Figma 21px pitch
  const r     = arcW / 2
  const height = r           // strip height = one radius (half-circle visible)
  const totalW = count * arcW

  // Technique: draw the TEAL shape that has scalloped bottom edge
  // Start bottom-left, arch along bottom edge (sweep=1 → arcs bow downward),
  // then close the rectangle at the top. This is position='top' from homepage.
  let d = `M 0,${height}`
  for (let i = 0; i < count; i++) {
    const x2 = (i + 1) * arcW
    d += ` A${r},${r} 0 0,1 ${x2},${height}`
  }
  d += ` L${totalW},0 L0,0 Z`

  return (
    <div aria-hidden="true" style={{ lineHeight: 0, overflow: 'hidden', width: '100%', backgroundColor: '#FCF9EB' }}>
      <svg
        viewBox={`0 0 ${totalW} ${height}`}
        preserveAspectRatio="none"
        style={{ width: '100%', height: `${height}px`, display: 'block' }}
      >
        <path d={d} fill="#14534D" />
      </svg>
    </div>
  )
}

// ─── Indian City Skyline border ───────────────────────────────────────────────
// Uses the generated city silhouette image as a repeating background
function CitySkylineBorder({ mob }) {
  const h = mob ? 55 : 80
  // The generated image is a grid of silhouettes — we clip to just the top row
  // by setting a tall backgroundSize and only showing the top `h` pixels
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: `${h}px`,
        overflow: 'hidden',
        backgroundImage: 'url(/assets/menu/indian-city-skyline.png)',
        backgroundRepeat: 'repeat-x',
        // Scale so the full image height maps to ~6x the display height
        // → only the very top row (first band of domes) is visible
        backgroundSize: `auto ${h * 6}px`,
        backgroundPosition: 'top left',
      }}
    />
  )
}

// ─── Food Label Card ──────────────────────────────────────────────────────────
// Uses actual vintage Indian food label photos from generated images
// ─── Menu CTA Button (Figma: 207×43, #A94545, white inset border) ─────────────
function MenuBtn({ label, to }) {
  return (
    <Link
      to={to}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '207px',
        height: '43px',
        backgroundColor: '#A94545',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      {/* Inset white border — Figma Rectangle 269 */}
      <div style={{
        position: 'absolute',
        top: '5.5px',
        left: '9px',
        right: '9px',
        bottom: '5.5px',
        border: '1.11px solid rgba(255,255,255,0.85)',
        pointerEvents: 'none',
      }} />
      <span style={{
        fontFamily: 'BERNIER Distressed, cursive',
        fontSize: '17.76px',
        letterSpacing: '0.05em',
        color: '#FFFEFE',
        textShadow: '0px 1.937px 1.937px rgba(0,0,0,0.25)',
        position: 'relative',
        zIndex: 1,
      }}>
        {label}
      </span>
    </Link>
  )
}

// ─── Section 2: Teal (Figma: bg #14534D, h=754px, left=0, top=780) ──────────
function TealSection({ mob }) {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#14534D',
      height: mob ? 'auto' : 'clamp(500px, 49.9vw, 754px)',
      overflow: 'visible',
    }}>

      {/* Cards group — Figma: left=87px, top=108px (108/754=14.3%), 1397×398px */}
      <img
        src="/assets/menu/section-2-group.png"
        alt="Menu highlight dishes"
        style={{
          position: mob ? 'relative' : 'absolute',
          left: mob ? 'auto' : '5.75%',
          top: mob ? 'auto' : '14.3%',
          width: mob ? '100%' : '92.4%',
          height: 'auto',
          display: 'block',
          zIndex: 1,
        }}
      />

      {/* Left motif — Figma: left=43px, top=340px (45.1% of 754px), 174×213px */}
      <img
        src="/assets/menu/section-2-motif.png"
        alt=""
        style={{
          position: 'absolute',
          left: '43px',
          top: '45.1%',
          width: 'clamp(100px, 11.5vw, 174px)',
          height: 'auto',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Tagline — Figma: left=344px (22.8%), top=578px (76.7%), w=823px (54.5%)
          BERNIER Distressed 40px, lh=92.075%, center */}
      <p style={{
        position: mob ? 'relative' : 'absolute',
        left: mob ? 'auto' : '22.8%',
        top: mob ? 'auto' : '76.7%',
        width: mob ? 'auto' : '54.5%',
        margin: mob ? '24px 24px 40px' : '0',
        fontFamily: 'BERNIER Distressed, cursive',
        fontSize: mob ? '22px' : 'clamp(24px, 2.65vw, 40px)',
        lineHeight: 0.921,
        color: '#FFFFFF',
        textAlign: 'center',
        zIndex: 1,
      }}>
        From the heart of Delhi to the shores of Mumbai, we've mapped the boldest flavors of the highway onto every plate, ready for you to explore.
      </p>

      {/* Dot divider — Figma: cream circles 21px, 26px pitch, centered on bottom edge */}
      <div style={{
        position: 'absolute',
        bottom: '-10px',
        left: 0, right: 0,
        height: '21px',
        backgroundImage: 'radial-gradient(circle 10.5px at center, #FCFAEB 100%, transparent 100%)',
        backgroundSize: '26px 21px',
        backgroundRepeat: 'repeat-x',
        pointerEvents: 'none',
        zIndex: 10,
      }} />
    </section>
  )
}

// ─── Section 2: Cream menu CTA (Figma: bg #FCF9EB) ───────────────────────────
function CreamSection({ mob }) {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#FCF9EB',
      height: mob ? 'auto' : 'clamp(500px, 47.2vw, 714px)',
      overflow: 'hidden',
    }}>

      {/* Images group — Figma: left=405px(26.8%), top=122px(17.1%), 701×343px */}
      <img
        src="/assets/menu/section-3-group.png"
        alt="Food and drinks menu"
        style={{
          position: mob ? 'relative' : 'absolute',
          left: mob ? 'auto' : '26.8%',
          top: mob ? 'auto' : '17.1%',
          width: mob ? '90%' : '46.4%',
          height: 'auto',
          display: 'block',
          margin: mob ? '40px auto 0' : '0',
          zIndex: 1,
        }}
      />

      {/* Buttons — Figma: food menu left=31.3%, drinks menu left=54.7%, top=71.1%, 207×43px each */}
      <Link
        to="/menu/food"
        style={{
          position: mob ? 'relative' : 'absolute',
          left: mob ? 'auto' : '31.3%',
          top: mob ? 'auto' : '71.1%',
          display: mob ? 'inline-flex' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '207px',
          height: '43px',
          backgroundColor: '#A94545',
          textDecoration: 'none',
          margin: mob ? '24px auto 0 24px' : '0',
          zIndex: 1,
        }}
      >
        <div style={{ position: 'absolute', top: '6px', left: '8px', right: '8px', bottom: '5px', border: '1.11px solid rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <span style={{ fontFamily: 'BERNIER Distressed, cursive', fontSize: '17.76px', color: '#FFFEFE', position: 'relative', zIndex: 1 }}>food menu</span>
      </Link>

      <Link
        to="/menu/drinks"
        style={{
          position: mob ? 'relative' : 'absolute',
          left: mob ? 'auto' : '54.7%',
          top: mob ? 'auto' : '71.1%',
          display: mob ? 'inline-flex' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '207px',
          height: '43px',
          backgroundColor: '#A94545',
          textDecoration: 'none',
          margin: mob ? '24px 0 40px 12px' : '0',
          zIndex: 1,
        }}
      >
        <div style={{ position: 'absolute', top: '6px', left: '8px', right: '8px', bottom: '5px', border: '1.11px solid rgba(255,255,255,0.85)', pointerEvents: 'none' }} />
        <span style={{ fontFamily: 'BERNIER Distressed, cursive', fontSize: '17.76px', color: '#FFFEFE', position: 'relative', zIndex: 1 }}>drinks menu</span>
      </Link>

      {/* Border — Figma: tall(113×72) + short(101×46) alternating, rgba(107,31,31,0.54), bottom=0 */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '72px',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}>
        {Array.from({ length: 8 }, (_, i) => [
          <img key={`t${i}`} src="/assets/menu/section-3-motif-2.png"
            style={{ width: '113px', height: '72px', flexShrink: 0, alignSelf: 'flex-start', display: 'block' }} />,
          <img key={`s${i}`} src="/assets/menu/section-3-motif-1.png"
            style={{ width: '101px', height: '46px', flexShrink: 0, display: 'block' }} />,
        ]).flat()}
      </div>
    </section>
  )
}

// ─── Site Footer (exact same as HomePage) ────────────────────────────────────

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MenuLandingPage() {
  const width = useWindowWidth()
  const mob = width < 640
  const tab = width < 900 && width >= 640

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      {/* ── HERO — exact 1512×708px image from Figma ── */}
      <section style={{ width: '100%', lineHeight: 0 }}>
        <img
          src="/assets/menu/menu-page-hero.png"
          alt="NH48 menu"
          style={{ width: '100%', display: 'block' }}
        />
      </section>

      {/* ── SECTION 1: Teal — Figma: bg:#14534D, h:754px ── */}
      <TealSection mob={mob} />

      {/* ── SECTION 2: Cream — Figma: bg:#FCF9EB, food images + menu buttons ── */}
      <CreamSection mob={mob} />

      {/* ── FOOTER — same component as homepage ── */}
      <SiteFooter />
    </div>
  )
}
