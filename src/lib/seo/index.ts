const BASE_URL = 'https://funzonetenerife.com';

export const locales = ['en', 'es', 'fr', 'de', 'nl', 'it'] as const;
export type Locale = (typeof locales)[number];

const localizedPaths: Record<string, Record<Locale, string>> = {
  '/experiences': {
    en: '/experiences',
    es: '/experiencias',
    fr: '/experiences',
    de: '/erlebnisse',
    nl: '/ervaringen',
    it: '/esperienze',
  },
  '/book': {
    en: '/book',
    es: '/reservar',
    fr: '/reserver',
    de: '/buchen',
    nl: '/boeken',
    it: '/prenota',
  },
  '/faq': {
    en: '/faq', es: '/faq', fr: '/faq', de: '/faq', nl: '/faq', it: '/faq',
  },
  '/blog': {
    en: '/blog', es: '/blog', fr: '/blog', de: '/blog', nl: '/blog', it: '/blog',
  },
  '/contact': {
    en: '/contact',
    es: '/contacto',
    fr: '/contact',
    de: '/kontakt',
    nl: '/contact',
    it: '/contatto',
  },
  '/about': {
    en: '/about',
    es: '/sobre-nosotros',
    fr: '/a-propos',
    de: '/ueber-uns',
    nl: '/over-ons',
    it: '/chi-siamo',
  },
  '/gift-voucher': {
    en: '/gift-voucher',
    es: '/tarjeta-regalo',
    fr: '/bon-cadeau',
    de: '/geschenkgutschein',
    nl: '/cadeaubon',
    it: '/buono-regalo',
  },
  '/axe-throwing': {
    en: '/axe-throwing', es: '/axe-throwing', fr: '/axe-throwing',
    de: '/axe-throwing', nl: '/axe-throwing', it: '/axe-throwing',
  },
  '/quiz-room': {
    en: '/quiz-room', es: '/quiz-room', fr: '/quiz-room',
    de: '/quiz-room', nl: '/quiz-room', it: '/quiz-room',
  },
  '/darts': {
    en: '/darts', es: '/darts', fr: '/darts',
    de: '/darts', nl: '/darts', it: '/darts',
  },
  '/escape-game': {
    en: '/escape-game', es: '/escape-game', fr: '/escape-game',
    de: '/escape-game', nl: '/escape-game', it: '/escape-game',
  },
};

export function getAlternates(path: string, slug?: string) {
  const paths = localizedPaths[path];

  if (paths) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${BASE_URL}/${locale}${paths[locale]}`;
    }
    languages['x-default'] = `${BASE_URL}/en${paths['en']}`;
    return { canonical: `${BASE_URL}/en${paths['en']}`, languages };
  }

  if (path === '/blog/[slug]' && slug) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${BASE_URL}/${locale}/blog/${slug}`;
    }
    languages['x-default'] = `${BASE_URL}/en/blog/${slug}`;
    return { canonical: `${BASE_URL}/en/blog/${slug}`, languages };
  }

  if (path === '/escape-game/[slug]' && slug) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${BASE_URL}/${locale}/escape-game/${slug}`;
    }
    languages['x-default'] = `${BASE_URL}/en/escape-game/${slug}`;
    return { canonical: `${BASE_URL}/en/escape-game/${slug}`, languages };
  }

  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${BASE_URL}/${locale}${path}`;
  }
  languages['x-default'] = `${BASE_URL}/en${path}`;
  return { canonical: `${BASE_URL}/en${path}`, languages };
}

export const defaultMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Fun Zone Tenerife | Quiz Room, Axe Throwing, Escape Game & Darts',
    description:
      'Fun Zone Tenerife: 4 unique indoor experiences under one roof! QuizzaBoom Quiz Room, Axe Throwing, Escape Game & Darts in Playa Las Americas. Book your adventure today!',
  },
  es: {
    title: 'Fun Zone Tenerife | Quiz Room, Lanzamiento de Hachas, Escape Game y Dardos',
    description:
      '¡Fun Zone Tenerife: 4 experiencias únicas bajo un mismo techo! Quiz Room QuizzaBoom, Lanzamiento de Hachas, Escape Game y Dardos en Playa Las Américas. ¡Reserva tu aventura!',
  },
  fr: {
    title: 'Fun Zone Tenerife | Quiz Room, Lancer de Haches, Escape Game & Fléchettes',
    description:
      'Fun Zone Tenerife : 4 expériences uniques en un seul endroit ! Quiz Room QuizzaBoom, Lancer de Haches, Escape Game & Fléchettes à Playa Las Americas. Réservez dès maintenant !',
  },
  de: {
    title: 'Fun Zone Teneriffa | Quiz Room, Beilwerfen, Escape Game & Darts',
    description:
      'Fun Zone Teneriffa: 4 einzigartige Indoor-Erlebnisse unter einem Dach! QuizzaBoom Quiz Room, Beilwerfen, Escape Game & Darts in Playa Las Americas. Jetzt buchen!',
  },
  nl: {
    title: 'Fun Zone Tenerife | Quiz Room, Bijl Gooien, Escape Game & Darts',
    description:
      'Fun Zone Tenerife: 4 unieke indoor ervaringen op één plek! QuizzaBoom Quiz Room, Bijl Gooien, Escape Game & Darts in Playa Las Americas. Boek jouw avontuur vandaag!',
  },
  it: {
    title: 'Fun Zone Tenerife | Quiz Room, Lancio delle Asce, Escape Game e Freccette',
    description:
      'Fun Zone Tenerife: 4 esperienze uniche in un unico posto! QuizzaBoom Quiz Room, Lancio delle Asce, Escape Game e Freccette a Playa Las Americas. Prenota la tua avventura!',
  },
};
