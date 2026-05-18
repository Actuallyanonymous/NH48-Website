import { useEffect, useRef } from 'react'
import { useWindowWidth } from '../hooks/useWindowWidth'
import { Link } from 'react-router-dom'

// Triggers the CSS scroll animation when the section enters the viewport
function SectionWrapper({ children, style }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('transparent')
          el.classList.add('animated')
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className="sectionWrapper transparent" style={style}>
      {children}
    </div>
  )
}

// ─── Colour tokens (Figma) ────────────────────────────────────────────────────
const CREAM   = '#FCF9EB'
const TEAL    = '#14534D'
const RED     = 'rgb(169,69,69)'   // item name colour from Figma styleOverrideTable
const RED_BTN = '#A94545'

// ─── Figma layout constants (1512px canvas) ────────────────────────────────────
const COL_W   = 652
const COL_GAP = 21

// ─── Bottom motif border — Figma: tall(112×72) + short(112×45) alternating ────
// motif-1 = tall arch (112×72), motif-2 = short arch (112×45)
function MotifBorder() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '72px',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {Array.from({ length: 12 }, (_, i) => [
        <img key={`t${i}`} src="/assets/menu/food-menu-motif-1.png"
          style={{ width: '112px', height: '72px', flexShrink: 0, alignSelf: 'flex-start', display: 'block' }} />,
        <img key={`s${i}`} src="/assets/menu/food-menu-motif-2.png"
          style={{ width: '112px', height: '45px', flexShrink: 0, display: 'block' }} />,
      ]).flat()}
    </div>
  )
}

// ─── Drinks-menu CTA button ───────────────────────────────────────────────────
function DrinksMenuBtn() {
  return (
    <Link
      to="/menu/drinks"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '157px',
        height: '32px',
        backgroundColor: RED_BTN,
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      <div style={{
        position: 'absolute',
        top: '4px', left: '7px', right: '7px', bottom: '4px',
        border: '0.84px solid rgba(255,255,255,0.9)',
        pointerEvents: 'none',
      }} />
      <span style={{
        fontFamily: "'BERNIER Distressed', cursive",
        fontSize: '13.5px',
        letterSpacing: '0.06em',
        color: '#FFFEFE',
        textShadow: '0px 1.47px 1.47px rgba(0,0,0,0.25)',
        position: 'relative',
        zIndex: 1,
      }}>
        DRINKS MENU
      </span>
    </Link>
  )
}

// ─── Menu section text block ───────────────────────────────────────────────────
// Figma styles (from styleOverrideTable):
//   title:  BERNIER 36px  teal #14534D
//   intro:  Helvetica Neue 14px w500 italic  (no explicit color override → inherits dark)
//   name:   BERNIER 20px  red rgb(169,69,69)
//   price:  BERNIER 20px  red rgb(169,69,69)
//   desc:   Helvetica Neue 13px w400
function MenuColumn({ section }) {
  return (
    <div style={{ width: '100%' }}>

      {/* Category title — BERNIER 36px teal */}
      <h2 style={{
        fontFamily: "'BERNIER Distressed', cursive",
        fontSize: 'clamp(22px, 2.38vw, 36px)',
        fontWeight: 400,
        lineHeight: 1.06,
        color: TEAL,
        margin: '0 0 6px 0',
        textTransform: 'uppercase',
      }}>
        {section.title}
      </h2>

      {/* Intro paragraph — Helvetica Neue 14px w500 italic */}
      <p style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: 'clamp(9px, 0.93vw, 14px)',
        fontWeight: 500,
        fontStyle: 'italic',
        color: '#3a3a3a',
        lineHeight: 1.4,
        margin: '0 0 14px 0',
      }}>
        {section.intro}
      </p>

      {/* Divider */}
      <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(20,83,77,0.2)', marginBottom: '14px' }} />

      {/* Menu items */}
      {section.items.map((item, i) => (
        <div key={i} style={{ marginBottom: '14px' }}>
          {/* Name + price — BERNIER 20px red */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: '8px',
            marginBottom: '3px',
          }}>
            <span style={{
              fontFamily: "'BERNIER Distressed', cursive",
              fontSize: 'clamp(12px, 1.32vw, 20px)',
              fontWeight: 400,
              color: RED,
              textTransform: 'uppercase',
            }}>
              {item.name}
            </span>
            <span style={{
              fontFamily: "'BERNIER Distressed', cursive",
              fontSize: 'clamp(12px, 1.32vw, 20px)',
              color: RED,
              whiteSpace: 'nowrap',
            }}>
              $ {item.price}
            </span>
          </div>
          {/* Description — Helvetica Neue 13px w400 */}
          <p style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: 'clamp(8px, 0.86vw, 13px)',
            fontWeight: 400,
            color: '#555',
            lineHeight: 1.45,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  )
}

