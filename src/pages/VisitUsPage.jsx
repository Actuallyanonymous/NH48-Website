import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowWidth } from "../hooks/useWindowWidth";
gsap.registerPlugin(ScrollTrigger);
import SiteFooter from "../components/SiteFooter";
import LocationTimings from "../components/LocationAndTimings";

const HERO_IMAGE =
  "/assets/visitus/visitus.png";


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
          {/* <div
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
          </div> */}

          {/* <p
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
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}

function GetInTouch() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    // add your submit logic here

  };

  return (
  <section style={styles.section}>

    {/* ── Top: heading + form side by side ── */}
    <div style={styles.topRow}>
      {/* Left column */}
      <div style={styles.left}>
        <h2 style={styles.heading}>GET IN TOUCH</h2>
        <p style={styles.body}>
          IF YOU NEED TO GET IN TOUCH WITH US, PLEASE FILL THE FORM ON THE
          RIGHT AND OUR TEAM WILL GET BACK TO YOU AS SOON AS POSSIBLE.
        </p>
      </div>
      

      {/* ── Right column — form ── */}
      <div style={styles.right}>
        {/* Name row */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>NAME</label>
          <div style={styles.nameRow}>
            <div style={styles.nameField}>
              <subLabel style = {styles.subLabel}>
                <span style={styles.required}>FIRST NAME [REQUIRED]</span>
              </subLabel>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.nameField}>
              <span style={styles.subLabel}>LAST NAME</span>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            EMAIL <span style={styles.required}>[REQUIRED]</span>
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            style={styles.inputFull}
          />
        </div>

        {/* Message */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            MESSAGE <span style={styles.required}>[REQUIRED]</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            style={styles.textarea}
          />
        </div>

        {/* Send button */}
        <div style={styles.buttonRow}>
          <button onClick={handleSubmit} style={styles.sendBtn}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            SEND
          </button>
        </div>
      </div>
      </div>
        {/* ── Bottom: 3 lotuses full width ── */}
    <div style={styles.lotusRow}>
      <LotusPlaceholder />
      <LotusPlaceholder />
      <LotusPlaceholder />
    </div>

    </section>
  );
}

// Swap the div below with <img src={lotusImg} ... /> once you have the asset
function LotusPlaceholder() {
  return (
    <div style={styles.lotus}>
      {/* Replace with: <img src={lotusImg} alt="lotus" style={{ width: "100%", opacity: 0.35 }} /> */}
<svg width="201" height="162" viewBox="0 0 201 162" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M128.762 59.8169C128.762 59.8169 137.466 28.25 100.475 0C63.5082 28.25 72.1879 59.8169 72.1879 59.8169C35.2212 33.2366 0 63.1338 0 63.1338C0 63.1338 36.9667 54.8302 47.5355 83.0802C58.1042 111.33 93.3015 122.951 93.3015 122.951L92.9189 154.111V154.653C92.895 158.353 96.0752 161.354 99.9967 161.354H100.14C104.038 161.354 107.194 158.376 107.218 154.698V154.585L107.6 122.928C107.6 122.928 142.822 111.308 153.366 83.0577C163.935 54.8077 200.902 63.1112 200.902 63.1112C200.902 63.1112 165.729 33.2366 128.762 59.8169Z" fill="#234D48"/>
</svg>

    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────
const styles = {
section: {
  backgroundColor: "#2a6b60",
  display: "flex",
  flexDirection: "column",   // ← column now, not row
  padding: "56px 64px 0px",
  width: "100%",
  boxSizing: "border-box",
  overflow: "hidden",
},

left: {
  flex: "0 0 320px",        // ← fixed width, doesn't grow
  display: "flex",
  flexDirection: "column",
  gap: 20,
},

right: {
  flex: 1,                  // ← takes remaining space
  display: "flex",
  flexDirection: "column",
  gap: 20,
},

topRow: {
  display: "flex",
  flexDirection: "row",
  gap: 80,
  alignItems: "flex-start",
  width: "100%",
},

lotusRow: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",  // ← evenly spaced
  alignItems: "flex-end",
  width: "100%",
  marginTop: 24,
},

  heading: {
    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
    fontSize: "2rem",
    letterSpacing: "0.12em",
    color: "#ffffff",
    margin: 0,
  },
  body: {
    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
    fontSize: "0.8rem",
    letterSpacing: "0.08em",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.85)",
    margin: 0,
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
    fontSize: "1.1rem",
    letterSpacing: "0.12em",
    color: "#ffffff",
  },
  required: {
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    color: "rgba(255,255,255,0.7)",
  },
  subLabel: {
    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
    fontSize: "0.72rem",
    letterSpacing: "0.1em",
    color: "rgba(255,255,255,0.75)",
    marginBottom: 4,
    display: "block",
  },
  nameRow: {
    display: "flex",
    gap: 16,
  },
  nameField: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    background: "transparent",
    border: "1.5px solid rgba(255,255,255,0.6)",
    borderRadius: 0,
    padding: "8px 10px",
    color: "#fff",
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  inputFull: {
    background: "transparent",
    border: "1.5px solid rgba(255,255,255,0.6)",
    borderRadius: 0,
    padding: "8px 10px",
    color: "#fff",
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    background: "transparent",
    border: "1.5px solid rgba(255,255,255,0.6)",
    borderRadius: 0,
    padding: "8px 10px",
    color: "#fff",
    fontSize: "0.9rem",
    outline: "none",
    resize: "vertical",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
  },
  sendBtn: {
    background: "transparent",
    border: "1.5px solid #ffffff",
    color: "#ffffff",
    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
    fontSize: "1rem",
    letterSpacing: "0.2em",
    padding: "8px 40px",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },


  lotus: {
    display: "flex",
    alignItems: "flex-end",
  },
};


export default function VisitUsPage() {
  return (
    <div>
      <HeroSection />
      <LocationTimings/>
      <GetInTouch/>
      <SiteFooter />
    </div>
  );
}

