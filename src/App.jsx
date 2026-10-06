import { useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import StorySection from './components/StorySection.jsx';
import MenuSection from './components/MenuSection.jsx';
import PizzaVisual from './components/PizzaVisual.jsx';
import Gallery from './components/Gallery.jsx';
import Reviews from './components/Reviews.jsx';
import Location from './components/Location.jsx';
import ReservationCTA from './components/ReservationCTA.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModal.jsx';
import { useReveal } from './hooks/useReveal.js';
import { useI18n } from './i18n/I18nContext.jsx';

export default function App() {
  const booking = useRef(null);
  const openBooking = () => booking.current?.open();
  const { t } = useI18n();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">{t.common.skip}</a>
      <Navbar onBook={openBooking} />
      <main id="main">
        <Hero onBook={openBooking} />
        <Marquee />
        <StorySection />
        <MenuSection />
        <PizzaVisual />
        <Gallery />
        <Marquee variant="dark" reverse />
        <Reviews />
        <Location onBook={openBooking} />
        <ReservationCTA onBook={openBooking} />
      </main>
      <Footer onBook={openBooking} />
      <BookingModal ref={booking} />
    </>
  );
}
