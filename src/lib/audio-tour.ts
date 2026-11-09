/**
 * Shared audio-tour constants, types and generic UI copy.
 *
 * Kept in a plain (non-"use client") module so both the server page and the
 * client purchase components can import the real values (importing them from a
 * client module turns them into client refs, which breaks `.map` at prerender).
 *
 * Content split:
 *  - CITY_META       : locale-invariant data (slug, geo, photos, credits).
 *  - UI_STRINGS      : generic localized labels, reused across every city.
 *  - CITY_CONTENT    : city-specific localized prose (in audio-tour-content.ts).
 */

import type { Locale } from '@/lib/seo';

/** Price per activation code, in EUR. Flat, no volume discount, EUR only. */
export const AUDIO_TOUR_PRICE = 12;

/**
 * The 32 narration languages the tour is generated in. The customer picks the
 * LANGUAGE OF THE TOUR independently of the site UI language; this value is
 * passed to the checkout and on to the fulfilment API.
 */
export const TOUR_LANGUAGES: { code: string; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'pl', label: 'Polski' },
  { code: 'sv', label: 'Svenska' },
  { code: 'da', label: 'Dansk' },
  { code: 'no', label: 'Norsk' },
  { code: 'fi', label: 'Suomi' },
  { code: 'ru', label: 'Русский' },
  { code: 'uk', label: 'Українська' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'cs', label: 'Čeština' },
  { code: 'hu', label: 'Magyar' },
  { code: 'ro', label: 'Română' },
  { code: 'bg', label: 'Български' },
  { code: 'el', label: 'Ελληνικά' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'zh', label: '中文' },
  { code: 'ar', label: 'العربية' },
  { code: 'he', label: 'עברית' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'th', label: 'ไทย' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'ms', label: 'Bahasa Melayu' },
  { code: 'ca', label: 'Català' },
  { code: 'eu', label: 'Euskara' },
];

export const NUM_TOUR_LANGUAGES = TOUR_LANGUAGES.length;

/* ------------------------------------------------------------------ *
 * Types
 * ------------------------------------------------------------------ */

export interface CityPhoto {
  /** Path under /public. */
  src: string;
  /** Proper-noun subject (e.g. "Auditorio de Tenerife"), used to build alt. */
  label: string;
  /** Attribution line, identical in every language. */
  credit: string;
}

/** Locale-invariant data for one city. */
export interface CityMeta {
  /** URL slug and [city] route param (English, stable). */
  slug: string;
  /** Display name, a proper noun kept the same in every language. */
  displayName: string;
  /** Slug passed to checkout → fulfilment API. */
  fulfilmentSlug: string;
  geo: { latitude: number; longitude: number };
  /** Query string for the Google Maps embed. */
  mapQuery: string;
  photos: CityPhoto[];
}

export interface CitySecret {
  place: string;
  teaser: string;
}

export interface CityStoryBlock {
  heading: string;
  paragraphs: string[];
}

export interface CityBonus {
  lead: string;
  text: string;
}

/** City-specific localized prose. */
export interface CityCopy {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  heroIntro: string;
  postcardHeading: string;
  postcardIntro: string;
  secrets: CitySecret[];
  storyTitle: string;
  storyIntro: string[];
  storyBlocks: CityStoryBlock[];
  mapHeading: string;
  mapIntro: string;
  bonusHeading: string;
  bonus: CityBonus[];
  langHeading: string;
  ctaHeading: string;
  ctaIntro: string;
}

/** Generic labels, reused across every city. `{city}` is substituted at render. */
export interface AudioTourUi {
  badge: string;
  breadcrumbHome: string;
  breadcrumbRegion: string;
  secretLockLabel: string;
  howHeading: string;
  howIntro: string;
  benefits: string[];
  langIntro: string;
  // Purchase block
  cityPassTag: string;
  audioTourSuffix: string;
  validity: string;
  perCode: string;
  tourLanguageLabel: string;
  tourLanguageHint: string;
  numberOfCodesLabel: string;
  oneCodeHint: string;
  buyLabel: string;
  pendingNote: string;
  deliveryNote: string;
  lessCodesAria: string;
  moreCodesAria: string;
  // Sticky bar
  stickyReassure1: string;
  stickyReassure2: string;
  stickyOnePrice: string;
  stickyCta: string;
}

