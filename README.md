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
  data.js               All content: images, menu, gallery, reviews, links
  styles.css            All styles, organised by section
  hooks/useReveal.js    Scroll-triggered reveal animations
  components/
    Navbar.jsx          Sticky nav + fullscreen mobile menu
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

## Editing content

Text, images and links live in [`src/data.js`](src/data.js), so most edits don't touch the components.

- **Images:** the photos are Unsplash placeholders. Some menu photos are illustrative rather than the actual dish. Replace the IDs/URLs in `IMAGES`, `MENU` and `GALLERY` with the restaurant's own photography.
- **Instagram:** `LINKS.instagram` is a placeholder. Set it to the real profile.
- **Order online / full menu:** both currently link to trafalgarpizzaclub.com.
- **Prices:** deliberately left out. Add them to `MENU` if needed.

## Design

- **Type:** Fraunces (display serif) with Instrument Sans (text and labels)
- **Palette:** cream, tomato red, burgundy, charcoal, deep olive
- **Motion:** subtle reveals, marquee, parallax and hover effects, all disabled when `prefers-reduced-motion` is set
- Responsive from 375px phones up to wide desktops
