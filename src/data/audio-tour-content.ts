/**
 * City-specific localized prose for the Tenerife self-guided audio tours.
 *
 * Structure: CITY_CONTENT[slug][locale]. English is always present; other
 * locales fall back to English until the careful translation pass fills them.
 * Locale-invariant data (slug, geo, photos, credits) lives in CITY_META in
 * `@/lib/audio-tour`.
 *
 * Content is rewritten in original wording (not copied from the fulfilment
 * provider) to avoid cross-site duplicate content, with extra local anecdotes.
 */

import type { Locale } from '@/lib/seo';
import type { CityCopy } from '@/lib/audio-tour';

type CityStore = Partial<Record<Locale, CityCopy>> & { en: CityCopy };

export const CITY_CONTENT: Record<string, CityStore> = {
  'santa-cruz': {
    en: {
      metaTitle: 'Santa Cruz de Tenerife Audio Tour · Self-Guided Walk',
      metaDescription:
        'A self-guided GPS audio tour of Santa Cruz de Tenerife. Walk the capital at your own pace with native-voice stories in 32 languages, offline and with an AR guide.',
      keywords:
        'santa cruz de tenerife audio tour, self-guided tour santa cruz, things to do santa cruz tenerife, santa cruz walking tour, audio guide tenerife',
      ogTitle: 'Santa Cruz de Tenerife Audio Tour | Fun Zone Tenerife',
      ogDescription:
        'Walk Santa Cruz de Tenerife at your own pace with native-voice stories in 32 languages, offline, with an augmented-reality guide.',
      heroIntro:
        'A self-guided GPS audio walk through the island’s capital. Volcanic drama, Atlantic trade and quiet corners the cruise crowds never reach, told in your ear right where it all happened.',
      postcardHeading: 'Santa Cruz, the version the postcards leave out',
      postcardIntro:
        'Not the glossy shots. The stories even locals walk past without knowing, whispered in your ear on the exact spot they belong to. Here are three. Many more wait inside the tour.',
      secrets: [
        {
          place: 'Plaza de España',
          teaser:
            'The largest square in the Canary Islands hides a sunken secret beneath the water: the buried bones of a fortress that once decided who reached the city and who did not.',
        },
        {
          place: 'Playa de Las Teresitas',
          teaser:
            'That postcard-perfect golden sand is not local at all. It crossed the sea by the shipload from another continent entirely, and the reason why says a lot about this city.',
        },
        {
          place: 'Auditorio de Tenerife',
          teaser:
            'The great white wave on the waterfront seems to change shape as you move around it. Stand in the right spot and it stops being a building and becomes something else.',
        },
      ],
      storyTitle: 'The story of Santa Cruz de Tenerife',
      storyIntro: [
        'Santa Cruz is the working heart of Tenerife, a port city on the north-east coast where cruise liners, container ships and ferries have docked for centuries. While the south of the island built itself around sun loungers and resorts, the capital grew up around trade, and it shows. Colonial façades sit next to bold modern design, and almost everything worth seeing is close enough to reach on foot.',
        'It began in 1494, when the Castilian conqueror Alonso Fernández de Lugo came ashore and planted a silver cross on the beach. That cross gave the place its name, Santa Cruz, the holy cross. For a long time it was only a landing stage serving the real capital inland, San Cristóbal de La Laguna, up in the cooler hills.',
      ],
      storyBlocks: [
        {
          heading: 'From a landing stage to the capital',
          paragraphs: [
            'Everything changed in 1706. A volcanic eruption swallowed the harbour of Garachico, until then the island’s busiest port, and the sea traffic moved south to Santa Cruz almost overnight. By 1723 it was the island’s leading town, and in 1833 it was named capital of the whole Canary archipelago, a title it held alone until it began to share the honour with Las Palmas de Gran Canaria in 1927.',
            'The city also earned a strange footnote in British naval history. In 1797 Admiral Horatio Nelson led an assault on the port and failed badly, losing his right arm to a cannon shot in the process. Santa Cruz still marks the victory every year, and the defence of the city remains a point of local pride. For a lighter kind of fame, its February Carnival is one of the largest on earth, rivalled only by Rio de Janeiro.',
          ],
        },
        {
          heading: 'What to look out for',
          paragraphs: [
            'Start at Plaza de España, the vast seafront square with its circular lake, and remember the sixteenth-century castle of San Cristóbal lies beneath your feet. A short walk away, the Auditorio de Tenerife rises like a frozen wave, the work of architect Santiago Calatrava and now a symbol of the island itself.',
            'For green and quiet, Parque García Sanabria is the largest city park in the Canaries, full of sculpture, exotic planting and a famous floral clock. History lovers should find the MUNA museum, where the mummies of the Guanches, the island’s indigenous people, are kept, while the TEA arts centre handles the contemporary side. End at the Mercado de Nuestra Señora de África for local food, or drive out to Playa de Las Teresitas when you want the beach.',
          ],
        },
        {
          heading: 'When to go',
          paragraphs: [
            'The capital is warm and subtropical all year. For comfortable walking with little rain, aim for March to May or September to November. If you want the spectacle, come for Carnival in February, though the streets are packed and rooms sell out months ahead.',
          ],
        },
      ],
      mapHeading: 'Where is Santa Cruz de Tenerife?',
      mapIntro:
        'Santa Cruz sits on the north-east coast of Tenerife, the largest of Spain’s Canary Islands, off the north-west coast of Africa. It is the island’s capital and main port, about an hour by road from the southern resorts.',
      bonusHeading: 'Three things most visitors never learn',
      bonus: [
        {
          lead: 'The beach is imported.',
          text:
            'The golden sand of Las Teresitas did not wash up here. Tenerife’s own beaches are black volcanic grit, so in the 1970s millions of sacks of pale sand were shipped in from the Sahara to build the postcard shoreline you see today.',
        },
        {
          lead: 'A clock that was a gift.',
          text:
            'The floral clock in Parque García Sanabria keeps real time and was a present from another country, quietly ticking among the flowerbeds for decades.',
        },
        {
          lead: 'Mummies in the museum.',
          text:
            'Long before the Spanish arrived, the Guanche people mummified their dead. Several of them now rest in the city’s archaeology museum, a direct line back to an island culture that vanished five centuries ago.',
        },
      ],
      langHeading: 'Santa Cruz in your language, all 32',
      ctaHeading: 'Get the key to Santa Cruz',
      ctaIntro:
        'Pick your stops, start walking, and let the voice reveal what everyone else walks straight past.',
    },
  },
};

export function getCityCopy(slug: string, locale: string): CityCopy | undefined {
  const store = CITY_CONTENT[slug];
  if (!store) return undefined;
  return store[locale as Locale] ?? store.en;
}
