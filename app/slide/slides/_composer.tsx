interface ComposerProps {
  input: string;
  model?: string;
  showCursor?: boolean;
}

/**
 * Shared composer mock used by multiple intervention slides.
 * Full NaRa DS — PP NeueBit, token borders, square corners.
 */
export function Composer({
  input,
  model = "Claude Sonnet 4.6",
  showCursor = true,
}: ComposerProps) {
  return (
    <div className="composer" aria-label="Prompt composer">
      <div className="composer__input">
        {input}
        {showCursor && <span className="t-prompt__cursor" aria-hidden />}
      </div>
      <div className="composer__row">
        <span className="composer__btn" aria-label="Attach">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.5" />
            <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
        <span className="composer__btn" aria-label="Tools">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
            <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.3" fill="none" />
            <line x1="6" y1="4" x2="15" y2="4" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="11" cy="10" r="2" stroke="currentColor" strokeWidth="1.3" fill="none" />
            <line x1="1" y1="10" x2="9" y2="10" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </span>
        <div className="composer__spacer" />
        <span className="composer__model">
          {model} <span aria-hidden>↓</span>
        </span>
        <span className="composer__send" aria-label="Send">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <line x1="7" y1="12" x2="7" y2="2" stroke="currentColor" strokeWidth="1.6" />
            <polyline points="2,7 7,2 12,7" stroke="currentColor" strokeWidth="1.6" fill="none" />
          </svg>
        </span>
      </div>
    </div>
  );
}
