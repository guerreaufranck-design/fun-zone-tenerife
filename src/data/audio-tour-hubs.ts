/**
 * Localized hub copy for the per-island audio-tour landing pages
 * (`/gran-canaria-audio-tour`, `/lanzarote-audio-tour`, `/fuerteventura-audio-tour`).
 *
 * Tenerife keeps its own bespoke hub page. Shape mirrors `HubCopy` in
 * `@/components/audio-tour/IslandHub`.
 */
import type { HubCopy } from '@/components/audio-tour/IslandHub';

type HubStore = Record<string, HubCopy>;

export const GRAN_CANARIA_HUB: HubStore = {
  en: {
    metaTitle: 'Gran Canaria Audio Tours · Self-Guided City Walks',
    metaDescription:
      'Self-guided GPS audio tours of Gran Canaria, starting with the old town of Las Palmas. Native-voice stories in 32 languages, offline, 12 € per code.',
    keywords: 'gran canaria audio tours, self-guided tour gran canaria, las palmas walking tour, things to do gran canaria, audio guide gran canaria',
    heading: 'Gran Canaria city audio tours',
    intro: 'Self-guided GPS audio walks through the historic heart of Gran Canaria. Native-voice narration in 32 languages, offline, with an augmented-reality guide. Pick a town to begin.',
    explore: 'Explore',
  },
  fr: {
    metaTitle: 'Visites audio de Gran Canaria · Balades autoguidées',
    metaDescription:
      'Visites audio GPS en autonomie de Grande Canarie, à commencer par la vieille ville de Las Palmas. Récits en voix native dans 32 langues, hors ligne, 12 € le code.',
    keywords: 'visites audio gran canaria, visite autoguidée grande canarie, visite à pied las palmas, que faire à grande canarie, audioguide gran canaria',
    heading: 'Visites audio des villes de Gran Canaria',
    intro: 'Des balades audio GPS en autonomie au cœur historique de Grande Canarie. Narration en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée. Choisissez une ville pour commencer.',
    explore: 'Explorer',
  },
  es: {
    metaTitle: 'Audioguías de Gran Canaria · Rutas autoguiadas',
    metaDescription:
      'Audioguías GPS autoguiadas de Gran Canaria, empezando por el casco antiguo de Las Palmas. Relatos en voz nativa en 32 idiomas, sin conexión, 12 € por código.',
    keywords: 'audioguías gran canaria, ruta autoguiada gran canaria, ruta a pie las palmas, qué ver en gran canaria, audioguía gran canaria',
    heading: 'Audioguías de las ciudades de Gran Canaria',
    intro: 'Paseos con audioguía GPS autoguiada por el corazón histórico de Gran Canaria. Narración en voz nativa en 32 idiomas, sin conexión, con un guía de realidad aumentada. Elige una ciudad para empezar.',
    explore: 'Explorar',
  },
  de: {
    metaTitle: 'Audiotouren Gran Canaria · Selbstgeführte Stadtrundgänge',
    metaDescription:
      'Selbstgeführte GPS-Audiotouren durch Gran Canaria, beginnend mit der Altstadt von Las Palmas. Erzählungen von Muttersprachlern in 32 Sprachen, offline, 12 € pro Code.',
    keywords: 'audiotouren gran canaria, selbstgeführte tour gran canaria, stadtrundgang las palmas, sehenswürdigkeiten gran canaria, audioguide gran canaria',
    heading: 'Audiotouren durch Gran Canarias Städte',
    intro: 'Selbstgeführte GPS-Audiospaziergänge durch das historische Herz Gran Canarias. Erzählung von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide. Wählen Sie eine Stadt, um zu beginnen.',
    explore: 'Entdecken',
  },
  it: {
    metaTitle: 'Audioguide di Gran Canaria · Tour autoguidati',
    metaDescription:
      'Tour audio GPS in autonomia di Gran Canaria, a partire dal centro storico di Las Palmas. Racconti a voce madrelingua in 32 lingue, offline, 12 € a codice.',
    keywords: 'audioguide gran canaria, tour autoguidato gran canaria, tour a piedi las palmas, cosa vedere a gran canaria, audioguida gran canaria',
    heading: 'Audioguide delle città di Gran Canaria',
    intro: 'Passeggiate con audioguida GPS in autonomia nel cuore storico di Gran Canaria. Narrazione a voce madrelingua in 32 lingue, offline, con guida in realtà aumentata. Scegli una città per iniziare.',
    explore: 'Esplora',
  },
  nl: {
    metaTitle: 'Audiotours Gran Canaria · Zelfgeleide stadswandelingen',
    metaDescription:
      'Zelfgeleide gps-audiotours door Gran Canaria, te beginnen met de oude stad van Las Palmas. Verhalen in moedertaalstem in 32 talen, offline, 12 € per code.',
    keywords: 'audiotours gran canaria, zelfgeleide tour gran canaria, stadswandeling las palmas, bezienswaardigheden gran canaria, audiogids gran canaria',
    heading: 'Audiotours door de steden van Gran Canaria',
    intro: 'Zelfgeleide gps-audiowandelingen door het historische hart van Gran Canaria. Verteld door moedertaalsprekers in 32 talen, offline, met augmented-reality-gids. Kies een stad om te beginnen.',
    explore: 'Ontdekken',
  },
};

