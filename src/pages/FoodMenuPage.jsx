import { useEffect, useRef } from 'react'
import { useWindowWidth } from '../hooks/useWindowWidth'
import { Link } from 'react-router-dom'

// ─── Colour tokens ─────────────────────────────────────────────────────────────
const CREAM   = '#FCF9EB'
const TEAL    = '#14534D'
const RED     = 'rgb(169,69,69)'
const RED_BTN = '#A94545'

// ─── Figma layout constants ────────────────────────────────────────────────────
const COL_W   = 652
const COL_GAP = 21

// ─── Scroll-in animation wrapper ──────────────────────────────────────────────
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

// ─── Bottom motif border ───────────────────────────────────────────────────────
function MotifBorder() {
  return (
    <div aria-hidden="true" style={{
      width: '100%', height: '72px',
      display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
    }}>
      {Array.from({ length: 12 }, (_, i) => [
        <img key={`t${i}`} src="/assets/menu/food-menu-motif-1.png"
          style={{ width: '112px', height: '72px', flexShrink: 0, alignSelf: 'flex-start', display: 'block' }} />,
        <img key={`s${i}`} src="/assets/menu/food-menu-motif-2.png"
          style={{ width: '112px', height: '45px', flexShrink: 0, display: 'block' }} />,
      ]).flat()}
    </div>
  )
}

// ─── Drinks-menu CTA button ────────────────────────────────────────────────────
function DrinksMenuBtn() {
  return (
    <Link to="/menu/drinks" style={{
      position: 'relative', display: 'inline-flex',
      alignItems: 'center', justifyContent: 'center',
      width: '157px', height: '32px',
      backgroundColor: RED_BTN, textDecoration: 'none', flexShrink: 0,
    }}>
      <div style={{
        position: 'absolute', top: '4px', left: '7px', right: '7px', bottom: '4px',
        border: '0.84px solid rgba(255,255,255,0.9)', pointerEvents: 'none',
      }} />
      <span style={{
        fontFamily: "'BERNIER Distressed', cursive",
        fontSize: '13.5px', letterSpacing: '0.06em',
        color: '#FFFEFE', textShadow: '0px 1.47px 1.47px rgba(0,0,0,0.25)',
        position: 'relative', zIndex: 1,
      }}>DRINKS MENU</span>
    </Link>
  )
}

