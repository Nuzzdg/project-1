// Decorative Eixample-style grid (chamfered "illa" blocks). Not a real map.
const STEP = 70;
const SIZE = 56;
const CUT = 13;
const TRAFALGAR_Y = 5 * STEP - (STEP - SIZE) / 2;

function block(x, y) {
  const s = SIZE;
  const c = CUT;
  return `${x + c},${y} ${x + s - c},${y} ${x + s},${y + c} ${x + s},${y + s - c} ${x + s - c},${y + s} ${x + c},${y + s} ${x},${y + s - c} ${x},${y + c}`;
}

export default function StylizedMap({ label }) {
  const blocks = [];
  for (let r = -3; r < 12; r++) {
    for (let c = -3; c < 12; c++) {
      blocks.push(<polygon key={`${r}-${c}`} points={block(c * STEP, r * STEP)} />);
    }
  }

  return (
    <svg className="map" viewBox="0 0 600 600" role="img" aria-label={label}>
      <rect width="600" height="600" className="map__ground" />
      <g transform="rotate(-44 300 300)">
        <g className="map__blocks">{blocks}</g>
        <line x1="-300" x2="900" y1={TRAFALGAR_Y} y2={TRAFALGAR_Y} className="map__street" />
        <text x="40" y={TRAFALGAR_Y - 12} className="map__label">C. de Trafalgar</text>
        <rect x={7 * STEP - 18} y={TRAFALGAR_Y - 18} width="36" height="36" className="map__arc" />
        <text x={7 * STEP + 30} y={TRAFALGAR_Y + 34} className="map__label map__label--muted">Arc de Triomf</text>

        <g transform={`translate(${4 * STEP + 7} ${TRAFALGAR_Y}) rotate(44)`}>
          <circle r="34" className="map__pulse" />
          <circle r="11" className="map__pin" />
          <circle r="4" className="map__pin-dot" />
        </g>
      </g>
      <g className="map__tag" transform="translate(346 368)">
        <rect width="168" height="46" />
        <text x="14" y="20">Trafalgar Pizza Club</text>
        <text x="14" y="36" className="map__tag-sub">Carrer de Trafalgar, 19</text>
      </g>
      <g className="map__compass" transform="translate(548 52)">
        <circle r="20" />
        <text y="-28" textAnchor="middle">N</text>
        <path d="M0 -14 L5 0 L0 14 L-5 0 Z" />
      </g>
    </svg>
  );
}
