export default function Slide01b() {
  return (
    <div className="slide-frame">
      {/* No top strip, no chrome. Drop straight into the body. */}
      <div className="slide-body slide-body--left" style={{ width: "100%" }}>
        <div style={{ width: "100%", maxWidth: 1400, margin: "0 auto" }}>
          <span className="t-caption--small">23:47</span>
          <div style={{ height: 48 }} />
          <p className="t-prompt">
            am I overreacting about
            <span className="t-prompt__cursor" aria-hidden />
          </p>
        </div>
      </div>
    </div>
  );
}
