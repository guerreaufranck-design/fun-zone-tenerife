-- ============================================================
-- Migration 006: Complete product content, SEO & pricing fixes
-- Reworked sales copy + SEO from Shopify site reference
-- ============================================================

-- ============================================================
-- 1. TRADITIONAL AXE THROWING 1H
-- ============================================================
UPDATE offers SET
  title = '{
    "en": "Traditional Axe Throwing",
    "es": "Lanzamiento de Hacha Tradicional",
    "fr": "Lancer de Hache Traditionnel",
    "de": "Traditionelles Axtwerfen",
    "nl": "Traditioneel Bijlwerpen"
  }',
  description = '{
    "en": "Step into Tenerife''s first and only interactive axe throwing venue! Master ancient throwing techniques with expert coaching on our state-of-the-art digital targets. No experience needed — our instructors guide you from your very first throw. Choose from 15+ interactive game modes, challenge your friends in head-to-head competitions, and discover why axe throwing is the most thrilling activity in Playa Las Américas. Perfect for couples, friend groups, and anyone looking for an unforgettable adrenaline rush.",
    "es": "¡Descubre el primer y único centro de lanzamiento de hacha interactivo de Tenerife! Domina las técnicas ancestrales de lanzamiento con instructores expertos y nuestras dianas digitales de última generación. Sin experiencia previa necesaria — nuestros monitores te guían desde tu primer lanzamiento. Elige entre más de 15 modos de juego interactivos, desafía a tus amigos en competiciones directas y descubre por qué el lanzamiento de hacha es la actividad más emocionante de Playa Las Américas.",
    "fr": "Découvrez le premier et unique centre de lancer de hache interactif de Tenerife ! Maîtrisez les techniques ancestrales de lancer avec nos instructeurs experts et nos cibles numériques de dernière génération. Aucune expérience requise — nos moniteurs vous guident dès votre premier lancer. Choisissez parmi plus de 15 modes de jeu interactifs, défiez vos amis en compétition et découvrez pourquoi le lancer de hache est l''activité la plus palpitante de Playa Las Américas.",
    "de": "Entdecken Sie Tenerifas erstes und einziges interaktives Axtwerf-Center! Meistern Sie uralte Wurftechniken mit professioneller Anleitung auf unseren hochmodernen digitalen Zielscheiben. Keine Vorkenntnisse nötig — unsere Instruktoren begleiten Sie ab dem ersten Wurf. Wählen Sie aus über 15 interaktiven Spielmodi, fordern Sie Ihre Freunde zum Duell heraus und erleben Sie, warum Axtwerfen die aufregendste Aktivität in Playa Las Américas ist.",
    "nl": "Ontdek de eerste en enige interactieve bijlwerp-locatie van Tenerife! Beheers eeuwenoude werptechnieken met professionele begeleiding op onze ultramoderne digitale doelen. Geen ervaring nodig — onze instructeurs begeleiden je vanaf je allereerste worp. Kies uit 15+ interactieve spelmodi, daag je vrienden uit en ontdek waarom bijlwerpen de meest opwindende activiteit in Playa Las Américas is."
  }',
  short_desc = '{
    "en": "1h axe throwing with expert coaching & 15+ interactive games",
    "es": "1h de lanzamiento de hacha con monitor experto y 15+ juegos interactivos",
    "fr": "1h de lancer de hache avec coach expert et 15+ jeux interactifs",
    "de": "1h Axtwerfen mit Experten-Coaching & 15+ interaktive Spiele",
    "nl": "1u bijlwerpen met professionele coaching & 15+ interactieve spellen"
  }',
  seo_title = '{
    "en": "Axe Throwing Tenerife — 1H Session | Playa Las Américas",
    "es": "Lanzamiento de Hacha Tenerife — Sesión 1H | Playa Las Américas",
    "fr": "Lancer de Hache Tenerife — Session 1H | Playa Las Américas",
    "de": "Axtwerfen Teneriffa — 1H Session | Playa Las Américas",
    "nl": "Bijlwerpen Tenerife — 1U Sessie | Playa Las Américas"
  }',
  seo_description = '{
    "en": "Try axe throwing in Tenerife! 1-hour session with expert coaching, 15+ interactive games & digital targets. No experience needed. Book now in Playa Las Américas!",
    "es": "¡Prueba el lanzamiento de hacha en Tenerife! Sesión de 1 hora con monitor experto, 15+ juegos interactivos y dianas digitales. Reserva en Playa Las Américas.",
    "fr": "Essayez le lancer de hache à Tenerife ! Session d''1h avec coach expert, 15+ jeux interactifs et cibles numériques. Réservez à Playa Las Américas !",
    "de": "Axtwerfen auf Teneriffa! 1-Stunden-Session mit Experten-Coaching, 15+ interaktive Spiele & digitale Ziele. Jetzt buchen in Playa Las Américas!",
    "nl": "Probeer bijlwerpen op Tenerife! 1 uur sessie met coaching, 15+ interactieve spellen & digitale doelen. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'traditional-axe-1h';

