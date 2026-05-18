const specs = [
  "ESP32-S3 · DUAL-CORE 240MHZ",
  "INMP441 MEMS MICROPHONE · I2S",
  "ENERGY-BASED VAD · 100MS WINDOWS",
  "E-INK 200 × 200 · 1-BIT DISPLAY",
];

// Tiers: more abstraction = fewer filled blocks (scale bar shows density)
const tiers = [
  { tag: "T1", label: "Raw", blocks: [1, 1, 1, 1, 1] },
  { tag: "T2", label: "Hourly", blocks: [1, 1, 1, 0, 0] },
  { tag: "T3", label: "Daily", blocks: [1, 1, 0, 0, 0] },
  { tag: "T4", label: "Weekly Abstract", blocks: [1, 0, 0, 0, 0] },
];

export default function Slide08a() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">COMMITMENTS 01 &amp; 02</span>
      </div>
      <hr className="rule" />

      {/* Split body */}
      <div className="listen-remember">
        {/* LEFT — listening */}
        <div className="lr-col">
          <p className="lr-eyebrow">01 / LISTEN</p>
          <h2 className="lr-title">Listen without recording.</h2>
          <p className="lr-body">
            On-device voice detection. Audio only streams when speech is
            present.
          </p>

          <ul className="lr-specs" aria-label="Hardware specifications">
            {specs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="lr-support">
            Privacy by physical architecture, not by policy.
          </p>
        </div>

        <div className="split-vert-rule" aria-hidden />

        {/* RIGHT — remembering */}
        <div className="lr-col">
          <p className="lr-eyebrow">02 / REMEMBER</p>
          <h2 className="lr-title">Remember as meaning.</h2>
          <p className="lr-body">
            A four-tier compression cascade. Each tier is progressively more
            abstract than the last.
          </p>

          <ul className="tier-chain" aria-label="Tier cascade">
            {tiers.map((t) => (
              <li key={t.tag} className="tier-row">
                <span className="tier-row__tag">{t.tag}</span>
                <span className="tier-row__label">{t.label}</span>
                <span className="tier-row__scale" aria-hidden>
                  {t.blocks.map((filled, i) => (
                    <span
                      key={i}
                      className={`tier-row__block${filled ? "" : " tier-row__block--hollow"}`}
                    />
                  ))}
                </span>
              </li>
            ))}
          </ul>

          <p className="lr-support">
            Four tiers. Raw turns into meaning, one abstraction at a time.
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · THE INSTRUMENT</span>
        <span className="t-source">
          T1 RAW → T2 HOURLY → T3 DAILY → T4 WEEKLY
        </span>
      </div>
    </div>
  );
}
