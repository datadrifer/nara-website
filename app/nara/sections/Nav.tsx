"use client";

export function NaraNav() {
  return (
    <nav className="nara-nav" aria-label="Deck navigation">
      <a href="#hero" className="nara-nav__brand">
        NaRa
      </a>
      <div className="nara-nav__links">
        <a className="nara-nav__link" href="#problem">
          Problem
        </a>
        <a className="nara-nav__link" href="#users">
          Users
        </a>
        <a className="nara-nav__link" href="#research">
          Research
        </a>
        <a className="nara-nav__link" href="#design">
          Design
        </a>
        <a className="nara-nav__link" href="#system">
          System
        </a>
        <a className="nara-nav__link" href="#policy">
          Policy
        </a>
      </div>
    </nav>
  );
}
