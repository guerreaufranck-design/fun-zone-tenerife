import { postLang, postAlternates } from '@/lib/blog/posts';

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
  '/activities': {
    en: '/activities',
    es: '/actividades',
    fr: '/activites',
    de: '/aktivitaeten',
    nl: '/activiteiten',
    it: '/attivita',
  },
  '/escape-game': {
    en: '/escape-game', es: '/escape-game', fr: '/escape-game',
    de: '/escape-game', nl: '/escape-game', it: '/escape-game',
  },
  '/celebrations': {
    en: '/stag-hen-party-tenerife',
    es: '/despedidas-tenerife',
    fr: '/evjf-evg-tenerife',
    de: '/junggesellenabschied-teneriffa',
    nl: '/vrijgezellenfeest-tenerife',
    it: '/addio-nubilato-celibato-tenerife',
  },
  '/audio-guide-canaries': {
    en: '/audio-guide-canary-islands',
    es: '/audioguia-islas-canarias',
    fr: '/audioguide-iles-canaries',
    de: '/audioguide-kanaren',
    nl: '/audiogids-canarische-eilanden',
    it: '/audioguida-isole-canarie',
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
    // Blog articles are single-language. Canonical points to the article's OWN
    // language prefix, and hreflang lists only genuine translation siblings.
    const lang = postLang(slug);
    const alts = postAlternates(slug);
    const languages: Record<string, string> = {};
    for (const a of alts) {
      languages[a.lang] = `${BASE_URL}/${a.lang}/blog/${a.slug}`;
    }
    const xdef = alts.find((a) => a.lang === 'en') ?? alts.find((a) => a.slug === slug)!;
    languages['x-default'] = `${BASE_URL}/${xdef.lang}/blog/${xdef.slug}`;
    return { canonical: `${BASE_URL}/${lang}/blog/${slug}`, languages };
  }

  if (path === '/activities/[slug]' && slug) {
    const languages: Record<string, string> = {};
    const actPaths: Record<Locale, string> = {
      en: 'activities', es: 'actividades', fr: 'activites',
      de: 'aktivitaeten', nl: 'activiteiten', it: 'attivita',
    };
    for (const locale of locales) {
      languages[locale] = `${BASE_URL}/${locale}/${actPaths[locale]}/${slug}`;
    }
    languages['x-default'] = `${BASE_URL}/en/activities/${slug}`;
    return { canonical: `${BASE_URL}/en/activities/${slug}`, languages };
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
    title: 'Fun Zone Tenerife | Things to Do in Tenerife — Tours, Activities & Escape Games',
    description:
      'Your guide to the best things to do in Tenerife: top excursions and activities (whale watching, Teide, boat trips & more), self-guided outdoor escape games and island travel tips.',
  },
  es: {
    title: 'Fun Zone Tenerife | Qué Hacer en Tenerife — Tours, Actividades y Escape Games',
    description:
      'Tu guía de las mejores cosas que hacer en Tenerife: excursiones y actividades top (avistamiento de ballenas, Teide, paseos en barco…), escape games al aire libre y consejos de viaje.',
  },
  fr: {
    title: 'Fun Zone Tenerife | Que Faire à Tenerife — Excursions, Activités & Escape Games',
    description:
      'Votre guide des meilleures choses à faire à Tenerife : excursions et activités incontournables (baleines, Teide, sorties en bateau…), escape games outdoor et conseils de voyage.',
  },
  de: {
    title: 'Fun Zone Teneriffa | Aktivitäten auf Teneriffa — Touren, Ausflüge & Escape Games',
    description:
      'Dein Guide für die besten Aktivitäten auf Teneriffa: Top-Touren und Ausflüge (Wale, Teide, Bootstouren…), Outdoor-Escape-Games und Reisetipps für die Insel.',
  },
  nl: {
    title: 'Fun Zone Tenerife | Dingen om te Doen op Tenerife — Tours, Activiteiten & Escape Games',
    description:
      'Jouw gids voor de leukste dingen om te doen op Tenerife: top excursies en activiteiten (walvissen, Teide, boottochten…), outdoor escape games en reistips.',
  },
  it: {
    title: 'Fun Zone Tenerife | Cosa Fare a Tenerife — Tour, Attività ed Escape Games',
    description:
      'La tua guida alle migliori cose da fare a Tenerife: escursioni e attività top (balene, Teide, gite in barca…), escape games all’aperto e consigli di viaggio.',
  },
};
