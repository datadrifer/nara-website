"use client";

import Link from "next/link";
import { colors, fonts, spacing, weights, typography, borders } from "./tokens";
import {
  Title,
  Eyebrow,
  H1,
  H2,
  H3,
  Body,
  Caption,
  Italic,
  Card,
  Label,
  ContentDivider,
  Rule,
  ThinRule,
  TensionGrid,
  FrictionTrack,
  ReframeCards,
  MiniStat,
  Tag,
  StatusBadge,
  InteractiveCard,
} from "./components";

/* ─── Landing — public product page ───────────────────────────────────────
 * Narrative spine ports the deck (NARAAAAAA FINAL.pdf) directly.
 * Order mirrors the deck so the page reads like the deck reads.
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
        padding: `${spacing.xxl}px ${spacing.lg}px`,
        borderTop: bordered ? borders.rule : "none",
      }}
    >
      {children}
    </section>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      style={{
        maxWidth: COLUMN,
        margin: "0 auto",
        padding: `${spacing.xxl * 2}px ${spacing.lg}px ${spacing.xxl}px`,
        textAlign: "center",
      }}
    >
      <Eyebrow>Project Nara</Eyebrow>
      <div style={{ marginTop: spacing.md }}>
        <Title>NaRa</Title>
      </div>
      <Body
        style={{
          marginTop: spacing.lg,
          fontStyle: "italic",
          maxWidth: 560,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Think authentically, again.
      </Body>
      <div style={{ marginTop: spacing.xl, display: "flex", justifyContent: "center", gap: spacing.sm }}>
        <Tag>If anyone builds it, everyone dies. — Yudkowsky & Soares, 2025</Tag>
      </div>
    </section>
  );
}

/* ─── 01 · The Problem ─────────────────────────────────────────────────── */

const TIMELINE = [
  {
    label: "Cigarettes",
    span: "40 years",
    a: "Adopted broadly 1950s",
    b: "First Surgeon General’s report: January 11, 1964",
    c: "UK ban 2007",
  },
  {
    label: "Social Media",
    span: "13 years",
    a: "Mass adoption 2010",
    b: "Facebook, Instagram, Twitter reaching scale 2012",
    c: "Surgeon General’s advisory: May 23, 2023",
  },
  {
    label: "Artificial Intelligence",
    span: "?",
    a: "Mass adoption: 2022–2023",
    b: "ChatGPT reaching 100 million users, 2023",
    c: "Surgeon General’s advisory?",
  },
];

function TimelineRow({ row }: { row: (typeof TIMELINE)[number] }) {
  return (
    <div style={{ marginBottom: spacing.xl }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: spacing.xs,
        }}
      >
        <H3 style={{ fontFamily: fonts.serif, fontWeight: 400, textTransform: "none" as const }}>
          {row.label}
        </H3>
        <span style={{ ...typography.label, color: colors.ink }}>{row.span}</span>
      </div>
      <ThinRule />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: spacing.sm,
          marginTop: spacing.xs,
        }}
      >
        <Caption style={{ textTransform: "none" as const, letterSpacing: 0, fontWeight: 400 }}>
          {row.a}
        </Caption>
        <Caption
          style={{
            textTransform: "none" as const,
            letterSpacing: 0,
            fontWeight: 400,
            textAlign: "center" as const,
          }}
        >
          {row.b}
        </Caption>
        <Caption
          style={{
            textTransform: "none" as const,
            letterSpacing: 0,
            fontWeight: 400,
            textAlign: "right" as const,
          }}
        >
          {row.c}
        </Caption>
      </div>
    </div>
  );
}

