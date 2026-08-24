import { useState } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";
import SiteFooter from "../components/SiteFooter";

const TEAL = "#14534D";
const RED = "#A94545";
const GOLD = "#CBAF79";
const CARD_BG = "#211D19";
const MUTED = "#8B7A69";

const SERVICE_TYPES = [
  { key: "private", label: "Private Events", desc: "Celebrate with your own space and curated menu" },
  { key: "catering", label: "Catering", desc: "Our flavours, wherever you gather" },
];

const TIME_WINDOWS = ["Lunch", "Early Evening", "Dinner", "Late Night"];

const inputStyle = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: "14px",
  color: "white",
  backgroundColor: CARD_BG,
  border: "1px solid #3a352d",
  borderRadius: "6px",
  padding: "0 14px",
  outline: "none",
  width: "100%",
  height: "44px",
};

const labelStyle = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: "13px",
  color: MUTED,
  display: "block",
  marginBottom: "8px",
};

// ─── "Let's plan your event" inquiry form — Figma node 1:2 ────────────────────
export default function PrivateEventsInquiryPage() {
  const width = useWindowWidth();
  const mob = width < 768;

  const [form, setForm] = useState({
    serviceType: "private",
    restaurantLocation: "",
    eventDate: "",
    timeWindow: "",
    guests: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const submit = () => {
    console.log(form);
  };

  return (
    <div>
      {/* Teal page background — the red/black card sits inset within it, Figma node 1:2 */}
      <div style={{
        width: "100%",
        backgroundColor: TEAL,
        marginTop: "72px",
        padding: mob ? "24px 16px" : "clamp(40px, 9vw, 136px) clamp(24px, 19.8vw, 299px)",
      }}>
      <div style={{
        maxWidth: "914px",
        margin: "0 auto",
        borderRadius: "21px",
        overflow: "hidden",
      }}>
      {/* Header */}
      <section style={{
        position: "relative",
        width: "100%",
        backgroundColor: RED,
        padding: mob ? "32px 24px 40px" : "52px clamp(24px, 6vw, 90px) 64px",
        overflow: "hidden",
      }}>
        {!mob && (
          <div aria-hidden="true" style={{
            position: "absolute", top: "-100px", right: "-40px",
            width: "260px", height: "260px", borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.12)",
          }} />
        )}
        <div style={{ position: "relative" }}>
          <p style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "13px",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            margin: "0 0 20px",
          }}>
            private event/ catering inquiry
          </p>
          <img
            src="/assets/home-page/new/lets-plan-your-event-heading.png"
            alt="Let's plan your event"
            style={{ display: "block", width: mob ? "min(346px, 78vw)" : "clamp(260px, 22.9vw, 346px)", height: "auto", margin: "0 0 16px" }}
          />
          <p style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            color: "white",
            fontSize: mob ? "15px" : "18px",
            margin: 0,
          }}>
            Fill out the form below and our team will be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* Form body */}
      <section style={{ width: "100%", backgroundColor: "black", padding: mob ? "32px 24px 56px" : "48px clamp(24px, 6vw, 90px) 80px" }}>
        <div>

          {/* Service type */}
          <p style={{ ...labelStyle, color: GOLD, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "14px" }}>service type</p>
          <div style={{ display: "flex", flexDirection: mob ? "column" : "row", gap: "16px", marginBottom: "40px" }}>
            {SERVICE_TYPES.map((t) => (
              <div
                key={t.key}
                onClick={() => setForm((prev) => ({ ...prev, serviceType: t.key }))}
                style={{
                  position: "relative",
                  flex: 1,
                  backgroundColor: CARD_BG,
                  border: `1px solid ${GOLD}`,
                  borderRadius: "8px",
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                <div style={{
                  position: "absolute", top: "16px", right: "16px",
                  width: "20px", height: "20px", borderRadius: "50%",
                  border: `2px solid ${GOLD}`,
                  backgroundColor: form.serviceType === t.key ? GOLD : "transparent",
                }} />
                <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#c1c1c1", fontSize: "20px", margin: "0 0 8px" }}>{t.label}</p>
                <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: MUTED, fontSize: "12px", margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Order details */}
          <p style={{ ...labelStyle, color: GOLD, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "14px" }}>order details</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "24px" }}>
            <div>
              <label style={labelStyle}>Restaurant location</label>
              <select value={form.restaurantLocation} onChange={set("restaurantLocation")} style={{ ...inputStyle, appearance: "auto" }}>
                <option value="">Select a restaurant...</option>
                <option value="dc">Washington D.C. — 4824 MacArthur Blvd NW</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: mob ? "column" : "row", gap: "20px" }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Event date</label>
                <input type="date" value={form.eventDate} onChange={set("eventDate")} style={inputStyle} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Preferred time window</label>
                <select value={form.timeWindow} onChange={set("timeWindow")} style={{ ...inputStyle, appearance: "auto" }}>
                  <option value="">Select a window...</option>
                  {TIME_WINDOWS.map((w) => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Number of guests</label>
              <input type="number" placeholder="e.g. 50" min="1" value={form.guests} onChange={set("guests")} style={inputStyle} />
              <p style={{ ...labelStyle, marginTop: "6px", marginBottom: 0, fontSize: "11px" }}>No minimum or maximum — all party sizes welcome.</p>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: "#2a2a2a", margin: "24px 0" }} />

          {/* Your information */}
          <p style={{ ...labelStyle, color: GOLD, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "14px" }}>your information</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "24px" }}>
            <div style={{ display: "flex", flexDirection: mob ? "column" : "row", gap: "20px" }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>First name</label>
                <input placeholder="Jane" value={form.firstName} onChange={set("firstName")} style={inputStyle} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Last name</label>
                <input placeholder="Smith" value={form.lastName} onChange={set("lastName")} style={inputStyle} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: mob ? "column" : "row", gap: "20px" }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Email address</label>
                <input type="email" placeholder="jane@example.com" value={form.email} onChange={set("email")} style={inputStyle} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Phone number</label>
                <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={set("phone")} style={inputStyle} />
              </div>
            </div>
          </div>

          <div style={{ height: "1px", backgroundColor: "#2a2a2a", margin: "24px 0" }} />

          {/* Anything else */}
          <p style={{ ...labelStyle, color: GOLD, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "14px" }}>anything else?</p>
          <div style={{ marginBottom: "32px" }}>
            <label style={labelStyle}>Special requests or additional details</label>
            <textarea
              placeholder="Dietary restrictions, menu preferences, event theme, setup requirements..."
              value={form.notes}
              onChange={set("notes")}
              style={{ ...inputStyle, height: "110px", padding: "12px 14px", resize: "none" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={submit}
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "#1a1a1a",
                backgroundColor: GOLD,
                border: "none",
                borderRadius: "6px",
                padding: "13px 28px",
                cursor: "pointer",
              }}
            >
              Submit inquiry
            </button>
            <p style={{ ...labelStyle, marginBottom: 0, fontSize: "12px" }}>We'll only use your info to respond to this inquiry. No spam, ever.</p>
          </div>
        </div>
      </section>
      </div>
      </div>

      <SiteFooter />
    </div>
  );
}
