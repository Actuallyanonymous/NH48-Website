import { useEffect } from "react";

const MENU_ITEMS = [
  { name: "DAL BATI CHURMA", price: 15 },
  { name: "LAAL MAAS",        price: 25 },
  { name: "GATTE KI SABZI",   price: 20 },
  { name: "KER SANGRI",       price: 15 },
  { name: "PYAZ KACHORI",     price: 15 },
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

      {/* Modal container */}
      <div style={{
        position: "fixed",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "620px",
        maxWidth: "92vw",
        height: "780px",
        maxHeight: "90vh",
        zIndex: 101,
        overflow: "hidden",
      }}>

        {/* Background image */}
        <img
          src="/assets/journey/delhi/delhibg.png"
          alt=""
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            filter: "brightness(0.5)",
            zIndex: 0,
          }}
        />

        {/* Left flower group — bottom-left */}
        <img
          src="/assets/journey/delhi/delhi-left-group.png"
          alt=""
          style={{
            position: "absolute",
            bottom: 0, left: 0,
            width: "42%",
            height: "auto",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Right flower group — top-right */}
        <img
          src="/assets/journey/delhi/delhi-right-group.png"
          alt=""
          style={{
            position: "absolute",
            top: 0, right: 0,
            width: "42%",
            height: "auto",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Close button */}
        <button onClick={onClose} style={{
          position: "absolute",
          top: 14, left: 16,
          zIndex: 10,
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "1.2rem",
          cursor: "pointer",
          lineHeight: 1,
        }}>
          ✕
        </button>

        {/* Content — stacked centrally */}
        <div style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          paddingTop: "48px",
        }}>

          {/* Octagon motif */}
          <img
            src="/assets/journey/delhi/delhi-motif.png"
            alt=""
            style={{
              width: "138px",
              height: "138px",
              objectFit: "contain",
              display: "block",
            }}
          />

          {/* City title */}
          <h1 style={{
            fontFamily: "'BERNIER Distressed', cursive",
            fontSize: "4rem",
            letterSpacing: "-0.04em",
            color: "#FFE900",
            margin: "8px 0 0",
            lineHeight: 1,
            textAlign: "center",
          }}>
            delhi
          </h1>

          {/* Menu card */}
          <div style={{
            width: "60%",
            marginTop: "24px",
            backgroundImage: "url('/assets/journey/delhi/menubg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20% 10% 16%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}>
            {MENU_ITEMS.map((item) => (
              <div key={item.name} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}>
                <span style={{
                  fontFamily: "'BERNIER Distressed', cursive",
                  fontSize: "1.3rem",
                  letterSpacing: "0.05em",
                  color: "#E92461",
                }}>
                  {item.name}
                </span>
                <span style={{ color: "#E92461", fontWeight: "bold", fontSize: "1.3rem" }}>/</span>
                <span style={{
                  fontFamily: "'BERNIER Distressed', cursive",
                  fontSize: "1.3rem",
                  color: "#E92461",
                }}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