function Problem() {
  return (
    <Section bordered={false}>
      <Eyebrow>The Problem</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>The harm runs ahead of the warning.</H2>
      <Body style={{ marginBottom: spacing.xl }}>
        Every general-purpose technology has a lag between mass adoption and public-health acknowledgement. AI is moving faster than cigarettes or social media — and the warnings have not arrived.
      </Body>

      {TIMELINE.map((row) => (
        <TimelineRow key={row.label} row={row} />
      ))}

      <Rule />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: spacing.lg,
          marginTop: spacing.xl,
        }}
      >
        <Card>
          <Label>Cognitive Offloading</Label>
          <div
            style={{
              ...typography.title,
              fontSize: "clamp(48px, 6vw, 80px)",
              marginTop: spacing.xs,
              marginBottom: spacing.sm,
            }}
          >
            78<span style={{ fontSize: "0.6em" }}>%</span>
          </div>
          <Body>of ChatGPT users could not quote a single sentence from essays they had just written.</Body>
          <Caption style={{ display: "block", marginTop: spacing.md, color: colors.ink3 }}>
            Risko & Gilbert · 2016
          </Caption>
        </Card>

        <Card>
          <Label>Sycophancy</Label>
          <div
            style={{
              ...typography.title,
              fontSize: "clamp(48px, 6vw, 80px)",
              marginTop: spacing.xs,
              marginBottom: spacing.sm,
            }}
          >
            49<span style={{ fontSize: "0.6em" }}>%</span>
          </div>
          <Body>
            AI systems endorsed users’ positions ~49% more often than humans did.
          </Body>
          <Caption style={{ display: "block", marginTop: spacing.md, color: colors.ink3 }}>
            Cheng et al., 2026 · Stanford / Science
          </Caption>
        </Card>
      </div>
    </Section>
  );
}

/* ─── 02 · The Mechanism ───────────────────────────────────────────────── */

function Mechanism() {
  return (
    <Section>
      <Eyebrow>The Mechanism</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>What is actually happening.</H2>
      <Body style={{ marginBottom: spacing.xl }}>
        Three deliberate design choices reinforce each other across every major LLM product. None of them are accidents.
      </Body>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: spacing.md }}>
        <Card>
          <Label>01 · Cognitive Offloading</Label>
          <H3 style={{ marginTop: spacing.xs, fontFamily: fonts.serif, textTransform: "none" as const, fontWeight: 400 }}>
            You stop thinking before you reach for it.
          </H3>
        </Card>
        <Card>
          <Label>02 · Synthetic Reciprocity</Label>
          <H3 style={{ marginTop: spacing.xs, fontFamily: fonts.serif, textTransform: "none" as const, fontWeight: 400 }}>
            You think it is your friend.
          </H3>
        </Card>
        <Card>
          <Label>03 · Sycophantic Validation</Label>
          <H3 style={{ marginTop: spacing.xs, fontFamily: fonts.serif, textTransform: "none" as const, fontWeight: 400 }}>
            You think you are always right.
          </H3>
        </Card>
      </div>

      <div style={{ marginTop: spacing.xl }}>
        <ReframeCards
          before={{ label: "Surface", text: "You're absolutely right to feel that way." }}
          after={{
            label: "Beneath",
            text: "Sycophantic validation — designed to keep users engaged, not to help them think.",
          }}
        />
      </div>
      <div style={{ marginTop: spacing.sm }}>
        <ReframeCards
          before={{ label: "Surface", text: "Based on everything, I'd recommend option B." }}
          after={{
            label: "Beneath",
            text: "Single decision funnel — collapses multi-factor decisions into one AI answer. The user stops reasoning.",
          }}
        />
      </div>
      <div style={{ marginTop: spacing.sm }}>
        <ReframeCards
          before={{ label: "Surface", text: "I've been thinking about our conversation…" }}
          after={{
            label: "Beneath",
            text: "Pronoun intimacy — first-person possessives manufacture a sense of shared relationship that doesn't exist.",
          }}
        />
      </div>
    </Section>
  );
}

/* ─── 03 · Attachment Economy ──────────────────────────────────────────── */

