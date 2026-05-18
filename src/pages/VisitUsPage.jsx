import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowWidth } from "../hooks/useWindowWidth";
gsap.registerPlugin(ScrollTrigger);
import SiteFooter from "../components/SiteFooter";

const HERO_IMAGE =
  "/assets/visitus/visitus.png";


function HeroSection() {
  return (
    <section style={{
      width: "100%",
      height: "clamp(240px, 26.5vw, 400px)",
      overflow: "hidden",
    }}>
      <img
        src={HERO_IMAGE}
        alt="Visit NH48"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
      />
    </section>
  );
}

function GetInTouch() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const width = useWindowWidth();
  const mob = width < 768;

  const B = { fontFamily: "BERNIER Distressed, cursive", margin: 0 };

  // Shared input style — border rgb(229,236,235) 1px, transparent bg
  const inp = {
    background: "transparent",
    border: "1px solid rgb(229,236,235)",
    color: "white",
    outline: "none",
    padding: "0 10px",
    fontFamily: "BERNIER Distressed, cursive",
    fontSize: "clamp(10px, 1.06vw, 16px)",
    boxSizing: "border-box",
    display: "block",
  };

  if (mob) {
    return (
      <section style={{ backgroundColor: "rgb(50, 104, 98)", padding: "40px 24px 48px" }}>
        <p style={{ ...B, fontSize: "28px", color: "white", lineHeight: 0.921, whiteSpace: "pre-line", marginBottom: "24px" }}>
          {"Get in touch\n\nIf you need to get in touch with us, please fill in the form below and our team will get back to you as soon as possible."}
        </p>
        <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0 28px" }}>
          {[0,1,2].map(i => <img key={i} src="/assets/visitus/section-3-vector.png" alt="" style={{ width: "60px", height: "auto" }} />)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ ...B, fontSize: "20px", color: "white", lineHeight: 0.921 }}>name</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <p style={{ ...B, fontSize: "14px", color: "white", lineHeight: 0.921, marginBottom: "6px" }}>first name</p>
              <input name="firstName" value={form.firstName} onChange={handleChange} style={{ ...inp, width: "100%", height: "38px" }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ ...B, fontSize: "14px", color: "white", lineHeight: 0.921, marginBottom: "6px" }}>last name</p>
              <input name="lastName" value={form.lastName} onChange={handleChange} style={{ ...inp, width: "100%", height: "38px" }} />
            </div>
          </div>
          <p style={{ ...B, fontSize: "14px", color: "white", lineHeight: 0.921, marginTop: "4px" }}>email [required]</p>
          <input name="email" type="email" value={form.email} onChange={handleChange} style={{ ...inp, width: "100%", height: "38px" }} />
          <p style={{ ...B, fontSize: "14px", color: "white", lineHeight: 0.921, marginTop: "4px" }}>message [required]</p>
          <textarea name="message" value={form.message} onChange={handleChange} style={{ ...inp, width: "100%", height: "80px", padding: "8px 10px", resize: "none" }} />
          <div style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>
            <button onClick={() => console.log(form)} style={{ ...B, width: "120px", height: "40px", background: "transparent", border: "5px solid rgb(229,236,235)", color: "white", cursor: "pointer", fontSize: "18px" }}>send</button>
          </div>
        </div>
      </section>
    );
  }

  // Desktop — every element absolutely positioned using exact Figma % coords
  // Section: 1512×678px ref. All x as % of 1512, y as % of 678.
  // Figma uses px inputs — we scale with vw for responsiveness.
  const iH  = "clamp(28px, 2.98vw, 45px)";   // input height  45px → 2.98vw
  const taH = "clamp(56px, 5.95vw, 90px)";   // textarea h    90px → 5.95vw
  const iW1 = "clamp(100px, 12.57vw, 190px)"; // name input w 190px → 12.57vw
  const iW2 = "clamp(200px, 26.52vw, 401px)"; // wide input w 401px → 26.52vw
  const lbl = { ...B, fontSize: "clamp(10px, 1.32vw, 20px)", color: "white", lineHeight: 0.921, margin: 0 };

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: "rgb(50, 104, 98)",
      minHeight: "678px",
      height: "44.8vw",
      maxHeight: "678px",
      overflow: "hidden",
    }}>

      {/* ── 3 Vectors — Figma: rgb(34,77,71) at op=1.00, subtle against bg
          Apply opacity so they blend correctly on the teal background */}
      {[1.46, 40.41, 85.28].map((lp, i) => (
        <img key={i} src="/assets/visitus/section-3-vector.png" alt=""
          style={{ position: "absolute", left: `${lp}%`, top: "44.7%", width: "clamp(100px, 13.3vw, 201px)", height: "auto", pointerEvents: "none" }} />
      ))}

      {/* ── Left text block ───────────────────────────────────────────────────
          Figma: "Get in touch" = BERNIER 40px
                 Body paragraph = Helvetica Neue 20px (style override) */}
      <div style={{ position: "absolute", left: "17.4%", top: "25.8%", width: "25.8%" }}>
        <p style={{ ...B, fontSize: "clamp(18px, 2.65vw, 40px)", lineHeight: 0.921, color: "white", margin: 0 }}>
          Get in touch
        </p>
        <p style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: "clamp(11px, 1.32vw, 20px)",
          lineHeight: 0.989,
          color: "white",
          margin: "clamp(10px, 1.3vw, 20px) 0 0",
          fontWeight: 400,
        }}>
          If you need to get in touch with us, please fill in the form on the right and our team will get back to you as soon as possible.
        </p>
      </div>

      {/* ── Form elements ─────────────────────────────────────────────────────
          All x/y from Figma as % of 1512/678 */}

      {/* "name" — x=848(56.1%), y=174(25.7%), 40px */}
      <p style={{ position: "absolute", left: "56.1%", top: "25.7%", ...B, fontSize: "clamp(18px, 2.65vw, 40px)", color: "white", lineHeight: 0.921 }}>name</p>

      {/* "first name" — x=848(56.1%), y=233(34.4%), 20px */}
      <p style={{ position: "absolute", left: "56.1%", top: "34.4%", ...lbl }}>first name</p>
      {/* first name input — x=848(56.1%), y=265(39.1%), w=190(12.57%), h=45px */}
      <input name="firstName" value={form.firstName} onChange={handleChange}
        style={{ ...inp, position: "absolute", left: "56.1%", top: "39.1%", width: iW1, height: iH }} />

      {/* "last name" — x=1059(70.0%), y=233(34.4%), 20px */}
      <p style={{ position: "absolute", left: "70.0%", top: "34.4%", ...lbl }}>last name</p>
      {/* last name input — x=1059(70.0%), y=265(39.1%), w=190(12.57%), h=45px */}
      <input name="lastName" value={form.lastName} onChange={handleChange}
        style={{ ...inp, position: "absolute", left: "70.0%", top: "39.1%", width: iW1, height: iH }} />

      {/* "email [required]" — "email"=BERNIER 40px, "[required]"=BERNIER 20px */}
      <p style={{ position: "absolute", left: "56.1%", top: "47.3%", margin: 0, lineHeight: 0.921 }}>
        <span style={{ ...B, fontSize: "clamp(18px, 2.65vw, 40px)", color: "white" }}>email </span>
        <span style={{ ...B, fontSize: "clamp(10px, 1.32vw, 20px)", color: "white" }}>[required]</span>
      </p>
      {/* email input — x=848(56.1%), y=374(55.2%), w=401(26.52%), h=45px */}
      <input name="email" type="email" value={form.email} onChange={handleChange}
        style={{ ...inp, position: "absolute", left: "56.1%", top: "55.2%", width: iW2, height: iH }} />

      {/* "message [required]" — "message"=BERNIER 40px, "[required]"=BERNIER 20px */}
      <p style={{ position: "absolute", left: "56.1%", top: "63.4%", margin: 0, lineHeight: 0.921 }}>
        <span style={{ ...B, fontSize: "clamp(18px, 2.65vw, 40px)", color: "white" }}>message </span>
        <span style={{ ...B, fontSize: "clamp(10px, 1.32vw, 20px)", color: "white" }}>[required]</span>
      </p>
      {/* message textarea — x=848(56.1%), y=483(71.2%), w=401(26.52%), h=90px */}
      <textarea name="message" value={form.message} onChange={handleChange}
        style={{ ...inp, position: "absolute", left: "56.1%", top: "71.2%", width: iW2, height: taH, padding: "8px 10px", resize: "none" }} />

      {/* send button — x=988(65.3%), y=598(88.2%), w=123(8.13%), h=45px, 7px stroke */}
      <button onClick={() => console.log(form)}
        style={{
          position: "absolute", left: "65.3%", top: "88.2%",
          width: "clamp(80px, 8.13vw, 123px)", height: iH,
          background: "transparent", border: "clamp(4px, 0.46vw, 7px) solid rgb(229,236,235)",
          color: "white", cursor: "pointer", ...B, fontSize: "clamp(12px, 1.59vw, 24px)",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
        send
      </button>

    </section>
  );
}


export default function VisitUsPage() {
  return (
    <div>
      <HeroSection />
      <section style={{ width: "100%", lineHeight: 0 }}>
        <img src="/assets/visitus/location-timing.png" alt="Location and timings" style={{ width: "100%", display: "block" }} />
      </section>
      <GetInTouch/>
      <SiteFooter />
    </div>
  );
}

