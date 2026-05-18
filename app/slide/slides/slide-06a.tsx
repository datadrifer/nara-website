const resources = [
  {
    num: "01",
    title: "Temporal perspective",
    body: "A device that has been with you over time.",
  },
  {
    num: "02",
    title: "Comparison",
    body: "A baseline of you, not of humans in general.",
  },
  {
    num: "03",
    title: "Discovery",
    body: "Patterns you did not know were there.",
  },
  {
    num: "04",
    title: "Conversation",
    body: "Something of yours to converse with.",
  },
];

export default function Slide06a() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">THE SPINE · FOUR RESOURCES FOR REFLECTION</span>
      </div>
      <hr className="rule" />

      {/* Argument body */}
      <div className="spine">
        {/* Provocation */}
        <p className="spine__provocation">
          &ldquo;Tarot has reflected people for centuries without knowing them.&rdquo;
        </p>

        {/* Citation */}
        <p className="spine__citation">
          BAUMER ET AL. · REVISITING REFLECTION IN HCI · IMWUT 2022
        </p>

        {/* 2×2 resource grid */}
        <div className="spine__grid">
          {resources.map((r) => (
            <div key={r.num} className="spine__cell">
              <div className="spine__cell-num">{r.num}</div>
              <h3 className="spine__cell-title">{r.title}</h3>
              <p className="spine__cell-body">{r.body}</p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="spine__closing">
          NaRa is the Tarot deck that has been with you all along.
        </p>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · THE SPINE</span>
        <span className="t-source">BAUMER · IMWUT 2022</span>
      </div>
    </div>
  );
}
