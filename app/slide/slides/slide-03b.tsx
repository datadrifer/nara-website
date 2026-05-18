export default function Slide03b() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">EVIDENCE · 02</span>
      </div>
      <hr className="rule" />

      {/* Body — claim hero + supporting line */}
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
          <h1 className="t-statement t-statement--pixel t-statement--left">
            AI is trained by reinforcement to agree with us.
          </h1>
          <div style={{ height: "6vh" }} />
          <div
            style={{
              borderTop: "1px solid var(--slide-rule)",
              paddingTop: "2.5vh",
              maxWidth: "56ch",
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
              A social diet of systems that never push back atrophies the
              muscle we use for real human friction.
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
        <span className="t-caption">☑ NARA · DIAGNOSIS 02 / SOCIAL</span>
        <span className="t-source">RLHF · AGREEMENT BY DESIGN</span>
      </div>
    </div>
  );
}
