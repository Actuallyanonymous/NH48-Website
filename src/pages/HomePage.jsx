import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowWidth } from "../hooks/useWindowWidth";
gsap.registerPlugin(ScrollTrigger);
import SiteFooter from "../components/SiteFooter";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80";

const CARD_IMAGES = {
  food1:
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
  delhi:
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
  food2:
    "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
  mumbai:
    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
};

const FOOD_PHOTOS = [
  "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&q=80",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
];

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CityCardsSection />
      <FoodShowcaseSection />
      <StorySection />
      <Sayings />
      <Plates />
      <Journey />
      <LocationTimings />
      <FoodGridSection />
      <SiteFooter />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "500px",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <img
        src={HERO_IMAGE}
        alt="NH48 hero"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.42)",
        }}
      />

      {/* Centered text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Yellow rectangle behind heading */}
          <div
            style={{
              backgroundColor: "rgba(245,196,44,0.18)",
              padding: "8px 24px 4px",
              marginBottom: "12px",
              display: "inline-block",
            }}
          >
            <h1
              style={{
                fontFamily: "Bebas Neue, cursive",
                fontSize: "clamp(48px, 8vw, 96px)",
                color: "#F5C42C",
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              WELCOME TO NH48
            </h1>
          </div>

          <p
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              fontSize: "clamp(13px, 1.8vw, 18px)",
              color: "white",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginTop: "8px",
            }}
          >
            FROM CAPITAL TO COAST
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CityCardsSection() {
  const sectionRef = useRef(null);
  const width = useWindowWidth();

  useGSAP(
    () => {
      const tl = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      };
      gsap.to(sectionRef.current.querySelectorAll(".drift-left"), {
        x: -50,
        ease: "none",
        scrollTrigger: tl,
      });
      gsap.to(sectionRef.current.querySelectorAll(".drift-right"), {
        x: 50,
        ease: "none",
        scrollTrigger: tl,
      });
    },
    { scope: sectionRef },
  );

  const cardW = "clamp(180px, 20vw, 260px)";
  const mob = width < 768;

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#1B5C4F",
        paddingTop: "80px",
        paddingBottom: "160px",
        overflow: "hidden",
      }}
    >
      {/* Cards row — scrollable on mobile */}
      <div
        style={{
          display: "flex",
          justifyContent: mob ? "flex-start" : "space-evenly",
          alignItems: "flex-end",
          width: "100%",
          padding: mob ? "0 24px" : "0 40px",
          minHeight: mob ? "auto" : "320px",
          overflowX: mob ? "auto" : "visible",
          gap: mob ? "20px" : "0",
          paddingBottom: mob ? "24px" : "0",
          scrollSnapType: mob ? "x mandatory" : "none",
        }}
      >
        {/* Card 1 — Oval food */}
        <div
          className="drift-left"
          style={{
            width: mob ? "clamp(150px, 55vw, 200px)" : cardW,
            marginBottom: 0,
            flexShrink: 0,
            scrollSnapAlign: mob ? "start" : "none",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #D4B84A",
            }}
          >
            <img
              src={CARD_IMAGES.food1}
              alt="Delhi food"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Card 2 — Arch Delhi */}
        <div
          className="drift-right"
          style={{
            width: mob ? "clamp(150px, 55vw, 200px)" : cardW,
            flexShrink: 0,
            position: "relative",
            marginBottom: mob ? "0" : "60px",
            scrollSnapAlign: mob ? "start" : "none",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              overflow: "hidden",
              border: "3px solid #D4B84A",
              clipPath: "polygon(0% 100%, 0% 35%, 50% 0%, 100% 35%, 100% 100%)",
              position: "relative",
            }}
          >
            <img
              src={CARD_IMAGES.delhi}
              alt="Delhi"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 30%, transparent)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "Bebas Neue, cursive",
                  color: "#F5C42C",
                  fontSize: "clamp(14px, 1.4vw, 18px)",
                  letterSpacing: "0.1em",
                }}
              >
                DELHI / NH48
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 — Oval food */}
        <div
          className="drift-left"
          style={{
            width: mob ? "clamp(150px, 55vw, 200px)" : cardW,
            flexShrink: 0,
            scrollSnapAlign: mob ? "start" : "none",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #D4B84A",
            }}
          >
            <img
              src={CARD_IMAGES.food2}
              alt="Mumbai food"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Card 4 — Arch Mumbai */}
        <div
          className="drift-right"
          style={{
            width: mob ? "clamp(150px, 55vw, 200px)" : cardW,
            flexShrink: 0,
            position: "relative",
            marginBottom: mob ? "0" : "60px",
            scrollSnapAlign: mob ? "start" : "none",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              overflow: "hidden",
              border: "3px solid #D4B84A",
              clipPath: "polygon(0% 100%, 0% 35%, 50% 0%, 100% 35%, 100% 100%)",
              position: "relative",
            }}
          >
            <img
              src={CARD_IMAGES.mumbai}
              alt="Mumbai"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 30%, transparent)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "Bebas Neue, cursive",
                  color: "#F5C42C",
                  fontSize: "clamp(14px, 1.4vw, 18px)",
                  letterSpacing: "0.1em",
                }}
              >
                MUMBAI / NH48
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "48px",
          padding: "0 32px",
        }}
      >
        <p
          style={{
            fontFamily: "Bebas Neue, cursive",
            color: "white",
            fontSize: mob ? "22px" : "clamp(20px, 2.8vw, 36px)",
            textAlign: "center",
            letterSpacing: "0.04em",
            lineHeight: 1.3,
            maxWidth: "700px",
          }}
        >
          FOURTEEN HUNDRED KILOMETERS OF FLAVOR, DISTILLED INTO A SINGLE SEAT AT
          OUR TABLE.
        </p>
      </div>

      {/* Scallop — absolute at bottom, never overlaps text */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          lineHeight: 0,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 1200 64"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "64px", display: "block" }}
        >
          <path
            d="M0,0 C50,64 100,64 150,0 C200,64 250,64 300,0 C350,64 400,64 450,0
               C500,64 550,64 600,0 C650,64 700,64 750,0 C800,64 850,64 900,0
               C950,64 1000,64 1050,0 C1100,64 1150,64 1200,0 L1200,64 L0,64 Z"
            fill="#F5EFE0"
          />
        </svg>
      </div>
    </section>
  );
}

function FoodShowcaseSection() {
  const width = useWindowWidth();
  const mob = width < 768;

  const btnStyle = {
    display: "inline-block",
    padding: "12px 40px",
    border: "2px solid #1B5C4F",
    color: "#1B5C4F",
    fontFamily: "Barlow Condensed, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    textDecoration: "none",
    transition: "background-color 0.2s, color 0.2s",
    width: mob ? "100%" : "auto",
    maxWidth: "320px",
    textAlign: "center",
  };

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#F5EFE0",
        padding: mob ? "48px 24px" : "80px 48px",
      }}
    >
      {/* 3 photos grid — single column on mobile */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mob ? "1fr" : "repeat(3, 1fr)",
          gap: mob ? "12px" : "16px",
          width: "100%",
          marginBottom: "48px",
        }}
      >
        {FOOD_PHOTOS.map((src, i) => (
          <div
            key={i}
            style={{
              aspectRatio: "4/3",
              overflow: "hidden",
              border: "2px solid #D4B84A",
              borderRadius: "6px",
            }}
          >
            <img
              src={src}
              alt="NH48 dish"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Buttons — stacked on mobile, row on desktop */}
      <div
        style={{
          display: "flex",
          flexDirection: mob ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <a
          href="/menu/food"
          style={btnStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1B5C4F";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#1B5C4F";
          }}
        >
          VIEW FULL MENU
        </a>

        <a
          href="#"
          style={btnStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1B5C4F";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#1B5C4F";
          }}
        >
          ORDER ONLINE
        </a>
      </div>
    </section>
  );
}

