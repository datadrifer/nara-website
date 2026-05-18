import type { Metadata } from "next";
import "../slide/slide.css";
import "./nara.css";

export const metadata: Metadata = {
  title: "NaRa — think authentically, again",
  description:
    "A friction system for AI interactions. Three glyphs, one word. Designed to restore cognitive sovereignty.",
};

export default function NaraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="slide-scope nara-scroll">{children}</div>;
}
