import { useRef, useState, useEffect } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";
import SiteFooter from "../components/SiteFooter";

// ─── Colour tokens ─────────────────────────────────────────────────────────────
const TEAL   = "#14534D";
const RED    = "rgb(169,69,69)";
const RED_2  = "#AE5150";
const RED_3  = "#B35C5A";
const GOLD   = "#F8B519";
const PINK   = "#E62F80";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CityCardsSection />
      <StorySection />
      <QuotePlaceholderSection />
      <FoodMenuSection />
      <QuoteBanner />
      <Sayings />
      <GetInTouchSection />
      <SiteFooter />
    </div>
  );
}

function HeroSection() {
  const width = useWindowWidth();
  const mob = width < 768;

  return (
    <section style={{
      width: "100%",
      height: mob ? "clamp(260px, 56vw, 380px)" : "calc(100dvh - 72px)",
      marginTop: "72px",
      overflow: "hidden",
      lineHeight: 0,
    }}>
      <img
        src="/assets/home-page/new/new hero image to be replaced.png"
        alt="Welcome to NH48"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: mob ? "center center" : "center top",
          display: "block",
        }}
      />
    </section>
  );
}

function CityCardsSection() {
  const sectionRef = useRef(null);
  const width = useWindowWidth();

  // No horizontal drift on cards — gap stays constant

  const mob = width < 768;
  const ovalW = mob ? "clamp(130px, 42vw, 180px)" : "clamp(160px, 17.3vw, 261px)";
  const archW = mob ? "clamp(110px, 36vw, 155px)" : "clamp(140px, 14.6vw, 221px)";

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#14534D",
        minHeight: mob ? "auto" : "clamp(500px, 49.9vw, 754px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: mob ? "48px" : "108px",
        paddingBottom: mob ? "48px" : "55px",
        overflow: "hidden",
      }}
    >
      {/* Gold geometric motif — exact Figma: left=43px, top=340px, 174×213px */}
      <img
        src="/assets/home-page/motif-left.png"
        alt=""
        style={{
          position: "absolute",
          left: mob ? 0 : "43px",
          top: mob ? "auto" : "340px",
          bottom: mob ? "60px" : "auto",
          width: mob ? "clamp(70px, 10vw, 120px)" : "174px",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Red bird/flower motif — exact Figma: right=28px, top=404px, 127×102px */}
      <img
        src="/assets/home-page/motif-right.png"
        alt=""
        style={{
          position: "absolute",
          right: mob ? 0 : "28px",
          top: mob ? "auto" : "404px",
          bottom: mob ? "40px" : "auto",
          width: mob ? "clamp(50px, 8vw, 80px)" : "127px",
          pointerEvents: "none",
        }}
      />

      {/* Cards — infinite right-to-left marquee */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <div
          className="marquee-track"
          style={{ gap: mob ? "40px" : "clamp(60px, 8.3vw, 125px)" }}
        >
          {[0, 1].map((set) => (
            <div
              key={set}
              style={{
                display: "flex",
                alignItems: "center",
                gap: mob ? "40px" : "clamp(60px, 8.3vw, 125px)",
                flexShrink: 0,
                paddingLeft: set === 0 ? (mob ? "40px" : "clamp(60px, 8.3vw, 125px)") : "0",
              }}
            >
              {/* Card 1 — Oval food */}
              <div style={{ width: ovalW, flexShrink: 0 }}>
                <img src="/assets/home-page/new/city-card-oval-1.png" alt="NH48 dish"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>

              {/* Card 2 — Arch Delhi */}
              <div style={{ width: archW, flexShrink: 0 }}>
                <img src="/assets/home-page/new/city-card-delhi.png" alt="Delhi"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>

              {/* Card 3 — Oval food */}
              <div style={{ width: ovalW, flexShrink: 0 }}>
                <img src="/assets/home-page/new/city-card-oval-2.png" alt="NH48 dish"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>

              {/* Card 4 — Arch Mumbai */}
              <div style={{ width: archW, flexShrink: 0 }}>
                <img src="/assets/home-page/new/city-card-mumbai.png" alt="Mumbai"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>

              {/* Card 5 — NEW Oval food 3 */}
              <div style={{ width: ovalW, flexShrink: 0 }}>
                <img src="/assets/home-page/new/section-after-home-page-new-image-1.png" alt="NH48 dish"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>

              {/* Card 6 — Arch Delhi (repeat) */}
              <div style={{ width: archW, flexShrink: 0 }}>
                <img src="/assets/home-page/new/city-card-delhi.png" alt="Delhi"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>

              {/* Card 7 — NEW Oval food 4 */}
              <div style={{ width: ovalW, flexShrink: 0 }}>
                <img src="/assets/home-page/new/section-after-home-page-new-image-2.png" alt="NH48 dish"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>

              {/* Card 8 — Arch Mumbai (repeat) */}
              <div style={{ width: archW, flexShrink: 0 }}>
                <img src="/assets/home-page/new/city-card-mumbai.png" alt="Mumbai"
                  style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tagline — Figma: centered, top=578px in 754px section → marginTop ~70px from cards bottom */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: mob ? "40px" : "72px",
          padding: "0 32px",
        }}
      >
        <p
          style={{
            fontFamily: "'BERNIER Distressed', cursive",
            color: "white",
            fontSize: mob ? "22px" : "clamp(28px, 2.8vw, 40px)",
            lineHeight: "1.05",
            textAlign: "center",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            maxWidth: "480px",
          }}
        >
          More Than a Restaurant. A Journey Through India.
        </p>
      </div>
    </section>
  );
}

// ─── "a taste of india mile by mile" — Figma node 1:386, exported whole ───────
// ─── Story Section (Frame 1430101517, 1512×598) ──────────────────────────────
// Asset natural sizes (= the clipped visible portion as exported from Figma):
//   top-left flower PNG:     145×129px  → position at top:0, left:0
//   bottom-left SVG:         431×474px  → position at bottom:0, left:0
//   pagri SVG:               236×214px  → top-right of photo
//   bottom-right SVG:        210×389px  → position at bottom:0, right:0
//   food photo PNG:          400×361px  → right half of section
//   heading: 34px BERNIER color #E62F80
//   body:    19px fw500 Helvetica color #14534D
function StorySection() {
  const width = useWindowWidth();
  const mob = width < 768;
  const YELLOW    = "#F8B519"; // Figma golden-yellow color
  const RED       = "#E62F80";
  const TEAL_TEXT = "#14534D";

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: YELLOW,
      overflow: "hidden",
      display: "flex",
      flexDirection: mob ? "column" : "row",
      alignItems: mob ? "flex-start" : "center",
      paddingLeft:   mob ? "24px" : "clamp(80px, 12.03vw, 182px)",
      paddingRight:  mob ? "24px" : "clamp(20px, 2vw, 30px)",
      paddingTop:    mob ? "48px" : "clamp(40px, 3.97vw, 60px)",
      paddingBottom: mob ? "48px" : "clamp(40px, 3.97vw, 60px)",
      boxSizing: "border-box",
      gap: mob ? "0" : "clamp(30px, 3.2vw, 48px)",
    }}>

      {/* TOP-LEFT flower — 145px wide in 1512px frame = 9.6vw */}
      {!mob && (
        <img
          src="/assets/home-page/new/yellow section tol left corner flower.png"
          alt="" aria-hidden="true"
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "clamp(95px, 9.59vw, 145px)",
            height: "auto",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />
      )}

      {/* BOTTOM-LEFT botanical — SVG 431×474px natural */}
      <img
        src="/assets/home-page/new/yellow section bottom left corner flower.svg"
        alt="" aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0, left: 0,
          height: mob ? "clamp(130px, 40vw, 210px)" : "clamp(280px, 31.35vw, 474px)",
          width: "auto",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* ── TEXT COLUMN ──
          Figma proportions: text column is ~46vw wide (measured from Figma file). */}
      <div style={{
        position: "relative",
        zIndex: 2,
        flex: mob ? "none" : "0 0 clamp(350px, 46vw, 696px)",
        width: mob ? "100%" : "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <h2 style={{
          fontFamily: "'BERNIER Distressed', cursive",
          fontWeight: 400,
          color: RED,
          fontSize: mob ? "clamp(22px, 5.8vw, 30px)" : "clamp(22px, 2.12vw, 32px)",
          lineHeight: 1.2,
          textTransform: "uppercase",
          margin: "0 0 clamp(16px, 1.65vw, 25px)",
          letterSpacing: "0.01em",
          textAlign: mob ? "center" : "left",
        }}>
          Every mile has a flavour. Every plate tells a story.
        </h2>

        {[
          "N.H. 48 indian kitchen is inspired by one of India's most iconic roads—national highway 48, the highway that stretches from delhi to mumbai. along its route, the landscape, culture, and cuisine change with every mile, connecting vibrant cities, small towns, roadside dhabas, and generations of family recipes.",
          "that journey is the heart of our restaurant.",
          "We created n.h. 48 to celebrate the incredible diversity of indian food beyond the dishes most people know. our menu brings together bold street food, regional specialties, and comforting classics inspired by the states connected by nh48, each prepared with respect for tradition and a passion for hospitality."
        ].map((txt, i, arr) => (
          <p key={i} style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 500,
            color: TEAL_TEXT,
            fontSize: mob ? "clamp(12px, 3.2vw, 14px)" : "clamp(12.5px, 1.06vw, 16px)",
            lineHeight: 1.68,
            margin: i < arr.length - 1 ? "0 0 clamp(10px, 1.06vw, 16px)" : "0",
            textAlign: mob ? "center" : "left",
          }}>{txt}</p>
        ))}
      </div>

      {/* ── PHOTO COLUMN ──
          Figma proportions: photo is ~26.5vw wide (measured from Figma file).
          Flex sibling of text column so they CANNOT overlap. */}
      <div style={{
        position: "relative",
        zIndex: 5,
        flex: mob ? "none" : "0 0 clamp(260px, 26.5vw, 400px)",
        width: mob ? "100%" : "auto",
        marginTop: mob ? "32px" : "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <img
          src="/assets/home-page/new/yellow section image change new image .png"
          alt="NH48 signature tandoori platter"
          style={{
            display: "block",
            width: mob ? "min(82%, 290px)" : "100%",
            height: "auto",
            borderRadius: "4px",
          }}
        />

        {/* Pagri: sits top-right of the photo */}
        {!mob && (
          <img
            src="/assets/home-page/new/yellow section pagi on the photo.svg"
            alt="" aria-hidden="true"
            style={{
              position: "absolute",
              top:  "-26%",
              right: "-20%",
              width: "clamp(140px, 15.6vw, 236px)",
              height: "auto",
              pointerEvents: "none",
              zIndex: 4,
            }}
          />
        )}
      </div>

      {/* BOTTOM-RIGHT botanical — SVG 210×389px natural */}
      {!mob && (
        <img
          src="/assets/home-page/new/yellow section bottom right corner flower.svg"
          alt="" aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0, right: 0,
            height: "clamp(250px, 25.73vw, 389px)",
            width: "auto",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}
    </section>
  );
}

function QuotePlaceholderSection() {
  const width = useWindowWidth();
  const mob = width < 768;
  const leafW = mob ? "28px" : "clamp(32px, 4.2vw, 63px)";

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: TEAL,
      paddingTop: mob ? "36px" : "clamp(24px, 3.9vw, 59px)",
      overflow: "hidden",
    }}>
      <div style={{ padding: mob ? "0 24px" : "0 24px" }}>
      {/* Heading, flanked by leaf vectors */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: mob ? "14px" : "clamp(16px, 2vw, 30px)",
        marginBottom: mob ? "20px" : "clamp(20px, 3.5vw, 53px)",
      }}>
        <img src="/assets/home-page/new/section-4-vector.png" alt="" style={{ width: leafW, height: "auto", display: "block" }} />
        <h2 style={{
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: mob ? "28px" : "clamp(28px, 3.17vw, 48px)",
          color: "white",
          margin: 0,
          textAlign: "center",
        }}>
          Our Hospitality
        </h2>
        <img src="/assets/home-page/new/section-4-vector.png" alt="" style={{ width: leafW, height: "auto", display: "block" }} />
      </div>

      {/* Body copy */}
      <div style={{
        maxWidth: mob ? "820px" : "920px",
        margin: mob ? "0 auto 28px" : "0 auto clamp(28px, 3.7vw, 56px)",
        textAlign: "center",
        paddingLeft: mob ? "0" : "25px",
        paddingRight: mob ? "0" : "25px",
      }}>
        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          color: "white",
          fontSize: mob ? "15px" : "clamp(12.5px, 1.12vw, 17px)",
          lineHeight: 1.65,
          margin: "0 0 clamp(12px, 1.45vw, 22px)",
        }}>
          In india, a guest is welcomed as family. at n.h. 48, that belief is at the heart of everything we do.
        </p>
        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          color: "white",
          fontSize: mob ? "15px" : "clamp(12.5px, 1.12vw, 17px)",
          lineHeight: 1.65,
          margin: "0 0 clamp(12px, 1.45vw, 22px)",
        }}>
          whether you join us for a quick lunch, an intimate date night, a family celebration, or your first exploration of indian cuisine, our intention is simple: to make every guest feel genuinely welcomed, thoughtfully cared for, and eager to return.
        </p>
        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          color: "white",
          fontSize: mob ? "15px" : "clamp(12.5px, 1.12vw, 17px)",
          lineHeight: 1.65,
          margin: "0 0 clamp(12px, 1.45vw, 22px)",
        }}>
          we believe hospitality is found in the details—the warmth of the welcome, the generosity of the table, and the feeling that there is always a place for you here.
        </p>
        <p style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          color: "white",
          fontSize: mob ? "15px" : "clamp(12.5px, 1.12vw, 17px)",
          lineHeight: 1.65,
          margin: 0,
        }}>
          our hope is for n.h. 48 to become more than your favorite indian restaurant. we want it to be your favorite neighborhood gathering place—a place to celebrate, connect, and linger.
        </p>
      </div>

      {/* Photo */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: mob ? "24px" : "clamp(28px, 3.8vw, 58px)",
      }}>
        <img
          src="/assets/home-page/new/section-4-mid-image.png"
          alt="Family dining at NH48"
          style={{ width: mob ? "100%" : "clamp(320px, 34.5vw, 522px)", height: "auto", display: "block" }}
        />
      </div>
      </div>

      {/* Bottom boundary strip */}
      <div style={{
        width: "100%",
        height: mob ? "24px" : "clamp(30px, 4.8vw, 72px)",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}>
        {Array.from({ length: 16 }, (_, i) => [
          <img key={`a${i}`} src="/assets/home-page/new/section-4-boundary-vector-1.png" alt=""
            style={{ height: "100%", width: "auto", flexShrink: 0, alignSelf: "flex-start", display: "block" }} />,
          <img key={`b${i}`} src="/assets/home-page/new/section-4-boundary-vector-2.png" alt=""
            style={{ height: "64%", width: "auto", flexShrink: 0, display: "block" }} />,
        ]).flat()}
      </div>
    </section>
  );
}

