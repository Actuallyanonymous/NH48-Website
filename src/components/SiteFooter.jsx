import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowWidth } from "../hooks/useWindowWidth";
gsap.registerPlugin(ScrollTrigger);

const LotusPath =
  "M46.1462 21.1309C46.1462 21.1309 49.2654 9.97958 36.0086 0C22.7603 9.97958 25.871 21.1309 25.871 21.1309C12.6227 11.7412 0 22.3026 0 22.3026C0 22.3026 13.2483 19.3693 17.0359 29.3489C20.8236 39.3285 33.4378 43.4335 33.4378 43.4335L33.3006 54.4413V54.6326C33.2921 55.9399 34.4318 57 35.8372 57H35.8886C37.2854 57 38.4166 55.9478 38.4251 54.6486V54.6087L38.5622 43.4255C38.5622 43.4255 51.185 39.3205 54.9641 29.3409C58.7517 19.3613 72 22.2946 72 22.2946C72 22.2946 59.3944 11.7412 46.1462 21.1309Z";

const ftLabel = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "20px",
  textTransform: "uppercase",
  color: "#FFFFFF",
  margin: 0,
};
const ftBody = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  textTransform: "uppercase",
  color: "#FFD5D5",
  margin: 0,
};


// ─── Site Footer ─────────────────────────────────────────────────────────────
export default function SiteFooter() {
  const width = useWindowWidth();
  const mob = width < 640;
  const tab = width < 900 && width >= 640;

  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#A94545",
        minHeight: mob ? "auto" : tab ? "420px" : "563px",
        overflow: "hidden",
      }}
    >
      {/* ── DECORATIVE LOTUS — Figma: left:79.89%, top:282px from section, height:272px, color:#742D2D ── */}
      {!mob && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "79.89%",
            top: tab ? "140px" : "282px",
            height: tab ? "200px" : "272px",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox="0 0 72 57"
            style={{ height: "100%", width: "auto", display: "block" }}
          >
            <path d={LotusPath} fill="#742D2D" />
          </svg>
        </div>
      )}

      {/* ── DESKTOP / TABLET LAYOUT ── */}
      {!mob ? (
        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: tab ? "420px" : "563px",
            width: "100%",
          }}
        >
          {/* NH48 LOGO — Figma: left:45px, 10px from section top, 124px font */}
          <div
            style={{
              position: "absolute",
              left: tab ? "30px" : "45px",
              top: "10px",
            }}
          >
            <h2
              style={{
                fontFamily: "BERNIER Distressed, cursive",
                fontWeight: 400,
                fontSize: tab ? "80px" : "124px",
                lineHeight: "143px",
                color: "#FFFFFF",
                margin: 0,
                textShadow: "0px 8.52px 8.52px rgba(0,0,0,0.25)",
                letterSpacing: "0.01em",
              }}
            >
              NH48
            </h2>
          </div>

          {/* LEFT COL — Figma: left:45px, top:173px (LOCATION & CONTACT label) */}
          <div
            style={{
              position: "absolute",
              left: tab ? "30px" : "45px",
              top: tab ? "130px" : "173px",
              width: tab ? "260px" : "350px",
            }}
          >
            <p style={{ ...ftLabel, marginBottom: "16px" }}>
              LOCATION &amp; CONTACT
            </p>

            {/* Location text — Figma top:218px = label+45px */}
            <p style={{ ...ftBody }}>
              LOCATION — 4824 MACARTHUR BLVD NW LL,
              <br />
              WASHINGTON D.C. 20007
            </p>

            {/* HOURS label — Figma top:314px = +141px from loc-label */}
            <p
              style={{
                ...ftLabel,
                marginTop: tab ? "24px" : "45px",
                marginBottom: "16px",
              }}
            >
              HOURS
            </p>

            {/* Hours text — Figma top:359px */}
            <p style={{ ...ftBody }}>
              SUNDAY – WEDNESDAY: 5:00 PM – 10:30 PM
              <br />
              (LAST SEATING 9:30 PM)
              <br />
              THURSDAY – SATURDAY: 5:00 PM – 11:00 PM
              <br />
              (LAST SEATING 10:00 PM)
              <br />
              MONDAY: CLOSED
            </p>
          </div>

          {/* CENTER COL — Figma: left:757px (50.07%), top:173px */}
          <div
            style={{
              position: "absolute",
              left: tab ? "46%" : "50.07%",
              top: tab ? "130px" : "173px",
              width: tab ? "220px" : "371px",
            }}
          >
            {/* Email block 1 — Figma top:173px (same as col header) */}
            <p style={{ ...ftBody }}>
              HAVE A QUESTION OR A SPECIAL REQUEST? EMAIL US AT{" "}
              <a
                href="mailto:prady.rana@outlook.com"
                style={{
                  color: "#FFD5D5",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                }}
              >
                PRADY.RANA@OUTLOOK.COM
              </a>
              . DUE TO HIGH DEMAND, OUR TEAM WILL PROVIDE A RESPONSE WITHIN 48
              BUSINESS HOURS (MON–SAT).
            </p>

            {/* Large parties — Figma top:308px = +135px */}
            <p style={{ ...ftBody, marginTop: tab ? "20px" : "40px" }}>
              TO PROVIDE THE BEST EXPERIENCE FOR LARGE PARTIES (8+), WE KINDLY
              ASK FOR BOOKINGS TO BE MADE 40–45 DAYS IN ADVANCE.
            </p>

            {/* Email block 2 — Figma top:415px = +107px below large parties */}
            <p style={{ ...ftBody, marginTop: tab ? "20px" : "32px" }}>
              HAVE A QUESTION OR A SPECIAL REQUEST? EMAIL US AT{" "}
              <a
                href="mailto:prady.rana@outlook.com"
                style={{
                  color: "#FFD5D5",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                }}
              >
                PRADY.RANA@OUTLOOK.COM
              </a>
              . DUE TO HIGH DEMAND, OUR TEAM WILL PROVIDE A RESPONSE WITHIN 48
              BUSINESS HOURS (MON–SAT).
            </p>
          </div>

          {/* RIGHT COL — Figma: left:1332px (88.1%), top:173px */}
          <div
            style={{
              position: "absolute",
              left: tab ? "auto" : "88.1%",
              right: tab ? "30px" : "auto",
              top: tab ? "130px" : "173px",
            }}
          >
            <p style={{ ...ftLabel, marginBottom: "20px" }}>FOLLOW US</p>

            {/* Social icons — Figma: Insta@1314, FB@1366(+52px), TikTok@1413(+47px) */}
            <div
              style={{
                display: "flex",
                gap: tab ? "12px" : "17px",
                alignItems: "center",
              }}
            >
              <a
                href="#"
                aria-label="Instagram"
                style={{
                  color: "#FFFFFF",
                  display: "flex",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.3"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                style={{
                  color: "#FFFFFF",
                  display: "flex",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                style={{
                  color: "#FFFFFF",
                  display: "flex",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* ── MOBILE LAYOUT — stacked ── */
        <div
          style={{
            padding: "36px 24px 44px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <h2
            style={{
              fontFamily: "BERNIER Distressed, cursive",
              fontSize: "80px",
              lineHeight: 1,
              color: "#FFFFFF",
              margin: 0,
              textShadow: "0px 6px 6px rgba(0,0,0,0.25)",
            }}
          >
            NH48
          </h2>
          <div>
            <p style={{ ...ftLabel, marginBottom: "10px" }}>
              LOCATION &amp; CONTACT
            </p>
            <p style={ftBody}>
              LOCATION — 4824 MACARTHUR BLVD NW LL, WASHINGTON D.C. 20007
            </p>
          </div>
          <div>
            <p style={{ ...ftLabel, marginBottom: "10px" }}>HOURS</p>
            <p style={ftBody}>
              SUNDAY – WEDNESDAY: 5:00 PM – 10:30 PM (LAST SEATING 9:30 PM)
              <br />
              THURSDAY – SATURDAY: 5:00 PM – 11:00 PM (LAST SEATING 10:00 PM)
              <br />
              MONDAY: CLOSED
            </p>
          </div>
          <p style={ftBody}>
            HAVE A QUESTION? EMAIL{" "}
            <a
              href="mailto:prady.rana@outlook.com"
              style={{ color: "#FFD5D5", textDecoration: "underline" }}
            >
              PRADY.RANA@OUTLOOK.COM
            </a>
            . RESPONSE WITHIN 48 BUSINESS HOURS (MON–SAT).
          </p>
          <p style={ftBody}>
            LARGE PARTIES (8+): PLEASE BOOK 40–45 DAYS IN ADVANCE.
          </p>
          <div>
            <p style={{ ...ftLabel, marginBottom: "10px" }}>FOLLOW US</p>
            <div style={{ display: "flex", gap: "14px" }}>
              {[
                <svg
                  key="ig"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.2"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>,
                <svg
                  key="fb"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>,
                <svg
                  key="tt"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{ color: "#FFFFFF", display: "flex" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
