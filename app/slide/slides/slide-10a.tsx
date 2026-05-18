export default function Slide10a() {
  // U+FE0E text variation selector forces non-emoji presentation
  const VS = "\uFE0E";
  const glyphs = `☾${VS}  ♡${VS}  ☼${VS}`;

  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">NARA · CONSULTATION 0001 · YOU</span>
      </div>
      <hr className="rule" />

      {/* Body — full bleed, the personal reading */}
      <div className="closing">
        <p className="closing__label">A READING FOR THE ROOM</p>
        <div aria-hidden className="closing__glyphs">
          {glyphs}
        </div>
        <p className="closing__word">Returning</p>
      </div>

      {/* Bottom strip — tagline + signoff */}
      <hr className="rule" />
      <div className="slide-strip closing__bottom">
        <span className="closing__tagline">Not an assistant. An instrument.</span>
        <span className="closing__signoff">☑ NARA · 2026</span>
      </div>
    </div>
  );
}
