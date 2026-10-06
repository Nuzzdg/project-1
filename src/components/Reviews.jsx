import { Star } from 'lucide-react';
import { REVIEWS, SITE } from '../data.js';

export default function Reviews() {
  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="container reviews__grid">
        <div className="reviews__score" data-reveal>
          <p className="label">
            <span className="label__num">(04)</span> What people say
          </p>
          <h2 id="reviews-title" className="visually-hidden">Reviews</h2>
          <p className="reviews__big">
            {SITE.rating}
            <span>/5</span>
          </p>
          <p className="reviews__stars" aria-label={`Rated ${SITE.rating} out of 5`}>
            {[0, 1, 2, 3].map((i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
            ))}
            <span className="reviews__star-part" aria-hidden="true">
              <Star size={18} fill="currentColor" strokeWidth={0} />
            </span>
          </p>
          <p className="reviews__count">
            {SITE.reviewCount} reviews on Google
          </p>
        </div>

        <ul className="reviews__list">
          {REVIEWS.map((text, i) => (
            <li key={i} className={`reviews__item reviews__item--${i + 1}`} data-reveal>
              <blockquote>
                <p>“{text}”</p>
              </blockquote>
              <span className="reviews__src">Google review</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
