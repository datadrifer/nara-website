export function Hero() {
  return (
    <section
      id="hero"
      className="nara-section nara-grid"
      style={{ paddingTop: "12vh" }}
    >
      <div className="nara-mark">00 · Hero</div>
      <div className="nara-tag">Final Presentation</div>
      <div className="nara-hero">
        <h1 className="nara-hero__mark">NaRa</h1>
        <p className="nara-hero__tag">think authentically, again</p>
        <div className="nara-hero__meta">
          <span>A friction system for AI interactions</span>
          <span className="nara-hero__meta-divider" />
          <span>Project 2026</span>
        </div>
      </div>
    </section>
  );
}
