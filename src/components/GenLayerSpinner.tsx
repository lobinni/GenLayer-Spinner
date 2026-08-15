/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  GENLAYER SPINNER — "The Adjudicator"                   ║
 * ║                                                          ║
 * ║  A loading animation that IS GenLayer's protocol:        ║
 * ║                                                          ║
 * ║  ❶ Hexagonal frame  — the network boundary (web3 DNA)   ║
 * ║  ❷ Three G-arcs     — the "G" + layered architecture    ║
 * ║  ❸ Validator nodes   — AI models computing per layer    ║
 * ║  ❹ Center pulse      — consensus / adjudication moment  ║
 * ║                                                          ║
 * ║  Brand:   Kinetic Cobalt #110FFF on Carbon Void #070707 ║
 * ║  Shape:   "G" letterform from three concentric C-arcs   ║
 * ║  Motion:  Independent rotation = decentralized process  ║
 * ║  Story:   Arcs misalign → validators orbit → they flash ║
 * ║           together → center pulses → consensus reached  ║
 * ╚══════════════════════════════════════════════════════════╝
 */

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerVariant = 'mark' | 'consensus' | 'nodes';

export interface GenLayerSpinnerProps {
  size?: SpinnerSize | number;
  variant?: SpinnerVariant;
  color?: string;
  className?: string;
  glow?: boolean;
  label?: string;
}

const SIZE_MAP: Record<SpinnerSize, number> = {
  xs: 16, sm: 24, md: 40, lg: 56, xl: 80,
};

