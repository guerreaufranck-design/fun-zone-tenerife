export interface EscapeAct {
  title: Record<string, string>;
  location: Record<string, string>;
  description: Record<string, string>;
  zone?: 'urban' | 'mountain';
}

export interface EscapeZone {
  id: 'urban' | 'mountain';
  tag: Record<string, string>;
  title: Record<string, string>;
  description: Record<string, string>;
}

export interface EscapeWarning {
  icon: string;
  title: Record<string, string>;
  body: Record<string, string>;
}

export interface EscapeInfo {
  icon: string;
  label: Record<string, string>;
  value: Record<string, string>;
  sub: Record<string, string>;
}

export interface EscapeFeature {
  icon: string;
  title: Record<string, string>;
  description: Record<string, string>;
}

export interface EscapeGameData {
  slug: string;
  image: string;
  duration: string;
  distance: string;
  difficulty: number;
  subtitle: Record<string, string>;
  title: Record<string, string>;
  tagline: Record<string, string>;
  location: Record<string, string>;
  intro: Record<string, string>;
  introBody: Record<string, string>;
  quote: Record<string, string>;
  quoteAttr: Record<string, string>;
  historyTitle: Record<string, string>;
  historyBody: Record<string, string[]>;
  dates: { year: string; label: Record<string, string> }[];
  acts: EscapeAct[];
  features: EscapeFeature[];
  infos: EscapeInfo[];
  zones?: EscapeZone[];
  warning?: EscapeWarning;
  motto: Record<string, string>;
  mottoSub: Record<string, string>;
  ctaBody: Record<string, string>;
  accentColor?: string; // override default gold theme per game
}

