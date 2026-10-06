// Non-translated content: images, links, facts. All UI copy lives in src/i18n/translations.js.
// Swap image IDs / URLs for real photography later.

const unsplash = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: unsplash('photo-1574071318508-1cdbab80d002', 1400),
  heroSide: unsplash('photo-1514362545857-3bc16c4c7d1b', 700),
  story: unsplash('photo-1517248135467-4c7edcad34c4', 1400),
  pizzaVisual: unsplash('photo-1593504049359-74330189a345', 2200),
  cta: unsplash('photo-1600628421066-f6bda6a7b976', 1200),
};

export const SITE = {
  name: 'Trafalgar Pizza Club',
  street: 'Carrer de Trafalgar, 19',
  postcode: '08010 Barcelona',
  district: 'Eixample · Barcelona',
};

export const LINKS = {
  website: 'https://trafalgarpizzaclub.com',
  order: 'https://trafalgarpizzaclub.com',
  directions:
    'https://www.google.com/maps/search/?api=1&query=Trafalgar+Pizza+Club,+Carrer+de+Trafalgar+19,+08010+Barcelona',
  // TODO: replace with the restaurant's real Instagram profile.
  instagram: 'https://www.instagram.com/',
};

// Labels come from translations (nav.links), in this order.
export const NAV_HREFS = ['#menu', '#story', '#gallery', '#contact'];

// Dish names and descriptions come from translations (menu.items[id]).
export const MENU = [
  {
    id: 'pizza',
    items: [
      { id: 'margherita', img: unsplash('photo-1604068549290-dea0e4a305ca', 900) },
      { id: 'diavola', img: unsplash('photo-1628840042765-356cda07504e', 900) },
      { id: 'carbonara', img: unsplash('photo-1513104890138-7c749659a591', 900) },
      { id: 'mortadela', img: unsplash('photo-1594007654729-407eedc4be65', 900) },
    ],
  },
  {
    id: 'starters',
    items: [
      { id: 'burrata', img: unsplash('photo-1592417817098-8fd3d9eb14a5', 900) },
      { id: 'caesar', img: unsplash('photo-1550304943-4f24f54ddde9', 900) },
      { id: 'focaccia', img: unsplash('photo-1586444248902-2f64eddc13df', 900) },
    ],
  },
  {
    id: 'desserts',
    items: [
      { id: 'cannoli', img: unsplash('photo-1631206753348-db44968fd440', 900) },
      { id: 'cheesecake', img: unsplash('photo-1626803775151-61d756612f97', 900) },
      { id: 'tiramisu', img: unsplash('photo-1571877227200-a0d98ea607e9', 900) },
    ],
  },
];

// Captions and alt text come from translations (gallery.captions / gallery.alts), by index.
export const GALLERY = [
  { src: unsplash('photo-1600028068383-ea11a7a101f3', 1200), shape: 'tall' },
  { src: unsplash('photo-1551024709-8f23befc6f87', 900), shape: 'square' },
  { src: unsplash('photo-1555396273-367ea4eb4db5', 1400), shape: 'wide' },
  { src: unsplash('photo-1600628421066-f6bda6a7b976', 900), shape: 'square' },
  { src: unsplash('photo-1536935338788-846bb9981813', 900), shape: 'tall' },
  { src: unsplash('photo-1414235077428-338989a2e8c0', 1200), shape: 'wide' },
  { src: unsplash('photo-1583422409516-2895a77efded', 1200), shape: 'square' },
];

// Real review excerpts, kept in their original wording in every language.
export const REVIEWS = [
  'Wonderful pizza and service, nice cocktail menu and friendly staff.',
  'Great place to eat. Amazing pizzas and fabulous desserts.',
  'Neapolitan pizza with a perfectly charred crust and fresh ingredients.',
];
