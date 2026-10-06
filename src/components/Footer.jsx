import { LINKS, SITE } from '../data.js';

export default function Footer({ onBook }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col">
            <h2 className="footer__heading">Find us</h2>
            <address>
              {SITE.street}
              <br />
              {SITE.postcode}
            </address>
          </div>

          <div className="footer__col">
            <h2 className="footer__heading">Opening</h2>
            <p className="footer__open">Open late</p>
            <p>{SITE.hours}</p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2 className="footer__heading">Explore</h2>
            <ul className="footer__links">
              <li><a href="#menu">Menu</a></li>
              <li><button type="button" onClick={onBook}>Reservations</button></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href={LINKS.directions} target="_blank" rel="noopener noreferrer">Directions</a></li>
              <li><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </nav>

          <div className="footer__col footer__note">
            <p>Neapolitan pizza, cocktails and late nights in the heart of Barcelona. LGBTQ+ friendly, always.</p>
          </div>
        </div>

        <p className="footer__wordmark" aria-hidden="true">
          Trafa<em>l</em>gar
        </p>

        <div className="footer__bottom">
          <p>© {year} {SITE.name}</p>
          <p>Pizza Club · Barcelona</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
