import { useState } from 'react';
import Button from './Button.jsx';
import { MENU, LINKS } from '../data.js';

export default function MenuSection() {
  const [tab, setTab] = useState(MENU[0].id);
  const [active, setActive] = useState(0);
  const category = MENU.find((c) => c.id === tab);
  const current = category.items[active] ?? category.items[0];

  const selectTab = (id) => {
    setTab(id);
    setActive(0);
  };

  const onTabKey = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + MENU.length) % MENU.length;
    selectTab(MENU[next].id);
    document.getElementById(`tab-${MENU[next].id}`)?.focus();
  };

  return (
    <section className="menu" id="menu" aria-labelledby="menu-title">
      <div className="container">
        <header className="menu__head">
          <p className="label" data-reveal>
            <span className="label__num">(02)</span> From the oven
          </p>
          <h2 id="menu-title" className="display menu__title" data-reveal="lines">
            <span className="line"><span>The good</span></span>
            <span className="line"><span><em>stuff.</em></span></span>
          </h2>

          <div className="menu__tabs" role="tablist" aria-label="Menu categories" data-reveal>
            {MENU.map((c, i) => (
              <button
                key={c.id}
                id={`tab-${c.id}`}
                type="button"
                role="tab"
                aria-selected={tab === c.id}
                aria-controls="menu-panel"
                tabIndex={tab === c.id ? 0 : -1}
                className="menu__tab"
                onClick={() => selectTab(c.id)}
                onKeyDown={(e) => onTabKey(e, i)}
              >
                {c.label}
                <sup>{c.items.length}</sup>
              </button>
            ))}
          </div>
        </header>

        <div className="menu__body">
          <ol id="menu-panel" className="menu__list" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab}>
            {category.items.map((item, i) => (
              <li
                key={item.name}
                className={`menu__item ${i === active ? 'is-active' : ''}`}
                style={{ '--i': i }}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="menu__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="menu__text">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <img className="menu__thumb" src={item.img} alt="" loading="lazy" />
              </li>
            ))}
          </ol>

          <div className="menu__preview" aria-hidden="true">
            <div className="menu__frame">
              {MENU.flatMap((c) => c.items).map((item) => (
                <img
                  key={item.name}
                  src={item.img}
                  alt=""
                  loading="lazy"
                  className={item.name === current.name ? 'is-shown' : ''}
                />
              ))}
            </div>
            <p className="menu__caption">
              <span>{current.name}</span>
              <span>Illustrative photo</span>
            </p>
          </div>
        </div>

        <footer className="menu__foot">
          <p>A selection of house favourites. Full menu, prices and allergens available at the restaurant.</p>
          <Button href={LINKS.website} variant="line" external>
            View full menu
          </Button>
        </footer>
      </div>
    </section>
  );
}
