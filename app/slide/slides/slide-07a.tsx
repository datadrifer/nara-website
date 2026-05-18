import { Fragment } from "react";

const commitments = [
  { num: "01", line: "Listen without recording." },
  { num: "02", line: "Remember as meaning." },
  { num: "03", line: "Answer as ambiguity." },
];

export default function Slide07a() {
  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">HOW WE BUILT IT</span>
      </div>
      <hr className="rule" />

      {/* Three equal columns */}
      <div className="drumbeat">
        {commitments.map((c, i) => (
          <Fragment key={c.num}>
            <div className="drumbeat__col">
              <p className="drumbeat__num">{c.num}</p>
              <p className="drumbeat__line">{c.line}</p>
            </div>
            {i < commitments.length - 1 && (
              <div className="split-vert-rule" aria-hidden />
            )}
          </Fragment>
        ))}
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · THREE COMMITMENTS</span>
        <span className="t-source">THE INSTRUMENT</span>
      </div>
    </div>
  );
}
