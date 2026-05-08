const GYG_PARTNER = 'VHOM8VQ';
const gyg = (path: string) => `https://www.getyourguide.com/${path}?partner_id=${GYG_PARTNER}`;

export type ActivityCategory =
  | 'Indoor Fun'
  | 'Water & Sea'
  | 'Nature & Adventure'
  | 'Parks & Attractions'
  | 'Evenings & Shows';

export interface Activity {
  slug: string;
  name: string;
  category: ActivityCategory;
  description: string;
  gradient: string;
  emoji: string;
  price: string;
  duration: string;
  highlights: string[];
  isFunZone: boolean;
  bookUrl: string;
  location: string;
  image?: string;
}

export const activities: Activity[] = [
  // ─── Fun Zone (featured first) ────────────────────────────────────────────
  {
    slug: 'axe-throwing',
    name: 'Axe Throwing',
    category: 'Indoor Fun',
    description:
      'Unleash your inner Viking at Fun Zone Tenerife! Throw real axes at digital targets with 17+ interactive games. Expert coaches guide every session — no experience needed. Perfect for groups, date nights, stag & hen parties, and team building. Shurikens and ninja stars also available.',
    gradient: 'from-orange-900 to-red-900',
    emoji: '🪓',
    price: 'From €23',
    duration: '1–2 hours',
    highlights: [
      'Professional coaching included',
      '17+ interactive games',
      'Axes, shurikens & ninja stars',
      'Up to 9 players per lane',
    ],
    isFunZone: true,
    bookUrl: '/book',
    location: 'Playa Las Americas',
  },
  {
    slug: 'quiz-room-quizzaboom',
    name: 'Quiz Room QuizzaBoom',
    category: 'Indoor Fun',
    description:
      "Welcome to QuizzaBoom — Tenerife's first interactive quiz room! Compete with your team on buzzer systems, giant screens and thousands of questions across pop culture, sport, history and more. Family-friendly from age 6. Ideal for birthdays, couples, groups and anyone who loves a brain workout.",
    gradient: 'from-blue-900 to-violet-900',
    emoji: '🧠',
    price: 'From €19',
    duration: '1 hour',
    highlights: [
      "Tenerife's first quiz room",
      'Buzzer systems & giant screens',
      'Thousands of questions, dozens of categories',
      'Family-friendly from age 6',
    ],
    isFunZone: true,
    bookUrl: '/book',
    location: 'Playa Las Americas',
  },
  {
    slug: 'escape-game',
    name: 'Escape Game Tenerife',
    category: 'Indoor Fun',
    description:
      "Forget everything you think you know about Tenerife. Our outdoor escape games turn you into a real detective: decipher clues carved in stone, solve puzzles hidden in historic monuments, and uncover secrets that 99% of visitors never find. 4 adventures available across the island — all played at your own pace on your smartphone.",
    gradient: 'from-purple-900 to-pink-900',
    emoji: '🔍',
    price: 'From €19',
    duration: '1–4 hours',
    highlights: [
      '4 adventures across Tenerife',
      'Outdoor & self-paced',
      'Smartphone-based, no app needed',
      'Unlimited players per team',
    ],
    isFunZone: true,
    bookUrl: '/book',
    location: 'Los Cristianos · La Laguna · Puerto de la Cruz · Garachico',
  },
  {
    slug: 'darts',
    name: 'Darts & Darts Pixel',
    category: 'Indoor Fun',
    description:
      'Choose between classic steel-tip dartboards and Darts Pixel — an interactive digital target experience with multiple game modes. Relaxed fun for all skill levels, from first-timers to competitive players. Great for couples, friends, and group sessions after dinner.',
    gradient: 'from-teal-900 to-cyan-900',
    emoji: '🎯',
    price: 'From €15',
    duration: '1 hour',
    highlights: [
      'Classic darts & digital Darts Pixel',
      'Multiple game modes',
      'All skill levels welcome',
      'From age 8',
    ],
    isFunZone: true,
    bookUrl: '/book',
    location: 'Playa Las Americas',
  },

  // ─── Water & Sea ───────────────────────────────────────────────────────────
  {
    slug: 'whale-watching-tenerife',
    name: 'Whale & Dolphin Watching',
    category: 'Water & Sea',
    description:
      "Spot wild dolphins and whales off the coast of Tenerife on a responsible eco-cruise. Tenerife is one of Europe's best year-round whale watching destinations — resident pods of pilot whales and bottlenose dolphins are regularly seen. Drinks and snacks included.",
    gradient: 'from-blue-900 to-cyan-900',
    emoji: '🐋',
    price: 'From €35',
    duration: '2–3 hours',
    highlights: [
      'Year-round whale & dolphin sightings',
      'Responsible eco-certified tour',
      'Drinks & snacks included',
      'Departures from Los Cristianos',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/travelin-lady-tenerife-t392740/'),
    location: 'Los Cristianos',
    image: '/images/activities/whale-watching-tenerife.avif',
  },
  {
    slug: 'catamaran-sunset-cruise-tenerife',
    name: 'Catamaran Sunset Cruise',
    category: 'Water & Sea',
    description:
      'Sail the Atlantic at golden hour aboard a luxury catamaran. Watch the sun dip behind La Gomera while sipping drinks and enjoying fresh food on deck. A magical experience for couples, families and groups looking for a memorable evening on the water.',
    gradient: 'from-amber-900 to-orange-900',
    emoji: '⛵',
    price: 'From €45',
    duration: '3 hours',
    highlights: [
      'Spectacular sunset views',
      'Meals & drinks included',
      'Marine wildlife spotting',
      'Romantic & family-friendly',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-ecocroisiere-d-observation-avec-repas-et-boissons-t395162/'),
    location: 'Los Cristianos',
    image: '/images/activities/catamaran-sunset-cruise-tenerife.avif',
  },
  {
    slug: 'los-gigantes-boat-trip',
    name: 'Los Gigantes Cliffs Boat Trip',
    category: 'Water & Sea',
    description:
      "Cruise beneath the dramatic 600-metre cliffs of Los Gigantes and swim in crystal-clear Atlantic waters. Spot dolphins and pilot whales along the way. One of Tenerife's most iconic boat trips — bring your camera!",
    gradient: 'from-slate-900 to-blue-900',
    emoji: '⛰️',
    price: 'From €40',
    duration: '3.5 hours',
    highlights: [
      '600m sheer cliff faces',
      'Swimming stop in sea caves',
      'Whale & dolphin sightings',
      'Snorkelling equipment provided',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/los-gigantes-croisiere-d-observation-des-baleines-et-des-dauphins-avec-arret-baignade-t603483/'),
    location: 'Los Gigantes',
    image: '/images/activities/los-gigantes-boat-trip.avif',
  },
  {
    slug: 'submarine-tour-tenerife',
    name: 'Submarine & Scuba Diving',
    category: 'Water & Sea',
    description:
      'Discover the underwater world of Tenerife on a guided scuba diving session suitable for complete beginners. Descend to 8 metres with a certified instructor and come face-to-face with colourful fish, rays and volcanic rock formations in the warm Atlantic waters off the south coast.',
    gradient: 'from-cyan-900 to-teal-900',
    emoji: '🤿',
    price: 'From €55',
    duration: '50 minutes',
    highlights: [
      'No experience required',
      'Certified PADI instructor',
      'Warm Atlantic waters, 22°C+',
      'Small group for safety',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/sud-de-tenerife-plongee-sous-marine-de-50-minutes-t3669/'),
    location: 'South Tenerife',
    image: '/images/activities/submarine-tour-tenerife.avif',
  },
  {
    slug: 'jet-ski-tenerife',
    name: 'Jet Ski Experience',
    category: 'Water & Sea',
    description:
      'Feel the thrill of cutting through the Atlantic waves on a powerful jet ski. Explore the coastline of Tenerife at speed, with breathtaking views of the volcanic landscape from the water. Suitable for beginners and adrenaline-seekers alike.',
    gradient: 'from-sky-900 to-blue-900',
    emoji: '🏄',
    price: 'From €60',
    duration: '30–60 minutes',
    highlights: [
      'No licence required',
      'Safety briefing included',
      'Coastal scenery at speed',
      'Solo or tandem options',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-excursion-en-jet-ski-avec-excursion-en-quad-en-option-t317607/'),
    location: 'South Tenerife',
    image: '/images/activities/jet-ski-tenerife.avif',
  },
  {
    slug: 'parasailing-tenerife',
    name: 'Parasailing',
    category: 'Water & Sea',
    description:
      'Soar high above the coastline with a luxury parasailing flight. Experience the thrill of flying while being towed behind a powerful boat, with panoramic views stretching all the way to the horizon. A bucket-list experience for those who want to see the sea from a completely different angle.',
    gradient: 'from-indigo-900 to-blue-900',
    emoji: '🪂',
    price: 'From €50',
    duration: '15–20 minutes in air',
    highlights: [
      'Panoramic ocean views',
      'Tandem & solo flights',
      'No experience needed',
      'Safety equipment provided',
    ],
    isFunZone: false,
    bookUrl: gyg('fuengirola-l1160/fuengirola-le-meilleur-parachute-ascensionnel-de-luxe-a-fuengirola-t918272/'),
    location: 'Tenerife',
    image: '/images/activities/parasailing-tenerife.avif',
  },
  {
    slug: 'scuba-diving-tenerife',
    name: 'Scuba Diving Course',
    category: 'Water & Sea',
    description:
      'Take the plunge with a small-group scuba diving initiation course in the warm waters of Tenerife. Your certified PADI instructor will guide you through the basics before you explore stunning underwater volcanic landscapes teeming with marine life.',
    gradient: 'from-emerald-900 to-teal-900',
    emoji: '🐠',
    price: 'From €60',
    duration: '3 hours',
    highlights: [
      'PADI certified instructors',
      'Small groups of max 4',
      'Equipment all included',
      'Suitable from age 10',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-initiation-a-la-plongee-sous-marine-en-petits-groupes-t203269/'),
    location: 'South Tenerife',
    image: '/images/activities/scuba-diving-tenerife.avif',
  },
  {
    slug: 'surf-lessons-tenerife',
    name: 'Surf Lessons',
    category: 'Water & Sea',
    description:
      "Catch your first wave or perfect your technique with a surf lesson on one of Tenerife's best beaches. Patient instructors cater to all levels, from complete beginners to intermediate surfers. Photos of your session included!",
    gradient: 'from-green-900 to-teal-900',
    emoji: '🏄‍♂️',
    price: 'From €35',
    duration: '2 hours',
    highlights: [
      'All levels welcome',
      'Equipment & wetsuit included',
      'Photos of your session included',
      'Small groups, personal attention',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-lecon-de-surf-pour-tous-les-niveaux-photos-incluses-t407915/'),
    location: 'Tenerife',
    image: '/images/activities/surf-lessons-tenerife.avif',
  },

  // ─── Nature & Adventure ────────────────────────────────────────────────────
  {
    slug: 'teide-cable-car-tour',
    name: 'Mount Teide Cable Car Tour',
    category: 'Nature & Adventure',
    description:
      "Ascend to 3,555 metres on the cable car at Mount Teide, Spain's highest peak and one of the world's most visited volcanoes. Marvel at alien lunar landscapes, sweeping views over the Canary Islands, and unique flora found nowhere else on Earth. A must-do on every Tenerife itinerary.",
    gradient: 'from-stone-900 to-red-900',
    emoji: '🌋',
    price: 'From €65',
    duration: 'Half day',
    highlights: [
      "Spain's highest peak at 3,718m",
      'Cable car to 3,555m summit',
      'UNESCO World Heritage site',
      'Panoramic views of 4 islands',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/mont-teide-visite-demi-journee-avec-billet-telepherique-t351351/'),
    location: 'Teide National Park',
    image: '/images/activities/teide-cable-car-tour.avif',
  },
  {
    slug: 'teide-stargazing-tour',
    name: 'Teide Sunset & Stargazing',
    category: 'Nature & Adventure',
    description:
      "Watch one of the world's most spectacular sunsets from the top of a volcano, then stay for a professional stargazing session under some of Europe's clearest skies. Tenerife sits above the clouds at Teide — a UNESCO Starlight Reserve — making this one of the most memorable nights of your holiday.",
    gradient: 'from-violet-900 to-indigo-900',
    emoji: '🌟',
    price: 'From €55',
    duration: '4–5 hours',
    highlights: [
      'Above-cloud sunset at 2,000m',
      'Professional telescope session',
      'UNESCO Starlight Reserve',
      'Expert astronomer guide',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-parc-national-de-teide-coucher-de-soleil-et-observation-des-etoiles-t457265/'),
    location: 'Teide National Park',
    image: '/images/activities/teide-stargazing-tour.avif',
  },
  {
    slug: 'quad-buggy-tour-tenerife',
    name: 'Quad & Buggy Tour at Teide',
    category: 'Nature & Adventure',
    description:
      'Explore the volcanic landscape of Teide National Park on a thrilling guided buggy tour. Race across lava fields, dust trails and mountain tracks at altitude, with views that stretch across the entire island. Perfect for adventure lovers and groups looking for something different.',
    gradient: 'from-yellow-900 to-orange-900',
    emoji: '🏎️',
    price: 'From €80',
    duration: '3–4 hours',
    highlights: [
      'Drive through Teide lava fields',
      'No experience required',
      'Small guided groups',
      'Minimum age 18 (driver)',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-visite-guidee-du-parc-national-du-teide-en-buggy-t369566/'),
    location: 'Teide National Park',
    image: '/images/activities/quad-buggy-tour-tenerife.avif',
  },
  {
    slug: 'masca-gorge-hike',
    name: 'Masca Gorge Hike',
    category: 'Nature & Adventure',
    description:
      "Descend one of Tenerife's most dramatic gorges — the Barranco de Masca — from the picturesque mountain village all the way to the sea. A guided hike through spectacular volcanic rock formations, ending with a boat pickup. Considered one of the best hikes in the Canary Islands.",
    gradient: 'from-lime-900 to-green-900',
    emoji: '🥾',
    price: 'From €60',
    duration: '6–7 hours',
    highlights: [
      'Iconic 4km descent to the sea',
      'Boat return from the gorge',
      'Expert local guide included',
      'Lunch & transfers included',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-barranco-de-masca-randonnee-guidee-excursion-en-bateau-transport-t815057/'),
    location: 'Masca, North-West Tenerife',
    image: '/images/activities/masca-gorge-hike.avif',
  },
  {
    slug: 'paragliding-tenerife',
    name: 'Paragliding Tandem Flight',
    category: 'Nature & Adventure',
    description:
      'Soar above the cliffs and coastline of Tenerife on a tandem paragliding flight with a national champion pilot. Launch from the mountains and glide over beaches, volcanic peaks, and turquoise sea. No experience needed — your pilot does all the work.',
    gradient: 'from-sky-900 to-indigo-900',
    emoji: '🦅',
    price: 'From €90',
    duration: '20–30 minutes',
    highlights: [
      'National champion pilot',
      'Launch from 800m altitude',
      'Photos & video included',
      'No experience required',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-vol-en-parapente-tandem-avec-prise-en-charge-t499757/'),
    location: 'South Tenerife',
    image: '/images/activities/paragliding-tenerife.avif',
  },
  {
    slug: 'horse-riding-tenerife',
    name: 'Horse Riding',
    category: 'Nature & Adventure',
    description:
      'Explore the rugged landscape of Tenerife on horseback with an experienced instructor by your side. Trail rides take you through scenic countryside, with beautiful mountain and coastal views. Suitable for beginners and experienced riders alike.',
    gradient: 'from-amber-900 to-yellow-900',
    emoji: '🐴',
    price: 'From €40',
    duration: '1–2 hours',
    highlights: [
      'Scenic trail rides',
      'Certified instructor included',
      'All riding levels welcome',
      'Small group experience',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-randonnee-a-cheval-avec-instructeur-t460664/'),
    location: 'Tenerife',
    image: '/images/activities/horse-riding-tenerife.avif',
  },
  {
    slug: 'helicopter-tenerife',
    name: 'Helicopter Flight over Tenerife',
    category: 'Nature & Adventure',
    description:
      "See Tenerife from the air on an unforgettable helicopter flight. Fly over Mount Teide, the Las Cañadas crater, dramatic cliffs and pristine beaches. A truly bucket-list experience that gives you a completely new perspective on the island — something you simply can't get any other way.",
    gradient: 'from-zinc-900 to-slate-900',
    emoji: '🚁',
    price: 'From €150',
    duration: '20–45 minutes',
    highlights: [
      'Fly over Mount Teide',
      'Bird\'s-eye views of the whole island',
      'Unique aerial photography',
      'Small group, max 5 passengers',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-vol-en-helicoptere-t603941/'),
    location: 'Tenerife',
    image: '/images/activities/helicopter-tenerife.avif',
  },

  // ─── Parks & Attractions ───────────────────────────────────────────────────
  {
    slug: 'loro-parque-tickets',
    name: 'Loro Parque Tickets',
    category: 'Parks & Attractions',
    description:
      "Visit one of Europe's best zoos and theme parks. Loro Parque is home to killer whales, dolphins, gorillas, tigers, penguins and the world's largest collection of parrots. A full-day family attraction loved by visitors of all ages.",
    gradient: 'from-green-900 to-emerald-900',
    emoji: '🦜',
    price: 'From €38',
    duration: 'Full day',
    highlights: [
      "One of Europe's best zoos",
      'Orca & dolphin shows',
      'Penguins, gorillas, tigers & more',
      'Family-friendly all day',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-billet-d-entree-au-loro-parque-t407432/'),
    location: 'Puerto de la Cruz',
    image: '/images/activities/loro-parque-tickets.avif',
  },
  {
    slug: 'siam-park-tickets',
    name: 'Siam Park Water Park',
    category: 'Parks & Attractions',
    description:
      "Voted the world's best water park multiple years running, Siam Park in Tenerife delivers epic thrills for all ages. Giant slides, lazy rivers, wave pools, and a spectacular Thai-themed resort make it an unmissable day out.",
    gradient: 'from-blue-900 to-teal-900',
    emoji: '🌊',
    price: 'From €36',
    duration: 'Full day',
    highlights: [
      'Voted world\'s best water park',
      'Giant slides & wave pool',
      'Beach pool with real waves',
      "VIP areas & restaurants on-site",
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/billets-d-entree-au-parc-siam-t407436/'),
    location: 'Costa Adeje',
    image: '/images/activities/siam-park-tickets.avif',
  },
  {
    slug: 'karting-tenerife',
    name: 'Go-Karting',
    category: 'Parks & Attractions',
    description:
      'Race against friends and family at Karting Club Tenerife, one of the most fun indoor and outdoor karting tracks on the island. Multiple kart categories including kids karts, single and twin-seaters. A brilliant activity for competitive groups of all ages.',
    gradient: 'from-red-900 to-orange-900',
    emoji: '🏁',
    price: 'From €18',
    duration: '30–60 minutes',
    highlights: [
      'Multiple kart categories',
      'Kids & adult tracks',
      'Lap times & timing system',
      'Group bookings welcome',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/karting-club-tenerife-t74392/'),
    location: 'South Tenerife',
    image: '/images/activities/karting-tenerife.avif',
  },

  // ─── Evenings & Shows ──────────────────────────────────────────────────────
  {
    slug: 'wine-tasting-tenerife',
    name: 'Wine Tasting & Vineyard Tour',
    category: 'Evenings & Shows',
    description:
      "Discover Tenerife's unique wine culture on a guided tour of a working vineyard in Tacoronte. Sample award-winning local wines made from indigenous grape varieties found nowhere else in the world, paired with local cheeses. A cultural highlight for wine lovers.",
    gradient: 'from-rose-900 to-red-900',
    emoji: '🍷',
    price: 'From €40',
    duration: '3 hours',
    highlights: [
      'Visit a working Tenerife vineyard',
      '4+ wine tastings with cheese pairing',
      'Learn about Canarian wine culture',
      'Guided by a local expert',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tacoronte-visite-guidee-des-vignobles-avec-degustation-de-vins-et-de-fromages-t175413/'),
    location: 'Tacoronte',
    image: '/images/activities/wine-tasting-tenerife.avif',
  },
  {
    slug: 'tenerife-north-day-trip',
    name: 'Tenerife North Island Tour',
    category: 'Evenings & Shows',
    description:
      "Experience the lush, green side of Tenerife on a guided grand tour of the north. Visit Teide National Park, the UNESCO World Heritage city of La Laguna, Orotava Valley, cliffs at Masca, and the botanical gardens of Puerto de la Cruz — all in one unforgettable day.",
    gradient: 'from-emerald-900 to-green-900',
    emoji: '🗺️',
    price: 'From €45',
    duration: 'Full day',
    highlights: [
      'Teide & La Laguna UNESCO sites',
      'Masca cliffs & Orotava Valley',
      'Hotel pickup & drop-off included',
      'Expert multilingual guide',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/le-teide-et-le-nord-de-tenerife-grand-tour-t217542/'),
    location: 'Tenerife (island-wide)',
    image: '/images/activities/tenerife-north-day-trip.avif',
  },
  {
    slug: 'flamenco-show-dinner-tenerife',
    name: 'Flamenco Dinner Show',
    category: 'Evenings & Shows',
    description:
      "Experience the passion and fire of authentic flamenco at Tenerife's premier dinner show. The award-winning Scandal show combines world-class flamenco dancers, live musicians, a 5-course dinner, and an open bar for an unforgettable evening entertainment experience.",
    gradient: 'from-pink-900 to-rose-900',
    emoji: '💃',
    price: 'From €65',
    duration: '3.5 hours',
    highlights: [
      'Award-winning flamenco show',
      '5-course dinner included',
      'Open bar',
      'Professional live musicians',
    ],
    isFunZone: false,
    bookUrl: gyg('tenerife-l350/tenerife-diner-spectacle-scandal-entree-et-repas-5-plats-t418607/'),
    location: 'South Tenerife',
    image: '/images/activities/flamenco-show-dinner-tenerife.avif',
  },
];

export const activityCategories: ActivityCategory[] = [
  'Indoor Fun',
  'Water & Sea',
  'Nature & Adventure',
  'Parks & Attractions',
  'Evenings & Shows',
];
