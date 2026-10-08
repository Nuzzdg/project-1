# Trafalgar Pizza Club

A frontend-only restaurant website for **Trafalgar Pizza Club**, a Neapolitan pizza restaurant at Carrer de Trafalgar, 19, Eixample, Barcelona.

Built with React and Vite. No backend: the booking form is a demo, and nothing is submitted.

## Getting started

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Deploying to GitHub Pages

Pushes to `main` build and deploy the site automatically with GitHub Actions. The
site will be available at https://nuzzdg.github.io/project-1/ after the first
successful deployment. In the repository's **Settings → Pages**, set the source
to **GitHub Actions** if it is not already selected.

The booking form is a frontend demo and does not submit real reservations.

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with hot reload |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Serve the production build locally   |

## Project structure

```
index.html              Page shell, SEO and Open Graph metadata, Google Fonts
public/favicon.svg
src/
  main.jsx              Entry point
  App.jsx               Page layout: puts the sections in order
  data.js               Images, menu structure, links, review quotes
  i18n/
    translations.js     All text in English, Spanish and Catalan
    I18nContext.jsx     Language state, saved choice, page lang/title
  styles.css            All styles, organised by section
  hooks/useReveal.js    Scroll-triggered reveal animations
  components/
    Navbar.jsx          Sticky nav + fullscreen mobile menu
    LanguageSwitcher.jsx  Globe + EN / ES / CA buttons
    Hero.jsx
    Marquee.jsx
    StorySection.jsx
    MenuSection.jsx     Tabbed menu with hover image preview
    PizzaVisual.jsx     Full-width parallax image
    Gallery.jsx
    Reviews.jsx
    Location.jsx
    StylizedMap.jsx     Decorative SVG map (no Maps API)
    ReservationCTA.jsx
    Footer.jsx
    BookingModal.jsx    Frontend-only booking form
    Button.jsx, Logo.jsx
```

## Languages

The site is available in **English, Español and Català**, using the globe switcher in the navigation bar. The choice is saved in the browser. On a first visit the site uses the browser's language (falling back to English), and it updates the page `lang`, title and meta description.

All visible text lives in [`src/i18n/translations.js`](src/i18n/translations.js), with one block per language. To change copy, edit it there for each language. Review quotes stay in their original English in every language.

## Editing content

Images, links and facts live in [`src/data.js`](src/data.js); text lives in the translations file. Most edits don't touch the components.

- **Images:** the photos are Unsplash placeholders. Some menu photos are illustrative rather than the actual dish. Replace the IDs/URLs in `IMAGES`, `MENU` and `GALLERY` with the restaurant's own photography.
- **Instagram:** `LINKS.instagram` is a placeholder. Set it to the real profile.
- **Order online / full menu:** both currently link to trafalgarpizzaclub.com.
- **Prices:** deliberately left out. Add them to `MENU` if needed.

## Design

- **Type:** Fraunces (display serif) with Instrument Sans (text and labels)
- **Palette:** cream, tomato red, burgundy, charcoal, deep olive
- **Motion:** subtle reveals, marquee, parallax and hover effects, all disabled when `prefers-reduced-motion` is set
- Responsive from 375px phones up to wide desktops
