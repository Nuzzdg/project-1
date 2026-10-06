import { GALLERY } from '../data.js';

export default function Gallery() {
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <header className="gallery__head">
          <p className="label" data-reveal>
            <span className="label__num">(03)</span> Atmosphere
          </p>
          <h2 id="gallery-title" className="display gallery__title" data-reveal="lines">
            <span className="line"><span>A table, a round,</span></span>
            <span className="line"><span><em>another round.</em></span></span>
          </h2>
        </header>

        <div className="gallery__grid">
          {GALLERY.map((item, i) => (
            <figure
              key={item.src}
              className={`gallery__item gallery__item--${item.shape} g${i + 1}`}
              tabIndex={0}
              data-reveal="img"
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>
                <span className="gallery__idx">{String(i + 1).padStart(2, '0')}</span>
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
