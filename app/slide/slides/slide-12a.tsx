import {
  sankey,
  sankeyLinkHorizontal,
  sankeyLeft,
  type SankeyGraph,
  type SankeyNode,
  type SankeyLink,
} from "d3-sankey";
import {
  mediums,
  mediumEdges,
  resources,
  type NodeState,
} from "./_reflection-data";

// ─── Layout ───────────────────────────────────────────────────────────
// Three-layer horizontal Sankey:
//   Medium (App/Paper)  →  Design Resource  →  Nara Component
//
// Layer 0 = medium column
// Layer 1 = design resources (yes = flows to Nara, no = dead end)
// Layer 2 = Nara design components (each fed by specific yes-resources)

const CANVAS_W = 2200;
const CANVAS_H = 960;

const MARGIN_X = 181;
const MARGIN_Y = 60;

type NodeMeta = {
  id: string;
  state: NodeState;
  layer: 0 | 1 | 2;
};

type SNode = SankeyNode<NodeMeta, Record<string, never>>;
type SLink = SankeyLink<NodeMeta, Record<string, never>>;

// Nara's five design components and the yes-resources that justify each.
// Mapping grounded in the project brief (April 2026):
// — Physical Device: E-Ink + dial + single button enforce slowness; hardware separates intent
// — Glyph: 5–10 readings per symbol = ambiguity; output reframes rather than answers
// — Dynamic Context: four timescales of passive accumulation = past + absolute reference + storytelling arc
// — Anti-Anthropomorphic: intercepts AI conversations; rejects companion/pet framing
// — Browser Extension: gates AI at input (offloading) and output (sycophancy); enables social transaction
// Nara's five design components and the yes-resources that justify each.
// Browser Extension: lives in the browser, blocks AI inputs (offloading) and outputs (sycophancy),
//   and enables social transaction — all three social/conversational resources flow through it.
// Anti-Anthropomorphic: design stance that reframes what AI interaction can be.
const naraComponents: { id: string; sources: string[] }[] = [
  {
    id: "PHYSICAL DEVICE",
    sources: ["Reframing", "Provocation", "Future"],
  },
  {
    id: "GLYPH",
    sources: ["Slowness", "Ambiguity", "Storytelling", "Conversations with others"],
  },
  {
    id: "DYNAMIC CONTEXT",
    sources: ["Past", "Absolute reference"],
  },
  {
    id: "ANTI-ANTHROPOMORPHIC",
    sources: ["Conversations with technology"],
  },
  {
    id: "BROWSER EXTENSION",
    sources: ["Social reference", "Memories"],
  },
];

// Build a lookup: resource id → nara component id
const resourceToComponent: Record<string, string> = {};
for (const c of naraComponents) {
  for (const src of c.sources) {
    resourceToComponent[src] = c.id;
  }
}

const graphNodes: (NodeMeta & { depth: number })[] = [
  ...mediums.map((m) => ({ id: m.id, state: m.state, layer: 0 as const, depth: 0 })),
  ...resources.map((r) => ({ id: r.id, state: r.state, layer: 1 as const, depth: 1 })),
  ...naraComponents.map((c) => ({ id: c.id, state: "yes" as const, layer: 2 as const, depth: 2 })),
];

// Medium → Resource links
const mediumToResourceLinks = mediumEdges
  .filter((e) => mediums.some((m) => m.id === e.from) && resources.some((r) => r.id === e.to))
  .map((e) => ({ source: e.from, target: e.to, value: e.n }));

// Sum of all medium→resource flow for each resource id
const resourceInflow: Record<string, number> = {};
for (const e of mediumEdges) {
  if (resources.some((r) => r.id === e.to)) {
    resourceInflow[e.to] = (resourceInflow[e.to] ?? 0) + e.n;
  }
}

// Resource → Nara Component links (yes resources only)
// Value = total incoming flow from mediums, so the ribbon exactly equals
// the col-2 node height and the col-3 node height = sum of its incoming ribbons.
const resourceToComponentLinks = resources
  .filter((r) => r.state === "yes" && resourceToComponent[r.id])
  .map((r) => ({
    source: r.id,
    target: resourceToComponent[r.id],
    value: resourceInflow[r.id] ?? r.count,
  }));

const graphLinks = [...mediumToResourceLinks, ...resourceToComponentLinks];

