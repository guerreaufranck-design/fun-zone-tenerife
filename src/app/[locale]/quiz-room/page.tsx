'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import {
  ArrowLeft, Brain, Shield, Ban, Coins, Zap,
  Users, Globe, Clock, Sparkles, MapPin, Gamepad2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

/* ─── TRANSLATIONS ─── */
const ui: Record<string, Record<string, string>> = {
  badge: {
    en: 'New Experience',
    fr: 'Nouvelle Expérience',
    es: 'Nueva Experiencia',
    de: 'Neues Erlebnis',
    it: 'Nuova Esperienza',
  },
  title: {
    en: 'QUIZZABOOM',
    fr: 'QUIZZABOOM',
    es: 'QUIZZABOOM',
    de: 'QUIZZABOOM',
    it: 'QUIZZABOOM',
  },
  subtitle: {
    en: "Tenerife's first Quiz Room! Pick your themes, unleash devastating jokers and watch the leaderboard catch fire on the big screen — every game is unique and 100% addictive.",
    fr: "La 1ère Quiz Room de Tenerife ! Thèmes au choix, jokers dévastateurs et classement en feu sur grand écran — chaque partie est unique et 100% addictive.",
    es: "¡La primera Quiz Room de Tenerife! Elige tus temas, desata jokers devastadores y mira cómo arde la clasificación en pantalla gigante — cada partida es única y 100% adictiva.",
    de: "Tenerifes erste Quiz Room! Wähle deine Themen, setze verheerende Joker ein und sieh zu, wie die Rangliste auf dem Großbildschirm brennt — jedes Spiel ist einzigartig und 100% süchtig machend.",
    it: "La prima Quiz Room di Tenerife! Scegli i tuoi temi, scatena joker devastanti e guarda la classifica prendere fuoco sullo schermo gigante — ogni partita è unica e 100% coinvolgente.",
  },
  duration: { en: '1 hour', fr: '1 heure', es: '1 hora', de: '1 Stunde', it: '1 ora' },
  players: { en: '2–6 players', fr: '2–6 joueurs', es: '2–6 jugadores', de: '2–6 Spieler', it: '2–6 giocatori' },
  fromAge: { en: 'From age 6', fr: 'Dès 6 ans', es: 'Desde 6 años', de: 'Ab 6 Jahren', it: 'Dai 6 anni' },
  languages: { en: '4 languages', fr: '4 langues', es: '4 idiomas', de: '4 Sprachen', it: '4 lingue' },
  venue: { en: 'Fun Zone Tenerife', fr: 'Fun Zone Tenerife', es: 'Fun Zone Tenerife', de: 'Fun Zone Tenerife', it: 'Fun Zone Tenerife' },
  bookNow: { en: 'Book now', fr: 'Réserver maintenant', es: 'Reservar ahora', de: 'Jetzt buchen', it: 'Prenota ora' },
  discoverBelow: { en: 'Discover the experience ↓', fr: "Découvrir l'expérience ↓", es: 'Descubrir la experiencia ↓', de: 'Das Erlebnis entdecken ↓', it: "Scopri l'esperienza ↓" },
  backHome: { en: 'Back to Home', fr: "Retour à l'accueil", es: 'Volver al inicio', de: 'Zurück zur Startseite', it: 'Torna alla home' },

  // Stats
  statPlayers: { en: 'players per session', fr: 'joueurs par session', es: 'jugadores por sesión', de: 'Spieler pro Sitzung', it: 'giocatori per sessione' },
  statLangs: { en: 'languages available', fr: 'langues disponibles', es: 'idiomas disponibles', de: 'verfügbare Sprachen', it: 'lingue disponibili' },
  statJokers: { en: 'devastating jokers', fr: 'jokers redoutables', es: 'jokers devastadores', de: 'verheerende Joker', it: 'joker devastanti' },
  statThemes: { en: 'possible themes', fr: 'thèmes possibles', es: 'temas posibles', de: 'mögliche Themen', it: 'temi possibili' },

  // Experience section
  expLabel: { en: 'The experience', fr: "L'expérience", es: 'La experiencia', de: 'Das Erlebnis', it: "L'esperienza" },
  expTitle: { en: 'A quiz room like no other', fr: 'Une quiz room comme aucune autre', es: 'Una quiz room como ninguna otra', de: 'Ein Quizraum wie kein anderer', it: 'Una quiz room come nessun altra' },
  expDesc: {
    en: "After pioneering axe throwing in Tenerife, Fun Zone brings you an entirely new experience! Your group picks the language, selects your favourite themes, and the battle begins on the big screen! Each player answers from their phone — no app to download, just pure fun. Draw your jokers to steal your opponents' points, block them or double your score. Plot twists guaranteed, laughs assured, and every single game is 100% unique!",
    fr: "Après avoir été les pionniers du lancer de hache à Tenerife, Fun Zone vous propose une toute nouvelle expérience ! Votre groupe choisit la langue, sélectionne vos thèmes favoris et la bataille commence sur grand écran ! Chaque joueur répond depuis son téléphone — pas d'appli à télécharger, juste du fun. Dégainez vos jokers pour voler les points adverses, les bloquer ou doubler votre score. Retournements de situation garantis, fous rires assurés, et chaque partie est 100% unique !",
    es: "¡Después de ser pioneros en el lanzamiento de hachas en Tenerife, Fun Zone te trae una experiencia totalmente nueva! Tu grupo elige el idioma, selecciona tus temas favoritos y ¡la batalla comienza en la pantalla grande! Cada jugador responde desde su teléfono — sin app que descargar, solo diversión. Usa tus jokers para robar puntos, bloquear o duplicar tu puntuación. ¡Giros argumentales garantizados, risas aseguradas y cada partida es 100% única!",
    de: "Nach der Pionierarbeit beim Axtwerfen auf Teneriffa bringt Fun Zone ein völlig neues Erlebnis! Ihre Gruppe wählt die Sprache, die Lieblingsthemen und der Kampf beginnt auf der großen Leinwand! Jeder Spieler antwortet von seinem Handy — keine App nötig, nur Spaß. Setzen Sie Ihre Joker ein, um Punkte zu stehlen, Gegner zu blockieren oder Ihre Punkte zu verdoppeln. Wendungen garantiert, Lacher sicher, und jedes Spiel ist 100% einzigartig!",
    it: "Dopo aver introdotto il lancio dell'ascia a Tenerife, Fun Zone ti offre un'esperienza completamente nuova! Il tuo gruppo sceglie la lingua, seleziona i temi preferiti e la battaglia inizia sul grande schermo! Ogni giocatore risponde dal proprio telefono — nessuna app da scaricare, solo divertimento. Usa i tuoi joker per rubare punti, bloccare avversari o raddoppiare il punteggio. Colpi di scena garantiti, risate assicurate, e ogni partita è 100% unica!",
  },

  // How it works
  howLabel: { en: 'How it works', fr: 'Le déroulement', es: 'Cómo funciona', de: 'So funktioniert es', it: 'Come funziona' },
  howTitle: { en: 'Three steps to the action', fr: 'Trois étapes et vous êtes dans le feu de l\'action', es: 'Tres pasos hacia la acción', de: 'Drei Schritte zur Action', it: 'Tre passi verso l\'azione' },
  step1Title: { en: 'Pick your themes', fr: 'Choisissez vos thèmes', es: 'Elige tus temas', de: 'Wähle deine Themen', it: 'Scegli i tuoi temi' },
  step1Desc: { en: 'Geography, Music, Sport, Cinema, Gastronomy... or a mix! Also choose the difficulty level that fits your group.', fr: 'Géographie, Musique, Sport, Cinéma, Gastronomie... ou un mix ! Choisissez aussi le niveau de difficulté qui correspond à votre groupe.', es: 'Geografía, Música, Deporte, Cine, Gastronomía... ¡o una mezcla! Elige también el nivel de dificultad que se adapte a tu grupo.', de: 'Geografie, Musik, Sport, Kino, Gastronomie... oder ein Mix! Wählen Sie auch den Schwierigkeitsgrad.', it: 'Geografia, Musica, Sport, Cinema, Gastronomia... o un mix! Scegli anche il livello di difficoltà.' },
  step2Title: { en: 'Scan & play', fr: 'Scannez & c\'est parti', es: 'Escanea & juega', de: 'Scannen & los', it: 'Scansiona & gioca' },
  step2Desc: { en: 'Each player scans the QR Code on the big screen from their phone. No app needed — you\'re in the game in 10 seconds!', fr: 'Chaque joueur scanne le QR Code affiché sur grand écran depuis son téléphone. Aucune appli à installer — on est en jeu en 10 secondes !', es: 'Cada jugador escanea el código QR en la pantalla desde su teléfono. Sin app — ¡en 10 segundos estás jugando!', de: 'Jeder Spieler scannt den QR-Code auf dem Großbildschirm. Keine App nötig — in 10 Sekunden seid ihr im Spiel!', it: 'Ogni giocatore scansiona il QR Code dallo schermo. Nessuna app — in 10 secondi siete in gioco!' },
  step3Title: { en: 'Play, bluff, win!', fr: 'Jouez, bluffez, gagnez !', es: '¡Juega, faroleá, gana!', de: 'Spielen, bluffen, gewinnen!', it: 'Gioca, bluffa, vinci!' },
  step3Desc: { en: 'Answer fast, use your jokers at the right time and watch the leaderboard go wild in real time. Who will be champion?', fr: 'Répondez vite, utilisez vos jokers au bon moment et regardez le classement s\'enflammer en temps réel. Qui sera le champion ?', es: '¡Responde rápido, usa tus jokers en el momento justo y mira cómo arde la clasificación en tiempo real!', de: 'Antworten Sie schnell, setzen Sie Joker zum richtigen Zeitpunkt ein und sehen Sie die Rangliste in Echtzeit brennen!', it: 'Rispondi veloce, usa i joker al momento giusto e guarda la classifica infiammarsi in tempo reale!' },

  // Jokers
  jokersLabel: { en: 'Strategy', fr: 'La stratégie', es: 'La estrategia', de: 'Strategie', it: 'La strategia' },
  jokersTitle: { en: 'The jokers: the real game-changer!', fr: 'Les jokers : le vrai game-changer !', es: '¡Los jokers: el verdadero cambio de juego!', de: 'Die Joker: der echte Game-Changer!', it: 'I joker: il vero game-changer!' },
  jokersIntro: { en: 'Each player gets 4 jokers, each usable only once. A well-timed joker can flip the entire leaderboard in seconds. Timing, bluff and nerve!', fr: 'Chaque joueur reçoit 4 jokers, chacun utilisable une seule fois. Un joker bien placé peut faire basculer tout le classement en quelques secondes. Timing, bluff et audace !', es: 'Cada jugador recibe 4 jokers, cada uno utilizable una sola vez. ¡Un joker bien colocado puede voltear toda la clasificación en segundos!', de: 'Jeder Spieler erhält 4 Joker, jeder nur einmal einsetzbar. Ein gut platzierter Joker kann die gesamte Rangliste in Sekunden umdrehen!', it: 'Ogni giocatore riceve 4 joker, ognuno utilizzabile una sola volta. Un joker ben piazzato può ribaltare la classifica in pochi secondi!' },
  jokerShield: { en: 'Protection', fr: 'Protection', es: 'Protección', de: 'Schutz', it: 'Protezione' },
  jokerShieldDesc: { en: 'Total immunity against all attacks for this round. Your opponents can try — they can\'t touch you!', fr: 'Immunité totale contre toutes les attaques pour ce tour. Vos adversaires peuvent essayer — ils ne peuvent rien contre vous !', es: '¡Inmunidad total contra todos los ataques en esta ronda!', de: 'Totale Immunität gegen alle Angriffe in dieser Runde!', it: 'Immunità totale contro tutti gli attacchi in questo turno!' },
  jokerBlock: { en: 'Block', fr: 'Blocage', es: 'Bloqueo', de: 'Blockade', it: 'Blocco' },
  jokerBlockDesc: { en: 'Prevent an opponent from answering the next question. They watch the seconds tick away helplessly!', fr: 'Empêchez un adversaire de répondre à la prochaine question. Il regarde les secondes s\'écouler sans rien pouvoir faire !', es: '¡Impide que un oponente responda la siguiente pregunta!', de: 'Verhindern Sie, dass ein Gegner die nächste Frage beantwortet!', it: 'Impedisci a un avversario di rispondere alla prossima domanda!' },
  jokerSteal: { en: 'Steal', fr: 'Vol', es: 'Robo', de: 'Diebstahl', it: 'Furto' },
  jokerStealDesc: { en: "Steal 100% of an opponent's points in one shot. The joker that causes screams, laughs and \"no way!\" in the room!", fr: "Volez 100% des points d'un adversaire d'un seul coup. C'est le joker qui provoque les cris et les fous rires !", es: "¡Roba el 100% de los puntos de un oponente de un solo golpe!", de: 'Stehlen Sie 100% der Punkte eines Gegners auf einen Schlag!', it: "Ruba il 100% dei punti di un avversario in un colpo solo!" },
  jokerDouble: { en: 'Double Points', fr: 'Double Points', es: 'Puntos Dobles', de: 'Doppelte Punkte', it: 'Punti Doppi' },
  jokerDoubleDesc: { en: 'Multiply your score by 2 for this question. Save it for your best topic and soar up the leaderboard!', fr: 'Multipliez votre score par 2 pour cette question. Gardez-le pour votre thème de prédilection et envolez-vous au classement !', es: '¡Multiplica tu puntuación por 2 en esta pregunta!', de: 'Verdoppeln Sie Ihre Punkte für diese Frage!', it: 'Moltiplica il tuo punteggio per 2 in questa domanda!' },

  // Themes
  themesLabel: { en: 'Customise your game', fr: 'Personnalisez votre partie', es: 'Personaliza tu partida', de: 'Gestalte dein Spiel', it: 'Personalizza la tua partita' },
  themesTitle: { en: 'Endless themes!', fr: 'Des thèmes à l\'infini !', es: '¡Temas infinitos!', de: 'Endlose Themen!', it: 'Temi infiniti!' },

  // Modes
  modesLabel: { en: 'For every group', fr: 'Pour tous les groupes', es: 'Para todos los grupos', de: 'Für jede Gruppe', it: 'Per ogni gruppo' },
  modesTitle: { en: '3 game modes', fr: '3 modes de jeu', es: '3 modos de juego', de: '3 Spielmodi', it: '3 modalità di gioco' },
  modeStandard: { en: 'Standard', fr: 'Standard', es: 'Estándar', de: 'Standard', it: 'Standard' },
  modeStandardDesc: { en: 'Serious, verified questions. For those who come to win — the real competitive quiz!', fr: 'Questions sérieuses et vérifiées. Pour ceux qui viennent pour gagner — le vrai quiz de compétition !', es: 'Preguntas serias y verificadas. ¡Para los que vienen a ganar!', de: 'Ernste, verifizierte Fragen. Für diejenigen, die gewinnen wollen!', it: 'Domande serie e verificate. Per chi viene per vincere!' },
  modeFun: { en: 'Fun', fr: 'Fun', es: 'Fun', de: 'Fun', it: 'Fun' },
  modeFunDesc: { en: "Real facts so incredible you won't believe them! True or false? Laughs, surprise, expect the unexpected!", fr: "Des faits réels mais tellement incroyables qu'on n'y croit pas ! Vrai ou faux ? On rit, on s'étonne !", es: '¡Hechos reales tan increíbles que no los creerás! ¿Verdadero o falso?', de: 'Echte Fakten, so unglaublich, dass man sie nicht glaubt! Wahr oder falsch?', it: 'Fatti reali così incredibili che non ci crederai! Vero o falso?' },
  modeKids: { en: 'Kids', fr: 'Kids', es: 'Kids', de: 'Kids', it: 'Kids' },
  modeKidsDesc: { en: 'Adapted for ages 6-12. Fun, accessible questions so kids shine just as bright as adults!', fr: 'Adapté aux 6-12 ans. Questions ludiques et accessibles pour que les enfants brillent autant que les adultes !', es: 'Adaptado para 6-12 años. ¡Preguntas divertidas para que los niños brillen!', de: 'Angepasst für 6-12 Jahre. Lustige, zugängliche Fragen!', it: 'Adattato per 6-12 anni. Domande divertenti per far brillare i bambini!' },

  // Pricing
  pricingLabel: { en: 'Practical info', fr: 'Infos pratiques', es: 'Información práctica', de: 'Praktische Infos', it: 'Info pratiche' },
  pricingTitle: { en: 'Pricing', fr: 'Tarifs', es: 'Precios', de: 'Preise', it: 'Prezzi' },
  pricingNote: { en: 'The more you are, the less it costs. Only 20% deposit online — pay the rest on site.', fr: 'Plus vous êtes nombreux, moins c\'est cher. Seulement 20% d\'acompte en ligne — le reste sur place.', es: 'Cuantos más sois, menos cuesta. Solo 20% de anticipo online.', de: 'Je mehr ihr seid, desto günstiger. Nur 20% Anzahlung online.', it: 'Più siete, meno costa. Solo 20% di anticipo online.' },
  perPerson: { en: '/person', fr: '/personne', es: '/persona', de: '/Person', it: '/persona' },
  bestPrice: { en: 'Best price', fr: 'Meilleur prix', es: 'Mejor precio', de: 'Bester Preis', it: 'Miglior prezzo' },
  perfectFor: { en: 'Perfect for...', fr: 'Parfait pour...', es: 'Perfecto para...', de: 'Perfekt für...', it: 'Perfetto per...' },
  perfectTitle: { en: 'For every occasion!', fr: 'Pour tous les moments !', es: '¡Para todas las ocasiones!', de: 'Für jeden Anlass!', it: 'Per ogni occasione!' },
  family: { en: 'Family — From age 6, with Kids mode so everyone is on equal footing!', fr: 'En famille — Dès 6 ans, avec le mode Kids pour que tout le monde soit à égalité !', es: 'En familia — Desde 6 años, con modo Kids para igualar a todos!', de: 'Familie — Ab 6 Jahren, mit Kids-Modus für gleiche Chancen!', it: 'In famiglia — Dai 6 anni, con modalità Kids per tutti!' },
  bachelor: { en: 'Hen/Stag party — Epic plot twists, unforgettable memories!', fr: 'Enterrement de vie — Retournements épiques, souvenirs inoubliables !', es: 'Despedida — ¡Giros épicos, recuerdos inolvidables!', de: 'Junggesellenabschied — Epische Wendungen, unvergessliche Erinnerungen!', it: 'Addio al celibato — Colpi di scena epici, ricordi indimenticabili!' },
  birthday: { en: 'Birthday — A unique experience to celebrate differently!', fr: "Anniversaire — Une expérience unique pour fêter ça autrement !", es: '¡Cumpleaños — Una experiencia única para celebrar de otra manera!', de: 'Geburtstag — Ein einzigartiges Erlebnis zum Feiern!', it: 'Compleanno — Un\'esperienza unica per festeggiare diversamente!' },
  teambuilding: { en: 'Team building — Strategy, fun and team cohesion — the perfect combo!', fr: 'Team building — Stratégie, fun et cohésion d\'équipe — le combo parfait !', es: 'Team building — Estrategia, diversión y cohesión de equipo.', de: 'Teambuilding — Strategie, Spaß und Teamzusammenhalt!', it: 'Team building — Strategia, divertimento e coesione di squadra!' },
  holiday: { en: "On holiday — You're in Tenerife? Try something unique between two beaches!", fr: "En vacances — Vous êtes à Tenerife ? Tentez quelque chose d'unique entre deux plages !", es: 'De vacaciones — ¿Estás en Tenerife? ¡Prueba algo único!', de: 'Im Urlaub — Sie sind auf Teneriffa? Probieren Sie etwas Einzigartiges!', it: 'In vacanza — Sei a Tenerife? Prova qualcosa di unico!' },
  friends: { en: "With friends — Who's really the smartest? There's only one way to find out!", fr: 'Entre amis — Qui est vraiment le plus fort du groupe ? Il n\'y a qu\'une façon de le savoir !', es: '¿Entre amigos — Quién es el más listo del grupo?', de: 'Mit Freunden — Wer ist wirklich der Klügste der Gruppe?', it: "Con gli amici — Chi è davvero il più intelligente del gruppo?" },

  // CTA
  ctaTitle: { en: 'Ready to play?', fr: 'Prêt à jouer ?', es: '¿Listo para jugar?', de: 'Bereit zu spielen?', it: 'Pronti a giocare?' },
  ctaDesc: { en: "Free themes, devastating jokers, live leaderboard — and guaranteed laughs. Tenerife's most epic quiz experience awaits you at Fun Zone!", fr: "Thèmes libres, jokers dévastateurs, classement en direct — et fous rires garantis. L'expérience quiz la plus épique de Tenerife vous attend à Fun Zone !", es: '¡Temas libres, jokers devastadores, clasificación en directo y risas garantizadas!', de: 'Freie Themen, verheerende Joker, Live-Rangliste — und garantierte Lacher!', it: 'Temi liberi, joker devastanti, classifica in diretta — e risate garantite!' },
  from: { en: 'From', fr: 'À partir de', es: 'Desde', de: 'Ab', it: 'Da' },
};

