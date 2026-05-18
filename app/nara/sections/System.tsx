export function SystemTimescales() {
  const tier1 = ["USER QUERY", "ENV ACOUSTICS", "TRANSCRIPTION", "TONE ANALYSIS", "MOTION DATA"];
  const tiers = [
    { num: "Tier 1", label: "Signals", dark: true },
    { num: "Tier 2", label: "Daily Digest", dark: false },
    { num: "Tier 3", label: "Weekly Pattern", dark: false },
    { num: "Tier 4", label: "Temporal Understanding", dark: false },
  ];
  const right = ["NARRATIVE", "WORD PICKER", "GLYPH ENGINE", "GLYPH PICKER", "LLM REASONING"];

  return (
    <section id="system" className="nara-section nara-grid">
      <div className="nara-mark">07 · System</div>
      <div className="nara-tag">System</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Four timescales of knowing</p>
        <h2 className="nara-title-mono nara-title--mono">Four timescales of knowing.</h2>
      </div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr 1fr",
          gap: "3vw",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          {tier1.map((t) => (
            <div key={t} className="nara-sysmap__node" style={{ minWidth: 0 }}>
              {t}
            </div>
          ))}
        </div>
        <div
          style={{
            border: "1.5px solid var(--slide-ink)",
            boxShadow: "8px 8px 0 0 var(--slide-ink)",
            background: "var(--slide-bg)",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1.5px solid var(--slide-ink)",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--slide-ink)",
            }}
          >
            AGGREGATOR
          </div>
          {tiers.map((t, i) => (
            <div
              key={t.num}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "18px 20px",
                background: t.dark ? "var(--slide-ink)" : "var(--slide-bg)",
                color: t.dark ? "var(--slide-bg)" : "var(--slide-ink)",
                borderBottom:
                  i < tiers.length - 1 ? "1.5px solid var(--slide-ink)" : "none",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              <span>{t.num}</span>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          {right.map((t) => (
            <div key={t} className="nara-sysmap__node" style={{ minWidth: 0 }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SystemEcosystem() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">07a · Ecosystem</div>
      <div className="nara-tag">System</div>
      <div className="nara-header" style={{ alignItems: "center", textAlign: "center", margin: "0 auto 4vh" }}>
        <h2 className="nara-title" style={{ textAlign: "center" }}>
          The Ecosystem
        </h2>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--slide-ink-3)",
          }}
        >
          A single loop across physical and digital contexts
        </p>
      </div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "3vw",
          alignItems: "center",
          paddingTop: "4vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
          <div className="nara-sysmap__node" style={{ minWidth: 220 }}>NaRa Browser Extension</div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(14px, 1.2vw, 18px)",
              color: "var(--slide-ink-3)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Reads context → outputs glyphs
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: 20,
              color: "var(--slide-ink)",
            }}
          >
            ↔
          </span>
          <div
            className="nara-sysmap__node"
            style={{ minWidth: 220, padding: "20px", textAlign: "center" }}
          >
            Dynamic User Context Layer
          </div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(14px, 1.2vw, 18px)",
              color: "var(--slide-ink-3)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Stores + translates personal baseline
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
          <div className="nara-sysmap__node" style={{ minWidth: 220 }}>NaRa Device</div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(14px, 1.2vw, 18px)",
              color: "var(--slide-ink-3)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Intercepts + reframes LLM interaction
          </p>
        </div>
      </div>
    </section>
  );
}

export function SystemPhysical() {
  const left = [
    ["E-INK 200×200, 1-bit", ""],
    ["POTENTIOMETER 5-zone dial", ""],
    ["BUTTON single intent", ""],
    ["MIC ambient — YAMNet", ""],
  ];
  const right = [
    ["HAPTIC double-pulse notify", ""],
    ["ESP32 wifi + ble", ""],
    ["BATTERY 7-day target", ""],
    ["LANYARD bag-charm form", ""],
  ];
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">07b · Physical</div>
      <div className="nara-tag">System</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Physical infrastructure</p>
        <h2 className="nara-title-mono nara-title--mono">Physical Infrastructure</h2>
      </div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr 1fr",
          gap: "3vw",
          alignItems: "center",
          border: "1.5px solid var(--slide-ink)",
          boxShadow: "8px 8px 0 0 var(--slide-ink)",
          padding: "4vh 3vw",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "3vh",
            textAlign: "right",
          }}
        >
          {left.map(([label]) => (
            <li
              key={label}
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.12em",
                color: "var(--slide-ink)",
                paddingRight: "12px",
                borderRight: "1.5px solid var(--slide-ink)",
              }}
            >
              {label}
            </li>
          ))}
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 240,
              aspectRatio: "3 / 4",
              border: "1.5px solid var(--slide-ink)",
              background: "var(--slide-bg)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.14em",
              color: "var(--slide-ink-3)",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "55%",
                border: "1.5px solid var(--slide-ink-3)",
                background:
                  "repeating-linear-gradient(45deg, var(--slide-ink-3) 0 1px, transparent 1px 6px)",
                opacity: 0.4,
              }}
            />
            <span>device · pcb</span>
          </div>
        </div>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "3vh",
          }}
        >
          {right.map(([label]) => (
            <li
              key={label}
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.12em",
                color: "var(--slide-ink)",
                paddingLeft: "12px",
                borderLeft: "1.5px solid var(--slide-ink)",
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SystemMediation() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">07c · Mediation</div>
      <div className="nara-tag">System</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Mediation at both ends</p>
        <h2 className="nara-title-mono nara-title--mono">Mediation at both ends.</h2>
        <p className="nara-prose">
          Not everything gets filtered — only the <u>harmful</u> ones.
        </p>
      </div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4vw",
          alignItems: "stretch",
        }}
      >
        {/* Left: simulated NaRa-style intervention card */}
        <div
          style={{
            border: "1.5px solid var(--slide-ink)",
            boxShadow: "8px 8px 0 0 var(--slide-ink)",
            padding: "4vh 3vw",
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
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
              textTransform: "uppercase",
              color: "var(--slide-ink)",
              paddingBottom: "1.5vh",
              borderBottom: "1px solid var(--slide-ink)",
            }}
          >
            <span>NARA</span>
            <span>○ PERSONAL</span>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 2.4vw, 36px)",
              lineHeight: 1.05,
              color: "var(--slide-ink)",
              margin: 0,
            }}
          >
            This looks personal. Would you like to talk to Nara instead?
          </h3>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: 12,
              lineHeight: 1.4,
              color: "var(--slide-ink-3)",
              margin: 0,
            }}
          >
            Nara can help interrupt negative-emotion or personal-topic messages before they are sent to an AI chatbot.
          </p>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 18,
              color: "var(--slide-ink-3)",
              fontStyle: "italic",
            }}
          >
            &ldquo;I am really sad&rdquo;
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              paddingTop: "2vh",
              borderTop: "1px dashed var(--slide-ink)",
            }}
          >
            <button
              style={{
                border: "1px dashed var(--slide-ink-3)",
                background: "transparent",
                padding: "12px",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--slide-ink-3)",
              }}
            >
              Continue to chatbot
            </button>
            <button
              style={{
                background: "var(--slide-ink)",
                color: "var(--slide-bg)",
                padding: "12px",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                border: "1px solid var(--slide-ink)",
              }}
            >
              Talk to NaRa
            </button>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div
            style={{
              border: "1.5px solid var(--slide-ink)",
              padding: "3vh 2vw",
              display: "flex",
              flexDirection: "column",
              gap: "1.5vh",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--slide-ink-3)",
                margin: 0,
              }}
            >
              Design choice · Input side
            </p>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "clamp(20px, 2vw, 32px)",
                letterSpacing: "0.02em",
                color: "var(--slide-ink)",
                margin: 0,
              }}
            >
              Classify before send.
            </h4>
            <p className="nara-prose" style={{ fontSize: 14 }}>
              Personal / emotional / offloading prompts are held. User is asked: &ldquo;talk to NaRa instead?&rdquo; — a{" "}
              <b>chance to redirect</b>, not a block.
            </p>
          </div>
          <div
            style={{
              border: "1.5px solid var(--slide-ink)",
              padding: "3vh 2vw",
              display: "flex",
              flexDirection: "column",
              gap: "1.5vh",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--slide-ink-3)",
                margin: 0,
              }}
            >
              Design choice · Output side
            </p>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "clamp(20px, 2vw, 32px)",
                letterSpacing: "0.02em",
                color: "var(--slide-ink)",
                margin: 0,
              }}
            >
              Flag the affirmation.
            </h4>
            <p className="nara-prose" style={{ fontSize: 14 }}>
              Blind &ldquo;you&apos;re right&rdquo; responses are marked before they land. Testing showed users{" "}
              <b>want to know</b> when the AI is agreeing reflexively.
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--slide-ink-3)",
              margin: 0,
            }}
          >
            two harms · two entry points · one filter at each
          </p>
        </div>
      </div>
    </section>
  );
}