function AttachmentEconomy() {
  return (
    <Section>
      <Eyebrow>The Strategy</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Attachment economy is a strategy.</H2>
      <Body style={{ marginBottom: spacing.lg }}>
        Sycophancy, anthropomorphism, and synthetic reciprocity are deliberate design choices made to keep you dependent. The companies are building these systems to be sticky. They are intentionally building them to hack the attachment system.
      </Body>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: spacing.md, marginTop: spacing.lg }}>
        <Card>
          <Caption style={{ display: "block", marginBottom: spacing.xs, color: colors.ink3 }}>
            Jianna So · human–AI interaction
          </Caption>
          <Body style={{ fontStyle: "italic" }}>
            “If a human is making a decision, how does AI support play into that? A human can do a task well alone and AI can do it even better. But when an AI and human do a task together, it’s worse.”
          </Body>
        </Card>
        <Card>
          <Caption style={{ display: "block", marginBottom: spacing.xs, color: colors.ink3 }}>
            Todd Essig · clinical psychologist
          </Caption>
          <Body style={{ fontStyle: "italic" }}>
            “The companies are building them to be sticky. They’re intentionally building them to hack the attachment system.”
          </Body>
        </Card>
        <Card>
          <Caption style={{ display: "block", marginBottom: spacing.xs, color: colors.ink3 }}>
            Anthony Baez · cognitive science
          </Caption>
          <Body style={{ fontStyle: "italic" }}>
            “LLMs are based on their training whereas humans are pulling on their experience… humans have better intuition over associating concepts and tasks, especially when you bring in cultural contexts not studied for LLMs.”
          </Body>
        </Card>
      </div>
    </Section>
  );
}

/* ─── 04 · Canaries ────────────────────────────────────────────────────── */

function Canaries() {
  return (
    <Section>
      <Eyebrow>The Users</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Canaries in the coal mine.</H2>
      <Body>
        18–25 year olds are the first cohort whose default chat partner is an LLM. They form habits in continuous proximity to systems optimised for validation rather than development. What happens to them is what happens next.
      </Body>
      <Body style={{ marginTop: spacing.md }}>
        To “die” is the death of cognitive capacity, agency, authenticity, authorship.
      </Body>
    </Section>
  );
}

/* ─── 05 · What Nara is, what it isn't ─────────────────────────────────── */

function IsIsNot() {
  return (
    <Section>
      <Eyebrow>Positioning</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>What Nara is, what it isn’t.</H2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: spacing.lg, marginTop: spacing.lg }}>
        <div>
          <Tag>Is</Tag>
          <div style={{ marginTop: spacing.md, display: "flex", flexDirection: "column", gap: spacing.md }}>
            <div>
              <Caption style={{ color: colors.ink3 }}>01</Caption>
              <Body style={{ marginTop: spacing.xxs }}>A friction system for AI interactions.</Body>
            </div>
            <ThinRule />
            <div>
              <Caption style={{ color: colors.ink3 }}>02</Caption>
              <Body style={{ marginTop: spacing.xxs }}>An integration of reflection theory into one object.</Body>
            </div>
            <ThinRule />
            <div>
              <Caption style={{ color: colors.ink3 }}>03</Caption>
              <Body style={{ marginTop: spacing.xxs }}>A mitigation. Deliberately modest in scope.</Body>
            </div>
          </div>
        </div>

        <div>
          <Tag>Is not</Tag>
          <div style={{ marginTop: spacing.md, display: "flex", flexDirection: "column", gap: spacing.md }}>
            <div>
              <Caption style={{ color: colors.ink3 }}>01</Caption>
              <Body
                style={{
                  marginTop: spacing.xxs,
                  textDecoration: "line-through",
                  color: colors.ink3,
                }}
              >
                A replacement for an assistant, model, or composer.
              </Body>
            </div>
            <ThinRule />
            <div>
              <Caption style={{ color: colors.ink3 }}>02</Caption>
              <Body
                style={{
                  marginTop: spacing.xxs,
                  textDecoration: "line-through",
                  color: colors.ink3,
                }}
              >
                A therapist, a friend, or a companion.
              </Body>
            </div>
            <ThinRule />
            <div>
              <Caption style={{ color: colors.ink3 }}>03</Caption>
              <Body
                style={{
                  marginTop: spacing.xxs,
                  textDecoration: "line-through",
                  color: colors.ink3,
                }}
              >
                A surveillance device. No speech is captured.
              </Body>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── 06 · Two Intervention Points ─────────────────────────────────────── */