// Replace these with your actual image imports
// import delhiSign    from './assets/story/delhi-sign.png'
// import delhiGate   from './assets/story/delhi-gate.png'
// import delhiFood   from './assets/story/delhi-food.png'
// import delhiMomos  from './assets/story/delhi-momos.png'
// import mumbaiSign  from './assets/story/mumbai-sign.png'
// import mumbaiTaxi  from './assets/story/mumbai-taxi.png'
// import mumbaiBus   from './assets/story/mumbai-bus.png'
// import mumbaiFood  from './assets/story/mumbai-food.png'

// Replace with your actual imports
const STORY_IMAGES = {
  // Delhi (5)
  delhiSign: "/assets/story/delhi.png",
  delhiTomb: "/assets/story/tomb.png",
  delhiPoori: "/assets/story/poori.png",
  delhiMomos: "/assets/story/momos.png",
  indiaGate: "/assets/story/igate.png",
  // Mumbai (7)
  vadaPav: "/assets/story/pav.png",
  mumbaiBus: "/assets/story/bus.png",
  mumbaiTaxi: "/assets/story/taxi.png",
  tajHotel: "/assets/story/taj.png",
  vadaPavHand: "/assets/story/pavhand.png",
  mumbaiSign: "/assets/story/mumbai.png",
  gatewayIndia: "/assets/story/gateoi.png",
};

function StarBurst({ size = 120, stroke = "#8B3A3A", strokeWidth = 2 }) {
  const pts = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * Math.PI) / 8 - Math.PI / 2;
    const r = i % 2 === 0 ? size / 2 : size / 4;
    return `${size / 2 + r * Math.cos(angle)},${size / 2 + r * Math.sin(angle)}`;
  }).join(" ");
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: "block" }}
    >
      <polygon
        points={pts}
        fill="transparent"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

// Reusable: plain image tile (monuments, signs, etc.)
function Tile({ src, alt, style }) {
  return (
    <div style={{ position: "absolute", ...style }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          filter: "drop-shadow(2px 4px 8px rgba(0,0,0,0.4))",
        }}
      />
    </div>
  );
}