export const LANZAROTE_HUB: HubStore = {
  en: {
    metaTitle: 'Lanzarote Audio Tours · Self-Guided City Walks',
    metaDescription:
      'Self-guided GPS audio tours of Lanzarote: the capital Arrecife and the old capital Teguise. Native-voice stories in 32 languages, offline, 12 € per code.',
    keywords: 'lanzarote audio tours, self-guided tour lanzarote, arrecife walking tour, teguise walking tour, audio guide lanzarote',
    heading: 'Lanzarote city audio tours',
    intro: 'Self-guided GPS audio walks through Lanzarote’s towns, from the seafront capital of Arrecife to the whitewashed old capital of Teguise. Native-voice narration in 32 languages, offline, with an augmented-reality guide. Pick a town to begin.',
    explore: 'Explore',
  },
  fr: {
    metaTitle: 'Visites audio de Lanzarote · Balades autoguidées',
    metaDescription:
      'Visites audio GPS en autonomie de Lanzarote : la capitale Arrecife et l’ancienne capitale Teguise. Récits en voix native dans 32 langues, hors ligne, 12 € le code.',
    keywords: 'visites audio lanzarote, visite autoguidée lanzarote, visite à pied arrecife, visite à pied teguise, audioguide lanzarote',
    heading: 'Visites audio des villes de Lanzarote',
    intro: 'Des balades audio GPS en autonomie dans les villes de Lanzarote, de la capitale maritime Arrecife à l’ancienne capitale blanche de Teguise. Narration en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée. Choisissez une ville pour commencer.',
    explore: 'Explorer',
  },
  es: {
    metaTitle: 'Audioguías de Lanzarote · Rutas autoguiadas',
    metaDescription:
      'Audioguías GPS autoguiadas de Lanzarote: la capital Arrecife y la antigua capital Teguise. Relatos en voz nativa en 32 idiomas, sin conexión, 12 € por código.',
    keywords: 'audioguías lanzarote, ruta autoguiada lanzarote, ruta a pie arrecife, ruta a pie teguise, audioguía lanzarote',
    heading: 'Audioguías de las ciudades de Lanzarote',
    intro: 'Paseos con audioguía GPS autoguiada por los pueblos de Lanzarote, de la capital marinera de Arrecife a la antigua capital blanca de Teguise. Narración en voz nativa en 32 idiomas, sin conexión, con un guía de realidad aumentada. Elige un pueblo para empezar.',
    explore: 'Explorar',
  },
  de: {
    metaTitle: 'Audiotouren Lanzarote · Selbstgeführte Stadtrundgänge',
    metaDescription:
      'Selbstgeführte GPS-Audiotouren durch Lanzarote: die Hauptstadt Arrecife und die alte Hauptstadt Teguise. Erzählungen von Muttersprachlern in 32 Sprachen, offline, 12 € pro Code.',
    keywords: 'audiotouren lanzarote, selbstgeführte tour lanzarote, stadtrundgang arrecife, stadtrundgang teguise, audioguide lanzarote',
    heading: 'Audiotouren durch Lanzarotes Städte',
    intro: 'Selbstgeführte GPS-Audiospaziergänge durch Lanzarotes Städte, von der Hafenhauptstadt Arrecife bis zur weißen alten Hauptstadt Teguise. Erzählung von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide. Wählen Sie eine Stadt, um zu beginnen.',
    explore: 'Entdecken',
  },
  it: {
    metaTitle: 'Audioguide di Lanzarote · Tour autoguidati',
    metaDescription:
      'Tour audio GPS in autonomia di Lanzarote: la capitale Arrecife e l’antica capitale Teguise. Racconti a voce madrelingua in 32 lingue, offline, 12 € a codice.',
    keywords: 'audioguide lanzarote, tour autoguidato lanzarote, tour a piedi arrecife, tour a piedi teguise, audioguida lanzarote',
    heading: 'Audioguide delle città di Lanzarote',
    intro: 'Passeggiate con audioguida GPS in autonomia nelle città di Lanzarote, dalla capitale sul mare Arrecife all’antica capitale bianca di Teguise. Narrazione a voce madrelingua in 32 lingue, offline, con guida in realtà aumentata. Scegli una città per iniziare.',
    explore: 'Esplora',
  },
  nl: {
    metaTitle: 'Audiotours Lanzarote · Zelfgeleide stadswandelingen',
    metaDescription:
      'Zelfgeleide gps-audiotours door Lanzarote: de hoofdstad Arrecife en de oude hoofdstad Teguise. Verhalen in moedertaalstem in 32 talen, offline, 12 € per code.',
    keywords: 'audiotours lanzarote, zelfgeleide tour lanzarote, stadswandeling arrecife, stadswandeling teguise, audiogids lanzarote',
    heading: 'Audiotours door de steden van Lanzarote',
    intro: 'Zelfgeleide gps-audiowandelingen door de steden van Lanzarote, van de hoofdstad aan zee Arrecife tot de witte oude hoofdstad Teguise. Verteld door moedertaalsprekers in 32 talen, offline, met augmented-reality-gids. Kies een stad om te beginnen.',
    explore: 'Ontdekken',
  },
};

