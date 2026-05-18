export function PolicyRings() {
  return (
    <section id="policy" className="nara-section nara-grid">
      <div className="nara-mark">09 · Policy</div>
      <div className="nara-tag">Policy</div>
      <div className="nara-header">
        <p className="nara-eyebrow">From product to policy</p>
        <h2 className="nara-title-mono nara-title--mono">From product to policy.</h2>
      </div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "5vw",
          alignItems: "center",
        }}
      >
        {/* Concentric rings — typographic */}
        <div
          style={{
            position: "relative",
            aspectRatio: "1 / 1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[420, 280, 140].map((size, i) => (
            <div
              key={size}
              style={{
                position: "absolute",
                width: size,
                height: size,
                maxWidth: `${85 - i * 25}%`,
                maxHeight: `${85 - i * 25}%`,
                border: "1.5px solid var(--slide-ink)",
                borderRadius: "50%",
                background: i === 2 ? "var(--slide-ink)" : "transparent",
                color: i === 2 ? "var(--slide-bg)" : "var(--slide-ink)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: 14,
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {i === 0 && "03 · Infrastructural"}
              {i === 1 && "02 · Institutional"}
              {i === 2 && (
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    letterSpacing: "0.02em",
                    textTransform: "none",
                    marginTop: 4,
                  }}
                >
                  NaRa
                </span>
              )}
            </div>
          ))}
        </div>
        {/* Three explainer cards stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <article
            style={{
              background: "var(--slide-ink)",
              color: "var(--slide-bg)",
              padding: "3vh 2.5vw",
              border: "1.5px solid var(--slide-ink)",
              boxShadow: "8px 8px 0 0 var(--slide-ink)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "2vw",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 48,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                01
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    margin: 0,
                    marginBottom: 6,
                    opacity: 0.7,
                  }}
                >
                  Individual
                </p>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.2vw, 32px)",
                    margin: 0,
                    marginBottom: 8,
                  }}
                >
                  Nara.
                </h4>
                <p style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 12, lineHeight: 1.4, margin: 0 }}>
                  The product. The proof of concept. One person, one charm, one question at a time.
                </p>
              </div>
            </div>
          </article>
          <article
            style={{
              padding: "3vh 2.5vw",
              border: "1.5px solid var(--slide-ink)",
              boxShadow: "8px 8px 0 0 var(--slide-ink)",
            }}
          >
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 48, lineHeight: 1, flexShrink: 0 }}>02</span>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    margin: 0,
                    marginBottom: 6,
                    color: "var(--slide-ink-3)",
                  }}
                >
                  Institutional
                </p>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.2vw, 32px)",
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  Adoption.
                </h4>
                <dl
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: "6px 16px",
                    margin: 0,
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: 11,
                    lineHeight: 1.4,
                  }}
                >
                  <dt style={{ color: "var(--slide-ink)" }}>Schools</dt>
                  <dd style={{ margin: 0, color: "var(--slide-ink)" }}>
                    require restrained AI consultation before LLM access.
                  </dd>
                  <dt style={{ color: "var(--slide-ink)" }}>Clinics</dt>
                  <dd style={{ margin: 0, color: "var(--slide-ink)" }}>
                    mandate a physiological check-in before algorithmic recommendation.
                  </dd>
                  <dt style={{ color: "var(--slide-ink)" }}>Workplaces</dt>
                  <dd style={{ margin: 0, color: "var(--slide-ink)" }}>
                    build restraint into high-judgment decision workflows.
                  </dd>
                </dl>
              </div>
            </div>
          </article>
          <article
            style={{
              padding: "3vh 2.5vw",
              border: "1.5px solid var(--slide-ink)",
              boxShadow: "8px 8px 0 0 var(--slide-ink)",
            }}
          >
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 48, lineHeight: 1, flexShrink: 0 }}>03</span>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    margin: 0,
                    marginBottom: 6,
                    color: "var(--slide-ink-3)",
                  }}
                >
                  Infrastructural
                </p>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.2vw, 32px)",
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  Policy.
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: 11,
                    lineHeight: 1.4,
                  }}
                >
                  <li>
                    <b style={{ background: "var(--slide-ink)", color: "var(--slide-bg)", padding: "0 4px" }}>
                      Regulation
                    </b>{" "}
                    requires restraint intervals in high-engagement AI systems.
                  </li>
                  <li>
                    <b style={{ background: "var(--slide-ink)", color: "var(--slide-bg)", padding: "0 4px" }}>
                      Public programmes
                    </b>{" "}
                    grounded in cognitive sovereignty, not technical literacy.
                  </li>
                  <li>
                    <b style={{ background: "var(--slide-ink)", color: "var(--slide-bg)", padding: "0 4px" }}>
                      Disclosure
                    </b>{" "}
                    requirements analogous to nutritional labelling.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function PolicyMyFirstAI() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">09a · My first AI</div>
      <div className="nara-tag">Policy</div>
      <div className="nara-header">
        <p className="nara-eyebrow">— 2035 —</p>
        <h2 className="nara-title">My first AI.</h2>
        <p className="nara-prose">
          AI awareness from <u>day one</u>. The way a generation grew up with PSA archives like &ldquo;Say No To Drugs&rdquo;
          and &ldquo;Stop Bullying&rdquo;, the next will grow up holding a NaRa.
        </p>
      </div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "2vw",
          alignItems: "stretch",
        }}
      >
        {["Say No To Drugs", "Stop Bullying", "My First AI", "Think Authentically"].map((label, i) => (
          <div key={label} className="nara-plate" style={{ aspectRatio: "3 / 4", position: "relative" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                background: i < 2
                  ? "repeating-linear-gradient(45deg, var(--slide-ink) 0 4px, transparent 4px 14px)"
                  : "var(--slide-bg)",
                opacity: i < 2 ? 0.55 : 1,
                display: "flex",
                alignItems: "flex-end",
                padding: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: i < 2 ? "var(--slide-bg)" : "var(--slide-ink)",
                  background: i < 2 ? "var(--slide-ink)" : "transparent",
                  padding: i < 2 ? "4px 8px" : 0,
                }}
              >
                {label}
              </span>
            </div>
            <div className="nara-plate__caption">PSA · archive</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PolicyNewNature() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">09b · New nature</div>
      <div className="nara-tag">Outro</div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5vh",
          textAlign: "center",
        }}
      >
        <h2 className="nara-title" style={{ maxWidth: "22ch" }}>
          Offloading your thinking, getting validated by a machine — became the new nature.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: "clamp(13px, 1.1vw, 16px)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--slide-ink)",
            margin: 0,
            display: "inline-flex",
            gap: "1.5vw",
            alignItems: "center",
          }}
        >
          <span>New nature</span>
          <span>→</span>
          <span>Redirected behaviour</span>
          <span>→</span>
          <span>Generative repair</span>
        </p>
      </div>
    </section>
  );
}

export function PolicyIsIsnt() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">09c · What it is</div>
      <div className="nara-tag">Definition</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Definition</p>
        <h2 className="nara-title-mono nara-title--mono">What NaRa is, what it isn&apos;t.</h2>
      </div>
      <div className="nara-isnt" style={{ flex: 1 }}>
        <div className="nara-isnt__col">
          <div className="nara-isnt__head">
            <span className="nara-isnt__tag">IS</span>
            <h3 className="nara-isnt__title">NaRa is.</h3>
          </div>
          <div className="nara-isnt__item">
            <span className="nara-isnt__num">01</span>
            <p className="nara-isnt__text">
              A <b style={{ background: "var(--slide-ink)", color: "var(--slide-bg)", padding: "0 4px" }}>friction system</b>{" "}
              for AI interactions.
            </p>
          </div>
          <div className="nara-isnt__item">
            <span className="nara-isnt__num">02</span>
            <p className="nara-isnt__text">
              An integration of <b style={{ background: "var(--slide-ink)", color: "var(--slide-bg)", padding: "0 4px" }}>reflection theory</b>{" "}
              into one object.
            </p>
          </div>
          <div className="nara-isnt__item">
            <span className="nara-isnt__num">03</span>
            <p className="nara-isnt__text">
              A mitigation. Deliberately{" "}
              <b style={{ background: "var(--slide-ink)", color: "var(--slide-bg)", padding: "0 4px" }}>modest</b> in scope.
            </p>
          </div>
        </div>
        <div className="nara-isnt__rule" />
        <div className="nara-isnt__col">
          <div className="nara-isnt__head">
            <span className="nara-isnt__tag">IS NOT</span>
            <h3 className="nara-isnt__title">NaRa isn&apos;t.</h3>
          </div>
          <div className="nara-isnt__item">
            <span className="nara-isnt__num">01</span>
            <p className="nara-isnt__text nara-isnt__text--strike">A replacement for the assistant chatbot, model, or reasoning service.</p>
          </div>
          <div className="nara-isnt__item">
            <span className="nara-isnt__num">02</span>
            <p className="nara-isnt__text nara-isnt__text--strike">A therapist, a friend, or a companion.</p>
          </div>
          <div className="nara-isnt__item">
            <span className="nara-isnt__num">03</span>
            <p className="nara-isnt__text nara-isnt__text--strike">A surveillance device. No speech is captured.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PolicyFinal() {
  return (
    <section className="nara-section">
      <div className="nara-mark">10 · think authentically, again</div>
      <div className="nara-final">
        <h2 className="nara-final__mark">
          <span style={{ position: "relative" }}>
            <sup
              style={{ fontSize: "0.18em", position: "absolute", top: "0.1em", left: "-0.18em", color: "var(--slide-ink)" }}
            >
              ✦
            </sup>
            NaRa
            <sup
              style={{ fontSize: "0.18em", position: "absolute", top: "0.1em", right: "-0.18em", color: "var(--slide-ink)" }}
            >
              ✦
            </sup>
          </span>
        </h2>
        <p className="nara-final__tag">think authentically, again</p>
      </div>
    </section>
  );
}

export function PolicyReferences() {
  const refs = [
    "Gladwell, Malcolm. Blink: The Power of Thinking Without Thinking. Little, Brown and Company, 2005.",
    "Gigerenzer, Gerd. Gut Feelings: The Intelligence of the Unconscious. Viking, 2007.",
    "Gordon, Deborah M. Ant Encounters: Interaction Networks and Colony Behavior. Princeton UP, 2010.",
    "Zuboff, Shoshana. The Age of Surveillance Capitalism. PublicAffairs, 2019.",
    "Muller, Jerry Z. The Tyranny of Metrics. Princeton UP, 2018.",
    "Shannon, Claude E. \"A Mathematical Theory of Communication.\" Bell System Technical Journal, vol. 27, no. 3, 1948, pp. 379–423.",
    "Schrage, Michael, and David Kiron. \"Intelligent Choices Reshape Decision-Making and Productivity.\" MIT Sloan Management Review, 29 Oct. 2024.",
    "Schrage, Michael, and David Kiron. \"The Great Power Shift: How Intelligent Choice Architectures Rewrite Decision Rights.\" MIT Sloan Management Review, 28 Jan. 2025.",
    "Rhodes, Jean. \"The Invisible Digital Companion.\" Chronicle of Evidence-Based Mentoring, 13 Jan. 2026.",
    "Tufekci, Zeynep. \"Opinion: AI Is Going to Make Our Social Skills Worse.\" The New York Times, 30 Jan. 2026.",
    "Cheng, Myra, et al. \"Sycophantic AI Decreases Prosocial Intentions and Promotes Dependence.\" arXiv, 1 Oct. 2025.",
    "Shelmerdine, Susan, and Matthew Nour. \"Emotional Risks of AI Companions Demand Attention.\" Nature Machine Intelligence, vol. 7, 22 July 2025, pp. 981–982.",
    "Fang, Cathy Mengying, et al. \"How AI and Human Behaviors Shape Psychosocial Effects of Extended Chatbot Use.\" arXiv, 21 Mar. 2025.",
    "Liu, Auren R., et al. \"Chatbot Companionship: A Mixed-Methods Study.\" MIT Media Lab, 2025.",
    "Russell, Daniel W., et al. \"The Revised UCLA Loneliness Scale.\" Journal of Personality and Social Psychology, vol. 39, no. 3, 1980, pp. 472–480.",
    "Raison, Lauren, et al. \"The 'Machinal Bypass' and How We're Using AI to Avoid Ourselves.\" PNAS, vol. 122, no. 51, 17 Dec. 2025.",
    "Karusala, Naveena, et al. \"Understanding Contestability on the Margins.\" NSF Public Access Repository, 2024.",
    "Hofer, G. Tarot Cards: An Investigation of Their Benefit as a Tool for Self-Reflection. MA thesis, U Victoria, 2009.",
    "McAdams, D. P. The Stories We Live By. 1993.",
    "Clark, A. \"Whatever next? Predictive brains, situated agents, and the future of cognitive science.\" Behavioral and Brain Sciences, 2013.",
    "Kahneman, D. Thinking, Fast and Slow. Farrar, Straus and Giroux, 2011.",
    "Bentvelzen, Marit, et al. \"Revisiting Reflection in HCI: Four Design Resources for Technologies that Support Reflection.\" Proc. ACM IMWUT, vol. 6, no. 1, 2022.",
    "Kosmyna, Nataliya, et al. \"Your Brain on Assistant Chatbots: Accumulation of Cognitive Debt When Using an AI Assistant for Essay Writing Task.\" arXiv, 10 June 2025.",
    "Lee, Hao-Ping (Hank), et al. \"The Impact of Generative AI on Critical Thinking.\" CHI '25, ACM, 2025.",
    "Risko, Evan F., and Sam J. Gilbert. \"Cognitive Offloading.\" Trends in Cognitive Sciences, vol. 20, no. 9, Sept. 2016, pp. 676–688.",
  ];
  return (
    <section id="references" className="nara-section nara-grid">
      <div className="nara-mark">Appendix · References</div>
      <div className="nara-tag">Appendix</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Appendix</p>
        <h2 className="nara-title-mono nara-title--mono">References</h2>
      </div>
      <div className="nara-refs">
        {refs.map((r, i) => (
          <div key={i} className="nara-refs__item">
            <span>[{String(i + 1).padStart(2, "0")}]</span> {r}
          </div>
        ))}
      </div>
    </section>
  );
}