-- ============================================================
-- 2. NINJA + AXE THROWING 1H
-- ============================================================
UPDATE offers SET
  title = '{
    "en": "Ninja + Axe Throwing",
    "es": "Ninja + Lanzamiento de Hacha",
    "fr": "Ninja + Lancer de Hache",
    "de": "Ninja + Axtwerfen",
    "nl": "Ninja + Bijlwerpen"
  }',
  description = '{
    "en": "Train like a true ninja! This ultimate combo session combines axe throwing with shuriken and knife throwing for the complete warrior experience. Master precision with 3 different weapon types under expert guidance. Test your accuracy on our interactive digital targets with 15+ game modes. No experience needed — we train you from zero to ninja in 60 minutes. The most unique activity in Tenerife, perfect for groups, couples, and anyone seeking an adrenaline-packed adventure in Playa Las Américas.",
    "es": "¡Entrena como un auténtico ninja! Esta sesión combo combina lanzamiento de hacha con shuriken y cuchillos para la experiencia guerrera completa. Domina la precisión con 3 tipos de armas diferentes bajo la guía de expertos. Pon a prueba tu puntería en nuestras dianas digitales interactivas con más de 15 modos de juego. Sin experiencia necesaria — te convertimos en ninja en 60 minutos. La actividad más única de Tenerife.",
    "fr": "Entraînez-vous comme un vrai ninja ! Cette session combo ultime associe lancer de hache, shuriken et couteaux pour l''expérience guerrière complète. Maîtrisez la précision avec 3 types d''armes sous la direction d''experts. Testez votre adresse sur nos cibles numériques interactives avec 15+ modes de jeu. Aucune expérience requise — on vous transforme en ninja en 60 minutes. L''activité la plus unique de Tenerife.",
    "de": "Trainieren Sie wie ein echter Ninja! Diese ultimative Combo-Session kombiniert Axtwerfen mit Shuriken und Messerwerfen für das komplette Krieger-Erlebnis. Meistern Sie die Präzision mit 3 verschiedenen Waffentypen unter Expertenanleitung. Testen Sie Ihre Treffsicherheit auf unseren interaktiven Digitalzielen mit 15+ Spielmodi. Keine Vorkenntnisse nötig — vom Anfänger zum Ninja in 60 Minuten.",
    "nl": "Train als een echte ninja! Deze ultieme combosessie combineert bijlwerpen met shuriken en meswerpen voor de complete krijgerervaring. Beheers precisie met 3 verschillende wapentypen onder deskundige begeleiding. Test je nauwkeurigheid op onze interactieve digitale doelen met 15+ spelmodi. Geen ervaring nodig — van beginner tot ninja in 60 minuten."
  }',
  short_desc = '{
    "en": "1h combo: axe + shuriken + knife throwing with 15+ games",
    "es": "1h combo: hacha + shuriken + cuchillos con 15+ juegos",
    "fr": "1h combo : hache + shuriken + couteaux avec 15+ jeux",
    "de": "1h Kombi: Axt + Shuriken + Messer mit 15+ Spielen",
    "nl": "1u combo: bijl + shuriken + mes met 15+ spellen"
  }',
  seo_title = '{
    "en": "Ninja + Axe Throwing Tenerife — 1H Combo | Playa Las Américas",
    "es": "Ninja + Hacha Tenerife — Combo 1H | Playa Las Américas",
    "fr": "Ninja + Hache Tenerife — Combo 1H | Playa Las Américas",
    "de": "Ninja + Axtwerfen Teneriffa — 1H Kombi | Playa Las Américas",
    "nl": "Ninja + Bijlwerpen Tenerife — 1U Combo | Playa Las Américas"
  }',
  seo_description = '{
    "en": "Axe, shuriken & knife throwing in Tenerife! 1-hour ninja combo with expert coaching, 15+ interactive games. The ultimate group activity in Playa Las Américas. Book now!",
    "es": "¡Hacha, shuriken y cuchillos en Tenerife! Combo ninja de 1 hora con monitor, 15+ juegos interactivos. Reserva ahora en Playa Las Américas.",
    "fr": "Hache, shuriken et couteaux à Tenerife ! Combo ninja d''1h avec coach, 15+ jeux interactifs. L''activité ultime à Playa Las Américas. Réservez !",
    "de": "Axt, Shuriken & Messerwerfen auf Teneriffa! 1h Ninja-Kombi mit Coaching, 15+ interaktive Spiele. Jetzt buchen in Playa Las Américas!",
    "nl": "Bijl, shuriken & meswerpen op Tenerife! 1u ninja combo met coaching, 15+ interactieve spellen. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'ninja-axe-1h';

-- ============================================================
-- 3. PREMIUM AXE THROWING 2H
-- ============================================================
UPDATE offers SET
  title = '{
    "en": "Premium Axe Experience",
    "es": "Experiencia Premium de Hacha",
    "fr": "Expérience Premium Hache",
    "de": "Premium Axt-Erlebnis",
    "nl": "Premium Bijl Ervaring"
  }',
  description = '{
    "en": "Our flagship 2-hour premium experience for those who want it all. Refine your axe throwing skills in an extended session with expert coaching, mastering advanced techniques across all 17 interactive game modes. Includes a complimentary drink (beer or soft drink) to enjoy between rounds. Perfect for private groups, special celebrations, and corporate events in a stylish, refined setting. Challenge your friends in tournament mode and become the ultimate axe throwing champion of Playa Las Américas!",
    "es": "Nuestra experiencia premium de 2 horas para quienes lo quieren todo. Perfecciona tus habilidades de lanzamiento de hacha en una sesión extendida con coaching experto, dominando técnicas avanzadas en los 17 modos de juego interactivos. Incluye una bebida de cortesía (cerveza o refresco). Perfecta para grupos privados, celebraciones especiales y eventos corporativos en un ambiente exclusivo. ¡Desafía a tus amigos en modo torneo!",
    "fr": "Notre expérience premium phare de 2 heures pour ceux qui veulent tout. Perfectionnez vos compétences en lancer de hache lors d''une session prolongée avec coaching expert, maîtrisant les techniques avancées à travers les 17 modes de jeu interactifs. Inclut une boisson offerte (bière ou soft). Parfait pour les groupes privés, célébrations spéciales et événements d''entreprise dans un cadre raffiné.",
    "de": "Unser Flaggschiff-Erlebnis: 2 Stunden Premium für alle, die das Volle wollen. Verfeinern Sie Ihre Axtwerf-Fähigkeiten in einer erweiterten Session mit Experten-Coaching und meistern Sie fortgeschrittene Techniken in allen 17 interaktiven Spielmodi. Inklusive Freigetränk (Bier oder Softdrink). Perfekt für private Gruppen, besondere Feiern und Firmenevents in stilvollem Ambiente.",
    "nl": "Ons vlaggenschip: 2 uur premium ervaring voor wie alles wil. Verfijn je bijlwerptechnieken in een uitgebreide sessie met professionele coaching en beheers geavanceerde technieken in alle 17 interactieve spelmodi. Inclusief gratis drankje (bier of fris). Perfect voor privégroepen, speciale vieringen en bedrijfsevenementen."
  }',
  short_desc = '{
    "en": "2h premium axe session with all 17 games + 1 free drink",
    "es": "2h de hacha premium con 17 juegos + 1 bebida gratis",
    "fr": "2h de hache premium avec 17 jeux + 1 boisson offerte",
    "de": "2h Premium-Axt mit allen 17 Spielen + 1 Freigetränk",
    "nl": "2u premium bijl met alle 17 spellen + 1 gratis drankje"
  }',
  seo_title = '{
    "en": "Premium Axe Throwing 2H Tenerife | Drink Included",
    "es": "Hacha Premium 2H Tenerife | Bebida Incluida",
    "fr": "Hache Premium 2H Tenerife | Boisson Incluse",
    "de": "Premium Axtwerfen 2H Teneriffa | Getränk Inklusive",
    "nl": "Premium Bijlwerpen 2U Tenerife | Drankje Inbegrepen"
  }',
  seo_description = '{
    "en": "2-hour premium axe throwing in Tenerife with drink included. Master 17 interactive games with expert coaching. Perfect for groups & events. Book in Playa Las Américas!",
    "es": "2 horas de lanzamiento de hacha premium en Tenerife con bebida incluida. 17 juegos interactivos con monitor. Reserva en Playa Las Américas.",
    "fr": "2h de lancer de hache premium à Tenerife avec boisson incluse. 17 jeux interactifs avec coach expert. Réservez à Playa Las Américas !",
    "de": "2h Premium Axtwerfen auf Teneriffa mit Getränk inklusive. 17 interaktive Spiele mit Experten-Coaching. Jetzt buchen in Playa Las Américas!",
    "nl": "2u premium bijlwerpen op Tenerife met drankje inbegrepen. 17 interactieve spellen met coaching. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'premium-axe-2h';

