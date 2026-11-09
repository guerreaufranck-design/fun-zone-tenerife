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

  'la-laguna': {
    en: {
      metaTitle: 'San Cristóbal de La Laguna Audio Tour · Self-Guided Walk',
      metaDescription:
        'A self-guided GPS audio tour of San Cristóbal de La Laguna, Tenerife’s UNESCO World Heritage old town. Walk the first planned colonial grid at your own pace with native-voice stories in 32 languages, offline.',
      keywords:
        'la laguna audio tour, san cristobal de la laguna self-guided tour, things to do la laguna tenerife, la laguna walking tour, unesco la laguna',
      ogTitle: 'San Cristóbal de La Laguna Audio Tour | Fun Zone Tenerife',
      ogDescription:
        'Walk the UNESCO old town of La Laguna at your own pace with native-voice stories in 32 languages, offline, with an augmented-reality guide.',
      heroIntro:
        'A self-guided GPS audio walk through Tenerife’s first capital, a UNESCO World Heritage old town laid out as a grid five centuries ago. Cloistered convents, the island’s oldest university and lively student streets, told in your ear where it all began.',
      postcardHeading: 'La Laguna, the version the guidebooks rush past',
      postcardIntro:
        'Not the quick photo stop between the airport and the beach. The stories locked behind the lattice windows and the tower doors, whispered in your ear on the exact spot they belong to. Here are three. Many more wait inside the tour.',
      secrets: [
        {
          place: 'Iglesia de la Concepción',
          teaser:
            'Climb the tower of the island’s first church and the largest bell in the Canaries hangs above you. Inside is a relic that, local tradition says, began to weep oil during a plague, and what happened next is why the city still remembers it.',
        },
        {
          place: 'Convento de Santa Catalina',
          teaser:
            'Behind these wooden lattice screens a nun has lain for nearly three hundred years. The doors open to the public just two days a year, and the queue stretches around the block. Who she was, and why, is part of the walk.',
        },
        {
          place: 'Casa de los Capitanes Generales',
          teaser:
            'This is where the men who ran the whole island lived, right up to the year the capital slipped away to the coast. The house still holds that lost power, if you know what you are looking at.',
        },
      ],
      storyTitle: 'The story of San Cristóbal de La Laguna',
      storyIntro: [
        'La Laguna is the old soul of Tenerife, a university town of painted façades and straight, quiet streets just inland from Santa Cruz. The two cities now almost touch, linked by a tram, yet they could not feel more different. Where the capital is all port and traffic, La Laguna is a place to walk slowly, and almost everything worth seeing sits inside a compact grid you can cross on foot.',
        'It was founded around 1496 and 1497 by Alonso Fernández de Lugo, the conqueror of the island, on the shore of a lake that has since dried up and given the town its name. For more than two centuries it was the capital of Tenerife, and for a time of the whole Canary archipelago, before the honour moved down to Santa Cruz in 1723.',
      ],
      storyBlocks: [
        {
          heading: 'The town that was drawn before it was built',
          paragraphs: [
            'The lower town was set out from 1502 as a deliberate grid, its streets and squares planned in advance rather than left to grow on their own. That made La Laguna one of the first non-fortified colonial towns of its kind, and historians consider its orderly plan a model for the grid cities later laid out across Spanish America, from Havana to Lima. UNESCO added the old town to its World Heritage list in 1999 for exactly this reason.',
            'The University of La Laguna, founded in 1701, was the first in the Canary Islands, and it still fills the streets with students, cafés and a cheerful late-night buzz that sits oddly well against all the history.',
          ],
        },
        {
          heading: 'What to look out for',
          paragraphs: [
            'Start on Calle de la Carrera and Calle Obispo Rey Redondo, the two main spines, lined with the carved wooden balconies and grand doorways of the old merchant and noble houses. The Cathedral and the Iglesia de la Concepción, the island’s first parish, anchor the skyline, and the Concepción tower is worth the climb for the view across the red and ochre rooftops.',
            'Look for the cloistered convents with their celosías, the wooden lattice screens that once let the nuns watch the street unseen. The Santísimo Cristo de La Laguna, a Flemish crucifix kept in its own sanctuary, draws the city’s biggest festival every September.',
          ],
        },
        {
          heading: 'When to go',
          paragraphs: [
            'La Laguna sits on a high plateau and is noticeably cooler, greener and often mistier than the southern coast, with several times the rainfall, so bring a layer even in summer. For comfortable walking aim for late spring or early autumn. Come in mid-September for the Cristo festival if you want the city at full voice, though it fills up fast.',
          ],
        },
      ],
      mapHeading: 'Where is San Cristóbal de La Laguna?',
      mapIntro:
        'La Laguna sits just inland from Santa Cruz on the north-east side of Tenerife, the largest of Spain’s Canary Islands, on a plateau about 550 metres above the sea. The two cities almost merge, and a tram links them in well under an hour.',
      bonusHeading: 'Three things most visitors never learn',
      bonus: [
        {
          lead: 'A street plan that crossed an ocean.',
          text:
            'The calm grid you are walking is not just pretty. Drawn at the end of the fifteenth century, it is considered a template for the great grid cities Spain went on to build across the Americas, which makes this quiet town a kind of blueprint for half a hemisphere.',
        },
        {
          lead: 'A nun you can still see.',
          text:
            'In the convent of Santa Catalina lies a nun known as la Siervita, who died in 1731 and is venerated as incorrupt. Her body is shown to the public on only two days a year, and thousands still queue to file past her.',
        },
        {
          lead: 'The lake that is not there.',
          text:
            'The town is named after a lagoon, la laguna, that once filled the plain. It was drained long ago, so the water that gave the city its name has quietly vanished, leaving only the word behind.',
        },
      ],
      langHeading: 'La Laguna in your language, all 32',
      ctaHeading: 'Get the key to La Laguna',
      ctaIntro:
        'Pick your stops, start walking, and let the voice reveal what everyone else walks straight past.',
    },
  },

  'la-orotava': {
    en: {
      metaTitle: 'La Orotava Audio Tour · Self-Guided Walk',
      metaDescription:
        'A self-guided GPS audio tour of La Orotava, Tenerife’s best-preserved historic town. Climb the old noble streets at your own pace with native-voice stories in 32 languages, offline.',
      keywords:
        'la orotava audio tour, self-guided tour la orotava, things to do la orotava tenerife, la orotava walking tour, casa de los balcones',
      ogTitle: 'La Orotava Audio Tour | Fun Zone Tenerife',
      ogDescription:
        'Walk the historic hill town of La Orotava at your own pace with native-voice stories in 32 languages, offline, with an augmented-reality guide.',
      heroIntro:
        'A self-guided GPS audio walk through the steep, flower-filled streets of La Orotava, the valley town that sugar and wine built. Carved cedar balconies, aristocratic courtyards and a square that becomes a carpet of volcanic sand once a year, told in your ear where they stand.',
      postcardHeading: 'La Orotava, the town behind the balconies',
      postcardIntro:
        'Not the one photograph everyone takes. The stories inside the old houses and the terraced gardens, whispered in your ear on the exact spot they belong to. Here are three. Many more wait inside the tour.',
      secrets: [
        {
          place: 'Casa de los Balcones',
          teaser:
            'The most photographed balconies in the Canaries hang off a house begun in 1632. Step through the door and the real surprise is the courtyard behind, and the family that carved all this wealth out of wine.',
        },
        {
          place: 'Jardines de la Quinta Roja',
          teaser:
            'A marble temple crowns this hillside garden, built for a nobleman the Church would not bury in holy ground. The reason why, and the twist in where he finally ended up, is a story the garden keeps very quiet.',
        },
        {
          place: 'Plaza del Ayuntamiento',
          teaser:
            'For a few days each summer this ordinary square becomes a vast picture made entirely of coloured sand carried down from the volcano, large enough to have set a world record. Then it is swept away.',
        },
      ],
      storyTitle: 'The story of La Orotava',
      storyIntro: [
        'La Orotava is the aristocrat of northern Tenerife, a hill town of noble houses and steep cobbled streets looking out over a green valley toward the sea. It wears its history more completely than almost anywhere else on the island, and the old quarter is small enough to explore entirely on foot, though your legs will know about the gradients.',
        'Long before the Spanish came, this valley was the heartland of Taoro, the most powerful of the Guanche kingdoms that ruled the island. After the conquest the land was shared out from 1502, and an economy of sugar and then Malvasía wine made a handful of merchant families very rich, who poured their money into the carved stone and cedar you still see today.',
      ],
      storyBlocks: [
        {
          heading: 'A town built on sugar and wine',
          paragraphs: [
            'The grand houses along Calle San Francisco were raised by traders who grew wealthy shipping sugar and sweet Malvasía wine to northern Europe. The town was granted the status of an independent villa by the crown in 1648, and its historic centre is often called the best-preserved example of traditional Canarian architecture on the island, protected as a historic-artistic site since 1976.',
          ],
        },
        {
          heading: 'Carpets of volcanic sand',
          paragraphs: [
            'Once a year, for Corpus Christi, the people of La Orotava cover their streets and the main square with alfombras, carpets made from flower petals and from coloured earth and sand brought down from the slopes of Teide. The great carpet in front of the town hall has reached world-record size, the work of weeks, laid grain by grain and then walked over and gone within days.',
          ],
        },
        {
          heading: 'What to look out for',
          paragraphs: [
            'Beyond the Casa de los Balcones, find the Baroque Iglesia de la Concepción, one of the finest of its kind in the islands, and the terraced Victoria gardens with their marble temple. The Hijuela del Botánico, a small botanical garden tucked behind the town hall, began as an offshoot of the famous acclimatisation garden down in Puerto de la Cruz.',
          ],
        },
        {
          heading: 'When to go',
          paragraphs: [
            'The valley is mild all year. For the full spectacle, come around Corpus Christi in late spring or early summer, when the carpets are laid, though the exact dates shift each year with the religious calendar. The streets are steep, so comfortable shoes matter more here than almost anywhere on the island.',
          ],
        },
      ],
      mapHeading: 'Where is La Orotava?',
      mapIntro:
        'La Orotava sits in the green valley of the same name on the north side of Tenerife, climbing the slopes toward Teide. It is about four kilometres above the coastal town of Puerto de la Cruz and roughly half an hour from the capital, Santa Cruz. Its municipality is the largest on the island and reaches all the way up to the 3,718-metre summit of Teide, the highest point in Spain.',
      bonusHeading: 'Three things most visitors never learn',
      bonus: [
        {
          lead: 'The square is a world record.',
          text:
            'The Corpus Christi sand carpet laid in front of the town hall has been recognised as a record-breaking work of its kind, made from tonnes of naturally coloured volcanic earth gathered in the Teide national park, then destroyed within days.',
        },
        {
          lead: 'A temple for an outcast.',
          text:
            'The marble rotunda in the Victoria gardens was built as a mausoleum for a local marquis and freemason whom the Church refused to bury in consecrated ground. After years of dispute the temple was, in the end, left empty.',
        },
        {
          lead: 'The valley that stunned a scientist.',
          text:
            'When the explorer Alexander von Humboldt passed through in 1799 he was overwhelmed by the Orotava valley, and a viewpoint above the town still carries his name and his statue.',
        },
      ],
      langHeading: 'La Orotava in your language, all 32',
      ctaHeading: 'Get the key to La Orotava',
      ctaIntro:
        'Pick your stops, start walking, and let the voice reveal what everyone else walks straight past.',
    },
  },

  'puerto-de-la-cruz': {
    en: {
      metaTitle: 'Puerto de la Cruz Audio Tour · Self-Guided Walk',
      metaDescription:
        'A self-guided GPS audio tour of Puerto de la Cruz, the Canary Islands’ first resort town. Walk the harbour, gardens and Manrique lido at your own pace with native-voice stories in 32 languages, offline.',
      keywords:
        'puerto de la cruz audio tour, self-guided tour puerto de la cruz, things to do puerto de la cruz tenerife, puerto de la cruz walking tour, lago martianez',
      ogTitle: 'Puerto de la Cruz Audio Tour | Fun Zone Tenerife',
      ogDescription:
        'Walk the old resort town of Puerto de la Cruz at your own pace with native-voice stories in 32 languages, offline, with an augmented-reality guide.',
      heroIntro:
        'A self-guided GPS audio walk through the town that invented Canary tourism. A fishing harbour turned Victorian health resort, a seawater lido shaped by an artist and a royal botanical garden, told in your ear right where they sit above the Atlantic.',
      postcardHeading: 'Puerto de la Cruz, more than its beaches',
      postcardIntro:
        'Not the sun-lounger shots. The stories behind the harbour, the gardens and the old hotels, whispered in your ear on the exact spot they belong to. Here are three. Many more wait inside the tour.',
      secrets: [
        {
          place: 'Jardín Botánico',
          teaser:
            'A king ordered this garden built so that plants carried from the far side of the world could be taught to survive in Europe. More than two centuries later they are still here, including a fig tree the size of a house.',
        },
        {
          place: 'Lago Martiánez',
          teaser:
            'These sculpted seawater pools are not just a swim. They are the work of one of Spain’s most famous artists, built from black volcanic rock on the very spot where natural tide pools once lay.',
        },
        {
          place: 'Gran Hotel Taoro',
          teaser:
            'The grand hotel on the hill drew Europe’s invalids and aristocrats when Tenerife tourism was brand new, and in 1927 it took in a very famous guest who had just reappeared after vanishing from England.',
        },
      ],
      storyTitle: 'The story of Puerto de la Cruz',
      storyIntro: [
        'Puerto de la Cruz is where tourism on Tenerife began. A compact town on the green north coast, it wraps a working fishing harbour in gardens, promenades and old hotels, with the slopes of the Orotava valley rising behind and the Atlantic breaking in front. It is flat, walkable and far older in spirit than the resort strips of the south.',
        'It grew up as the port of inland La Orotava, and when the eruption of 1706 destroyed the harbour of Garachico along the coast, Puerto de la Cruz rose to become the island’s most important port, shipping out sugar and wine. In the nineteenth century a new kind of visitor arrived, northern Europeans seeking the mild winter climate, making this one of the first holiday resorts in the Canary Islands.',
      ],
      storyBlocks: [
        {
          heading: 'The first resort in the islands',
          paragraphs: [
            'By the late nineteenth century the town had its grand hotels, among them the Taoro up in its park, built with British money and opened in 1890, while old mansions in the centre became the first guesthouses. A British community put down roots here, leaving behind an Anglican church and the oldest Anglican cemetery in the Canaries. The mass tourism of sun and sea came later, in the 1950s.',
          ],
        },
        {
          heading: 'Gardens, pools and an artist’s hand',
          paragraphs: [
            'In 1788 King Carlos III ordered a botanical garden here, the Jardín de Aclimatación, to acclimatise tropical plants brought from Spain’s colonies before sending them on to the mainland. It is often called the second-oldest botanical garden in Spain. On the seafront, the Lago Martiánez lido, a complex of seawater pools in black volcanic stone, was designed by the Lanzarote artist César Manrique and finished in the 1970s.',
          ],
        },
        {
          heading: 'What to look out for',
          paragraphs: [
            'Wander the old fishing quarter around Plaza del Charco, the small Castillo de San Felipe that once guarded the coast against pirates, and the black sand of Playa Jardín at the western end. The harbour itself still lands fish, and the lanes of La Ranilla behind it have become the town’s most characterful corner.',
          ],
        },
        {
          heading: 'When to go',
          paragraphs: [
            'The north coast is milder and greener than the south, and often a little cloudier, which is exactly what first drew winter visitors. It is a year-round town, busiest with northern Europeans in the winter and with Spanish holidaymakers in August. Carnival, in late winter, is the wildest week to be here.',
          ],
        },
      ],
      mapHeading: 'Where is Puerto de la Cruz?',
      mapIntro:
        'Puerto de la Cruz sits on the north coast of Tenerife, the largest of Spain’s Canary Islands, just below the town of La Orotava and about half an hour west of the capital, Santa Cruz. It faces the open Atlantic, with the green Orotava valley climbing behind it toward Teide.',
      bonusHeading: 'Three things most visitors never learn',
      bonus: [
        {
          lead: 'A garden built to tame the tropics.',
          text:
            'The town’s botanical garden was founded in 1788 on the orders of a Spanish king, as a halfway house where tropical plants from the Americas and Asia could be coaxed into the Canary climate before being sent on to the royal gardens of the mainland.',
        },
        {
          lead: 'Pools designed by an artist.',
          text:
            'The Lago Martiánez bathing complex on the seafront was shaped by César Manrique, the Lanzarote artist, who turned a stretch of coast into a landscape of seawater lakes and black volcanic rock rather than an ordinary swimming pool.',
        },
        {
          lead: 'A herd of goats in the sea.',
          text:
            'Every year on the eve of San Juan, hundreds of goats are driven down to the harbour and walked into the Atlantic in a bathing ritual whose roots are traced back to the island’s Guanche past.',
        },
      ],
      langHeading: 'Puerto de la Cruz in your language, all 32',
      ctaHeading: 'Get the key to Puerto de la Cruz',
      ctaIntro:
        'Pick your stops, start walking, and let the voice reveal what everyone else walks straight past.',
    },
  },

  'garachico': {
    en: {
      metaTitle: 'Garachico Audio Tour · Self-Guided Walk',
      metaDescription:
        'A self-guided GPS audio tour of Garachico, the Tenerife port a volcano buried in 1706. Walk the lava rock pools and old stone town at your own pace with native-voice stories in 32 languages, offline.',
      keywords:
        'garachico audio tour, self-guided tour garachico, things to do garachico tenerife, garachico walking tour, el caleton rock pools',
      ogTitle: 'Garachico Audio Tour | Fun Zone Tenerife',
      ogDescription:
        'Walk the old volcano-struck town of Garachico at your own pace with native-voice stories in 32 languages, offline, with an augmented-reality guide.',
      heroIntro:
        'A self-guided GPS audio walk through Garachico, once the busiest port on Tenerife until a volcano rewrote its story in a single night. Lava rock pools, a fortress that outlived the harbour it guarded and stone streets rebuilt from the ruins, told in your ear where it happened.',
      postcardHeading: 'Garachico, the town the volcano remade',
      postcardIntro:
        'Not the pretty harbour shot. The stories written in the black rock underfoot, whispered in your ear on the exact spot they belong to. Here are three. Many more wait inside the tour.',
      secrets: [
        {
          place: 'El Caletón',
          teaser:
            'The sea pools where everyone swims today were poured, glowing, out of the earth in 1706. You are bathing in the solidified lava of the very eruption that destroyed the town’s fortune.',
        },
        {
          place: 'Puerta de Tierra',
          teaser:
            'This old stone gateway once opened onto a deep-water harbour full of ships. Today it stands on dry land in a quiet garden, because the sea it faced was swallowed whole by lava.',
        },
        {
          place: 'Castillo de San Miguel',
          teaser:
            'The little fort came through the eruption almost untouched, and then found itself guarding nothing: the bay it was built to defend had turned to rock. It still watches a coast that no longer needs it.',
        },
      ],
      storyTitle: 'The story of Garachico',
      storyIntro: [
        'Garachico is one of the most beautiful towns on Tenerife, a tight grid of stone houses, convents and little squares pressed between a high cliff and the sea on the north-west coast. It is quiet now, a place for slow mornings and a swim in the rock pools, but it was once the busiest harbour on the island, and the story of how it lost that crown is written into every street.',
        'Founded soon after the conquest of 1496 by the Genoese merchant Cristóbal de Ponte, the town grew rich through the sixteenth and seventeenth centuries as the main port of Tenerife, shipping sugar and above all the sweet Malvasía wine that made the island famous in northern Europe.',
      ],
      storyBlocks: [
        {
          heading: 'The night the harbour turned to stone',
          paragraphs: [
            'In May 1706 a volcano on the slopes above the town erupted, and over the following weeks several rivers of lava poured down through Garachico. They buried much of the town and filled the deep natural harbour that was the source of all its wealth. Remarkably, the people had time to flee and no one was killed, but the port was gone, and with it the town’s reason to exist. Trade moved along the coast to Puerto de la Cruz, and Garachico shrank to a small fishing village.',
            'The old idea that the whole town was destroyed except the church is a tourist tale. The eruption spared a good deal, including the convent of the Immaculate Conception and the little fort of San Miguel, while the church of Santa Ana was scorched and rebuilt in the years that followed.',
          ],
        },
        {
          heading: 'A town rebuilt in stone',
          paragraphs: [
            'Instead of being abandoned, Garachico slowly rebuilt itself, and today it is prized precisely for the stone streets and restored mansions that rose from the disaster. Its careful restoration earned it Spain’s Gold Medal of Fine Arts in 1980, and it is counted among the most beautiful villages in the country.',
          ],
        },
        {
          heading: 'What to look out for',
          paragraphs: [
            'Swim or paddle in the El Caletón pools, shaped by the 1706 lava, then find the Castillo de San Miguel, the Puerta de Tierra gateway stranded inland, and the church of Santa Ana. Offshore stands the Roque de Garachico, a small volcanic islet that is now a protected natural monument.',
          ],
        },
        {
          heading: 'When to go',
          paragraphs: [
            'Garachico is mild all year, though the north-west coast can be cloudier than the south. Spring and autumn are the easiest months for walking and swimming. Every five years the town holds its Fiestas Lustrales, famous for fireworks that cascade down the cliff above the rooftops.',
          ],
        },
      ],
      mapHeading: 'Where is Garachico?',
      mapIntro:
        'Garachico sits on the north-west coast of Tenerife, the largest of Spain’s Canary Islands, at the foot of a high cliff below the Teno hills. It lies just west of Icod de los Vinos and about an hour from the capital, Santa Cruz, on the far quieter side of the island.',
      bonusHeading: 'Three things most visitors never learn',
      bonus: [
        {
          lead: 'You swim in the disaster.',
          text:
            'The El Caletón rock pools, the town’s favourite place to bathe, are made of solidified lava from the 1706 eruption, the same lava that buried the harbour and ended Garachico’s golden age.',
        },
        {
          lead: 'A gate to a vanished sea.',
          text:
            'The Puerta de Tierra was the main gate to the old port, through which all the town’s trade once passed. It now sits inland in a small park beside an old wine press, because the lava filled in the bay it used to face.',
        },
        {
          lead: 'The wine the world wanted.',
          text:
            'Garachico shipped out the Canary Malvasía, the sweet malmsey prized across Elizabethan England, the very Canary wine that Shakespeare has his characters call for in his plays.',
        },
      ],
      langHeading: 'Garachico in your language, all 32',
      ctaHeading: 'Get the key to Garachico',
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
