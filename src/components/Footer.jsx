import { LINKS, SITE } from '../data.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Footer({ onBook }) {
  const { t } = useI18n();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col">
            <h2 className="footer__heading">{f.findUs}</h2>
            <address>
              {SITE.street}
              <br />
              {SITE.postcode}
            </address>
          </div>

          <div className="footer__col">
            <h2 className="footer__heading">{f.opening}</h2>
            <p className="footer__open">{f.openLate}</p>
            <p>{t.common.hours}</p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2 className="footer__heading">{f.explore}</h2>
            <ul className="footer__links">
              <li><a href="#menu">{f.links.menu}</a></li>
              <li><button type="button" onClick={onBook}>{f.links.reservations}</button></li>
              <li><a href="#contact">{f.links.contact}</a></li>
              <li><a href={LINKS.directions} target="_blank" rel="noopener noreferrer">{f.links.directions}</a></li>
              <li><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </nav>

          <div className="footer__col footer__note">
            <p>{f.note}</p>
          </div>
        </div>

        <p className="footer__wordmark" aria-hidden="true">
          Trafa<em>l</em>gar
        </p>

        <div className="footer__bottom">
          <p>© {year} {SITE.name}</p>
          <p>Pizza Club · Barcelona</p>
          <a href="#top">{f.backTop}</a>
        </div>
      </div>
    </footer>
  );
}
