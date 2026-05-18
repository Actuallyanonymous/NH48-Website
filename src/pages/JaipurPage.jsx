import { useEffect } from "react";

// All pixel values derived directly from Figma frame 1:612 (775×1002)
// scaled to our modal (620×780): scale_x=0.800, scale_y=0.778

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
      <div onClick={onClose} style={{
        position: "fixed", inset: 0,
        backgroundColor: "rgba(0,0,0,0.55)",
        zIndex: 100,
      }} />

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

        {/* Background */}
        <img src="/assets/journey/jaipur/jaipurbackground.jpg" alt="" style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
          zIndex: 0,
        }} />

        {/* Dark overlay — Figma: black 0.44 */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundColor: "rgba(0,0,0,0.44)",
          zIndex: 1,
        }} />

        {/* Close */}
        <button onClick={onClose} style={{
          position: "absolute", top: 14, left: 16,
          zIndex: 10, background: "none", border: "none",
          color: "#fff", fontSize: "1.2rem", cursor: "pointer", lineHeight: 1,
        }}>✕</button>

        {/* Right flower — shifted left so petals are more visible */}
        <img src="/assets/journey/jaipur/jaipur-flower-right.png" alt=""
          style={{
            position: "absolute",
            left: "350px", top: "-65px",
            width: "273px", height: "auto",
            zIndex: 3, pointerEvents: "none",
          }}
        />

        {/* Left flower — shifted right so petals are more visible */}
        <img src="/assets/journey/jaipur/jaipur-flower-left.png" alt=""
          style={{
            position: "absolute",
            left: "-25px", top: "591px",
            width: "269px", height: "auto",
            zIndex: 3, pointerEvents: "none",
          }}
        />

        {/* Motif — Figma: x=241,y=68 w=137 → modal: left=193,top=53 w=110 */}
        <img src="/assets/journey/jaipur/jaipur-motif.png" alt=""
          style={{
            position: "absolute",
            left: "193px", top: "53px",
            width: "110px", height: "auto",
            zIndex: 4, pointerEvents: "none",
          }}
        />

        {/* "jaipur" title — Figma: x=295,y=126 sz=93.6 → modal: left=236,top=98 sz=75 */}
        <h1 style={{
          position: "absolute",
          left: "236px", top: "98px",
          fontFamily: "'BERNIER Distressed', cursive",
          fontSize: "75px",
          fontWeight: 400,
          lineHeight: 1,
          color: "rgb(255,136,199)",
          margin: 0,
          zIndex: 5,
          whiteSpace: "nowrap",
        }}>
          jaipur
        </h1>

        {/* Menu card — Figma: x=171,y=225 w=433 h=552 → modal: left=137,top=175 w=346 h=430 */}
        <div style={{
          position: "absolute",
          left: "137px", top: "175px",
          width: "346px", height: "430px",
          backgroundImage: "url('/assets/journey/jaipur/menubg.png')",
          backgroundSize: "100% 100%",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          padding: "0 24px",
        }}>
          {/* Items — Figma: BERNIER 34px → modal: 27px, color rgb(107,40,75) */}
          {MENU_ITEMS.map((item) => (
            <div key={item.name} style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: "8px",
            }}>
              <span style={{
                fontFamily: "'BERNIER Distressed', cursive",
                fontSize: "27px",
                color: "rgb(107,40,75)",
                whiteSpace: "nowrap",
              }}>
                {item.name}
              </span>
              <span style={{
                fontFamily: "'BERNIER Distressed', cursive",
                fontSize: "27px",
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