-- ============================================================
-- 4. NINJA + AXE THROWING 2H
-- ============================================================
UPDATE offers SET
  title = '{
    "en": "Ninja + Axe Experience 2H",
    "es": "Experiencia Ninja + Hacha 2H",
    "fr": "Expérience Ninja + Hache 2H",
    "de": "Ninja + Axt Erlebnis 2H",
    "nl": "Ninja + Bijl Ervaring 2U"
  }',
  description = '{
    "en": "The ultimate warrior package. 2 hours of pure adrenaline combining 8 different axes, shurikens, and throwing knives across 17 interactive game modes. Master precision and stealth with expert ninja coaching. Includes a complimentary drink (beer or soft drink) after your session. With up to 6 players per private lane, this is the most complete throwing experience in the Canary Islands. Test your accuracy, compete in tournaments, and leave as a certified ninja!",
    "es": "El pack guerrero definitivo. 2 horas de pura adrenalina combinando 8 hachas diferentes, shurikens y cuchillos de lanzamiento en 17 modos de juego interactivos. Domina la precisión y el sigilo con coaching ninja experto. Incluye una bebida de cortesía (cerveza o refresco). Con hasta 6 jugadores por pista privada, es la experiencia de lanzamiento más completa de Canarias. ¡Sal de aquí siendo un ninja certificado!",
    "fr": "Le pack guerrier ultime. 2 heures d''adrénaline pure combinant 8 haches différentes, shurikens et couteaux de lancer sur 17 modes de jeu interactifs. Maîtrisez précision et furtivité avec un coaching ninja expert. Inclut une boisson offerte (bière ou soft). Jusqu''à 6 joueurs par piste privée, c''est l''expérience de lancer la plus complète des Canaries. Repartez en ninja certifié !",
    "de": "Das ultimative Krieger-Paket. 2 Stunden pure Adrenalin mit 8 verschiedenen Äxten, Shuriken und Wurfmessern in 17 interaktiven Spielmodi. Meistern Sie Präzision und Heimlichkeit mit professionellem Ninja-Coaching. Inklusive Freigetränk (Bier oder Softdrink). Mit bis zu 6 Spielern pro privater Bahn das vollständigste Wurf-Erlebnis der Kanarischen Inseln!",
    "nl": "Het ultieme krijgerspakket. 2 uur pure adrenaline met 8 verschillende bijlen, shuriken en werpmessen in 17 interactieve spelmodi. Beheers precisie en stealth met professionele ninja-coaching. Inclusief gratis drankje (bier of fris). Tot 6 spelers per privébaan — de meest complete werpervaring van de Canarische Eilanden!"
  }',
  short_desc = '{
    "en": "2h ninja combo: 8 axes + shuriken + knives, 17 games + drink",
    "es": "2h combo ninja: 8 hachas + shuriken + cuchillos, 17 juegos + bebida",
    "fr": "2h combo ninja : 8 haches + shuriken + couteaux, 17 jeux + boisson",
    "de": "2h Ninja-Kombi: 8 Äxte + Shuriken + Messer, 17 Spiele + Getränk",
    "nl": "2u ninja combo: 8 bijlen + shuriken + messen, 17 spellen + drankje"
  }',
  seo_title = '{
    "en": "Ninja + Axe 2H Tenerife — Ultimate Combo | Drink Included",
    "es": "Ninja + Hacha 2H Tenerife — Combo Definitivo | Bebida Incluida",
    "fr": "Ninja + Hache 2H Tenerife — Combo Ultime | Boisson Incluse",
    "de": "Ninja + Axt 2H Teneriffa — Ultimatives Kombi | Getränk Inklusive",
    "nl": "Ninja + Bijl 2U Tenerife — Ultieme Combo | Drankje Inbegrepen"
  }',
  seo_description = '{
    "en": "2-hour ninja experience in Tenerife: axes, shurikens & knives with 17 interactive games + free drink. The ultimate group activity in Playa Las Américas. Book now!",
    "es": "Experiencia ninja de 2h en Tenerife: hachas, shurikens y cuchillos con 17 juegos + bebida gratis. ¡Reserva ahora en Playa Las Américas!",
    "fr": "Expérience ninja de 2h à Tenerife : haches, shurikens et couteaux avec 17 jeux + boisson offerte. Réservez à Playa Las Américas !",
    "de": "2h Ninja-Erlebnis auf Teneriffa: Äxte, Shuriken & Messer mit 17 Spielen + Freigetränk. Jetzt buchen in Playa Las Américas!",
    "nl": "2u ninja-ervaring op Tenerife: bijlen, shuriken & messen met 17 spellen + gratis drankje. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'ninja-axe-2h';

-- ============================================================
-- 5. NINJA INITIATION (30min)
-- ============================================================
UPDATE offers SET
  title = '{
    "en": "Ninja Initiation",
    "es": "Iniciación Ninja",
    "fr": "Initiation Ninja",
    "de": "Ninja-Einführung",
    "nl": "Ninja Initiatie"
  }',
  description = '{
    "en": "Unleash your inner ninja! 30 minutes of adrenaline-fueled shuriken throwing on interactive digital targets. Master 9 unique game modes designed to challenge your precision, speed, and ninja instincts. Our expert instructors guide you through authentic throwing techniques in a safe, controlled environment. Perfect as a quick thrill, a warm-up before a longer session, or an introduction to the world of ninja weapons. Suitable for groups of up to 6 players per lane.",
    "es": "¡Despierta al ninja que llevas dentro! 30 minutos de lanzamiento de shuriken cargados de adrenalina con dianas digitales interactivas. Domina 9 modos de juego únicos diseñados para poner a prueba tu precisión, velocidad e instintos ninja. Nuestros instructores expertos te guían en técnicas auténticas de lanzamiento en un entorno seguro y controlado. Perfecto como actividad rápida o como introducción al mundo de las armas ninja.",
    "fr": "Réveillez le ninja qui sommeille en vous ! 30 minutes de lancer de shuriken chargées d''adrénaline sur cibles numériques interactives. Maîtrisez 9 modes de jeu uniques conçus pour tester votre précision, votre rapidité et votre instinct ninja. Nos instructeurs experts vous guident dans les techniques authentiques de lancer dans un environnement sûr et contrôlé. Parfait pour une montée d''adrénaline rapide ou une initiation aux armes ninja.",
    "de": "Entfesseln Sie Ihren inneren Ninja! 30 Minuten adrenalingeladenes Shuriken-Werfen auf interaktive Digitalziele. Meistern Sie 9 einzigartige Spielmodi, die Ihre Präzision, Geschwindigkeit und Ninja-Instinkte herausfordern. Unsere Experten führen Sie durch authentische Wurftechniken in einer sicheren Umgebung. Perfekt als schneller Adrenalinkick oder als Einstieg in die Welt der Ninja-Waffen.",
    "nl": "Laat je innerlijke ninja los! 30 minuten adrenaline-geladen shuriken werpen op interactieve digitale doelen. Beheers 9 unieke spelmodi die je precisie, snelheid en ninja-instincten uitdagen. Onze experts begeleiden je door authentieke werptechnieken in een veilige omgeving. Perfect als snelle kick of als kennismaking met de wereld van ninja-wapens."
  }',
  short_desc = '{
    "en": "30min shuriken throwing with 9 interactive ninja games",
    "es": "30min de shuriken con 9 juegos interactivos ninja",
    "fr": "30min de shuriken avec 9 jeux ninja interactifs",
    "de": "30min Shuriken-Werfen mit 9 interaktiven Ninja-Spielen",
    "nl": "30min shuriken werpen met 9 interactieve ninja-spellen"
  }',
  seo_title = '{
    "en": "Ninja Shuriken Throwing Tenerife — 30min Session",
    "es": "Lanzamiento de Shuriken Tenerife — Sesión 30min",
    "fr": "Lancer de Shuriken Tenerife — Session 30min",
    "de": "Shuriken-Werfen Teneriffa — 30min Session",
    "nl": "Shuriken Werpen Tenerife — 30min Sessie"
  }',
  seo_description = '{
    "en": "Try shuriken throwing in Tenerife! 30-minute ninja session with 9 interactive games & digital targets. Perfect intro activity in Playa Las Américas. Book now!",
    "es": "¡Prueba el lanzamiento de shuriken en Tenerife! Sesión ninja de 30 min con 9 juegos interactivos. Reserva en Playa Las Américas.",
    "fr": "Essayez le lancer de shuriken à Tenerife ! Session ninja de 30min avec 9 jeux interactifs. Réservez à Playa Las Américas !",
    "de": "Shuriken-Werfen auf Teneriffa! 30-Minuten Ninja-Session mit 9 interaktiven Spielen. Jetzt buchen in Playa Las Américas!",
    "nl": "Probeer shuriken werpen op Tenerife! 30 minuten ninja sessie met 9 interactieve spellen. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'ninja-initiation';

