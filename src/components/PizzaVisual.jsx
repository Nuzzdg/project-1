import { useEffect, useRef } from 'react';
import { IMAGES } from '../data.js';

export default function PizzaVisual() {
  const section = useRef(null);
  const img = useRef(null);

  // Gentle parallax: the image drifts at most ~6% of its height.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.current.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      img.current.style.transform = `translate3d(0, ${(progress * -6).toFixed(2)}%, 0) scale(1.14)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="visual" ref={section} aria-labelledby="visual-title">
      <img ref={img} className="visual__img" src={IMAGES.pizzaVisual} alt="" loading="lazy" />
      <div className="visual__shade" aria-hidden="true" />
      <div className="container visual__inner">
        <p className="visual__tag visual__tag--a" data-reveal>Neapolitan style</p>
        <h2 id="visual-title" className="visual__title" data-reveal="lines">
          <span className="line"><span>Wood-fired.</span></span>
          <span className="line"><span>Hand-stretched.</span></span>
          <span className="line"><span><em>Seriously good.</em></span></span>
        </h2>
        <p className="visual__tag visual__tag--b" data-reveal>Made to order</p>
      </div>
    </section>
  );
}
