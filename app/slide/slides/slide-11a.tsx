import {
  sankey,
  sankeyLinkHorizontal,
  sankeyLeft,
  type SankeyGraph,
  type SankeyNode,
  type SankeyLink,
} from "d3-sankey";
import {
  resources,
  patterns,
  edges,
  type NodeState,
} from "./_reflection-data";

// ─── Layout ───────────────────────────────────────────────────────────
// d3-sankey lays out left → right. We build the diagram in its native
// orientation, then apply an SVG matrix transform (0 1 1 0 0 0) to the
// drawing group, which swaps the x and y axes — turning the horizontal
// sankey into a vertical, top → bottom flow. Labels are rendered OUTSIDE
// that swapped group, at manually-computed positions, so they read
// horizontally.
//
// Layout canvas (before rotation):
//   width  → becomes vertical height  (flow direction)
//   height → becomes horizontal width (node breadth)

const CANVAS_W = 1760; // becomes VIEW height after swap — vertical space
const CANVAS_H = 960;  // becomes VIEW width  after swap — horizontal space

// Working area inside the canvas, with margins for labels
const MARGIN_X = 30;   // flow-direction padding (becomes vertical)
const MARGIN_Y = 220;  // breadth padding (becomes horizontal — label room)

type NodeMeta = {
  id: string;
  state: NodeState;
  layer: 0 | 1; // 0 = resource, 1 = pattern
};

type SNode = SankeyNode<NodeMeta, Record<string, never>>;
type SLink = SankeyLink<NodeMeta, Record<string, never>>;

// Build graph input
const graphNodes: NodeMeta[] = [
  ...resources.map((r) => ({ id: r.id, state: r.state, layer: 0 as const })),
  ...patterns.map((p) => ({ id: p.id, state: p.state, layer: 1 as const })),
];

const graphLinks = edges
  .filter((e) => {
    const hasSource = resources.some((r) => r.id === e.from);
    const hasTarget = patterns.some((p) => p.id === e.to);
    return hasSource && hasTarget;
  })
  .map((e) => ({ source: e.from, target: e.to, value: e.n }));

