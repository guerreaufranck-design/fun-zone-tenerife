-- Add birthday offers (kids + adult)
insert into offers (slug, title, description, short_desc, duration_minutes, min_players, max_players, lane_type, includes, age_min, sort_order) values
  ('birthday-kids',
   '{"en": "Kids Birthday Party", "es": "Cumpleaños Infantil", "fr": "Anniversaire Enfant", "de": "Kindergeburtstag", "nl": "Kinderverjaardagsfeest"}',
   '{"en": "An unforgettable birthday party for kids! Axe throwing, games, and fun in a safe supervised environment. Includes drinks and snacks for all participants.", "es": "¡Una fiesta de cumpleaños inolvidable para niños! Lanzamiento de hachas, juegos y diversión en un entorno seguro y supervisado.", "fr": "Une fête d''anniversaire inoubliable pour les enfants ! Lancer de hache, jeux et fun dans un environnement sécurisé et supervisé.", "de": "Eine unvergessliche Geburtstagsfeier für Kinder! Axtwerfen, Spiele und Spaß in einer sicheren, beaufsichtigten Umgebung.", "nl": "Een onvergetelijk verjaardagsfeest voor kinderen! Bijlwerpen, spelletjes en plezier in een veilige, begeleide omgeving."}',
   '{"en": "Kids birthday with games & snacks", "es": "Cumpleaños infantil con juegos y snacks", "fr": "Anniversaire enfant avec jeux et snacks", "de": "Kindergeburtstag mit Spielen & Snacks", "nl": "Kinderverjaardag met spelletjes & snacks"}',
   120, 6, 20, 'axe', '["drink", "snacks"]', 8, 10),

  ('birthday-adult',
   '{"en": "Adult Birthday Party", "es": "Cumpleaños Adulto", "fr": "Anniversaire Adulte", "de": "Erwachsenen-Geburtstag", "nl": "Volwassen Verjaardagsfeest"}',
   '{"en": "Celebrate your birthday Viking-style! Private session with axes, drinks, and an epic atmosphere. All 17+ interactive games included.", "es": "¡Celebra tu cumpleaños al estilo vikingo! Sesión privada con hachas, bebidas y un ambiente épico.", "fr": "Fêtez votre anniversaire façon Viking ! Session privée avec haches, boissons et une ambiance épique.", "de": "Feiern Sie Ihren Geburtstag im Wikinger-Stil! Privatsession mit Äxten, Getränken und einer epischen Atmosphäre.", "nl": "Vier je verjaardag als een Viking! Privésessie met bijlen, drankjes en een epische sfeer."}',
   '{"en": "Birthday party with drinks & epic vibes", "es": "Fiesta de cumpleaños con bebidas y ambiente épico", "fr": "Anniversaire avec boissons et ambiance épique", "de": "Geburtstagsfeier mit Getränken & epischer Stimmung", "nl": "Verjaardagsfeest met drankjes & epische sfeer"}',
   120, 6, 20, 'axe', '["drink", "snacks"]', 18, 11);

-- Birthday Kids pricing (20€/pp base)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[6,8,10,12,15,20]), unnest(array[12000,16000,20000,24000,30000,40000])
from offers where slug = 'birthday-kids';

-- Birthday Adult pricing (30€/pp base)
insert into offer_pricing (offer_id, players, price_cents)
select id, unnest(array[6,8,10,12,15,20]), unnest(array[18000,24000,30000,36000,45000,60000])
from offers where slug = 'birthday-adult';