-- ============================================================
-- 6. DARTS PIXELS 30min
-- ============================================================
UPDATE offers SET
  description = '{
    "en": "Experience the future of darts! Our high-tech interactive pixel board combines digital projected targets with traditional precision — choose between darts or blowgun for a unique twist. With 15+ game modes from classic 501 to zombie survival, every round is different. Sterilized mouthpieces provided for blowgun. No experience needed — just aim, throw, and compete! Perfect for a quick adrenaline fix or a fun warm-up activity in Playa Las Américas.",
    "es": "¡Experimenta el futuro de los dardos! Nuestra diana interactiva de alta tecnología combina objetivos digitales proyectados con precisión tradicional — elige entre dardos o cerbatana para una experiencia única. Con más de 15 modos de juego desde el clásico 501 hasta supervivencia zombie, cada ronda es diferente. Boquillas esterilizadas para cerbatana. Sin experiencia necesaria — ¡apunta, lanza y compite!",
    "fr": "Découvrez le futur des fléchettes ! Notre cible interactive haute technologie combine cibles numériques projetées et précision traditionnelle — choisissez entre fléchettes ou sarbacane pour une expérience unique. Avec 15+ modes de jeu du classique 501 au survival zombie, chaque manche est différente. Embouts stérilisés fournis pour la sarbacane. Aucune expérience requise — visez, lancez et rivalisez !",
    "de": "Erleben Sie die Zukunft des Dartsports! Unser Hightech-Pixelboard kombiniert digital projizierte Ziele mit traditioneller Präzision — wählen Sie zwischen Darts oder Blasrohr für einen einzigartigen Twist. Mit 15+ Spielmodi von klassisch 501 bis Zombie-Survival ist jede Runde anders. Sterilisierte Mundstücke für das Blasrohr werden gestellt. Keine Vorkenntnisse nötig — zielen, werfen und wetteifern!",
    "nl": "Ervaar de toekomst van darts! Ons hightech pixelbord combineert digitaal geprojecteerde doelen met traditionele precisie — kies tussen darts of blaaspijp voor een unieke twist. Met 15+ spelmodi van klassiek 501 tot zombie survival is elke ronde anders. Gesteriliseerde mondstukken voor blaaspijp worden verstrekt. Geen ervaring nodig — richt, gooi en strijd!"
  }',
  short_desc = '{
    "en": "30min interactive digital darts or blowgun with 15+ games",
    "es": "30min dardos digitales o cerbatana interactivos con 15+ juegos",
    "fr": "30min fléchettes numériques ou sarbacane avec 15+ jeux",
    "de": "30min interaktive Digital-Darts oder Blasrohr mit 15+ Spielen",
    "nl": "30min interactieve digitale darts of blaaspijp met 15+ spellen"
  }',
  seo_title = '{
    "en": "Darts Pixels 30min Tenerife — Interactive Digital Darts",
    "es": "Darts Pixels 30min Tenerife — Dardos Digitales Interactivos",
    "fr": "Darts Pixels 30min Tenerife — Fléchettes Numériques",
    "de": "Darts Pixels 30min Teneriffa — Interaktive Digital-Darts",
    "nl": "Darts Pixels 30min Tenerife — Interactieve Digitale Darts"
  }',
  seo_description = '{
    "en": "High-tech interactive darts in Tenerife! 30-minute session with digital targets, darts or blowgun, 15+ games. Fun for all ages in Playa Las Américas. Book now!",
    "es": "¡Dardos interactivos high-tech en Tenerife! Sesión de 30 min con dianas digitales, dardos o cerbatana, 15+ juegos. Reserva en Playa Las Américas.",
    "fr": "Fléchettes interactives high-tech à Tenerife ! Session de 30min avec cibles numériques, fléchettes ou sarbacane, 15+ jeux. Réservez à Playa Las Américas !",
    "de": "Hightech interaktive Darts auf Teneriffa! 30-Minuten-Session mit Digitalzielen, Darts oder Blasrohr, 15+ Spiele. Jetzt buchen in Playa Las Américas!",
    "nl": "Hightech interactieve darts op Tenerife! 30 minuten sessie met digitale doelen, darts of blaaspijp, 15+ spellen. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'darts-pixels-30min';

