// Self-guided outdoor escape games / treasure hunts on the OTHER Canary Islands
// (Gran Canaria, Lanzarote, Fuerteventura), bookable on our travel partner OddballTrip.
// Unlike the Tenerife escape games (booked internally), these link out to OddballTrip.

export type OddballIslandId = 'gran-canaria' | 'lanzarote' | 'fuerteventura';

export interface OddballIsland {
  id: OddballIslandId;
  emoji: string;
  name: Record<string, string>;
  tagline: Record<string, string>;
}

export interface OddballGame {
  slug: string; // OddballTrip escape slug -> https://www.oddballtrip.com/escapes/<slug>
  island: OddballIslandId;
  image: string; // hero photo
  emoji: string;
  gradient: string; // tailwind gradient classes, fallback behind the image
  duration: string;
  distance: string;
  difficulty: number; // 1-5
  popular?: boolean;
  name: Record<string, string>;
  location: Record<string, string>;
  description: Record<string, string>;
}

export const ODDBALL_BASE_URL = 'https://www.oddballtrip.com/escapes';

// We surface the same pricing as the Tenerife escape games (1 phone = €25),
// not OddballTrip's own per-team prices.
export const ODDBALL_PRICE_FROM = '€25';

export function oddballGameUrl(slug: string): string {
  return `${ODDBALL_BASE_URL}/${slug}`;
}

