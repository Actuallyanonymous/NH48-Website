import { useWindowWidth } from '../hooks/useWindowWidth'
import SiteFooter from '../components/SiteFooter'

// ─── About Page ───────────────────────────────────────────────────────────────
// Figma: MacBook Pro 14" - 35 (1512×3860)

export default function AboutPage() {
  return (
    <div style={{ width: '100%' }}>
      <HeroSection />
      <TealSection />
      <TwoColumnSection />
      <SiteFooter />
    </div>
  )
}

// ─── Hero — fills full viewport below 60px navbar ─────────────────────────────
function HeroSection() {
  return (
    <section style={{
      width: '100%',
      height: 'calc(100dvh - 60px)',
      marginTop: '60px',
      overflow: 'hidden',
      lineHeight: 0,
    }}>
      <img
        src="/assets/about/hero-image.png"
        alt="About NH48"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />
    </section>
  )
}

// ─── Bottom border — alternating long (112×72) + short (112×45) motifs ────────
// Figma: color=rgb(15,59,55), same pattern as other sections
function MotifBorder() {
  return (
    <div aria-hidden="true" style={{
      width: '100%',
      height: '72px',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
    }}>
      {Array.from({ length: 12 }, (_, i) => [
        <img key={`t${i}`} src="/assets/about/section-2-motif-long.png"
          style={{ width: '112px', height: '72px', flexShrink: 0, alignSelf: 'flex-start', display: 'block' }} />,
        <img key={`s${i}`} src="/assets/about/section-2-motif-short.png"
          style={{ width: '112px', height: '45px', flexShrink: 0, display: 'block' }} />,
      ]).flat()}
    </div>
  )
}

// ─── Teal section ─────────────────────────────────────────────────────────────
// Figma: bg=rgb(20,83,77), h=479px
// Heading: "Where two cities meet on a single plate" — BERNIER 64px, rgb(242,212,62) yellow
//          at (279,48) relative to section — left=18.5%, top=10%
// Body: Helvetica Neue 32px w500, white 63% opacity
//       at (355,235) relative to section — left=23.5%, top=49%, w=53.1%
function TealSection() {
  const width = useWindowWidth()
  const mob = width < 768

  if (mob) {
    return (
      <section style={{
        width: '100%',
        backgroundColor: 'rgb(20,83,77)',
        padding: '48px 24px 0',
      }}>
        <h2 style={{
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: 'clamp(28px, 7vw, 48px)',
          color: 'rgb(242,212,62)',
          lineHeight: 1.05,
          margin: '0 0 24px',
        }}>
          Where two cities meet on a single plate
        </h2>
        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 'clamp(16px, 4vw, 22px)',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.63)',
          lineHeight: 1.5,
          margin: '0 0 40px',
        }}>
          A road, a reunion, and a shared dream — NH48 is where the flavors of Delhi and Mumbai find each other.
        </p>
        <MotifBorder />
      </section>
    )
  }

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      backgroundColor: 'rgb(20,83,77)',
      height: 'clamp(360px, 31.7vw, 479px)',
      overflow: 'hidden',
    }}>
      {/* Heading — Figma: (279,48) 955×148, BERNIER 64px yellow */}
      <h2 style={{
        position: 'absolute',
        left: '18.5%',
        top: '10%',
        width: '63.2%',
        fontFamily: "'BERNIER Distressed', cursive",
        fontSize: 'clamp(32px, 4.23vw, 64px)',
        color: 'rgb(242,212,62)',
        lineHeight: 1.05,
        margin: 0,
      }}>
        Where two cities meet on a single plate
      </h2>

      {/* Body — Figma: (355,235) 803×427, Helvetica Neue 32px w500 white 63% */}
      <p style={{
        position: 'absolute',
        left: '23.5%',
        top: '49%',
        width: '53.1%',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 'clamp(18px, 2.12vw, 32px)',
        fontWeight: 500,
        color: 'rgba(255,255,255,0.63)',
        lineHeight: 1.5,
        margin: 0,
      }}>
        A road, a reunion, and a shared dream — NH48 is where the flavors of Delhi and Mumbai find each other.
      </p>

      {/* Bottom border */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <MotifBorder />
      </div>
    </section>
  )
}

// ─── Two-column section ───────────────────────────────────────────────────────
// Figma: y=1444, h=640
// Left: Rectangle 356 (76,0) 604×640 fill=rgb(184,98,54) terra cotta
// Right: image (609,87) 835×466
function TwoColumnSection() {
  const width = useWindowWidth()
  const mob = width < 768

  if (mob) {
    return (
      <section style={{ width: '100%' }}>
        {/* Terra cotta block on mobile — full width, shorter */}
        <div style={{
          width: '100%',
          backgroundColor: 'rgb(184,98,54)',
          height: '200px',
        }} />
      </section>
    )
  }

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: 'clamp(480px, 42.3vw, 640px)',
      backgroundColor: 'rgb(252,248,235)',
      overflow: 'hidden',
    }}>
      {/* Left — terra cotta block: (76,0) 604×640 → left=5%, w=39.9%, h=100% */}
      <div style={{
        position: 'absolute',
        left: '5%',
        top: 0,
        width: '39.9%',
        height: '100%',
        backgroundColor: 'rgb(184,98,54)',
      }} />

      {/* Right — image: (609,87) 835×466 → left=40.3%, top=13.6%, w=55.2%, h=72.8% */}
      <div style={{
        position: 'absolute',
        left: '40.3%',
        top: '13.6%',
        width: '55.2%',
        height: '72.8%',
        overflow: 'hidden',
      }}>
        <img
          src="/assets/about/hero-image.png"
          alt="About NH48"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </section>
  )
}
