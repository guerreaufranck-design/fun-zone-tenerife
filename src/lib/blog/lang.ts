/**
 * Blog language targeting & hreflang — kept in a lightweight module (no article
 * bodies) so client components (e.g. the navbar language switch) can import it
 * without pulling the whole `blogPosts` content array into the client bundle.
 *
 * Each article is written in a SINGLE language. We declare the real language of
 * every post and only cross-link genuine translations, so the same article is
 * never indexed under all 6 locale prefixes (duplicate content).
 */
export type BlogLocale = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'it';

// Non-English articles (verified from article content). Everything else is 'en'.
const POST_LANG: Record<string, BlogLocale> = {
  // French
  'evjf-evg-tenerife-activites-originales': 'fr',
  'audioguide-canaries-lume': 'fr',
  'meilleure-periode-tenerife': 'fr',
  'tenerife-7-jours-itineraire': 'fr',
  'ou-loger-tenerife': 'fr',
  'plus-belles-plages-tenerife': 'fr',
  'que-faire-tenerife': 'fr',
  'tenerife-avec-un-bebe': 'fr',
  // Spanish
  'audioguia-canarias-lume': 'es',
  'despedida-soltera-tenerife-ideas': 'es',
  'mejor-epoca-viajar-tenerife': 'es',
  'tenerife-7-dias-itinerario': 'es',
  'donde-alojarse-tenerife': 'es',
  'mejores-playas-tenerife': 'es',
  'que-hacer-tenerife': 'es',
  'tenerife-con-un-bebe': 'es',
  // German
  'kanaren-audioguide-lume': 'de',
  'junggesellenabschied-teneriffa-ideen': 'de',
  'beste-reisezeit-teneriffa': 'de',
  'teneriffa-7-tage-route': 'de',
  'wo-uebernachten-teneriffa': 'de',
  'schoenste-straende-teneriffa': 'de',
  'teneriffa-sehenswuerdigkeiten': 'de',
  'teneriffa-mit-baby': 'de',
};

/** The language a blog article is written in. */
export function postLang(slug: string): BlogLocale {
  return POST_LANG[slug] ?? 'en';
}

// Groups of articles that are the SAME guide in different languages. Members of
// a group become each other's hreflang alternates. Order is informative only.
const TRANSLATION_GROUPS: string[][] = [
  ['best-time-to-visit-tenerife', 'mejor-epoca-viajar-tenerife', 'meilleure-periode-tenerife', 'beste-reisezeit-teneriffa'],
  ['tenerife-7-day-itinerary', 'tenerife-7-dias-itinerario', 'tenerife-7-jours-itineraire', 'teneriffa-7-tage-route'],
  ['where-to-stay-tenerife', 'donde-alojarse-tenerife', 'ou-loger-tenerife', 'wo-uebernachten-teneriffa'],
  ['best-beaches-tenerife', 'mejores-playas-tenerife', 'plus-belles-plages-tenerife', 'schoenste-straende-teneriffa'],
  ['que-hacer-tenerife', 'que-faire-tenerife', 'teneriffa-sehenswuerdigkeiten'],
  ['tenerife-with-a-baby', 'tenerife-con-un-bebe', 'tenerife-avec-un-bebe', 'teneriffa-mit-baby'],
  ['canary-islands-audio-guide-lume', 'audioguia-canarias-lume', 'audioguide-canaries-lume', 'kanaren-audioguide-lume'],
];

export interface BlogAlternate {
  lang: BlogLocale;
  slug: string;
}

/**
 * Real hreflang alternates for an article: its translation siblings (including
 * itself). A solo article returns just itself.
 */
export function postAlternates(slug: string): BlogAlternate[] {
  const group = TRANSLATION_GROUPS.find((g) => g.includes(slug)) ?? [slug];
  return group.map((s) => ({ lang: postLang(s), slug: s }));
}

/**
 * The slug of this article's translation in `target`, or null if none exists.
 * Used by the language switch to jump to the right article (or fall back to the
 * blog hub) instead of a dead 404 under the wrong locale.
 */
export function translatedSlug(slug: string, target: BlogLocale): string | null {
  const group = TRANSLATION_GROUPS.find((g) => g.includes(slug));
  if (!group) return postLang(slug) === target ? slug : null;
  return group.find((s) => postLang(s) === target) ?? null;
}
