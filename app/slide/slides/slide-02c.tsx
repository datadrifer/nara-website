export default function Slide02c() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">WHAT HAPPENS INSIDE</span>
      </div>
      <hr className="rule" />

      {/* Body — claim on top (hero), supporting evidence below */}
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
          {/* Primary claim — NeueBit pixel face, tight line-height */}
          <h1 className="t-statement t-statement--pixel t-statement--left">
            Every time you ask the machine, a little less thinking happens
            inside you.
          </h1>

          <div style={{ height: "9vh" }} />

          {/* Supporting evidence — muted uppercase mono, sits below a hairline */}
          <div
            style={{
              borderTop: "1px solid var(--slide-rule)",
              paddingTop: "2.5vh",
              maxWidth: "56ch",
              display: "flex",
              alignItems: "flex-start",
              gap: 24,
            }}
          >
            <span className="t-caption" style={{ flexShrink: 0 }}>
              EVIDENCE
            </span>
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
              78% of ChatGPT users could not quote essays they had just
              written.
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
