import { Star } from 'lucide-react';
import { REVIEWS } from '../data.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Reviews() {
  const r = useI18n().t.reviews;

  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="container reviews__grid">
        <div className="reviews__score" data-reveal>
          <p className="label">
            <span className="label__num">(04)</span> {r.label}
          </p>
          <h2 id="reviews-title" className="visually-hidden">{r.heading}</h2>
          <p className="reviews__big">
            {r.rating}
            <span>/5</span>
          </p>
          <p className="reviews__stars" aria-label={r.ratedAria}>
            {[0, 1, 2, 3].map((i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
            ))}
            <span className="reviews__star-part" aria-hidden="true">
              <Star size={18} fill="currentColor" strokeWidth={0} />
            </span>
          </p>
          <p className="reviews__count">{r.count}</p>
        </div>

        <ul className="reviews__list">
          {REVIEWS.map((text, i) => (
            <li key={i} className={`reviews__item reviews__item--${i + 1}`} data-reveal>
              <blockquote lang="en">
                <p>“{text}”</p>
              </blockquote>
              <span className="reviews__src">{r.src}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
