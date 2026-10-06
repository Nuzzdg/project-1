import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { SITE } from '../data.js';
import { useI18n } from '../i18n/I18nContext.jsx';

// Frontend-only booking demo. Nothing is sent anywhere.
const BookingModal = forwardRef(function BookingModal(_, ref) {
  const { t } = useI18n();
  const b = t.booking;
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
    setSent(Object.fromEntries(new FormData(e.currentTarget)));
  };

  return (
    <dialog
      ref={dialog}
      className="booking"
      aria-labelledby="booking-title"
      onClick={(e) => e.target === dialog.current && close()}
    >
      <div className="booking__panel">
        <button type="button" className="booking__close" onClick={close} aria-label={b.closeAria}>
          <X size={22} strokeWidth={1.5} />
        </button>

        {sent ? (
          <div className="booking__done" role="status">
            <p className="label">{b.doneLabel}</p>
            <h2 id="booking-title" className="booking__title">
              Grazie, <em>{sent.name || 'amici'}.</em>
            </h2>
            <p>{b.summary(b.people(Number(sent.guests)), sent.date, sent.time)}</p>
            <p className="booking__demo">{b.doneDemo}</p>
            <button type="button" className="btn btn--dark" onClick={close}>
              <span className="btn__label">{b.close}</span>
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="label">{SITE.street} · {t.common.hours}</p>
            <h2 id="booking-title" className="booking__title">
              {b.title[0]} <em>{b.title[1]}</em>
            </h2>

            <div className="booking__fields">
              <label className="field field--full">
                <span>{b.name}</span>
                <input name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span>{b.guests}</span>
                <select name="guests" defaultValue="2">
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {b.people(i + 1)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>{b.date}</span>
                <input type="date" name="date" min={today} defaultValue={today} required />
              </label>
              <label className="field">
                <span>{b.time}</span>
                <input type="time" name="time" defaultValue="21:00" required />
              </label>
              <label className="field">
                <span>{b.phone}</span>
                <input type="tel" name="phone" autoComplete="tel" />
              </label>
            </div>

            <button type="submit" className="btn btn--red booking__submit">
              <span className="btn__label">{b.submit}</span>
            </button>
            <p className="booking__demo">{b.demo}</p>
          </form>
        )}
      </div>
    </dialog>
  );
});

export default BookingModal;
