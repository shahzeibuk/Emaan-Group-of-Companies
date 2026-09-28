type Tone = "ink" | "paper";

function palette(tone: Tone) {
  if (tone === "paper") {
    return {
      stroke: "#f4f7f5",
      muted: "rgba(244, 247, 245, 0.62)",
      fill: "#0e3324",
    };
  }
  return {
    stroke: "#0e3324",
    muted: "#1b5c3a",
    fill: "#f7f6f2",
  };
}

export function RouteMark({ tone = "ink" }: { tone?: Tone }) {
  const { stroke, muted, fill } = palette(tone);
  const nodes = [78, 230, 400, 552];
  return (
    <svg viewBox="0 0 640 280" fill="none" aria-hidden="true">
      <path d="M36 206H604" stroke={muted} strokeWidth="1" />
      <path d="M78 206C78 92 214 78 230 206" stroke={stroke} strokeWidth="1.6" />
      <path d="M230 206C246 86 384 64 400 206" stroke={stroke} strokeWidth="1.6" />
      <path d="M400 206C418 108 530 96 552 206" stroke={stroke} strokeWidth="1.6" />
      {nodes.map((x) => (
        <circle key={x} cx={x} cy="206" r="6" fill={fill} stroke={stroke} strokeWidth="1.6" />
      ))}
      <rect x="118" y="104" width="42" height="30" stroke={stroke} />
      <path d="M126 114H152M126 122H146" stroke={muted} />
      <rect x="292" y="78" width="42" height="30" stroke={stroke} />
      <path d="M300 88H326M300 96H318" stroke={muted} />
      <rect x="468" y="112" width="42" height="30" stroke={stroke} />
      <path d="M476 122H502M476 130H494" stroke={muted} />
    </svg>
  );
}

export function SystemMark({ tone = "ink" }: { tone?: Tone }) {
  const { stroke, muted } = palette(tone);
  return (
    <svg viewBox="0 0 640 320" fill="none" aria-hidden="true">
      <rect x="24" y="24" width="592" height="272" stroke={stroke} />
      <path d="M24 72H616" stroke={stroke} />
      <circle cx="52" cy="48" r="4" stroke={stroke} />
      <circle cx="70" cy="48" r="4" stroke={stroke} />
      <circle cx="88" cy="48" r="4" stroke={stroke} />
      <path d="M168 24V296" stroke={muted} />
      <path d="M48 112H140M48 136H118M48 160H136M48 184H104" stroke={muted} />
      <path d="M196 112H560" stroke={stroke} strokeWidth="1.6" />
      <path d="M196 140H470" stroke={muted} />
      <path d="M196 164H530" stroke={muted} />
      <path d="M196 188H430" stroke={muted} />
      <rect x="196" y="214" width="190" height="58" stroke={stroke} />
      <path d="M212 236H360M212 252H330" stroke={muted} />
      <rect x="406" y="214" width="170" height="58" stroke={muted} />
      <path d="M422 236H552M422 252H520" stroke={muted} />
    </svg>
  );
}

export function EnclaveMark({ tone = "ink" }: { tone?: Tone }) {
  const { stroke, muted } = palette(tone);
  return (
    <svg viewBox="0 0 560 440" fill="none" aria-hidden="true">
      <rect x="20" y="20" width="520" height="400" stroke={stroke} />
      <rect x="48" y="48" width="108" height="78" stroke={stroke} />
      <rect x="168" y="48" width="108" height="78" stroke={stroke} />
      <rect x="288" y="48" width="100" height="78" stroke={stroke} />
      <rect x="400" y="48" width="112" height="78" stroke={stroke} />
      <rect x="48" y="314" width="146" height="78" stroke={stroke} />
      <rect x="206" y="314" width="146" height="78" stroke={stroke} />
      <rect x="364" y="314" width="148" height="78" stroke={stroke} />
      <rect x="48" y="150" width="78" height="68" stroke={stroke} />
      <rect x="48" y="230" width="78" height="68" stroke={stroke} />
      <rect x="434" y="150" width="78" height="68" stroke={stroke} />
      <rect x="434" y="230" width="78" height="68" stroke={stroke} />
      <rect x="154" y="154" width="252" height="132" stroke={stroke} strokeWidth="1.6" />
      <circle cx="214" cy="214" r="12" stroke={muted} />
      <circle cx="280" cy="232" r="16" stroke={muted} />
      <circle cx="348" cy="206" r="11" stroke={muted} />
      <path d="M280 20V154" stroke={muted} strokeDasharray="4 5" />
      <path d="M280 286V420" stroke={muted} strokeDasharray="4 5" />
    </svg>
  );
}

export function HousingMark({ tone = "ink" }: { tone?: Tone }) {
  const { stroke, muted } = palette(tone);
  const houses = [
    { x: 36, w: 92, wall: 76 },
    { x: 156, w: 112, wall: 96 },
    { x: 296, w: 96, wall: 80 },
    { x: 420, w: 124, wall: 104 },
    { x: 572, w: 78, wall: 68 },
  ];
  const ground = 198;
  return (
    <svg viewBox="0 0 680 250" fill="none" aria-hidden="true">
      <path d="M16 198H664" stroke={stroke} />
      <path d="M16 214H664" stroke={muted} />
      {houses.map((house) => {
        const top = ground - house.wall;
        const peak = top - 28;
        const mid = house.x + house.w / 2;
        return (
          <g key={house.x}>
            <path
              d={`M${house.x - 8} ${top} L${mid} ${peak} L${house.x + house.w + 8} ${top}`}
              stroke={stroke}
            />
            <rect x={house.x} y={top} width={house.w} height={house.wall} stroke={stroke} />
            <rect x={mid - 8} y={ground - 28} width="16" height="28" stroke={muted} />
          </g>
        );
      })}
      <circle cx="138" cy="158" r="16" stroke={muted} />
      <path d="M138 174V198" stroke={muted} />
      <circle cx="548" cy="150" r="18" stroke={muted} />
      <path d="M548 168V198" stroke={muted} />
    </svg>
  );
}