// ─── Food menu — Figma node 1:1130 ─────────────────────────────────────────────
const ITEM_COLORS = [RED, RED_2, RED_3];

function MenuColumn({ section }) {
  return (
    <div style={{ width: "100%", marginBottom: "clamp(28px, 3.5vw, 53px)", textAlign: "center" }}>
      <h3 style={{
        fontFamily: "'BERNIER Distressed', cursive",
        fontSize: "clamp(28px, 3.42vw, 52px)", fontWeight: 400,
        lineHeight: 1.06, color: TEAL, margin: "0 0 clamp(14px, 1.41vw, 21px) 0", textTransform: "uppercase",
      }}>
        {section.title}
      </h3>
      <div style={{ width: "80px", height: "1px", backgroundColor: "rgba(20,83,77,0.35)", margin: "0 auto 18px" }} />
      {section.items.map((item, i) => {
        const color = ITEM_COLORS[i % ITEM_COLORS.length];
        return (
          <div key={i} style={{ marginBottom: "clamp(16px, 2.01vw, 30px)" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "baseline", gap: "10px", marginBottom: "clamp(6px, 1.1vw, 16px)",
            }}>
              <span style={{
                fontFamily: "'BERNIER Distressed', cursive",
                fontSize: "clamp(16px, 1.9vw, 29px)", fontWeight: 400,
                color, textTransform: "uppercase",
              }}>{item.name}</span>
              <span style={{
                fontFamily: "'BERNIER Distressed', cursive",
                fontSize: "clamp(16px, 1.9vw, 29px)",
                color, whiteSpace: "nowrap",
              }}>$ {item.price}</span>
            </div>
            {item.desc && (
              <p style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "clamp(11px, 1.24vw, 19px)", fontWeight: 400,
                color: "#3a3a3a", lineHeight: 1.45, margin: "0 auto",
                textTransform: "uppercase", letterSpacing: "0.02em",
                maxWidth: "90%",
              }}>{item.desc}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

const MENU_LEFT = [
  {
    title: "Papad & Accompaniments",
    items: [
      { name: "Papad Sampler", price: "10", desc: "cilantro chutney | mango chutney | smoky tomato chutney" },
      { name: "Cucumber Raita", price: "5", desc: "cucumber | yogurt | roasted cumin" },
    ],
  },
  {
    title: "Khau Galli (Small Plates)",
    items: [
      { name: "Palak Chaat", price: "12", desc: "crispy spinach | yogurt | tamarind" },
      { name: "Multigrain Sev Puri", price: "12", desc: "spiced potato | avocado | green chutney | pomegranate" },
      { name: "Samosa (2pc)", price: "8", desc: "potato | peas | mint chutney | tamarind chutney" },
      { name: "Vada Pav", price: "12", desc: "spiced potato | curry leaves | garlic chutney | buns" },
      { name: "Dahi Ke Kebab", price: "14", desc: "hung yogurt | herbs | kataifi" },
      { name: "Lasooni Gobhi", price: "12", desc: "crispy cauliflower | garlic glaze | green chili" },
      { name: "Pani Puri", price: "8", desc: "spiced potato | white peas | mint water | tamarind water" },
      { name: "Chicken Lollipop", price: "16", desc: "sweet & spicy sauce" },
      { name: "Patra Ni Machhi", price: "16", desc: "seabass | coconut chutney | banana leaf" },
      { name: "Shrimp Koliwada", price: "16", desc: "crispy shrimp | coastal spices | curry leaves" },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Dal Makhani", price: "10", desc: "lentils | kidney beans | butter" },
      { name: "Gobhi Aloo", price: "10", desc: "cauliflower | cumin | ginger" },
      { name: "Eggplant Bharta", price: "10", desc: "roasted eggplant | tomatoes | onions | smoked spices" },
    ],
  },
  {
    title: "Breads",
    items: [
      { name: "Garlic Naan", price: "4" },
      { name: "Butter Naan", price: "4" },
      { name: "Multigrain Roti", price: "5" },
      { name: "Lachha Paratha", price: "5" },
      { name: "Amul Cheese Kulcha", price: "6" },
    ],
  },
];

const MENU_RIGHT = [
  {
    title: "Tandoor",
    items: [
      { name: "Paneer Dil Khush Kebab", price: "16", desc: "stuffed paneer | cheese | cashews" },
      { name: "Malai Broccoli", price: "16", desc: "cream | cheese | clay oven roasted" },
      { name: "Tandoori Chicken Tikka", price: "16", desc: "garam masala" },
      { name: "Malai Chicken Tikka", price: "16", desc: "cream | cheese | clay oven roasted" },
      { name: "Lamb Seekh Kebab", price: "16", desc: "minced lamb | ginger | green chili" },
      { name: "Chicken Seekh Kebab", price: "16" },
      { name: "Tandoori Salmon", price: "22" },
    ],
  },
  {
    title: "Mains",
    items: [
      { name: "Burrata Lasooni Saag", price: "18", desc: "spinach | garlic | cream" },
      { name: "Kadhai Paneer", price: "18", desc: "spicy tomato sauce | onions | bell peppers" },
      { name: "Vegetable Biryani", price: "20", desc: "yogurt | green chili | garam masala" },
      { name: "Mangalorean Fish Curry", price: "24", desc: "kingfish | tamarind | coastal spices" },
      { name: "Shrimp Moilee", price: "22", desc: "shrimp | coconut milk | curry leaves" },
      { name: "Butter Chicken", price: "20", desc: "creamy tomato | fenugreek" },
      { name: "Chicken Kolhapuri", price: "20", desc: "whole spices | dry coconut | onions" },
      { name: "Bombay Chicken Biryani", price: "22", desc: "aromatic spices | tomato | yogurt" },
      { name: "Laal Maas", price: "24", desc: "Rajasthani red chili | whole spices" },
      { name: "Dum Lamb Biryani", price: "26", desc: "saffron | ghee | whole spices" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Gulab Jamun", price: "9", desc: "condensed milk dumplings fried in pure ghee & soaked in rose-cardamom syrup" },
      { name: "Rasmalai", price: "9", desc: "soft, spongy cottage cheese patties soaked in rich, sweetened, thickened milk" },
      { name: "Brownie Sizzler with Vanilla Ice Cream", price: "10", desc: "warm, fudgy chocolate brownie topped with a cold, melting scoop of vanilla ice cream" },
      { name: "Ice Cream / Sorbet", price: "8", desc: "ask your server for flavours" },
    ],
  },
];

function FoodMenuSection() {
  const width = useWindowWidth();
  const mob = width < 768;
  const px = mob ? "20px" : "clamp(24px, 6vw, 93px)";

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: GOLD,
      padding: mob ? "40px 0 0" : "64px 0 0",
      overflow: "hidden",
    }}>
      {/* Left/right vines + middle flower — Figma node 1:38, positioned at their actual band */}
      {!mob && (
        <>
          <img src="/assets/home-page/new/menu-vine-left.svg" alt="" aria-hidden="true"
            style={{
              position: "absolute",
              left: "1%", width: "clamp(70px, 6.5vw, 100px)",
              top: "31.56%", height: "36.88%",
              objectFit: "contain",
              pointerEvents: "none",
              zIndex: 0,
            }} />
          <img src="/assets/home-page/new/menu-vine-right.svg" alt="" aria-hidden="true"
            style={{
              position: "absolute",
              right: "1%", width: "clamp(70px, 6.5vw, 100px)",
              top: "31.56%", height: "36.88%",
              objectFit: "contain",
              pointerEvents: "none",
              zIndex: 0,
            }} />
          <img src="/assets/home-page/new/menu-flower-icon.png" alt="" aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%", transform: "translateX(-50%)",
              width: "clamp(60px, 7vw, 110px)",
              top: "31.56%", height: "36.88%",
              objectFit: "contain",
              pointerEvents: "none",
              zIndex: 0,
            }} />
        </>
      )}

      <div style={{ paddingLeft: px, paddingRight: px, position: "relative", zIndex: 1 }}>
        <h2 style={{
          fontFamily: "'BERNIER Distressed', cursive",
          color: PINK,
          fontSize: mob ? "clamp(32px, 10vw, 44px)" : "clamp(44px, 5.5vw, 82px)",
          textAlign: "center",
          margin: mob ? "0 0 32px" : "0 0 48px",
        }}>
          menu
        </h2>

        <div style={{
          display: "flex",
          flexDirection: mob ? "column" : "row",
          gap: mob ? "8px" : "clamp(70px, 7.5vw, 120px)",
          maxWidth: "980px",
          margin: "0 auto",
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {MENU_LEFT.map((section) => <MenuColumn key={section.title} section={section} />)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            {MENU_RIGHT.map((section) => <MenuColumn key={section.title} section={section} />)}
          </div>
        </div>
      </div>

      {/* Bottom boundary strip — Figma decorative border */}
      <div style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        height: mob ? "24px" : "clamp(30px, 4.8vw, 72px)",
        marginTop: mob ? "32px" : "48px",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}>
        {Array.from({ length: 16 }, (_, i) => [
          <img key={`a${i}`} src="/assets/home-page/new/menu-boundary-vector-1.png" alt=""
            style={{ height: "100%", width: "auto", flexShrink: 0, alignSelf: "flex-start", display: "block" }} />,
          <img key={`b${i}`} src="/assets/home-page/new/menu-boundary-vector-2.png" alt=""
            style={{ height: "64%", width: "auto", flexShrink: 0, display: "block" }} />,
        ]).flat()}
      </div>
    </section>
  );
}

// ─── Quote banner — Updated Figma design: "Welcome to the Journey" ────────────
// Figma: Rectangle 367, y=5438, h=479, bg=#14534D (teal)
// Text group at x=355 w=803 centered; Left flower x=170 w=132; Right flower x=1211 w=132 (mirrored)
// fs=32px, fw=500, white, letterSpacing=-1.92px, CENTER
function QuoteBanner() {
  const width = useWindowWidth();
  const mob = width < 768;

  // Figma: section h=479px on 1512px wide frame
  // Flower: 132×127px at x=170 (left) and x=1211 (right, mirrored)
  // Text block: x=355, w=803 — so left+right flowers = (170 to 302) and (1211 to 1343)
  // Total content width = 1343 - 170 = 1173px centred in 1512

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: TEAL,
      minHeight: mob ? "auto" : "clamp(260px, 31.7vw, 479px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding: mob ? "48px 24px" : "0",
    }}>
      {/* Content row: flower | text | flower */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: mob ? "16px" : "clamp(16px, 2.5vw, 40px)",
        width: mob ? "100%" : "clamp(640px, 77.6vw, 1173px)",
        padding: mob ? "0" : "0 0",
      }}>
        {/* Left flower */}
        <img
          src="/assets/home-page/new/Flower left and right .png"
          alt=""
          aria-hidden="true"
          style={{
            width: mob ? "clamp(52px, 14vw, 80px)" : "clamp(80px, 8.7vw, 132px)",
            height: "auto",
            flexShrink: 0,
            display: "block",
          }}
        />

        {/* Text — Figma: fs=32px, fw=500, white, ls=-1.92px, CENTER */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <p style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 500,
            fontSize: mob ? "clamp(18px, 5vw, 24px)" : "clamp(20px, 2.12vw, 32px)",
            lineHeight: 1.45,
            letterSpacing: mob ? "-0.03em" : "-0.06em",
            color: "#FFFFFF",
            margin: 0,
            textTransform: "uppercase",
          }}>
            Welcome to the Journey
            <br />
            Every highway connects people.
            <br />
            Every meal creates memories.
          </p>
        </div>

        {/* Right flower — mirrored */}
        <img
          src="/assets/home-page/new/Flower left and right .png"
          alt=""
          aria-hidden="true"
          style={{
            width: mob ? "clamp(52px, 14vw, 80px)" : "clamp(80px, 8.7vw, 132px)",
            height: "auto",
            flexShrink: 0,
            display: "block",
            transform: "scaleX(-1)",
          }}
        />
      </div>
    </section>
  );
}


