import { useWindowWidth } from '../hooks/useWindowWidth'
import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'

// ─── Colour tokens (Figma) ────────────────────────────────────────────────────
const CREAM   = '#FCF9EB'
const TEAL    = '#14534D'
const RED_BTN = '#A94545'

// ─── Figma layout constants (1512px canvas) ────────────────────────────────────
// Content area: 1325px wide, centred (left: 93px, right: 93px → gap between cols: 21px)
const COL_W   = 652   // each column width (px in Figma)
const COL_GAP = 21    // gap between the two columns

// ─── City skyline border ───────────────────────────────────────────────────────
// Alternating tall (71.58) + short (45.41) rectangular arches, maroon, repeating
function CitySkylineBorder() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '80px',
        overflow: 'hidden',
        backgroundImage: 'url(/assets/menu/indian-city-skyline.png)',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 480px',
        backgroundPosition: 'top left',
      }}
    />
  )
}

// ─── Drinks-menu CTA button (Figma: Rectangle 309, #A94545, inset white border) ─
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
      {/* Inset white border — Figma Rectangle 269 */}
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
// Renders: large category title, italic intro line, then item rows (name + price + desc)
function MenuColumn({ section }) {
  return (
    <div style={{ width: '100%' }}>

      {/* Category title — Figma: 36px Bernier, teal, tracking -0.04em */}
      <h2 style={{
        fontFamily: "'BERNIER Distressed', cursive",
        fontSize: 'clamp(22px, 2.4vw, 36px)',
        fontWeight: 400,
        lineHeight: 1.06,
        letterSpacing: '-0.04em',
        color: TEAL,
        margin: '0 0 6px 0',
        textTransform: 'uppercase',
      }}>
        {section.title}
      </h2>

      {/* Intro / tagline */}
      <p style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 'clamp(10px, 0.85vw, 13px)',
        fontWeight: 400,
        color: '#3a3a3a',
        lineHeight: 1.4,
        margin: '0 0 18px 0',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
      }}>
        {section.intro}
      </p>

      {/* Divider */}
      <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(20,83,77,0.2)', marginBottom: '16px' }} />

      {/* Menu items */}
      {section.items.map((item, i) => (
        <div key={i} style={{ marginBottom: '16px' }}>
          {/* Name + price row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: '8px',
            marginBottom: '3px',
          }}>
            <span style={{
              fontFamily: "'BERNIER Distressed', cursive",
              fontSize: 'clamp(14px, 1.05vw, 16px)',
              fontWeight: 400,
              letterSpacing: '0.03em',
              color: TEAL,
              textTransform: 'uppercase',
            }}>
              {item.name}
            </span>
            <span style={{
              fontFamily: "'BERNIER Distressed', cursive",
              fontSize: 'clamp(14px, 1.05vw, 16px)',
              color: TEAL,
              whiteSpace: 'nowrap',
            }}>
              $ {item.price}
            </span>
          </div>
          {/* Description */}
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(9px, 0.75vw, 11.5px)',
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

// ─── Photo images (using available local assets) ──────────────────────────────
// Figma: top row 2 wide landscape photos, bottom row 2 wide landscape photos
const TOP_PHOTOS    = ['/assets/dishes/butter-chicken.png', '/assets/dishes/dal-bhati-churma.png']
const BOTTOM_PHOTOS = ['/assets/dishes/dosa.png',           '/assets/dishes/pav-bhaji.png']

// ─── Two-column photo row (Figma: 652px each, 21px gap, 86px top) ─────────────
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

// ─── Two-column text row (Figma: 665px / 658px, 472px top) ───────────────────
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

  // Horizontal outer padding scales exactly like Figma:
  // 93px on 1512px → 6.15%, but never less than 16px on mobile
  const px = mob ? '16px' : 'clamp(16px, 6.15%, 93px)'

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: CREAM,
        overflowX: 'hidden',
      }}
    >
      {/* ── Main content wrapper — Figma outer padding ── */}
      <div style={{ paddingLeft: px, paddingRight: px }}>

        {/* ══════════════════════════════════════════════════
            ROW 1 — TOP PHOTOS  (Figma: top 86px)
        ════════════════════════════════════════════════════ */}
        <div style={{ paddingTop: mob ? '32px' : '86px' }}>
          <PhotoRow srcs={TOP_PHOTOS} mob={mob} />
        </div>

        {/* ══════════════════════════════════════════════════
            ROW 2 — MENU TEXT: Tandoori / Main Road Curries
            (Figma: top 472px → gap from row1 bottom: 472 - (86+293) = 93px)
        ════════════════════════════════════════════════════ */}
        <div style={{ paddingTop: mob ? '28px' : '93px' }}>
          <MenuRow left={TANDOORI} right={CURRIES} mob={mob} />
        </div>

        {/* ══════════════════════════════════════════════════
            ROW 3 — BOTTOM PHOTOS (Figma: top 1091px)
            Gap from row2 bottom: 1091 - (472+526) = 93px
        ════════════════════════════════════════════════════ */}
        <div style={{ paddingTop: mob ? '32px' : '93px' }}>
          <PhotoRow srcs={BOTTOM_PHOTOS} mob={mob} />
        </div>

        {/* ══════════════════════════════════════════════════
            ROW 4 — MENU TEXT: Hand-Tossed Breads / Small Plates
            (Figma: top 1477px → gap from row3 bottom: 1477 - (1091+293) = 93px)
        ════════════════════════════════════════════════════ */}
        <div style={{ paddingTop: mob ? '28px' : '93px' }}>
          <MenuRow left={BREADS} right={SMALL_PLATES} mob={mob} />
        </div>

      </div>{/* end main content wrapper */}

      {/* ══════════════════════════════════════════════════
          DRINKS MENU CTA button
          (Figma: top 2052px → gap from row4 bottom: 2052 - (1477+526) = 49px, centered)
      ════════════════════════════════════════════════════ */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: mob ? '36px' : '49px',
        paddingBottom: mob ? '28px' : '32px',
      }}>
        <DrinksMenuBtn />
      </div>

      {/* ══════════════════════════════════════════════════
          CITY SKYLINE BORDER (Figma: top 2123px, repeating arches)
      ════════════════════════════════════════════════════ */}
      <CitySkylineBorder />

      {/* ── Footer ── */}
      <SiteFooter />
    </div>
  )
}