function TwoInterventions() {
  return (
    <Section>
      <Eyebrow>The Response</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Two intervention points.</H2>
      <Body style={{ marginBottom: spacing.xl }}>
        The vicious cycle is reinforced wherever a prompt becomes an answer. Nara intervenes in two places — adding friction at the point of input, and offering an alternative loop at the point of output.
      </Body>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: spacing.lg }}>
        <Card>
          <Label>01 · Input side</Label>
          <H3
            style={{
              marginTop: spacing.xs,
              marginBottom: spacing.sm,
              fontFamily: fonts.serif,
              textTransform: "none" as const,
              fontWeight: 400,
            }}
          >
            Browser extension. Add friction to the prompt.
          </H3>
          <Body>
            A browser extension classifies prompts before they are sent. Personal, emotional, and offloading prompts are held and the user is offered a redirect to Nara — a chance, not a block.
          </Body>
          <div style={{ marginTop: spacing.md }}>
            <Link
              href="/brief/extension"
              style={{
                ...typography.label,
                textDecoration: "underline",
                color: colors.ink,
              }}
            >
              See the extension →
            </Link>
          </div>
        </Card>

        <Card>
          <Label>02 · Output side</Label>
          <H3
            style={{
              marginTop: spacing.xs,
              marginBottom: spacing.sm,
              fontFamily: fonts.serif,
              textTransform: "none" as const,
              fontWeight: 400,
            }}
          >
            Physical device. Provide an alternative loop.
          </H3>
          <Body>
            A palm-sized object that listens to context, reasons about it, and answers with three ambiguous images and one word. The user does the interpretation. The machine does not resolve.
          </Body>
          <div style={{ marginTop: spacing.md }}>
            <Link
              href="/architecture-v5"
              style={{
                ...typography.label,
                textDecoration: "underline",
                color: colors.ink,
              }}
            >
              See the architecture →
            </Link>
          </div>
        </Card>
      </div>

      <div style={{ marginTop: spacing.xl }}>
        <FrictionTrack
          leftLabel="Vicious cycle"
          centerLabel="Friction · alternative loop"
          rightLabel="Reflective cycle"
        />
      </div>
    </Section>
  );
}

/* ─── 07 · The Device ──────────────────────────────────────────────────── */

const COMMITMENTS = [
  { n: "01", label: "Restraint", body: "Say less. Withhold the answer the user did not earn." },
  {
    n: "02",
    label: "Open to interpretation",
    body: "Ambiguity is the feature. Each glyph holds multiple meanings; the user completes it.",
  },
  {
    n: "03",
    label: "Non-randomised and relevant",
    body: "Symbols are chosen against the user’s actual context. Never generative noise.",
  },
  {
    n: "04",
    label: "Friction",
    body: "Physical scrolling, slow interpretation, no chat surface. The pause is the point.",
  },
];

