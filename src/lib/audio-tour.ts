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
};

export function getUi(locale: string): AudioTourUi {
  return UI_STRINGS[locale as Locale] ?? UI_STRINGS.en;
}
