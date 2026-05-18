"use client";

import Link from "next/link";
import { colors, fonts, spacing, typography, borders } from "./tokens";
import { Eyebrow, H2, Body, Caption, Label, InteractiveCard } from "./components";

/* ─── Brief hub ───────────────────────────────────────────────────────────
 * Slim directory page. Public-facing landing now lives at /.
 * Philosophy has been merged into the landing; the route redirects to /.
 * ──────────────────────────────────────────────────────────────────────── */

const PAGES = [
  {
    href: "/",
    label: "Landing",
    desc: "The product narrative — problem, mechanism, intervention, device, policy.",
  },
  {
    href: "/brief/extension",
    label: "Extension",
    desc: "Input-side intervention. Classify before send · flag the affirmation.",
  },
  {
    href: "/architecture-v5",
    label: "Architecture",
    desc: "Interactive system diagram. Device hardware, cloud pipeline, four tiers.",
  },
  {
    href: "/brief/sensing",
    label: "Sensing",
    desc: "Audio capture, voice activity detection, environment classification.",
  },
  {
    href: "/brief/intelligence",
    label: "Intelligence",
    desc: "Memory compression, consultation pipeline, glyph picker.",
  },
  {
    href: "/brief/platform",
    label: "Platform",
    desc: "Companion app, social exchange, privacy, ESP32-S3 hardware.",
  },
  {
    href: "/brief/status",
    label: "Status",
    desc: "Open questions across hardware, firmware, cloud, glyphs, privacy.",
  },
  {
    href: "/tiers",
    label: "Tiers",
    desc: "Live Tier 1–4 viewer.",
  },
];

export default function BriefIntro() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: `${spacing.xxl}px ${spacing.lg}px` }}>
      <Eyebrow>Project Nara · Brief</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Index.</H2>
      <Body style={{ marginBottom: spacing.xl }}>
        Deep dives into the system. For the product narrative, see{" "}
        <Link href="/" style={{ color: colors.ink, textDecoration: "underline" }}>
          the landing
        </Link>
        .
      </Body>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: spacing.sm }}>
        {PAGES.map((p) => (
          <Link key={p.href} href={p.href} style={{ textDecoration: "none", color: "inherit" }}>
            <InteractiveCard isActive={false} activeColor={colors.ink} padding={`${spacing.md}px`}>
              <Label>{p.label}</Label>
              <Body style={{ marginTop: spacing.xs }}>{p.desc}</Body>
            </InteractiveCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