export const FUERTEVENTURA_HUB: HubStore = {
  en: {
    metaTitle: 'Fuerteventura Audio Tours · Self-Guided City Walks',
    metaDescription:
      'Self-guided GPS audio tours of Fuerteventura, starting with the old capital Betancuria. Native-voice stories in 32 languages, offline, 12 € per code.',
    keywords: 'fuerteventura audio tours, self-guided tour fuerteventura, betancuria walking tour, things to do fuerteventura, audio guide fuerteventura',
    heading: 'Fuerteventura city audio tours',
    intro: 'Self-guided GPS audio walks through historic Fuerteventura, starting in the old capital of Betancuria. Native-voice narration in 32 languages, offline, with an augmented-reality guide. Pick a town to begin.',
    explore: 'Explore',
  },
  fr: {
    metaTitle: 'Visites audio de Fuerteventura · Balades autoguidées',
    metaDescription:
      'Visites audio GPS en autonomie de Fuerteventura, à commencer par l’ancienne capitale Betancuria. Récits en voix native dans 32 langues, hors ligne, 12 € le code.',
    keywords: 'visites audio fuerteventura, visite autoguidée fuerteventura, visite à pied betancuria, que faire à fuerteventura, audioguide fuerteventura',
    heading: 'Visites audio des villes de Fuerteventura',
    intro: 'Des balades audio GPS en autonomie dans la Fuerteventura historique, à commencer par l’ancienne capitale Betancuria. Narration en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée. Choisissez une ville pour commencer.',
    explore: 'Explorer',
  },
  es: {
    metaTitle: 'Audioguías de Fuerteventura · Rutas autoguiadas',
    metaDescription:
      'Audioguías GPS autoguiadas de Fuerteventura, empezando por la antigua capital Betancuria. Relatos en voz nativa en 32 idiomas, sin conexión, 12 € por código.',
    keywords: 'audioguías fuerteventura, ruta autoguiada fuerteventura, ruta a pie betancuria, qué ver en fuerteventura, audioguía fuerteventura',
    heading: 'Audioguías de las ciudades de Fuerteventura',
    intro: 'Paseos con audioguía GPS autoguiada por la Fuerteventura histórica, empezando por la antigua capital Betancuria. Narración en voz nativa en 32 idiomas, sin conexión, con un guía de realidad aumentada. Elige un pueblo para empezar.',
    explore: 'Explorar',
  },
  de: {
    metaTitle: 'Audiotouren Fuerteventura · Selbstgeführte Stadtrundgänge',
    metaDescription:
      'Selbstgeführte GPS-Audiotouren durch Fuerteventura, beginnend mit der alten Hauptstadt Betancuria. Erzählungen von Muttersprachlern in 32 Sprachen, offline, 12 € pro Code.',
    keywords: 'audiotouren fuerteventura, selbstgeführte tour fuerteventura, stadtrundgang betancuria, sehenswürdigkeiten fuerteventura, audioguide fuerteventura',
    heading: 'Audiotouren durch Fuerteventuras Städte',
    intro: 'Selbstgeführte GPS-Audiospaziergänge durch das historische Fuerteventura, beginnend in der alten Hauptstadt Betancuria. Erzählung von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide. Wählen Sie eine Stadt, um zu beginnen.',
    explore: 'Entdecken',
  },
  it: {
    metaTitle: 'Audioguide di Fuerteventura · Tour autoguidati',
    metaDescription:
      'Tour audio GPS in autonomia di Fuerteventura, a partire dall’antica capitale Betancuria. Racconti a voce madrelingua in 32 lingue, offline, 12 € a codice.',
    keywords: 'audioguide fuerteventura, tour autoguidato fuerteventura, tour a piedi betancuria, cosa vedere a fuerteventura, audioguida fuerteventura',
    heading: 'Audioguide delle città di Fuerteventura',
    intro: 'Passeggiate con audioguida GPS in autonomia nella Fuerteventura storica, a partire dall’antica capitale Betancuria. Narrazione a voce madrelingua in 32 lingue, offline, con guida in realtà aumentata. Scegli una città per iniziare.',
    explore: 'Esplora',
  },
  nl: {
    metaTitle: 'Audiotours Fuerteventura · Zelfgeleide stadswandelingen',
    metaDescription:
      'Zelfgeleide gps-audiotours door Fuerteventura, te beginnen met de oude hoofdstad Betancuria. Verhalen in moedertaalstem in 32 talen, offline, 12 € per code.',
    keywords: 'audiotours fuerteventura, zelfgeleide tour fuerteventura, stadswandeling betancuria, bezienswaardigheden fuerteventura, audiogids fuerteventura',
    heading: 'Audiotours door de steden van Fuerteventura',
    intro: 'Zelfgeleide gps-audiowandelingen door het historische Fuerteventura, te beginnen in de oude hoofdstad Betancuria. Verteld door moedertaalsprekers in 32 talen, offline, met augmented-reality-gids. Kies een stad om te beginnen.',
    explore: 'Ontdekken',
  },
};