// Reusable: circular food image
function CircleImg({ src, alt, style }) {
  return (
    <div style={{ position: "absolute", ...style }}>
      <div
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          border: "3px solid #D4B84A",
          aspectRatio: "1/1",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

function StorySection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      };
      gsap.to(sectionRef.current.querySelectorAll(".story-drift-up"), {
        y: -40,
        ease: "none",
        scrollTrigger: tl,
      });
      gsap.to(sectionRef.current.querySelectorAll(".story-drift-down"), {
        y: 40,
        ease: "none",
        scrollTrigger: tl,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#C9A84C",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px",
        paddingTop: "60px",
        paddingBottom: "80px",
        overflow: "hidden",
        minHeight: "600px",
      }}
    >
      {/* OUR STORY heading */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <h2
          style={{
            fontFamily: "Bebas Neue, cursive",
            color: "#1B5C4F",
            fontSize: "clamp(32px, 5vw, 64px)",
            letterSpacing: "0.08em",
            margin: 0,
          }}
        >
          OUR STORY
        </h2>
      </div>

      {/* Three-column layout */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "0 2vw",
        }}
      >
        {/* ── DELHI COLLAGE (left) ── */}
        <div
          className="story-drift-up"
          style={{
            position: "relative",
            width: "clamp(180px, 24vw, 320px)",
            height: "clamp(380px, 52vw, 600px)",
            flexShrink: 0,
            marginRight: "-48px",
            zIndex: 2,
          }}
        >
          {/* India Gate — top right, large, slight tilt */}
          <Tile
            src={STORY_IMAGES.indiaGate}
            alt="India Gate"
            style={{
              top: "0%",
              right: "-5%",
              width: "58%",
              transform: "rotate(5deg)",
              zIndex: 2,
            }}
          />

          {/* Delhi sign — top left, overlapping gate, rotated */}
          <Tile
            src={STORY_IMAGES.delhiSign}
            alt="New Delhi sign"
            style={{
              top: "4%",
              left: "0%",
              width: "68%",
              transform: "rotate(-10deg)",
              zIndex: 3,
            }}
          />

          {/* Humayun's Tomb — mid, behind sign */}
          <Tile
            src={STORY_IMAGES.delhiTomb}
            alt="Delhi monument"
            style={{
              top: "30%",
              left: "5%",
              width: "72%",
              transform: "rotate(3deg)",
              zIndex: 2,
            }}
          />

          {/* Poori — circular, mid-left */}
          <CircleImg
            src={STORY_IMAGES.delhiPoori}
            alt="Delhi poori"
            style={{ top: "28%", left: "-8%", width: "48%", zIndex: 4 }}
          />

          {/* Momos — circular, bottom */}
          <CircleImg
            src={STORY_IMAGES.delhiMomos}
            alt="Delhi momos"
            style={{
              bottom: "4%",
              left: "8%",
              width: "50%",
              transform: "rotate(4deg)",
              zIndex: 3,
            }}
          />
        </div>

        {/* ── TEAL CARD ── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            backgroundColor: "#1B5C4F",
            width: "clamp(320px, 48vw, 700px)",
            padding: "clamp(48px, 6vw, 80px) clamp(32px, 5vw, 64px)",
            flexShrink: 0,
          }}
        >
          {/* Accent square — top right */}
          <div
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              width: "clamp(48px, 5vw, 72px)",
              height: "clamp(48px, 5vw, 72px)",
              backgroundColor: "#8B3A3A",
              zIndex: 0,
            }}
          />

          {/* Dashed divider */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "50%",
              borderTop: "2px dashed rgba(100,180,200,0.45)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          <p
            style={{
              fontFamily: "Bebas Neue, cursive",
              color: "#F5EFE0",
              fontSize: "clamp(13px, 1.6vw, 21px)",
              letterSpacing: "0.06em",
              lineHeight: 1.55,
              textAlign: "center",
              margin: "0 0 clamp(32px, 4vw, 56px) 0",
              position: "relative",
              zIndex: 3,
            }}
          >
            TRACING THE SPINE OF NH48, TWO FRIENDS NAVIGATE THE DISTANCE FROM
            THE CAPITAL'S HEAT TO THE COAST'S HEART. THEIR JOURNEY RECLAIMS THE
            HONEST, UNEDITED RECIPES THAT LIVE IN THE DUST AND LIGHT OF THE OPEN
            ROADS OF NH48.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 3,
            }}
          >
            <button
              style={{
                fontFamily: "Bebas Neue, cursive",
                fontSize: "clamp(14px, 1.4vw, 18px)",
                letterSpacing: "0.12em",
                color: "#F5EFE0",
                backgroundColor: "#8B3A3A",
                border: "2px solid #8B3A3A",
                padding: "12px 40px",
                cursor: "pointer",
                transition: "background-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#8B3A3A";
              }}
            >
              VIEW STORY
            </button>
          </div>
        </div>

        {/* ── MUMBAI COLLAGE (right) ── */}
        <div
          className="story-drift-down"
          style={{
            position: "relative",
            width: "clamp(180px, 24vw, 320px)",
            height: "clamp(380px, 52vw, 600px)",
            flexShrink: 0,
            marginLeft: "-48px",
            zIndex: 2,
          }}
        >
          {/* Mumbai sign — top right, rotated */}
          <Tile
            src={STORY_IMAGES.mumbaiSign}
            alt="Mumbai sign"
            style={{
              top: "0%",
              right: "0%",
              width: "55%",
              transform: "rotate(12deg)",
              zIndex: 3,
            }}
          />

          {/* Gateway of India — top left */}
          <Tile
            src={STORY_IMAGES.gatewayIndia}
            alt="Gateway of India"
            style={{
              top: "2%",
              left: "5%",
              width: "52%",
              transform: "rotate(-5deg)",
              zIndex: 2,
            }}
          />

          {/* Taj Hotel — mid, behind taxi */}
          <Tile
            src={STORY_IMAGES.tajHotel}
            alt="Taj Hotel"
            style={{
              top: "28%",
              left: "0%",
              width: "65%",
              transform: "rotate(3deg)",
              zIndex: 2,
            }}
          />

          {/* Taxi — mid-right, overlapping */}
          <Tile
            src={STORY_IMAGES.mumbaiTaxi}
            alt="Mumbai taxi"
            style={{
              top: "34%",
              right: "-5%",
              width: "62%",
              transform: "rotate(-4deg)",
              zIndex: 3,
            }}
          />

          {/* Bus — lower mid */}
          <Tile
            src={STORY_IMAGES.mumbaiBus}
            alt="Mumbai bus"
            style={{
              top: "52%",
              left: "5%",
              width: "60%",
              transform: "rotate(2deg)",
              zIndex: 4,
            }}
          />

          {/* Vada pav in hand — circular, mid-left */}
          <CircleImg
            src={STORY_IMAGES.vadaPavHand}
            alt="Vada pav in hand"
            style={{ top: "38%", left: "-8%", width: "46%", zIndex: 5 }}
          />

          {/* Vada pav plate — circular, bottom */}
          <CircleImg
            src={STORY_IMAGES.vadaPav}
            alt="Vada pav"
            style={{
              bottom: "2%",
              left: "5%",
              width: "50%",
              transform: "rotate(-3deg)",
              zIndex: 4,
            }}
          />
        </div>
      </div>

      {/* Starburst — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "6%",
          left: "3%",
          opacity: 0.85,
          pointerEvents: "none",
        }}
      >
        <StarBurst size={110} stroke="#8B3A3A" strokeWidth={2} />
      </div>
    </section>
  );
}

function Sayings() {
  const [active, setActive] = useState(0);

  const slides = [
    {
      quote:
        "NH48 CAPTURES THE SPIRIT OF THE OPEN ROAD, BLENDING VINTAGE-INSPIRED HIGHWAY DECOR WITH A SPRAWLING MENU THAT MASTERFULLY FUSES REGIONAL INDIAN SPECIALTIES AND GLOBAL FLAVORS INTO A HIGH-SPIRITED CULINARY JOURNEY.",
      image: "/assets/sayings/nh48-chronicle.png",
    },
    {
      quote:
        "A FEAST FOR THE SENSES — THE FLAVORS TRANSPORT YOU FROM THE STREETS OF DELHI TO THE SHORES OF MUMBAI IN A SINGLE MEAL.",
      image: "/assets/sayings/nh48-chronicle.png",
    },
    {
      quote:
        "THE AMBIANCE IS UNMATCHED. EVERY CORNER TELLS A STORY OF THE ROAD, AND EVERY DISH DELIVERS ON THAT PROMISE.",
      image: "/assets/sayings/nh48-chronicle.png",
    },
    {
      quote:
        "BOLD, HONEST, UNFORGETTABLE. NH48 IS NOT JUST A RESTAURANT — IT IS A JOURNEY YOU KEEP COMING BACK TO.",
      image: "/assets/sayings/nh48-chronicle.png",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#F5EFE0",
        borderTop: "3px solid #D4B84A",
        paddingTop: "52px",
        paddingBottom: "64px",
      }}
    >
      {/* Heading */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "36px",
        }}
      >
        <h2
          style={{
            fontFamily: "Bebas Neue, cursive",
            color: "#1B5C4F",
            fontSize: "clamp(28px, 4.5vw, 58px)",
            letterSpacing: "0.06em",
            margin: 0,
          }}
        >
          WHAT THEY SAY ABOUT US
        </h2>
      </div>

      {/* Slide card */}
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "clamp(320px, 72vw, 920px)",
          height: "clamp(200px, 24vw, 300px)",
          overflow: "hidden",
        }}
      >
        {/* Left: newspaper image */}
        <div
          style={{
            width: "50%",
            flexShrink: 0,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={slides[active].image}
            alt="NH48 Chronicle"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              transition: "opacity 0.4s ease",
            }}
          />
        </div>

        {/* Right: teal quote panel */}
        <div
          style={{
            width: "50%",
            flexShrink: 0,
            backgroundColor: "#4A8C82",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(20px, 3vw, 40px)",
          }}
        >
          <p
            style={{
              fontFamily: "Bebas Neue, cursive",
              color: "#F5EFE0",
              fontSize: "clamp(11px, 1.1vw, 15px)",
              letterSpacing: "0.07em",
              lineHeight: 1.65,
              textAlign: "center",
              margin: 0,
              transition: "opacity 0.4s ease",
            }}
          >
            {slides[active].quote}
          </p>
        </div>
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "24px",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              backgroundColor: i === active ? "#1B5C4F" : "#A0B8B4",
              transition: "background-color 0.2s",
            }}
          />
        ))}
      </div>
    </section>
  );
}

