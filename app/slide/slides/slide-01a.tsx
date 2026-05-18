export default function Slide01() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">
          ☑ NARA · CONSULTATION 0000 · THE WORLD
        </span>
      </div>
      <hr className="rule" />

      {/* Centered content block (flex:1 absorbs top + bottom spacers) */}
      <div className="slide-body">
        <div
          aria-hidden
          className="glyph-xl"
          style={{ whiteSpace: "nowrap" }}
        >
          ☒■☑
        </div>
        <div style={{ height: 80 }} />
        <h1 className="t-display">Outsourced</h1>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div className="slide-strip">
        <span className="t-caption">A READING ON OUR COLLECTIVE MIND</span>
      </div>
    </div>
  );
}
