import { MapPin } from 'lucide-react';
import Button from './Button.jsx';
import { IMAGES, SITE } from '../data.js';

export default function Hero({ onBook }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grid container">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span>Pizza</span>
            <span aria-hidden="true">·</span>
            <span>Cocktails</span>
            <span aria-hidden="true">·</span>
            <span>Barcelona</span>
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="line"><span>Neapolitan</span></span>
            <span className="line"><span>pizza,</span></span>
            <span className="line"><span><em>after dark.</em></span></span>
          </h1>

          <div className="hero__bottom">
            <p className="hero__lede">
              Wood-fired pizza, Italian comfort and Barcelona nights. Come hungry, stay late.
            </p>
            <div className="hero__ctas">
              <Button onClick={onBook}>Book a table</Button>
              <Button href="#menu" variant="line-light">View menu</Button>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <figure className="hero__main">
            <img src={IMAGES.hero} alt="A Neapolitan margherita with a blistered, charred crust and fresh basil" fetchPriority="high" />
          </figure>
          <figure className="hero__side">
            <img src={IMAGES.heroSide} alt="An amber cocktail with a rosemary garnish" loading="lazy" />
          </figure>
          <p className="hero__stamp" aria-hidden="true">
            <span>Open</span>
            <strong>until 01:00</strong>
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
          {SITE.hours}
        </p>
        <p className="hero__services">Dine-in · Takeaway · Delivery</p>
      </div>
    </section>
  );
}