const mediumOrder: Record<string, number> = { Paper: 0, App: 1 };
const componentOrder: Record<string, number> = {
  "BROWSER EXTENSION": 0,
  "ANTI-ANTHROPOMORPHIC": 1,
  "GLYPH": 2,
  "DYNAMIC CONTEXT": 3,
  "PHYSICAL DEVICE": 4,
};

function nodeSort(a: SNode, b: SNode): number {
  if (a.layer === 0 && b.layer === 0) {
    return (mediumOrder[a.id] ?? 99) - (mediumOrder[b.id] ?? 99);
  }
  if (a.layer === 2 && b.layer === 2) {
    return (componentOrder[a.id] ?? 99) - (componentOrder[b.id] ?? 99);
  }
  // Layer 1: sort by inflow ascending — largest mass at bottom
  const av = resourceInflow[a.id] ?? a.value ?? 0;
  const bv = resourceInflow[b.id] ?? b.value ?? 0;
  if (av !== bv) return av - bv;
  return a.id.localeCompare(b.id);
}

function computeLayout(): SankeyGraph<NodeMeta, Record<string, never>> {
  const generator = sankey<NodeMeta, Record<string, never>>()
    .nodeId((d) => d.id)
    .nodeAlign(sankeyLeft)
    .nodeWidth(22)
    .nodePadding(4)
    .nodeSort(nodeSort)
    .extent([
      [MARGIN_X, MARGIN_Y],
      [CANVAS_W - MARGIN_X, CANVAS_H - MARGIN_Y],
    ]);

  return generator({
    nodes: graphNodes.map((n) => ({ ...n })),
    links: graphLinks.map((l) => ({ ...l })) as unknown as SLink[],
  });
}

const linkPath = sankeyLinkHorizontal<NodeMeta, Record<string, never>>();

const RESOURCE_COLOR: Record<string, string> = {
  "Past":                         "#808BC5", // Lavender
  "Slowness":                     "#EAC119", // Mustard Yellow
  "Reframing":                    "#EAA7C7", // Pink Quartz
  "Conversations with others":    "#ED773C", // Tangerine
  "Conversations with technology":"#C63F3E", // Red Passion
  "Ambiguity":                    "#245E55", // Tea
  "Storytelling":                 "#A0522D", // sienna
  "Absolute reference":           "#6BAF92", // sage (mid Tea↔Seashell)
  "Social reference":             "#D4A0B0", // dusty rose (mid PinkQuartz↔RedPassion)
  "Provocation":                  "#B8C44A", // olive (mid MustardYellow↔Tea)
  "Memories":                     "#7DB8C1", // muted sky (mid Sky↔Lavender)
  "Future":                       "#E86B3A", // deep tangerine (mid Tangerine↔RedPassion)
};

const MEDIUM_COLOR: Record<string, string> = {
  Paper: "#9ED6DF", // Sky
  App:   "#EAE4DA", // Seashell
};

// For a medium→resource link, use the medium color.
// For a resource→component link, use the resource color.
// Returns [strokeColor, opacity].
function linkStyle(src: SNode, tgt: SNode): { color: string; opacity: number } {
  if (src.layer === 0) {
    return { color: MEDIUM_COLOR[src.id] ?? "#000", opacity: 1 };
  }
  if (src.layer === 1 && tgt.layer === 2) {
    return { color: RESOURCE_COLOR[src.id] ?? "#000", opacity: 1 };
  }
  return { color: "#000", opacity: 1 };
}

function centerMediumColumn(
  graph: SankeyGraph<NodeMeta, Record<string, never>>,
): void {
  const mediumNodes = (graph.nodes as SNode[]).filter((n) => n.layer === 0);
  const resourceNodes = (graph.nodes as SNode[]).filter((n) => n.layer === 1);
  if (!mediumNodes.length || !resourceNodes.length) return;

  const mTop = Math.min(...mediumNodes.map((n) => n.y0 ?? 0));
  const mBot = Math.max(...mediumNodes.map((n) => n.y1 ?? 0));
  const rTop = Math.min(...resourceNodes.map((n) => n.y0 ?? 0));
  const rBot = Math.max(...resourceNodes.map((n) => n.y1 ?? 0));

  const dy = (rTop + rBot) / 2 - (mTop + mBot) / 2;
  if (dy === 0) return;

  for (const n of mediumNodes) {
    if (n.y0 != null) n.y0 += dy;
    if (n.y1 != null) n.y1 += dy;
  }
  for (const l of graph.links) {
    const src = l.source as SNode;
    if (src.layer === 0 && l.y0 != null) l.y0 += dy;
  }
}

