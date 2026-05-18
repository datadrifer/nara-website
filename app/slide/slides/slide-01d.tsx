export default function Slide01d() {
  return (
    <div className="slide-frame">
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10vh",
          paddingTop: "6vh",
          paddingBottom: "6vh",
        }}
      >
        {/* Composer — NaRa tokens for type/color/shape, ChatGPT label for recognition */}
        <div className="composer" aria-label="Prompt composer">
          <div className="composer__input">am I overreacting about</div>
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
              ChatGPT 5.2 <span aria-hidden>↓</span>
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

        {/* NaRa's answer — pixel face, no trailing ellipsis */}
        <h1 className="t-statement t-statement--pixel">
          We are outsourcing our minds, one prompt at a time
        </h1>
      </div>
    </div>
  );
}
