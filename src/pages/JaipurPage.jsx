import { useEffect } from "react";

// Figma frame: 775×1002  →  modal: 620×780
// Positions match frame 1:612 — same layout as Delhi, Jaipur-specific colors

const MENU_ITEMS = [
  { name: "dal bati churma", price: "15" },
  { name: "laal maas",        price: "25" },
  { name: "Gatte ki Sabzi",   price: "20" },
  { name: "Ker Sangri",       price: "15" },
  { name: "Pyaz Kachori",     price: "15" },
];

export default function JaipurModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      {/* Dim overlay */}
      <div onClick={onClose} style={{
        position: "fixed", inset: 0,
        backgroundColor: "rgba(0,0,0,0.55)",
        zIndex: 100,
      }} />

      {/* Modal — 620×780, matching Figma 775×1002 proportions */}
      <div style={{
        position: "fixed",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "620px",
        maxWidth: "94vw",
        height: "780px",
        maxHeight: "92vh",
        zIndex: 101,
        overflow: "hidden",
      }}>

        {/* ── Background image ── */}
        <img src="/assets/journey/jaipur/jaipurbackground.jpg" alt="" style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
          zIndex: 0,
        }} />

        {/* ── Dark overlay (Figma: black 0.44 opacity) ── */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundColor: "rgba(0,0,0,0.44)",
          zIndex: 1,
        }} />

        {/* ── Close button ── */}
        <button onClick={onClose} style={{
          position: "absolute", top: 14, left: 16,
          zIndex: 10, background: "none", border: "none",
          color: "#fff", fontSize: "1.2rem", cursor: "pointer", lineHeight: 1,
        }}>✕</button>

        {/* ── Right flower group — anchored to right edge, pushed off-corner ── */}
        <img src="/assets/journey/jaipur/jaipur-flower-right.png" alt=""
          style={{
            position: "absolute",
            right: "-8%", top: "-8.3%",
            width: "44%", height: "auto",
            zIndex: 3, pointerEvents: "none",
          }}
        />

        {/* ── Left flower group — anchored to left edge, pushed off-corner ── */}
        <img src="/assets/journey/jaipur/jaipur-flower-left.png" alt=""
          style={{
            position: "absolute",
            left: "-20%", top: "75.7%",
            width: "43.4%", height: "auto",
            zIndex: 3, pointerEvents: "none",
          }}
        />

        {/* ── Motif
            Figma: x=241(31.1%), y=68(6.8%), w=137(17.7%)
        ── */}
        <img src="/assets/journey/jaipur/jaipur-motif.png" alt=""
          style={{
            position: "absolute",
            left: "31.1%", top: "6.8%",
            width: "17.7%", height: "auto",
            zIndex: 4, pointerEvents: "none",
          }}
        />

        {/* ── "jaipur" title
            Figma: x=295(38.1%), y=126(12.6%), font=93.6px, color=rgb(255,136,199)
        ── */}
        <h1 style={{
          position: "absolute",
          left: "38.1%", top: "12.6%",
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: "clamp(48px, 12.1vw, 74px)",
          fontWeight: 400,
          lineHeight: 1,
          color: "rgb(255,136,199)",
          margin: 0,
          zIndex: 5,
          whiteSpace: "nowrap",
        }}>
          jaipur
        </h1>

        {/* ── Menu card
            Figma: x=171(22.1%), y=225(22.5%), w=433(55.9%), h=552(55.1%)
        ── */}
        <div style={{
          position: "absolute",
          left: "22.1%", top: "22.5%",
          width: "55.9%", height: "55.1%",
          backgroundImage: "url('/assets/journey/jaipur/menubg.png')",
          backgroundSize: "100% 100%",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "clamp(6px, 1.2vh, 10px)",
          padding: "0 8%",
        }}>
          {MENU_ITEMS.map((item) => (
            <div key={item.name} style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: "8px",
            }}>
              <span style={{
                fontFamily: "'BERNIER Distressed', cursive",
                fontSize: "clamp(16px, 2.8vw, 27px)",
                color: "rgb(107,40,75)",
                whiteSpace: "nowrap",
              }}>
                {item.name}
              </span>
              <span style={{
                fontFamily: "'BERNIER Distressed', cursive",
                fontSize: "clamp(16px, 2.8vw, 27px)",
                color: "rgb(107,40,75)",
              }}>
                / {item.price}
              </span>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