function computeLayout(): SankeyGraph<NodeMeta, Record<string, never>> {
  const generator = sankey<NodeMeta, Record<string, never>>()
    .nodeId((d) => d.id)
    .nodeAlign(sankeyLeft)
    .nodeWidth(22)
    .nodePadding(10)
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

function linkState(src: NodeState, tgt: NodeState): "yes" | "no" {
  return src === "yes" && tgt === "yes" ? "yes" : "no";
}

export default function Slide11a() {
  const graph = computeLayout();

  // After layout, each node has x0/x1/y0/y1.
  // We render inside a <g> with transform matrix(0 1 1 0 0 0) so the
  // axes swap: a point (x, y) in layout space maps to (y, x) on screen.
  // That means the viewBox must be CANVAS_H × CANVAS_W (swapped).
  const viewW = CANVAS_H;
  const viewH = CANVAS_W;

  // Sort links so YES ribbons render on top of NO ribbons
  const sortedLinks = [...graph.links].sort((a, b) => {
    const sa = linkState(
      (a.source as SNode).state,
      (a.target as SNode).state,
    );
    const sb = linkState(
      (b.source as SNode).state,
      (b.target as SNode).state,
    );
    if (sa === sb) return 0;
    return sa === "yes" ? 1 : -1;
  });

  // Labels — rendered OUTSIDE the swapped group, in screen coordinates.
  // For each node, compute its screen position by swapping x/y.
  // Layer 0 (resources) → top of slide    → labels go ABOVE their node
  // Layer 1 (patterns)  → bottom of slide → labels go BELOW their node
  const labelItems = (graph.nodes as SNode[]).map((n) => {
    const x0 = n.x0 ?? 0;
    const x1 = n.x1 ?? 0;
    const y0 = n.y0 ?? 0;
    const y1 = n.y1 ?? 0;
    // Screen coords = (layoutY, layoutX)
    const screenX = (y0 + y1) / 2;
    const screenY = (x0 + x1) / 2;
    const screenTop = x0;     // node top edge on screen (vertical)
    const screenBottom = x1;  // node bottom edge on screen
    return {
      id: n.id,
      state: n.state,
      layer: n.layer,
      screenX,
      screenY,
      screenTop,
      screenBottom,
      breadth: y1 - y0,
    };
  });

  return (
    <div className="slide-frame">
      {/* Top strip */}
      <div className="slide-strip">
        <span className="t-caption">
          REFLECTIVE HCI · DESIGN RESOURCES × DESIGN PATTERNS
        </span>
      </div>
      <hr className="rule" />

      <div className="refl2">
        {/* Header */}
        <div className="refl2__header">
          <div>
            <h1 className="refl2__title">
              Where NaRa Sits — and What NaRa Refuses
            </h1>
            <p className="refl2__subtitle">
              A reading of the Baumer et al. (IMWUT 2022) reflective-HCI
              taxonomy. NaRa embodies a specific cluster of resources and
              patterns, and deliberately cuts away the rest.
            </p>
          </div>
          <div className="refl2__legend">
            <span className="refl2__legend-item">
              <span className="refl2__swatch refl2__swatch--yes" />
              NARA EMBODIES
            </span>
            <span className="refl2__legend-item">
              <span className="refl2__swatch refl2__swatch--no" />
              NARA REFUSES
            </span>
          </div>
        </div>

        <div className="refl2__stage">
          <svg
            className="refl2__svg"
            viewBox={`0 0 ${viewW} ${viewH}`}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Row tags — in screen coordinates (horizontal) */}
            <text className="refl2-row-tag" x={18} y={MARGIN_Y - 140}>
              DESIGN RESOURCES
            </text>
            <text className="refl2-row-tag" x={18} y={MARGIN_Y - 124}>
              THE EIGHT NARA LEANS ON
            </text>
            <text
              className="refl2-row-tag"
              x={18}
              y={CANVAS_W - MARGIN_Y + 140}
            >
              DESIGN PATTERNS
            </text>
            <text
              className="refl2-row-tag"
              x={18}
              y={CANVAS_W - MARGIN_Y + 156}
            >
              WHAT NARA DOES · WHAT NARA REFUSES
            </text>

            {/* Swapped drawing group — layout (x,y) → screen (y,x) */}
            <g transform="matrix(0 1 1 0 0 0)">
              {/* NO links first, then YES links on top */}
              <g>
                {sortedLinks.map((l, i) => {
                  const d = linkPath(l);
                  if (!d) return null;
                  const state = linkState(
                    (l.source as SNode).state,
                    (l.target as SNode).state,
                  );
                  const width = Math.max(1, l.width ?? 1);
                  return (
                    <path
                      key={i}
                      className={
                        state === "yes" ? "refl2-link-yes" : "refl2-link-no"
                      }
                      d={d}
                      strokeWidth={width}
                    />
                  );
                })}
              </g>

              {/* Nodes */}
              <g>
                {(graph.nodes as SNode[]).map((n) => {
                  const x0 = n.x0 ?? 0;
                  const x1 = n.x1 ?? 0;
                  const y0 = n.y0 ?? 0;
                  const y1 = n.y1 ?? 0;
                  return (
                    <rect
                      key={n.id}
                      className={
                        n.state === "yes" ? "refl2-node-yes" : "refl2-node-no"
                      }
                      x={x0}
                      y={y0}
                      width={x1 - x0}
                      height={y1 - y0}
                    />
                  );
                })}
              </g>
            </g>

            {/* Labels — rendered OUTSIDE the swapped group, so they read
                horizontally. screenX/screenY are already in view-space. */}
            <g>
              {labelItems.map((item) => {
                const isResource = item.layer === 0;
                const lines = wrapLabel(item.id, 18);
                const lineHeight = 13;
                const totalLines = lines.length;
                // Gap between node edge and first line of label
                const gap = 14;
                const yStart = isResource
                  ? item.screenTop - gap - (totalLines - 1) * lineHeight
                  : item.screenBottom + gap + lineHeight * 0.8;
                const labelClass =
                  item.state === "no"
                    ? "refl2-label refl2-label--no"
                    : "refl2-label";
                return (
                  <g key={item.id}>
                    {lines.map((line, li) => (
                      <text
                        key={li}
                        className={labelClass}
                        x={item.screenX}
                        y={yStart + li * lineHeight}
                        textAnchor="middle"
                      >
                        {line}
                      </text>
                    ))}
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>

      {/* Bottom strip */}
      <hr className="rule" />
      <div
        className="slide-strip"
        style={{ justifyContent: "space-between" }}
      >
        <span className="t-caption">☑ NARA · THE SPINE</span>
        <span className="t-source">BAUMER ET AL · IMWUT 2022</span>
      </div>
    </div>
  );
}

// ─── Label wrapping ───────────────────────────────────────────────────
// Break on spaces so each line fits within maxChars. If a single word
// exceeds the budget we still place it on its own line.
function wrapLabel(label: string, maxChars: number): string[] {
  const words = label.split(/\s+/);
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const candidate = cur ? cur + " " + w : w;
    if (candidate.length > maxChars && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = candidate;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}