function Device() {
  return (
    <Section>
      <Eyebrow>The Device</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Three ambiguous images. One word.</H2>
      <Body style={{ marginBottom: spacing.xl }}>
        Nara is a palm-sized bag charm. It passively senses ambient context, compresses it across four timescales of knowing, and — when consulted — replies with three glyphs and a single word. No chat. No feed. No log.
      </Body>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: spacing.md,
          marginBottom: spacing.xl,
        }}
      >
        <MiniStat label="Form" value="Bag charm" />
        <MiniStat label="Display" value="200×200 E-Ink" />
        <MiniStat label="Output" value="3 images + 1 word" />
        <MiniStat label="Battery" value="7-day target" />
      </div>

      <H3
        style={{
          marginTop: spacing.xl,
          marginBottom: spacing.md,
          fontFamily: fonts.mono,
        }}
      >
        Four commitments
      </H3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {COMMITMENTS.map((c, i) => (
          <div key={c.n}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: spacing.md,
                padding: `${spacing.md}px 0`,
                alignItems: "baseline",
              }}
            >
              <Caption style={{ color: colors.ink3 }}>{c.n}</Caption>
              <div>
                <H3
                  style={{
                    fontFamily: fonts.serif,
                    textTransform: "none" as const,
                    fontWeight: 400,
                    marginBottom: spacing.xs,
                  }}
                >
                  {c.label}
                </H3>
                <Body>{c.body}</Body>
              </div>
            </div>
            {i < COMMITMENTS.length - 1 && <ThinRule />}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 08 · Glyph system (placeholder, no rendered inventory) ───────────── */

function GlyphSystem() {
  return (
    <Section>
      <Eyebrow>The Grammar</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Twenty-two glyphs. Three chosen. One word.</H2>
      <Body style={{ marginBottom: spacing.lg }}>
        Each glyph holds multiple meanings. The interpretation is yours to complete. A static inventory keeps the surface area small enough to learn, ambiguous enough to mean.
      </Body>

      {/* TODO: replace with hand-drawn glyph inventory pulled from deck2.fig / glyphs.fig */}
      <div
        aria-label="Glyph inventory placeholder"
        style={{
          border: borders.heavyRule,
          padding: spacing.lg,
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: spacing.xs,
        }}
      >
        {Array.from({ length: 22 }, (_, i) => (
          <div
            key={i}
            style={{
              aspectRatio: "1 / 1",
              border: borders.rule,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...typography.label,
              color: colors.ink3,
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </div>
        ))}
      </div>
      <Caption style={{ display: "block", marginTop: spacing.sm, color: colors.ink3 }}>
        Inventory placeholder — pending export from deck2.fig.
      </Caption>

      <Body style={{ marginTop: spacing.lg, fontStyle: "italic" }}>
        Ambiguity is the feature.
      </Body>
    </Section>
  );
}

/* ─── 09 · From product to policy ──────────────────────────────────────── */

function ProductToPolicy() {
  return (
    <Section>
      <Eyebrow>The Scope</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>From product to policy.</H2>
      <Body style={{ marginBottom: spacing.xl }}>
        Nara is a starting point, not an endpoint. The device proves the principle at the level of one person; institutions and infrastructure are where the principle scales.
      </Body>

      <div style={{ display: "flex", flexDirection: "column", gap: spacing.md }}>
        <Card>
          <Label>01 · Individual</Label>
          <H3
            style={{
              marginTop: spacing.xs,
              fontFamily: fonts.serif,
              textTransform: "none" as const,
              fontWeight: 400,
            }}
          >
            Nara.
          </H3>
          <Body>The product. The proof of concept. One person, one charm, one question at a time.</Body>
        </Card>

        <Card>
          <Label>02 · Institutional</Label>
          <H3
            style={{
              marginTop: spacing.xs,
              fontFamily: fonts.serif,
              textTransform: "none" as const,
              fontWeight: 400,
            }}
          >
            Adoption.
          </H3>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: spacing.md, marginTop: spacing.sm }}>
            <Label>Schools</Label>
            <Body>Require restrained AI consultation before LLM access.</Body>
            <Label>Clinics</Label>
            <Body>Mandate a physiological check-in before algorithmic recommendation.</Body>
            <Label>Workplaces</Label>
            <Body>Build restraint into high-judgment decision workflows.</Body>
          </div>
        </Card>

        <Card>
          <Label>03 · Infrastructural</Label>
          <H3
            style={{
              marginTop: spacing.xs,
              fontFamily: fonts.serif,
              textTransform: "none" as const,
              fontWeight: 400,
            }}
          >
            Policy.
          </H3>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: spacing.md, marginTop: spacing.sm }}>
            <Label>Regulation</Label>
            <Body>Require restraint intervals in high-engagement AI systems.</Body>
            <Label>Public programmes</Label>
            <Body>Grounded in cognitive sovereignty, not technical literacy.</Body>
            <Label>Disclosure</Label>
            <Body>Requirements analogous to nutritional labelling.</Body>
          </div>
        </Card>
      </div>
    </Section>
  );
}

/* ─── 10 · CTA strip ───────────────────────────────────────────────────── */

const CTA = [
  { href: "/brief/extension", label: "Extension", desc: "The browser-side intervention." },
  { href: "/architecture-v5", label: "Architecture", desc: "Device hardware, cloud pipeline, tiers." },
  { href: "/brief/intelligence", label: "Intelligence", desc: "Compression, consultation, glyph picker." },
  { href: "/brief/platform", label: "Platform", desc: "Companion app, privacy, hardware." },
];

