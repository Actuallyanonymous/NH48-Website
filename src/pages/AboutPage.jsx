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
      <QuoteSection />
      <ValuesSection />
      <SiteFooter />
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
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
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
      />
    </section>
  )
}

// ─── Bottom arch border ────────────────────────────────────────────────────────
// Figma: alternating long (112×72) + short (112×45), color rgb(15,59,55)
function MotifBorder() {
  return (
    <div aria-hidden="true" style={{
      width: '100%', height: '72px',
      display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
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
// Figma: bg=rgb(20,83,77) h=479px
// Heading: BERNIER 64px rgb(242,212,62) at left=18.5% top=10%
// Body:    Helvetica Neue 32px w500 rgba(255,255,255,0.63) at left=23.5% top=49%
function TealSection() {
  const width = useWindowWidth()
  const mob = width < 768

  const bodyStyle = {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 500,
    color: 'rgba(255,255,255,0.63)',
    lineHeight: 1.22,
    textTransform: 'uppercase',
    letterSpacing: '-1.92px',
    textAlign: 'center',
    margin: 0,
  }

  if (mob) {
    return (
      <section style={{ width: '100%', backgroundColor: 'rgb(20,83,77)', padding: '48px 24px 0' }}>
        <h2 style={{
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: 'clamp(28px, 7vw, 48px)',
          color: 'rgb(242,212,62)',
          lineHeight: 1.15,
          margin: '0 0 24px',
        }}>
          Where two cities meet on a single plate
        </h2>
        <p style={{ ...bodyStyle, fontSize: 'clamp(16px, 4vw, 22px)', marginBottom: '40px' }}>
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
      {/* Heading — Figma: (279,48) BERNIER 64px yellow */}
      <h2 style={{
        position: 'absolute',
        left: '18.5%', top: '10%',
        width: '63.2%',
        fontFamily: "'BERNIER Distressed', cursive",
        fontSize: 'clamp(32px, 4.23vw, 64px)',
        color: 'rgb(242,212,62)',
        lineHeight: 1.15,
        margin: 0,
      }}>
        Where two cities meet on a single plate
      </h2>

      {/* Body — Figma: (355,235) Helvetica Neue 32px w500 white 63% */}
      <p style={{
        ...bodyStyle,
        position: 'absolute',
        left: '23.5%', top: '49%',
        width: '53.1%',
        fontSize: 'clamp(16px, 2.12vw, 32px)',
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

// ─── Quote Section ────────────────────────────────────────────────────────────
// Figma: Frame 1430101514 at relative-y=2162, 1512×477, bg=rgb(20,83,77)
// Oval food images at left/right edges (export section-3-oval-left/right.png from Figma)
// Quote: BERNIER 32.5px white, centered at left=16.2% top=38.8%
function QuoteSection() {
  const width = useWindowWidth()
  const mob = width < 768

  if (mob) {
    return (
      <section style={{
        width: '100%',
        backgroundColor: 'rgb(20,83,77)',
        padding: '56px 40px 48px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: 'clamp(20px, 5.5vw, 28px)',
          color: 'rgb(255,255,255)',
          lineHeight: 1.25,
          margin: 0,
          textTransform: 'none',
        }}>
          " We didn't open a restaurant. We built a road from our childhoods to your table. "
        </p>
      </section>
    )
  }

  const ovalW = 'clamp(140px, 18.5vw, 280px)'
  const ovalH = 'clamp(190px, 25.1vw, 380px)'
  const ovalBase = {
    position: 'absolute',
    top: '10%',
    width: ovalW,
    height: ovalH,
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'rgba(12,50,46,0.8)',
  }

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: 'clamp(360px, 31.5vw, 477px)',
      backgroundColor: 'rgb(20,83,77)',
      overflow: 'hidden',
    }}>
      {/* Left oval — bleeds past left edge */}
      <div style={{ ...ovalBase, left: '-4.2%' }}>
        <img src="/assets/about/section-3-oval-left.png" alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* Right oval — bleeds past right edge */}
      <div style={{ ...ovalBase, right: '-4.2%' }}>
        <img src="/assets/about/section-3-oval-right.png" alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* Quote — Figma: left=16.2%, top=38.8%, BERNIER 32.5px white, centered */}
      <p style={{
        position: 'absolute',
        left: '16.2%',
        right: '16.2%',
        top: '38.8%',
        transform: 'translateY(-50%)',
        fontFamily: "'BERNIER Distressed', cursive",
        fontSize: 'clamp(18px, 2.15vw, 32.5px)',
        color: 'rgb(255,255,255)',
        lineHeight: 1.25,
        margin: 0,
        textAlign: 'center',
        textTransform: 'none',
      }}>
        " We didn't open a restaurant. We built a road from our childhoods to your table. "
      </p>
    </section>
  )
}

// ─── Values Section ────────────────────────────────────────────────────────────
// Figma: Group 513087 at relative-y=2761, three 450×258px terra cotta blocks
// Titles: BERNIER 40px rgb(255,212,0); body: Helvetica Neue 16px w500 rgb(249,241,237)
// Tagline below: BERNIER 28px rgb(137,71,37)
function ValuesSection() {
  const width = useWindowWidth()
  const mob = width < 768

  const values = [
    {
      title: 'Honest flavours',
      body: 'No shortcuts. No fusion for the sake of it. Just food that tastes the way it should.',
    },
    {
      title: 'Rooted in the streets',
      body: 'Every recipe traces back to a corner stall, a home kitchen, or a beloved dhabha.',
    },
    {
      title: 'Made with love',
      body: "Crafted to remind you of a place, a person, a moment you didn't know you missed.",
    },
  ]

  if (mob) {
    return (
      <section style={{ width: '100%', backgroundColor: 'rgb(252,248,235)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingTop: '2px' }}>
          {values.map((v, i) => (
            <div key={i} style={{
              backgroundColor: 'rgb(184,98,54)',
              padding: '28px 24px 32px',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontFamily: "'BERNIER Distressed', cursive",
                fontSize: 'clamp(24px, 6vw, 36px)',
                color: 'rgb(255,212,0)',
                lineHeight: 1.05,
                margin: '0 0 10px',
              }}>{v.title}</h3>
              <p style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: '15px',
                fontWeight: 500,
                color: 'rgb(249,241,237)',
                lineHeight: 1.5,
                margin: 0,
                textTransform: 'none',
              }}>{v.body}</p>
            </div>
          ))}
        </div>
        <p style={{
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: 'clamp(16px, 4.5vw, 24px)',
          color: 'rgb(137,71,37)',
          textAlign: 'center',
          margin: '28px 24px 32px',
          textTransform: 'none',
        }}>Come hungry. Leave with a story.</p>
      </section>
    )
  }

  return (
    <section style={{
      width: '100%',
      backgroundColor: 'rgb(252,248,235)',
      paddingTop: 'clamp(32px, 4.3vw, 65px)',
      paddingBottom: 'clamp(24px, 3.8vw, 58px)',
    }}>
      {/* Three equal boxes — Figma: 450×258px each, ~13px gap, 68px side padding */}
      <div style={{
        display: 'flex',
        gap: 'clamp(8px, 0.86vw, 13px)',
        padding: '0 4.5%',
        height: 'clamp(194px, 17.1vw, 258px)',
      }}>
        {values.map((v, i) => (
          <div key={i} style={{
            flex: 1,
            backgroundColor: 'rgb(184,98,54)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 8%',
          }}>
            <h3 style={{
              fontFamily: "'BERNIER Distressed', cursive",
              fontSize: 'clamp(18px, 2.65vw, 40px)',
              color: 'rgb(255,212,0)',
              lineHeight: 1.05,
              margin: '0 0 clamp(6px, 0.8vw, 12px)',
              textAlign: 'center',
            }}>{v.title}</h3>
            <p style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 'clamp(11px, 1.06vw, 16px)',
              fontWeight: 500,
              color: 'rgb(249,241,237)',
              lineHeight: 1.5,
              margin: 0,
              textAlign: 'center',
              textTransform: 'none',
            }}>{v.body}</p>
          </div>
        ))}
      </div>
      {/* Tagline — Figma: BERNIER 28px rgb(137,71,37) */}
      <p style={{
        fontFamily: "'BERNIER Distressed', cursive",
        fontSize: 'clamp(14px, 1.85vw, 28px)',
        color: 'rgb(137,71,37)',
        textAlign: 'center',
        margin: 'clamp(16px, 2.5vw, 38px) auto 0',
        textTransform: 'none',
      }}>Come hungry. Leave with a story.</p>
    </section>
  )
}

// ─── Two-column section ───────────────────────────────────────────────────────
// Figma: (76,1444) 1368×640
// Left: Rectangle 356 (76,0) 604×640 bg=rgb(184,98,54) — Frame 1430101513 (78,0) 602×640
//   "welcome to nh48." BERNIER 48px rgb(255,212,0) at left=26px top=119px
//   Body: Helvetica Neue 16px w500 white 91% at (26,204) w=483px
//   Vector: section-2-left-vector.png at (287,492) 204×162px
// Right: section-2-image.png at (609,87) 835×466
function TwoColumnSection() {
  const width = useWindowWidth()
  const mob = width < 768

  const bodyText = "Nestled between the vibrant cultures of New Delhi and Mumbai, NH48 is a culinary celebration born from the inspiring journey of two passionate food lovers — Prady and Satyam. Together, they crossed paths at Chai Pani and discovered a shared dream: to create a dining experience that honors the rich culinary heritage of their beloved cities. Our restaurant draws its name from the iconic highway that connects Delhi and Mumbai, symbolizing the journey of flavors that unite these two diverse gastronomic worlds. At NH48, we offer a thoughtfully curated menu featuring comforting staples and vibrant street-side classics that are true to the essence of both cities. Each dish is crafted with love, celebrating honest and heartfelt flavors."

  if (mob) {
    return (
      <section style={{ width: '100%' }}>
        {/* Image on top for mobile */}
        <div style={{ width: '100%', aspectRatio: '835/466', overflow: 'hidden' }}>
          <img src="/assets/about/section-2-image.png" alt="NH48 story"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        {/* Terra cotta text block */}
        <div style={{
          width: '100%',
          backgroundColor: 'rgb(184,98,54)',
          padding: '40px 24px 48px',
          position: 'relative',
        }}>
          <h3 style={{
            fontFamily: "'BERNIER Distressed', cursive",
            fontSize: 'clamp(28px, 7vw, 40px)',
            color: 'rgb(255,212,0)',
            lineHeight: 1.05,
            margin: '0 0 20px',
          }}>welcome to nh48.</h3>
          <p style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: '15px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.91)',
            lineHeight: 1.6,
            textTransform: 'none',
            margin: 0,
          }}>{bodyText}</p>
        </div>
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
      {/* Left — terra cotta bg: (76,0) 604×640 → left=5%, w=39.9% */}
      <div style={{
        position: 'absolute',
        left: '5%', top: 0,
        width: '39.9%', height: '100%',
        backgroundColor: 'rgb(184,98,54)',
        overflow: 'hidden',
      }}>
        {/* "welcome to nh48." — Figma: (26,119) BERNIER 48px yellow */}
        <h3 style={{
          position: 'absolute',
          left: '4.3%', top: '18.6%',
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: 'clamp(24px, 3.17vw, 48px)',
          color: 'rgb(255,212,0)',
          lineHeight: 1.05,
          margin: 0,
          width: '85%',
        }}>welcome to nh48.</h3>

        {/* Body — Figma: (26,204) Helvetica Neue 16px w500 white 91% */}
        <p style={{
          position: 'absolute',
          left: '4.3%', top: '31.9%',
          width: '80.2%',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 'clamp(11px, 1.06vw, 16px)',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.91)',
          lineHeight: 1.6,
          textTransform: 'none',
          margin: 0,
        }}>{bodyText}</p>

        {/* Decorative vector — Figma: (287,492) 204×162 */}
        <img
          src="/assets/about/section-2-left-vector.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '47.7%', top: '76.9%',
            width: 'clamp(80px, 13.5vw, 204px)',
            height: 'auto',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Right — image: (609,87) 835×466 → left=40.3%, top=13.6%, w=55.2%, h=72.8% */}
      <div style={{
        position: 'absolute',
        left: '40.3%', top: '13.6%',
        width: '55.2%', height: '72.8%',
        overflow: 'hidden',
      }}>
        <img
          src="/assets/about/section-2-image.png"
          alt="NH48 — where two cities meet"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </section>
  )
}
