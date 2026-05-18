import type { ComponentType } from "react";
import Slide01a from "./slide-01a";
import Slide01b from "./slide-01b";
import Slide01c from "./slide-01c";
import Slide01d from "./slide-01d";
import Slide02a from "./slide-02a";
import Slide02b from "./slide-02b";
import Slide02c from "./slide-02c";
import Slide02d from "./slide-02d";
import Slide03a from "./slide-03a";
import Slide03b from "./slide-03b";
import Slide03c from "./slide-03c";
import Slide03d from "./slide-03d";
import Slide03e from "./slide-03e";
import Slide03f from "./slide-03f";
import Slide03g from "./slide-03g";
import Slide04a from "./slide-04a";
import Slide05a from "./slide-05a";
import Slide06a from "./slide-06a";
import Slide07a from "./slide-07a";
import Slide08a from "./slide-08a";
import Slide09a from "./slide-09a";
import Slide10a from "./slide-10a";
import Slide11a from "./slide-11a";
import Slide12a from "./slide-12a";

export interface SlideEntry {
  id: string; // e.g. "1a"
  n: number;
  variant: string;
  title: string;
  Component: ComponentType;
}

export const slides: SlideEntry[] = [
  { id: "1a", n: 1, variant: "a", title: "Outsourced", Component: Slide01a },
  { id: "1b", n: 1, variant: "b", title: "23:47", Component: Slide01b },
  { id: "1c", n: 1, variant: "c", title: "Semi-final", Component: Slide01c },
  { id: "1d", n: 1, variant: "d", title: "Composer + claim", Component: Slide01d },
  { id: "2a", n: 2, variant: "a", title: "Cognition 78%", Component: Slide02a },
  { id: "2b", n: 2, variant: "b", title: "Evidence 01", Component: Slide02b },
  { id: "2c", n: 2, variant: "c", title: "What happens inside", Component: Slide02c },
  { id: "2d", n: 2, variant: "d", title: "Cognition + Social", Component: Slide02d },
  { id: "3a", n: 3, variant: "a", title: "Social disagreement", Component: Slide03a },
  { id: "3b", n: 3, variant: "b", title: "Evidence 02", Component: Slide03b },
  { id: "3c", n: 3, variant: "c", title: "What happens between", Component: Slide03c },
  { id: "3d", n: 3, variant: "d", title: "Intervention / pivot", Component: Slide03d },
  { id: "3e", n: 3, variant: "e", title: "Pivot · before/after", Component: Slide03e },
  { id: "3f", n: 3, variant: "f", title: "Pivot · interception", Component: Slide03f },
  { id: "3g", n: 3, variant: "g", title: "Pivot · hijacked composer", Component: Slide03g },
  { id: "4a", n: 4, variant: "a", title: "Instrument + consultation", Component: Slide04a },
  { id: "5a", n: 5, variant: "a", title: "Transaction / tap", Component: Slide05a },
  { id: "6a", n: 6, variant: "a", title: "Four resources", Component: Slide06a },
  { id: "7a", n: 7, variant: "a", title: "Three commitments", Component: Slide07a },
  { id: "8a", n: 8, variant: "a", title: "Listen + Remember", Component: Slide08a },
  { id: "9a", n: 9, variant: "a", title: "22 glyphs", Component: Slide09a },
  { id: "10a", n: 10, variant: "a", title: "Returning", Component: Slide10a },
  { id: "11a", n: 11, variant: "a", title: "Reflection map", Component: Slide11a },
  { id: "12a", n: 12, variant: "a", title: "Intervention map", Component: Slide12a },
];

export function getSlide(id: string): SlideEntry | undefined {
  return slides.find((s) => s.id === id.toLowerCase());
}

export function firstVariantOf(n: number): SlideEntry | undefined {
  return slides
    .filter((s) => s.n === n)
    .sort((a, b) => a.variant.localeCompare(b.variant))[0];
}

export function groupedSlides(): { n: number; variants: SlideEntry[] }[] {
  const map = new Map<number, SlideEntry[]>();
  for (const s of slides) {
    const arr = map.get(s.n) ?? [];
    arr.push(s);
    map.set(s.n, arr);
  }
  return [...map.entries()]
    .sort(([a], [b]) => a - b)
    .map(([n, variants]) => ({
      n,
      variants: variants.sort((a, b) => a.variant.localeCompare(b.variant)),
    }));
}