-- ============================================================
-- 7. DARTS PIXELS 1H
-- ============================================================
UPDATE offers SET
  description = '{
    "en": "The full Darts Pixels experience! 1 hour on our cutting-edge interactive pixel board with digital projected targets. Choose between darts or blowgun and explore all 15+ game modes — from classic 501 and cricket to zombie survival and multiplayer challenges. More time means more games, more competition, and more fun. Sterilized mouthpieces provided for blowgun. Up to 6 players per lane for the ultimate group showdown in Playa Las Américas.",
    "es": "¡La experiencia Darts Pixels completa! 1 hora en nuestra diana interactiva de última generación con objetivos digitales proyectados. Elige entre dardos o cerbatana y explora los más de 15 modos de juego — del clásico 501 y cricket al survival zombie y desafíos multijugador. Más tiempo significa más juegos, más competición y más diversión. Hasta 6 jugadores por pista.",
    "fr": "L''expérience Darts Pixels complète ! 1 heure sur notre cible interactive de pointe avec objectifs numériques projetés. Choisissez entre fléchettes ou sarbacane et explorez les 15+ modes de jeu — du classique 501 et cricket au survival zombie et défis multijoueurs. Plus de temps signifie plus de jeux, plus de compétition et plus de fun. Jusqu''à 6 joueurs par piste.",
    "de": "Das volle Darts Pixels Erlebnis! 1 Stunde auf unserem hochmodernen interaktiven Pixelboard mit digital projizierten Zielen. Wählen Sie zwischen Darts oder Blasrohr und erkunden Sie alle 15+ Spielmodi — von klassisch 501 und Cricket bis Zombie-Survival und Multiplayer-Challenges. Mehr Zeit bedeutet mehr Spiele, mehr Wettbewerb und mehr Spaß. Bis zu 6 Spieler pro Bahn.",
    "nl": "De complete Darts Pixels ervaring! 1 uur op ons ultramodern interactief pixelbord met digitaal geprojecteerde doelen. Kies tussen darts of blaaspijp en verken alle 15+ spelmodi — van klassiek 501 en cricket tot zombie survival en multiplayer uitdagingen. Meer tijd betekent meer spellen, meer competitie en meer plezier. Tot 6 spelers per baan."
  }',
  short_desc = '{
    "en": "1h interactive digital darts or blowgun — all 15+ game modes",
    "es": "1h dardos digitales o cerbatana — todos los 15+ modos de juego",
    "fr": "1h fléchettes numériques ou sarbacane — tous les 15+ modes",
    "de": "1h interaktive Digital-Darts oder Blasrohr — alle 15+ Spielmodi",
    "nl": "1u interactieve digitale darts of blaaspijp — alle 15+ spelmodi"
  }',
  seo_title = '{
    "en": "Darts Pixels 1H Tenerife — Digital Darts & Blowgun",
    "es": "Darts Pixels 1H Tenerife — Dardos Digitales y Cerbatana",
    "fr": "Darts Pixels 1H Tenerife — Fléchettes et Sarbacane",
    "de": "Darts Pixels 1H Teneriffa — Digital-Darts & Blasrohr",
    "nl": "Darts Pixels 1U Tenerife — Digitale Darts & Blaaspijp"
  }',
  seo_description = '{
    "en": "1-hour high-tech darts experience in Tenerife! Interactive pixel board, darts or blowgun, 15+ games. Up to 6 players per lane. Book now in Playa Las Américas!",
    "es": "¡1 hora de dardos high-tech en Tenerife! Diana interactiva, dardos o cerbatana, 15+ juegos. Hasta 6 jugadores. Reserva en Playa Las Américas.",
    "fr": "1h de fléchettes high-tech à Tenerife ! Cible interactive, fléchettes ou sarbacane, 15+ jeux. Jusqu''à 6 joueurs. Réservez à Playa Las Américas !",
    "de": "1h Hightech-Darts auf Teneriffa! Interaktives Pixelboard, Darts oder Blasrohr, 15+ Spiele. Bis zu 6 Spieler. Jetzt buchen in Playa Las Américas!",
    "nl": "1u hightech darts op Tenerife! Interactief pixelbord, darts of blaaspijp, 15+ spellen. Tot 6 spelers. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'darts-pixels-1h';

-- ============================================================
-- 8. CLASSIC DARTS 30min
-- ============================================================
UPDATE offers SET
  description = '{
    "en": "Classic steel-tip darts on a professional board — the way it was meant to be played. Rent our dedicated darts lane for 30 minutes and enjoy a relaxed session with friends, family, or colleagues. Perfect for warming up before an axe throwing session, a quick competitive match, or simply unwinding with a classic pub game in Playa Las Américas. Price is per lane, not per person — bring your whole crew!",
    "es": "Dardos clásicos de punta de acero en un tablero profesional — como siempre debió jugarse. Alquila nuestra pista de dardos dedicada durante 30 minutos y disfruta de una sesión relajada con amigos, familia o compañeros. Perfecto como calentamiento antes de una sesión de hacha, un rápido partido competitivo o simplemente para pasar un buen rato. ¡Precio por pista, no por persona — trae a todo tu grupo!",
    "fr": "Fléchettes classiques pointe acier sur cible professionnelle — comme elles doivent être jouées. Louez notre piste dédiée pendant 30 minutes et profitez d''une session détendue entre amis, famille ou collègues. Parfait comme échauffement avant le lancer de hache, un match rapide ou simplement pour se détendre. Prix par piste, pas par personne — amenez tout votre groupe !",
    "de": "Klassische Steeldarts auf einem professionellen Board — so wie es sein soll. Mieten Sie unsere Dartbahn für 30 Minuten und genießen Sie eine entspannte Session mit Freunden, Familie oder Kollegen. Perfekt als Aufwärmung vor dem Axtwerfen, ein schnelles Match oder einfach zum Entspannen. Preis pro Bahn, nicht pro Person — bringen Sie Ihre ganze Crew mit!",
    "nl": "Klassieke steeltip darts op een professioneel bord — zoals het hoort. Huur onze speciale dartbaan voor 30 minuten en geniet van een ontspannen sessie met vrienden, familie of collega''s. Perfect als opwarming voor bijlwerpen, een snelle competitiewedstrijd of gewoon ontspannen. Prijs per baan, niet per persoon — neem je hele groep mee!"
  }',
  short_desc = '{
    "en": "30min professional darts lane — price per lane, not per person",
    "es": "30min pista de dardos profesional — precio por pista",
    "fr": "30min piste de fléchettes pro — prix par piste",
    "de": "30min professionelle Dartbahn — Preis pro Bahn",
    "nl": "30min professionele dartbaan — prijs per baan"
  }',
  seo_title = '{
    "en": "Classic Darts 30min Tenerife | Professional Lane Rental",
    "es": "Dardos Clásicos 30min Tenerife | Alquiler de Pista",
    "fr": "Fléchettes Classiques 30min Tenerife | Location de Piste",
    "de": "Klassische Darts 30min Teneriffa | Bahnmiete",
    "nl": "Klassieke Darts 30min Tenerife | Baanverhuur"
  }',
  seo_description = '{
    "en": "Professional darts lane rental in Tenerife — 30 minutes, steel-tip darts. Price per lane. Perfect for groups in Playa Las Américas. Book your lane now!",
    "es": "Alquiler de pista de dardos profesional en Tenerife — 30 min, dardos de punta de acero. Precio por pista. Reserva en Playa Las Américas.",
    "fr": "Location de piste de fléchettes pro à Tenerife — 30min, pointe acier. Prix par piste. Réservez à Playa Las Américas !",
    "de": "Professionelle Dartbahn-Miete auf Teneriffa — 30 Minuten, Steeldarts. Preis pro Bahn. Jetzt buchen in Playa Las Américas!",
    "nl": "Professionele dartbaan verhuur op Tenerife — 30 minuten, steeltip darts. Prijs per baan. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'classic-darts-30min';

