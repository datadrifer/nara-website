export default function Slide02d() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">DIAGNOSIS · COGNITION AND SOCIAL</span>
      </div>
      <hr className="rule" />

      {/* Split body */}
      <div className="split">
        {/* LEFT — cognition */}
        <div className="split__col">
          <div className="split__eyebrow">01 / COGNITION</div>
          <div className="t-stat--mid">78%</div>
          <p className="t-body--mid">
            of ChatGPT users could not quote a single sentence from essays
            they had just written.
          </p>
          <div style={{ height: "5vh" }} />
          <p className="t-support--mid">COGNITIVE DEBT IS MEASURABLE.</p>
        </div>

        {/* DIVIDER */}
        <div className="split__divider" />

        {/* RIGHT — social */}
        <div className="split__col">
          <div className="split__eyebrow">02 / SOCIAL</div>
          <h2 className="t-claim--mid">
            AI is trained to agree. We are losing the muscle of disagreement.
          </h2>
          <div style={{ height: "5vh" }} />
          <p className="t-support--mid">
            A SOCIAL DIET OF SYSTEMS THAT NEVER PUSH BACK ATROPHIES WHAT WE
            USE FOR REAL HUMAN FRICTION.
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
        <span className="t-source">MIT 2025 · RLHF · AGREEMENT BY DESIGN</span>
      </div>
    </div>
  );
}
