import { IMAGES } from '../data.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function StorySection() {
  const { t } = useI18n();
  const s = t.story;

  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="container story__grid">
        <p className="label story__label" data-reveal>
          <span className="label__num">(01)</span> {s.label}
        </p>

        <h2 id="story-title" className="story__title display" data-reveal="lines">
          <span className="line"><span>{s.title[0]}</span></span>
          <span className="line story__indent"><span>{s.title[1]}</span></span>
          <span className="line"><span><em>{s.title[2]}</em></span></span>
        </h2>

        <figure className="story__figure" data-reveal="img">
          <img src={IMAGES.story} alt={s.imgAlt} loading="lazy" />
          <figcaption>
            <span>Carrer de Trafalgar</span>
            <span>Eixample, BCN</span>
          </figcaption>
        </figure>

        <div className="story__text" data-reveal>
          <p className="story__lead">{s.lead}</p>
          <p>{s.body}</p>
        </div>

        <ol className="story__facets">
          {s.facets.map(([title, text], i) => (
            <li key={i} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <span className="story__facet-num">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