export default function GenLayerSpinner({
  size = 'md',
  variant = 'mark',
  color = '#110FFF',
  className = '',
  glow = false,
  label = 'Loading',
}: GenLayerSpinnerProps) {
  const px = typeof size === 'number' ? size : SIZE_MAP[size];
  const cls = `inline-flex items-center justify-center ${glow ? 'gl-glow' : ''} ${className}`.trim();

  return (
    <div className={cls} role="status" aria-label={label} style={{ width: px, height: px }}>
      {variant === 'mark' && <MarkSpinner size={px} color={color} />}
      {variant === 'consensus' && <ConsensusSpinner size={px} color={color} />}
      {variant === 'nodes' && <NodesSpinner size={px} color={color} />}
      <span className="sr-only">{label}</span>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════
   MARK — "The Adjudicator"
   
   The primary GenLayer spinner. Unique in all of web3.
   
   Layers:
   1. Hexagonal frame (very faint) — blockchain network boundary
   2. Three concentric C-arcs forming "G" — GenLayer identity
   3. Three validator dots orbiting each ring — AI validators
   4. Center hex dot + consensus pulse — adjudication moment

   The hexagonal frame slowly counter-rotates with flowing
   dashes = data moving through the network.

   The G-arcs rotate independently: outer 3s CW, middle 2s CCW,
   inner 1.2s CW — representing layers processing at different
   speeds, like GenLayer's multi-layer protocol stack.

   The validator dots orbit at their own speeds, independent
   of the arcs — because validators compute independently.
   Every ~5s all dots flash bright + a pulse radiates from
   center = the consensus/adjudication moment.

   Arc geometry (viewBox 0 0 50 50, center 25,25):
     Outer  r=20  circ=125.66  280°arc=97.74  80°gap=27.93
     Middle r=14  circ=87.96   280°arc=68.42  80°gap=19.55
     Inner  r=8   circ=50.27   280°arc=39.10  80°gap=11.17
     dashoffset = -(gap/2) centers gap at 3-o'clock = "G" opening

   Hexagon (r=23, flat-top):
     M48,25 L36.5,44.92 L13.5,44.92 L2,25 L13.5,5.08 L36.5,5.08 Z
     perimeter ≈ 138
   ═══════════════════════════════════════════════════════════ */
function MarkSpinner({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* ① Hexagonal network frame — slow CCW rotation + flowing dashes */}
      <polygon
        className="gl-hex-frame"
        points="48,25 36.5,44.92 13.5,44.92 2,25 13.5,5.08 36.5,5.08"
        stroke={color}
        strokeWidth="0.5"
        strokeDasharray="4 6"
        opacity="0.07"
        fill="none"
      />

      {/* ② Three G-arcs — the protocol layers */}
      <circle className="gl-arc-outer" cx="25" cy="25" r="20"
        stroke={color} strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray="97.74 27.93" strokeDashoffset="-13.96" />

      <circle className="gl-arc-middle" cx="25" cy="25" r="14"
        stroke={color} strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray="68.42 19.55" strokeDashoffset="-9.77" />

      <circle className="gl-arc-inner" cx="25" cy="25" r="8"
        stroke={color} strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray="39.10 11.17" strokeDashoffset="-5.58" />

      {/* ③ Validator nodes — one per layer, orbiting independently */}
      {/* Outer validator (r=20 from center → dot at cx=45) */}
      <g className="gl-node-outer">
        <circle className="gl-node-dot" cx="45" cy="25" r="1.6" fill={color} />
      </g>
      {/* Middle validator (r=14 → dot at cx=39) */}
      <g className="gl-node-middle">
        <circle className="gl-node-dot" cx="39" cy="25" r="1.6" fill={color} />
      </g>
      {/* Inner validator (r=8 → dot at cx=33) */}
      <g className="gl-node-inner">
        <circle className="gl-node-dot" cx="33" cy="25" r="1.6" fill={color} />
      </g>

      {/* ④ Center: hexagonal adjudication point */}
      <polygon
        className="gl-center-hex"
        points="27,25 26,26.73 24,26.73 23,25 24,23.27 26,23.27"
        fill={color}
      />
      {/* Consensus pulse — radiates outward when nodes flash */}
      <circle
        className="gl-center-pulse"
        cx="25" cy="25" r="6"
        stroke={color} strokeWidth="0.8" fill="none"
      />
    </svg>
  );
}


/* ═══════════════════════════════════════════════════════════
   CONSENSUS — Three breathing arcs + adjudication dot

   Arcs expand → validators converge → consensus.
   Arcs contract → validators deliberate → next round.
   The central dot brightens when arcs are closest = decision.
   
   r=20, circumference=125.66, 3 segments × 41.89 each
   Contracted: 30° = 10.47 arc, 31.42 gap
   Expanded:  109° = 38.00 arc,  3.89 gap
   ═══════════════════════════════════════════════════════════ */
function ConsensusSpinner({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="gl-cons-ring" cx="25" cy="25" r="20"
        stroke={color} strokeWidth="3" strokeLinecap="round"
        strokeDasharray="10.47 31.42" />
      <circle className="gl-cons-dot" cx="25" cy="25" r="2.5" fill={color} />
    </svg>
  );
}


/* ═══════════════════════════════════════════════════════════
   NODES — Pure validator network

   Five dots representing the diverse AI validators
   (Claude, GPT, Gemini, Llama, Mistral…) orbiting a
   central adjudication point at different speeds.
   
   When they cluster → quorum reached.
   When they spread → independent deliberation.
   
   Each dot orbits on a ring (r=16) but at different speeds
   and starting angles — creating organic clustering patterns.
   ═══════════════════════════════════════════════════════════ */
function NodesSpinner({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Faint orbit path */}
      <circle cx="25" cy="25" r="16" stroke={color} strokeWidth="0.4" opacity="0.08" />

      {/* 5 validator dots — each at (41, 25) = r=16 from center, orbiting independently */}
      <g className="gl-nd-1"><circle className="gl-nd-dot" cx="41" cy="25" r="2" fill={color} opacity="0.8" /></g>
      <g className="gl-nd-2"><circle className="gl-nd-dot" cx="41" cy="25" r="2" fill={color} opacity="0.65" /></g>
      <g className="gl-nd-3"><circle className="gl-nd-dot" cx="41" cy="25" r="2" fill={color} opacity="0.8" /></g>
      <g className="gl-nd-4"><circle className="gl-nd-dot" cx="41" cy="25" r="2" fill={color} opacity="0.65" /></g>
      <g className="gl-nd-5"><circle className="gl-nd-dot" cx="41" cy="25" r="2" fill={color} opacity="0.8" /></g>

      {/* Center adjudication hex */}
      <polygon
        className="gl-nd-center"
        points="27.5,25 26.25,27.17 23.75,27.17 22.5,25 23.75,22.83 26.25,22.83"
        fill={color}
      />
    </svg>
  );
}
