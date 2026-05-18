export default function Slide04a() {
  // U+FE0E = text variation selector — forces non-emoji presentation
  const TEXT_VS = "\uFE0E";
  const glyphs = `☁${TEXT_VS}  ☕${TEXT_VS}  ♡${TEXT_VS}`;

  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">
          NARA · NOT A CHATBOT · NOT A SEARCH ENGINE
        </span>
      </div>
      <hr className="rule" />

      {/* Split body */}
      <div className="product-split">
        {/* LEFT — placeholder product photo + caption */}
        <div className="product-col product-col--left">
          <div className="product-photo" aria-label="Product photo placeholder">
            <span className="product-photo__label">PHOTO · B/W · 1:1</span>
          </div>
          <p className="product-caption">A reflective instrument, worn.</p>
        </div>

        <div className="split-vert-rule" aria-hidden />

        {/* RIGHT — live consultation */}
        <div className="product-col product-col--right">
          <p className="consultation-label">CONSULTATION · LIVE</p>
          <div aria-hidden className="consultation-glyphs">
            {glyphs}
          </div>
          <p className="consultation-word">Settling</p>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · THE INSTRUMENT</span>
        <span className="t-source">3 GLYPHS · 1 WORD</span>
      </div>
    </div>
  );
}
