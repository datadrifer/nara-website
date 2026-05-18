export function DesignCover() {
  return (
    <section id="design" className="nara-section nara-section--dark">
      <div className="nara-mark" style={{ color: "rgba(255,255,255,0.54)" }}>
        06 · The design moves
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2
          className="nara-title"
          style={{
            color: "var(--slide-bg)",
            fontSize: "clamp(60px, 9vw, 160px)",
            textAlign: "center",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.04)",
              filter: "blur(40px)",
              zIndex: -1,
            }}
          />
          the design moves
        </h2>
      </div>
    </section>
  );
}

export function DesignCommitments() {
  const commitments = [
    { num: "01", name: "Restraint" },
    { num: "02", name: "Open to interpretation" },
    { num: "03", name: "Non-Randomized and Relevant" },
    { num: "04", name: "Friction" },
  ];
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">06a · Commitments</div>
      <div className="nara-tag">Design moves</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Four commitments</p>
        <h2 className="nara-title-mono nara-title--mono">Four commitments.</h2>
      </div>
      <div className="nara-commit" style={{ flex: 1 }}>
        {commitments.map((c) => (
          <div key={c.num} className="nara-commit__row">
            <span className="nara-commit__num">{c.num}</span>
            <h3 className="nara-commit__name">{c.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DesignGlyphs() {
  // 22 deck glyphs rendered as native NaRa typographic glyphs.
  // Spec from CLAUDE.md vocabulary; matches the 22-glyph inventory cited in the deck.
  const glyphs = [
    "◇", "✦", "✧", "◯", "○", "●", "■",
    "□", "◆", "▲", "◉", "◌", "☑", "☒",
    "↑", "↓", "→", "←", "+", "−", "░", "▓",
  ];
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">06b · Glyph + word</div>
      <div className="nara-tag">Design moves</div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "5vw",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4vh" }}>
          <h2 className="nara-title-mono nara-title--mono">3 Glyphs + 1 word</h2>
          <div
            style={{
              border: "1.5px solid var(--slide-ink)",
              padding: "3vh 2vw",
              boxShadow: "8px 8px 0 0 var(--slide-ink)",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
              maxWidth: 280,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "var(--slide-ink)",
              }}
            >
              <span>○</span>
              <span>+</span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4.5vw, 64px)",
                letterSpacing: "0.18em",
                lineHeight: 1,
                color: "var(--slide-ink)",
                textAlign: "center",
              }}
            >
              ✧ ◯ ☑
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20px, 2vw, 32px)",
                color: "var(--slide-ink)",
                textAlign: "center",
                margin: 0,
              }}
            >
              Now
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div className="nara-glyphs">
            {glyphs.map((g, i) => (
              <div key={i} className="nara-glyphs__cell">
                {g}
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(14px, 1.2vw, 18px)",
              color: "var(--slide-ink-3)",
              margin: 0,
              maxWidth: "60ch",
            }}
          >
            Each glyph possesses multiple meanings — the interpretation is yours to complete. Ambiguity is the feature.
          </p>
        </div>
      </div>
    </section>
  );
}
