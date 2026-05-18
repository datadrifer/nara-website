import type { Metadata } from "next";
import "./slide.css";
import SlideNav from "./SlideNav";

export const metadata: Metadata = {
  title: "NaRa — Slide Deck",
  description: "NaRa consultation deck.",
};

export default function SlideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="slide-scope slide-shell">
      <SlideNav />
      <main className="slide-main">{children}</main>
    </div>
  );
}

