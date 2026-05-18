import { colors, fonts } from "../ds-nara/tokens";
import ArchitectureV5Page from "../ds-nara/architecture-v5";
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
      <ArchitectureV5Page />
    </div>
  );
}
