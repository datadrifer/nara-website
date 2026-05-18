import Link from "next/link";
import { groupedSlides } from "./slides";

export default function SlideIndex() {
  const groups = groupedSlides();
  return (
    <div className="slide-frame">
      <div className="slide-strip">
        <span className="t-caption">☑ NARA · DECK INDEX</span>
      </div>
      <hr className="rule" />
      <div style={{ flex: 1, padding: "48px 0" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {groups.map((g) => (
            <li key={g.n} style={{ marginBottom: 24 }}>
              <div className="t-caption" style={{ marginBottom: 8 }}>
                {String(g.n).padStart(3, "0")}
              </div>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {g.variants.map((v) => (
                  <Link
                    key={v.id}
                    href={`/slide/${v.id}`}
                    className="t-caption slide-index__link"
                  >
                    {v.id.toUpperCase()} · {v.title.toUpperCase()} →
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <hr className="rule" />
      <div className="slide-strip">
        <span className="t-caption">NAVIGATE · /SLIDE/[N][VARIANT]</span>
      </div>
    </div>
  );
}
