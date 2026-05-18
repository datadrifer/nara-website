export default function Slide03a() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">DIAGNOSIS · 02 OF 02 · SOCIAL</span>
      </div>
      <hr className="rule" />

      {/* Body — claim as left-aligned pixel hero */}
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
            AI is trained to agree. We are losing the muscle of disagreement.
          </h1>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · A READING ON OUR MINDS</span>
        <span className="t-source">DIAGNOSIS 02 / SOCIAL</span>
      </div>
    </div>
  );
}
