import { gygUrl } from '@/lib/gyg';
import type { Locale } from '@/lib/seo';
// All activity affiliate links are tagged cmp=funzone-activities (see lib/gyg).
const gyg = (path: string) => gygUrl(path, 'funzone-activities');

/** Per-locale content. Only `en` is required for now; other locales slot in
 *  during the localization phase without any refactor (the detail page falls
 *  back to `en`). */
export type Localized<T> = { en: T } & Partial<Record<Locale, T>>;
export type ActivitySection = { h: string; p: string[] };
export type ActivityFaq = { q: string; a: string };

export type ActivityCategory =
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
  /** SEO: rich structured body for the detail page (per-locale). Each section is an H2 + paragraphs; paragraphs may contain inline HTML (links, <strong>). */
  body?: Localized<ActivitySection[]>;
  /** SEO: FAQ section rendered on the page + emitted as FAQPage JSON-LD (per-locale). Answers may contain inline HTML. */
  faqs?: Localized<ActivityFaq[]>;
  /** SEO: custom meta description for the detail page, per-locale (falls back to `description`). */
  seoDescription?: Localized<string>;
}

export const activities: Activity[] = [
  // ─── Fun Zone own product (featured first) ──────────────────────────────────
  {
    slug: 'escape-game',
    name: 'Outdoor Escape Games',
    category: 'Nature & Adventure',
    description:
      "Forget everything you think you know about Tenerife. Our outdoor escape games turn you into a real detective: decipher clues carved in stone, solve puzzles hidden in historic monuments, and uncover secrets that 99% of visitors never find. Adventures across the island, all played at your own pace on your smartphone, any day.",
    gradient: 'from-purple-900 to-pink-900',
    emoji: '🔍',
    price: 'From €25',
    duration: '1–4 hours',
    highlights: [
      'Self-guided adventures across Tenerife',
      'Outdoor & self-paced, play any day',
      'Smartphone-based, no app needed',
      'Great for groups & stag/hen parties',
    ],
    isFunZone: true,
    bookUrl: '/escape-game',
    location: 'Los Cristianos · La Laguna · Puerto de la Cruz · Garachico',
    image: '/images/offers/escapegame.png',
    seoDescription: {
      en: "Turn Tenerife into your own detective story with a self guided outdoor escape game. Solve clues around real towns at your own pace, any day, perfect for groups and families.",
    },
    body: {
      en: [
        {
          h: 'Tenerife, but this time you are the one solving it',
          p: [
            "Most people walk straight past the old squares, the carved stone and the hidden corners of Tenerife without ever knowing the stories behind them. You are about to do the opposite. Our outdoor escape games hand you a trail of clues and puzzles woven into real streets and real monuments, and an ordinary walk suddenly turns into a hunt. You read the walls, you crack the codes, and you find the things most visitors never even notice.",
            "There is no room to get locked in and no actor leaping out at you. The whole town is your game board, and your phone is the only thing you need to play.",
          ],
        },
        {
          h: 'How it works, and it really is this easy',
          p: [
            "You start whenever you like, any day of the week. Open the game on your phone, follow the story from clue to clue, and let it lead you through the streets at your own rhythm. Stop for a coffee, take photos, double back if you want. There is no guide waiting, no fixed start time and no app to download.",
          ],
        },
        {
          h: "The best shout for groups, stag and hen do's and families",
          p: [
            "Split into teams and it gets competitive fast. It is one of those rare plans that works just as well for a stag or hen weekend, a family with restless kids or a team day out. If you are planning a celebration, have a look at our ideas for a <a href=\"/en/stag-hen-party-tenerife\">stag or hen party in Tenerife</a>, then fill out the trip with the rest of our <a href=\"/en/activities\">things to do in Tenerife</a>.",
          ],
        },
        {
          h: 'Why it sticks with you',
          p: [
            "It is the laughing, the arguing over a clue, the moment someone finally cracks it. You walk away knowing a corner of Tenerife far better than the people who only saw it from a tour bus. Pick your town, pick your day, and go and play.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Do I need to book a specific time?', a: 'No. The games are self guided, so you can start any day and at any time that suits you. There is no fixed departure and nobody to meet.' },
        { q: 'Do I have to download an app?', a: "No app needed. Everything runs in your phone's browser, so you just open the link and start playing." },
        { q: 'Where in Tenerife can I play?', a: 'There are adventures in several towns across the island, including Los Cristianos, La Laguna, Puerto de la Cruz and Garachico, so you can pick one near where you are staying or make a day of it.' },
        { q: 'Is it good for kids?', a: 'Yes. Families play together all the time. Younger children love the hunt, and since you set the pace there is no pressure to keep up with anyone.' },
        { q: 'How long does it take?', a: 'Most games run between one and four hours depending on the route and how long you stop along the way. You are never on a clock.' },
      ],
    },
  },

  // ─── Water & Sea ───────────────────────────────────────────────────────────
  {
    slug: 'whale-watching-tenerife',
    name: 'Whale & Dolphin Watching',
    category: 'Water & Sea',
    description:
      "Spot wild dolphins and whales off the coast of Tenerife on a responsible eco-cruise. Tenerife is one of Europe's best year-round whale watching destinations, with resident pods of pilot whales and bottlenose dolphins seen regularly. Drinks and snacks included.",
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
    seoDescription: {
      en: "See wild dolphins and pilot whales up close on an eco cruise from Los Cristianos. It's one of the best things to do in Tenerife, and you can go any time of year.",
    },
    body: {
      en: [
      {
        h: "The moment you'll still be talking about long after the tan has faded",
        p: [
          "Picture it. The engine falls quiet and the only sound is the water lapping against the hull. Then, a few metres away, a fin breaks the surface. A pod of wild dolphins sweeps in to ride your bow wave, and just behind them a family of pilot whales rises to breathe. Nobody on the boat says a word. This is the kind of thing you remember for years, the story you tell when someone asks what you got up to in Tenerife.",
          "And here is the best bit. It isn't a once in a lifetime fluke. In the channel between Tenerife and La Gomera, pilot whales and bottlenose dolphins live here all year round, which makes this one of the few places in the world where you can set off almost sure to see them. In 2021 these waters became the first Whale Heritage Site in Europe. Go once and you will get why.",
        ],
      },
      {
        h: 'What the day actually feels like',
        p: [
          "You head out of Los Cristianos or Puerto Colón and watch the resorts shrink behind you. After about half an hour the skipper eases off the throttle, everyone leans over the rail scanning the water, and the moment that first dorsal fin appears the whole boat lights up. The good crews keep their distance and let the animals come to you. More often than not, curious and close, they do.",
          "Then the boat slips into a quiet cove and you jump off the deck into water so clear it barely looks real. Drink in hand, sun on your shoulders, nowhere else you need to be. Two or three hours later it's over, and it always feels too soon.",
        ],
      },
      {
        h: "Who it's for (hint: everyone)",
        p: [
          "Couples chasing a moment they'll frame. Parents who want to watch their kids' faces the instant the dolphins appear. Groups after the day they'll bring up at every reunion. The big catamarans are smooth and steady even if you're not a 'boat person', so no one has to sit it out. Make a whole day of the sea with a <a href=\"/en/activities/catamaran-sunset-cruise-tenerife\">catamaran sunset cruise</a>, or chase the towering cliffs on a <a href=\"/en/activities/los-gigantes-boat-trip\">Los Gigantes boat trip</a>.",
        ],
      },
      {
        h: "Don't fly home without doing this",
        p: [
          "Plenty of people spend a week by the pool and never realise the giants of the Atlantic were swimming just offshore the whole time. Don't be one of them. Go in the morning when the sea is calmest, pack sun cream and something to layer up, and let the ocean do the rest. Want the full picture before you book? Have a read of our <a href=\"/en/blog/whale-watching-tenerife-complete-guide\">complete guide to whale watching in Tenerife</a>, or browse the rest of our <a href=\"/en/activities\">things to do in Tenerife</a>, then pick your date and make it happen.",
        ],
      },
      ],
    },
    faqs: {
      en: [
      {
        q: 'Will I definitely see whales and dolphins?',
        a: "No operator can guarantee sightings of wild animals, but because pilot whales and dolphins live in these waters all year, success rates off south Tenerife are very high and most trips see them. Many reputable companies offer a free second trip if nothing is spotted.",
      },
      {
        q: 'What is the best time of year for whale watching in Tenerife?',
        a: "Any time of year works. The main species are resident, so sightings don't depend on the season. For the calmest sea, choose a morning departure and, if you can, a day with light winds.",
      },
      {
        q: 'Where do the boats leave from?',
        a: 'Most southern tours depart from Los Cristianos or Puerto Colón (Costa Adeje); some whale-and-dolphin trips also leave from Los Gigantes on the west coast.',
      },
      {
        q: 'Is it suitable for young children?',
        a: 'Yes. Larger catamarans are stable and family-friendly, with toilets and shade on board. Bring sun protection and, for very young children, their own snacks.',
      },
      {
        q: 'How long does a whale watching trip last?',
        a: 'Typically two to three hours, including the sail out, time spent with the animals and often a swim stop in a sheltered bay.',
      },
      ],
    },
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
    seoDescription: {
      en: "Sail into the sunset off Tenerife on a relaxed catamaran cruise. Swim stops, drinks on deck and a good chance of dolphins, with the sky turning gold over the Atlantic.",
    },
    body: {
      en: [
        {
          h: 'The evening you will wish you had booked for longer',
          p: [
            "The engines ease off, someone hands you a cold drink, and the sun starts melting into the Atlantic. The sails catch the last of the light, the water shifts from blue to gold to pink, and for a second everyone on deck just goes quiet to take it in. This is Tenerife at its most effortless, and it tends to become the photo you actually print when you get home.",
          ],
        },
        {
          h: 'What the cruise is like',
          p: [
            "You push off from the south coast and glide along the shoreline on a wide, steady catamaran. There is usually a stop to swim or snorkel in a calm bay, soft music, and food and drinks included. Spread out on the nets at the bow, feet dangling over the water, and let the boat do the work.",
            "Dolphins often turn up along the way, since they live in these waters all year. It is never a promise, but it happens a lot.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Couples, obviously. But it is just as good for a group of friends winding down after a day in the sun, or a family after something gentle and memorable. If you love being on the water, pair it with <a href=\"/en/activities/whale-watching-tenerife\">whale and dolphin watching</a> or a <a href=\"/en/activities/los-gigantes-boat-trip\">boat trip to Los Gigantes</a>.",
          ],
        },
        {
          h: 'A couple of tips',
          p: [
            "Bring a light layer for when the sun drops, because it cools down fast out on the water. Book a sailing timed to sunset for the full effect, and get there a few minutes early to grab the best spot on deck.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Will we see dolphins?', a: 'Often, yes. Dolphins and pilot whales live off the south coast all year, so sightings are common, though no boat can promise them on a given evening.' },
        { q: 'Is food and drink included?', a: 'Most sunset cruises include drinks and some food on board. Check the details of your chosen trip before you book, as it varies by operator.' },
        { q: 'Can you swim on the trip?', a: 'Usually yes. Most cruises stop in a sheltered bay so you can swim or snorkel before the sun goes down.' },
        { q: 'Is it suitable for children?', a: 'Yes. The catamarans are wide and stable and families are very welcome. Bring sun protection and a warm layer for later.' },
        { q: 'How long is a sunset cruise?', a: 'Typically two to three hours, timed so you are out on the water as the sun sets.' },
      ],
    },
  },
  {
    slug: 'los-gigantes-boat-trip',
    name: 'Los Gigantes Cliffs Boat Trip',
    category: 'Water & Sea',
    description:
      "Cruise beneath the dramatic 600-metre cliffs of Los Gigantes and swim in crystal-clear Atlantic waters. Spot dolphins and pilot whales along the way. One of Tenerife's most iconic boat trips, so bring your camera.",
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
    seoDescription: {
      en: "Sail beneath the 600 metre cliffs of Los Gigantes on Tenerife's west coast. Swim in clear water, watch for dolphins and whales, and see the island from an angle most people miss.",
    },
    body: {
      en: [
        {
          h: 'Cliffs so big they reset your idea of big',
          p: [
            "You have seen cliffs before. Not like these. The walls of Los Gigantes rise straight out of the ocean for up to 600 metres, and from the deck of a small boat looking up, they are genuinely humbling. The old Guanche people called this the Wall of Hell. From the water on a calm morning, it feels more like the edge of the world.",
          ],
        },
        {
          h: 'What you will do out there',
          p: [
            "You cruise along the base of the cliffs where the water turns a deep, clear blue, then stop to swim or snorkel somewhere the crowds never reach. Dolphins and pilot whales are regular company on the way, since the channel here is one of the best in Europe for spotting them. Bring a camera. The photos never quite catch the scale, but you will try anyway.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Anyone who wants the version of Tenerife the brochures undersell. It suits families, couples and friends alike. Make a proper sea day of it with <a href=\"/en/activities/whale-watching-tenerife\">whale and dolphin watching</a>, or wind down later on a <a href=\"/en/activities/catamaran-sunset-cruise-tenerife\">catamaran sunset cruise</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "Mornings are usually calmer and better for both the ride and the photos. Pack sun cream, water and a hat, and if you are prone to seasickness, the bigger boats are the steadier choice.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'How high are the Los Gigantes cliffs?', a: 'They rise up to around 600 metres straight out of the sea, which is why they are one of the most dramatic sights on the whole island.' },
        { q: 'Will I see dolphins or whales?', a: 'Very likely. The waters off the west coast are home to resident dolphins and pilot whales all year, so most trips spot them.' },
        { q: 'Can I swim on the trip?', a: 'Yes. Most boat trips stop in a calm spot beneath or near the cliffs so you can swim or snorkel in clear water.' },
        { q: 'Where does the boat leave from?', a: 'Most trips depart from Los Gigantes harbour on the west coast, though some longer cruises leave from the southern ports.' },
        { q: 'Is it family friendly?', a: 'Yes. Larger boats are stable and suit all ages. Bring sun protection and snacks for little ones.' },
      ],
    },
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
    seoDescription: {
      en: "Go beneath the Atlantic off Tenerife in a real submarine. No diving needed. See marine life and wrecks through big windows, dry and comfortable the whole way down.",
    },
    body: {
      en: [
        {
          h: 'The one where you do not even have to get wet',
          p: [
            "Most people never see what is under the surface of the ocean. You are about to, with no wetsuit, no lesson and not a single drop of water on you. You step aboard a real submarine, it dips below the waves, and the Atlantic is suddenly right there through the big round windows. Shafts of light, shoals of fish, the odd wreck resting on the seabed. It is strange and brilliant in equal measure.",
          ],
        },
        {
          h: 'What it is actually like down there',
          p: [
            "You sit by your own window as the sub descends off the south coast. A guide points out what you are looking at, from fish and rays to sunken boats placed as artificial reefs. It is calm, quiet and completely dry, which is exactly why it works for people who would never put their head under on a dive.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "This is a winner with kids, with grandparents, and with anyone who loves the sea but does not fancy swimming in it. If the ocean is your thing, pair it with a <a href=\"/en/activities/whale-watching-tenerife\">whale and dolphin watching</a> trip, or go the other way entirely and try <a href=\"/en/activities/scuba-diving-tenerife\">scuba diving</a>.",
          ],
        },
        {
          h: 'Worth knowing',
          p: [
            "You stay dry and comfortable throughout, so normal clothes are fine. It is a great shout for a cloudy day, or for when you want a break from the beach without slowing the trip down.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Do I need to swim or dive?', a: 'Not at all. You stay inside the submarine the whole time, dry and seated by a window, so no swimming or diving skills are needed.' },
        { q: 'Is it safe for children and older people?', a: 'Yes. It is one of the most accessible ways to see underwater life, which makes it popular with families and older visitors alike.' },
        { q: 'What will I see?', a: 'Expect fish, rays and other marine life, along with wrecks placed on the seabed as artificial reefs. A guide explains it as you go.' },
        { q: 'How deep does it go?', a: 'The sub descends well below the surface to where the marine life gathers, giving you a proper underwater view through large windows.' },
        { q: 'How long does it last?', a: 'The underwater part is fairly short, but the whole experience including boarding usually takes a couple of hours.' },
      ],
    },
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
    seoDescription: {
      en: "Open the throttle on a jet ski off the Tenerife coast. Speed, spray and big Atlantic views, with the chance of dolphins alongside. A pure hit of adrenaline, no experience needed.",
    },
    body: {
      en: [
        {
          h: 'Throttle down and everything else disappears',
          p: [
            "There is a moment, right after you open it up, when the noise and the spray and the slam of the water take over and you forget everything else. Jet skiing off Tenerife is loud, fast and grinning stupidly the whole way. The coast blurs past, the Atlantic opens up ahead of you, and for twenty or forty minutes you are the fastest thing on the water.",
          ],
        },
        {
          h: 'What the session is like',
          p: [
            "A guide gets you set up, runs through the controls, and then leads you out along the coast in a small group. You follow the shoreline past cliffs and coves, picking up speed where it is safe to. Dolphins sometimes appear alongside, which is a hard feeling to beat. No licence and no experience needed, just hold on and go.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Thrill seekers, obviously, but it is more accessible than people expect, so first timers get on fine. It is a favourite for stag do's and groups of friends. Stack up the adrenaline with a <a href=\"/en/activities/parasailing-tenerife\">parasailing flight</a> or a <a href=\"/en/activities/quad-buggy-tour-tenerife\">quad or buggy tour</a>.",
          ],
        },
        {
          h: 'Before you go',
          p: [
            "Wear swimwear and expect to get soaked, because you will. There is usually a minimum age and a short safety briefing first. Listen to your guide, respect the throttle, and enjoy every second of it.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Do I need a licence or experience?', a: 'No. A guide gives you a quick briefing and leads the session, so complete beginners are welcome and no licence is required.' },
        { q: 'Will I get wet?', a: 'Definitely. Wear swimwear and bring a towel and dry clothes for after. Getting soaked is half the fun.' },
        { q: 'Can two people share a jet ski?', a: 'Often yes. Many operators allow a driver and a passenger on the same ski. Check when you book if you want to ride double.' },
        { q: 'Is there a minimum age?', a: 'Usually yes for driving, and younger children may ride as passengers with an adult. Age limits vary by operator.' },
        { q: 'Might we see dolphins?', a: 'Sometimes. Dolphins live along this coast, so they do occasionally appear during sessions, though it is never guaranteed.' },
      ],
    },
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
    bookUrl: gyg('tenerife-l350/tenerife-costa-adeje-parasailing-t550159/'),
    location: 'Tenerife',
    image: '/images/activities/parasailing-tenerife.avif',
    seoDescription: {
      en: "Lift off from a speedboat and float high above the Tenerife coast on a parasailing flight. Calm, surprisingly peaceful and a view you will not forget. No experience needed.",
    },
    body: {
      en: [
        {
          h: 'Up you go, and the noise just stops',
          p: [
            "One minute you are on the back of a speedboat, the next the line pays out and you are rising into the air with your feet dangling over the Atlantic. People expect a white knuckle ride. What they get is strangely peaceful. The engine fades below you, the breeze takes over, and the whole south coast of Tenerife spreads out under your feet, the beaches, the boats, the deep blue going on forever.",
          ],
        },
        {
          h: 'What happens on the flight',
          p: [
            "You take off and land straight from the boat, so you stay dry unless you ask them to dip your toes in the water, which they happily will. You can fly solo or strap in with a friend or two. It is gentle enough that the nerves settle within seconds, and it is over long before you want it to be.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Anyone curious about flying without the full on adrenaline of a jump. Couples love it, families with older kids love it, and it pairs perfectly with a faster hit like <a href=\"/en/activities/jet-ski-tenerife\">jet skiing</a> or, if you want the real rush, a <a href=\"/en/activities/paragliding-tenerife\">tandem paragliding flight</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "You do not need any experience. Wear swimwear in case of a splash landing, bring sunglasses with a strap, and have your camera ready, because the view is the whole point.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Is parasailing scary?', a: 'Most people find it far calmer than they expect. Once you are up it is smooth and quiet rather than a rush, which is why nervous first timers enjoy it.' },
        { q: 'Do I need experience?', a: 'None at all. The crew handle everything from the boat. You just sit back and enjoy the ride.' },
        { q: 'Will I get wet?', a: 'Only if you want to. Take off and landing are from the boat, but the crew can dip you into the sea at the end if you fancy it.' },
        { q: 'Can I fly with someone else?', a: 'Yes. You can usually fly in pairs or threes, which is reassuring for first timers and more fun with friends.' },
        { q: 'Is there a weight or age limit?', a: 'There are usually minimum age and weight guidelines for safety, and these vary by operator, so check when you book.' },
      ],
    },
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
    seoDescription: {
      en: "Breathe underwater for the first time off Tenerife, or log a proper dive if you are certified. Volcanic reefs, clear warm water and marine life, with a PADI instructor beside you.",
    },
    body: {
      en: [
        {
          h: 'A whole world has been down there the whole time',
          p: [
            "Everyone stares out at the ocean from the beach. Almost nobody sees what is actually under it. Strap on a tank off Tenerife and that changes in about ninety seconds. The surface closes over your head, your breathing slows, and you are suddenly weightless among volcanic reefs, drifting past fish that do not seem remotely bothered by you. It is quiet down there in a way nothing on land ever is.",
          ],
        },
        {
          h: 'You do not need to be a diver',
          p: [
            "If you have never dived in your life, that is fine. A PADI instructor takes you through the basics in shallow water, stays right beside you the whole time, and keeps the group small. If you are already certified, the volcanic landscapes and clear, warm Atlantic off the south coast are some of the best diving in Europe.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "The curious, the first timers, and certified divers after something new. It suits almost anyone reasonably comfortable in water. If you want the sea without going under, try the <a href=\"/en/activities/submarine-tour-tenerife\">submarine tour</a>, or stay on top with <a href=\"/en/activities/whale-watching-tenerife\">whale and dolphin watching</a>.",
          ],
        },
        {
          h: 'Before you dive',
          p: [
            "You do not need to swim like an athlete, just be reasonably comfortable in water. There is a minimum age for first dives and a short health check beforehand. Your instructor handles everything else.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Can I dive if I have never done it before?', a: 'Yes. Beginner dives are designed for complete first timers. A PADI instructor teaches you the basics and stays with you for the entire dive.' },
        { q: 'Do I need to be a strong swimmer?', a: 'No. You just need to be reasonably comfortable in water. The instructor controls the pace and depth for you.' },
        { q: 'What will I see underwater?', a: 'Expect volcanic rock formations, reefs and plenty of fish. The water off Tenerife is clear and mild, so visibility is usually very good.' },
        { q: 'Is there a minimum age?', a: 'Yes, there is a minimum age for first dives, typically around ten, though it varies. Check with your chosen operator.' },
        { q: 'What about equipment?', a: 'All the kit you need is included and set up for you. Just bring swimwear and a towel.' },
      ],
    },
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
    seoDescription: {
      en: "Catch your first wave in Tenerife with a surf lesson for all levels. Warm water, friendly instructors and that unbeatable moment you finally stand up and ride.",
    },
    body: {
      en: [
        {
          h: 'That first time you stand up, you will shout',
          p: [
            "There is nothing quite like the first wave you actually ride. One second you are paddling and wobbling, the next the board catches, you push up, and you are gliding across the face of the Atlantic with the beach rushing toward you. People come off the water buzzing for hours. Tenerife, with its warm water and steady waves, is one of the best places anywhere to feel it for the first time.",
          ],
        },
        {
          h: 'What a lesson is like',
          p: [
            "You start on the sand learning how to pop up, then head into the white water where the instructor pushes you onto gentle waves until it clicks. Groups are small, the coaching is patient, and the warm Atlantic means you are not fighting the cold while you learn. Most people stand up in their very first session.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Total beginners, kids, families, and improvers who want to progress. No fitness heroics required. If you love being in the water, round out the trip with <a href=\"/en/activities/scuba-diving-tenerife\">a dive</a> or a <a href=\"/en/activities/catamaran-sunset-cruise-tenerife\">sunset cruise</a> to recover afterwards.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "Board and wetsuit are included. Bring swimwear, sun cream and a towel. Expect to fall a lot, laugh a lot, and ache pleasantly the next day.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Can I surf if I have never tried?', a: 'Absolutely. Lessons are built for beginners, and most people manage to stand up and ride white water in their first session.' },
        { q: 'Is the equipment included?', a: 'Yes. A board and wetsuit are provided, so you just need swimwear, a towel and sun cream.' },
        { q: 'Do I need to be fit?', a: 'Not especially. A basic comfort in water is enough, and the instructor matches the lesson to your level.' },
        { q: 'Is it suitable for children?', a: 'Yes, surf lessons are popular with families and there are sessions suited to kids. Check minimum ages with the operator.' },
        { q: 'When is the best time to surf in Tenerife?', a: 'You can surf year round thanks to the mild water. Your instructor picks a spot and time with suitable, beginner friendly conditions.' },
      ],
    },
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
    seoDescription: {
      en: "Ride the cable car up Mount Teide, the highest peak in Spain, and stand above the clouds. Volcanic landscapes, huge views and the strangest, most beautiful corner of Tenerife.",
    },
    body: {
      en: [
        {
          h: 'Above the clouds, on top of Spain',
          p: [
            "You can be on a beach in the morning and standing at nearly 3,600 metres by the afternoon, looking down on a sea of cloud with other islands poking through it. Mount Teide is the highest peak in Spain and the heart of everything on Tenerife. The cable car floats you up the last stretch in a few minutes, and when you step out the air is thin, the light is sharp, and the world looks nothing like the resort you left behind.",
          ],
        },
        {
          h: 'What it is like up there',
          p: [
            "The landscape around Teide is pure volcano, red and ochre rock, twisted lava fields, old craters. It has stood in for the surface of other planets in films, and standing in it you understand why. The cable car saves you the long climb and drops you near the top, where short trails lead to viewpoints over the whole island.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Everyone should see Teide at least once. It suits all ages, though the altitude is worth respecting. Turn it into a full day with a <a href=\"/en/activities/tenerife-north-day-trip\">grand tour of the north</a>, or come back after dark for <a href=\"/en/activities/teide-stargazing-tour\">stargazing under some of Europe's clearest skies</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "It is much colder and windier at the top than at sea level, so bring a jacket even in summer. The altitude can leave you a little breathless, so take it slowly. The very summit cone needs a separate free permit, but the cable car viewpoints are spectacular on their own.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'How high does the cable car go?', a: 'It takes you to around 3,555 metres, close to the summit of Teide, which itself tops out near 3,715 metres, the highest point in Spain.' },
        { q: 'Do I need a permit?', a: 'Not for the cable car and its viewpoints. Only the final climb to the very summit cone requires a separate free permit, booked in advance.' },
        { q: 'Will I feel the altitude?', a: 'Some people feel a little breathless or light headed at the top. Take it slowly and drink water. Those with heart or breathing conditions should take care.' },
        { q: 'What should I wear?', a: 'Warm layers and closed shoes. It can be below freezing at the top even when the coast is hot, and the wind makes it feel colder.' },
        { q: 'Can I go if the weather is bad?', a: 'The cable car can close in high winds for safety, so check conditions before you travel up. On clear, calm days the views are extraordinary.' },
      ],
    },
  },
  {
    slug: 'teide-stargazing-tour',
    name: 'Teide Sunset & Stargazing',
    category: 'Nature & Adventure',
    description:
      "Watch one of the world's most spectacular sunsets from the top of a volcano, then stay for a professional stargazing session under some of Europe's clearest skies. Tenerife sits above the clouds at Teide, a UNESCO Starlight Reserve, which makes this one of the most memorable nights of your holiday.",
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
    seoDescription: {
      en: "Watch the sun set over a volcano, then see the Milky Way from Mount Teide, one of the clearest dark skies in the world. A guided stargazing night you will never forget.",
    },
    body: {
      en: [
        {
          h: 'The night sky like you have genuinely never seen it',
          p: [
            "Most of us have never really seen the stars. Light pollution steals them. Up on Teide, above the clouds and far from any city glow, the sky comes back in full. The Milky Way stretches overhead like spilled sugar, the planets sit bright and steady, and shooting stars turn up often enough that you lose count. It is one of those nights that quietly rearranges how you think about where you live.",
          ],
        },
        {
          h: 'How the evening goes',
          p: [
            "You head up as the sun drops, watching it set over the volcanic landscape and the sea of cloud below, which is a show in itself. Once it is dark, a guide walks you through the constellations with lasers, points telescopes at planets and distant galaxies, and explains what you are looking at. Tenerife's skies are so clear that major observatories were built here, which tells you everything.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Couples, families, anyone with a flicker of curiosity about what is up there. No knowledge needed, the guides make it easy. Pair it with the daytime <a href=\"/en/activities/teide-cable-car-tour\">Teide cable car tour</a> to see the mountain in both lights, or read our <a href=\"/en/blog/teide-stargazing-tenerife\">guide to stargazing on Teide</a> first.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "It gets cold up there at night, properly cold, so bring warm layers whatever the forecast says at the coast. Many tours include dinner and hotel pickup. Let your eyes adjust to the dark and put the phone away for a while.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Why is Teide so good for stargazing?', a: 'It sits above the clouds, far from city light, with exceptionally clear, dry air. The conditions are so good that world class observatories were built on the island.' },
        { q: 'Do I need to know anything about astronomy?', a: 'Not a thing. Guides point out constellations and planets and explain everything in plain language, so it works for complete beginners.' },
        { q: 'Will there be telescopes?', a: 'Most guided tours bring telescopes so you can see planets, star clusters and galaxies up close, not just with the naked eye.' },
        { q: 'How cold does it get?', a: 'Cold, even in summer. You are at high altitude at night, so bring warm layers, a hat and closed shoes. Some tours provide extra gear.' },
        { q: 'Is it suitable for children?', a: 'Yes, families are welcome and kids often love it. Just be ready for a late night and the cold.' },
      ],
    },
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
    seoDescription: {
      en: "Tear off road through Tenerife's volcanic trails on a quad or buggy tour. Dust, grins and views you cannot reach any other way, with a guide leading and no experience needed.",
    },
    body: {
      en: [
        {
          h: 'Off the tarmac and into the real Tenerife',
          p: [
            "The resorts are tidy. This is not. Point a quad or buggy up a dirt track into the hills and Tenerife turns wild fast, loose volcanic gravel, pine forest, viewpoints that drop away to the sea. You bounce, you slide, you get covered in dust, and you grin the entire way. It is the most fun you can have getting properly filthy on this island.",
          ],
        },
        {
          h: 'What the tour is like',
          p: [
            "A guide leads a convoy along trails that normal cars never touch, stopping at viewpoints for photos and a breather. You drive your own quad or share a buggy, and there is a briefing first so beginners feel steady before you set off. Expect dramatic scenery, a bit of adrenaline, and a lot of laughing over the engine noise.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Anyone who likes a bit of grit with their sightseeing. It is brilliant for couples, friends and stag or hen groups. Line up more adrenaline with a <a href=\"/en/activities/jet-ski-tenerife\">jet ski session</a>, or go up high instead with <a href=\"/en/activities/paragliding-tenerife\">tandem paragliding</a>.",
          ],
        },
        {
          h: 'Before you go',
          p: [
            "Wear clothes and shoes you do not mind getting dusty, and bring sunglasses. There is a minimum age and usually a driving licence requirement to drive a quad yourself, though passengers and buggies are more flexible. Your guide sets the pace.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Do I need a driving licence?', a: 'Usually yes to drive a quad yourself, though rules vary. Passengers and some buggy setups do not need one, so check when you book if you want to drive.' },
        { q: 'Is it hard to drive?', a: 'No. There is a briefing first and the guide leads at a manageable pace, so beginners pick it up quickly. You control your own speed within the group.' },
        { q: 'Will I get dirty?', a: 'Almost certainly. These are dusty volcanic trails, so wear clothes you do not mind getting messy and bring sunglasses.' },
        { q: 'Can children come along?', a: 'Often as passengers, with age limits for driving. Check the operator for minimum ages before booking.' },
        { q: 'What will I see?', a: 'Backcountry Tenerife, pine forests, volcanic terrain and coastal viewpoints that you simply cannot reach by car.' },
      ],
    },
  },
  {
    slug: 'masca-gorge-hike',
    name: 'Masca Gorge Hike',
    category: 'Nature & Adventure',
    description:
      "Descend one of Tenerife's most dramatic gorges, the Barranco de Masca, from the picturesque mountain village all the way to the sea. A guided hike through spectacular volcanic rock formations, ending with a boat pickup. Considered one of the best hikes in the Canary Islands.",
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
    seoDescription: {
      en: "Hike the legendary Masca gorge in Tenerife, from a cliff top village down through towering volcanic rock to the sea, with a boat pickup at the end. One of the best hikes in the Canaries.",
    },
    body: {
      en: [
        {
          h: 'The hike people talk about for the rest of the trip',
          p: [
            "Masca is not just a walk. It starts in a tiny village clinging to the mountainside, then drops you into a gorge where volcanic walls rise hundreds of metres on either side and the path threads along the bottom toward the ocean. It is dramatic, a little demanding, and absolutely worth it. By the time you reach the sea and the boat that collects you, you feel like you have genuinely done something.",
          ],
        },
        {
          h: 'What to expect on the trail',
          p: [
            "The route runs downhill from the village of Masca to the coast, through some of the most spectacular scenery in the Canary Islands. A guide keeps the group together, points out the geology and plant life, and keeps the pace suited to everyone. At the bottom, a boat picks you up and carries you back along the Los Gigantes cliffs, which is a grand finale in itself.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Anyone reasonably fit who wants a proper adventure rather than a stroll. Decent shoes and a bit of effort required. If you love the dramatic side of the island, pair it with a <a href=\"/en/activities/los-gigantes-boat-trip\">Los Gigantes boat trip</a> or the <a href=\"/en/activities/teide-cable-car-tour\">Teide cable car</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "Wear proper walking shoes and bring plenty of water, sun protection and a snack. The gorge can close after heavy rain for safety, and access is managed, so a guided trip takes care of the logistics. It is downhill but uneven, so take your time.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'How hard is the Masca gorge hike?', a: 'It is moderate. The route is mostly downhill but rocky and uneven, so you need a basic level of fitness and sturdy shoes, but you do not need to be an athlete.' },
        { q: 'How long does it take?', a: 'The walk down typically takes around three hours, plus the boat ride back. A full guided trip is usually most of the day with transport included.' },
        { q: 'Do I get a boat back?', a: 'Yes, most guided hikes finish with a boat pickup at the coast that takes you back along the Los Gigantes cliffs, saving you the steep climb out.' },
        { q: 'What should I bring?', a: 'Walking shoes, plenty of water, sun cream, a hat and a snack. Swimwear is handy if you fancy a dip before the boat.' },
        { q: 'Can the trail close?', a: 'Yes. Access is managed and the gorge can close after heavy rain for safety. A guided tour will handle permits and conditions for you.' },
      ],
    },
  },
  {
    slug: 'paragliding-tenerife',
    name: 'Paragliding Tandem Flight',
    category: 'Nature & Adventure',
    description:
      'Soar above the cliffs and coastline of Tenerife on a tandem paragliding flight with a national champion pilot. Launch from the mountains and glide over beaches, volcanic peaks, and turquoise sea. No experience needed, your pilot does all the work.',
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
    seoDescription: {
      en: "Launch from the mountains and soar over Tenerife on a tandem paragliding flight with an expert pilot. Beaches, volcanic peaks and turquoise sea beneath your feet. No experience needed.",
    },
    body: {
      en: [
        {
          h: 'A few steps, and then you are flying',
          p: [
            "You run a few steps down a slope, the wing lifts, and the ground simply falls away beneath you. That is it. You are flying. Strapped safely in front of an expert pilot, you glide over the cliffs and coastline of Tenerife with nothing but air between you and the turquoise sea. It is quiet, it is smooth, and it is the closest most of us will ever get to being a bird.",
          ],
        },
        {
          h: 'What the flight is like',
          p: [
            "Your pilot handles the launch, the flight and the landing, so all you do is sit back and take it in. You soar over beaches, volcanic peaks and the deep blue Atlantic, with the whole island laid out below. Flights range from gentle cruises to more dynamic rides if you want a bit more, and many of the pilots here are national champions who fly these skies every day.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Anyone who has ever looked up and wondered. No experience is needed and the pilot does all the work, so it suits nervous first timers and thrill seekers alike. If you want the view without the height, try <a href=\"/en/activities/parasailing-tenerife\">parasailing</a>, or go bigger with a <a href=\"/en/activities/helicopter-tenerife\">helicopter flight</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "Wear comfortable clothes and trainers you can run a few steps in, and bring a light layer as it is cooler up high. Flights depend on the wind, so a calm, clear day is ideal. Pilots often carry a camera so you get the photos to prove it.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Do I need any experience?', a: 'None. It is a tandem flight, so an experienced pilot controls everything. You just enjoy the view.' },
        { q: 'Is it safe?', a: 'Tandem paragliding with a qualified pilot is a well established, carefully run activity. Pilots check conditions and equipment before every flight and only fly when it is safe.' },
        { q: 'What do I do at take off?', a: 'Just run a few steps down the slope with your pilot until the wing lifts you. It happens quickly and the pilot guides you through it.' },
        { q: 'How long is a flight?', a: 'It varies with the package and conditions, from around ten or fifteen minutes up to longer flights. Your operator will tell you what to expect.' },
        { q: 'What should I wear?', a: 'Comfortable clothes, trainers you can run a couple of steps in, and a light layer, since it is cooler in the air than on the ground.' },
      ],
    },
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
    seoDescription: {
      en: "See the quiet, green side of Tenerife from the saddle on a guided horse ride. Forest trails, volcanic views and a gentle pace for all levels, with an instructor included.",
    },
    body: {
      en: [
        {
          h: 'Slow down and see the Tenerife most people miss',
          p: [
            "Not everything has to be fast. Swap the engine noise for the sound of hooves on a trail and Tenerife shows you a softer side, pine forests, open countryside, volcanic views opening up between the trees. There is something genuinely calming about seeing the island from the back of a horse, moving at a gentle, unhurried pace with a guide leading the way.",
          ],
        },
        {
          h: 'What the ride is like',
          p: [
            "An instructor matches you with a horse suited to your experience, gives you the basics if you are new, and leads the group along scenic trails. Complete beginners are welcome and the pace stays relaxed and safe. More confident riders can usually get a bit more out of it. Either way, it is you, the horse and some of the prettiest countryside on the island.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Couples after something romantic, families, animal lovers, and anyone who wants a break from the beach at a gentler speed. If you like the calmer side of Tenerife, follow it with a <a href=\"/en/activities/wine-tasting-tenerife\">wine tasting in the hills</a> or a <a href=\"/en/activities/tenerife-north-day-trip\">tour of the green north</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "Wear long trousers and closed shoes, and bring sun cream and water. There are usually weight limits and minimum ages for safety. No experience is needed, just let the guide know your comfort level and they will do the rest.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Can I ride if I am a complete beginner?', a: 'Yes. Guides match you with a calm horse and teach you the basics first. The pace stays gentle and beginners are very welcome.' },
        { q: 'Is it suitable for children?', a: 'Often yes, with minimum ages depending on the stable. Many rides are family friendly, so check with the operator.' },
        { q: 'What should I wear?', a: 'Long trousers and closed shoes are best, plus sun cream, a hat and water. Avoid shorts, as they can be uncomfortable in the saddle.' },
        { q: 'Are there weight limits?', a: 'Yes, most stables set weight limits for the welfare of the horses. Check the details when you book.' },
        { q: 'How long is a typical ride?', a: 'Rides vary from about an hour to half a day, depending on the route and package you choose.' },
      ],
    },
  },
  {
    slug: 'helicopter-tenerife',
    name: 'Helicopter Flight over Tenerife',
    category: 'Nature & Adventure',
    description:
      "See Tenerife from the air on an unforgettable helicopter flight. Fly over Mount Teide, the Las Cañadas crater, dramatic cliffs and pristine beaches. A truly bucket-list experience that gives you a completely new perspective on the island, something you simply can't get any other way.",
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
    seoDescription: {
      en: "See Tenerife from the air on a helicopter flight over Mount Teide, dramatic cliffs and hidden beaches. A genuine bucket list experience and a view you cannot get any other way.",
    },
    body: {
      en: [
        {
          h: 'The view that makes the whole island make sense',
          p: [
            "You can drive Tenerife for a week and still not grasp its scale. Lift off in a helicopter and it all clicks in minutes. The vast crater of Las Cañadas, Teide towering over everything, cliffs plunging into the sea, beaches you did not know existed. It is a splurge, no question, but it is the kind of thing people remember for the rest of their lives and never once regret.",
          ],
        },
        {
          h: 'What the flight is like',
          p: [
            "You lift off smoothly and climb over the landscape, with big windows and a headset so the pilot can point out what you are seeing. Routes vary, from quick coastal hops to longer flights over Teide National Park and the dramatic west coast. Every seat gets a view, and the perspective is simply unlike anything you get on the ground.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Special occasions, proposals, once in a lifetime treats, and anyone who wants the ultimate view of the island. If you love seeing Tenerife from above, pair it with <a href=\"/en/activities/paragliding-tenerife\">tandem paragliding</a>, or get up close to the summit with the <a href=\"/en/activities/teide-cable-car-tour\">Teide cable car</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "Flights depend on the weather, so clear, calm days are best and times can shift. Bring sunglasses and a camera. It is worth booking ahead, since helicopter slots are limited and popular, especially for special occasions.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Is it worth the money?', a: 'It is a premium experience, but people rarely regret it. The scale and perspective you get of Teide and the coast are impossible to match any other way.' },
        { q: 'How long is a helicopter flight?', a: 'It depends on the route, from short coastal flights of around fifteen minutes to longer tours over Teide National Park. Your operator will list the options.' },
        { q: 'Will I get a good view from my seat?', a: 'Yes, flights are arranged so passengers get strong views, and a headset lets the pilot point out landmarks as you go.' },
        { q: 'What happens if the weather is bad?', a: 'Flights only run in safe, clear conditions, so times may change or be rescheduled. Operators will advise you if the weather does not cooperate.' },
        { q: 'Can I book it for a special occasion?', a: 'Absolutely. It is popular for proposals, birthdays and anniversaries. Book ahead, as slots are limited.' },
      ],
    },
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
    seoDescription: {
      en: "Skip the queue at Loro Parque in Puerto de la Cruz, one of the best animal parks in the world. Orcas, dolphins, penguins and parrots, a brilliant full day out for families.",
    },
    body: {
      en: [
        {
          h: 'The day the kids will not stop talking about',
          p: [
            "Some places just work for a family, and Loro Parque is one of them. Tucked into Puerto de la Cruz in the green north, it has been voted one of the best zoos in the world, and you see why the moment you walk in. Penguins waddling behind glass, dolphins leaping, parrots in every colour, and gardens so lush you forget you are on a volcanic island. It is a full day, and nobody gets bored.",
          ],
        },
        {
          h: 'What there is to see',
          p: [
            "The park is huge and beautifully kept, with orcas, dolphins, a giant penguin house, sharks, gorillas, big cats and one of the largest parrot collections anywhere. There are shows and feeding times through the day, shaded walkways and plenty of places to stop and eat. Getting your ticket in advance means you walk straight in rather than queue.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Families first and foremost, but animal lovers of any age get a lot out of it. It pairs well with a day exploring the north, so combine it with a <a href=\"/en/activities/tenerife-north-day-trip\">grand tour of northern Tenerife</a>, or balance the week with a water park day at <a href=\"/en/activities/siam-park-tickets\">Siam Park</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "It is in the north near Puerto de la Cruz, so factor in the drive if you are staying in the south. Wear comfy shoes, bring sun cream and water, and arrive early to make the most of the day. Buying tickets ahead saves time at the gate.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Where is Loro Parque?', a: 'It is in Puerto de la Cruz on the north coast of Tenerife. If you are staying in the south, allow time for the drive, as it is a full day out.' },
        { q: 'What animals will I see?', a: "Expect orcas, dolphins, penguins, sharks, gorillas, big cats and one of the world's largest parrot collections, along with beautiful gardens." },
        { q: 'Is it good for young children?', a: 'Yes, it is one of the most family friendly days out on the island, with shows, feedings and plenty to see at a gentle pace.' },
        { q: 'Does the ticket let me skip the queue?', a: 'Booking in advance means you can head straight in rather than waiting at the ticket office, which saves time on busy days.' },
        { q: 'How long should I allow?', a: 'Plan for a full day. The park is large, and there are shows and feeding times spread across the day you will not want to rush.' },
      ],
    },
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
    seoDescription: {
      en: "Book tickets to Siam Park in Tenerife, regularly rated the best water park in the world. Huge slides, a wave pool and a lazy river, the ultimate fun day in the sun.",
    },
    body: {
      en: [
        {
          h: 'Regularly called the best water park on the planet',
          p: [
            "Siam Park does not mess about. It has been voted the world's best water park year after year, and one day inside tells you why. Slides that drop you nearly vertical, a wave pool that kicks up proper surf, a lazy river for when your legs give out, and a whole Thai themed world built around it. It is adrenaline and lounging in equal measure, and the day disappears before you know it.",
          ],
        },
        {
          h: 'What to ride',
          p: [
            "The Tower of Power sends you down a near vertical drop through a tank of sharks. The Dragon and the Singha deliver twists and speed. Then there is the enormous wave pool with its white sand beach, the gentle lazy river that loops the whole park, and a dedicated area for younger kids. Something for the daredevils and something for everyone else.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Families, teenagers, couples, thrill seekers, pretty much anyone who likes water and sunshine. Balance a wild water day here with the animals at <a href=\"/en/activities/loro-parque-tickets\">Loro Parque</a>, or recover the next day on a gentle <a href=\"/en/activities/catamaran-sunset-cruise-tenerife\">sunset cruise</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "It is in Costa Adeje in the south, easy to reach from most resorts. Go early to beat the queues for the big slides, bring sun cream and reapply it often, and consider hiring a locker. Tickets booked ahead save time at the entrance.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Where is Siam Park?', a: 'It is in Costa Adeje on the south coast of Tenerife, within easy reach of most southern resorts.' },
        { q: 'Is it suitable for young children?', a: "Yes. Alongside the big thrill slides there is a dedicated kids' area, a wave pool and a lazy river, so families with all ages are well catered for." },
        { q: 'What are the must-ride slides?', a: 'The Tower of Power with its near vertical drop is the headline, along with the Dragon and the Singha. The wave pool is a favourite with everyone.' },
        { q: 'Should I book tickets in advance?', a: 'Yes, booking ahead saves queuing at the entrance and means you can get straight to the slides, especially in peak season.' },
        { q: 'How long should I spend there?', a: 'A full day is ideal. There is enough to fill it, and going early helps you get on the big rides before the queues build.' },
      ],
    },
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
    seoDescription: {
      en: "Go wheel to wheel on the kart track in Tenerife. Real speed, real racing and serious bragging rights. Great for groups, families and anyone who fancies themselves behind the wheel.",
    },
    body: {
      en: [
        {
          h: 'Five minutes in and you are taking it way too seriously',
          p: [
            "It always starts as a bit of fun. Then the lights go green, someone cuts you up into the first corner, and suddenly it is personal. Karting in Tenerife is proper wheel to wheel racing, low to the ground, surprisingly fast, and ridiculously good fun. You will come off the track arguing about lap times and demanding a rematch.",
          ],
        },
        {
          h: 'What a session is like',
          p: [
            "You gear up with a helmet, get a quick briefing on the track and the flags, and then you are racing. The karts are quicker than people expect, and the circuit has enough corners to separate the brave from the sensible. There are usually options for different ages and power levels, so serious racers and total beginners can share the same group.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Groups, friends, families with older kids, stag and hen parties, and anyone with a competitive streak. Stack it into a day of adrenaline with a <a href=\"/en/activities/jet-ski-tenerife\">jet ski session</a> or a <a href=\"/en/activities/quad-buggy-tour-tenerife\">quad and buggy tour</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "Wear closed shoes and comfortable clothes, and tie back long hair. There are minimum ages and height requirements for the faster karts, with junior options for younger drivers. Book ahead if you are bringing a group so you can race together.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'Do I need experience to go karting?', a: 'No. A quick briefing covers everything you need, and the karts are easy to drive. Beginners and experienced racers often share the same session.' },
        { q: 'Is there a minimum age?', a: 'Yes, with junior karts for younger drivers and more powerful ones for adults. Height and age requirements vary, so check with the track.' },
        { q: 'Can we race as a group?', a: 'Definitely. Karting is at its best with a group, and tracks can often arrange races and timed sessions so you compete directly. Book ahead for larger groups.' },
        { q: 'What should I wear?', a: 'Closed shoes and comfortable clothes, with long hair tied back. Helmets and any other safety gear are provided.' },
        { q: 'How long is a session?', a: 'Sessions vary, from a single sprint race to longer packages with multiple heats. The track will list the options when you book.' },
      ],
    },
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
    seoDescription: {
      en: "Taste Tenerife's volcanic wines on a guided tour through the vineyards. Local grapes grown on black soil, cheese and views, and a side of the island most visitors never find.",
    },
    body: {
      en: [
        {
          h: 'Wine grown on a volcano, and you can taste it',
          p: [
            "Here is something most visitors never realise. Tenerife makes seriously good wine, grown on black volcanic soil on vines that survived when much of Europe's did not. Spend an afternoon in the hills tasting it and you get a completely different side of the island, slower, greener and quietly delicious. Good glass in hand, valley rolling away below you, this is Tenerife at its most grown up.",
          ],
        },
        {
          h: 'What the tasting is like',
          p: [
            "A guide takes you up into wine country, often around Tacoronte or the Orotava Valley, where you tour a vineyard and taste a selection of local wines paired with cheese and other local produce. You learn how the volcanic soil and the unusual grape varieties shape the flavour, without any of the stuffiness. It is relaxed, friendly and a very easy way to spend an afternoon.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Couples, foodies, and anyone who wants the calmer, more cultural side of Tenerife. It goes beautifully with a gentle <a href=\"/en/activities/horse-riding-tenerife\">horse ride through the countryside</a> or a full <a href=\"/en/activities/tenerife-north-day-trip\">tour of the green north</a>.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "Most tours include transport, which means nobody has to drive and everyone gets to taste. Bring a light layer, since the hills are cooler than the coast, and come a little hungry, because there is usually food alongside the wine.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'What kind of wine does Tenerife produce?', a: 'Tenerife makes distinctive volcanic wines from local grape varieties grown on black soil, including crisp whites and characterful reds you rarely find elsewhere.' },
        { q: 'Is transport included?', a: 'Most guided tastings include transport to and from the vineyards, so you can enjoy the wine without worrying about driving.' },
        { q: 'Is food included?', a: 'Usually yes. Tastings are commonly paired with local cheese and other produce, which brings out the flavours of the wine.' },
        { q: 'Where do the tours go?', a: 'Often into wine regions like Tacoronte or the Orotava Valley in the north, where the vineyards and views are at their best.' },
        { q: 'Do I need to know about wine?', a: 'Not at all. Guides explain everything in a relaxed, friendly way, so it is enjoyable whether you are a connoisseur or just curious.' },
      ],
    },
  },
  {
    slug: 'tenerife-north-day-trip',
    name: 'Tenerife North Island Tour',
    category: 'Evenings & Shows',
    description:
      "Experience the lush, green side of Tenerife on a guided grand tour of the north. Visit Teide National Park, the UNESCO World Heritage city of La Laguna, Orotava Valley, cliffs at Masca, and the botanical gardens of Puerto de la Cruz, all in one unforgettable day.",
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
    seoDescription: {
      en: "Discover the lush, green north of Tenerife on a guided grand tour. Teide National Park, the UNESCO city of La Laguna, the Orotava Valley and Masca, all in one unforgettable day.",
    },
    body: {
      en: [
        {
          h: 'The other Tenerife, the one the brochures forget',
          p: [
            "If your idea of Tenerife is sunbeds and resorts, the north will quietly blow that away. This side of the island is green, dramatic and full of history, laurel forests, colonial towns, volcanic valleys and viewpoints that stop you mid sentence. A guided grand tour packs the highlights into a single day, with someone else driving the mountain roads so you just look out of the window and take it all in.",
          ],
        },
        {
          h: 'What you will see',
          p: [
            "A typical tour weaves together the big ones, Teide National Park and its lunar landscapes, the UNESCO World Heritage streets of La Laguna, the grand old houses of the Orotava Valley, the cliffs around Masca and the gardens of Puerto de la Cruz. A guide fills in the history and the stories as you go, and you cover ground that would take days to reach on your own.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Anyone who wants to actually understand the island rather than just lie on it. It suits couples, families and curious first timers. Go deeper on the headline sights with the <a href=\"/en/activities/teide-cable-car-tour\">Teide cable car</a>, or slow right down with a <a href=\"/en/activities/wine-tasting-tenerife\">vineyard tasting</a> in the north.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "It is a full day with a fair bit of driving on winding mountain roads, so bring layers, as the north and the high ground are cooler than the southern beaches. Comfortable shoes, a camera and a bit of curiosity are all you need.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'What does the north of Tenerife have that the south does not?', a: 'A greener, more dramatic landscape and a lot of history, including laurel forests, the UNESCO city of La Laguna, the Orotava Valley and the cliffs around Masca.' },
        { q: 'Is transport included?', a: 'Guided day tours include transport, so you avoid the winding mountain roads and simply enjoy the scenery while someone else drives.' },
        { q: 'How long is the day?', a: 'It is a full day out, typically with several stops. Expect to be out for most of the day, including travel between the sights.' },
        { q: 'What should I bring?', a: 'Layers, since the north and higher ground are cooler, plus comfortable shoes, sun protection, water and a camera.' },
        { q: 'Is it suitable for families?', a: 'Yes, though it involves a fair amount of travel. It suits families who enjoy sightseeing and do not mind time in the vehicle between stops.' },
      ],
    },
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
    seoDescription: {
      en: "Spend an evening with live flamenco and dinner in Tenerife. Raw guitar, fierce footwork and a proper Spanish night out, with a full meal and plenty of atmosphere.",
    },
    body: {
      en: [
        {
          h: 'The night Spain gets under your skin',
          p: [
            "You can feel flamenco before you understand it. The guitar starts low, a voice cracks open with something that sounds like heartbreak, and then the dancer stamps and the whole room holds its breath. See it live, up close, over dinner in Tenerife, and it stops being a tourist show and becomes the evening you did not expect to be moved by. This is the island after dark, passionate and alive.",
          ],
        },
        {
          h: 'What the evening is like',
          p: [
            "You settle in for a multi course dinner while live flamenco unfolds on stage, singers, a guitarist and dancers giving it everything just a few metres away. The food is generous, the atmosphere builds through the night, and between courses the performance pulls you straight back in. It is dinner and a proper show rolled into one unhurried evening.",
          ],
        },
        {
          h: 'Who it is for',
          p: [
            "Couples after a romantic night, groups wanting a real Spanish evening, and anyone curious about the culture beyond the beach. Make a whole day of the island's softer side with a <a href=\"/en/activities/wine-tasting-tenerife\">wine tasting</a> beforehand, or wind down on a <a href=\"/en/activities/catamaran-sunset-cruise-tenerife\">sunset cruise</a> first.",
          ],
        },
        {
          h: 'Good to know',
          p: [
            "Smart casual usually hits the right note. Book ahead, since the good evenings fill up, and let them know in advance about any dietary needs so the kitchen can sort it. Then just turn up ready to be swept along.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        { q: 'What is included in a flamenco dinner show?', a: 'Typically a multi course dinner with drinks and a live flamenco performance of singing, guitar and dance, all in one evening.' },
        { q: 'Is it suitable for couples?', a: 'Very much so. It is a popular choice for a romantic or special evening, though it works just as well for groups wanting a lively Spanish night out.' },
        { q: 'What should I wear?', a: 'Smart casual is usually right. There is no need to dress up formally, but it is a nice evening out rather than a beach bar.' },
        { q: 'Can dietary requirements be catered for?', a: 'Usually yes, if you let them know in advance. Mention any allergies or dietary needs when you book so the kitchen can prepare.' },
        { q: 'Do I need to book ahead?', a: 'Yes, it is wise to book in advance, as the popular evenings fill up, especially in high season.' },
      ],
    },
  },
];

export const activityCategories: ActivityCategory[] = [
  'Water & Sea',
  'Nature & Adventure',
  'Parks & Attractions',
  'Evenings & Shows',
];
