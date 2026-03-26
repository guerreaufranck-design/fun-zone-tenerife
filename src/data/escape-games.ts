export interface EscapeAct {
  title: Record<string, string>;
  location: Record<string, string>;
  description: Record<string, string>;
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
  motto: Record<string, string>;
  mottoSub: Record<string, string>;
  ctaBody: Record<string, string>;
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
    duration: '1h – 1h30',
    distance: '~2.5 km',
    difficulty: 3,
    subtitle: {
      en: 'Decode the Guanche legacy',
      fr: 'Déchiffrez l\'héritage Guanche',
      es: 'Descifra el legado Guanche',
    },
    title: {
      en: 'The Code of Ichasagua',
      fr: "Le Code d'Ichasagua",
      es: 'El Código de Ichasagua',
    },
    tagline: {
      en: 'Before the Conquistadors, the Guanches carved their secrets into the rock. One code remains undeciphered. Until today.',
      fr: 'Avant les Conquistadors, les Guanches gravaient leurs secrets dans la roche. Un code reste indéchiffré. Jusqu\'à aujourd\'hui.',
      es: 'Antes de los Conquistadores, los Guanches grababan sus secretos en la roca. Un código permanece sin descifrar. Hasta hoy.',
    },
    location: { en: 'Los Cristianos', fr: 'Los Cristianos', es: 'Los Cristianos' },
    intro: {
      en: 'Where ancient mysteries meet the modern coast',
      fr: 'Là où les mystères anciens rencontrent la côte moderne',
      es: 'Donde los misterios antiguos encuentran la costa moderna',
    },
    introBody: {
      en: "Los Cristianos hides pre-Hispanic traces beneath its tourist facade. The Guanches, the original inhabitants of Tenerife, left coded messages in places most people walk past every day. Your mission: decode the ancestral message of Ichasagua before it is lost to time forever.",
      fr: "Los Cristianos cache des traces préhispaniques sous sa façade touristique. Les Guanches, habitants originels de Tenerife, ont laissé des messages codés dans des lieux où l'on passe chaque jour sans les voir. Votre mission : décoder le message ancestral d'Ichasagua avant qu'il ne soit perdu à jamais.",
      es: "Los Cristianos esconde huellas prehispánicas bajo su fachada turística. Los Guanches dejaron mensajes codificados en lugares por los que la gente pasa cada día sin verlos.",
    },
    quote: {
      en: '"The Guanches spoke to the mountains and the mountains answered. Their language was not of words, but of stone, wind and fire."',
      fr: '« Les Guanches parlaient aux montagnes et les montagnes répondaient. Leur langage n\'était pas de mots, mais de pierre, de vent et de feu. »',
      es: '"Los Guanches hablaban a las montañas y las montañas respondían. Su lenguaje no era de palabras, sino de piedra, viento y fuego."',
    },
    quoteAttr: { en: '— Canarian oral tradition', fr: '— Tradition orale canarienne', es: '— Tradición oral canaria' },
    historyTitle: {
      en: 'The first people of Tenerife',
      fr: 'Les premiers peuples de Tenerife',
      es: 'Los primeros pueblos de Tenerife',
    },
    historyBody: {
      en: [
        'Long before Columbus crossed the Atlantic, the Guanches lived in harmony with the volcanic landscape. They navigated by the stars, communicated across valleys with whistled language, and carved symbols whose meaning we are still trying to understand.',
        'When the Spanish arrived in 1496, a world was lost. But not entirely. The land remembers what the books forgot.',
      ],
      fr: [
        "Bien avant que Colomb ne traverse l'Atlantique, les Guanches vivaient en harmonie avec le paysage volcanique. Ils naviguaient aux étoiles, communiquaient entre vallées par le langage sifflé, et gravaient des symboles dont nous cherchons encore le sens.",
        "Quand les Espagnols arrivèrent en 1496, un monde fut perdu. Mais pas entièrement. La terre se souvient de ce que les livres ont oublié.",
      ],
      es: [
        'Mucho antes de que Colón cruzara el Atlántico, los Guanches vivían en armonía con el paisaje volcánico. Navegaban por las estrellas, se comunicaban entre valles con el lenguaje silbado.',
        'Cuando los españoles llegaron en 1496, un mundo se perdió. Pero no del todo. La tierra recuerda lo que los libros olvidaron.',
      ],
    },
    dates: [
      { year: '200 BC', label: { en: 'Guanche settlement of Tenerife', fr: 'Peuplement Guanche de Tenerife', es: 'Asentamiento Guanche de Tenerife' } },
      { year: '1496', label: { en: 'Spanish conquest — a culture vanishes', fr: 'Conquête espagnole — une culture disparaît', es: 'Conquista española — una cultura desaparece' } },
    ],
    acts: [
      {
        title: { en: 'The Harbour of Echoes', fr: 'Le Port des Échos', es: 'El Puerto de los Ecos' },
        location: { en: 'Old fishing harbour', fr: 'Ancien port de pêche', es: 'Antiguo puerto pesquero' },
        description: { en: 'Where fishermen once launched their boats, stone markings tell of a time before the harbour existed.', fr: "Là où les pêcheurs lançaient leurs barques, des marques de pierre racontent un temps d'avant le port.", es: 'Donde los pescadores lanzaban sus barcas, marcas de piedra cuentan un tiempo antes del puerto.' },
      },
      {
        title: { en: 'The Whistling Wall', fr: 'Le Mur Siffleur', es: 'El Muro Silbador' },
        location: { en: 'Hidden passage in the old quarter', fr: 'Passage caché dans le vieux quartier', es: 'Pasaje oculto en el casco antiguo' },
        description: { en: 'The Guanches used a whistled language — the Silbo — to communicate across ravines. This wall has acoustic properties no architect intended.', fr: "Les Guanches utilisaient un langage sifflé — le Silbo — pour communiquer entre ravins. Ce mur a des propriétés acoustiques qu'aucun architecte n'a prévues.", es: 'Los Guanches usaban un lenguaje silbado — el Silbo — para comunicarse entre barrancos.' },
      },
      {
        title: { en: 'The Forgotten Summit', fr: 'Le Sommet Oublié', es: 'La Cumbre Olvidada' },
        location: { en: 'Mirador de los Guanches', fr: 'Mirador de los Guanches', es: 'Mirador de los Guanches' },
        description: { en: 'From this vantage point, the ancient Guanches observed the movements of stars and ships. The carved symbols here form the key to the final code.', fr: "Depuis ce point de vue, les anciens Guanches observaient les mouvements des étoiles et des navires. Les symboles gravés ici forment la clé du code final.", es: 'Desde este mirador, los antiguos Guanches observaban los movimientos de estrellas y navíos.' },
      },
    ],
    features: [
      { icon: '🗺', title: { en: 'Off the beaten path', fr: 'Hors des sentiers battus', es: 'Fuera de los caminos trillados' }, description: { en: 'Discover the pre-Hispanic Los Cristianos that tourists never see.', fr: 'Découvrez le Los Cristianos préhispanique que les touristes ne voient jamais.', es: 'Descubre el Los Cristianos prehispánico que los turistas nunca ven.' } },
      { icon: '📜', title: { en: 'Guanche heritage', fr: 'Héritage Guanche', es: 'Herencia Guanche' }, description: { en: 'Learn about the fascinating original culture of the Canary Islands through puzzles.', fr: "Découvrez la fascinante culture originelle des Canaries à travers les énigmes.", es: 'Aprende sobre la fascinante cultura original de las Canarias.' } },
      { icon: '👁', title: { en: 'The town is the game', fr: 'La ville est le jeu', es: 'La ciudad es el juego' }, description: { en: 'Real places, real history, real mysteries woven into an immersive adventure.', fr: "Lieux réels, histoire vraie, mystères authentiques tissés dans une aventure immersive.", es: 'Lugares reales, historia real, misterios auténticos.' } },
      { icon: '👨‍👩‍👧‍👦', title: { en: 'For all, without limits', fr: 'Pour tous, sans limite', es: 'Para todos, sin límite' }, description: { en: 'No player limit. The adventure grows with your group.', fr: "Pas de limite de joueurs. L'aventure grandit avec votre groupe.", es: 'Sin límite de jugadores. La aventura crece con tu grupo.' } },
    ],
    infos: [
      { icon: '🕐', label: { en: 'Duration', fr: 'Durée', es: 'Duración' }, value: { en: '1h – 1h30', fr: '1h – 1h30', es: '1h – 1h30' }, sub: { en: 'At your own pace', fr: 'À votre rythme', es: 'A tu ritmo' } },
      { icon: '👥', label: { en: 'Players', fr: 'Joueurs', es: 'Jugadores' }, value: { en: 'Unlimited', fr: 'Sans limite', es: 'Sin límite' }, sub: { en: 'From age 8', fr: 'Dès 8 ans', es: 'Desde 8 años' } },
      { icon: '📍', label: { en: 'Distance', fr: 'Distance', es: 'Distancia' }, value: { en: '~2.5 km', fr: '~2,5 km', es: '~2,5 km' }, sub: { en: 'Los Cristianos', fr: 'Los Cristianos', es: 'Los Cristianos' } },
      { icon: '☀️', label: { en: 'Best time', fr: 'Meilleur moment', es: 'Mejor momento' }, value: { en: 'Anytime', fr: 'Tout le temps', es: 'Cualquier hora' }, sub: { en: 'Morning ideal', fr: 'Matin idéal', es: 'Mañana ideal' } },
      { icon: '🌐', label: { en: 'Languages', fr: 'Langues', es: 'Idiomas' }, value: { en: 'FR · EN · ES', fr: 'FR · EN · ES', es: 'FR · EN · ES' }, sub: { en: 'Others on request', fr: 'Autres sur demande', es: 'Otros bajo petición' } },
      { icon: '♿', label: { en: 'Accessibility', fr: 'Accessibilité', es: 'Accesibilidad' }, value: { en: 'Mostly', fr: 'Majoritairement', es: 'Mayoritariamente' }, sub: { en: 'Flat route', fr: 'Parcours plat', es: 'Ruta plana' } },
    ],
    motto: { en: 'The stones remember', fr: 'Les pierres se souviennent', es: 'Las piedras recuerdan' },
    mottoSub: { en: '— A Guanche proverb', fr: '— Proverbe Guanche', es: '— Proverbio Guanche' },
    ctaBody: {
      en: 'Before the cathedrals, before the harbours, before the tourist resorts — there was a people who spoke to the mountains. Their code has waited millennia for someone to crack it. Will you be the one?',
      fr: "Avant les cathédrales, avant les ports, avant les stations balnéaires — il y avait un peuple qui parlait aux montagnes. Leur code attend depuis des millénaires que quelqu'un le déchiffre. Serez-vous celui-là ?",
      es: 'Antes de las catedrales, antes de los puertos, antes de los complejos turísticos — había un pueblo que hablaba con las montañas. Su código ha esperado milenios. ¿Serás tú quien lo descifre?',
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
