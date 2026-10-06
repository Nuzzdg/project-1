import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { SITE } from '../data.js';

// Frontend-only booking demo. Nothing is sent anywhere.
const BookingModal = forwardRef(function BookingModal(_, ref) {
  const dialog = useRef(null);
  const [sent, setSent] = useState(null);
  const today = new Date().toISOString().slice(0, 10);

  useImperativeHandle(ref, () => ({
    open() {
      setSent(null);
      dialog.current?.showModal();
    },
  }));

  const close = () => dialog.current?.close();

  const submit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSent(data);
  };

  return (
    <dialog
      ref={dialog}
      className="booking"
      aria-labelledby="booking-title"
      onClick={(e) => e.target === dialog.current && close()}
    >
      <div className="booking__panel">
        <button type="button" className="booking__close" onClick={close} aria-label="Close booking">
          <X size={22} strokeWidth={1.5} />
        </button>

        {sent ? (
          <div className="booking__done" role="status">
            <p className="label">Request noted</p>
            <h2 id="booking-title" className="booking__title">
              Grazie, <em>{sent.name || 'friend'}.</em>
            </h2>
            <p>
              Table for {sent.guests} on {sent.date} at {sent.time}.
            </p>
            <p className="booking__demo">
              This is a design demo, so no booking has actually been sent. Please contact the restaurant to
              confirm a real table.
            </p>
            <button type="button" className="btn btn--dark" onClick={close}>
              <span className="btn__label">Close</span>
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="label">{SITE.street} · {SITE.hours}</p>
            <h2 id="booking-title" className="booking__title">
              Book a <em>table.</em>
            </h2>

            <div className="booking__fields">
              <label className="field field--full">
                <span>Name</span>
                <input name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Guests</span>
                <select name="guests" defaultValue="2">
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1} {i === 0 ? 'person' : 'people'}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Date</span>
                <input type="date" name="date" min={today} defaultValue={today} required />
              </label>
              <label className="field">
                <span>Time</span>
                <input type="time" name="time" defaultValue="21:00" required />
              </label>
              <label className="field">
                <span>Phone</span>
                <input type="tel" name="phone" autoComplete="tel" />
              </label>
            </div>

            <button type="submit" className="btn btn--red booking__submit">
              <span className="btn__label">Request table</span>
            </button>
            <p className="booking__demo">Demo form — nothing is submitted.</p>
          </form>
        )}
      </div>
    </dialog>
  );
});

export default BookingModal;
