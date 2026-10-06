import { Fragment } from 'react';
import { MapPin } from 'lucide-react';
import Button from './Button.jsx';
import { IMAGES } from '../data.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Hero({ onBook }) {
  const { t } = useI18n();
  const [l1, l2, l3] = t.hero.title;

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grid container">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            {t.hero.eyebrow.map((word, i) => (
              <Fragment key={word}>
                {i > 0 && <span aria-hidden="true">·</span>}
                <span>{word}</span>
              </Fragment>
            ))}
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="line"><span>{l1}</span></span>
            <span className="line"><span>{l2}</span></span>
            <span className="line"><span><em>{l3}</em></span></span>
          </h1>

          <div className="hero__bottom">
            <p className="hero__lede">{t.hero.lede}</p>
            <div className="hero__ctas">
              <Button onClick={onBook}>{t.common.book}</Button>
              <Button href="#menu" variant="line-light">{t.hero.viewMenu}</Button>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <figure className="hero__main">
            <img src={IMAGES.hero} alt={t.hero.heroAlt} fetchPriority="high" />
          </figure>
          <figure className="hero__side">
            <img src={IMAGES.heroSide} alt={t.hero.sideAlt} loading="lazy" />
          </figure>
          <p className="hero__stamp" aria-hidden="true">
            <span>{t.hero.stamp[0]}</span>
            <strong>{t.hero.stamp[1]}</strong>
            <span>Eixample</span>
          </p>
        </div>
      </div>

      <div className="hero__bar container">
        <p>
          <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
          Carrer de Trafalgar 19 · Barcelona
        </p>
        <p className="hero__hours">
          <span className="dot" aria-hidden="true" />
          {t.common.hours}
        </p>
        <p className="hero__services">{t.common.services}</p>
      </div>
    </section>
  );
}