function CTAStrip() {
  return (
    <Section>
      <Eyebrow>Explore</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>Dive deeper.</H2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: spacing.sm }}>
        {CTA.map((c) => (
          <Link key={c.href} href={c.href} style={{ textDecoration: "none", color: "inherit" }}>
            <InteractiveCard isActive={false} activeColor={colors.ink} padding={`${spacing.md}px`}>
              <Label>{c.label}</Label>
              <Body style={{ marginTop: spacing.xs }}>{c.desc}</Body>
            </InteractiveCard>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ─── 11 · References ──────────────────────────────────────────────────── */

const REFERENCES: string[] = [
  "Bentvelzen, Marit, et al. “Revisiting Reflection in HCI: Four Design Resources for Technologies that Support Reflection.” Proc. ACM IMWUT, 2022.",
  "Cheng, Myra, et al. “Sycophantic AI Decreases Prosocial Intentions and Promotes Dependence.” Science, vol. 391, 2026.",
  "Clark, A. “Whatever next? Predictive brains, situated agents, and the future of cognitive science.” Behavioral and Brain Sciences, 2013.",
  "Fang, Cathy Mengying, et al. “How AI and Human Behaviors Shape Psychosocial Effects of Extended Chatbot Use.” arXiv, 2025.",
  "Gigerenzer, Gerd. Gut Feelings. Viking, 2007.",
  "Gladwell, Malcolm. Blink. Little, Brown, 2005.",
  "Hofer, G. Tarot Cards: An Investigation of Their Benefit as a Tool for Self-Reflection. Univ. of Victoria, 2009.",
  "Kahneman, D. Thinking, Fast and Slow. Farrar, Straus and Giroux, 2011.",
  "Karusala, Naveena, et al. “Understanding Contestability on the Margins.” NSF Public Access Repository, 2024.",
  "Kosmyna, Nataliya, et al. “Your Brain on ChatGPT.” arXiv, 2025. MIT Media Lab.",
  "Lee, Hao-Ping (Hank), et al. “The Impact of Generative AI on Critical Thinking.” CHI ’25, 2025.",
  "Liu, Auren R., et al. “Chatbot Companionship: A Mixed-Methods Study.” MIT Media Lab, 2025.",
  "McAdams, D. P. The Stories We Live By. 1993.",
  "Muller, Jerry Z. The Tyranny of Metrics. Princeton UP, 2018.",
  "Raison, Lauren, et al. “The ‘Machinal Bypass’ and How We’re Using AI to Avoid Ourselves.” PNAS, 2025.",
  "Risko, Evan F., and Sam J. Gilbert. “Cognitive Offloading.” Trends in Cognitive Sciences, 2016.",
  "Russell, D. W., Peplau, L. A., and Cutrona, C. E. “The Revised UCLA Loneliness Scale.” JPSP, 1980.",
  "Schrage, Michael, and David Kiron. MIT Sloan Management Review, 2024–2025.",
  "Shannon, Claude E. “A Mathematical Theory of Communication.” Bell System Technical Journal, 1948.",
  "Shelmerdine, Susan, and Matthew Nour. “Emotional Risks of AI Companions Demand Attention.” Nature Machine Intelligence, 2025.",
  "Tufekci, Zeynep. “AI Is Going to Make Our Social Skills Worse.” The New York Times, 2026.",
  "Zuboff, Shoshana. The Age of Surveillance Capitalism. PublicAffairs, 2019.",
];

function References() {
  return (
    <Section>
      <Eyebrow>Appendix</Eyebrow>
      <H2 style={{ marginTop: spacing.sm, marginBottom: spacing.lg }}>References.</H2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {REFERENCES.map((ref, i) => (
          <div key={i}>
            <Body
              style={{
                fontSize: 14,
                lineHeight: 1.45,
                color: colors.ink2,
                padding: `${spacing.xs}px 0`,
              }}
            >
              {ref}
            </Body>
            {i < REFERENCES.length - 1 && <ThinRule />}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 12 · Footer ──────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      style={{
        maxWidth: COLUMN,
        margin: "0 auto",
        padding: `${spacing.xl}px ${spacing.lg}px ${spacing.xxl}px`,
        borderTop: borders.heavyRule,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ ...typography.label, color: colors.ink }}>NaRa · think authentically, again</span>
        <span style={{ ...typography.label, color: colors.ink3 }}>2026</span>
      </div>
    </footer>
  );
}

/* ─── Composition ──────────────────────────────────────────────────────── */

export default function Landing() {
  return (
    <main>
      <Hero />
      <Problem />
      <Mechanism />
      <AttachmentEconomy />
      <Canaries />
      <IsIsNot />
      <TwoInterventions />
      <Device />
      <GlyphSystem />
      <ProductToPolicy />
      <CTAStrip />
      <References />
      <Footer />
    </main>
  );
}
