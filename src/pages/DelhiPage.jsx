import { useEffect } from "react";

// Figma frame: 775×1002  →  modal: 620×780
// All positions derived as % of Figma frame and applied to modal

const MENU_ITEMS = [
  { name: "dal bati churma", price: "15" },
  { name: "laal maas",        price: "25" },
  { name: "Gatte ki Sabzi",   price: "20" },
  { name: "Ker Sangri",       price: "15" },
  { name: "Pyaz Kachori",     price: "15" },
];

export default function DelhiModal({ onClose }) {
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
        // use position:relative so all absolute children are relative to this
      }}>

        {/* ── Background image ── */}
        <img src="/assets/journey/delhi/delhibg.png" alt="" style={{
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
        <img src="/assets/journey/delhi/delhi-right-group.png" alt=""
          style={{
            position: "absolute",
            right: "-8%", top: "-6.5%",
            width: "58.2%", height: "auto",
            zIndex: 3, pointerEvents: "none",
          }}
        />

        {/* ── Left flower group — anchored to left edge, pushed off-corner ── */}
        <img src="/assets/journey/delhi/delhi-left-group.png" alt=""
          style={{
            position: "absolute",
            left: "-18%", top: "58.3%",
            width: "58.2%", height: "auto",
            zIndex: 3, pointerEvents: "none",
          }}
        />

        {/* ── Motif
            Figma: x=245(31.6%), y=59(5.9%), w=137(17.7%), h=137
        ── */}
        <img src="/assets/journey/delhi/delhi-motif.png" alt=""
          style={{
            position: "absolute",
            left: "31.6%", top: "5.9%",
            width: "17.7%", height: "auto",
            zIndex: 4, pointerEvents: "none",
          }}
        />

        {/* ── "delhi" title
            Figma: x=314(40.5%), y=126(12.6%), font=93.6px, color=rgb(255,232,0)
        ── */}
        <h1 style={{
          position: "absolute",
          left: "40.5%", top: "12.6%",
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: "clamp(48px, 12.1vw, 74px)",
          fontWeight: 400,
          lineHeight: 1,
          color: "rgb(255,232,0)",
          margin: 0,
          zIndex: 5,
          whiteSpace: "nowrap",
        }}>
          delhi
        </h1>

        {/* ── Menu card
            Figma: x=171(22.1%), y=225(22.5%), w=433(55.9%), h=552(55.1%)
        ── */}
        <div style={{
          position: "absolute",
          left: "22.1%", top: "22.5%",
          width: "55.9%", height: "55.1%",
          backgroundImage: "url('/assets/journey/delhi/menubg.png')",
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
                color: "rgb(232,36,96)",
                whiteSpace: "nowrap",
              }}>
                {item.name}
              </span>
              <span style={{
                fontFamily: "'BERNIER Distressed', cursive",
                fontSize: "clamp(16px, 2.8vw, 27px)",
                color: "rgb(232,36,96)",
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
