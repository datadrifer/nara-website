export function PrototypeGallery() {
  const photos = [
    { src: "/nara/deck/slide-42.jpg", caption: "Works-like · V2 + V3.2" },
    { src: "/nara/deck/slide-43.jpg", caption: "Component stack · V3.2" },
    { src: "/nara/deck/slide-44.jpg", caption: "GUI flow" },
  ];
  return (
    <section id="prototype" className="nara-section nara-grid">
      <div className="nara-mark">08 · Prototype</div>
      <div className="nara-tag">Prototype</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Works-like prototypes</p>
        <h2 className="nara-title-mono nara-title--mono">Works like, looks like.</h2>
      </div>
      <div className="nara-grid-3" style={{ flex: 1 }}>
        {photos.map((p) => (
          <div key={p.src} className="nara-plate" style={{ aspectRatio: "3 / 4" }}>
            <img src={p.src} alt={p.caption} />
            <div className="nara-plate__caption">{p.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PrototypeHardware() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">08a · Hardware skeleton</div>
      <div className="nara-tag">Prototype</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Form factor evolution</p>
        <h2 className="nara-title-mono nara-title--mono">Hardware skeleton.</h2>
      </div>
      <div className="nara-grid-3" style={{ flex: 1 }}>
        <div className="nara-plate" style={{ aspectRatio: "3 / 4" }}>
          <img src="/nara/deck/slide-45.jpg" alt="Hardware skeleton — first iteration" />
          <div className="nara-plate__caption">Iteration 01</div>
        </div>
        <div className="nara-plate" style={{ aspectRatio: "3 / 4" }}>
          <img src="/nara/deck/slide-46.jpg" alt="Card / screen prototype" />
          <div className="nara-plate__caption">Iteration 02 · cards</div>
        </div>
        <div className="nara-plate" style={{ aspectRatio: "3 / 4" }}>
          <img src="/nara/deck/slide-50.jpg" alt="Final resin lanyard form" />
          <div className="nara-plate__caption">Final · resin lanyard</div>
        </div>
      </div>
    </section>
  );
}

export function PrototypeTimeline() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">08b · Form timeline</div>
      <div className="nara-tag">Prototype</div>
      <div className="nara-header">
        <p className="nara-eyebrow">Form reinforces function</p>
        <h2 className="nara-title-mono nara-title--mono">Timeline of form factor.</h2>
      </div>
      <div className="nara-plate" style={{ flex: 1, aspectRatio: "16 / 9" }}>
        <img src="/nara/deck/slide-51.jpg" alt="Prototype timeline — base 42 hand-drawn glyphs and many form factors" />
        <div className="nara-plate__caption">Base 42 hand-drawn glyphs · many form factors</div>
      </div>
    </section>
  );
}

export function PrototypeDemo() {
  return (
    <section className="nara-section nara-grid">
      <div className="nara-mark">08c · Demonstration</div>
      <div className="nara-tag">Demonstration</div>
      <div className="nara-header">
        <p className="nara-eyebrow">In context</p>
        <h2 className="nara-title-mono nara-title--mono">A real moment.</h2>
        <p className="nara-prose" style={{ maxWidth: "60ch" }}>
          A user pauses before reaching for the chat. The interaction is held. Three glyphs and one word return.
          Interpretation is left to her.
        </p>
      </div>
      <div className="nara-plate" style={{ flex: 1, maxWidth: 1100, alignSelf: "center", width: "100%", aspectRatio: "16 / 9" }}>
        <img src="/nara/deck/slide-29.jpg" alt="Demonstration — user with laptop in lounge" />
        <div className="nara-plate__caption">Demonstration · in context</div>
      </div>
    </section>
  );
}
