/**
 * Content for the Canary Islands audio-guide landing page
 * (/audio-guide-canaries, localized slug per market). It introduces a
 * self-guided audio guide of the Canary Islands and sends visitors to Lume
 * (external). One unique block per locale for SEO + hreflang.
 */
import type { Locale } from '@/i18n/routing';

export interface AudioGuideContent {
  /** Localized URL slug (mirrors the i18n pathname). */
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  h1: string;
  subtitle: string;
  intro: string;
  benefitsTitle: string;
  benefits: string[];
  /** Heading for the per-city deep-link grid. */
  citiesTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

/** External destination (self-guided audio guide of the Canary Islands). */
export const LUME_URL = 'https://www.lume.travel/countries/spain/canary-islands';

/** Lume origin for per-city deep links. */
export const LUME_BASE = 'https://www.lume.travel';

/**
 * Lume's real per-city audio-guide pages (verified from lume.travel's own
 * navigation). Each links to the city's deep page for contextual, relevant
 * backlinks instead of a single country-level link. Names are proper nouns,
 * so they read the same across all locales.
 */
export const LUME_CITIES: { name: string; path: string; island: string }[] = [
  { name: 'Santa Cruz de Tenerife', path: '/santa-cruz-de-tenerife', island: 'Tenerife' },
  { name: 'San Cristóbal de La Laguna', path: '/san-cristobal-de-la-laguna', island: 'Tenerife' },
  { name: 'La Orotava', path: '/la-orotava', island: 'Tenerife' },
  { name: 'Puerto de la Cruz', path: '/puerto-de-la-cruz', island: 'Tenerife' },
  { name: 'Garachico', path: '/garachico', island: 'Tenerife' },
  { name: 'Las Palmas de Gran Canaria', path: '/las-palmas-de-gran-canaria', island: 'Gran Canaria' },
  { name: 'Arrecife', path: '/arrecife', island: 'Lanzarote' },
  { name: 'Teguise', path: '/teguise', island: 'Lanzarote' },
  { name: 'Betancuria', path: '/betancuria', island: 'Fuerteventura' },
];

export const audioGuide: Record<Locale, AudioGuideContent> = {
  en: {
    slug: 'audio-guide-canary-islands',
    seoTitle: 'Canary Islands Audio Guide | Self-Guided Tours of Tenerife & Beyond',
    seoDescription:
      'Explore the Canary Islands at your own pace with a self-guided audio guide. Stories and routes for Tenerife and the other islands, straight on your phone.',
    keywords:
      'canary islands audio guide, tenerife audio guide, self-guided tour canary islands, tenerife self guided tour, audio tour tenerife',
    h1: 'Canary Islands Audio Guide',
    subtitle:
      'Discover Tenerife and the Canary Islands at your own pace — a self-guided audio guide that tells you the stories behind the places, right on your phone.',
    intro:
      "Not every great day out needs a fixed tour and a guide with an umbrella. A self-guided audio guide lets you wander Tenerife and the other Canary Islands on your own schedule, listening to the history, legends and local tips as you go. Perfect for independent travellers, road trips and anyone who likes to set their own pace.",
    benefitsTitle: 'Why a self-guided audio guide',
    benefits: [
      'Go at your own pace — pause, detour and linger wherever you like.',
      'Stories and context for the places you pass, narrated on your phone.',
      'Works offline on the road, no group and no fixed departure time.',
      'Covers Tenerife and the wider Canary Islands.',
    ],
    citiesTitle: 'Explore city by city',
    ctaTitle: 'Start exploring with the audio guide',
    ctaText:
      'The Canary Islands audio guide is powered by Lume. Tap below to see the available routes and start listening.',
    ctaButton: 'Open the Canary Islands audio guide',
  },
  es: {
    slug: 'audioguia-islas-canarias',
    seoTitle: 'Audioguía de las Islas Canarias | Tours Autoguiados de Tenerife',
    seoDescription:
      'Descubre las Islas Canarias a tu ritmo con una audioguía autoguiada. Historias y rutas de Tenerife y las demás islas, directamente en tu móvil.',
    keywords:
      'audioguia islas canarias, audioguia tenerife, tour autoguiado canarias, tour autoguiado tenerife, audio tour tenerife',
    h1: 'Audioguía de las Islas Canarias',
    subtitle:
      'Descubre Tenerife y las Islas Canarias a tu ritmo: una audioguía autoguiada que te cuenta las historias detrás de cada lugar, en tu móvil.',
    intro:
      'No todos los planes necesitan un tour con horario y un guía con paraguas. Una audioguía autoguiada te permite recorrer Tenerife y el resto de Canarias a tu aire, escuchando la historia, las leyendas y los consejos locales mientras caminas. Ideal para viajeros independientes, road trips y quien prefiere marcar su propio ritmo.',
    benefitsTitle: 'Por qué una audioguía autoguiada',
    benefits: [
      'A tu ritmo: pausa, desvíate y quédate donde quieras.',
      'Historias y contexto de los lugares que ves, narrados en tu móvil.',
      'Funciona sin conexión en ruta, sin grupo ni hora fija de salida.',
      'Cubre Tenerife y el conjunto de las Islas Canarias.',
    ],
    citiesTitle: 'Explora ciudad por ciudad',
    ctaTitle: 'Empieza a explorar con la audioguía',
    ctaText:
      'La audioguía de las Islas Canarias funciona con Lume. Pulsa abajo para ver las rutas disponibles y empezar a escuchar.',
    ctaButton: 'Abrir la audioguía de Canarias',
  },
  fr: {
    slug: 'audioguide-iles-canaries',
    seoTitle: 'Audioguide des Îles Canaries | Visites Autoguidées de Tenerife',
    seoDescription:
      'Découvrez les Îles Canaries à votre rythme avec un audioguide autoguidé. Histoires et itinéraires pour Tenerife et les autres îles, directement sur votre téléphone.',
    keywords:
      'audioguide iles canaries, audioguide tenerife, visite autoguidee canaries, visite autoguidee tenerife, audio tour tenerife',
    h1: 'Audioguide des Îles Canaries',
    subtitle:
      'Découvrez Tenerife et les Îles Canaries à votre rythme — un audioguide autoguidé qui raconte les histoires derrière les lieux, directement sur votre téléphone.',
    intro:
      "Une belle journée n'a pas toujours besoin d'un tour à horaire fixe et d'un guide avec un parapluie. Un audioguide autoguidé vous laisse parcourir Tenerife et les autres Canaries à votre rythme, en écoutant l'histoire, les légendes et les conseils locaux au fil de la balade. Parfait pour les voyageurs indépendants, les road trips et tous ceux qui aiment avancer à leur tempo.",
    benefitsTitle: 'Pourquoi un audioguide autoguidé',
    benefits: [
      'À votre rythme : pause, détour et pause où vous voulez.',
      'Histoires et contexte des lieux que vous croisez, racontés sur votre téléphone.',
      'Fonctionne hors ligne en route, sans groupe ni horaire de départ.',
      'Couvre Tenerife et l\'ensemble des Îles Canaries.',
    ],
    citiesTitle: 'Explorez ville par ville',
    ctaTitle: 'Commencez à explorer avec l\'audioguide',
    ctaText:
      'L\'audioguide des Îles Canaries est proposé par Lume. Appuyez ci-dessous pour voir les itinéraires disponibles et commencer à écouter.',
    ctaButton: 'Ouvrir l\'audioguide des Canaries',
  },
  de: {
    slug: 'audioguide-kanaren',
    seoTitle: 'Audioguide der Kanarischen Inseln | Selbstgeführte Touren auf Teneriffa',
    seoDescription:
      'Entdecke die Kanarischen Inseln in deinem Tempo mit einem selbstgeführten Audioguide. Geschichten und Routen für Teneriffa und die anderen Inseln, direkt auf dem Handy.',
    keywords:
      'audioguide kanarische inseln, audioguide teneriffa, selbstgefuehrte tour kanaren, selbstgefuehrte tour teneriffa, audio tour teneriffa',
    h1: 'Audioguide der Kanarischen Inseln',
    subtitle:
      'Entdecke Teneriffa und die Kanarischen Inseln in deinem Tempo — ein selbstgeführter Audioguide, der dir die Geschichten hinter den Orten erzählt, direkt auf dem Handy.',
    intro:
      'Nicht jeder schöne Ausflug braucht eine feste Tour und einen Guide mit Regenschirm. Ein selbstgeführter Audioguide lässt dich Teneriffa und die übrigen Kanaren nach deinem Zeitplan erkunden – mit Geschichte, Legenden und lokalen Tipps auf den Ohren. Perfekt für individuelle Reisende, Roadtrips und alle, die ihr eigenes Tempo mögen.',
    benefitsTitle: 'Warum ein selbstgeführter Audioguide',
    benefits: [
      'In deinem Tempo – anhalten, abbiegen und verweilen, wo du willst.',
      'Geschichten und Kontext zu den Orten unterwegs, erzählt auf dem Handy.',
      'Funktioniert offline unterwegs, ohne Gruppe und feste Abfahrtszeit.',
      'Deckt Teneriffa und die gesamten Kanarischen Inseln ab.',
    ],
    citiesTitle: 'Stadt für Stadt entdecken',
    ctaTitle: 'Starte mit dem Audioguide',
    ctaText:
      'Der Audioguide der Kanarischen Inseln wird von Lume bereitgestellt. Tippe unten, um die verfügbaren Routen zu sehen und loszuhören.',
    ctaButton: 'Kanaren-Audioguide öffnen',
  },
  nl: {
    slug: 'audiogids-canarische-eilanden',
    seoTitle: 'Audiogids Canarische Eilanden | Zelfgeleide Tours op Tenerife',
    seoDescription:
      'Ontdek de Canarische Eilanden in je eigen tempo met een zelfgeleide audiogids. Verhalen en routes voor Tenerife en de andere eilanden, direct op je telefoon.',
    keywords:
      'audiogids canarische eilanden, audiogids tenerife, zelfgeleide tour canarische eilanden, zelfgeleide tour tenerife, audio tour tenerife',
    h1: 'Audiogids Canarische Eilanden',
    subtitle:
      'Ontdek Tenerife en de Canarische Eilanden in je eigen tempo — een zelfgeleide audiogids die je de verhalen achter de plekken vertelt, direct op je telefoon.',
    intro:
      'Niet elke mooie dag heeft een vaste tour en een gids met paraplu nodig. Met een zelfgeleide audiogids verken je Tenerife en de andere Canarische Eilanden op je eigen schema, terwijl je onderweg de geschiedenis, legendes en lokale tips beluistert. Ideaal voor onafhankelijke reizigers, roadtrips en iedereen die zijn eigen tempo bepaalt.',
    benefitsTitle: 'Waarom een zelfgeleide audiogids',
    benefits: [
      'In je eigen tempo — pauzeer, maak een omweg en blijf waar je wilt.',
      'Verhalen en context bij de plekken die je passeert, verteld op je telefoon.',
      'Werkt offline onderweg, zonder groep of vaste vertrektijd.',
      'Dekt Tenerife en de hele Canarische Eilanden.',
    ],
    citiesTitle: 'Ontdek stad voor stad',
    ctaTitle: 'Begin met verkennen met de audiogids',
    ctaText:
      'De audiogids van de Canarische Eilanden wordt mogelijk gemaakt door Lume. Tik hieronder om de beschikbare routes te zien en te beginnen met luisteren.',
    ctaButton: 'Open de audiogids Canarische Eilanden',
  },
  it: {
    slug: 'audioguida-isole-canarie',
    seoTitle: 'Audioguida delle Isole Canarie | Tour Autoguidati di Tenerife',
    seoDescription:
      'Scopri le Isole Canarie al tuo ritmo con un\'audioguida autoguidata. Storie e itinerari per Tenerife e le altre isole, direttamente sul telefono.',
    keywords:
      'audioguida isole canarie, audioguida tenerife, tour autoguidato canarie, tour autoguidato tenerife, audio tour tenerife',
    h1: 'Audioguida delle Isole Canarie',
    subtitle:
      'Scopri Tenerife e le Isole Canarie al tuo ritmo — un\'audioguida autoguidata che ti racconta le storie dietro i luoghi, direttamente sul telefono.',
    intro:
      'Non ogni bella giornata ha bisogno di un tour a orario fisso e di una guida con l\'ombrello. Un\'audioguida autoguidata ti fa esplorare Tenerife e le altre Canarie secondo i tuoi tempi, ascoltando storia, leggende e consigli locali lungo il cammino. Perfetta per i viaggiatori indipendenti, i road trip e chi ama il proprio ritmo.',
    benefitsTitle: 'Perché un\'audioguida autoguidata',
    benefits: [
      'Al tuo ritmo: fermati, devia e resta dove vuoi.',
      'Storie e contesto sui luoghi che incontri, narrati sul telefono.',
      'Funziona offline in viaggio, senza gruppo né orario di partenza.',
      'Copre Tenerife e tutte le Isole Canarie.',
    ],
    citiesTitle: 'Esplora città per città',
    ctaTitle: 'Inizia a esplorare con l\'audioguida',
    ctaText:
      'L\'audioguida delle Isole Canarie è offerta da Lume. Tocca qui sotto per vedere gli itinerari disponibili e iniziare ad ascoltare.',
    ctaButton: 'Apri l\'audioguida delle Canarie',
  },
};
