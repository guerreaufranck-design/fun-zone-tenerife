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
];

export function getEscapeGameBySlug(slug: string): EscapeGameData | undefined {
  return escapeGamesData.find((g) => g.slug === slug);
}

export function getAllEscapeGameSlugs(): string[] {
  return escapeGamesData.map((g) => g.slug);
}