-- ============================================================
-- 9. CLASSIC DARTS 1H
-- ============================================================
UPDATE offers SET
  description = '{
    "en": "Full hour of classic steel-tip darts on a professional board. Our dedicated darts lane gives you plenty of time for serious matches, friendly tournaments, or just casual play with your group. Bring as many friends as you want — the price is per lane, not per person. Located in the heart of Playa Las Américas, it''s the perfect complement to our axe throwing or Darts Pixels sessions.",
    "es": "Una hora completa de dardos clásicos de punta de acero en tablero profesional. Nuestra pista de dardos dedicada te da tiempo de sobra para partidos serios, torneos amistosos o juego casual con tu grupo. Trae a todos tus amigos — el precio es por pista, no por persona. El complemento perfecto a nuestras sesiones de hacha o Darts Pixels.",
    "fr": "Une heure complète de fléchettes classiques pointe acier sur cible professionnelle. Notre piste dédiée vous donne tout le temps pour des matchs sérieux, des tournois amicaux ou du jeu casual avec votre groupe. Amenez autant d''amis que vous voulez — le prix est par piste, pas par personne. Le complément parfait à nos sessions de hache ou Darts Pixels.",
    "de": "Eine volle Stunde klassische Steeldarts auf einem professionellen Board. Unsere Dartbahn gibt Ihnen genug Zeit für ernsthafte Matches, freundschaftliche Turniere oder entspanntes Spiel mit Ihrer Gruppe. Bringen Sie so viele Freunde mit wie Sie wollen — der Preis ist pro Bahn, nicht pro Person. Die perfekte Ergänzung zu unseren Axtwerf- oder Darts Pixels-Sessions.",
    "nl": "Een vol uur klassieke steeltip darts op een professioneel bord. Onze speciale dartbaan geeft je ruim de tijd voor serieuze wedstrijden, vriendschappelijke toernooien of gewoon casual spelen met je groep. Neem zoveel vrienden mee als je wilt — de prijs is per baan, niet per persoon. De perfecte aanvulling op onze bijlwerp- of Darts Pixels-sessies."
  }',
  short_desc = '{
    "en": "1h professional darts lane — price per lane, not per person",
    "es": "1h pista de dardos profesional — precio por pista",
    "fr": "1h piste de fléchettes pro — prix par piste",
    "de": "1h professionelle Dartbahn — Preis pro Bahn",
    "nl": "1u professionele dartbaan — prijs per baan"
  }',
  seo_title = '{
    "en": "Classic Darts 1H Tenerife | Professional Lane Rental",
    "es": "Dardos Clásicos 1H Tenerife | Alquiler de Pista",
    "fr": "Fléchettes Classiques 1H Tenerife | Location de Piste",
    "de": "Klassische Darts 1H Teneriffa | Bahnmiete",
    "nl": "Klassieke Darts 1U Tenerife | Baanverhuur"
  }',
  seo_description = '{
    "en": "1-hour professional darts lane in Tenerife — steel-tip darts, price per lane. Great for groups & tournaments in Playa Las Américas. Book now!",
    "es": "1 hora de pista de dardos profesional en Tenerife — precio por pista. Ideal para grupos y torneos. Reserva en Playa Las Américas.",
    "fr": "1h de piste de fléchettes pro à Tenerife — pointe acier, prix par piste. Idéal pour groupes et tournois. Réservez à Playa Las Américas !",
    "de": "1h professionelle Dartbahn auf Teneriffa — Steeldarts, Preis pro Bahn. Perfekt für Gruppen & Turniere. Jetzt buchen in Playa Las Américas!",
    "nl": "1u professionele dartbaan op Tenerife — steeltip darts, prijs per baan. Perfect voor groepen & toernooien. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'classic-darts-1h';

-- ============================================================
-- 10. TEAM BUILDING
-- ============================================================
UPDATE offers SET
  title = '{
    "en": "Team Building Experience",
    "es": "Experiencia Team Building",
    "fr": "Expérience Team Building",
    "de": "Team Building Erlebnis",
    "nl": "Team Building Ervaring"
  }',
  description = '{
    "en": "Strengthen team bonds through adrenaline-packed axe and ninja star throwing competitions! Our team building experience combines 17 interactive games with private lanes and expert guidance for an unforgettable corporate event. Whether it''s a company retreat, quarterly celebration, or just a fun outing — nothing builds camaraderie like friendly competition with axes and shurikens. Private lanes, customizable formats, and groups from 2 to 30 participants. The most original team building activity in Tenerife!",
    "es": "¡Fortalece los lazos del equipo con competiciones de lanzamiento de hacha y estrellas ninja cargadas de adrenalina! Nuestra experiencia de team building combina 17 juegos interactivos con pistas privadas y guía experta para un evento corporativo inolvidable. Ya sea un retiro de empresa, una celebración trimestral o simplemente una salida divertida — nada construye camaradería como la competición amistosa con hachas y shurikens. De 2 a 30 participantes.",
    "fr": "Renforcez les liens d''équipe avec des compétitions de lancer de hache et d''étoiles ninja chargées d''adrénaline ! Notre expérience team building combine 17 jeux interactifs avec pistes privées et encadrement expert pour un événement d''entreprise inoubliable. Que ce soit un séminaire, une célébration ou simplement une sortie fun — rien ne crée la cohésion comme la compétition amicale avec haches et shurikens. De 2 à 30 participants.",
    "de": "Stärken Sie den Teamzusammenhalt durch adrenalingeladene Axt- und Ninja-Stern-Wurfwettbewerbe! Unser Team Building kombiniert 17 interaktive Spiele mit privaten Bahnen und professioneller Anleitung für ein unvergessliches Firmenevent. Ob Betriebsausflug, Quartalsfeier oder einfach ein spaßiger Teamtag — nichts schweißt zusammen wie freundschaftlicher Wettkampf mit Äxten und Shuriken. 2 bis 30 Teilnehmer.",
    "nl": "Versterk teambanden door adrenaline-geladen bijl- en ninja-ster-werpcompetities! Onze team building ervaring combineert 17 interactieve spellen met privébanen en deskundige begeleiding voor een onvergetelijk bedrijfsevenement. Of het nu een bedrijfsuitje, kwartaalviering of gewoon een leuk dagje uit is — niets schept kameraadschap zoals vriendschappelijke competitie met bijlen en shuriken. 2 tot 30 deelnemers."
  }',
  short_desc = '{
    "en": "Corporate team building: axe + ninja competitions, 17 games, private lanes",
    "es": "Team building corporativo: hacha + ninja, 17 juegos, pistas privadas",
    "fr": "Team building : hache + ninja, 17 jeux, pistes privées",
    "de": "Firmen-Team Building: Axt + Ninja, 17 Spiele, private Bahnen",
    "nl": "Bedrijfs team building: bijl + ninja, 17 spellen, privébanen"
  }',
  seo_title = '{
    "en": "Team Building Axe Throwing Tenerife | Corporate Events",
    "es": "Team Building Lanzamiento de Hacha Tenerife | Eventos Corporativos",
    "fr": "Team Building Lancer de Hache Tenerife | Événements Entreprise",
    "de": "Team Building Axtwerfen Teneriffa | Firmenevents",
    "nl": "Team Building Bijlwerpen Tenerife | Bedrijfsevenementen"
  }',
  seo_description = '{
    "en": "Team building in Tenerife with axe & ninja star throwing! 17 interactive games, private lanes, 2-30 players. The most original corporate event in Playa Las Américas!",
    "es": "Team building en Tenerife con hacha y shuriken. 17 juegos interactivos, pistas privadas, 2-30 jugadores. ¡El evento corporativo más original de Playa Las Américas!",
    "fr": "Team building à Tenerife avec hache et shuriken ! 17 jeux interactifs, pistes privées, 2-30 joueurs. L''événement corporate le plus original de Playa Las Américas !",
    "de": "Team Building auf Teneriffa mit Axtwerfen & Shuriken! 17 interaktive Spiele, private Bahnen, 2-30 Spieler. Jetzt buchen in Playa Las Américas!",
    "nl": "Team building op Tenerife met bijlwerpen & shuriken! 17 interactieve spellen, privébanen, 2-30 spelers. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'teambuilding';

