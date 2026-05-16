import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowWidth } from "../hooks/useWindowWidth";
gsap.registerPlugin(ScrollTrigger);

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
        fontFamily="'BERNIER Distressed', cursive"
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
        fontFamily="'BERNIER Distressed', cursive"
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
        fontFamily="'BERNIER Distressed', cursive"
        fontSize="6.5"
        fill="white"
        textAnchor="middle"
      >
        CLOVER
      </text>
      <text
        x="195"
        y="261"
        fontFamily="'BERNIER Distressed', cursive"
        fontSize="6.5"
        fill="white"
        textAnchor="middle"
      >
        ARCHBOLD
      </text>
      <text
        x="195"
        y="269"
        fontFamily="'BERNIER Distressed', cursive"
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
        fontFamily="'BERNIER Distressed', cursive"
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
        fontFamily="'BERNIER Distressed', cursive"
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
export default function LocationTimings() {
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
              fontFamily: "BERNIER Distressed, cursive",
              color: "#1B5C4F",
              fontSize: mob ? "32px" : "clamp(36px, 4.5vw, 56px)",
              letterSpacing: "0.08em",
              margin: 0,
              textAlign: "center",
            }}
          >
            LOCATION &amp; TIMINGS
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
                fontFamily: "BERNIER Distressed, cursive",
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
                    fontFamily: "BERNIER Distressed, cursive",
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
