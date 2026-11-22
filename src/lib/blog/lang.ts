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
  'audioguide-canaries-lume': 'fr',
  'meilleure-periode-tenerife': 'fr',
  'tenerife-7-jours-itineraire': 'fr',
  'ou-loger-tenerife': 'fr',
  'plus-belles-plages-tenerife': 'fr',
  'que-faire-tenerife': 'fr',
  'tenerife-avec-un-bebe': 'fr',
  // French city guides (translations of the English city guides)
  'los-cristianos-que-faire': 'fr',
  'playa-de-las-americas-que-faire': 'fr',
  'costa-adeje-que-faire': 'fr',
  'puerto-de-la-cruz-que-faire': 'fr',
  'santa-cruz-tenerife-que-faire': 'fr',
  'la-laguna-tenerife-que-faire': 'fr',
  'los-gigantes-que-faire': 'fr',
  'el-medano-que-faire': 'fr',
  // Spanish city guides
  'los-cristianos-que-hacer': 'es',
  'playa-de-las-americas-que-hacer': 'es',
  'costa-adeje-que-hacer': 'es',
  'puerto-de-la-cruz-que-hacer': 'es',
  'santa-cruz-tenerife-que-hacer': 'es',
  'la-laguna-tenerife-que-hacer': 'es',
  'los-gigantes-que-hacer': 'es',
  'el-medano-que-hacer': 'es',
  // German city guides
  'los-cristianos-teneriffa-tipps': 'de',
  'playa-de-las-americas-teneriffa-tipps': 'de',
  'costa-adeje-teneriffa-tipps': 'de',
  'puerto-de-la-cruz-teneriffa-tipps': 'de',
  'santa-cruz-teneriffa-tipps': 'de',
  'la-laguna-teneriffa-tipps': 'de',
  'los-gigantes-teneriffa-tipps': 'de',
  'el-medano-teneriffa-tipps': 'de',
  // Dutch city guides
  'los-cristianos-tenerife-tips': 'nl',
  'playa-de-las-americas-tenerife-tips': 'nl',
  'costa-adeje-tenerife-tips': 'nl',
  'puerto-de-la-cruz-tenerife-tips': 'nl',
  'santa-cruz-tenerife-tips': 'nl',
  'la-laguna-tenerife-tips': 'nl',
  'los-gigantes-tenerife-tips': 'nl',
  'el-medano-tenerife-tips': 'nl',
  // Italian city guides
  'los-cristianos-cosa-fare': 'it',
  'playa-de-las-americas-cosa-fare': 'it',
  'costa-adeje-cosa-fare': 'it',
  'puerto-de-la-cruz-cosa-fare': 'it',
  'santa-cruz-tenerife-cosa-fare': 'it',
  'la-laguna-tenerife-cosa-fare': 'it',
  'los-gigantes-cosa-fare': 'it',
  'el-medano-cosa-fare': 'it',
  // Blog articles batch A - FR
  'premier-escape-game-tenerife': 'fr',
  'escape-game-chasse-au-tresor-tenerife': 'fr',
  'observation-baleines-tenerife-guide': 'fr',
  'mont-teide-tenerife-guide': 'fr',
  'siam-park-tenerife-conseils': 'fr',
  'se-deplacer-tenerife': 'fr',
  'randonnee-gorges-masca-tenerife': 'fr',
  'carnaval-santa-cruz-tenerife': 'fr',
  // Blog articles batch A - ES
  'escape-game-tenerife-principiantes': 'es',
  'escape-games-rutas-tesoro-tenerife': 'es',
  'avistamiento-ballenas-tenerife-guia': 'es',
  'teide-tenerife-guia-visita': 'es',
  'siam-park-tenerife-consejos': 'es',
  'como-moverse-tenerife': 'es',
  'barranco-masca-senderismo-tenerife': 'es',
  'carnaval-santa-cruz-tenerife-guia': 'es',
  // Blog articles batch A - DE
  'escape-game-teneriffa-anfaenger': 'de',
  'escape-games-schnitzeljagd-teneriffa': 'de',
  'wale-beobachten-teneriffa': 'de',
  'teide-teneriffa-besucherguide': 'de',
  'siam-park-teneriffa-tipps': 'de',
  'teneriffa-fortbewegung-mietwagen-bus': 'de',
  'masca-schlucht-wanderung-teneriffa': 'de',
  'karneval-santa-cruz-teneriffa': 'de',
  // Blog articles batch B - FR
  'loro-parque-tenerife-visite': 'fr',
  'vie-nocturne-tenerife': 'fr',
  'observation-etoiles-teide-tenerife': 'fr',
  'tenerife-avec-jeunes-enfants': 'fr',
  'excursions-journee-tenerife': 'fr',
  'parc-rural-anaga-tenerife': 'fr',
  'tenerife-ou-gran-canaria': 'fr',
  // Blog articles batch B - ES
  'loro-parque-tenerife-guia': 'es',
  'vida-nocturna-tenerife': 'es',
  'observacion-estrellas-teide-tenerife': 'es',
  'tenerife-con-ninos-pequenos': 'es',
  'excursiones-un-dia-tenerife': 'es',
  'parque-rural-anaga-tenerife': 'es',
  'tenerife-o-gran-canaria': 'es',
  // Blog articles batch B - DE
  'loro-parque-teneriffa-guide': 'de',
  'teneriffa-nachtleben': 'de',
  'teide-sterne-beobachten-teneriffa': 'de',
  'teneriffa-mit-kleinkindern': 'de',
  'teneriffa-tagesausfluege': 'de',
  'anaga-naturpark-teneriffa': 'de',
  'teneriffa-oder-gran-canaria': 'de',
  // Spanish
  'audioguia-canarias-lume': 'es',
  'mejor-epoca-viajar-tenerife': 'es',
  'tenerife-7-dias-itinerario': 'es',
  'donde-alojarse-tenerife': 'es',
  'mejores-playas-tenerife': 'es',
  'que-hacer-tenerife': 'es',
  'tenerife-con-un-bebe': 'es',
  // German
  'kanaren-audioguide-lume': 'de',
  'beste-reisezeit-teneriffa': 'de',
  'teneriffa-7-tage-route': 'de',
  'wo-uebernachten-teneriffa': 'de',
  'schoenste-straende-teneriffa': 'de',
  'teneriffa-sehenswuerdigkeiten': 'de',
  'teneriffa-mit-baby': 'de',
  // Blog articles - NL
  'eerste-escape-game-tenerife': 'nl',
  'escape-game-speurtocht-tenerife': 'nl',
  'walvissen-spotten-tenerife-gids': 'nl',
  'teide-tenerife-bezoekersgids': 'nl',
  'siam-park-tenerife-tips': 'nl',
  'vervoer-tenerife': 'nl',
  'masca-kloof-wandeling-tenerife': 'nl',
  'carnaval-santa-cruz-tenerife-gids': 'nl',
  'loro-parque-tenerife-gids': 'nl',
  'tenerife-nachtleven': 'nl',
  'sterren-kijken-teide-tenerife': 'nl',
  'tenerife-met-peuters': 'nl',
  'dagtrips-tenerife': 'nl',
  'anaga-natuurpark-tenerife': 'nl',
  'tenerife-of-gran-canaria': 'nl',
  'mooiste-stranden-tenerife': 'nl',
  'beste-reistijd-tenerife': 'nl',
  'tenerife-7-dagen-route': 'nl',
  'waar-verblijven-tenerife': 'nl',
  'audiogids-canarische-eilanden-lume': 'nl',
  'tenerife-met-een-baby': 'nl',
  // Blog articles - IT
  'primo-escape-game-tenerife': 'it',
  'escape-game-caccia-al-tesoro-tenerife': 'it',
  'avvistamento-balene-tenerife-guida': 'it',
  'teide-tenerife-guida-visita': 'it',
  'siam-park-tenerife-consigli': 'it',
  'come-spostarsi-tenerife': 'it',
  'trekking-gola-masca-tenerife': 'it',
  'carnevale-santa-cruz-tenerife': 'it',
  'loro-parque-tenerife-guida': 'it',
  'vita-notturna-tenerife': 'it',
  'osservazione-stelle-teide-tenerife': 'it',
  'tenerife-con-bambini-piccoli': 'it',
  'gite-giornaliere-tenerife': 'it',
  'parco-rurale-anaga-tenerife': 'it',
  'tenerife-oppure-gran-canaria': 'it',
  'migliori-spiagge-tenerife': 'it',
  'quando-andare-tenerife': 'it',
  'tenerife-itinerario-7-giorni': 'it',
  'dove-alloggiare-tenerife': 'it',
  'audioguida-canarie-lume': 'it',
  'tenerife-con-un-neonato': 'it',
  // Celebrations + things-to-do batch
  'enterrement-vie-garcon-tenerife': 'fr',
  'enterrement-vie-jeune-fille-tenerife': 'fr',
  'despedida-soltero-tenerife-guia': 'es',
  'despedida-soltera-tenerife-guia': 'es',
  'junggesellenabschied-teneriffa-guide': 'de',
  'junggesellinnenabschied-teneriffa-ideen': 'de',
  'vrijgezellenfeest-mannen-tenerife': 'nl',
  'vrijgezellenfeest-vrouwen-tenerife': 'nl',
  'wat-te-doen-tenerife': 'nl',
  'addio-al-celibato-tenerife-guida': 'it',
  'addio-al-nubilato-tenerife-idee': 'it',
  'cosa-fare-tenerife': 'it',
  // Car-rental (no deposit / no credit card) article
  'alquiler-coche-tenerife-sin-deposito-sin-tarjeta': 'es',
  'location-voiture-tenerife-sans-caution-sans-carte': 'fr',
  'mietwagen-teneriffa-ohne-kaution-ohne-kreditkarte': 'de',
  'auto-huren-tenerife-zonder-borg-zonder-creditcard': 'nl',
  'noleggio-auto-tenerife-senza-deposito-senza-carta': 'it',
};

