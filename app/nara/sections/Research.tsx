export function ResearchExperts() {
  const quotes = [
    {
      body: "If a human is making a decision, how does AI support play into that? A human can do a task well alone and AI can do it even better. But when an AI and human do a task together, it's worse.",
      name: "Jianna So",
      role: "human–AI interaction",
      initials: "JS",
      pull: false,
    },
    {
      body: "the companies are building them to be sticky. They're intentionally building them to hack the attachment system.",
      name: "Todd Essig",
      role: "clinical psychologist",
      initials: "TE",
      pull: true,
    },
    {
      body: "LLMs are based on their training whereas humans are pulling on their experience… LLMs are non-deterministic, probabilistic. Humans are non-deterministic equally. But humans have better intuition over associating concepts and tasks, especially when you bring in cultural contexts not studied for LLMs.",
      name: "Anthony Baez",
      role: "cognitive science",
      initials: "AB",
      pull: false,
    },
  ];

  return (
    <section id="research" className="nara-section nara-grid">
      <div className="nara-mark">05 · Research</div>
      <div className="nara-tag">Research</div>
      <div className="nara-header">
        <p className="nara-eyebrow">What the experts said</p>
        <h2 className="nara-title-mono nara-title--mono">What the experts said.</h2>
      </div>
      <div className="nara-grid-3" style={{ flex: 1, alignItems: "stretch" }}>
        {quotes.map((q) => (
          <article key={q.name} className="nara-quote">
            <div className="nara-quote__marks">&rdquo;</div>
            <p
              className="nara-quote__body"
              style={
                q.pull
                  ? {
                      fontSize: "clamp(20px, 1.9vw, 30px)",
                      fontWeight: 400,
                    }
                  : undefined
              }
            >
              {q.body}
            </p>
            <div className="nara-quote__attr">
              <div className="nara-quote__avatar">{q.initials}</div>
              <div className="nara-quote__attr-meta">
                <span className="nara-quote__name">{q.name}</span>
                <span className="nara-quote__role">{q.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ResearchIntervention() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">05a · Two intervention points</div>
      <div className="nara-tag">Research</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Two intervention points</p>
        <h2 className="nara-title-mono nara-title--mono">
          Add friction to reduce the loop. Provide an alternative loop.
        </h2>
      </div>
      <div className="nara-sysmap" style={{ flex: 1 }}>
        <div className="nara-sysmap__col">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.4vw, 22px)",
              color: "var(--slide-ink-3)",
              margin: 0,
              textAlign: "center",
            }}
          >
            Add friction to reduce the loop
          </p>
          <div className="nara-sysmap__node">LLM Input</div>
          <p className="nara-sysmap__edge-label">prompt ↓</p>
          <div className="nara-sysmap__node">LLM Reasoning</div>
          <p className="nara-sysmap__edge-label">sycophancy ↓</p>
          <div className="nara-sysmap__node">LLM Output</div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(12px, 1vw, 16px)",
              color: "var(--slide-ink-3)",
              margin: 0,
            }}
          >
            Vicious Cycle
          </p>
        </div>
        <div className="nara-sysmap__col">
          <div className="nara-sysmap__node nara-sysmap__node--dark">18–25 Young Adults</div>
          <div className="nara-sysmap__node">Capacity of unassisted thoughts</div>
          <div className="nara-sysmap__node">Social capacity</div>
        </div>
        <div className="nara-sysmap__col">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.4vw, 22px)",
              color: "var(--slide-ink-3)",
              margin: 0,
              textAlign: "center",
            }}
          >
            Provide an alternative loop
          </p>
          <div className="nara-sysmap__node">A Physical Device</div>
          <p className="nara-sysmap__edge-label">prompt ↓</p>
          <div className="nara-sysmap__node">Contextual Reasoning</div>
          <p className="nara-sysmap__edge-label">Glyph + Word ↓</p>
          <div className="nara-sysmap__node">Open to interpretation Output</div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(12px, 1vw, 16px)",
              color: "var(--slide-ink-3)",
              margin: 0,
            }}
          >
            Reflective Cycle
          </p>
        </div>
      </div>
    </section>
  );
}

