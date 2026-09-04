import { useWindowWidth } from "../hooks/useWindowWidth";

// ─── Figma-exact values (from MacBook Pro 14" - 52, 1512px frame) ────────────
// Left col:  x=45px
// Right col: x=619px → 40.94% of 1512px
// Font size: 18.93px (~19px)
// Label LH:  23.1px, Body LH: 22.6px
// Copyright: fs=15px, color white
// Embellish credit: x=570, centered
// ─────────────────────────────────────────────────────────────────────────────

const LotusPath =
  "M46.1462 21.1309C46.1462 21.1309 49.2654 9.97958 36.0086 0C22.7603 9.97958 25.871 21.1309 25.871 21.1309C12.6227 11.7412 0 22.3026 0 22.3026C0 22.3026 13.2483 19.3693 17.0359 29.3489C20.8236 39.3285 33.4378 43.4335 33.4378 43.4335L33.3006 54.4413V54.6326C33.2921 55.9399 34.4318 57 35.8372 57H35.8886C37.2854 57 38.4166 55.9478 38.4251 54.6486V54.6087L38.5622 43.4255C38.5622 43.4255 51.185 39.3205 54.9641 29.3409C58.7517 19.3613 72 22.2946 72 22.2946C72 22.2946 59.3944 11.7412 46.1462 21.1309Z";

const BASE_FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

// Figma fs=18.93px → use 19px; scaled for tablet/mobile
const ftLabel = (scale = 1) => ({
  fontFamily: BASE_FONT,
  fontWeight: 700,
  fontSize: `${Math.round(18.93 * scale)}px`,
  lineHeight: `${Math.round(23.1 * scale)}px`,
  textTransform: "uppercase",
  color: "#FFFFFF",
  margin: 0,
});

const ftBody = (scale = 1) => ({
  fontFamily: BASE_FONT,
  fontWeight: 400,
  fontSize: `${Math.round(18.93 * scale)}px`,
  lineHeight: `${Math.round(22.6 * scale)}px`,
  textTransform: "uppercase",
  color: "#FFD5D5",
  margin: 0,
});

const ftCopyright = (scale = 1) => ({
  fontFamily: BASE_FONT,
  fontWeight: 400,
  fontSize: `${Math.round(15 * scale)}px`,
  lineHeight: `${Math.round(17.9 * scale)}px`,
  textTransform: "uppercase",
  color: "#FFFFFF",
  margin: 0,
});