-- ============================================================
-- 11. BACHELOR / BACHELORETTE PARTY
-- ============================================================
UPDATE offers SET
  title = '{
    "en": "Bachelor / Bachelorette Party",
    "es": "Despedida de Soltero/a",
    "fr": "Enterrement de Vie de Garçon/Fille",
    "de": "Junggesellen-/Junggesellinnenabschied",
    "nl": "Vrijgezellenfeest"
  }',
  description = '{
    "en": "Make it a party they''ll never forget! 2-hour exclusive private session combining axe throwing and ninja star (shuriken) throwing with cava, snacks, and the best party vibes in Tenerife. Compete in 17 interactive games on tournament-grade targets, celebrate with bubbly between rounds, and create epic memories before the big day. Groups of 12+ get access to our private room. The most unique bachelor/bachelorette party experience in the Canary Islands!",
    "es": "¡Haz que sea una fiesta inolvidable! Sesión privada exclusiva de 2 horas combinando lanzamiento de hacha y shuriken con cava, aperitivos y el mejor ambiente de fiesta de Tenerife. Compite en 17 juegos interactivos en dianas de competición, celebra con cava entre rondas y crea recuerdos épicos antes del gran día. Grupos de 12+ acceden a nuestra sala privada. ¡La despedida más única de Canarias!",
    "fr": "Faites-en une fête inoubliable ! Session privée exclusive de 2 heures combinant lancer de hache et shuriken avec cava, snacks et la meilleure ambiance festive de Tenerife. Affrontez-vous sur 17 jeux interactifs, célébrez avec du cava entre les manches et créez des souvenirs épiques avant le grand jour. Groupes de 12+ : accès à notre salle privée. L''EVJF/EVG le plus unique des Canaries !",
    "de": "Machen Sie es zu einer unvergesslichen Party! 2-stündige exklusive Privatsession mit Axtwerfen und Shuriken, Cava, Snacks und der besten Party-Atmosphäre Teneriffas. Wetteifern Sie in 17 interaktiven Spielen, feiern Sie mit Sekt zwischen den Runden und schaffen Sie epische Erinnerungen vor dem großen Tag. Gruppen ab 12 Personen erhalten Zugang zu unserem Privatraum. Der einzigartigste JGA der Kanaren!",
    "nl": "Maak er een onvergetelijk feest van! 2 uur exclusieve privésessie met bijlwerpen en shuriken, cava, snacks en de beste feestvibe van Tenerife. Strijd in 17 interactieve spellen, vier met bubbels tussen de rondes en creëer epische herinneringen voor de grote dag. Groepen van 12+ krijgen toegang tot onze privéruimte. Het meest unieke vrijgezellenfeest van de Canarische Eilanden!"
  }',
  short_desc = '{
    "en": "2h private party: axe + shuriken + cava + snacks + 17 games",
    "es": "2h fiesta privada: hacha + shuriken + cava + aperitivos + 17 juegos",
    "fr": "2h fête privée : hache + shuriken + cava + snacks + 17 jeux",
    "de": "2h Privatparty: Axt + Shuriken + Cava + Snacks + 17 Spiele",
    "nl": "2u privéfeest: bijl + shuriken + cava + snacks + 17 spellen"
  }',
  seo_title = '{
    "en": "Bachelor Party Tenerife — Axe Throwing & Cava",
    "es": "Despedida de Soltero Tenerife — Hacha y Cava",
    "fr": "EVJF/EVG Tenerife — Lancer de Hache et Cava",
    "de": "JGA Teneriffa — Axtwerfen & Cava",
    "nl": "Vrijgezellenfeest Tenerife — Bijlwerpen & Cava"
  }',
  seo_description = '{
    "en": "Epic bachelor/bachelorette party in Tenerife! 2h private axe & shuriken throwing with cava, snacks & 17 games. Book your celebration in Playa Las Américas!",
    "es": "¡Despedida épica en Tenerife! 2h de hacha y shuriken privada con cava, aperitivos y 17 juegos. ¡Reserva tu celebración en Playa Las Américas!",
    "fr": "EVJF/EVG épique à Tenerife ! 2h de hache et shuriken privées avec cava, snacks et 17 jeux. Réservez à Playa Las Américas !",
    "de": "Epischer JGA auf Teneriffa! 2h privates Axt- & Shuriken-Werfen mit Cava, Snacks & 17 Spielen. Jetzt buchen in Playa Las Américas!",
    "nl": "Episch vrijgezellenfeest op Tenerife! 2u privé bijl- & shuriken werpen met cava, snacks & 17 spellen. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'bachelor-party';

-- ============================================================
-- 12. ADULT BIRTHDAY
-- ============================================================
UPDATE offers SET
  title = '{
    "en": "Adult Birthday Party",
    "es": "Cumpleaños Adultos",
    "fr": "Anniversaire Adultes",
    "de": "Erwachsenen-Geburtstag",
    "nl": "Volwassen Verjaardagsfeest"
  }',
  description = '{
    "en": "Celebrate your birthday Viking-style! 2-hour private session with axe and ninja star throwing, cava to toast the birthday hero, snacks, and an epic atmosphere you won''t find anywhere else in Tenerife. Compete in 17 interactive games, battle your friends in tournament mode, and make it a birthday they''ll talk about for years. Private lanes, expert coaching, and all the party vibes you need. Groups of 12+ get exclusive access to our private room!",
    "es": "¡Celebra tu cumpleaños al estilo vikingo! Sesión privada de 2 horas con lanzamiento de hacha y shuriken, cava para brindar por el cumpleañero/a, aperitivos y un ambiente épico que no encontrarás en ningún otro lugar de Tenerife. Compite en 17 juegos interactivos, desafía a tus amigos en modo torneo y haz que sea un cumpleaños del que hablarán durante años. ¡Grupos de 12+ con acceso a sala privada!",
    "fr": "Fêtez votre anniversaire façon Viking ! Session privée de 2 heures avec lancer de hache et shuriken, cava pour trinquer, snacks et une ambiance épique introuvable ailleurs à Tenerife. Affrontez-vous sur 17 jeux interactifs, défiez vos amis en mode tournoi et faites-en un anniversaire mémorable. Groupes de 12+ : accès exclusif à notre salle privée !",
    "de": "Feiern Sie Ihren Geburtstag im Wikinger-Stil! 2-stündige Privatsession mit Axtwerfen und Shuriken, Cava zum Anstoßen, Snacks und einer epischen Atmosphäre, die Sie nur bei uns finden. Wetteifern Sie in 17 interaktiven Spielen und machen Sie es zu einem unvergesslichen Geburtstag. Gruppen ab 12 Personen erhalten exklusiven Zugang zum Privatraum!",
    "nl": "Vier je verjaardag Viking-stijl! 2 uur privésessie met bijlwerpen en shuriken, cava om te proosten, snacks en een epische sfeer die je nergens anders op Tenerife vindt. Strijd in 17 interactieve spellen en maak er een onvergetelijke verjaardag van. Groepen van 12+ krijgen exclusieve toegang tot onze privéruimte!"
  }',
  short_desc = '{
    "en": "2h birthday party: axe + shuriken + cava + snacks + 17 games",
    "es": "2h cumpleaños: hacha + shuriken + cava + aperitivos + 17 juegos",
    "fr": "2h anniversaire : hache + shuriken + cava + snacks + 17 jeux",
    "de": "2h Geburtstag: Axt + Shuriken + Cava + Snacks + 17 Spiele",
    "nl": "2u verjaardag: bijl + shuriken + cava + snacks + 17 spellen"
  }',
  seo_title = '{
    "en": "Birthday Party Tenerife — Axe Throwing Celebration",
    "es": "Cumpleaños Tenerife — Celebración con Lanzamiento de Hacha",
    "fr": "Anniversaire Tenerife — Fête Lancer de Hache",
    "de": "Geburtstag Teneriffa — Axtwerfen-Feier",
    "nl": "Verjaardagsfeest Tenerife — Bijlwerpen Viering"
  }',
  seo_description = '{
    "en": "Celebrate your birthday with axe throwing in Tenerife! 2h private session with cava, snacks & 17 games. The most unique birthday party in Playa Las Américas!",
    "es": "¡Celebra tu cumpleaños con hacha en Tenerife! 2h de sesión privada con cava, aperitivos y 17 juegos. ¡Reserva en Playa Las Américas!",
    "fr": "Fêtez votre anniversaire avec le lancer de hache à Tenerife ! 2h privées avec cava, snacks et 17 jeux. Réservez à Playa Las Américas !",
    "de": "Feiern Sie Ihren Geburtstag mit Axtwerfen auf Teneriffa! 2h Privatsession mit Cava, Snacks & 17 Spielen. Jetzt buchen in Playa Las Américas!",
    "nl": "Vier je verjaardag met bijlwerpen op Tenerife! 2u privésessie met cava, snacks & 17 spellen. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'birthday-adult';

