import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { NAV_HREFS, SITE } from '../data.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Navbar({ onBook }) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const nav = NAV_HREFS.map((href, i) => ({ href, label: t.nav.links[i] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <Logo />

        <nav className="nav__links" aria-label="Main">
          <ul>
            {nav.map((item, i) => (
              <li key={item.href}>
                <a href={item.href}>
                  <span className="nav__num">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitcher />

        <button type="button" className="nav__book" onClick={onBook}>
          {t.common.book}
        </button>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.close : t.nav.open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ol>
            {nav.map((item, i) => (
              <li key={item.href} style={{ '--i': i }}>
                <a href={item.href} onClick={close}>
                  <span className="mobile-menu__num">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mobile-menu__foot">
          <button
            type="button"
            className="btn btn--cream"
            onClick={() => {
              close();
              onBook();
            }}
          >
            <span className="btn__label">{t.common.book}</span>
          </button>
          <p>
            {SITE.street}
            <br />
            {SITE.postcode} · {t.common.hours}
          </p>
        </div>
      </div>
    </header>
  );
}
