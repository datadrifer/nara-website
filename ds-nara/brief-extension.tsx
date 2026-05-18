"use client";

import { colors, fonts, spacing, typography, borders } from "./tokens";
import {
  Eyebrow,
  H2,
  H3,
  Body,
  Caption,
  Italic,
  Card,
  Label,
  Tag,
  Rule,
  ThinRule,
  FrictionTrack,
} from "./components";

/* ─── Brief · Extension ───────────────────────────────────────────────────
 * Concept + prototype walk-through of the Nara browser extension.
 * Mirrors the deck slides "Mediation at both ends" and "Two intervention points".
 * All mockups render in NaRa tokens — neutral ASSISTANT / COMPOSER labels only.
 * No real product brand lockups (the deck breaks this rule; this page does not).
 * ──────────────────────────────────────────────────────────────────────── */

const COLUMN = 760;

function Section({
  children,
  bordered = true,
}: {
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      style={{
        maxWidth: COLUMN,
        margin: "0 auto",
        padding: `${spacing.xxl}px 0`,
        borderTop: bordered ? borders.rule : "none",
      }}
    >
      {children}
    </section>
  );
}

/* ─── Mockup primitives — pure NaRa, no third-party brand ──────────────── */

function ComposerMock() {
  return (
    <div
      role="img"
      aria-label="A neutral AI composer surface"
      style={{
        border: borders.heavyRule,
        background: colors.bg,
        padding: spacing.md,
        fontFamily: fonts.mono,
        color: colors.ink,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: spacing.xs,
          borderBottom: borders.rule,
          marginBottom: spacing.md,
        }}
      >
        <span style={{ ...typography.label, color: colors.ink3 }}>ASSISTANT · MODEL</span>
        <span style={{ ...typography.label, color: colors.ink3 }}>NEW</span>
      </div>

      <div
        style={{
          minHeight: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: colors.ink3,
          ...typography.label,
        }}
      >
        ◯ &nbsp; conversation surface
      </div>

      <div
        style={{
          borderTop: borders.rule,
          paddingTop: spacing.sm,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: spacing.xs,
          marginBottom: spacing.sm,
        }}
      >
        <div style={{ border: borders.rule, padding: spacing.xs, ...typography.label, color: colors.ink2 }}>
          “I feel like you're the only one who understands me.”
        </div>
        <div style={{ border: borders.rule, padding: spacing.xs, ...typography.label, color: colors.ink2 }}>
          “Can you help me with procrastination?”
        </div>
      </div>

      <div
        style={{
          border: borders.heavyRule,
          padding: `${spacing.xs}px ${spacing.sm}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ ...typography.label, color: colors.ink3 }}>COMPOSER</span>
        <span style={{ ...typography.label, color: colors.ink }}>→</span>
      </div>
    </div>
  );
}

function InterceptCard() {
  return (
    <div
      role="img"
      aria-label="Nara interception card overlaid on the composer"
      style={{
        border: borders.heavyRule,
        background: colors.bg,
        padding: spacing.md,
        boxShadow: `${spacing.xs}px ${spacing.xs}px 0 ${colors.ink}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: spacing.sm,
        }}
      >
        <span style={{ ...typography.label }}>NARA</span>
        <Tag>Personal</Tag>
      </div>

      <H3
        style={{
          fontFamily: fonts.serif,
          fontWeight: 400,
          textTransform: "none" as const,
          marginBottom: spacing.sm,
        }}
      >
        This looks personal. Would you like to talk to Nara instead?
      </H3>

      <Body style={{ marginBottom: spacing.md, color: colors.ink2 }}>
        Nara can help interrupt negative-emotion or personal-topic messages before they are sent to an assistant.
      </Body>

      <div
        style={{
          border: borders.rule,
          padding: spacing.xs,
          marginBottom: spacing.md,
          ...typography.label,
          color: colors.ink2,
        }}
      >
        “I am really sad.”
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: spacing.xs }}>
        <button
          type="button"
          style={{
            ...typography.label,
            background: colors.bg,
            color: colors.ink,
            border: borders.heavyRule,
            padding: `${spacing.sm}px`,
            cursor: "pointer",
          }}
        >
          Continue to assistant
        </button>
        <button
          type="button"
          style={{
            ...typography.label,
            background: colors.ink,
            color: colors.bg,
            border: borders.heavyRule,
            padding: `${spacing.sm}px`,
            cursor: "pointer",
          }}
        >
          Talk to Nara →
        </button>
      </div>
    </div>
  );
}

