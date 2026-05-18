import { Composer } from "./_composer";

const VS = "\uFE0E";

export default function Slide03e() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">INTERVENTION · THE PIVOT</span>
      </div>
      <hr className="rule" />

      {/* Before / After pivot */}
      <div className="pivot">
        {/* BEFORE — the composer, muted */}
        <div className="pivot__col pivot__col--before">
          <p className="pivot__label">BEFORE</p>
          <Composer input="am I overreacting about" />
        </div>

        {/* Arrow badge sitting on the vertical rule */}
        <div className="split-vert-rule" aria-hidden />
        <div className="pivot__arrow" aria-hidden>
          →
        </div>

        {/* AFTER — the NaRa reading, full ink */}
        <div className="pivot__col">
          <p className="pivot__label">AFTER</p>
          <div aria-hidden className="pivot__glyphs">
            ☁{VS}  ☕{VS}  ♡{VS}
          </div>
          <p className="pivot__word">Settling</p>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · BROWSER EXTENSION</span>
        <span className="t-source">ONE TAP · CONSULT NARA INSTEAD</span>
      </div>
    </div>
  );
}
