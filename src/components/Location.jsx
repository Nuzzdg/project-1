import Button from './Button.jsx';
import StylizedMap from './StylizedMap.jsx';
import { LINKS, SITE } from '../data.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Location({ onBook }) {
  const { t } = useI18n();
  const l = t.location;

  return (
    <section className="location" id="contact" aria-labelledby="location-title">
      <div className="container location__grid">
        <div className="location__copy">
          <p className="label" data-reveal>
            <span className="label__num">(05)</span> {l.label}
          </p>
          <h2 id="location-title" className="display location__title" data-reveal="lines">
            <span className="line"><span>{l.title[0]}</span></span>
            <span className="line"><span><em>{l.title[1]}</em></span></span>
          </h2>

          <address className="location__address" data-reveal>
            {SITE.street}
            <br />
            {SITE.postcode}
          </address>

          <dl className="location__meta" data-reveal>
            <div>
              <dt>{l.neighbourhood}</dt>
              <dd>{SITE.district}</dd>
            </div>
            <div>
              <dt>{l.hours}</dt>
              <dd>{t.common.hours}</dd>
            </div>
            <div>
              <dt>{l.ways}</dt>
              <dd>{t.common.services}</dd>
            </div>
          </dl>

          <div className="location__ctas" data-reveal>
            <Button href={LINKS.directions} variant="cream" external>
              {l.directions}
            </Button>
            <Button onClick={onBook} variant="line-light">
              {t.common.book}
            </Button>
          </div>
        </div>

        <figure className="location__map" data-reveal="img">
          <StylizedMap label={l.mapAria} />
          <figcaption>{l.mapCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
