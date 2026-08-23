import { Link } from "react-router-dom";
import { useWindowWidth } from "../hooks/useWindowWidth";
import SiteFooter from "../components/SiteFooter";

const TEAL = "#14534D";
const RED_BTN = "#A94545";

// ─── Private Events & Catering hero — Figma node 1:6101 ───────────────────────
// Reference frame: 1512px wide. Content inset 175px each side (11.6vw).
// Inner content (1162px): text column 46.4%, gap 16.8%, image column 36.8%.
export default function PrivateEventsPage() {
  const width = useWindowWidth();
  const mob = width < 768;

  return (
    <div>
      <section style={{
        width: "100%",
        backgroundColor: TEAL,
        marginTop: "72px",
        padding: mob
          ? "36px 24px 48px"
          : "clamp(60px, 7.8vw, 117px) clamp(24px, 11.6vw, 175px) clamp(50px, 7.2vw, 108px)",
      }}>
        <div style={{
          display: "flex",
          flexDirection: mob ? "column" : "row",
          gap: mob ? "32px" : "clamp(50px, 12vw, 181px)",
        }}>
          {/* Left — copy */}
          <div style={{ flex: mob ? "unset" : "0 1 44%", minWidth: 0 }}>
            <p style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontStyle: "italic",
              fontWeight: 300,
              color: "white",
              fontSize: "16px",
              margin: "0 0 24px",
            }}>
              — Private Event &amp; Catering
            </p>

            <div style={{ margin: "0 0 24px" }}>
              <img src="/assets/home-page/new/every-gathering-heading.png" alt="Every Gathering."
                style={{ display: "block", width: mob ? "70vw" : "clamp(220px, 26.7vw, 404px)", height: "auto" }} />
              <img src="/assets/home-page/new/has-a-journey-heading.png" alt="Has a Journey."
                style={{ display: "block", marginTop: mob ? "4px" : "clamp(2px, 0.5vw, 8px)", width: mob ? "64vw" : "clamp(200px, 24.5vw, 371px)", height: "auto" }} />
            </div>

            <p style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 300,
              color: "white",
              fontSize: mob ? "16px" : "clamp(16px, 1.46vw, 22px)",
              lineHeight: 1.5,
              margin: "0 0 32px",
            }}>
              Bring your people together and let the journey begin. N.H. 48 brings the flavours of India to your celebrations — from vibrant street food and regional favourites to generous plates made for sharing. Whether it's a family gathering, a milestone, or a night with friends, we make every occasion warm, memorable, and distinctly Indian.
            </p>

            <Link to="/private-events/inquire" style={{ textDecoration: "none" }}>
              <div style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: mob ? "100%" : "275px",
                height: "47px",
                backgroundColor: RED_BTN,
                cursor: "pointer",
              }}>
                <span style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "16px",
                  color: "white",
                  letterSpacing: "-0.02em",
                }}>
                  Inquire about Your Event / Catering
                </span>
              </div>
            </Link>
          </div>

          {/* Right — images */}
          <div style={{ flex: mob ? "unset" : "0 1 44%", minWidth: 0, display: "flex", flexDirection: "column", gap: "clamp(6px, 0.65vw, 10px)" }}>
            <div style={{ width: "100%", aspectRatio: "428/243", overflow: "hidden" }}>
              <img src="/assets/home-page/new/private-events-mural.png" alt="NH48 dining room mural"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ display: "flex", gap: "clamp(6px, 0.65vw, 10px)" }}>
              <div style={{ flex: 1, aspectRatio: "205/243", overflow: "hidden" }}>
                <img src="/assets/home-page/new/private-events-food-1.png" alt="NH48 dish"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ flex: 1, aspectRatio: "205/243", overflow: "hidden" }}>
                <img src="/assets/home-page/new/private-events-food-2.png" alt="NH48 dish"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
