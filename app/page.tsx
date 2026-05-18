import { colors, fonts } from "../ds-nara/tokens";
import Landing from "../ds-nara/landing";
import "../ds-nara/cockpit-ds.css";

export default function Home() {
  return (
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
      <Landing />
    </div>
  );
}
