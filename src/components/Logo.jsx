import { useI18n } from '../i18n/I18nContext.jsx';

export default function Logo({ className = '' }) {
  const { t } = useI18n();
  return (
    <a href="#top" className={`logo ${className}`} aria-label={t.common.logoAria}>
      <span className="logo__word" aria-hidden="true">
        Trafa<em>l</em>gar
      </span>
      <span className="logo__sub" aria-hidden="true">Pizza Club</span>
    </a>
  );
}
