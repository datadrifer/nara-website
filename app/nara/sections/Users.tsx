export function UsersCanaries() {
  return (
    <section id="users" className="nara-section nara-grid">
      <div className="nara-mark">03 · The users</div>
      <div className="nara-tag">The users</div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr 1fr",
          gap: "3vw",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <p className="nara-eyebrow">18–25 year olds</p>
          <h2 className="nara-title" style={{ fontSize: "clamp(36px, 5vw, 80px)" }}>
            The first cohort whose <u>default chat partner</u> is an LLM.
          </h2>
        </div>
        <div
          className="nara-plate"
          style={{ aspectRatio: "3 / 4" }}
        >
          {/* Subway photo from deck */}
          <img src="/nara/deck/slide-15.jpg" alt="Young commuters absorbed in phones" />
          <div className="nara-plate__caption">Subway · 18–25 cohort</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh", textAlign: "right" }}>
          <p className="nara-eyebrow" style={{ textAlign: "right" }}>
            Canaries in the coal mine
          </p>
          <h2 className="nara-title" style={{ fontSize: "clamp(36px, 5vw, 80px)" }}>
            Canaries in the Coal Mine
          </h2>
        </div>
      </div>
    </section>
  );
}

export function UsersNaraIntro() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">03a · NaRa</div>
      <div className="nara-tag">The users</div>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "5vw",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(72px, 11vw, 180px)",
              lineHeight: 0.9,
              color: "var(--slide-ink)",
              margin: 0,
              position: "relative",
            }}
          >
            <span style={{ position: "relative" }}>
              N<sup style={{ fontSize: "0.3em", verticalAlign: "super" }}>+</sup>
              aR<sub style={{ fontSize: "0.3em", verticalAlign: "sub" }}>·</sub>a
            </span>
          </h2>
          <p className="nara-prose--serif nara-prose">
            By saying less, NaRa helps young adults{" "}
            <span style={{ background: "var(--slide-ink)", color: "var(--slide-bg)", padding: "0 4px" }}>
              self-reflect and regain authorship of their stories
            </span>
            .
          </p>
        </div>
        <div className="nara-plate" style={{ aspectRatio: "3 / 4" }}>
          <img src="/nara/deck/slide-13.jpg" alt="Hand holding NaRa device on lanyard" />
          <div className="nara-plate__caption">NaRa device · prototype</div>
        </div>
      </div>
    </section>
  );
}

export function UsersDisruptor() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">03b · Disruptor</div>
      <div className="nara-tag">The users</div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        <div
          className="nara-plate"
          style={{
            width: "min(680px, 70vw)",
            aspectRatio: "16 / 10",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "repeating-linear-gradient(0deg, var(--slide-ink) 0 1px, transparent 1px 6px), repeating-linear-gradient(90deg, var(--slide-ink) 0 1px, transparent 1px 4px)",
              opacity: 0.18,
            }}
          />
          <h2
            className="nara-title"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "8%",
              transform: "translateX(-50%)",
              margin: 0,
              fontSize: "clamp(36px, 5.5vw, 88px)",
            }}
          >
            We need a disrupter.
          </h2>
        </div>
      </div>
    </section>
  );
}

export function UsersHowWeGotHere() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">04 · Goal</div>
      <div className="nara-tag">Goal</div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4vh",
          textAlign: "center",
        }}
      >
        <div
          className="nara-plate"
          style={{
            width: "min(320px, 40vw)",
            aspectRatio: "3 / 4",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg, var(--slide-bg) 0%, var(--slide-bg) 30%, rgba(0,0,0,0.06) 60%, rgba(0,0,0,0.18) 100%)",
            }}
          />
          <h2
            className="nara-title"
            style={{
              position: "absolute",
              left: "50%",
              top: "32%",
              transform: "translateX(-50%)",
              margin: 0,
              fontSize: "clamp(28px, 4vw, 56px)",
              whiteSpace: "nowrap",
            }}
          >
            How we got here.
          </h2>
        </div>
      </div>
    </section>
  );
}

export function UsersOneGoal() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">04a · One goal</div>
      <div className="nara-tag">Goal</div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4vh",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(20px, 2vw, 32px)",
            color: "var(--slide-ink)",
            margin: 0,
          }}
        >
          One goal
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
          <span
            style={{ width: 8, height: 8, background: "var(--slide-ink)", borderRadius: 0 }}
          />
          <span style={{ width: 1, height: 80, background: "var(--slide-ink)" }} />
          <span
            style={{ width: 8, height: 8, background: "var(--slide-ink)", borderRadius: 0 }}
          />
        </div>
        <h2
          className="nara-title"
          style={{ fontSize: "clamp(40px, 6vw, 96px)", textAlign: "center" }}
        >
          thinking authentically, again
        </h2>
      </div>
    </section>
  );
}