// ─── Menu data ─────────────────────────────────────────────────────────────────
const INTRO = 'Smoky, clay-oven charred delicacies marinated in traditional spices and grilled to perfection over an open flame.'

const TANDOORI = {
  title: 'Tandoori',
  intro: INTRO,
  items: [
    { name: 'Classic Chicken Tikka',   price: '15', desc: 'Succulent boneless chicken thighs marinated overnight in a signature blend of Greek yogurt, Kashmiri red chili, and ginger-garlic paste. Charred in the tandoor and served with mint chutney. #claysmoked' },
    { name: 'Murgh Malai Kebab',        price: '20', desc: 'Creamy, melt-in-your-mouth chicken breast pieces marinated in a rich mixture of cream cheese, cardamom, and white pepper. A mild yet flavorful highway favorite. (gluten friendly)' },
    { name: 'Tandoori Half Chicken',    price: '25', desc: 'Bone-in chicken marinated in a robust, tangy tandoori masala and roasted until tender with a deep smoky finish. Served with pickled onions and a lime wedge. #highwayclassic' },
    { name: 'Achari Chicken Kebab',     price: '15', desc: 'Zesty chicken chunks infused with "achari" (pickling) spices including fennel, nigella seeds, and mustard oil for a sharp, tangy kick. (gluten friendly)' },
    { name: 'Reshmi Kebab',             price: '30', desc: 'Silky minced chicken skewers blended with fresh herbs, green chilies, and a touch of cream, grilled until golden. A delicate, shareable roadside luxury.' },
  ],
}

const CURRIES = {
  title: 'Main Road Curries',
  intro: INTRO,
  items: [
    { name: 'Classic Chicken Tikka',   price: '15', desc: 'Succulent boneless chicken thighs marinated overnight in a signature blend of Greek yogurt, Kashmiri red chili, and ginger-garlic paste. Charred in the tandoor and served with mint chutney. #claysmoked' },
    { name: 'Murgh Malai Kebab',        price: '20', desc: 'Creamy, melt-in-your-mouth chicken breast pieces marinated in a rich mixture of cream cheese, cardamom, and white pepper. A mild yet flavorful highway favorite. (gluten friendly)' },
    { name: 'Tandoori Half Chicken',    price: '25', desc: 'Bone-in chicken marinated in a robust, tangy tandoori masala and roasted until tender with a deep smoky finish. Served with pickled onions and a lime wedge. #highwayclassic' },
    { name: 'Achari Chicken Kebab',     price: '15', desc: 'Zesty chicken chunks infused with "achari" (pickling) spices including fennel, nigella seeds, and mustard oil for a sharp, tangy kick. (gluten friendly)' },
    { name: 'Reshmi Kebab',             price: '30', desc: 'Silky minced chicken skewers blended with fresh herbs, green chilies, and a touch of cream, grilled until golden. A delicate, shareable roadside luxury.' },
  ],
}

const BREADS = {
  title: 'Hand-Tossed Breads',
  intro: INTRO,
  items: [
    { name: 'Classic Chicken Tikka',   price: '15', desc: 'Succulent boneless chicken thighs marinated overnight in a signature blend of Greek yogurt, Kashmiri red chili, and ginger-garlic paste. Charred in the tandoor and served with mint chutney. #claysmoked' },
    { name: 'Murgh Malai Kebab',        price: '20', desc: 'Creamy, melt-in-your-mouth chicken breast pieces marinated in a rich mixture of cream cheese, cardamom, and white pepper. A mild yet flavorful highway favorite. (gluten friendly)' },
    { name: 'Tandoori Half Chicken',    price: '25', desc: 'Bone-in chicken marinated in a robust, tangy tandoori masala and roasted until tender with a deep smoky finish. Served with pickled onions and a lime wedge. #highwayclassic' },
    { name: 'Achari Chicken Kebab',     price: '15', desc: 'Zesty chicken chunks infused with "achari" (pickling) spices including fennel, nigella seeds, and mustard oil for a sharp, tangy kick. (gluten friendly)' },
    { name: 'Reshmi Kebab',             price: '30', desc: 'Silky minced chicken skewers blended with fresh herbs, green chilies, and a touch of cream, grilled until golden. A delicate, shareable roadside luxury.' },
  ],
}