function Sayings() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const width = useWindowWidth();
  const mob = width < 768;

  const slides = [
    "NH48 captures the spirit of the open road, blending vintage-inspired highway decor with a sprawling menu that masterfully fuses regional Indian specialties and global flavors into a high-spirited culinary journey.",
    "A feast for the senses — the flavors transport you from the streets of Delhi to the shores of Mumbai in a single meal.",
    "The ambiance is unmatched. Every corner tells a story of the road, and every dish delivers on that promise.",
    "Bold, honest, unforgettable. NH48 is not just a restaurant — it is a journey you keep coming back to.",
  ];

  const timerRef = useRef(null);

  const goTo = (i) => {
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      setVisible(true);
    }, 300);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 300);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#F5EFE0",
        paddingTop: "52px",
        paddingBottom: "52px",
      }}
    >
      {/* Heading — Figma: BERNIER Distressed 64px, #14534D, tracking -0.04em */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: mob ? "24px" : "40px", padding: "0 24px" }}>
        <h2 style={{
          fontFamily: "BERNIER Distressed, cursive",
          color: "#14534D",
          fontSize: mob ? "clamp(24px, 7vw, 36px)" : "clamp(28px, 4.23vw, 64px)",
          letterSpacing: "-0.04em",
          lineHeight: 1.1,
          margin: 0,
          textAlign: "center",
        }}>
          what they say about us
        </h2>
      </div>

      {/* Card — stacks on mobile */}
      <div style={{
        display: "flex",
        flexDirection: mob ? "column" : "row",
        margin: "0 auto",
        width: mob ? "calc(100% - 48px)" : "clamp(320px, 68.8vw, 1040px)",
        height: mob ? "auto" : "clamp(180px, 19.4vw, 293px)",
        overflow: "hidden",
      }}>
        {/* Image — Figma: "THE NH48 CHRONICLE" press clipping */}
        <div style={{
          width: mob ? "100%" : "50.6%",
          height: mob ? "200px" : "auto",
          flexShrink: 0, overflow: "hidden",
        }}>
          <img
            src="/assets/home-page/new/nh48-chronicle.png"
            alt="The NH48 Chronicle press clipping"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
          />
        </div>

        {/* Quote text */}
        <div style={{
          flex: 1,
          backgroundColor: "#14534D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: mob ? "24px 20px" : "clamp(16px, 2.5vw, 36px) clamp(16px, 3.8vw, 57px)",
        }}>
          <p style={{
            fontFamily: "BERNIER Distressed, cursive",
            color: "white",
            fontSize: mob ? "15px" : "clamp(11px, 1.06vw, 16px)",
            lineHeight: 1.4,
            textAlign: "center",
            margin: 0,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}>
            {slides[active]}
          </p>
        </div>
      </div>

      {/* Dot indicators — Figma: 11px, 15px spacing, #14534D */}
      <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginTop: "25px" }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: "11px",
              height: "11px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              backgroundColor: "#14534D",
              opacity: i === active ? 1 : 0.35,
              transition: "opacity 0.2s",
            }}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Get in touch — Figma node 1:1152 ──────────────────────────────────────────
