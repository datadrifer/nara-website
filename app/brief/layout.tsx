import type { Metadata } from "next";
import { colors, fonts, spacing } from "../../ds-nara/tokens";
import { BriefNavbar } from "../../ds-nara/brief-nav";
import "../../ds-nara/cockpit-ds.css";

export const metadata: Metadata = {
  title: "Nara — Project Brief v4",
  description: "Interactive showcase of the Project Nara AI context engine brief.",
};

export default function BriefLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className="ds-cockpit-scope"
        style={{
          margin: 0,
          minHeight: "100vh",
          background: colors.bg,
          color: colors.ink,
          fontFamily: fonts.serif,
        }}
      >
        <BriefNavbar />
        <div style={{ maxWidth: 1060, margin: "0 auto", padding: `0 ${spacing.lg}px` }}>
          {children}
        </div>
      </div>
    </>
  );
}