// ─── Site Footer ─────────────────────────────────────────────────────────────
export default function SiteFooter() {
  const width = useWindowWidth();
  const mob = width < 640;
  const tab = width < 900 && width >= 640;

  // Scale factor relative to Figma's 1512px frame
  const scale = mob ? 0.75 : tab ? 0.82 : 1;

  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#A94545",
        overflow: "hidden",
      }}
    >
      {/* ── DECORATIVE LOTUS — Figma: x=1208 (5004-3796), y=282 (7347-7065), size=343×272 ── */}
      {!mob && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: `${(1208 / 1512) * 100}%`,
            top: `${282 * scale}px`,
            width: `${343 * scale}px`,
            height: `${272 * scale}px`,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox="0 0 72 57"
            style={{ width: "100%", height: "100%", display: "block" }}
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
            height: `${563 * scale}px`,
          }}
        >
          {/* NH48 Group Image — Figma: x=45, y=54 (7119-7065), w=197, h=79 */}
          <img
            src="/assets/home-page/new/new footer group image.png"
            alt="NH48 Indian Kitchen"
            style={{
              position: "absolute",
              left: `${(45 / 1512) * 100}%`,
              top: `${54 * scale}px`,
              width: `${197 * scale}px`,
              height: "auto",
              display: "block",
            }}
          />

          {/* ── LEFT COL — x=45px in Figma ── */}
          <div
            style={{
              position: "absolute",
              left: `${(45 / 1512) * 100}%`,
              top: `${175 * scale}px`,
              width: `${414 * scale}px`,
            }}
          >
            {/* LOCATION & CONTACT label — y=175 */}
            <p style={{ ...ftLabel(scale), marginBottom: `${(216 - 175 - 23) * scale}px` }}>
              LOCATION &amp; CONTACT
            </p>

            {/* Location text — y=216 */}
            <p style={{ ...ftBody(scale), marginBottom: `${(295 - 216 - 45) * scale}px` }}>
              LOCATION - 4828 MACARTHUR BLVD NW,
              <br />
              WASHINGTON DC 20007
            </p>

            {/* HOURS label — y=295 */}
            <p style={{ ...ftLabel(scale), marginBottom: `${(336 - 295 - 23) * scale}px` }}>
              HOURS
            </p>

            {/* Hours text — y=336 */}
            <p style={{ ...ftBody(scale), marginBottom: `${(433 - 336 - 68) * scale}px` }}>
              WEDNESDAY - MONDAY: 11:00 AM - 2:30 PM (Currently Closed for Lunch)
              <br />
              5:00 PM - 9:30 PM
              <br />
              (TUESDAY- CLOSED)
            </p>

            {/* Copyright — y=433, fs=15px, color white */}
            <p style={ftCopyright(scale)}>
              COPYRIGHT © 2026. NH48. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* ── RIGHT COL — x=619px (40.94% of 1512) in Figma ── */}
          <div
            style={{
              position: "absolute",
              left: `${(619 / 1512) * 100}%`,
              top: `${175 * scale}px`,
              width: `${439 * scale}px`,
            }}
          >
            {/* GENERAL ENQUIRIES label — y=175 */}
            <p style={{ ...ftLabel(scale), marginBottom: `${(216 - 175 - 23) * scale}px` }}>
              GENERAL ENQUIRIES
            </p>

            {/* Enquiries text — y=216, w=439 in Figma (fits on 1 visual line) */}
            <p style={{ ...ftBody(scale), marginBottom: `${(295 - 216 - 45) * scale}px` }}>
              HAVE A QUESTION OR A SPECIAL REQUEST?
              <br />
              EMAIL US AT{" "}
              <a
                href="mailto:NH48@NH48RESTAURANT.COM"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                NH48@NH48RESTAURANT.COM
              </a>
            </p>

            {/* PHONE NUMBER label — y=295 */}
            <p style={{ ...ftLabel(scale), marginBottom: `${(336 - 295 - 23) * scale}px` }}>
              PHONE NUMBER
            </p>

            {/* Phone number — y=336 */}
            <p style={ftBody(scale)}>2026271001</p>
          </div>

          {/* ── EMBELLISH CREDIT — Figma: x=570, y=524, centered, fs=18.93px, white ── */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              borderTop: "1px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: `${(563 - 524) * scale}px`,
            }}
          >
            <p
              style={{
                fontFamily: BASE_FONT,
                fontWeight: 400,
                fontSize: `${Math.round(11 * scale)}px`,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              DESIGNED &amp; DEVELOPED BY EMBELLISH
            </p>
          </div>
        </div>
      ) : (
        /* ── MOBILE LAYOUT — stacked ── */
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "36px 24px 0",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <img
            src="/assets/home-page/new/new footer group image.png"
            alt="NH48 Indian Kitchen"
            style={{ width: "160px", height: "auto", display: "block" }}
          />

          <div>
            <p style={{ ...ftLabel(0.75), marginBottom: "10px" }}>
              LOCATION &amp; CONTACT
            </p>
            <p style={ftBody(0.75)}>
              LOCATION - 4828 MACARTHUR BLVD NW,
              <br />
              WASHINGTON DC 20007
            </p>
          </div>

          <div>
            <p style={{ ...ftLabel(0.75), marginBottom: "10px" }}>HOURS</p>
            <p style={ftBody(0.75)}>
              WEDNESDAY - MONDAY: 11:00 AM - 2:30 PM (Currently Closed for Lunch)
              <br />
              5:00 PM - 9:30 PM
              <br />
              (* TUESDAY- CLOSED)
            </p>
          </div>

          <div>
            <p style={{ ...ftLabel(0.75), marginBottom: "10px" }}>
              GENERAL ENQUIRIES
            </p>
            <p style={ftBody(0.75)}>
              HAVE A QUESTION OR A SPECIAL REQUEST?
              <br />
              EMAIL US AT{" "}
              <a
                href="mailto:NH48@NH48RESTAURANT.COM"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                NH48@NH48RESTAURANT.COM
              </a>
            </p>
          </div>

          <div>
            <p style={{ ...ftLabel(0.75), marginBottom: "10px" }}>
              PHONE NUMBER
            </p>
            <p style={ftBody(0.75)}>2026271001</p>
          </div>

          <p style={ftCopyright(0.75)}>
            COPYRIGHT © 2026. NH48. ALL RIGHTS RESERVED.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.15)",
              padding: "14px 0",
              textAlign: "center",
              marginLeft: "-24px",
              marginRight: "-24px",
            }}
          >
            <p
              style={{
                fontFamily: BASE_FONT,
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              DESIGNED &amp; DEVELOPED BY EMBELLISH
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
