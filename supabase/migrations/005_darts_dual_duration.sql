-- Split darts-pixels and classic-darts into 30min and 1h offers

-- Darts Pixels 30min
INSERT INTO offers (slug, title, description, short_desc, duration_minutes, min_players, max_players, lane_type, includes, age_min, sort_order, is_active)
VALUES (
  'darts-pixels-30min',
  '{"en": "Darts Pixels – 30min", "es": "Darts Pixels – 30min", "fr": "Darts Pixels – 30min", "de": "Darts Pixels – 30min", "nl": "Darts Pixels – 30min"}',
  '{"en": "30-minute high-tech interactive darts session with digital projected targets. 15+ game modes combining traditional darts and blowgun shooting.", "es": "Sesión de 30 minutos de dardos interactivos de alta tecnología con objetivos digitales. Más de 15 modos de juego.", "fr": "Session de 30 minutes de fléchettes interactives high-tech avec cibles numériques. Plus de 15 modes de jeu.", "de": "30-minütige Hightech-Darts-Session mit digital projizierten Zielen. Über 15 Spielmodi.", "nl": "30 minuten hightech interactieve darts met digitaal geprojecteerde doelen. 15+ spelmodi."}',
  '{"en": "30min digital darts + blowgun", "es": "30min dardos digitales + cerbatana", "fr": "30min fléchettes numériques + sarbacane", "de": "30min digitale Darts + Blasrohr", "nl": "30min digitale darts + blaaspijp"}',
  30, 1, 6, 'darts_pixels', '[]', 6, 5, true
);

-- Darts Pixels 1h
INSERT INTO offers (slug, title, description, short_desc, duration_minutes, min_players, max_players, lane_type, includes, age_min, sort_order, is_active)
VALUES (
  'darts-pixels-1h',
  '{"en": "Darts Pixels – 1h", "es": "Darts Pixels – 1h", "fr": "Darts Pixels – 1h", "de": "Darts Pixels – 1h", "nl": "Darts Pixels – 1h"}',
  '{"en": "1-hour high-tech interactive darts session with digital projected targets. 15+ game modes combining traditional darts and blowgun shooting.", "es": "Sesión de 1 hora de dardos interactivos de alta tecnología con objetivos digitales. Más de 15 modos de juego.", "fr": "Session d''1 heure de fléchettes interactives high-tech avec cibles numériques. Plus de 15 modes de jeu.", "de": "1-stündige Hightech-Darts-Session mit digital projizierten Zielen. Über 15 Spielmodi.", "nl": "1 uur hightech interactieve darts met digitaal geprojecteerde doelen. 15+ spelmodi."}',
  '{"en": "1h digital darts + blowgun", "es": "1h dardos digitales + cerbatana", "fr": "1h fléchettes numériques + sarbacane", "de": "1h digitale Darts + Blasrohr", "nl": "1h digitale darts + blaaspijp"}',
  60, 1, 6, 'darts_pixels', '[]', 6, 5, true
);

-- Classic Darts 30min
INSERT INTO offers (slug, title, description, short_desc, duration_minutes, min_players, max_players, lane_type, includes, age_min, sort_order, is_active)
VALUES (
  'classic-darts-30min',
  '{"en": "Classic Darts – 30min", "es": "Dardos Clásicos – 30min", "fr": "Fléchettes Classiques – 30min", "de": "Klassische Darts – 30min", "nl": "Klassieke Darts – 30min"}',
  '{"en": "30-minute professional dartboard experience. Play on a professional darts lane – Perfect for serious players & casual fun.", "es": "Sesión de 30 minutos de dardos profesional. Juega en una pista profesional.", "fr": "Session de 30 minutes de fléchettes professionnelle. Jouez sur une piste professionnelle.", "de": "30-minütiges professionelles Dart-Erlebnis auf einer professionellen Dartbahn.", "nl": "30 minuten professionele dartervaring op een professionele dartbaan."}',
  '{"en": "30min professional darts lane", "es": "30min pista de dardos profesional", "fr": "30min piste de fléchettes professionnelle", "de": "30min professionelle Dartbahn", "nl": "30min professionele dartbaan"}',
  30, 1, 10, 'classic_darts', '[]', 6, 9, true
);

-- Classic Darts 1h
INSERT INTO offers (slug, title, description, short_desc, duration_minutes, min_players, max_players, lane_type, includes, age_min, sort_order, is_active)
VALUES (
  'classic-darts-1h',
  '{"en": "Classic Darts – 1h", "es": "Dardos Clásicos – 1h", "fr": "Fléchettes Classiques – 1h", "de": "Klassische Darts – 1h", "nl": "Klassieke Darts – 1h"}',
  '{"en": "1-hour professional dartboard experience. Play on a professional darts lane – Perfect for serious players & casual fun.", "es": "Sesión de 1 hora de dardos profesional. Juega en una pista profesional.", "fr": "Session d''1 heure de fléchettes professionnelle. Jouez sur une piste professionnelle.", "de": "1-stündiges professionelles Dart-Erlebnis auf einer professionellen Dartbahn.", "nl": "1 uur professionele dartervaring op een professionele dartbaan."}',
  '{"en": "1h professional darts lane", "es": "1h pista de dardos profesional", "fr": "1h piste de fléchettes professionnelle", "de": "1h professionelle Dartbahn", "nl": "1h professionele dartbaan"}',
  60, 1, 10, 'classic_darts', '[]', 6, 9, true
);

-- Pricing: Darts Pixels 30min (~60% of 1h prices)
-- 1h prices: 16/24/32/40/50/60 EUR → 30min: 10/14/19/24/30/36 EUR
INSERT INTO offer_pricing (offer_id, players, price_cents)
SELECT id, unnest(array[1,2,3,4,5,6]), unnest(array[1000,1400,1900,2400,3000,3600])
FROM offers WHERE slug = 'darts-pixels-30min';

-- Pricing: Darts Pixels 1h (same as old)
INSERT INTO offer_pricing (offer_id, players, price_cents)
SELECT id, unnest(array[1,2,3,4,5,6]), unnest(array[1600,2400,3200,4000,5000,6000])
FROM offers WHERE slug = 'darts-pixels-1h';

-- Pricing: Classic Darts 30min (~60% of 20€ = 12€ per lane)
INSERT INTO offer_pricing (offer_id, players, price_cents)
SELECT id, unnest(array[1]), unnest(array[1200])
FROM offers WHERE slug = 'classic-darts-30min';

-- Pricing: Classic Darts 1h (same as old: 20€ per lane)
INSERT INTO offer_pricing (offer_id, players, price_cents)
SELECT id, unnest(array[1]), unnest(array[2000])
FROM offers WHERE slug = 'classic-darts-1h';

-- Deactivate old single-duration offers
UPDATE offers SET is_active = false WHERE slug IN ('darts-pixels', 'classic-darts');

-- Set slot_interval_minutes for new darts offers (same as old ones)
UPDATE offers SET slot_interval_minutes = 30 WHERE slug IN ('darts-pixels-30min', 'darts-pixels-1h', 'classic-darts-30min', 'classic-darts-1h');