/* ------------------------------------------------------------------ *
 * City metadata (locale-invariant)
 * ------------------------------------------------------------------ */

export const CITY_META: CityMeta[] = [
  {
    slug: 'santa-cruz',
    displayName: 'Santa Cruz de Tenerife',
    fulfilmentSlug: 'santa-cruz-de-tenerife',
    geo: { latitude: 28.4636, longitude: -16.2518 },
    mapQuery: 'Santa Cruz de Tenerife',
    photos: [
      { src: '/images/audio-tour/santa-cruz/auditorio.jpg', label: 'Auditorio de Tenerife', credit: 'Diego Delso, CC BY-SA 3.0, via Wikimedia Commons' },
      { src: '/images/audio-tour/santa-cruz/plaza-espana.jpg', label: 'Plaza de España', credit: 'Mike Peel, CC BY-SA 4.0, via Wikimedia Commons' },
      { src: '/images/audio-tour/santa-cruz/las-teresitas.jpg', label: 'Playa de Las Teresitas', credit: 'Mike Peel, CC BY-SA 4.0, via Wikimedia Commons' },
    ],
  },
  {
    slug: 'la-laguna',
    displayName: 'San Cristóbal de La Laguna',
    fulfilmentSlug: 'san-cristobal-de-la-laguna',
    geo: { latitude: 28.4853, longitude: -16.3167 },
    mapQuery: 'San Cristóbal de La Laguna',
    photos: [
      { src: '/images/audio-tour/la-laguna/catedral.jpg', label: 'Catedral de La Laguna', credit: 'Koppchen, CC BY 3.0, via Wikimedia Commons' },
      { src: '/images/audio-tour/la-laguna/concepcion-tower.jpg', label: 'Iglesia de la Concepción', credit: 'Falk2 (Falk Arnhold), CC BY-SA 4.0, via Wikimedia Commons' },
      { src: '/images/audio-tour/la-laguna/casa-capitanes.jpg', label: 'Casa de los Capitanes Generales', credit: 'Maesi64, CC0, via Wikimedia Commons' },
    ],
  },
  {
    slug: 'la-orotava',
    displayName: 'La Orotava',
    fulfilmentSlug: 'la-orotava',
    geo: { latitude: 28.3906, longitude: -16.5247 },
    mapQuery: 'La Orotava, Tenerife',
    photos: [
      { src: '/images/audio-tour/la-orotava/casa-balcones.jpg', label: 'Casa de los Balcones', credit: 'Diego Delso, delso.photo, CC BY-SA, via Wikimedia Commons' },
      { src: '/images/audio-tour/la-orotava/corpus-carpet.jpg', label: 'Corpus Christi sand carpet', credit: 'MariMateo, CC BY-SA 4.0, via Wikimedia Commons' },
      { src: '/images/audio-tour/la-orotava/panorama.jpg', label: 'La Orotava and its valley', credit: 'JosuHdez, public domain, via Wikimedia Commons' },
    ],
  },
  {
    slug: 'puerto-de-la-cruz',
    displayName: 'Puerto de la Cruz',
    fulfilmentSlug: 'puerto-de-la-cruz',
    geo: { latitude: 28.414, longitude: -16.548 },
    mapQuery: 'Puerto de la Cruz, Tenerife',
    photos: [
      { src: '/images/audio-tour/puerto-de-la-cruz/lago-martianez.jpg', label: 'Lago Martiánez', credit: 'Fry72, CC BY-SA 4.0, via Wikimedia Commons' },
      { src: '/images/audio-tour/puerto-de-la-cruz/teide-town.jpg', label: 'Teide above Puerto de la Cruz', credit: 'Mrgnr0, CC BY-SA 4.0, via Wikimedia Commons' },
      { src: '/images/audio-tour/puerto-de-la-cruz/playa-jardin.jpg', label: 'Playa Jardín and Castillo de San Felipe', credit: 'Kawon Kez Sel, CC0, via Wikimedia Commons' },
    ],
  },
  {
    slug: 'garachico',
    displayName: 'Garachico',
    fulfilmentSlug: 'garachico',
    geo: { latitude: 28.3722, longitude: -16.7639 },
    mapQuery: 'Garachico, Tenerife',
    photos: [
      { src: '/images/audio-tour/garachico/roque.jpg', label: 'Garachico and its Roque', credit: 'Diego Delso, delso.photo, CC BY-SA, via Wikimedia Commons' },
      { src: '/images/audio-tour/garachico/caleton.jpg', label: 'El Caletón natural pools', credit: 'Diego Delso, delso.photo, CC BY-SA, via Wikimedia Commons' },
      { src: '/images/audio-tour/garachico/castillo.jpg', label: 'Castillo de San Miguel', credit: '-wuppertaler, CC BY 4.0, via Wikimedia Commons' },
    ],
  },
];

