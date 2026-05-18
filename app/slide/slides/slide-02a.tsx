export default function Slide02a() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">DIAGNOSIS · 01 OF 02 · COGNITION</span>
      </div>
      <hr className="rule" />

      {/* Body — left column with stat, claim, source */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "4vh",
          paddingBottom: "4vh",
        }}
      >
        <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto" }}>
          <div className="t-stat">78%</div>
          <div style={{ height: "6vh" }} />
          <p className="t-claim">
            of ChatGPT users couldn&rsquo;t quote a single sentence from essays
            they had just written.
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · A READING ON OUR MINDS</span>
        <span className="t-source">
          MIT · YOUR BRAIN ON CHATGPT · 2025
        </span>
      </div>
    </div>
  );
}
