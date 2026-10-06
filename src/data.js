// All editable content lives here. Swap image IDs / URLs for real photography later.

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
  hours: 'Open until 01:00',
  rating: '4.2',
  reviewCount: '2,647',
};

export const LINKS = {
  website: 'https://trafalgarpizzaclub.com',
  order: 'https://trafalgarpizzaclub.com',
  directions:
    'https://www.google.com/maps/search/?api=1&query=Trafalgar+Pizza+Club,+Carrer+de+Trafalgar+19,+08010+Barcelona',
  // TODO: replace with the restaurant's real Instagram profile.
  instagram: 'https://www.instagram.com/',
};

export const NAV = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const MENU = [
  {
    id: 'pizza',
    label: 'Pizza',
    items: [
      {
        name: 'Margherita',
        desc: 'Tomato, fior di latte, basil, extra virgin olive oil',
        img: unsplash('photo-1604068549290-dea0e4a305ca', 900),
      },
      {
        name: 'Diavola',
        desc: 'Tomato, mozzarella, spicy salami',
        img: unsplash('photo-1628840042765-356cda07504e', 900),
      },
      {
        name: 'Pizza Carbonara',
        desc: 'Carbonara-inspired cream, pecorino, guanciale, black pepper',
        img: unsplash('photo-1513104890138-7c749659a591', 900),
      },
      {
        name: 'Mortadela',
        desc: 'Mortadella, mozzarella, pistachio',
        img: unsplash('photo-1594007654729-407eedc4be65', 900),
      },
    ],
  },
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        name: 'Burrata Salad',
        desc: 'Creamy burrata, tomatoes, herbs and olive oil',
        img: unsplash('photo-1592417817098-8fd3d9eb14a5', 900),
      },
      {
        name: 'Caesar Salad',
        desc: 'Crisp leaves, croutons, parmesan, Caesar dressing',
        img: unsplash('photo-1550304943-4f24f54ddde9', 900),
      },
      {
        name: 'Rosemary Focaccia',
        desc: 'Warm focaccia, rosemary, sea salt, olive oil',
        img: unsplash('photo-1586444248902-2f64eddc13df', 900),
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Cannoli Siciliani',
        desc: 'Classic Sicilian cannoli',
        img: unsplash('photo-1631206753348-db44968fd440', 900),
      },
      {
        name: 'Pistachio Cheesecake',
        desc: 'Creamy cheesecake with pistachio',
        img: unsplash('photo-1626803775151-61d756612f97', 900),
      },
      {
        name: 'Tiramisù',
        desc: 'Espresso-soaked savoiardi, mascarpone, cocoa',
        img: unsplash('photo-1571877227200-a0d98ea607e9', 900),
      },
    ],
  },
];

export const GALLERY = [
  { src: unsplash('photo-1600028068383-ea11a7a101f3', 1200), alt: 'A hand pulling a slice from a blistered pizza', caption: 'Straight from the oven', shape: 'tall' },
  { src: unsplash('photo-1551024709-8f23befc6f87', 900), alt: 'Three colourful cocktails lined up on a bar', caption: 'Cocktail hour', shape: 'square' },
  { src: unsplash('photo-1555396273-367ea4eb4db5', 1400), alt: 'A busy, high-ceilinged dining room with long tables', caption: 'The dining room', shape: 'wide' },
  { src: unsplash('photo-1600628421066-f6bda6a7b976', 900), alt: 'Friends reaching for slices of a shared pizza', caption: 'Made for sharing', shape: 'square' },
  { src: unsplash('photo-1536935338788-846bb9981813', 900), alt: 'A dark berry cocktail garnished with dried citrus', caption: 'Something stronger', shape: 'tall' },
  { src: unsplash('photo-1414235077428-338989a2e8c0', 1200), alt: 'A candlelit table set for dinner', caption: 'Late tables', shape: 'wide' },
  { src: unsplash('photo-1583422409516-2895a77efded', 1200), alt: 'Aerial view of the Eixample grid in Barcelona', caption: 'Eixample, from above', shape: 'square' },
];

export const REVIEWS = [
  'Wonderful pizza and service, nice cocktail menu and friendly staff.',
  'Great place to eat. Amazing pizzas and fabulous desserts.',
  'Neapolitan pizza with a perfectly charred crust and fresh ingredients.',
];

export const MARQUEE = ['Pizza', 'Pasta', 'Cocktails', 'Buonissimo', 'Barcelona', 'Open late'];