export function getCityMeta(slug: string): CityMeta | undefined {
  return CITY_META.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ *
 * Generic UI copy (localized once, reused by every city)
 * ------------------------------------------------------------------ */

export const UI_STRINGS: Partial<Record<Locale, AudioTourUi>> & { en: AudioTourUi } = {
  en: {
    badge: 'Tenerife',
    breadcrumbHome: 'Home',
    breadcrumbRegion: 'Tenerife',
    secretLockLabel: 'Full story unlocks in the tour',
    howHeading: 'Point your phone, follow the arrow, never get lost',
    howIntro:
      'The tour carries an augmented-reality guide. Lift your phone and the camera shows the street ahead with a glowing arrow laid over the real view, always pointing to your next stop. No map to decode, no wrong turns, and like everything here it runs completely offline once you have downloaded it.',
    benefits: [
      'Start any time, any day. No fixed slot, no guide to meet, no queue.',
      'Native-voice narration in your language, one story unlocking at each stop.',
      'Download it once and it works fully offline, no roaming, no dead zones.',
      'A GPS route plus an augmented-reality arrow so you never take a wrong turn.',
    ],
    langIntro:
      'Korean, Chinese, Hebrew and 29 more, every stop narrated by a native speaker. One of the widest language choices of any self-guided audio tour.',
    cityPassTag: 'City Pass',
    audioTourSuffix: 'self-guided audio tour',
    validity: 'Code valid 1 year · 12h once activated · offline',
    perCode: '/ code',
    tourLanguageLabel: 'Tour language',
    tourLanguageHint: 'Narrated by native speakers. 32 languages available.',
    numberOfCodesLabel: 'Number of codes',
    oneCodeHint: 'One code activates the tour for one person.',
    buyLabel: 'Buy for',
    pendingNote:
      'Secure checkout is being finalised. Your code and tour are delivered instantly by email once live.',
    deliveryNote: 'Instant email delivery · activation code generated on purchase',
    lessCodesAria: 'Fewer codes',
    moreCodesAria: 'More codes',
    stickyReassure1: 'No booking · code valid 1 year · 12h once activated',
    stickyReassure2: 'Download on Wi-Fi, walk offline',
    stickyOnePrice: 'one price',
    stickyCta: 'Get the key',
  },
  fr: {
    badge: 'Tenerife',
    breadcrumbHome: 'Accueil',
    breadcrumbRegion: 'Tenerife',
    secretLockLabel: 'Le récit complet se débloque dans la visite',
    howHeading: 'Pointez votre téléphone, suivez la flèche, ne vous perdez jamais',
    howIntro:
      'La visite intègre un guide en réalité augmentée. Levez votre téléphone et la caméra affiche la rue devant vous avec une flèche lumineuse superposée à la vue réelle, toujours dirigée vers votre prochaine étape. Aucune carte à déchiffrer, aucun mauvais virage, et comme tout le reste ici, cela fonctionne entièrement hors ligne une fois téléchargé.',
    benefits: [
      'Commencez quand vous voulez, n’importe quel jour. Aucun créneau fixe, aucun guide à retrouver, aucune file d’attente.',
      'Narration en voix native dans votre langue, une histoire se débloquant à chaque étape.',
      'Téléchargez-la une fois et elle fonctionne entièrement hors ligne, sans itinérance, sans zone morte.',
      'Un itinéraire GPS et une flèche en réalité augmentée pour ne jamais vous tromper de chemin.',
    ],
    langIntro:
      'Coréen, chinois, hébreu et 29 autres, chaque étape racontée par un locuteur natif. L’un des plus larges choix de langues parmi toutes les visites audio en autonomie.',
    cityPassTag: 'City Pass',
    audioTourSuffix: 'visite audio en autonomie',
    validity: 'Code valable 1 an · 12 h après activation · hors ligne',
    perCode: '/ code',
    tourLanguageLabel: 'Langue de la visite',
    tourLanguageHint: 'Narration par des locuteurs natifs. 32 langues disponibles.',
    numberOfCodesLabel: 'Nombre de codes',
    oneCodeHint: 'Un code active la visite pour une personne.',
    buyLabel: 'Acheter pour',
    pendingNote:
      'Le paiement sécurisé est en cours de finalisation. Votre code et votre visite seront envoyés instantanément par e-mail dès sa mise en ligne.',
    deliveryNote: 'Livraison instantanée par e-mail · code d’activation généré à l’achat',
    lessCodesAria: 'Moins de codes',
    moreCodesAria: 'Plus de codes',
    stickyReassure1: 'Sans réservation · code valable 1 an · 12 h après activation',
    stickyReassure2: 'Téléchargez en Wi-Fi, marchez hors ligne',
    stickyOnePrice: 'prix unique',
    stickyCta: 'Obtenir la clé',
  },
  es: {
    badge: 'Tenerife',
    breadcrumbHome: 'Inicio',
    breadcrumbRegion: 'Tenerife',
    secretLockLabel: 'La historia completa se desbloquea en el tour',
    howHeading: 'Apunta con el móvil, sigue la flecha y no te pierdas nunca',
    howIntro:
      'El tour incluye una guía de realidad aumentada. Levanta el móvil y la cámara te muestra la calle que tienes delante con una flecha luminosa sobre la imagen real, siempre apuntando a tu próxima parada. Sin mapas que descifrar, sin giros equivocados y, como todo aquí, funciona totalmente sin conexión una vez descargado.',
    benefits: [
      'Empieza cuando quieras, cualquier día. Sin horario fijo, sin guía con quien quedar, sin colas.',
      'Narración con voz nativa en tu idioma, con una historia que se desbloquea en cada parada.',
      'Descárgalo una vez y funciona totalmente sin conexión, sin roaming ni zonas muertas.',
      'Una ruta GPS y una flecha de realidad aumentada para no equivocarte nunca de camino.',
    ],
    langIntro:
      'Coreano, chino, hebreo y 29 más, cada parada narrada por un hablante nativo. Una de las ofertas de idiomas más amplias de cualquier audioguía autoguiada.',
    cityPassTag: 'City Pass',
    audioTourSuffix: 'audioguía autoguiada',
    validity: 'Código válido 1 año · 12 h tras activarlo · sin conexión',
    perCode: '/ código',
    tourLanguageLabel: 'Idioma del tour',
    tourLanguageHint: 'Narrado por hablantes nativos. 32 idiomas disponibles.',
    numberOfCodesLabel: 'Número de códigos',
    oneCodeHint: 'Un código activa el tour para una persona.',
    buyLabel: 'Comprar por',
    pendingNote:
      'El pago seguro se está terminando de configurar. Tu código y tu tour se envían al instante por correo electrónico en cuanto esté disponible.',
    deliveryNote: 'Entrega instantánea por correo · código de activación generado en la compra',
    lessCodesAria: 'Menos códigos',
    moreCodesAria: 'Más códigos',
    stickyReassure1: 'Sin reserva · código válido 1 año · 12 h tras activarlo',
    stickyReassure2: 'Descarga con Wi-Fi, camina sin conexión',
    stickyOnePrice: 'precio único',
    stickyCta: 'Consigue la llave',
  },
  de: {
    badge: 'Teneriffa',
    breadcrumbHome: 'Startseite',
    breadcrumbRegion: 'Teneriffa',
    secretLockLabel: 'Die ganze Geschichte gibt es in der Tour',
    howHeading: 'Handy hochhalten, dem Pfeil folgen, nie verlaufen',
    howIntro:
      'Die Tour enthält einen Augmented-Reality-Guide. Heben Sie Ihr Handy, und die Kamera zeigt die Straße vor Ihnen mit einem leuchtenden Pfeil über dem echten Bild, der immer zur nächsten Station weist. Keine Karte zum Entziffern, keine falschen Abzweigungen, und wie alles hier funktioniert es nach dem Download vollständig offline.',
    benefits: [
      'Starten Sie jederzeit, an jedem Tag. Kein fester Termin, kein Guide zum Treffen, keine Warteschlange.',
      'Erzählt von einer Muttersprachlerstimme in Ihrer Sprache, an jeder Station eine neue Geschichte.',
      'Einmal herunterladen, und es funktioniert komplett offline, kein Roaming, keine Funklöcher.',
      'Eine GPS-Route plus ein Augmented-Reality-Pfeil, damit Sie nie falsch abbiegen.',
    ],
    langIntro:
      'Koreanisch, Chinesisch, Hebräisch und 29 weitere, jede Station von einem Muttersprachler erzählt. Eine der größten Sprachauswahlen aller selbstgeführten Audiotouren.',
    cityPassTag: 'City Pass',
    audioTourSuffix: 'selbstgeführte Audiotour',
    validity: 'Code 1 Jahr gültig · 12 Std. nach Aktivierung · offline',
    perCode: '/ Code',
    tourLanguageLabel: 'Sprache der Tour',
    tourLanguageHint: 'Gesprochen von Muttersprachlern. 32 Sprachen verfügbar.',
    numberOfCodesLabel: 'Anzahl der Codes',
    oneCodeHint: 'Ein Code aktiviert die Tour für eine Person.',
    buyLabel: 'Kaufen für',
    pendingNote:
      'Die sichere Bezahlung wird gerade fertiggestellt. Ihr Code und Ihre Tour werden sofort per E-Mail geliefert, sobald es live ist.',
    deliveryNote: 'Sofortige Lieferung per E-Mail · Aktivierungscode beim Kauf erstellt',
    lessCodesAria: 'Weniger Codes',
    moreCodesAria: 'Mehr Codes',
    stickyReassure1: 'Ohne Buchung · Code 1 Jahr gültig · 12 Std. nach Aktivierung',
    stickyReassure2: 'Per WLAN herunterladen, offline loslaufen',
    stickyOnePrice: 'ein Preis',
    stickyCta: 'Schlüssel holen',
  },
  it: {
    badge: 'Tenerife',
    breadcrumbHome: 'Home',
    breadcrumbRegion: 'Tenerife',
    secretLockLabel: 'La storia completa si sblocca nel tour',
    howHeading: 'Punta il telefono, segui la freccia, non perderti mai',
    howIntro:
      'Il tour integra una guida in realtà aumentata. Alza il telefono e la fotocamera mostra la strada davanti a te con una freccia luminosa sovrapposta alla vista reale, sempre rivolta alla tua prossima tappa. Nessuna mappa da decifrare, nessuna svolta sbagliata e, come tutto qui, funziona completamente offline una volta scaricato.',
    benefits: [
      'Inizia quando vuoi, qualsiasi giorno. Nessun orario fisso, nessuna guida da incontrare, nessuna fila.',
      'Narrazione con voce madrelingua nella tua lingua, una storia che si sblocca a ogni tappa.',
      'Scaricalo una volta e funziona completamente offline, senza roaming né zone morte.',
      'Un percorso GPS e una freccia in realtà aumentata per non sbagliare mai strada.',
    ],
    langIntro:
      'Coreano, cinese, ebraico e altre 29, ogni tappa raccontata da un madrelingua. Una delle scelte di lingue più ampie tra tutti i tour audio in autonomia.',
    cityPassTag: 'City Pass',
    audioTourSuffix: 'tour audio in autonomia',
    validity: 'Codice valido 1 anno · 12 h dopo l’attivazione · offline',
    perCode: '/ codice',
    tourLanguageLabel: 'Lingua del tour',
    tourLanguageHint: 'Narrato da madrelingua. 32 lingue disponibili.',
    numberOfCodesLabel: 'Numero di codici',
    oneCodeHint: 'Un codice attiva il tour per una persona.',
    buyLabel: 'Acquista per',
    pendingNote:
      'Il pagamento sicuro è in fase di completamento. Il codice e il tour vengono inviati subito via e-mail non appena sarà attivo.',
    deliveryNote: 'Consegna immediata via e-mail · codice di attivazione generato all’acquisto',
    lessCodesAria: 'Meno codici',
    moreCodesAria: 'Più codici',
    stickyReassure1: 'Senza prenotazione · codice valido 1 anno · 12 h dopo l’attivazione',
    stickyReassure2: 'Scarica in Wi-Fi, cammina offline',
    stickyOnePrice: 'prezzo unico',
    stickyCta: 'Ottieni la chiave',
  },
  nl: {
    badge: 'Tenerife',
    breadcrumbHome: 'Home',
    breadcrumbRegion: 'Tenerife',
    secretLockLabel: 'Het volledige verhaal ontgrendelt in de tour',
    howHeading: 'Richt je telefoon, volg de pijl, verdwaal nooit',
    howIntro:
      'De tour bevat een augmented-reality-gids. Houd je telefoon omhoog en de camera toont de straat voor je met een oplichtende pijl over het echte beeld, altijd gericht op je volgende stop. Geen kaart om te ontcijferen, geen verkeerde afslagen, en zoals alles hier werkt het volledig offline zodra je het hebt gedownload.',
    benefits: [
      'Begin wanneer je wilt, elke dag. Geen vast tijdslot, geen gids om te ontmoeten, geen wachtrij.',
      'Verteld door een moedertaalstem in jouw taal, met bij elke stop een nieuw verhaal.',
      'Download het één keer en het werkt volledig offline, geen roaming, geen dode zones.',
      'Een GPS-route plus een augmented-reality-pijl zodat je nooit verkeerd loopt.',
    ],
    langIntro:
      'Koreaans, Chinees, Hebreeuws en 29 andere, elke stop verteld door een moedertaalspreker. Een van de breedste taalkeuzes van alle zelfgeleide audiotours.',
    cityPassTag: 'City Pass',
    audioTourSuffix: 'zelfgeleide audiotour',
    validity: 'Code 1 jaar geldig · 12 u na activering · offline',
    perCode: '/ code',
    tourLanguageLabel: 'Taal van de tour',
    tourLanguageHint: 'Ingesproken door moedertaalsprekers. 32 talen beschikbaar.',
    numberOfCodesLabel: 'Aantal codes',
    oneCodeHint: 'Eén code activeert de tour voor één persoon.',
    buyLabel: 'Koop voor',
    pendingNote:
      'De beveiligde betaling wordt nog afgerond. Je code en tour worden direct per e-mail geleverd zodra dit live is.',
    deliveryNote: 'Directe levering per e-mail · activeringscode aangemaakt bij aankoop',
    lessCodesAria: 'Minder codes',
    moreCodesAria: 'Meer codes',
    stickyReassure1: 'Geen reservering · code 1 jaar geldig · 12 u na activering',
    stickyReassure2: 'Download via wifi, loop offline',
    stickyOnePrice: 'één prijs',
    stickyCta: 'Haal de sleutel',
  },
};

export function getUi(locale: string): AudioTourUi {
  return UI_STRINGS[locale as Locale] ?? UI_STRINGS.en;
}