// Shift col-0 nodes rightward to reduce the gap between col 1 and col 2.
function compressCol0Gap(
  graph: SankeyGraph<NodeMeta, Record<string, never>>,
  factor: number, // 0.3 = close 30% of the gap
): void {
  const mediumNodes = (graph.nodes as SNode[]).filter((n) => n.layer === 0);
  const resourceNodes = (graph.nodes as SNode[]).filter((n) => n.layer === 1);
  if (!mediumNodes.length || !resourceNodes.length) return;

  const col0Right = Math.max(...mediumNodes.map((n) => n.x1 ?? 0));
  const col1Left  = Math.min(...resourceNodes.map((n) => n.x0 ?? 0));
  const shift = (col1Left - col0Right) * factor;

  for (const n of mediumNodes) {
    if (n.x0 != null) n.x0 += shift;
    if (n.x1 != null) n.x1 += shift;
  }
}

// Shift col-2 nodes rightward to increase the gap between col 2 and col 3.
function expandCol2Gap(
  graph: SankeyGraph<NodeMeta, Record<string, never>>,
  factor: number, // 0.2 = expand gap by 20%
): void {
  const resourceNodes = (graph.nodes as SNode[]).filter((n) => n.layer === 1);
  const compNodes = (graph.nodes as SNode[]).filter((n) => n.layer === 2);
  if (!resourceNodes.length || !compNodes.length) return;

  const col1Right = Math.max(...resourceNodes.map((n) => n.x1 ?? 0));
  const col2Left  = Math.min(...compNodes.map((n) => n.x0 ?? 0));
  const shift = (col2Left - col1Right) * factor;

  for (const n of compNodes) {
    if (n.x0 != null) n.x0 += shift;
    if (n.x1 != null) n.x1 += shift;
  }
}

// Re-stack the y0 departure points on col-0 nodes so outgoing ribbons leave
// in the same top→bottom order as their col-2 targets — no crossings col1→col2.
function fixSourceLinkOrder(
  graph: SankeyGraph<NodeMeta, Record<string, never>>,
): void {
  const mediumNodes = (graph.nodes as SNode[]).filter((n) => n.layer === 0);
  for (const src of mediumNodes) {
    const outgoing = graph.links.filter((l) => (l.source as SNode).id === src.id);
    if (outgoing.length < 2) continue;
    // Sort by target vertical midpoint
    outgoing.sort((a, b) => {
      const aTgt = a.target as SNode;
      const bTgt = b.target as SNode;
      const aMid = ((aTgt.y0 ?? 0) + (aTgt.y1 ?? 0)) / 2;
      const bMid = ((bTgt.y0 ?? 0) + (bTgt.y1 ?? 0)) / 2;
      return aMid - bMid;
    });
    // Re-stack y0 departure points from top of source node downward
    let cursor = src.y0 ?? 0;
    for (const l of outgoing) {
      const w = l.width ?? 0;
      l.y0 = cursor + w / 2;
      cursor += w;
    }
  }
}

// After layout, re-stack the y1 attachment points of links arriving at each
// col-3 node so they follow the top→bottom order of their col-2 sources.
// This prevents ribbons from crossing between col 2 and col 3.
function fixTargetLinkOrder(
  graph: SankeyGraph<NodeMeta, Record<string, never>>,
): void {
  const compNodes = (graph.nodes as SNode[]).filter((n) => n.layer === 2);
  for (const tgt of compNodes) {
    const incoming = graph.links.filter((l) => (l.target as SNode).id === tgt.id);
    if (incoming.length < 2) continue;
    // Sort by source vertical midpoint
    incoming.sort((a, b) => {
      const aSrc = a.source as SNode;
      const bSrc = b.source as SNode;
      const aMid = ((aSrc.y0 ?? 0) + (aSrc.y1 ?? 0)) / 2;
      const bMid = ((bSrc.y0 ?? 0) + (bSrc.y1 ?? 0)) / 2;
      return aMid - bMid;
    });
    // Re-stack y1 endpoints from top of target node downward
    let cursor = tgt.y0 ?? 0;
    for (const l of incoming) {
      const w = l.width ?? 0;
      l.y1 = cursor + w / 2;
      cursor += w;
    }
  }
}