const themes = ['🌍', '🔬', '⚽', '🏛️', '🎵', '🎬', '🎨', '🍕', '💻', '🌿', '📺', '🎭', '✈️', '🧠'];
const themeNames: Record<string, string[]> = {
  en: ['Geography', 'Science', 'Sport', 'History', 'Music', 'Cinema', 'Art', 'Food', 'Tech', 'Nature', 'Pop Culture', 'Literature', 'Travel', 'General Knowledge'],
  fr: ['Géographie', 'Sciences', 'Sport', 'Histoire', 'Musique', 'Cinéma', 'Art', 'Gastronomie', 'Tech', 'Nature', 'Culture Pop', 'Littérature', 'Voyages', 'Culture Générale'],
  es: ['Geografía', 'Ciencias', 'Deporte', 'Historia', 'Música', 'Cine', 'Arte', 'Gastronomía', 'Tech', 'Naturaleza', 'Cultura Pop', 'Literatura', 'Viajes', 'Cultura General'],
  de: ['Geografie', 'Wissenschaft', 'Sport', 'Geschichte', 'Musik', 'Kino', 'Kunst', 'Gastronomie', 'Tech', 'Natur', 'Popkultur', 'Literatur', 'Reisen', 'Allgemeinwissen'],
  it: ['Geografia', 'Scienze', 'Sport', 'Storia', 'Musica', 'Cinema', 'Arte', 'Gastronomia', 'Tech', 'Natura', 'Cultura Pop', 'Letteratura', 'Viaggi', 'Cultura Generale'],
};