export const oddballIslands: OddballIsland[] = [
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

export const oddballGames: OddballGame[] = [
  // ─── Gran Canaria ──────────────────────────────────────────────
  {
    slug: 'vegueta-et-colomb',
    island: 'gran-canaria',
    image: '/images/oddball/vegueta-et-colomb.webp',
    emoji: '⛵',
    gradient: 'from-amber-500 to-orange-600',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 2,
    popular: true,
    name: {
      en: 'Vegueta & Columbus',
      es: 'Vegueta y Colón',
      fr: 'Vegueta & Colomb',
      de: 'Vegueta & Kolumbus',
      nl: 'Vegueta & Columbus',
      it: 'Vegueta & Colombo',
    },
    location: {
      en: 'Las Palmas — Vegueta',
      es: 'Las Palmas — Vegueta',
      fr: 'Las Palmas — Vegueta',
      de: 'Las Palmas — Vegueta',
      nl: 'Las Palmas — Vegueta',
      it: 'Las Palmas — Vegueta',
    },
    description: {
      en: 'Follow the footsteps of Christopher Columbus through the old quarter where he stopped in 1492, solving puzzles tied to its colonial palaces and squares.',
      es: 'Sigue los pasos de Cristóbal Colón por el casco antiguo donde hizo escala en 1492, resolviendo enigmas ligados a sus palacios y plazas coloniales.',
      fr: 'Marchez sur les traces de Christophe Colomb dans le vieux quartier où il fit escale en 1492, en résolvant des énigmes liées à ses palais et places coloniales.',
      de: 'Folgen Sie den Spuren von Christoph Kolumbus durch das Altstadtviertel, in dem er 1492 Halt machte, und lösen Sie Rätsel rund um Kolonialpaläste und Plätze.',
      nl: 'Volg de voetsporen van Christoffel Columbus door de oude wijk waar hij in 1492 aanlegde, en los puzzels op rond koloniale paleizen en pleinen.',
      it: 'Segui le orme di Cristoforo Colombo nel quartiere antico dove fece scalo nel 1492, risolvendo enigmi legati ai suoi palazzi e piazze coloniali.',
    },
  },
  {
    slug: 'les-traces-guanches',
    island: 'gran-canaria',
    image: '/images/oddball/les-traces-guanches.webp',
    emoji: '🗿',
    gradient: 'from-stone-500 to-amber-700',
    duration: '2h – 2h30',
    distance: '~2.5 km',
    difficulty: 3,
    name: {
      en: 'The Guanche Traces',
      es: 'Las Huellas Guanches',
      fr: 'Les Traces Guanches',
      de: 'Die Spuren der Guanchen',
      nl: 'De Guanche-sporen',
      it: 'Le Tracce Guanci',
    },
    location: {
      en: 'Las Palmas — Vegueta',
      es: 'Las Palmas — Vegueta',
      fr: 'Las Palmas — Vegueta',
      de: 'Las Palmas — Vegueta',
      nl: 'Las Palmas — Vegueta',
      it: 'Las Palmas — Vegueta',
    },
    description: {
      en: 'Uncover the aboriginal heritage carved in stone — the world of the island’s first inhabitants, hidden in plain sight across the historic centre.',
      es: 'Descubre la herencia aborigen tallada en piedra — el mundo de los primeros habitantes de la isla, oculto a plena vista en el centro histórico.',
      fr: 'Découvrez l’héritage aborigène gravé dans la pierre — le monde des premiers habitants de l’île, caché en pleine vue dans le centre historique.',
      de: 'Entdecken Sie das in Stein gemeißelte Erbe der Ureinwohner — die Welt der ersten Inselbewohner, verborgen im historischen Zentrum.',
      nl: 'Ontdek het in steen gehouwen erfgoed van de oorspronkelijke bewoners — de wereld van de eerste eilandbewoners, verborgen in het historische centrum.',
      it: 'Scopri l’eredità aborigena scolpita nella pietra — il mondo dei primi abitanti dell’isola, nascosto in bella vista nel centro storico.',
    },
  },
  {
    slug: 'les-pirates-de-gran-canaria',
    island: 'gran-canaria',
    image: '/images/oddball/les-pirates-de-gran-canaria.webp',
    emoji: '🏴‍☠️',
    gradient: 'from-sky-600 to-indigo-700',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 2,
    name: {
      en: 'The Pirates of Gran Canaria',
      es: 'Los Piratas de Gran Canaria',
      fr: 'Les Pirates de Gran Canaria',
      de: 'Die Piraten von Gran Canaria',
      nl: 'De Piraten van Gran Canaria',
      it: 'I Pirati di Gran Canaria',
    },
    location: {
      en: 'Las Palmas — Vegueta & Triana',
      es: 'Las Palmas — Vegueta y Triana',
      fr: 'Las Palmas — Vegueta & Triana',
      de: 'Las Palmas — Vegueta & Triana',
      nl: 'Las Palmas — Vegueta & Triana',
      it: 'Las Palmas — Vegueta & Triana',
    },
    description: {
      en: 'Relive Van der Does’s 1599 attack and trace the port fortifications that defended the city against raiders and pirate fleets.',
      es: 'Revive el ataque de Van der Does de 1599 y recorre las fortificaciones del puerto que defendieron la ciudad de saqueadores y flotas piratas.',
      fr: 'Revivez l’attaque de Van der Does en 1599 et suivez les fortifications du port qui défendaient la ville contre pillards et flottes pirates.',
      de: 'Erleben Sie Van der Does’ Angriff von 1599 und folgen Sie den Hafenbefestigungen, die die Stadt gegen Plünderer und Piratenflotten schützten.',
      nl: 'Beleef de aanval van Van der Does uit 1599 en volg de havenversterkingen die de stad beschermden tegen plunderaars en piratenvloten.',
      it: 'Rivivi l’attacco di Van der Does del 1599 e segui le fortificazioni del porto che difesero la città da predoni e flotte pirata.',
    },
  },
  {
    slug: 'las-palmas-moderniste',
    island: 'gran-canaria',
    image: '/images/oddball/las-palmas-moderniste.webp',
    emoji: '🏛️',
    gradient: 'from-rose-500 to-pink-600',
    duration: '1h30 – 2h',
    distance: '~1.8 km',
    difficulty: 2,
    name: {
      en: 'Modernist Las Palmas',
      es: 'Las Palmas Modernista',
      fr: 'Las Palmas Moderniste',
      de: 'Das modernistische Las Palmas',
      nl: 'Modernistisch Las Palmas',
      it: 'Las Palmas Modernista',
    },
    location: {
      en: 'Las Palmas — Triana',
      es: 'Las Palmas — Triana',
      fr: 'Las Palmas — Triana',
      de: 'Las Palmas — Triana',
      nl: 'Las Palmas — Triana',
      it: 'Las Palmas — Triana',
    },
    description: {
      en: 'Discover the tropical Art Nouveau of the Triana quarter — ornate façades, hidden details and the belle-époque story behind the city’s shopping street.',
      es: 'Descubre el Art Nouveau tropical del barrio de Triana — fachadas ornamentadas, detalles ocultos y la historia belle époque de la calle comercial.',
      fr: 'Découvrez l’Art Nouveau tropical du quartier de Triana — façades ornées, détails cachés et l’histoire Belle Époque de la rue commerçante.',
      de: 'Entdecken Sie den tropischen Jugendstil des Triana-Viertels — verzierte Fassaden, versteckte Details und die Belle-Époque-Geschichte der Einkaufsstraße.',
      nl: 'Ontdek de tropische art nouveau van de wijk Triana — sierlijke gevels, verborgen details en het belle-époqueverhaal van de winkelstraat.',
      it: 'Scopri l’Art Nouveau tropicale del quartiere di Triana — facciate ornate, dettagli nascosti e la storia belle époque della via dello shopping.',
    },
  },
  // ─── Lanzarote ─────────────────────────────────────────────────
  {
    slug: 'le-volcan-de-manrique',
    island: 'lanzarote',
    image: '/images/oddball/le-volcan-de-manrique.webp',
    emoji: '🌋',
    gradient: 'from-red-600 to-stone-800',
    duration: '5 – 8h',
    distance: '~40–60 km',
    difficulty: 4,
    popular: true,
    name: {
      en: 'Manrique’s Volcano',
      es: 'El Volcán de Manrique',
      fr: 'Le Volcan de Manrique',
      de: 'Manriques Vulkan',
      nl: 'De Vulkaan van Manrique',
      it: 'Il Vulcano di Manrique',
    },
    location: {
      en: 'Arrecife · Tahíche · Jameos del Agua',
      es: 'Arrecife · Tahíche · Jameos del Agua',
      fr: 'Arrecife · Tahíche · Jameos del Agua',
      de: 'Arrecife · Tahíche · Jameos del Agua',
      nl: 'Arrecife · Tahíche · Jameos del Agua',
      it: 'Arrecife · Tahíche · Jameos del Agua',
    },
    description: {
      en: 'A full-day road adventure across the sites where artist César Manrique turned volcanic landscapes into living art. Solve clues by car and on foot.',
      es: 'Una aventura de un día por carretera por los lugares donde el artista César Manrique convirtió los paisajes volcánicos en arte vivo. Resuelve pistas en coche y a pie.',
      fr: 'Une aventure d’une journée sur les routes, à travers les sites où l’artiste César Manrique a transformé les paysages volcaniques en art vivant. Énigmes en voiture et à pied.',
      de: 'Ein ganztägiges Roadtrip-Abenteuer zu den Orten, an denen der Künstler César Manrique Vulkanlandschaften in lebendige Kunst verwandelte. Rätsel per Auto und zu Fuß.',
      nl: 'Een dagvullend road-avontuur langs de plekken waar kunstenaar César Manrique vulkanische landschappen tot levende kunst maakte. Los aanwijzingen op per auto en te voet.',
      it: 'Un’avventura on the road di un’intera giornata tra i luoghi in cui l’artista César Manrique trasformò i paesaggi vulcanici in arte viva. Enigmi in auto e a piedi.',
    },
  },
  {
    slug: 'le-tresor-de-teguise',
    island: 'lanzarote',
    image: '/images/oddball/le-tresor-de-teguise.webp',
    emoji: '💰',
    gradient: 'from-amber-400 to-yellow-600',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 1,
    name: {
      en: 'The Treasure of Teguise',
      es: 'El Tesoro de Teguise',
      fr: 'Le Trésor de Teguise',
      de: 'Der Schatz von Teguise',
      nl: 'De Schat van Teguise',
      it: 'Il Tesoro di Teguise',
    },
    location: {
      en: 'Teguise',
      es: 'Teguise',
      fr: 'Teguise',
      de: 'Teguise',
      nl: 'Teguise',
      it: 'Teguise',
    },
    description: {
      en: 'A compact family hunt through the former royal capital, chasing the last Béthencourt heir and a poem engraved in copper. Easy and perfect for kids.',
      es: 'Una búsqueda familiar y compacta por la antigua capital real, tras el último heredero de Béthencourt y un poema grabado en cobre. Fácil e ideal para niños.',
      fr: 'Une chasse familiale et compacte dans l’ancienne capitale royale, sur la piste du dernier héritier Béthencourt et d’un poème gravé dans le cuivre. Facile, parfait pour les enfants.',
      de: 'Eine kompakte Familienjagd durch die einstige Königshauptstadt, auf den Spuren des letzten Béthencourt-Erben und eines in Kupfer gravierten Gedichts. Einfach und ideal für Kinder.',
      nl: 'Een compacte familiespeurtocht door de voormalige koninklijke hoofdstad, op jacht naar de laatste Béthencourt-erfgenaam en een in koper gegraveerd gedicht. Eenvoudig en ideaal voor kinderen.',
      it: 'Una caccia compatta per famiglie nell’antica capitale reale, sulle tracce dell’ultimo erede Béthencourt e di una poesia incisa nel rame. Facile e perfetta per i bambini.',
    },
  },
  // ─── Fuerteventura ─────────────────────────────────────────────
  {
    slug: 'la-conquete-normande',
    island: 'fuerteventura',
    image: '/images/oddball/la-conquete-normande.webp',
    emoji: '⚔️',
    gradient: 'from-yellow-500 to-amber-700',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 2,
    name: {
      en: 'The Norman Conquest',
      es: 'La Conquista Normanda',
      fr: 'La Conquête Normande',
      de: 'Die normannische Eroberung',
      nl: 'De Normandische Verovering',
      it: 'La Conquista Normanna',
    },
    location: {
      en: 'Betancuria',
      es: 'Betancuria',
      fr: 'Betancuria',
      de: 'Betancuria',
      nl: 'Betancuria',
      it: 'Betancuria',
    },
    description: {
      en: 'Explore Betancuria, the first capital of the Canaries, on the trail of Jean de Béthencourt and the Norman conquest that began in 1402.',
      es: 'Explora Betancuria, la primera capital de Canarias, tras la pista de Jean de Béthencourt y la conquista normanda que comenzó en 1402.',
      fr: 'Explorez Betancuria, première capitale des Canaries, sur la piste de Jean de Béthencourt et de la conquête normande commencée en 1402.',
      de: 'Erkunden Sie Betancuria, die erste Hauptstadt der Kanaren, auf den Spuren von Jean de Béthencourt und der normannischen Eroberung ab 1402.',
      nl: 'Verken Betancuria, de eerste hoofdstad van de Canarische Eilanden, op het spoor van Jean de Béthencourt en de Normandische verovering die in 1402 begon.',
      it: 'Esplora Betancuria, la prima capitale delle Canarie, sulle tracce di Jean de Béthencourt e della conquista normanna iniziata nel 1402.',
    },
  },
  {
    slug: 'les-sculptures-du-vent',
    island: 'fuerteventura',
    image: '/images/oddball/les-sculptures-du-vent.webp',
    emoji: '🌬️',
    gradient: 'from-cyan-500 to-teal-700',
    duration: '1h30 – 2h',
    distance: '~2 km',
    difficulty: 2,
    name: {
      en: 'Sculptures of the Wind',
      es: 'Esculturas del Viento',
      fr: 'Les Sculptures du Vent',
      de: 'Skulpturen des Windes',
      nl: 'Beelden van de Wind',
      it: 'Sculture del Vento',
    },
    location: {
      en: 'Puerto del Rosario',
      es: 'Puerto del Rosario',
      fr: 'Puerto del Rosario',
      de: 'Puerto del Rosario',
      nl: 'Puerto del Rosario',
      it: 'Puerto del Rosario',
    },
    description: {
      en: 'Decode the artist’s hidden message across the open-air sculpture museum of Puerto del Rosario, from the harbour to the windswept streets.',
      es: 'Descifra el mensaje oculto del artista por el museo de escultura al aire libre de Puerto del Rosario, del puerto a las calles batidas por el viento.',
      fr: 'Décryptez le message caché de l’artiste à travers le musée de sculptures en plein air de Puerto del Rosario, du port aux rues battues par le vent.',
      de: 'Entschlüsseln Sie die verborgene Botschaft des Künstlers im Freilicht-Skulpturenmuseum von Puerto del Rosario, vom Hafen bis zu den windigen Straßen.',
      nl: 'Ontcijfer de verborgen boodschap van de kunstenaar in het openluchtbeeldenmuseum van Puerto del Rosario, van de haven tot de winderige straten.',
      it: 'Decifra il messaggio nascosto dell’artista nel museo di sculture all’aperto di Puerto del Rosario, dal porto alle strade battute dal vento.',
    },
  },
];

export function oddballGamesByIsland(island: OddballIslandId): OddballGame[] {
  return oddballGames.filter((g) => g.island === island);
}
