/**
 * Content for the stag & hen / EVG-EVJF pillar landing page (/celebrations,
 * localized slug per market). Conversion + SEO page: it funnels group
 * celebrations toward self-guided outdoor escape games and hand-picked
 * GetYourGuide group experiences (boat parties, jet ski, karting…).
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
  /** Cross-sell (GetYourGuide) group experiences block. */
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
    seoTitle: 'Stag Do & Hen Party Tenerife | Group Activities & Ideas',
    seoDescription:
      'Planning a stag do or hen party in Tenerife? Self-guided outdoor escape games, boat parties, jet ski, karting and more — unforgettable group activities, easy to book in one place.',
    keywords:
      'stag do tenerife, hen party tenerife, stag weekend tenerife, hen do tenerife, group activities tenerife, bachelor party tenerife, bachelorette tenerife',
    h1: 'Stag Do & Hen Party Activities in Tenerife',
    subtitle:
      'The south of Tenerife is the sunniest stag & hen playground in Europe. Here is how to put together a weekend the whole group actually remembers.',
    intro:
      "Sun, cheap flights and a beachfront strip built for going out: it's no accident that thousands of UK and Irish stag and hen groups land in Tenerife every year. But a great weekend needs more than bars. The two winners for groups are a self-guided outdoor escape game — split into teams and race around a real town solving the mystery on your phone — and a day out on the water. This page brings the best group activities together so you can book the whole crew in minutes.",
    whyTitle: 'Why Tenerife wins for stags & hens',
    why: [
      'Year-round sunshine — plan the weekend for any month, no rain-outs.',
      '2–4 hour flights from most UK & Irish airports, cheap and frequent.',
      'Everything close in the south: hotels, beach, bars and activities.',
      'Great for groups — escape games split you into competing teams, boats take the whole crew.',
      'Easy to combine a daytime activity with the big night out.',
    ],
    crossSellTitle: 'Top group activities & experiences',
    crossSellIntro:
      'Add the water and adrenaline your group is here for. We hand-picked the best-rated Tenerife experiences for stag & hen groups — boat parties, catamaran cruises with drinks, jet ski, parasailing and more:',
    ctaTitle: 'Plan your group celebration',
    ctaText:
      'Start with a self-guided outdoor escape game (play any day, at your own pace, from €25 per team) and add a boat party or jet ski session for the full weekend.',
    ctaButton: 'Book an escape game',
    faqTitle: 'Stag & hen party FAQs',
    faq: [
      {
        q: 'What are the best group activities for a stag or hen in Tenerife?',
        a: 'A self-guided outdoor escape game is the perfect ice-breaker (teams, no fixed time, play any day), paired with a boat party, catamaran cruise, jet ski or karting for the adrenaline. You will find all of them on this page.',
      },
      {
        q: 'How big a group can do an escape game?',
        a: 'Any size — you simply book one phone/team per small group and set them off together. Larger crews split into competing teams and race to finish first.',
      },
      {
        q: 'Do we need to book a fixed time?',
        a: 'No. The outdoor escape games are self-guided: you get an activation code by email and start whenever suits the group, any day. Boat trips and other GetYourGuide experiences have set departure times shown at booking.',
      },
      {
        q: 'How far in advance should we book?',
        a: 'Escape games can be booked last-minute, but boat parties and popular tours fill up in peak season — book those a week or two ahead to be safe.',
      },
    ],
  },

  es: {
    slug: 'despedidas-tenerife',
    seoTitle: 'Despedidas de Soltero y Soltera en Tenerife | Actividades de Grupo',
    seoDescription:
      '¿Organizas una despedida de soltero o soltera en Tenerife? Escape games al aire libre, fiestas en barco, moto de agua, karting y más. Actividades de grupo inolvidables y fáciles de reservar.',
    keywords:
      'despedida soltero tenerife, despedida soltera tenerife, despedidas tenerife, actividades grupo tenerife, ideas despedida tenerife sur',
    h1: 'Despedidas de Soltero y Soltera en Tenerife',
    subtitle:
      'El sur de Tenerife es el mejor destino de despedidas de Europa. Así organizas un fin de semana que el grupo recordará de verdad.',
    intro:
      'Sol todo el año, vuelos baratos y una zona pensada para salir: no es casualidad que Tenerife reciba cada año a miles de grupos de despedida. Pero un buen fin de semana necesita algo más que copas. Las dos mejores opciones para grupos son un escape game al aire libre y autoguiado — os dividís en equipos y recorréis un pueblo resolviendo el misterio con el móvil — y un día en el mar. Aquí reunimos las mejores actividades de grupo para que reserves a toda la cuadrilla en minutos.',
    whyTitle: 'Por qué Tenerife gana para las despedidas',
    why: [
      'Sol todo el año: elige cualquier mes, sin lluvia que estropee el plan.',
      'Vuelos cortos, baratos y frecuentes desde toda Europa.',
      'Todo cerca en el sur: hoteles, playa, ambiente y actividades.',
      'Ideal para grupos: los escape games os dividen en equipos, los barcos llevan a toda la cuadrilla.',
      'Fácil combinar una actividad de día con la gran noche.',
    ],
    crossSellTitle: 'Las mejores actividades de grupo',
    crossSellIntro:
      'Añade el agua y la adrenalina que buscáis. Hemos seleccionado las experiencias mejor valoradas de Tenerife para despedidas: fiestas en barco, catamarán con copas, moto de agua, parasailing y más:',
    ctaTitle: 'Organiza tu despedida',
    ctaText:
      'Empieza con un escape game al aire libre y autoguiado (cualquier día, a vuestro ritmo, desde 25€ por equipo) y añade una fiesta en barco o moto de agua para el fin de semana completo.',
    ctaButton: 'Reservar un escape game',
    faqTitle: 'Preguntas frecuentes sobre despedidas',
    faq: [
      {
        q: '¿Cuáles son las mejores actividades de grupo para una despedida en Tenerife?',
        a: 'Un escape game al aire libre y autoguiado es el mejor rompehielos (equipos, sin hora fija, cualquier día), junto con una fiesta en barco, catamarán, moto de agua o karting para la adrenalina. Las tienes todas en esta página.',
      },
      {
        q: '¿Cuántas personas pueden hacer un escape game?',
        a: 'Cualquier número: reservas un móvil/equipo por cada grupo pequeño y salís juntos. Los grupos grandes se dividen en equipos que compiten por terminar primero.',
      },
      {
        q: '¿Hay que reservar una hora fija?',
        a: 'No. Los escape games al aire libre son autoguiados: recibes un código por email y empezáis cuando queráis, cualquier día. Las excursiones en barco y otras experiencias tienen horarios de salida que se indican al reservar.',
      },
      {
        q: '¿Con cuánta antelación conviene reservar?',
        a: 'Los escape games se pueden reservar en el último momento, pero las fiestas en barco y los tours populares se llenan en temporada alta: resérvalos con una o dos semanas de margen.',
      },
    ],
  },

  fr: {
    slug: 'evjf-evg-tenerife',
    seoTitle: 'EVJF & EVG à Tenerife | Activités de Groupe & Idées',
    seoDescription:
      'Vous organisez un EVJF ou un EVG à Tenerife ? Escape games outdoor autoguidés, sorties en bateau, jet-ski, karting et plus — des activités de groupe inoubliables, faciles à réserver au même endroit.',
    keywords:
      'evjf tenerife, evg tenerife, enterrement vie de jeune fille tenerife, enterrement vie de garcon tenerife, activites groupe tenerife, idees evjf evg tenerife',
    h1: 'Activités EVJF & EVG à Tenerife',
    subtitle:
      "Le sud de Tenerife est le spot EVJF/EVG le plus ensoleillé d'Europe. Voici comment composer un week-end que tout le groupe retiendra vraiment.",
    intro:
      "Du soleil, des vols pas chers et un front de mer fait pour sortir : ce n'est pas un hasard si des milliers de groupes débarquent à Tenerife chaque année. Mais un bon week-end, c'est plus que des bars. Les deux valeurs sûres pour un groupe : un escape game outdoor autoguidé — on se répartit en équipes et on parcourt une vraie ville en résolvant l'énigme sur le téléphone — et une journée sur l'eau. Cette page réunit les meilleures activités de groupe pour réserver toute la bande en quelques minutes.",
    whyTitle: 'Pourquoi Tenerife gagne pour les EVJF & EVG',
    why: [
      "Du soleil toute l'année : choisissez n'importe quel mois, sans pluie.",
      "Vols courts, fréquents et abordables depuis toute l'Europe.",
      'Tout est proche dans le sud : hôtels, plage, ambiance et activités.',
      'Parfait pour les groupes : les escape games forment des équipes, les bateaux embarquent toute la bande.',
      'Facile de combiner une activité en journée avec la grande soirée.',
    ],
    crossSellTitle: 'Les meilleures activités de groupe',
    crossSellIntro:
      "Ajoutez l'eau et l'adrénaline que recherche votre groupe. Nous avons sélectionné les expériences les mieux notées de Tenerife pour les EVJF/EVG : soirées bateau, catamaran avec boissons, jet-ski, parachute ascensionnel et plus :",
    ctaTitle: 'Organisez votre EVJF / EVG',
    ctaText:
      "Commencez par un escape game outdoor autoguidé (n'importe quel jour, à votre rythme, à partir de 25€ par équipe) et ajoutez une sortie bateau ou jet-ski pour le week-end complet.",
    ctaButton: 'Réserver un escape game',
    faqTitle: 'Questions fréquentes EVJF & EVG',
    faq: [
      {
        q: 'Quelles sont les meilleures activités de groupe pour un EVJF ou EVG à Tenerife ?',
        a: "Un escape game outdoor autoguidé est le parfait brise-glace (équipes, sans horaire fixe, n'importe quel jour), à combiner avec une soirée bateau, un catamaran, du jet-ski ou du karting pour l'adrénaline. Vous les trouvez tous sur cette page.",
      },
      {
        q: "Combien de personnes peuvent faire un escape game ?",
        a: "Autant que vous voulez : vous réservez un téléphone/équipe par petit groupe et partez ensemble. Les grands groupes se répartissent en équipes qui courent pour finir en premier.",
      },
      {
        q: 'Faut-il réserver un horaire précis ?',
        a: "Non. Les escape games outdoor sont autoguidés : vous recevez un code par email et démarrez quand vous voulez, n'importe quel jour. Les sorties en bateau et autres expériences ont des horaires de départ indiqués à la réservation.",
      },
      {
        q: "Combien de temps à l'avance faut-il réserver ?",
        a: 'Les escape games se réservent à la dernière minute, mais les soirées bateau et les tours populaires se remplissent en haute saison : réservez-les une à deux semaines à l\'avance.',
      },
    ],
  },

  de: {
    slug: 'junggesellenabschied-teneriffa',
    seoTitle: 'Junggesellenabschied auf Teneriffa | Gruppenaktivitäten & Ideen',
    seoDescription:
      'Du planst einen JGA auf Teneriffa? Selbstgeführte Outdoor-Escape-Games, Bootspartys, Jetski, Karting und mehr — unvergessliche Gruppenaktivitäten, einfach an einem Ort zu buchen.',
    keywords:
      'junggesellenabschied teneriffa, jga teneriffa, junggesellinnenabschied teneriffa, gruppenaktivitaeten teneriffa, jga ideen teneriffa',
    h1: 'Junggesellenabschied-Aktivitäten auf Teneriffa',
    subtitle:
      'Der Süden Teneriffas ist das sonnigste JGA-Revier Europas. So stellst du ein Wochenende zusammen, an das sich die ganze Gruppe wirklich erinnert.',
    intro:
      'Sonne, günstige Flüge und eine Strandpromenade zum Ausgehen: Nicht ohne Grund landen jedes Jahr tausende JGA-Gruppen auf Teneriffa. Doch ein gutes Wochenende ist mehr als Bars. Die zwei Favoriten für Gruppen: ein selbstgeführtes Outdoor-Escape-Game — ihr teilt euch in Teams und löst das Rätsel beim Streifzug durch eine echte Stadt am Handy — und ein Tag auf dem Wasser. Diese Seite bündelt die besten Gruppenaktivitäten, damit du die ganze Truppe in Minuten buchst.',
    whyTitle: 'Warum Teneriffa beim JGA gewinnt',
    why: [
      'Sonne das ganze Jahr — plane jeden Monat, kein Regen-Risiko.',
      'Kurze, günstige und häufige Flüge aus ganz Europa.',
      'Alles nah im Süden: Hotels, Strand, Nightlife und Aktivitäten.',
      'Ideal für Gruppen: Escape Games bilden Teams, Boote nehmen die ganze Truppe.',
      'Tagsüber eine Aktivität, abends die große Nacht — leicht zu kombinieren.',
    ],
    crossSellTitle: 'Die besten Gruppenaktivitäten',
    crossSellIntro:
      'Ergänze das Wasser und den Nervenkitzel, für die ihr hier seid. Wir haben die bestbewerteten Teneriffa-Erlebnisse für JGA-Gruppen ausgewählt: Bootspartys, Katamaran mit Getränken, Jetski, Parasailing und mehr:',
    ctaTitle: 'Plane euren JGA',
    ctaText:
      'Startet mit einem selbstgeführten Outdoor-Escape-Game (jeden Tag, in eurem Tempo, ab 25€ pro Team) und ergänzt eine Bootsparty oder Jetski für das ganze Wochenende.',
    ctaButton: 'Escape Game buchen',
    faqTitle: 'Häufige Fragen zum JGA',
    faq: [
      {
        q: 'Was sind die besten Gruppenaktivitäten für einen JGA auf Teneriffa?',
        a: 'Ein selbstgeführtes Outdoor-Escape-Game ist der perfekte Eisbrecher (Teams, keine feste Zeit, jeden Tag), dazu eine Bootsparty, ein Katamaran, Jetski oder Karting für den Nervenkitzel. Alle findest du auf dieser Seite.',
      },
      {
        q: 'Wie viele Personen können ein Escape Game spielen?',
        a: 'Beliebig viele: Ihr bucht pro Kleingruppe ein Handy/Team und startet gemeinsam. Große Gruppen teilen sich in konkurrierende Teams, die um den schnellsten Abschluss wetteifern.',
      },
      {
        q: 'Muss man eine feste Uhrzeit buchen?',
        a: 'Nein. Die Outdoor-Escape-Games sind selbstgeführt: Ihr erhaltet einen Code per E-Mail und startet, wann es passt, an jedem Tag. Bootstouren und andere Erlebnisse haben feste Startzeiten, die bei der Buchung angezeigt werden.',
      },
      {
        q: 'Wie früh sollte man buchen?',
        a: 'Escape Games lassen sich kurzfristig buchen, aber Bootspartys und beliebte Touren sind in der Hochsaison schnell voll — bucht diese ein bis zwei Wochen im Voraus.',
      },
    ],
  },

  nl: {
    slug: 'vrijgezellenfeest-tenerife',
    seoTitle: 'Vrijgezellenfeest op Tenerife | Groepsactiviteiten & Ideeën',
    seoDescription:
      'Plan je een vrijgezellenfeest op Tenerife? Zelfgeleide outdoor escape games, bootfeesten, jetski, karting en meer — onvergetelijke groepsactiviteiten, eenvoudig op één plek te boeken.',
    keywords:
      'vrijgezellenfeest tenerife, vrijgezellenfeest ideeen tenerife, groepsactiviteiten tenerife, vrijgezellen tenerife zuid',
    h1: 'Vrijgezellenfeest-activiteiten op Tenerife',
    subtitle:
      'Het zuiden van Tenerife is het zonnigste vrijgezellen-walhalla van Europa. Zo stel je een weekend samen dat de hele groep echt onthoudt.',
    intro:
      'Zon, goedkope vluchten en een boulevard gemaakt om uit te gaan: niet voor niets landen er elk jaar duizenden vrijgezellengroepen op Tenerife. Maar een goed weekend is meer dan bars. De twee toppers voor groepen: een zelfgeleide outdoor escape game — verdeel in teams en los het mysterie op terwijl je door een echte stad trekt met je telefoon — en een dag op het water. Deze pagina bundelt de beste groepsactiviteiten zodat je de hele groep in minuten boekt.',
    whyTitle: 'Waarom Tenerife wint voor vrijgezellenfeesten',
    why: [
      'Het hele jaar zon — plan elke maand, geen regen die het verpest.',
      'Korte, goedkope en frequente vluchten vanuit heel Europa.',
      'Alles dichtbij in het zuiden: hotels, strand, nachtleven en activiteiten.',
      'Ideaal voor groepen: escape games maken teams, boten nemen de hele groep mee.',
      'Makkelijk een dagactiviteit te combineren met de grote avond.',
    ],
    crossSellTitle: 'De beste groepsactiviteiten',
    crossSellIntro:
      'Voeg het water en de adrenaline toe waarvoor jullie komen. We kozen de best beoordeelde Tenerife-ervaringen voor vrijgezellengroepen: bootfeesten, catamaran met drankjes, jetski, parasailing en meer:',
    ctaTitle: 'Plan jullie vrijgezellenfeest',
    ctaText:
      'Begin met een zelfgeleide outdoor escape game (elke dag, in je eigen tempo, vanaf €25 per team) en voeg een bootfeest of jetski toe voor het complete weekend.',
    ctaButton: 'Boek een escape game',
    faqTitle: 'Veelgestelde vragen vrijgezellenfeest',
    faq: [
      {
        q: 'Wat zijn de beste groepsactiviteiten voor een vrijgezellenfeest op Tenerife?',
        a: 'Een zelfgeleide outdoor escape game is de perfecte ijsbreker (teams, geen vaste tijd, elke dag), gecombineerd met een bootfeest, catamaran, jetski of karting voor de adrenaline. Je vindt ze allemaal op deze pagina.',
      },
      {
        q: 'Met hoeveel mensen kun je een escape game doen?',
        a: 'Met elk aantal: je boekt één telefoon/team per kleine groep en vertrekt samen. Grote groepen splitsen in teams die racen om als eerste te finishen.',
      },
      {
        q: 'Moet je een vaste tijd boeken?',
        a: 'Nee. De outdoor escape games zijn zelfgeleid: je krijgt een code per e-mail en start wanneer het uitkomt, elke dag. Boottochten en andere ervaringen hebben vaste vertrektijden die bij het boeken worden getoond.',
      },
      {
        q: 'Hoe ver van tevoren moet je boeken?',
        a: 'Escape games kun je last-minute boeken, maar bootfeesten en populaire tours zitten in het hoogseizoen snel vol — boek die een à twee weken vooraf.',
      },
    ],
  },

  it: {
    slug: 'addio-nubilato-celibato-tenerife',
    seoTitle: 'Addio al Nubilato e al Celibato a Tenerife | Attività di Gruppo',
    seoDescription:
      'Organizzi un addio al nubilato o al celibato a Tenerife? Escape games all’aperto autoguidati, feste in barca, moto d’acqua, karting e altro — attività di gruppo indimenticabili, facili da prenotare.',
    keywords:
      'addio al nubilato tenerife, addio al celibato tenerife, attivita di gruppo tenerife, idee addio nubilato tenerife',
    h1: 'Addio al Nubilato e al Celibato a Tenerife',
    subtitle:
      'Il sud di Tenerife è il paradiso più soleggiato d’Europa per gli addii. Ecco come costruire un weekend che il gruppo ricorderà davvero.',
    intro:
      'Sole, voli economici e un lungomare fatto per uscire: non è un caso che ogni anno migliaia di gruppi scelgano Tenerife per l’addio. Ma un bel weekend è più dei soli bar. Le due scelte vincenti per un gruppo: un escape game all’aperto autoguidato — vi dividete in squadre e attraversate una vera città risolvendo il mistero dal telefono — e una giornata in mare. Questa pagina riunisce le migliori attività di gruppo per prenotare tutta la compagnia in pochi minuti.',
    whyTitle: 'Perché Tenerife vince per gli addii',
    why: [
      'Sole tutto l’anno: scegli qualsiasi mese, senza pioggia a rovinare i piani.',
      'Voli brevi, economici e frequenti da tutta Europa.',
      'Tutto vicino nel sud: hotel, spiaggia, vita notturna e attività.',
      'Ideale per i gruppi: gli escape games creano le squadre, le barche portano tutta la compagnia.',
      'Facile unire un’attività di giorno alla grande serata.',
    ],
    crossSellTitle: 'Le migliori attività di gruppo',
    crossSellIntro:
      'Aggiungi l’acqua e l’adrenalina che cercate. Abbiamo selezionato le esperienze più apprezzate di Tenerife per i gruppi: feste in barca, catamarano con drink, moto d’acqua, parasailing e altro:',
    ctaTitle: 'Organizza il tuo addio',
    ctaText:
      'Inizia con un escape game all’aperto autoguidato (ogni giorno, al vostro ritmo, da 25€ a squadra) e aggiungi una festa in barca o una moto d’acqua per il weekend completo.',
    ctaButton: 'Prenota un escape game',
    faqTitle: 'Domande frequenti sugli addii',
    faq: [
      {
        q: 'Quali sono le migliori attività di gruppo per un addio a Tenerife?',
        a: 'Un escape game all’aperto autoguidato è il rompighiaccio perfetto (squadre, senza orario fisso, ogni giorno), insieme a una festa in barca, un catamarano, una moto d’acqua o il karting per l’adrenalina. Le trovi tutte in questa pagina.',
      },
      {
        q: 'Quante persone possono fare un escape game?',
        a: 'Qualsiasi numero: prenoti un telefono/squadra per ogni piccolo gruppo e partite insieme. I gruppi grandi si dividono in squadre che gareggiano per finire primi.',
      },
      {
        q: 'Bisogna prenotare un orario fisso?',
        a: 'No. Gli escape games all’aperto sono autoguidati: ricevi un codice via email e parti quando vuoi, ogni giorno. Le gite in barca e le altre esperienze hanno orari di partenza indicati in fase di prenotazione.',
      },
      {
        q: 'Con quanto anticipo conviene prenotare?',
        a: 'Gli escape games si prenotano anche all’ultimo, ma le feste in barca e i tour più richiesti si riempiono in alta stagione: prenotali con una o due settimane di anticipo.',
      },
    ],
  },
};
