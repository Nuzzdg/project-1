import { useState } from 'react';
import Button from './Button.jsx';
import { MENU, LINKS } from '../data.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function MenuSection() {
  const { t } = useI18n();
  const m = t.menu;
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
            <span className="label__num">(02)</span> {m.label}
          </p>
          <h2 id="menu-title" className="display menu__title" data-reveal="lines">
            <span className="line"><span>{m.title[0]}</span></span>
            <span className="line"><span><em>{m.title[1]}</em></span></span>
          </h2>

          <div className="menu__tabs" role="tablist" aria-label={m.tabsAria} data-reveal>
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
                {m.tabs[c.id]}
                <sup>{c.items.length}</sup>
              </button>
            ))}
          </div>
        </header>

        <div className="menu__body">
          <ol id="menu-panel" className="menu__list" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab}>
            {category.items.map((item, i) => (
              <li
                key={item.id}
                className={`menu__item ${i === active ? 'is-active' : ''}`}
                style={{ '--i': i }}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="menu__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="menu__text">
                  <h3>{m.items[item.id].name}</h3>
                  <p>{m.items[item.id].desc}</p>
                </div>
                <img className="menu__thumb" src={item.img} alt="" loading="lazy" />
              </li>
            ))}
          </ol>

          <div className="menu__preview" aria-hidden="true">
            <div className="menu__frame">
              {MENU.flatMap((c) => c.items).map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt=""
                  loading="lazy"
                  className={item.id === current.id ? 'is-shown' : ''}
                />
              ))}
            </div>
            <p className="menu__caption">
              <span>{m.items[current.id].name}</span>
              <span>{m.illustrative}</span>
            </p>
          </div>
        </div>

        <footer className="menu__foot">
          <p>{m.foot}</p>
          <Button href={LINKS.website} variant="line" external>
            {m.full}
          </Button>
        </footer>
      </div>
    </section>
  );
}
