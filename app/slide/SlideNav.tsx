"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { groupedSlides } from "./slides";

export default function SlideNav() {
  const pathname = usePathname();
  const groups = groupedSlides();
  const current = pathname?.replace(/^\/slide\/?/, "").toLowerCase() ?? "";

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "q" && e.key !== "Q") return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      e.preventDefault();
      setHidden((h) => !h);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <aside
      className={`slide-nav${hidden ? " is-hidden" : ""}`}
      aria-label="Slide navigator"
      aria-hidden={hidden}
    >
      <Link href="/slide" className="slide-nav__brand t-caption">
        ☑ NARA / DECK
      </Link>
      <div className="slide-nav__rule" />
      <ol className="slide-nav__list">
        {groups.map((g) => (
          <li key={g.n} className="slide-nav__group">
            <div className="slide-nav__num">{String(g.n).padStart(2, "0")}</div>
            <ul className="slide-nav__variants">
              {g.variants.map((v) => {
                const isActive = current === v.id;
                return (
                  <li key={v.id}>
                    <Link
                      href={`/slide/${v.id}`}
                      className={`slide-nav__item${isActive ? " is-active" : ""}`}
                    >
                      <span className="slide-nav__mark" aria-hidden>
                        {isActive ? "■" : "□"}
                      </span>
                      <span className="slide-nav__variant">{v.variant}</span>
                      <span className="slide-nav__title">{v.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
    </aside>
  );
}