-- ============================================================
-- 13. KIDS BIRTHDAY
-- ============================================================
UPDATE offers SET
  title = '{
    "en": "Kids Birthday Party",
    "es": "Cumpleaños Infantil",
    "fr": "Anniversaire Enfants",
    "de": "Kinder-Geburtstag",
    "nl": "Kinderverjaardagsfeest"
  }',
  description = '{
    "en": "The coolest birthday party for kids in Tenerife! 2 hours of safe, supervised fun with suction-cup archery on our interactive digital targets. Kids aged 8-14 can test their aim with real bows adapted for indoor use — completely safe and incredibly fun. 9+ interactive game modes keep everyone engaged and competitive. Expert supervisors ensure safety at all times. Snacks and drinks included for a complete party experience. An unforgettable adventure that beats any traditional birthday!",
    "es": "¡La fiesta de cumpleaños más genial para niños en Tenerife! 2 horas de diversión segura y supervisada con tiro con arco de ventosa en nuestras dianas digitales interactivas. Niños de 8 a 14 años pueden probar su puntería con arcos reales adaptados para uso interior — completamente seguro e increíblemente divertido. Más de 9 modos de juego interactivos. Supervisores expertos en todo momento. Merienda y bebidas incluidas.",
    "fr": "La fête d''anniversaire la plus cool pour enfants à Tenerife ! 2 heures d''amusement sécurisé et supervisé avec tir à l''arc à ventouses sur nos cibles numériques interactives. Les enfants de 8 à 14 ans peuvent tester leur visée avec de vrais arcs adaptés pour l''intérieur — totalement sûr et incroyablement fun. Plus de 9 modes de jeu interactifs. Superviseurs experts en permanence. Goûter et boissons inclus.",
    "de": "Die coolste Kindergeburtstagsparty auf Teneriffa! 2 Stunden sicherer, betreuter Spaß mit Saugnapf-Bogenschießen auf unseren interaktiven Digitalzielen. Kinder von 8-14 Jahren können ihre Treffsicherheit mit echten, für Indoor angepassten Bögen testen — absolut sicher und unglaublich spaßig. 9+ interaktive Spielmodi. Professionelle Betreuer sorgen jederzeit für Sicherheit. Snacks und Getränke inklusive.",
    "nl": "Het coolste kinderverjaardagsfeest van Tenerife! 2 uur veilig, begeleid plezier met zuignap-boogschieten op onze interactieve digitale doelen. Kinderen van 8-14 jaar kunnen hun mikkunst testen met echte, voor indoor aangepaste bogen — volledig veilig en ongelooflijk leuk. 9+ interactieve spelmodi. Deskundige begeleiders zorgen altijd voor veiligheid. Snacks en drankjes inbegrepen."
  }',
  short_desc = '{
    "en": "2h kids party: safe archery + interactive games + snacks & drinks",
    "es": "2h fiesta infantil: tiro con arco seguro + juegos interactivos + merienda",
    "fr": "2h fête enfants : tir à l''arc sûr + jeux interactifs + goûter",
    "de": "2h Kinderparty: sicheres Bogenschießen + interaktive Spiele + Snacks",
    "nl": "2u kinderfeest: veilig boogschieten + interactieve spellen + snacks"
  }',
  seo_title = '{
    "en": "Kids Birthday Party Tenerife — Safe Archery & Games",
    "es": "Cumpleaños Infantil Tenerife — Tiro con Arco Seguro",
    "fr": "Anniversaire Enfants Tenerife — Tir à l''Arc Sécurisé",
    "de": "Kindergeburtstag Teneriffa — Sicheres Bogenschießen",
    "nl": "Kinderverjaardagsfeest Tenerife — Veilig Boogschieten"
  }',
  seo_description = '{
    "en": "Kids birthday party in Tenerife! 2h supervised archery with interactive games, snacks & drinks. Ages 8-14, safe indoor fun. Book in Playa Las Américas!",
    "es": "¡Cumpleaños infantil en Tenerife! 2h de tiro con arco supervisado con juegos interactivos, merienda y bebidas. De 8 a 14 años. Reserva en Playa Las Américas.",
    "fr": "Anniversaire enfants à Tenerife ! 2h de tir à l''arc supervisé avec jeux interactifs, goûter et boissons. De 8 à 14 ans. Réservez à Playa Las Américas !",
    "de": "Kindergeburtstag auf Teneriffa! 2h betreutes Bogenschießen mit interaktiven Spielen, Snacks & Getränken. 8-14 Jahre. Jetzt buchen in Playa Las Américas!",
    "nl": "Kinderverjaardagsfeest op Tenerife! 2u begeleid boogschieten met interactieve spellen, snacks & drankjes. 8-14 jaar. Boek nu in Playa Las Américas!"
  }'
WHERE slug = 'birthday-kids';

-- ============================================================
-- FIX DARTS PIXELS PRICING (match Shopify actual prices)
-- ============================================================

-- Fix darts-pixels-30min pricing: 10/16/21/24/28/32 EUR
DELETE FROM offer_pricing WHERE offer_id = (SELECT id FROM offers WHERE slug = 'darts-pixels-30min');
INSERT INTO offer_pricing (offer_id, players, price_cents)
SELECT id, unnest(array[1,2,3,4,5,6]), unnest(array[1000,1600,2100,2400,2800,3200])
FROM offers WHERE slug = 'darts-pixels-30min';

-- Fix darts-pixels-1h pricing: 16/26/36/46/50/60 EUR
DELETE FROM offer_pricing WHERE offer_id = (SELECT id FROM offers WHERE slug = 'darts-pixels-1h');
INSERT INTO offer_pricing (offer_id, players, price_cents)
SELECT id, unnest(array[1,2,3,4,5,6]), unnest(array[1600,2600,3600,4600,5000,6000])
FROM offers WHERE slug = 'darts-pixels-1h';
