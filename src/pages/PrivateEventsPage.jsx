import { Link } from "react-router-dom";
import { useWindowWidth } from "../hooks/useWindowWidth";
import SiteFooter from "../components/SiteFooter";

const TEAL = "#14534D";
const RED_BTN = "#A94545";

// ─── Private Events & Catering hero — Figma node 1:6101 ───────────────────────
export default function PrivateEventsPage() {
  const width = useWindowWidth();
  const mob = width < 768;

  return (
    <div>
      <section style={{
        width: "100%",
        backgroundColor: TEAL,
        marginTop: "72px",
        padding: mob ? "36px 24px 48px" : "72px clamp(24px, 6vw, 90px) 96px",
      }}>
        <div style={{
          display: "flex",
          flexDirection: mob ? "column" : "row",
          gap: mob ? "32px" : "48px",
          maxWidth: "1180px",
          margin: "0 auto",
        }}>
          {/* Left — copy */}
          <div style={{ flex: mob ? "unset" : "1 1 50%", minWidth: 0 }}>
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

            <h1 style={{
              fontFamily: "'BERNIER Distressed', cursive",
              color: "white",
              fontSize: mob ? "clamp(32px, 10vw, 44px)" : "clamp(40px, 5vw, 76px)",
              lineHeight: 1.1,
              margin: "0 0 24px",
            }}>
              Every Gathering.<br />Has a Journey.
            </h1>

            <p style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 300,
              color: "white",
              fontSize: mob ? "16px" : "18px",
              lineHeight: 1.5,
              maxWidth: "480px",
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
          <div style={{ flex: mob ? "unset" : "1 1 50%", minWidth: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ width: "100%", aspectRatio: "428/243", overflow: "hidden" }}>
              <img src="/assets/home-page/new/private-events-mural.png" alt="NH48 dining room mural"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
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