export default function Slide12a() {
  const graph = computeLayout();
  centerMediumColumn(graph);
  compressCol0Gap(graph, 0.3);
  expandCol2Gap(graph, 0.2);

  // Push App node down by 32px relative to Paper to create a visible gap
  const appNode = (graph.nodes as SNode[]).find((n) => n.layer === 0 && n.id === "App");
  if (appNode) {
    const shift = 32;
    if (appNode.y0 != null) appNode.y0 += shift;
    if (appNode.y1 != null) appNode.y1 += shift;
    for (const l of graph.links) {
      if ((l.source as SNode).id === "App" && l.y0 != null) l.y0 += shift;
    }
  }

  // Add 32px gaps between col-2 nodes by pushing each one down cumulatively
  const compNodes = (graph.nodes as SNode[])
    .filter((n) => n.layer === 2)
    .sort((a, b) => (componentOrder[a.id] ?? 99) - (componentOrder[b.id] ?? 99));
  compNodes.forEach((n, i) => {
    const shift = i * 8;
    if (n.y0 != null) n.y0 += shift;
    if (n.y1 != null) n.y1 += shift;
    for (const l of graph.links) {
      if ((l.target as SNode).id === n.id && l.y1 != null) l.y1 += shift;
    }
  });

  // Vertically center col-2 nodes as a group to align with col-1 midpoint
  {
    const resourceNodes = (graph.nodes as SNode[]).filter((n) => n.layer === 1);
    const col1Mid = (
      Math.min(...resourceNodes.map((n) => n.y0 ?? 0)) +
      Math.max(...resourceNodes.map((n) => n.y1 ?? 0))
    ) / 2;
    const col2Top = Math.min(...compNodes.map((n) => n.y0 ?? 0));
    const col2Bot = Math.max(...compNodes.map((n) => n.y1 ?? 0));
    const col2Mid = (col2Top + col2Bot) / 2;
    const dy = col1Mid - col2Mid;
    for (const n of compNodes) {
      if (n.y0 != null) n.y0 += dy;
      if (n.y1 != null) n.y1 += dy;
    }
    for (const l of graph.links) {
      if ((l.target as SNode).layer === 2 && l.y1 != null) l.y1 += dy;
    }
  }

  fixSourceLinkOrder(graph);
  fixTargetLinkOrder(graph);

  // Re-center all three columns symmetrically within the canvas.
  // Use col-0 left bar edge ↔ col-2 right bar edge as the bounding box.
  const allNodes = graph.nodes as SNode[];
  const col0Nodes = allNodes.filter((n) => n.layer === 0);
  const col2Nodes = allNodes.filter((n) => n.layer === 2);
  const leftEdge  = Math.min(...col0Nodes.map((n) => n.x0 ?? 0));
  const rightEdge = Math.max(...col2Nodes.map((n) => n.x1 ?? 0));
  const diagramW  = rightEdge - leftEdge;
  const dx = (CANVAS_W - diagramW) / 2 - leftEdge;
  for (const n of allNodes) {
    if (n.x0 != null) n.x0 += dx;
    if (n.x1 != null) n.x1 += dx;
  }

  // Column header x midpoints (bar midpoints after all shifts)
  const col0Mid = (
    Math.min(...col0Nodes.map((n) => n.x0 ?? 0)) +
    Math.max(...col0Nodes.map((n) => n.x1 ?? 0))
  ) / 2;
  const col1Nodes2 = allNodes.filter((n) => n.layer === 1);
  const col1Mid = (
    Math.min(...col1Nodes2.map((n) => n.x0 ?? 0)) +
    Math.max(...col1Nodes2.map((n) => n.x1 ?? 0))
  ) / 2;
  const col2Mid = (
    Math.min(...col2Nodes.map((n) => n.x0 ?? 0)) +
    Math.max(...col2Nodes.map((n) => n.x1 ?? 0))
  ) / 2;

  // Draw Paper links first, then resource→component, then App links on top
  const sortedLinks = [...graph.links].sort((a, b) => {
    const srcA = a.source as SNode;
    const srcB = b.source as SNode;
    const orderA = srcA.layer === 0 && srcA.id === "App" ? 2 : srcA.layer === 1 ? 1 : 0;
    const orderB = srcB.layer === 0 && srcB.id === "App" ? 2 : srcB.layer === 1 ? 1 : 0;
    return orderA - orderB;
  });

  return (
    <div className="slide-frame">
      <div className="slide-strip">
        <span className="t-caption">
          REFLECTIVE HCI · INTERVENTION MAP · MEDIUM → RESOURCE → NARA
        </span>
      </div>
      <hr className="rule" />

      <div className="refl2">
        <div className="refl2__header">
          <div>
            <h1 className="refl2__title">
              Nara&apos;s Position In The Reflection Field
            </h1>
            <p className="refl2__subtitle">
              Design resources from Bentvelzen et al. (2022) mapped to Nara&apos;s
              five components. Slowness → physical dial. Ambiguity + Reframing
              → glyph output. Past + reference → temporal context. Each
              component is a direct design response to a reflective resource.
            </p>
          </div>
          <div className="refl2__legend">
            <span className="refl2__legend-item">
              <span className="refl2__swatch" style={{ background: "#9ED6DF" }} />
              PAPER
            </span>
            <span className="refl2__legend-item">
              <span className="refl2__swatch" style={{ background: "#EAE4DA" }} />
              APP
            </span>
            <span className="refl2__legend-item">
              <span className="refl2__swatch refl2__swatch--no" />
              REFUSED BY NARA
            </span>
          </div>
        </div>

        <div className="refl2__stage">
          <svg
            className="refl2__svg"
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Column headers */}
            <g>
              {[
                { x: col0Mid, label: "PAPER / APP" },
                { x: col1Mid, label: "DESIGN RESOURCES" },
                { x: col2Mid, label: "NARA" },
              ].map(({ x, label }) => (
                <text
                  key={label}
                  x={x}
                  y={28}
                  textAnchor="middle"
                  className="refl12-col-header"
                  fontSize={24}
                  letterSpacing={2}
                >
                  {label}
                </text>
              ))}
            </g>

            <g>
              {sortedLinks.map((l, i) => {
                const d = linkPath(l);
                if (!d) return null;
                const { color, opacity } = linkStyle(l.source as SNode, l.target as SNode);
                const width = Math.max(1, l.width ?? 1);
                return (
                  <path
                    key={i}
                    d={d}
                    strokeWidth={width}
                    stroke={color}
                    strokeOpacity={opacity}
                    fill="none"
                    strokeLinecap="butt"
                  />
                );
              })}
            </g>

            <g>
              {(graph.nodes as SNode[]).map((n) => {
                const x0 = n.x0 ?? 0;
                const x1 = n.x1 ?? 0;
                const y0 = n.y0 ?? 0;
                const y1 = n.y1 ?? 0;
                const isYesResource = n.layer === 1 && n.state === "yes";
                const resourceColor = isYesResource ? "#1D1D1B" : undefined;
                const cls =
                  n.layer === 0 && n.id === "Paper"
                    ? "refl12-node-paper"
                    : n.layer === 0 && n.id === "App"
                      ? "refl12-node-app"
                      : n.layer === 2
                        ? "refl12-node-nara"
                        : n.state === "no"
                          ? "refl2-node-no"
                          : "refl12-node-neutral";
                return (
                  <rect
                    key={n.id}
                    className={isYesResource ? undefined : cls}
                    x={x0}
                    y={y0}
                    width={x1 - x0}
                    height={y1 - y0}
                    fill={resourceColor}
                    stroke={resourceColor}
                  />
                );
              })}
            </g>

            <g>
              {(graph.nodes as SNode[]).map((n) => {
                const x0 = n.x0 ?? 0;
                const x1 = n.x1 ?? 0;
                const y0 = n.y0 ?? 0;
                const y1 = n.y1 ?? 0;
                const yMid = (y0 + y1) / 2;
                const isLeft = n.layer === 0;
                const isRight = n.layer === 2;
                const tx = isLeft ? x0 - 14 : x1 + 14;
                const anchor = isLeft ? "end" : "start";
                const labelClass =
                  n.layer === 0
                    ? "refl12-label"
                    : n.layer === 2
                      ? "refl12-label refl12-label--nara"
                      : n.state === "no"
                        ? "refl12-label refl12-label--no"
                        : "refl12-label";
                const fontSize = 24;
                return (
                  <text
                    key={n.id}
                    className={labelClass}
                    x={tx}
                    y={yMid + (isLeft ? 15 : 5)}
                    textAnchor={anchor}
                    fontSize={fontSize}
                  >
                    {n.id.toUpperCase()}
                  </text>
                );
              })}
            </g>
          </svg>
        </div>
      </div>

      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">
          ◉ NARA COMPONENT · ☒ REFUSED · ◌ FIELD
        </span>
        <span className="t-source">BAUMER ET AL · IMWUT 2022</span>
      </div>
    </div>
  );
}