// ─── Menu section text block ───────────────────────────────────────────────────
function MenuColumn({ section }) {
  return (
    <div style={{ width: '100%' }}>
      {/* Title */}
      <h2 style={{
        fontFamily: "'BERNIER Distressed', cursive",
        fontSize: 'clamp(22px, 2.38vw, 36px)', fontWeight: 400,
        lineHeight: 1.06, color: TEAL, margin: '0 0 6px 0', textTransform: 'uppercase',
      }}>
        {section.title}
      </h2>

      {/* Intro — only rendered if provided */}
      {section.intro && (
        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: 'clamp(9px, 0.93vw, 14px)', fontWeight: 500, fontStyle: 'italic',
          color: '#3a3a3a', lineHeight: 1.4, margin: '0 0 14px 0',
        }}>
          {section.intro}
        </p>
      )}

      {/* Divider */}
      <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(20,83,77,0.2)', marginBottom: '14px' }} />

      {/* Items */}
      {section.items.map((item, i) => (
        <div key={i} style={{ marginBottom: '12px' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'baseline', gap: '8px', marginBottom: '2px',
          }}>
            <span style={{
              fontFamily: "'BERNIER Distressed', cursive",
              fontSize: 'clamp(12px, 1.32vw, 20px)', fontWeight: 400,
              color: RED, textTransform: 'uppercase',
            }}>{item.name}</span>
            <span style={{
              fontFamily: "'BERNIER Distressed', cursive",
              fontSize: 'clamp(12px, 1.32vw, 20px)',
              color: RED, whiteSpace: 'nowrap',
            }}>$ {item.price}</span>
          </div>
          {item.desc && (
            <p style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 'clamp(8px, 0.86vw, 13px)', fontWeight: 400,
              color: '#555', lineHeight: 1.45, margin: 0,
              textTransform: 'uppercase', letterSpacing: '0.02em',
            }}>{item.desc}</p>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Menu data ─────────────────────────────────────────────────────────────────

const KHAU_GALLI = {
  title: 'Khau Galli (Small Plates)',
  intro: 'Street food favorites from Mumbai\'s famous highway lanes — small plates to kick off your journey.',
  items: [
    { name: 'Palak Chaat',          price: '10', desc: 'spinach| onions| tomato| chutneys' },
    { name: 'Aloo Tikki Chaat',     price: '10', desc: 'spiced potato| chana masala| yogurt' },
    { name: 'Punjabi Samosa Chaat', price: '10', desc: 'puff pastry| yogurt| mint cilantro' },
    { name: 'Vada Pav',             price: '10', desc: 'bombay quintessential' },
    { name: 'Lasooni Gobhi',        price: '10', desc: 'cauliflower| garlic glaze| green chili' },
    { name: 'Fish Tawa Fry',        price: '14', desc: 'mkt fish| curry leaves| mustard seeds' },
    { name: 'Chicken Lollipop',     price: '14', desc: 'sweet n spicy sauce' },
    { name: 'Malai Chicken Tikka',  price: '12', desc: 'cream| cheese| black pepper' },
    { name: 'Chicken Seekh Kebab',  price: '12', desc: 'old delhi quintessential' },
    { name: 'Lamb Seekh Kebab',     price: '12', desc: 'minced lamb| ginger| green chili' },
  ],
}

const BHARPET = {
  title: 'Bharpet (Mains)',
  intro: 'Slow-cooked regional mains from across the highway — robust flavors that anchor every table.',
  items: [
    { name: 'Mangalorean Fish Curry',  price: '22', desc: 'cod| tamarind| spice blend' },
    { name: 'Shrimp Moilee',           price: '22', desc: 'coconut milk| curry leaves| green chili' },
    { name: 'Butter Chicken',          price: '20', desc: 'creamy tomato| fenugreek' },
    { name: 'Chicken Kolhapuri',       price: '20', desc: 'whole spices| dry coconut| onions' },
    { name: 'Green Chicken Curry',     price: '18', desc: 'cilantro| mint| green chili' },
    { name: 'Old Delhi Chicken Korma', price: '20', desc: 'fried onions| yogurt| nuts' },
    { name: 'Bombay Chicken Biryani',  price: '20', desc: 'aromatic spices| tomato| yogurt' },
    { name: 'Lamb Rogan Josh',         price: '21', desc: 'kashmiri chili| fennel| ginger' },
    { name: 'Lamb Vindaloo',           price: '20', desc: 'potato| vinegar| onions' },
    { name: 'Dum Lamb Biryani',        price: '22', desc: 'saffron| ghee| whole spices' },
  ],
}

const TANDOOR = {
  title: 'Tandoor',
  intro: 'Clay-oven charred, marinated in traditional spices, grilled over an open flame.',
  items: [
    { name: 'Tandoori Chicken Tikka', price: '18', desc: 'garam masala| green chutney' },
    { name: 'Haryali Paneer',         price: '16', desc: 'cottage cheese| cilantro| mint' },
    { name: 'Tandoori Cod',           price: '20', desc: 'mustard| citrus' },
  ],
}

const SABZI = {
  title: 'Sabzi (Vegetables)',
  intro: 'Seasonal vegetables and paneer prepared in the style of regional Indian vegetarian traditions.',
  items: [
    { name: 'Paneer Makhani',   price: '18', desc: 'cottage cheese| creamy tomato| fenugreek' },
    { name: 'Chilli Paneer',    price: '18', desc: 'spicy sauce| onions| bell peppers' },
    { name: 'Dal Makhani',      price: '16', desc: 'lentils| kidney beans| butter' },
    { name: 'Gobhi Aloo',       price: '16', desc: 'cauliflower| cumin| ginger' },
    { name: 'Baingan Ka Salan', price: '18', desc: 'eggplant| peanuts| sesame' },
    { name: 'Vegetable Biryani',price: '18', desc: 'yogurt| green chili| garam masala' },
    { name: 'Cucumber Raita',   price: '8',  desc: 'cucumber relish| yogurt' },
  ],
}

const BREADS = {
  title: 'Breads',
  intro: 'Hand-rolled from the tandoor, perfect for scooping up curries and chutneys.',
  items: [
    { name: 'Garlic Naan',      price: '4', desc: '' },
    { name: 'Onion Kulcha',     price: '4', desc: '' },
    { name: 'Green Chili Naan', price: '4', desc: '' },
    { name: 'Mint Paratha',     price: '4', desc: '' },
    { name: 'Roti',             price: '3', desc: '' },
  ],
}

// ─── Photos ───────────────────────────────────────────────────────────────────
const TOP_PHOTOS    = ['/assets/menu/food-menu-image-1.png', '/assets/menu/food-menu-image-2.png']
const BOTTOM_PHOTOS = ['/assets/menu/food-menu-image-3.png', '/assets/menu/food-menu-image-4.png']

// ─── Two-column photo row ─────────────────────────────────────────────────────
function PhotoRow({ srcs, mob }) {
  return (
    <div style={{
      display: 'flex', gap: mob ? '10px' : `${COL_GAP}px`,
      justifyContent: 'center', width: '100%',
      maxWidth: mob ? '100%' : `${COL_W * 2 + COL_GAP}px`, margin: '0 auto',
    }}>
      {srcs.map((src, i) => (
        <div key={i} style={{
          flex: 1, maxWidth: mob ? '50%' : `${COL_W}px`,
          height: mob ? '38vw' : '293px', overflow: 'hidden', flexShrink: 0,
        }}>
          <img src={src} alt={`NH48 dish ${i + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
      ))}
    </div>
  )
}

// ─── Two-column menu text row ─────────────────────────────────────────────────
function MenuRow({ left, right, mob, leftStack }) {
  return (
    <div style={{
      display: 'flex', gap: mob ? '24px' : `${COL_GAP}px`,
      justifyContent: 'center', width: '100%',
      maxWidth: mob ? '100%' : `${COL_W * 2 + COL_GAP}px`,
      margin: '0 auto', flexDirection: mob ? 'column' : 'row',
    }}>
      {/* Left column — supports a stacked second section via leftStack */}
      <div style={{ flex: 1, maxWidth: mob ? '100%' : `${COL_W}px`, minWidth: 0 }}>
        <MenuColumn section={left} />
        {leftStack && (
          <div style={{ marginTop: mob ? '28px' : '40px' }}>
            <MenuColumn section={leftStack} />
          </div>
        )}
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

        {/* ROW 1 — TOP PHOTOS (subtle first-child animation) */}
        <SectionWrapper style={{ paddingTop: mob ? '32px' : '86px' }}>
          <PhotoRow srcs={TOP_PHOTOS} mob={mob} />
        </SectionWrapper>

        {/* ROW 2 — KHAU GALLI (SMALL PLATES) | BHARPET (MAINS) */}
        <SectionWrapper style={{ paddingTop: mob ? '28px' : '93px' }}>
          <MenuRow left={KHAU_GALLI} right={BHARPET} mob={mob} />
        </SectionWrapper>

        {/* ROW 3 — BOTTOM PHOTOS */}
        <SectionWrapper style={{ paddingTop: mob ? '32px' : '93px' }}>
          <PhotoRow srcs={BOTTOM_PHOTOS} mob={mob} />
        </SectionWrapper>

        {/* ROW 4 — TANDOOR + BREADS (stacked left) | SABZI (VEGETABLES) */}
        <SectionWrapper style={{ paddingTop: mob ? '28px' : '93px' }}>
          <MenuRow left={TANDOOR} leftStack={BREADS} right={SABZI} mob={mob} />
        </SectionWrapper>

      </div>

      {/* DRINKS MENU CTA */}
      <SectionWrapper style={{
        display: 'flex', justifyContent: 'center',
        paddingTop: mob ? '36px' : '49px',
        paddingBottom: mob ? '28px' : '32px',
      }}>
        <DrinksMenuBtn />
      </SectionWrapper>

      <MotifBorder />
    </div>
  )
}
