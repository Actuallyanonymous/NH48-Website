import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useWindowWidth } from '../hooks/useWindowWidth'
gsap.registerPlugin(ScrollTrigger)

const HERO_IMAGE = 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80'

const CARD_IMAGES = {
  food1:  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80',
  delhi:  'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80',
  food2:  'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80',
  mumbai: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80',
}

const FOOD_PHOTOS = [
  'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&q=80',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
  'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
]

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CityCardsSection />
      <FoodShowcaseSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '500px',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <img
        src={HERO_IMAGE}
        alt="NH48 hero"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.42)',
      }} />

      {/* Centered text */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Yellow rectangle behind heading */}
          <div style={{
            backgroundColor: 'rgba(245,196,44,0.18)',
            padding: '8px 24px 4px',
            marginBottom: '12px',
            display: 'inline-block',
          }}>
            <h1 style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(48px, 8vw, 96px)',
              color: '#F5C42C',
              letterSpacing: '0.04em',
              lineHeight: 1,
            }}>
              WELCOME TO NH48
            </h1>
          </div>

          <p style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(13px, 1.8vw, 18px)',
            color: 'white',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            marginTop: '8px',
          }}>
            FROM CAPITAL TO COAST
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function CityCardsSection() {
  const sectionRef = useRef(null)
  const width = useWindowWidth()

  useGSAP(() => {
    const tl = {
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
    }
    gsap.to(sectionRef.current.querySelectorAll('.drift-left'),  { x: -50, ease: 'none', scrollTrigger: tl })
    gsap.to(sectionRef.current.querySelectorAll('.drift-right'), { x:  50, ease: 'none', scrollTrigger: tl })
  }, { scope: sectionRef })

  const cardW = 'clamp(180px, 20vw, 260px)'
  const mob = width < 768

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#1B5C4F',
        paddingTop: '80px',
        paddingBottom: '160px',
        overflow: 'hidden',
      }}
    >
      {/* Cards row — scrollable on mobile */}
      <div style={{
        display: 'flex',
        justifyContent: mob ? 'flex-start' : 'space-evenly',
        alignItems: 'flex-end',
        width: '100%',
        padding: mob ? '0 24px' : '0 40px',
        minHeight: mob ? 'auto' : '320px',
        overflowX: mob ? 'auto' : 'visible',
        gap: mob ? '20px' : '0',
        paddingBottom: mob ? '24px' : '0',
        scrollSnapType: mob ? 'x mandatory' : 'none',
      }}>

        {/* Card 1 — Oval food */}
        <div className="drift-left"
             style={{ width: mob ? 'clamp(150px, 55vw, 200px)' : cardW, marginBottom: 0, flexShrink: 0, scrollSnapAlign: mob ? 'start' : 'none' }}>
          <div style={{
            width: '100%', aspectRatio: '1/1',
            borderRadius: '50%', overflow: 'hidden', border: '3px solid #D4B84A',
          }}>
            <img src={CARD_IMAGES.food1} alt="Delhi food"
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Card 2 — Arch Delhi */}
        <div className="drift-right"
             style={{ width: mob ? 'clamp(150px, 55vw, 200px)' : cardW, flexShrink: 0, position: 'relative', marginBottom: mob ? '0' : '60px', scrollSnapAlign: mob ? 'start' : 'none' }}>
          <div style={{
            width: '100%', aspectRatio: '3/4', overflow: 'hidden',
            border: '3px solid #D4B84A',
            clipPath: 'polygon(0% 100%, 0% 35%, 50% 0%, 100% 35%, 100% 100%)',
            position: 'relative',
          }}>
            <img src={CARD_IMAGES.delhi} alt="Delhi"
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 30%, transparent)',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              paddingBottom: '20px',
            }}>
              <p style={{ fontFamily: 'Bebas Neue, cursive', color: '#F5C42C', fontSize: 'clamp(14px, 1.4vw, 18px)', letterSpacing: '0.1em' }}>DELHI / NH48</p>
            </div>
          </div>
        </div>

        {/* Card 3 — Oval food */}
        <div className="drift-left"
             style={{ width: mob ? 'clamp(150px, 55vw, 200px)' : cardW, flexShrink: 0, scrollSnapAlign: mob ? 'start' : 'none' }}>
          <div style={{
            width: '100%', aspectRatio: '1/1',
            borderRadius: '50%', overflow: 'hidden', border: '3px solid #D4B84A',
          }}>
            <img src={CARD_IMAGES.food2} alt="Mumbai food"
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Card 4 — Arch Mumbai */}
        <div className="drift-right"
             style={{ width: mob ? 'clamp(150px, 55vw, 200px)' : cardW, flexShrink: 0, position: 'relative', marginBottom: mob ? '0' : '60px', scrollSnapAlign: mob ? 'start' : 'none' }}>
          <div style={{
            width: '100%', aspectRatio: '3/4', overflow: 'hidden',
            border: '3px solid #D4B84A',
            clipPath: 'polygon(0% 100%, 0% 35%, 50% 0%, 100% 35%, 100% 100%)',
            position: 'relative',
          }}>
            <img src={CARD_IMAGES.mumbai} alt="Mumbai"
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 30%, transparent)',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              paddingBottom: '20px',
            }}>
              <p style={{ fontFamily: 'Bebas Neue, cursive', color: '#F5C42C', fontSize: 'clamp(14px, 1.4vw, 18px)', letterSpacing: '0.1em' }}>MUMBAI / NH48</p>
            </div>
          </div>
        </div>

      </div>

      {/* Tagline */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '48px', padding: '0 32px' }}>
        <p style={{
          fontFamily: 'Bebas Neue, cursive',
          color: 'white',
          fontSize: mob ? '22px' : 'clamp(20px, 2.8vw, 36px)',
          textAlign: 'center',
          letterSpacing: '0.04em',
          lineHeight: 1.3,
          maxWidth: '700px',
        }}>
          FOURTEEN HUNDRED KILOMETERS OF FLAVOR,
          DISTILLED INTO A SINGLE SEAT AT OUR TABLE.
        </p>
      </div>

      {/* Scallop — absolute at bottom, never overlaps text */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1200 64" preserveAspectRatio="none"
             style={{ width: '100%', height: '64px', display: 'block' }}>
          <path
            d="M0,0 C50,64 100,64 150,0 C200,64 250,64 300,0 C350,64 400,64 450,0
               C500,64 550,64 600,0 C650,64 700,64 750,0 C800,64 850,64 900,0
               C950,64 1000,64 1050,0 C1100,64 1150,64 1200,0 L1200,64 L0,64 Z"
            fill="#F5EFE0"
          />
        </svg>
      </div>
    </section>
  )
}

