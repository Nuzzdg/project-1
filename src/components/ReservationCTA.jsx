import Button from './Button.jsx';
import { IMAGES, LINKS } from '../data.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function ReservationCTA({ onBook }) {
  const { t } = useI18n();
  const c = t.cta;

  return (
    <section className="cta" aria-labelledby="cta-title">
      <p className="cta__ghost" aria-hidden="true">01:00</p>
      <div className="container cta__grid">
        <div className="cta__copy">
          <p className="eyebrow cta__eyebrow" data-reveal>{c.eyebrow}</p>
          <h2 id="cta-title" className="cta__title" data-reveal="lines">
            <span className="line"><span>{c.title[0]}</span></span>
            <span className="line"><span><em>{c.title[1]}</em></span></span>
          </h2>
          <p className="cta__lede" data-reveal>{c.lede}</p>
          <div className="cta__ctas" data-reveal>
            <Button onClick={onBook} variant="dark">{t.common.book}</Button>
            <Button href={LINKS.order} variant="line-light" external>{c.order}</Button>
          </div>
        </div>
        <figure className="cta__figure" data-reveal="img">
          <img src={IMAGES.cta} alt={c.imgAlt} loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
