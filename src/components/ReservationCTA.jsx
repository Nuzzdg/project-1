import Button from './Button.jsx';
import { IMAGES, LINKS } from '../data.js';

export default function ReservationCTA({ onBook }) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <p className="cta__ghost" aria-hidden="true">01:00</p>
      <div className="container cta__grid">
        <div className="cta__copy">
          <p className="eyebrow cta__eyebrow" data-reveal>Reservations · Takeaway · Delivery</p>
          <h2 id="cta-title" className="cta__title" data-reveal="lines">
            <span className="line"><span>Tonight's a</span></span>
            <span className="line"><span><em>pizza night.</em></span></span>
          </h2>
          <p className="cta__lede" data-reveal>Bring your people. We'll handle the pizza.</p>
          <div className="cta__ctas" data-reveal>
            <Button onClick={onBook} variant="dark">Book a table</Button>
            <Button href={LINKS.order} variant="line-light" external>Order online</Button>
          </div>
        </div>
        <figure className="cta__figure" data-reveal="img">
          <img src={IMAGES.cta} alt="Friends sharing a pizza across a table" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
