export default function Slide05a() {
  // U+FE0E text variation selector forces non-emoji presentation
  const TEXT_VS = "\uFE0E";
  const youGlyphs = `☁${TEXT_VS}  ☕${TEXT_VS}  ♡${TEXT_VS}`;
  const themGlyphs = `!  ♖  ↑`;

  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">TRANSACTION · TAP</span>
      </div>
      <hr className="rule" />

      {/* Two asymmetric consultations */}
      <div className="transaction">
        {/* YOU */}
        <div className="transaction__col">
          <p className="transaction__label">YOU</p>
          <div aria-hidden className="transaction__glyphs">
            {youGlyphs}
          </div>
          <p className="transaction__word">Settling</p>
        </div>

        <div className="split-vert-rule" aria-hidden />

        {/* THEM */}
        <div className="transaction__col">
          <p className="transaction__label">THEM</p>
          <div aria-hidden className="transaction__glyphs">
            {themGlyphs}
          </div>
          <p className="transaction__word">Charged</p>
        </div>
      </div>

      {/* Supporting line */}
      <div className="transaction__support-bar">
        <p className="transaction__support">
          Sometimes you rhyme. Sometimes you don&rsquo;t.
        </p>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · THE EXCHANGE</span>
        <span className="t-source">3 GLYPHS · 1 WORD · EACH</span>
      </div>
    </div>
  );
}
