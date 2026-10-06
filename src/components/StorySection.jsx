import { IMAGES } from '../data.js';

const FACETS = [
  ['Neapolitan pizza', 'Soft, blistered crust, simple toppings done properly.'],
  ['Cocktails', 'A proper drinks list for before, during and after.'],
  ['Desserts', 'Cannoli, tiramisù, pistachio cheesecake. Save room.'],
  ['Open late', 'Doors open until around one in the morning.'],
];

export default function StorySection() {
  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="container story__grid">
        <p className="label story__label" data-reveal>
          <span className="label__num">(01)</span> Our story
        </p>

        <h2 id="story-title" className="story__title display" data-reveal="lines">
          <span className="line"><span>Good pizza</span></span>
          <span className="line story__indent"><span>good people</span></span>
          <span className="line"><span><em>good nights.</em></span></span>
        </h2>

        <figure className="story__figure" data-reveal="img">
          <img src={IMAGES.story} alt="A dimly lit dining room with warm lights and wooden tables" loading="lazy" />
          <figcaption>
            <span>Carrer de Trafalgar</span>
            <span>Eixample, BCN</span>
          </figcaption>
        </figure>

        <div className="story__text" data-reveal>
          <p className="story__lead">
            Trafalgar Pizza Club brings Neapolitan-style pizza, Italian favourites and a lively late-night
            atmosphere to the heart of Barcelona.
          </p>
          <p>
            You'll find us on Carrer de Trafalgar, in the Eixample, a short walk from the Arc de Triomf. Come for a quick slice before a night out, or settle in with friends, a round of cocktails
            and dessert, and stay until the room gets loud.
          </p>
        </div>

        <ol className="story__facets">
          {FACETS.map(([title, text], i) => (
            <li key={title} data-reveal style={{ '--d': `${i * 80}ms` }}>
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
