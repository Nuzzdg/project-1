import { useI18n } from '../i18n/I18nContext.jsx';

export default function Marquee({ variant = 'red', reverse = false }) {
  const { t } = useI18n();
  const words = t.marquee;

  // Content is repeated so the loop is seamless; only the first copy is read by screen readers.
  const group = (hidden) => (
    <ul className="marquee__group" aria-hidden={hidden || undefined}>
      {[...words, ...words].map((word, i) => (
        <li key={i}>
          <span className={i % 3 === 1 ? 'is-italic' : ''}>{word}</span>
          <span className="marquee__sep" aria-hidden="true">✺</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee marquee--${variant} ${reverse ? 'marquee--reverse' : ''}`}>
      <div className="marquee__track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
