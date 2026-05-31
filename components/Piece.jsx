/* Piece.jsx — single work sample card */

export default function Piece({ num, cat, name, sub, desc, tags, href = "#" }) {
  const isExternal = href !== "#";

  return (
    <a
      className="port-piece"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <div className="port-piece-num">{num}</div>
      <div className="port-piece-body">
        <div className="port-piece-cat">{cat}</div>
        <h3 className="port-piece-name">{name}</h3>
        <div className="port-piece-sub">{sub}</div>
        <p className="port-piece-desc">{desc}</p>
        <div className="port-piece-tags">
          {tags.map((tag, i) => (
            <span key={i} className="port-piece-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="port-piece-arrow" aria-hidden="true">→</div>
    </a>
  );
}