const LotusPath =
  "M46.1462 21.1309C46.1462 21.1309 49.2654 9.97958 36.0086 0C22.7603 9.97958 25.871 21.1309 25.871 21.1309C12.6227 11.7412 0 22.3026 0 22.3026C0 22.3026 13.2483 19.3693 17.0359 29.3489C20.8236 39.3285 33.4378 43.4335 33.4378 43.4335L33.3006 54.4413V54.6326C33.2921 55.9399 34.4318 57 35.8372 57H35.8886C37.2854 57 38.4166 55.9478 38.4251 54.6486V54.6087L38.5622 43.4255C38.5622 43.4255 51.185 39.3205 54.9641 29.3409C58.7517 19.3613 72 22.2946 72 22.2946C72 22.2946 59.3944 11.7412 46.1462 21.1309Z";

function GetInTouchSection() {
  const width = useWindowWidth();
  const mob = width < 768;
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const inputStyle = {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: "14px",
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid #E5ECEB",
    borderRadius: "4px",
    padding: "0 12px",
    outline: "none",
  };

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: "rgba(20,83,77,0.87)",
      padding: mob ? "48px 24px" : "72px clamp(40px, 6vw, 90px)",
      overflow: "hidden",
    }}>
      {/* Decorative lotus leaves */}
      {!mob && [ "6%", "92%" ].map((left, i) => (
        <svg key={i} width="90" height="71" viewBox="0 0 72 57" style={{ position: "absolute", left, top: "50%", transform: "translateY(-50%)", opacity: 0.5, pointerEvents: "none" }}>
          <path d={LotusPath} fill="#0E3A35" />
        </svg>
      ))}

      <div style={{
        display: "flex",
        flexDirection: mob ? "column" : "row",
        gap: mob ? "32px" : "64px",
        maxWidth: "1040px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Left — heading + copy */}
        <div style={{ flex: mob ? "unset" : "0 0 340px" }}>
          <h2 style={{
            fontFamily: "'BERNIER Distressed', cursive",
            color: "white",
            fontSize: mob ? "32px" : "40px",
            margin: "0 0 16px",
          }}>
            Get in touch
          </h2>
          <p style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            color: "white",
            fontSize: "16px",
            lineHeight: 1.5,
            textTransform: "uppercase",
            margin: 0,
          }}>
            If you need to get in touch with us, please fill the form on the right and our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Right — form */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
          <h3 style={{ fontFamily: "'BERNIER Distressed', cursive", color: "white", fontSize: "28px", margin: 0 }}>name</h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 160px" }}>
              <label style={{ fontFamily: "'BERNIER Distressed', cursive", color: "white", fontSize: "16px", display: "block", marginBottom: "6px" }}>first name</label>
              <input name="firstName" value={form.firstName} onChange={handleChange} style={{ ...inputStyle, width: "100%", height: "40px" }} />
            </div>
            <div style={{ flex: "1 1 160px" }}>
              <label style={{ fontFamily: "'BERNIER Distressed', cursive", color: "white", fontSize: "16px", display: "block", marginBottom: "6px" }}>last name</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} style={{ ...inputStyle, width: "100%", height: "40px" }} />
            </div>
          </div>

          <div>
            <label style={{ fontFamily: "'BERNIER Distressed', cursive", color: "white", fontSize: "16px", display: "block", marginBottom: "6px" }}>email <span style={{ fontSize: "12px" }}>[required]</span></label>
            <input name="email" type="email" value={form.email} onChange={handleChange} style={{ ...inputStyle, width: "100%", height: "40px" }} />
          </div>

          <div>
            <label style={{ fontFamily: "'BERNIER Distressed', cursive", color: "white", fontSize: "16px", display: "block", marginBottom: "6px" }}>message <span style={{ fontSize: "12px" }}>[required]</span></label>
            <textarea name="message" value={form.message} onChange={handleChange} style={{ ...inputStyle, width: "100%", height: "80px", padding: "10px 12px", resize: "none" }} />
          </div>

          <div>
            <button
              onClick={() => console.log(form)}
              style={{
                position: "relative",
                width: "123px", height: "45px",
                background: "transparent",
                border: "5px solid #E5ECEB",
                color: "white",
                fontFamily: "'BERNIER Distressed', cursive",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
