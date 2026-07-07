export function ShapeIcon({ kind }: { kind: string }) {
  const st: React.SVGAttributes<SVGElement> & { strokeWidth?: number } = { stroke: 'var(--accent)', strokeWidth: 1.2, fill: 'transparent', strokeLinejoin: 'round' as const };
  const line = { stroke: 'var(--line-2)', strokeWidth: 0.7, fill: 'none' };

  const paths: Record<string, React.ReactNode> = {
    round: (
      <g>
        <circle cx={35} cy={35} r={26} {...st} />
        <circle cx={35} cy={35} r={15} {...line} />
        <line x1={9} y1={35} x2={61} y2={35} {...line} />
        <line x1={35} y1={9} x2={35} y2={61} {...line} />
        <line x1={17} y1={17} x2={53} y2={53} {...line} />
        <line x1={53} y1={17} x2={17} y2={53} {...line} />
      </g>
    ),
    princess: (
      <g>
        <rect x={12} y={12} width={46} height={46} {...st} />
        <rect x={23} y={23} width={24} height={24} {...line} />
        <line x1={12} y1={12} x2={58} y2={58} {...line} />
        <line x1={58} y1={12} x2={12} y2={58} {...line} />
      </g>
    ),
    emerald: (
      <g>
        <path d="M22 10 H48 L58 20 V50 L48 60 H22 L12 50 V20 Z" {...st} />
        <path d="M27 20 H43 L48 25 V45 L43 50 H27 L22 45 V25 Z" {...line} />
      </g>
    ),
    oval: (
      <g>
        <ellipse cx={35} cy={35} rx={19} ry={27} {...st} />
        <ellipse cx={35} cy={35} rx={10} ry={15} {...line} />
        <line x1={35} y1={8} x2={35} y2={62} {...line} />
      </g>
    ),
    cushion: (
      <g>
        <path d="M20 11 H50 Q59 11 59 20 V50 Q59 59 50 59 H20 Q11 59 11 50 V20 Q11 11 20 11 Z" {...st} />
        <path d="M27 23 H43 Q47 23 47 27 V43 Q47 47 43 47 H27 Q23 47 23 43 V27 Q23 23 27 23 Z" {...line} />
      </g>
    ),
    pear: (
      <g>
        <path d="M35 8 C48 22 54 32 54 42 A19 19 0 0 1 16 42 C16 32 22 22 35 8 Z" {...st} />
        <circle cx={35} cy={42} r={11} {...line} />
      </g>
    ),
    marquise: (
      <g>
        <path d="M35 8 C46 22 52 30 52 35 C52 40 46 48 35 62 C24 48 18 40 18 35 C18 30 24 22 35 8 Z" {...st} />
        <line x1={35} y1={8} x2={35} y2={62} {...line} />
        <line x1={18} y1={35} x2={52} y2={35} {...line} />
      </g>
    ),
  };

  return (
    <svg viewBox="0 0 70 70" width={70} height={70} style={{ overflow: 'visible' }}>
      {paths[kind] || paths.round}
    </svg>
  );
}
