export default function Slide03g() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">INTERVENTION · THE PIVOT</span>
      </div>
      <hr className="rule" />

      {/* Hijacked composer — identical shape, different payload */}
      <div className="hijack">
        <div className="composer" aria-label="Consultation composer">
          <div className="composer__input">Consult NaRa instead.</div>
          <div className="composer__row">
            <span className="composer__btn" aria-label="Attach">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <line
                  x1="7"
                  y1="1"
                  x2="7"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="1"
                  y1="7"
                  x2="13"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <span className="composer__btn" aria-label="Tools">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  fill="none"
                />
                <line
                  x1="6"
                  y1="4"
                  x2="15"
                  y2="4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <circle
                  cx="11"
                  cy="10"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  fill="none"
                />
                <line
                  x1="1"
                  y1="10"
                  x2="9"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
            </span>
            <div className="composer__spacer" />
            <span className="composer__model">
              NARA <span aria-hidden>↓</span>
            </span>
            <span className="composer__send" aria-label="Send">
              ☑
            </span>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">INTERVENTION · THE PIVOT</span>
        <span className="t-source">BROWSER EXTENSION · OVER CLAUDE.AI</span>
      </div>
    </div>
  );
}