export const escapeGamesData: EscapeGameData[] = [
  {
    slug: 'les-cendres-de-lame',
    image: '/images/offers/garachico.png',
    duration: '2h30 – 3h',
    distance: '~3.2 km',
    difficulty: 5,
    subtitle: {
      en: 'An investigation through the centuries',
      fr: 'Une enquête à travers les siècles',
      es: 'Una investigación a través de los siglos',
    },
    title: {
      en: 'The Ashes of the Soul',
      fr: "Les Cendres de l'Âme",
      es: 'Las Cenizas del Alma',
    },
    tagline: {
      en: 'Beneath the basalt stones sleeps a truth that five centuries have not erased. Will you hear it?',
      fr: "Sous les pierres de basalte dort une vérité que cinq siècles n'ont pas effacée. Saurez-vous l'entendre ?",
      es: 'Bajo las piedras de basalto duerme una verdad que cinco siglos no han borrado. ¿Sabrás escucharla?',
    },
    location: {
      en: 'Garachico',
      fr: 'Garachico',
      es: 'Garachico',
    },
    intro: {
      en: 'Garachico as you have never imagined it',
      fr: "Garachico comme vous ne l'avez jamais imaginée",
      es: 'Garachico como nunca la has imaginado',
    },
    introBody: {
      en: "Behind the Renaissance facades and basalt-paved alleys, Garachico hides a memory that tourist guides never touch. Forgotten alleys, squares charged with betrayals, stones that have absorbed centuries of trade, revolts and catastrophes. In this game, the entire town becomes your board. Every monument, every inscription, every street corner holds a fragment of a story that has always been hidden from you.",
      fr: "Derrière les façades Renaissance et les ruelles pavées de basalte, Garachico dissimule une mémoire que les guides touristiques n'effleurent jamais. Des ruelles oubliées, des places chargées de trahisons, des pierres qui ont absorbé des siècles de commerce, de révoltes et de catastrophes. Dans ce jeu, la ville entière devient votre plateau. Chaque monument, chaque inscription, chaque angle de rue recèle un fragment d'une histoire que l'on vous a toujours cachée.",
      es: "Tras las fachadas renacentistas y los callejones empedrados de basalto, Garachico esconde una memoria que las guías turísticas nunca tocan. Callejones olvidados, plazas cargadas de traiciones, piedras que han absorbido siglos de comercio, revueltas y catástrofes. En este juego, toda la ciudad se convierte en tu tablero.",
    },
    quote: {
      en: '"Garachico was once the Pompeii of the Canaries — a town engulfed not by ash, but by lava, and preserved in a perfection that the centuries dared not touch."',
      fr: '« Garachico fut autrefois la Pompéi des Canaries — une ville engloutie non par les cendres, mais par la lave, et préservée dans une perfection que les siècles n\'ont pas osé toucher. »',
      es: '"Garachico fue una vez la Pompeya de Canarias — un pueblo engullido no por cenizas, sino por lava, y preservado en una perfección que los siglos no se atrevieron a tocar."',
    },
    quoteAttr: {
      en: '— After Alejandro Cioranescu, historian of the Canaries',
      fr: '— D\'après Alejandro Cioranescu, historien des Canaries',
      es: '— Según Alejandro Cioranescu, historiador de Canarias',
    },
    historyTitle: {
      en: 'A town saved by its own destruction',
      fr: 'Une ville sauvée par sa propre destruction',
      es: 'Un pueblo salvado por su propia destrucción',
    },
    historyBody: {
      en: [
        'For two centuries, Garachico was the most powerful port in Tenerife — a hub between Europe, Africa and the Americas. Trade in rare wines, rivalries between nations, Genoese merchant plots, revolts against foreign monopolies…',
        'Then in 1706, the Trevejo volcano awoke. When the lava flows stopped at the foot of the churches, something incredible happened: by losing its port, Garachico escaped three centuries of modernisation that disfigured the other towns on the island.',
        'What you are about to discover is not a reconstruction. It is the town itself, intact, speaking to you.',
      ],
      fr: [
        "Pendant deux siècles, Garachico fut le port le plus puissant de Tenerife — plaque tournante entre l'Europe, l'Afrique et les Amériques. Négoce de vins rares, rivalités entre nations, complots de marchands génois, révoltes contre les monopoles étrangers…",
        "Puis en 1706, le volcan Trevejo se réveilla. Lorsque les coulées de lave s'immobilisèrent au pied des églises, quelque chose d'incroyable se produisit : en perdant son port, Garachico échappa à trois siècles de modernisation qui défigurèrent les autres villes de l'île.",
        "Ce que vous vous apprêtez à découvrir n'est pas une reconstitution. C'est la ville elle-même, intacte, qui vous parle.",
      ],
      es: [
        'Durante dos siglos, Garachico fue el puerto más poderoso de Tenerife — centro neurálgico entre Europa, África y las Américas. Comercio de vinos raros, rivalidades entre naciones, conspiraciones de mercaderes genoveses…',
        'Luego en 1706, el volcán Trevejo despertó. Cuando los flujos de lava se detuvieron a los pies de las iglesias, algo increíble sucedió: al perder su puerto, Garachico escapó de tres siglos de modernización.',
        'Lo que estás a punto de descubrir no es una reconstrucción. Es la propia ciudad, intacta, hablándote.',
      ],
    },
    dates: [
      { year: '1496', label: { en: 'Founded by Genoese banker Cristóbal de Ponte', fr: 'Fondation par le banquier génois Cristóbal de Ponte', es: 'Fundación por el banquero genovés Cristóbal de Ponte' } },
      { year: '1706', label: { en: 'The eruption that froze Garachico in time', fr: "L'éruption qui figea Garachico dans le temps", es: 'La erupción que congeló Garachico en el tiempo' } },
    ],
    acts: [
      {
        title: { en: 'The Stone Sentinel', fr: 'La Sentinelle de Pierre', es: 'El Centinela de Piedra' },
        location: { en: 'Castillo de San Miguel · 1575', fr: 'Castillo de San Miguel · 1575', es: 'Castillo de San Miguel · 1575' },
        description: {
          en: 'Built to repel pirates, this fortress of carved lava has survived everything — including the secrets entrusted to it. Its walls speak to those who know how to question stone.',
          fr: "Construite pour repousser les pirates, cette forteresse de lave taillée a survécu à tout — y compris aux secrets qu'on lui a confiés. Ses murs parlent à ceux qui savent interroger la pierre.",
          es: 'Construida para repeler piratas, esta fortaleza de lava tallada ha sobrevivido a todo — incluidos los secretos que le fueron confiados.',
        },
      },
      {
        title: { en: 'The Blood of the Earth', fr: 'Le Sang de la Terre', es: 'La Sangre de la Tierra' },
        location: { en: 'Puerta de Tierra & The Forgotten Press', fr: 'Puerta de Tierra & Le Pressoir Oublié', es: 'Puerta de Tierra y El Lagar Olvidado' },
        description: {
          en: 'One night in 1666, torrents of wine flowed through the streets of Garachico. It was not a festival — it was a rebellion. Find the traces of that night in a place no one notices anymore.',
          fr: "Une nuit de 1666, des torrents de vin coulèrent dans les rues de Garachico. Ce n'était pas une fête — c'était une rébellion. Retrouvez les traces de cette nuit dans un lieu que personne ne remarque plus.",
          es: 'Una noche de 1666, torrentes de vino corrieron por las calles de Garachico. No era una fiesta — era una rebelión.',
        },
      },
      {
        title: { en: 'The Heart of Resilience', fr: 'Le Cœur de la Résilience', es: 'El Corazón de la Resiliencia' },
        location: { en: 'Plaza de la Libertad · The Stone House', fr: 'Plaza de la Libertad · La Maison de Pierre', es: 'Plaza de la Libertad · La Casa de Piedra' },
        description: {
          en: 'At the centre of everything, a square that has borne every name and survived every era. One of the facades around you hides an arithmetic that crossed the oceans.',
          fr: "Au centre de tout, une place qui a porté tous les noms et survécu à toutes les époques. L'une des façades qui vous entoure cache une arithmétique qui a traversé les océans.",
          es: 'En el centro de todo, una plaza que ha llevado todos los nombres y sobrevivido a todas las épocas.',
        },
      },
      {
        title: { en: 'The Spiritual Lighthouse', fr: 'Le Phare Spirituel', es: 'El Faro Espiritual' },
        location: { en: 'Iglesia de Santa Ana & the seafront', fr: 'Iglesia de Santa Ana & le front de mer', es: 'Iglesia de Santa Ana y el paseo marítimo' },
        description: {
          en: "The lava stopped at its feet. As if something had prevented it. To reveal the final secret, you will need to align your gaze with that of a sculpture from Japan conversing with a 16th-century church. The truth is only visible from one spot. Can you find it?",
          fr: "La lave s'est arrêtée à ses pieds. Comme si quelque chose l'en avait empêchée. Pour révéler le secret final, il faudra aligner votre regard avec celui d'une sculpture venue du Japon pour converser avec une église du XVIe siècle.",
          es: 'La lava se detuvo a sus pies. Como si algo lo hubiera impedido. Para revelar el secreto final, deberás alinear tu mirada con la de una escultura venida de Japón.',
        },
      },
    ],
    features: [
      {
        icon: '🗺',
        title: { en: 'Off the beaten path', fr: 'Hors des sentiers battus', es: 'Fuera de los caminos trillados' },
        description: { en: 'Your investigations will guide you to places that 99% of visitors never see.', fr: 'Vos investigations vous guideront vers des lieux que 99% des visiteurs ne voient jamais.', es: 'Tus investigaciones te guiarán a lugares que el 99% de los visitantes nunca ven.' },
      },
      {
        icon: '📜',
        title: { en: '100% authentic history', fr: 'Histoire 100% authentique', es: 'Historia 100% auténtica' },
        description: { en: 'Every puzzle is rooted in real, documented facts. You will leave with knowledge few locals possess.', fr: 'Chaque énigme est ancrée dans des faits réels et documentés. Vous repartirez avec une connaissance que peu de locaux possèdent.', es: 'Cada enigma está basado en hechos reales y documentados.' },
      },
      {
        icon: '👁',
        title: { en: 'The town is the game', fr: 'La ville est le jeu', es: 'La ciudad es el juego' },
        description: { en: 'No actors, no artificial sets. The monuments, inscriptions, the architecture itself are your clues.', fr: "Pas d'acteurs, pas de décors artificiels. Les monuments, les inscriptions, l'architecture elle-même sont vos indices.", es: 'Sin actores, sin decorados artificiales. Los monumentos, las inscripciones, la arquitectura misma son tus pistas.' },
      },
      {
        icon: '👨‍👩‍👧‍👦',
        title: { en: 'For all, without limits', fr: 'Pour tous, sans limite', es: 'Para todos, sin límite' },
        description: { en: 'Family, friends, colleagues — there is no player limit. The more you are, the richer the perspectives.', fr: "Famille, amis, collègues — il n'y a pas de limite de joueurs. Plus vous êtes nombreux, plus les perspectives s'enrichissent.", es: 'Familia, amigos, colegas — no hay límite de jugadores.' },
      },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '2h30 – 3h', fr: '2h30 – 3h', es: '2h30 – 3h' }, sub: { en: 'At your own pace', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~3.2 km', fr: '~3,2 km', es: '~3,2 km' }, sub: { en: 'Historic centre', fr: 'Centre historique', es: 'Centro histórico' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Morning', fr: 'Matin', es: 'Mañana' }, sub: { en: 'Light & tranquility', fr: 'Lumière & tranquillité', es: 'Luz y tranquilidad' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '♿', label: { en: 'Accessibility', fr: 'Accessibilité', es: 'Accesibilidad' }, value: { en: 'Mostly', fr: 'Majoritairement', es: 'Mayoritariamente' }, sub: { en: 'Flat route · PRM', fr: 'Parcours plat · PMR', es: 'Ruta plana · PMR' } },
    ],
    motto: {
      en: 'Gloriosa en su adversidad',
      fr: 'Gloriosa en su adversidad',
      es: 'Gloriosa en su adversidad',
    },
    mottoSub: {
      en: "— Garachico's motto · 'Glorious in its adversity'",
      fr: "— La devise de Garachico · « Glorieuse dans son adversité »",
      es: "— El lema de Garachico · 'Gloriosa en su adversidad'",
    },
    ctaBody: {
      en: 'Five centuries of resilience await you in these basalt alleys. The town has survived plague, pirates, fires and lava. It has kept its secrets intact for those who dare to seek them. Will you be among them?',
      fr: "Cinq siècles de résilience vous attendent dans ces ruelles de basalte. La ville a survécu à la peste, aux pirates, aux incendies et à la lave. Elle a gardé ses secrets intacts pour ceux qui oseraient les chercher. Serez-vous de ceux-là ?",
      es: 'Cinco siglos de resiliencia te esperan en estos callejones de basalto. La ciudad ha sobrevivido a la peste, piratas, incendios y lava. Ha guardado sus secretos intactos para quienes se atrevan a buscarlos. ¿Serás uno de ellos?',
    },
  },
  {
    slug: 'le-code-dichasagua',
    image: '/images/offers/escape.png',
    duration: '3h – 4h',
    distance: '3 – 4 km',
    difficulty: 4,
    accentColor: 'turquoise',
    subtitle: {
      en: 'The quest of the last Mencey',
      fr: 'La quête du dernier Mencey',
      es: 'La búsqueda del último Mencey',
    },
    title: {
      en: 'The Code of Ichasagua',
      fr: "Le Code d'Ichasagua",
      es: 'El Código de Ichasagua',
    },
    tagline: {
      en: 'Before the sun disappears behind La Gomera, the last king\'s message awaits deciphering.',
      fr: "Avant que le soleil ne disparaisse derrière La Gomera, le message du dernier roi attend d'être déchiffré.",
      es: 'Antes de que el sol desaparezca tras La Gomera, el mensaje del último rey espera ser descifrado.',
    },
    location: { en: 'Los Cristianos & Playa de las Américas', fr: 'Los Cristianos & Playa de las Américas', es: 'Los Cristianos y Playa de las Américas' },
    intro: {
      en: 'Where tourists stop, your adventure begins',
      fr: "Là où les touristes s'arrêtent, votre aventure commence",
      es: 'Donde los turistas se detienen, tu aventura comienza',
    },
    introBody: {
      en: "Behind the golden facade of Playa de las Américas, another town exists. A thousand-year-old fishing port, alleys where founding families built Tenerife before the hotel complexes arrived. And above it all, a mountain that 95% of visitors completely ignore — silent guardian of an erased civilisation. This game takes you off the beaten track to immerse you in the real history of this territory: that of the Guanches, whose resistance left traces that only the curious can still read.",
      fr: "Derrière la façade dorée de Playa de las Américas, une autre ville existe. Un port de pêcheurs millénaire, des ruelles où les familles fondatrices ont bâti Tenerife avant l'arrivée des complexes hôteliers. Et au-dessus de tout cela, une montagne que 95% des visiteurs ignorent complètement — gardienne silencieuse d'une civilisation effacée. Ce jeu vous fait sortir des sentiers tracés pour vous plonger dans l'histoire réelle de ce territoire : celle des Guanches, ces habitants préhispaniques dont la résistance a laissé des traces que seuls les curieux savent encore lire.",
      es: "Detrás de la fachada dorada de Playa de las Américas, existe otra ciudad. Un puerto pesquero milenario, callejones donde las familias fundadoras construyeron Tenerife antes de la llegada de los complejos hoteleros. Y por encima de todo, una montaña que el 95% de los visitantes ignora completamente — guardiana silenciosa de una civilización borrada.",
    },
    quote: {
      en: '"The Guanches did not disappear. They dissolved into the stone, the wind and the memory of this island. Those who know how to look can still hear them."',
      fr: '« Les Guanches n\'ont pas disparu. Ils se sont dissous dans la pierre, dans le vent et dans la mémoire de cette île. Celui qui sait regarder les entend encore. »',
      es: '"Los Guanches no desaparecieron. Se disolvieron en la piedra, en el viento y en la memoria de esta isla. Quien sabe mirar aún los escucha."',
    },
    quoteAttr: { en: '— Oral tradition of Tenerife', fr: '— Tradition orale de Tenerife', es: '— Tradición oral de Tenerife' },
    historyTitle: {
      en: 'A vanished people, an intact memory',
      fr: 'Un peuple disparu, une mémoire intacte',
      es: 'Un pueblo desaparecido, una memoria intacta',
    },
    historyBody: {
      en: [
        'Before the beaches, before the hotels, before even the first fishermen\'s houses, this territory belonged to the Guanches — the original inhabitants of Tenerife, whose civilisation remains one of the most mysterious in the Atlantic.',
        'On the slopes of Montaña Guaza, their traces are still visible to those who take the trouble to look. Dry stone structures. Caves. Strategic viewpoints over the horizon. A people who carved their presence into the volcanic rock.',
        'In 1502, as the Spanish conquest imposed its final grip on the island, the legendary Mencey Ichasagua is said to have chosen this territory for his last retreat. The rumour of a sacred code hidden in the landscape has never died.',
      ],
      fr: [
        "Avant les plages, avant les hôtels, avant même les premières maisons de pêcheurs, ce territoire appartenait aux Guanches — les habitants originels de Tenerife, dont la civilisation reste l'une des plus mystérieuses de l'Atlantique.",
        "Sur les pentes de la Montaña Guaza, leurs traces sont encore visibles pour qui prend la peine de s'approcher. Des structures en pierre sèche. Des grottes. Des points de vue stratégiques sur l'horizon. Un peuple qui a gravé sa présence dans la roche volcanique.",
        "En 1502, alors que la conquête espagnole achève de s'imposer sur l'île, le légendaire Mencey Ichasagua aurait choisi ce territoire pour sa dernière retraite. La rumeur d'un code sacré dissimulé dans le paysage ne s'est jamais éteinte.",
      ],
      es: [
        'Antes de las playas, antes de los hoteles, antes incluso de las primeras casas de pescadores, este territorio pertenecía a los Guanches — los habitantes originales de Tenerife, cuya civilización sigue siendo una de las más misteriosas del Atlántico.',
        'En las laderas de la Montaña Guaza, sus huellas aún son visibles para quien se toma la molestia de acercarse. Estructuras de piedra seca. Cuevas. Puntos de vista estratégicos sobre el horizonte.',
        'En 1502, el legendario Mencey Ichasagua habría elegido este territorio para su último retiro. El rumor de un código sagrado oculto en el paisaje nunca se ha extinguido.',
      ],
    },
    dates: [
      { year: 'XVe s.', label: { en: 'Guanche civilisation on the Guaza plateau', fr: 'Civilisation Guanche sur le plateau de Guaza', es: 'Civilización Guanche en la meseta de Guaza' } },
      { year: '1502', label: { en: 'Resistance ends. The secret remains.', fr: "La résistance s'éteint. Le secret demeure.", es: 'La resistencia se apaga. El secreto permanece.' } },
    ],
    zones: [
      {
        id: 'urban',
        tag: { en: 'Urban Act', fr: 'Acte Urbain', es: 'Acto Urbano' },
        title: { en: 'Historic Los Cristianos', fr: 'Los Cristianos historique', es: 'Los Cristianos histórico' },
        description: {
          en: 'Start with the streets the guides never show. The real Los Cristianos, the one of fishermen and pioneers, the one that preceded everything.',
          fr: 'Commencez par les rues que les guides ne montrent jamais. Le vrai Los Cristianos, celui des pêcheurs et des pionniers, celui qui a tout précédé.',
          es: 'Comienza por las calles que las guías nunca muestran. El verdadero Los Cristianos, el de los pescadores y pioneros.',
        },
      },
      {
        id: 'mountain',
        tag: { en: 'Wild Act', fr: 'Acte Sauvage', es: 'Acto Salvaje' },
        title: { en: 'Montaña Guaza', fr: 'Montaña Guaza', es: 'Montaña Guaza' },
        description: {
          en: 'Leave the asphalt. The second act takes you to a protected volcanic mountain, territory of the ancients, ignored by almost all visitors.',
          fr: "Quittez l'asphalte. Le second acte vous emmène sur une montagne volcanique protégée, territoire des anciens, ignorée par la quasi-totalité des visiteurs.",
          es: 'Deja el asfalto. El segundo acto te lleva a una montaña volcánica protegida, territorio de los antiguos.',
        },
      },
    ],
    acts: [
      {
        title: { en: 'The Old Village Sanctuary', fr: 'Le Sanctuaire du Vieux Village', es: 'El Santuario del Pueblo Viejo' },
        location: { en: 'Plaza de la Iglesia · Los Cristianos', fr: 'Plaza de la Iglesia · Los Cristianos', es: 'Plaza de la Iglesia · Los Cristianos' },
        description: { en: 'The spiritual heart of the fishermen. This church carries the scars of two centuries of transformation. A date inscribed in stone will deliver the first fragment of the code.', fr: "Le cœur spirituel des pêcheurs. Cette église porte les cicatrices de deux siècles de transformations. Une date inscrite dans la pierre vous livrera le premier fragment du code.", es: 'El corazón espiritual de los pescadores. Esta iglesia lleva las cicatrices de dos siglos de transformaciones.' },
        zone: 'urban' as const,
      },
      {
        title: { en: 'The Pioneer Alleys', fr: 'Les Ruelles des Pionniers', es: 'Los Callejones de los Pioneros' },
        location: { en: 'Historic quarter · Pedestrian alleys', fr: 'Quartier historique · Ruelles piétonnes', es: 'Casco histórico · Callejones peatonales' },
        description: { en: 'Far from the grand boulevards, streets still bear the names of those who built everything. A memorial plaque, a few palms, and the memory of a family who opened this territory to the world.', fr: "Loin des grands boulevards, des rues portent encore les noms de ceux qui ont tout construit. Une plaque commémorative, quelques palmiers, et la mémoire d'une famille qui a ouvert les portes de ce territoire au monde entier.", es: 'Lejos de los grandes bulevares, las calles aún llevan los nombres de quienes lo construyeron todo.' },
        zone: 'urban' as const,
      },
      {
        title: { en: 'The First Jetty', fr: 'Le Premier Môle', es: 'El Primer Muelle' },
        location: { en: 'Los Cristianos Port · Historic quay', fr: 'Port de Los Cristianos · Quai historique', es: 'Puerto de Los Cristianos · Muelle histórico' },
        description: { en: 'This port has existed since the first sailors sought shelter in these waters. Modern concrete hides a centuries-old story. Look for what the conquest ships saw arriving — and what Ichasagua watched departing.', fr: "Ce port existe depuis que les premiers navigateurs ont cherché un abri dans ces eaux. Le béton moderne cache une histoire vieille de plusieurs siècles. Cherchez ce qu'Ichasagua, lui, regardait partir.", es: 'Este puerto existe desde que los primeros navegantes buscaron refugio en estas aguas.' },
        zone: 'urban' as const,
      },
      {
        title: { en: 'The Geological Ascent', fr: "L'Ascension Géologique", es: 'El Ascenso Geológico' },
        location: { en: 'Slopes of Montaña Guaza · Natural Monument', fr: 'Flancs de la Montaña Guaza · Monument Naturel', es: 'Laderas de la Montaña Guaza · Monumento Natural' },
        description: { en: 'The mountain is not made of the same material as the rest of the island. By touching its walls, you will understand why the Guanches chose it as their last fortress.', fr: "La montagne n'est pas faite du même matériau que le reste de l'île. En touchant ses parois, vous comprendrez pourquoi les Guanches l'ont choisie comme dernière forteresse.", es: 'La montaña no está hecha del mismo material que el resto de la isla.' },
        zone: 'mountain' as const,
      },
      {
        title: { en: 'Traces of the Ancients', fr: 'Les Traces des Anciens', es: 'Las Huellas de los Antiguos' },
        location: { en: 'Plateau · Pre-Hispanic remains', fr: 'Plateau · Vestiges Préhispaniques', es: 'Meseta · Vestigios Prehispánicos' },
        description: { en: 'Here, no one ever needed mortar to build. The structures were erected by the hands of the first inhabitants, following a logic that obeys only one law: orientation towards the white summit that dominates the horizon.', fr: "Ici, personne n'a jamais eu besoin de mortier. Les structures ont été érigées par les mains des premiers habitants, selon une logique qui n'obéit qu'à une seule loi : l'orientation vers ce sommet blanc qui domine l'horizon.", es: 'Aquí, nadie necesitó nunca mortero para construir. Las estructuras fueron erigidas por las manos de los primeros habitantes.' },
        zone: 'mountain' as const,
      },
      {
        title: { en: 'Where Sky Meets Earth', fr: 'Le Point où le Ciel touche la Terre', es: 'Donde el Cielo toca la Tierra' },
        location: { en: 'Summit · 428 metres', fr: 'Sommet · 428 mètres', es: 'Cumbre · 428 metros' },
        description: { en: 'At the summit awaits an official marker that geographers placed there — without knowing that Ichasagua had chosen this exact spot five centuries earlier. The final code is engraved in metal. But to read it, you must first earn the view.', fr: "Au sommet attend un repère officiel que les géographes ont planté là — sans savoir qu'Ichasagua avait choisi cet endroit exact cinq siècles plus tôt. Le code final est gravé dans le métal. Mais pour le lire, il faut d'abord mériter la vue.", es: 'En la cumbre espera un punto geodésico que los geógrafos colocaron allí — sin saber que Ichasagua había elegido ese lugar exacto cinco siglos antes.' },
        zone: 'mountain' as const,
      },
    ],
    features: [
      { icon: '🏘', title: { en: 'Behind the scenes', fr: "L'envers du décor", es: 'El otro lado' }, description: { en: 'The historic alleys of Los Cristianos that 99% of visitors never see. A pioneers\' quarter preserved behind the tourist signs.', fr: "Les ruelles historiques de Los Cristianos que 99% des visiteurs ne voient jamais. Un quartier de pionniers préservé derrière les enseignes touristiques.", es: 'Los callejones históricos de Los Cristianos que el 99% de los visitantes nunca ven.' } },
      { icon: '🏔', title: { en: 'A sacred mountain', fr: 'Une montagne sacrée', es: 'Una montaña sagrada' }, description: { en: 'Montaña Guaza, a protected natural monument, with its authentic Guanche remains. A volcanic landscape almost no tourist treads.', fr: "La Montaña Guaza, monument naturel protégé, avec ses vestiges guanches authentiques. Un paysage volcanique que presque aucun touriste ne foule.", es: 'La Montaña Guaza, monumento natural protegido, con sus vestigios guanches auténticos.' } },
      { icon: '📜', title: { en: '100% real history', fr: 'Histoire 100% réelle', es: 'Historia 100% real' }, description: { en: 'Every clue is rooted in documented facts: Guanche archaeology, port history, memory of founding families.', fr: "Chaque indice s'ancre dans des faits documentés : archéologie guanche, histoire du port, mémoire des familles fondatrices.", es: 'Cada pista se basa en hechos documentados: arqueología guanche, historia del puerto.' } },
      { icon: '👨‍👩‍👧‍👦', title: { en: 'No player limit', fr: 'Aucune limite de joueurs', es: 'Sin límite de jugadores' }, description: { en: 'Family, friends, colleagues — the more you are, the more perspectives multiply. Some clues can only be spotted by several people.', fr: "Famille, amis, collègues — plus vous êtes nombreux, plus les regards se multiplient. Certains indices ne se remarquent qu'à plusieurs.", es: 'Familia, amigos, colegas — cuantos más seáis, más perspectivas se multiplican.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Total duration', fr: 'Durée totale', es: 'Duración total' }, value: { en: '3h – 4h', fr: '3h – 4h', es: '3h – 4h' }, sub: { en: 'At your own pace', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '3 – 4 km', fr: '3 – 4 km', es: '3 – 4 km' }, sub: { en: 'One-way to summit', fr: 'Aller simple sommet', es: 'Solo ida a la cumbre' } },
      { icon: '🌅', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Early morning', fr: 'Tôt le matin', es: 'Temprano por la mañana' }, sub: { en: 'Or late afternoon', fr: 'Ou fin d\'après-midi', es: 'O al atardecer' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '👟', label: { en: 'Equipment', fr: 'Équipement', es: 'Equipamiento' }, value: { en: 'Sport shoes', fr: 'Chaussures sport', es: 'Zapatillas deportivas' }, sub: { en: 'Required for mountain', fr: 'Obligatoires en montagne', es: 'Obligatorias en montaña' } },
    ],
    warning: {
      icon: '☀️',
      title: { en: 'Important advice', fr: 'Conseil important', es: 'Consejo importante' },
      body: {
        en: 'The urban part of Los Cristianos is flat and ideal for everyone. The ascent of Montaña Guaza is rocky, shadeless and not accessible with a pushchair. Bring plenty of water, sun protection and start during cool hours. The game starts at the sea and ends at the summit — plan your return before sunset.',
        fr: "La partie urbaine de Los Cristianos est plate et idéale pour tous. L'ascension de la Montaña Guaza est caillouteuse, sans ombre et non praticable en poussette. Prévoyez de l'eau en quantité, une protection solaire et réservez votre départ aux heures fraîches. Le jeu commence à la mer et finit au sommet — planifiez votre retour avant le coucher du soleil.",
        es: 'La parte urbana de Los Cristianos es plana e ideal para todos. El ascenso a la Montaña Guaza es pedregoso, sin sombra y no accesible con cochecito. Traiga abundante agua, protección solar y empiece en las horas frescas.',
      },
    },
    motto: { en: "Ichasagua never surrendered.", fr: "Ichasagua n'a jamais capitulé.", es: 'Ichasagua nunca capituló.' },
    mottoSub: { en: '— His secret has been waiting since 1502', fr: '— Son secret attend depuis 1502', es: '— Su secreto espera desde 1502' },
    ctaBody: {
      en: "For centuries, visitors have passed beneath his windows without ever looking up at the mountain. Without ever venturing into the alleys where history was written. You will be different. The code exists. The clues are there. All that is missing is you.",
      fr: "Pendant des siècles, les visiteurs sont passés sous ses fenêtres sans jamais lever les yeux vers la montagne. Sans jamais s'enfoncer dans les ruelles où l'histoire s'est écrite. Vous serez différents. Le code existe. Les indices sont là. Il ne manque que vous.",
      es: "Durante siglos, los visitantes han pasado bajo sus ventanas sin levantar la vista hacia la montaña. Sin adentrarse en los callejones donde se escribió la historia. Tú serás diferente. El código existe. Las pistas están ahí. Solo faltas tú.",
    },
  },
  {
    slug: 'le-coffre-des-trois-cles',
    image: '/images/offers/escape.png',
    duration: '2h – 2h30',
    distance: '~3 km',
    difficulty: 4,
    subtitle: { en: 'A UNESCO mystery', fr: 'Un mystère au patrimoine mondial', es: 'Un misterio patrimonio mundial' },
    title: { en: 'The Chest of Three Keys', fr: 'Le Coffre des Trois Clés', es: 'El Cofre de las Tres Llaves' },
    tagline: {
      en: 'Three keys. Three centuries. One chest that was never meant to be opened.',
      fr: "Trois clés. Trois siècles. Un coffre qui n'aurait jamais dû être ouvert.",
      es: 'Tres llaves. Tres siglos. Un cofre que nunca debió abrirse.',
    },
    location: { en: 'San Cristóbal de La Laguna', fr: 'San Cristóbal de La Laguna', es: 'San Cristóbal de La Laguna' },
    intro: { en: 'La Laguna: the first city of the Atlantic', fr: "La Laguna : la première ville de l'Atlantique", es: 'La Laguna: la primera ciudad del Atlántico' },
    introBody: {
      en: "La Laguna was the blueprint. Before Havana, Lima, and Cartagena, this city defined how colonial cities would be built across the Americas. Walk its UNESCO streets and uncover the three keys that unlock a chest hidden since the Inquisition.",
      fr: "La Laguna fut le modèle. Avant La Havane, Lima et Carthagène, cette ville a défini la manière dont les villes coloniales seraient construites dans toutes les Amériques. Parcourez ses rues UNESCO et découvrez les trois clés qui ouvrent un coffre caché depuis l'Inquisition.",
      es: "La Laguna fue el modelo. Antes de La Habana, Lima y Cartagena, esta ciudad definió cómo se construirían las ciudades coloniales en las Américas.",
    },
    quote: {
      en: '"La Laguna is a living manuscript — each street a sentence, each plaza a chapter, each church a punctuation mark in a story five centuries long."',
      fr: '« La Laguna est un manuscrit vivant — chaque rue une phrase, chaque place un chapitre, chaque église un signe de ponctuation dans une histoire de cinq siècles. »',
      es: '"La Laguna es un manuscrito vivo — cada calle una frase, cada plaza un capítulo, cada iglesia un signo de puntuación."',
    },
    quoteAttr: { en: '— UNESCO World Heritage citation, 1999', fr: '— Citation du patrimoine mondial UNESCO, 1999', es: '— Cita del patrimonio mundial UNESCO, 1999' },
    historyTitle: { en: 'The city that designed the Americas', fr: "La ville qui a dessiné les Amériques", es: 'La ciudad que diseñó las Américas' },
    historyBody: {
      en: [
        'Founded in 1496 as the capital of Tenerife, La Laguna became the template for every major colonial city in Latin America. Its grid layout, its balance of religious and civil power, its blend of cultures — all were replicated across the New World.',
        'But beneath the orderly streets lies disorder: the intrigues of the Inquisition, secret societies, and a chest protected by three keys held by three families who never spoke to each other.',
      ],
      fr: [
        "Fondée en 1496 comme capitale de Tenerife, La Laguna devint le modèle de toutes les grandes villes coloniales d'Amérique latine. Son plan en damier, son équilibre entre pouvoir religieux et civil, son mélange de cultures — tout fut reproduit dans le Nouveau Monde.",
        "Mais sous les rues ordonnées se cache le désordre : les intrigues de l'Inquisition, des sociétés secrètes, et un coffre protégé par trois clés détenues par trois familles qui ne se parlaient jamais.",
      ],
      es: [
        'Fundada en 1496 como capital de Tenerife, La Laguna se convirtió en el modelo de todas las grandes ciudades coloniales de América Latina.',
        'Pero bajo las calles ordenadas se esconde el desorden: las intrigas de la Inquisición, sociedades secretas, y un cofre protegido por tres llaves en manos de tres familias que nunca se hablaban.',
      ],
    },
    dates: [
      { year: '1496', label: { en: 'Foundation as capital of Tenerife', fr: 'Fondation comme capitale de Tenerife', es: 'Fundación como capital de Tenerife' } },
      { year: '1999', label: { en: 'UNESCO World Heritage designation', fr: 'Inscription au patrimoine mondial UNESCO', es: 'Designación patrimonio mundial UNESCO' } },
    ],
    acts: [
      { title: { en: 'The Key of Knowledge', fr: 'La Clé du Savoir', es: 'La Llave del Saber' }, location: { en: 'University quarter', fr: 'Quartier universitaire', es: 'Barrio universitario' }, description: { en: 'The first key belongs to a family of scholars who hid their secrets in the architecture of learning.', fr: 'La première clé appartient à une famille de savants qui cachèrent leurs secrets dans l\'architecture du savoir.', es: 'La primera llave pertenece a una familia de eruditos que escondieron sus secretos en la arquitectura del saber.' } },
      { title: { en: 'The Key of Faith', fr: 'La Clé de la Foi', es: 'La Llave de la Fe' }, location: { en: 'Cathedral & convents', fr: 'Cathédrale & couvents', es: 'Catedral y conventos' }, description: { en: 'The second key was entrusted to the Church. But which church? In a city with 17 convents, faith has many hiding places.', fr: 'La deuxième clé fut confiée à l\'Église. Mais quelle église ? Dans une ville aux 17 couvents, la foi a de nombreuses cachettes.', es: 'La segunda llave fue confiada a la Iglesia. Pero ¿a cuál? En una ciudad con 17 conventos, la fe tiene muchos escondites.' } },
      { title: { en: 'The Key of Commerce', fr: 'La Clé du Commerce', es: 'La Llave del Comercio' }, location: { en: 'Merchant houses', fr: 'Maisons de marchands', es: 'Casas de mercaderes' }, description: { en: 'The third key belonged to the merchants. Follow the money trail through the ornate facades of La Laguna\'s noble houses.', fr: "La troisième clé appartenait aux marchands. Suivez la piste de l'argent à travers les façades ornées des maisons nobles de La Laguna.", es: 'La tercera llave pertenecía a los mercaderes. Sigue el rastro del dinero a través de las fachadas ornamentadas.' } },
      { title: { en: 'The Chest', fr: 'Le Coffre', es: 'El Cofre' }, location: { en: 'A place only the worthy find', fr: 'Un lieu que seuls les dignes trouvent', es: 'Un lugar que solo los dignos encuentran' }, description: { en: 'Three keys united. The chest awaits. But what it contains may change everything you thought you knew.', fr: 'Trois clés réunies. Le coffre attend. Mais ce qu\'il contient pourrait changer tout ce que vous pensiez savoir.', es: 'Tres llaves unidas. El cofre espera. Pero lo que contiene podría cambiar todo lo que creías saber.' } },
    ],
    features: [
      { icon: '🏛', title: { en: 'UNESCO World Heritage', fr: 'Patrimoine mondial UNESCO', es: 'Patrimonio mundial UNESCO' }, description: { en: 'Explore a perfectly preserved 15th-century city that shaped the Americas.', fr: "Explorez une ville du XVe siècle parfaitement conservée qui a façonné les Amériques.", es: 'Explora una ciudad del siglo XV perfectamente conservada.' } },
      { icon: '📜', title: { en: 'Inquisition mysteries', fr: "Mystères de l'Inquisition", es: 'Misterios de la Inquisición' }, description: { en: 'Uncover stories the Inquisition tried to bury forever.', fr: "Découvrez les histoires que l'Inquisition a tenté d'enterrer à jamais.", es: 'Descubre historias que la Inquisición intentó enterrar para siempre.' } },
      { icon: '👁', title: { en: 'The town is the game', fr: 'La ville est le jeu', es: 'La ciudad es el juego' }, description: { en: 'Every facade, every cloister, every cobblestone has a story to tell.', fr: "Chaque façade, chaque cloître, chaque pavé a une histoire à raconter.", es: 'Cada fachada, cada claustro, cada adoquín tiene una historia que contar.' } },
      { icon: '👨‍👩‍👧‍👦', title: { en: 'For all, without limits', fr: 'Pour tous, sans limite', es: 'Para todos, sin límite' }, description: { en: 'No player limit. Perfect for families and large groups.', fr: "Pas de limite de joueurs. Parfait pour les familles et grands groupes.", es: 'Sin límite de jugadores. Perfecto para familias y grupos grandes.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '2h – 2h30', fr: '2h – 2h30', es: '2h – 2h30' }, sub: { en: 'At your own pace', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~3 km', fr: '~3 km', es: '~3 km' }, sub: { en: 'Historic centre', fr: 'Centre historique', es: 'Centro histórico' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Morning', fr: 'Matin', es: 'Mañana' }, sub: { en: 'Light & tranquility', fr: 'Lumière & tranquillité', es: 'Luz y tranquilidad' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '♿', label: { en: 'Accessibility', fr: 'Accessibilité', es: 'Accesibilidad' }, value: { en: 'Fully', fr: 'Totalement', es: 'Totalmente' }, sub: { en: 'Flat city centre', fr: 'Centre-ville plat', es: 'Centro plano' } },
    ],
    motto: { en: 'Three keys, one truth', fr: 'Trois clés, une vérité', es: 'Tres llaves, una verdad' },
    mottoSub: { en: '— The motto of the Three Families', fr: '— La devise des Trois Familles', es: '— El lema de las Tres Familias' },
    ctaBody: {
      en: 'For five centuries, three families guarded three keys to a chest no one was meant to open. Today, their descendants have forgotten. But the city remembers. Are you ready to unite what was divided?',
      fr: "Pendant cinq siècles, trois familles gardèrent trois clés d'un coffre que personne ne devait ouvrir. Aujourd'hui, leurs descendants ont oublié. Mais la ville se souvient. Êtes-vous prêts à réunir ce qui fut divisé ?",
      es: 'Durante cinco siglos, tres familias guardaron tres llaves de un cofre que nadie debía abrir. Hoy, sus descendientes lo han olvidado. Pero la ciudad recuerda. ¿Estás listo para unir lo que fue dividido?',
    },
  },
  {
    slug: 'le-butin-de-la-bateria',
    image: '/images/offers/escape.png',
    duration: '1h30 – 2h',
    distance: '~2.8 km',
    difficulty: 3,
    subtitle: { en: 'A pirate treasure hunt', fr: 'Une chasse au trésor pirate', es: 'Una caza del tesoro pirata' },
    title: { en: 'The Loot of La Batería', fr: 'Le Butin de la Batería', es: 'El Botín de la Batería' },
    tagline: {
      en: 'In 1797, Admiral Nelson lost his arm here. The treasure he came for was never found. Until now.',
      fr: "En 1797, l'amiral Nelson perdit son bras ici. Le trésor qu'il cherchait ne fut jamais trouvé. Jusqu'à maintenant.",
      es: 'En 1797, el almirante Nelson perdió su brazo aquí. El tesoro que buscaba nunca fue encontrado. Hasta ahora.',
    },
    location: { en: 'Puerto de la Cruz', fr: 'Puerto de la Cruz', es: 'Puerto de la Cruz' },
    intro: { en: 'Where the ocean tells stories', fr: "Là où l'océan raconte des histoires", es: 'Donde el océano cuenta historias' },
    introBody: {
      en: "Puerto de la Cruz was the gateway to Tenerife's wealth — wine, sugar, cochineal. Pirates and admirals coveted its riches. One treasure, hidden during Nelson's attack, was protected by a code known only to the battery's captain. Follow the maritime trail and crack the captain's cipher.",
      fr: "Puerto de la Cruz était la porte d'entrée vers les richesses de Tenerife — vin, sucre, cochenille. Pirates et amiraux convoitaient ses trésors. Un butin, caché lors de l'attaque de Nelson, fut protégé par un code connu du seul capitaine de la batterie. Suivez la piste maritime et percez le chiffre du capitaine.",
      es: "Puerto de la Cruz era la puerta de entrada a las riquezas de Tenerife — vino, azúcar, cochinilla. Piratas y almirantes codiciaban sus tesoros.",
    },
    quote: {
      en: '"I have always hated a battle on land. I would rather have an arm shot off than lose a ship."',
      fr: '« J\'ai toujours détesté les batailles terrestres. Je préférerais perdre un bras que de perdre un navire. »',
      es: '"Siempre he odiado una batalla en tierra. Preferiría perder un brazo que perder un barco."',
    },
    quoteAttr: { en: '— Admiral Horatio Nelson, 1797', fr: '— Amiral Horatio Nelson, 1797', es: '— Almirante Horatio Nelson, 1797' },
    historyTitle: { en: 'The port that defeated Nelson', fr: 'Le port qui vainquit Nelson', es: 'El puerto que derrotó a Nelson' },
    historyBody: {
      en: [
        'In July 1797, the greatest admiral in history launched an assault on Santa Cruz de Tenerife. He lost his right arm — and the battle. But the attack sent shockwaves along the coast, and Puerto de la Cruz prepared for the worst.',
        "The port's captain ordered the treasury hidden. The code he used was based on maritime signals only a sailor could read. He died three weeks later, taking the location with him. Or did he?",
      ],
      fr: [
        "En juillet 1797, le plus grand amiral de l'histoire lança un assaut sur Santa Cruz de Tenerife. Il y perdit son bras droit — et la bataille. Mais l'attaque envoya des ondes de choc le long de la côte, et Puerto de la Cruz se prépara au pire.",
        "Le capitaine du port ordonna de cacher le trésor. Le code qu'il utilisa était basé sur des signaux maritimes que seul un marin pouvait lire. Il mourut trois semaines plus tard, emportant la localisation avec lui. Ou pas ?",
      ],
      es: [
        'En julio de 1797, el mayor almirante de la historia lanzó un asalto a Santa Cruz de Tenerife. Perdió su brazo derecho — y la batalla.',
        'El capitán del puerto ordenó esconder el tesoro. El código que usó estaba basado en señales marítimas. Murió tres semanas después, llevándose la ubicación consigo. ¿O no?',
      ],
    },
    dates: [
      { year: '1797', label: { en: "Nelson's attack on Tenerife", fr: 'Attaque de Nelson sur Tenerife', es: 'Ataque de Nelson a Tenerife' } },
      { year: 'Today', label: { en: 'The treasure still waits', fr: 'Le trésor attend toujours', es: 'El tesoro aún espera' } },
    ],
    acts: [
      { title: { en: 'The Captain\'s Log', fr: 'Le Journal du Capitaine', es: 'El Diario del Capitán' }, location: { en: 'Old harbour & fishermen\'s quarter', fr: 'Vieux port & quartier des pêcheurs', es: 'Puerto viejo y barrio pesquero' }, description: { en: 'The captain\'s final entry is encrypted. The harbour holds the first piece of the cipher.', fr: "La dernière entrée du capitaine est chiffrée. Le port détient le premier morceau du code.", es: 'La última entrada del capitán está cifrada. El puerto guarda la primera pieza del código.' } },
      { title: { en: 'The Signal Tower', fr: 'La Tour des Signaux', es: 'La Torre de Señales' }, location: { en: 'Coastal watchtower', fr: 'Tour de guet côtière', es: 'Torre vigía costera' }, description: { en: 'Maritime flags once warned of pirates. Today, they spell a different message for those who can read them.', fr: "Les pavillons maritimes avertissaient jadis de l'approche des pirates. Aujourd'hui, ils épellent un message différent pour ceux qui savent les lire.", es: 'Las banderas marítimas alertaban de piratas. Hoy, deletrean un mensaje diferente.' } },
      { title: { en: 'The Battery', fr: 'La Batterie', es: 'La Batería' }, location: { en: 'Batería de Santa Bárbara', fr: 'Batería de Santa Bárbara', es: 'Batería de Santa Bárbara' }, description: { en: 'The cannons fell silent centuries ago, but the walls still echo with the captain\'s final order. Decode it.', fr: "Les canons se sont tus il y a des siècles, mais les murs résonnent encore du dernier ordre du capitaine. Décodez-le.", es: 'Los cañones callaron hace siglos, pero los muros aún hacen eco de la última orden del capitán.' } },
    ],
    features: [
      { icon: '🏴‍☠️', title: { en: 'Pirate history', fr: 'Histoire de pirates', es: 'Historia pirata' }, description: { en: 'A real maritime adventure rooted in the true story of Nelson\'s defeat.', fr: "Une vraie aventure maritime ancrée dans l'histoire réelle de la défaite de Nelson.", es: 'Una verdadera aventura marítima basada en la derrota de Nelson.' } },
      { icon: '📜', title: { en: 'Maritime codes', fr: 'Codes maritimes', es: 'Códigos marítimos' }, description: { en: 'Learn to read flag signals and maritime ciphers used by 18th-century sailors.', fr: "Apprenez à lire les signaux de drapeaux et les chiffres maritimes des marins du XVIIIe siècle.", es: 'Aprende a leer señales de banderas y cifras marítimas del siglo XVIII.' } },
      { icon: '👁', title: { en: 'The town is the game', fr: 'La ville est le jeu', es: 'La ciudad es el juego' }, description: { en: 'The coast, the harbour, the watchtowers — all become part of your treasure hunt.', fr: "La côte, le port, les tours de guet — tout fait partie de votre chasse au trésor.", es: 'La costa, el puerto, las torres vigía — todo forma parte de tu caza del tesoro.' } },
      { icon: '👨‍👩‍👧‍👦', title: { en: 'For all, without limits', fr: 'Pour tous, sans limite', es: 'Para todos, sin límite' }, description: { en: 'No player limit. Perfect for families and adventurers of all ages.', fr: "Pas de limite de joueurs. Parfait pour les familles et les aventuriers de tous âges.", es: 'Sin límite de jugadores. Perfecto para familias y aventureros de todas las edades.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '1h30 – 2h', fr: '1h30 – 2h', es: '1h30 – 2h' }, sub: { en: 'At your own pace', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~2.8 km', fr: '~2,8 km', es: '~2,8 km' }, sub: { en: 'Coastal route', fr: 'Parcours côtier', es: 'Ruta costera' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Sunset', fr: 'Coucher de soleil', es: 'Atardecer' }, sub: { en: 'Golden light on the sea', fr: 'Lumière dorée sur la mer', es: 'Luz dorada sobre el mar' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '♿', label: { en: 'Accessibility', fr: 'Accessibilité', es: 'Accesibilidad' }, value: { en: 'Mostly', fr: 'Majoritairement', es: 'Mayoritariamente' }, sub: { en: 'Coastal promenade', fr: 'Promenade côtière', es: 'Paseo costero' } },
    ],
    motto: { en: 'The sea never forgets', fr: "La mer n'oublie jamais", es: 'El mar nunca olvida' },
    mottoSub: { en: '— Old maritime saying', fr: '— Ancien dicton maritime', es: '— Antiguo dicho marinero' },
    ctaBody: {
      en: "Nelson lost his arm here, but the treasure he sought was already hidden. For over two centuries, the captain's code has guarded a fortune no one has claimed. The clues are scattered along the coast, waiting for someone bold enough to follow them. Are you that person?",
      fr: "Nelson perdit son bras ici, mais le trésor qu'il cherchait était déjà caché. Depuis plus de deux siècles, le code du capitaine garde une fortune que personne n'a réclamée. Les indices sont dispersés le long de la côte, attendant quelqu'un d'assez audacieux pour les suivre. Êtes-vous cette personne ?",
      es: "Nelson perdió su brazo aquí, pero el tesoro que buscaba ya estaba escondido. Durante más de dos siglos, el código del capitán ha guardado una fortuna. ¿Eres lo suficientemente audaz para seguir las pistas?",
    },
  },
];

export function getEscapeGameBySlug(slug: string): EscapeGameData | undefined {
  return escapeGamesData.find((g) => g.slug === slug);
}

export function getAllEscapeGameSlugs(): string[] {
  return escapeGamesData.map((g) => g.slug);
}
