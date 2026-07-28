/**
 * Content for the stag & hen / EVG-EVJF pillar landing page (/celebrations,
 * localized slug per market). This is a conversion + SEO page: it funnels group
 * celebrations toward Fun Zone's own activities (axe throwing as the hero) and
 * cross-sells complementary GetYourGuide experiences (boat parties, jet ski…).
 *
 * One rich, unique block per locale — never machine-duplicated — so each market
 * (UK/IE for EN, ES, FR, DE, NL, IT) ranks on its own high-intent keyword.
 */
import type { Locale } from '@/i18n/routing';

export interface CelebrationFaq {
  q: string;
  a: string;
}

export interface CelebrationContent {
  /** Localized URL slug (also the i18n pathname target). */
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  h1: string;
  subtitle: string;
  intro: string;
  whyTitle: string;
  why: string[];
  activitiesTitle: string;
  /** Short pitch shown on the axe-throwing hero card. */
  heroActivity: { name: string; pitch: string };
  activities: { name: string; blurb: string }[];
  /** Cross-sell (GetYourGuide) block. */
  crossSellTitle: string;
  crossSellIntro: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  faqTitle: string;
  faq: CelebrationFaq[];
}

export const celebrations: Record<Locale, CelebrationContent> = {
  en: {
    slug: 'stag-hen-party-tenerife',
    seoTitle: 'Stag Do & Hen Party Tenerife | Group Activities in Playa Las Américas',
    seoDescription:
      'Planning a stag do or hen party in Tenerife? Axe throwing, escape games, quiz battles and boat parties in Playa Las Américas — unforgettable group activities, easy to book, all in one place.',
    keywords:
      'stag do tenerife, hen party tenerife, stag weekend tenerife, hen do tenerife, group activities tenerife, stag activities playa las americas, hen party ideas tenerife south, bachelor party tenerife',
    h1: 'Stag Do & Hen Party Activities in Tenerife',
    subtitle:
      'The south of Tenerife is the sunniest stag & hen playground in Europe — and Fun Zone Playa Las Américas is where the group actually has fun. Book the whole crew in minutes.',
    intro:
      "Sun, cheap flights and a beachfront strip built for going out: it's no accident that thousands of UK and Irish stag and hen groups land in Tenerife South every year. But a weekend needs more than bars. Fun Zone gives your group a proper competitive session — axe throwing, escape games, quiz battles, darts — right in the heart of Playa Las Américas, minutes from the hotels and the nightlife. One booking, the whole squad sorted.",
    whyTitle: 'Why Tenerife wins for stags & hens',
    why: [
      'Year-round sunshine — plan the weekend for any month, no rain-outs.',
      '2–4 hour flights from most UK & Irish airports, cheap and frequent.',
      'Everything walkable in Playa Las Américas: hotels, beach, bars and activities.',
      'Groups welcome — we handle 6 to 30+ players and split you into competing teams.',
      'Prosecco on arrival, matching tees, custom challenges — we make the birthday/bride/groom the star.',
    ],
    activitiesTitle: 'The activities your group will actually remember',
    heroActivity: {
      name: 'Axe Throwing',
      pitch:
        "The #1 stag & hen activity in Tenerife. Two-handed axes, digital targets, an instructor who runs the leaderboard and a natural rivalry that gets the whole group roaring. No experience needed — everyone's landing bullseyes within minutes.",
    },
    activities: [
      {
        name: 'Escape Games',
        blurb:
          'Outdoor treasure-hunt adventures across Tenerife — split into teams and race to crack the case on your phone, at your own pace.',
      },
      {
        name: 'QuizzaBoom Quiz Room',
        blurb:
          "Tenerife's first interactive quiz room: buzzers, giant screens and thousands of questions. Perfect ice-breaker before the night out.",
      },
      {
        name: 'Darts & Pixel Darts',
        blurb:
          'Classic and interactive electronic darts with 15+ game modes — casual, competitive and endlessly re-playable with a drink in hand.',
      },
    ],
    crossSellTitle: 'Make it a full weekend',
    crossSellIntro:
      'Add the water and adrenaline your group is here for. We hand-picked the best-rated Tenerife experiences for stag & hen groups — boat parties, catamaran cruises with drinks, jet ski, parasailing and more:',
    ctaTitle: 'Get your group booked',
    ctaText:
      'Tell us your dates and headcount and we\'ll set up the perfect session. Axe throwing from just €25 per person — private group slots available.',
    ctaButton: 'Book axe throwing',
    faqTitle: 'Stag & hen party FAQs',
    faq: [
      {
        q: 'How big a group can you take?',
        a: 'From 6 up to 30+ players. We split larger groups into competing teams across multiple lanes so nobody stands around waiting.',
      },
      {
        q: 'Is axe throwing safe after a few drinks?',
        a: 'A qualified instructor runs every session and controls the pace. We keep it fun and safe — but for the axe lanes we do ask throwers to be steady on their feet.',
      },
      {
        q: 'Can you organise something special for the bride or groom?',
        a: "Absolutely — matching tees, prosecco on arrival, custom forfeits and a personalised leaderboard. Just tell us who the guest of honour is.",
      },
      {
        q: 'Where are you and how do we get there?',
        a: "We're in the heart of Playa Las Américas, walkable from most south-Tenerife hotels and a short taxi from Los Cristianos and Costa Adeje.",
      },
      {
        q: 'How far in advance should we book?',
        a: 'Weekends and peak season fill up fast — book your group at least a week ahead to guarantee your slot and lanes.',
      },
    ],
  },

  es: {
    slug: 'despedidas-tenerife',
    seoTitle: 'Despedidas de Soltero y Soltera en Tenerife | Actividades de Grupo',
    seoDescription:
      '¿Organizas una despedida de soltero o soltera en Tenerife? Lanzamiento de hachas, escape games, quiz y fiestas en barco en Playa Las Américas. Actividades de grupo inolvidables y fáciles de reservar.',
    keywords:
      'despedida soltero tenerife, despedida soltera tenerife, despedidas tenerife, actividades grupo tenerife, despedida playa las americas, ideas despedida tenerife sur',
    h1: 'Despedidas de Soltero y Soltera en Tenerife',
    subtitle:
      'El sur de Tenerife es el mejor destino de despedidas de Europa — y Fun Zone Playa Las Américas es donde el grupo de verdad se divierte. Reserva a toda la cuadrilla en minutos.',
    intro:
      'Sol todo el año, vuelos baratos y una zona pensada para salir: no es casualidad que Tenerife Sur reciba cada año a miles de grupos de despedida. Pero un fin de semana necesita algo más que copas. Fun Zone ofrece a tu grupo una sesión competitiva de verdad — hachas, escape games, quiz, dardos — en pleno corazón de Playa Las Américas, a minutos de los hoteles y el ambiente nocturno. Una reserva y toda la cuadrilla lista.',
    whyTitle: 'Por qué Tenerife gana para las despedidas',
    why: [
      'Sol todo el año — organiza la despedida en cualquier mes, sin lluvia.',
      'Vuelos cortos y baratos desde toda la península y Europa.',
      'Todo a pie en Playa Las Américas: hoteles, playa, bares y actividades.',
      'Grupos bienvenidos — de 6 a más de 30 jugadores, divididos en equipos que compiten.',
      'Cava de bienvenida, camisetas a juego y retos personalizados para el protagonista.',
    ],
    activitiesTitle: 'Las actividades que tu grupo recordará',
    heroActivity: {
      name: 'Lanzamiento de Hachas',
      pitch:
        'La actividad nº1 para despedidas en Tenerife. Hachas, dianas digitales, un monitor que lleva la clasificación y una rivalidad que enciende a todo el grupo. Sin experiencia — todos clavan dianas en minutos.',
    },
    activities: [
      {
        name: 'Escape Games',
        blurb:
          'Aventuras al aire libre por Tenerife: divididos en equipos, resolvéis el misterio desde el móvil y a vuestro ritmo.',
      },
      {
        name: 'Quiz Room QuizzaBoom',
        blurb:
          'La primera sala de quiz interactiva de Tenerife: pulsadores, pantallas gigantes y miles de preguntas. El calentamiento perfecto.',
      },
      {
        name: 'Dardos y Pixel Darts',
        blurb:
          'Dardos clásicos y electrónicos con más de 15 modos de juego — divertido, competitivo y con copa en mano.',
      },
    ],
    crossSellTitle: 'Completa el fin de semana',
    crossSellIntro:
      'Añade el agua y la adrenalina que busca tu grupo. Hemos seleccionado las mejores experiencias de Tenerife para despedidas — fiestas en barco, catamarán con bebidas, moto de agua, parasailing y más:',
    ctaTitle: 'Reserva tu grupo',
    ctaText:
      'Dinos las fechas y cuántos sois y te preparamos la sesión perfecta. Hachas desde 25 € por persona — con opción de grupo privado.',
    ctaButton: 'Reservar hachas',
    faqTitle: 'Preguntas frecuentes de despedidas',
    faq: [
      {
        q: '¿De qué tamaño puede ser el grupo?',
        a: 'De 6 a más de 30 personas. Dividimos los grupos grandes en equipos en varias pistas para que nadie espere.',
      },
      {
        q: '¿Es seguro lanzar hachas tras unas copas?',
        a: 'Un monitor cualificado dirige cada sesión y controla el ritmo. Es divertido y seguro, pero en las pistas de hachas pedimos que los lanzadores estén firmes.',
      },
      {
        q: '¿Podéis preparar algo especial para el protagonista?',
        a: 'Por supuesto — camisetas a juego, cava de bienvenida, prendas personalizadas y clasificación con su nombre.',
      },
      {
        q: '¿Dónde estáis y cómo se llega?',
        a: 'En pleno Playa Las Américas, a pie desde la mayoría de hoteles del sur y a un taxi corto de Los Cristianos y Costa Adeje.',
      },
      {
        q: '¿Con cuánta antelación reservar?',
        a: 'Los fines de semana y la temporada alta se llenan rápido — reserva con al menos una semana de antelación.',
      },
    ],
  },

  fr: {
    slug: 'evjf-evg-tenerife',
    seoTitle: 'EVJF & EVG à Tenerife | Activités de Groupe à Playa Las Américas',
    seoDescription:
      'Vous organisez un EVJF ou un EVG à Tenerife ? Lancer de haches, escape games, quiz et boat party à Playa Las Américas. Des activités de groupe inoubliables, faciles à réserver.',
    keywords:
      'evjf tenerife, evg tenerife, enterrement vie de jeune fille tenerife, enterrement vie de garcon tenerife, activités groupe tenerife, evjf playa las americas, idées evg tenerife',
    h1: 'EVJF & EVG à Tenerife',
    subtitle:
      "Le sud de Tenerife est le spot enterrement de vie le plus ensoleillé d'Europe — et Fun Zone Playa Las Américas est là où le groupe s'éclate vraiment. Réservez toute la bande en quelques minutes.",
    intro:
      "Soleil toute l'année, vols pas chers et un front de mer fait pour sortir : ce n'est pas un hasard si des milliers de groupes EVJF et EVG débarquent chaque année à Tenerife Sud. Mais un week-end, ce n'est pas que des bars. Fun Zone offre à votre groupe une vraie session de défi — haches, escape games, quiz, fléchettes — en plein cœur de Playa Las Américas, à quelques minutes des hôtels et de la vie nocturne. Une seule réservation, toute la bande est calée.",
    whyTitle: 'Pourquoi Tenerife gagne pour les EVJF / EVG',
    why: [
      "Soleil toute l'année — organisez le week-end n'importe quel mois, sans pluie.",
      'Vols courts et bon marché depuis toute la France et la Belgique.',
      'Tout à pied à Playa Las Américas : hôtels, plage, bars et activités.',
      'Groupes bienvenus — de 6 à plus de 30 joueurs, répartis en équipes qui s\'affrontent.',
      'Prosecco à l\'arrivée, t-shirts assortis et défis personnalisés pour la/le futur(e) marié(e).',
    ],
    activitiesTitle: 'Les activités dont votre groupe se souviendra',
    heroActivity: {
      name: 'Lancer de Haches',
      pitch:
        "L'activité nº1 pour les EVJF/EVG à Tenerife. Haches, cibles digitales, un coach qui tient le classement et une rivalité qui embarque tout le groupe. Aucune expérience requise — tout le monde plante des mouches en quelques minutes.",
    },
    activities: [
      {
        name: 'Escape Games',
        blurb:
          "Des aventures en plein air à travers Tenerife : en équipes, résolvez l'enquête sur votre téléphone, à votre rythme.",
      },
      {
        name: 'Quiz Room QuizzaBoom',
        blurb:
          'La première salle de quiz interactive de Tenerife : buzzers, écrans géants et des milliers de questions. Le warm-up parfait.',
      },
      {
        name: 'Fléchettes & Pixel Darts',
        blurb:
          'Fléchettes classiques et électroniques avec plus de 15 modes de jeu — fun, compétitif, un verre à la main.',
      },
    ],
    crossSellTitle: 'Complétez le week-end',
    crossSellIntro:
      "Ajoutez l'eau et l'adrénaline que votre groupe est venu chercher. On a sélectionné les meilleures expériences de Tenerife pour les groupes EVJF/EVG — boat party, catamaran avec boissons, jet ski, parachute ascensionnel et plus :",
    ctaTitle: 'Réservez votre groupe',
    ctaText:
      'Donnez-nous vos dates et le nombre de participants, on prépare la session parfaite. Haches à partir de 25 € par personne — créneaux privés possibles.',
    ctaButton: 'Réserver le lancer de haches',
    faqTitle: 'Questions fréquentes EVJF / EVG',
    faq: [
      {
        q: 'Quelle taille de groupe pouvez-vous accueillir ?',
        a: 'De 6 à plus de 30 personnes. On répartit les grands groupes en équipes sur plusieurs pistes pour que personne n\'attende.',
      },
      {
        q: 'Le lancer de haches est-il sûr après quelques verres ?',
        a: "Un coach qualifié encadre chaque session et gère le rythme. C'est fun et sécurisé — mais sur les pistes de haches on demande aux lanceurs d'être stables.",
      },
      {
        q: 'Pouvez-vous prévoir quelque chose de spécial pour le/la futur(e) marié(e) ?',
        a: 'Bien sûr — t-shirts assortis, prosecco à l\'arrivée, gages personnalisés et classement à son nom.',
      },
      {
        q: 'Où êtes-vous et comment venir ?',
        a: 'En plein Playa Las Américas, à pied depuis la plupart des hôtels du sud et à un court taxi de Los Cristianos et Costa Adeje.',
      },
      {
        q: 'Combien de temps à l\'avance réserver ?',
        a: 'Les week-ends et la haute saison partent vite — réservez votre groupe au moins une semaine à l\'avance.',
      },
    ],
  },

  de: {
    slug: 'junggesellenabschied-teneriffa',
    seoTitle: 'Junggesellenabschied Teneriffa (JGA) | Gruppenaktivitäten Playa Las Américas',
    seoDescription:
      'JGA auf Teneriffa geplant? Axtwerfen, Escape Games, Quiz und Bootspartys in Playa Las Américas. Unvergessliche Gruppenaktivitäten, einfach zu buchen.',
    keywords:
      'junggesellenabschied teneriffa, jga teneriffa, junggesellinnenabschied teneriffa, gruppenaktivitäten teneriffa, jga playa las americas, jga ideen teneriffa',
    h1: 'Junggesellenabschied auf Teneriffa',
    subtitle:
      'Der Süden Teneriffas ist das sonnigste JGA-Ziel Europas — und im Fun Zone Playa Las Américas hat die Gruppe wirklich Spaß. Bucht die ganze Truppe in wenigen Minuten.',
    intro:
      'Sonne das ganze Jahr, günstige Flüge und eine Strandpromenade zum Feiern: Nicht ohne Grund landen jedes Jahr tausende JGA-Gruppen im Süden Teneriffas. Doch ein Wochenende braucht mehr als Bars. Fun Zone bietet eurer Gruppe eine echte Wettkampf-Session — Axtwerfen, Escape Games, Quiz, Darts — mitten in Playa Las Américas, nur Minuten von Hotels und Nachtleben entfernt. Eine Buchung, die ganze Truppe versorgt.',
    whyTitle: 'Warum Teneriffa perfekt für den JGA ist',
    why: [
      'Sonne das ganze Jahr — plant das Wochenende in jedem Monat, ohne Regen.',
      'Kurze, günstige Flüge aus dem ganzen deutschsprachigen Raum.',
      'Alles fußläufig in Playa Las Américas: Hotels, Strand, Bars und Aktivitäten.',
      'Gruppen willkommen — von 6 bis über 30 Spieler, aufgeteilt in konkurrierende Teams.',
      'Sekt zur Begrüßung, passende Shirts und individuelle Challenges für die Hauptperson.',
    ],
    activitiesTitle: 'Die Aktivitäten, die eure Gruppe nie vergisst',
    heroActivity: {
      name: 'Axtwerfen',
      pitch:
        'Die Nr.1-JGA-Aktivität auf Teneriffa. Äxte, digitale Ziele, ein Trainer, der die Rangliste führt, und ein Wettkampf, der die ganze Gruppe mitreißt. Keine Erfahrung nötig — alle treffen innerhalb von Minuten ins Schwarze.',
    },
    activities: [
      {
        name: 'Escape Games',
        blurb:
          'Outdoor-Abenteuer quer über Teneriffa: in Teams löst ihr den Fall am Handy, in eurem eigenen Tempo.',
      },
      {
        name: 'QuizzaBoom Quizraum',
        blurb:
          'Teneriffas erster interaktiver Quizraum: Buzzer, Großbildschirme und tausende Fragen. Der perfekte Aufwärmer.',
      },
      {
        name: 'Darts & Pixel Darts',
        blurb:
          'Klassische und elektronische Darts mit über 15 Spielmodi — locker, kompetitiv, mit Drink in der Hand.',
      },
    ],
    crossSellTitle: 'Macht ein ganzes Wochenende draus',
    crossSellIntro:
      'Ergänzt Wasser und Adrenalin. Wir haben die bestbewerteten Teneriffa-Erlebnisse für JGA-Gruppen ausgewählt — Bootspartys, Katamaran mit Getränken, Jetski, Parasailing und mehr:',
    ctaTitle: 'Bucht eure Gruppe',
    ctaText:
      'Nennt uns Datum und Personenzahl, wir stellen die perfekte Session zusammen. Axtwerfen ab 25 € pro Person — private Gruppen-Slots möglich.',
    ctaButton: 'Axtwerfen buchen',
    faqTitle: 'Häufige Fragen zum JGA',
    faq: [
      {
        q: 'Wie groß darf die Gruppe sein?',
        a: 'Von 6 bis über 30 Personen. Große Gruppen teilen wir in konkurrierende Teams auf mehreren Bahnen auf, damit niemand wartet.',
      },
      {
        q: 'Ist Axtwerfen nach ein paar Drinks sicher?',
        a: 'Ein qualifizierter Trainer leitet jede Session und steuert das Tempo. Es ist sicher und macht Spaß — auf den Axtbahnen bitten wir die Werfer aber, sicher auf den Beinen zu sein.',
      },
      {
        q: 'Könnt ihr etwas Besonderes für die Hauptperson organisieren?',
        a: 'Klar — passende Shirts, Sekt zur Begrüßung, individuelle Aufgaben und eine Rangliste mit ihrem Namen.',
      },
      {
        q: 'Wo seid ihr und wie kommen wir hin?',
        a: 'Mitten in Playa Las Américas, fußläufig von den meisten Hotels im Süden und ein kurzes Taxi von Los Cristianos und Costa Adeje.',
      },
      {
        q: 'Wie früh sollten wir buchen?',
        a: 'Wochenenden und Hauptsaison sind schnell voll — bucht eure Gruppe mindestens eine Woche im Voraus.',
      },
    ],
  },

  nl: {
    slug: 'vrijgezellenfeest-tenerife',
    seoTitle: 'Vrijgezellenfeest Tenerife | Groepsactiviteiten in Playa Las Américas',
    seoDescription:
      'Een vrijgezellenfeest op Tenerife plannen? Bijlwerpen, escape games, quiz en bootfeesten in Playa Las Américas. Onvergetelijke groepsactiviteiten, eenvoudig te boeken.',
    keywords:
      'vrijgezellenfeest tenerife, vrijgezellenuitje tenerife, groepsactiviteiten tenerife, vrijgezellenfeest playa las americas, activiteiten groep tenerife',
    h1: 'Vrijgezellenfeest op Tenerife',
    subtitle:
      'Het zuiden van Tenerife is de zonnigste vrijgezellenbestemming van Europa — en bij Fun Zone Playa Las Américas heeft de groep écht plezier. Boek de hele club in enkele minuten.',
    intro:
      'Zon het hele jaar, goedkope vluchten en een boulevard om uit te gaan: niet voor niets landen er jaarlijks duizenden vrijgezellengroepen in het zuiden van Tenerife. Maar een weekend is meer dan bars. Fun Zone geeft je groep een echte wedstrijd-sessie — bijlwerpen, escape games, quiz, darts — midden in Playa Las Américas, op minuten van de hotels en het nachtleven. Eén boeking, de hele groep geregeld.',
    whyTitle: 'Waarom Tenerife wint voor vrijgezellenfeesten',
    why: [
      'Zon het hele jaar — plan het weekend in elke maand, geen regen.',
      'Korte, goedkope vluchten vanuit heel Nederland en België.',
      'Alles op loopafstand in Playa Las Américas: hotels, strand, bars en activiteiten.',
      'Groepen welkom — van 6 tot 30+ spelers, verdeeld in strijdende teams.',
      'Bubbels bij aankomst, bijpassende shirts en persoonlijke challenges voor de hoofdpersoon.',
    ],
    activitiesTitle: 'De activiteiten die je groep echt onthoudt',
    heroActivity: {
      name: 'Bijlwerpen',
      pitch:
        'De nummer 1 vrijgezellenactiviteit op Tenerife. Bijlen, digitale doelen, een instructeur die de ranglijst bijhoudt en een rivaliteit die de hele groep meesleept. Geen ervaring nodig — iedereen raakt binnen minuten de roos.',
    },
    activities: [
      {
        name: 'Escape Games',
        blurb:
          'Outdoor-avonturen door heel Tenerife: in teams los je de zaak op via je telefoon, in je eigen tempo.',
      },
      {
        name: 'QuizzaBoom Quizroom',
        blurb:
          'De eerste interactieve quizroom van Tenerife: buzzers, grote schermen en duizenden vragen. De perfecte warming-up.',
      },
      {
        name: 'Darts & Pixel Darts',
        blurb:
          'Klassieke en elektronische darts met 15+ speelmodi — casual, competitief en eindeloos herspeelbaar.',
      },
    ],
    crossSellTitle: 'Maak er een heel weekend van',
    crossSellIntro:
      'Voeg het water en de adrenaline toe waar je groep voor komt. We selecteerden de best beoordeelde Tenerife-ervaringen voor vrijgezellengroepen — bootfeesten, catamaran met drankjes, jetski, parasailing en meer:',
    ctaTitle: 'Boek je groep',
    ctaText:
      'Geef ons je data en aantal en we stellen de perfecte sessie samen. Bijlwerpen vanaf € 25 per persoon — privé-groepsslots mogelijk.',
    ctaButton: 'Bijlwerpen boeken',
    faqTitle: 'Veelgestelde vragen vrijgezellenfeest',
    faq: [
      {
        q: 'Hoe groot mag de groep zijn?',
        a: 'Van 6 tot 30+ personen. Grote groepen splitsen we in strijdende teams over meerdere banen, zodat niemand staat te wachten.',
      },
      {
        q: 'Is bijlwerpen veilig na een paar drankjes?',
        a: 'Een gekwalificeerde instructeur leidt elke sessie en bepaalt het tempo. Het is veilig en leuk — op de bijlbanen vragen we werpers wel om stevig op hun benen te staan.',
      },
      {
        q: 'Kunnen jullie iets speciaals regelen voor de hoofdpersoon?',
        a: 'Zeker — bijpassende shirts, bubbels bij aankomst, persoonlijke opdrachten en een ranglijst op naam.',
      },
      {
        q: 'Waar zitten jullie en hoe komen we er?',
        a: 'Midden in Playa Las Américas, op loopafstand van de meeste hotels in het zuiden en een korte taxi vanaf Los Cristianos en Costa Adeje.',
      },
      {
        q: 'Hoe ver vooruit moeten we boeken?',
        a: 'Weekends en hoogseizoen zitten snel vol — boek je groep minstens een week van tevoren.',
      },
    ],
  },

  it: {
    slug: 'addio-nubilato-celibato-tenerife',
    seoTitle: 'Addio al Nubilato e Celibato a Tenerife | Attività di Gruppo',
    seoDescription:
      'Organizzi un addio al nubilato o al celibato a Tenerife? Lancio delle asce, escape game, quiz e boat party a Playa Las Américas. Attività di gruppo indimenticabili, facili da prenotare.',
    keywords:
      'addio al nubilato tenerife, addio al celibato tenerife, attività di gruppo tenerife, addio nubilato playa las americas, idee addio al celibato tenerife',
    h1: 'Addio al Nubilato e al Celibato a Tenerife',
    subtitle:
      "Il sud di Tenerife è la meta di addio al nubilato/celibato più soleggiata d'Europa — e al Fun Zone Playa Las Américas il gruppo si diverte davvero. Prenota tutta la compagnia in pochi minuti.",
    intro:
      "Sole tutto l'anno, voli economici e un lungomare fatto per uscire: non è un caso che ogni anno migliaia di gruppi di addio al nubilato e al celibato atterrino nel sud di Tenerife. Ma un weekend è più di qualche bar. Fun Zone offre al tuo gruppo una vera sfida — asce, escape game, quiz, freccette — nel cuore di Playa Las Américas, a pochi minuti da hotel e vita notturna. Una prenotazione, tutta la compagnia sistemata.",
    whyTitle: 'Perché Tenerife vince per l\'addio al nubilato/celibato',
    why: [
      "Sole tutto l'anno — organizza il weekend in qualsiasi mese, senza pioggia.",
      'Voli brevi ed economici da tutta Italia.',
      'Tutto a piedi a Playa Las Américas: hotel, spiaggia, bar e attività.',
      'Gruppi benvenuti — da 6 a oltre 30 giocatori, divisi in squadre che competono.',
      'Prosecco all\'arrivo, magliette coordinate e sfide personalizzate per il protagonista.',
    ],
    activitiesTitle: 'Le attività che il tuo gruppo ricorderà',
    heroActivity: {
      name: 'Lancio delle Asce',
      pitch:
        "L'attività n.1 per addii al nubilato/celibato a Tenerife. Asce, bersagli digitali, un istruttore che tiene la classifica e una rivalità che accende tutto il gruppo. Nessuna esperienza — tutti centrano il bersaglio in pochi minuti.",
    },
    activities: [
      {
        name: 'Escape Game',
        blurb:
          'Avventure all\'aperto in giro per Tenerife: in squadre, risolvete il caso dal telefono, al vostro ritmo.',
      },
      {
        name: 'Quiz Room QuizzaBoom',
        blurb:
          'La prima quiz room interattiva di Tenerife: pulsanti, maxi schermi e migliaia di domande. Il riscaldamento perfetto.',
      },
      {
        name: 'Freccette & Pixel Darts',
        blurb:
          'Freccette classiche ed elettroniche con oltre 15 modalità — divertenti, competitive, con un drink in mano.',
      },
    ],
    crossSellTitle: 'Trasformalo in un weekend intero',
    crossSellIntro:
      "Aggiungi l'acqua e l'adrenalina che il tuo gruppo cerca. Abbiamo selezionato le migliori esperienze di Tenerife per i gruppi — boat party, catamarano con drink, moto d'acqua, parasailing e altro:",
    ctaTitle: 'Prenota il tuo gruppo',
    ctaText:
      'Dicci le date e in quanti siete e prepariamo la sessione perfetta. Asce da 25 € a persona — slot privati disponibili.',
    ctaButton: 'Prenota il lancio delle asce',
    faqTitle: 'Domande frequenti addio al nubilato/celibato',
    faq: [
      {
        q: 'Quanto può essere grande il gruppo?',
        a: 'Da 6 a oltre 30 persone. Dividiamo i gruppi grandi in squadre su più piste così nessuno resta ad aspettare.',
      },
      {
        q: 'È sicuro lanciare le asce dopo qualche drink?',
        a: "Un istruttore qualificato guida ogni sessione e gestisce il ritmo. È sicuro e divertente — ma sulle piste delle asce chiediamo ai lanciatori di essere stabili.",
      },
      {
        q: 'Potete organizzare qualcosa di speciale per il protagonista?',
        a: 'Certo — magliette coordinate, prosecco all\'arrivo, penitenze personalizzate e classifica con il suo nome.',
      },
      {
        q: 'Dove siete e come si arriva?',
        a: 'Nel cuore di Playa Las Américas, a piedi dalla maggior parte degli hotel del sud e un breve taxi da Los Cristianos e Costa Adeje.',
      },
      {
        q: 'Con quanto anticipo prenotare?',
        a: 'Weekend e alta stagione si riempiono in fretta — prenota il gruppo con almeno una settimana di anticipo.',
      },
    ],
  },
};
