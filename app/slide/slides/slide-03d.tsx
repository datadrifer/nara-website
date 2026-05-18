export default function Slide03d() {
  return (
    <div className="slide-frame" style={{ padding: 0 }}>
      {/* Stage — the mocked Claude.ai app, plus the intervention overlay */}
      <div className="mock-stage">
        <div className="mock-app" aria-label="Claude.ai (mock)">
          {/* Browser chrome */}
          <div className="mock-app__chrome">
            <span className="mock-app__dots" aria-hidden>
              <span className="mock-app__dot" />
              <span className="mock-app__dot" />
              <span className="mock-app__dot" />
            </span>
            <span className="mock-app__url">CLAUDE.AI / NEW</span>
            <span style={{ minWidth: 60, textAlign: "right" }}>CLAUDE</span>
          </div>

          {/* App body — greeting + muted composer */}
          <div className="mock-app__body">
            <h2 className="mock-app__greeting">Good evening.</h2>

            <div className="mock-app__composer" aria-label="Prompt composer">
              <div className="composer__input">
                am I overreacting about
                <span className="t-prompt__cursor" aria-hidden />
              </div>
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
                  Claude Sonnet 4.6 <span aria-hidden>↓</span>
                </span>
                <span className="composer__send" aria-label="Send">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                  >
                    <line
                      x1="7"
                      y1="12"
                      x2="7"
                      y2="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <polyline
                      points="2,7 7,2 12,7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      fill="none"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Intervention panel — slid down over the app */}
        <aside className="intervention" aria-label="NaRa intervention">
          <div className="intervention__meta">
            <span>☑ NARA · BROWSER EXTENSION</span>
            <span className="intervention__meta-right">23:47</span>
          </div>
          <div className="intervention__rule" />
          <p className="intervention__cta">
            Consult NaRa instead.
            <span className="intervention__arrow" aria-hidden>
              →
            </span>
          </p>
        </aside>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between", padding: "14px 56px" }}
      >
        <span className="t-caption">INTERVENTION · THE PIVOT</span>
        <span className="t-source">☑ NARA · BROWSER EXTENSION</span>
      </div>
    </div>
  );
}
