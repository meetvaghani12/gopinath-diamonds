'use client';

/**
 * A labelled side-profile cross-section of the diamond — the classic "anatomy
 * of the cut" figure. The crown/pavilion depth and the table width are driven
 * by the selected stone's real table % and depth %, so the drawing matches the
 * numbers listed alongside it.
 */
export function CutAnatomy({
  table,
  depth,
  label,
}: {
  table: number; // table width as a % of diameter, e.g. 57
  depth: number; // total depth as a % of diameter, e.g. 61.4
  label: string; // e.g. "Round Brilliant"
}) {
  const W = 480;
  const H = 400;
  const cx = 214;
  const gh = 120; // girdle half-width
  const girdleWidth = gh * 2;
  const topY = 112;

  const depthPx = (depth / 100) * girdleWidth;
  const crownH = depthPx * 0.32;
  const pavH = depthPx * 0.68;
  const girdleY = topY + crownH;
  const culetY = topY + depthPx;
  const tableHalf = (table / 100) * gh;

  const TL = [cx - tableHalf, topY];
  const TR = [cx + tableHalf, topY];
  const GL = [cx - gh, girdleY];
  const GR = [cx + gh, girdleY];
  const CU = [cx, culetY];

  const accent = 'var(--accent-bright)';
  const faint = 'var(--line-2)';
  const soft = 'var(--text-soft)';
  const muted = 'var(--muted)';
  const gold = 'var(--accent)';
  const labelFont = { fontFamily: "'Jost', sans-serif", letterSpacing: '0.22em' } as const;

  const profile = `M ${TL[0]} ${TL[1]} L ${TR[0]} ${TR[1]} L ${GR[0]} ${GR[1]} L ${CU[0]} ${CU[1]} L ${GL[0]} ${GL[1]} Z`;

  const Leader = ({ x, y, tx, ty, text }: { x: number; y: number; tx: number; ty: number; text: string }) => (
    <g>
      <line x1={x} y1={y} x2={tx} y2={ty} stroke={faint} strokeWidth={0.8} />
      <circle cx={x} cy={y} r={1.6} fill={gold} />
      <text x={tx} y={ty - 5} fill={muted} fontSize={10} style={labelFont} textAnchor={tx < cx ? 'start' : 'end'}>
        {text}
      </text>
    </g>
  );

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: 'block' }} role="img" aria-label={`${label} proportions diagram`}>
      <defs>
        <linearGradient id="cut-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-bright)" stopOpacity={0.16} />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity={0.03} />
        </linearGradient>
      </defs>

      {/* stone body */}
      <path d={profile} fill="url(#cut-fill)" stroke={accent} strokeWidth={1.4} strokeLinejoin="round" />

      {/* girdle emphasis */}
      <line x1={GL[0]} y1={girdleY} x2={GR[0]} y2={girdleY} stroke={accent} strokeWidth={1.4} />

      {/* crown facet lines */}
      <line x1={cx - tableHalf} y1={topY} x2={cx - gh * 0.5} y2={girdleY} stroke={faint} strokeWidth={0.7} />
      <line x1={cx + tableHalf} y1={topY} x2={cx + gh * 0.5} y2={girdleY} stroke={faint} strokeWidth={0.7} />

      {/* pavilion facet lines + center axis */}
      <line x1={cx - gh * 0.5} y1={girdleY} x2={CU[0]} y2={CU[1]} stroke={faint} strokeWidth={0.7} />
      <line x1={cx + gh * 0.5} y1={girdleY} x2={CU[0]} y2={CU[1]} stroke={faint} strokeWidth={0.7} />
      <line x1={cx} y1={topY} x2={cx} y2={culetY} stroke={faint} strokeWidth={0.6} strokeDasharray="3 4" />

      {/* TABLE dimension (above) */}
      <g>
        <line x1={TL[0]} y1={topY - 22} x2={TR[0]} y2={topY - 22} stroke={faint} strokeWidth={0.8} />
        <line x1={TL[0]} y1={topY - 27} x2={TL[0]} y2={topY - 17} stroke={faint} strokeWidth={0.8} />
        <line x1={TR[0]} y1={topY - 27} x2={TR[0]} y2={topY - 17} stroke={faint} strokeWidth={0.8} />
        <text x={cx} y={topY - 30} fill={gold} fontSize={10.5} style={labelFont} textAnchor="middle">
          {`TABLE ${table}%`}
        </text>
      </g>

      {/* DEPTH dimension (right) */}
      <g>
        <line x1={cx + gh + 34} y1={topY} x2={cx + gh + 34} y2={culetY} stroke={faint} strokeWidth={0.8} />
        <line x1={cx + gh + 29} y1={topY} x2={cx + gh + 39} y2={topY} stroke={faint} strokeWidth={0.8} />
        <line x1={cx + gh + 29} y1={culetY} x2={cx + gh + 39} y2={culetY} stroke={faint} strokeWidth={0.8} />
        <text x={cx + gh + 46} y={(topY + culetY) / 2 - 3} fill={gold} fontSize={10.5} style={labelFont} textAnchor="start">
          DEPTH
        </text>
        <text x={cx + gh + 46} y={(topY + culetY) / 2 + 12} fill={soft} fontSize={11} style={labelFont} textAnchor="start">
          {`${depth}%`}
        </text>
      </g>

      {/* anatomy leaders (left) */}
      <Leader x={cx - (tableHalf + gh) / 2} y={topY + crownH * 0.5} tx={40} ty={topY + crownH * 0.5} text="CROWN" />
      <Leader x={GL[0]} y={girdleY} tx={40} ty={girdleY + 4} text="GIRDLE" />
      <Leader x={cx - gh * 0.32} y={girdleY + pavH * 0.5} tx={40} ty={girdleY + pavH * 0.5} text="PAVILION" />
      <Leader x={CU[0]} y={CU[1]} tx={cx - 34} ty={culetY + 16} text="CULET" />

      <text x={cx} y={H - 14} fill={muted} fontSize={10} style={labelFont} textAnchor="middle">
        {label.toUpperCase()}
      </text>
    </svg>
  );
}