function Plates() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      };
      gsap.to(sectionRef.current.querySelectorAll(".plate-drift-up"), {
        y: -30,
        ease: "none",
        scrollTrigger: tl,
      });
      gsap.to(sectionRef.current.querySelectorAll(".plate-drift-down"), {
        y: 30,
        ease: "none",
        scrollTrigger: tl,
      });
    },
    { scope: sectionRef },
  );

  const plates = [
    {
      name: "BUTTER CHICKEN",
      file: "butter-chicken",
      labelPos: "bottom",
      drift: "down",
      marginTop: "180px",
    },
    {
      name: "SARSO KA SAAG",
      file: "sarso-ka-saag",
      labelPos: "top",
      drift: "up",
      marginTop: "100px",
    },
    {
      name: "DAL BHATI CHURMA",
      file: "dal-bhati-churma",
      labelPos: "bottom",
      drift: "down",
      marginTop: "280px",
    },
    {
      name: "DHOKLA",
      file: "dhokla",
      labelPos: "bottom",
      drift: "up",
      marginTop: "140px",
    },
    {
      name: "PAV BHAJI",
      file: "pav-bhaji",
      labelPos: "top",
      drift: "up",
      marginTop: "100px",
    },
    {
      name: "RAGI PODDI",
      file: "ragi-poddi",
      labelPos: "bottom",
      drift: "down",
      marginTop: "300px",
    },
    {
      name: "DOSA",
      file: "dosa",
      labelPos: "top",
      drift: "up",
      marginTop: "100px",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#1B5C4F",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        paddingTop: "64px",
        paddingBottom: "120px",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginBottom: "48px",
          width: "100%",
        }}
      >
        <svg
          width="72"
          height="57"
          viewBox="0 0 72 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.1462 21.1309C46.1462 21.1309 49.2654 9.97958 36.0086 0C22.7603 9.97958 25.871 21.1309 25.871 21.1309C12.6227 11.7412 0 22.3026 0 22.3026C0 22.3026 13.2483 19.3693 17.0359 29.3489C20.8236 39.3285 33.4378 43.4335 33.4378 43.4335L33.3006 54.4413V54.6326C33.2921 55.9399 34.4318 57 35.8372 57H35.8886C37.2854 57 38.4166 55.9478 38.4251 54.6486V54.6087L38.5622 43.4255C38.5622 43.4255 51.185 39.3205 54.9641 29.3409C58.7517 19.3613 72 22.2946 72 22.2946C72 22.2946 59.3944 11.7412 46.1462 21.1309Z"
            fill="#A94545"
          />
        </svg>
        <h2
          style={{
            fontFamily: "Bebas Neue, cursive",
            color: "#F5EFE0",
            fontSize: "clamp(28px, 4vw, 52px)",
            letterSpacing: "0.08em",
            margin: 0,
            textShadow: "2px 2px 0px rgba(0,0,0,0.3)",
          }}
        >
          PLATES OF THE NH48
        </h2>
        <svg
          width="72"
          height="57"
          viewBox="0 0 72 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "scaleX(-1)" }}
        >
          <path
            d="M46.1462 21.1309C46.1462 21.1309 49.2654 9.97958 36.0086 0C22.7603 9.97958 25.871 21.1309 25.871 21.1309C12.6227 11.7412 0 22.3026 0 22.3026C0 22.3026 13.2483 19.3693 17.0359 29.3489C20.8236 39.3285 33.4378 43.4335 33.4378 43.4335L33.3006 54.4413V54.6326C33.2921 55.9399 34.4318 57 35.8372 57H35.8886C37.2854 57 38.4166 55.9478 38.4251 54.6486V54.6087L38.5622 43.4255C38.5622 43.4255 51.185 39.3205 54.9641 29.3409C58.7517 19.3613 72 22.2946 72 22.2946C72 22.2946 59.3944 11.7412 46.1462 21.1309Z"
            fill="#A94545"
          />
        </svg>
      </div>

      {/* Cards row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "clamp(12px, 2vw, 28px)",
          padding: "0 clamp(16px, 4vw, 60px)",
          width: "100%",
        }}
      >
        {plates.map((plate) => (
          <div
            key={plate.file}
            className={
              plate.drift === "up" ? "plate-drift-up" : "plate-drift-down"
            }
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // ← align to left so label tab can hang out
              marginTop: plate.marginTop,
              flexShrink: 0,
              width: "clamp(110px, 12vw, 175px)",
              position: "relative",
            }}
          >
            {/* Label top — overhangs left */}
            {plate.labelPos === "top" && (
              <div
                style={{
                  backgroundColor: "#8B3A3A",
                  padding: "5px 10px",
                  // Overhang: pull it left of the card
                  marginLeft: "-18px",
                  marginBottom: "0px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Bebas Neue, cursive",
                    color: "#F5EFE0",
                    fontSize: "clamp(9px, 0.9vw, 13px)",
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {plate.name}
                </span>
              </div>
            )}

            {/* Image */}
            <div
              style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden" }}
            >
              <img
                src={`/assets/dishes/${plate.file}.png`}
                alt={plate.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Label bottom — overhangs left */}
            {plate.labelPos === "bottom" && (
              <div
                style={{
                  backgroundColor: "#8B3A3A",
                  padding: "5px 10px",
                  marginLeft: "-18px",
                  marginTop: "0px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Bebas Neue, cursive",
                    color: "#F5EFE0",
                    fontSize: "clamp(9px, 0.9vw, 13px)",
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {plate.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Skyline — full width, bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          lineHeight: 0,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 1512 72"
          preserveAspectRatio="xMidYMax slice" // ← "slice" stretches to fill full width
          style={{ width: "100%", height: "72px", display: "block" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ...keep exact same SVG path content as original... */}
        </svg>
      </div>
    </section>
  );
}

const CITIES = [
  {
    key: "delhi",
    label: "DELHI",
    image: "/assets/journey/delhi.jpg",
    path: "/delhi",
  },
  {
    key: "jaipur",
    label: "JAIPUR",
    image: "/assets/journey/jaipur.jpg",
    path: "/jaipur",
  },
  {
    key: "mumbai",
    label: "MUMBAI",
    image: "/assets/journey/mumbai.jpg",
    path: "/mumbai",
  },
];

function Journey() {
  //const navigate = useNavigate(); // remove if not using React Router

  return (
    <div style={styles.wrapper}>
      {/* Title */}
      <h2 style={styles.title}>A JOURNEY THROUGH CITY SIGNATURES</h2>

      {/* Cards row */}
      <div style={styles.cardsRow}>
        {CITIES.map((city) => (
          <CityCard
            key={city.key}
            city={city}
            onClick={() => navigate(city.path)} // swap for your own navigation
          />
        ))}
      </div>

      {/* Lotus icon — swap with your SVG/image if you have the asset */}
      <svg
        width="100"
        height="76"
        viewBox="0 0 100 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_n_1_749)">
          <path
            d="M21.797 7.6023C24.4962 8.30152 29.8986 10.0007 35.297 13.2039C33.4962 17.0047 31.9962 21.2039 31.4962 25.7039C27.797 23.8055 23.797 22.9031 19.8942 22.4031C19.695 16.1023 20.9963 10.4033 21.797 7.6023ZM64.797 13.2C66.5978 17.0008 68.0978 21.2 68.5978 25.7C72.3986 23.8016 76.297 22.8992 80.1998 22.3992C80.3014 16.0984 79.0982 10.3992 78.3014 7.5982C75.4967 8.30132 70.0979 10.0007 64.797 13.2ZM74.297 63.102C74.9962 63.102 75.6954 63.102 76.3986 63.0004C86.7966 62.5004 95.6996 58.102 100.001 55.6996C98.0006 54.5004 94.899 53.0004 91.1022 51.5004C89.2038 53.5004 87.0006 55.3012 84.403 56.6996C81.0046 58.6996 77.6022 60.1996 74.301 61.3012C72.4026 62.0005 70.5002 62.5004 68.6994 62.8012C70.4963 63.102 72.297 63.102 74.297 63.102ZM63.797 59.4028C64.5978 59.3012 65.3986 59.2036 66.1954 59.102C68.3946 58.8012 70.6954 58.2036 73.0938 57.4028C76.0938 56.4028 79.293 55.0044 82.3946 53.2036C83.8946 52.3052 85.293 51.3052 86.5938 50.102C87.1954 49.602 87.793 49.0004 88.293 48.4028C88.793 47.8013 89.293 47.3012 89.793 46.7036C95.293 40.102 97.8946 31.9026 98.8946 28.3056C96.1954 27.6064 90.9962 26.4072 84.9966 26.4072H84.0982C83.3989 26.4072 82.6998 26.4072 81.9966 26.5088C81.2973 26.5088 80.5982 26.6103 79.895 26.708C76.1958 27.208 72.4966 28.208 69.094 30.208C68.9924 30.208 68.8947 30.3096 68.7932 30.4072C68.7932 33.0088 68.594 35.5088 68.2932 37.9072C67.9924 40.208 67.594 42.4072 66.9924 44.5088C66.8908 44.8096 66.7932 45.1104 66.6916 45.5088C66.59 45.9073 66.4924 46.3096 66.2932 46.708C66.0939 47.4072 65.7932 48.208 65.5939 48.9072C65.2932 49.8057 64.8947 50.6064 64.5939 51.5088C64.2932 52.1104 64.0939 52.6104 63.7932 53.208C63.3947 54.0088 62.9924 54.708 62.594 55.3096C61.7932 56.6104 60.8948 57.8096 59.9924 58.8096C59.7931 59.1104 59.4924 59.3096 59.2931 59.5088C59.9924 59.6104 60.6915 59.6104 61.4923 59.6104C62.1955 59.501 62.9962 59.5005 63.797 59.4028ZM40.797 63.9028C41.1954 64.602 41.5978 65.2036 41.9962 65.8012C44.9962 70.4028 48.1954 73.8012 49.9962 75.602C51.797 73.8012 54.9962 70.4028 57.9962 65.8012C58.3946 65.1996 58.797 64.602 59.1954 63.9028C59.297 63.8012 59.297 63.7036 59.3946 63.602C59.1954 63.602 58.9962 63.602 58.7931 63.5005C57.3947 63.3012 56.0939 63.0005 54.8947 62.602C54.7931 62.7036 54.6954 62.7036 54.5939 62.7036C53.3947 63.2036 52.0939 63.5044 50.6955 63.602H50.0939H49.4924C48.1916 63.5005 46.8908 63.2036 45.594 62.7036C45.4924 62.7036 45.3947 62.602 45.2932 62.602C44.094 63.0005 42.7932 63.3012 41.2932 63.5005C41.094 63.5005 40.8947 63.602 40.6916 63.602C40.6955 63.6997 40.6954 63.8012 40.797 63.9028ZM31.297 62.9028C30.1954 62.7036 28.9962 62.4028 27.8986 62.0044C23.8986 60.9028 19.797 59.106 15.5976 56.7036C13.0976 55.2036 10.8984 53.4028 8.8984 51.5044C5.0976 52.9028 2.0976 54.5044 0 55.7036C4.3008 58.2036 13.199 62.5044 23.602 63.0044C24.3012 63.0044 25.0004 63.1059 25.7036 63.1059C27.6958 63.102 29.4962 63.102 31.297 62.9028ZM36.1954 59.4028C36.9962 59.5044 37.797 59.5044 38.4962 59.5044C39.297 59.5044 39.9962 59.4028 40.6954 59.4028C40.4962 59.2036 40.297 58.9028 39.9962 58.7036C39.0977 57.7036 38.1954 56.5044 37.3946 55.2036C36.9961 54.5044 36.5938 53.8052 36.1954 53.0044C35.8946 52.5044 35.6954 51.9028 35.3946 51.3052C34.9962 50.5044 34.6954 49.606 34.3946 48.7036C34.0938 48.0044 33.8946 47.3052 33.6954 46.5044C33.5938 46.1059 33.4962 45.7036 33.3946 45.3052C33.293 45.0044 33.1954 44.7036 33.0938 44.3052C32.5938 42.2036 32.0938 40.0044 31.793 37.7036C31.4922 35.3052 31.293 32.8052 31.293 30.2036C31.1915 30.102 31.0938 30.102 30.9922 30.0044C27.5938 28.0044 23.8906 27.0044 20.1912 26.5044C19.492 26.4028 18.7928 26.3051 18.0896 26.3051C17.3904 26.2036 16.6912 26.2036 15.988 26.2036C9.68724 26.102 3.98804 27.3052 1.18704 28.102C2.08548 31.7036 4.78864 39.903 10.2886 46.5C10.7886 47.1015 11.2886 47.6992 11.7886 48.1992C12.3902 48.8007 12.8902 49.3008 13.4878 49.8984C14.7886 51 16.187 52.0976 17.687 53C21.4878 55.1992 25.2886 56.8008 28.988 57.8984C30.6872 58.3984 32.2888 58.6992 33.8864 59C34.5974 59.3008 35.3946 59.4028 36.1954 59.4028ZM63.6954 22.6018C63.0938 20.1018 62.1954 17.801 61.1954 15.5002C60.8946 14.8986 60.5938 14.1994 60.1954 13.6018C59.8946 13.0002 59.4962 12.4026 59.1954 11.801C55.8946 6.301 51.9962 2.0002 49.9962 0C47.9962 2 44.0978 6.1992 40.797 11.801C40.4962 12.4026 40.0978 13.0002 39.797 13.6018C39.4962 14.2034 39.0978 14.9026 38.797 15.5002C37.6954 17.6994 36.8986 20.1018 36.297 22.6018C35.8986 24.301 35.5978 26.1018 35.4962 28.0002C35.4962 28.5002 35.3947 28.8986 35.3947 29.3986V30.5002V30.6018C35.3947 31.5002 35.4962 32.301 35.4962 33.1018C35.5978 34.7034 35.797 36.301 35.9962 37.801C36.3947 40.301 36.8947 42.6994 37.5978 44.9026C37.797 45.7033 38.0978 46.4026 38.297 47.1018C38.5978 47.9025 38.8986 48.6018 39.1955 49.4026C40.0939 51.6018 41.2971 53.5042 42.4963 55.1018H42.5978V55.2033C43.3986 56.2033 44.1994 57.0041 44.9962 57.7033C45.1955 57.8049 45.297 57.9025 45.4962 58.0041H45.5978C46.297 58.5041 46.9962 58.9025 47.6994 59.1057C48.0002 59.2073 48.301 59.3049 48.5978 59.4065C48.6994 59.4065 48.7971 59.4065 48.8986 59.508C49.1994 59.6096 49.5002 59.6096 49.7971 59.6096H50.0978H50.3986C50.6994 59.6096 51.0002 59.6096 51.2971 59.508C51.3986 59.508 51.4963 59.508 51.5978 59.4065C51.8986 59.3049 52.1994 59.2073 52.4963 59.1057C53.1955 58.8049 53.8947 58.5041 54.5979 58.0041H54.6994C54.8987 57.9025 55.0002 57.8049 55.1994 57.7033C56.0979 57.0041 56.8986 56.2033 57.5978 55.2033C58.797 53.6017 59.8986 51.7033 60.8986 49.5041C61.1994 48.8049 61.5002 48.0041 61.7971 47.2033C62.0979 46.5041 62.2971 45.7033 62.4963 45.0041C63.1955 42.8049 63.6955 40.4025 63.9963 37.9025C64.1955 36.4025 64.3947 34.8009 64.4963 33.2033C64.5979 32.4025 64.5979 31.5041 64.5979 30.7033V30.6018V29.5002C64.5979 29.0002 64.5979 28.6017 64.4963 28.1018C64.3947 26.1995 64.1954 24.4026 63.6954 22.6018Z"
            fill="#14534D"
            fill-opacity="0.82"
          />
        </g>
        <defs>
          <filter
            id="filter0_n_1_749"
            x="0"
            y="0"
            width="100"
            height="75.6021"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="2 2"
              stitchTiles="stitch"
              numOctaves="3"
              result="noise"
              seed="2158"
            />
            <feColorMatrix
              in="noise"
              type="luminanceToAlpha"
              result="alphaNoise"
            />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA
                type="discrete"
                tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
              />
            </feComponentTransfer>
            <feComposite
              operator="in"
              in2="shape"
              in="coloredNoise1"
              result="noise1Clipped"
            />
            <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
            <feComposite
              operator="in"
              in2="noise1Clipped"
              in="color1Flood"
              result="color1"
            />
            <feMerge result="effect1_noise_1_749">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function CityCard({ city, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.card,
        transform: hovered ? "scale(1.03)" : "scale(1)",
        boxShadow: hovered
          ? "0 12px 32px rgba(0,0,0,0.35)"
          : "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {/* Background photo */}
      <img
        src={city.image}
        alt={city.label}
        style={{
          ...styles.cardBg,
          filter: hovered
            ? "brightness(0.45) sepia(0.4)"
            : "brightness(0.55) sepia(0.25)",
          transform: hovered ? "scale(1.07)" : "scale(1)",
        }}
      />

      {/* City name overlay */}
      <span style={styles.cardLabel}>{city.label}</span>
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────
const styles = {
  wrapper: {
    backgroundColor: "#f5f0e4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px 40px 28px",
    gap: 24,
    width: "100%",
    boxSizing: "border-box",
  },

  title: {
    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
    fontSize: "1.6rem",
    letterSpacing: "0.2em",
    color: "#1a5c48",
    margin: 0,
    textAlign: "center",
  },

  cardsRow: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    width: "100%",
  },

  card: {
    position: "relative",
    flex: "1 1 0",
    maxWidth: 340,
    height: 220,
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    borderRadius: 2,
  },

  cardBg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transition: "filter 0.4s ease, transform 0.5s ease",
  },

  cardLabel: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
    fontSize: "2.8rem",
    letterSpacing: "0.1em",
    color: "#ffffff",
    textShadow: "0 2px 16px rgba(0,0,0,0.6)",
  },

  lotus: {
    fontSize: "1.8rem",
    lineHeight: 1,
  },
};

// Reusing the Lotus icon from your previous section for consistency
// const LotusIcon = ({ color, size = 40 }) => (
//   <svg
//     width={size}
//     height={(size / 72) * 57}
//     viewBox="0 0 72 57"
//     style={{ display: "inline-block" }}
//   >
//     <path
//       d="M46.1462 21.1309C46.1462 21.1309 49.2654 9.97958 36.0086 0C22.7603 9.97958 25.871 21.1309 25.871 21.1309C12.6227 11.7412 0 22.3026 0 22.3026C0 22.3026 13.2483 19.3693 17.0359 29.3489C20.8236 39.3285 33.4378 43.4335 33.4378 43.4335L33.3006 54.4413V54.6326C33.2921 55.9399 34.4318 57 35.8372 57H35.8886C37.2854 57 38.4166 55.9478 38.4251 54.6486V54.6087L38.5622 43.4255C38.5622 43.4255 51.185 39.3205 54.9641 29.3409C58.7517 19.3613 72 22.2946 72 22.2946C72 22.2946 59.3944 11.7412 46.1462 21.1309Z"
//       fill={color}
//     />
//   </svg>
// );

// ─── Scallop border helper ───────────────────────────────────────────────────
// Renders a horizontal scallop strip:
//   position='top'    → gold strip at top edge, dark-red bumps face DOWN into section
//   position='bottom' → gold strip at bottom edge, dark-red bumps face UP into section
function ScallopBorder({
  position = "top",
  bg = "#D4BA5A",
  scallop = "#8B3A3A",
  height = 36,
}) {
  const count = 28; // fewer, larger scallops matching Figma
  const arcW = 1200 / count;
  const r = arcW / 2;

  // The gold strip occupies the full SVG height.
  // The dark-red scallop path is drawn at the INNER edge (facing the section body).
  let d;
  if (position === "top") {
    // Strip sits at top; bumps point DOWN (into the yellow section)
    // Start at bottom-left of strip, arch up-and-back-down along the bottom edge
    d = `M0,${height}`;
    for (let i = 0; i < count; i++) {
      const x2 = (i + 1) * arcW;
      // sweep=0 → arc bows UPWARD (bump points into the strip = upward = away from section)
      // sweep=1 → arc bows DOWNWARD (bump points INTO the section below)
      d += ` A${r},${r} 0 0,1 ${x2},${height}`;
    }
    d += ` L1200,0 L0,0 Z`;
  } else {
    // Strip sits at bottom; bumps point UP (into the yellow section above)
    d = `M0,0`;
    for (let i = 0; i < count; i++) {
      const x2 = (i + 1) * arcW;
      d += ` A${r},${r} 0 0,0 ${x2},0`;
    }
    d += ` L1200,${height} L0,${height} Z`;
  }

  return (
    <div style={{ lineHeight: 0, pointerEvents: "none", width: "100%" }}>
      <svg
        viewBox={`0 0 1200 ${height}`}
        preserveAspectRatio="none"
        style={{ width: "100%", height: `${height}px`, display: "block" }}
      >
        {/* Gold background strip */}
        <rect width="1200" height={height} fill={bg} />
        {/* Dark-red scallops cut into the strip from the inner edge */}
        <path d={d} fill={scallop} />
      </svg>
    </div>
  );
}

// ─── Illustrated DC Map ──────────────────────────────────────────────────────
function DCMapIllustration() {
  return (
    <svg
      viewBox="0 0 520 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {/* Background — aged paper */}
      <rect width="520" height="300" fill="#F2E8C4" />

      {/* Grid lines */}
      {Array.from({ length: 14 }, (_, i) => (
        <line
          key={`h${i}`}
          x1="0"
          y1={i * 22}
          x2="520"
          y2={i * 22}
          stroke="#D9C99A"
          strokeWidth="0.5"
        />
      ))}
      {Array.from({ length: 24 }, (_, i) => (
        <line
          key={`v${i}`}
          x1={i * 22}
          y1="0"
          x2={i * 22}
          y2="300"
          stroke="#D9C99A"
          strokeWidth="0.5"
        />
      ))}

      {/* Potomac River — organic teal shape */}
      <path
        d="M0,60 Q30,40 50,80 Q70,120 40,150 Q20,180 0,200 Z"
        fill="#5AADBD"
        opacity="0.85"
      />
      <path
        d="M0,200 Q30,220 20,260 Q10,285 0,300 Z"
        fill="#5AADBD"
        opacity="0.85"
      />

      {/* Inner river body continuation */}
      <path
        d="M40,150 Q60,160 70,200 Q75,230 55,270 Q35,300 0,300 L0,200 Q20,180 40,150 Z"
        fill="#5AADBD"
        opacity="0.75"
      />

      {/* POTOMAC RIVER label */}
      <text
        x="18"
        y="130"
        transform="rotate(-70, 18, 130)"
        fontFamily="'Bebas Neue', cursive"
        fontSize="9"
        fill="#2E7D8A"
        letterSpacing="2"
      >
        POTOMAC RIVER
      </text>

      {/* Main road — MacArthur Blvd (diagonal) */}
      <line
        x1="80"
        y1="60"
        x2="320"
        y2="220"
        stroke="#E8A830"
        strokeWidth="6"
      />
      <text
        x="155"
        y="120"
        transform="rotate(33, 155, 120)"
        fontFamily="Arial"
        fontSize="7"
        fill="#7A5A00"
        fontWeight="bold"
        letterSpacing="1"
      >
        MACARTHUR BLVD NW
      </text>

      {/* Secondary roads */}
      <line
        x1="80"
        y1="60"
        x2="420"
        y2="60"
        stroke="#D4B84A"
        strokeWidth="3"
        opacity="0.7"
      />
      <line
        x1="200"
        y1="60"
        x2="200"
        y2="240"
        stroke="#D4B84A"
        strokeWidth="3"
        opacity="0.7"
      />
      <line
        x1="300"
        y1="60"
        x2="300"
        y2="240"
        stroke="#D4B84A"
        strokeWidth="3"
        opacity="0.7"
      />
      <line
        x1="80"
        y1="150"
        x2="420"
        y2="150"
        stroke="#D4B84A"
        strokeWidth="3"
        opacity="0.7"
      />
      <line
        x1="80"
        y1="220"
        x2="420"
        y2="220"
        stroke="#D4B84A"
        strokeWidth="3"
        opacity="0.7"
      />

      {/* Georgetown label */}
      <text
        x="290"
        y="205"
        fontFamily="'Bebas Neue', cursive"
        fontSize="18"
        fill="#5A3A1A"
        letterSpacing="2"
      >
        GEORGETOWN
      </text>

      {/* Clover Archbold Park — green blob */}
      <ellipse cx="220" cy="258" rx="48" ry="28" fill="#4A8A50" opacity="0.7" />
      <text
        x="195"
        y="253"
        fontFamily="'Bebas Neue', cursive"
        fontSize="6.5"
        fill="white"
        textAnchor="middle"
      >
        CLOVER
      </text>
      <text
        x="195"
        y="261"
        fontFamily="'Bebas Neue', cursive"
        fontSize="6.5"
        fill="white"
        textAnchor="middle"
      >
        ARCHBOLD
      </text>
      <text
        x="195"
        y="269"
        fontFamily="'Bebas Neue', cursive"
        fontSize="6.5"
        fill="white"
        textAnchor="middle"
      >
        PARK
      </text>

      {/* Capitol Building simplified */}
      <rect
        x="380"
        y="62"
        width="32"
        height="30"
        fill="#E8E0CC"
        stroke="#888"
        strokeWidth="0.8"
      />
      <polygon
        points="396,50 378,64 414,64"
        fill="#D0C8B0"
        stroke="#888"
        strokeWidth="0.8"
      />
      {/* Dome */}
      <ellipse
        cx="396"
        cy="52"
        rx="8"
        ry="10"
        fill="#C8C0A0"
        stroke="#888"
        strokeWidth="0.8"
      />
      <rect x="393" y="40" width="6" height="12" fill="#B8B0A0" />
      <line x1="396" y1="36" x2="396" y2="33" stroke="#888" strokeWidth="1" />

      {/* Lincoln Memorial simplified */}
      <rect
        x="110"
        y="78"
        width="28"
        height="18"
        fill="#E0D8C0"
        stroke="#999"
        strokeWidth="0.8"
      />
      {Array.from({ length: 5 }, (_, i) => (
        <line
          key={i}
          x1={113 + i * 5}
          y1="78"
          x2={113 + i * 5}
          y2="96"
          stroke="#AAA"
          strokeWidth="0.8"
        />
      ))}
      <rect x="108" y="95" width="32" height="4" fill="#C8C0A8" />

      {/* Trolley / bus icon */}
      <rect x="156" y="148" width="24" height="14" rx="3" fill="#C0392B" />
      <rect x="160" y="145" width="16" height="6" rx="1" fill="#E74C3C" />
      <circle cx="160" cy="163" r="3" fill="#333" />
      <circle cx="176" cy="163" r="3" fill="#333" />
      <line
        x1="162"
        y1="148"
        x2="162"
        y2="162"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="168"
        y1="148"
        x2="168"
        y2="162"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="174"
        y1="148"
        x2="174"
        y2="162"
        stroke="white"
        strokeWidth="0.5"
      />

      {/* Deer icon */}
      <text x="78" y="198" fontSize="16" fill="#5A3A1A">
        🦌
      </text>

      {/* Sailboat on water */}
      <polygon
        points="195,240 200,215 205,240"
        fill="white"
        stroke="#888"
        strokeWidth="0.8"
      />
      <line x1="200" y1="215" x2="200" y2="243" stroke="#555" strokeWidth="1" />

      {/* Location PIN — 4824 */}
      <line
        x1="205"
        y1="100"
        x2="205"
        y2="130"
        stroke="#8B3A3A"
        strokeWidth="2"
      />
      <path
        d="M205,70 m-14,0 a14,14 0 1,1 28,0 Q205,100 205,100 Q205,100 191,84 a14,14 0 0,1 14,-14 Z"
        fill="#8B3A3A"
      />
      {/* Flag on pin */}
      <rect x="205" y="58" width="18" height="12" fill="#4A2060" />
      <text
        x="207"
        y="67"
        fontFamily="Arial"
        fontSize="7"
        fill="white"
        fontWeight="bold"
      >
        4824
      </text>

      {/* Address label near pin */}
      <rect
        x="90"
        y="104"
        width="90"
        height="26"
        fill="#4A2060"
        opacity="0.88"
      />
      <text
        x="135"
        y="115"
        fontFamily="'Bebas Neue', cursive"
        fontSize="7.5"
        fill="white"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        4824 MACARTHUR
      </text>
      <text
        x="135"
        y="125"
        fontFamily="'Bebas Neue', cursive"
        fontSize="7.5"
        fill="white"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        BLVD NW
      </text>

      {/* Decorative border */}
      <rect
        x="2"
        y="2"
        width="516"
        height="296"
        fill="none"
        stroke="#B8A060"
        strokeWidth="3"
      />
    </svg>
  );
}

// ─── Location & Timings Section ───────────────────────────────────────────────
function LocationTimings() {
  const width = useWindowWidth();
  const mob = width < 768;

  const hours = [
    { day: "MON:", time: "10 AM – 5 PM" },
    { day: "TUE:", time: "10 AM – 5 PM" },
    { day: "WED:", time: "10 AM – 5 PM" },
    { day: "THUR:", time: "10 AM – 5 PM" },
    { day: "FRI:", time: "10 AM – 5 PM" },
    { day: "SAT:", time: "8 AM – 7 PM" },
    { day: "SUN:", time: "8 AM – 7 PM" },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#D4BA5A",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px",
        position: "relative",
      }}
    >
      {/* TOP scallop border */}
      <ScallopBorder
        position="top"
        bg="#D4BA5A"
        scallop="#8B3A3A"
        height={28}
      />

      <div style={{ padding: mob ? "32px 20px 40px" : "48px 60px 56px" }}>
        {/* Section heading */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: mob ? "28px" : "40px",
          }}
        >
          <h2
            style={{
              fontFamily: "Bebas Neue, cursive",
              color: "#1B5C4F",
              fontSize: mob ? "32px" : "clamp(36px, 4.5vw, 56px)",
              letterSpacing: "0.08em",
              margin: 0,
              textAlign: "center",
            }}
          >
            LOCATION &amp; TIMING'S
          </h2>
        </div>

        {/* Map + Info panel */}
        <div
          style={{
            display: "flex",
            flexDirection: mob ? "column" : "row",
            alignItems: mob ? "center" : "stretch",
            justifyContent: "center",
            gap: mob ? "20px" : "0",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* LEFT — Illustrated map */}
          <div
            style={{
              flex: mob ? "unset" : "0 0 52%",
              width: mob ? "100%" : "auto",
              maxWidth: mob ? "480px" : "unset",
              border: "3px solid #B8A060",
              overflow: "hidden",
              boxShadow: "4px 4px 16px rgba(0,0,0,0.18)",
              backgroundColor: "#F2E8C4",
              aspectRatio: mob ? "520/300" : "unset",
            }}
          >
            <DCMapIllustration />
          </div>

          {/* RIGHT — Info panel */}
          <div
            style={{
              flex: mob ? "unset" : "0 0 48%",
              width: mob ? "100%" : "auto",
              maxWidth: mob ? "480px" : "unset",
              backgroundColor: "#1B5C4F",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: mob ? "28px 20px" : "36px 40px",
            }}
          >
            {/* Address */}
            <p
              style={{
                fontFamily: "Bebas Neue, cursive",
                color: "#F5EFE0",
                fontSize: mob ? "15px" : "clamp(14px, 1.5vw, 19px)",
                letterSpacing: "0.06em",
                lineHeight: 1.4,
                textAlign: "center",
                margin: "0 0 28px 0",
              }}
            >
              4824 MACARTHUR BLVD NW LL
              <br />
              WASHINGTON DC , 20007
            </p>

            {/* Hours list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                width: "100%",
                alignItems: "center",
              }}
            >
              {hours.map(({ day, time }) => (
                <p
                  key={day}
                  style={{
                    fontFamily: "Bebas Neue, cursive",
                    color: "#F5EFE0",
                    fontSize: mob ? "13px" : "clamp(12px, 1.2vw, 16px)",
                    letterSpacing: "0.07em",
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {day} {time}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM scallop border */}
      <ScallopBorder
        position="bottom"
        bg="#D4BA5A"
        scallop="#8B3A3A"
        height={36}
      />
    </section>
  );
}

// ─── Star / Moroccan lantern ornament ────────────────────────────────────────
function StarOrnament({ size = 90, stroke = "#D4B84A", strokeWidth = 1.5 }) {
  // Two overlapping squares rotated 45° → 8-pointed star outline
  const s = size;
  const c = s / 2;
  const o = s * 0.28; // offset from center for inner corners
  // Outer square points
  const pts1 = [
    [c, 0],
    [s, c],
    [c, s],
    [0, c],
  ]
    .map((p) => p.join(","))
    .join(" ");
  // Rotated square points (45°)
  const r45 = s * 0.354;
  const pts2 = [
    [c - r45, c - r45],
    [c + r45, c - r45],
    [c + r45, c + r45],
    [c - r45, c + r45],
  ]
    .map((p) => p.join(","))
    .join(" ");
  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      style={{ display: "block" }}
    >
      <polygon
        points={pts1}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <polygon
        points={pts2}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      {/* Inner smaller square outline */}
      <polygon
        points={`${c},${o} ${s - o},${c} ${c},${s - o} ${o},${c}`}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

// ─── Food Grid Section ────────────────────────────────────────────────────────
const FOOD_GRID_IMAGES = [
  "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=700&q=85", // dal makhani
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=700&q=85", // vada pav burger
  "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=700&q=85", // dal/curry bowl
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&q=85", // seekh kebab skewers
  "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&q=85", // butter chicken
  "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700&q=85", // pani puri
];

function FoodGridSection() {
  const width = useWindowWidth();
  const mob = width < 640;
  const tab = width < 1024 && width >= 640;

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#1B5C4F",
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
        backgroundSize: "18px 18px",
        overflow: "hidden",
        paddingTop: "64px",
        paddingBottom: "72px",
      }}
    >
      {/* ── Watermark NH48 ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 -20px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {/* N */}
        <span
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "clamp(180px, 25vw, 340px)",
            color: "rgba(139,58,58,0.18)",
            lineHeight: 1,
            userSelect: "none",
            marginLeft: "-20px",
          }}
        >
          N
        </span>
        {/* H */}
        <span
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "clamp(180px, 25vw, 340px)",
            color: "rgba(139,58,58,0.12)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          H
        </span>
        {/* 4 */}
        <span
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "clamp(180px, 25vw, 340px)",
            color: "rgba(139,58,58,0.14)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          4
        </span>
        {/* 8 */}
        <span
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "clamp(180px, 25vw, 340px)",
            color: "rgba(139,58,58,0.18)",
            lineHeight: 1,
            userSelect: "none",
            marginRight: "-20px",
          }}
        >
          8
        </span>
      </div>

      {/* ── Star ornament — left side ── */}
      <div
        style={{
          position: "absolute",
          left: "clamp(20px, 4vw, 60px)",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          pointerEvents: "none",
          opacity: 0.85,
        }}
      >
        <StarOrnament size={mob ? 55 : 90} stroke="#D4B84A" strokeWidth={1.5} />
      </div>

      {/* ── Red lotus — bottom right ── */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "clamp(20px, 4vw, 56px)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <svg width={mob ? 32 : 46} height={mob ? 26 : 37} viewBox="0 0 72 57">
          <path
            d="M46.1462 21.1309C46.1462 21.1309 49.2654 9.97958 36.0086 0C22.7603 9.97958 25.871 21.1309 25.871 21.1309C12.6227 11.7412 0 22.3026 0 22.3026C0 22.3026 13.2483 19.3693 17.0359 29.3489C20.8236 39.3285 33.4378 43.4335 33.4378 43.4335L33.3006 54.4413V54.6326C33.2921 55.9399 34.4318 57 35.8372 57H35.8886C37.2854 57 38.4166 55.9478 38.4251 54.6486V54.6087L38.5622 43.4255C38.5622 43.4255 51.185 39.3205 54.9641 29.3409C58.7517 19.3613 72 22.2946 72 22.2946C72 22.2946 59.3944 11.7412 46.1462 21.1309Z"
            fill="#A94545"
          />
        </svg>
      </div>

      {/* ── 3×2 Photo grid ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: mob ? "1fr 1fr" : "repeat(3, 1fr)",
          gap: mob ? "6px" : "8px",
          width: mob
            ? "calc(100% - 40px)"
            : tab
              ? "calc(100% - 80px)"
              : "calc(100% - 200px)",
          maxWidth: "820px",
          margin: "0 auto",
        }}
      >
        {FOOD_GRID_IMAGES.map((src, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              aspectRatio: "1/1",
              overflow: "hidden",
              outline: "2px solid #D4B84A",
              outlineOffset: "-4px",
            }}
          >
            <img
              src={src}
              alt={`NH48 dish ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

