import { Composer } from "./_composer";

export default function Slide03f() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">INTERVENTION · THE PIVOT</span>
      </div>
      <hr className="rule" />

      {/* Full-bleed interception poster */}
      <div className="interception">
        {/* Ghosted composer filling the background */}
        <div className="interception__ghost" aria-hidden>
          <Composer input="am I overreacting about" showCursor={false} />
        </div>

        {/* The NaRa stamp */}
        <div className="interception__stamp" role="note">
          <div className="interception__meta">
            <span>☑ NARA · BROWSER EXTENSION</span>
            <span>23:47</span>
          </div>
          <div className="interception__rule" />
          <p className="interception__cta">
            Consult NaRa instead.
            <span aria-hidden>→</span>
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · BROWSER EXTENSION</span>
        <span className="t-source">OVER CLAUDE.AI · AT THE MOMENT OF THE ASK</span>
      </div>
    </div>
  );
}