function FoodShowcaseSection() {
  const width = useWindowWidth()
  const mob = width < 768

  const btnStyle = {
    display: 'inline-block',
    padding: '12px 40px',
    border: '2px solid #1B5C4F',
    color: '#1B5C4F',
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'background-color 0.2s, color 0.2s',
    width: mob ? '100%' : 'auto',
    maxWidth: '320px',
    textAlign: 'center',
  }

  return (
    <section style={{
      width: '100%',
      backgroundColor: '#F5EFE0',
      padding: mob ? '48px 24px' : '80px 48px',
    }}>
      {/* 3 photos grid — single column on mobile */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: mob ? '1fr' : 'repeat(3, 1fr)',
        gap: mob ? '12px' : '16px',
        width: '100%',
        marginBottom: '48px',
      }}>
        {FOOD_PHOTOS.map((src, i) => (
          <div key={i} style={{
            aspectRatio: '4/3',
            overflow: 'hidden',
            border: '2px solid #D4B84A',
            borderRadius: '6px',
          }}>
            <img src={src} alt="NH48 dish"
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {/* Buttons — stacked on mobile, row on desktop */}
      <div style={{
        display: 'flex',
        flexDirection: mob ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <a href="/menu/food" style={btnStyle}
           onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1B5C4F'; e.currentTarget.style.color = 'white' }}
           onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1B5C4F' }}
        >VIEW FULL MENU</a>

        <a href="#" style={btnStyle}
           onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1B5C4F'; e.currentTarget.style.color = 'white' }}
           onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1B5C4F' }}
        >ORDER ONLINE</a>
      </div>
    </section>
  )
}
