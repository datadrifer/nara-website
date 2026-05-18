export default function Slide03c() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">WHAT HAPPENS BETWEEN</span>
      </div>
      <hr className="rule" />

      {/* Body — claim as hero, two-sentence rhythm */}
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
            Every time you ask the machine, you learn that agreement is the
            default.
          </h1>
          <div style={{ height: "5vh" }} />
          <p
            className="t-statement t-statement--pixel t-statement--left"
            style={{ color: "var(--slide-ink-3)" }}
          >
            The machine never pushes back. Neither do you, eventually.
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · DIAGNOSIS 02 / SOCIAL</span>
        <span className="t-source">WHAT HAPPENS BETWEEN</span>
      </div>
    </div>
  );
}
