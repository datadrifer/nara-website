import type { Metadata } from "next";
import { colors, fonts } from "../../ds-nara/tokens";
import { BriefNavbar } from "../../ds-nara/brief-nav";
import "../../ds-nara/cockpit-ds.css";

export const metadata: Metadata = {
  title: "Nara — Context Tiers",
  description: "Live view of the tiered memory cascade: T1 signals, T2 daily, T3 weekly, T4 themes.",
};

export default function TiersLayout({
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
        {children}
      </div>
    </>
  );
}
