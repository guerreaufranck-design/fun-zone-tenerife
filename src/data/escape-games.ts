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

export type IslandId = 'tenerife' | 'gran-canaria' | 'lanzarote' | 'fuerteventura';

export interface EscapeGameData {
  slug: string;
  image: string;
  island?: string; // display name, defaults to Tenerife
  islandId?: IslandId; // grouping key, defaults to tenerife
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
  stickyMessage: Record<string, string>;
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
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración', de: 'Dauer', it: 'Durata' }, value: { en: '2h30 – 3h', fr: '2h30 – 3h', es: '2h30 – 3h' }, sub: { en: 'At your own pace', fr: 'À votre rythme', es: 'A tu ritmo', de: 'In Ihrem Tempo', it: 'Al vostro ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores', de: 'Spieler', it: 'Giocatori' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite', de: 'Unbegrenzt', it: 'Illimitati' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años', de: 'Ab 8 Jahren', it: 'Da 8 anni' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia', de: 'Distanz', it: 'Distanza' }, value: { en: '~3.2 km', fr: '~3,2 km', es: '~3,2 km' }, sub: { en: 'Historic centre', fr: 'Centre historique', es: 'Centro histórico', de: 'Historisches Zentrum', it: 'Centro storico' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento', de: 'Beste Zeit', it: 'Momento migliore' }, value: { en: 'Morning', fr: 'Matin', es: 'Mañana', de: 'Morgens', it: 'Mattina' }, sub: { en: 'Light & tranquility', fr: 'Lumière & tranquillité', es: 'Luz y tranquilidad', de: 'Licht & Ruhe', it: 'Luce e tranquillità' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas', de: 'Sprachen', it: 'Lingue' }, value: { en: 'FR · EN · ES · DE · IT', fr: 'FR · EN · ES · DE · IT', es: 'FR · EN · ES · DE · IT', de: 'FR · EN · ES · DE · IT', it: 'FR · EN · ES · DE · IT' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición', de: 'Andere auf Anfrage', it: 'Altre su richiesta' } },
      { icon: '♿', label: { en: 'Accessibility', fr: 'Accessibilité', es: 'Accesibilidad', de: 'Barrierefreiheit', it: 'Accessibilità' }, value: { en: 'Mostly', fr: 'Majoritairement', es: 'Mayoritariamente', de: 'Größtenteils', it: 'Per lo più' }, sub: { en: 'Flat route · PRM', fr: 'Parcours plat · PMR', es: 'Ruta plana · PMR', de: 'Flache Route · Barrierefrei', it: 'Percorso piano · PRM' } },
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
    stickyMessage: {
      en: "It's your turn! Discover Garachico while having fun and uncovering historical secrets still hidden from most. A town frozen in time awaits your investigation.",
      fr: "À toi de jouer ! Découvre Garachico en t'amusant et en apprenant des faits historiques encore cachés du plus grand nombre. Une ville figée dans le temps attend ton enquête.",
      es: "¡Te toca a ti! Descubre Garachico divirtiéndote y aprendiendo secretos históricos aún ocultos para la mayoría. Un pueblo congelado en el tiempo espera tu investigación.",
      de: "Du bist dran! Entdecke Garachico mit Spaß und lerne historische Geheimnisse, die den meisten noch verborgen sind. Eine in der Zeit eingefrorene Stadt wartet auf deine Ermittlung.",
      it: "Tocca a te! Scopri Garachico divertendoti e imparando segreti storici ancora nascosti ai più. Una città cristallizzata nel tempo attende la tua indagine.",
    },
    ctaBody: {
      en: 'Five centuries of resilience await you in these basalt alleys. The town has survived plague, pirates, fires and lava. It has kept its secrets intact for those who dare to seek them. Will you be among them?',
      fr: "Cinq siècles de résilience vous attendent dans ces ruelles de basalte. La ville a survécu à la peste, aux pirates, aux incendies et à la lave. Elle a gardé ses secrets intacts pour ceux qui oseraient les chercher. Serez-vous de ceux-là ?",
      es: 'Cinco siglos de resiliencia te esperan en estos callejones de basalto. La ciudad ha sobrevivido a la peste, piratas, incendios y lava. Ha guardado sus secretos intactos para quienes se atrevan a buscarlos. ¿Serás uno de ellos?',
    },
  },
  {
    slug: 'le-code-dichasagua',
    image: '/images/offers/cristianos.png',
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
      { icon: '🕐', label: { en: 'Total duration', fr: 'Durée totale', es: 'Duración total', de: 'Gesamtdauer', it: 'Durata totale' }, value: { en: '3h – 4h', fr: '3h – 4h', es: '3h – 4h' }, sub: { en: 'At your own pace', fr: 'À votre rythme', es: 'A tu ritmo', de: 'In Ihrem Tempo', it: 'Al vostro ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores', de: 'Spieler', it: 'Giocatori' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite', de: 'Unbegrenzt', it: 'Illimitati' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años', de: 'Ab 8 Jahren', it: 'Da 8 anni' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia', de: 'Distanz', it: 'Distanza' }, value: { en: '3 – 4 km', fr: '3 – 4 km', es: '3 – 4 km' }, sub: { en: 'One-way to summit', fr: 'Aller simple sommet', es: 'Solo ida a la cumbre', de: 'Einfach zum Gipfel', it: 'Solo andata alla vetta' } },
      { icon: '🌅', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento', de: 'Beste Zeit', it: 'Momento migliore' }, value: { en: 'Early morning', fr: 'Tôt le matin', es: 'Temprano por la mañana', de: 'Früh morgens', it: 'Presto la mattina' }, sub: { en: 'Or late afternoon', fr: 'Ou fin d\'après-midi', es: 'O al atardecer', de: 'Oder spätnachmittags', it: 'O nel tardo pomeriggio' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas', de: 'Sprachen', it: 'Lingue' }, value: { en: 'FR · EN · ES · DE · IT', fr: 'FR · EN · ES · DE · IT', es: 'FR · EN · ES · DE · IT', de: 'FR · EN · ES · DE · IT', it: 'FR · EN · ES · DE · IT' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición', de: 'Andere auf Anfrage', it: 'Altre su richiesta' } },
      { icon: '👟', label: { en: 'Equipment', fr: 'Équipement', es: 'Equipamiento', de: 'Ausrüstung', it: 'Equipaggiamento' }, value: { en: 'Sport shoes', fr: 'Chaussures sport', es: 'Zapatillas deportivas', de: 'Sportschuhe', it: 'Scarpe sportive' }, sub: { en: 'Required for mountain', fr: 'Obligatoires en montagne', es: 'Obligatorias en montaña', de: 'Pflicht im Gebirge', it: 'Obbligatorie in montagna' } },
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
    stickyMessage: {
      en: "It's your turn! Explore Los Cristianos and Montaña Guaza while having fun and learning secrets the Guanches left behind centuries ago. An adventure from sea to summit awaits.",
      fr: "À toi de jouer ! Explore Los Cristianos et la Montaña Guaza en t'amusant et en découvrant les secrets que les Guanches ont laissés il y a des siècles. Une aventure de la mer au sommet t'attend.",
      es: "¡Te toca a ti! Explora Los Cristianos y la Montaña Guaza divirtiéndote y descubriendo secretos que los Guanches dejaron hace siglos. Una aventura del mar a la cumbre te espera.",
      de: "Du bist dran! Erkunde Los Cristianos und Montaña Guaza mit Spaß und entdecke Geheimnisse, die die Guanchen vor Jahrhunderten hinterließen.",
      it: "Tocca a te! Esplora Los Cristianos e la Montaña Guaza divertendoti e scoprendo segreti che i Guanci lasciarono secoli fa.",
    },
    ctaBody: {
      en: "For centuries, visitors have passed beneath his windows without ever looking up at the mountain. Without ever venturing into the alleys where history was written. You will be different. The code exists. The clues are there. All that is missing is you.",
      fr: "Pendant des siècles, les visiteurs sont passés sous ses fenêtres sans jamais lever les yeux vers la montagne. Sans jamais s'enfoncer dans les ruelles où l'histoire s'est écrite. Vous serez différents. Le code existe. Les indices sont là. Il ne manque que vous.",
      es: "Durante siglos, los visitantes han pasado bajo sus ventanas sin levantar la vista hacia la montaña. Sin adentrarse en los callejones donde se escribió la historia. Tú serás diferente. El código existe. Las pistas están ahí. Solo faltas tú.",
    },
  },
  {
    slug: 'le-coffre-des-trois-cles',
    image: '/images/offers/la-laguna.png',
    duration: '2h – 2h30',
    distance: '~2.5 km',
    difficulty: 4,
    subtitle: {
      en: "The corsair's urban testament",
      fr: 'Le testament urbain du corsaire',
      es: 'El testamento urbano del corsario',
      de: 'Das städtische Testament des Korsaren',
      it: 'Il testamento urbano del corsaro',
    },
    title: {
      en: 'The Chest of Three Keys',
      fr: 'Le Coffre des Trois Clés',
      es: 'El Cofre de las Tres Llaves',
      de: 'Die Truhe der Drei Schlüssel',
      it: 'Lo Scrigno delle Tre Chiavi',
    },
    tagline: {
      en: "Before the cathedral bell tolls, the soul treasure of the greatest corsair of the Canaries awaits discovery.",
      fr: "Avant que la cloche de la cathédrale ne sonne le glas, le trésor d'âme du plus grand corsaire des Canaries attend d'être retrouvé.",
      es: 'Antes de que suene la campana de la catedral, el tesoro del alma del mayor corsario de Canarias espera ser encontrado.',
      de: 'Bevor die Kathedralenglocke schlägt, wartet der Seelenschatz des größten Korsaren der Kanaren darauf, gefunden zu werden.',
      it: "Prima che la campana della cattedrale suoni, il tesoro dell'anima del più grande corsaro delle Canarie attende di essere ritrovato.",
    },
    location: { en: 'San Cristóbal de La Laguna · UNESCO', fr: 'San Cristóbal de La Laguna · UNESCO', es: 'San Cristóbal de La Laguna · UNESCO', de: 'San Cristóbal de La Laguna · UNESCO', it: 'San Cristóbal de La Laguna · UNESCO' },
    intro: {
      en: 'A UNESCO World Heritage city. A story no one has told you.',
      fr: "Une ville classée à l'UNESCO. Une histoire que personne ne vous a racontée.",
      es: 'Una ciudad Patrimonio de la Humanidad. Una historia que nadie te ha contado.',
      de: 'Eine UNESCO-Welterbestadt. Eine Geschichte, die Ihnen noch niemand erzählt hat.',
      it: "Una città patrimonio UNESCO. Una storia che nessuno vi ha mai raccontato.",
    },
    introBody: {
      en: "Visitors to La Laguna come for its colourful alleys, its bars and its university buzz. They leave without having scratched the surface. Behind every volcanic stone facade hides an episode of the true history of the Canaries — and at the heart of it all, one man. Amaro Pargo. Corsair. Merchant. Man of faith. One of the most fascinating and least known figures of Atlantic history. His routes crossed three oceans, but his most precious secrets he buried right here — in the stones, the crests and the grilles of his native city.",
      fr: "Les visiteurs de La Laguna viennent pour ses ruelles colorées, ses bars et son animation universitaire. Ils repartent sans avoir effleuré la surface. Derrière chaque façade en pierre volcanique se cache un épisode de la vraie histoire des Canaries — et au cœur de tout cela, un homme. Amaro Pargo. Corsaire. Marchand. Homme de foi. L'une des figures les plus fascinantes et les plus méconnues de l'histoire atlantique. Ses routes traversaient trois océans, mais ses secrets les plus précieux, il les a enfouis ici même — dans les pierres, les blasons et les grilles de sa ville natale.",
      es: "Los visitantes de La Laguna vienen por sus callejones coloridos, sus bares y su ambiente universitario. Se van sin haber arañado la superficie. Detrás de cada fachada de piedra volcánica se esconde un episodio de la verdadera historia de Canarias — y en el centro de todo, un hombre. Amaro Pargo. Corsario. Comerciante. Hombre de fe.",
      de: "Besucher von La Laguna kommen wegen der bunten Gassen, der Bars und des Universitätslebens. Sie gehen, ohne die Oberfläche berührt zu haben. Hinter jeder Vulkansteinfassade verbirgt sich eine Episode der wahren Geschichte der Kanaren — und im Zentrum von allem ein Mann. Amaro Pargo. Korsar. Kaufmann. Mann des Glaubens.",
      it: "I visitatori di La Laguna vengono per i vicoli colorati, i bar e l'atmosfera universitaria. Ripartono senza aver scalfito la superficie. Dietro ogni facciata di pietra vulcanica si nasconde un episodio della vera storia delle Canarie — e al centro di tutto, un uomo. Amaro Pargo. Corsaro. Mercante. Uomo di fede.",
    },
    quote: {
      en: '"La Laguna resembles no other city. It is shrouded in mist like a secret. Its basalt stones have absorbed centuries of plots, riches and prayers — and they have not yet said everything."',
      fr: '« La Laguna ne ressemble à aucune autre ville. Elle est enveloppée de brume comme d\'un secret. Ses pierres de basalte ont absorbé des siècles de complots, de richesses et de prières — et elles n\'ont pas encore tout dit. »',
      es: '"La Laguna no se parece a ninguna otra ciudad. Está envuelta en bruma como un secreto. Sus piedras de basalto han absorbido siglos de conspiraciones, riquezas y oraciones — y aún no lo han dicho todo."',
      de: '"La Laguna gleicht keiner anderen Stadt. Sie ist in Nebel gehüllt wie in ein Geheimnis. Ihre Basaltsteine haben Jahrhunderte von Intrigen, Reichtum und Gebeten absorbiert."',
      it: '"La Laguna non somiglia a nessun\'altra città. È avvolta nella nebbia come in un segreto. Le sue pietre di basalto hanno assorbito secoli di intrighi, ricchezze e preghiere."',
    },
    quoteAttr: {
      en: '— On the trail of Amaro Pargo, corsair and mystery of Tenerife',
      fr: "— Sur les traces d'Amaro Pargo, corsaire et mystère de Tenerife",
      es: '— Tras las huellas de Amaro Pargo, corsario y misterio de Tenerife',
      de: '— Auf den Spuren von Amaro Pargo, Korsar und Mysterium Teneriffas',
      it: '— Sulle tracce di Amaro Pargo, corsaro e mistero di Tenerife',
    },
    historyTitle: {
      en: 'The man the Canaries forgot to introduce',
      fr: "L'homme que les Canaries ont oublié de vous présenter",
      es: 'El hombre que Canarias olvidó presentarte',
      de: 'Der Mann, den die Kanaren vergessen haben vorzustellen',
      it: "L'uomo che le Canarie hanno dimenticato di presentarvi",
    },
    historyBody: {
      en: [
        "Amaro Pargo was not the pirate of adventure novels. He was infinitely more complex: a corsair commissioned by the Spanish Crown, a businessman whose fortune stretched from Cuba to Cadiz, and a deeply religious man who funded charitable works and protected his city.",
        "He was born and died in La Laguna. He knew every stone, every alley, every shadowy corner. And according to legend, before dying, he hid something — not gold, but something far more precious — in the places dearest to him.",
        "The UNESCO city is your treasure map. Its monuments are your clues. Its history is your compass.",
      ],
      fr: [
        "Amaro Pargo n'était pas le pirate des romans d'aventure. Il était infiniment plus complexe : un corsaire mandaté par la Couronne espagnole, un homme d'affaires dont la fortune s'étendait de Cuba à Cadix, et un homme profondément religieux qui a financé des œuvres et protégé sa ville.",
        "Il est né et mort à La Laguna. Il en connaissait chaque pierre, chaque ruelle, chaque recoin d'ombre. Et selon la légende, avant de mourir, il a dissimulé quelque chose — non pas de l'or, mais quelque chose de bien plus précieux — dans les lieux qui lui étaient les plus chers.",
        "La ville de l'UNESCO est votre carte au trésor. Ses monuments sont vos indices. Son histoire est votre boussole.",
      ],
      es: [
        'Amaro Pargo no era el pirata de las novelas de aventuras. Era infinitamente más complejo: un corsario mandatado por la Corona española, un hombre de negocios cuya fortuna se extendía de Cuba a Cádiz, y un hombre profundamente religioso.',
        'Nació y murió en La Laguna. Conocía cada piedra, cada callejón, cada rincón de sombra. Y según la leyenda, antes de morir, escondió algo — no oro, sino algo mucho más valioso.',
        'La ciudad UNESCO es tu mapa del tesoro. Sus monumentos son tus pistas. Su historia es tu brújula.',
      ],
      de: [
        'Amaro Pargo war nicht der Pirat aus Abenteuerromanen. Er war unendlich komplexer: ein von der spanischen Krone beauftragter Korsar, ein Geschäftsmann, dessen Vermögen von Kuba bis Cadiz reichte, und ein tief religiöser Mann.',
        'Er wurde in La Laguna geboren und starb dort. Er kannte jeden Stein, jede Gasse, jeden Schattenwinkel. Der Legende nach verbarg er vor seinem Tod etwas — kein Gold, sondern etwas viel Wertvolleres.',
        'Die UNESCO-Stadt ist Ihre Schatzkarte. Ihre Denkmäler sind Ihre Hinweise. Ihre Geschichte ist Ihr Kompass.',
      ],
      it: [
        "Amaro Pargo non era il pirata dei romanzi d'avventura. Era infinitamente più complesso: un corsaro incaricato dalla Corona spagnola, un uomo d'affari la cui fortuna si estendeva da Cuba a Cadice, e un uomo profondamente religioso.",
        "Nacque e morì a La Laguna. Conosceva ogni pietra, ogni vicolo, ogni angolo d'ombra. E secondo la leggenda, prima di morire, nascose qualcosa — non oro, ma qualcosa di molto più prezioso.",
        "La città UNESCO è la vostra mappa del tesoro. I suoi monumenti sono i vostri indizi. La sua storia è la vostra bussola.",
      ],
    },
    dates: [
      { year: '1678', label: { en: 'Birth of the corsair in La Laguna', fr: 'Naissance du corsaire à La Laguna', es: 'Nacimiento del corsario en La Laguna', de: 'Geburt des Korsaren in La Laguna', it: 'Nascita del corsaro a La Laguna' } },
      { year: '1747', label: { en: 'His death. His secrets remain within the walls.', fr: 'Sa mort. Ses secrets restent entre les murs.', es: 'Su muerte. Sus secretos permanecen entre los muros.', de: 'Sein Tod. Seine Geheimnisse bleiben in den Mauern.', it: 'La sua morte. I suoi segreti restano tra le mura.' } },
    ],
    acts: [
      {
        title: { en: "The Governor's Oath", fr: 'Le Serment du Gouverneur', es: 'El Juramento del Gobernador', de: 'Der Eid des Gouverneurs', it: 'Il Giuramento del Governatore' },
        location: { en: 'Plaza del Adelantado · Cradle of power', fr: 'Plaza del Adelantado · Berceau du pouvoir', es: 'Plaza del Adelantado · Cuna del poder', de: 'Plaza del Adelantado · Wiege der Macht', it: 'Plaza del Adelantado · Culla del potere' },
        description: { en: "Everything begins where the city was founded — on the square where power assembled, where decrees were read aloud and where destinies were sealed. A reddish volcanic stone facade has been watching you for centuries. Something was carved there for those who know how to observe crests with precision.", fr: "Tout commence là où la ville a été fondée — sur la place où le pouvoir s'assemblait, où les décrets étaient lus à voix haute et où les destins se scellaient. Une façade en pierre volcanique rougeâtre vous regarde depuis des siècles. Quelque chose y a été gravé pour ceux qui savent observer les blasons avec précision.", es: 'Todo comienza donde se fundó la ciudad — en la plaza donde se reunía el poder, donde se leían los decretos y donde se sellaban los destinos.', de: 'Alles beginnt dort, wo die Stadt gegründet wurde — auf dem Platz, wo sich die Macht versammelte.', it: 'Tutto inizia dove la città fu fondata — nella piazza dove il potere si riuniva.' },
      },
      {
        title: { en: 'The Secret of the Siervita', fr: 'Le Secret de la Siervita', es: 'El Secreto de la Siervita', de: 'Das Geheimnis der Siervita', it: 'Il Segreto della Siervita' },
        location: { en: 'Monastery of Santa Catalina de Siena', fr: 'Monastère de Santa Catalina de Siena', es: 'Monasterio de Santa Catalina de Siena', de: 'Kloster Santa Catalina de Siena', it: 'Monastero di Santa Catalina de Siena' },
        description: { en: "Amaro Pargo had a particular devotion to a nun whose name is still whispered in this city. The ornate wooden lattices of this convent allowed one to see without being seen — like the corsair himself, master of the invisible.", fr: "Amaro Pargo avait une dévotion particulière pour une religieuse dont le nom est encore murmuré dans cette ville. Les jalousies de bois ouvragées de ce couvent permettaient de voir sans être vu — comme le corsaire lui-même, maître de l'invisible.", es: 'Amaro Pargo tenía una devoción particular por una religiosa cuyo nombre aún se susurra en esta ciudad.', de: 'Amaro Pargo hegte eine besondere Verehrung für eine Nonne, deren Name in dieser Stadt noch geflüstert wird.', it: 'Amaro Pargo aveva una devozione particolare per una religiosa il cui nome è ancora sussurrato in questa città.' },
      },
      {
        title: { en: 'The Stones of Blood', fr: 'Les Pierres de Sang', es: 'Las Piedras de Sangre', de: 'Die Steine des Blutes', it: 'Le Pietre di Sangue' },
        location: { en: 'Calle San Agustín · The roofless ruins', fr: 'Calle San Agustín · Les ruines ouvertes au ciel', es: 'Calle San Agustín · Las ruinas abiertas al cielo', de: 'Calle San Agustín · Die dachlosen Ruinen', it: 'Calle San Agustín · Le rovine a cielo aperto' },
        description: { en: "Here, a fire devoured the roof but left the walls standing. A church skeleton, open to the elements, whose stone arches have held without a roof for decades. What the fire could not erase is the arithmetic the corsair hid in the very structure of the nave.", fr: "Ici, un incendie a dévoré le toit mais a laissé les murs debout. Un squelette d'église, ouvert aux éléments, dont les arches de pierre tiennent sans toit depuis des décennies. Ce que le feu n'a pas pu effacer, c'est l'arithmétique que le corsaire y a dissimulée dans la structure même de la nef.", es: 'Aquí, un incendio devoró el techo pero dejó los muros en pie. Un esqueleto de iglesia abierto a los elementos.', de: 'Hier verschlang ein Brand das Dach, ließ aber die Mauern stehen. Ein Kirchenskelett, offen den Elementen ausgesetzt.', it: 'Qui, un incendio divorò il tetto ma lasciò i muri in piedi. Uno scheletro di chiesa aperto agli elementi.' },
      },
      {
        title: { en: 'The Watchtower', fr: 'La Tour de Guet', es: 'La Torre de Vigía', de: 'Der Wachturm', it: 'La Torre di Guardia' },
        location: { en: "Iglesia de la Concepción · The island's oldest bell tower", fr: "Iglesia de la Concepción · Le plus ancien clocher de l'île", es: 'Iglesia de la Concepción · El campanario más antiguo de la isla', de: 'Iglesia de la Concepción · Der älteste Glockenturm der Insel', it: "Iglesia de la Concepción · Il campanile più antico dell'isola" },
        description: { en: "This white bell tower served as a landmark for sailors, sentinels and pirates for centuries. At the foot of this tower, a date has been carved into the ground — not to tell the past, but to give you access to what comes next.", fr: "Ce clocher blanc a servi de point de repère aux marins, aux sentinelles et aux pirates pendant des siècles. Au pied de cette tour, une date a été gravée dans le sol — non pas pour raconter le passé, mais pour vous donner accès au suivant.", es: 'Este campanario blanco sirvió de punto de referencia a marineros, centinelas y piratas durante siglos.', de: 'Dieser weiße Glockenturm diente Seeleuten, Wächtern und Piraten jahrhundertelang als Orientierungspunkt.', it: 'Questo campanile bianco servì da punto di riferimento per marinai, sentinelle e pirati per secoli.' },
      },
      {
        title: { en: "The Corsair's Rest", fr: 'Le Repos du Corsaire', es: 'El Descanso del Corsario', de: 'Die Ruhe des Korsaren', it: 'Il Riposo del Corsaro' },
        location: { en: 'Iglesia de Santo Domingo de Guzmán', fr: 'Iglesia de Santo Domingo de Guzmán', es: 'Iglesia de Santo Domingo de Guzmán', de: 'Iglesia de Santo Domingo de Guzmán', it: 'Iglesia de Santo Domingo de Guzmán' },
        description: { en: "Slightly off the tourist flow, this church holds what few visitors know to look for: the physical trace of Amaro Pargo himself. On his tombstone, a symbol watches you — neither threat nor pirate glory. Just the passage to eternity. And the final code that his spiritual protector took with her.", fr: "Un peu à l'écart des flux touristiques, cette église renferme ce que peu de visiteurs savent chercher : la trace physique d'Amaro Pargo lui-même. Sur sa dalle funéraire, un symbole vous regarde — ni menace, ni gloire de pirate. Juste le passage vers l'éternité. Et le code final que sa protectrice spirituelle a emporté avec elle.", es: 'Un poco apartada del flujo turístico, esta iglesia guarda lo que pocos visitantes saben buscar: la huella física del propio Amaro Pargo.', de: 'Etwas abseits der Touristenströme birgt diese Kirche, was nur wenige Besucher zu suchen wissen: die physische Spur von Amaro Pargo selbst.', it: "Un po' appartata dal flusso turistico, questa chiesa custodisce ciò che pochi visitatori sanno cercare: la traccia fisica di Amaro Pargo stesso." },
      },
    ],
    features: [
      { icon: '🌫', title: { en: 'The unique atmosphere', fr: "L'atmosphère unique", es: 'La atmósfera única', de: 'Die einzigartige Atmosphäre', it: "L'atmosfera unica" }, description: { en: 'La Laguna is often shrouded in mist. Every street, every patio, every basalt arcade takes on a mysterious dimension that no other town on the island possesses.', fr: "La Laguna est souvent enveloppée de brume. Chaque rue, chaque patio, chaque arcade en basalte prend une dimension mystérieuse que nulle autre ville de l'île ne possède.", es: 'La Laguna está a menudo envuelta en bruma. Cada calle, cada patio, cada arcada de basalto adquiere una dimensión misteriosa.', de: 'La Laguna ist oft in Nebel gehüllt. Jede Straße, jeder Patio, jede Basaltarkade nimmt eine mysteriöse Dimension an.', it: 'La Laguna è spesso avvolta nella nebbia. Ogni via, ogni patio, ogni arcata di basalto assume una dimensione misteriosa.' } },
      { icon: '🏛', title: { en: 'UNESCO World Heritage', fr: 'Patrimoine mondial UNESCO', es: 'Patrimonio mundial UNESCO', de: 'UNESCO-Welterbe', it: 'Patrimonio mondiale UNESCO' }, description: { en: "You move through one of the best-preserved historic centres in Spain. Every wall, every grille, every arcade has a value recognised by all humanity.", fr: "Vous évoluez dans l'un des centres historiques les mieux préservés d'Espagne. Chaque mur, chaque grille, chaque arcade a une valeur reconnue par l'humanité entière.", es: 'Te mueves por uno de los centros históricos mejor conservados de España.', de: 'Sie bewegen sich durch eines der am besten erhaltenen historischen Zentren Spaniens.', it: "Vi muovete in uno dei centri storici meglio conservati di Spagna." } },
      { icon: '⚓', title: { en: 'A fascinating real character', fr: 'Un personnage réel fascinant', es: 'Un personaje real fascinante', de: 'Eine faszinierende reale Figur', it: 'Un personaggio reale affascinante' }, description: { en: "Amaro Pargo is not an invention. He is one of the most fascinating and least known figures of Atlantic history. His story is as real as the stones you will walk on.", fr: "Amaro Pargo n'est pas une invention. C'est l'une des figures les plus fascinantes et les plus méconnues de l'histoire atlantique. Son histoire est aussi vraie que les pierres sur lesquelles vous marcherez.", es: 'Amaro Pargo no es una invención. Es una de las figuras más fascinantes y desconocidas de la historia atlántica.', de: 'Amaro Pargo ist keine Erfindung. Er ist eine der faszinierendsten und unbekanntesten Figuren der atlantischen Geschichte.', it: "Amaro Pargo non è un'invenzione. È una delle figure più affascinanti e sconosciute della storia atlantica." } },
      { icon: '🚶‍♀️', title: { en: 'Accessible to all', fr: 'Accessible à tous', es: 'Accesible para todos', de: 'Für alle zugänglich', it: 'Accessibile a tutti' }, description: { en: 'Entirely flat centre, pedestrian route, ideal for children and pushchairs. La Laguna is crossed on foot, and its history is discovered at the same pace.', fr: "Centre entièrement plat, parcours piéton, idéal pour les enfants et les poussettes. La Laguna se traverse à pied, et son histoire se découvre à la même vitesse.", es: 'Centro totalmente plano, recorrido peatonal, ideal para niños y cochecitos.', de: 'Völlig flaches Zentrum, Fußgängerroute, ideal für Kinder und Kinderwagen.', it: 'Centro completamente piano, percorso pedonale, ideale per bambini e passeggini.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración', de: 'Dauer', it: 'Durata' }, value: { en: '2h – 2h30', fr: '2h – 2h30', es: '2h – 2h30', de: '2h – 2h30', it: '2h – 2h30' }, sub: { en: 'At your own pace', fr: 'À votre rythme', es: 'A tu ritmo', de: 'In Ihrem Tempo', it: 'Al vostro ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores', de: 'Spieler', it: 'Giocatori' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite', de: 'Unbegrenzt', it: 'Illimitati' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años', de: 'Ab 8 Jahren', it: 'Da 8 anni' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia', de: 'Distanz', it: 'Distanza' }, value: { en: '~2.5 km', fr: '~2,5 km', es: '~2,5 km', de: '~2,5 km', it: '~2,5 km' }, sub: { en: 'Loop · all flat', fr: 'En boucle · tout plat', es: 'En bucle · todo plano', de: 'Rundweg · alles flach', it: 'Ad anello · tutto piano' } },
      { icon: '♿', label: { en: 'Accessibility', fr: 'Accessibilité', es: 'Accesibilidad', de: 'Barrierefreiheit', it: 'Accessibilità' }, value: { en: 'Full', fr: 'Intégrale', es: 'Total', de: 'Vollständig', it: 'Totale' }, sub: { en: 'Pushchair accessible', fr: 'Poussette possible', es: 'Accesible con cochecito', de: 'Kinderwagen möglich', it: 'Passeggino possibile' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas', de: 'Sprachen', it: 'Lingue' }, value: { en: 'FR · EN · ES · DE · IT', fr: 'FR · EN · ES · DE · IT', es: 'FR · EN · ES · DE · IT', de: 'FR · EN · ES · DE · IT', it: 'FR · EN · ES · DE · IT' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición', de: 'Andere auf Anfrage', it: 'Altre su richiesta' } },
      { icon: '👟', label: { en: 'Equipment', fr: 'Équipement', es: 'Equipamiento', de: 'Ausrüstung', it: 'Equipaggiamento' }, value: { en: 'Comfort shoes', fr: 'Chaussures confort', es: 'Zapatos cómodos', de: 'Bequeme Schuhe', it: 'Scarpe comode' }, sub: { en: 'No hiking needed', fr: 'Pas de randonnée', es: 'Sin senderismo', de: 'Keine Wanderung', it: 'Nessun trekking' } },
    ],
    warning: {
      icon: '🌡️',
      title: { en: 'Important advice', fr: 'Un conseil important', es: 'Consejo importante', de: 'Wichtiger Hinweis', it: 'Consiglio importante' },
      body: {
        en: "If you are coming from Playa de las Américas or Los Cristianos, bring a light jacket. La Laguna is at 550m altitude and is often 5-8°C cooler than the coast — a welcome freshness for exploration, but surprising for those unprepared.",
        fr: "Si vous venez depuis Playa de las Américas ou Los Cristianos, prévoyez un gilet ou une veste légère. La Laguna est à 550 m d'altitude et il y fait souvent 5 à 8°C de moins que sur la côte — une fraîcheur bienvenue pour l'exploration, mais surprenante pour qui n'y est pas préparé.",
        es: 'Si vienes desde Playa de las Américas o Los Cristianos, lleva una chaqueta ligera. La Laguna está a 550 m de altitud y suele hacer 5-8°C menos que en la costa.',
        de: 'Wenn Sie von Playa de las Américas oder Los Cristianos kommen, bringen Sie eine leichte Jacke mit. La Laguna liegt auf 550 m Höhe und ist oft 5-8°C kühler als die Küste.',
        it: "Se venite da Playa de las Américas o Los Cristianos, portate una giacca leggera. La Laguna è a 550 m di altitudine ed è spesso 5-8°C più fresca della costa.",
      },
    },
    motto: {
      en: 'UNESCO city. Corsair secrets.',
      fr: "Ville de l'UNESCO. Secrets de corsaire.",
      es: 'Ciudad UNESCO. Secretos de corsario.',
      de: 'UNESCO-Stadt. Korsarengeheimnisse.',
      it: 'Città UNESCO. Segreti di corsaro.',
    },
    mottoSub: {
      en: "— Amaro Pargo's testament has been waiting since 1747",
      fr: "— Le testament d'Amaro Pargo attend depuis 1747",
      es: '— El testamento de Amaro Pargo espera desde 1747',
      de: '— Amaro Pargos Testament wartet seit 1747',
      it: '— Il testamento di Amaro Pargo attende dal 1747',
    },
    stickyMessage: {
      en: "It's your turn! Discover La Laguna while having fun and uncovering the secrets of the most famous corsair of the Canaries. A UNESCO city full of hidden stories awaits you.",
      fr: "À toi de jouer ! Découvre La Laguna en t'amusant et en perçant les secrets du plus célèbre corsaire des Canaries. Une ville UNESCO pleine d'histoires cachées t'attend.",
      es: "¡Te toca a ti! Descubre La Laguna divirtiéndote y desvelando los secretos del corsario más famoso de Canarias. Una ciudad UNESCO llena de historias ocultas te espera.",
      de: "Du bist dran! Entdecke La Laguna mit Spaß und lüfte die Geheimnisse des berühmtesten Korsaren der Kanaren. Eine UNESCO-Stadt voller verborgener Geschichten erwartet dich.",
      it: "Tocca a te! Scopri La Laguna divertendoti e svelando i segreti del corsaro più famoso delle Canarie. Una città UNESCO piena di storie nascoste ti aspetta.",
    },
    ctaBody: {
      en: "La Laguna is a city that tourists walk through looking at their phones. This game forces you to look up — at the crests, the grilles, the charred arches, the tombstones. It is a city that has never stopped speaking. You just had to know how to listen.",
      fr: "La Laguna est une ville que les touristes traversent en regardant leur téléphone. Ce jeu vous oblige à lever les yeux — vers les blasons, les grilles, les arches calcinées, les dalles funéraires. C'est une ville qui n'a jamais cessé de parler. Il fallait juste savoir l'écouter.",
      es: 'La Laguna es una ciudad que los turistas cruzan mirando su teléfono. Este juego te obliga a levantar la vista — hacia los blasones, las rejas, los arcos calcinados, las lápidas. Es una ciudad que nunca ha dejado de hablar. Solo había que saber escucharla.',
      de: 'La Laguna ist eine Stadt, die Touristen mit Blick auf ihr Handy durchqueren. Dieses Spiel zwingt Sie, den Blick zu heben — zu den Wappen, den Gittern, den verkohlten Bögen, den Grabsteinen.',
      it: "La Laguna è una città che i turisti attraversano guardando il telefono. Questo gioco vi obbliga ad alzare lo sguardo — verso gli stemmi, le grate, gli archi carbonizzati, le lapidi.",
    },
  },
  {
    slug: 'le-butin-de-la-bateria',
    image: '/images/offers/puerto.png',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 3,
    subtitle: {
      en: "The corsair captain's treasure hunt",
      fr: 'La chasse au trésor du capitaine corsaire',
      es: 'La caza del tesoro del capitán corsario',
      de: 'Die Schatzsuche des Korsarenkapitäns',
      it: 'La caccia al tesoro del capitano corsaro',
    },
    title: { en: 'The Loot of La Batería', fr: 'Le Butin de la Batería', es: 'El Botín de la Batería', de: 'Die Beute der Batería', it: 'Il Bottino della Batería' },
    tagline: {
      en: 'In 1706, when lava engulfed Garachico, the fleeing ships brought their secrets here. Some were never found.',
      fr: "En 1706, quand la lave engloutit Garachico, les navires fuyards amenèrent leurs secrets jusqu'ici. Certains n'ont jamais été retrouvés.",
      es: 'En 1706, cuando la lava engulló Garachico, los barcos fugitivos trajeron sus secretos aquí. Algunos nunca fueron encontrados.',
      de: 'Als 1706 die Lava Garachico verschlang, brachten die fliehenden Schiffe ihre Geheimnisse hierher. Manche wurden nie gefunden.',
      it: 'Nel 1706, quando la lava inghiottì Garachico, le navi in fuga portarono qui i loro segreti. Alcuni non sono mai stati ritrovati.',
    },
    location: { en: 'Puerto de la Cruz · La Ranilla', fr: 'Puerto de la Cruz · La Ranilla', es: 'Puerto de la Cruz · La Ranilla', de: 'Puerto de la Cruz · La Ranilla', it: 'Puerto de la Cruz · La Ranilla' },
    intro: {
      en: 'Behind the Martianez pools, another Puerto awaits',
      fr: 'Derrière les piscines de Martianez, un autre Puerto vous attend',
      es: 'Detrás de las piscinas de Martianez, otro Puerto te espera',
      de: 'Hinter den Martianez-Pools wartet ein anderes Puerto',
      it: 'Dietro le piscine di Martianez, un altro Puerto vi aspetta',
    },
    introBody: {
      en: "Most visitors to Puerto de la Cruz see only one thing: the modern promenade, the hotels, the souvenir shops. They don't know that all of this rests on the foundations of a corsair port, guarded by basalt fortifications and inhabited by fishermen whose colourful houses still tell stories no one has bothered to listen to. This game takes you to the Puerto de la Cruz the guides never show: the giant murals of the fishermen's quarter, the forgotten fortifications, the oldest civilian building in town, and a chapel on black rocks where sailors prayed before facing the Atlantic.",
      fr: "La plupart des visiteurs de Puerto de la Cruz ne voient qu'une chose : la promenade moderne, les hôtels, les boutiques de souvenirs. Ils ignorent que tout cela repose sur les fondations d'un port corsaire, gardé par des fortifications de basalte et habité par des pêcheurs dont les maisons colorées racontent encore des histoires que personne n'a encore prises la peine d'écouter. Ce jeu vous emmène dans le Puerto de la Cruz que les guides ne montrent jamais : les muraux géants du quartier des pêcheurs, les fortifications oubliées, la plus vieille maison civile de la ville, et une chapelle au bord des rochers noirs où les marins venaient prier avant d'affronter l'Atlantique.",
      es: "La mayoría de los visitantes de Puerto de la Cruz solo ven una cosa: el paseo moderno, los hoteles, las tiendas de souvenirs. Ignoran que todo esto descansa sobre los cimientos de un puerto corsario, custodiado por fortificaciones de basalto.",
      de: "Die meisten Besucher von Puerto de la Cruz sehen nur eines: die moderne Promenade, die Hotels, die Souvenirläden. Sie wissen nicht, dass all dies auf den Fundamenten eines Korsarenhafens ruht.",
      it: "La maggior parte dei visitatori di Puerto de la Cruz vede solo una cosa: la passeggiata moderna, gli hotel, i negozi di souvenir. Non sanno che tutto questo poggia sulle fondamenta di un porto corsaro.",
    },
    quote: {
      en: '"Puerto de la Cruz is not a town built for tourists. It is a town built by fishermen, corsairs and merchants who knew the sea gives — and takes back."',
      fr: '« Puerto de la Cruz n\'est pas une ville construite pour les touristes. C\'est une ville construite par des pêcheurs, des corsaires et des négociants qui savaient que la mer donne — et reprend. »',
      es: '"Puerto de la Cruz no es una ciudad construida para turistas. Es una ciudad construida por pescadores, corsarios y mercaderes que sabían que el mar da — y quita."',
      de: '"Puerto de la Cruz ist keine Stadt für Touristen. Es ist eine Stadt, erbaut von Fischern, Korsaren und Händlern, die wussten, dass das Meer gibt — und nimmt."',
      it: '"Puerto de la Cruz non è una città costruita per i turisti. È una città costruita da pescatori, corsari e mercanti che sapevano che il mare dà — e riprende."',
    },
    quoteAttr: { en: '— In the alleys of La Ranilla, the port\'s memory is still alive', fr: '— Dans les ruelles de La Ranilla, la mémoire du port est encore vivante', es: '— En los callejones de La Ranilla, la memoria del puerto sigue viva', de: '— In den Gassen von La Ranilla lebt die Erinnerung des Hafens noch', it: '— Nei vicoli di La Ranilla, la memoria del porto è ancora viva' },
    historyTitle: {
      en: 'The port of all secrets',
      fr: 'Le port de tous les secrets',
      es: 'El puerto de todos los secretos',
      de: 'Der Hafen aller Geheimnisse',
      it: 'Il porto di tutti i segreti',
    },
    historyBody: {
      en: [
        "When the volcano engulfed Garachico in 1706, all the maritime activity of the Canaries had to find a new refuge. Puerto de la Cruz, already fortified, absorbed this influx of ships, merchants and men fleeing with everything they could carry.",
        "Among them, corsairs. Men accustomed to concealing their fortune, to navigating between legitimate trade and privateering, to choosing hiding places only a trained eye could decipher.",
        "Captain Caraveo was one of them. And unlike the legend, his treasure is not buried on a deserted beach. It is there, in plain sight, in the walls of a town that had the good sense never to change too quickly.",
      ],
      fr: [
        "Quand le volcan a englouti Garachico en 1706, toute l'activité maritime des Canaries a dû trouver un nouveau refuge. Puerto de la Cruz, déjà fortifié, a absorbé cet afflux de navires, de marchands et d'hommes qui fuyaient avec tout ce qu'ils pouvaient emporter.",
        "Parmi eux, des corsaires. Des hommes habitués à dissimuler leur fortune, à naviguer entre le commerce légitime et la guerre de course, à choisir des cachettes que seul un regard averti pourrait déchiffrer.",
        "Le capitaine Caraveo était l'un d'eux. Et contrairement à la légende, son trésor n'est pas enfoui sur une plage déserte. Il est là, en pleine vue, dans les murs d'une ville qui a eu la bonne idée de ne jamais changer trop vite.",
      ],
      es: [
        'Cuando el volcán engulló Garachico en 1706, toda la actividad marítima de Canarias tuvo que encontrar un nuevo refugio. Puerto de la Cruz, ya fortificado, absorbió esta afluencia de barcos y mercaderes.',
        'Entre ellos, corsarios. Hombres acostumbrados a ocultar su fortuna, a navegar entre el comercio legítimo y el corso.',
        'El capitán Caraveo era uno de ellos. Y a diferencia de la leyenda, su tesoro no está enterrado en una playa desierta. Está ahí, a plena vista.',
      ],
      de: [
        'Als der Vulkan 1706 Garachico verschlang, musste die gesamte maritime Aktivität der Kanaren einen neuen Zufluchtsort finden. Puerto de la Cruz, bereits befestigt, nahm diesen Zustrom von Schiffen und Händlern auf.',
        'Unter ihnen Korsaren. Männer, die es gewohnt waren, ihr Vermögen zu verbergen.',
        'Kapitän Caraveo war einer von ihnen. Sein Schatz liegt nicht an einem verlassenen Strand begraben. Er ist hier, vor aller Augen.',
      ],
      it: [
        "Quando il vulcano inghiottì Garachico nel 1706, tutta l'attività marittima delle Canarie dovette trovare un nuovo rifugio. Puerto de la Cruz, già fortificata, assorbì questo afflusso di navi e mercanti.",
        'Tra loro, corsari. Uomini abituati a nascondere la loro fortuna.',
        'Il capitano Caraveo era uno di loro. Il suo tesoro non è sepolto su una spiaggia deserta. È qui, in bella vista.',
      ],
    },
    dates: [
      { year: '1706', label: { en: 'Garachico eruption. Ships flee north.', fr: "L'éruption de Garachico. Les navires fuient vers le nord.", es: 'Erupción de Garachico. Los barcos huyen al norte.', de: 'Ausbruch von Garachico. Schiffe fliehen nach Norden.', it: 'Eruzione di Garachico. Le navi fuggono a nord.' } },
      { year: '1620', label: { en: 'Oldest civilian building in Puerto', fr: 'Le plus ancien bâtiment civil de Puerto', es: 'El edificio civil más antiguo de Puerto', de: 'Ältestes Zivilgebäude in Puerto', it: 'Edificio civile più antico di Puerto' } },
    ],
    acts: [
      {
        title: { en: 'The Rampart of Six Soldiers', fr: 'Le Rempart des Six Soldats', es: 'La Muralla de los Seis Soldados', de: 'Das Bollwerk der Sechs Soldaten', it: 'Il Baluardo dei Sei Soldati' },
        location: { en: 'Batería de Santa Bárbara · The port fort', fr: 'Batería de Santa Bárbara · Le fort du port', es: 'Batería de Santa Bárbara · El fuerte del puerto', de: 'Batería de Santa Bárbara · Die Hafenfestung', it: 'Batería de Santa Bárbara · Il forte del porto' },
        description: { en: "Everything begins where the town's defence began — facing the ocean, where cannons watched the horizon. This fortification has survived everything, and its volcanic stone walls still bear the traces of those who stood guard. Look carefully: the arrow slits speak to those who know how to count.", fr: "Tout commence là où commençait la défense de la ville — face à l'océan, là où les canons surveillaient l'horizon. Cette fortification a survécu à tout, et ses murs de pierre volcanique portent encore les traces de ceux qui y ont monté la garde. Regardez bien : les meurtrières parlent à ceux qui savent compter.", es: 'Todo comienza donde comenzaba la defensa de la ciudad — frente al océano, donde los cañones vigilaban el horizonte.', de: 'Alles beginnt dort, wo die Verteidigung der Stadt begann — dem Ozean zugewandt, wo Kanonen den Horizont überwachten.', it: "Tutto inizia dove cominciava la difesa della città — di fronte all'oceano, dove i cannoni sorvegliavano l'orizzonte." },
      },
      {
        title: { en: 'The Customs Register', fr: 'Le Registre de la Douane', es: 'El Registro de la Aduana', de: 'Das Zollregister', it: 'Il Registro della Dogana' },
        location: { en: 'Casa de la Real Aduana · Oldest civilian building', fr: 'Casa de la Real Aduana · Le plus ancien bâtiment civil', es: 'Casa de la Real Aduana · El edificio civil más antiguo', de: 'Casa de la Real Aduana · Ältestes Zivilgebäude', it: 'Casa de la Real Aduana · Edificio civile più antico' },
        description: { en: "Right next to the fort, a building whose age surprises. This is where every crate, every bale, every barrel entering the port was weighed, registered and taxed. The founding year of this customs office is inscribed somewhere on its facade. It will give you your heading.", fr: "Juste à côté du fort, un bâtiment dont l'âge surprend. C'est ici que chaque caisse, chaque ballot, chaque baril qui entrait dans le port était pesé, enregistré et taxé. L'année de fondation de ce bureau de douane est inscrite quelque part sur sa façade. Elle vous donnera votre cap.", es: 'Justo al lado del fuerte, un edificio cuya edad sorprende. Aquí se pesaba, registraba y gravaba cada cajón que entraba al puerto.', de: 'Direkt neben der Festung ein Gebäude, dessen Alter überrascht. Hier wurde jede Kiste, die in den Hafen kam, gewogen, registriert und besteuert.', it: "Proprio accanto al forte, un edificio la cui età sorprende. Qui ogni cassa che entrava nel porto veniva pesata, registrata e tassata." },
      },
      {
        title: { en: 'The Ghost Ship of Taoro', fr: 'Le Navire Fantôme de Taoro', es: 'El Barco Fantasma de Taoro', de: 'Das Geisterschiff von Taoro', it: 'La Nave Fantasma di Taoro' },
        location: { en: "Barrio de La Ranilla · Fishermen's murals", fr: 'Barrio de La Ranilla · Les muraux des pêcheurs', es: 'Barrio de La Ranilla · Los murales de los pescadores', de: 'Barrio de La Ranilla · Die Fischer-Wandbilder', it: 'Barrio de La Ranilla · I murales dei pescatori' },
        description: { en: "You enter the quarter. The walls are no longer grey — they have been transformed into giant stories. Somewhere in these colourful alleys, a boat flies. It bears a name. This name existed long before the corsairs, long before the conquest. Find the boat. Read its name.", fr: "Vous entrez dans le quartier. Les murs ne sont plus gris — ils ont été transformés en récits géants. Quelque part dans ces ruelles colorées, une barque vole. Elle porte un nom. Ce nom existait bien avant l'arrivée des corsaires. Trouvez la barque. Lisez son nom.", es: 'Entras en el barrio. Los muros ya no son grises — se han transformado en relatos gigantes. En algún lugar de estos callejones coloridos, una barca vuela.', de: 'Sie betreten das Viertel. Die Mauern sind nicht mehr grau — sie wurden in riesige Geschichten verwandelt. Irgendwo in diesen bunten Gassen fliegt ein Boot.', it: 'Entrate nel quartiere. I muri non sono più grigi — sono stati trasformati in racconti giganti. Da qualche parte in questi vicoli colorati, una barca vola.' },
      },
      {
        title: { en: "The Sailor's Rest", fr: 'Le Repos du Marin', es: 'El Descanso del Marinero', de: 'Die Ruhe des Seemanns', it: 'Il Riposo del Marinaio' },
        location: { en: 'Ermita de San Telmo · Chapel on the black rocks', fr: 'Ermita de San Telmo · La chapelle sur les rochers noirs', es: 'Ermita de San Telmo · La capilla sobre las rocas negras', de: 'Ermita de San Telmo · Kapelle auf den schwarzen Felsen', it: 'Ermita de San Telmo · La cappella sulle rocce nere' },
        description: { en: "On a rocky point above the spray, a small white chapel. This is where sailors came to pray before setting out to sea. Inside is an instrument from far away — from a northern European city — whose arrival date at Puerto de la Cruz holds a fragment of Captain Caraveo's code.", fr: "Sur une pointe rocheuse au-dessus de l'écume, une petite chapelle blanche. C'est ici que les marins venaient prier avant de prendre le large. À l'intérieur se trouve un instrument venu de très loin — d'une ville du Nord de l'Europe — dont la date d'arrivée à Puerto de la Cruz recèle un fragment du code du capitaine Caraveo.", es: 'Sobre una punta rocosa por encima de la espuma, una pequeña capilla blanca. Aquí los marineros venían a rezar antes de hacerse a la mar.', de: 'Auf einer Felsspitze über der Gischt eine kleine weiße Kapelle. Hier kamen die Seeleute zum Beten, bevor sie in See stachen.', it: "Su una punta rocciosa sopra la schiuma, una piccola cappella bianca. Qui i marinai venivano a pregare prima di prendere il largo." },
      },
      {
        title: { en: 'The Cannonballs of the Castle', fr: 'Les Boulets du Château', es: 'Las Balas del Castillo', de: 'Die Kanonenkugeln der Burg', it: 'Le Palle di Cannone del Castello' },
        location: { en: 'Castillo de San Felipe · The black basalt bastion', fr: 'Castillo de San Felipe · Le bastion de basalte noir', es: 'Castillo de San Felipe · El bastión de basalto negro', de: 'Castillo de San Felipe · Die schwarze Basaltbastion', it: 'Castillo de San Felipe · Il bastione di basalto nero' },
        description: { en: "At the end of the promenade, a fortress of black volcanic stone still scans the horizon. Its cannons are silent. But the cannonballs are still there. Count. Calculate. And enter the final code to close Captain Caraveo's route — a man who knew the best hiding places are always in plain sight.", fr: "Au bout de la promenade, une forteresse de pierre volcanique noire scrute encore l'horizon. Ses canons sont silencieux. Mais les boulets, eux, sont encore là. Comptez. Calculez. Et entrez le code final pour clore la route du capitaine Caraveo — celui qui savait que les meilleures cachettes sont toujours en pleine vue.", es: 'Al final del paseo, una fortaleza de piedra volcánica negra aún escudriña el horizonte. Sus cañones están silenciosos. Pero las balas siguen ahí.', de: 'Am Ende der Promenade überblickt eine Festung aus schwarzem Vulkanstein noch den Horizont. Die Kanonen schweigen. Aber die Kugeln sind noch da.', it: "In fondo alla passeggiata, una fortezza di pietra vulcanica nera scruta ancora l'orizzonte. I cannoni tacciono. Ma le palle sono ancora lì." },
      },
    ],
    features: [
      { icon: '🎨', title: { en: 'The mural quarter', fr: 'Le quartier des muraux', es: 'El barrio de los murales', de: 'Das Mural-Viertel', it: 'Il quartiere dei murales' }, description: { en: 'La Ranilla is one of the rare quarters in Tenerife where street art has taken over every facade. An open-air museum whose works become clues.', fr: "La Ranilla est l'un des rares quartiers de Tenerife où l'art de rue a investi chaque façade. Un musée à ciel ouvert dont les œuvres deviennent des indices.", es: 'La Ranilla es uno de los pocos barrios de Tenerife donde el arte callejero ha invadido cada fachada.', de: 'La Ranilla ist eines der seltenen Viertel auf Teneriffa, in dem Street Art jede Fassade erobert hat.', it: "La Ranilla è uno dei rari quartieri di Tenerife dove la street art ha invaso ogni facciata." } },
      { icon: '⚓', title: { en: 'Puerto before the hotels', fr: "Le Puerto d'avant les hôtels", es: 'El Puerto antes de los hoteles', de: 'Puerto vor den Hotels', it: 'Puerto prima degli hotel' }, description: { en: "Fortifications, customs houses, sailors' chapels — the 17th-century maritime town still stands, ignored by the crowd.", fr: "Fortifications, douanes, chapelles de marins — la ville maritime du XVIIe siècle est encore debout, ignorée par la foule.", es: 'Fortificaciones, aduanas, capillas de marineros — la ciudad marítima del siglo XVII sigue en pie.', de: 'Festungen, Zollhäuser, Seemannskapellen — die Seestadt des 17. Jahrhunderts steht noch, von der Menge ignoriert.', it: "Fortificazioni, dogane, cappelle di marinai — la città marittima del XVII secolo è ancora in piedi." } },
      { icon: '👶', title: { en: 'Ideal for children', fr: 'Idéal pour les enfants', es: 'Ideal para niños', de: 'Ideal für Kinder', it: 'Ideale per i bambini' }, description: { en: 'Giant murals, cannons, cannonballs, a chapel on the rocks — the youngest are as much players as the adults. Entirely flat, pushchair accessible.', fr: "Des muraux géants, des canons, des boulets, une chapelle sur les rochers — les plus jeunes sont autant acteurs que les adultes. Parcours entièrement plat, accessible en poussette.", es: 'Murales gigantes, cañones, balas, una capilla sobre las rocas — los más jóvenes son tan protagonistas como los adultos.', de: 'Riesige Wandbilder, Kanonen, Kanonenkugeln, eine Kapelle auf den Felsen — die Jüngsten spielen genauso mit wie die Erwachsenen.', it: "Murales giganti, cannoni, palle di cannone, una cappella sulle rocce — i più giovani sono protagonisti quanto gli adulti." } },
      { icon: '🗺', title: { en: 'Short & dense format', fr: 'Un format court & dense', es: 'Formato corto y denso', de: 'Kurzes & dichtes Format', it: 'Formato breve e denso' }, description: { en: 'The shortest route in our collection — 2 km in a compact quarter — but one of the richest. Perfect for busy days.', fr: "Le parcours le plus court de notre collection — 2 km dans un quartier compact — mais l'un des plus riches. Parfait pour les journées chargées.", es: 'El recorrido más corto de nuestra colección — 2 km en un barrio compacto — pero uno de los más ricos.', de: 'Die kürzeste Route unserer Sammlung — 2 km in einem kompakten Viertel — aber eine der reichsten.', it: "Il percorso più breve della nostra collezione — 2 km in un quartiere compatto — ma uno dei più ricchi." } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración', de: 'Dauer', it: 'Durata' }, value: { en: '1h30 – 2h', fr: '1h30 – 2h', es: '1h30 – 2h', de: '1h30 – 2h', it: '1h30 – 2h' }, sub: { en: 'Shortest of the series', fr: 'Le plus court de la série', es: 'El más corto de la serie', de: 'Die kürzeste der Serie', it: 'Il più breve della serie' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores', de: 'Spieler', it: 'Giocatori' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite', de: 'Unbegrenzt', it: 'Illimitati' }, sub: { en: 'From age 6', fr: 'Dès 6 ans', es: 'Desde 6 años', de: 'Ab 6 Jahren', it: 'Da 6 anni' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia', de: 'Distanz', it: 'Distanza' }, value: { en: '~2 km', fr: '~2 km', es: '~2 km', de: '~2 km', it: '~2 km' }, sub: { en: 'Compact route', fr: 'Parcours compact', es: 'Recorrido compacto', de: 'Kompakte Route', it: 'Percorso compatto' } },
      { icon: '♿', label: { en: 'Accessibility', fr: 'Accessibilité', es: 'Accesibilidad', de: 'Barrierefreiheit', it: 'Accessibilità' }, value: { en: 'Full', fr: 'Intégrale', es: 'Total', de: 'Vollständig', it: 'Totale' }, sub: { en: 'Flat · pushchair OK', fr: 'Plat · poussette OK', es: 'Plano · cochecito OK', de: 'Flach · Kinderwagen OK', it: 'Piano · passeggino OK' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas', de: 'Sprachen', it: 'Lingue' }, value: { en: 'FR · EN · ES · DE · IT', fr: 'FR · EN · ES · DE · IT', es: 'FR · EN · ES · DE · IT', de: 'FR · EN · ES · DE · IT', it: 'FR · EN · ES · DE · IT' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición', de: 'Andere auf Anfrage', it: 'Altre su richiesta' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento', de: 'Beste Zeit', it: 'Momento migliore' }, value: { en: 'Morning or evening', fr: 'Matin ou soir', es: 'Mañana o tarde', de: 'Morgens oder abends', it: 'Mattina o sera' }, sub: { en: 'Light & freshness', fr: 'Lumière & fraîcheur', es: 'Luz y frescor', de: 'Licht & Frische', it: 'Luce e freschezza' } },
    ],
    warning: {
      icon: '🍦',
      title: { en: 'Good to know', fr: 'Bon à savoir', es: 'Bueno saber', de: 'Gut zu wissen', it: 'Buono a sapersi' },
      body: {
        en: 'The route passes through the Plaza del Charco, the lively central square famous for its artisan ice cream and shaded terraces. A natural break between the coastal stages and the La Ranilla quarter — enjoyed by children and parents alike.',
        fr: "Le parcours passe par la Plaza del Charco, la place centrale de Puerto de la Cruz, réputée pour ses glaciers artisanaux et ses terrasses ombragées. Une pause naturelle entre les étapes côtières et le quartier de La Ranilla — appréciée autant par les enfants que par les parents.",
        es: 'El recorrido pasa por la Plaza del Charco, famosa por sus heladerías artesanales y sus terrazas. Una pausa natural entre las etapas costeras y el barrio de La Ranilla.',
        de: 'Die Route führt über die Plaza del Charco, bekannt für ihre handwerklichen Eisdielen und schattigen Terrassen. Eine natürliche Pause zwischen den Küstenetappen und dem Viertel La Ranilla.',
        it: "Il percorso passa per la Plaza del Charco, famosa per le gelaterie artigianali e le terrazze ombreggiate. Una pausa naturale tra le tappe costiere e il quartiere La Ranilla.",
      },
    },
    motto: {
      en: 'The sea hides. The sea reveals.',
      fr: 'La mer cache. La mer révèle.',
      es: 'El mar esconde. El mar revela.',
      de: 'Das Meer verbirgt. Das Meer enthüllt.',
      it: 'Il mare nasconde. Il mare rivela.',
    },
    mottoSub: {
      en: '— Caraveo knew the best hiding places are always in plain sight',
      fr: '— Caraveo savait que les meilleures cachettes sont toujours en pleine vue',
      es: '— Caraveo sabía que los mejores escondites siempre están a plena vista',
      de: '— Caraveo wusste, dass die besten Verstecke immer vor aller Augen liegen',
      it: '— Caraveo sapeva che i migliori nascondigli sono sempre in bella vista',
    },
    stickyMessage: {
      en: "It's your turn! Discover Puerto de la Cruz while having fun and following the trail of Captain Caraveo through colourful murals and black basalt fortresses.",
      fr: "À toi de jouer ! Découvre Puerto de la Cruz en t'amusant et en suivant la piste du capitaine Caraveo à travers les muraux colorés et les forteresses de basalte noir.",
      es: "¡Te toca a ti! Descubre Puerto de la Cruz divirtiéndote y siguiendo la pista del capitán Caraveo a través de murales coloridos y fortalezas de basalto negro.",
      de: "Du bist dran! Entdecke Puerto de la Cruz mit Spaß und folge der Spur von Kapitän Caraveo durch bunte Wandbilder und schwarze Basaltfestungen.",
      it: "Tocca a te! Scopri Puerto de la Cruz divertendoti e seguendo la pista del capitano Caraveo attraverso murales colorati e fortezze di basalto nero.",
    },
    ctaBody: {
      en: "Sometimes all it takes is walking the right alleys, looking up at the right walls, and listening to what the black basalt stones have to say. Puerto de la Cruz was never just a seaside resort. It is a port with a memory. And that memory awaits you.",
      fr: "Il suffit parfois de marcher dans les bonnes ruelles, de lever les yeux vers les bons murs, et d'écouter ce que les pierres de basalte noir ont à dire. Puerto de la Cruz n'a jamais été seulement une station balnéaire. C'est un port avec une mémoire. Et cette mémoire vous attend.",
      es: 'A veces basta con caminar por los callejones correctos, levantar la vista hacia los muros adecuados, y escuchar lo que las piedras de basalto negro tienen que decir. Puerto de la Cruz nunca fue solo un resort. Es un puerto con memoria. Y esa memoria te espera.',
      de: 'Manchmal genügt es, durch die richtigen Gassen zu gehen, zu den richtigen Mauern aufzublicken und zuzuhören, was die schwarzen Basaltsteine zu sagen haben.',
      it: "A volte basta camminare nei vicoli giusti, alzare lo sguardo verso i muri giusti, e ascoltare ciò che le pietre di basalto nero hanno da dire.",
    },
  },

  // ════════════════════════════════════════════════════════════════
  //  GRAN CANARIA
  // ════════════════════════════════════════════════════════════════
  {
    slug: 'vegueta-et-colomb',
    image: '/images/escapes/vegueta-et-colomb.webp',
    island: 'Gran Canaria',
    islandId: 'gran-canaria',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 2,
    accentColor: '#c9a24b',
    subtitle: {
      en: 'Las Palmas as Columbus saw it',
      fr: "Las Palmas comme Colomb l'a vue",
      es: 'Las Palmas como la vio Colón',
    },
    title: {
      en: 'Vegueta & Columbus',
      fr: 'Vegueta & Colomb',
      es: 'Vegueta y Colón',
    },
    tagline: {
      en: 'In 1492, three caravels paused here before changing the world. The secret of that stopover still sleeps in the stones of Vegueta.',
      fr: "En 1492, trois caravelles firent escale ici avant de changer le monde. Le secret de cette halte dort encore dans les pierres de Vegueta.",
      es: 'En 1492, tres carabelas hicieron escala aquí antes de cambiar el mundo. El secreto de esa parada aún duerme en las piedras de Vegueta.',
    },
    location: { en: 'Las Palmas — Vegueta', fr: 'Las Palmas — Vegueta', es: 'Las Palmas — Vegueta' },
    intro: {
      en: 'Vegueta, the cradle of the Atlantic',
      fr: "Vegueta, le berceau de l'Atlantique",
      es: 'Vegueta, la cuna del Atlántico',
    },
    introBody: {
      en: 'The oldest quarter of Las Palmas is a maze of cobbled lanes, carved balconies and shaded patios. Behind the façade of a colonial mansion, a navigator once repaired his ships and gathered the last supplies before sailing into the unknown. In this game the whole quarter — the cathedral, the merchant houses, the hermitages — becomes the board on which you retrace his route.',
      fr: "Le plus vieux quartier de Las Palmas est un dédale de ruelles pavées, de balcons sculptés et de patios ombragés. Derrière la façade d'une demeure coloniale, un navigateur répara jadis ses navires et rassembla ses derniers vivres avant de cingler vers l'inconnu. Dans ce jeu, tout le quartier — la cathédrale, les maisons de marchands, les ermitages — devient le plateau sur lequel vous refaites sa route.",
      es: 'El barrio más antiguo de Las Palmas es un laberinto de callejones empedrados, balcones tallados y patios sombreados. Tras la fachada de una mansión colonial, un navegante reparó un día sus naves y reunió las últimas provisiones antes de zarpar hacia lo desconocido. En este juego, todo el barrio — la catedral, las casas de mercaderes, las ermitas — se convierte en el tablero donde rehaces su ruta.',
    },
    quote: {
      en: '"Before America, there was Gran Canaria — the last European water the caravels would taste for many weeks."',
      fr: '« Avant l\'Amérique, il y eut Gran Canaria — la dernière eau européenne que les caravelles goûteraient avant de longues semaines. »',
      es: '"Antes de América, estuvo Gran Canaria — la última agua europea que las carabelas probarían en muchas semanas."',
    },
    quoteAttr: {
      en: '— On the 1492 stopover of Christopher Columbus',
      fr: "— Sur l'escale de Christophe Colomb en 1492",
      es: '— Sobre la escala de Cristóbal Colón en 1492',
    },
    historyTitle: {
      en: 'The port that launched a new world',
      fr: 'Le port qui lança un monde nouveau',
      es: 'El puerto que lanzó un mundo nuevo',
    },
    historyBody: {
      en: [
        'Founded in 1478, Las Palmas was the first European city in the Canaries — a fortified outpost that became a bridge between three continents.',
        'In 1492 Columbus stopped in Gran Canaria to repair the rudder of the Pinta and re-rig the Niña before continuing west. The houses, wells and churches of Vegueta witnessed those frantic weeks.',
        'Five centuries later the quarter remains almost untouched: a UNESCO-listed open-air museum where every balcony and coat of arms still tells the story of the Atlantic crossing.',
      ],
      fr: [
        "Fondée en 1478, Las Palmas fut la première ville européenne des Canaries — un avant-poste fortifié devenu pont entre trois continents.",
        "En 1492, Colomb fit escale à Gran Canaria pour réparer le gouvernail de la Pinta et regréer la Niña avant de poursuivre vers l'ouest. Les maisons, les puits et les églises de Vegueta furent témoins de ces semaines fiévreuses.",
        "Cinq siècles plus tard, le quartier demeure presque intact : un musée à ciel ouvert classé à l'UNESCO où chaque balcon et chaque blason raconte encore la traversée de l'Atlantique.",
      ],
      es: [
        'Fundada en 1478, Las Palmas fue la primera ciudad europea de Canarias — un puesto fortificado convertido en puente entre tres continentes.',
        'En 1492 Colón hizo escala en Gran Canaria para reparar el timón de la Pinta y reaparejar la Niña antes de seguir al oeste. Las casas, los pozos y las iglesias de Vegueta fueron testigos de aquellas semanas febriles.',
        'Cinco siglos después el barrio sigue casi intacto: un museo al aire libre declarado por la UNESCO donde cada balcón y cada escudo aún narra la travesía del Atlántico.',
      ],
    },
    dates: [
      { year: '1478', label: { en: 'City founded', fr: 'Fondation de la ville', es: 'Fundación de la ciudad' } },
      { year: '1492', label: { en: 'Columbus stops here', fr: 'Escale de Colomb', es: 'Escala de Colón' } },
      { year: '1500s', label: { en: 'Golden age of Vegueta', fr: "Âge d'or de Vegueta", es: 'Edad de oro de Vegueta' } },
    ],
    acts: [
      {
        title: { en: 'Plaza de Santa Ana', fr: 'Plaza de Santa Ana', es: 'Plaza de Santa Ana' },
        location: { en: 'The cathedral square', fr: 'La place de la cathédrale', es: 'La plaza de la catedral' },
        description: {
          en: 'Beneath the bronze dogs that gave the islands their name, the first clue hides in the façade of the Cathedral of Santa Ana.',
          fr: "Sous les chiens de bronze qui donnèrent leur nom aux îles, le premier indice se cache dans la façade de la cathédrale de Santa Ana.",
          es: 'Bajo los perros de bronce que dieron nombre a las islas, la primera pista se esconde en la fachada de la Catedral de Santa Ana.',
        },
      },
      {
        title: { en: 'Casa de Colón', fr: 'Casa de Colón', es: 'Casa de Colón' },
        location: { en: "The governor's house", fr: 'La maison du gouverneur', es: 'La casa del gobernador' },
        description: {
          en: 'In the patio where the navigator is said to have lodged, decode the log-book entry that points to his next move.',
          fr: "Dans le patio où le navigateur aurait logé, déchiffrez la page de journal de bord qui indique son prochain geste.",
          es: 'En el patio donde, según se dice, se alojó el navegante, descifra la entrada del cuaderno de bitácora que señala su próximo paso.',
        },
      },
      {
        title: { en: 'Ermita de San Antonio Abad', fr: 'Ermita de San Antonio Abad', es: 'Ermita de San Antonio Abad' },
        location: { en: 'The oldest chapel', fr: 'La plus vieille chapelle', es: 'La capilla más antigua' },
        description: {
          en: 'Tradition says Columbus prayed here before departure. A carved date holds the combination you need.',
          fr: "La tradition veut que Colomb ait prié ici avant le départ. Une date gravée renferme la combinaison qu'il vous faut.",
          es: 'La tradición dice que Colón rezó aquí antes de partir. Una fecha tallada guarda la combinación que necesitas.',
        },
      },
      {
        title: { en: 'Calle de los Balcones', fr: 'Calle de los Balcones', es: 'Calle de los Balcones' },
        location: { en: 'Street of carved balconies', fr: 'Rue des balcons sculptés', es: 'Calle de los balcones tallados' },
        description: {
          en: 'The final riddle is spread across the Canary-pine balconies. Read them in the right order and the secret is yours.',
          fr: "La dernière énigme se répartit sur les balcons de pin des Canaries. Lisez-les dans le bon ordre et le secret est à vous.",
          es: 'El último enigma se reparte por los balcones de pino canario. Léelos en el orden correcto y el secreto será tuyo.',
        },
      },
    ],
    features: [
      { icon: '⛵', title: { en: 'A real chapter of history', fr: 'Un vrai chapitre d\'histoire', es: 'Un capítulo real de la historia' }, description: { en: 'Every puzzle is anchored in the documented 1492 stopover — you learn as you play.', fr: "Chaque énigme s'ancre dans l'escale documentée de 1492 — vous apprenez en jouant.", es: 'Cada enigma se ancla en la escala documentada de 1492 — aprendes jugando.' } },
      { icon: '🏛️', title: { en: 'A UNESCO quarter', fr: 'Un quartier UNESCO', es: 'Un barrio UNESCO' }, description: { en: 'You explore the best-preserved colonial centre in the Canaries, balcony by balcony.', fr: 'Vous explorez le centre colonial le mieux préservé des Canaries, balcon par balcon.', es: 'Exploras el centro colonial mejor conservado de Canarias, balcón a balcón.' } },
      { icon: '👨‍👩‍👧', title: { en: 'Family friendly', fr: 'Pour toute la famille', es: 'Para toda la familia' }, description: { en: 'Flat, compact and shaded — ideal with children from 8 years old.', fr: 'Plat, compact et ombragé — idéal avec des enfants dès 8 ans.', es: 'Llano, compacto y sombreado — ideal con niños desde 8 años.' } },
      { icon: '📱', title: { en: 'Play at your own pace', fr: 'À votre rythme', es: 'A tu propio ritmo' }, description: { en: 'No guide, no fixed time. Start when you want and pause whenever you like.', fr: 'Pas de guide, pas d\'horaire fixe. Commencez quand vous voulez et faites une pause à votre gré.', es: 'Sin guía, sin horario fijo. Empieza cuando quieras y haz una pausa cuando te apetezca.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '1h30 – 2h', fr: '1h30 – 2h', es: '1h30 – 2h' }, sub: { en: 'Self-paced', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~2 km', fr: '~2 km', es: '~2 km' }, sub: { en: 'Flat route', fr: 'Parcours plat', es: 'Recorrido llano' } },
      { icon: '🚩', label: { en: 'Start', fr: 'Départ', es: 'Inicio' }, value: { en: 'Plaza de Santa Ana', fr: 'Plaza de Santa Ana', es: 'Plaza de Santa Ana' }, sub: { en: 'Vegueta', fr: 'Vegueta', es: 'Vegueta' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Morning', fr: 'Matin', es: 'Mañana' }, sub: { en: 'Cooler & quieter', fr: 'Plus frais & calme', es: 'Más fresco y tranquilo' } },
    ],
    motto: {
      en: 'The sea remembers every departure.',
      fr: 'La mer se souvient de chaque départ.',
      es: 'El mar recuerda cada partida.',
    },
    mottoSub: {
      en: '— and Vegueta kept the proof',
      fr: '— et Vegueta en a gardé la preuve',
      es: '— y Vegueta guardó la prueba',
    },
    ctaBody: {
      en: 'Walk the lanes Columbus walked, read the balconies the merchants raised, and uncover the stopover that opened the Atlantic. Vegueta is waiting.',
      fr: "Arpentez les ruelles qu'a foulées Colomb, lisez les balcons qu'érigèrent les marchands, et découvrez l'escale qui ouvrit l'Atlantique. Vegueta vous attend.",
      es: 'Recorre los callejones que pisó Colón, lee los balcones que alzaron los mercaderes y descubre la escala que abrió el Atlántico. Vegueta te espera.',
    },
    stickyMessage: {
      en: "It's your turn! Explore Vegueta, the cradle of Las Palmas, and follow the trail of Columbus through its colonial palaces and squares.",
      fr: "À toi de jouer ! Explore Vegueta, le berceau de Las Palmas, et suis la piste de Colomb à travers ses palais et places coloniales.",
      es: '¡Te toca a ti! Explora Vegueta, la cuna de Las Palmas, y sigue la pista de Colón por sus palacios y plazas coloniales.',
    },
  },
  {
    slug: 'les-traces-guanches',
    image: '/images/escapes/les-traces-guanches.webp',
    island: 'Gran Canaria',
    islandId: 'gran-canaria',
    duration: '2h – 2h30',
    distance: '~2.5 km',
    difficulty: 3,
    accentColor: '#c9a24b',
    subtitle: {
      en: 'The island before the conquest',
      fr: 'L\'île avant la conquête',
      es: 'La isla antes de la conquista',
    },
    title: {
      en: 'The Guanche Traces',
      fr: 'Les Traces Guanches',
      es: 'Las Huellas Guanches',
    },
    tagline: {
      en: 'Long before Europe arrived, a people watched the Atlantic from these cliffs. Their script is still here — if you know where to look.',
      fr: "Bien avant l'arrivée de l'Europe, un peuple observait l'Atlantique depuis ces falaises. Leur écriture est toujours là — si vous savez où regarder.",
      es: 'Mucho antes de que llegara Europa, un pueblo vigilaba el Atlántico desde estos acantilados. Su escritura sigue aquí — si sabes dónde mirar.',
    },
    location: { en: 'Las Palmas — Vegueta', fr: 'Las Palmas — Vegueta', es: 'Las Palmas — Vegueta' },
    intro: {
      en: 'The world of the first Canarians',
      fr: 'Le monde des premiers Canariens',
      es: 'El mundo de los primeros canarios',
    },
    introBody: {
      en: 'The aboriginal Canarii lived in caves, granaries and mountaintop sanctuaries for more than a thousand years. Their carvings, mummies and painted symbols survive in the heart of the modern city. This game leads you from the great museum of Vegueta out into the streets, decoding the marks left by a vanished people.',
      fr: "Les Canarii aborigènes vécurent dans des grottes, des greniers et des sanctuaires de sommet pendant plus de mille ans. Leurs gravures, leurs momies et leurs symboles peints survivent au cœur de la ville moderne. Ce jeu vous conduit du grand musée de Vegueta jusque dans les rues, en décodant les marques laissées par un peuple disparu.",
      es: 'Los aborígenes canarios vivieron en cuevas, graneros y santuarios de cumbre durante más de mil años. Sus grabados, sus momias y sus símbolos pintados sobreviven en el corazón de la ciudad moderna. Este juego te lleva del gran museo de Vegueta hasta las calles, descifrando las marcas que dejó un pueblo desaparecido.',
    },
    quote: {
      en: '"They had no metal and no sails, yet they raised a civilisation on rock that the conquerors could not erase."',
      fr: '« Ils n\'avaient ni métal ni voiles, et pourtant ils élevèrent sur la roche une civilisation que les conquérants ne purent effacer. »',
      es: '"No tenían metal ni velas, y aun así levantaron sobre la roca una civilización que los conquistadores no pudieron borrar."',
    },
    quoteAttr: {
      en: '— On the aboriginal Canarii',
      fr: '— Sur les Canarii aborigènes',
      es: '— Sobre los aborígenes canarios',
    },
    historyTitle: {
      en: 'A people written in stone',
      fr: 'Un peuple écrit dans la pierre',
      es: 'Un pueblo escrito en piedra',
    },
    historyBody: {
      en: [
        'The first Canarians probably arrived from North Africa around two thousand years ago, bringing barley, goats and a Libyco-Berber script.',
        'They built painted granaries, carved spirals into cliff walls and mummified their dead — a world the Castilian conquest of 1478–1483 swept away within a generation.',
        'Today El Museo Canario in Vegueta guards their skulls, idols and pintaderas, while their place-names still cling to every ravine of the island.',
      ],
      fr: [
        "Les premiers Canariens vinrent probablement d'Afrique du Nord il y a environ deux mille ans, apportant l'orge, les chèvres et une écriture libyco-berbère.",
        "Ils bâtirent des greniers peints, gravèrent des spirales dans les parois et momifièrent leurs morts — un monde que la conquête castillane de 1478–1483 balaya en une génération.",
        "Aujourd'hui El Museo Canario, à Vegueta, conserve leurs crânes, leurs idoles et leurs pintaderas, tandis que leurs toponymes s'accrochent encore à chaque ravin de l'île.",
      ],
      es: [
        'Los primeros canarios llegaron probablemente del norte de África hace unos dos mil años, trayendo cebada, cabras y una escritura líbico-bereber.',
        'Construyeron graneros pintados, grabaron espirales en los acantilados y momificaron a sus muertos — un mundo que la conquista castellana de 1478–1483 barrió en una generación.',
        'Hoy El Museo Canario, en Vegueta, guarda sus cráneos, sus ídolos y sus pintaderas, mientras sus topónimos siguen aferrados a cada barranco de la isla.',
      ],
    },
    dates: [
      { year: '~0', label: { en: 'First settlers arrive', fr: 'Arrivée des premiers habitants', es: 'Llegan los primeros pobladores' } },
      { year: '1483', label: { en: 'Castilian conquest', fr: 'Conquête castillane', es: 'Conquista castellana' } },
      { year: '1879', label: { en: 'El Museo Canario opens', fr: 'Ouverture du Museo Canario', es: 'Abre El Museo Canario' } },
    ],
    acts: [
      {
        title: { en: 'El Museo Canario', fr: 'El Museo Canario', es: 'El Museo Canario' },
        location: { en: 'Hall of the ancestors', fr: 'La salle des ancêtres', es: 'La sala de los ancestros' },
        description: {
          en: 'Among the pintaderas — the clay seals each family used as a signature — find the pattern that opens the trail.',
          fr: "Parmi les pintaderas — les sceaux d'argile que chaque famille utilisait comme signature — trouvez le motif qui ouvre la piste.",
          es: 'Entre las pintaderas — los sellos de arcilla que cada familia usaba como firma — encuentra el patrón que abre la pista.',
        },
      },
      {
        title: { en: 'The aboriginal symbols', fr: 'Les symboles aborigènes', es: 'Los símbolos aborígenes' },
        location: { en: 'Carved spirals', fr: 'Les spirales gravées', es: 'Las espirales grabadas' },
        description: {
          en: 'Spirals and lines carved by the Canarii hide a number. Translate the script the way an islander would have.',
          fr: "Des spirales et des lignes gravées par les Canarii cachent un nombre. Traduisez l'écriture comme l'aurait fait un insulaire.",
          es: 'Espirales y líneas grabadas por los canarios esconden un número. Traduce la escritura como lo habría hecho un isleño.',
        },
      },
      {
        title: { en: 'The granary', fr: 'Le grenier', es: 'El granero' },
        location: { en: 'Stores of the mountain', fr: 'Les réserves de la montagne', es: 'Los graneros de la montaña' },
        description: {
          en: 'Painted silos kept the harvest safe for years. Work out which chamber the elders trusted with their seed.',
          fr: "Des silos peints gardaient la récolte des années durant. Devinez à quelle chambre les anciens confiaient leur semence.",
          es: 'Silos pintados guardaban la cosecha durante años. Averigua a qué cámara confiaban los ancianos su semilla.',
        },
      },
      {
        title: { en: 'The sky-watchers', fr: 'Les guetteurs du ciel', es: 'Los vigías del cielo' },
        location: { en: 'A mountain sanctuary', fr: 'Un sanctuaire de sommet', es: 'Un santuario de cumbre' },
        description: {
          en: 'The Canarii read the solstices from high almogarenes. Align the final clue with the rising sun to finish.',
          fr: "Les Canarii lisaient les solstices depuis de hauts almogarenes. Alignez le dernier indice avec le soleil levant pour conclure.",
          es: 'Los canarios leían los solsticios desde altos almogarenes. Alinea la última pista con el sol naciente para terminar.',
        },
      },
    ],
    features: [
      { icon: '🗿', title: { en: 'Meet a lost civilisation', fr: 'Rencontrez une civilisation perdue', es: 'Conoce una civilización perdida' }, description: { en: 'Discover the Canarii through their own symbols, granaries and sanctuaries.', fr: 'Découvrez les Canarii à travers leurs propres symboles, greniers et sanctuaires.', es: 'Descubre a los canarios a través de sus propios símbolos, graneros y santuarios.' } },
      { icon: '🔤', title: { en: 'Crack an ancient script', fr: 'Déchiffrez une écriture ancienne', es: 'Descifra una escritura antigua' }, description: { en: 'Several puzzles use real Libyco-Berber signs — a genuine code from the past.', fr: 'Plusieurs énigmes utilisent de vrais signes libyco-berbères — un code authentique du passé.', es: 'Varios enigmas usan signos líbico-bereberes reales — un código auténtico del pasado.' } },
      { icon: '🧠', title: { en: 'A notch harder', fr: 'Un cran plus difficile', es: 'Un punto más difícil' }, description: { en: 'The richest of our Gran Canaria routes — perfect for seasoned puzzlers.', fr: 'Le plus riche de nos parcours de Gran Canaria — parfait pour les amateurs aguerris.', es: 'El más rico de nuestros recorridos de Gran Canaria — perfecto para enigmistas curtidos.' } },
      { icon: '📱', title: { en: 'Play at your own pace', fr: 'À votre rythme', es: 'A tu propio ritmo' }, description: { en: 'No guide, no fixed time. Start when you want and pause whenever you like.', fr: 'Pas de guide, pas d\'horaire fixe. Commencez quand vous voulez et faites une pause à votre gré.', es: 'Sin guía, sin horario fijo. Empieza cuando quieras y haz una pausa cuando te apetezca.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '2h – 2h30', fr: '2h – 2h30', es: '2h – 2h30' }, sub: { en: 'Self-paced', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 10', fr: 'Dès 10 ans', es: 'Desde 10 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~2.5 km', fr: '~2.5 km', es: '~2.5 km' }, sub: { en: 'Gentle slopes', fr: 'Légères montées', es: 'Suaves pendientes' } },
      { icon: '🚩', label: { en: 'Start', fr: 'Départ', es: 'Inicio' }, value: { en: 'El Museo Canario', fr: 'El Museo Canario', es: 'El Museo Canario' }, sub: { en: 'Vegueta', fr: 'Vegueta', es: 'Vegueta' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Morning', fr: 'Matin', es: 'Mañana' }, sub: { en: 'Cooler & quieter', fr: 'Plus frais & calme', es: 'Más fresco y tranquilo' } },
    ],
    motto: {
      en: 'A people erased can still be read.',
      fr: 'Un peuple effacé peut encore se lire.',
      es: 'Un pueblo borrado todavía puede leerse.',
    },
    mottoSub: {
      en: '— if you learn their signs',
      fr: '— si vous apprenez leurs signes',
      es: '— si aprendes sus signos',
    },
    ctaBody: {
      en: 'Step into the world of the first Canarians, decode the script they carved into rock, and carry home a story most visitors never hear. The traces are waiting.',
      fr: "Entrez dans le monde des premiers Canariens, décodez l'écriture qu'ils gravèrent dans la roche et rapportez une histoire que la plupart des visiteurs n'entendent jamais. Les traces vous attendent.",
      es: 'Adéntrate en el mundo de los primeros canarios, descifra la escritura que grabaron en la roca y llévate una historia que la mayoría de los visitantes nunca escucha. Las huellas te esperan.',
    },
    stickyMessage: {
      en: "It's your turn! Uncover the aboriginal heritage of Gran Canaria, from El Museo Canario to the carved symbols hidden across Vegueta.",
      fr: "À toi de jouer ! Découvre l'héritage aborigène de Gran Canaria, du Museo Canario aux symboles gravés cachés dans Vegueta.",
      es: '¡Te toca a ti! Descubre la herencia aborigen de Gran Canaria, del Museo Canario a los símbolos grabados ocultos por Vegueta.',
    },
  },
  {
    slug: 'les-pirates-de-gran-canaria',
    image: '/images/escapes/les-pirates-de-gran-canaria.webp',
    island: 'Gran Canaria',
    islandId: 'gran-canaria',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 2,
    accentColor: '#c9a24b',
    subtitle: {
      en: 'When the city held the sea',
      fr: 'Quand la ville tenait la mer',
      es: 'Cuando la ciudad sujetaba el mar',
    },
    title: {
      en: 'The Pirates of Gran Canaria',
      fr: 'Les Pirates de Gran Canaria',
      es: 'Los Piratas de Gran Canaria',
    },
    tagline: {
      en: 'In 1599 a Dutch fleet of seventy ships fell on Las Palmas. The city burned — but it did not surrender. Can you defend it again?',
      fr: "En 1599, une flotte hollandaise de soixante-dix navires fondit sur Las Palmas. La ville brûla — mais ne se rendit pas. Saurez-vous la défendre à nouveau ?",
      es: 'En 1599 una flota holandesa de setenta barcos cayó sobre Las Palmas. La ciudad ardió — pero no se rindió. ¿Sabrás defenderla de nuevo?',
    },
    location: { en: 'Las Palmas — Vegueta & Triana', fr: 'Las Palmas — Vegueta & Triana', es: 'Las Palmas — Vegueta y Triana' },
    intro: {
      en: 'A city built to be attacked',
      fr: 'Une ville bâtie pour être attaquée',
      es: 'Una ciudad construida para ser atacada',
    },
    introBody: {
      en: 'For three centuries Las Palmas was a prize: a rich Atlantic port within reach of corsairs, privateers and rival empires. Its castles, watchtowers and city walls were raised to repel them. This game turns Vegueta and Triana into a battlefield where you replay the great Dutch assault of 1599.',
      fr: "Pendant trois siècles, Las Palmas fut une proie : un riche port atlantique à portée des corsaires, des flibustiers et des empires rivaux. Ses châteaux, ses tours de guet et ses remparts furent élevés pour les repousser. Ce jeu transforme Vegueta et Triana en champ de bataille où vous rejouez le grand assaut hollandais de 1599.",
      es: 'Durante tres siglos Las Palmas fue una presa: un rico puerto atlántico al alcance de corsarios, filibusteros e imperios rivales. Sus castillos, sus atalayas y sus murallas se alzaron para rechazarlos. Este juego convierte Vegueta y Triana en un campo de batalla donde revives el gran asalto holandés de 1599.',
    },
    quote: {
      en: '"They took the city but never its citadel — and within days the fever and the militia drove them back to their ships."',
      fr: '« Ils prirent la ville mais jamais sa citadelle — et en quelques jours la fièvre et la milice les rejetèrent vers leurs navires. »',
      es: '"Tomaron la ciudad pero nunca su ciudadela — y en pocos días la fiebre y la milicia los devolvieron a sus barcos."',
    },
    quoteAttr: {
      en: '— On the 1599 raid of Van der Does',
      fr: "— Sur le raid de Van der Does en 1599",
      es: '— Sobre el ataque de Van der Does en 1599',
    },
    historyTitle: {
      en: 'Seventy ships against one town',
      fr: 'Soixante-dix navires contre une ville',
      es: 'Setenta barcos contra una ciudad',
    },
    historyBody: {
      en: [
        'Through the 16th century the city was raided again and again — by Frenchmen, Berbers and Englishmen drawn to its harbour and its sugar.',
        'In June 1599 Pieter van der Does landed some 8,000 men, stormed the defences and occupied Las Palmas. But the militia held the heights, disease spread, and the Dutch withdrew, burning much of the town behind them.',
        'The forts that decided the battle — Castillo de Mata, the city walls, the gate of Triana — still mark the streets you will cross.',
      ],
      fr: [
        "Tout au long du XVIe siècle, la ville fut attaquée encore et encore — par des Français, des Berbères et des Anglais attirés par son port et son sucre.",
        "En juin 1599, Pieter van der Does débarqua quelque 8 000 hommes, força les défenses et occupa Las Palmas. Mais la milice tint les hauteurs, la maladie se répandit, et les Hollandais se retirèrent en incendiant une grande partie de la ville.",
        "Les forts qui décidèrent la bataille — le Castillo de Mata, les remparts, la porte de Triana — marquent encore les rues que vous traverserez.",
      ],
      es: [
        'A lo largo del siglo XVI la ciudad fue asaltada una y otra vez — por franceses, bereberes e ingleses atraídos por su puerto y su azúcar.',
        'En junio de 1599 Pieter van der Does desembarcó unos 8.000 hombres, forzó las defensas y ocupó Las Palmas. Pero la milicia mantuvo las alturas, la enfermedad se extendió y los holandeses se retiraron, incendiando buena parte de la ciudad.',
        'Los fuertes que decidieron la batalla — el Castillo de Mata, las murallas, la puerta de Triana — todavía marcan las calles que cruzarás.',
      ],
    },
    dates: [
      { year: '1500s', label: { en: 'Age of raids', fr: 'L\'ère des raids', es: 'La era de los ataques' } },
      { year: '1599', label: { en: 'The Dutch assault', fr: "L'assaut hollandais", es: 'El asalto holandés' } },
      { year: '1600s', label: { en: 'The city rebuilds', fr: 'La ville se relève', es: 'La ciudad se reconstruye' } },
    ],
    acts: [
      {
        title: { en: 'Castillo de Mata', fr: 'Castillo de Mata', es: 'Castillo de Mata' },
        location: { en: 'The surviving fort', fr: 'Le fort rescapé', es: 'El fuerte superviviente' },
        description: {
          en: 'On the walls that held in 1599, count the gun-ports to find how many cannon defended the rise.',
          fr: "Sur les murs qui tinrent en 1599, comptez les embrasures pour trouver combien de canons défendaient la hauteur.",
          es: 'En los muros que resistieron en 1599, cuenta las troneras para hallar cuántos cañones defendían la altura.',
        },
      },
      {
        title: { en: 'Puente de Verdugo', fr: 'Puente de Verdugo', es: 'Puente de Verdugo' },
        location: { en: 'Between the two quarters', fr: 'Entre les deux quartiers', es: 'Entre los dos barrios' },
        description: {
          en: 'The ravine split Vegueta from Triana. Decode the bridge inscription to learn where the militia regrouped.',
          fr: "Le ravin séparait Vegueta de Triana. Déchiffrez l'inscription du pont pour savoir où la milice se regroupa.",
          es: 'El barranco separaba Vegueta de Triana. Descifra la inscripción del puente para saber dónde se reagrupó la milicia.',
        },
      },
      {
        title: { en: 'Calle Triana', fr: 'Calle Triana', es: 'Calle Triana' },
        location: { en: 'The merchant street', fr: 'La rue marchande', es: 'La calle de los mercaderes' },
        description: {
          en: 'Down the old commercial spine the Dutch advanced. Trace their path to the hidden cache of the city treasury.',
          fr: "C'est par la vieille artère commerçante que les Hollandais avancèrent. Suivez leur trajet jusqu'à la cache du trésor de la ville.",
          es: 'Por la vieja arteria comercial avanzaron los holandeses. Sigue su recorrido hasta el escondite del tesoro de la ciudad.',
        },
      },
      {
        title: { en: 'Ermita de San Telmo', fr: 'Ermita de San Telmo', es: 'Ermita de San Telmo' },
        location: { en: 'The seafront chapel', fr: 'La chapelle du front de mer', es: 'La ermita junto al mar' },
        description: {
          en: 'Where the fleet first came ashore, the last riddle reveals why the invaders could not hold their prize.',
          fr: "Là où la flotte aborda d'abord, la dernière énigme révèle pourquoi les envahisseurs ne purent garder leur butin.",
          es: 'Donde la flota desembarcó primero, el último enigma revela por qué los invasores no pudieron conservar su botín.',
        },
      },
    ],
    features: [
      { icon: '🏴‍☠️', title: { en: 'A true siege', fr: 'Un vrai siège', es: 'Un asedio real' }, description: { en: 'Every stage replays a documented moment of the 1599 Dutch assault.', fr: 'Chaque étape rejoue un moment documenté de l\'assaut hollandais de 1599.', es: 'Cada etapa revive un momento documentado del asalto holandés de 1599.' } },
      { icon: '🏰', title: { en: 'Forts & city walls', fr: 'Forts & remparts', es: 'Fuertes y murallas' }, description: { en: 'You move between Vegueta and Triana along the real line of the old defences.', fr: 'Vous passez de Vegueta à Triana le long de la véritable ligne des anciennes défenses.', es: 'Te mueves entre Vegueta y Triana siguiendo la línea real de las antiguas defensas.' } },
      { icon: '👨‍👩‍👧', title: { en: 'Family adventure', fr: 'Aventure familiale', es: 'Aventura familiar' }, description: { en: 'Cannons, fortresses and treasure — children love this one.', fr: 'Canons, forteresses et trésor — les enfants adorent.', es: 'Cañones, fortalezas y tesoro — a los niños les encanta.' } },
      { icon: '📱', title: { en: 'Play at your own pace', fr: 'À votre rythme', es: 'A tu propio ritmo' }, description: { en: 'No guide, no fixed time. Start when you want and pause whenever you like.', fr: 'Pas de guide, pas d\'horaire fixe. Commencez quand vous voulez et faites une pause à votre gré.', es: 'Sin guía, sin horario fijo. Empieza cuando quieras y haz una pausa cuando te apetezca.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '1h30 – 2h', fr: '1h30 – 2h', es: '1h30 – 2h' }, sub: { en: 'Self-paced', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~2 km', fr: '~2 km', es: '~2 km' }, sub: { en: 'Vegueta ↔ Triana', fr: 'Vegueta ↔ Triana', es: 'Vegueta ↔ Triana' } },
      { icon: '🚩', label: { en: 'Start', fr: 'Départ', es: 'Inicio' }, value: { en: 'Castillo de Mata', fr: 'Castillo de Mata', es: 'Castillo de Mata' }, sub: { en: 'Vegueta', fr: 'Vegueta', es: 'Vegueta' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Any time', fr: 'À toute heure', es: 'A cualquier hora' }, sub: { en: 'Mostly shaded', fr: 'Souvent ombragé', es: 'Casi siempre a la sombra' } },
    ],
    motto: {
      en: 'A city is not its walls, but the will to hold them.',
      fr: 'Une ville n\'est pas ses murs, mais la volonté de les tenir.',
      es: 'Una ciudad no son sus muros, sino la voluntad de defenderlos.',
    },
    mottoSub: {
      en: '— Las Palmas burned, then rose again',
      fr: '— Las Palmas brûla, puis se releva',
      es: '— Las Palmas ardió, y luego renació',
    },
    ctaBody: {
      en: 'Man the forts, follow the invaders through Vegueta and Triana, and discover how a single town threw back a fleet of seventy ships. The siege begins when you do.',
      fr: "Tenez les forts, suivez les envahisseurs à travers Vegueta et Triana, et découvrez comment une seule ville repoussa une flotte de soixante-dix navires. Le siège commence quand vous le décidez.",
      es: 'Defiende los fuertes, sigue a los invasores por Vegueta y Triana y descubre cómo una sola ciudad rechazó una flota de setenta barcos. El asedio empieza cuando tú quieras.',
    },
    stickyMessage: {
      en: "It's your turn! Relive the 1599 Dutch assault on Las Palmas and trace the forts and walls that saved the city, from Vegueta to Triana.",
      fr: "À toi de jouer ! Revis l'assaut hollandais de 1599 sur Las Palmas et suis les forts et remparts qui sauvèrent la ville, de Vegueta à Triana.",
      es: '¡Te toca a ti! Revive el asalto holandés de 1599 a Las Palmas y recorre los fuertes y murallas que salvaron la ciudad, de Vegueta a Triana.',
    },
  },
  {
    slug: 'las-palmas-moderniste',
    image: '/images/escapes/las-palmas-moderniste.webp',
    island: 'Gran Canaria',
    islandId: 'gran-canaria',
    duration: '1h30 – 2h',
    distance: '~1.8 km',
    difficulty: 2,
    accentColor: '#c9a24b',
    subtitle: {
      en: 'The belle époque of the Atlantic',
      fr: "La belle époque de l'Atlantique",
      es: 'La belle époque del Atlántico',
    },
    title: {
      en: 'Modernist Las Palmas',
      fr: 'Las Palmas Moderniste',
      es: 'Las Palmas Modernista',
    },
    tagline: {
      en: 'When the steamships came, the city dressed itself in tropical Art Nouveau. Its finest details were never meant for the casual eye.',
      fr: "Quand vinrent les paquebots, la ville se para d'Art Nouveau tropical. Ses plus beaux détails ne furent jamais destinés au regard pressé.",
      es: 'Cuando llegaron los vapores, la ciudad se vistió de Art Nouveau tropical. Sus mejores detalles nunca fueron pensados para la mirada distraída.',
    },
    location: { en: 'Las Palmas — Triana', fr: 'Las Palmas — Triana', es: 'Las Palmas — Triana' },
    intro: {
      en: 'Triana, the boulevard of a boom',
      fr: 'Triana, le boulevard d\'un essor',
      es: 'Triana, el bulevar de un auge',
    },
    introBody: {
      en: 'When the Puerto de la Luz opened the island to world trade, money poured into Las Palmas and architects answered with curves of stone, stained glass and wrought iron. The pedestrian street of Triana became a showcase of Modernismo. This game asks you to read those façades like a code — the kind only an architect would notice.',
      fr: "Quand le Puerto de la Luz ouvrit l'île au commerce mondial, l'argent afflua vers Las Palmas et les architectes répondirent par des courbes de pierre, des vitraux et du fer forgé. La rue piétonne de Triana devint une vitrine du Modernismo. Ce jeu vous demande de lire ces façades comme un code — celui que seul un architecte remarquerait.",
      es: 'Cuando el Puerto de la Luz abrió la isla al comercio mundial, el dinero fluyó hacia Las Palmas y los arquitectos respondieron con curvas de piedra, vidrieras y hierro forjado. La calle peatonal de Triana se convirtió en un escaparate del Modernismo. Este juego te pide leer esas fachadas como un código — el que solo un arquitecto notaría.',
    },
    quote: {
      en: '"Triana was the catwalk of a city that had suddenly grown rich — and wanted the whole Atlantic to know."',
      fr: '« Triana était le podium d\'une ville soudain enrichie — et qui voulait que tout l\'Atlantique le sache. »',
      es: '"Triana era la pasarela de una ciudad de pronto enriquecida — y que quería que todo el Atlántico lo supiera."',
    },
    quoteAttr: {
      en: '— On Modernist Las Palmas',
      fr: '— Sur le Las Palmas moderniste',
      es: '— Sobre el Las Palmas modernista',
    },
    historyTitle: {
      en: 'A street that wore its wealth',
      fr: 'Une rue qui portait sa richesse',
      es: 'Una calle que vestía su riqueza',
    },
    historyBody: {
      en: [
        'In 1883 the engineer Juan de León y Castillo began the great harbour of La Luz, turning Las Palmas into a coaling station for the whole Atlantic.',
        'Fortunes rose overnight, and between 1900 and 1930 the new bourgeoisie rebuilt Triana in Modernismo — sinuous balconies, floral mouldings, the Gabinete Literario and the Teatro Pérez Galdós.',
        'Much of it survives above the shop signs. Look up, and the boom of a century ago is still on display.',
      ],
      fr: [
        "En 1883, l'ingénieur Juan de León y Castillo entreprit le grand port de La Luz, faisant de Las Palmas une escale charbonnière pour tout l'Atlantique.",
        "Les fortunes s'élevèrent du jour au lendemain, et entre 1900 et 1930 la nouvelle bourgeoisie rebâtit Triana en Modernismo — balcons sinueux, moulures florales, le Gabinete Literario et le Teatro Pérez Galdós.",
        "Une grande partie subsiste au-dessus des enseignes. Levez les yeux : l'essor d'il y a un siècle est toujours à l'affiche.",
      ],
      es: [
        'En 1883 el ingeniero Juan de León y Castillo inició el gran puerto de La Luz, convirtiendo a Las Palmas en estación carbonera de todo el Atlántico.',
        'Las fortunas subieron de la noche a la mañana, y entre 1900 y 1930 la nueva burguesía reconstruyó Triana en Modernismo — balcones sinuosos, molduras florales, el Gabinete Literario y el Teatro Pérez Galdós.',
        'Buena parte sobrevive por encima de los rótulos. Levanta la vista: el auge de hace un siglo sigue en cartel.',
      ],
    },
    dates: [
      { year: '1883', label: { en: 'Puerto de La Luz begun', fr: 'Début du Puerto de La Luz', es: 'Comienza el Puerto de La Luz' } },
      { year: '1900', label: { en: 'Modernismo flourishes', fr: 'Apogée du Modernismo', es: 'Apogeo del Modernismo' } },
      { year: '1928', label: { en: 'Teatro Pérez Galdós rebuilt', fr: 'Reconstruction du Teatro Pérez Galdós', es: 'Reconstrucción del Teatro Pérez Galdós' } },
    ],
    acts: [
      {
        title: { en: 'Gabinete Literario', fr: 'Gabinete Literario', es: 'Gabinete Literario' },
        location: { en: 'The cultural palace', fr: 'Le palais culturel', es: 'El palacio cultural' },
        description: {
          en: 'Two ornate towers frame the entrance. Count the motifs in the ironwork to open the first lock.',
          fr: "Deux tours ornées encadrent l'entrée. Comptez les motifs du ferronnage pour ouvrir le premier verrou.",
          es: 'Dos torres ornamentadas enmarcan la entrada. Cuenta los motivos del hierro forjado para abrir el primer cierre.',
        },
      },
      {
        title: { en: 'Calle Triana', fr: 'Calle Triana', es: 'Calle Triana' },
        location: { en: 'The Modernist façades', fr: 'Les façades modernistes', es: 'Las fachadas modernistas' },
        description: {
          en: 'A flower repeats along the balconies — but one window breaks the pattern. Find it to read the next clue.',
          fr: "Une fleur se répète le long des balcons — mais une fenêtre rompt le motif. Trouvez-la pour lire l'indice suivant.",
          es: 'Una flor se repite por los balcones — pero una ventana rompe el patrón. Encuéntrala para leer la siguiente pista.',
        },
      },
      {
        title: { en: 'Teatro Pérez Galdós', fr: 'Teatro Pérez Galdós', es: 'Teatro Pérez Galdós' },
        location: { en: "The city's stage", fr: 'La scène de la ville', es: 'El escenario de la ciudad' },
        description: {
          en: 'Named for the great novelist born nearby, the theatre hides a date in its frieze. Add the figures to advance.',
          fr: "Nommé d'après le grand romancier né tout près, le théâtre cache une date dans sa frise. Additionnez les chiffres pour avancer.",
          es: 'Llamado así por el gran novelista nacido cerca, el teatro esconde una fecha en su friso. Suma las cifras para avanzar.',
        },
      },
      {
        title: { en: 'Plaza de Hurtado de Mendoza', fr: 'Plaza de Hurtado de Mendoza', es: 'Plaza de Hurtado de Mendoza' },
        location: { en: 'The frog square', fr: 'La place de la grenouille', es: 'La plaza de la rana' },
        description: {
          en: 'Under the iron kiosk known to locals as "la rana", the last riddle ties the whole street together.',
          fr: "Sous le kiosque de fer que les habitants nomment « la rana », la dernière énigme relie toute la rue.",
          es: 'Bajo el quiosco de hierro que los vecinos llaman "la rana", el último enigma une toda la calle.',
        },
      },
    ],
    features: [
      { icon: '🏛️', title: { en: 'Architecture as a game', fr: 'L\'architecture comme jeu', es: 'La arquitectura como juego' }, description: { en: 'You learn to read Modernismo — and never look at a façade the same way again.', fr: 'Vous apprenez à lire le Modernismo — et ne regarderez plus jamais une façade de la même manière.', es: 'Aprendes a leer el Modernismo — y no volverás a mirar una fachada igual.' } },
      { icon: '🌸', title: { en: 'Eyes up', fr: 'Les yeux en l\'air', es: 'La vista en alto' }, description: { en: 'The clues live above the shop signs, where most visitors never look.', fr: 'Les indices vivent au-dessus des enseignes, là où les visiteurs ne regardent jamais.', es: 'Las pistas viven por encima de los rótulos, donde casi nadie mira.' } },
      { icon: '🛍️', title: { en: 'Heart of the city', fr: 'Au cœur de la ville', es: 'En el corazón de la ciudad' }, description: { en: 'Played along Triana, the lively pedestrian street full of cafés and shops.', fr: 'Joué le long de Triana, la rue piétonne animée pleine de cafés et de boutiques.', es: 'Se juega por Triana, la animada calle peatonal llena de cafés y tiendas.' } },
      { icon: '📱', title: { en: 'Play at your own pace', fr: 'À votre rythme', es: 'A tu propio ritmo' }, description: { en: 'No guide, no fixed time. Start when you want and pause whenever you like.', fr: 'Pas de guide, pas d\'horaire fixe. Commencez quand vous voulez et faites une pause à votre gré.', es: 'Sin guía, sin horario fijo. Empieza cuando quieras y haz una pausa cuando te apetezca.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '1h30 – 2h', fr: '1h30 – 2h', es: '1h30 – 2h' }, sub: { en: 'Self-paced', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~1.8 km', fr: '~1.8 km', es: '~1.8 km' }, sub: { en: 'Flat & central', fr: 'Plat & central', es: 'Llano y céntrico' } },
      { icon: '🚩', label: { en: 'Start', fr: 'Départ', es: 'Inicio' }, value: { en: 'Gabinete Literario', fr: 'Gabinete Literario', es: 'Gabinete Literario' }, sub: { en: 'Triana', fr: 'Triana', es: 'Triana' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '🛍️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Daytime', fr: 'Journée', es: 'De día' }, sub: { en: 'Shops open', fr: 'Boutiques ouvertes', es: 'Tiendas abiertas' } },
    ],
    motto: {
      en: 'Beauty hides in the cornices.',
      fr: 'La beauté se cache dans les corniches.',
      es: 'La belleza se esconde en las cornisas.',
    },
    mottoSub: {
      en: '— you only have to look up',
      fr: '— il suffit de lever les yeux',
      es: '— solo hay que mirar hacia arriba',
    },
    ctaBody: {
      en: 'Stroll the boulevard of Triana, decode the flowers and dragons hidden in its façades, and discover the golden age that built modern Las Palmas. Look up — and play.',
      fr: "Flânez sur le boulevard de Triana, décodez les fleurs et les dragons cachés dans ses façades, et découvrez l'âge d'or qui bâtit le Las Palmas moderne. Levez les yeux — et jouez.",
      es: 'Pasea por el bulevar de Triana, descifra las flores y dragones ocultos en sus fachadas y descubre la edad de oro que construyó el Las Palmas moderno. Levanta la vista — y juega.',
    },
    stickyMessage: {
      en: "It's your turn! Discover the tropical Art Nouveau of Triana and read the Modernist façades that tell the story of Las Palmas' golden age.",
      fr: "À toi de jouer ! Découvre l'Art Nouveau tropical de Triana et lis les façades modernistes qui racontent l'âge d'or de Las Palmas.",
      es: '¡Te toca a ti! Descubre el Art Nouveau tropical de Triana y lee las fachadas modernistas que cuentan la edad de oro de Las Palmas.',
    },
  },

  // ════════════════════════════════════════════════════════════════
  //  LANZAROTE
  // ════════════════════════════════════════════════════════════════
  {
    slug: 'le-volcan-de-manrique',
    image: '/images/escapes/le-volcan-de-manrique.webp',
    island: 'Lanzarote',
    islandId: 'lanzarote',
    duration: '5h – 8h',
    distance: '~40–60 km',
    difficulty: 4,
    accentColor: '#c9a24b',
    subtitle: {
      en: 'An island turned into art',
      fr: 'Une île transformée en art',
      es: 'Una isla convertida en arte',
    },
    title: {
      en: "Manrique's Volcano",
      fr: 'Le Volcan de Manrique',
      es: 'El Volcán de Manrique',
    },
    tagline: {
      en: 'One man refused to let concrete devour his island. He hid his masterpieces inside the lava itself — and dared you to find them.',
      fr: "Un homme refusa de laisser le béton dévorer son île. Il cacha ses chefs-d'œuvre dans la lave elle-même — et vous met au défi de les trouver.",
      es: 'Un hombre se negó a que el cemento devorara su isla. Escondió sus obras maestras dentro de la propia lava — y te reta a encontrarlas.',
    },
    location: { en: 'Tahíche · Jameos · Timanfaya', fr: 'Tahíche · Jameos · Timanfaya', es: 'Tahíche · Jameos · Timanfaya' },
    intro: {
      en: 'A full-day journey across the lava',
      fr: 'Une journée entière à travers la lave',
      es: 'Una jornada entera a través de la lava',
    },
    introBody: {
      en: 'This is our most ambitious route: a road adventure that crosses Lanzarote by car, linking the great works of César Manrique. From the house built inside lava bubbles to the auditorium hidden in a volcanic tube, each site is a riddle. Pack water, fuel the car and give it the day it deserves.',
      fr: "C'est notre parcours le plus ambitieux : une aventure routière qui traverse Lanzarote en voiture, reliant les grandes œuvres de César Manrique. De la maison bâtie dans des bulles de lave à l'auditorium caché dans un tube volcanique, chaque site est une énigme. Emportez de l'eau, faites le plein et accordez à ce jeu la journée qu'il mérite.",
      es: 'Este es nuestro recorrido más ambicioso: una aventura por carretera que cruza Lanzarote en coche, enlazando las grandes obras de César Manrique. De la casa construida dentro de burbujas de lava al auditorio oculto en un tubo volcánico, cada sitio es un enigma. Lleva agua, llena el depósito y dale a este juego el día que merece.',
    },
    quote: {
      en: '"I painted on the most beautiful canvas in the world — and that canvas was Lanzarote."',
      fr: '« J\'ai peint sur la plus belle toile du monde — et cette toile était Lanzarote. »',
      es: '"Pinté sobre el lienzo más hermoso del mundo — y ese lienzo era Lanzarote."',
    },
    quoteAttr: {
      en: '— After César Manrique, artist of Lanzarote',
      fr: '— D\'après César Manrique, artiste de Lanzarote',
      es: '— Según César Manrique, artista de Lanzarote',
    },
    historyTitle: {
      en: 'The artist who shaped an island',
      fr: "L'artiste qui façonna une île",
      es: 'El artista que dio forma a una isla',
    },
    historyBody: {
      en: [
        'Between 1730 and 1736 the volcanoes of Timanfaya buried a quarter of Lanzarote under fire, creating the lunar badlands the island is famous for.',
        'Two centuries later the painter César Manrique returned from New York determined to save his home from mass tourism. He banned billboards and high-rises and turned lava tubes, craters and cliffs into living art.',
        'His foundation at Tahíche, the Jameos del Agua and the Mirador del Río remain the soul of Lanzarote — proof that an island can grow without losing itself.',
      ],
      fr: [
        "Entre 1730 et 1736, les volcans de Timanfaya ensevelirent un quart de Lanzarote sous le feu, créant les badlands lunaires qui font la renommée de l'île.",
        "Deux siècles plus tard, le peintre César Manrique revint de New York, résolu à sauver son île du tourisme de masse. Il bannit les panneaux et les tours, et transforma tubes de lave, cratères et falaises en art vivant.",
        "Sa fondation de Tahíche, les Jameos del Agua et le Mirador del Río demeurent l'âme de Lanzarote — la preuve qu'une île peut grandir sans se perdre.",
      ],
      es: [
        'Entre 1730 y 1736 los volcanes de Timanfaya sepultaron un cuarto de Lanzarote bajo el fuego, creando los badlands lunares que han hecho famosa a la isla.',
        'Dos siglos después el pintor César Manrique volvió de Nueva York decidido a salvar su tierra del turismo de masas. Prohibió las vallas y los rascacielos y convirtió tubos de lava, cráteres y acantilados en arte vivo.',
        'Su fundación en Tahíche, los Jameos del Agua y el Mirador del Río siguen siendo el alma de Lanzarote — la prueba de que una isla puede crecer sin perderse.',
      ],
    },
    dates: [
      { year: '1730', label: { en: 'The great eruptions', fr: 'Les grandes éruptions', es: 'Las grandes erupciones' } },
      { year: '1968', label: { en: 'Manrique returns', fr: 'Retour de Manrique', es: 'Regreso de Manrique' } },
      { year: '1992', label: { en: 'The artist passes', fr: "Mort de l'artiste", es: 'Muere el artista' } },
    ],
    acts: [
      {
        title: { en: 'Taro de Tahíche', fr: 'Taro de Tahíche', es: 'Taro de Tahíche' },
        location: { en: "Manrique's lava house", fr: 'La maison de lave de Manrique', es: 'La casa de lava de Manrique' },
        description: {
          en: 'The artist built his home inside five volcanic bubbles. Count them, and the first door opens.',
          fr: "L'artiste bâtit sa maison dans cinq bulles volcaniques. Comptez-les, et la première porte s'ouvre.",
          es: 'El artista construyó su casa dentro de cinco burbujas volcánicas. Cuéntalas y la primera puerta se abre.',
        },
      },
      {
        title: { en: 'Jameos del Agua', fr: 'Jameos del Agua', es: 'Jameos del Agua' },
        location: { en: 'An auditorium in the lava', fr: 'Un auditorium dans la lave', es: 'Un auditorio en la lava' },
        description: {
          en: 'In a collapsed lava tube live tiny blind albino crabs. Their secret hides the next combination.',
          fr: "Dans un tube de lave effondré vivent de minuscules crabes aveugles et albinos. Leur secret recèle la combinaison suivante.",
          es: 'En un tubo de lava colapsado viven diminutos cangrejos ciegos y albinos. Su secreto guarda la siguiente combinación.',
        },
      },
      {
        title: { en: 'Mirador del Río', fr: 'Mirador del Río', es: 'Mirador del Río' },
        location: { en: 'The cliff balcony', fr: 'Le balcon de la falaise', es: 'El balcón del acantilado' },
        description: {
          en: 'Carved 400 m above the sea, this hidden lookout frames the islet of La Graciosa. Read the view to advance.',
          fr: "Creusé à 400 m au-dessus de la mer, ce belvédère caché encadre l'îlot de La Graciosa. Lisez le panorama pour avancer.",
          es: 'Excavado 400 m sobre el mar, este mirador oculto enmarca el islote de La Graciosa. Lee el paisaje para avanzar.',
        },
      },
      {
        title: { en: 'Montañas del Fuego', fr: 'Montañas del Fuego', es: 'Montañas del Fuego' },
        location: { en: 'Timanfaya', fr: 'Timanfaya', es: 'Timanfaya' },
        description: {
          en: 'Where the ground is still hot enough to burn straw, the final riddle reveals what Manrique fought to protect.',
          fr: "Là où le sol est encore assez chaud pour enflammer la paille, la dernière énigme révèle ce que Manrique lutta pour protéger.",
          es: 'Donde el suelo aún quema la paja, el último enigma revela lo que Manrique luchó por proteger.',
        },
      },
    ],
    features: [
      { icon: '🚗', title: { en: 'A road adventure', fr: 'Une aventure routière', es: 'Una aventura por carretera' }, description: { en: 'A full day crossing Lanzarote by car, from the north cliffs to the fire mountains.', fr: "Une journée entière à traverser Lanzarote en voiture, des falaises du nord aux montagnes de feu.", es: 'Una jornada entera cruzando Lanzarote en coche, de los acantilados del norte a las montañas de fuego.' } },
      { icon: '🌋', title: { en: 'Art inside the lava', fr: 'L\'art dans la lave', es: 'Arte dentro de la lava' }, description: { en: 'Every stop is a César Manrique masterpiece set in volcanic rock.', fr: 'Chaque étape est un chef-d\'œuvre de César Manrique serti dans la roche volcanique.', es: 'Cada parada es una obra maestra de César Manrique engastada en roca volcánica.' } },
      { icon: '⛰️', title: { en: 'Our biggest route', fr: 'Notre plus grand parcours', es: 'Nuestro mayor recorrido' }, description: { en: 'The longest and most spectacular game in the collection — make a day of it.', fr: 'Le jeu le plus long et le plus spectaculaire de la collection — prévoyez la journée.', es: 'El juego más largo y espectacular de la colección — dedícale el día.' } },
      { icon: '📱', title: { en: 'Play at your own pace', fr: 'À votre rythme', es: 'A tu propio ritmo' }, description: { en: 'No guide, no fixed time. Start when you want and pause whenever you like.', fr: 'Pas de guide, pas d\'horaire fixe. Commencez quand vous voulez et faites une pause à votre gré.', es: 'Sin guía, sin horario fijo. Empieza cuando quieras y haz una pausa cuando te apetezca.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '5h – 8h', fr: '5h – 8h', es: '5h – 8h' }, sub: { en: 'A full day', fr: 'Une journée', es: 'Una jornada' } },
      { icon: '🚗', label: { en: 'Getting around', fr: 'Déplacement', es: 'Desplazamiento' }, value: { en: 'By car', fr: 'En voiture', es: 'En coche' }, sub: { en: 'Car required', fr: 'Voiture requise', es: 'Coche necesario' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~40–60 km', fr: '~40–60 km', es: '~40–60 km' }, sub: { en: 'Across the island', fr: "À travers l'île", es: 'Por toda la isla' } },
      { icon: '🚩', label: { en: 'Start', fr: 'Départ', es: 'Inicio' }, value: { en: 'Taro de Tahíche', fr: 'Taro de Tahíche', es: 'Taro de Tahíche' }, sub: { en: 'Near Arrecife', fr: 'Près d\'Arrecife', es: 'Cerca de Arrecife' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Early start', fr: 'Départ matinal', es: 'Salida temprano' }, sub: { en: 'Beat the crowds', fr: 'Avant la foule', es: 'Antes de la multitud' } },
    ],
    motto: {
      en: 'The volcano destroys, the artist transforms.',
      fr: 'Le volcan détruit, l\'artiste transforme.',
      es: 'El volcán destruye, el artista transforma.',
    },
    mottoSub: {
      en: '— Manrique made beauty out of fire',
      fr: '— Manrique fit naître la beauté du feu',
      es: '— Manrique hizo belleza del fuego',
    },
    ctaBody: {
      en: 'Cross the island Manrique saved, descend into lava tubes, stand on the fire mountains, and uncover how one artist turned a volcano into a masterpiece. The road is yours.',
      fr: "Traversez l'île que Manrique a sauvée, descendez dans les tubes de lave, tenez-vous sur les montagnes de feu, et découvrez comment un artiste fit d'un volcan un chef-d'œuvre. La route est à vous.",
      es: 'Cruza la isla que Manrique salvó, baja a los tubos de lava, pisa las montañas de fuego y descubre cómo un artista convirtió un volcán en una obra maestra. La carretera es tuya.',
    },
    stickyMessage: {
      en: "It's your turn! Drive across Lanzarote on the trail of César Manrique, from his lava house to the fire mountains of Timanfaya.",
      fr: "À toi de jouer ! Traverse Lanzarote en voiture sur la piste de César Manrique, de sa maison de lave aux montagnes de feu de Timanfaya.",
      es: '¡Te toca a ti! Recorre Lanzarote en coche tras la pista de César Manrique, de su casa de lava a las montañas de fuego de Timanfaya.',
    },
  },
  {
    slug: 'le-tresor-de-teguise',
    image: '/images/escapes/le-tresor-de-teguise.webp',
    island: 'Lanzarote',
    islandId: 'lanzarote',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 1,
    accentColor: '#c9a24b',
    subtitle: {
      en: 'The old royal capital',
      fr: 'L\'ancienne capitale royale',
      es: 'La antigua capital real',
    },
    title: {
      en: 'The Treasure of Teguise',
      fr: 'Le Trésor de Teguise',
      es: 'El Tesoro de Teguise',
    },
    tagline: {
      en: 'A poem engraved in copper, the last heir of a noble line, and a treasure buried before the pirates came. Teguise kept the secret. Will you?',
      fr: "Un poème gravé dans le cuivre, le dernier héritier d'une lignée noble, et un trésor enfoui avant l'arrivée des pirates. Teguise a gardé le secret. Et vous ?",
      es: 'Un poema grabado en cobre, el último heredero de un linaje noble y un tesoro enterrado antes de que llegaran los piratas. Teguise guardó el secreto. ¿Y tú?',
    },
    location: { en: 'Teguise', fr: 'Teguise', es: 'Teguise' },
    intro: {
      en: 'The white town of the interior',
      fr: 'La ville blanche de l\'intérieur',
      es: 'El pueblo blanco del interior',
    },
    introBody: {
      en: 'Hidden inland to escape the corsairs, Teguise was the capital of Lanzarote for four centuries. Its whitewashed lanes, noble palaces and the church of Guadalupe form a compact, perfectly flat board — ideal for families and younger players. This gentle hunt follows a buried treasure and the poem that points to it.',
      fr: "Caché à l'intérieur des terres pour échapper aux corsaires, Teguise fut la capitale de Lanzarote pendant quatre siècles. Ses ruelles blanchies, ses palais nobles et l'église de Guadalupe forment un plateau compact et parfaitement plat — idéal pour les familles et les plus jeunes. Cette chasse en douceur suit un trésor enfoui et le poème qui le désigne.",
      es: 'Escondido tierra adentro para escapar de los corsarios, Teguise fue la capital de Lanzarote durante cuatro siglos. Sus callejones encalados, sus palacios nobles y la iglesia de Guadalupe forman un tablero compacto y perfectamente llano — ideal para familias y los más pequeños. Esta búsqueda suave sigue un tesoro enterrado y el poema que lo señala.',
    },
    quote: {
      en: '"They moved the capital inland, far from the sea — and still the pirates climbed the hill to find it."',
      fr: '« Ils déplacèrent la capitale dans les terres, loin de la mer — et pourtant les pirates gravirent la colline pour la trouver. »',
      es: '"Movieron la capital tierra adentro, lejos del mar — y aun así los piratas subieron la colina para encontrarla."',
    },
    quoteAttr: {
      en: '— On the raids of Teguise',
      fr: '— Sur les raids de Teguise',
      es: '— Sobre los ataques a Teguise',
    },
    historyTitle: {
      en: 'A capital that hid from the sea',
      fr: 'Une capitale qui se cachait de la mer',
      es: 'Una capital que se escondía del mar',
    },
    historyBody: {
      en: [
        'Teguise was founded in the 15th century by the Norman conquerors and named after a princess of the native Majos people.',
        'Built far from the coast, it still suffered terrible raids — Berber and pirate fleets stormed the town and dragged hundreds into slavery, leaving the lane known as the Callejón de la Sangre.',
        'Watched over by the castle of Santa Bárbara on its volcano, Teguise stayed the island capital until 1852, and remains the best-preserved historic town in Lanzarote.',
      ],
      fr: [
        "Teguise fut fondée au XVe siècle par les conquérants normands et nommée d'après une princesse du peuple indigène majo.",
        "Bâtie loin de la côte, elle subit pourtant de terribles raids — des flottes berbères et pirates prirent la ville d'assaut et emmenèrent des centaines de captifs en esclavage, laissant la ruelle dite Callejón de la Sangre.",
        "Veillée par le château de Santa Bárbara sur son volcan, Teguise resta capitale de l'île jusqu'en 1852 et demeure la cité historique la mieux préservée de Lanzarote.",
      ],
      es: [
        'Teguise fue fundada en el siglo XV por los conquistadores normandos y nombrada por una princesa del pueblo indígena majo.',
        'Construida lejos de la costa, sufrió aun así terribles ataques — flotas berberiscas y piratas asaltaron la villa y se llevaron a cientos a la esclavitud, dejando el llamado Callejón de la Sangre.',
        'Vigilada por el castillo de Santa Bárbara sobre su volcán, Teguise siguió siendo capital de la isla hasta 1852 y es el casco histórico mejor conservado de Lanzarote.',
      ],
    },
    dates: [
      { year: '1400s', label: { en: 'Town founded', fr: 'Fondation de la ville', es: 'Fundación de la villa' } },
      { year: '1586', label: { en: 'The great raid', fr: 'Le grand raid', es: 'El gran ataque' } },
      { year: '1852', label: { en: 'Capital moves to Arrecife', fr: 'La capitale part à Arrecife', es: 'La capital pasa a Arrecife' } },
    ],
    acts: [
      {
        title: { en: 'Iglesia de Guadalupe', fr: 'Iglesia de Guadalupe', es: 'Iglesia de Guadalupe' },
        location: { en: 'The main square', fr: 'La place principale', es: 'La plaza mayor' },
        description: {
          en: 'On the façade of the old church, find the carved year that starts the poem.',
          fr: "Sur la façade de la vieille église, trouvez l'année gravée qui ouvre le poème.",
          es: 'En la fachada de la vieja iglesia, encuentra el año tallado que inicia el poema.',
        },
      },
      {
        title: { en: 'Palacio Spínola', fr: 'Palacio Spínola', es: 'Palacio Spínola' },
        location: { en: 'A noble house', fr: 'Une maison noble', es: 'Una casa noble' },
        description: {
          en: 'Inside the patio of a Genoese merchant family, a clue waits among the family coats of arms.',
          fr: "Dans le patio d'une famille de marchands génois, un indice attend parmi les blasons.",
          es: 'En el patio de una familia de mercaderes genoveses, una pista espera entre los escudos.',
        },
      },
      {
        title: { en: 'Callejón de la Sangre', fr: 'Callejón de la Sangre', es: 'Callejón de la Sangre' },
        location: { en: 'The alley of memory', fr: 'La ruelle du souvenir', es: 'El callejón de la memoria' },
        description: {
          en: 'The narrow lane recalls the darkest day of the town. Read its name to find where the heir fled.',
          fr: "L'étroite ruelle rappelle le jour le plus sombre de la ville. Lisez son nom pour savoir où l'héritier s'enfuit.",
          es: 'El estrecho callejón recuerda el día más oscuro de la villa. Lee su nombre para saber adónde huyó el heredero.',
        },
      },
      {
        title: { en: 'Castillo de Santa Bárbara', fr: 'Castillo de Santa Bárbara', es: 'Castillo de Santa Bárbara' },
        location: { en: 'The volcano fortress', fr: 'La forteresse du volcan', es: 'La fortaleza del volcán' },
        description: {
          en: 'High on the Guanapay crater, the last verse of the poem reveals where the treasure lies.',
          fr: "Tout en haut du cratère de Guanapay, le dernier vers du poème révèle où repose le trésor.",
          es: 'En lo alto del cráter de Guanapay, el último verso del poema revela dónde yace el tesoro.',
        },
      },
    ],
    features: [
      { icon: '💰', title: { en: 'A treasure hunt', fr: 'Une chasse au trésor', es: 'Una caza del tesoro' }, description: { en: 'A classic buried-treasure story, ideal for a first escape game.', fr: 'Une histoire classique de trésor enfoui, idéale pour un premier escape game.', es: 'Una historia clásica de tesoro enterrado, ideal para un primer escape game.' } },
      { icon: '👶', title: { en: 'Easiest route', fr: 'Le parcours le plus facile', es: 'El recorrido más fácil' }, description: { en: 'Flat, short and gentle — the perfect game for younger children.', fr: 'Plat, court et doux — le jeu parfait pour les plus jeunes.', es: 'Llano, corto y suave — el juego perfecto para los más pequeños.' } },
      { icon: '🤍', title: { en: 'A white-walled gem', fr: 'Un joyau aux murs blancs', es: 'Una joya de muros blancos' }, description: { en: 'You explore the best-preserved historic town of Lanzarote.', fr: 'Vous explorez la cité historique la mieux préservée de Lanzarote.', es: 'Exploras el casco histórico mejor conservado de Lanzarote.' } },
      { icon: '📱', title: { en: 'Play at your own pace', fr: 'À votre rythme', es: 'A tu propio ritmo' }, description: { en: 'No guide, no fixed time. Start when you want and pause whenever you like.', fr: 'Pas de guide, pas d\'horaire fixe. Commencez quand vous voulez et faites une pause à votre gré.', es: 'Sin guía, sin horario fijo. Empieza cuando quieras y haz una pausa cuando te apetezca.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '1h30 – 2h', fr: '1h30 – 2h', es: '1h30 – 2h' }, sub: { en: 'Self-paced', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 7', fr: 'Dès 7 ans', es: 'Desde 7 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~2 km', fr: '~2 km', es: '~2 km' }, sub: { en: 'Flat & compact', fr: 'Plat & compact', es: 'Llano y compacto' } },
      { icon: '🚩', label: { en: 'Start', fr: 'Départ', es: 'Inicio' }, value: { en: 'Iglesia de Guadalupe', fr: 'Iglesia de Guadalupe', es: 'Iglesia de Guadalupe' }, sub: { en: 'Teguise', fr: 'Teguise', es: 'Teguise' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '🛒', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Sunday', fr: 'Dimanche', es: 'Domingo' }, sub: { en: 'Famous market day', fr: 'Jour du célèbre marché', es: 'Día del famoso mercado' } },
    ],
    motto: {
      en: 'The best hiding place is the one everyone walks past.',
      fr: 'La meilleure cachette est celle devant laquelle tout le monde passe.',
      es: 'El mejor escondite es el que todos pasan de largo.',
    },
    mottoSub: {
      en: '— Teguise hid its treasure in plain sight',
      fr: '— Teguise cacha son trésor en pleine vue',
      es: '— Teguise escondió su tesoro a plena vista',
    },
    ctaBody: {
      en: 'Wander the white lanes of the old capital, decode the copper poem, and follow the last heir to a treasure hidden before the pirates came. Teguise is ready for you.',
      fr: "Parcourez les ruelles blanches de l'ancienne capitale, décodez le poème de cuivre, et suivez le dernier héritier jusqu'à un trésor caché avant l'arrivée des pirates. Teguise vous attend.",
      es: 'Recorre los callejones blancos de la antigua capital, descifra el poema de cobre y sigue al último heredero hasta un tesoro escondido antes de que llegaran los piratas. Teguise te espera.',
    },
    stickyMessage: {
      en: "It's your turn! Explore Teguise, the old capital of Lanzarote, and follow the copper poem to a treasure hidden from the pirates.",
      fr: "À toi de jouer ! Explore Teguise, l'ancienne capitale de Lanzarote, et suis le poème de cuivre jusqu'à un trésor caché des pirates.",
      es: '¡Te toca a ti! Explora Teguise, la antigua capital de Lanzarote, y sigue el poema de cobre hasta un tesoro escondido de los piratas.',
    },
  },

  // ════════════════════════════════════════════════════════════════
  //  FUERTEVENTURA
  // ════════════════════════════════════════════════════════════════
  {
    slug: 'la-conquete-normande',
    image: '/images/escapes/la-conquete-normande.webp',
    island: 'Fuerteventura',
    islandId: 'fuerteventura',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 2,
    accentColor: '#c9a24b',
    subtitle: {
      en: 'Where the conquest of the Canaries began',
      fr: 'Là où commença la conquête des Canaries',
      es: 'Donde empezó la conquista de Canarias',
    },
    title: {
      en: 'The Norman Conquest',
      fr: 'La Conquête Normande',
      es: 'La Conquista Normanda',
    },
    tagline: {
      en: 'In 1402 a Norman knight crowned himself king of an island that was not his. His first capital still hides the proof in its valley.',
      fr: "En 1402, un chevalier normand se couronna roi d'une île qui n'était pas la sienne. Sa première capitale en cache encore la preuve dans sa vallée.",
      es: 'En 1402 un caballero normando se coronó rey de una isla que no era suya. Su primera capital aún esconde la prueba en su valle.',
    },
    location: { en: 'Betancuria', fr: 'Betancuria', es: 'Betancuria' },
    intro: {
      en: 'The first capital of the Canaries',
      fr: 'La première capitale des Canaries',
      es: 'La primera capital de Canarias',
    },
    introBody: {
      en: 'Tucked into a green volcanic valley to shelter from pirates, Betancuria was the very first European capital of the archipelago. Its church, convent ruins and silent lanes still breathe the year 1402. This game leads you through the cradle of the conquest, on the trail of the Norman who started it all.',
      fr: "Nichée dans une verte vallée volcanique pour s'abriter des pirates, Betancuria fut la toute première capitale européenne de l'archipel. Son église, ses ruines de couvent et ses ruelles silencieuses respirent encore l'an 1402. Ce jeu vous conduit à travers le berceau de la conquête, sur la piste du Normand qui déclencha tout.",
      es: 'Encajada en un verde valle volcánico para resguardarse de los piratas, Betancuria fue la primerísima capital europea del archipiélago. Su iglesia, las ruinas de su convento y sus callejones silenciosos aún respiran el año 1402. Este juego te lleva por la cuna de la conquista, tras la pista del normando que lo empezó todo.',
    },
    quote: {
      en: '"He came with a hundred men and a papal blessing, and from this valley he set out to take the islands one by one."',
      fr: '« Il vint avec une centaine d\'hommes et une bénédiction papale, et de cette vallée il partit prendre les îles une à une. »',
      es: '"Vino con un centenar de hombres y una bendición papal, y desde este valle salió a tomar las islas una por una."',
    },
    quoteAttr: {
      en: '— On Jean de Béthencourt, 1402',
      fr: '— Sur Jean de Béthencourt, 1402',
      es: '— Sobre Jean de Béthencourt, 1402',
    },
    historyTitle: {
      en: 'A Norman king in the Atlantic',
      fr: 'Un roi normand dans l\'Atlantique',
      es: 'Un rey normando en el Atlántico',
    },
    historyBody: {
      en: [
        'In 1402 the Norman lord Jean de Béthencourt and the Gascon Gadifer de la Salle landed on Fuerteventura to conquer it in the name of Castile.',
        'They founded Betancuria deep in the hills, raised a chapel and a fort, and slowly subdued the native Majos who had lived on the island for centuries.',
        'From this small valley the campaign spread across the whole archipelago — the beginning of the long, hard conquest of the Canaries that would end only in 1496.',
      ],
      fr: [
        "En 1402, le seigneur normand Jean de Béthencourt et le Gascon Gadifer de la Salle débarquèrent à Fuerteventura pour la conquérir au nom de la Castille.",
        "Ils fondèrent Betancuria au creux des collines, élevèrent une chapelle et un fort, et soumirent peu à peu les Majos indigènes qui vivaient là depuis des siècles.",
        "De cette petite vallée, la campagne s'étendit à tout l'archipel — le début de la longue et rude conquête des Canaries, qui ne s'acheva qu'en 1496.",
      ],
      es: [
        'En 1402 el señor normando Jean de Béthencourt y el gascón Gadifer de la Salle desembarcaron en Fuerteventura para conquistarla en nombre de Castilla.',
        'Fundaron Betancuria en lo hondo de las colinas, levantaron una capilla y un fuerte, y sometieron poco a poco a los majos indígenas que vivían allí desde hacía siglos.',
        'Desde este pequeño valle la campaña se extendió a todo el archipiélago — el inicio de la larga y dura conquista de Canarias, que no terminó hasta 1496.',
      ],
    },
    dates: [
      { year: '1402', label: { en: 'Béthencourt lands', fr: 'Débarquement de Béthencourt', es: 'Desembarca Béthencourt' } },
      { year: '1404', label: { en: 'Betancuria founded', fr: 'Fondation de Betancuria', es: 'Se funda Betancuria' } },
      { year: '1593', label: { en: 'Sacked by corsairs', fr: 'Pillée par les corsaires', es: 'Saqueada por corsarios' } },
    ],
    acts: [
      {
        title: { en: 'Iglesia de Santa María', fr: 'Iglesia de Santa María', es: 'Iglesia de Santa María' },
        location: { en: 'The first cathedral', fr: 'La première cathédrale', es: 'La primera catedral' },
        description: {
          en: 'On the church that crowned the conquest, find the carved emblem that begins your quest.',
          fr: "Sur l'église qui couronna la conquête, trouvez l'emblème sculpté qui ouvre votre quête.",
          es: 'En la iglesia que coronó la conquista, encuentra el emblema tallado que abre tu búsqueda.',
        },
      },
      {
        title: { en: 'Casa Santa María', fr: 'Casa Santa María', es: 'Casa Santa María' },
        location: { en: 'The old manor', fr: 'Le vieux manoir', es: 'La vieja casona' },
        description: {
          en: 'In the courtyard of a traditional Majorero house, decode the tools of the first settlers.',
          fr: "Dans la cour d'une maison majorera traditionnelle, déchiffrez les outils des premiers colons.",
          es: 'En el patio de una casa majorera tradicional, descifra los aperos de los primeros colonos.',
        },
      },
      {
        title: { en: 'Convento de San Buenaventura', fr: 'Convento de San Buenaventura', es: 'Convento de San Buenaventura' },
        location: { en: 'The Franciscan ruins', fr: 'Les ruines franciscaines', es: 'Las ruinas franciscanas' },
        description: {
          en: 'Among the roofless arches of the first convent in the Canaries, a clue hides in the broken stone.',
          fr: "Parmi les arches à ciel ouvert du premier couvent des Canaries, un indice se cache dans la pierre brisée.",
          es: 'Entre los arcos sin techo del primer convento de Canarias, una pista se esconde en la piedra rota.',
        },
      },
      {
        title: { en: 'Mirador de Betancuria', fr: 'Mirador de Betancuria', es: 'Mirador de Betancuria' },
        location: { en: 'The valley lookout', fr: 'Le belvédère de la vallée', es: 'El mirador del valle' },
        description: {
          en: 'Above the town, where the Majos once watched for invaders, the final riddle closes the conquest.',
          fr: "Au-dessus de la ville, là où les Majos guettaient les envahisseurs, la dernière énigme referme la conquête.",
          es: 'Sobre el pueblo, donde los majos vigilaban a los invasores, el último enigma cierra la conquista.',
        },
      },
    ],
    features: [
      { icon: '⚔️', title: { en: 'The start of it all', fr: 'L\'origine de tout', es: 'El origen de todo' }, description: { en: 'You walk the cradle of the entire conquest of the Canary Islands.', fr: 'Vous foulez le berceau de toute la conquête des îles Canaries.', es: 'Recorres la cuna de toda la conquista de las islas Canarias.' } },
      { icon: '⛪', title: { en: 'A village frozen in time', fr: 'Un village hors du temps', es: 'Un pueblo detenido en el tiempo' }, description: { en: 'Betancuria is one of the most beautiful and peaceful towns in the Canaries.', fr: 'Betancuria est l\'un des villages les plus beaux et paisibles des Canaries.', es: 'Betancuria es uno de los pueblos más bellos y tranquilos de Canarias.' } },
      { icon: '👨‍👩‍👧', title: { en: 'Family friendly', fr: 'Pour toute la famille', es: 'Para toda la familia' }, description: { en: 'Short, quiet and safe — easy to play with children.', fr: 'Court, calme et sûr — facile à jouer avec des enfants.', es: 'Corto, tranquilo y seguro — fácil de jugar con niños.' } },
      { icon: '📱', title: { en: 'Play at your own pace', fr: 'À votre rythme', es: 'A tu propio ritmo' }, description: { en: 'No guide, no fixed time. Start when you want and pause whenever you like.', fr: 'Pas de guide, pas d\'horaire fixe. Commencez quand vous voulez et faites une pause à votre gré.', es: 'Sin guía, sin horario fijo. Empieza cuando quieras y haz una pausa cuando te apetezca.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '1h30 – 2h', fr: '1h30 – 2h', es: '1h30 – 2h' }, sub: { en: 'Self-paced', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 7', fr: 'Dès 7 ans', es: 'Desde 7 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~2 km', fr: '~2 km', es: '~2 km' }, sub: { en: 'Compact route', fr: 'Parcours compact', es: 'Recorrido compacto' } },
      { icon: '🚩', label: { en: 'Start', fr: 'Départ', es: 'Inicio' }, value: { en: 'Iglesia de Santa María', fr: 'Iglesia de Santa María', es: 'Iglesia de Santa María' }, sub: { en: 'Betancuria', fr: 'Betancuria', es: 'Betancuria' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Morning', fr: 'Matin', es: 'Mañana' }, sub: { en: 'Cooler valley', fr: 'Vallée plus fraîche', es: 'Valle más fresco' } },
    ],
    motto: {
      en: 'Every empire begins in a small valley.',
      fr: 'Tout empire commence dans une petite vallée.',
      es: 'Todo imperio empieza en un pequeño valle.',
    },
    mottoSub: {
      en: '— and the Canaries began here',
      fr: '— et les Canaries commencèrent ici',
      es: '— y Canarias empezó aquí',
    },
    ctaBody: {
      en: 'Walk the first capital of the Canaries, decode the relics of the Norman conquest, and discover how the taking of the islands began in this quiet green valley. Betancuria awaits.',
      fr: "Arpentez la première capitale des Canaries, décodez les reliques de la conquête normande, et découvrez comment la prise des îles commença dans cette paisible vallée verte. Betancuria vous attend.",
      es: 'Recorre la primera capital de Canarias, descifra las reliquias de la conquista normanda y descubre cómo empezó la toma de las islas en este tranquilo valle verde. Betancuria te espera.',
    },
    stickyMessage: {
      en: "It's your turn! Explore Betancuria, the first capital of the Canaries, on the trail of Jean de Béthencourt and the Norman conquest of 1402.",
      fr: "À toi de jouer ! Explore Betancuria, la première capitale des Canaries, sur la piste de Jean de Béthencourt et de la conquête normande de 1402.",
      es: '¡Te toca a ti! Explora Betancuria, la primera capital de Canarias, tras la pista de Jean de Béthencourt y la conquista normanda de 1402.',
    },
  },
  {
    slug: 'les-sculptures-du-vent',
    image: '/images/escapes/les-sculptures-du-vent.webp',
    island: 'Fuerteventura',
    islandId: 'fuerteventura',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 2,
    accentColor: '#c9a24b',
    subtitle: {
      en: 'An open-air museum of the wind',
      fr: 'Un musée à ciel ouvert du vent',
      es: 'Un museo al aire libre del viento',
    },
    title: {
      en: 'Sculptures of the Wind',
      fr: 'Les Sculptures du Vent',
      es: 'Esculturas del Viento',
    },
    tagline: {
      en: 'Scattered across the capital, dozens of sculptures spell out a message only the wind was meant to read. Can you decode it before it blows away?',
      fr: "Disséminées dans la capitale, des dizaines de sculptures épellent un message que seul le vent devait lire. Saurez-vous le décoder avant qu'il ne s'envole ?",
      es: 'Repartidas por la capital, decenas de esculturas deletrean un mensaje que solo el viento debía leer. ¿Sabrás descifrarlo antes de que se lo lleve?',
    },
    location: { en: 'Puerto del Rosario', fr: 'Puerto del Rosario', es: 'Puerto del Rosario' },
    intro: {
      en: 'The city that became a gallery',
      fr: 'La ville devenue galerie',
      es: 'La ciudad que se hizo galería',
    },
    introBody: {
      en: 'Once a humble harbour, Puerto del Rosario reinvented itself as an open-air museum, scattering more than a hundred sculptures through its streets and seafront. The wind that shaped Fuerteventura is the hidden theme. This game turns the capital into a trail of art, history and exile — including the house where a famous writer was banished.',
      fr: "Jadis humble port, Puerto del Rosario s'est réinventée en musée à ciel ouvert, semant plus d'une centaine de sculptures dans ses rues et sur son front de mer. Le vent qui a façonné Fuerteventura en est le thème caché. Ce jeu transforme la capitale en un sentier d'art, d'histoire et d'exil — jusqu'à la maison où un célèbre écrivain fut banni.",
      es: 'Antes un humilde puerto, Puerto del Rosario se reinventó como museo al aire libre, sembrando más de cien esculturas por sus calles y su paseo marítimo. El viento que dio forma a Fuerteventura es el tema oculto. Este juego convierte la capital en un sendero de arte, historia y destierro — incluida la casa donde un célebre escritor fue desterrado.',
    },
    quote: {
      en: '"On Fuerteventura the wind is not weather — it is the sculptor of everything, the dunes, the stone and the soul."',
      fr: '« À Fuerteventura le vent n\'est pas un temps — il est le sculpteur de tout, des dunes, de la pierre et de l\'âme. »',
      es: '"En Fuerteventura el viento no es un clima — es el escultor de todo, las dunas, la piedra y el alma."',
    },
    quoteAttr: {
      en: '— On the island of the wind',
      fr: '— Sur l\'île du vent',
      es: '— Sobre la isla del viento',
    },
    historyTitle: {
      en: 'A harbour, an exile and a hundred sculptures',
      fr: 'Un port, un exil et cent sculptures',
      es: 'Un puerto, un destierro y cien esculturas',
    },
    historyBody: {
      en: [
        'Founded as Puerto de Cabras, the town grew slowly around a poor anchorage on the windward coast and became the island capital in 1860.',
        'In 1924 the writer and philosopher Miguel de Unamuno was exiled here by the dictatorship; he fell for the stark, wind-carved landscape and made the island famous in his pages.',
        'In recent decades the city has filled its streets with open-air sculpture, turning a once-overlooked port into a permanent gallery of the Majorero wind.',
      ],
      fr: [
        "Fondée sous le nom de Puerto de Cabras, la ville grandit lentement autour d'un pauvre mouillage sur la côte au vent et devint capitale de l'île en 1860.",
        "En 1924, l'écrivain et philosophe Miguel de Unamuno y fut exilé par la dictature ; il s'éprit du paysage âpre, sculpté par le vent, et rendit l'île célèbre dans ses écrits.",
        "Ces dernières décennies, la ville a empli ses rues de sculptures en plein air, transformant un port longtemps négligé en galerie permanente du vent majorero.",
      ],
      es: [
        'Fundada como Puerto de Cabras, la ciudad creció despacio en torno a un pobre fondeadero en la costa de barlovento y se convirtió en capital de la isla en 1860.',
        'En 1924 el escritor y filósofo Miguel de Unamuno fue desterrado aquí por la dictadura; se enamoró del paisaje áspero, tallado por el viento, e hizo famosa la isla en sus páginas.',
        'En las últimas décadas la ciudad ha llenado sus calles de escultura al aire libre, convirtiendo un puerto antes olvidado en galería permanente del viento majorero.',
      ],
    },
    dates: [
      { year: '1860', label: { en: 'Becomes island capital', fr: 'Devient capitale de l\'île', es: 'Se convierte en capital' } },
      { year: '1924', label: { en: 'Unamuno exiled here', fr: 'Unamuno y est exilé', es: 'Unamuno desterrado aquí' } },
      { year: '2000s', label: { en: 'The sculpture trail', fr: 'Le sentier des sculptures', es: 'El sendero de esculturas' } },
    ],
    acts: [
      {
        title: { en: 'The harbour front', fr: 'Le front de mer', es: 'El frente portuario' },
        location: { en: 'Where the wind arrives', fr: 'Là où arrive le vent', es: 'Donde llega el viento' },
        description: {
          en: 'Among the seafront sculptures, find the one that points inland and note the direction it gives.',
          fr: "Parmi les sculptures du bord de mer, trouvez celle qui pointe vers les terres et notez la direction qu'elle indique.",
          es: 'Entre las esculturas del paseo, encuentra la que apunta tierra adentro y anota la dirección que da.',
        },
      },
      {
        title: { en: 'Casa Museo Unamuno', fr: 'Casa Museo Unamuno', es: 'Casa Museo Unamuno' },
        location: { en: "The exile's house", fr: 'La maison de l\'exilé', es: 'La casa del desterrado' },
        description: {
          en: 'In the hotel room where the writer lived in exile, a line of his verse holds the next key.',
          fr: "Dans la chambre d'hôtel où l'écrivain vécut en exil, un vers de sa main renferme la clé suivante.",
          es: 'En la habitación de hotel donde vivió desterrado el escritor, un verso suyo guarda la siguiente clave.',
        },
      },
      {
        title: { en: 'Iglesia de Nuestra Señora del Rosario', fr: 'Iglesia de Nuestra Señora del Rosario', es: 'Iglesia de Nuestra Señora del Rosario' },
        location: { en: 'The mother church', fr: 'L\'église mère', es: 'La iglesia matriz' },
        description: {
          en: 'On the church that gave the city its name, a date completes part of the wind-message.',
          fr: "Sur l'église qui donna son nom à la ville, une date complète une partie du message du vent.",
          es: 'En la iglesia que dio nombre a la ciudad, una fecha completa parte del mensaje del viento.',
        },
      },
      {
        title: { en: 'Parque Escultórico', fr: 'Parque Escultórico', es: 'Parque Escultórico' },
        location: { en: 'The sculpture park', fr: 'Le parc des sculptures', es: 'El parque de esculturas' },
        description: {
          en: 'Reading the sculptures in the right order, the final riddle spells out the artist\'s hidden message.',
          fr: "En lisant les sculptures dans le bon ordre, la dernière énigme révèle le message caché de l'artiste.",
          es: 'Leyendo las esculturas en el orden correcto, el último enigma deletrea el mensaje oculto del artista.',
        },
      },
    ],
    features: [
      { icon: '🌬️', title: { en: 'Art all around you', fr: 'L\'art tout autour', es: 'Arte por todas partes' }, description: { en: 'You play among more than a hundred open-air sculptures.', fr: 'Vous jouez parmi plus d\'une centaine de sculptures en plein air.', es: 'Juegas entre más de cien esculturas al aire libre.' } },
      { icon: '📖', title: { en: 'A writer in exile', fr: 'Un écrivain en exil', es: 'Un escritor desterrado' }, description: { en: 'The trail visits the house of Miguel de Unamuno, banished to the island in 1924.', fr: 'Le parcours passe par la maison de Miguel de Unamuno, exilé sur l\'île en 1924.', es: 'El recorrido pasa por la casa de Miguel de Unamuno, desterrado a la isla en 1924.' } },
      { icon: '🌊', title: { en: 'Sea & city', fr: 'Mer & ville', es: 'Mar y ciudad' }, description: { en: 'A flat route from the harbour front through the lively capital.', fr: 'Un parcours plat du front de mer à travers la capitale animée.', es: 'Un recorrido llano del frente portuario por la animada capital.' } },
      { icon: '📱', title: { en: 'Play at your own pace', fr: 'À votre rythme', es: 'A tu propio ritmo' }, description: { en: 'No guide, no fixed time. Start when you want and pause whenever you like.', fr: 'Pas de guide, pas d\'horaire fixe. Commencez quand vous voulez et faites une pause à votre gré.', es: 'Sin guía, sin horario fijo. Empieza cuando quieras y haz una pausa cuando te apetezca.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '1h30 – 2h', fr: '1h30 – 2h', es: '1h30 – 2h' }, sub: { en: 'Self-paced', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~2 km', fr: '~2 km', es: '~2 km' }, sub: { en: 'Flat & urban', fr: 'Plat & urbain', es: 'Llano y urbano' } },
      { icon: '🚩', label: { en: 'Start', fr: 'Départ', es: 'Inicio' }, value: { en: 'Harbour front', fr: 'Front de mer', es: 'Frente portuario' }, sub: { en: 'Puerto del Rosario', fr: 'Puerto del Rosario', es: 'Puerto del Rosario' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Late afternoon', fr: 'Fin d\'après-midi', es: 'Media tarde' }, sub: { en: 'Soft light', fr: 'Lumière douce', es: 'Luz suave' } },
    ],
    motto: {
      en: 'The wind writes; only the patient read.',
      fr: 'Le vent écrit ; seuls les patients lisent.',
      es: 'El viento escribe; solo los pacientes leen.',
    },
    mottoSub: {
      en: '— the message was here all along',
      fr: '— le message était là depuis toujours',
      es: '— el mensaje estuvo aquí desde siempre',
    },
    ctaBody: {
      en: 'Follow the sculptures from the harbour to the writer\'s house, decode the message of the wind, and discover the capital that turned itself into a museum. The trail is yours.',
      fr: "Suivez les sculptures du port jusqu'à la maison de l'écrivain, décodez le message du vent, et découvrez la capitale qui s'est faite musée. Le sentier est à vous.",
      es: 'Sigue las esculturas del puerto hasta la casa del escritor, descifra el mensaje del viento y descubre la capital que se convirtió en museo. El sendero es tuyo.',
    },
    stickyMessage: {
      en: "It's your turn! Decode the message of the wind through the open-air sculptures of Puerto del Rosario, from the harbour to Unamuno's house.",
      fr: "À toi de jouer ! Décode le message du vent à travers les sculptures en plein air de Puerto del Rosario, du port à la maison d'Unamuno.",
      es: '¡Te toca a ti! Descifra el mensaje del viento por las esculturas al aire libre de Puerto del Rosario, del puerto a la casa de Unamuno.',
    },
  },
];

export const escapeIslands: { id: IslandId; emoji: string; name: Record<string, string>; tagline: Record<string, string> }[] = [
  {
    id: 'gran-canaria',
    emoji: '🏝️',
    name: { en: 'Gran Canaria', es: 'Gran Canaria', fr: 'Gran Canaria', de: 'Gran Canaria', nl: 'Gran Canaria', it: 'Gran Canaria' },
    tagline: {
      en: 'From Vegueta to the aboriginal traces',
      es: 'De Vegueta a las huellas aborígenes',
      fr: 'De Vegueta aux traces aborigènes',
      de: 'Von Vegueta zu den Spuren der Ureinwohner',
      nl: 'Van Vegueta tot de sporen van de oorspronkelijke bewoners',
      it: 'Da Vegueta alle tracce aborigene',
    },
  },
  {
    id: 'lanzarote',
    emoji: '🌋',
    name: { en: 'Lanzarote', es: 'Lanzarote', fr: 'Lanzarote', de: 'Lanzarote', nl: 'Lanzarote', it: 'Lanzarote' },
    tagline: {
      en: 'Volcanic landscapes and the Manrique legacy',
      es: 'Paisajes volcánicos y el legado de Manrique',
      fr: 'Paysages volcaniques et héritage de Manrique',
      de: 'Vulkanlandschaften und das Erbe von Manrique',
      nl: 'Vulkanische landschappen en de erfenis van Manrique',
      it: 'Paesaggi vulcanici e l’eredità di Manrique',
    },
  },
  {
    id: 'fuerteventura',
    emoji: '🏜️',
    name: { en: 'Fuerteventura', es: 'Fuerteventura', fr: 'Fuerteventura', de: 'Fuerteventura', nl: 'Fuerteventura', it: 'Fuerteventura' },
    tagline: {
      en: 'Betancuria and the Norman conquest',
      es: 'Betancuria y la conquista normanda',
      fr: 'Betancuria et la conquête normande',
      de: 'Betancuria und die normannische Eroberung',
      nl: 'Betancuria en de Normandische verovering',
      it: 'Betancuria e la conquista normanna',
    },
  },
];

export function getEscapeGameBySlug(slug: string): EscapeGameData | undefined {
  return escapeGamesData.find((g) => g.slug === slug);
}

export function getAllEscapeGameSlugs(): string[] {
  return escapeGamesData.map((g) => g.slug);
}

export function getEscapeGamesByIslandId(islandId: IslandId): EscapeGameData[] {
  return escapeGamesData.filter((g) => (g.islandId ?? 'tenerife') === islandId);
}