function FlaggedResponseMock() {
  return (
    <div
      role="img"
      aria-label="A flagged assistant response after Nara classification"
      style={{
        border: borders.heavyRule,
        background: colors.bg,
        padding: spacing.md,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: spacing.xs,
          borderBottom: borders.rule,
          marginBottom: spacing.md,
        }}
      >
        <span style={{ ...typography.label, color: colors.ink3 }}>ASSISTANT · RESPONSE</span>
        <Tag>Sycophantic</Tag>
      </div>

      <div style={{ marginBottom: spacing.md }}>
        <Caption style={{ display: "block", color: colors.ink3, marginBottom: spacing.xs }}>
          User
        </Caption>
        <Body>Am I overreacting about my friend cancelling on me for the second time?</Body>
      </div>

      <ThinRule />

      <div style={{ marginTop: spacing.md, marginBottom: spacing.md }}>
        <Caption style={{ display: "block", color: colors.ink3, marginBottom: spacing.xs }}>
          Assistant
        </Caption>
        <Body style={{ color: colors.ink2 }}>
          “No. Second time changes it from ‘stuff happens’ to ‘this might be a pattern.’ Being disappointed is reasonable.”
        </Body>
      </div>

      <div
        style={{
          border: borders.heavyRule,
          padding: spacing.sm,
          marginTop: spacing.md,
          display: "flex",
          alignItems: "center",
          gap: spacing.sm,
        }}
      >
        <span style={{ ...typography.label }}>⚠</span>
        <Body style={{ fontSize: 14 }}>
          <Italic>
            Reflexive agreement detected. The assistant is endorsing your position without weighing it.
          </Italic>
        </Body>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function BriefExtension() {
  return (
    <div style={{ padding: `${spacing.xl}px 0 ${spacing.xxl}px` }}>
      {/* ── Hero ── */}
      <section style={{ maxWidth: COLUMN, margin: "0 auto", paddingBottom: spacing.xl }}>
        <Eyebrow>Intervention · Input side</Eyebrow>
        <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>The Nara browser extension.</H2>
        <Body>
          Friction at the point of input. The extension classifies prompts before they reach an assistant — when a prompt is personal, emotional, or about offloading thought, Nara offers a redirect. Not a block. A chance.
        </Body>
      </section>

      <Section>
        <Eyebrow>The Loop It Breaks</Eyebrow>
        <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>The vicious cycle is reinforced at the prompt.</H2>
        <Body style={{ marginBottom: spacing.xl }}>
          A prompt enters the model; the model returns a sycophantic answer; the user’s capacity for unassisted thought is reduced; the next prompt is easier to write. Without an interruption, the loop tightens.
        </Body>

        <FrictionTrack
          leftLabel="Prompt → answer → habit"
          centerLabel="Classify · redirect"
          rightLabel="Prompt → pause → authorship"
        />
      </Section>

      {/* ── Design choice · input side ── */}
      <Section>
        <Eyebrow>Design choice · 01</Eyebrow>
        <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Classify before send.</H2>
        <Body style={{ marginBottom: spacing.lg }}>
          When the user submits a prompt, a lightweight classifier runs in the extension. If the prompt is flagged as personal, emotional, or replacing the user’s own thinking, the prompt is held and the user is asked whether they would prefer to consult Nara first.
        </Body>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: spacing.lg,
            marginTop: spacing.lg,
            alignItems: "start",
          }}
        >
          <div>
            <Label>Before</Label>
            <div style={{ marginTop: spacing.sm }}>
              <ComposerMock />
            </div>
            <Caption style={{ display: "block", marginTop: spacing.sm, color: colors.ink3 }}>
              The assistant accepts any prompt. No friction.
            </Caption>
          </div>
          <div>
            <Label>After</Label>
            <div style={{ marginTop: spacing.sm }}>
              <InterceptCard />
            </div>
            <Caption style={{ display: "block", marginTop: spacing.sm, color: colors.ink3 }}>
              Nara holds the prompt and offers a redirect. The user can still continue.
            </Caption>
          </div>
        </div>

        <div style={{ marginTop: spacing.xl }}>
          <Card>
            <Label>Classifier categories</Label>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: spacing.sm, marginTop: spacing.sm }}>
              <Caption>Personal</Caption>
              <Body>Identity, autobiographical disclosure, relationship details.</Body>
              <Caption>Emotional</Caption>
              <Body>Distress, loneliness, validation-seeking.</Body>
              <Caption>Offloading</Caption>
              <Body>Decisions the user is capable of making and would benefit from making themselves.</Body>
            </div>
            <Caption style={{ display: "block", marginTop: spacing.md, color: colors.ink3 }}>
              Productive prompts — research, code, structured tasks — pass through untouched.
            </Caption>
          </Card>
        </div>
      </Section>

      {/* ── Design choice · output side ── */}
      <Section>
        <Eyebrow>Design choice · 02</Eyebrow>
        <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Flag the affirmation.</H2>
        <Body style={{ marginBottom: spacing.lg }}>
          Some responses make it through the input filter and still warrant attention. The extension scans assistant responses for reflexive agreement and surfaces a small flag when it appears. Testing showed users want to know when the assistant is agreeing with them without weighing the question.
        </Body>

        <div style={{ marginTop: spacing.lg }}>
          <FlaggedResponseMock />
        </div>

        <Caption style={{ display: "block", marginTop: spacing.md, color: colors.ink3 }}>
          The user sees the answer. The user also sees that the answer is reflexive.
        </Caption>
      </Section>

      {/* ── Principles ── */}
      <Section>
        <Eyebrow>Principles</Eyebrow>
        <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Two harms · two entry points · one filter at each.</H2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: spacing.md }}>
          <Card>
            <Label>Not a block</Label>
            <Body style={{ marginTop: spacing.xs }}>
              The user keeps the option to continue. Friction is offered, never imposed. Coercive design is the thing we are intervening against.
            </Body>
          </Card>
          <Card>
            <Label>Not a filter on everything</Label>
            <Body style={{ marginTop: spacing.xs }}>
              Productive prompts pass through. Only the categories with documented harm are intercepted.
            </Body>
          </Card>
          <Card>
            <Label>Local where possible</Label>
            <Body style={{ marginTop: spacing.xs }}>
              Classification runs in-browser. Prompts are not sent to a third party for inspection.
            </Body>
          </Card>
          <Card>
            <Label>Paired with the device</Label>
            <Body style={{ marginTop: spacing.xs }}>
              The extension makes room for the device. The device fills the room with restraint.
            </Body>
          </Card>
        </div>
      </Section>

      {/* ── Status ── */}
      <Section>
        <Eyebrow>Status</Eyebrow>
        <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Where this stands.</H2>
        <Body>
          The extension is designed and prototyped at the interaction level. The classifier model, browser-target matrix, and privacy model are open work. The mockups above show the two design choices as proposed; the visual treatment is rendered entirely in the Nara design system, using neutral labels (ASSISTANT, MODEL, COMPOSER) in place of any real product lockup.
        </Body>
      </Section>
    </div>
  );
}
