export default function Logo({ className = '' }) {
  return (
    <a href="#top" className={`logo ${className}`} aria-label="Trafalgar Pizza Club — back to top">
      <span className="logo__word" aria-hidden="true">
        Trafa<em>l</em>gar
      </span>
      <span className="logo__sub" aria-hidden="true">Pizza Club</span>
    </a>
  );
}