const SMALL_PLATES = {
  title: 'Roadside Small Plates',
  intro: INTRO,
  items: [
    { name: 'Classic Chicken Tikka',   price: '15', desc: 'Succulent boneless chicken thighs marinated overnight in a signature blend of Greek yogurt, Kashmiri red chili, and ginger-garlic paste. Charred in the tandoor and served with mint chutney. #claysmoked' },
    { name: 'Murgh Malai Kebab',        price: '20', desc: 'Creamy, melt-in-your-mouth chicken breast pieces marinated in a rich mixture of cream cheese, cardamom, and white pepper. A mild yet flavorful highway favorite. (gluten friendly)' },
    { name: 'Tandoori Half Chicken',    price: '25', desc: 'Bone-in chicken marinated in a robust, tangy tandoori masala and roasted until tender with a deep smoky finish. Served with pickled onions and a lime wedge. #highwayclassic' },
    { name: 'Achari Chicken Kebab',     price: '15', desc: 'Zesty chicken chunks infused with "achari" (pickling) spices including fennel, nigella seeds, and mustard oil for a sharp, tangy kick. (gluten friendly)' },
    { name: 'Reshmi Kebab',             price: '30', desc: 'Silky minced chicken skewers blended with fresh herbs, green chilies, and a touch of cream, grilled until golden. A delicate, shareable roadside luxury.' },
  ],
}

// ─── Photos (exact Figma images) ─────────────────────────────────────────────
const TOP_PHOTOS    = ['/assets/menu/food-menu-image-1.png', '/assets/menu/food-menu-image-2.png']
const BOTTOM_PHOTOS = ['/assets/menu/food-menu-image-3.png', '/assets/menu/food-menu-image-4.png']

// ─── Two-column photo row ─────────────────────────────────────────────────────
function PhotoRow({ srcs, mob }) {
  return (
    <div style={{
      display: 'flex',
      gap: mob ? '10px' : `${COL_GAP}px`,
      justifyContent: 'center',
      width: '100%',
      maxWidth: mob ? '100%' : `${COL_W * 2 + COL_GAP}px`,
      margin: '0 auto',
    }}>
      {srcs.map((src, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            maxWidth: mob ? '50%' : `${COL_W}px`,
            height: mob ? '38vw' : '293px',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <img
            src={src}
            alt={`NH48 dish ${i + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </div>
      ))}
    </div>
  )
}

// ─── Two-column menu text row ─────────────────────────────────────────────────
function MenuRow({ left, right, mob }) {
  return (
    <div style={{
      display: 'flex',
      gap: mob ? '24px' : `${COL_GAP}px`,
      justifyContent: 'center',
      width: '100%',
      maxWidth: mob ? '100%' : `${COL_W * 2 + COL_GAP}px`,
      margin: '0 auto',
      flexDirection: mob ? 'column' : 'row',
    }}>
      <div style={{ flex: 1, maxWidth: mob ? '100%' : `${COL_W}px`, minWidth: 0 }}>
        <MenuColumn section={left} />
      </div>
      <div style={{ flex: 1, maxWidth: mob ? '100%' : `${COL_W}px`, minWidth: 0 }}>
        <MenuColumn section={right} />
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FoodMenuPage() {
  const width = useWindowWidth()
  const mob   = width < 768

  const px = mob ? '16px' : 'clamp(16px, 6.15%, 93px)'

  return (
    <div style={{ width: '100%', backgroundColor: CREAM, overflowX: 'hidden' }}>
      <div style={{ paddingLeft: px, paddingRight: px }}>

        {/* ROW 1 — TOP PHOTOS (first child → subtle animation) */}
        <SectionWrapper style={{ paddingTop: mob ? '32px' : '86px' }}>
          <PhotoRow srcs={TOP_PHOTOS} mob={mob} />
        </SectionWrapper>

        {/* ROW 2 — MENU TEXT: Tandoori / Main Road Curries */}
        <SectionWrapper style={{ paddingTop: mob ? '28px' : '93px' }}>
          <MenuRow left={TANDOORI} right={CURRIES} mob={mob} />
        </SectionWrapper>

        {/* ROW 3 — BOTTOM PHOTOS */}
        <SectionWrapper style={{ paddingTop: mob ? '32px' : '93px' }}>
          <PhotoRow srcs={BOTTOM_PHOTOS} mob={mob} />
        </SectionWrapper>

        {/* ROW 4 — MENU TEXT: Hand-Tossed Breads / Small Plates */}
        <SectionWrapper style={{ paddingTop: mob ? '28px' : '93px' }}>
          <MenuRow left={BREADS} right={SMALL_PLATES} mob={mob} />
        </SectionWrapper>

      </div>

      {/* DRINKS MENU CTA */}
      <SectionWrapper style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: mob ? '36px' : '49px',
        paddingBottom: mob ? '28px' : '32px',
      }}>
        <DrinksMenuBtn />
      </SectionWrapper>

      {/* BOTTOM MOTIF BORDER */}
      <MotifBorder />
    </div>
  )
}
