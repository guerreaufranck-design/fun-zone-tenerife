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
  'betancuria': {
    en: {
      metaTitle: 'Betancuria Audio Tour · Self-Guided Walk in Fuerteventura',
      metaDescription:
        'A self-guided GPS audio tour of Betancuria, the old capital of Fuerteventura. Walk its church, convent ruins and valley at your own pace with native-voice stories in 32 languages, offline and with an AR guide.',
      keywords:
        'betancuria audio tour, self-guided tour betancuria, fuerteventura walking tour, things to do fuerteventura, audio guide fuerteventura',
      ogTitle: 'Betancuria Audio Tour | Fun Zone Tenerife',
      ogDescription:
        'Walk Betancuria, the old capital of Fuerteventura, at your own pace with native-voice stories in 32 languages, offline, with an augmented-reality guide.',
      heroIntro:
        'A self-guided GPS audio walk through the old capital of Fuerteventura. A village hidden in a mountain valley to escape the pirates, a church that was once a bishop’s seat and the ruins of one of the first convents in the islands, told in your ear right where it all happened.',
      postcardHeading: 'Betancuria, the version the postcards leave out',
      postcardIntro:
        'Not the glossy shots. The stories even locals walk past without knowing, whispered in your ear on the exact spot they belong to. Here are three. Many more wait inside the tour.',
      secrets: [
        {
          place: 'Iglesia de Santa María',
          teaser:
            'This modest village church once held the seat of a bishopric that governed almost every Canary Island, a role it kept for barely seven years before it vanished.',
        },
        {
          place: 'Convento de San Buenaventura',
          teaser:
            'A short walk from the village stand the broken walls of one of the first convents in the Canaries, left roofless after a single brutal night in 1593.',
        },
        {
          place: 'Mirador de Guise y Ayose',
          teaser:
            'Two giant bronze kings stand alone on a windswept ridge outside the village, the last native rulers of an island that a long stone wall once split in two.',
        },
      ],
      storyTitle: 'The story of Betancuria',
      storyIntro: [
        'Betancuria is a tiny whitewashed village set deep in a green valley in the mountains of Fuerteventura. For more than four centuries it was the island’s capital, yet today it is the smallest municipality in the whole of the Canary Islands. Palm trees, a handsome old church and quiet lanes make it one of the most picturesque corners of the archipelago.',
        'It was founded in 1404 by the Norman knight Jean de Béthencourt, who gave the place his name. He chose this sheltered inland valley on purpose, for its fresh water and fertile soil, but above all because a hidden site far from the coast offered some protection from the pirates who haunted these waters.',
      ],
      storyBlocks: [
        {
          heading: 'A capital that outran its own defences',
          paragraphs: [
            'The hidden-valley plan never fully worked. European and North African corsairs reached Betancuria more than once, and in 1593 a raid attributed to the corsair Xabán Arráez fell on the town and left it in ruins. The great church of Santa María was sacked and later rebuilt in the seventeenth century, while the convent of San Buenaventura on the edge of the village was left a roofless shell that still stands today.',
            'Despite the raids, Betancuria remained the island’s capital until 1834, when the seat of power moved away to Antigua and later Puerto del Rosario. The village simply stopped growing, which is why its old heart has survived so intact. Its historic centre is protected, and the church, the convent ruins and the little archaeology museum tell the whole story within a short walk.',
          ],
        },
        {
          heading: 'Kings, cheese and an older island',
          paragraphs: [
            'Long before the conquest, Fuerteventura was home to the Majos, its aboriginal people, and was split into two kingdoms by a long stone wall across the island. Just outside Betancuria, two towering bronze statues honour the last native kings, Guise and Ayose, remembered by tradition as the rulers of the two halves, Guise in the north and Ayose in the south.',
            'The valley around the village is bare, volcanic and grazed by goats, and those goats give Fuerteventura its most famous product: Majorero cheese, the first Spanish goat’s cheese to earn a protected designation of origin. Pair it with gofio, the toasted meal that has been a Canarian staple since aboriginal times, and you taste the island at its most traditional.',
          ],
        },
        {
          heading: 'What to look out for',
          paragraphs: [
            'Start at the church of Santa María in the heart of the village, then follow the lane to the roofless ruins of the Convento de San Buenaventura and the small hermitage beside it. Visit the archaeology museum for the island’s deep past, and drive up to the Mirador de Guise y Ayose for the two kings and a sweeping view over the valley. Keep an eye out for local Majorero cheese along the way.',
          ],
        },
      ],
      mapHeading: 'Where is Betancuria?',
      mapIntro:
        'Betancuria lies inland in the mountainous centre-west of Fuerteventura, the most easterly of Spain’s Canary Islands and the closest to the African coast. It is a short, scenic drive from the island’s capital Puerto del Rosario and from the southern resorts.',
      bonusHeading: 'Three things most visitors never learn',
      bonus: [
        {
          lead: 'A capital that hid, and was found anyway.',
          text:
            'Béthencourt tucked his capital deep in a mountain valley to hide it from raiders. Yet in 1593 corsairs marched inland and sacked it all the same, proving the hidden-valley strategy a costly failure.',
        },
        {
          lead: 'A cathedral that lasted seven years.',
          text:
            'In 1424 the pope made the village church of Santa María the seat of a bishopric covering almost all the Canary Islands. The bishopric was abolished in 1431, so Betancuria was a cathedral town for barely seven years.',
        },
        {
          lead: 'The smallest town in the Canaries.',
          text:
            'Once the capital of a whole island, Betancuria is today the least populated municipality in the entire Canary archipelago, home to only a few hundred people, which is exactly why its old heart feels frozen in time.',
        },
      ],
      langHeading: 'Betancuria in your language, all 32',
      ctaHeading: 'Get the key to Betancuria',
      ctaIntro:
        'Pick your stops, start walking, and let the voice reveal what everyone else walks straight past.',
    },
    fr: {
      metaTitle: 'Visite audio de Betancuria · En autonomie, Fuerteventura',
      metaDescription:
        'Une visite audio GPS en autonomie de Betancuria, l’ancienne capitale de Fuerteventura. Parcourez son église, les ruines de son couvent et sa vallée à votre rythme avec des récits en voix native dans 32 langues, hors ligne et avec un guide en réalité augmentée.',
      keywords:
        'visite audio betancuria, visite autoguidée betancuria, visite à pied fuerteventura, que faire à fuerteventura, audioguide fuerteventura',
      ogTitle: 'Visite audio de Betancuria | Fun Zone Tenerife',
      ogDescription:
        'Parcourez Betancuria, l’ancienne capitale de Fuerteventura, à votre rythme avec des récits en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée.',
      heroIntro:
        'Une balade audio GPS en autonomie à travers l’ancienne capitale de Fuerteventura. Un village caché dans une vallée de montagne pour échapper aux pirates, une église qui fut un siège épiscopal et les ruines de l’un des premiers couvents des îles, racontés à votre oreille là où tout s’est passé.',
      postcardHeading: 'Betancuria, la version que les cartes postales oublient',
      postcardIntro:
        'Pas les clichés sur papier glacé. Les histoires que même les habitants longent sans les connaître, murmurées à votre oreille à l’endroit exact où elles ont eu lieu. En voici trois. Beaucoup d’autres vous attendent dans la visite.',
      secrets: [
        {
          place: 'Iglesia de Santa María',
          teaser:
            'Cette modeste église de village abrita jadis le siège d’un évêché qui gouvernait presque toutes les îles Canaries, un rôle qu’elle ne conserva que sept ans avant qu’il ne disparaisse.',
        },
        {
          place: 'Convento de San Buenaventura',
          teaser:
            'À deux pas du village se dressent les murs brisés de l’un des premiers couvents des Canaries, laissé sans toit après une seule nuit brutale en 1593.',
        },
        {
          place: 'Mirador de Guise y Ayose',
          teaser:
            'Deux rois de bronze géants se tiennent seuls sur une crête battue par les vents, aux portes du village, derniers souverains autochtones d’une île qu’un long mur de pierre sépara jadis en deux.',
        },
      ],
      storyTitle: 'L’histoire de Betancuria',
      storyIntro: [
        'Betancuria est un minuscule village blanchi niché au fond d’une vallée verdoyante, dans les montagnes de Fuerteventura. Pendant plus de quatre siècles, elle fut la capitale de l’île, et pourtant c’est aujourd’hui la plus petite commune de toutes les îles Canaries. Des palmiers, une belle vieille église et des ruelles tranquilles en font l’un des coins les plus pittoresques de l’archipel.',
        'Elle fut fondée en 1404 par le chevalier normand Jean de Béthencourt, qui lui donna son nom. Il choisit à dessein cette vallée abritée de l’intérieur, pour son eau douce et sa terre fertile, mais surtout parce qu’un site caché, loin de la côte, offrait une certaine protection contre les pirates qui hantaient ces eaux.',
      ],
      storyBlocks: [
        {
          heading: 'Une capitale rattrapée malgré ses défenses',
          paragraphs: [
            'La stratégie de la vallée cachée ne fonctionna jamais tout à fait. Des corsaires européens et nord-africains atteignirent Betancuria à plusieurs reprises, et en 1593 un raid attribué au corsaire Xabán Arráez s’abattit sur la ville et la laissa en ruines. La grande église de Santa María fut mise à sac puis reconstruite au XVIIe siècle, tandis que le couvent de San Buenaventura, en lisière du village, resta une coque sans toit qui se dresse encore aujourd’hui.',
            'Malgré les raids, Betancuria demeura la capitale de l’île jusqu’en 1834, lorsque le siège du pouvoir partit pour Antigua puis Puerto del Rosario. Le village cessa simplement de grandir, et c’est pourquoi son vieux cœur a si bien survécu. Son centre historique est protégé, et l’église, les ruines du couvent et le petit musée d’archéologie racontent toute l’histoire en une courte promenade.',
          ],
        },
        {
          heading: 'Des rois, du fromage et une île plus ancienne',
          paragraphs: [
            'Bien avant la conquête, Fuerteventura était la terre des Majos, son peuple autochtone, et se trouvait divisée en deux royaumes par un long mur de pierre traversant l’île. Juste à la sortie de Betancuria, deux imposantes statues de bronze honorent les derniers rois natifs, Guise et Ayose, que la tradition présente comme les souverains des deux moitiés, Guise au nord et Ayose au sud.',
            'La vallée autour du village est nue, volcanique et parcourue par les chèvres, et ces chèvres donnent à Fuerteventura son produit le plus célèbre : le fromage Majorero, premier fromage de chèvre espagnol à obtenir une appellation d’origine protégée. Accompagnez-le de gofio, la farine grillée qui est un aliment de base canarien depuis l’époque autochtone, et vous goûtez l’île dans ce qu’elle a de plus traditionnel.',
          ],
        },
        {
          heading: 'À ne pas manquer',
          paragraphs: [
            'Commencez par l’église de Santa María au cœur du village, puis suivez le chemin jusqu’aux ruines sans toit du Convento de San Buenaventura et à la petite chapelle voisine. Visitez le musée d’archéologie pour le passé lointain de l’île, et montez au Mirador de Guise y Ayose pour les deux rois et une vue ample sur la vallée. Guettez le fromage Majorero local au passage.',
          ],
        },
      ],
      mapHeading: 'Où se trouve Betancuria ?',
      mapIntro:
        'Betancuria se trouve à l’intérieur des terres, dans le centre-ouest montagneux de Fuerteventura, la plus orientale des îles Canaries espagnoles et la plus proche de la côte africaine. Elle est à une courte route panoramique de la capitale de l’île, Puerto del Rosario, et des stations balnéaires du sud.',
      bonusHeading: 'Trois choses que la plupart des visiteurs ignorent',
      bonus: [
        {
          lead: 'Une capitale cachée, et pourtant trouvée.',
          text:
            'Béthencourt nicha sa capitale au fond d’une vallée de montagne pour la dissimuler aux pillards. Pourtant, en 1593, les corsaires remontèrent dans les terres et la mirent à sac tout de même, prouvant l’échec coûteux de la stratégie de la vallée cachée.',
        },
        {
          lead: 'Une cathédrale qui dura sept ans.',
          text:
            'En 1424, le pape fit de l’église villageoise de Santa María le siège d’un évêché couvrant presque toutes les îles Canaries. L’évêché fut supprimé en 1431 : Betancuria ne fut donc ville de cathédrale que sept ans à peine.',
        },
        {
          lead: 'La plus petite ville des Canaries.',
          text:
            'Jadis capitale de toute une île, Betancuria est aujourd’hui la commune la moins peuplée de l’archipel des Canaries, avec seulement quelques centaines d’habitants, et c’est précisément pour cela que son vieux cœur semble figé dans le temps.',
        },
      ],
      langHeading: 'Betancuria dans votre langue, les 32',
      ctaHeading: 'Obtenez la clé de Betancuria',
      ctaIntro:
        'Choisissez vos étapes, commencez à marcher, et laissez la voix révéler ce que tout le monde longe sans le voir.',
    },
    es: {
      metaTitle: 'Audioguía de Betancuria · Autoguiada, Fuerteventura',
      metaDescription:
        'Una audioguía GPS autoguiada de Betancuria, la antigua capital de Fuerteventura. Recorre su iglesia, las ruinas del convento y el valle a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión y con guía de realidad aumentada.',
      keywords:
        'audioguía betancuria, ruta autoguiada betancuria, ruta a pie fuerteventura, qué ver en fuerteventura, audioguía fuerteventura',
      ogTitle: 'Audioguía de Betancuria | Fun Zone Tenerife',
      ogDescription:
        'Recorre Betancuria, la antigua capital de Fuerteventura, a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión, con guía de realidad aumentada.',
      heroIntro:
        'Un paseo con audioguía GPS autoguiada por la antigua capital de Fuerteventura. Un pueblo escondido en un valle de montaña para huir de los piratas, una iglesia que fue sede episcopal y las ruinas de uno de los primeros conventos de las islas, narrados a tu oído justo donde ocurrió todo.',
      postcardHeading: 'Betancuria, la versión que las postales se saltan',
      postcardIntro:
        'No las fotos de revista. Las historias por las que hasta los vecinos pasan sin saberlo, susurradas a tu oído en el punto exacto al que pertenecen. Aquí tienes tres. Muchas más te esperan en el tour.',
      secrets: [
        {
          place: 'Iglesia de Santa María',
          teaser:
            'Esta modesta iglesia de pueblo acogió un día la sede de un obispado que gobernaba casi todas las Islas Canarias, un papel que apenas conservó siete años antes de desaparecer.',
        },
        {
          place: 'Convento de San Buenaventura',
          teaser:
            'A un paso del pueblo se alzan los muros rotos de uno de los primeros conventos de Canarias, que quedó sin techo tras una sola noche brutal en 1593.',
        },
        {
          place: 'Mirador de Guise y Ayose',
          teaser:
            'Dos reyes de bronce gigantes se alzan solos en una loma batida por el viento, a las afueras del pueblo, últimos soberanos aborígenes de una isla que un largo muro de piedra partió un día en dos.',
        },
      ],
      storyTitle: 'La historia de Betancuria',
      storyIntro: [
        'Betancuria es un pueblecito blanco encajado en lo hondo de un valle verde, en las montañas de Fuerteventura. Durante más de cuatro siglos fue la capital de la isla y, sin embargo, hoy es el municipio más pequeño de todas las Islas Canarias. Las palmeras, una hermosa iglesia vieja y sus calles tranquilas lo convierten en uno de los rincones más pintorescos del archipiélago.',
        'Fue fundada en 1404 por el caballero normando Jean de Béthencourt, que le dio su nombre. Eligió a propósito este valle resguardado del interior, por su agua dulce y su tierra fértil, pero sobre todo porque un lugar oculto, lejos de la costa, ofrecía cierta protección frente a los piratas que acechaban estas aguas.',
      ],
      storyBlocks: [
        {
          heading: 'Una capital alcanzada pese a sus defensas',
          paragraphs: [
            'El plan del valle escondido nunca funcionó del todo. Corsarios europeos y norteafricanos llegaron a Betancuria más de una vez, y en 1593 un asalto atribuido al corsario Xabán Arráez cayó sobre la villa y la dejó en ruinas. La gran iglesia de Santa María fue saqueada y luego reconstruida en el siglo XVII, mientras que el convento de San Buenaventura, al borde del pueblo, quedó como un cascarón sin techo que aún sigue en pie.',
            'Pese a los asaltos, Betancuria siguió siendo la capital de la isla hasta 1834, cuando la sede del poder se trasladó a Antigua y más tarde a Puerto del Rosario. El pueblo sencillamente dejó de crecer, y por eso su viejo corazón ha sobrevivido tan intacto. Su centro histórico está protegido, y la iglesia, las ruinas del convento y el pequeño museo de arqueología cuentan toda la historia en un corto paseo.',
          ],
        },
        {
          heading: 'Reyes, queso y una isla más antigua',
          paragraphs: [
            'Mucho antes de la conquista, Fuerteventura era tierra de los majos, su pueblo aborigen, y estaba dividida en dos reinos por un largo muro de piedra que cruzaba la isla. Justo a las afueras de Betancuria, dos imponentes estatuas de bronce honran a los últimos reyes nativos, Guise y Ayose, recordados por la tradición como señores de las dos mitades, Guise en el norte y Ayose en el sur.',
            'El valle que rodea el pueblo es pelado, volcánico y pastado por las cabras, y esas cabras dan a Fuerteventura su producto más célebre: el queso majorero, el primer queso de cabra español en lograr una denominación de origen protegida. Acompáñalo con gofio, la harina tostada que es alimento básico canario desde tiempos aborígenes, y saboreas la isla en su versión más tradicional.',
          ],
        },
        {
          heading: 'En qué fijarte',
          paragraphs: [
            'Empieza en la iglesia de Santa María, en el corazón del pueblo, y luego sigue el camino hasta las ruinas sin techo del Convento de San Buenaventura y la pequeña ermita contigua. Visita el museo de arqueología para asomarte al pasado remoto de la isla, y sube al Mirador de Guise y Ayose por los dos reyes y una amplia vista del valle. Fíjate en el queso majorero local por el camino.',
          ],
        },
      ],
      mapHeading: '¿Dónde está Betancuria?',
      mapIntro:
        'Betancuria está tierra adentro, en el centro-oeste montañoso de Fuerteventura, la más oriental de las Islas Canarias y la más cercana a la costa africana. Queda a un corto y bonito trayecto en coche de la capital de la isla, Puerto del Rosario, y de las zonas turísticas del sur.',
      bonusHeading: 'Tres cosas que casi ningún visitante descubre',
      bonus: [
        {
          lead: 'Una capital que se escondió, y aun así la hallaron.',
          text:
            'Béthencourt metió su capital en lo hondo de un valle de montaña para ocultarla de los asaltantes. Y, sin embargo, en 1593 los corsarios subieron tierra adentro y la saquearon igual, demostrando el costoso fracaso de la estrategia del valle escondido.',
        },
        {
          lead: 'Una catedral que duró siete años.',
          text:
            'En 1424 el papa hizo de la iglesia del pueblo, Santa María, la sede de un obispado que abarcaba casi todas las Islas Canarias. El obispado se suprimió en 1431, así que Betancuria fue villa de catedral apenas siete años.',
        },
        {
          lead: 'El pueblo más pequeño de Canarias.',
          text:
            'Antaño capital de toda una isla, Betancuria es hoy el municipio menos poblado de todo el archipiélago canario, con apenas unos cientos de habitantes, y justo por eso su viejo corazón parece detenido en el tiempo.',
        },
      ],
      langHeading: 'Betancuria en tu idioma, los 32',
      ctaHeading: 'Consigue la llave de Betancuria',
      ctaIntro:
        'Elige tus paradas, echa a andar y deja que la voz te revele lo que todos pasan de largo.',
    },
    de: {
      metaTitle: 'Audiotour Betancuria · Selbstgeführt, Fuerteventura',
      metaDescription:
        'Eine selbstgeführte GPS-Audiotour durch Betancuria, die alte Hauptstadt Fuerteventuras. Erkunden Sie Kirche, Klosterruine und Tal in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline und mit AR-Guide.',
      keywords:
        'audiotour betancuria, selbstgeführte tour betancuria, stadtrundgang fuerteventura, sehenswürdigkeiten fuerteventura, audioguide fuerteventura',
      ogTitle: 'Audiotour Betancuria | Fun Zone Tenerife',
      ogDescription:
        'Erkunden Sie Betancuria, die alte Hauptstadt Fuerteventuras, in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide.',
      heroIntro:
        'Ein selbstgeführter GPS-Audiospaziergang durch die alte Hauptstadt Fuerteventuras. Ein Dorf, versteckt in einem Bergtal, um den Piraten zu entgehen, eine Kirche, die einst Bischofssitz war, und die Ruinen eines der ersten Klöster der Inseln, erzählt in Ihrem Ohr genau dort, wo alles geschah.',
      postcardHeading: 'Betancuria, die Version, die auf keiner Postkarte steht',
      postcardIntro:
        'Nicht die Hochglanzbilder. Die Geschichten, an denen selbst Einheimische ahnungslos vorbeigehen, geflüstert in Ihr Ohr an genau dem Ort, zu dem sie gehören. Hier sind drei. Viele weitere warten in der Tour.',
      secrets: [
        {
          place: 'Iglesia de Santa María',
          teaser:
            'Diese bescheidene Dorfkirche beherbergte einst den Sitz eines Bistums, das fast jede Kanarische Insel verwaltete, eine Rolle, die sie kaum sieben Jahre innehatte, ehe sie verschwand.',
        },
        {
          place: 'Convento de San Buenaventura',
          teaser:
            'Ein kurzer Weg vom Dorf entfernt stehen die zerborstenen Mauern eines der ersten Klöster der Kanaren, nach einer einzigen brutalen Nacht im Jahr 1593 ohne Dach zurückgelassen.',
        },
        {
          place: 'Mirador de Guise y Ayose',
          teaser:
            'Zwei riesige bronzene Könige stehen allein auf einem windigen Kamm vor dem Dorf, die letzten einheimischen Herrscher einer Insel, die eine lange Steinmauer einst in zwei Teile trennte.',
        },
      ],
      storyTitle: 'Die Geschichte von Betancuria',
      storyIntro: [
        'Betancuria ist ein winziges weißes Dorf, tief in einem grünen Tal in den Bergen Fuerteventuras gelegen. Mehr als vier Jahrhunderte lang war es die Hauptstadt der Insel, und doch ist es heute die kleinste Gemeinde der gesamten Kanarischen Inseln. Palmen, eine schöne alte Kirche und stille Gassen machen es zu einem der malerischsten Winkel des Archipels.',
        'Gegründet wurde es 1404 vom normannischen Ritter Jean de Béthencourt, der dem Ort seinen Namen gab. Er wählte dieses geschützte Tal im Landesinneren mit Bedacht, wegen seines Süßwassers und fruchtbaren Bodens, vor allem aber, weil ein verborgener Ort fern der Küste einen gewissen Schutz vor den Piraten bot, die diese Gewässer heimsuchten.',
      ],
      storyBlocks: [
        {
          heading: 'Eine Hauptstadt, die trotz ihrer Deckung eingeholt wurde',
          paragraphs: [
            'Der Plan vom versteckten Tal ging nie ganz auf. Europäische und nordafrikanische Korsaren erreichten Betancuria mehr als einmal, und 1593 traf ein dem Korsaren Xabán Arráez zugeschriebener Überfall die Stadt und legte sie in Trümmer. Die große Kirche Santa María wurde geplündert und später im 17. Jahrhundert wieder aufgebaut, während das Kloster San Buenaventura am Dorfrand als dachlose Hülle zurückblieb, die bis heute steht.',
            'Trotz der Überfälle blieb Betancuria bis 1834 Hauptstadt der Insel, als der Sitz der Macht nach Antigua und später nach Puerto del Rosario wechselte. Das Dorf hörte schlicht auf zu wachsen, weshalb sein alter Kern so unversehrt überdauert hat. Sein historischer Ortskern steht unter Schutz, und Kirche, Klosterruine und das kleine Archäologiemuseum erzählen die ganze Geschichte in kurzem Fußweg.',
          ],
        },
        {
          heading: 'Könige, Käse und eine ältere Insel',
          paragraphs: [
            'Lange vor der Eroberung war Fuerteventura die Heimat der Majos, seines eingeborenen Volkes, und durch eine lange Steinmauer quer über die Insel in zwei Königreiche geteilt. Gleich außerhalb von Betancuria ehren zwei hoch aufragende Bronzestatuen die letzten einheimischen Könige, Guise und Ayose, die die Überlieferung als Herrscher der beiden Hälften erinnert, Guise im Norden und Ayose im Süden.',
            'Das Tal rund um das Dorf ist kahl, vulkanisch und von Ziegen beweidet, und diese Ziegen geben Fuerteventura sein berühmtestes Erzeugnis: den Majorero-Käse, den ersten spanischen Ziegenkäse mit geschützter Ursprungsbezeichnung. Dazu gofio, das geröstete Mehl, das seit der Zeit der Ureinwohner ein kanarisches Grundnahrungsmittel ist, und Sie schmecken die Insel von ihrer traditionellsten Seite.',
          ],
        },
        {
          heading: 'Worauf Sie achten sollten',
          paragraphs: [
            'Beginnen Sie an der Kirche Santa María im Herzen des Dorfes, dann folgen Sie dem Weg zu den dachlosen Ruinen des Convento de San Buenaventura und der kleinen Kapelle daneben. Besuchen Sie das Archäologiemuseum für die ferne Vergangenheit der Insel, und fahren Sie hinauf zum Mirador de Guise y Ayose für die zwei Könige und einen weiten Blick über das Tal. Halten Sie unterwegs Ausschau nach dem lokalen Majorero-Käse.',
          ],
        },
      ],
      mapHeading: 'Wo liegt Betancuria?',
      mapIntro:
        'Betancuria liegt im Binnenland, im bergigen Zentrum-Westen Fuerteventuras, der östlichsten der spanischen Kanarischen Inseln und der dem afrikanischen Festland nächsten. Es ist eine kurze, landschaftlich reizvolle Fahrt von der Inselhauptstadt Puerto del Rosario und von den Ferienorten im Süden entfernt.',
      bonusHeading: 'Drei Dinge, die die meisten Besucher nie erfahren',
      bonus: [
        {
          lead: 'Eine Hauptstadt, die sich versteckte und doch gefunden wurde.',
          text:
            'Béthencourt barg seine Hauptstadt tief in einem Bergtal, um sie vor Räubern zu verstecken. Und doch zogen 1593 Korsaren ins Landesinnere und plünderten sie dennoch, was die kostspielige Vergeblichkeit der Strategie des versteckten Tals bewies.',
        },
        {
          lead: 'Eine Kathedrale, die sieben Jahre währte.',
          text:
            'Im Jahr 1424 machte der Papst die Dorfkirche Santa María zum Sitz eines Bistums, das fast alle Kanarischen Inseln umfasste. Das Bistum wurde 1431 aufgehoben, Betancuria war also kaum sieben Jahre lang eine Kathedralenstadt.',
        },
        {
          lead: 'Die kleinste Stadt der Kanaren.',
          text:
            'Einst Hauptstadt einer ganzen Insel, ist Betancuria heute die bevölkerungsärmste Gemeinde des gesamten Kanaren-Archipels, mit nur wenigen Hundert Einwohnern, und genau deshalb wirkt ihr alter Kern wie in der Zeit stehengeblieben.',
        },
      ],
      langHeading: 'Betancuria in Ihrer Sprache, alle 32',
      ctaHeading: 'Holen Sie sich den Schlüssel zu Betancuria',
      ctaIntro:
        'Wählen Sie Ihre Stationen, gehen Sie los, und lassen Sie die Stimme enthüllen, woran alle anderen vorbeigehen.',
    },
    it: {
      metaTitle: 'Audioguida di Betancuria · Autoguidata, Fuerteventura',
      metaDescription:
        'Un tour audio GPS in autonomia a Betancuria, l’antica capitale di Fuerteventura. Percorri la chiesa, le rovine del convento e la valle al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline e con guida in realtà aumentata.',
      keywords:
        'audioguida betancuria, tour autoguidato betancuria, tour a piedi fuerteventura, cosa vedere a fuerteventura, audioguida fuerteventura',
      ogTitle: 'Audioguida di Betancuria | Fun Zone Tenerife',
      ogDescription:
        'Percorri Betancuria, l’antica capitale di Fuerteventura, al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline, con guida in realtà aumentata.',
      heroIntro:
        'Una passeggiata con audioguida GPS in autonomia nell’antica capitale di Fuerteventura. Un villaggio nascosto in una valle di montagna per sfuggire ai pirati, una chiesa che fu sede vescovile e le rovine di uno dei primi conventi delle isole, raccontati al tuo orecchio proprio dove tutto è accaduto.',
      postcardHeading: 'Betancuria, la versione che le cartoline tralasciano',
      postcardIntro:
        'Non le foto patinate. Le storie davanti a cui passano persino gli abitanti senza saperlo, sussurrate al tuo orecchio nel punto esatto a cui appartengono. Eccone tre. Molte altre ti aspettano nel tour.',
      secrets: [
        {
          place: 'Iglesia de Santa María',
          teaser:
            'Questa modesta chiesa di paese ospitò un tempo la sede di un vescovado che governava quasi ogni isola delle Canarie, un ruolo che conservò appena sette anni prima di svanire.',
        },
        {
          place: 'Convento de San Buenaventura',
          teaser:
            'A pochi passi dal paese sorgono i muri spezzati di uno dei primi conventi delle Canarie, lasciato senza tetto dopo una sola notte brutale nel 1593.',
        },
        {
          place: 'Mirador de Guise y Ayose',
          teaser:
            'Due giganteschi re di bronzo si ergono soli su un crinale battuto dal vento, alle porte del paese, ultimi sovrani aborigeni di un’isola che un lungo muro di pietra divise un tempo in due.',
        },
      ],
      storyTitle: 'La storia di Betancuria',
      storyIntro: [
        'Betancuria è un minuscolo villaggio bianco incastonato in fondo a una valle verde, tra le montagne di Fuerteventura. Per più di quattro secoli fu la capitale dell’isola, eppure oggi è il comune più piccolo di tutte le Isole Canarie. Le palme, una bella chiesa antica e i vicoli tranquilli ne fanno uno degli angoli più pittoreschi dell’arcipelago.',
        'Fu fondata nel 1404 dal cavaliere normanno Jean de Béthencourt, che le diede il nome. Scelse di proposito questa valle riparata dell’entroterra, per la sua acqua dolce e il terreno fertile, ma soprattutto perché un luogo nascosto, lontano dalla costa, offriva una certa protezione dai pirati che infestavano queste acque.',
      ],
      storyBlocks: [
        {
          heading: 'Una capitale raggiunta nonostante le difese',
          paragraphs: [
            'Il piano della valle nascosta non funzionò mai del tutto. Corsari europei e nordafricani raggiunsero Betancuria più di una volta, e nel 1593 un’incursione attribuita al corsaro Xabán Arráez si abbatté sulla cittadina e la ridusse in rovina. La grande chiesa di Santa María fu saccheggiata e poi ricostruita nel Seicento, mentre il convento di San Buenaventura, al margine del paese, rimase un guscio senza tetto che si erge ancora oggi.',
            'Nonostante le incursioni, Betancuria restò capitale dell’isola fino al 1834, quando la sede del potere si spostò ad Antigua e poi a Puerto del Rosario. Il paese smise semplicemente di crescere, ed è per questo che il suo vecchio cuore è sopravvissuto così intatto. Il suo centro storico è tutelato, e la chiesa, le rovine del convento e il piccolo museo archeologico raccontano l’intera storia in una breve passeggiata.',
          ],
        },
        {
          heading: 'Re, formaggio e un’isola più antica',
          paragraphs: [
            'Molto prima della conquista, Fuerteventura era terra dei Majos, il suo popolo aborigeno, ed era divisa in due regni da un lungo muro di pietra che attraversava l’isola. Appena fuori Betancuria, due imponenti statue di bronzo onorano gli ultimi re nativi, Guise e Ayose, ricordati dalla tradizione come signori delle due metà, Guise a nord e Ayose a sud.',
            'La valle attorno al paese è spoglia, vulcanica e brucata dalle capre, e proprio quelle capre danno a Fuerteventura il suo prodotto più celebre: il formaggio Majorero, il primo formaggio caprino spagnolo a ottenere una denominazione di origine protetta. Accompagnalo con il gofio, la farina tostata che è un alimento base canario fin dai tempi degli aborigeni, e assapori l’isola nella sua veste più tradizionale.',
          ],
        },
        {
          heading: 'Cosa cercare',
          paragraphs: [
            'Comincia dalla chiesa di Santa María nel cuore del paese, poi segui la stradina fino alle rovine senza tetto del Convento de San Buenaventura e alla piccola cappella accanto. Visita il museo archeologico per il passato remoto dell’isola, e sali al Mirador de Guise y Ayose per i due re e un’ampia veduta sulla valle. Tieni d’occhio il formaggio Majorero locale lungo il cammino.',
          ],
        },
      ],
      mapHeading: 'Dove si trova Betancuria?',
      mapIntro:
        'Betancuria si trova nell’entroterra, nel centro-ovest montuoso di Fuerteventura, la più orientale delle Isole Canarie spagnole e la più vicina alla costa africana. È a un breve e panoramico tragitto in auto dalla capitale dell’isola, Puerto del Rosario, e dalle località balneari del sud.',
      bonusHeading: 'Tre cose che quasi nessun visitatore scopre',
      bonus: [
        {
          lead: 'Una capitale che si nascose, e fu trovata lo stesso.',
          text:
            'Béthencourt infilò la sua capitale in fondo a una valle di montagna per nasconderla ai predoni. Eppure nel 1593 i corsari risalirono l’entroterra e la saccheggiarono comunque, dimostrando il costoso fallimento della strategia della valle nascosta.',
        },
        {
          lead: 'Una cattedrale che durò sette anni.',
          text:
            'Nel 1424 il papa fece della chiesa del paese, Santa María, la sede di un vescovado che comprendeva quasi tutte le Isole Canarie. Il vescovado fu soppresso nel 1431, così Betancuria fu città di cattedrale appena sette anni.',
        },
        {
          lead: 'Il paese più piccolo delle Canarie.',
          text:
            'Un tempo capitale di un’intera isola, Betancuria è oggi il comune meno popoloso dell’intero arcipelago canario, con solo poche centinaia di abitanti, ed è proprio per questo che il suo vecchio cuore sembra fermo nel tempo.',
        },
      ],
      langHeading: 'Betancuria nella tua lingua, tutte e 32',
      ctaHeading: 'Prendi la chiave di Betancuria',
      ctaIntro:
        'Scegli le tue tappe, mettiti in cammino e lascia che la voce ti riveli ciò che tutti gli altri oltrepassano senza vedere.',
    },
    nl: {
      metaTitle: 'Audiotour Betancuria · Zelfgeleid, Fuerteventura',
      metaDescription:
        'Een zelfgeleide gps-audiotour door Betancuria, de oude hoofdstad van Fuerteventura. Loop langs de kerk, kloosterruïne en vallei op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline en met AR-gids.',
      keywords:
        'audiotour betancuria, zelfgeleide tour betancuria, stadswandeling fuerteventura, bezienswaardigheden fuerteventura, audiogids fuerteventura',
      ogTitle: 'Audiotour Betancuria | Fun Zone Tenerife',
      ogDescription:
        'Loop Betancuria, de oude hoofdstad van Fuerteventura, op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline, met augmented-reality-gids.',
      heroIntro:
        'Een zelfgeleide gps-audiowandeling door de oude hoofdstad van Fuerteventura. Een dorp verscholen in een bergdal om aan de piraten te ontsnappen, een kerk die ooit een bisschopszetel was en de ruïnes van een van de eerste kloosters van de eilanden, verteld in je oor precies waar het gebeurde.',
      postcardHeading: 'Betancuria, de versie die de ansichtkaarten weglaten',
      postcardIntro:
        'Niet de glossy plaatjes. De verhalen waar zelfs bewoners onwetend langslopen, gefluisterd in je oor op de exacte plek waar ze thuishoren. Hier zijn er drie. Veel meer wachten in de tour.',
      secrets: [
        {
          place: 'Iglesia de Santa María',
          teaser:
            'Dit bescheiden dorpskerkje herbergde ooit de zetel van een bisdom dat vrijwel elk Canarisch eiland bestuurde, een rol die het amper zeven jaar behield voordat die verdween.',
        },
        {
          place: 'Convento de San Buenaventura',
          teaser:
            'Op een steenworp van het dorp staan de gebroken muren van een van de eerste kloosters van de Canarische Eilanden, zonder dak achtergelaten na één brute nacht in 1593.',
        },
        {
          place: 'Mirador de Guise y Ayose',
          teaser:
            'Twee reusachtige bronzen koningen staan alleen op een winderige bergrug buiten het dorp, de laatste inheemse heersers van een eiland dat een lange stenen muur ooit in tweeën deelde.',
        },
      ],
      storyTitle: 'Het verhaal van Betancuria',
      storyIntro: [
        'Betancuria is een piepklein wit dorp, diep weggestopt in een groene vallei in de bergen van Fuerteventura. Ruim vier eeuwen lang was het de hoofdstad van het eiland, en toch is het vandaag de kleinste gemeente van alle Canarische Eilanden. Palmbomen, een fraaie oude kerk en stille straatjes maken het tot een van de meest pittoreske hoekjes van de archipel.',
        'Het werd in 1404 gesticht door de Normandische ridder Jean de Béthencourt, die het zijn naam gaf. Hij koos deze beschutte vallei in het binnenland met opzet, om haar zoete water en vruchtbare grond, maar vooral omdat een verborgen plek ver van de kust enige bescherming bood tegen de piraten die deze wateren teisterden.',
      ],
      storyBlocks: [
        {
          heading: 'Een hoofdstad die ondanks haar dekking werd ingehaald',
          paragraphs: [
            'Het plan van de verborgen vallei werkte nooit helemaal. Europese en Noord-Afrikaanse kapers bereikten Betancuria meer dan eens, en in 1593 trof een aan de kaper Xabán Arráez toegeschreven rooftocht het stadje en legde het in puin. De grote kerk van Santa María werd geplunderd en later in de zeventiende eeuw herbouwd, terwijl het klooster van San Buenaventura aan de rand van het dorp als een dakloze schil achterbleef die er nog altijd staat.',
            'Ondanks de rooftochten bleef Betancuria tot 1834 de hoofdstad van het eiland, toen de zetel van de macht naar Antigua en later Puerto del Rosario verhuisde. Het dorp hield simpelweg op met groeien, en daarom is het oude hart zo gaaf bewaard gebleven. Het historische centrum is beschermd, en de kerk, de kloosterruïne en het kleine archeologiemuseum vertellen het hele verhaal op korte loopafstand.',
          ],
        },
        {
          heading: 'Koningen, kaas en een ouder eiland',
          paragraphs: [
            'Lang voor de verovering was Fuerteventura het land van de Majos, zijn inheemse volk, en werd het door een lange stenen muur dwars over het eiland in twee koninkrijken verdeeld. Net buiten Betancuria eren twee torenhoge bronzen standbeelden de laatste inheemse koningen, Guise en Ayose, door de overlevering herinnerd als heersers van de twee helften, Guise in het noorden en Ayose in het zuiden.',
            'De vallei rond het dorp is kaal, vulkanisch en begraasd door geiten, en die geiten geven Fuerteventura zijn beroemdste product: de Majorero-kaas, de eerste Spaanse geitenkaas met een beschermde oorsprongsbenaming. Combineer die met gofio, het geroosterde meel dat sinds de tijd van de oorspronkelijke bewoners een Canarisch basisvoedsel is, en je proeft het eiland op zijn meest traditionele.',
          ],
        },
        {
          heading: 'Waar je op moet letten',
          paragraphs: [
            'Begin bij de kerk van Santa María in het hart van het dorp, volg dan het weggetje naar de dakloze ruïnes van het Convento de San Buenaventura en het kapelletje ernaast. Bezoek het archeologiemuseum voor het verre verleden van het eiland, en rijd omhoog naar de Mirador de Guise y Ayose voor de twee koningen en een weids uitzicht over de vallei. Houd onderweg de lokale Majorero-kaas in de gaten.',
          ],
        },
      ],
      mapHeading: 'Waar ligt Betancuria?',
      mapIntro:
        'Betancuria ligt in het binnenland, in het bergachtige midden-westen van Fuerteventura, het meest oostelijke van de Spaanse Canarische Eilanden en het dichtst bij de Afrikaanse kust. Het ligt op een korte, schilderachtige rit van de eilandhoofdstad Puerto del Rosario en van de badplaatsen in het zuiden.',
      bonusHeading: 'Drie dingen die bijna geen bezoeker ontdekt',
      bonus: [
        {
          lead: 'Een hoofdstad die zich verstopte en toch werd gevonden.',
          text:
            'Béthencourt stopte zijn hoofdstad diep in een bergdal om haar voor rovers te verbergen. Toch trokken in 1593 kapers het binnenland in en plunderden haar alsnog, wat het kostbare falen van de verborgen-valleistrategie bewees.',
        },
        {
          lead: 'Een kathedraal die zeven jaar duurde.',
          text:
            'In 1424 maakte de paus van het dorpskerkje Santa María de zetel van een bisdom dat vrijwel alle Canarische Eilanden omvatte. Het bisdom werd in 1431 opgeheven, dus Betancuria was amper zeven jaar een kathedraalstad.',
        },
        {
          lead: 'Het kleinste stadje van de Canarische Eilanden.',
          text:
            'Ooit hoofdstad van een heel eiland, is Betancuria vandaag de dunstbevolkte gemeente van de hele Canarische archipel, met slechts enkele honderden inwoners, en juist daarom voelt het oude hart als stilgezet in de tijd.',
        },
      ],
      langHeading: 'Betancuria in jouw taal, alle 32',
      ctaHeading: 'Haal de sleutel tot Betancuria',
      ctaIntro:
        'Kies je stops, begin te lopen en laat de stem onthullen wat iedereen straal voorbijloopt.',
    },
  },
  'teguise': {
    en: {
      metaTitle: 'Teguise Audio Tour · Self-Guided Walk in Lanzarote',
      metaDescription:
        'A self-guided GPS audio tour of Teguise, the old capital of Lanzarote. Walk its whitewashed streets, plaza and pirate castle at your own pace with native-voice stories in 32 languages, offline and with an AR guide.',
      keywords:
        'teguise audio tour, self-guided tour teguise, villa de teguise walking tour, things to do lanzarote, audio guide lanzarote',
      ogTitle: 'Teguise Audio Tour | Fun Zone Tenerife',
      ogDescription:
        'Walk Teguise, the old capital of Lanzarote, at your own pace with native-voice stories in 32 languages, offline, with an augmented-reality guide.',
      heroIntro:
        'A self-guided GPS audio walk through the first capital of Lanzarote. A whitewashed inland town named after an aboriginal princess, a pirate castle on a volcano and an alley that remembers a bloody night, told in your ear right where it all happened.',
      postcardHeading: 'Teguise, the version the postcards leave out',
      postcardIntro:
        'Not the glossy shots. The stories even locals walk past without knowing, whispered in your ear on the exact spot they belong to. Here are three. Many more wait inside the tour.',
      secrets: [
        {
          place: 'Castillo de Santa Bárbara',
          teaser:
            'On the rim of an extinct volcano above the town stands a fortress that was once an early-warning tower against corsairs. Today it guards a very fitting treasure: the only museum of piracy in the Canary Islands.',
        },
        {
          place: 'Callejón de la Sangre',
          teaser:
            'One narrow whitewashed lane behind the main church carries a chilling name, the Alley of Blood. Local memory ties it to a night when raiders came over the hills.',
        },
        {
          place: 'Palacio Spínola',
          teaser:
            'Behind an elegant eighteenth-century front on the main square hides the home of the timple, the little five-string instrument at the heart of Canarian music, which this town calls its own.',
        },
      ],
      storyTitle: 'The story of Teguise',
      storyIntro: [
        'Teguise, often called the Villa de Teguise, is the old capital of Lanzarote and one of the oldest towns in the Canary Islands. It sits inland, away from the sea, a cluster of whitewashed houses and quiet squares beneath an extinct volcano. Its historic centre is among the best preserved in the archipelago, and on Sunday mornings its streets fill with one of the largest craft markets in the islands.',
        'The town took shape in the early fifteenth century, after the Norman conquest of Lanzarote. By tradition it is named after Teguise, daughter of the island’s last aboriginal king Guadarfía, who is said to have married Maciot de Béthencourt, nephew of the conqueror. Historians treat the story as legend as much as fact, but the name has stuck for six centuries.',
      ],
      storyBlocks: [
        {
          heading: 'A capital built inland',
          paragraphs: [
            'For hundreds of years Teguise was the seat of Lanzarote’s government and church, deliberately set inland and out of sight of the sea. The reason was simple: the coast was raided again and again by corsairs, and a hidden inland capital was safer than a port. Only in the mid-nineteenth century did the island finally move its capital down to the growing harbour town of Arrecife.',
            'The danger was real. In 1586 a fierce raid, remembered locally as the work of the corsair Morato Arráez, fell on the town, and islanders fled to the fortress on the hill. Local legend ties the grim name of the Callejón de la Sangre, the Alley of Blood, to the raids of this age. On the main square, the mother church of Nuestra Señora de Guadalupe has been damaged and rebuilt across the centuries.',
          ],
        },
        {
          heading: 'The castle on the volcano',
          paragraphs: [
            'Above the town, on the rim of the Guanapay volcano, stands the Castillo de Santa Bárbara. It began as a simple fifteenth-century watchtower and was rebuilt as a fortress in the sixteenth century, a place where townspeople could shelter when the alarm was raised. After the pirate age ended it fell out of use, and for a time around 1899 it even served as a military pigeon loft before passing to the town.',
            'Today the fortress holds the Museo de la Piratería, the only piracy museum in the Canaries, a fitting use for a building raised to watch for raiders. The climb is rewarded with a wide view over the island, the town below and the volcanic cones all around.',
          ],
        },
        {
          heading: 'What to look out for',
          paragraphs: [
            'Wander the whitewashed lanes around the Plaza de la Constitución, with the church of Guadalupe and the old convents of San Francisco and Santo Domingo nearby. Step into the Palacio Spínola to find the Casa-Museo del Timple, dedicated to the small Canarian instrument this town is proud to call its own. Then climb to the Castillo de Santa Bárbara for the view and the pirate museum. Come on a Sunday and the famous market takes over the streets.',
          ],
        },
      ],
      mapHeading: 'Where is Teguise?',
      mapIntro:
        'Teguise lies inland in the north of Lanzarote, the most north-easterly of Spain’s Canary Islands, off the north-west coast of Africa. It is a short drive from the capital Arrecife and from the resort of Costa Teguise on the coast, which shares its name but is a separate, modern place.',
      bonusHeading: 'Three things most visitors never learn',
      bonus: [
        {
          lead: 'The castle became a pigeon loft.',
          text:
            'Once the pirate threat faded, the mighty watchtower on the volcano lost its purpose. Around 1899 it was turned into a military pigeon loft, a strange second life for a fortress, before the town took it over and made it a museum.',
        },
        {
          lead: 'A princess may have named the town.',
          text:
            'By tradition the name Teguise comes from an aboriginal princess, daughter of the island’s last native king, said to have married the conqueror’s nephew. Historians are not sure the marriage ever happened, but the name has outlived every doubt.',
        },
        {
          lead: 'The cradle of the timple.',
          text:
            'The timple, the small five-string instrument that gives Canarian folk music its bright, jangling sound, is traditionally said to have been born in Teguise. The town now guards its story in a museum inside an old noble house.',
        },
      ],
      langHeading: 'Teguise in your language, all 32',
      ctaHeading: 'Get the key to Teguise',
      ctaIntro:
        'Pick your stops, start walking, and let the voice reveal what everyone else walks straight past.',
    },
    fr: {
      metaTitle: 'Visite audio de Teguise · En autonomie, Lanzarote',
      metaDescription:
        'Une visite audio GPS en autonomie de Teguise, l’ancienne capitale de Lanzarote. Parcourez ses ruelles blanchies, sa place et son château de pirates à votre rythme avec des récits en voix native dans 32 langues, hors ligne et avec un guide en réalité augmentée.',
      keywords:
        'visite audio teguise, visite autoguidée teguise, visite à pied villa de teguise, que faire à lanzarote, audioguide lanzarote',
      ogTitle: 'Visite audio de Teguise | Fun Zone Tenerife',
      ogDescription:
        'Parcourez Teguise, l’ancienne capitale de Lanzarote, à votre rythme avec des récits en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée.',
      heroIntro:
        'Une balade audio GPS en autonomie à travers la première capitale de Lanzarote. Une ville blanche de l’intérieur qui doit son nom à une princesse autochtone, un château de pirates sur un volcan et une ruelle qui se souvient d’une nuit sanglante, racontés à votre oreille là où tout s’est passé.',
      postcardHeading: 'Teguise, la version que les cartes postales oublient',
      postcardIntro:
        'Pas les clichés sur papier glacé. Les histoires que même les habitants longent sans les connaître, murmurées à votre oreille à l’endroit exact où elles ont eu lieu. En voici trois. Beaucoup d’autres vous attendent dans la visite.',
      secrets: [
        {
          place: 'Castillo de Santa Bárbara',
          teaser:
            'Sur le rebord d’un volcan éteint, au-dessus de la ville, se dresse une forteresse qui fut jadis une tour de guet contre les corsaires. Elle veille aujourd’hui sur un trésor bien choisi : le seul musée de la piraterie des îles Canaries.',
        },
        {
          place: 'Callejón de la Sangre',
          teaser:
            'Une étroite ruelle blanchie derrière l’église principale porte un nom glaçant : la ruelle du Sang. La mémoire locale la relie à une nuit où les pillards sont descendus des collines.',
        },
        {
          place: 'Palacio Spínola',
          teaser:
            'Derrière une élégante façade du XVIIIe siècle, sur la grande place, se cache la maison du timple, le petit instrument à cinq cordes au cœur de la musique canarienne, que cette ville revendique comme le sien.',
        },
      ],
      storyTitle: 'L’histoire de Teguise',
      storyIntro: [
        'Teguise, souvent appelée la Villa de Teguise, est l’ancienne capitale de Lanzarote et l’une des plus vieilles villes des îles Canaries. Elle se tient à l’intérieur des terres, loin de la mer, un ensemble de maisons blanchies et de places tranquilles au pied d’un volcan éteint. Son centre historique compte parmi les mieux conservés de l’archipel, et le dimanche matin ses rues se remplissent de l’un des plus grands marchés d’artisanat des îles.',
        'La ville prend forme au début du XVe siècle, après la conquête normande de Lanzarote. Selon la tradition, elle doit son nom à Teguise, fille du dernier roi autochtone de l’île, Guadarfía, que l’on dit mariée à Maciot de Béthencourt, neveu du conquérant. Les historiens voient dans cette histoire autant de légende que de fait, mais le nom tient depuis six siècles.',
      ],
      storyBlocks: [
        {
          heading: 'Une capitale bâtie dans les terres',
          paragraphs: [
            'Pendant des siècles, Teguise fut le siège du gouvernement et de l’Église de Lanzarote, volontairement établie à l’intérieur, hors de vue de la mer. La raison était simple : la côte était pillée sans cesse par les corsaires, et une capitale cachée dans les terres valait mieux qu’un port. Ce n’est qu’au milieu du XIXe siècle que l’île déplaça enfin sa capitale vers le port grandissant d’Arrecife.',
            'Le danger était réel. En 1586, un raid féroce, que la mémoire locale attribue au corsaire Morato Arráez, s’abattit sur la ville, et les insulaires se réfugièrent dans la forteresse sur la colline. La légende locale rattache le nom sinistre du Callejón de la Sangre, la ruelle du Sang, aux raids de cette époque. Sur la grande place, l’église mère de Nuestra Señora de Guadalupe a été endommagée et reconstruite au fil des siècles.',
          ],
        },
        {
          heading: 'Le château sur le volcan',
          paragraphs: [
            'Au-dessus de la ville, sur le rebord du volcan Guanapay, se dresse le Castillo de Santa Bárbara. Simple tour de guet au XVe siècle, il fut reconstruit en forteresse au XVIe siècle, un lieu où les habitants pouvaient se réfugier quand l’alerte était donnée. L’ère des pirates passée, il tomba en désuétude, et vers 1899 il servit même un temps de pigeonnier militaire avant de revenir à la ville.',
            'Aujourd’hui, la forteresse abrite le Museo de la Piratería, le seul musée de la piraterie des Canaries, un usage tout trouvé pour un édifice bâti pour guetter les pillards. La montée est récompensée par une large vue sur l’île, la ville en contrebas et les cônes volcaniques alentour.',
          ],
        },
        {
          heading: 'À ne pas manquer',
          paragraphs: [
            'Flânez dans les ruelles blanchies autour de la Plaza de la Constitución, avec l’église de Guadalupe et les anciens couvents de San Francisco et Santo Domingo tout près. Entrez au Palacio Spínola pour y trouver la Casa-Museo del Timple, dédiée au petit instrument canarien dont cette ville s’enorgueillit. Montez ensuite au Castillo de Santa Bárbara pour la vue et le musée des pirates. Venez un dimanche et le célèbre marché envahit les rues.',
          ],
        },
      ],
      mapHeading: 'Où se trouve Teguise ?',
      mapIntro:
        'Teguise se trouve à l’intérieur des terres, dans le nord de Lanzarote, la plus au nord-est des îles Canaries espagnoles, au large du nord-ouest de l’Afrique. Elle est à quelques minutes en voiture de la capitale Arrecife et de la station balnéaire de Costa Teguise sur la côte, qui partage son nom mais en est un lieu distinct et moderne.',
      bonusHeading: 'Trois choses que la plupart des visiteurs ignorent',
      bonus: [
        {
          lead: 'Le château devint un pigeonnier.',
          text:
            'La menace des pirates dissipée, la puissante tour de guet sur le volcan perdit sa raison d’être. Vers 1899, elle fut transformée en pigeonnier militaire, étrange seconde vie pour une forteresse, avant que la ville ne la reprenne pour en faire un musée.',
        },
        {
          lead: 'Une princesse aurait donné son nom à la ville.',
          text:
            'Selon la tradition, le nom de Teguise vient d’une princesse autochtone, fille du dernier roi natif de l’île, que l’on dit mariée au neveu du conquérant. Les historiens doutent que ce mariage ait eu lieu, mais le nom a survécu à tous les doutes.',
        },
        {
          lead: 'Le berceau du timple.',
          text:
            'Le timple, le petit instrument à cinq cordes qui donne à la musique traditionnelle canarienne son timbre clair et pétillant, serait né à Teguise selon la tradition. La ville en garde désormais l’histoire dans un musée installé dans une ancienne demeure noble.',
        },
      ],
      langHeading: 'Teguise dans votre langue, les 32',
      ctaHeading: 'Obtenez la clé de Teguise',
      ctaIntro:
        'Choisissez vos étapes, commencez à marcher, et laissez la voix révéler ce que tout le monde longe sans le voir.',
    },
    es: {
      metaTitle: 'Audioguía de Teguise · Autoguiada, Lanzarote',
      metaDescription:
        'Una audioguía GPS autoguiada de Teguise, la antigua capital de Lanzarote. Recorre sus calles blancas, la plaza y el castillo de piratas a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión y con guía de realidad aumentada.',
      keywords:
        'audioguía teguise, ruta autoguiada teguise, ruta a pie villa de teguise, qué ver en lanzarote, audioguía lanzarote',
      ogTitle: 'Audioguía de Teguise | Fun Zone Tenerife',
      ogDescription:
        'Recorre Teguise, la antigua capital de Lanzarote, a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión, con guía de realidad aumentada.',
      heroIntro:
        'Un paseo con audioguía GPS autoguiada por la primera capital de Lanzarote. Un pueblo blanco del interior que debe su nombre a una princesa aborigen, un castillo de piratas sobre un volcán y un callejón que recuerda una noche de sangre, narrados a tu oído justo donde ocurrió todo.',
      postcardHeading: 'Teguise, la versión que las postales se saltan',
      postcardIntro:
        'No las fotos de revista. Las historias por las que hasta los vecinos pasan sin saberlo, susurradas a tu oído en el punto exacto al que pertenecen. Aquí tienes tres. Muchas más te esperan en el tour.',
      secrets: [
        {
          place: 'Castillo de Santa Bárbara',
          teaser:
            'En el borde de un volcán apagado, sobre el pueblo, se alza una fortaleza que fue torre de vigía contra los corsarios. Hoy custodia un tesoro muy apropiado: el único museo de la piratería de las Islas Canarias.',
        },
        {
          place: 'Callejón de la Sangre',
          teaser:
            'Un callejón estrecho y encalado tras la iglesia principal lleva un nombre que hiela: el callejón de la Sangre. La memoria local lo une a una noche en que los asaltantes bajaron de los montes.',
        },
        {
          place: 'Palacio Spínola',
          teaser:
            'Tras una elegante fachada del siglo XVIII, en la plaza mayor, se esconde la casa del timple, el pequeño instrumento de cinco cuerdas que late en el corazón de la música canaria, que este pueblo reivindica como suyo.',
        },
      ],
      storyTitle: 'La historia de Teguise',
      storyIntro: [
        'Teguise, a menudo llamada la Villa de Teguise, es la antigua capital de Lanzarote y uno de los pueblos más viejos de las Islas Canarias. Se asienta tierra adentro, lejos del mar, un conjunto de casas blancas y plazas tranquilas al pie de un volcán apagado. Su centro histórico está entre los mejor conservados del archipiélago, y los domingos por la mañana sus calles se llenan con uno de los mayores mercados de artesanía de las islas.',
        'El pueblo toma forma a comienzos del siglo XV, tras la conquista normanda de Lanzarote. Según la tradición, debe su nombre a Teguise, hija del último rey aborigen de la isla, Guadarfía, de quien se dice que se casó con Maciot de Béthencourt, sobrino del conquistador. Los historiadores ven en el relato tanto leyenda como hecho, pero el nombre perdura desde hace seis siglos.',
      ],
      storyBlocks: [
        {
          heading: 'Una capital levantada tierra adentro',
          paragraphs: [
            'Durante siglos Teguise fue la sede del gobierno y de la Iglesia de Lanzarote, situada a propósito tierra adentro y oculta del mar. La razón era sencilla: la costa sufría asaltos una y otra vez de los corsarios, y una capital escondida en el interior era más segura que un puerto. Solo a mediados del siglo XIX la isla trasladó por fin su capital al creciente puerto de Arrecife.',
            'El peligro era real. En 1586 un feroz asalto, que la memoria local atribuye al corsario Morato Arráez, cayó sobre el pueblo, y los isleños huyeron a la fortaleza del cerro. La leyenda local liga el nombre sombrío del Callejón de la Sangre a los asaltos de aquella época. En la plaza mayor, la iglesia matriz de Nuestra Señora de Guadalupe fue dañada y reconstruida a lo largo de los siglos.',
          ],
        },
        {
          heading: 'El castillo sobre el volcán',
          paragraphs: [
            'Sobre el pueblo, en el borde del volcán de Guanapay, se alza el Castillo de Santa Bárbara. Nació como una sencilla torre de vigía en el siglo XV y fue reconstruido como fortaleza en el XVI, un lugar donde los vecinos podían refugiarse cuando sonaba la alarma. Acabada la era de los piratas cayó en desuso, y hacia 1899 llegó a servir de palomar militar antes de pasar al pueblo.',
            'Hoy la fortaleza alberga el Museo de la Piratería, el único museo de la piratería de Canarias, un uso perfecto para un edificio levantado para vigilar a los asaltantes. La subida se premia con una amplia vista de la isla, el pueblo a los pies y los conos volcánicos alrededor.',
          ],
        },
        {
          heading: 'En qué fijarte',
          paragraphs: [
            'Piérdete por las calles blancas en torno a la Plaza de la Constitución, con la iglesia de Guadalupe y los antiguos conventos de San Francisco y Santo Domingo muy cerca. Entra en el Palacio Spínola para ver la Casa-Museo del Timple, dedicada al pequeño instrumento canario que este pueblo se enorgullece de llamar suyo. Luego sube al Castillo de Santa Bárbara por las vistas y el museo de piratas. Ven un domingo y el famoso mercadillo toma las calles.',
          ],
        },
      ],
      mapHeading: '¿Dónde está Teguise?',
      mapIntro:
        'Teguise se encuentra tierra adentro, en el norte de Lanzarote, la más nororiental de las Islas Canarias, frente a la costa noroeste de África. Está a pocos minutos en coche de la capital, Arrecife, y de la zona turística de Costa Teguise en la costa, que comparte su nombre pero es un lugar distinto y moderno.',
      bonusHeading: 'Tres cosas que casi ningún visitante descubre',
      bonus: [
        {
          lead: 'El castillo se volvió palomar.',
          text:
            'Desvanecida la amenaza pirata, la poderosa torre de vigía sobre el volcán perdió su sentido. Hacia 1899 se convirtió en palomar militar, extraña segunda vida para una fortaleza, antes de que el pueblo la recuperara y la hiciera museo.',
        },
        {
          lead: 'Quizá una princesa dio nombre al pueblo.',
          text:
            'Según la tradición, el nombre de Teguise viene de una princesa aborigen, hija del último rey nativo de la isla, de quien se dice que se casó con el sobrino del conquistador. Los historiadores dudan de que esa boda ocurriera, pero el nombre ha sobrevivido a toda duda.',
        },
        {
          lead: 'La cuna del timple.',
          text:
            'El timple, el pequeño instrumento de cinco cuerdas que da a la música popular canaria su sonido claro y tintineante, según la tradición nació en Teguise. El pueblo guarda ahora su historia en un museo dentro de una vieja casa noble.',
        },
      ],
      langHeading: 'Teguise en tu idioma, los 32',
      ctaHeading: 'Consigue la llave de Teguise',
      ctaIntro:
        'Elige tus paradas, echa a andar y deja que la voz te revele lo que todos pasan de largo.',
    },
    de: {
      metaTitle: 'Audiotour Teguise · Selbstgeführt, Lanzarote',
      metaDescription:
        'Eine selbstgeführte GPS-Audiotour durch Teguise, die alte Hauptstadt Lanzarotes. Erkunden Sie die weißen Gassen, den Platz und die Piratenburg in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline und mit AR-Guide.',
      keywords:
        'audiotour teguise, selbstgeführte tour teguise, stadtrundgang villa de teguise, sehenswürdigkeiten lanzarote, audioguide lanzarote',
      ogTitle: 'Audiotour Teguise | Fun Zone Tenerife',
      ogDescription:
        'Erkunden Sie Teguise, die alte Hauptstadt Lanzarotes, in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide.',
      heroIntro:
        'Ein selbstgeführter GPS-Audiospaziergang durch die erste Hauptstadt Lanzarotes. Eine weiße Stadt im Binnenland, benannt nach einer eingeborenen Prinzessin, eine Piratenburg auf einem Vulkan und eine Gasse, die sich an eine blutige Nacht erinnert, erzählt in Ihrem Ohr genau dort, wo alles geschah.',
      postcardHeading: 'Teguise, die Version, die auf keiner Postkarte steht',
      postcardIntro:
        'Nicht die Hochglanzbilder. Die Geschichten, an denen selbst Einheimische ahnungslos vorbeigehen, geflüstert in Ihr Ohr an genau dem Ort, zu dem sie gehören. Hier sind drei. Viele weitere warten in der Tour.',
      secrets: [
        {
          place: 'Castillo de Santa Bárbara',
          teaser:
            'Auf dem Rand eines erloschenen Vulkans über der Stadt steht eine Festung, die einst ein Frühwarnturm gegen Korsaren war. Heute hütet sie einen sehr passenden Schatz: das einzige Piraterie-Museum der Kanarischen Inseln.',
        },
        {
          place: 'Callejón de la Sangre',
          teaser:
            'Eine schmale, weiß getünchte Gasse hinter der Hauptkirche trägt einen eisigen Namen: die Gasse des Blutes. Die örtliche Erinnerung verbindet sie mit einer Nacht, in der die Räuber über die Hügel kamen.',
        },
        {
          place: 'Palacio Spínola',
          teaser:
            'Hinter einer eleganten Fassade des 18. Jahrhunderts am Hauptplatz verbirgt sich das Haus des Timple, des kleinen fünfsaitigen Instruments im Herzen der kanarischen Musik, das diese Stadt ihr Eigen nennt.',
        },
      ],
      storyTitle: 'Die Geschichte von Teguise',
      storyIntro: [
        'Teguise, oft Villa de Teguise genannt, ist die alte Hauptstadt Lanzarotes und eine der ältesten Städte der Kanarischen Inseln. Sie liegt im Binnenland, fern vom Meer, ein Geflecht weißer Häuser und stiller Plätze am Fuß eines erloschenen Vulkans. Ihr historischer Kern zählt zu den besterhaltenen des Archipels, und an Sonntagvormittagen füllen sich ihre Gassen mit einem der größten Kunsthandwerksmärkte der Inseln.',
        'Die Stadt entstand im frühen 15. Jahrhundert, nach der normannischen Eroberung Lanzarotes. Der Überlieferung nach ist sie nach Teguise benannt, der Tochter des letzten eingeborenen Königs der Insel, Guadarfía, die Maciot de Béthencourt, den Neffen des Eroberers, geheiratet haben soll. Historiker sehen darin ebenso Legende wie Tatsache, doch der Name hält seit sechs Jahrhunderten.',
      ],
      storyBlocks: [
        {
          heading: 'Eine Hauptstadt im Binnenland',
          paragraphs: [
            'Jahrhundertelang war Teguise der Sitz von Regierung und Kirche Lanzarotes, bewusst im Binnenland und außer Sichtweite des Meeres angelegt. Der Grund war einfach: die Küste wurde immer wieder von Korsaren überfallen, und eine versteckte Hauptstadt im Landesinneren war sicherer als ein Hafen. Erst Mitte des 19. Jahrhunderts verlegte die Insel ihre Hauptstadt schließlich in die wachsende Hafenstadt Arrecife.',
            'Die Gefahr war real. 1586 traf ein heftiger Überfall, den die örtliche Erinnerung dem Korsaren Morato Arráez zuschreibt, die Stadt, und die Insulaner flohen in die Festung auf dem Hügel. Die örtliche Legende verbindet den düsteren Namen des Callejón de la Sangre, der Gasse des Blutes, mit den Überfällen jener Zeit. Am Hauptplatz wurde die Mutterkirche Nuestra Señora de Guadalupe über die Jahrhunderte beschädigt und wieder aufgebaut.',
          ],
        },
        {
          heading: 'Die Burg auf dem Vulkan',
          paragraphs: [
            'Über der Stadt, auf dem Rand des Vulkans Guanapay, steht das Castillo de Santa Bárbara. Es begann als schlichter Wachturm im 15. Jahrhundert und wurde im 16. Jahrhundert zur Festung ausgebaut, ein Ort, an dem die Bewohner Zuflucht fanden, wenn Alarm geschlagen wurde. Nach dem Ende der Piratenzeit verfiel es, und um 1899 diente es sogar eine Zeit lang als militärischer Taubenschlag, ehe es an die Stadt überging.',
            'Heute beherbergt die Festung das Museo de la Piratería, das einzige Piraterie-Museum der Kanaren, eine passende Nutzung für einen Bau, der errichtet wurde, um nach Räubern Ausschau zu halten. Der Aufstieg wird mit einem weiten Blick über die Insel belohnt, die Stadt zu Füßen und ringsum die Vulkankegel.',
          ],
        },
        {
          heading: 'Worauf Sie achten sollten',
          paragraphs: [
            'Schlendern Sie durch die weißen Gassen rund um die Plaza de la Constitución, mit der Kirche von Guadalupe und den alten Klöstern San Francisco und Santo Domingo in der Nähe. Treten Sie in den Palacio Spínola, wo das Casa-Museo del Timple dem kleinen kanarischen Instrument gewidmet ist, das diese Stadt stolz ihr Eigen nennt. Steigen Sie dann zum Castillo de Santa Bárbara hinauf für die Aussicht und das Piratenmuseum. Kommen Sie an einem Sonntag, und der berühmte Markt erobert die Straßen.',
          ],
        },
      ],
      mapHeading: 'Wo liegt Teguise?',
      mapIntro:
        'Teguise liegt im Binnenland im Norden Lanzarotes, der nordöstlichsten der spanischen Kanarischen Inseln, vor der Nordwestküste Afrikas. Es ist nur eine kurze Fahrt von der Hauptstadt Arrecife und vom Küstenort Costa Teguise entfernt, der seinen Namen teilt, aber ein eigener, moderner Ort ist.',
      bonusHeading: 'Drei Dinge, die die meisten Besucher nie erfahren',
      bonus: [
        {
          lead: 'Die Burg wurde zum Taubenschlag.',
          text:
            'Als die Piratengefahr schwand, verlor der mächtige Wachturm auf dem Vulkan seinen Zweck. Um 1899 wurde er zum militärischen Taubenschlag, ein seltsames zweites Leben für eine Festung, ehe die Stadt ihn übernahm und zum Museum machte.',
        },
        {
          lead: 'Vielleicht gab eine Prinzessin der Stadt den Namen.',
          text:
            'Der Überlieferung nach stammt der Name Teguise von einer eingeborenen Prinzessin, Tochter des letzten einheimischen Königs der Insel, die den Neffen des Eroberers geheiratet haben soll. Historiker bezweifeln, dass diese Heirat je stattfand, doch der Name hat jeden Zweifel überlebt.',
        },
        {
          lead: 'Die Wiege des Timple.',
          text:
            'Der Timple, das kleine fünfsaitige Instrument, das der kanarischen Volksmusik ihren hellen, klimpernden Klang gibt, soll der Überlieferung nach in Teguise entstanden sein. Die Stadt bewahrt seine Geschichte heute in einem Museum in einem alten Herrenhaus.',
        },
      ],
      langHeading: 'Teguise in Ihrer Sprache, alle 32',
      ctaHeading: 'Holen Sie sich den Schlüssel zu Teguise',
      ctaIntro:
        'Wählen Sie Ihre Stationen, gehen Sie los, und lassen Sie die Stimme enthüllen, woran alle anderen vorbeigehen.',
    },
    it: {
      metaTitle: 'Audioguida di Teguise · Autoguidata, Lanzarote',
      metaDescription:
        'Un tour audio GPS in autonomia a Teguise, l’antica capitale di Lanzarote. Percorri le vie bianche, la piazza e il castello dei pirati al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline e con guida in realtà aumentata.',
      keywords:
        'audioguida teguise, tour autoguidato teguise, tour a piedi villa de teguise, cosa vedere a lanzarote, audioguida lanzarote',
      ogTitle: 'Audioguida di Teguise | Fun Zone Tenerife',
      ogDescription:
        'Percorri Teguise, l’antica capitale di Lanzarote, al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline, con guida in realtà aumentata.',
      heroIntro:
        'Una passeggiata con audioguida GPS in autonomia nella prima capitale di Lanzarote. Un paese bianco dell’entroterra che deve il nome a una principessa aborigena, un castello dei pirati su un vulcano e un vicolo che ricorda una notte di sangue, raccontati al tuo orecchio proprio dove tutto è accaduto.',
      postcardHeading: 'Teguise, la versione che le cartoline tralasciano',
      postcardIntro:
        'Non le foto patinate. Le storie davanti a cui passano persino gli abitanti senza saperlo, sussurrate al tuo orecchio nel punto esatto a cui appartengono. Eccone tre. Molte altre ti aspettano nel tour.',
      secrets: [
        {
          place: 'Castillo de Santa Bárbara',
          teaser:
            'Sull’orlo di un vulcano spento, sopra il paese, sorge una fortezza che un tempo fu torre di avvistamento contro i corsari. Oggi custodisce un tesoro quanto mai adatto: l’unico museo della pirateria delle Isole Canarie.',
        },
        {
          place: 'Callejón de la Sangre',
          teaser:
            'Uno stretto vicolo imbiancato dietro la chiesa principale porta un nome agghiacciante: il vicolo del Sangue. La memoria locale lo lega a una notte in cui i predoni scesero dalle colline.',
        },
        {
          place: 'Palacio Spínola',
          teaser:
            'Dietro un’elegante facciata del Settecento, sulla piazza principale, si cela la casa del timple, il piccolo strumento a cinque corde nel cuore della musica canaria, che questo paese rivendica come proprio.',
        },
      ],
      storyTitle: 'La storia di Teguise',
      storyIntro: [
        'Teguise, spesso chiamata Villa de Teguise, è l’antica capitale di Lanzarote e uno dei paesi più antichi delle Isole Canarie. Sorge nell’entroterra, lontano dal mare, un insieme di case bianche e piazze tranquille ai piedi di un vulcano spento. Il suo centro storico è tra i meglio conservati dell’arcipelago, e la domenica mattina le sue vie si riempiono di uno dei più grandi mercati di artigianato delle isole.',
        'Il paese prende forma all’inizio del Quattrocento, dopo la conquista normanna di Lanzarote. Secondo la tradizione deve il nome a Teguise, figlia dell’ultimo re aborigeno dell’isola, Guadarfía, che si dice abbia sposato Maciot de Béthencourt, nipote del conquistatore. Gli storici vi vedono tanto leggenda quanto fatto, ma il nome resiste da sei secoli.',
      ],
      storyBlocks: [
        {
          heading: 'Una capitale costruita nell’entroterra',
          paragraphs: [
            'Per secoli Teguise fu sede del governo e della Chiesa di Lanzarote, posta di proposito nell’entroterra e al riparo dalla vista del mare. Il motivo era semplice: la costa veniva saccheggiata di continuo dai corsari, e una capitale nascosta all’interno era più sicura di un porto. Solo a metà Ottocento l’isola trasferì infine la capitale nel crescente porto di Arrecife.',
            'Il pericolo era reale. Nel 1586 una feroce incursione, che la memoria locale attribuisce al corsaro Morato Arráez, si abbatté sul paese, e gli isolani fuggirono nella fortezza sul colle. La leggenda locale lega il cupo nome del Callejón de la Sangre, il vicolo del Sangue, alle incursioni di quell’epoca. Sulla piazza principale, la chiesa madre di Nuestra Señora de Guadalupe fu danneggiata e ricostruita nel corso dei secoli.',
          ],
        },
        {
          heading: 'Il castello sul vulcano',
          paragraphs: [
            'Sopra il paese, sull’orlo del vulcano Guanapay, sorge il Castillo de Santa Bárbara. Nacque come semplice torre di avvistamento nel Quattrocento e fu ricostruito come fortezza nel Cinquecento, un luogo dove gli abitanti potevano rifugiarsi quando scattava l’allarme. Finita l’era dei pirati cadde in disuso, e verso il 1899 servì persino per un po’ da colombaia militare prima di passare al paese.',
            'Oggi la fortezza ospita il Museo de la Piratería, l’unico museo della pirateria delle Canarie, un uso perfetto per un edificio innalzato per vigilare sui predoni. La salita è ripagata da un’ampia veduta sull’isola, il paese ai piedi e i coni vulcanici tutt’intorno.',
          ],
        },
        {
          heading: 'Cosa cercare',
          paragraphs: [
            'Perditi tra le vie bianche attorno alla Plaza de la Constitución, con la chiesa di Guadalupe e gli antichi conventi di San Francisco e Santo Domingo lì vicino. Entra nel Palacio Spínola per trovare la Casa-Museo del Timple, dedicata al piccolo strumento canario che questo paese è orgoglioso di chiamare suo. Poi sali al Castillo de Santa Bárbara per il panorama e il museo dei pirati. Vieni di domenica e il celebre mercato invade le strade.',
          ],
        },
      ],
      mapHeading: 'Dove si trova Teguise?',
      mapIntro:
        'Teguise si trova nell’entroterra, nel nord di Lanzarote, la più nord-orientale delle Isole Canarie spagnole, al largo della costa nord-occidentale dell’Africa. È a pochi minuti d’auto dalla capitale Arrecife e dalla località balneare di Costa Teguise sulla costa, che ne condivide il nome ma è un luogo distinto e moderno.',
      bonusHeading: 'Tre cose che quasi nessun visitatore scopre',
      bonus: [
        {
          lead: 'Il castello divenne una colombaia.',
          text:
            'Svanita la minaccia dei pirati, la possente torre di avvistamento sul vulcano perse il suo scopo. Verso il 1899 fu trasformata in colombaia militare, strana seconda vita per una fortezza, prima che il paese la riprendesse e ne facesse un museo.',
        },
        {
          lead: 'Forse una principessa diede il nome al paese.',
          text:
            'Secondo la tradizione il nome Teguise viene da una principessa aborigena, figlia dell’ultimo re nativo dell’isola, che si dice abbia sposato il nipote del conquistatore. Gli storici dubitano che quel matrimonio sia mai avvenuto, ma il nome è sopravvissuto a ogni dubbio.',
        },
        {
          lead: 'La culla del timple.',
          text:
            'Il timple, il piccolo strumento a cinque corde che dà alla musica popolare canaria il suo suono chiaro e tintinnante, secondo la tradizione nacque a Teguise. Il paese ne custodisce ora la storia in un museo dentro un’antica casa nobiliare.',
        },
      ],
      langHeading: 'Teguise nella tua lingua, tutte e 32',
      ctaHeading: 'Prendi la chiave di Teguise',
      ctaIntro:
        'Scegli le tue tappe, mettiti in cammino e lascia che la voce ti riveli ciò che tutti gli altri oltrepassano senza vedere.',
    },
    nl: {
      metaTitle: 'Audiotour Teguise · Zelfgeleid, Lanzarote',
      metaDescription:
        'Een zelfgeleide gps-audiotour door Teguise, de oude hoofdstad van Lanzarote. Loop door de witte straten, het plein en het piratenkasteel op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline en met AR-gids.',
      keywords:
        'audiotour teguise, zelfgeleide tour teguise, stadswandeling villa de teguise, bezienswaardigheden lanzarote, audiogids lanzarote',
      ogTitle: 'Audiotour Teguise | Fun Zone Tenerife',
      ogDescription:
        'Loop Teguise, de oude hoofdstad van Lanzarote, op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline, met augmented-reality-gids.',
      heroIntro:
        'Een zelfgeleide gps-audiowandeling door de eerste hoofdstad van Lanzarote. Een wit binnenlandstadje vernoemd naar een inheemse prinses, een piratenkasteel op een vulkaan en een steegje dat een bloedige nacht herinnert, verteld in je oor precies waar het gebeurde.',
      postcardHeading: 'Teguise, de versie die de ansichtkaarten weglaten',
      postcardIntro:
        'Niet de glossy plaatjes. De verhalen waar zelfs bewoners onwetend langslopen, gefluisterd in je oor op de exacte plek waar ze thuishoren. Hier zijn er drie. Veel meer wachten in de tour.',
      secrets: [
        {
          place: 'Castillo de Santa Bárbara',
          teaser:
            'Op de rand van een uitgedoofde vulkaan boven het stadje staat een fort dat ooit een vroegwaarschuwingstoren tegen kapers was. Vandaag bewaakt het een heel toepasselijke schat: het enige piraterijmuseum van de Canarische Eilanden.',
        },
        {
          place: 'Callejón de la Sangre',
          teaser:
            'Een smal, witgekalkt steegje achter de hoofdkerk draagt een ijzingwekkende naam: het steegje van het Bloed. De plaatselijke herinnering verbindt het met een nacht waarin de rovers over de heuvels kwamen.',
        },
        {
          place: 'Palacio Spínola',
          teaser:
            'Achter een elegante achttiende-eeuwse gevel aan het hoofdplein schuilt het huis van de timple, het kleine vijfsnarige instrument in het hart van de Canarische muziek, dat dit stadje het zijne noemt.',
        },
      ],
      storyTitle: 'Het verhaal van Teguise',
      storyIntro: [
        'Teguise, vaak de Villa de Teguise genoemd, is de oude hoofdstad van Lanzarote en een van de oudste stadjes van de Canarische Eilanden. Het ligt in het binnenland, weg van de zee, een cluster witte huizen en stille pleinen aan de voet van een uitgedoofde vulkaan. Het historische centrum behoort tot de best bewaarde van de archipel, en op zondagochtend vullen de straten zich met een van de grootste ambachtsmarkten van de eilanden.',
        'Het stadje kreeg vorm in het begin van de vijftiende eeuw, na de Normandische verovering van Lanzarote. Volgens de overlevering is het vernoemd naar Teguise, dochter van de laatste inheemse koning van het eiland, Guadarfía, die naar verluidt trouwde met Maciot de Béthencourt, neef van de veroveraar. Historici zien er evenveel legende als feit in, maar de naam houdt al zes eeuwen stand.',
      ],
      storyBlocks: [
        {
          heading: 'Een hoofdstad in het binnenland',
          paragraphs: [
            'Eeuwenlang was Teguise de zetel van het bestuur en de kerk van Lanzarote, bewust in het binnenland en uit het zicht van de zee gelegd. De reden was simpel: de kust werd keer op keer door kapers geplunderd, en een verborgen hoofdstad in het binnenland was veiliger dan een haven. Pas halverwege de negentiende eeuw verplaatste het eiland zijn hoofdstad eindelijk naar de groeiende havenstad Arrecife.',
            'Het gevaar was echt. In 1586 trof een felle rooftocht, die de plaatselijke herinnering toeschrijft aan de kaper Morato Arráez, het stadje, en de eilanders vluchtten naar het fort op de heuvel. De plaatselijke legende verbindt de grimmige naam van de Callejón de la Sangre, het steegje van het Bloed, met de rooftochten van die tijd. Aan het hoofdplein werd de moederkerk Nuestra Señora de Guadalupe door de eeuwen heen beschadigd en herbouwd.',
          ],
        },
        {
          heading: 'Het kasteel op de vulkaan',
          paragraphs: [
            'Boven het stadje, op de rand van de Guanapay-vulkaan, staat het Castillo de Santa Bárbara. Het begon als een eenvoudige vijftiende-eeuwse wachttoren en werd in de zestiende eeuw tot fort herbouwd, een plek waar de bewoners konden schuilen als er alarm werd geslagen. Na het einde van het piratentijdperk raakte het in onbruik, en rond 1899 diende het zelfs een tijd als militaire duiventil voordat het aan het stadje overging.',
            'Vandaag herbergt het fort het Museo de la Piratería, het enige piraterijmuseum van de Canarische Eilanden, een passende bestemming voor een gebouw dat werd opgetrokken om rovers in de gaten te houden. De klim wordt beloond met een weids uitzicht over het eiland, het stadje aan je voeten en de vulkaankegels rondom.',
          ],
        },
        {
          heading: 'Waar je op moet letten',
          paragraphs: [
            'Dwaal door de witte straatjes rond de Plaza de la Constitución, met de kerk van Guadalupe en de oude kloosters San Francisco en Santo Domingo vlakbij. Stap het Palacio Spínola binnen voor de Casa-Museo del Timple, gewijd aan het kleine Canarische instrument dat dit stadje met trots het zijne noemt. Klim daarna naar het Castillo de Santa Bárbara voor het uitzicht en het piratenmuseum. Kom op een zondag en de beroemde markt neemt de straten over.',
          ],
        },
      ],
      mapHeading: 'Waar ligt Teguise?',
      mapIntro:
        'Teguise ligt in het binnenland in het noorden van Lanzarote, het meest noordoostelijke van de Spaanse Canarische Eilanden, voor de noordwestkust van Afrika. Het ligt op korte rijafstand van de hoofdstad Arrecife en van de badplaats Costa Teguise aan de kust, die de naam deelt maar een aparte, moderne plek is.',
      bonusHeading: 'Drie dingen die bijna geen bezoeker ontdekt',
      bonus: [
        {
          lead: 'Het kasteel werd een duiventil.',
          text:
            'Toen de piratendreiging wegebde, verloor de machtige wachttoren op de vulkaan zijn doel. Rond 1899 werd hij tot militaire duiventil gemaakt, een vreemd tweede leven voor een fort, voordat het stadje het overnam en er een museum van maakte.',
        },
        {
          lead: 'Misschien gaf een prinses het stadje zijn naam.',
          text:
            'Volgens de overlevering komt de naam Teguise van een inheemse prinses, dochter van de laatste inheemse koning van het eiland, die naar verluidt trouwde met de neef van de veroveraar. Historici betwijfelen of dat huwelijk ooit plaatsvond, maar de naam heeft elke twijfel overleefd.',
        },
        {
          lead: 'De bakermat van de timple.',
          text:
            'De timple, het kleine vijfsnarige instrument dat de Canarische volksmuziek haar heldere, rinkelende klank geeft, is volgens de overlevering in Teguise ontstaan. Het stadje bewaart het verhaal nu in een museum in een oud herenhuis.',
        },
      ],
      langHeading: 'Teguise in jouw taal, alle 32',
      ctaHeading: 'Haal de sleutel tot Teguise',
      ctaIntro:
        'Kies je stops, begin te lopen en laat de stem onthullen wat iedereen straal voorbijloopt.',
    },
  },
  'arrecife': {
    en: {
      metaTitle: 'Arrecife Audio Tour · Self-Guided Walk in Lanzarote',
      metaDescription:
        'A self-guided GPS audio tour of Arrecife, capital of Lanzarote. Walk the seafront, castles and lagoon at your own pace with native-voice stories in 32 languages, offline and with an AR guide.',
      keywords:
        'arrecife audio tour, self-guided tour arrecife, lanzarote walking tour, things to do arrecife lanzarote, audio guide lanzarote',
      ogTitle: 'Arrecife Audio Tour | Fun Zone Tenerife',
      ogDescription:
        'Walk Arrecife, the capital of Lanzarote, at your own pace with native-voice stories in 32 languages, offline, with an augmented-reality guide.',
      heroIntro:
        'A self-guided GPS audio walk through the capital of Lanzarote. A town named after its reefs, two sea forts, a tidal lagoon full of fishing boats and the birthplace of the artist who shaped the whole island, told in your ear right where it all happened.',
      postcardHeading: 'Arrecife, the version the postcards leave out',
      postcardIntro:
        'Not the glossy shots. The stories even locals walk past without knowing, whispered in your ear on the exact spot they belong to. Here are three. Many more wait inside the tour.',
      secrets: [
        {
          place: 'Castillo de San Gabriel',
          teaser:
            'A small fort guards the harbour from its own islet, reached by a little drawbridge. Look down as you cross and you will spot the two stone balls that gave the bridge its odd nickname.',
        },
        {
          place: 'Castillo de San José',
          teaser:
            'This handsome fortress was raised during a famine to give starving islanders work, which is why locals called it something far darker than its saint’s name. Two centuries on, its purpose was turned completely upside down.',
        },
        {
          place: 'Charco de San Ginés',
          teaser:
            'Twice a day this little lagoon in the heart of town quietly fills and empties with the tide, and the painted fishing boats resting on its water are where the whole city began.',
        },
      ],
      storyTitle: 'The story of Arrecife',
      storyIntro: [
        'Arrecife is the capital and main port of Lanzarote, a low, sun-bleached town strung along the island’s east coast. Its name comes from the Spanish word for reef: a line of black volcanic reefs runs just offshore, and behind them boats could shelter and hide. The old town is flat and compact, easy to walk, and wrapped around a saltwater lagoon rather than a grand square.',
        'For centuries Arrecife was only a small fishing and trading port, while the island’s capital sat safely inland at Teguise, out of reach of the corsairs who raided the coast. Only in 1852, with the age of piracy long over, did Arrecife finally take the capital’s crown and begin to grow into the town you walk today.',
      ],
      storyBlocks: [
        {
          heading: 'Two castles against the sea',
          paragraphs: [
            'The older of the two forts, the Castillo de San Gabriel, sits on a small islet at the harbour mouth and was built in the sixteenth century to fend off pirates. It is reached by a slender causeway and drawbridge, the Puente de las Bolas, named for the pair of stone spheres on its pillars and often called the only bridge of its kind in the Canaries. Today the fort holds the town’s history museum.',
            'The grander Castillo de San José was built in the 1770s on the orders of King Carlos III. Because it was raised during a hard famine to give hungry islanders paid work, locals nicknamed it the Fortress of Hunger. In the 1970s the artist César Manrique restored it and turned it into a museum of contemporary art, the MIAC, so a symbol of hunger became a temple of modern art.',
          ],
        },
        {
          heading: 'A lagoon, a church and an artist',
          paragraphs: [
            'At the heart of town lies the Charco de San Ginés, a tidal saltwater lagoon that fills and empties with the sea twice a day, ringed by small fishing boats and low white houses. This was the site of the first fishermen’s huts, the seed from which the city grew. A short walk away stands the Iglesia de San Ginés, the town’s mother church, dedicated to its patron.',
            'Arrecife’s most famous son is César Manrique, born here in 1919, the painter and architect whose vision gave Lanzarote its low white houses, its ban on roadside billboards and its fusion of art with the volcanic landscape. Walk the town with his name in mind and you start to see his hand everywhere, from the castle museum to the look of the streets themselves.',
          ],
        },
        {
          heading: 'What to look out for',
          paragraphs: [
            'Start at the Charco de San Ginés and follow the water to the seafront, then cross the Puente de las Bolas to the Castillo de San Gabriel for the view back over the town. Walk the palm-lined avenue for the Gran Hotel, the island’s tallest building, and the calm town beach of Playa del Reducto. The Castillo de San José and its art museum sit a little further along the shore to the north.',
          ],
        },
      ],
      mapHeading: 'Where is Arrecife?',
      mapIntro:
        'Arrecife lies on the east coast of Lanzarote, the most north-easterly of Spain’s Canary Islands, off the north-west coast of Africa. It is the island’s capital, main port and the gateway for most visitors, with the airport just to the south-west.',
      bonusHeading: 'Three things most visitors never learn',
      bonus: [
        {
          lead: 'The hunger that built a fortress.',
          text:
            'The Castillo de San José was raised during an eighteenth-century famine specifically to give starving islanders paid work, which is why it was nicknamed the Fortress of Hunger. Two hundred years later César Manrique filled it with modern art.',
        },
        {
          lead: 'Einstein’s Canarian host came from here.',
          text:
            'The physicist Blas Cabrera, Spain’s leading expert on magnetism, was born in Arrecife in 1878 and personally hosted Albert Einstein during his 1923 visit to Spain. A world-class scientist from this small port town.',
        },
        {
          lead: 'The capital hid inland for centuries.',
          text:
            'Pirate raids were so fierce that Lanzarote kept its capital safely inland at Teguise for generations. Only in 1852, with the corsairs long gone, did the coastal port of Arrecife dare to become the island’s capital.',
        },
      ],
      langHeading: 'Arrecife in your language, all 32',
      ctaHeading: 'Get the key to Arrecife',
      ctaIntro:
        'Pick your stops, start walking, and let the voice reveal what everyone else walks straight past.',
    },
    fr: {
      metaTitle: 'Visite audio d’Arrecife · En autonomie, Lanzarote',
      metaDescription:
        'Une visite audio GPS en autonomie d’Arrecife, capitale de Lanzarote. Parcourez le front de mer, les châteaux et la lagune à votre rythme avec des récits en voix native dans 32 langues, hors ligne et avec un guide en réalité augmentée.',
      keywords:
        'visite audio arrecife, visite autoguidée arrecife, visite à pied lanzarote, que faire à arrecife lanzarote, audioguide lanzarote',
      ogTitle: 'Visite audio d’Arrecife | Fun Zone Tenerife',
      ogDescription:
        'Parcourez Arrecife, la capitale de Lanzarote, à votre rythme avec des récits en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée.',
      heroIntro:
        'Une balade audio GPS en autonomie à travers la capitale de Lanzarote. Une ville qui doit son nom à ses récifs, deux forts maritimes, une lagune à marée pleine de barques de pêche et la ville natale de l’artiste qui a façonné toute l’île, racontés à votre oreille là où tout s’est passé.',
      postcardHeading: 'Arrecife, la version que les cartes postales oublient',
      postcardIntro:
        'Pas les clichés sur papier glacé. Les histoires que même les habitants longent sans les connaître, murmurées à votre oreille à l’endroit exact où elles ont eu lieu. En voici trois. Beaucoup d’autres vous attendent dans la visite.',
      secrets: [
        {
          place: 'Castillo de San Gabriel',
          teaser:
            'Un petit fort garde le port depuis son propre îlot, que l’on rejoint par un pont-levis. Baissez les yeux en traversant et vous repérerez les deux boules de pierre qui ont donné au pont son surnom singulier.',
        },
        {
          place: 'Castillo de San José',
          teaser:
            'Cette belle forteresse fut élevée pendant une famine pour donner du travail à des insulaires affamés, d’où un surnom bien plus sombre que celui de son saint. Deux siècles plus tard, sa raison d’être a été complètement renversée.',
        },
        {
          place: 'Charco de San Ginés',
          teaser:
            'Deux fois par jour, cette petite lagune au cœur de la ville se remplit et se vide avec la marée, et les barques de pêche colorées posées sur son eau sont le point de départ de toute la cité.',
        },
      ],
      storyTitle: 'L’histoire d’Arrecife',
      storyIntro: [
        'Arrecife est la capitale et le port principal de Lanzarote, une ville basse et blanchie de soleil étirée le long de la côte est de l’île. Son nom vient du mot espagnol pour récif : une ligne de récifs volcaniques noirs court juste au large, et derrière eux les bateaux pouvaient s’abriter et se cacher. La vieille ville est plate et compacte, facile à parcourir à pied, enroulée autour d’une lagune salée plutôt que d’une grande place.',
        'Pendant des siècles, Arrecife ne fut qu’un petit port de pêche et de commerce, tandis que la capitale de l’île restait à l’abri dans les terres, à Teguise, hors d’atteinte des corsaires qui pillaient la côte. Ce n’est qu’en 1852, l’âge de la piraterie bien révolu, qu’Arrecife reçut enfin la couronne de capitale et commença à devenir la ville que vous parcourez aujourd’hui.',
      ],
      storyBlocks: [
        {
          heading: 'Deux châteaux face à la mer',
          paragraphs: [
            'Le plus ancien des deux forts, le Castillo de San Gabriel, se dresse sur un petit îlot à l’entrée du port et fut bâti au XVIe siècle pour repousser les pirates. On y accède par une mince chaussée et un pont-levis, le Puente de las Bolas, nommé d’après les deux sphères de pierre de ses piliers et souvent présenté comme le seul pont de ce genre aux Canaries. Aujourd’hui, le fort abrite le musée d’histoire de la ville.',
            'Le Castillo de San José, plus imposant, fut construit dans les années 1770 sur ordre du roi Charles III. Comme il fut élevé pendant une dure famine pour donner du travail rémunéré aux insulaires affamés, on le surnomma la forteresse de la Faim. Dans les années 1970, l’artiste César Manrique le restaura et en fit un musée d’art contemporain, le MIAC : un symbole de la faim devint ainsi un temple de l’art moderne.',
          ],
        },
        {
          heading: 'Une lagune, une église et un artiste',
          paragraphs: [
            'Au cœur de la ville s’étend le Charco de San Ginés, une lagune d’eau salée qui se remplit et se vide avec la mer deux fois par jour, cernée de petites barques de pêche et de maisons basses et blanches. C’est ici que se trouvaient les premières cabanes de pêcheurs, la graine dont la ville est née. À quelques pas se dresse l’Iglesia de San Ginés, l’église mère de la ville, dédiée à son patron.',
            'Le fils le plus célèbre d’Arrecife est César Manrique, né ici en 1919, peintre et architecte dont la vision a donné à Lanzarote ses maisons basses et blanches, son interdiction des panneaux publicitaires et sa fusion de l’art avec le paysage volcanique. Parcourez la ville en pensant à son nom et vous verrez sa main partout, du musée du château à l’allure même des rues.',
          ],
        },
        {
          heading: 'À ne pas manquer',
          paragraphs: [
            'Commencez au Charco de San Ginés et suivez l’eau jusqu’au front de mer, puis franchissez le Puente de las Bolas vers le Castillo de San Gabriel pour la vue sur la ville. Parcourez l’avenue bordée de palmiers pour le Gran Hotel, le plus haut bâtiment de l’île, et la plage tranquille de Playa del Reducto. Le Castillo de San José et son musée d’art se trouvent un peu plus loin sur la côte, vers le nord.',
          ],
        },
      ],
      mapHeading: 'Où se trouve Arrecife ?',
      mapIntro:
        'Arrecife se situe sur la côte est de Lanzarote, la plus au nord-est des îles Canaries espagnoles, au large du nord-ouest de l’Afrique. C’est la capitale et le port principal de l’île, et la porte d’entrée de la plupart des visiteurs, l’aéroport se trouvant juste au sud-ouest.',
      bonusHeading: 'Trois choses que la plupart des visiteurs ignorent',
      bonus: [
        {
          lead: 'La faim qui a bâti une forteresse.',
          text:
            'Le Castillo de San José fut élevé pendant une famine du XVIIIe siècle précisément pour donner du travail rémunéré aux insulaires affamés, d’où son surnom de forteresse de la Faim. Deux cents ans plus tard, César Manrique l’a rempli d’art moderne.',
        },
        {
          lead: 'L’hôte canarien d’Einstein venait d’ici.',
          text:
            'Le physicien Blas Cabrera, le plus grand spécialiste espagnol du magnétisme, est né à Arrecife en 1878 et reçut personnellement Albert Einstein lors de sa visite en Espagne en 1923. Un savant de rang mondial issu de cette petite ville portuaire.',
        },
        {
          lead: 'La capitale s’est cachée dans les terres pendant des siècles.',
          text:
            'Les raids de pirates étaient si violents que Lanzarote garda sa capitale à l’abri, dans les terres à Teguise, pendant des générations. Ce n’est qu’en 1852, les corsaires disparus depuis longtemps, que le port côtier d’Arrecife osa devenir la capitale de l’île.',
        },
      ],
      langHeading: 'Arrecife dans votre langue, les 32',
      ctaHeading: 'Obtenez la clé d’Arrecife',
      ctaIntro:
        'Choisissez vos étapes, commencez à marcher, et laissez la voix révéler ce que tout le monde longe sans le voir.',
    },
    es: {
      metaTitle: 'Audioguía de Arrecife · Autoguiada, Lanzarote',
      metaDescription:
        'Una audioguía GPS autoguiada de Arrecife, capital de Lanzarote. Recorre el paseo marítimo, los castillos y el charco a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión y con guía de realidad aumentada.',
      keywords:
        'audioguía arrecife, ruta autoguiada arrecife, ruta a pie lanzarote, qué ver en arrecife lanzarote, audioguía lanzarote',
      ogTitle: 'Audioguía de Arrecife | Fun Zone Tenerife',
      ogDescription:
        'Recorre Arrecife, la capital de Lanzarote, a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión, con guía de realidad aumentada.',
      heroIntro:
        'Un paseo con audioguía GPS autoguiada por la capital de Lanzarote. Una ciudad que debe su nombre a sus arrecifes, dos castillos junto al mar, un charco de marea lleno de barcas de pesca y la cuna del artista que dio forma a toda la isla, narrados a tu oído justo donde ocurrió todo.',
      postcardHeading: 'Arrecife, la versión que las postales se saltan',
      postcardIntro:
        'No las fotos de revista. Las historias por las que hasta los vecinos pasan sin saberlo, susurradas a tu oído en el punto exacto al que pertenecen. Aquí tienes tres. Muchas más te esperan en el tour.',
      secrets: [
        {
          place: 'Castillo de San Gabriel',
          teaser:
            'Un pequeño castillo guarda el puerto desde su propio islote, al que se llega por un puente levadizo. Mira al cruzar y verás las dos bolas de piedra que dieron al puente su curioso apodo.',
        },
        {
          place: 'Castillo de San José',
          teaser:
            'Esta hermosa fortaleza se levantó durante una hambruna para dar trabajo a isleños muertos de hambre, de ahí un apodo mucho más oscuro que el de su santo. Dos siglos después, su razón de ser se puso del todo del revés.',
        },
        {
          place: 'Charco de San Ginés',
          teaser:
            'Dos veces al día este pequeño charco en el corazón de la ciudad se llena y se vacía con la marea, y las barcas de pesca pintadas que descansan en su agua son donde empezó toda la ciudad.',
        },
      ],
      storyTitle: 'La historia de Arrecife',
      storyIntro: [
        'Arrecife es la capital y el puerto principal de Lanzarote, una ciudad baja y blanqueada por el sol que se extiende a lo largo de la costa este de la isla. Su nombre viene de la palabra arrecife: una línea de arrecifes volcánicos negros corre justo frente a la orilla, y tras ellos los barcos podían resguardarse y esconderse. El casco antiguo es llano y compacto, fácil de recorrer a pie, y envuelve un charco de agua salada en lugar de una gran plaza.',
        'Durante siglos Arrecife fue solo un pequeño puerto de pesca y comercio, mientras la capital de la isla permanecía a salvo tierra adentro, en Teguise, lejos de los corsarios que asaltaban la costa. Solo en 1852, con la era de la piratería muy atrás, Arrecife recibió por fin la corona de capital y empezó a convertirse en la ciudad que hoy recorres.',
      ],
      storyBlocks: [
        {
          heading: 'Dos castillos frente al mar',
          paragraphs: [
            'El más antiguo de los dos, el Castillo de San Gabriel, se alza en un islote a la entrada del puerto y se construyó en el siglo XVI para rechazar a los piratas. Se llega por una estrecha calzada y un puente levadizo, el Puente de las Bolas, llamado así por las dos esferas de piedra de sus pilares y considerado a menudo el único puente de su clase en Canarias. Hoy el castillo acoge el museo de historia de la ciudad.',
            'El más imponente Castillo de San José se construyó en la década de 1770 por orden del rey Carlos III. Como se levantó durante una dura hambruna para dar trabajo pagado a los isleños hambrientos, el pueblo lo apodó la Fortaleza del Hambre. En los años setenta el artista César Manrique lo restauró y lo convirtió en un museo de arte contemporáneo, el MIAC, así que un símbolo del hambre se volvió un templo del arte moderno.',
          ],
        },
        {
          heading: 'Un charco, una iglesia y un artista',
          paragraphs: [
            'En el corazón de la ciudad está el Charco de San Ginés, un charco de agua salada que se llena y se vacía con el mar dos veces al día, rodeado de pequeñas barcas de pesca y casas bajas y blancas. Aquí estuvieron las primeras chozas de pescadores, la semilla de la que creció la ciudad. A un paso se alza la Iglesia de San Ginés, la iglesia matriz, dedicada a su patrón.',
            'El hijo más célebre de Arrecife es César Manrique, nacido aquí en 1919, el pintor y arquitecto cuya visión dio a Lanzarote sus casas bajas y blancas, su prohibición de las vallas publicitarias y su fusión del arte con el paisaje volcánico. Recorre la ciudad con su nombre en mente y empezarás a ver su mano por todas partes, del museo del castillo al propio aspecto de las calles.',
          ],
        },
        {
          heading: 'En qué fijarte',
          paragraphs: [
            'Empieza en el Charco de San Ginés y sigue el agua hasta el paseo marítimo, luego cruza el Puente de las Bolas hasta el Castillo de San Gabriel para ver la ciudad a tus espaldas. Recorre la avenida de palmeras hacia el Gran Hotel, el edificio más alto de la isla, y la tranquila playa urbana del Reducto. El Castillo de San José y su museo de arte quedan un poco más allá, hacia el norte, junto a la costa.',
          ],
        },
      ],
      mapHeading: '¿Dónde está Arrecife?',
      mapIntro:
        'Arrecife está en la costa este de Lanzarote, la más nororiental de las Islas Canarias, frente a la costa noroeste de África. Es la capital y el puerto principal de la isla, y la puerta de entrada de la mayoría de los visitantes, con el aeropuerto justo al suroeste.',
      bonusHeading: 'Tres cosas que casi ningún visitante descubre',
      bonus: [
        {
          lead: 'El hambre que levantó una fortaleza.',
          text:
            'El Castillo de San José se levantó durante una hambruna del siglo XVIII precisamente para dar trabajo pagado a los isleños hambrientos, de ahí el apodo de Fortaleza del Hambre. Doscientos años después, César Manrique lo llenó de arte moderno.',
        },
        {
          lead: 'El anfitrión canario de Einstein era de aquí.',
          text:
            'El físico Blas Cabrera, la mayor autoridad española en magnetismo, nació en Arrecife en 1878 y recibió personalmente a Albert Einstein durante su visita a España en 1923. Un científico de talla mundial salido de esta pequeña ciudad portuaria.',
        },
        {
          lead: 'La capital se escondió tierra adentro durante siglos.',
          text:
            'Los ataques de los piratas eran tan feroces que Lanzarote mantuvo su capital a salvo tierra adentro, en Teguise, durante generaciones. Solo en 1852, con los corsarios ya desaparecidos, el puerto costero de Arrecife se atrevió a convertirse en capital de la isla.',
        },
      ],
      langHeading: 'Arrecife en tu idioma, los 32',
      ctaHeading: 'Consigue la llave de Arrecife',
      ctaIntro:
        'Elige tus paradas, echa a andar y deja que la voz te revele lo que todos pasan de largo.',
    },
    de: {
      metaTitle: 'Audiotour Arrecife · Selbstgeführt, Lanzarote',
      metaDescription:
        'Eine selbstgeführte GPS-Audiotour durch Arrecife, die Hauptstadt Lanzarotes. Erkunden Sie Uferpromenade, Kastelle und Lagune in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline und mit AR-Guide.',
      keywords:
        'audiotour arrecife, selbstgeführte tour arrecife, stadtrundgang lanzarote, sehenswürdigkeiten arrecife lanzarote, audioguide lanzarote',
      ogTitle: 'Audiotour Arrecife | Fun Zone Tenerife',
      ogDescription:
        'Erkunden Sie Arrecife, die Hauptstadt Lanzarotes, in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide.',
      heroIntro:
        'Ein selbstgeführter GPS-Audiospaziergang durch die Hauptstadt Lanzarotes. Eine Stadt, benannt nach ihren Riffen, zwei Seeforts, eine Gezeitenlagune voller Fischerboote und die Geburtsstadt des Künstlers, der die ganze Insel prägte, erzählt in Ihrem Ohr genau dort, wo alles geschah.',
      postcardHeading: 'Arrecife, die Version, die auf keiner Postkarte steht',
      postcardIntro:
        'Nicht die Hochglanzbilder. Die Geschichten, an denen selbst Einheimische ahnungslos vorbeigehen, geflüstert in Ihr Ohr an genau dem Ort, zu dem sie gehören. Hier sind drei. Viele weitere warten in der Tour.',
      secrets: [
        {
          place: 'Castillo de San Gabriel',
          teaser:
            'Ein kleines Fort bewacht den Hafen von seiner eigenen Insel aus, erreichbar über eine kleine Zugbrücke. Schauen Sie beim Überqueren nach unten, und Sie entdecken die zwei Steinkugeln, die der Brücke ihren seltsamen Beinamen gaben.',
        },
        {
          place: 'Castillo de San José',
          teaser:
            'Diese stattliche Festung entstand während einer Hungersnot, um hungernden Insulanern Arbeit zu geben, daher ein weit düsterer Name als der ihres Heiligen. Zwei Jahrhunderte später wurde ihr Zweck völlig auf den Kopf gestellt.',
        },
        {
          place: 'Charco de San Ginés',
          teaser:
            'Zweimal täglich füllt und leert sich diese kleine Lagune mitten in der Stadt mit den Gezeiten, und die bunten Fischerboote auf ihrem Wasser sind der Ort, an dem die ganze Stadt begann.',
        },
      ],
      storyTitle: 'Die Geschichte von Arrecife',
      storyIntro: [
        'Arrecife ist die Hauptstadt und der wichtigste Hafen Lanzarotes, eine niedrige, sonnengebleichte Stadt entlang der Ostküste der Insel. Ihr Name kommt vom spanischen Wort für Riff: eine Linie schwarzer Vulkanriffe verläuft dicht vor der Küste, und dahinter konnten Boote Schutz finden und sich verstecken. Die Altstadt ist flach und kompakt, bequem zu Fuß, und legt sich um eine Salzwasserlagune statt um einen großen Platz.',
        'Jahrhundertelang war Arrecife nur ein kleiner Fischer- und Handelshafen, während die Inselhauptstadt sicher im Binnenland in Teguise lag, außer Reichweite der Korsaren, die die Küste überfielen. Erst 1852, als die Zeit der Piraterie längst vorbei war, erhielt Arrecife endlich die Krone der Hauptstadt und begann, zu der Stadt zu wachsen, die Sie heute durchstreifen.',
      ],
      storyBlocks: [
        {
          heading: 'Zwei Kastelle gegen das Meer',
          paragraphs: [
            'Das ältere der beiden Forts, das Castillo de San Gabriel, steht auf einer kleinen Insel an der Hafeneinfahrt und wurde im 16. Jahrhundert zur Abwehr von Piraten errichtet. Man erreicht es über einen schmalen Damm und eine Zugbrücke, den Puente de las Bolas, benannt nach den zwei Steinkugeln auf seinen Pfeilern und oft als einzige Brücke ihrer Art auf den Kanaren bezeichnet. Heute beherbergt das Fort das Stadtgeschichtsmuseum.',
            'Das stattlichere Castillo de San José entstand in den 1770er-Jahren auf Befehl von König Karl III. Weil es während einer schweren Hungersnot gebaut wurde, um hungernden Insulanern bezahlte Arbeit zu geben, nannten die Einheimischen es die Festung des Hungers. In den 1970er-Jahren restaurierte der Künstler César Manrique es und machte daraus ein Museum für zeitgenössische Kunst, das MIAC: aus einem Sinnbild des Hungers wurde ein Tempel der modernen Kunst.',
          ],
        },
        {
          heading: 'Eine Lagune, eine Kirche und ein Künstler',
          paragraphs: [
            'Im Herzen der Stadt liegt der Charco de San Ginés, eine Gezeiten-Salzwasserlagune, die sich zweimal täglich mit dem Meer füllt und leert, umgeben von kleinen Fischerbooten und niedrigen weißen Häusern. Hier standen die ersten Fischerhütten, der Keim, aus dem die Stadt wuchs. Ganz in der Nähe steht die Iglesia de San Ginés, die Mutterkirche der Stadt, ihrem Patron geweiht.',
            'Arrecifes berühmtester Sohn ist César Manrique, hier 1919 geboren, der Maler und Architekt, dessen Vision Lanzarote seine niedrigen weißen Häuser, sein Verbot von Werbetafeln und seine Verschmelzung von Kunst und Vulkanlandschaft gab. Gehen Sie mit seinem Namen im Kopf durch die Stadt, und Sie sehen seine Handschrift überall, vom Burgmuseum bis zum Aussehen der Straßen selbst.',
          ],
        },
        {
          heading: 'Worauf Sie achten sollten',
          paragraphs: [
            'Beginnen Sie am Charco de San Ginés und folgen Sie dem Wasser bis zur Uferpromenade, dann über den Puente de las Bolas zum Castillo de San Gabriel für den Blick zurück auf die Stadt. Gehen Sie die palmengesäumte Allee entlang zum Gran Hotel, dem höchsten Gebäude der Insel, und zum ruhigen Stadtstrand Playa del Reducto. Das Castillo de San José und sein Kunstmuseum liegen ein Stück weiter die Küste hinauf im Norden.',
          ],
        },
      ],
      mapHeading: 'Wo liegt Arrecife?',
      mapIntro:
        'Arrecife liegt an der Ostküste Lanzarotes, der nordöstlichsten der spanischen Kanarischen Inseln, vor der Nordwestküste Afrikas. Es ist die Hauptstadt und der wichtigste Hafen der Insel und das Eingangstor für die meisten Besucher, der Flughafen liegt gleich im Südwesten.',
      bonusHeading: 'Drei Dinge, die die meisten Besucher nie erfahren',
      bonus: [
        {
          lead: 'Der Hunger, der eine Festung baute.',
          text:
            'Das Castillo de San José wurde während einer Hungersnot im 18. Jahrhundert eigens errichtet, um hungernden Insulanern bezahlte Arbeit zu geben, daher der Beiname Festung des Hungers. Zweihundert Jahre später füllte César Manrique es mit moderner Kunst.',
        },
        {
          lead: 'Einsteins kanarischer Gastgeber stammte von hier.',
          text:
            'Der Physiker Blas Cabrera, Spaniens führender Magnetismus-Fachmann, wurde 1878 in Arrecife geboren und empfing Albert Einstein persönlich während dessen Spanien-Reise 1923. Ein Wissenschaftler von Weltrang aus dieser kleinen Hafenstadt.',
        },
        {
          lead: 'Die Hauptstadt versteckte sich jahrhundertelang im Binnenland.',
          text:
            'Die Piratenüberfälle waren so heftig, dass Lanzarote seine Hauptstadt über Generationen sicher im Binnenland in Teguise hielt. Erst 1852, als die Korsaren längst verschwunden waren, wagte es der Küstenhafen Arrecife, Inselhauptstadt zu werden.',
        },
      ],
      langHeading: 'Arrecife in Ihrer Sprache, alle 32',
      ctaHeading: 'Holen Sie sich den Schlüssel zu Arrecife',
      ctaIntro:
        'Wählen Sie Ihre Stationen, gehen Sie los, und lassen Sie die Stimme enthüllen, woran alle anderen vorbeigehen.',
    },
    it: {
      metaTitle: 'Audioguida di Arrecife · Autoguidata, Lanzarote',
      metaDescription:
        'Un tour audio GPS in autonomia ad Arrecife, capitale di Lanzarote. Percorri il lungomare, i castelli e la laguna al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline e con guida in realtà aumentata.',
      keywords:
        'audioguida arrecife, tour autoguidato arrecife, tour a piedi lanzarote, cosa vedere ad arrecife lanzarote, audioguida lanzarote',
      ogTitle: 'Audioguida di Arrecife | Fun Zone Tenerife',
      ogDescription:
        'Percorri Arrecife, la capitale di Lanzarote, al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline, con guida in realtà aumentata.',
      heroIntro:
        'Una passeggiata con audioguida GPS in autonomia nella capitale di Lanzarote. Una città che deve il nome ai suoi scogli, due forti sul mare, una laguna di marea piena di barche da pesca e la città natale dell’artista che ha plasmato l’intera isola, raccontati al tuo orecchio proprio dove tutto è accaduto.',
      postcardHeading: 'Arrecife, la versione che le cartoline tralasciano',
      postcardIntro:
        'Non le foto patinate. Le storie davanti a cui passano persino gli abitanti senza saperlo, sussurrate al tuo orecchio nel punto esatto a cui appartengono. Eccone tre. Molte altre ti aspettano nel tour.',
      secrets: [
        {
          place: 'Castillo de San Gabriel',
          teaser:
            'Un piccolo forte sorveglia il porto dal suo isolotto, raggiungibile con un ponte levatoio. Guarda in basso mentre lo attraversi e noterai le due sfere di pietra che diedero al ponte il suo curioso soprannome.',
        },
        {
          place: 'Castillo de San José',
          teaser:
            'Questa bella fortezza fu eretta durante una carestia per dare lavoro agli isolani affamati, da qui un soprannome assai più cupo di quello del suo santo. Due secoli dopo, il suo scopo è stato del tutto capovolto.',
        },
        {
          place: 'Charco de San Ginés',
          teaser:
            'Due volte al giorno questa piccola laguna nel cuore della città si riempie e si svuota con la marea, e le barche da pesca dipinte posate sulla sua acqua sono il punto in cui nacque tutta la città.',
        },
      ],
      storyTitle: 'La storia di Arrecife',
      storyIntro: [
        'Arrecife è la capitale e il porto principale di Lanzarote, una città bassa e sbiancata dal sole distesa lungo la costa orientale dell’isola. Il suo nome viene dalla parola spagnola per scoglio: una linea di scogli vulcanici neri corre appena al largo, e dietro di essi le barche potevano ripararsi e nascondersi. Il centro storico è piatto e compatto, facile da girare a piedi, e avvolge una laguna salata invece di una grande piazza.',
        'Per secoli Arrecife fu solo un piccolo porto di pesca e commercio, mentre la capitale dell’isola restava al sicuro nell’entroterra, a Teguise, fuori dalla portata dei corsari che saccheggiavano la costa. Solo nel 1852, con l’età della pirateria ormai alle spalle, Arrecife ricevette infine la corona di capitale e cominciò a diventare la città che percorri oggi.',
      ],
      storyBlocks: [
        {
          heading: 'Due castelli contro il mare',
          paragraphs: [
            'Il più antico dei due forti, il Castillo de San Gabriel, sorge su un isolotto all’imboccatura del porto e fu costruito nel Cinquecento per respingere i pirati. Vi si accede tramite una stretta strada rialzata e un ponte levatoio, il Puente de las Bolas, chiamato così per le due sfere di pietra sui suoi pilastri e spesso definito l’unico ponte del suo genere alle Canarie. Oggi il forte ospita il museo di storia della città.',
            'Il più imponente Castillo de San José fu costruito negli anni Settanta del Settecento per ordine del re Carlo III. Poiché fu eretto durante una dura carestia per dare lavoro retribuito agli isolani affamati, la gente lo soprannominò la Fortezza della Fame. Negli anni Settanta del Novecento l’artista César Manrique lo restaurò e lo trasformò in un museo d’arte contemporanea, il MIAC: così un simbolo della fame divenne un tempio dell’arte moderna.',
          ],
        },
        {
          heading: 'Una laguna, una chiesa e un artista',
          paragraphs: [
            'Nel cuore della città si trova il Charco de San Ginés, una laguna d’acqua salata che si riempie e si svuota con il mare due volte al giorno, circondata da piccole barche da pesca e case basse e bianche. Qui sorgevano le prime capanne dei pescatori, il seme da cui crebbe la città. A pochi passi si erge l’Iglesia de San Ginés, la chiesa madre della città, dedicata al suo patrono.',
            'Il figlio più celebre di Arrecife è César Manrique, nato qui nel 1919, il pittore e architetto la cui visione diede a Lanzarote le sue case basse e bianche, il suo divieto di cartelloni pubblicitari e la sua fusione tra arte e paesaggio vulcanico. Gira la città pensando al suo nome e inizierai a vedere la sua mano ovunque, dal museo del castello all’aspetto stesso delle strade.',
          ],
        },
        {
          heading: 'Cosa cercare',
          paragraphs: [
            'Comincia al Charco de San Ginés e segui l’acqua fino al lungomare, poi attraversa il Puente de las Bolas verso il Castillo de San Gabriel per la vista sulla città alle tue spalle. Percorri il viale di palme verso il Gran Hotel, l’edificio più alto dell’isola, e la tranquilla spiaggia urbana di Playa del Reducto. Il Castillo de San José e il suo museo d’arte si trovano un po’ più avanti lungo la costa, verso nord.',
          ],
        },
      ],
      mapHeading: 'Dove si trova Arrecife?',
      mapIntro:
        'Arrecife si trova sulla costa orientale di Lanzarote, la più nord-orientale delle Isole Canarie spagnole, al largo della costa nord-occidentale dell’Africa. È la capitale e il porto principale dell’isola, nonché la porta d’ingresso per la maggior parte dei visitatori, con l’aeroporto subito a sud-ovest.',
      bonusHeading: 'Tre cose che quasi nessun visitatore scopre',
      bonus: [
        {
          lead: 'La fame che costruì una fortezza.',
          text:
            'Il Castillo de San José fu eretto durante una carestia del Settecento proprio per dare lavoro retribuito agli isolani affamati, da cui il soprannome di Fortezza della Fame. Duecento anni dopo, César Manrique la riempì d’arte moderna.',
        },
        {
          lead: 'L’ospite canario di Einstein veniva da qui.',
          text:
            'Il fisico Blas Cabrera, massima autorità spagnola sul magnetismo, nacque ad Arrecife nel 1878 e ospitò personalmente Albert Einstein durante la sua visita in Spagna nel 1923. Uno scienziato di livello mondiale uscito da questa piccola città portuale.',
        },
        {
          lead: 'La capitale si nascose nell’entroterra per secoli.',
          text:
            'Le incursioni dei pirati erano così feroci che Lanzarote tenne la capitale al sicuro nell’entroterra, a Teguise, per generazioni. Solo nel 1852, con i corsari ormai scomparsi, il porto costiero di Arrecife osò diventare capitale dell’isola.',
        },
      ],
      langHeading: 'Arrecife nella tua lingua, tutte e 32',
      ctaHeading: 'Prendi la chiave di Arrecife',
      ctaIntro:
        'Scegli le tue tappe, mettiti in cammino e lascia che la voce ti riveli ciò che tutti gli altri oltrepassano senza vedere.',
    },
    nl: {
      metaTitle: 'Audiotour Arrecife · Zelfgeleid, Lanzarote',
      metaDescription:
        'Een zelfgeleide gps-audiotour door Arrecife, de hoofdstad van Lanzarote. Loop de boulevard, kastelen en lagune op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline en met AR-gids.',
      keywords:
        'audiotour arrecife, zelfgeleide tour arrecife, stadswandeling lanzarote, bezienswaardigheden arrecife lanzarote, audiogids lanzarote',
      ogTitle: 'Audiotour Arrecife | Fun Zone Tenerife',
      ogDescription:
        'Loop Arrecife, de hoofdstad van Lanzarote, op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline, met augmented-reality-gids.',
      heroIntro:
        'Een zelfgeleide gps-audiowandeling door de hoofdstad van Lanzarote. Een stad vernoemd naar haar riffen, twee zeeforten, een getijdenlagune vol vissersboten en de geboortestad van de kunstenaar die het hele eiland vormgaf, verteld in je oor precies waar het gebeurde.',
      postcardHeading: 'Arrecife, de versie die de ansichtkaarten weglaten',
      postcardIntro:
        'Niet de glossy plaatjes. De verhalen waar zelfs bewoners onwetend langslopen, gefluisterd in je oor op de exacte plek waar ze thuishoren. Hier zijn er drie. Veel meer wachten in de tour.',
      secrets: [
        {
          place: 'Castillo de San Gabriel',
          teaser:
            'Een klein fort bewaakt de haven vanaf zijn eigen eilandje, bereikbaar via een ophaalbruggetje. Kijk omlaag als je oversteekt en je ziet de twee stenen ballen die de brug haar vreemde bijnaam gaven.',
        },
        {
          place: 'Castillo de San José',
          teaser:
            'Dit statige fort werd opgetrokken tijdens een hongersnood om uitgehongerde eilanders werk te geven, vandaar een veel duisterder naam dan die van zijn heilige. Twee eeuwen later werd zijn bestemming volledig omgekeerd.',
        },
        {
          place: 'Charco de San Ginés',
          teaser:
            'Twee keer per dag loopt deze kleine lagune in het hart van de stad vol en weer leeg met het getij, en de geschilderde vissersboten op haar water zijn waar de hele stad begon.',
        },
      ],
      storyTitle: 'Het verhaal van Arrecife',
      storyIntro: [
        'Arrecife is de hoofdstad en de belangrijkste haven van Lanzarote, een lage, door de zon gebleekte stad langs de oostkust van het eiland. De naam komt van het Spaanse woord voor rif: een lijn zwarte vulkanische riffen loopt vlak voor de kust, en daarachter konden boten schuilen en zich verbergen. De oude stad is vlak en compact, prettig te belopen, en vouwt zich rond een zoutwaterlagune in plaats van een groot plein.',
        'Eeuwenlang was Arrecife maar een kleine vissers- en handelshaven, terwijl de hoofdstad van het eiland veilig in het binnenland lag, in Teguise, buiten bereik van de kapers die de kust plunderden. Pas in 1852, toen het tijdperk van de piraterij allang voorbij was, kreeg Arrecife eindelijk de hoofdstedelijke kroon en groeide het uit tot de stad die je vandaag doorkruist.',
      ],
      storyBlocks: [
        {
          heading: 'Twee kastelen tegen de zee',
          paragraphs: [
            'Het oudste van de twee forten, het Castillo de San Gabriel, staat op een klein eilandje bij de havenmond en werd in de zestiende eeuw gebouwd om piraten af te weren. Je bereikt het via een smalle dam en ophaalbrug, de Puente de las Bolas, genoemd naar de twee stenen bollen op de pijlers en vaak de enige brug van zijn soort op de Canarische Eilanden genoemd. Vandaag herbergt het fort het stadsgeschiedenismuseum.',
            'Het statigere Castillo de San José werd in de jaren 1770 gebouwd in opdracht van koning Karel III. Omdat het werd opgetrokken tijdens een zware hongersnood om uitgehongerde eilanders betaald werk te geven, noemden de bewoners het het Fort van de Honger. In de jaren zeventig restaureerde kunstenaar César Manrique het en maakte er een museum voor hedendaagse kunst van, het MIAC, zodat een zinnebeeld van honger een tempel van moderne kunst werd.',
          ],
        },
        {
          heading: 'Een lagune, een kerk en een kunstenaar',
          paragraphs: [
            'In het hart van de stad ligt de Charco de San Ginés, een getijden-zoutwaterlagune die zich twee keer per dag met de zee vult en leegt, omringd door kleine vissersboten en lage witte huizen. Hier stonden de eerste vissershutten, het zaad waaruit de stad groeide. Op een steenworp staat de Iglesia de San Ginés, de moederkerk van de stad, gewijd aan haar patroon.',
            'Arrecifes beroemdste zoon is César Manrique, hier geboren in 1919, de schilder en architect wiens visie Lanzarote zijn lage witte huizen, zijn verbod op reclameborden en zijn versmelting van kunst met het vulkanische landschap gaf. Loop door de stad met zijn naam in gedachten en je ziet zijn hand overal, van het kasteelmuseum tot het aanzien van de straten zelf.',
          ],
        },
        {
          heading: 'Waar je op moet letten',
          paragraphs: [
            'Begin bij de Charco de San Ginés en volg het water naar de boulevard, steek dan de Puente de las Bolas over naar het Castillo de San Gabriel voor het uitzicht terug op de stad. Loop de met palmen omzoomde laan af naar het Gran Hotel, het hoogste gebouw van het eiland, en het rustige stadsstrand Playa del Reducto. Het Castillo de San José en zijn kunstmuseum liggen een stukje verderop langs de kust naar het noorden.',
          ],
        },
      ],
      mapHeading: 'Waar ligt Arrecife?',
      mapIntro:
        'Arrecife ligt aan de oostkust van Lanzarote, het meest noordoostelijke van de Spaanse Canarische Eilanden, voor de noordwestkust van Afrika. Het is de hoofdstad en de belangrijkste haven van het eiland en de toegangspoort voor de meeste bezoekers, met de luchthaven net ten zuidwesten.',
      bonusHeading: 'Drie dingen die bijna geen bezoeker ontdekt',
      bonus: [
        {
          lead: 'De honger die een fort bouwde.',
          text:
            'Het Castillo de San José werd tijdens een hongersnood in de achttiende eeuw juist opgetrokken om uitgehongerde eilanders betaald werk te geven, vandaar de bijnaam Fort van de Honger. Tweehonderd jaar later vulde César Manrique het met moderne kunst.',
        },
        {
          lead: 'Einsteins Canarische gastheer kwam hiervandaan.',
          text:
            'De natuurkundige Blas Cabrera, Spanjes grootste kenner van magnetisme, werd in 1878 in Arrecife geboren en ontving Albert Einstein persoonlijk tijdens diens bezoek aan Spanje in 1923. Een wetenschapper van wereldklasse uit deze kleine havenstad.',
        },
        {
          lead: 'De hoofdstad hield zich eeuwenlang in het binnenland schuil.',
          text:
            'De piratenaanvallen waren zo hevig dat Lanzarote zijn hoofdstad generaties lang veilig in het binnenland hield, in Teguise. Pas in 1852, toen de kapers allang verdwenen waren, durfde de kusthaven Arrecife hoofdstad van het eiland te worden.',
        },
      ],
      langHeading: 'Arrecife in jouw taal, alle 32',
      ctaHeading: 'Haal de sleutel tot Arrecife',
      ctaIntro:
        'Kies je stops, begin te lopen en laat de stem onthullen wat iedereen straal voorbijloopt.',
    },
  },
  'las-palmas': {
    en: {
      metaTitle: 'Las Palmas de Gran Canaria Audio Tour · Self-Guided Walk',
      metaDescription:
        'A self-guided GPS audio tour of old Las Palmas de Gran Canaria. Walk Vegueta and Triana at your own pace with native-voice stories in 32 languages, offline and with an AR guide.',
      keywords:
        'las palmas de gran canaria audio tour, self-guided tour las palmas, vegueta walking tour, things to do gran canaria, audio guide gran canaria',
      ogTitle: 'Las Palmas de Gran Canaria Audio Tour | Fun Zone Tenerife',
      ogDescription:
        'Walk the old quarters of Las Palmas de Gran Canaria at your own pace with native-voice stories in 32 languages, offline, with an augmented-reality guide.',
      heroIntro:
        'A self-guided GPS audio walk through the two old quarters of Gran Canaria’s capital, Vegueta and Triana. The spot where the city was founded, Columbus’s Atlantic stopover and the dogs that gave the islands their name, told in your ear right where it all happened.',
      postcardHeading: 'Las Palmas, the version the postcards leave out',
      postcardIntro:
        'Not the glossy shots. The stories even locals walk past without knowing, whispered in your ear on the exact spot they belong to. Here are three. Many more wait inside the tour.',
      secrets: [
        {
          place: 'Plaza de Santa Ana',
          teaser:
            'Eight dark dogs sit in a row before the cathedral, and nobody is quite sure why. Their secret reaches back to the Roman name for these islands, and it has nothing to do with the little yellow bird.',
        },
        {
          place: 'Catedral de Santa Ana',
          teaser:
            'Most visitors photograph the stern stone front and move on. Step inside and the columns fan open above your head like a petrified palm grove, a quiet nod to the city’s own name.',
        },
        {
          place: 'Ermita de San Antonio Abad',
          teaser:
            'The grand cathedral is not where the city began. That honour belongs to a small, plain chapel nearby, where tradition says a certain sailor prayed before heading west in 1492.',
        },
      ],
      storyTitle: 'The story of Las Palmas de Gran Canaria',
      storyIntro: [
        'Las Palmas is the capital of Gran Canaria and the largest city in the Canary Islands. Its historic heart is split in two by the old Guiniguada ravine: Vegueta, the cobbled colonial core where the city was founded, and Triana, the merchants’ and shopping quarter just across the water. Almost everything worth seeing in the old town is within an easy walk.',
        'It began on 24 June 1478, when Juan Rejón came ashore at the mouth of the Guiniguada with a small force and founded the Real de Las Palmas. The conquest of Gran Canaria took about five years of hard fighting before the island was folded into the Crown of Castile in 1483. The San Juan festival each June still marks the founding date.',
      ],
      storyBlocks: [
        {
          heading: 'A rehearsal for the New World',
          paragraphs: [
            'Vegueta was one of the first European towns built on Atlantic soil, and in many ways a rehearsal for the colonial cities Spain would later raise across the Americas. In 1492 Christopher Columbus anchored here to repair the rudder of the Pinta before crossing the ocean, and called again on the way home. The Casa de Colón, on the site of the old governor’s residence, still carries his name.',
            'At the centre stands the Cathedral of Santa Ana, begun around 1500. Its Gothic core was finished by 1570, then given a severe neoclassical stone face in the eighteenth century, so the building you see today is essentially Gothic within and neoclassical without. It was the only cathedral in the Canaries until 1819, and its palm-like interior columns echo the name Las Palmas.',
          ],
        },
        {
          heading: 'Dogs, writers and raiders',
          paragraphs: [
            'The name Canary Islands most likely comes from the Latin Canariae Insulae, the Islands of the Dogs, after the large dogs early visitors reported here. The famous little canary bird is named after the islands, not the other way round, so the row of dogs before the cathedral is, in a sense, the true origin of the name.',
            'Triana gave Spain one of its greatest novelists, Benito Pérez Galdós, born here in 1843, whose birth house is now a museum. The quarter has also seen its share of danger from the sea: in 1595 Sir Francis Drake was beaten back from these shores, and in 1599 a Dutch fleet under Pieter van der Does burned part of the town before being driven off.',
          ],
        },
        {
          heading: 'What to look out for',
          paragraphs: [
            'Begin in Vegueta on the Plaza de Santa Ana, between the cathedral and the dogs, then wander the lanes to the Casa de Colón and the Canarian art behind the old façade of the CAAM. Cross into Triana for the Pérez Galdós house and the shops of Calle Triana. When you want sand and sea, the long city beach of Las Canteras, sheltered by its natural reef, lies a short way north.',
          ],
        },
      ],
      mapHeading: 'Where is Las Palmas de Gran Canaria?',
      mapIntro:
        'Las Palmas sits on the north-east tip of Gran Canaria, a round volcanic island at the centre of Spain’s Canary archipelago, off the north-west coast of Africa. It is the island’s capital and main port, with the old quarters of Vegueta and Triana set just back from the harbour.',
      bonusHeading: 'Three things most visitors never learn',
      bonus: [
        {
          lead: 'The bird is named after the dogs.',
          text:
            'The canary you picture in a cage takes its name from these islands, which the Romans called the Islands of the Dogs. So the dogs guarding the cathedral are, in a way, the real canaries.',
        },
        {
          lead: 'A cathedral that changed its face.',
          text:
            'Santa Ana began as a Gothic church around 1500 and was finished inside by 1570, then given an entirely different neoclassical front in the eighteenth century. Walk in and back out and you cross three centuries of changing taste in a single doorway.',
        },
        {
          lead: 'Drake’s run of luck ran out here.',
          text:
            'The English corsair who had terrorised Spanish ports was repelled from Las Palmas in 1595 by a modest, largely civilian defence. He sailed on to the Caribbean and was dead of disease within months.',
        },
      ],
      langHeading: 'Las Palmas in your language, all 32',
      ctaHeading: 'Get the key to Las Palmas',
      ctaIntro:
        'Pick your stops, start walking, and let the voice reveal what everyone else walks straight past.',
    },
    fr: {
      metaTitle: 'Visite audio de Las Palmas de Gran Canaria · En autonomie',
      metaDescription:
        'Une visite audio GPS en autonomie du vieux Las Palmas de Gran Canaria. Parcourez Vegueta et Triana à votre rythme avec des récits en voix native dans 32 langues, hors ligne et avec un guide en réalité augmentée.',
      keywords:
        'visite audio las palmas gran canaria, visite autoguidée las palmas, visite à pied vegueta, que faire à grande canarie, audioguide gran canaria',
      ogTitle: 'Visite audio de Las Palmas de Gran Canaria | Fun Zone Tenerife',
      ogDescription:
        'Parcourez les vieux quartiers de Las Palmas de Gran Canaria à votre rythme avec des récits en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée.',
      heroIntro:
        'Une balade audio GPS en autonomie à travers les deux vieux quartiers de la capitale de Grande Canarie, Vegueta et Triana. Le lieu de fondation de la ville, l’escale atlantique de Colomb et les chiens qui ont donné leur nom aux îles, racontés à votre oreille là où tout s’est passé.',
      postcardHeading: 'Las Palmas, la version que les cartes postales oublient',
      postcardIntro:
        'Pas les clichés sur papier glacé. Les histoires que même les habitants longent sans les connaître, murmurées à votre oreille à l’endroit exact où elles ont eu lieu. En voici trois. Beaucoup d’autres vous attendent dans la visite.',
      secrets: [
        {
          place: 'Plaza de Santa Ana',
          teaser:
            'Huit chiens sombres s’alignent devant la cathédrale, et personne ne sait vraiment pourquoi. Leur secret remonte au nom romain de ces îles, et n’a rien à voir avec le petit oiseau jaune.',
        },
        {
          place: 'Catedral de Santa Ana',
          teaser:
            'La plupart des visiteurs photographient l’austère façade de pierre et passent leur chemin. Entrez, et les colonnes s’ouvrent au-dessus de vous comme une palmeraie pétrifiée, clin d’œil discret au nom même de la ville.',
        },
        {
          place: 'Ermita de San Antonio Abad',
          teaser:
            'Ce n’est pas la grande cathédrale qui a vu naître la ville. Cet honneur revient à une petite chapelle toute simple, tout près, où la tradition veut qu’un certain marin ait prié avant de mettre le cap à l’ouest en 1492.',
        },
      ],
      storyTitle: 'L’histoire de Las Palmas de Gran Canaria',
      storyIntro: [
        'Las Palmas est la capitale de Grande Canarie et la plus grande ville des îles Canaries. Son cœur historique est coupé en deux par l’ancien ravin du Guiniguada : Vegueta, le noyau colonial pavé où la ville fut fondée, et Triana, le quartier des marchands et des boutiques, juste de l’autre côté. Presque tout ce qui mérite d’être vu dans la vieille ville se fait aisément à pied.',
        'Tout commence le 24 juin 1478, quand Juan Rejón débarque à l’embouchure du Guiniguada avec une petite troupe et fonde le Real de Las Palmas. La conquête de Grande Canarie demanda environ cinq ans de rudes combats avant que l’île ne soit rattachée à la Couronne de Castille en 1483. La fête de la Saint-Jean, chaque mois de juin, marque encore la date de fondation.',
      ],
      storyBlocks: [
        {
          heading: 'Une répétition pour le Nouveau Monde',
          paragraphs: [
            'Vegueta fut l’une des premières villes européennes bâties sur une terre atlantique, et à bien des égards une répétition des villes coloniales que l’Espagne élèverait plus tard à travers les Amériques. En 1492, Christophe Colomb jeta l’ancre ici pour réparer le gouvernail de la Pinta avant de traverser l’océan, et y fit de nouveau escale au retour. La Casa de Colón, sur l’emplacement de l’ancienne résidence du gouverneur, porte toujours son nom.',
            'En son centre se dresse la cathédrale de Santa Ana, commencée vers 1500. Son noyau gothique fut achevé vers 1570, puis habillé d’une sévère façade néoclassique en pierre au XVIIIe siècle : l’édifice que vous voyez aujourd’hui est pour l’essentiel gothique à l’intérieur et néoclassique à l’extérieur. Elle resta la seule cathédrale des Canaries jusqu’en 1819, et ses colonnes intérieures en forme de palmier font écho au nom de Las Palmas.',
          ],
        },
        {
          heading: 'Des chiens, des écrivains et des corsaires',
          paragraphs: [
            'Le nom d’îles Canaries vient probablement du latin Canariae Insulae, les îles des Chiens, d’après les grands chiens que les premiers visiteurs y signalèrent. Le célèbre petit canari tient son nom des îles, et non l’inverse : la rangée de chiens devant la cathédrale est donc, en un sens, la véritable origine du nom.',
            'Triana a donné à l’Espagne l’un de ses plus grands romanciers, Benito Pérez Galdós, né ici en 1843, dont la maison natale est aujourd’hui un musée. Le quartier a aussi connu le danger venu de la mer : en 1595, Sir Francis Drake fut repoussé de ces rivages, et en 1599 une flotte hollandaise menée par Pieter van der Does brûla une partie de la ville avant d’être chassée.',
          ],
        },
        {
          heading: 'À ne pas manquer',
          paragraphs: [
            'Commencez à Vegueta sur la Plaza de Santa Ana, entre la cathédrale et les chiens, puis flânez dans les ruelles jusqu’à la Casa de Colón et à l’art canarien caché derrière l’ancienne façade du CAAM. Passez à Triana pour la maison de Pérez Galdós et les boutiques de la Calle Triana. Pour le sable et la mer, la longue plage urbaine de Las Canteras, protégée par son récif naturel, se trouve un peu plus au nord.',
          ],
        },
      ],
      mapHeading: 'Où se trouve Las Palmas de Gran Canaria ?',
      mapIntro:
        'Las Palmas occupe la pointe nord-est de Grande Canarie, île volcanique arrondie au centre de l’archipel espagnol des Canaries, au large du nord-ouest de l’Afrique. C’est la capitale et le port principal de l’île, avec les vieux quartiers de Vegueta et Triana juste en retrait du port.',
      bonusHeading: 'Trois choses que la plupart des visiteurs ignorent',
      bonus: [
        {
          lead: 'L’oiseau doit son nom aux chiens.',
          text:
            'Le canari que vous imaginez en cage tire son nom de ces îles, que les Romains appelaient les îles des Chiens. Les chiens qui gardent la cathédrale sont donc, en quelque sorte, les vrais canaris.',
        },
        {
          lead: 'Une cathédrale qui a changé de visage.',
          text:
            'Santa Ana naquit église gothique vers 1500 et fut achevée à l’intérieur vers 1570, avant de recevoir une façade néoclassique toute différente au XVIIIe siècle. En entrant puis en ressortant, vous traversez trois siècles de goûts changeants en une seule porte.',
        },
        {
          lead: 'La chance de Drake s’est arrêtée ici.',
          text:
            'Le corsaire anglais qui avait terrorisé les ports espagnols fut repoussé de Las Palmas en 1595 par une défense modeste et surtout civile. Il poursuivit vers les Caraïbes et mourut de maladie quelques mois plus tard.',
        },
      ],
      langHeading: 'Las Palmas dans votre langue, les 32',
      ctaHeading: 'Obtenez la clé de Las Palmas',
      ctaIntro:
        'Choisissez vos étapes, commencez à marcher, et laissez la voix révéler ce que tout le monde longe sans le voir.',
    },
    es: {
      metaTitle: 'Audioguía de Las Palmas de Gran Canaria · Autoguiada',
      metaDescription:
        'Una audioguía GPS autoguiada del casco antiguo de Las Palmas de Gran Canaria. Recorre Vegueta y Triana a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión y con guía de realidad aumentada.',
      keywords:
        'audioguía las palmas de gran canaria, ruta autoguiada las palmas, ruta a pie vegueta, qué ver en gran canaria, audioguía gran canaria',
      ogTitle: 'Audioguía de Las Palmas de Gran Canaria | Fun Zone Tenerife',
      ogDescription:
        'Recorre los barrios antiguos de Las Palmas de Gran Canaria a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión, con guía de realidad aumentada.',
      heroIntro:
        'Un paseo con audioguía GPS autoguiada por los dos barrios antiguos de la capital de Gran Canaria, Vegueta y Triana. El lugar donde se fundó la ciudad, la escala atlántica de Colón y los perros que dieron nombre a las islas, narrados a tu oído justo donde ocurrió todo.',
      postcardHeading: 'Las Palmas, la versión que las postales se saltan',
      postcardIntro:
        'No las fotos de revista. Las historias por las que hasta los vecinos pasan sin saberlo, susurradas a tu oído en el punto exacto al que pertenecen. Aquí tienes tres. Muchas más te esperan en el tour.',
      secrets: [
        {
          place: 'Plaza de Santa Ana',
          teaser:
            'Ocho perros oscuros se alinean ante la catedral, y nadie sabe muy bien por qué. Su secreto se remonta al nombre romano de estas islas, y no tiene nada que ver con el pajarito amarillo.',
        },
        {
          place: 'Catedral de Santa Ana',
          teaser:
            'La mayoría fotografía la severa fachada de piedra y sigue su camino. Entra y las columnas se abren sobre tu cabeza como un palmeral petrificado, un guiño callado al propio nombre de la ciudad.',
        },
        {
          place: 'Ermita de San Antonio Abad',
          teaser:
            'La ciudad no nació en la gran catedral. Ese honor es de una pequeña ermita sencilla, muy cerca, donde la tradición dice que cierto marino rezó antes de poner rumbo al oeste en 1492.',
        },
      ],
      storyTitle: 'La historia de Las Palmas de Gran Canaria',
      storyIntro: [
        'Las Palmas es la capital de Gran Canaria y la mayor ciudad de las Islas Canarias. Su corazón histórico lo parte en dos el antiguo barranco del Guiniguada: Vegueta, el núcleo colonial empedrado donde se fundó la ciudad, y Triana, el barrio de comerciantes y tiendas, justo al otro lado. Casi todo lo que merece verse en el casco antiguo queda a un paseo cómodo.',
        'Empezó el 24 de junio de 1478, cuando Juan Rejón desembarcó en la desembocadura del Guiniguada con una pequeña tropa y fundó el Real de Las Palmas. La conquista de Gran Canaria costó unos cinco años de duros combates antes de que la isla se incorporara a la Corona de Castilla en 1483. La fiesta de San Juan, cada junio, aún marca la fecha de la fundación.',
      ],
      storyBlocks: [
        {
          heading: 'Un ensayo para el Nuevo Mundo',
          paragraphs: [
            'Vegueta fue una de las primeras ciudades europeas levantadas en suelo atlántico y, en muchos sentidos, un ensayo de las ciudades coloniales que España alzaría después por toda América. En 1492 Cristóbal Colón fondeó aquí para reparar el timón de la Pinta antes de cruzar el océano, y volvió a recalar a la vuelta. La Casa de Colón, en el solar de la antigua residencia del gobernador, aún lleva su nombre.',
            'En su centro se alza la catedral de Santa Ana, iniciada hacia 1500. Su núcleo gótico se terminó hacia 1570 y luego recibió una severa fachada neoclásica de piedra en el siglo XVIII, así que el edificio que ves hoy es gótico por dentro y neoclásico por fuera. Fue la única catedral de Canarias hasta 1819, y sus columnas interiores, como palmeras, hacen eco al nombre de Las Palmas.',
          ],
        },
        {
          heading: 'Perros, escritores y corsarios',
          paragraphs: [
            'El nombre de Islas Canarias viene probablemente del latín Canariae Insulae, las islas de los Perros, por los grandes perros que describieron los primeros visitantes. El famoso canario toma su nombre de las islas, y no al revés: la hilera de perros ante la catedral es, en cierto modo, el verdadero origen del nombre.',
            'Triana dio a España a uno de sus mayores novelistas, Benito Pérez Galdós, nacido aquí en 1843, cuya casa natal es hoy un museo. El barrio también conoció el peligro llegado del mar: en 1595 Sir Francis Drake fue rechazado de estas costas, y en 1599 una flota holandesa al mando de Pieter van der Does quemó parte de la ciudad antes de ser expulsada.',
          ],
        },
        {
          heading: 'En qué fijarte',
          paragraphs: [
            'Empieza en Vegueta, en la Plaza de Santa Ana, entre la catedral y los perros, y luego piérdete por las calles hasta la Casa de Colón y el arte canario tras la vieja fachada del CAAM. Cruza a Triana para ver la casa de Pérez Galdós y las tiendas de la Calle Triana. Cuando quieras arena y mar, la larga playa urbana de Las Canteras, resguardada por su arrecife natural, queda un poco al norte.',
          ],
        },
      ],
      mapHeading: '¿Dónde está Las Palmas de Gran Canaria?',
      mapIntro:
        'Las Palmas ocupa el extremo nororiental de Gran Canaria, una isla volcánica y redondeada en el centro del archipiélago canario, frente a la costa noroeste de África. Es la capital y el puerto principal de la isla, con los barrios antiguos de Vegueta y Triana justo detrás del muelle.',
      bonusHeading: 'Tres cosas que casi ningún visitante descubre',
      bonus: [
        {
          lead: 'El pájaro se llama así por los perros.',
          text:
            'El canario que imaginas en una jaula toma su nombre de estas islas, que los romanos llamaron islas de los Perros. Así que los perros que guardan la catedral son, en cierto modo, los verdaderos canarios.',
        },
        {
          lead: 'Una catedral que cambió de cara.',
          text:
            'Santa Ana nació iglesia gótica hacia 1500 y se terminó por dentro hacia 1570, para recibir luego una fachada neoclásica muy distinta en el siglo XVIII. Al entrar y volver a salir, cruzas tres siglos de gustos cambiantes en una sola puerta.',
        },
        {
          lead: 'Aquí se acabó la suerte de Drake.',
          text:
            'El corsario inglés que había aterrorizado los puertos españoles fue rechazado de Las Palmas en 1595 por una defensa modesta y sobre todo civil. Siguió rumbo al Caribe y murió de enfermedad pocos meses después.',
        },
      ],
      langHeading: 'Las Palmas en tu idioma, los 32',
      ctaHeading: 'Consigue la llave de Las Palmas',
      ctaIntro:
        'Elige tus paradas, echa a andar y deja que la voz te revele lo que todos pasan de largo.',
    },
    de: {
      metaTitle: 'Audiotour Las Palmas de Gran Canaria · Selbstgeführt',
      metaDescription:
        'Eine selbstgeführte GPS-Audiotour durch die Altstadt von Las Palmas de Gran Canaria. Erkunden Sie Vegueta und Triana in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline und mit AR-Guide.',
      keywords:
        'audiotour las palmas de gran canaria, selbstgeführte tour las palmas, stadtrundgang vegueta, sehenswürdigkeiten gran canaria, audioguide gran canaria',
      ogTitle: 'Audiotour Las Palmas de Gran Canaria | Fun Zone Tenerife',
      ogDescription:
        'Erkunden Sie die Altstadtviertel von Las Palmas de Gran Canaria in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide.',
      heroIntro:
        'Ein selbstgeführter GPS-Audiospaziergang durch die beiden Altstadtviertel der Hauptstadt Gran Canarias, Vegueta und Triana. Der Gründungsort der Stadt, Kolumbus’ Atlantik-Zwischenstopp und die Hunde, die den Inseln ihren Namen gaben, erzählt in Ihrem Ohr genau dort, wo alles geschah.',
      postcardHeading: 'Las Palmas, die Version, die auf keiner Postkarte steht',
      postcardIntro:
        'Nicht die Hochglanzbilder. Die Geschichten, an denen selbst Einheimische ahnungslos vorbeigehen, geflüstert in Ihr Ohr an genau dem Ort, zu dem sie gehören. Hier sind drei. Viele weitere warten in der Tour.',
      secrets: [
        {
          place: 'Plaza de Santa Ana',
          teaser:
            'Acht dunkle Hunde sitzen in einer Reihe vor der Kathedrale, und niemand weiß genau, warum. Ihr Geheimnis reicht bis zum römischen Namen dieser Inseln zurück und hat nichts mit dem kleinen gelben Vogel zu tun.',
        },
        {
          place: 'Catedral de Santa Ana',
          teaser:
            'Die meisten fotografieren die strenge Steinfront und ziehen weiter. Treten Sie ein, und die Säulen öffnen sich über Ihnen wie ein versteinerter Palmenhain, ein leiser Verweis auf den Namen der Stadt.',
        },
        {
          place: 'Ermita de San Antonio Abad',
          teaser:
            'Nicht die große Kathedrale ist der Ursprung der Stadt. Diese Ehre gebührt einer kleinen, schlichten Kapelle ganz in der Nähe, in der laut Überlieferung ein gewisser Seefahrer betete, bevor er 1492 nach Westen aufbrach.',
        },
      ],
      storyTitle: 'Die Geschichte von Las Palmas de Gran Canaria',
      storyIntro: [
        'Las Palmas ist die Hauptstadt Gran Canarias und die größte Stadt der Kanarischen Inseln. Ihr historisches Herz teilt die alte Schlucht des Guiniguada in zwei Hälften: Vegueta, den gepflasterten kolonialen Kern, in dem die Stadt gegründet wurde, und Triana, das Händler- und Einkaufsviertel gleich gegenüber. Fast alles Sehenswerte der Altstadt liegt bequem zu Fuß.',
        'Es begann am 24. Juni 1478, als Juan Rejón mit einer kleinen Truppe an der Mündung des Guiniguada an Land ging und das Real de Las Palmas gründete. Die Eroberung Gran Canarias kostete etwa fünf Jahre harter Kämpfe, ehe die Insel 1483 der Krone von Kastilien angegliedert wurde. Das Johannisfest jeden Juni erinnert noch an das Gründungsdatum.',
      ],
      storyBlocks: [
        {
          heading: 'Eine Probe für die Neue Welt',
          paragraphs: [
            'Vegueta war eine der ersten europäischen Städte auf atlantischem Boden und in vielem eine Probe für die Kolonialstädte, die Spanien später in ganz Amerika errichten sollte. 1492 ankerte Christoph Kolumbus hier, um das Ruder der Pinta zu reparieren, bevor er den Ozean überquerte, und legte auf dem Rückweg erneut an. Die Casa de Colón, auf dem Grund der einstigen Statthalterresidenz, trägt bis heute seinen Namen.',
            'In ihrer Mitte erhebt sich die Kathedrale Santa Ana, um 1500 begonnen. Ihr gotischer Kern war um 1570 vollendet und erhielt dann im 18. Jahrhundert eine strenge klassizistische Steinfassade, sodass der Bau, den Sie heute sehen, innen im Kern gotisch und außen klassizistisch ist. Bis 1819 war sie die einzige Kathedrale der Kanaren, und ihre palmenartigen Innensäulen greifen den Namen Las Palmas auf.',
          ],
        },
        {
          heading: 'Hunde, Dichter und Freibeuter',
          paragraphs: [
            'Der Name Kanarische Inseln stammt wahrscheinlich vom lateinischen Canariae Insulae, den Inseln der Hunde, nach den großen Hunden, von denen frühe Besucher berichteten. Der berühmte kleine Kanarienvogel ist nach den Inseln benannt, nicht umgekehrt: die Hundereihe vor der Kathedrale ist somit gewissermaßen der wahre Ursprung des Namens.',
            'Triana schenkte Spanien einen seiner größten Romanciers, Benito Pérez Galdós, hier 1843 geboren, dessen Geburtshaus heute ein Museum ist. Auch die Gefahr von See kannte das Viertel: 1595 wurde Sir Francis Drake von dieser Küste zurückgeschlagen, und 1599 brannte eine niederländische Flotte unter Pieter van der Does einen Teil der Stadt nieder, ehe sie vertrieben wurde.',
          ],
        },
        {
          heading: 'Worauf Sie achten sollten',
          paragraphs: [
            'Beginnen Sie in Vegueta auf der Plaza de Santa Ana, zwischen Kathedrale und Hunden, und schlendern Sie dann durch die Gassen zur Casa de Colón und zur kanarischen Kunst hinter der alten Fassade des CAAM. Hinüber nach Triana führt der Weg zum Pérez-Galdós-Haus und zu den Läden der Calle Triana. Wer Sand und Meer sucht, findet den langen Stadtstrand Las Canteras, geschützt von seinem natürlichen Riff, ein Stück weiter nördlich.',
          ],
        },
      ],
      mapHeading: 'Wo liegt Las Palmas de Gran Canaria?',
      mapIntro:
        'Las Palmas liegt an der Nordostspitze Gran Canarias, einer runden Vulkaninsel im Zentrum des spanischen Kanaren-Archipels vor der Nordwestküste Afrikas. Es ist die Hauptstadt und der wichtigste Hafen der Insel, mit den Altstadtvierteln Vegueta und Triana gleich hinter dem Hafen.',
      bonusHeading: 'Drei Dinge, die die meisten Besucher nie erfahren',
      bonus: [
        {
          lead: 'Der Vogel ist nach den Hunden benannt.',
          text:
            'Der Kanarienvogel, den Sie sich im Käfig vorstellen, hat seinen Namen von diesen Inseln, die die Römer Inseln der Hunde nannten. Die Hunde, die die Kathedrale bewachen, sind also in gewisser Weise die wahren Kanarien.',
        },
        {
          lead: 'Eine Kathedrale, die ihr Gesicht wechselte.',
          text:
            'Santa Ana begann um 1500 als gotische Kirche und war um 1570 innen fertig, erhielt dann aber im 18. Jahrhundert eine ganz andere, klassizistische Front. Wer hinein- und wieder hinausgeht, durchquert in einer einzigen Tür drei Jahrhunderte wechselnden Geschmacks.',
        },
        {
          lead: 'Hier endete Drakes Glückssträhne.',
          text:
            'Der englische Freibeuter, der spanische Häfen in Angst versetzt hatte, wurde 1595 von einer bescheidenen, überwiegend zivilen Verteidigung aus Las Palmas zurückgeschlagen. Er segelte weiter in die Karibik und starb binnen Monaten an einer Krankheit.',
        },
      ],
      langHeading: 'Las Palmas in Ihrer Sprache, alle 32',
      ctaHeading: 'Holen Sie sich den Schlüssel zu Las Palmas',
      ctaIntro:
        'Wählen Sie Ihre Stationen, gehen Sie los, und lassen Sie die Stimme enthüllen, woran alle anderen vorbeigehen.',
    },
    it: {
      metaTitle: 'Audioguida di Las Palmas de Gran Canaria · Autoguidata',
      metaDescription:
        'Un tour audio GPS in autonomia nel centro storico di Las Palmas de Gran Canaria. Percorri Vegueta e Triana al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline e con guida in realtà aumentata.',
      keywords:
        'audioguida las palmas de gran canaria, tour autoguidato las palmas, tour a piedi vegueta, cosa vedere a gran canaria, audioguida gran canaria',
      ogTitle: 'Audioguida di Las Palmas de Gran Canaria | Fun Zone Tenerife',
      ogDescription:
        'Percorri i quartieri antichi di Las Palmas de Gran Canaria al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline, con guida in realtà aumentata.',
      heroIntro:
        'Una passeggiata con audioguida GPS in autonomia nei due quartieri antichi della capitale di Gran Canaria, Vegueta e Triana. Il luogo in cui nacque la città, lo scalo atlantico di Colombo e i cani che diedero il nome alle isole, raccontati al tuo orecchio proprio dove tutto è accaduto.',
      postcardHeading: 'Las Palmas, la versione che le cartoline tralasciano',
      postcardIntro:
        'Non le foto patinate. Le storie davanti a cui passano persino gli abitanti senza saperlo, sussurrate al tuo orecchio nel punto esatto a cui appartengono. Eccone tre. Molte altre ti aspettano nel tour.',
      secrets: [
        {
          place: 'Plaza de Santa Ana',
          teaser:
            'Otto cani scuri sono allineati davanti alla cattedrale, e nessuno sa bene perché. Il loro segreto risale al nome romano di queste isole, e non ha nulla a che vedere con il piccolo uccello giallo.',
        },
        {
          place: 'Catedral de Santa Ana',
          teaser:
            'I più fotografano la severa facciata di pietra e proseguono. Entra, e le colonne si aprono sopra la tua testa come un palmeto pietrificato, un richiamo discreto al nome stesso della città.',
        },
        {
          place: 'Ermita de San Antonio Abad',
          teaser:
            'La città non nacque nella grande cattedrale. Quell’onore spetta a una piccola cappella semplice, lì vicino, dove la tradizione vuole che un certo marinaio abbia pregato prima di puntare a ovest nel 1492.',
        },
      ],
      storyTitle: 'La storia di Las Palmas de Gran Canaria',
      storyIntro: [
        'Las Palmas è la capitale di Gran Canaria e la città più grande delle Isole Canarie. Il suo cuore storico è diviso in due dall’antico burrone del Guiniguada: Vegueta, il nucleo coloniale lastricato dove la città fu fondata, e Triana, il quartiere dei mercanti e dei negozi, proprio di fronte. Quasi tutto ciò che merita nel centro storico si raggiunge con una comoda passeggiata.',
        'Tutto cominciò il 24 giugno 1478, quando Juan Rejón sbarcò alla foce del Guiniguada con una piccola truppa e fondò il Real de Las Palmas. La conquista di Gran Canaria richiese circa cinque anni di aspri combattimenti prima che l’isola fosse unita alla Corona di Castiglia nel 1483. La festa di San Giovanni, ogni giugno, segna ancora la data di fondazione.',
      ],
      storyBlocks: [
        {
          heading: 'Una prova per il Nuovo Mondo',
          paragraphs: [
            'Vegueta fu una delle prime città europee costruite su suolo atlantico e, per molti versi, una prova delle città coloniali che la Spagna avrebbe poi innalzato in tutte le Americhe. Nel 1492 Cristoforo Colombo gettò l’ancora qui per riparare il timone della Pinta prima di attraversare l’oceano, e fece di nuovo scalo al ritorno. La Casa de Colón, sul sito dell’antica residenza del governatore, porta ancora il suo nome.',
            'Al centro si erge la cattedrale di Santa Ana, iniziata intorno al 1500. Il suo nucleo gotico fu terminato verso il 1570 e poi rivestito di una severa facciata neoclassica in pietra nel Settecento, così l’edificio che vedi oggi è in sostanza gotico dentro e neoclassico fuori. Fu l’unica cattedrale delle Canarie fino al 1819, e le sue colonne interne a forma di palma richiamano il nome Las Palmas.',
          ],
        },
        {
          heading: 'Cani, scrittori e corsari',
          paragraphs: [
            'Il nome Isole Canarie viene probabilmente dal latino Canariae Insulae, le isole dei Cani, per i grandi cani che i primi visitatori vi segnalarono. Il celebre canarino prende nome dalle isole, non il contrario: la fila di cani davanti alla cattedrale è dunque, in un certo senso, la vera origine del nome.',
            'Triana diede alla Spagna uno dei suoi massimi romanzieri, Benito Pérez Galdós, nato qui nel 1843, la cui casa natale è oggi un museo. Il quartiere conobbe anche il pericolo dal mare: nel 1595 Sir Francis Drake fu respinto da queste coste, e nel 1599 una flotta olandese guidata da Pieter van der Does bruciò parte della città prima di essere scacciata.',
          ],
        },
        {
          heading: 'Cosa cercare',
          paragraphs: [
            'Comincia a Vegueta sulla Plaza de Santa Ana, tra la cattedrale e i cani, poi perditi tra i vicoli fino alla Casa de Colón e all’arte canaria dietro l’antica facciata del CAAM. Passa a Triana per la casa di Pérez Galdós e i negozi della Calle Triana. Quando vuoi sabbia e mare, la lunga spiaggia urbana di Las Canteras, riparata dal suo scoglio naturale, è poco più a nord.',
          ],
        },
      ],
      mapHeading: 'Dove si trova Las Palmas de Gran Canaria?',
      mapIntro:
        'Las Palmas occupa la punta nord-orientale di Gran Canaria, un’isola vulcanica rotondeggiante al centro dell’arcipelago spagnolo delle Canarie, al largo della costa nord-occidentale dell’Africa. È la capitale e il porto principale dell’isola, con i quartieri antichi di Vegueta e Triana appena dietro il porto.',
      bonusHeading: 'Tre cose che quasi nessun visitatore scopre',
      bonus: [
        {
          lead: 'L’uccello prende nome dai cani.',
          text:
            'Il canarino che immagini in gabbia prende nome da queste isole, che i Romani chiamarono isole dei Cani. I cani che custodiscono la cattedrale sono dunque, in un certo senso, i veri canarini.',
        },
        {
          lead: 'Una cattedrale che cambiò volto.',
          text:
            'Santa Ana nacque chiesa gotica intorno al 1500 e fu terminata all’interno verso il 1570, per ricevere poi una facciata neoclassica del tutto diversa nel Settecento. Entrando e uscendo, attraversi tre secoli di gusti mutevoli in una sola porta.',
        },
        {
          lead: 'Qui finì la fortuna di Drake.',
          text:
            'Il corsaro inglese che aveva terrorizzato i porti spagnoli fu respinto da Las Palmas nel 1595 da una difesa modesta e soprattutto civile. Proseguì verso i Caraibi e morì di malattia pochi mesi dopo.',
        },
      ],
      langHeading: 'Las Palmas nella tua lingua, tutte e 32',
      ctaHeading: 'Prendi la chiave di Las Palmas',
      ctaIntro:
        'Scegli le tue tappe, mettiti in cammino e lascia che la voce ti riveli ciò che tutti gli altri oltrepassano senza vedere.',
    },
    nl: {
      metaTitle: 'Audiotour Las Palmas de Gran Canaria · Zelfgeleid',
      metaDescription:
        'Een zelfgeleide gps-audiotour door de oude stad van Las Palmas de Gran Canaria. Loop Vegueta en Triana op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline en met AR-gids.',
      keywords:
        'audiotour las palmas de gran canaria, zelfgeleide tour las palmas, stadswandeling vegueta, bezienswaardigheden gran canaria, audiogids gran canaria',
      ogTitle: 'Audiotour Las Palmas de Gran Canaria | Fun Zone Tenerife',
      ogDescription:
        'Loop de oude wijken van Las Palmas de Gran Canaria op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline, met augmented-reality-gids.',
      heroIntro:
        'Een zelfgeleide gps-audiowandeling door de twee oude wijken van de hoofdstad van Gran Canaria, Vegueta en Triana. De plek waar de stad werd gesticht, Columbus’ Atlantische tussenstop en de honden die de eilanden hun naam gaven, verteld in je oor precies waar het gebeurde.',
      postcardHeading: 'Las Palmas, de versie die de ansichtkaarten weglaten',
      postcardIntro:
        'Niet de glossy plaatjes. De verhalen waar zelfs bewoners onwetend langslopen, gefluisterd in je oor op de exacte plek waar ze thuishoren. Hier zijn er drie. Veel meer wachten in de tour.',
      secrets: [
        {
          place: 'Plaza de Santa Ana',
          teaser:
            'Acht donkere honden zitten op een rij voor de kathedraal, en niemand weet precies waarom. Hun geheim reikt terug tot de Romeinse naam van deze eilanden, en heeft niets met het kleine gele vogeltje te maken.',
        },
        {
          place: 'Catedral de Santa Ana',
          teaser:
            'De meesten fotograferen de strenge stenen voorgevel en lopen door. Ga naar binnen en de zuilen waaieren boven je open als een versteend palmbos, een stille knipoog naar de naam van de stad zelf.',
        },
        {
          place: 'Ermita de San Antonio Abad',
          teaser:
            'De stad is niet in de grote kathedraal ontstaan. Die eer komt toe aan een klein, sober kapelletje vlakbij, waar de overlevering zegt dat een zekere zeeman bad voordat hij in 1492 koers naar het westen zette.',
        },
      ],
      storyTitle: 'Het verhaal van Las Palmas de Gran Canaria',
      storyIntro: [
        'Las Palmas is de hoofdstad van Gran Canaria en de grootste stad van de Canarische Eilanden. Het historische hart wordt in tweeën gedeeld door de oude ravijn van de Guiniguada: Vegueta, de geplaveide koloniale kern waar de stad werd gesticht, en Triana, de koopmans- en winkelwijk net aan de overkant. Vrijwel alles wat de moeite waard is in de oude stad ligt op loopafstand.',
        'Het begon op 24 juni 1478, toen Juan Rejón met een kleine troep aan land kwam bij de monding van de Guiniguada en het Real de Las Palmas stichtte. De verovering van Gran Canaria kostte zo’n vijf jaar harde strijd voordat het eiland in 1483 bij de Kroon van Castilië werd gevoegd. Het Sint-Jansfeest in juni markeert nog altijd de stichtingsdatum.',
      ],
      storyBlocks: [
        {
          heading: 'Een repetitie voor de Nieuwe Wereld',
          paragraphs: [
            'Vegueta was een van de eerste Europese steden op Atlantische bodem en in veel opzichten een repetitie voor de koloniale steden die Spanje later door heel Amerika zou bouwen. In 1492 ankerde Christoffel Columbus hier om het roer van de Pinta te herstellen voor hij de oceaan overstak, en deed op de terugweg opnieuw aan. De Casa de Colón, op de plek van de oude gouverneurswoning, draagt nog altijd zijn naam.',
            'In het midden verrijst de kathedraal van Santa Ana, rond 1500 begonnen. De gotische kern was rond 1570 klaar en kreeg in de achttiende eeuw een strenge neoklassieke stenen voorgevel, zodat het gebouw dat je nu ziet vanbinnen in wezen gotisch en vanbuiten neoklassiek is. Tot 1819 was het de enige kathedraal van de Canarische Eilanden, en de palmachtige binnenzuilen weerklinken de naam Las Palmas.',
          ],
        },
        {
          heading: 'Honden, schrijvers en kapers',
          paragraphs: [
            'De naam Canarische Eilanden komt waarschijnlijk van het Latijnse Canariae Insulae, de Eilanden van de Honden, naar de grote honden waarover vroege bezoekers berichtten. Het beroemde kanarievogeltje is naar de eilanden genoemd, niet andersom: de rij honden voor de kathedraal is dus in zekere zin de echte oorsprong van de naam.',
            'Triana schonk Spanje een van zijn grootste romanschrijvers, Benito Pérez Galdós, hier geboren in 1843, wiens geboortehuis nu een museum is. De wijk kende ook gevaar van zee: in 1595 werd Sir Francis Drake van deze kust teruggeslagen, en in 1599 brandde een Nederlandse vloot onder Pieter van der Does een deel van de stad plat voordat ze werd verjaagd.',
          ],
        },
        {
          heading: 'Waar je op moet letten',
          paragraphs: [
            'Begin in Vegueta op de Plaza de Santa Ana, tussen de kathedraal en de honden, en dwaal dan door de steegjes naar de Casa de Colón en de Canarische kunst achter de oude gevel van het CAAM. Steek over naar Triana voor het huis van Pérez Galdós en de winkels van de Calle Triana. Wil je zand en zee, dan ligt het lange stadsstrand Las Canteras, beschut door zijn natuurlijke rif, een stukje noordelijker.',
          ],
        },
      ],
      mapHeading: 'Waar ligt Las Palmas de Gran Canaria?',
      mapIntro:
        'Las Palmas ligt op de noordoostpunt van Gran Canaria, een rond vulkanisch eiland in het midden van de Spaanse Canarische archipel, voor de noordwestkust van Afrika. Het is de hoofdstad en de belangrijkste haven van het eiland, met de oude wijken Vegueta en Triana net achter de haven.',
      bonusHeading: 'Drie dingen die bijna geen bezoeker ontdekt',
      bonus: [
        {
          lead: 'De vogel is naar de honden genoemd.',
          text:
            'De kanarie die je je in een kooi voorstelt, dankt zijn naam aan deze eilanden, die de Romeinen de Eilanden van de Honden noemden. De honden die de kathedraal bewaken zijn dus in zekere zin de echte kanaries.',
        },
        {
          lead: 'Een kathedraal die van gezicht veranderde.',
          text:
            'Santa Ana begon rond 1500 als gotische kerk en was vanbinnen rond 1570 af, maar kreeg in de achttiende eeuw een heel andere, neoklassieke voorgevel. Wie naar binnen en weer naar buiten loopt, doorkruist in één deuropening drie eeuwen wisselende smaak.',
        },
        {
          lead: 'Hier eindigde Drakes geluk.',
          text:
            'De Engelse kaper die Spaanse havens had geterroriseerd, werd in 1595 door een bescheiden, grotendeels burgerlijke verdediging uit Las Palmas teruggeslagen. Hij voer door naar de Caraïben en was binnen maanden aan ziekte bezweken.',
        },
      ],
      langHeading: 'Las Palmas in jouw taal, alle 32',
      ctaHeading: 'Haal de sleutel tot Las Palmas',
      ctaIntro:
        'Kies je stops, begin te lopen en laat de stem onthullen wat iedereen straal voorbijloopt.',
    },
  },
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
    fr: {
      metaTitle: 'Visite audio de Santa Cruz de Tenerife · En autonomie',
      metaDescription:
        'Une visite audio GPS en autonomie de Santa Cruz de Tenerife. Parcourez la capitale à votre rythme avec des récits en voix native dans 32 langues, hors ligne et avec un guide en réalité augmentée.',
      keywords:
        'visite audio santa cruz tenerife, visite autoguidée santa cruz, que faire à santa cruz tenerife, visite à pied santa cruz, audioguide tenerife',
      ogTitle: 'Visite audio de Santa Cruz de Tenerife | Fun Zone Tenerife',
      ogDescription:
        'Parcourez Santa Cruz de Tenerife à votre rythme avec des récits en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée.',
      heroIntro:
        'Une balade audio GPS en autonomie à travers la capitale de l’île. Drame volcanique, commerce atlantique et coins tranquilles que les foules de croisiéristes n’atteignent jamais, racontés à votre oreille là où tout s’est passé.',
      postcardHeading: 'Santa Cruz, la version que les cartes postales oublient',
      postcardIntro:
        'Pas les clichés sur papier glacé. Les histoires que même les habitants longent sans les connaître, murmurées à votre oreille à l’endroit exact où elles ont eu lieu. En voici trois. Beaucoup d’autres vous attendent dans la visite.',
      secrets: [
        {
          place: 'Plaza de España',
          teaser:
            'La plus grande place des îles Canaries cache un secret englouti sous l’eau : les vestiges enfouis d’une forteresse qui décidait autrefois qui entrait dans la ville et qui n’entrait pas.',
        },
        {
          place: 'Playa de Las Teresitas',
          teaser:
            'Ce sable doré digne d’une carte postale n’a rien de local. Il a traversé la mer par cargaisons entières depuis un autre continent, et la raison en dit long sur cette ville.',
        },
        {
          place: 'Auditorio de Tenerife',
          teaser:
            'La grande vague blanche du front de mer semble changer de forme à mesure que vous tournez autour. Placez-vous au bon endroit et ce n’est plus un bâtiment, mais tout autre chose.',
        },
      ],
      storyTitle: 'L’histoire de Santa Cruz de Tenerife',
      storyIntro: [
        'Santa Cruz est le cœur actif de Tenerife, une ville portuaire de la côte nord-est où paquebots, porte-conteneurs et ferries accostent depuis des siècles. Tandis que le sud de l’île se construisait autour des transats et des complexes hôteliers, la capitale a grandi autour du commerce, et cela se voit. Des façades coloniales côtoient un design moderne audacieux, et presque tout ce qui mérite d’être vu est assez proche pour se faire à pied.',
        'Tout commence en 1494, lorsque le conquérant castillan Alonso Fernández de Lugo débarque et plante une croix d’argent sur la plage. Cette croix donne son nom au lieu, Santa Cruz, la sainte croix. Longtemps, ce ne fut qu’un débarcadère au service de la véritable capitale de l’intérieur, San Cristóbal de La Laguna, sur les hauteurs plus fraîches.',
      ],
      storyBlocks: [
        {
          heading: 'D’un débarcadère à une capitale',
          paragraphs: [
            'Tout a changé en 1706. Une éruption volcanique a englouti le port de Garachico, jusque-là le plus actif de l’île, et le trafic maritime s’est déplacé vers le sud, à Santa Cruz, presque du jour au lendemain. Dès 1723, elle était la principale ville de l’île, et en 1833 elle fut désignée capitale de tout l’archipel des Canaries, un titre qu’elle détint seule jusqu’à ce qu’elle commence à le partager avec Las Palmas de Gran Canaria en 1927.',
            'La ville s’est aussi taillé une étrange note de bas de page dans l’histoire navale britannique. En 1797, l’amiral Horatio Nelson mena un assaut contre le port et échoua lourdement, y perdant son bras droit sous un boulet de canon. Santa Cruz célèbre encore cette victoire chaque année, et la défense de la ville reste une fierté locale. Pour une célébrité plus légère, son Carnaval de février est l’un des plus grands au monde, rivalisé seulement par celui de Rio de Janeiro.',
          ],
        },
        {
          heading: 'À ne pas manquer',
          paragraphs: [
            'Commencez par la Plaza de España, la vaste place du front de mer avec son lac circulaire, et souvenez-vous que le château de San Cristóbal, du XVIe siècle, repose sous vos pieds. À quelques pas, l’Auditorio de Tenerife s’élève comme une vague figée, œuvre de l’architecte Santiago Calatrava et désormais symbole de l’île elle-même.',
            'Pour la verdure et le calme, le Parque García Sanabria est le plus grand parc urbain des Canaries, plein de sculptures, de plantations exotiques et d’une célèbre horloge fleurie. Les amateurs d’histoire trouveront le musée MUNA, où sont conservées les momies des Guanches, le peuple autochtone de l’île, tandis que le centre d’art TEA gère le volet contemporain. Terminez au Mercado de Nuestra Señora de África pour la cuisine locale, ou filez à la Playa de Las Teresitas quand vous aurez envie de plage.',
          ],
        },
        {
          heading: 'Quand y aller',
          paragraphs: [
            'La capitale est chaude et subtropicale toute l’année. Pour marcher confortablement avec peu de pluie, visez mars à mai ou septembre à novembre. Si vous voulez le spectacle, venez pour le Carnaval en février, même si les rues sont bondées et les chambres réservées des mois à l’avance.',
          ],
        },
      ],
      mapHeading: 'Où se trouve Santa Cruz de Tenerife ?',
      mapIntro:
        'Santa Cruz se trouve sur la côte nord-est de Tenerife, la plus grande des îles Canaries espagnoles, au large de la côte nord-ouest de l’Afrique. C’est la capitale de l’île et son principal port, à environ une heure de route des stations balnéaires du sud.',
      bonusHeading: 'Trois choses que la plupart des visiteurs ignorent',
      bonus: [
        {
          lead: 'La plage est importée.',
          text:
            'Le sable doré de Las Teresitas ne s’est pas échoué ici. Les plages de Tenerife sont faites de gravier volcanique noir ; dans les années 1970, des millions de sacs de sable clair ont donc été acheminés depuis le Sahara pour créer le rivage de carte postale que vous voyez aujourd’hui.',
        },
        {
          lead: 'Une horloge offerte.',
          text:
            'L’horloge fleurie du Parque García Sanabria donne l’heure exacte et fut un cadeau d’un autre pays, égrenant discrètement les minutes parmi les massifs depuis des décennies.',
        },
        {
          lead: 'Des momies au musée.',
          text:
            'Bien avant l’arrivée des Espagnols, les Guanches momifiaient leurs morts. Plusieurs d’entre eux reposent aujourd’hui dans le musée d’archéologie de la ville, un lien direct avec une culture insulaire disparue il y a cinq siècles.',
        },
      ],
      langHeading: 'Santa Cruz dans votre langue, les 32',
      ctaHeading: 'Obtenez la clé de Santa Cruz',
      ctaIntro:
        'Choisissez vos étapes, commencez à marcher et laissez la voix révéler ce que tous les autres dépassent sans le voir.',
    },
    es: {
      metaTitle: 'Audioguía de Santa Cruz de Tenerife · Ruta autoguiada',
      metaDescription:
        'Una audioguía GPS autoguiada de Santa Cruz de Tenerife. Recorre la capital a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión y con un guía de realidad aumentada.',
      keywords:
        'audioguía santa cruz de tenerife, ruta autoguiada santa cruz, qué ver en santa cruz tenerife, ruta a pie santa cruz, audioguía tenerife',
      ogTitle: 'Audioguía de Santa Cruz de Tenerife | Fun Zone Tenerife',
      ogDescription:
        'Recorre Santa Cruz de Tenerife a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión, con un guía de realidad aumentada.',
      heroIntro:
        'Un paseo con audioguía GPS autoguiada por la capital de la isla. Drama volcánico, comercio atlántico y rincones tranquilos a los que las multitudes de cruceros nunca llegan, narrados a tu oído justo donde ocurrió todo.',
      postcardHeading: 'Santa Cruz, la versión que se dejan las postales',
      postcardIntro:
        'No las fotos de revista. Las historias que hasta los vecinos pasan de largo sin saberlo, susurradas al oído en el lugar exacto al que pertenecen. Aquí tienes tres. Muchas más te esperan dentro del tour.',
      secrets: [
        {
          place: 'Plaza de España',
          teaser:
            'La plaza más grande de Canarias esconde un secreto hundido bajo el agua: los restos enterrados de una fortaleza que antaño decidía quién entraba en la ciudad y quién no.',
        },
        {
          place: 'Playa de Las Teresitas',
          teaser:
            'Esa arena dorada de postal no es nada local. Cruzó el mar a bordo de barcos enteros desde otro continente, y el motivo dice mucho sobre esta ciudad.',
        },
        {
          place: 'Auditorio de Tenerife',
          teaser:
            'La gran ola blanca del paseo marítimo parece cambiar de forma según te mueves a su alrededor. Colócate en el punto justo y deja de ser un edificio para convertirse en otra cosa.',
        },
      ],
      storyTitle: 'La historia de Santa Cruz de Tenerife',
      storyIntro: [
        'Santa Cruz es el corazón trabajador de Tenerife, una ciudad portuaria de la costa noreste donde cruceros, portacontenedores y ferris atracan desde hace siglos. Mientras el sur de la isla se construía en torno a las hamacas y los complejos turísticos, la capital creció en torno al comercio, y se nota. Fachadas coloniales conviven con un diseño moderno y atrevido, y casi todo lo que merece la pena ver queda lo bastante cerca para hacerlo a pie.',
        'Todo empezó en 1494, cuando el conquistador castellano Alonso Fernández de Lugo desembarcó y plantó una cruz de plata en la playa. Esa cruz dio nombre al lugar, Santa Cruz, la santa cruz. Durante mucho tiempo no fue más que un embarcadero al servicio de la verdadera capital del interior, San Cristóbal de La Laguna, en las colinas más frescas.',
      ],
      storyBlocks: [
        {
          heading: 'De embarcadero a capital',
          paragraphs: [
            'Todo cambió en 1706. Una erupción volcánica se tragó el puerto de Garachico, hasta entonces el más activo de la isla, y el tráfico marítimo se trasladó al sur, a Santa Cruz, casi de la noche a la mañana. Para 1723 era la principal población de la isla, y en 1833 fue nombrada capital de todo el archipiélago canario, un título que ostentó en solitario hasta que empezó a compartirlo con Las Palmas de Gran Canaria en 1927.',
            'La ciudad también se ganó una curiosa nota a pie de página en la historia naval británica. En 1797 el almirante Horatio Nelson dirigió un asalto contra el puerto y fracasó estrepitosamente, perdiendo en el intento su brazo derecho por el impacto de un cañón. Santa Cruz aún celebra la victoria cada año, y la defensa de la ciudad sigue siendo un orgullo local. Para una fama más ligera, su Carnaval de febrero es uno de los mayores del mundo, solo rivalizado por el de Río de Janeiro.',
          ],
        },
        {
          heading: 'En qué fijarse',
          paragraphs: [
            'Empieza en la Plaza de España, la amplia plaza frente al mar con su lago circular, y recuerda que el castillo de San Cristóbal, del siglo XVI, descansa bajo tus pies. A pocos pasos, el Auditorio de Tenerife se alza como una ola congelada, obra del arquitecto Santiago Calatrava y hoy símbolo de la propia isla.',
            'Para verde y tranquilidad, el Parque García Sanabria es el mayor parque urbano de Canarias, lleno de esculturas, plantaciones exóticas y un famoso reloj de flores. Los amantes de la historia encontrarán el museo MUNA, donde se conservan las momias de los guanches, el pueblo aborigen de la isla, mientras que el centro de arte TEA se ocupa de lo contemporáneo. Termina en el Mercado de Nuestra Señora de África para probar la comida local, o acércate a la Playa de Las Teresitas cuando quieras playa.',
          ],
        },
        {
          heading: 'Cuándo ir',
          paragraphs: [
            'La capital es cálida y subtropical todo el año. Para caminar a gusto con poca lluvia, apunta a marzo-mayo o septiembre-noviembre. Si quieres el espectáculo, ven al Carnaval en febrero, aunque las calles se llenan y las habitaciones se agotan con meses de antelación.',
          ],
        },
      ],
      mapHeading: '¿Dónde está Santa Cruz de Tenerife?',
      mapIntro:
        'Santa Cruz se encuentra en la costa noreste de Tenerife, la mayor de las islas Canarias españolas, frente a la costa noroeste de África. Es la capital de la isla y su principal puerto, a cosa de una hora por carretera de los núcleos turísticos del sur.',
      bonusHeading: 'Tres cosas que casi ningún visitante llega a saber',
      bonus: [
        {
          lead: 'La playa es importada.',
          text:
            'La arena dorada de Las Teresitas no llegó hasta aquí por sí sola. Las playas propias de Tenerife son de grava volcánica negra, así que en los años setenta se trajeron millones de sacos de arena clara desde el Sáhara para crear la orilla de postal que ves hoy.',
        },
        {
          lead: 'Un reloj de regalo.',
          text:
            'El reloj de flores del Parque García Sanabria marca la hora real y fue un regalo de otro país, latiendo discretamente entre los parterres durante décadas.',
        },
        {
          lead: 'Momias en el museo.',
          text:
            'Mucho antes de que llegaran los españoles, los guanches momificaban a sus muertos. Varios de ellos reposan hoy en el museo de arqueología de la ciudad, un hilo directo hasta una cultura insular desaparecida hace cinco siglos.',
        },
      ],
      langHeading: 'Santa Cruz en tu idioma, los 32',
      ctaHeading: 'Consigue la llave de Santa Cruz',
      ctaIntro:
        'Elige tus paradas, empieza a caminar y deja que la voz te revele lo que todos los demás pasan de largo.',
    },
    de: {
      metaTitle: 'Audioguide Santa Cruz de Tenerife · Rundgang auf eigene Faust',
      metaDescription:
        'Ein selbstgeführter GPS-Audioguide durch Santa Cruz de Tenerife. Erkunden Sie die Hauptstadt in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline und mit AR-Guide.',
      keywords:
        'audioguide santa cruz de teneriffa, selbstgeführte tour santa cruz, santa cruz teneriffa sehenswürdigkeiten, stadtrundgang santa cruz, audioguide teneriffa',
      ogTitle: 'Audioguide Santa Cruz de Tenerife | Fun Zone Tenerife',
      ogDescription:
        'Erkunden Sie Santa Cruz de Tenerife in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide.',
      heroIntro:
        'Ein selbstgeführter GPS-Audiospaziergang durch die Hauptstadt der Insel. Vulkanische Dramatik, atlantischer Handel und stille Ecken, welche die Kreuzfahrtmassen nie erreichen, erzählt in Ihrem Ohr genau dort, wo alles geschah.',
      postcardHeading: 'Santa Cruz, die Version, welche die Postkarten weglassen',
      postcardIntro:
        'Nicht die Hochglanzbilder. Die Geschichten, an denen selbst Einheimische ahnungslos vorbeigehen, Ihnen ins Ohr geflüstert, genau an dem Ort, an den sie gehören. Hier sind drei. Viele weitere warten in der Tour.',
      secrets: [
        {
          place: 'Plaza de España',
          teaser:
            'Der größte Platz der Kanarischen Inseln verbirgt ein versunkenes Geheimnis unter dem Wasser: die begrabenen Mauern einer Festung, die einst entschied, wer in die Stadt gelangte und wer nicht.',
        },
        {
          place: 'Playa de Las Teresitas',
          teaser:
            'Dieser postkartenschöne goldene Sand ist überhaupt nicht von hier. Er kam schiffsladungsweise von einem anderen Kontinent über das Meer, und der Grund dafür sagt viel über diese Stadt.',
        },
        {
          place: 'Auditorio de Tenerife',
          teaser:
            'Die große weiße Welle an der Uferpromenade scheint ihre Form zu ändern, während Sie sie umrunden. Stellen Sie sich an die richtige Stelle, und sie ist kein Gebäude mehr, sondern etwas anderes.',
        },
      ],
      storyTitle: 'Die Geschichte von Santa Cruz de Tenerife',
      storyIntro: [
        'Santa Cruz ist das arbeitende Herz Teneriffas, eine Hafenstadt an der Nordostküste, in der seit Jahrhunderten Kreuzfahrtschiffe, Containerschiffe und Fähren anlegen. Während sich der Süden der Insel um Sonnenliegen und Resorts herum aufbaute, wuchs die Hauptstadt um den Handel, und das sieht man. Koloniale Fassaden stehen neben kühnem modernem Design, und fast alles Sehenswerte liegt nah genug, um es zu Fuß zu erreichen.',
        'Es begann 1494, als der kastilische Eroberer Alonso Fernández de Lugo an Land ging und ein silbernes Kreuz am Strand aufstellte. Dieses Kreuz gab dem Ort seinen Namen, Santa Cruz, das heilige Kreuz. Lange Zeit war es nur ein Anlegeplatz im Dienst der eigentlichen Hauptstadt im Landesinneren, San Cristóbal de La Laguna, oben in den kühleren Hügeln.',
      ],
      storyBlocks: [
        {
          heading: 'Vom Anlegeplatz zur Hauptstadt',
          paragraphs: [
            'Alles änderte sich 1706. Ein Vulkanausbruch verschlang den Hafen von Garachico, bis dahin der geschäftigste der Insel, und der Seeverkehr verlagerte sich fast über Nacht südwärts nach Santa Cruz. Bis 1723 war es die führende Stadt der Insel, und 1833 wurde es zur Hauptstadt des gesamten kanarischen Archipels ernannt, ein Titel, den es allein trug, bis es ihn ab 1927 mit Las Palmas de Gran Canaria zu teilen begann.',
            'Die Stadt verdiente sich auch eine seltsame Fußnote in der britischen Marinegeschichte. 1797 führte Admiral Horatio Nelson einen Angriff auf den Hafen und scheiterte schwer, wobei er seinen rechten Arm durch einen Kanonenschuss verlor. Santa Cruz feiert den Sieg bis heute jedes Jahr, und die Verteidigung der Stadt bleibt ein lokaler Stolz. Für leichteren Ruhm: Ihr Karneval im Februar ist einer der größten der Welt, nur vom Karneval in Rio de Janeiro übertroffen.',
          ],
        },
        {
          heading: 'Worauf Sie achten sollten',
          paragraphs: [
            'Beginnen Sie an der Plaza de España, dem weiten Platz am Meer mit seinem runden See, und denken Sie daran, dass das Kastell San Cristóbal aus dem 16. Jahrhundert unter Ihren Füßen ruht. Nur ein paar Schritte entfernt erhebt sich das Auditorio de Tenerife wie eine erstarrte Welle, ein Werk des Architekten Santiago Calatrava und heute ein Wahrzeichen der Insel selbst.',
            'Für Grün und Ruhe ist der Parque García Sanabria der größte Stadtpark der Kanaren, voller Skulpturen, exotischer Bepflanzung und einer berühmten Blumenuhr. Geschichtsfreunde sollten das Museum MUNA aufsuchen, wo die Mumien der Guanchen, der Ureinwohner der Insel, aufbewahrt werden, während das Kunstzentrum TEA die zeitgenössische Seite übernimmt. Lassen Sie den Mercado de Nuestra Señora de África für lokale Küche den Abschluss bilden, oder fahren Sie zur Playa de Las Teresitas, wenn Ihnen nach Strand ist.',
          ],
        },
        {
          heading: 'Wann Sie kommen sollten',
          paragraphs: [
            'Die Hauptstadt ist das ganze Jahr über warm und subtropisch. Für bequemes Gehen mit wenig Regen zielen Sie auf März bis Mai oder September bis November. Wenn Sie das Spektakel wollen, kommen Sie im Februar zum Karneval, auch wenn die Straßen voll sind und die Zimmer Monate im Voraus ausgebucht werden.',
          ],
        },
      ],
      mapHeading: 'Wo liegt Santa Cruz de Tenerife?',
      mapIntro:
        'Santa Cruz liegt an der Nordostküste Teneriffas, der größten der spanischen Kanarischen Inseln, vor der Nordwestküste Afrikas. Es ist die Hauptstadt der Insel und ihr wichtigster Hafen, etwa eine Autostunde von den südlichen Urlaubsorten entfernt.',
      bonusHeading: 'Drei Dinge, die die meisten Besucher nie erfahren',
      bonus: [
        {
          lead: 'Der Strand ist importiert.',
          text:
            'Der goldene Sand von Las Teresitas wurde nicht hier angespült. Teneriffas eigene Strände bestehen aus schwarzem Vulkangrus, also wurden in den 1970er-Jahren Millionen Säcke hellen Sandes aus der Sahara herangeschifft, um die Postkartenküste zu schaffen, die Sie heute sehen.',
        },
        {
          lead: 'Eine Uhr als Geschenk.',
          text:
            'Die Blumenuhr im Parque García Sanabria zeigt die echte Zeit und war ein Geschenk aus einem anderen Land, das seit Jahrzehnten leise zwischen den Beeten tickt.',
        },
        {
          lead: 'Mumien im Museum.',
          text:
            'Lange bevor die Spanier kamen, mumifizierten die Guanchen ihre Toten. Mehrere von ihnen ruhen heute im Archäologiemuseum der Stadt, eine direkte Linie zurück zu einer Inselkultur, die vor fünf Jahrhunderten verschwand.',
        },
      ],
      langHeading: 'Santa Cruz in Ihrer Sprache, alle 32',
      ctaHeading: 'Holen Sie sich den Schlüssel zu Santa Cruz',
      ctaIntro:
        'Wählen Sie Ihre Stationen, gehen Sie los und lassen Sie die Stimme enthüllen, woran alle anderen achtlos vorbeigehen.',
    },
    it: {
      metaTitle: 'Audioguida di Santa Cruz de Tenerife · Tour in autonomia',
      metaDescription:
        'Un tour audio GPS in autonomia di Santa Cruz de Tenerife. Scopri la capitale al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline e con guida in realtà aumentata.',
      keywords:
        'audioguida santa cruz de tenerife, tour autoguidato santa cruz, cosa vedere a santa cruz tenerife, tour a piedi santa cruz, audioguida tenerife',
      ogTitle: 'Audioguida di Santa Cruz de Tenerife | Fun Zone Tenerife',
      ogDescription:
        'Scopri Santa Cruz de Tenerife al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline, con una guida in realtà aumentata.',
      heroIntro:
        'Una passeggiata con audioguida GPS in autonomia nella capitale dell’isola. Dramma vulcanico, commercio atlantico e angoli tranquilli che la folla delle crociere non raggiunge mai, raccontati al tuo orecchio proprio dove è successo tutto.',
      postcardHeading: 'Santa Cruz, la versione che le cartoline tralasciano',
      postcardIntro:
        'Non gli scatti patinati. Le storie davanti a cui persino gli abitanti passano senza saperlo, sussurrate al tuo orecchio nel punto esatto a cui appartengono. Eccone tre. Molte altre ti aspettano nel tour.',
      secrets: [
        {
          place: 'Plaza de España',
          teaser:
            'La piazza più grande delle Canarie nasconde un segreto sommerso sotto l’acqua: i resti sepolti di una fortezza che un tempo decideva chi entrava in città e chi no.',
        },
        {
          place: 'Playa de Las Teresitas',
          teaser:
            'Quella sabbia dorata da cartolina non è affatto locale. Ha attraversato il mare a intere navi da un altro continente, e il motivo dice molto su questa città.',
        },
        {
          place: 'Auditorio de Tenerife',
          teaser:
            'La grande onda bianca sul lungomare sembra cambiare forma man mano che le giri intorno. Mettiti nel punto giusto e smette di essere un edificio per diventare altro.',
        },
      ],
      storyTitle: 'La storia di Santa Cruz de Tenerife',
      storyIntro: [
        'Santa Cruz è il cuore operoso di Tenerife, una città portuale sulla costa nord-orientale dove navi da crociera, portacontainer e traghetti attraccano da secoli. Mentre il sud dell’isola si costruiva attorno a lettini e resort, la capitale è cresciuta attorno al commercio, e si vede. Facciate coloniali convivono con un design moderno e audace, e quasi tutto ciò che vale la pena vedere è abbastanza vicino da raggiungere a piedi.',
        'Cominciò nel 1494, quando il conquistatore castigliano Alonso Fernández de Lugo sbarcò e piantò una croce d’argento sulla spiaggia. Quella croce diede il nome al luogo, Santa Cruz, la santa croce. A lungo fu solo un approdo al servizio della vera capitale dell’entroterra, San Cristóbal de La Laguna, sulle colline più fresche.',
      ],
      storyBlocks: [
        {
          heading: 'Da approdo a capitale',
          paragraphs: [
            'Tutto cambiò nel 1706. Un’eruzione vulcanica inghiottì il porto di Garachico, fino ad allora il più attivo dell’isola, e il traffico marittimo si spostò a sud, a Santa Cruz, quasi da un giorno all’altro. Nel 1723 era la principale città dell’isola, e nel 1833 fu nominata capitale dell’intero arcipelago canario, un titolo che mantenne da sola finché iniziò a condividerlo con Las Palmas de Gran Canaria nel 1927.',
            'La città si guadagnò anche una curiosa nota nella storia navale britannica. Nel 1797 l’ammiraglio Horatio Nelson guidò un assalto al porto e fallì clamorosamente, perdendo nell’impresa il braccio destro per un colpo di cannone. Santa Cruz celebra ancora la vittoria ogni anno, e la difesa della città resta un orgoglio locale. Per una fama più leggera, il suo Carnevale di febbraio è uno dei più grandi al mondo, rivaleggiato solo da quello di Rio de Janeiro.',
          ],
        },
        {
          heading: 'Cosa notare',
          paragraphs: [
            'Inizia dalla Plaza de España, l’ampia piazza sul mare con il suo lago circolare, e ricorda che il castello di San Cristóbal, del Cinquecento, giace sotto i tuoi piedi. A pochi passi, l’Auditorio de Tenerife si erge come un’onda congelata, opera dell’architetto Santiago Calatrava e oggi simbolo dell’isola stessa.',
            'Per verde e quiete, il Parque García Sanabria è il più grande parco cittadino delle Canarie, pieno di sculture, piante esotiche e un celebre orologio floreale. Gli amanti della storia cerchino il museo MUNA, dove sono custodite le mummie dei Guanci, il popolo indigeno dell’isola, mentre il centro d’arte TEA si occupa del contemporaneo. Concludi al Mercado de Nuestra Señora de África per il cibo locale, oppure raggiungi la Playa de Las Teresitas quando vuoi la spiaggia.',
          ],
        },
        {
          heading: 'Quando andare',
          paragraphs: [
            'La capitale è calda e subtropicale tutto l’anno. Per camminare comodamente con poca pioggia, punta a marzo-maggio o settembre-novembre. Se vuoi lo spettacolo, vieni al Carnevale a febbraio, anche se le strade si riempiono e le camere si esauriscono con mesi di anticipo.',
          ],
        },
      ],
      mapHeading: 'Dove si trova Santa Cruz de Tenerife?',
      mapIntro:
        'Santa Cruz si trova sulla costa nord-orientale di Tenerife, la più grande delle isole Canarie spagnole, al largo della costa nord-occidentale dell’Africa. È la capitale dell’isola e il suo principale porto, a circa un’ora di strada dalle località balneari del sud.',
      bonusHeading: 'Tre cose che quasi nessun visitatore scopre',
      bonus: [
        {
          lead: 'La spiaggia è importata.',
          text:
            'La sabbia dorata di Las Teresitas non è arrivata qui da sola. Le spiagge di Tenerife sono di ghiaia vulcanica nera, così negli anni Settanta furono trasportati milioni di sacchi di sabbia chiara dal Sahara per creare la riva da cartolina che vedi oggi.',
        },
        {
          lead: 'Un orologio in dono.',
          text:
            'L’orologio floreale del Parque García Sanabria segna l’ora reale ed è stato un regalo di un altro Paese, che ticchetta discreto tra le aiuole da decenni.',
        },
        {
          lead: 'Mummie al museo.',
          text:
            'Molto prima dell’arrivo degli spagnoli, i Guanci mummificavano i loro morti. Diversi di loro riposano oggi nel museo archeologico della città, un filo diretto verso una cultura insulare scomparsa cinque secoli fa.',
        },
      ],
      langHeading: 'Santa Cruz nella tua lingua, tutte e 32',
      ctaHeading: 'Ottieni la chiave di Santa Cruz',
      ctaIntro:
        'Scegli le tue tappe, inizia a camminare e lascia che la voce ti riveli ciò che tutti gli altri superano senza notarlo.',
    },
    nl: {
      metaTitle: 'Audiotour Santa Cruz de Tenerife · Wandeling op eigen houtje',
      metaDescription:
        'Een zelfgeleide gps-audiotour van Santa Cruz de Tenerife. Ontdek de hoofdstad op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline en met een AR-gids.',
      keywords:
        'audiotour santa cruz de tenerife, zelfgeleide tour santa cruz, bezienswaardigheden santa cruz tenerife, stadswandeling santa cruz, audiogids tenerife',
      ogTitle: 'Audiotour Santa Cruz de Tenerife | Fun Zone Tenerife',
      ogDescription:
        'Ontdek Santa Cruz de Tenerife op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline, met een augmented-reality-gids.',
      heroIntro:
        'Een zelfgeleide gps-audiowandeling door de hoofdstad van het eiland. Vulkanisch drama, Atlantische handel en stille hoekjes waar de cruisemassa nooit komt, verteld in je oor precies waar het allemaal gebeurde.',
      postcardHeading: 'Santa Cruz, de versie die de ansichtkaarten weglaten',
      postcardIntro:
        'Niet de glossy plaatjes. De verhalen waar zelfs de bewoners onwetend langslopen, in je oor gefluisterd op precies de plek waar ze thuishoren. Hier zijn er drie. Veel meer wachten in de tour.',
      secrets: [
        {
          place: 'Plaza de España',
          teaser:
            'Het grootste plein van de Canarische Eilanden verbergt een gezonken geheim onder het water: de begraven muren van een fort dat ooit bepaalde wie de stad in mocht en wie niet.',
        },
        {
          place: 'Playa de Las Teresitas',
          teaser:
            'Dat ansichtkaartperfecte gouden zand is helemaal niet van hier. Het stak scheepsladingen tegelijk de zee over vanaf een heel ander continent, en de reden zegt veel over deze stad.',
        },
        {
          place: 'Auditorio de Tenerife',
          teaser:
            'De grote witte golf aan de boulevard lijkt van vorm te veranderen terwijl je eromheen loopt. Ga op de juiste plek staan en het is geen gebouw meer, maar iets anders.',
        },
      ],
      storyTitle: 'De geschiedenis van Santa Cruz de Tenerife',
      storyIntro: [
        'Santa Cruz is het werkende hart van Tenerife, een havenstad aan de noordoostkust waar cruiseschepen, containerschepen en veerboten al eeuwenlang aanleggen. Terwijl het zuiden van het eiland zich rond ligbedden en resorts opbouwde, groeide de hoofdstad rond de handel, en dat is te zien. Koloniale gevels staan naast gedurfd modern design, en bijna alles wat de moeite waard is, ligt dicht genoeg om te voet te bereiken.',
        'Het begon in 1494, toen de Castiliaanse veroveraar Alonso Fernández de Lugo aan land ging en een zilveren kruis op het strand plantte. Dat kruis gaf de plek haar naam, Santa Cruz, het heilige kruis. Lange tijd was het slechts een aanlegplaats ten dienste van de echte hoofdstad in het binnenland, San Cristóbal de La Laguna, hoog in de koelere heuvels.',
      ],
      storyBlocks: [
        {
          heading: 'Van aanlegplaats tot hoofdstad',
          paragraphs: [
            'Alles veranderde in 1706. Een vulkaanuitbarsting verzwolg de haven van Garachico, tot dan de drukste van het eiland, en het zeeverkeer verschoof vrijwel van de ene op de andere dag zuidwaarts naar Santa Cruz. In 1723 was het de belangrijkste stad van het eiland, en in 1833 werd het tot hoofdstad van de hele Canarische archipel benoemd, een titel die het alleen droeg totdat het die vanaf 1927 begon te delen met Las Palmas de Gran Canaria.',
            'De stad verdiende ook een vreemde voetnoot in de Britse marinegeschiedenis. In 1797 leidde admiraal Horatio Nelson een aanval op de haven en faalde jammerlijk, waarbij hij zijn rechterarm verloor door een kanonschot. Santa Cruz viert de overwinning nog elk jaar, en de verdediging van de stad blijft een lokale trots. Voor lichtere roem: het carnaval in februari is een van de grootste ter wereld, alleen geëvenaard door dat van Rio de Janeiro.',
          ],
        },
        {
          heading: 'Waar je op moet letten',
          paragraphs: [
            'Begin op de Plaza de España, het weidse plein aan zee met zijn ronde meer, en bedenk dat het zestiende-eeuwse kasteel van San Cristóbal onder je voeten ligt. Een paar stappen verderop rijst het Auditorio de Tenerife op als een bevroren golf, het werk van architect Santiago Calatrava en inmiddels een symbool van het eiland zelf.',
            'Voor groen en rust is het Parque García Sanabria het grootste stadspark van de Canarische Eilanden, vol beeldhouwwerk, exotische beplanting en een beroemde bloemenklok. Liefhebbers van geschiedenis moeten het MUNA-museum opzoeken, waar de mummies van de Guanchen, de oorspronkelijke bewoners van het eiland, worden bewaard, terwijl het kunstcentrum TEA het hedendaagse voor zijn rekening neemt. Eindig bij de Mercado de Nuestra Señora de África voor lokaal eten, of rijd naar de Playa de Las Teresitas als je zin hebt in strand.',
          ],
        },
        {
          heading: 'Wanneer te gaan',
          paragraphs: [
            'De hoofdstad is het hele jaar warm en subtropisch. Voor comfortabel wandelen met weinig regen mik je op maart tot mei of september tot november. Wil je het spektakel, kom dan voor het carnaval in februari, al zijn de straten dan vol en zijn kamers maanden van tevoren uitverkocht.',
          ],
        },
      ],
      mapHeading: 'Waar ligt Santa Cruz de Tenerife?',
      mapIntro:
        'Santa Cruz ligt aan de noordoostkust van Tenerife, het grootste van de Spaanse Canarische Eilanden, voor de noordwestkust van Afrika. Het is de hoofdstad van het eiland en de belangrijkste haven, ongeveer een uur rijden van de zuidelijke badplaatsen.',
      bonusHeading: 'Drie dingen die de meeste bezoekers nooit te weten komen',
      bonus: [
        {
          lead: 'Het strand is geïmporteerd.',
          text:
            'Het gouden zand van Las Teresitas is hier niet aangespoeld. De eigen stranden van Tenerife bestaan uit zwart vulkanisch gruis, dus in de jaren zeventig werden miljoenen zakken licht zand aangevoerd uit de Sahara om de ansichtkaartkust te maken die je vandaag ziet.',
        },
        {
          lead: 'Een klok die een geschenk was.',
          text:
            'De bloemenklok in het Parque García Sanabria geeft de echte tijd aan en was een geschenk uit een ander land, dat al decennia discreet tussen de bloemperken tikt.',
        },
        {
          lead: 'Mummies in het museum.',
          text:
            'Lang voor de Spanjaarden kwamen, mummificeerden de Guanchen hun doden. Enkele van hen rusten nu in het archeologisch museum van de stad, een directe lijn terug naar een eilandcultuur die vijf eeuwen geleden verdween.',
        },
      ],
      langHeading: 'Santa Cruz in jouw taal, alle 32',
      ctaHeading: 'Haal de sleutel tot Santa Cruz',
      ctaIntro:
        'Kies je stops, begin te lopen en laat de stem onthullen wat alle anderen zonder meer voorbijlopen.',
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
    fr: {
      metaTitle: 'Visite audio de San Cristóbal de La Laguna · En autonomie',
      metaDescription:
        'Une visite audio GPS en autonomie de San Cristóbal de La Laguna, la vieille ville de Tenerife classée au patrimoine mondial de l’UNESCO. Parcourez le premier plan en damier colonial à votre rythme, avec des récits en voix native dans 32 langues, hors ligne.',
      keywords:
        'visite audio la laguna, visite autoguidée san cristóbal de la laguna, que faire à la laguna tenerife, visite à pied la laguna, unesco la laguna',
      ogTitle: 'Visite audio de San Cristóbal de La Laguna | Fun Zone Tenerife',
      ogDescription:
        'Parcourez la vieille ville UNESCO de La Laguna à votre rythme avec des récits en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée.',
      heroIntro:
        'Une balade audio GPS en autonomie dans la première capitale de Tenerife, une vieille ville classée au patrimoine mondial de l’UNESCO tracée en damier il y a cinq siècles. Couvents cloîtrés, la plus ancienne université de l’île et des rues étudiantes animées, racontés à votre oreille là où tout a commencé.',
      postcardHeading: 'La Laguna, la version que les guides survolent',
      postcardIntro:
        'Pas l’arrêt photo express entre l’aéroport et la plage. Les histoires enfermées derrière les fenêtres à claustra et les portes des tours, murmurées à votre oreille à l’endroit exact où elles ont eu lieu. En voici trois. Beaucoup d’autres vous attendent dans la visite.',
      secrets: [
        {
          place: 'Iglesia de la Concepción',
          teaser:
            'Montez dans la tour de la première église de l’île et la plus grande cloche des Canaries pèse au-dessus de vous. À l’intérieur se trouve une relique qui, dit la tradition locale, se mit à pleurer de l’huile pendant une épidémie, et ce qui suivit explique pourquoi la ville s’en souvient encore.',
        },
        {
          place: 'Convento de Santa Catalina',
          teaser:
            'Derrière ces grilles de bois ajourées, une religieuse repose depuis près de trois cents ans. Les portes ne s’ouvrent au public que deux jours par an, et la file fait le tour du pâté de maisons. Qui elle était, et pourquoi, fait partie de la balade.',
        },
        {
          place: 'Casa de los Capitanes Generales',
          teaser:
            'C’est ici que vivaient les hommes qui dirigeaient toute l’île, jusqu’à l’année où la capitale glissa vers la côte. La maison garde encore ce pouvoir perdu, si vous savez ce que vous regardez.',
        },
      ],
      storyTitle: 'L’histoire de San Cristóbal de La Laguna',
      storyIntro: [
        'La Laguna est l’âme ancienne de Tenerife, une ville universitaire aux façades colorées et aux rues droites et calmes, juste à l’intérieur des terres depuis Santa Cruz. Les deux villes se touchent presque aujourd’hui, reliées par un tramway, et pourtant tout les oppose. Là où la capitale n’est que port et circulation, La Laguna est un lieu où marcher lentement, et presque tout ce qui mérite d’être vu tient dans un damier compact que l’on traverse à pied.',
        'Elle fut fondée vers 1496 et 1497 par Alonso Fernández de Lugo, le conquérant de l’île, au bord d’un lac aujourd’hui asséché qui a donné son nom à la ville. Pendant plus de deux siècles, elle fut la capitale de Tenerife, et un temps de tout l’archipel des Canaries, avant que l’honneur ne descende à Santa Cruz en 1723.',
      ],
      storyBlocks: [
        {
          heading: 'La ville dessinée avant d’être bâtie',
          paragraphs: [
            'La ville basse fut tracée dès 1502 comme un damier délibéré, ses rues et ses places planifiées à l’avance plutôt que laissées pousser d’elles-mêmes. Cela fit de La Laguna l’une des premières villes coloniales non fortifiées de ce genre, et les historiens considèrent son plan ordonné comme un modèle pour les villes en damier tracées plus tard à travers l’Amérique espagnole, de La Havane à Lima. L’UNESCO a inscrit la vieille ville au patrimoine mondial en 1999 pour cette raison précise.',
            'L’Université de La Laguna, fondée en 1701, fut la première des îles Canaries, et elle emplit encore les rues d’étudiants, de cafés et d’une joyeuse animation nocturne qui s’accorde étrangement bien avec toute cette histoire.',
          ],
        },
        {
          heading: 'À ne pas manquer',
          paragraphs: [
            'Commencez par la Calle de la Carrera et la Calle Obispo Rey Redondo, les deux artères principales, bordées de balcons de bois sculpté et des grands portails des anciennes demeures de marchands et de nobles. La cathédrale et l’Iglesia de la Concepción, la première paroisse de l’île, ancrent la silhouette de la ville, et la tour de la Concepción vaut la montée pour la vue sur les toits rouges et ocre.',
            'Repérez les couvents cloîtrés avec leurs celosías, les grilles de bois ajourées qui laissaient autrefois les religieuses observer la rue sans être vues. Le Santísimo Cristo de La Laguna, un crucifix flamand conservé dans son propre sanctuaire, attire la plus grande fête de la ville chaque mois de septembre.',
          ],
        },
        {
          heading: 'Quand y aller',
          paragraphs: [
            'La Laguna s’étend sur un haut plateau et se révèle nettement plus fraîche, plus verte et souvent plus brumeuse que la côte sud, avec plusieurs fois plus de pluie : emportez une couche même en été. Pour marcher confortablement, visez la fin du printemps ou le début de l’automne. Venez à la mi-septembre pour la fête du Cristo si vous voulez la ville à pleine voix, même si elle se remplit vite.',
          ],
        },
      ],
      mapHeading: 'Où se trouve San Cristóbal de La Laguna ?',
      mapIntro:
        'La Laguna se trouve juste à l’intérieur des terres depuis Santa Cruz, du côté nord-est de Tenerife, la plus grande des îles Canaries espagnoles, sur un plateau à environ 550 mètres au-dessus de la mer. Les deux villes se fondent presque l’une dans l’autre, et un tramway les relie en bien moins d’une heure.',
      bonusHeading: 'Trois choses que la plupart des visiteurs ignorent',
      bonus: [
        {
          lead: 'Un plan de rues qui a traversé un océan.',
          text:
            'Le damier paisible que vous arpentez n’est pas seulement joli. Tracé à la fin du XVe siècle, il est considéré comme un modèle pour les grandes villes en damier que l’Espagne bâtit ensuite à travers les Amériques, ce qui fait de cette ville tranquille une sorte de plan directeur pour la moitié d’un hémisphère.',
        },
        {
          lead: 'Une religieuse que l’on peut encore voir.',
          text:
            'Dans le couvent de Santa Catalina repose une religieuse connue sous le nom de la Siervita, morte en 1731 et vénérée comme incorrompue. Son corps n’est montré au public que deux jours par an, et des milliers de personnes font encore la queue pour défiler devant elle.',
        },
        {
          lead: 'Le lac qui n’est pas là.',
          text:
            'La ville porte le nom d’un lac, la laguna, qui remplissait autrefois la plaine. Il fut asséché il y a longtemps, si bien que l’eau qui a donné son nom à la ville a discrètement disparu, ne laissant derrière elle que le mot.',
        },
      ],
      langHeading: 'La Laguna dans votre langue, les 32',
      ctaHeading: 'Obtenez la clé de La Laguna',
      ctaIntro:
        'Choisissez vos étapes, commencez à marcher et laissez la voix révéler ce que tous les autres dépassent sans le voir.',
    },
    es: {
      metaTitle: 'Audioguía de San Cristóbal de La Laguna · Ruta autoguiada',
      metaDescription:
        'Una audioguía GPS autoguiada de San Cristóbal de La Laguna, el casco histórico de Tenerife Patrimonio de la Humanidad de la UNESCO. Recorre la primera trama colonial en cuadrícula a tu ritmo, con relatos en voz nativa en 32 idiomas, sin conexión.',
      keywords:
        'audioguía la laguna, ruta autoguiada san cristóbal de la laguna, qué ver en la laguna tenerife, ruta a pie la laguna, unesco la laguna',
      ogTitle: 'Audioguía de San Cristóbal de La Laguna | Fun Zone Tenerife',
      ogDescription:
        'Recorre el casco histórico UNESCO de La Laguna a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión, con un guía de realidad aumentada.',
      heroIntro:
        'Un paseo con audioguía GPS autoguiada por la primera capital de Tenerife, un casco histórico Patrimonio de la Humanidad de la UNESCO trazado en cuadrícula hace cinco siglos. Conventos de clausura, la universidad más antigua de la isla y animadas calles universitarias, narrados a tu oído allí donde todo empezó.',
      postcardHeading: 'La Laguna, la versión que las guías pasan de largo',
      postcardIntro:
        'No la parada rápida para la foto entre el aeropuerto y la playa. Las historias encerradas tras las celosías y las puertas de las torres, susurradas al oído en el lugar exacto al que pertenecen. Aquí tienes tres. Muchas más te esperan dentro del tour.',
      secrets: [
        {
          place: 'Iglesia de la Concepción',
          teaser:
            'Sube a la torre de la primera iglesia de la isla y la campana más grande de Canarias cuelga sobre ti. Dentro hay una reliquia que, según la tradición local, empezó a llorar aceite durante una peste, y lo que ocurrió después es la razón por la que la ciudad aún lo recuerda.',
        },
        {
          place: 'Convento de Santa Catalina',
          teaser:
            'Tras estas celosías de madera yace una monja desde hace casi trescientos años. Las puertas se abren al público solo dos días al año, y la cola da la vuelta a la manzana. Quién fue, y por qué, forma parte del recorrido.',
        },
        {
          place: 'Casa de los Capitanes Generales',
          teaser:
            'Aquí vivían los hombres que gobernaban toda la isla, hasta el año en que la capitalidad se escapó a la costa. La casa aún guarda ese poder perdido, si sabes lo que estás mirando.',
        },
      ],
      storyTitle: 'La historia de San Cristóbal de La Laguna',
      storyIntro: [
        'La Laguna es el alma antigua de Tenerife, una ciudad universitaria de fachadas pintadas y calles rectas y tranquilas, tierra adentro desde Santa Cruz. Hoy las dos ciudades casi se tocan, unidas por un tranvía, y sin embargo no podrían ser más distintas. Donde la capital es todo puerto y tráfico, La Laguna es un lugar para caminar despacio, y casi todo lo que merece la pena ver cabe en una cuadrícula compacta que se cruza a pie.',
        'Fue fundada hacia 1496 y 1497 por Alonso Fernández de Lugo, el conquistador de la isla, a orillas de una laguna hoy desecada que dio nombre a la ciudad. Durante más de dos siglos fue la capital de Tenerife, y por un tiempo de todo el archipiélago canario, antes de que el honor bajara a Santa Cruz en 1723.',
      ],
      storyBlocks: [
        {
          heading: 'La ciudad que se dibujó antes de construirse',
          paragraphs: [
            'La ciudad baja se trazó desde 1502 como una cuadrícula deliberada, con sus calles y plazas planificadas de antemano en lugar de dejarlas crecer por su cuenta. Eso convirtió a La Laguna en una de las primeras ciudades coloniales sin murallas de su tipo, y los historiadores consideran su plano ordenado un modelo para las ciudades en cuadrícula trazadas después por toda la América española, de La Habana a Lima. La UNESCO inscribió el casco histórico en su lista de Patrimonio de la Humanidad en 1999 precisamente por esto.',
            'La Universidad de La Laguna, fundada en 1701, fue la primera de Canarias, y aún llena las calles de estudiantes, cafeterías y un alegre bullicio nocturno que encaja curiosamente bien con tanta historia.',
          ],
        },
        {
          heading: 'En qué fijarse',
          paragraphs: [
            'Empieza en la Calle de la Carrera y la Calle Obispo Rey Redondo, las dos arterias principales, flanqueadas por los balcones de madera tallada y los grandes portones de las antiguas casas de mercaderes y nobles. La Catedral y la Iglesia de la Concepción, la primera parroquia de la isla, marcan el perfil de la ciudad, y la torre de la Concepción merece la subida por las vistas sobre los tejados rojos y ocres.',
            'Busca los conventos de clausura con sus celosías, las rejillas de madera que antaño permitían a las monjas observar la calle sin ser vistas. El Santísimo Cristo de La Laguna, un crucifijo flamenco guardado en su propio santuario, convoca la mayor fiesta de la ciudad cada septiembre.',
          ],
        },
        {
          heading: 'Cuándo ir',
          paragraphs: [
            'La Laguna se asienta en una meseta alta y es notablemente más fresca, más verde y a menudo más brumosa que la costa sur, con varias veces más lluvia, así que lleva una capa de abrigo incluso en verano. Para caminar a gusto apunta a finales de primavera o principios de otoño. Ven a mediados de septiembre para la fiesta del Cristo si quieres la ciudad a pleno pulmón, aunque se llena rápido.',
          ],
        },
      ],
      mapHeading: '¿Dónde está San Cristóbal de La Laguna?',
      mapIntro:
        'La Laguna se encuentra tierra adentro desde Santa Cruz, en el lado noreste de Tenerife, la mayor de las islas Canarias españolas, en una meseta a unos 550 metros sobre el mar. Las dos ciudades casi se funden, y un tranvía las une en bastante menos de una hora.',
      bonusHeading: 'Tres cosas que casi ningún visitante llega a saber',
      bonus: [
        {
          lead: 'Un trazado que cruzó un océano.',
          text:
            'La apacible cuadrícula que recorres no es solo bonita. Dibujada a finales del siglo XV, se considera un modelo para las grandes ciudades en cuadrícula que España levantó después por las Américas, lo que convierte a esta ciudad tranquila en una especie de plano maestro para medio hemisferio.',
        },
        {
          lead: 'Una monja que aún puedes ver.',
          text:
            'En el convento de Santa Catalina yace una monja conocida como la Siervita, que murió en 1731 y es venerada como incorrupta. Su cuerpo se muestra al público solo dos días al año, y miles de personas aún hacen cola para desfilar ante ella.',
        },
        {
          lead: 'La laguna que no está.',
          text:
            'La ciudad debe su nombre a una laguna que antaño llenaba el llano. Fue desecada hace mucho, de modo que el agua que dio nombre a la ciudad ha desaparecido en silencio, dejando atrás solo la palabra.',
        },
      ],
      langHeading: 'La Laguna en tu idioma, los 32',
      ctaHeading: 'Consigue la llave de La Laguna',
      ctaIntro:
        'Elige tus paradas, empieza a caminar y deja que la voz te revele lo que todos los demás pasan de largo.',
    },
    de: {
      metaTitle: 'Audioguide San Cristóbal de La Laguna · Rundgang auf eigene Faust',
      metaDescription:
        'Ein selbstgeführter GPS-Audioguide durch San Cristóbal de La Laguna, die zum UNESCO-Welterbe zählende Altstadt Teneriffas. Erkunden Sie das erste koloniale Rastermuster in Ihrem Tempo, mit Erzählungen von Muttersprachlern in 32 Sprachen, offline.',
      keywords:
        'audioguide la laguna, selbstgeführte tour san cristóbal de la laguna, la laguna teneriffa sehenswürdigkeiten, stadtrundgang la laguna, unesco la laguna',
      ogTitle: 'Audioguide San Cristóbal de La Laguna | Fun Zone Tenerife',
      ogDescription:
        'Erkunden Sie die UNESCO-Altstadt von La Laguna in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide.',
      heroIntro:
        'Ein selbstgeführter GPS-Audiospaziergang durch die erste Hauptstadt Teneriffas, eine zum UNESCO-Welterbe zählende Altstadt, vor fünf Jahrhunderten als Raster angelegt. Klösterliche Konvente, die älteste Universität der Insel und lebhafte Studentenstraßen, erzählt in Ihrem Ohr dort, wo alles begann.',
      postcardHeading: 'La Laguna, die Version, an der die Reiseführer vorbeieilen',
      postcardIntro:
        'Nicht der kurze Fotostopp zwischen Flughafen und Strand. Die Geschichten hinter den Gitterfenstern und den Turmtüren, Ihnen ins Ohr geflüstert, genau an dem Ort, an den sie gehören. Hier sind drei. Viele weitere warten in der Tour.',
      secrets: [
        {
          place: 'Iglesia de la Concepción',
          teaser:
            'Steigen Sie auf den Turm der ersten Kirche der Insel, und die größte Glocke der Kanaren hängt über Ihnen. Drinnen befindet sich eine Reliquie, die der örtlichen Überlieferung nach während einer Seuche begann, Öl zu weinen, und was danach geschah, ist der Grund, warum die Stadt sich noch daran erinnert.',
        },
        {
          place: 'Convento de Santa Catalina',
          teaser:
            'Hinter diesen hölzernen Gittern liegt eine Nonne seit fast dreihundert Jahren. Die Türen öffnen sich dem Publikum nur an zwei Tagen im Jahr, und die Schlange reicht um den Block. Wer sie war und warum, ist Teil des Rundgangs.',
        },
        {
          place: 'Casa de los Capitanes Generales',
          teaser:
            'Hier lebten die Männer, die die ganze Insel regierten, bis zu dem Jahr, in dem die Hauptstadt an die Küste entglitt. Das Haus bewahrt diese verlorene Macht noch immer, wenn Sie wissen, worauf Sie blicken.',
        },
      ],
      storyTitle: 'Die Geschichte von San Cristóbal de La Laguna',
      storyIntro: [
        'La Laguna ist die alte Seele Teneriffas, eine Universitätsstadt mit bemalten Fassaden und geraden, ruhigen Straßen, landeinwärts von Santa Cruz. Die beiden Städte berühren sich heute fast, verbunden durch eine Straßenbahn, und doch könnten sie unterschiedlicher nicht sein. Wo die Hauptstadt ganz Hafen und Verkehr ist, ist La Laguna ein Ort zum langsamen Gehen, und fast alles Sehenswerte liegt in einem kompakten Raster, das Sie zu Fuß durchqueren.',
        'Sie wurde um 1496 und 1497 von Alonso Fernández de Lugo, dem Eroberer der Insel, am Ufer eines inzwischen ausgetrockneten Sees gegründet, der der Stadt ihren Namen gab. Mehr als zwei Jahrhunderte lang war sie die Hauptstadt Teneriffas und eine Zeit lang des gesamten kanarischen Archipels, bevor die Ehre 1723 nach Santa Cruz wanderte.',
      ],
      storyBlocks: [
        {
          heading: 'Die Stadt, die gezeichnet wurde, bevor sie gebaut war',
          paragraphs: [
            'Die Unterstadt wurde ab 1502 als bewusstes Raster angelegt, ihre Straßen und Plätze im Voraus geplant, statt von selbst wachsen zu lassen. Das machte La Laguna zu einer der ersten unbefestigten Kolonialstädte ihrer Art, und Historiker betrachten ihren geordneten Plan als Vorbild für die Rasterstädte, die später in ganz Spanisch-Amerika angelegt wurden, von Havanna bis Lima. Die UNESCO nahm die Altstadt 1999 genau aus diesem Grund in ihre Welterbeliste auf.',
            'Die 1701 gegründete Universität von La Laguna war die erste der Kanarischen Inseln, und sie füllt die Straßen noch immer mit Studierenden, Cafés und einem fröhlichen nächtlichen Treiben, das erstaunlich gut zu all der Geschichte passt.',
          ],
        },
        {
          heading: 'Worauf Sie achten sollten',
          paragraphs: [
            'Beginnen Sie an der Calle de la Carrera und der Calle Obispo Rey Redondo, den beiden Hauptachsen, gesäumt von geschnitzten Holzbalkonen und den prächtigen Portalen der alten Kaufmanns- und Adelshäuser. Die Kathedrale und die Iglesia de la Concepción, die erste Pfarrei der Insel, prägen die Silhouette, und der Turm der Concepción ist den Aufstieg wert für den Blick über die roten und ockerfarbenen Dächer.',
            'Achten Sie auf die klösterlichen Konvente mit ihren celosías, den hölzernen Gittern, hinter denen die Nonnen einst ungesehen die Straße beobachteten. Der Santísimo Cristo de La Laguna, ein flämisches Kruzifix in seinem eigenen Heiligtum, zieht jedes Jahr im September das größte Fest der Stadt an.',
          ],
        },
        {
          heading: 'Wann Sie kommen sollten',
          paragraphs: [
            'La Laguna liegt auf einer Hochebene und ist merklich kühler, grüner und oft nebliger als die Südküste, mit mehrfach höheren Niederschlägen, nehmen Sie also selbst im Sommer eine Jacke mit. Für bequemes Gehen zielen Sie auf das späte Frühjahr oder den frühen Herbst. Kommen Sie Mitte September zum Cristo-Fest, wenn Sie die Stadt in voller Stimme erleben wollen, auch wenn sie sich schnell füllt.',
          ],
        },
      ],
      mapHeading: 'Wo liegt San Cristóbal de La Laguna?',
      mapIntro:
        'La Laguna liegt landeinwärts von Santa Cruz an der Nordostseite Teneriffas, der größten der spanischen Kanarischen Inseln, auf einer Hochebene etwa 550 Meter über dem Meer. Die beiden Städte verschmelzen fast, und eine Straßenbahn verbindet sie in deutlich unter einer Stunde.',
      bonusHeading: 'Drei Dinge, die die meisten Besucher nie erfahren',
      bonus: [
        {
          lead: 'Ein Straßenplan, der einen Ozean überquerte.',
          text:
            'Das ruhige Raster, durch das Sie gehen, ist nicht nur hübsch. Ende des 15. Jahrhunderts gezeichnet, gilt es als Vorlage für die großen Rasterstädte, die Spanien später in ganz Amerika baute, was diese stille Stadt zu einer Art Bauplan für eine halbe Hemisphäre macht.',
        },
        {
          lead: 'Eine Nonne, die Sie noch sehen können.',
          text:
            'Im Konvent von Santa Catalina liegt eine Nonne namens la Siervita, die 1731 starb und als unverwest verehrt wird. Ihr Körper wird dem Publikum nur an zwei Tagen im Jahr gezeigt, und Tausende stehen noch immer Schlange, um an ihr vorbeizuziehen.',
        },
        {
          lead: 'Der See, der nicht da ist.',
          text:
            'Die Stadt ist nach einer Lagune benannt, la laguna, die einst die Ebene füllte. Sie wurde vor langer Zeit trockengelegt, sodass das Wasser, das der Stadt ihren Namen gab, still verschwunden ist und nur das Wort zurückließ.',
        },
      ],
      langHeading: 'La Laguna in Ihrer Sprache, alle 32',
      ctaHeading: 'Holen Sie sich den Schlüssel zu La Laguna',
      ctaIntro:
        'Wählen Sie Ihre Stationen, gehen Sie los und lassen Sie die Stimme enthüllen, woran alle anderen achtlos vorbeigehen.',
    },
    it: {
      metaTitle: 'Audioguida di San Cristóbal de La Laguna · Tour in autonomia',
      metaDescription:
        'Un tour audio GPS in autonomia di San Cristóbal de La Laguna, il centro storico di Tenerife Patrimonio dell’Umanità UNESCO. Scopri la prima trama coloniale a griglia al tuo ritmo, con racconti a voce madrelingua in 32 lingue, offline.',
      keywords:
        'audioguida la laguna, tour autoguidato san cristóbal de la laguna, cosa vedere a la laguna tenerife, tour a piedi la laguna, unesco la laguna',
      ogTitle: 'Audioguida di San Cristóbal de La Laguna | Fun Zone Tenerife',
      ogDescription:
        'Scopri il centro storico UNESCO di La Laguna al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline, con una guida in realtà aumentata.',
      heroIntro:
        'Una passeggiata con audioguida GPS in autonomia nella prima capitale di Tenerife, un centro storico Patrimonio dell’Umanità UNESCO tracciato a griglia cinque secoli fa. Conventi di clausura, l’università più antica dell’isola e vivaci vie studentesche, raccontati al tuo orecchio dove tutto è cominciato.',
      postcardHeading: 'La Laguna, la versione che le guide saltano',
      postcardIntro:
        'Non la sosta veloce per la foto tra l’aeroporto e la spiaggia. Le storie chiuse dietro le gelosie e le porte delle torri, sussurrate al tuo orecchio nel punto esatto a cui appartengono. Eccone tre. Molte altre ti aspettano nel tour.',
      secrets: [
        {
          place: 'Iglesia de la Concepción',
          teaser:
            'Sali sulla torre della prima chiesa dell’isola e la campana più grande delle Canarie pende sopra di te. Dentro c’è una reliquia che, secondo la tradizione locale, cominciò a piangere olio durante una pestilenza, e ciò che accadde dopo è il motivo per cui la città lo ricorda ancora.',
        },
        {
          place: 'Convento de Santa Catalina',
          teaser:
            'Dietro queste gelosie di legno giace una suora da quasi trecento anni. Le porte si aprono al pubblico solo due giorni all’anno, e la fila gira intorno all’isolato. Chi fosse, e perché, fa parte del percorso.',
        },
        {
          place: 'Casa de los Capitanes Generales',
          teaser:
            'Qui vivevano gli uomini che governavano l’intera isola, fino all’anno in cui la capitale scivolò verso la costa. La casa custodisce ancora quel potere perduto, se sai cosa stai guardando.',
        },
      ],
      storyTitle: 'La storia di San Cristóbal de La Laguna',
      storyIntro: [
        'La Laguna è l’anima antica di Tenerife, una città universitaria dalle facciate dipinte e dalle strade dritte e tranquille, nell’entroterra rispetto a Santa Cruz. Oggi le due città quasi si toccano, unite da un tram, eppure non potrebbero essere più diverse. Dove la capitale è tutta porto e traffico, La Laguna è un luogo in cui camminare lentamente, e quasi tutto ciò che vale la pena vedere sta in una griglia compatta che si attraversa a piedi.',
        'Fu fondata intorno al 1496 e al 1497 da Alonso Fernández de Lugo, il conquistatore dell’isola, sulla riva di un lago oggi prosciugato che ha dato il nome alla città. Per più di due secoli fu la capitale di Tenerife, e per un periodo dell’intero arcipelago canario, prima che l’onore scendesse a Santa Cruz nel 1723.',
      ],
      storyBlocks: [
        {
          heading: 'La città disegnata prima di essere costruita',
          paragraphs: [
            'La città bassa fu tracciata dal 1502 come una griglia deliberata, con strade e piazze pianificate in anticipo invece di lasciarle crescere da sole. Ciò fece di La Laguna una delle prime città coloniali non fortificate del suo genere, e gli storici considerano il suo impianto ordinato un modello per le città a griglia tracciate in seguito in tutta l’America spagnola, dall’Avana a Lima. L’UNESCO inserì il centro storico nella lista del Patrimonio dell’Umanità nel 1999 proprio per questo.',
            'L’Università di La Laguna, fondata nel 1701, fu la prima delle Canarie, e riempie ancora le strade di studenti, caffè e un allegro brusio notturno che si accorda stranamente bene con tanta storia.',
          ],
        },
        {
          heading: 'Cosa notare',
          paragraphs: [
            'Inizia dalla Calle de la Carrera e dalla Calle Obispo Rey Redondo, le due arterie principali, fiancheggiate dai balconi di legno intagliato e dai grandi portali delle antiche case di mercanti e nobili. La Cattedrale e la Iglesia de la Concepción, la prima parrocchia dell’isola, ancorano il profilo della città, e la torre della Concepción vale la salita per la vista sui tetti rossi e ocra.',
            'Cerca i conventi di clausura con le loro celosías, le grate di legno che un tempo permettevano alle suore di osservare la strada senza essere viste. Il Santísimo Cristo de La Laguna, un crocifisso fiammingo custodito nel suo santuario, richiama la più grande festa della città ogni settembre.',
          ],
        },
        {
          heading: 'Quando andare',
          paragraphs: [
            'La Laguna sorge su un altopiano ed è nettamente più fresca, più verde e spesso più nebbiosa della costa sud, con diverse volte più pioggia, quindi porta uno strato in più anche d’estate. Per camminare comodamente punta alla tarda primavera o all’inizio dell’autunno. Vieni a metà settembre per la festa del Cristo se vuoi la città a piena voce, anche se si riempie in fretta.',
          ],
        },
      ],
      mapHeading: 'Dove si trova San Cristóbal de La Laguna?',
      mapIntro:
        'La Laguna si trova nell’entroterra rispetto a Santa Cruz, sul lato nord-orientale di Tenerife, la più grande delle isole Canarie spagnole, su un altopiano a circa 550 metri sul mare. Le due città quasi si fondono, e un tram le collega in ben meno di un’ora.',
      bonusHeading: 'Tre cose che quasi nessun visitatore scopre',
      bonus: [
        {
          lead: 'Una pianta stradale che ha attraversato un oceano.',
          text:
            'La tranquilla griglia che stai percorrendo non è solo bella. Disegnata alla fine del XV secolo, è considerata un modello per le grandi città a griglia che la Spagna costruì poi in tutte le Americhe, il che fa di questa cittadina tranquilla una sorta di progetto per metà emisfero.',
        },
        {
          lead: 'Una suora che puoi ancora vedere.',
          text:
            'Nel convento di Santa Catalina giace una suora nota come la Siervita, morta nel 1731 e venerata come incorrotta. Il suo corpo viene mostrato al pubblico solo due giorni all’anno, e migliaia di persone fanno ancora la fila per sfilarle davanti.',
        },
        {
          lead: 'Il lago che non c’è.',
          text:
            'La città prende il nome da una laguna, la laguna, che un tempo riempiva la piana. Fu prosciugata molto tempo fa, così l’acqua che diede il nome alla città è svanita in silenzio, lasciando solo la parola.',
        },
      ],
      langHeading: 'La Laguna nella tua lingua, tutte e 32',
      ctaHeading: 'Ottieni la chiave di La Laguna',
      ctaIntro:
        'Scegli le tue tappe, inizia a camminare e lascia che la voce ti riveli ciò che tutti gli altri superano senza notarlo.',
    },
    nl: {
      metaTitle: 'Audiotour San Cristóbal de La Laguna · Wandeling op eigen houtje',
      metaDescription:
        'Een zelfgeleide gps-audiotour van San Cristóbal de La Laguna, de tot UNESCO-werelderfgoed behorende oude stad van Tenerife. Ontdek het eerste koloniale rasterplan op je eigen tempo, met verhalen in moedertaalstem in 32 talen, offline.',
      keywords:
        'audiotour la laguna, zelfgeleide tour san cristóbal de la laguna, bezienswaardigheden la laguna tenerife, stadswandeling la laguna, unesco la laguna',
      ogTitle: 'Audiotour San Cristóbal de La Laguna | Fun Zone Tenerife',
      ogDescription:
        'Ontdek de UNESCO-oude stad van La Laguna op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline, met een augmented-reality-gids.',
      heroIntro:
        'Een zelfgeleide gps-audiowandeling door de eerste hoofdstad van Tenerife, een tot UNESCO-werelderfgoed behorende oude stad die vijf eeuwen geleden als raster werd aangelegd. Kloosters met slot, de oudste universiteit van het eiland en levendige studentenstraten, verteld in je oor waar het allemaal begon.',
      postcardHeading: 'La Laguna, de versie waar de reisgidsen langs haasten',
      postcardIntro:
        'Niet de snelle fotostop tussen het vliegveld en het strand. De verhalen achter de tralievensters en de torendeuren, in je oor gefluisterd op precies de plek waar ze thuishoren. Hier zijn er drie. Veel meer wachten in de tour.',
      secrets: [
        {
          place: 'Iglesia de la Concepción',
          teaser:
            'Beklim de toren van de eerste kerk van het eiland en de grootste klok van de Canarische Eilanden hangt boven je. Binnen ligt een relikwie dat, zegt de lokale overlevering, olie begon te wenen tijdens een pest, en wat daarna gebeurde is waarom de stad het nog herdenkt.',
        },
        {
          place: 'Convento de Santa Catalina',
          teaser:
            'Achter deze houten traliewerken ligt al bijna driehonderd jaar een non. De deuren gaan maar twee dagen per jaar open voor het publiek, en de rij loopt om het blok heen. Wie ze was, en waarom, hoort bij de wandeling.',
        },
        {
          place: 'Casa de los Capitanes Generales',
          teaser:
            'Hier woonden de mannen die het hele eiland bestuurden, tot het jaar waarin de hoofdstad naar de kust wegglipte. Het huis draagt die verloren macht nog in zich, als je weet waar je naar kijkt.',
        },
      ],
      storyTitle: 'De geschiedenis van San Cristóbal de La Laguna',
      storyIntro: [
        'La Laguna is de oude ziel van Tenerife, een universiteitsstad met geschilderde gevels en rechte, rustige straten, net landinwaarts vanaf Santa Cruz. De twee steden raken elkaar nu bijna, verbonden door een tram, en toch kunnen ze niet verschillender zijn. Waar de hoofdstad al haven en verkeer is, is La Laguna een plek om langzaam te lopen, en bijna alles wat de moeite waard is, past in een compact raster dat je te voet oversteekt.',
        'Ze werd rond 1496 en 1497 gesticht door Alonso Fernández de Lugo, de veroveraar van het eiland, aan de oever van een inmiddels drooggevallen meer dat de stad haar naam gaf. Meer dan twee eeuwen was ze de hoofdstad van Tenerife, en een tijdlang van de hele Canarische archipel, voordat de eer in 1723 naar Santa Cruz verhuisde.',
      ],
      storyBlocks: [
        {
          heading: 'De stad die werd getekend voordat ze gebouwd was',
          paragraphs: [
            'De benedenstad werd vanaf 1502 aangelegd als een bewust raster, met straten en pleinen vooraf gepland in plaats van vanzelf te laten groeien. Dat maakte La Laguna tot een van de eerste onversterkte koloniale steden in zijn soort, en historici beschouwen het ordelijke plan als een model voor de rastersteden die later overal in Spaans-Amerika werden aangelegd, van Havana tot Lima. UNESCO plaatste de oude stad in 1999 juist hierom op de werelderfgoedlijst.',
            'De Universiteit van La Laguna, gesticht in 1701, was de eerste van de Canarische Eilanden, en ze vult de straten nog steeds met studenten, cafés en een vrolijke nachtelijke drukte die vreemd goed past bij al die geschiedenis.',
          ],
        },
        {
          heading: 'Waar je op moet letten',
          paragraphs: [
            'Begin op de Calle de la Carrera en de Calle Obispo Rey Redondo, de twee hoofdaders, omzoomd door de gesneden houten balkons en de grote poorten van de oude koopmans- en adellijke huizen. De kathedraal en de Iglesia de la Concepción, de eerste parochie van het eiland, bepalen de skyline, en de toren van de Concepción is de klim waard voor het uitzicht over de rode en okergele daken.',
            'Let op de kloosters met slot en hun celosías, de houten traliewerken waarachter de nonnen ooit ongezien de straat gadesloegen. De Santísimo Cristo de La Laguna, een Vlaams kruisbeeld in zijn eigen heiligdom, trekt elk jaar in september het grootste feest van de stad.',
          ],
        },
        {
          heading: 'Wanneer te gaan',
          paragraphs: [
            'La Laguna ligt op een hoogvlakte en is merkbaar koeler, groener en vaak mistiger dan de zuidkust, met meerdere malen zoveel regen, dus neem zelfs in de zomer een laagje mee. Voor comfortabel wandelen mik je op het late voorjaar of het vroege najaar. Kom half september voor het Cristo-feest als je de stad op volle sterkte wilt, al loopt het snel vol.',
          ],
        },
      ],
      mapHeading: 'Waar ligt San Cristóbal de La Laguna?',
      mapIntro:
        'La Laguna ligt net landinwaarts vanaf Santa Cruz aan de noordoostkant van Tenerife, het grootste van de Spaanse Canarische Eilanden, op een hoogvlakte zo’n 550 meter boven zee. De twee steden versmelten bijna, en een tram verbindt ze in ruim minder dan een uur.',
      bonusHeading: 'Drie dingen die de meeste bezoekers nooit te weten komen',
      bonus: [
        {
          lead: 'Een stratenplan dat een oceaan overstak.',
          text:
            'Het rustige raster waar je doorheen loopt, is niet alleen mooi. Getekend aan het eind van de vijftiende eeuw, geldt het als een sjabloon voor de grote rastersteden die Spanje daarna overal in de Amerika’s bouwde, wat dit stille stadje tot een soort blauwdruk voor een half halfrond maakt.',
        },
        {
          lead: 'Een non die je nog kunt zien.',
          text:
            'In het klooster van Santa Catalina ligt een non die bekendstaat als la Siervita, overleden in 1731 en vereerd als onbedorven. Haar lichaam wordt maar twee dagen per jaar aan het publiek getoond, en duizenden staan nog altijd in de rij om langs haar te lopen.',
        },
        {
          lead: 'Het meer dat er niet is.',
          text:
            'De stad is vernoemd naar een lagune, la laguna, die ooit de vlakte vulde. Ze werd lang geleden drooggelegd, zodat het water dat de stad haar naam gaf stilletjes is verdwenen en alleen het woord achterliet.',
        },
      ],
      langHeading: 'La Laguna in jouw taal, alle 32',
      ctaHeading: 'Haal de sleutel tot La Laguna',
      ctaIntro:
        'Kies je stops, begin te lopen en laat de stem onthullen wat alle anderen zonder meer voorbijlopen.',
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
    fr: {
      metaTitle: 'Visite audio de La Orotava · En autonomie',
      metaDescription:
        'Une visite audio GPS en autonomie de La Orotava, la ville historique la mieux préservée de Tenerife. Grimpez les vieilles rues nobles à votre rythme avec des récits en voix native dans 32 langues, hors ligne.',
      keywords:
        'visite audio la orotava, visite autoguidée la orotava, que faire à la orotava tenerife, visite à pied la orotava, casa de los balcones',
      ogTitle: 'Visite audio de La Orotava | Fun Zone Tenerife',
      ogDescription:
        'Parcourez la ville historique de La Orotava à votre rythme avec des récits en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée.',
      heroIntro:
        'Une balade audio GPS en autonomie dans les rues escarpées et fleuries de La Orotava, la ville de la vallée que le sucre et le vin ont bâtie. Balcons de cèdre sculpté, cours aristocratiques et une place qui devient une fois par an un tapis de sable volcanique, racontés à votre oreille là où ils se dressent.',
      postcardHeading: 'La Orotava, la ville derrière les balcons',
      postcardIntro:
        'Pas l’unique photo que tout le monde prend. Les histoires à l’intérieur des vieilles demeures et des jardins en terrasses, murmurées à votre oreille à l’endroit exact où elles ont eu lieu. En voici trois. Beaucoup d’autres vous attendent dans la visite.',
      secrets: [
        {
          place: 'Casa de los Balcones',
          teaser:
            'Les balcons les plus photographiés des Canaries pendent d’une maison commencée en 1632. Franchissez la porte et la vraie surprise est la cour derrière, et la famille qui a taillé toute cette richesse dans le vin.',
        },
        {
          place: 'Jardines de la Quinta Roja',
          teaser:
            'Un temple de marbre couronne ce jardin à flanc de colline, bâti pour un noble que l’Église refusa d’enterrer en terre sainte. La raison, et le rebondissement sur l’endroit où il finit vraiment, est une histoire que le jardin garde bien silencieuse.',
        },
        {
          place: 'Plaza del Ayuntamiento',
          teaser:
            'Quelques jours chaque été, cette place ordinaire devient un immense tableau fait entièrement de sable coloré descendu du volcan, assez grand pour avoir établi un record du monde. Puis on le balaie.',
        },
      ],
      storyTitle: 'L’histoire de La Orotava',
      storyIntro: [
        'La Orotava est l’aristocrate du nord de Tenerife, une ville de coteau aux demeures nobles et aux rues pavées escarpées, dominant une vallée verdoyante jusqu’à la mer. Elle porte son histoire plus pleinement que presque partout ailleurs sur l’île, et la vieille ville est assez petite pour s’explorer entièrement à pied, même si vos jambes se souviendront des pentes.',
        'Bien avant l’arrivée des Espagnols, cette vallée était le cœur de Taoro, le plus puissant des royaumes guanches qui régnaient sur l’île. Après la conquête, les terres furent partagées à partir de 1502, et une économie du sucre puis du vin de Malvasía rendit très riches une poignée de familles de marchands, qui déversèrent leur argent dans la pierre sculptée et le cèdre que l’on voit encore aujourd’hui.',
      ],
      storyBlocks: [
        {
          heading: 'Une ville bâtie sur le sucre et le vin',
          paragraphs: [
            'Les grandes demeures de la Calle San Francisco furent élevées par des négociants enrichis en expédiant le sucre et le doux vin de Malvasía vers l’Europe du Nord. La couronne accorda à la ville le statut de villa indépendante en 1648, et son centre historique est souvent cité comme le mieux préservé de l’architecture canarienne traditionnelle sur l’île, protégé comme site historico-artistique depuis 1976.',
          ],
        },
        {
          heading: 'Des tapis de sable volcanique',
          paragraphs: [
            'Une fois par an, pour la Fête-Dieu, les habitants de La Orotava recouvrent leurs rues et la place principale d’alfombras, des tapis faits de pétales de fleurs et de terre et de sable colorés descendus des pentes du Teide. Le grand tapis devant l’hôtel de ville a atteint une taille de record du monde, l’œuvre de plusieurs semaines, posée grain par grain, puis piétinée et disparue en quelques jours.',
          ],
        },
        {
          heading: 'À ne pas manquer',
          paragraphs: [
            'Au-delà de la Casa de los Balcones, trouvez l’Iglesia de la Concepción baroque, l’une des plus belles du genre dans les îles, et les jardins en terrasses de la Victoria avec leur temple de marbre. La Hijuela del Botánico, un petit jardin botanique niché derrière l’hôtel de ville, naquit comme une antenne du célèbre jardin d’acclimatation en contrebas, à Puerto de la Cruz.',
          ],
        },
        {
          heading: 'Quand y aller',
          paragraphs: [
            'La vallée est douce toute l’année. Pour le spectacle complet, venez autour de la Fête-Dieu, à la fin du printemps ou au début de l’été, quand les tapis sont posés, même si les dates exactes changent chaque année avec le calendrier religieux. Les rues sont raides, alors de bonnes chaussures comptent ici plus que presque partout sur l’île.',
          ],
        },
      ],
      mapHeading: 'Où se trouve La Orotava ?',
      mapIntro:
        'La Orotava se niche dans la vallée verdoyante du même nom, sur le versant nord de Tenerife, grimpant les pentes vers le Teide. Elle se trouve à environ quatre kilomètres au-dessus de la ville côtière de Puerto de la Cruz et à une demi-heure environ de la capitale, Santa Cruz. Sa commune est la plus vaste de l’île et monte jusqu’au sommet du Teide, à 3 718 mètres, le point culminant de l’Espagne.',
      bonusHeading: 'Trois choses que la plupart des visiteurs ignorent',
      bonus: [
        {
          lead: 'La place est un record du monde.',
          text:
            'Le tapis de sable de la Fête-Dieu posé devant l’hôtel de ville a été reconnu comme une œuvre record de son genre, faite de tonnes de terre volcanique naturellement colorée récoltée dans le parc national du Teide, puis détruite en quelques jours.',
        },
        {
          lead: 'Un temple pour un proscrit.',
          text:
            'La rotonde de marbre des jardins de la Victoria fut bâtie comme mausolée pour un marquis et franc-maçon local que l’Église refusa d’enterrer en terre consacrée. Après des années de querelle, le temple fut finalement laissé vide.',
        },
        {
          lead: 'La vallée qui stupéfia un savant.',
          text:
            'Lorsque l’explorateur Alexander von Humboldt passa par là en 1799, il fut bouleversé par la vallée de l’Orotava, et un belvédère au-dessus de la ville porte encore son nom et sa statue.',
        },
      ],
      langHeading: 'La Orotava dans votre langue, les 32',
      ctaHeading: 'Obtenez la clé de La Orotava',
      ctaIntro:
        'Choisissez vos étapes, commencez à marcher et laissez la voix révéler ce que tous les autres dépassent sans le voir.',
    },
    es: {
      metaTitle: 'Audioguía de La Orotava · Ruta autoguiada',
      metaDescription:
        'Una audioguía GPS autoguiada de La Orotava, el casco histórico mejor conservado de Tenerife. Sube por las antiguas calles nobles a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión.',
      keywords:
        'audioguía la orotava, ruta autoguiada la orotava, qué ver en la orotava tenerife, ruta a pie la orotava, casa de los balcones',
      ogTitle: 'Audioguía de La Orotava | Fun Zone Tenerife',
      ogDescription:
        'Recorre el casco histórico de La Orotava a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión, con un guía de realidad aumentada.',
      heroIntro:
        'Un paseo con audioguía GPS autoguiada por las empinadas calles llenas de flores de La Orotava, la villa del valle que levantaron el azúcar y el vino. Balcones de cedro tallado, patios aristocráticos y una plaza que una vez al año se convierte en una alfombra de arena volcánica, narrados a tu oído allí donde se alzan.',
      postcardHeading: 'La Orotava, el pueblo tras los balcones',
      postcardIntro:
        'No la única foto que todos hacen. Las historias dentro de las viejas casas y los jardines en terrazas, susurradas al oído en el lugar exacto al que pertenecen. Aquí tienes tres. Muchas más te esperan dentro del tour.',
      secrets: [
        {
          place: 'Casa de los Balcones',
          teaser:
            'Los balcones más fotografiados de Canarias cuelgan de una casa comenzada en 1632. Cruza la puerta y la verdadera sorpresa es el patio de atrás, y la familia que talló toda esta riqueza a partir del vino.',
        },
        {
          place: 'Jardines de la Quinta Roja',
          teaser:
            'Un templo de mármol corona este jardín en ladera, construido para un noble al que la Iglesia no quiso enterrar en suelo sagrado. El motivo, y el giro sobre dónde acabó de verdad, es una historia que el jardín guarda en silencio.',
        },
        {
          place: 'Plaza del Ayuntamiento',
          teaser:
            'Durante unos días cada verano esta plaza corriente se convierte en un enorme cuadro hecho por completo de arena de colores bajada del volcán, lo bastante grande como para haber batido un récord mundial. Luego se barre.',
        },
      ],
      storyTitle: 'La historia de La Orotava',
      storyIntro: [
        'La Orotava es la aristócrata del norte de Tenerife, una villa de ladera de casas nobles y empinadas calles empedradas que mira sobre un valle verde hacia el mar. Luce su historia más completa que casi ningún otro lugar de la isla, y el casco antiguo es lo bastante pequeño para explorarlo entero a pie, aunque tus piernas notarán las cuestas.',
        'Mucho antes de la llegada de los españoles, este valle era el corazón de Taoro, el más poderoso de los reinos guanches que gobernaban la isla. Tras la conquista, la tierra se repartió a partir de 1502, y una economía del azúcar y luego del vino de Malvasía hizo muy ricas a un puñado de familias de mercaderes, que volcaron su dinero en la piedra tallada y el cedro que aún se ven hoy.',
      ],
      storyBlocks: [
        {
          heading: 'Una villa levantada sobre el azúcar y el vino',
          paragraphs: [
            'Las grandes casas de la Calle San Francisco las levantaron comerciantes que se enriquecieron enviando azúcar y dulce vino de Malvasía al norte de Europa. La corona concedió a la villa el estatus de villa independiente en 1648, y su centro histórico se cita a menudo como el ejemplo mejor conservado de arquitectura canaria tradicional de la isla, protegido como conjunto histórico-artístico desde 1976.',
          ],
        },
        {
          heading: 'Alfombras de arena volcánica',
          paragraphs: [
            'Una vez al año, por el Corpus Christi, los vecinos de La Orotava cubren sus calles y la plaza principal con alfombras hechas de pétalos de flores y de tierra y arena de colores bajadas de las laderas del Teide. La gran alfombra frente al ayuntamiento ha alcanzado un tamaño de récord mundial, obra de semanas, colocada grano a grano y luego pisada y desaparecida en pocos días.',
          ],
        },
        {
          heading: 'En qué fijarse',
          paragraphs: [
            'Más allá de la Casa de los Balcones, busca la barroca Iglesia de la Concepción, una de las más bellas de su clase en las islas, y los jardines en terrazas de la Victoria con su templo de mármol. La Hijuela del Botánico, un pequeño jardín botánico escondido tras el ayuntamiento, nació como una filial del famoso jardín de aclimatación de más abajo, en Puerto de la Cruz.',
          ],
        },
        {
          heading: 'Cuándo ir',
          paragraphs: [
            'El valle es suave todo el año. Para el espectáculo completo, ven en torno al Corpus Christi, a finales de primavera o principios de verano, cuando se colocan las alfombras, aunque las fechas exactas cambian cada año con el calendario religioso. Las calles son empinadas, así que un calzado cómodo importa aquí más que en casi ningún sitio de la isla.',
          ],
        },
      ],
      mapHeading: '¿Dónde está La Orotava?',
      mapIntro:
        'La Orotava se asienta en el verde valle del mismo nombre, en el lado norte de Tenerife, trepando por las laderas hacia el Teide. Está a unos cuatro kilómetros por encima de la localidad costera de Puerto de la Cruz y a cosa de media hora de la capital, Santa Cruz. Su municipio es el mayor de la isla y llega hasta la cumbre del Teide, a 3.718 metros, el punto más alto de España.',
      bonusHeading: 'Tres cosas que casi ningún visitante llega a saber',
      bonus: [
        {
          lead: 'La plaza es un récord mundial.',
          text:
            'La alfombra de arena del Corpus Christi colocada frente al ayuntamiento ha sido reconocida como una obra récord de su tipo, hecha con toneladas de tierra volcánica de color natural recogida en el parque nacional del Teide, y destruida en pocos días.',
        },
        {
          lead: 'Un templo para un proscrito.',
          text:
            'La rotonda de mármol de los jardines de la Victoria se construyó como mausoleo para un marqués y masón local al que la Iglesia se negó a enterrar en suelo consagrado. Tras años de disputa, el templo quedó, al final, vacío.',
        },
        {
          lead: 'El valle que dejó atónito a un científico.',
          text:
            'Cuando el explorador Alexander von Humboldt pasó por aquí en 1799, quedó sobrecogido por el valle de La Orotava, y un mirador sobre la villa aún lleva su nombre y su estatua.',
        },
      ],
      langHeading: 'La Orotava en tu idioma, los 32',
      ctaHeading: 'Consigue la llave de La Orotava',
      ctaIntro:
        'Elige tus paradas, empieza a caminar y deja que la voz te revele lo que todos los demás pasan de largo.',
    },
    de: {
      metaTitle: 'Audioguide La Orotava · Rundgang auf eigene Faust',
      metaDescription:
        'Ein selbstgeführter GPS-Audioguide durch La Orotava, die besterhaltene historische Stadt Teneriffas. Erklimmen Sie die alten noblen Gassen in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline.',
      keywords:
        'audioguide la orotava, selbstgeführte tour la orotava, la orotava teneriffa sehenswürdigkeiten, stadtrundgang la orotava, casa de los balcones',
      ogTitle: 'Audioguide La Orotava | Fun Zone Tenerife',
      ogDescription:
        'Erkunden Sie die historische Hügelstadt La Orotava in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide.',
      heroIntro:
        'Ein selbstgeführter GPS-Audiospaziergang durch die steilen, blumengeschmückten Gassen von La Orotava, der Talstadt, die Zucker und Wein erbauten. Geschnitzte Zedernbalkone, aristokratische Innenhöfe und ein Platz, der einmal im Jahr zu einem Teppich aus Vulkansand wird, erzählt in Ihrem Ohr dort, wo sie stehen.',
      postcardHeading: 'La Orotava, die Stadt hinter den Balkonen',
      postcardIntro:
        'Nicht das eine Foto, das alle machen. Die Geschichten in den alten Häusern und den terrassierten Gärten, Ihnen ins Ohr geflüstert, genau an dem Ort, an den sie gehören. Hier sind drei. Viele weitere warten in der Tour.',
      secrets: [
        {
          place: 'Casa de los Balcones',
          teaser:
            'Die meistfotografierten Balkone der Kanaren hängen an einem 1632 begonnenen Haus. Treten Sie durch die Tür, und die eigentliche Überraschung ist der Innenhof dahinter, und die Familie, die all diesen Reichtum aus dem Wein schnitzte.',
        },
        {
          place: 'Jardines de la Quinta Roja',
          teaser:
            'Ein Marmortempel krönt diesen Hanggarten, erbaut für einen Adligen, den die Kirche nicht in geweihter Erde bestatten wollte. Der Grund und die Wendung, wo er schließlich landete, ist eine Geschichte, die der Garten sehr für sich behält.',
        },
        {
          place: 'Plaza del Ayuntamiento',
          teaser:
            'An einigen Tagen jeden Sommer wird dieser gewöhnliche Platz zu einem riesigen Bild, ganz aus farbigem Sand vom Vulkan, groß genug für einen Weltrekord. Dann wird es weggefegt.',
        },
      ],
      storyTitle: 'Die Geschichte von La Orotava',
      storyIntro: [
        'La Orotava ist der Aristokrat des Nordens von Teneriffa, eine Hügelstadt aus noblen Häusern und steilen Kopfsteinpflastergassen, die über ein grünes Tal zum Meer blickt. Sie trägt ihre Geschichte vollständiger als fast jeder andere Ort der Insel, und die Altstadt ist klein genug, um sie ganz zu Fuß zu erkunden, auch wenn Ihre Beine die Steigungen spüren werden.',
        'Lange bevor die Spanier kamen, war dieses Tal das Kernland von Taoro, dem mächtigsten der Guanchen-Königreiche, die über die Insel herrschten. Nach der Eroberung wurde das Land ab 1502 aufgeteilt, und eine Wirtschaft aus Zucker und dann Malvasía-Wein machte eine Handvoll Kaufmannsfamilien sehr reich, die ihr Geld in den geschnitzten Stein und das Zedernholz steckten, das Sie noch heute sehen.',
      ],
      storyBlocks: [
        {
          heading: 'Eine Stadt, erbaut auf Zucker und Wein',
          paragraphs: [
            'Die prächtigen Häuser entlang der Calle San Francisco wurden von Händlern errichtet, die mit dem Verschiffen von Zucker und süßem Malvasía-Wein nach Nordeuropa reich wurden. Die Krone verlieh der Stadt 1648 den Status einer unabhängigen Villa, und ihr historisches Zentrum gilt oft als das besterhaltene Beispiel traditioneller kanarischer Architektur auf der Insel, seit 1976 als historisch-künstlerisches Ensemble geschützt.',
          ],
        },
        {
          heading: 'Teppiche aus Vulkansand',
          paragraphs: [
            'Einmal im Jahr, zu Fronleichnam, bedecken die Menschen von La Orotava ihre Straßen und den Hauptplatz mit alfombras, Teppichen aus Blütenblättern und aus farbiger Erde und Sand, herabgeholt von den Hängen des Teide. Der große Teppich vor dem Rathaus hat Weltrekordgröße erreicht, das Werk von Wochen, Korn für Korn gelegt und dann binnen Tagen betreten und verschwunden.',
          ],
        },
        {
          heading: 'Worauf Sie achten sollten',
          paragraphs: [
            'Jenseits der Casa de los Balcones finden Sie die barocke Iglesia de la Concepción, eine der schönsten ihrer Art auf den Inseln, und die terrassierten Victoria-Gärten mit ihrem Marmortempel. Die Hijuela del Botánico, ein kleiner botanischer Garten hinter dem Rathaus, entstand als Ableger des berühmten Akklimatisierungsgartens unten in Puerto de la Cruz.',
          ],
        },
        {
          heading: 'Wann Sie kommen sollten',
          paragraphs: [
            'Das Tal ist das ganze Jahr über mild. Für das ganze Spektakel kommen Sie um Fronleichnam, im späten Frühjahr oder frühen Sommer, wenn die Teppiche gelegt werden, auch wenn sich die genauen Daten jedes Jahr mit dem Kirchenkalender verschieben. Die Gassen sind steil, also zählt bequemes Schuhwerk hier mehr als fast überall auf der Insel.',
          ],
        },
      ],
      mapHeading: 'Wo liegt La Orotava?',
      mapIntro:
        'La Orotava liegt im grünen Tal gleichen Namens an der Nordseite Teneriffas und klettert die Hänge zum Teide hinauf. Es liegt etwa vier Kilometer oberhalb der Küstenstadt Puerto de la Cruz und rund eine halbe Stunde von der Hauptstadt Santa Cruz entfernt. Seine Gemeinde ist die größte der Insel und reicht bis zum 3.718 Meter hohen Gipfel des Teide, dem höchsten Punkt Spaniens.',
      bonusHeading: 'Drei Dinge, die die meisten Besucher nie erfahren',
      bonus: [
        {
          lead: 'Der Platz ist ein Weltrekord.',
          text:
            'Der Fronleichnams-Sandteppich vor dem Rathaus wurde als Rekordwerk seiner Art anerkannt, gefertigt aus Tonnen natürlich gefärbter Vulkanerde aus dem Teide-Nationalpark, dann binnen Tagen zerstört.',
        },
        {
          lead: 'Ein Tempel für einen Ausgestoßenen.',
          text:
            'Die Marmorrotunde in den Victoria-Gärten wurde als Mausoleum für einen örtlichen Marquis und Freimaurer errichtet, den die Kirche nicht in geweihter Erde bestatten wollte. Nach Jahren des Streits blieb der Tempel am Ende leer.',
        },
        {
          lead: 'Das Tal, das einen Forscher überwältigte.',
          text:
            'Als der Forscher Alexander von Humboldt 1799 hier durchkam, war er vom Orotava-Tal überwältigt, und ein Aussichtspunkt oberhalb der Stadt trägt noch immer seinen Namen und seine Statue.',
        },
      ],
      langHeading: 'La Orotava in Ihrer Sprache, alle 32',
      ctaHeading: 'Holen Sie sich den Schlüssel zu La Orotava',
      ctaIntro:
        'Wählen Sie Ihre Stationen, gehen Sie los und lassen Sie die Stimme enthüllen, woran alle anderen achtlos vorbeigehen.',
    },
    it: {
      metaTitle: 'Audioguida di La Orotava · Tour in autonomia',
      metaDescription:
        'Un tour audio GPS in autonomia di La Orotava, la cittadina storica meglio conservata di Tenerife. Sali per le antiche vie nobiliari al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline.',
      keywords:
        'audioguida la orotava, tour autoguidato la orotava, cosa vedere a la orotava tenerife, tour a piedi la orotava, casa de los balcones',
      ogTitle: 'Audioguida di La Orotava | Fun Zone Tenerife',
      ogDescription:
        'Scopri la cittadina storica di La Orotava al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline, con una guida in realtà aumentata.',
      heroIntro:
        'Una passeggiata con audioguida GPS in autonomia nelle ripide vie fiorite di La Orotava, la città della valle che lo zucchero e il vino hanno costruito. Balconi di cedro intagliato, cortili aristocratici e una piazza che una volta l’anno diventa un tappeto di sabbia vulcanica, raccontati al tuo orecchio dove sorgono.',
      postcardHeading: 'La Orotava, la città dietro i balconi',
      postcardIntro:
        'Non l’unica foto che fanno tutti. Le storie dentro le vecchie case e i giardini terrazzati, sussurrate al tuo orecchio nel punto esatto a cui appartengono. Eccone tre. Molte altre ti aspettano nel tour.',
      secrets: [
        {
          place: 'Casa de los Balcones',
          teaser:
            'I balconi più fotografati delle Canarie pendono da una casa iniziata nel 1632. Varca la porta e la vera sorpresa è il cortile dietro, e la famiglia che ha ricavato tutta questa ricchezza dal vino.',
        },
        {
          place: 'Jardines de la Quinta Roja',
          teaser:
            'Un tempio di marmo corona questo giardino sul pendio, costruito per un nobile che la Chiesa non volle seppellire in terra consacrata. Il motivo, e il colpo di scena su dove finì davvero, è una storia che il giardino tiene ben nascosta.',
        },
        {
          place: 'Plaza del Ayuntamiento',
          teaser:
            'Per qualche giorno ogni estate questa piazza qualunque diventa un enorme quadro fatto interamente di sabbia colorata portata giù dal vulcano, abbastanza grande da aver stabilito un record mondiale. Poi viene spazzato via.',
        },
      ],
      storyTitle: 'La storia di La Orotava',
      storyIntro: [
        'La Orotava è l’aristocratica del nord di Tenerife, una città collinare di case nobiliari e ripide vie lastricate che guarda su una valle verde verso il mare. Porta la sua storia più integralmente di quasi ogni altro luogo dell’isola, e il centro storico è abbastanza piccolo da esplorarlo tutto a piedi, anche se le gambe si accorgeranno delle pendenze.',
        'Molto prima dell’arrivo degli spagnoli, questa valle era il cuore di Taoro, il più potente dei regni guanci che governavano l’isola. Dopo la conquista la terra fu spartita a partire dal 1502, e un’economia dello zucchero e poi del vino Malvasía rese molto ricche una manciata di famiglie di mercanti, che riversarono il loro denaro nella pietra intagliata e nel cedro che si vedono ancora oggi.',
      ],
      storyBlocks: [
        {
          heading: 'Una città costruita su zucchero e vino',
          paragraphs: [
            'Le grandi case lungo la Calle San Francisco furono innalzate da mercanti arricchitisi spedendo zucchero e dolce vino Malvasía verso il nord Europa. La corona concesse alla città lo status di villa indipendente nel 1648, e il suo centro storico è spesso citato come l’esempio meglio conservato di architettura canaria tradizionale dell’isola, tutelato come sito storico-artistico dal 1976.',
          ],
        },
        {
          heading: 'Tappeti di sabbia vulcanica',
          paragraphs: [
            'Una volta l’anno, per il Corpus Domini, gli abitanti di La Orotava ricoprono le strade e la piazza principale di alfombras, tappeti fatti di petali di fiori e di terra e sabbia colorate portate giù dalle pendici del Teide. Il grande tappeto davanti al municipio ha raggiunto dimensioni da record mondiale, opera di settimane, posata granello per granello e poi calpestata e scomparsa nel giro di pochi giorni.',
          ],
        },
        {
          heading: 'Cosa notare',
          paragraphs: [
            'Oltre la Casa de los Balcones, trova la barocca Iglesia de la Concepción, una delle più belle del suo genere nelle isole, e i giardini terrazzati della Victoria con il loro tempio di marmo. La Hijuela del Botánico, un piccolo orto botanico nascosto dietro il municipio, nacque come una propaggine del famoso giardino di acclimatazione più in basso, a Puerto de la Cruz.',
          ],
        },
        {
          heading: 'Quando andare',
          paragraphs: [
            'La valle è mite tutto l’anno. Per lo spettacolo completo, vieni attorno al Corpus Domini, a fine primavera o inizio estate, quando si stendono i tappeti, anche se le date esatte cambiano ogni anno con il calendario religioso. Le strade sono ripide, perciò scarpe comode contano qui più che quasi ovunque sull’isola.',
          ],
        },
      ],
      mapHeading: 'Dove si trova La Orotava?',
      mapIntro:
        'La Orotava sorge nella verde valle omonima, sul lato nord di Tenerife, arrampicandosi sui pendii verso il Teide. Si trova a circa quattro chilometri sopra la cittadina costiera di Puerto de la Cruz e a circa mezz’ora dalla capitale, Santa Cruz. Il suo comune è il più grande dell’isola e arriva fino alla vetta del Teide, a 3.718 metri, il punto più alto della Spagna.',
      bonusHeading: 'Tre cose che quasi nessun visitatore scopre',
      bonus: [
        {
          lead: 'La piazza è un record mondiale.',
          text:
            'Il tappeto di sabbia del Corpus Domini steso davanti al municipio è stato riconosciuto come opera da record nel suo genere, fatto di tonnellate di terra vulcanica naturalmente colorata raccolta nel parco nazionale del Teide, poi distrutto nel giro di pochi giorni.',
        },
        {
          lead: 'Un tempio per un escluso.',
          text:
            'La rotonda di marmo nei giardini della Victoria fu costruita come mausoleo per un marchese e massone locale che la Chiesa rifiutò di seppellire in terra consacrata. Dopo anni di dispute, il tempio restò, alla fine, vuoto.',
        },
        {
          lead: 'La valle che sbalordì uno scienziato.',
          text:
            'Quando l’esploratore Alexander von Humboldt vi passò nel 1799, rimase sopraffatto dalla valle di La Orotava, e un belvedere sopra la città porta ancora il suo nome e la sua statua.',
        },
      ],
      langHeading: 'La Orotava nella tua lingua, tutte e 32',
      ctaHeading: 'Ottieni la chiave di La Orotava',
      ctaIntro:
        'Scegli le tue tappe, inizia a camminare e lascia che la voce ti riveli ciò che tutti gli altri superano senza notarlo.',
    },
    nl: {
      metaTitle: 'Audiotour La Orotava · Wandeling op eigen houtje',
      metaDescription:
        'Een zelfgeleide gps-audiotour van La Orotava, de best bewaarde historische stad van Tenerife. Beklim de oude adellijke straten op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline.',
      keywords:
        'audiotour la orotava, zelfgeleide tour la orotava, bezienswaardigheden la orotava tenerife, stadswandeling la orotava, casa de los balcones',
      ogTitle: 'Audiotour La Orotava | Fun Zone Tenerife',
      ogDescription:
        'Ontdek de historische heuvelstad La Orotava op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline, met een augmented-reality-gids.',
      heroIntro:
        'Een zelfgeleide gps-audiowandeling door de steile, met bloemen gevulde straten van La Orotava, de valleistad die suiker en wijn bouwden. Gesneden cederhouten balkons, aristocratische binnenplaatsen en een plein dat eens per jaar een tapijt van vulkanisch zand wordt, verteld in je oor waar ze staan.',
      postcardHeading: 'La Orotava, de stad achter de balkons',
      postcardIntro:
        'Niet die ene foto die iedereen maakt. De verhalen binnen de oude huizen en de terrastuinen, in je oor gefluisterd op precies de plek waar ze thuishoren. Hier zijn er drie. Veel meer wachten in de tour.',
      secrets: [
        {
          place: 'Casa de los Balcones',
          teaser:
            'De meest gefotografeerde balkons van de Canarische Eilanden hangen aan een huis dat in 1632 werd begonnen. Stap door de deur en de echte verrassing is de binnenplaats erachter, en de familie die al deze rijkdom uit wijn sneed.',
        },
        {
          place: 'Jardines de la Quinta Roja',
          teaser:
            'Een marmeren tempel bekroont deze heuveltuin, gebouwd voor een edelman die de Kerk niet in gewijde grond wilde begraven. De reden, en de wending over waar hij uiteindelijk belandde, is een verhaal dat de tuin stil houdt.',
        },
        {
          place: 'Plaza del Ayuntamiento',
          teaser:
            'Een paar dagen per zomer wordt dit gewone plein een enorm schilderij, volledig gemaakt van gekleurd zand dat van de vulkaan is gehaald, groot genoeg voor een wereldrecord. Daarna wordt het weggeveegd.',
        },
      ],
      storyTitle: 'De geschiedenis van La Orotava',
      storyIntro: [
        'La Orotava is de aristocraat van het noorden van Tenerife, een heuvelstad met adellijke huizen en steile geplaveide straten die uitkijkt over een groene vallei naar de zee. Ze draagt haar geschiedenis vollediger dan bijna nergens anders op het eiland, en de oude kern is klein genoeg om volledig te voet te verkennen, al zullen je benen de hellingen voelen.',
        'Lang voor de Spanjaarden kwamen, was deze vallei het hart van Taoro, het machtigste van de Guanche-koninkrijken die over het eiland heersten. Na de verovering werd het land vanaf 1502 verdeeld, en een economie van suiker en daarna Malvasía-wijn maakte een handvol koopmansfamilies zeer rijk, die hun geld in het gesneden steen en het cederhout staken die je vandaag nog ziet.',
      ],
      storyBlocks: [
        {
          heading: 'Een stad gebouwd op suiker en wijn',
          paragraphs: [
            'De statige huizen langs de Calle San Francisco werden opgetrokken door handelaren die rijk werden met het verschepen van suiker en zoete Malvasía-wijn naar Noord-Europa. De kroon verleende de stad in 1648 de status van onafhankelijke villa, en het historische centrum wordt vaak het best bewaarde voorbeeld van traditionele Canarische architectuur op het eiland genoemd, sinds 1976 beschermd als historisch-artistiek geheel.',
          ],
        },
        {
          heading: 'Tapijten van vulkanisch zand',
          paragraphs: [
            'Eens per jaar, met Sacramentsdag, bedekken de inwoners van La Orotava hun straten en het hoofdplein met alfombras, tapijten van bloemblaadjes en van gekleurde aarde en zand van de hellingen van de Teide. Het grote tapijt voor het stadhuis heeft wereldrecordformaat bereikt, het werk van weken, korrel voor korrel gelegd en dan binnen enkele dagen betreden en verdwenen.',
          ],
        },
        {
          heading: 'Waar je op moet letten',
          paragraphs: [
            'Voorbij de Casa de los Balcones vind je de barokke Iglesia de la Concepción, een van de mooiste in zijn soort op de eilanden, en de terrastuinen van de Victoria met hun marmeren tempel. De Hijuela del Botánico, een kleine botanische tuin verscholen achter het stadhuis, begon als een uitloper van de beroemde acclimatisatietuin verderop beneden, in Puerto de la Cruz.',
          ],
        },
        {
          heading: 'Wanneer te gaan',
          paragraphs: [
            'De vallei is het hele jaar mild. Voor het volledige spektakel kom je rond Sacramentsdag, in het late voorjaar of de vroege zomer, wanneer de tapijten worden gelegd, al verschuiven de exacte data elk jaar met de kerkelijke kalender. De straten zijn steil, dus comfortabele schoenen tellen hier meer dan bijna overal op het eiland.',
          ],
        },
      ],
      mapHeading: 'Waar ligt La Orotava?',
      mapIntro:
        'La Orotava ligt in de groene vallei van dezelfde naam aan de noordkant van Tenerife, tegen de hellingen op naar de Teide. Ze ligt zo’n vier kilometer boven de kustplaats Puerto de la Cruz en ongeveer een half uur van de hoofdstad Santa Cruz. De gemeente is de grootste van het eiland en reikt helemaal tot de 3.718 meter hoge top van de Teide, het hoogste punt van Spanje.',
      bonusHeading: 'Drie dingen die de meeste bezoekers nooit te weten komen',
      bonus: [
        {
          lead: 'Het plein is een wereldrecord.',
          text:
            'Het Sacramentsdag-zandtapijt voor het stadhuis is erkend als een recordwerk in zijn soort, gemaakt van tonnen natuurlijk gekleurde vulkanische aarde uit het nationaal park van de Teide, en binnen enkele dagen vernietigd.',
        },
        {
          lead: 'Een tempel voor een verstotene.',
          text:
            'De marmeren rotonde in de Victoria-tuinen werd gebouwd als mausoleum voor een plaatselijke markies en vrijmetselaar die de Kerk weigerde in gewijde grond te begraven. Na jaren van onenigheid bleef de tempel uiteindelijk leeg.',
        },
        {
          lead: 'De vallei die een wetenschapper overweldigde.',
          text:
            'Toen de ontdekkingsreiziger Alexander von Humboldt hier in 1799 doorheen trok, werd hij overweldigd door de vallei van La Orotava, en een uitkijkpunt boven de stad draagt nog altijd zijn naam en zijn standbeeld.',
        },
      ],
      langHeading: 'La Orotava in jouw taal, alle 32',
      ctaHeading: 'Haal de sleutel tot La Orotava',
      ctaIntro:
        'Kies je stops, begin te lopen en laat de stem onthullen wat alle anderen zonder meer voorbijlopen.',
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
    fr: {
      metaTitle: 'Visite audio de Puerto de la Cruz · En autonomie',
      metaDescription:
        'Une visite audio GPS en autonomie de Puerto de la Cruz, la première station balnéaire des îles Canaries. Parcourez le port, les jardins et le lido de Manrique à votre rythme avec des récits en voix native dans 32 langues, hors ligne.',
      keywords:
        'visite audio puerto de la cruz, visite autoguidée puerto de la cruz, que faire à puerto de la cruz tenerife, visite à pied puerto de la cruz, lago martiánez',
      ogTitle: 'Visite audio de Puerto de la Cruz | Fun Zone Tenerife',
      ogDescription:
        'Parcourez la vieille station balnéaire de Puerto de la Cruz à votre rythme avec des récits en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée.',
      heroIntro:
        'Une balade audio GPS en autonomie dans la ville qui a inventé le tourisme canarien. Un port de pêche devenu station thermale victorienne, un lido d’eau de mer façonné par un artiste et un jardin botanique royal, racontés à votre oreille là où ils dominent l’Atlantique.',
      postcardHeading: 'Puerto de la Cruz, bien plus que ses plages',
      postcardIntro:
        'Pas les clichés de transats. Les histoires derrière le port, les jardins et les vieux hôtels, murmurées à votre oreille à l’endroit exact où elles ont eu lieu. En voici trois. Beaucoup d’autres vous attendent dans la visite.',
      secrets: [
        {
          place: 'Jardín Botánico',
          teaser:
            'Un roi ordonna la création de ce jardin pour que des plantes rapportées de l’autre bout du monde apprennent à survivre en Europe. Plus de deux siècles plus tard, elles sont toujours là, dont un figuier grand comme une maison.',
        },
        {
          place: 'Lago Martiánez',
          teaser:
            'Ces piscines d’eau de mer sculptées ne sont pas qu’une baignade. Elles sont l’œuvre de l’un des artistes les plus célèbres d’Espagne, bâties en roche volcanique noire à l’endroit même où s’étendaient autrefois des bassins de marée naturels.',
        },
        {
          place: 'Gran Hotel Taoro',
          teaser:
            'Le grand hôtel sur la colline attirait les malades et les aristocrates d’Europe quand le tourisme de Tenerife était tout neuf, et en 1927 il accueillit une très célèbre invitée qui venait de réapparaître après s’être volatilisée d’Angleterre.',
        },
      ],
      storyTitle: 'L’histoire de Puerto de la Cruz',
      storyIntro: [
        'Puerto de la Cruz est le berceau du tourisme à Tenerife. Ville compacte de la verdoyante côte nord, elle enveloppe un port de pêche en activité de jardins, de promenades et de vieux hôtels, avec les pentes de la vallée de l’Orotava qui s’élèvent derrière et l’Atlantique qui déferle devant. Elle est plate, parcourable à pied et bien plus ancienne d’esprit que les stations du sud.',
        'Elle s’est développée comme le port de La Orotava, à l’intérieur des terres, et quand l’éruption de 1706 détruisit le port de Garachico le long de la côte, Puerto de la Cruz devint le port le plus important de l’île, expédiant sucre et vin. Au XIXe siècle, un nouveau genre de visiteurs arriva, des Européens du Nord en quête de la douceur de l’hiver, faisant d’elle l’une des premières stations de villégiature des îles Canaries.',
      ],
      storyBlocks: [
        {
          heading: 'La première station balnéaire des îles',
          paragraphs: [
            'À la fin du XIXe siècle, la ville avait ses grands hôtels, dont le Taoro en haut dans son parc, bâti avec de l’argent britannique et inauguré en 1890, tandis que de vieilles demeures du centre devenaient les premières pensions. Une communauté britannique s’y enracina, laissant derrière elle une église anglicane et le plus ancien cimetière anglican des Canaries. Le tourisme de masse du soleil et de la mer vint plus tard, dans les années 1950.',
          ],
        },
        {
          heading: 'Jardins, piscines et la main d’un artiste',
          paragraphs: [
            'En 1788, le roi Carlos III ordonna la création d’un jardin botanique ici, le Jardín de Aclimatación, pour acclimater des plantes tropicales rapportées des colonies espagnoles avant de les envoyer sur le continent. On le cite souvent comme le deuxième plus ancien jardin botanique d’Espagne. Sur le front de mer, le lido de Lago Martiánez, un ensemble de piscines d’eau de mer en roche volcanique noire, fut conçu par l’artiste lanzarotien César Manrique et achevé dans les années 1970.',
          ],
        },
        {
          heading: 'À ne pas manquer',
          paragraphs: [
            'Flânez dans le vieux quartier des pêcheurs autour de la Plaza del Charco, le petit Castillo de San Felipe qui gardait jadis la côte contre les pirates, et le sable noir de la Playa Jardín à l’extrémité ouest. Le port lui-même débarque encore du poisson, et les ruelles de La Ranilla derrière lui sont devenues le coin le plus plein de caractère de la ville.',
          ],
        },
        {
          heading: 'Quand y aller',
          paragraphs: [
            'La côte nord est plus douce et plus verte que le sud, et souvent un peu plus nuageuse, ce qui est précisément ce qui attira d’abord les visiteurs d’hiver. C’est une ville de toute l’année, la plus fréquentée par les Européens du Nord en hiver et par les vacanciers espagnols en août. Le Carnaval, à la fin de l’hiver, est la semaine la plus déchaînée pour y être.',
          ],
        },
      ],
      mapHeading: 'Où se trouve Puerto de la Cruz ?',
      mapIntro:
        'Puerto de la Cruz se trouve sur la côte nord de Tenerife, la plus grande des îles Canaries espagnoles, juste en dessous de la ville de La Orotava et à environ une demi-heure à l’ouest de la capitale, Santa Cruz. Elle fait face à l’Atlantique ouvert, avec la verdoyante vallée de l’Orotava qui grimpe derrière elle vers le Teide.',
      bonusHeading: 'Trois choses que la plupart des visiteurs ignorent',
      bonus: [
        {
          lead: 'Un jardin créé pour apprivoiser les tropiques.',
          text:
            'Le jardin botanique de la ville fut fondé en 1788 sur ordre d’un roi d’Espagne, comme une étape intermédiaire où les plantes tropicales des Amériques et d’Asie pouvaient s’habituer au climat canarien avant d’être envoyées vers les jardins royaux du continent.',
        },
        {
          lead: 'Des piscines dessinées par un artiste.',
          text:
            'L’ensemble balnéaire de Lago Martiánez, sur le front de mer, fut façonné par César Manrique, l’artiste de Lanzarote, qui transforma une portion de côte en un paysage de lacs d’eau de mer et de roche volcanique noire plutôt qu’en une piscine ordinaire.',
        },
        {
          lead: 'Un troupeau de chèvres dans la mer.',
          text:
            'Chaque année, la veille de la Saint-Jean, des centaines de chèvres sont menées jusqu’au port et conduites dans l’Atlantique lors d’un rituel de bain dont les racines remontent au passé guanche de l’île.',
        },
      ],
      langHeading: 'Puerto de la Cruz dans votre langue, les 32',
      ctaHeading: 'Obtenez la clé de Puerto de la Cruz',
      ctaIntro:
        'Choisissez vos étapes, commencez à marcher et laissez la voix révéler ce que tous les autres dépassent sans le voir.',
    },
    es: {
      metaTitle: 'Audioguía de Puerto de la Cruz · Ruta autoguiada',
      metaDescription:
        'Una audioguía GPS autoguiada de Puerto de la Cruz, el primer destino turístico de las islas Canarias. Recorre el puerto, los jardines y el lido de Manrique a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión.',
      keywords:
        'audioguía puerto de la cruz, ruta autoguiada puerto de la cruz, qué ver en puerto de la cruz tenerife, ruta a pie puerto de la cruz, lago martiánez',
      ogTitle: 'Audioguía de Puerto de la Cruz | Fun Zone Tenerife',
      ogDescription:
        'Recorre la vieja ciudad turística de Puerto de la Cruz a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión, con un guía de realidad aumentada.',
      heroIntro:
        'Un paseo con audioguía GPS autoguiada por la ciudad que inventó el turismo canario. Un puerto pesquero convertido en balneario victoriano, un lido de agua de mar moldeado por un artista y un jardín botánico real, narrados a tu oído allí donde se asoman al Atlántico.',
      postcardHeading: 'Puerto de la Cruz, mucho más que sus playas',
      postcardIntro:
        'No las fotos de hamaca. Las historias tras el puerto, los jardines y los viejos hoteles, susurradas al oído en el lugar exacto al que pertenecen. Aquí tienes tres. Muchas más te esperan dentro del tour.',
      secrets: [
        {
          place: 'Jardín Botánico',
          teaser:
            'Un rey mandó construir este jardín para que las plantas traídas del otro extremo del mundo aprendieran a sobrevivir en Europa. Más de dos siglos después siguen aquí, incluida una higuera del tamaño de una casa.',
        },
        {
          place: 'Lago Martiánez',
          teaser:
            'Estas piscinas de agua de mar esculpidas no son solo un baño. Son obra de uno de los artistas más célebres de España, levantadas en roca volcánica negra en el mismo lugar donde antaño había charcos de marea naturales.',
        },
        {
          place: 'Gran Hotel Taoro',
          teaser:
            'El gran hotel de la colina atraía a los enfermos y aristócratas de Europa cuando el turismo de Tenerife era nuevo, y en 1927 acogió a una huésped muy famosa que acababa de reaparecer tras esfumarse de Inglaterra.',
        },
      ],
      storyTitle: 'La historia de Puerto de la Cruz',
      storyIntro: [
        'Puerto de la Cruz es donde empezó el turismo en Tenerife. Una ciudad compacta en la verde costa norte que envuelve un puerto pesquero en activo con jardines, paseos y viejos hoteles, con las laderas del valle de La Orotava alzándose detrás y el Atlántico rompiendo delante. Es llana, caminable y mucho más antigua de espíritu que los complejos del sur.',
        'Creció como puerto de La Orotava, tierra adentro, y cuando la erupción de 1706 destruyó el puerto de Garachico por la costa, Puerto de la Cruz pasó a ser el puerto más importante de la isla, embarcando azúcar y vino. En el siglo XIX llegó un nuevo tipo de visitante, europeos del norte en busca del suave clima invernal, lo que la convirtió en uno de los primeros destinos vacacionales de las islas Canarias.',
      ],
      storyBlocks: [
        {
          heading: 'El primer destino turístico de las islas',
          paragraphs: [
            'A finales del siglo XIX la ciudad tenía sus grandes hoteles, entre ellos el Taoro, arriba en su parque, construido con dinero británico e inaugurado en 1890, mientras antiguas mansiones del centro se convertían en las primeras casas de huéspedes. Una comunidad británica echó raíces aquí, dejando tras de sí una iglesia anglicana y el cementerio anglicano más antiguo de Canarias. El turismo de masas de sol y playa llegó después, en los años cincuenta.',
          ],
        },
        {
          heading: 'Jardines, piscinas y la mano de un artista',
          paragraphs: [
            'En 1788 el rey Carlos III ordenó un jardín botánico aquí, el Jardín de Aclimatación, para aclimatar plantas tropicales traídas de las colonias de España antes de enviarlas a la península. Se le suele llamar el segundo jardín botánico más antiguo de España. En el paseo marítimo, el lido de Lago Martiánez, un complejo de piscinas de agua de mar en piedra volcánica negra, lo diseñó el artista lanzaroteño César Manrique y se terminó en los años setenta.',
          ],
        },
        {
          heading: 'En qué fijarse',
          paragraphs: [
            'Pasea por el viejo barrio pesquero en torno a la Plaza del Charco, el pequeño Castillo de San Felipe que antaño protegía la costa de los piratas, y la arena negra de la Playa Jardín en el extremo oeste. El propio puerto aún desembarca pescado, y las callejas de La Ranilla tras él se han convertido en el rincón de más carácter de la ciudad.',
          ],
        },
        {
          heading: 'Cuándo ir',
          paragraphs: [
            'La costa norte es más suave y verde que el sur, y a menudo algo más nubosa, que es justo lo que atrajo al principio a los visitantes de invierno. Es una ciudad de todo el año, con más europeos del norte en invierno y veraneantes españoles en agosto. El Carnaval, a finales de invierno, es la semana más desatada para estar aquí.',
          ],
        },
      ],
      mapHeading: '¿Dónde está Puerto de la Cruz?',
      mapIntro:
        'Puerto de la Cruz se encuentra en la costa norte de Tenerife, la mayor de las islas Canarias españolas, justo debajo de la villa de La Orotava y a cosa de media hora al oeste de la capital, Santa Cruz. Da al Atlántico abierto, con el verde valle de La Orotava trepando tras ella hacia el Teide.',
      bonusHeading: 'Tres cosas que casi ningún visitante llega a saber',
      bonus: [
        {
          lead: 'Un jardín creado para domar los trópicos.',
          text:
            'El jardín botánico de la ciudad se fundó en 1788 por orden de un rey de España, como una escala donde las plantas tropicales de América y Asia podían habituarse al clima canario antes de ser enviadas a los jardines reales de la península.',
        },
        {
          lead: 'Piscinas diseñadas por un artista.',
          text:
            'El complejo de baños de Lago Martiánez, en el paseo marítimo, lo moldeó César Manrique, el artista de Lanzarote, que convirtió un tramo de costa en un paisaje de lagos de agua de mar y roca volcánica negra en lugar de una piscina corriente.',
        },
        {
          lead: 'Un rebaño de cabras en el mar.',
          text:
            'Cada año, la víspera de San Juan, cientos de cabras son llevadas hasta el puerto y metidas en el Atlántico en un ritual de baño cuyas raíces se remontan al pasado guanche de la isla.',
        },
      ],
      langHeading: 'Puerto de la Cruz en tu idioma, los 32',
      ctaHeading: 'Consigue la llave de Puerto de la Cruz',
      ctaIntro:
        'Elige tus paradas, empieza a caminar y deja que la voz te revele lo que todos los demás pasan de largo.',
    },
    de: {
      metaTitle: 'Audioguide Puerto de la Cruz · Rundgang auf eigene Faust',
      metaDescription:
        'Ein selbstgeführter GPS-Audioguide durch Puerto de la Cruz, den ersten Urlaubsort der Kanarischen Inseln. Erkunden Sie Hafen, Gärten und Manriques Meerwasserbad in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline.',
      keywords:
        'audioguide puerto de la cruz, selbstgeführte tour puerto de la cruz, puerto de la cruz teneriffa sehenswürdigkeiten, stadtrundgang puerto de la cruz, lago martiánez',
      ogTitle: 'Audioguide Puerto de la Cruz | Fun Zone Tenerife',
      ogDescription:
        'Erkunden Sie den alten Urlaubsort Puerto de la Cruz in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide.',
      heroIntro:
        'Ein selbstgeführter GPS-Audiospaziergang durch die Stadt, die den kanarischen Tourismus erfand. Ein Fischerhafen, der zum viktorianischen Kurort wurde, ein von einem Künstler geformtes Meerwasserbad und ein königlicher botanischer Garten, erzählt in Ihrem Ohr dort, wo sie über dem Atlantik liegen.',
      postcardHeading: 'Puerto de la Cruz, mehr als seine Strände',
      postcardIntro:
        'Nicht die Fotos von der Sonnenliege. Die Geschichten hinter dem Hafen, den Gärten und den alten Hotels, Ihnen ins Ohr geflüstert, genau an dem Ort, an den sie gehören. Hier sind drei. Viele weitere warten in der Tour.',
      secrets: [
        {
          place: 'Jardín Botánico',
          teaser:
            'Ein König ließ diesen Garten anlegen, damit Pflanzen vom anderen Ende der Welt lernten, in Europa zu überleben. Mehr als zwei Jahrhunderte später sind sie noch hier, darunter ein Feigenbaum groß wie ein Haus.',
        },
        {
          place: 'Lago Martiánez',
          teaser:
            'Diese geformten Meerwasserbecken sind nicht nur zum Schwimmen. Sie sind das Werk eines der berühmtesten Künstler Spaniens, erbaut aus schwarzem Vulkangestein an genau der Stelle, wo einst natürliche Gezeitentümpel lagen.',
        },
        {
          place: 'Gran Hotel Taoro',
          teaser:
            'Das große Hotel auf dem Hügel zog Europas Kranke und Aristokraten an, als Teneriffas Tourismus brandneu war, und 1927 nahm es einen sehr berühmten Gast auf, der gerade wieder aufgetaucht war, nachdem er aus England verschwunden war.',
        },
      ],
      storyTitle: 'Die Geschichte von Puerto de la Cruz',
      storyIntro: [
        'Puerto de la Cruz ist der Ort, an dem der Tourismus auf Teneriffa begann. Eine kompakte Stadt an der grünen Nordküste, die einen arbeitenden Fischerhafen in Gärten, Promenaden und alte Hotels hüllt, mit den Hängen des Orotava-Tals, die sich dahinter erheben, und dem Atlantik, der davor bricht. Sie ist flach, zu Fuß begehbar und ihrem Geist nach weit älter als die Resortmeilen des Südens.',
        'Sie wuchs als Hafen des landeinwärts gelegenen La Orotava heran, und als der Ausbruch von 1706 den Hafen von Garachico an der Küste zerstörte, stieg Puerto de la Cruz zum wichtigsten Hafen der Insel auf und verschiffte Zucker und Wein. Im 19. Jahrhundert kam eine neue Art von Besuchern, Nordeuropäer auf der Suche nach dem milden Winterklima, was sie zu einem der ersten Urlaubsorte der Kanarischen Inseln machte.',
      ],
      storyBlocks: [
        {
          heading: 'Der erste Urlaubsort der Inseln',
          paragraphs: [
            'Gegen Ende des 19. Jahrhunderts hatte die Stadt ihre Grandhotels, darunter das Taoro oben in seinem Park, mit britischem Geld gebaut und 1890 eröffnet, während alte Herrenhäuser im Zentrum zu den ersten Pensionen wurden. Eine britische Gemeinde schlug hier Wurzeln und hinterließ eine anglikanische Kirche und den ältesten anglikanischen Friedhof der Kanaren. Der Massentourismus von Sonne und Meer kam später, in den 1950er-Jahren.',
          ],
        },
        {
          heading: 'Gärten, Becken und die Hand eines Künstlers',
          paragraphs: [
            '1788 ordnete König Carlos III. hier einen botanischen Garten an, den Jardín de Aclimatación, um tropische Pflanzen aus Spaniens Kolonien zu akklimatisieren, bevor sie aufs Festland weitergeschickt wurden. Er gilt oft als der zweitälteste botanische Garten Spaniens. An der Uferpromenade wurde das Meerwasserbad Lago Martiánez, ein Komplex von Meerwasserbecken aus schwarzem Vulkangestein, vom Lanzarote-Künstler César Manrique entworfen und in den 1970er-Jahren fertiggestellt.',
          ],
        },
        {
          heading: 'Worauf Sie achten sollten',
          paragraphs: [
            'Schlendern Sie durch das alte Fischerviertel rund um die Plaza del Charco, das kleine Castillo de San Felipe, das einst die Küste gegen Piraten schützte, und den schwarzen Sand der Playa Jardín am westlichen Ende. Der Hafen selbst landet noch immer Fisch an, und die Gassen von La Ranilla dahinter sind zum charaktervollsten Winkel der Stadt geworden.',
          ],
        },
        {
          heading: 'Wann Sie kommen sollten',
          paragraphs: [
            'Die Nordküste ist milder und grüner als der Süden und oft etwas wolkiger, was Winterbesucher zuerst anzog. Es ist eine Ganzjahresstadt, am stärksten besucht von Nordeuropäern im Winter und von spanischen Urlaubern im August. Der Karneval im Spätwinter ist die ausgelassenste Woche, um hier zu sein.',
          ],
        },
      ],
      mapHeading: 'Wo liegt Puerto de la Cruz?',
      mapIntro:
        'Puerto de la Cruz liegt an der Nordküste Teneriffas, der größten der spanischen Kanarischen Inseln, direkt unterhalb der Stadt La Orotava und etwa eine halbe Stunde westlich der Hauptstadt Santa Cruz. Es blickt auf den offenen Atlantik, während das grüne Orotava-Tal dahinter zum Teide ansteigt.',
      bonusHeading: 'Drei Dinge, die die meisten Besucher nie erfahren',
      bonus: [
        {
          lead: 'Ein Garten, um die Tropen zu zähmen.',
          text:
            'Der botanische Garten der Stadt wurde 1788 auf Anordnung eines spanischen Königs gegründet, als Zwischenstation, in der tropische Pflanzen aus Amerika und Asien an das kanarische Klima gewöhnt werden konnten, bevor sie zu den königlichen Gärten des Festlands weitergeschickt wurden.',
        },
        {
          lead: 'Von einem Künstler gestaltete Becken.',
          text:
            'Die Badeanlage Lago Martiánez an der Uferpromenade wurde von César Manrique, dem Künstler aus Lanzarote, geformt, der einen Küstenstreifen in eine Landschaft aus Meerwasserseen und schwarzem Vulkangestein verwandelte statt in ein gewöhnliches Schwimmbad.',
        },
        {
          lead: 'Eine Ziegenherde im Meer.',
          text:
            'Jedes Jahr am Vorabend von San Juan werden Hunderte Ziegen zum Hafen getrieben und in den Atlantik geführt, in einem Baderitual, dessen Wurzeln bis in die Guanchen-Vergangenheit der Insel zurückreichen.',
        },
      ],
      langHeading: 'Puerto de la Cruz in Ihrer Sprache, alle 32',
      ctaHeading: 'Holen Sie sich den Schlüssel zu Puerto de la Cruz',
      ctaIntro:
        'Wählen Sie Ihre Stationen, gehen Sie los und lassen Sie die Stimme enthüllen, woran alle anderen achtlos vorbeigehen.',
    },
    it: {
      metaTitle: 'Audioguida di Puerto de la Cruz · Tour in autonomia',
      metaDescription:
        'Un tour audio GPS in autonomia di Puerto de la Cruz, la prima località turistica delle isole Canarie. Scopri il porto, i giardini e il lido di Manrique al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline.',
      keywords:
        'audioguida puerto de la cruz, tour autoguidato puerto de la cruz, cosa vedere a puerto de la cruz tenerife, tour a piedi puerto de la cruz, lago martiánez',
      ogTitle: 'Audioguida di Puerto de la Cruz | Fun Zone Tenerife',
      ogDescription:
        'Scopri la vecchia località di Puerto de la Cruz al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline, con una guida in realtà aumentata.',
      heroIntro:
        'Una passeggiata con audioguida GPS in autonomia nella città che ha inventato il turismo canario. Un porto di pescatori diventato stazione termale vittoriana, un lido d’acqua di mare plasmato da un artista e un giardino botanico reale, raccontati al tuo orecchio dove si affacciano sull’Atlantico.',
      postcardHeading: 'Puerto de la Cruz, molto più delle sue spiagge',
      postcardIntro:
        'Non gli scatti dal lettino. Le storie dietro il porto, i giardini e i vecchi alberghi, sussurrate al tuo orecchio nel punto esatto a cui appartengono. Eccone tre. Molte altre ti aspettano nel tour.',
      secrets: [
        {
          place: 'Jardín Botánico',
          teaser:
            'Un re ordinò di creare questo giardino perché le piante portate dall’altro capo del mondo imparassero a sopravvivere in Europa. Più di due secoli dopo sono ancora qui, compreso un fico grande come una casa.',
        },
        {
          place: 'Lago Martiánez',
          teaser:
            'Queste piscine d’acqua di mare scolpite non sono solo una nuotata. Sono opera di uno degli artisti più celebri di Spagna, costruite in roccia vulcanica nera proprio dove un tempo c’erano pozze di marea naturali.',
        },
        {
          place: 'Gran Hotel Taoro',
          teaser:
            'Il grande albergo sulla collina attirava i malati e gli aristocratici d’Europa quando il turismo di Tenerife era nuovissimo, e nel 1927 accolse un’ospite famosissima appena riapparsa dopo essere svanita dall’Inghilterra.',
        },
      ],
      storyTitle: 'La storia di Puerto de la Cruz',
      storyIntro: [
        'Puerto de la Cruz è dove è cominciato il turismo a Tenerife. Una città compatta sulla verde costa nord, avvolge un porto di pescatori in attività tra giardini, lungomari e vecchi alberghi, con i pendii della valle di La Orotava che salgono alle spalle e l’Atlantico che si infrange davanti. È pianeggiante, percorribile a piedi e molto più antica nello spirito delle fasce di resort del sud.',
        'Crebbe come porto di La Orotava, nell’entroterra, e quando l’eruzione del 1706 distrusse il porto di Garachico lungo la costa, Puerto de la Cruz divenne il porto più importante dell’isola, imbarcando zucchero e vino. Nell’Ottocento arrivò un nuovo tipo di visitatore, nordeuropei in cerca del mite clima invernale, facendone una delle prime località di villeggiatura delle isole Canarie.',
      ],
      storyBlocks: [
        {
          heading: 'La prima località turistica delle isole',
          paragraphs: [
            'Verso la fine dell’Ottocento la città aveva i suoi grandi alberghi, tra cui il Taoro su nel suo parco, costruito con capitale britannico e inaugurato nel 1890, mentre antiche dimore del centro diventavano le prime pensioni. Una comunità britannica mise radici qui, lasciando una chiesa anglicana e il più antico cimitero anglicano delle Canarie. Il turismo di massa di sole e mare arrivò dopo, negli anni Cinquanta.',
          ],
        },
        {
          heading: 'Giardini, piscine e la mano di un artista',
          paragraphs: [
            'Nel 1788 il re Carlos III ordinò qui un giardino botanico, il Jardín de Aclimatación, per acclimatare piante tropicali portate dalle colonie spagnole prima di inviarle alla madrepatria. È spesso definito il secondo giardino botanico più antico di Spagna. Sul lungomare, il lido di Lago Martiánez, un complesso di piscine d’acqua di mare in pietra vulcanica nera, fu progettato dall’artista di Lanzarote César Manrique e completato negli anni Settanta.',
          ],
        },
        {
          heading: 'Cosa notare',
          paragraphs: [
            'Passeggia nel vecchio quartiere dei pescatori attorno alla Plaza del Charco, il piccolo Castillo de San Felipe che un tempo difendeva la costa dai pirati, e la sabbia nera della Playa Jardín all’estremità ovest. Il porto stesso sbarca ancora pesce, e i vicoli di La Ranilla dietro di esso sono diventati l’angolo più caratteristico della città.',
          ],
        },
        {
          heading: 'Quando andare',
          paragraphs: [
            'La costa nord è più mite e più verde del sud, e spesso un po’ più nuvolosa, il che è proprio ciò che all’inizio attirò i visitatori invernali. È una città di tutto l’anno, più affollata di nordeuropei in inverno e di vacanzieri spagnoli ad agosto. Il Carnevale, a fine inverno, è la settimana più sfrenata per esserci.',
          ],
        },
      ],
      mapHeading: 'Dove si trova Puerto de la Cruz?',
      mapIntro:
        'Puerto de la Cruz si trova sulla costa nord di Tenerife, la più grande delle isole Canarie spagnole, appena sotto la cittadina di La Orotava e a circa mezz’ora a ovest della capitale, Santa Cruz. Si affaccia sull’Atlantico aperto, con la verde valle di La Orotava che sale alle sue spalle verso il Teide.',
      bonusHeading: 'Tre cose che quasi nessun visitatore scopre',
      bonus: [
        {
          lead: 'Un giardino creato per domare i tropici.',
          text:
            'Il giardino botanico della città fu fondato nel 1788 per ordine di un re di Spagna, come tappa intermedia dove le piante tropicali delle Americhe e dell’Asia potevano abituarsi al clima canario prima di essere inviate ai giardini reali della madrepatria.',
        },
        {
          lead: 'Piscine disegnate da un artista.',
          text:
            'Il complesso balneare di Lago Martiánez, sul lungomare, fu plasmato da César Manrique, l’artista di Lanzarote, che trasformò un tratto di costa in un paesaggio di laghi d’acqua di mare e roccia vulcanica nera anziché in una piscina qualunque.',
        },
        {
          lead: 'Un gregge di capre in mare.',
          text:
            'Ogni anno, alla vigilia di San Juan, centinaia di capre vengono condotte al porto e fatte entrare nell’Atlantico in un rito di bagno le cui radici risalgono al passato guancio dell’isola.',
        },
      ],
      langHeading: 'Puerto de la Cruz nella tua lingua, tutte e 32',
      ctaHeading: 'Ottieni la chiave di Puerto de la Cruz',
      ctaIntro:
        'Scegli le tue tappe, inizia a camminare e lascia che la voce ti riveli ciò che tutti gli altri superano senza notarlo.',
    },
    nl: {
      metaTitle: 'Audiotour Puerto de la Cruz · Wandeling op eigen houtje',
      metaDescription:
        'Een zelfgeleide gps-audiotour van Puerto de la Cruz, de eerste badplaats van de Canarische Eilanden. Ontdek de haven, de tuinen en het zeewaterbad van Manrique op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline.',
      keywords:
        'audiotour puerto de la cruz, zelfgeleide tour puerto de la cruz, bezienswaardigheden puerto de la cruz tenerife, stadswandeling puerto de la cruz, lago martiánez',
      ogTitle: 'Audiotour Puerto de la Cruz | Fun Zone Tenerife',
      ogDescription:
        'Ontdek de oude badplaats Puerto de la Cruz op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline, met een augmented-reality-gids.',
      heroIntro:
        'Een zelfgeleide gps-audiowandeling door de stad die het Canarische toerisme uitvond. Een vissershaven die een Victoriaans kuuroord werd, een zeewaterbad gevormd door een kunstenaar en een koninklijke botanische tuin, verteld in je oor waar ze boven de Atlantische Oceaan uitkijken.',
      postcardHeading: 'Puerto de la Cruz, meer dan zijn stranden',
      postcardIntro:
        'Niet de plaatjes vanaf het ligbed. De verhalen achter de haven, de tuinen en de oude hotels, in je oor gefluisterd op precies de plek waar ze thuishoren. Hier zijn er drie. Veel meer wachten in de tour.',
      secrets: [
        {
          place: 'Jardín Botánico',
          teaser:
            'Een koning liet deze tuin aanleggen zodat planten van de andere kant van de wereld konden leren overleven in Europa. Ruim twee eeuwen later staan ze er nog, waaronder een vijgenboom zo groot als een huis.',
        },
        {
          place: 'Lago Martiánez',
          teaser:
            'Deze gebeeldhouwde zeewaterbaden zijn niet zomaar een zwembad. Ze zijn het werk van een van de beroemdste kunstenaars van Spanje, gebouwd uit zwart vulkanisch gesteente op precies de plek waar ooit natuurlijke getijdenpoelen lagen.',
        },
        {
          place: 'Gran Hotel Taoro',
          teaser:
            'Het grote hotel op de heuvel trok de zieken en aristocraten van Europa toen het toerisme van Tenerife gloednieuw was, en in 1927 verwelkomde het een zeer beroemde gaste die net weer was opgedoken nadat ze uit Engeland was verdwenen.',
        },
      ],
      storyTitle: 'De geschiedenis van Puerto de la Cruz',
      storyIntro: [
        'Puerto de la Cruz is waar het toerisme op Tenerife begon. Een compacte stad aan de groene noordkust die een werkende vissershaven omhult met tuinen, boulevards en oude hotels, met de hellingen van de vallei van La Orotava die erachter oprijzen en de Atlantische Oceaan die ervoor breekt. Ze is vlak, beloopbaar en veel ouder van geest dan de resortstroken van het zuiden.',
        'Ze groeide op als de haven van het landinwaarts gelegen La Orotava, en toen de uitbarsting van 1706 de haven van Garachico langs de kust verwoestte, werd Puerto de la Cruz de belangrijkste haven van het eiland, met de uitvoer van suiker en wijn. In de negentiende eeuw kwam een nieuw soort bezoeker, Noord-Europeanen op zoek naar het milde winterklimaat, wat haar tot een van de eerste vakantieoorden van de Canarische Eilanden maakte.',
      ],
      storyBlocks: [
        {
          heading: 'De eerste badplaats van de eilanden',
          paragraphs: [
            'Tegen het eind van de negentiende eeuw had de stad haar grand hotels, waaronder het Taoro boven in zijn park, gebouwd met Brits geld en geopend in 1890, terwijl oude herenhuizen in het centrum de eerste pensions werden. Een Britse gemeenschap sloeg hier wortel en liet een anglicaanse kerk en de oudste anglicaanse begraafplaats van de Canarische Eilanden na. Het massatoerisme van zon en zee kwam later, in de jaren vijftig.',
          ],
        },
        {
          heading: 'Tuinen, baden en de hand van een kunstenaar',
          paragraphs: [
            'In 1788 gaf koning Carlos III opdracht tot een botanische tuin hier, de Jardín de Aclimatación, om tropische planten uit Spanjes koloniën te laten wennen voordat ze naar het vasteland werden doorgestuurd. Hij wordt vaak de op een na oudste botanische tuin van Spanje genoemd. Aan de boulevard werd het zeewaterbad Lago Martiánez, een complex van zeewaterbaden in zwart vulkanisch gesteente, ontworpen door de kunstenaar César Manrique uit Lanzarote en voltooid in de jaren zeventig.',
          ],
        },
        {
          heading: 'Waar je op moet letten',
          paragraphs: [
            'Dwaal door de oude vissersbuurt rond de Plaza del Charco, het kleine Castillo de San Felipe dat ooit de kust tegen piraten beschermde, en het zwarte zand van de Playa Jardín aan de westkant. De haven zelf landt nog altijd vis aan, en de steegjes van La Ranilla erachter zijn de meest karaktervolle hoek van de stad geworden.',
          ],
        },
        {
          heading: 'Wanneer te gaan',
          paragraphs: [
            'De noordkust is milder en groener dan het zuiden, en vaak iets bewolkter, wat juist de winterbezoekers aantrok. Het is een stad voor het hele jaar, het drukst met Noord-Europeanen in de winter en Spaanse vakantiegangers in augustus. Het carnaval, in de late winter, is de uitbundigste week om er te zijn.',
          ],
        },
      ],
      mapHeading: 'Waar ligt Puerto de la Cruz?',
      mapIntro:
        'Puerto de la Cruz ligt aan de noordkust van Tenerife, het grootste van de Spaanse Canarische Eilanden, net onder de stad La Orotava en ongeveer een half uur ten westen van de hoofdstad Santa Cruz. Ze kijkt uit op de open Atlantische Oceaan, met de groene vallei van La Orotava die erachter omhoog klimt naar de Teide.',
      bonusHeading: 'Drie dingen die de meeste bezoekers nooit te weten komen',
      bonus: [
        {
          lead: 'Een tuin om de tropen te temmen.',
          text:
            'De botanische tuin van de stad werd in 1788 gesticht op bevel van een Spaanse koning, als tussenstation waar tropische planten uit Amerika en Azië aan het Canarische klimaat konden wennen voordat ze naar de koninklijke tuinen van het vasteland werden doorgestuurd.',
        },
        {
          lead: 'Baden ontworpen door een kunstenaar.',
          text:
            'Het badcomplex Lago Martiánez aan de boulevard werd gevormd door César Manrique, de kunstenaar uit Lanzarote, die een stuk kust omtoverde tot een landschap van zeewatermeren en zwart vulkanisch gesteente in plaats van een gewoon zwembad.',
        },
        {
          lead: 'Een kudde geiten in zee.',
          text:
            'Elk jaar op de vooravond van San Juan worden honderden geiten naar de haven gedreven en de Atlantische Oceaan in geleid, in een badritueel waarvan de wortels teruggaan tot het Guanche-verleden van het eiland.',
        },
      ],
      langHeading: 'Puerto de la Cruz in jouw taal, alle 32',
      ctaHeading: 'Haal de sleutel tot Puerto de la Cruz',
      ctaIntro:
        'Kies je stops, begin te lopen en laat de stem onthullen wat alle anderen zonder meer voorbijlopen.',
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
    fr: {
      metaTitle: 'Visite audio de Garachico · En autonomie',
      metaDescription:
        'Une visite audio GPS en autonomie de Garachico, le port de Tenerife qu’un volcan ensevelit en 1706. Parcourez les piscines de roche de lave et la vieille ville de pierre à votre rythme avec des récits en voix native dans 32 langues, hors ligne.',
      keywords:
        'visite audio garachico, visite autoguidée garachico, que faire à garachico tenerife, visite à pied garachico, piscines el caletón',
      ogTitle: 'Visite audio de Garachico | Fun Zone Tenerife',
      ogDescription:
        'Parcourez la vieille ville de Garachico, frappée par un volcan, à votre rythme avec des récits en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée.',
      heroIntro:
        'Une balade audio GPS en autonomie dans Garachico, jadis le port le plus actif de Tenerife jusqu’à ce qu’un volcan réécrive son histoire en une seule nuit. Piscines de roche de lave, une forteresse qui a survécu au port qu’elle gardait et des rues de pierre rebâties sur les ruines, racontés à votre oreille là où tout est arrivé.',
      postcardHeading: 'Garachico, la ville que le volcan a refaite',
      postcardIntro:
        'Pas la jolie photo du port. Les histoires inscrites dans la roche noire sous vos pieds, murmurées à votre oreille à l’endroit exact où elles ont eu lieu. En voici trois. Beaucoup d’autres vous attendent dans la visite.',
      secrets: [
        {
          place: 'El Caletón',
          teaser:
            'Les bassins marins où tout le monde se baigne aujourd’hui ont jailli de la terre, incandescents, en 1706. Vous nagez dans la lave solidifiée de l’éruption même qui a anéanti la fortune de la ville.',
        },
        {
          place: 'Puerta de Tierra',
          teaser:
            'Cette ancienne porte de pierre ouvrait jadis sur un port en eau profonde rempli de navires. Aujourd’hui, elle se dresse sur la terre ferme dans un jardin tranquille, car la mer qu’elle regardait fut engloutie tout entière par la lave.',
        },
        {
          place: 'Castillo de San Miguel',
          teaser:
            'Le petit fort traversa l’éruption presque intact, puis se retrouva à ne plus rien garder : la baie qu’il devait défendre s’était changée en roche. Il veille encore sur une côte qui n’a plus besoin de lui.',
        },
      ],
      storyTitle: 'L’histoire de Garachico',
      storyIntro: [
        'Garachico est l’une des plus belles villes de Tenerife, un dense damier de maisons de pierre, de couvents et de petites places serré entre une haute falaise et la mer, sur la côte nord-ouest. Elle est paisible aujourd’hui, faite pour les matinées lentes et une baignade dans les bassins de roche, mais elle fut jadis le port le plus actif de l’île, et l’histoire de la façon dont elle perdit cette couronne est inscrite dans chaque rue.',
        'Fondée peu après la conquête de 1496 par le marchand génois Cristóbal de Ponte, la ville s’enrichit tout au long des XVIe et XVIIe siècles comme principal port de Tenerife, expédiant le sucre et surtout le doux vin de Malvasía qui fit la renommée de l’île en Europe du Nord.',
      ],
      storyBlocks: [
        {
          heading: 'La nuit où le port se changea en pierre',
          paragraphs: [
            'En mai 1706, un volcan sur les pentes au-dessus de la ville entra en éruption, et au fil des semaines suivantes plusieurs rivières de lave dévalèrent Garachico. Elles ensevelirent une grande partie de la ville et comblèrent le profond port naturel qui était la source de toute sa richesse. Chose remarquable, les habitants eurent le temps de fuir et personne ne fut tué, mais le port avait disparu, et avec lui la raison d’être de la ville. Le commerce se déplaça le long de la côte vers Puerto de la Cruz, et Garachico se réduisit à un petit village de pêcheurs.',
            'L’idée ancienne selon laquelle toute la ville fut détruite sauf l’église est une légende touristique. L’éruption épargna une bonne part, dont le couvent de l’Immaculée Conception et le petit fort de San Miguel, tandis que l’église de Santa Ana fut brûlée puis reconstruite dans les années qui suivirent.',
          ],
        },
        {
          heading: 'Une ville rebâtie en pierre',
          paragraphs: [
            'Plutôt que d’être abandonnée, Garachico se reconstruisit lentement, et aujourd’hui on la prise justement pour les rues de pierre et les demeures restaurées qui renaquirent du désastre. Sa restauration soignée lui valut la Médaille d’or des beaux-arts de l’Espagne en 1980, et elle compte parmi les plus beaux villages du pays.',
          ],
        },
        {
          heading: 'À ne pas manquer',
          paragraphs: [
            'Baignez-vous ou barbotez dans les bassins d’El Caletón, façonnés par la lave de 1706, puis trouvez le Castillo de San Miguel, la Puerta de Tierra échouée dans les terres, et l’église de Santa Ana. Au large se dresse le Roque de Garachico, un petit îlot volcanique aujourd’hui monument naturel protégé.',
          ],
        },
        {
          heading: 'Quand y aller',
          paragraphs: [
            'Garachico est douce toute l’année, même si la côte nord-ouest peut être plus nuageuse que le sud. Le printemps et l’automne sont les mois les plus faciles pour marcher et se baigner. Tous les cinq ans, la ville tient ses Fiestas Lustrales, célèbres pour les feux d’artifice qui cascadent le long de la falaise au-dessus des toits.',
          ],
        },
      ],
      mapHeading: 'Où se trouve Garachico ?',
      mapIntro:
        'Garachico se trouve sur la côte nord-ouest de Tenerife, la plus grande des îles Canaries espagnoles, au pied d’une haute falaise sous les collines de Teno. Elle se situe juste à l’ouest d’Icod de los Vinos et à environ une heure de la capitale, Santa Cruz, sur le versant bien plus tranquille de l’île.',
      bonusHeading: 'Trois choses que la plupart des visiteurs ignorent',
      bonus: [
        {
          lead: 'Vous nagez dans la catastrophe.',
          text:
            'Les piscines de roche d’El Caletón, l’endroit préféré de la ville pour se baigner, sont faites de lave solidifiée de l’éruption de 1706, la lave même qui ensevelit le port et mit fin à l’âge d’or de Garachico.',
        },
        {
          lead: 'Une porte sur une mer disparue.',
          text:
            'La Puerta de Tierra était la porte principale du vieux port, par laquelle passait jadis tout le commerce de la ville. Elle se trouve désormais à l’intérieur des terres, dans un petit parc à côté d’un ancien pressoir à vin, car la lave combla la baie qu’elle regardait autrefois.',
        },
        {
          lead: 'Le vin que le monde voulait.',
          text:
            'Garachico expédiait la Malvasía des Canaries, le doux malmsey prisé dans l’Angleterre élisabéthaine, ce même vin des Canaries que Shakespeare fait réclamer à ses personnages dans ses pièces.',
        },
      ],
      langHeading: 'Garachico dans votre langue, les 32',
      ctaHeading: 'Obtenez la clé de Garachico',
      ctaIntro:
        'Choisissez vos étapes, commencez à marcher et laissez la voix révéler ce que tous les autres dépassent sans le voir.',
    },
    es: {
      metaTitle: 'Audioguía de Garachico · Ruta autoguiada',
      metaDescription:
        'Una audioguía GPS autoguiada de Garachico, el puerto de Tenerife que un volcán sepultó en 1706. Recorre las piscinas de roca de lava y el viejo pueblo de piedra a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión.',
      keywords:
        'audioguía garachico, ruta autoguiada garachico, qué ver en garachico tenerife, ruta a pie garachico, piscinas el caletón',
      ogTitle: 'Audioguía de Garachico | Fun Zone Tenerife',
      ogDescription:
        'Recorre el viejo pueblo de Garachico, golpeado por un volcán, a tu ritmo con relatos en voz nativa en 32 idiomas, sin conexión, con un guía de realidad aumentada.',
      heroIntro:
        'Un paseo con audioguía GPS autoguiada por Garachico, antaño el puerto más activo de Tenerife hasta que un volcán reescribió su historia en una sola noche. Piscinas de roca de lava, una fortaleza que sobrevivió al puerto que custodiaba y calles de piedra reconstruidas sobre las ruinas, narrados a tu oído allí donde ocurrió.',
      postcardHeading: 'Garachico, el pueblo que el volcán rehízo',
      postcardIntro:
        'No la bonita foto del puerto. Las historias escritas en la roca negra bajo tus pies, susurradas al oído en el lugar exacto al que pertenecen. Aquí tienes tres. Muchas más te esperan dentro del tour.',
      secrets: [
        {
          place: 'El Caletón',
          teaser:
            'Las piscinas marinas donde todos se bañan hoy brotaron de la tierra, incandescentes, en 1706. Te estás bañando en la lava solidificada de la misma erupción que destruyó la fortuna del pueblo.',
        },
        {
          place: 'Puerta de Tierra',
          teaser:
            'Esta vieja puerta de piedra se abría antaño a un puerto de aguas profundas lleno de barcos. Hoy se alza en tierra firme en un jardín tranquilo, porque el mar al que miraba fue tragado entero por la lava.',
        },
        {
          place: 'Castillo de San Miguel',
          teaser:
            'El pequeño fuerte salió de la erupción casi intacto, y luego se encontró sin nada que guardar: la bahía que debía defender se había vuelto roca. Aún vigila una costa que ya no lo necesita.',
        },
      ],
      storyTitle: 'La historia de Garachico',
      storyIntro: [
        'Garachico es uno de los pueblos más bellos de Tenerife, una apretada cuadrícula de casas de piedra, conventos y pequeñas plazas encajada entre un alto acantilado y el mar, en la costa noroeste. Hoy es tranquilo, un lugar para mañanas lentas y un baño en las piscinas de roca, pero fue en su día el puerto más activo de la isla, y la historia de cómo perdió esa corona está escrita en cada calle.',
        'Fundado poco después de la conquista de 1496 por el mercader genovés Cristóbal de Ponte, el pueblo se enriqueció a lo largo de los siglos XVI y XVII como principal puerto de Tenerife, embarcando azúcar y sobre todo el dulce vino de Malvasía que hizo famosa a la isla en el norte de Europa.',
      ],
      storyBlocks: [
        {
          heading: 'La noche en que el puerto se volvió piedra',
          paragraphs: [
            'En mayo de 1706, un volcán en las laderas sobre el pueblo entró en erupción, y en las semanas siguientes varios ríos de lava bajaron por Garachico. Sepultaron buena parte del pueblo y rellenaron el profundo puerto natural que era la fuente de toda su riqueza. Sorprendentemente, la gente tuvo tiempo de huir y nadie murió, pero el puerto había desaparecido, y con él la razón de ser del pueblo. El comercio se trasladó por la costa a Puerto de la Cruz, y Garachico se redujo a una pequeña aldea de pescadores.',
            'La vieja idea de que todo el pueblo quedó destruido salvo la iglesia es un cuento para turistas. La erupción respetó buena parte, incluidos el convento de la Inmaculada Concepción y el pequeño fuerte de San Miguel, mientras que la iglesia de Santa Ana quedó chamuscada y se reconstruyó en los años siguientes.',
          ],
        },
        {
          heading: 'Un pueblo reconstruido en piedra',
          paragraphs: [
            'En lugar de ser abandonado, Garachico se reconstruyó poco a poco, y hoy se le aprecia justamente por las calles de piedra y las mansiones restauradas que surgieron del desastre. Su cuidada restauración le valió la Medalla de Oro al Mérito en las Bellas Artes de España en 1980, y figura entre los pueblos más bonitos del país.',
          ],
        },
        {
          heading: 'En qué fijarse',
          paragraphs: [
            'Báñate o chapotea en las piscinas de El Caletón, formadas por la lava de 1706, y luego busca el Castillo de San Miguel, la Puerta de Tierra varada tierra adentro, y la iglesia de Santa Ana. Frente a la costa se alza el Roque de Garachico, un pequeño islote volcánico hoy monumento natural protegido.',
          ],
        },
        {
          heading: 'Cuándo ir',
          paragraphs: [
            'Garachico es suave todo el año, aunque la costa noroeste puede ser más nubosa que el sur. La primavera y el otoño son los meses más cómodos para caminar y bañarse. Cada cinco años el pueblo celebra sus Fiestas Lustrales, famosas por los fuegos artificiales que caen en cascada por el acantilado sobre los tejados.',
          ],
        },
      ],
      mapHeading: '¿Dónde está Garachico?',
      mapIntro:
        'Garachico se encuentra en la costa noroeste de Tenerife, la mayor de las islas Canarias españolas, al pie de un alto acantilado bajo los montes de Teno. Queda justo al oeste de Icod de los Vinos y a cosa de una hora de la capital, Santa Cruz, en el lado mucho más tranquilo de la isla.',
      bonusHeading: 'Tres cosas que casi ningún visitante llega a saber',
      bonus: [
        {
          lead: 'Te bañas en el desastre.',
          text:
            'Las piscinas de roca de El Caletón, el lugar favorito del pueblo para bañarse, están hechas de lava solidificada de la erupción de 1706, la misma lava que sepultó el puerto y puso fin a la edad de oro de Garachico.',
        },
        {
          lead: 'Una puerta a un mar desaparecido.',
          text:
            'La Puerta de Tierra era la puerta principal del viejo puerto, por la que antaño pasaba todo el comercio del pueblo. Hoy se halla tierra adentro, en un pequeño parque junto a un antiguo lagar, porque la lava rellenó la bahía a la que antes miraba.',
        },
        {
          lead: 'El vino que el mundo quería.',
          text:
            'Garachico embarcaba la Malvasía canaria, el dulce malmsey apreciado en la Inglaterra isabelina, el mismo vino de Canarias que Shakespeare hace pedir a sus personajes en sus obras.',
        },
      ],
      langHeading: 'Garachico en tu idioma, los 32',
      ctaHeading: 'Consigue la llave de Garachico',
      ctaIntro:
        'Elige tus paradas, empieza a caminar y deja que la voz te revele lo que todos los demás pasan de largo.',
    },
    de: {
      metaTitle: 'Audioguide Garachico · Rundgang auf eigene Faust',
      metaDescription:
        'Ein selbstgeführter GPS-Audioguide durch Garachico, den Hafen Teneriffas, den 1706 ein Vulkan begrub. Erkunden Sie die Lavafelsen-Pools und die alte Steinstadt in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline.',
      keywords:
        'audioguide garachico, selbstgeführte tour garachico, garachico teneriffa sehenswürdigkeiten, stadtrundgang garachico, el caletón naturpools',
      ogTitle: 'Audioguide Garachico | Fun Zone Tenerife',
      ogDescription:
        'Erkunden Sie die alte, vom Vulkan getroffene Stadt Garachico in Ihrem Tempo mit Erzählungen von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide.',
      heroIntro:
        'Ein selbstgeführter GPS-Audiospaziergang durch Garachico, einst der geschäftigste Hafen Teneriffas, bis ein Vulkan seine Geschichte in einer einzigen Nacht umschrieb. Lavafelsen-Pools, eine Festung, die den Hafen überlebte, den sie bewachte, und Steingassen, aus den Ruinen neu erbaut, erzählt in Ihrem Ohr dort, wo es geschah.',
      postcardHeading: 'Garachico, die Stadt, die der Vulkan neu formte',
      postcardIntro:
        'Nicht das hübsche Hafenfoto. Die Geschichten, die in den schwarzen Fels unter Ihren Füßen geschrieben sind, Ihnen ins Ohr geflüstert, genau an dem Ort, an den sie gehören. Hier sind drei. Viele weitere warten in der Tour.',
      secrets: [
        {
          place: 'El Caletón',
          teaser:
            'Die Meeresbecken, in denen heute alle baden, quollen 1706 glühend aus der Erde. Sie baden in der erstarrten Lava genau jener Eruption, die das Vermögen der Stadt vernichtete.',
        },
        {
          place: 'Puerta de Tierra',
          teaser:
            'Dieses alte Steintor öffnete sich einst auf einen tiefen Hafen voller Schiffe. Heute steht es auf trockenem Land in einem stillen Garten, denn das Meer, dem es zugewandt war, wurde von der Lava ganz verschlungen.',
        },
        {
          place: 'Castillo de San Miguel',
          teaser:
            'Das kleine Fort überstand die Eruption fast unversehrt und fand sich dann vor, nichts mehr zu bewachen: Die Bucht, die es verteidigen sollte, war zu Fels geworden. Es wacht noch immer über eine Küste, die es nicht mehr braucht.',
        },
      ],
      storyTitle: 'Die Geschichte von Garachico',
      storyIntro: [
        'Garachico ist eine der schönsten Städte Teneriffas, ein enges Raster aus Steinhäusern, Konventen und kleinen Plätzen, eingezwängt zwischen einer hohen Klippe und dem Meer an der Nordwestküste. Heute ist es ruhig, ein Ort für langsame Vormittage und ein Bad in den Felsbecken, doch einst war es der geschäftigste Hafen der Insel, und die Geschichte, wie es diese Krone verlor, steht in jeder Gasse geschrieben.',
        'Kurz nach der Eroberung von 1496 vom genuesischen Kaufmann Cristóbal de Ponte gegründet, wurde die Stadt im 16. und 17. Jahrhundert als wichtigster Hafen Teneriffas reich und verschiffte Zucker und vor allem den süßen Malvasía-Wein, der die Insel in Nordeuropa berühmt machte.',
      ],
      storyBlocks: [
        {
          heading: 'Die Nacht, in der der Hafen zu Stein wurde',
          paragraphs: [
            'Im Mai 1706 brach ein Vulkan an den Hängen über der Stadt aus, und in den folgenden Wochen ergossen sich mehrere Lavaströme durch Garachico. Sie begruben einen Großteil der Stadt und füllten den tiefen natürlichen Hafen, der die Quelle ihres ganzen Reichtums war. Bemerkenswerterweise hatten die Menschen Zeit zu fliehen, und niemand kam ums Leben, doch der Hafen war fort, und mit ihm die Daseinsberechtigung der Stadt. Der Handel zog die Küste entlang nach Puerto de la Cruz, und Garachico schrumpfte zu einem kleinen Fischerdorf.',
            'Die alte Vorstellung, die ganze Stadt sei bis auf die Kirche zerstört worden, ist ein Touristenmärchen. Die Eruption verschonte vieles, darunter das Kloster der Unbefleckten Empfängnis und das kleine Fort San Miguel, während die Kirche Santa Ana versengt und in den folgenden Jahren wieder aufgebaut wurde.',
          ],
        },
        {
          heading: 'Eine Stadt, neu erbaut in Stein',
          paragraphs: [
            'Statt aufgegeben zu werden, baute sich Garachico langsam wieder auf, und heute schätzt man es gerade für die Steingassen und restaurierten Herrenhäuser, die aus der Katastrophe erstanden. Seine sorgfältige Restaurierung brachte ihm 1980 die spanische Goldmedaille der Schönen Künste ein, und es zählt zu den schönsten Dörfern des Landes.',
          ],
        },
        {
          heading: 'Worauf Sie achten sollten',
          paragraphs: [
            'Baden oder planschen Sie in den Becken von El Caletón, von der Lava von 1706 geformt, dann finden Sie das Castillo de San Miguel, das landeinwärts gestrandete Tor Puerta de Tierra und die Kirche Santa Ana. Vor der Küste erhebt sich der Roque de Garachico, ein kleines vulkanisches Eiland, heute ein geschütztes Naturdenkmal.',
          ],
        },
        {
          heading: 'Wann Sie kommen sollten',
          paragraphs: [
            'Garachico ist das ganze Jahr über mild, auch wenn die Nordwestküste wolkiger sein kann als der Süden. Frühling und Herbst sind die angenehmsten Monate zum Gehen und Baden. Alle fünf Jahre feiert die Stadt ihre Fiestas Lustrales, berühmt für das Feuerwerk, das die Klippe über den Dächern hinabkaskadiert.',
          ],
        },
      ],
      mapHeading: 'Wo liegt Garachico?',
      mapIntro:
        'Garachico liegt an der Nordwestküste Teneriffas, der größten der spanischen Kanarischen Inseln, am Fuß einer hohen Klippe unterhalb der Teno-Berge. Es liegt direkt westlich von Icod de los Vinos und etwa eine Stunde von der Hauptstadt Santa Cruz entfernt, auf der weit ruhigeren Seite der Insel.',
      bonusHeading: 'Drei Dinge, die die meisten Besucher nie erfahren',
      bonus: [
        {
          lead: 'Sie baden in der Katastrophe.',
          text:
            'Die Felsbecken von El Caletón, der liebste Badeplatz der Stadt, bestehen aus erstarrter Lava der Eruption von 1706, derselben Lava, die den Hafen begrub und Garachicos goldenes Zeitalter beendete.',
        },
        {
          lead: 'Ein Tor zu einem verschwundenen Meer.',
          text:
            'Die Puerta de Tierra war das Haupttor des alten Hafens, durch das einst der ganze Handel der Stadt lief. Heute steht sie landeinwärts in einem kleinen Park neben einer alten Weinpresse, weil die Lava die Bucht füllte, der sie einst zugewandt war.',
        },
        {
          lead: 'Der Wein, den die Welt begehrte.',
          text:
            'Garachico verschiffte die kanarische Malvasía, den süßen Malmsey, der im elisabethanischen England begehrt war, genau jenen Kanarenwein, den Shakespeare seine Figuren in seinen Stücken verlangen lässt.',
        },
      ],
      langHeading: 'Garachico in Ihrer Sprache, alle 32',
      ctaHeading: 'Holen Sie sich den Schlüssel zu Garachico',
      ctaIntro:
        'Wählen Sie Ihre Stationen, gehen Sie los und lassen Sie die Stimme enthüllen, woran alle anderen achtlos vorbeigehen.',
    },
    it: {
      metaTitle: 'Audioguida di Garachico · Tour in autonomia',
      metaDescription:
        'Un tour audio GPS in autonomia di Garachico, il porto di Tenerife che un vulcano seppellì nel 1706. Scopri le piscine di roccia lavica e il vecchio borgo di pietra al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline.',
      keywords:
        'audioguida garachico, tour autoguidato garachico, cosa vedere a garachico tenerife, tour a piedi garachico, piscine el caletón',
      ogTitle: 'Audioguida di Garachico | Fun Zone Tenerife',
      ogDescription:
        'Scopri il vecchio borgo di Garachico, colpito da un vulcano, al tuo ritmo con racconti a voce madrelingua in 32 lingue, offline, con una guida in realtà aumentata.',
      heroIntro:
        'Una passeggiata con audioguida GPS in autonomia a Garachico, un tempo il porto più attivo di Tenerife finché un vulcano ne riscrisse la storia in una sola notte. Piscine di roccia lavica, una fortezza sopravvissuta al porto che proteggeva e vie di pietra ricostruite sulle rovine, raccontati al tuo orecchio dove è accaduto.',
      postcardHeading: 'Garachico, il borgo che il vulcano ha rifatto',
      postcardIntro:
        'Non la bella foto del porto. Le storie scritte nella roccia nera sotto i tuoi piedi, sussurrate al tuo orecchio nel punto esatto a cui appartengono. Eccone tre. Molte altre ti aspettano nel tour.',
      secrets: [
        {
          place: 'El Caletón',
          teaser:
            'Le piscine marine dove oggi tutti fanno il bagno sgorgarono dalla terra, incandescenti, nel 1706. Stai facendo il bagno nella lava solidificata della stessa eruzione che distrusse la fortuna del borgo.',
        },
        {
          place: 'Puerta de Tierra',
          teaser:
            'Questa antica porta di pietra si apriva un tempo su un porto di acque profonde pieno di navi. Oggi sorge sulla terraferma in un giardino tranquillo, perché il mare a cui era rivolta fu inghiottito tutto dalla lava.',
        },
        {
          place: 'Castillo de San Miguel',
          teaser:
            'Il piccolo forte uscì dall’eruzione quasi intatto, e poi si ritrovò a non custodire più nulla: la baia che doveva difendere si era fatta roccia. Veglia ancora su una costa che non ha più bisogno di lui.',
        },
      ],
      storyTitle: 'La storia di Garachico',
      storyIntro: [
        'Garachico è uno dei borghi più belli di Tenerife, una fitta griglia di case di pietra, conventi e piccole piazze stretta tra un’alta scogliera e il mare, sulla costa nord-occidentale. Oggi è tranquillo, un luogo per mattine lente e un bagno nelle piscine di roccia, ma fu un tempo il porto più attivo dell’isola, e la storia di come perse quella corona è scritta in ogni strada.',
        'Fondato poco dopo la conquista del 1496 dal mercante genovese Cristóbal de Ponte, il borgo si arricchì nel corso del XVI e XVII secolo come principale porto di Tenerife, imbarcando zucchero e soprattutto il dolce vino Malvasía che rese l’isola celebre nel nord Europa.',
      ],
      storyBlocks: [
        {
          heading: 'La notte in cui il porto si fece pietra',
          paragraphs: [
            'Nel maggio del 1706 un vulcano sui pendii sopra il borgo eruttò, e nelle settimane seguenti diversi fiumi di lava scesero attraverso Garachico. Seppellirono gran parte del borgo e colmarono il profondo porto naturale che era la fonte di tutta la sua ricchezza. Sorprendentemente, la gente ebbe il tempo di fuggire e nessuno morì, ma il porto era scomparso, e con esso la ragione d’essere del borgo. Il commercio si spostò lungo la costa a Puerto de la Cruz, e Garachico si ridusse a un piccolo villaggio di pescatori.',
            'La vecchia idea che l’intero borgo fu distrutto tranne la chiesa è una leggenda per turisti. L’eruzione risparmiò parecchio, compresi il convento dell’Immacolata Concezione e il piccolo forte di San Miguel, mentre la chiesa di Santa Ana fu bruciacchiata e ricostruita negli anni successivi.',
          ],
        },
        {
          heading: 'Un borgo ricostruito in pietra',
          paragraphs: [
            'Invece di essere abbandonato, Garachico si ricostruì lentamente, e oggi è apprezzato proprio per le vie di pietra e le dimore restaurate che risorsero dal disastro. Il suo attento restauro gli valse la Medaglia d’oro al merito delle belle arti di Spagna nel 1980, ed è annoverato tra i borghi più belli del Paese.',
          ],
        },
        {
          heading: 'Cosa notare',
          paragraphs: [
            'Fai il bagno o sguazza nelle piscine di El Caletón, formate dalla lava del 1706, poi trova il Castillo de San Miguel, la Puerta de Tierra arenata nell’entroterra e la chiesa di Santa Ana. Al largo si erge il Roque de Garachico, un piccolo isolotto vulcanico oggi monumento naturale protetto.',
          ],
        },
        {
          heading: 'Quando andare',
          paragraphs: [
            'Garachico è mite tutto l’anno, anche se la costa nord-occidentale può essere più nuvolosa del sud. Primavera e autunno sono i mesi più comodi per camminare e fare il bagno. Ogni cinque anni il borgo celebra le sue Fiestas Lustrales, famose per i fuochi d’artificio che scendono a cascata lungo la scogliera sopra i tetti.',
          ],
        },
      ],
      mapHeading: 'Dove si trova Garachico?',
      mapIntro:
        'Garachico si trova sulla costa nord-occidentale di Tenerife, la più grande delle isole Canarie spagnole, ai piedi di un’alta scogliera sotto i monti di Teno. Si trova appena a ovest di Icod de los Vinos e a circa un’ora dalla capitale, Santa Cruz, sul lato molto più tranquillo dell’isola.',
      bonusHeading: 'Tre cose che quasi nessun visitatore scopre',
      bonus: [
        {
          lead: 'Fai il bagno nel disastro.',
          text:
            'Le piscine di roccia di El Caletón, il luogo preferito del borgo per il bagno, sono fatte di lava solidificata dell’eruzione del 1706, la stessa lava che seppellì il porto e pose fine all’età dell’oro di Garachico.',
        },
        {
          lead: 'Una porta su un mare scomparso.',
          text:
            'La Puerta de Tierra era la porta principale del vecchio porto, attraverso cui passava un tempo tutto il commercio del borgo. Oggi si trova nell’entroterra, in un piccolo parco accanto a un antico torchio, perché la lava colmò la baia a cui era rivolta.',
        },
        {
          lead: 'Il vino che il mondo voleva.',
          text:
            'Garachico imbarcava la Malvasía canaria, il dolce malmsey apprezzato nell’Inghilterra elisabettiana, proprio quel vino delle Canarie che Shakespeare fa invocare ai suoi personaggi nelle sue opere.',
        },
      ],
      langHeading: 'Garachico nella tua lingua, tutte e 32',
      ctaHeading: 'Ottieni la chiave di Garachico',
      ctaIntro:
        'Scegli le tue tappe, inizia a camminare e lascia che la voce ti riveli ciò che tutti gli altri superano senza notarlo.',
    },
    nl: {
      metaTitle: 'Audiotour Garachico · Wandeling op eigen houtje',
      metaDescription:
        'Een zelfgeleide gps-audiotour van Garachico, de haven van Tenerife die een vulkaan in 1706 bedolf. Ontdek de lavarotspoelen en de oude stenen stad op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline.',
      keywords:
        'audiotour garachico, zelfgeleide tour garachico, bezienswaardigheden garachico tenerife, stadswandeling garachico, el caletón rotspoelen',
      ogTitle: 'Audiotour Garachico | Fun Zone Tenerife',
      ogDescription:
        'Ontdek de oude, door een vulkaan getroffen stad Garachico op je eigen tempo met verhalen in moedertaalstem in 32 talen, offline, met een augmented-reality-gids.',
      heroIntro:
        'Een zelfgeleide gps-audiowandeling door Garachico, ooit de drukste haven van Tenerife totdat een vulkaan haar verhaal in één nacht herschreef. Lavarotspoelen, een fort dat de haven overleefde die het bewaakte en stenen straten herbouwd op de ruïnes, verteld in je oor waar het gebeurde.',
      postcardHeading: 'Garachico, de stad die de vulkaan hermaakte',
      postcardIntro:
        'Niet het mooie havenplaatje. De verhalen die in het zwarte gesteente onder je voeten geschreven staan, in je oor gefluisterd op precies de plek waar ze thuishoren. Hier zijn er drie. Veel meer wachten in de tour.',
      secrets: [
        {
          place: 'El Caletón',
          teaser:
            'De zeepoelen waar iedereen vandaag zwemt, welden in 1706 gloeiend uit de aarde op. Je baadt in de gestolde lava van juist die uitbarsting die het fortuin van de stad vernietigde.',
        },
        {
          place: 'Puerta de Tierra',
          teaser:
            'Deze oude stenen poort gaf ooit uit op een diepe haven vol schepen. Vandaag staat ze op het droge in een stille tuin, want de zee waar ze op uitkeek werd volledig door de lava verzwolgen.',
        },
        {
          place: 'Castillo de San Miguel',
          teaser:
            'Het kleine fort kwam de uitbarsting vrijwel ongeschonden door en bleek daarna niets meer te bewaken: de baai die het moest verdedigen was steen geworden. Het waakt nog altijd over een kust die het niet meer nodig heeft.',
        },
      ],
      storyTitle: 'De geschiedenis van Garachico',
      storyIntro: [
        'Garachico is een van de mooiste stadjes van Tenerife, een dicht raster van stenen huizen, kloosters en pleintjes, geklemd tussen een hoge klif en de zee aan de noordwestkust. Het is nu rustig, een plek voor trage ochtenden en een duik in de rotspoelen, maar het was ooit de drukste haven van het eiland, en het verhaal van hoe het die kroon verloor staat in elke straat geschreven.',
        'Kort na de verovering van 1496 gesticht door de Genuese koopman Cristóbal de Ponte, werd het stadje in de zestiende en zeventiende eeuw rijk als de belangrijkste haven van Tenerife, met de uitvoer van suiker en vooral de zoete Malvasía-wijn die het eiland beroemd maakte in Noord-Europa.',
      ],
      storyBlocks: [
        {
          heading: 'De nacht waarin de haven tot steen werd',
          paragraphs: [
            'In mei 1706 barstte een vulkaan op de hellingen boven het stadje uit, en in de weken daarna stroomden verschillende rivieren van lava door Garachico. Ze bedolven een groot deel van het stadje en vulden de diepe natuurlijke haven die de bron van al zijn rijkdom was. Opmerkelijk genoeg had de bevolking tijd om te vluchten en kwam niemand om, maar de haven was verdwenen, en daarmee de bestaansreden van het stadje. De handel verschoof langs de kust naar Puerto de la Cruz, en Garachico kromp tot een klein vissersdorp.',
            'Het oude idee dat het hele stadje werd verwoest op de kerk na is een toeristenverhaal. De uitbarsting spaarde heel wat, waaronder het klooster van de Onbevlekte Ontvangenis en het kleine fort van San Miguel, terwijl de kerk van Santa Ana werd geschroeid en in de jaren daarna herbouwd.',
          ],
        },
        {
          heading: 'Een stad in steen herbouwd',
          paragraphs: [
            'In plaats van verlaten te worden, bouwde Garachico zich langzaam weer op, en vandaag wordt het juist gewaardeerd om de stenen straten en gerestaureerde herenhuizen die uit de ramp herrezen. De zorgvuldige restauratie leverde het in 1980 de Spaanse Gouden Medaille voor de Schone Kunsten op, en het wordt tot de mooiste dorpen van het land gerekend.',
          ],
        },
        {
          heading: 'Waar je op moet letten',
          paragraphs: [
            'Zwem of pootjebaad in de poelen van El Caletón, gevormd door de lava van 1706, en zoek dan het Castillo de San Miguel, de landinwaarts gestrande Puerta de Tierra en de kerk van Santa Ana. Voor de kust rijst de Roque de Garachico op, een klein vulkanisch eilandje dat nu een beschermd natuurmonument is.',
          ],
        },
        {
          heading: 'Wanneer te gaan',
          paragraphs: [
            'Garachico is het hele jaar mild, al kan de noordwestkust bewolkter zijn dan het zuiden. Lente en herfst zijn de prettigste maanden om te wandelen en te zwemmen. Elke vijf jaar houdt het stadje zijn Fiestas Lustrales, beroemd om het vuurwerk dat langs de klif boven de daken naar beneden cascadeert.',
          ],
        },
      ],
      mapHeading: 'Waar ligt Garachico?',
      mapIntro:
        'Garachico ligt aan de noordwestkust van Tenerife, het grootste van de Spaanse Canarische Eilanden, aan de voet van een hoge klif onder de Teno-heuvels. Het ligt net ten westen van Icod de los Vinos en ongeveer een uur van de hoofdstad Santa Cruz, aan de veel rustigere kant van het eiland.',
      bonusHeading: 'Drie dingen die de meeste bezoekers nooit te weten komen',
      bonus: [
        {
          lead: 'Je zwemt in de ramp.',
          text:
            'De rotspoelen van El Caletón, de favoriete zwemplek van het stadje, bestaan uit gestolde lava van de uitbarsting van 1706, dezelfde lava die de haven bedolf en Garachico’s gouden eeuw beëindigde.',
        },
        {
          lead: 'Een poort naar een verdwenen zee.',
          text:
            'De Puerta de Tierra was de hoofdpoort van de oude haven, waardoor ooit alle handel van het stadje liep. Ze staat nu landinwaarts, in een klein park naast een oude wijnpers, omdat de lava de baai vulde waar ze vroeger op uitkeek.',
        },
        {
          lead: 'De wijn die de wereld wilde.',
          text:
            'Garachico voerde de Canarische Malvasía uit, de zoete malmsey die geliefd was in het Elizabethaanse Engeland, juist die Canarische wijn die Shakespeare zijn personages in zijn toneelstukken laat bestellen.',
        },
      ],
      langHeading: 'Garachico in jouw taal, alle 32',
      ctaHeading: 'Haal de sleutel tot Garachico',
      ctaIntro:
        'Kies je stops, begin te lopen en laat de stem onthullen wat alle anderen zonder meer voorbijlopen.',
    },
  },
};

export function getCityCopy(slug: string, locale: string): CityCopy | undefined {
  const store = CITY_CONTENT[slug];
  if (!store) return undefined;
  return store[locale as Locale] ?? store.en;
}