export function ResearchTheories() {
  // Simplified alluvial — three columns with bands flowing left-to-right.
  // Uses native NaRa rendering instead of an SVG sankey to keep it tokens-only.
  const bands = [
    "Storytelling",
    "Provocation",
    "Future",
    "Absolute reference",
    "Social reference",
    "Ambiguity",
    "Conversations with technology",
    "Memories",
    "Conversations with others",
    "Reframing",
    "Slowness",
    "Past",
  ];
  const naraOutputs = ["Browser extension", "Anti-anthropomorphic", "Glyph", "Dynamic context", "Physical device"];

  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">05b · Theories</div>
      <div className="nara-tag">Research</div>
      <div className="nara-header">
        <p className="nara-eyebrow">The theories behind reflection</p>
        <h2 className="nara-title-mono nara-title--mono">The theories behind reflection.</h2>
      </div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr 1fr",
          gap: "3vw",
          alignItems: "stretch",
          border: "1.5px solid var(--slide-ink)",
          padding: "3vh 2vw",
          boxShadow: "8px 8px 0 0 var(--slide-ink)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center" }}>
          <p className="nara-eyebrow">Paper / app</p>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(16px, 1.4vw, 22px)",
              color: "var(--slide-ink)",
              lineHeight: 1.3,
            }}
          >
            theories of cognition
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(16px, 1.4vw, 22px)",
              color: "var(--slide-ink-3)",
              lineHeight: 1.3,
            }}
          >
            current market solutions
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            justifyContent: "center",
            borderLeft: "1px solid var(--slide-rule)",
            borderRight: "1px solid var(--slide-rule)",
            padding: "0 2vw",
          }}
        >
          <p className="nara-eyebrow" style={{ marginBottom: "1vh" }}>
            Design resources
          </p>
          {bands.map((b) => (
            <div
              key={b}
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--slide-ink)",
                padding: "4px 0",
                borderBottom: "1px solid var(--slide-rule)",
              }}
            >
              {b}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
          <p className="nara-eyebrow">NaRa</p>
          {naraOutputs.map((o) => (
            <div
              key={o}
              style={{
                background: "var(--slide-ink)",
                color: "var(--slide-bg)",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "8px 10px",
              }}
            >
              {o}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResearchSystemMap() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">05c · System map</div>
      <div className="nara-tag">Research</div>
      <div className="nara-header">
        <p className="nara-eyebrow">System map</p>
        <h2 className="nara-title">System Map</h2>
      </div>
      <div style={{ flex: 1, position: "relative", padding: "4vh 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr 1fr",
            gap: "2vw",
            alignItems: "center",
          }}
        >
          {/* Left vicious cycle */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh", alignItems: "center" }}>
            <div className="nara-sysmap__node">LLM Input</div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "13px",
                color: "var(--slide-ink-3)",
                margin: 0,
              }}
            >
              prompt ↓
            </p>
            <div className="nara-sysmap__node">LLM Reasoning</div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "13px",
                color: "var(--slide-ink-3)",
                margin: 0,
              }}
            >
              sycophancy ↓
            </p>
            <div className="nara-sysmap__node">LLM Output</div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "13px",
                color: "var(--slide-ink-3)",
                marginTop: "2vh",
              }}
            >
              vicious cycle ↻
            </p>
          </div>
          {/* Center user */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0", alignItems: "center" }}>
            <div className="nara-sysmap__node nara-sysmap__node--dark" style={{ minWidth: 240, padding: "20px" }}>
              18–25 Young Adults
            </div>
            <div className="nara-sysmap__node" style={{ minWidth: 240, padding: "20px" }}>
              Capacity of unassisted thoughts
            </div>
            <div className="nara-sysmap__node" style={{ minWidth: 240, padding: "20px" }}>
              Social capacity
            </div>
          </div>
          {/* Right reflective cycle */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh", alignItems: "center" }}>
            <div className="nara-sysmap__node">A Physical Device</div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "13px",
                color: "var(--slide-ink-3)",
                margin: 0,
              }}
            >
              prompt ↓
            </p>
            <div className="nara-sysmap__node">Contextual Reasoning</div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "13px",
                color: "var(--slide-ink-3)",
                margin: 0,
              }}
            >
              glyph + word ↓
            </p>
            <div className="nara-sysmap__node">Open to interpretation Output</div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "13px",
                color: "var(--slide-ink-3)",
                marginTop: "2vh",
              }}
            >
              reflective cycle ↺
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: "4vh",
            paddingTop: "3vh",
            borderTop: "1px solid var(--slide-rule)",
            display: "flex",
            justifyContent: "space-between",
            gap: "3vw",
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--slide-ink)",
          }}
        >
          <span>Path of resistance → friction</span>
          <span>NaRa Browser Extension · adds friction at both ends</span>
          <span>Path of least resistance → reflection</span>
        </div>
      </div>
    </section>
  );
}