const pricing = [
  { label: '2', price: 14 },
  { label: '3–4', price: 13 },
  { label: '5–6', price: 12, best: true },
];

export default function QuizRoomPage() {
  const locale = useLocale();
  const t = (key: string) => ui[key]?.[locale] || ui[key]?.['en'] || key;
  const tNames = themeNames[locale] || themeNames['en'];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* STICKY BOOKING CARD */}
      <div className="fixed right-4 top-1/2 z-50 hidden w-72 -translate-y-1/2 lg:block">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', damping: 25, stiffness: 300 }}
          className="rounded-2xl border border-[#a855f7]/20 bg-[#0d0a14]/95 p-5 shadow-[0_0_30px_rgba(168,85,247,0.08)] backdrop-blur-xl"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#a855f7]/10">
              <Sparkles size={14} className="text-[#a855f7]" />
            </div>
            <div className="flex-1">
              <p className="text-[13px] leading-relaxed text-white/70">{t('ctaDesc').slice(0, 120)}...</p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={`/${locale}/book?category=quiz`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#a855f7] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#c084fc] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  {t('bookNow')}
                </a>
                <span className="text-xs text-white/40">
                  {t('from')} <span className="font-semibold text-[#a855f7]">12€</span>{t('perPerson')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MOBILE STICKY */}
      <div className="fixed left-0 right-0 top-14 z-50 px-3 lg:hidden">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, type: 'spring', damping: 25, stiffness: 300 }}
          className="flex items-center justify-between gap-3 rounded-xl border border-[#a855f7]/20 bg-[#0d0a14]/95 px-4 py-2.5 shadow-lg backdrop-blur-xl"
        >
          <span className="text-xs text-white/40">
            {t('from')} <span className="font-semibold text-[#a855f7]">12€</span>{t('perPerson')}
          </span>
          <a
            href={`/${locale}/book?category=quiz`}
            className="rounded-lg bg-[#a855f7] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-[#c084fc]"
          >
            {t('bookNow')}
          </a>
        </motion.div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[21/9] w-full sm:aspect-[3/1]">
          <Image
            src="/images/offers/quizzaboom.png"
            alt="QuizzaBoom"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
          <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at center bottom, rgba(168,85,247,0.3) 0%, transparent 70%)' }} />

          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Button variant="ghost" size="sm" asChild className="mb-4">
                  <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />{t('backHome')}</Link>
                </Button>
                <div className="mb-2 inline-block rounded-full border border-[#a855f7]/40 bg-[#a855f7]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#a855f7]">
                  {t('badge')}
                </div>
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#a855f7]/40 bg-white/5 backdrop-blur-sm">
                    <Brain className="h-7 w-7 text-[#a855f7]" />
                  </div>
                  <h1 className="neon-glow-violet text-3xl font-bold text-white sm:text-4xl md:text-5xl">{t('title')}</h1>
                </div>
                <p className="max-w-2xl text-base text-white/70">{t('subtitle')}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { icon: <Clock size={14} />, text: t('duration') },
                    { icon: <Users size={14} />, text: t('players') },
                    { icon: <Gamepad2 size={14} />, text: t('fromAge') },
                    { icon: <Globe size={14} />, text: t('languages') },
                    { icon: <MapPin size={14} />, text: t('venue') },
                  ].map((pill, i) => (
                    <span key={i} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                      {pill.icon} {pill.text}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="border-y border-white/5 bg-[#111118]">
        <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-4">
          {[
            { val: '2–6', label: t('statPlayers'), emoji: '👥' },
            { val: '4', label: t('statLangs'), emoji: '🌍' },
            { val: '4', label: t('statJokers'), emoji: '🃏' },
            { val: '∞', label: t('statThemes'), emoji: '💥' },
          ].map((stat, i) => (
            <div key={i} className="border-r border-white/5 p-6 text-center last:border-r-0">
              <div className="text-2xl">{stat.emoji}</div>
              <div className="mt-1 text-2xl font-bold text-[#a855f7]">{stat.val}</div>
              <div className="text-xs text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* EXPERIENCE */}
        <section className="py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a855f7]">{t('expLabel')}</p>
          <h2 className="neon-glow-violet mb-6 text-2xl font-bold text-white sm:text-3xl">{t('expTitle')}</h2>
          <div className="rounded-2xl border border-white/5 bg-[#111118] p-8">
            <div className="absolute -mt-8 ml-[-8px] h-1 w-full rounded bg-gradient-to-r from-[#a855f7] via-[#ff2d7b] to-[#ff8c00]" style={{ maxWidth: '100%', position: 'relative' }} />
            <p className="text-base leading-relaxed text-white/75">{t('expDesc')}</p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* HOW IT WORKS */}
        <section className="py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a855f7]">{t('howLabel')}</p>
          <h2 className="neon-glow-violet mb-8 text-2xl font-bold text-white sm:text-3xl">{t('howTitle')}</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { num: '01', icon: '🎨', title: t('step1Title'), desc: t('step1Desc') },
              { num: '02', icon: '📱', title: t('step2Title'), desc: t('step2Desc') },
              { num: '03', icon: '🔥', title: t('step3Title'), desc: t('step3Desc') },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
                className="group rounded-2xl border border-white/5 bg-[#111118] p-7 transition-all hover:border-[#a855f7]/30 hover:-translate-y-1"
              >
                <div className="text-5xl font-bold text-[#a855f7]/10">{step.num}</div>
                <div className="my-3 text-3xl">{step.icon}</div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* JOKERS */}
        <section className="py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a855f7]">{t('jokersLabel')}</p>
          <h2 className="neon-glow-violet mb-4 text-2xl font-bold text-white sm:text-3xl">{t('jokersTitle')}</h2>
          <div className="mb-6 rounded-2xl border-l-2 border-[#a855f7]/40 bg-[#111118] p-5 text-sm text-white/60">{t('jokersIntro')}</div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: <Shield className="h-8 w-8" />, name: t('jokerShield'), desc: t('jokerShieldDesc'), color: '#a855f7' },
              { icon: <Ban className="h-8 w-8" />, name: t('jokerBlock'), desc: t('jokerBlockDesc'), color: '#ff8c00' },
              { icon: <Coins className="h-8 w-8" />, name: t('jokerSteal'), desc: t('jokerStealDesc'), color: '#ff2d7b' },
              { icon: <Zap className="h-8 w-8" />, name: t('jokerDouble'), desc: t('jokerDoubleDesc'), color: '#00d4ff' },
            ].map((joker, i) => (
              <div key={i} className="group rounded-2xl border bg-[#111118] p-6 transition-all hover:-translate-y-1"
                style={{ borderColor: `${joker.color}20` }}
              >
                <div style={{ color: joker.color }}>{joker.icon}</div>
                <h3 className="mt-3 text-lg font-bold uppercase tracking-wider" style={{ color: joker.color }}>{joker.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{joker.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* THEMES */}
        <section className="py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a855f7]">{t('themesLabel')}</p>
          <h2 className="neon-glow-violet mb-8 text-2xl font-bold text-white sm:text-3xl">{t('themesTitle')}</h2>
          <div className="flex flex-wrap gap-3">
            {themes.map((emoji, i) => (
              <span key={i} className="rounded-full border border-white/10 bg-[#111118] px-4 py-2 text-sm text-white/80 transition-all hover:border-[#a855f7]/40 hover:text-[#a855f7]">
                {emoji} {tNames[i]}
              </span>
            ))}
            <span className="rounded-full border border-[#a855f7]/40 bg-[#a855f7]/10 px-4 py-2 text-sm font-semibold text-[#a855f7]">
              ✨ ...
            </span>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* MODES */}
        <section className="py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a855f7]">{t('modesLabel')}</p>
          <h2 className="neon-glow-violet mb-8 text-2xl font-bold text-white sm:text-3xl">{t('modesTitle')}</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { emoji: '🏆', name: t('modeStandard'), desc: t('modeStandardDesc'), color: '#ff8c00' },
              { emoji: '😂', name: t('modeFun'), desc: t('modeFunDesc'), color: '#ff2d7b' },
              { emoji: '🧒', name: t('modeKids'), desc: t('modeKidsDesc'), color: '#39ff14' },
            ].map((mode, i) => (
              <div key={i} className="rounded-2xl border bg-[#111118] p-7 text-center transition-all hover:-translate-y-1"
                style={{ borderColor: `${mode.color}25` }}
              >
                <div className="text-4xl">{mode.emoji}</div>
                <h3 className="mt-3 text-base font-bold uppercase tracking-wider" style={{ color: mode.color }}>{mode.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{mode.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* PERFECT FOR */}
        <section className="py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a855f7]">{t('perfectFor')}</p>
          <h2 className="neon-glow-violet mb-8 text-2xl font-bold text-white sm:text-3xl">{t('perfectTitle')}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { emoji: '👨‍👩‍👧‍👦', text: t('family') },
              { emoji: '🥂', text: t('bachelor') },
              { emoji: '🎂', text: t('birthday') },
              { emoji: '💼', text: t('teambuilding') },
              { emoji: '🌴', text: t('holiday') },
              { emoji: '🎮', text: t('friends') },
            ].map((m, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-[#111118] p-5 transition-all hover:border-[#39ff14]/20">
                <span className="text-xl">{m.emoji}</span>
                <span className="text-sm text-white/70">{m.text}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* PRICING */}
        <section className="py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a855f7]">{t('pricingLabel')}</p>
          <h2 className="neon-glow-violet mb-2 text-2xl font-bold text-white sm:text-3xl">{t('pricingTitle')}</h2>
          <p className="mb-8 text-sm text-white/50">{t('pricingNote')}</p>
          <div className="max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#111118]">
            <div className="h-1 bg-gradient-to-r from-[#a855f7] via-[#ff2d7b] to-[#ff8c00]" />
            {pricing.map((tier, i) => (
              <div key={i} className={`flex items-center justify-between border-b border-white/5 px-6 py-5 last:border-b-0 ${tier.best ? 'bg-[#a855f7]/5' : ''}`}>
                <div className="flex items-center gap-3">
                  <Users size={16} className="text-white/30" />
                  <span className="text-sm text-white/80">{tier.label} {t('statPlayers').split(' ')[0]}</span>
                  {tier.best && <span className="rounded bg-[#a855f7]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#a855f7]">{t('bestPrice')}</span>}
                </div>
                <span className="text-2xl font-bold text-[#a855f7]">€{tier.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/40">
            📍 Fun Zone Tenerife · Avenida Arquitecto Gomez Cuesta 22, Zentral Center, Playa Las Américas
          </p>
        </section>
      </div>

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#111118]">
        <div className="relative overflow-hidden py-20 text-center">
          <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.06) 0%, transparent 70%)' }} />
          <div className="relative z-10 mx-auto max-w-xl px-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a855f7]">{t('ctaTitle')}</p>
            <h2 className="neon-glow-violet mb-6 text-3xl font-bold text-white sm:text-4xl">QUIZZABOOM</h2>
            <p className="mb-8 text-base text-white/55">{t('ctaDesc')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`/${locale}/book?category=quiz`} className="inline-flex items-center gap-2 rounded-xl bg-[#a855f7] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#c084fc] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                🎯 {t('bookNow')}
              </a>
              <a href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-sm font-medium text-white/70 transition-all hover:border-[#a855f7]/40 hover:text-[#a855f7]">
                💬 Contact
              </a>
            </div>
            <p className="mt-5 text-xs text-white/35">{t('from')} €12{t('perPerson')} · 2–6 {t('statPlayers').split(' ')[0]} · 1h</p>
          </div>
        </div>
      </section>
    </div>
  );
}
