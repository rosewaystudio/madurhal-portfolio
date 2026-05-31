/* Logos.jsx — MD monogram mark components.
   Each is a self-contained SVG driven by currentColor and --md-accent. */

export const MDLogos = {
  stacked: ({ size = 36, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <text x="40" y="38" textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontStyle="italic" fontWeight="400" fontSize="30"
            fill="currentColor">M</text>
      <line x1="22" y1="44" x2="58" y2="44" stroke="currentColor" strokeWidth="0.6"/>
      <text x="40" y="68" textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontStyle="italic" fontWeight="400" fontSize="30"
            fill="currentColor">D</text>
    </svg>
  ),

  ligature: ({ size = 36, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 96 64" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M 8 56 L 8 8 L 28 44 L 48 8 L 48 56"/>
        <path d="M 48 8 C 76 8, 86 20, 86 32 C 86 44, 76 56, 48 56"/>
      </g>
      <g fill="currentColor">
        <rect x="3" y="55" width="10" height="2"/>
        <rect x="43" y="55" width="10" height="2"/>
      </g>
    </svg>
  ),

  circle: ({ size = 36, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <text x="40" y="50" textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontStyle="italic" fontWeight="400" fontSize="30"
            letterSpacing="-1"
            fill="currentColor">MD</text>
    </svg>
  ),

  period: ({ size = 36, className = "" }) => (
    <svg width={size * 1.6} height={size} viewBox="0 0 128 80" className={className} aria-hidden="true">
      <text x="64" y="54" textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontStyle="italic" fontWeight="400" fontSize="44"
            letterSpacing="-1"
            fill="currentColor">m<tspan fill="var(--md-accent)">.</tspan>d<tspan fill="var(--md-accent)">.</tspan></text>
    </svg>
  ),

  ruled: ({ size = 36, className = "" }) => (
    <svg width={size * 1.4} height={size} viewBox="0 0 112 80" className={className} aria-hidden="true">
      <text x="56" y="44" textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontWeight="400" fontSize="34"
            letterSpacing="2"
            fill="currentColor">MD</text>
      <line x1="32" y1="56" x2="80" y2="56" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="42" y1="62" x2="70" y2="62" stroke="currentColor" strokeWidth="0.4"/>
    </svg>
  ),

  /* "imprint" in the UI — key is "framed" in MDLogos */
  framed: ({ size = 36, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} aria-hidden="true">
      <rect x="8" y="8" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="13" y="13" width="54" height="54" fill="none" stroke="currentColor" strokeWidth="0.4"/>
      <text x="40" y="49" textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontWeight="400" fontSize="22"
            letterSpacing="0"
            fill="currentColor">MAD</text>
    </svg>
  ),
};

export const MDLogoMeta = [
  { id: "stacked",  name: "Stacked",   note: "Italic M over D, hairline rule. Quiet nameplate." },
  { id: "ligature", name: "Ligature",  note: "Custom MD with a shared stem. Most designed." },
  { id: "circle",   name: "Colophon",  note: "Ring mark with italic MD. Foil-stamp feel." },
  { id: "period",   name: "Lowercase", note: "m.d. with accent dots. Inline signature." },
  { id: "ruled",    name: "Masthead",  note: "MD with double rule. Newspaper editorial." },
  { id: "framed",   name: "Imprint",   note: "Boxed MAD. Publisher's colophon." },
];
