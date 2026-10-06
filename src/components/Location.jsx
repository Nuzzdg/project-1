import Button from './Button.jsx';
import StylizedMap from './StylizedMap.jsx';
import { LINKS, SITE } from '../data.js';

export default function Location({ onBook }) {
  return (
    <section className="location" id="contact" aria-labelledby="location-title">
      <div className="container location__grid">
        <div className="location__copy">
          <p className="label" data-reveal>
            <span className="label__num">(05)</span> Find us
          </p>
          <h2 id="location-title" className="display location__title" data-reveal="lines">
            <span className="line"><span>Meet us</span></span>
            <span className="line"><span><em>on Trafalgar.</em></span></span>
          </h2>

          <address className="location__address" data-reveal>
            {SITE.street}
            <br />
            {SITE.postcode}
          </address>

          <dl className="location__meta" data-reveal>
            <div>
              <dt>Neighbourhood</dt>
              <dd>{SITE.district}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{SITE.hours}</dd>
            </div>
            <div>
              <dt>Ways to eat</dt>
              <dd>Dine-in · Takeaway · Delivery</dd>
            </div>
          </dl>

          <div className="location__ctas" data-reveal>
            <Button href={LINKS.directions} variant="cream" external>
              Get directions
            </Button>
            <Button onClick={onBook} variant="line-light">
              Book a table
            </Button>
          </div>
        </div>

        <figure className="location__map" data-reveal="img">
          <StylizedMap />
          <figcaption>Stylised map — not to scale</figcaption>
        </figure>
      </div>
    </section>
  );
}
