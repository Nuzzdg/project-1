import { Globe } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function LanguageSwitcher() {
  const { lang, setLang, t, languages } = useI18n();

  return (
    <div className="lang" role="group" aria-label={t.nav.language}>
      <Globe className="lang__icon" size={16} strokeWidth={1.5} aria-hidden="true" />
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          className="lang__btn"
          lang={l.code}
          aria-pressed={lang === l.code}
          aria-label={l.name}
          title={l.name}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