/** The language a blog article is written in. */
export function postLang(slug: string): BlogLocale {
  return POST_LANG[slug] ?? 'en';
}

// Groups of articles that are the SAME guide in different languages. Members of
// a group become each other's hreflang alternates. Order is informative only.
const TRANSLATION_GROUPS: string[][] = [
  ['best-time-to-visit-tenerife', 'mejor-epoca-viajar-tenerife', 'meilleure-periode-tenerife', 'beste-reisezeit-teneriffa', 'beste-reistijd-tenerife', 'quando-andare-tenerife'],
  ['tenerife-7-day-itinerary', 'tenerife-7-dias-itinerario', 'tenerife-7-jours-itineraire', 'teneriffa-7-tage-route', 'tenerife-7-dagen-route', 'tenerife-itinerario-7-giorni'],
  ['where-to-stay-tenerife', 'donde-alojarse-tenerife', 'ou-loger-tenerife', 'wo-uebernachten-teneriffa', 'waar-verblijven-tenerife', 'dove-alloggiare-tenerife'],
  ['best-beaches-tenerife', 'mejores-playas-tenerife', 'plus-belles-plages-tenerife', 'schoenste-straende-teneriffa', 'mooiste-stranden-tenerife', 'migliori-spiagge-tenerife'],
  ['que-hacer-tenerife', 'que-faire-tenerife', 'teneriffa-sehenswuerdigkeiten', 'things-to-do-tenerife', 'wat-te-doen-tenerife', 'cosa-fare-tenerife'],
  ['tenerife-with-a-baby', 'tenerife-con-un-bebe', 'tenerife-avec-un-bebe', 'teneriffa-mit-baby', 'tenerife-met-een-baby', 'tenerife-con-un-neonato'],
  ['canary-islands-audio-guide-lume', 'audioguia-canarias-lume', 'audioguide-canaries-lume', 'kanaren-audioguide-lume', 'audiogids-canarische-eilanden-lume', 'audioguida-canarie-lume'],
  // City guides (EN original + FR/ES/DE/NL/IT translations)
  ['los-cristianos-tenerife-things-to-do', 'los-cristianos-que-faire', 'los-cristianos-que-hacer', 'los-cristianos-teneriffa-tipps', 'los-cristianos-tenerife-tips', 'los-cristianos-cosa-fare'],
  ['playa-de-las-americas-tenerife-guide', 'playa-de-las-americas-que-faire', 'playa-de-las-americas-que-hacer', 'playa-de-las-americas-teneriffa-tipps', 'playa-de-las-americas-tenerife-tips', 'playa-de-las-americas-cosa-fare'],
  ['costa-adeje-tenerife-things-to-do', 'costa-adeje-que-faire', 'costa-adeje-que-hacer', 'costa-adeje-teneriffa-tipps', 'costa-adeje-tenerife-tips', 'costa-adeje-cosa-fare'],
  ['puerto-de-la-cruz-tenerife-things-to-do', 'puerto-de-la-cruz-que-faire', 'puerto-de-la-cruz-que-hacer', 'puerto-de-la-cruz-teneriffa-tipps', 'puerto-de-la-cruz-tenerife-tips', 'puerto-de-la-cruz-cosa-fare'],
  ['santa-cruz-de-tenerife-things-to-do', 'santa-cruz-tenerife-que-faire', 'santa-cruz-tenerife-que-hacer', 'santa-cruz-teneriffa-tipps', 'santa-cruz-tenerife-tips', 'santa-cruz-tenerife-cosa-fare'],
  ['la-laguna-tenerife-things-to-do', 'la-laguna-tenerife-que-faire', 'la-laguna-tenerife-que-hacer', 'la-laguna-teneriffa-tipps', 'la-laguna-tenerife-tips', 'la-laguna-tenerife-cosa-fare'],
  ['los-gigantes-tenerife-things-to-do', 'los-gigantes-que-faire', 'los-gigantes-que-hacer', 'los-gigantes-teneriffa-tipps', 'los-gigantes-tenerife-tips', 'los-gigantes-cosa-fare'],
  ['el-medano-tenerife-things-to-do', 'el-medano-que-faire', 'el-medano-que-hacer', 'el-medano-teneriffa-tipps', 'el-medano-tenerife-tips', 'el-medano-cosa-fare'],
  // Blog articles batch A (EN + FR + ES + DE; NL/IT pending)
  ['escape-game-tenerife-first-timers', 'premier-escape-game-tenerife', 'escape-game-tenerife-principiantes', 'escape-game-teneriffa-anfaenger', 'eerste-escape-game-tenerife', 'primo-escape-game-tenerife'],
  ['escape-game-treasure-hunt-city-tour-tenerife', 'escape-game-chasse-au-tresor-tenerife', 'escape-games-rutas-tesoro-tenerife', 'escape-games-schnitzeljagd-teneriffa', 'escape-game-speurtocht-tenerife', 'escape-game-caccia-al-tesoro-tenerife'],
  ['whale-watching-tenerife-complete-guide', 'observation-baleines-tenerife-guide', 'avistamiento-ballenas-tenerife-guia', 'wale-beobachten-teneriffa', 'walvissen-spotten-tenerife-gids', 'avvistamento-balene-tenerife-guida'],
  ['mount-teide-tenerife-visitor-guide', 'mont-teide-tenerife-guide', 'teide-tenerife-guia-visita', 'teide-teneriffa-besucherguide', 'teide-tenerife-bezoekersgids', 'teide-tenerife-guida-visita'],
  ['siam-park-tenerife-tips-guide', 'siam-park-tenerife-conseils', 'siam-park-tenerife-consejos', 'siam-park-teneriffa-tipps', 'siam-park-tenerife-tips', 'siam-park-tenerife-consigli'],
  ['getting-around-tenerife', 'se-deplacer-tenerife', 'como-moverse-tenerife', 'teneriffa-fortbewegung-mietwagen-bus', 'vervoer-tenerife', 'come-spostarsi-tenerife'],
  ['masca-gorge-hike-tenerife', 'randonnee-gorges-masca-tenerife', 'barranco-masca-senderismo-tenerife', 'masca-schlucht-wanderung-teneriffa', 'masca-kloof-wandeling-tenerife', 'trekking-gola-masca-tenerife'],
  ['tenerife-carnival-guide', 'carnaval-santa-cruz-tenerife', 'carnaval-santa-cruz-tenerife-guia', 'karneval-santa-cruz-teneriffa', 'carnaval-santa-cruz-tenerife-gids', 'carnevale-santa-cruz-tenerife'],
  // Blog articles batch B (EN + FR + ES + DE; NL/IT pending)
  ['loro-parque-tenerife-guide', 'loro-parque-tenerife-visite', 'loro-parque-tenerife-guia', 'loro-parque-teneriffa-guide', 'loro-parque-tenerife-gids', 'loro-parque-tenerife-guida'],
  ['tenerife-nightlife-guide', 'vie-nocturne-tenerife', 'vida-nocturna-tenerife', 'teneriffa-nachtleben', 'tenerife-nachtleven', 'vita-notturna-tenerife'],
  ['teide-stargazing-tenerife', 'observation-etoiles-teide-tenerife', 'observacion-estrellas-teide-tenerife', 'teide-sterne-beobachten-teneriffa', 'sterren-kijken-teide-tenerife', 'osservazione-stelle-teide-tenerife'],
  ['tenerife-with-toddlers', 'tenerife-avec-jeunes-enfants', 'tenerife-con-ninos-pequenos', 'teneriffa-mit-kleinkindern', 'tenerife-met-peuters', 'tenerife-con-bambini-piccoli'],
  ['tenerife-day-trips', 'excursions-journee-tenerife', 'excursiones-un-dia-tenerife', 'teneriffa-tagesausfluege', 'dagtrips-tenerife', 'gite-giornaliere-tenerife'],
  ['anaga-rural-park-tenerife', 'parc-rural-anaga-tenerife', 'parque-rural-anaga-tenerife', 'anaga-naturpark-teneriffa', 'anaga-natuurpark-tenerife', 'parco-rurale-anaga-tenerife'],
  ['tenerife-vs-gran-canaria', 'tenerife-ou-gran-canaria', 'tenerife-o-gran-canaria', 'teneriffa-oder-gran-canaria', 'tenerife-of-gran-canaria', 'tenerife-oppure-gran-canaria'],
  // Stag & Hen (2 guides across 6 languages)
  ['stag-do-tenerife-guide', 'enterrement-vie-garcon-tenerife', 'despedida-soltero-tenerife-guia', 'junggesellenabschied-teneriffa-guide', 'vrijgezellenfeest-mannen-tenerife', 'addio-al-celibato-tenerife-guida'],
  ['hen-party-tenerife-ideas', 'enterrement-vie-jeune-fille-tenerife', 'despedida-soltera-tenerife-guia', 'junggesellinnenabschied-teneriffa-ideen', 'vrijgezellenfeest-vrouwen-tenerife', 'addio-al-nubilato-tenerife-idee'],
  ['tenerife-car-rental-no-deposit-no-credit-card', 'location-voiture-tenerife-sans-caution-sans-carte', 'alquiler-coche-tenerife-sin-deposito-sin-tarjeta', 'mietwagen-teneriffa-ohne-kaution-ohne-kreditkarte', 'auto-huren-tenerife-zonder-borg-zonder-creditcard', 'noleggio-auto-tenerife-senza-deposito-senza-carta'],
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
