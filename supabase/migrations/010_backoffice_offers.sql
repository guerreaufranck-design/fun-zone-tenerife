-- Insert backoffice-only offers for Get Your Guide and BonosVIP
INSERT INTO offers (slug, title, description, short_desc, duration_minutes, min_players, max_players, lane_type, includes, age_min, is_active, sort_order, backoffice_only)
VALUES
  (
    'get-your-guide-axe',
    '{"en": "Get Your Guide - Axe Throwing", "es": "Get Your Guide - Lanzamiento de Hacha", "fr": "Get Your Guide - Lancer de Hache", "de": "Get Your Guide - Axtwerfen", "nl": "Get Your Guide - Bijlwerpen"}'::jsonb,
    '{"en": "Axe throwing session booked via Get Your Guide", "es": "Sesion de lanzamiento de hacha reservada via Get Your Guide", "fr": "Session de lancer de hache reservee via Get Your Guide", "de": "Axtwurf-Session gebucht uber Get Your Guide", "nl": "Bijlwerpen sessie geboekt via Get Your Guide"}'::jsonb,
    '{"en": "Get Your Guide booking", "es": "Reserva Get Your Guide", "fr": "Reservation Get Your Guide", "de": "Get Your Guide Buchung", "nl": "Get Your Guide boeking"}'::jsonb,
    60, 1, 20, 'axe', '[]'::jsonb, 12, true, 100, true
  ),
  (
    'bonosvip-axe',
    '{"en": "BonosVIP - Axe Throwing", "es": "BonosVIP - Lanzamiento de Hacha", "fr": "BonosVIP - Lancer de Hache", "de": "BonosVIP - Axtwerfen", "nl": "BonosVIP - Bijlwerpen"}'::jsonb,
    '{"en": "Axe throwing session booked via BonosVIP", "es": "Sesion de lanzamiento de hacha reservada via BonosVIP", "fr": "Session de lancer de hache reservee via BonosVIP", "de": "Axtwurf-Session gebucht uber BonosVIP", "nl": "Bijlwerpen sessie geboekt via BonosVIP"}'::jsonb,
    '{"en": "BonosVIP booking", "es": "Reserva BonosVIP", "fr": "Reservation BonosVIP", "de": "BonosVIP Buchung", "nl": "BonosVIP boeking"}'::jsonb,
    60, 1, 20, 'axe', '[]'::jsonb, 12, true, 101, true
  );
