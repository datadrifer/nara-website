export default function Slide02b() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">EVIDENCE · 01</span>
      </div>
      <hr className="rule" />

      {/* Body — two-column: stat block left, supporting line right */}
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
          <div style={{ height: "5vh" }} />
          <p className="t-claim">
            of ChatGPT users couldn&rsquo;t quote a single sentence from essays
            they had just written.
          </p>
          <div style={{ height: "4vh" }} />
          <div
            style={{
              borderTop: "1px solid var(--slide-rule)",
              paddingTop: "2.5vh",
              maxWidth: "46ch",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 14,
                lineHeight: 1.35,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--slide-ink-3)",
                margin: 0,
              }}
            >
              Cognitive debt is accumulating — and it is measurable at the
              level of neural connectivity.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · DIAGNOSIS 01 / COGNITION</span>
        <span className="t-source">MIT · YOUR BRAIN ON CHATGPT · 2025</span>
      </div>
    </div>
  );
}
