// U+FE0E text variation selector — forces text presentation over emoji defaults
const VS = "\uFE0E";

// 22 glyphs. Replaced ⚡ → ♦ (PP fonts have no lightning bolt; ♦ exists in both
// and reads as kinetic / charged mass next to ♡).
const inventory = [
  "☼", "☾", "☀", "☁", "♦", "☕", "♡", "♖", "♟", "♪", "✨",
  "☂", "☹", "☺", "♻", "⚖", "⚗", "⛅", "∞", "↑", "↓", "♺",
];

// Three chosen glyphs match the live consultation from slides 4a / 5a
const chosen = new Set(["☁", "☕", "♡"]);

export default function Slide09a() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">COMMITMENT 03 · ANSWER AS AMBIGUITY</span>
      </div>
      <hr className="rule" />

      {/* Body */}
      <div className="inventory">
        <h1 className="inventory__headline">
          Twenty-two glyphs. Three chosen. One word.
        </h1>

        <div className="inventory__grid" aria-label="Glyph inventory">
          {inventory.map((g, i) => {
            const isChosen = chosen.has(g);
            return (
              <div
                key={`${g}-${i}`}
                className={`inventory__cell${isChosen ? " inventory__cell--chosen" : ""}`}
                aria-hidden
              >
                {g}
                {VS}
              </div>
            );
          })}
        </div>

        <div className="inventory__footer">
          <p className="inventory__support">The constraint is the point.</p>
          <div className="inventory__reading" aria-label="Reading">
            <span className="inventory__reading-glyphs" aria-hidden>
              ☁{VS}  ☕{VS}  ♡{VS}
            </span>
            <span className="inventory__reading-arrow" aria-hidden>→</span>
            <span className="inventory__reading-word">Settling</span>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · THE GRAMMAR</span>
        <span className="t-source">22 GLYPHS · STATIC INVENTORY</span>
      </div>
    </div>
  );
}
