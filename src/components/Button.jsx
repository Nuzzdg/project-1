import { ArrowRight, ArrowUpRight } from 'lucide-react';

// Tactile text button. Renders <a> when given href, otherwise <button>.
export default function Button({ href, onClick, variant = 'red', external, children, className = '' }) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const cls = `btn btn--${variant} ${className}`.trim();
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      <Icon className="btn__icon" size={16} strokeWidth={1.75} aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <a className={cls} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
