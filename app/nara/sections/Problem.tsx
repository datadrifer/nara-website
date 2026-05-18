export function ProblemIntro() {
  return (
    <section id="problem" className="nara-section nara-grid">
      <div className="nara-mark">02 · The problem</div>
      <div className="nara-tag">The problem</div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "3vh",
        }}
      >
        <h2 className="nara-title" style={{ maxWidth: "18ch" }}>
          If Anyone Builds it
          <br />
          Everyone Dies.
        </h2>
        <p className="nara-eyebrow" style={{ paddingTop: "3vh" }}>
          — Yudkowsky &amp; Soares · 2025 —
        </p>
      </div>
    </section>
  );
}

export function ProblemTimeline() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">02a · Timeline</div>
      <div className="nara-tag">The problem</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Pattern</p>
        <h2 className="nara-title-mono nara-title--mono">
          Three technologies. Three response curves.
        </h2>
      </div>
      <div className="nara-timeline">
        <div className="nara-timeline__row">
          <div className="nara-timeline__head">
            <h3 className="nara-timeline__name">Cigarettes</h3>
            <p className="nara-timeline__span">40 years</p>
          </div>
          <div className="nara-timeline__rail">
            <span className="nara-timeline__rail-mid" />
          </div>
          <div className="nara-timeline__beats">
            <span>Adopted broadly 1950s</span>
            <span>First Surgeon General&apos;s report: January 11, 1964</span>
            <span>UK ban 2007</span>
          </div>
        </div>
        <div className="nara-timeline__row">
          <div className="nara-timeline__head">
            <h3 className="nara-timeline__name">Social Media</h3>
            <p className="nara-timeline__span">13 years</p>
          </div>
          <div className="nara-timeline__rail">
            <span className="nara-timeline__rail-mid" />
          </div>
          <div className="nara-timeline__beats">
            <span>Mass adoption 2010</span>
            <span>Facebook, Instagram, Twitter reaching scale 2012</span>
            <span>Surgeon General&apos;s advisory: May 23, 2023</span>
          </div>
        </div>
        <div className="nara-timeline__row">
          <div className="nara-timeline__head">
            <h3 className="nara-timeline__name">Artificial Intelligence</h3>
            <p className="nara-timeline__span nara-timeline__span--unknown">?</p>
          </div>
          <div className="nara-timeline__rail nara-timeline__rail--dashed">
            <span className="nara-timeline__rail-mid" />
          </div>
          <div className="nara-timeline__beats">
            <span>Mass adoption: 2022–2023</span>
            <span>Assistant chatbot reaching 100 million users 2023</span>
            <span>Surgeon General&apos;s advisory?</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProblemStats() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">02b · Evidence</div>
      <div className="nara-tag">The problem</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Evidence</p>
        <h2 className="nara-title-mono nara-title--mono">Measured, not asserted.</h2>
      </div>
      <div className="nara-grid-2" style={{ flex: 1, alignItems: "stretch" }}>
        <article className="nara-card">
          <p className="nara-card__eyebrow">Cognitive offloading</p>
          <h3 className="nara-card__stat">
            78<sup>%</sup>
          </h3>
          <p className="nara-card__body">
            of assistant-chatbot users could not quote a single sentence from essays they had just written.
          </p>
          <p className="nara-card__source">Risko &amp; Gilbert · 2016</p>
        </article>
        <article className="nara-card">
          <p className="nara-card__eyebrow">Sycophancy</p>
          <h3 className="nara-card__stat">
            49<sup>%</sup>
          </h3>
          <p className="nara-card__body">
            AI systems endorsed users&apos; positions ~49% more often than humans.
          </p>
          <p className="nara-card__source">Cheng et al., 2026 · Stanford / Science</p>
        </article>
      </div>
    </section>
  );
}

export function ProblemMechanism() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">02c · Mechanism</div>
      <div className="nara-tag">The problem</div>
      <div className="nara-header">
        <p className="nara-eyebrow">What is actually happening</p>
        <h2 className="nara-title-mono nara-title--mono">The mechanism.</h2>
      </div>
      <div className="nara-grid-2" style={{ marginBottom: "4vh", gap: "2vw" }}>
        <article className="nara-card" style={{ padding: "3vh 2vw", gap: "1.5vh" }}>
          <p className="nara-card__eyebrow">Reduced capacity</p>
          <p className="nara-card__body">
            Capacity of unassisted thoughts.
          </p>
        </article>
        <article className="nara-card" style={{ padding: "3vh 2vw", gap: "1.5vh" }}>
          <p className="nara-card__eyebrow">Reduced social motivation</p>
          <p className="nara-card__body">
            The friend who would have heard you is replaced by a sentence that&apos;s already been resolved.
          </p>
        </article>
      </div>
      <div className="nara-grid-3" style={{ marginTop: "2vh" }}>
        <article className="nara-card" style={{ padding: "3vh 2vw" }}>
          <p className="nara-card__eyebrow">Cognitive offloading</p>
          <p className="nara-card__body">You stop thinking before you reach for it.</p>
        </article>
        <article className="nara-card" style={{ padding: "3vh 2vw" }}>
          <p className="nara-card__eyebrow">Synthetic reciprocity</p>
          <p className="nara-card__body">You think it is your friend. You hand your judgment over without noticing.</p>
        </article>
        <article className="nara-card" style={{ padding: "3vh 2vw" }}>
          <p className="nara-card__eyebrow">Sycophantic validation</p>
          <p className="nara-card__body">You think you are always right.</p>
        </article>
      </div>
    </section>
  );
}

export function ProblemAttachment() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">02d · Strategy</div>
      <div className="nara-tag">The problem</div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6vw",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
          <h2 className="nara-title">
            Attachment economy is a strategy.
          </h2>
          <p className="nara-prose--serif nara-prose">
            Sycophancy, anthropomorphism, synthetic reciprocity are deliberate
            design choices made to keep you dependent.
          </p>
        </div>
        <div
          className="nara-plate"
          style={{ aspectRatio: "16 / 9", boxShadow: "8px 8px 0 0 var(--slide-ink)" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "repeating-linear-gradient(45deg, var(--slide-ink) 0 2px, transparent 2px 14px)",
              opacity: 0.65,
            }}
          />
          <div className="nara-plate__caption">Bound · 18-25 cohort</div>
        </div>
      </div>
    </section>
  );
}

export function ProblemDeathOf() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">02e · Stakes</div>
      <div className="nara-tag">The problem</div>
      <div className="nara-header" style={{ alignItems: "center", textAlign: "center", margin: "0 auto 6vh" }}>
        <h2 className="nara-title" style={{ textAlign: "center" }}>
          To &lsquo;die&rsquo; is the death of
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "1.5vw",
          padding: "0 6vw",
        }}
      >
        {["Cognitive capacity", "Agency", "Authenticity", "Authorship"].map((word) => (
          <div
            key={word}
            style={{
              border: "1.5px solid var(--slide-ink)",
              padding: "3vh 1.5vw",
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 2vw, 32px)",
              lineHeight: 1,
              color: "var(--slide-ink)",
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </section>
  );
}
